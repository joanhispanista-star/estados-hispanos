/* =========================================================================
   EL GLOBO HISPANO
   =========================================================================
   QUÉ ES
   La Tierra, de verdad y en relieve de fronteras, que se arrastra con el dedo
   o con el ratón y se para donde uno quiera. Los veinticuatro países y
   territorios de la Hispanidad van pintados; el resto del mundo queda en
   penumbra. Eso es toda la idea: que al abrir la portada se vea de un golpe
   cuánto planeta habla español.

   POR QUÉ CANVAS Y NO SVG
   El mapa plano (mapa.js) es SVG y así debe seguir: son treinta polígonos
   quietos y el navegador se encarga del ratón y del teclado. Aquí hay 21.000
   puntos que se vuelven a proyectar SESENTA VECES POR SEGUNDO mientras el
   dedo se mueve. En SVG eso son 21.000 nodos del DOM reescritos por
   fotograma: se arrastra a tirones en cualquier teléfono. En canvas es un
   bucle de multiplicaciones y va fluido.

   POR QUÉ NO SE USA THREE.JS NI D3-GEO
   Lo mismo que en mapa.js: hay que bajarlos de un CDN y esta plataforma
   promete abrir con doble clic y sin internet. La proyección ortográfica son
   ocho líneas de trigonometría; traer 600 KB de librería para eso sería
   pagar una dependencia por pereza.

   POR QUÉ ORTOGRÁFICA Y NO PERSPECTIVA
   Porque la ortográfica es exactamente lo que ve un ojo muy lejano: el
   contorno es un círculo perfecto y el centro no se deforma. Una perspectiva
   de cámara cercana haría más "videojuego", pero exagera el centro y achata
   los bordes, y entonces el tamaño de un país deja de ser comparable.

   =========================================================================
   LA PARTE DIFÍCIL: QUÉ HACER CON LA MITAD QUE NO SE VE
   =========================================================================
   Media esfera está siempre de espaldas. Un país partido por el borde (medio
   visible, medio detrás) no se puede dibujar sin decidir algo, y las dos
   salidas ingenuas se ven feas:

     - Tirar los puntos de atrás y cerrar la figura: sale una cuerda recta
       cruzando el globo por donde debería estar el borde curvo.
     - Dibujar todo igual: los puntos de atrás se proyectan ENCIMA de los de
       delante y el país aparece reflejado sobre sí mismo.

   Lo que se hace aquí: cada punto de la cara oculta se EMPUJA hasta el borde
   del disco conservando su ángulo, y todo el dibujo se recorta al disco del
   globo. Así la parte oculta se aplasta contra el canto —que es justo lo que
   hace de verdad una silueta— y nada se sale. Un país entero de espaldas no
   se dibuja: si no, dejaría una astilla pegada al borde.

   DEPENDE DE mapa.js para la ficha flotante que sale al pulsar un país. Es a
   propósito: la ficha es la misma en el globo y en el mapa plano, y tener dos
   copias del mismo cuadro es tener una desactualizada.
   Necesita además mundo.js (las fronteras) y banderas.js (la tira de abajo).
   ========================================================================= */

window.EH = window.EH || {};

EH.globo = (function () {
  'use strict';

  var RAD = Math.PI / 180;

  /* El color dice el estatus, igual que los puntos del mapa plano. Se mantiene
     el mismo código de colores a propósito: quien ya leyó la leyenda del mapa
     no tiene que aprenderla otra vez. */
  var COLOR = {
    soberano:   { r: '#d9a441', b: '#f6d79a' },
    territorio: { r: '#c98a1e', b: '#ecc274' },
    disputado:  { r: '#b51d33', b: '#f07d8f' },
    herencia:   { r: '#3a6ea5', b: '#8fc0e8' },
    diaspora:   { r: '#33608f', b: '#86b6e0' }
  };
  var AJENO = { r: '#32202a', b: '#4e333c' };   /* el resto del mundo */

  /* --------------------------------------------------------------------
     PREPARAR LAS FRONTERAS (una sola vez por carga de página)
     --------------------------------------------------------------------
     De [lon,lat] a vector unitario (x,y,z). Se hace UNA VEZ y se guarda,
     porque el seno y el coseno de la latitud no cambian nunca: lo que cambia
     al girar es la matriz, no el país. Sin esto habría 42.000 llamadas a
     Math.cos por fotograma y el globo iría a tirones en un teléfono. */
  var paises = null;

  function preparar() {
    if (paises || !EH.MUNDO) return;
    paises = EH.MUNDO.map(function (p) {
      return {
        id: p.id,
        nombre: p.n,
        hispano: !!p.h,
        piezas: p.p.map(function (plano) {
          var n = plano.length / 2;
          var v = new Float64Array(n * 3);
          for (var i = 0; i < n; i++) {
            var lon = plano[i * 2] * RAD, lat = plano[i * 2 + 1] * RAD;
            var cl = Math.cos(lat);
            v[i * 3]     = cl * Math.cos(lon);
            v[i * 3 + 1] = cl * Math.sin(lon);
            v[i * 3 + 2] = Math.sin(lat);
          }
          return { v: v, n: n, s: new Float32Array(n * 2) };
        })
      };
    });
  }

  /* --------------------------------------------------------------------
     RETÍCULA
     --------------------------------------------------------------------
     Meridianos y paralelos cada 30°. No es adorno: sin ninguna línea, una
     esfera lisa que gira parece una mancha que late. La retícula es lo que
     hace que el ojo entienda que ESTÁ GIRANDO y no cambiando de forma. */
  function construirRetícula() {
    var lineas = [], lon, lat, p;
    for (lon = -180; lon < 180; lon += 30) {
      p = [];
      for (lat = -90; lat <= 90; lat += 3) p.push([lon, lat]);
      lineas.push(p);
    }
    for (lat = -60; lat <= 60; lat += 30) {
      p = [];
      for (lon = -180; lon <= 180; lon += 3) p.push([lon, lat]);
      lineas.push(p);
    }
    return lineas.map(function (pts) {
      var v = new Float64Array(pts.length * 3);
      for (var i = 0; i < pts.length; i++) {
        var la = pts[i][1] * RAD, lo = pts[i][0] * RAD, cl = Math.cos(la);
        v[i * 3] = cl * Math.cos(lo);
        v[i * 3 + 1] = cl * Math.sin(lo);
        v[i * 3 + 2] = Math.sin(la);
      }
      return { v: v, n: pts.length };
    });
  }
  var RETICULA = null;

  /* --------------------------------------------------------------------
     UNA INSTANCIA DE GLOBO
     -------------------------------------------------------------------- */
  function crear(contenedor, naciones, opciones) {
    opciones = opciones || {};
    preparar();
    if (!RETICULA) RETICULA = construirRetícula();

    var porId = {};
    naciones.forEach(function (n) { porId[n.id] = n; });

    /* Mirando al Atlántico hispano: España arriba a la derecha y toda América
       a la izquierda. Es el único encuadre donde se ven las dos orillas a la
       vez, que es de lo que habla el movimiento. */
    var giroLon = -52, giroLat = 12, escala = 1;

    var quieto = !window.matchMedia || !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var girando = quieto && opciones.girar !== false;
    var velocidad = 0;          /* grados por fotograma, para la inercia */
    var arrastrando = false, movido = false;
    var sobre = null, elegido = opciones.destacar || null;
    var animando = null;        /* animación de "ir a un país" en curso */
    var pendiente = false;

    var lienzo = document.createElement('canvas');
    lienzo.className = 'eh-globo__lienzo';
    lienzo.setAttribute('role', 'img');
    lienzo.setAttribute('aria-label',
      'Globo terráqueo giratorio con las ' + naciones.length + ' naciones y territorios de la Hispanidad resaltados.');

    var ctx = lienzo.getContext('2d');
    var An = 0, Al = 0, cx = 0, cy = 0, R = 0, dpr = 1;

    function medir() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      An = contenedor.clientWidth || 640;
      /* Cuadrado, pero con techo: en un monitor ancho un globo de 1.200 px de
         alto obliga a desplazar la página para ver la portada entera. */
      Al = Math.min(An, 620);
      lienzo.width = Math.round(An * dpr);
      lienzo.height = Math.round(Al * dpr);
      lienzo.style.width = An + 'px';
      lienzo.style.height = Al + 'px';
      cx = An / 2; cy = Al / 2;
      R = Math.min(An, Al) * 0.455;
    }

    /* ---------- proyección ---------- */
    var mat = new Float64Array(9);
    function matriz() {
      var a = giroLon * RAD, b = giroLat * RAD;
      var ca = Math.cos(a), sa = Math.sin(a), cb = Math.cos(b), sb = Math.sin(b);
      /* Fila 0 = profundidad (positiva hacia quien mira),
         fila 1 = derecha en pantalla, fila 2 = arriba en pantalla. */
      mat[0] = ca * cb;  mat[1] = sa * cb;  mat[2] = sb;
      mat[3] = -sa;      mat[4] = ca;       mat[5] = 0;
      mat[6] = -ca * sb; mat[7] = -sa * sb; mat[8] = cb;
    }

    /* Proyecta una pieza en su Float32Array y devuelve cuántos puntos quedaron
       de cara. Si devuelve 0, la pieza está entera de espaldas y no se dibuja. */
    function proyectar(pieza) {
      var v = pieza.v, s = pieza.s, n = pieza.n, r = R * escala, vistos = 0;
      var m0 = mat[0], m1 = mat[1], m2 = mat[2], m3 = mat[3], m4 = mat[4],
          m6 = mat[6], m7 = mat[7], m8 = mat[8];
      for (var i = 0; i < n; i++) {
        var x = v[i * 3], y = v[i * 3 + 1], z = v[i * 3 + 2];
        var p = m0 * x + m1 * y + m2 * z;         /* profundidad */
        var d = m3 * x + m4 * y;                  /* derecha  (m5 = 0) */
        var a = m6 * x + m7 * y + m8 * z;         /* arriba */
        if (p >= 0) {
          vistos++;
        } else {
          /* De espaldas: se empuja al canto conservando el ángulo. */
          var mg = Math.sqrt(d * d + a * a);
          if (mg < 1e-9) { d = 0; a = 1; mg = 1; }   /* el punto antipodal exacto */
          d /= mg; a /= mg;
        }
        s[i * 2] = cx + r * d;
        s[i * 2 + 1] = cy - r * a;
      }
      return vistos;
    }

    function puntoEn(lon, lat) {
      var la = lat * RAD, lo = lon * RAD, cl = Math.cos(la);
      var x = cl * Math.cos(lo), y = cl * Math.sin(lo), z = Math.sin(la);
      var p = mat[0] * x + mat[1] * y + mat[2] * z;
      var d = mat[3] * x + mat[4] * y;
      var a = mat[6] * x + mat[7] * y + mat[8] * z;
      var r = R * escala;
      return { x: cx + r * d, y: cy - r * a, visible: p > 0 };
    }

    /* ---------- dibujo ---------- */
    function trazar(pieza) {
      var s = pieza.s, n = pieza.n;
      ctx.moveTo(s[0], s[1]);
      for (var i = 1; i < n; i++) ctx.lineTo(s[i * 2], s[i * 2 + 1]);
      ctx.closePath();
    }

    function pintar() {
      pendiente = false;
      matriz();
      var r = R * escala;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, An, Al);

      /* El halo de atmósfera va FUERA del recorte: si se dibujara dentro, el
         propio recorte se lo comería y el globo quedaría pegado al fondo como
         una pegatina. */
      var halo = ctx.createRadialGradient(cx, cy, r * 0.97, cx, cy, r * 1.14);
      halo.addColorStop(0, 'rgba(217,164,65,.22)');
      halo.addColorStop(1, 'rgba(217,164,65,0)');
      ctx.fillStyle = halo;
      ctx.beginPath();
      ctx.arc(cx, cy, r * 1.14, 0, 6.2832);
      ctx.fill();

      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, 6.2832);
      ctx.clip();

      /* Océano. El degradado no está centrado: la luz entra por arriba a la
         izquierda y eso es lo único que hace que un círculo parezca una bola. */
      var mar = ctx.createRadialGradient(cx - r * 0.32, cy - r * 0.38, r * 0.08, cx, cy, r * 1.08);
      mar.addColorStop(0, '#24455f');
      mar.addColorStop(0.55, '#15283a');
      mar.addColorStop(1, '#070d15');
      ctx.fillStyle = mar;
      ctx.fillRect(0, 0, An, Al);

      /* Retícula. Aquí NO se empujan al canto los puntos ocultos: son líneas
         abiertas, no figuras, así que basta con cortar el trazo y seguir al
         otro lado. Empujarlas dejaría arcos falsos pegados al borde. */
      ctx.strokeStyle = 'rgba(217,164,65,.09)';
      ctx.lineWidth = 0.6;
      ctx.beginPath();
      RETICULA.forEach(function (l) {
        var roto = true;
        for (var i = 0; i < l.n; i++) {
          var x = l.v[i * 3], y = l.v[i * 3 + 1], z = l.v[i * 3 + 2];
          if (mat[0] * x + mat[1] * y + mat[2] * z <= 0) { roto = true; continue; }
          var px = cx + r * (mat[3] * x + mat[4] * y);
          var py = cy - r * (mat[6] * x + mat[7] * y + mat[8] * z);
          if (roto) { ctx.moveTo(px, py); roto = false; } else ctx.lineTo(px, py);
        }
      });
      ctx.stroke();

      /* El ecuador, más marcado: la mitad de las naciones hispanas están a
         menos de quince grados de él y eso se ve de un vistazo. */
      ctx.strokeStyle = 'rgba(217,164,65,.20)';
      ctx.beginPath();
      var rotoEc = true;
      for (var g = -180; g <= 180; g += 3) {
        var lo = g * RAD, xe = Math.cos(lo), ye = Math.sin(lo);
        if (mat[0] * xe + mat[1] * ye <= 0) { rotoEc = true; continue; }
        var ex = cx + r * (mat[3] * xe + mat[4] * ye);
        var ey = cy - r * (mat[6] * xe + mat[7] * ye);
        if (rotoEc) { ctx.moveTo(ex, ey); rotoEc = false; } else ctx.lineTo(ex, ey);
      }
      ctx.stroke();

      /* Primero el mundo ajeno, en penumbra, todo en un solo trazo: son 155
         países y pintarlos de uno en uno cuesta 310 cambios de estado del
         contexto por fotograma. */
      ctx.beginPath();
      var i2, j2;
      for (i2 = 0; i2 < paises.length; i2++) {
        var pa = paises[i2];
        if (pa.hispano) continue;
        for (j2 = 0; j2 < pa.piezas.length; j2++) {
          if (proyectar(pa.piezas[j2])) trazar(pa.piezas[j2]);
        }
      }
      ctx.fillStyle = AJENO.r;
      ctx.fill();
      ctx.strokeStyle = AJENO.b;
      ctx.lineWidth = 0.5;
      ctx.stroke();

      /* Y encima los nuestros, uno a uno porque cada uno lleva su color. */
      for (i2 = 0; i2 < paises.length; i2++) {
        var ph = paises[i2];
        if (!ph.hispano) continue;
        var nac = porId[ph.id];
        if (!nac) continue;                    /* filtrado fuera por quien llama */
        var col = COLOR[nac.estatus] || COLOR.soberano;
        var activo = (sobre === ph.id || elegido === ph.id);

        ctx.beginPath();
        var algo = false;
        for (j2 = 0; j2 < ph.piezas.length; j2++) {
          if (proyectar(ph.piezas[j2])) { trazar(ph.piezas[j2]); algo = true; }
        }
        if (!algo) continue;
        ctx.fillStyle = activo ? col.b : col.r;
        ctx.fill();
        ctx.strokeStyle = activo ? '#fff6e6' : col.b;
        ctx.lineWidth = activo ? 1.6 : 0.8;
        ctx.stroke();
      }

      /* Un punto en la capital de cada nación. No es decorativo: Puerto Rico,
         Guinea Ecuatorial y El Salvador son tan pequeños en una esfera de 600
         píxeles que sin el punto no hay nada que pulsar. */
      naciones.forEach(function (n) {
        var q = puntoEn(n.lon, n.lat);
        if (!q.visible) return;
        var col = COLOR[n.estatus] || COLOR.soberano;
        var act = (sobre === n.id || elegido === n.id);
        ctx.beginPath();
        ctx.arc(q.x, q.y, act ? 4.6 : 2.6, 0, 6.2832);
        ctx.fillStyle = act ? '#fff6e6' : col.b;
        ctx.fill();
      });

      ctx.restore();

      /* El canto. Dibujado al final y por fuera del recorte, porque un trazo
         sobre el borde del recorte sale cortado a la mitad de su grosor. */
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, 6.2832);
      ctx.strokeStyle = 'rgba(240,196,107,.42)';
      ctx.lineWidth = 1.1;
      ctx.stroke();

      /* El nombre del país bajo el cursor. Va sobre el lienzo y no en un <div>
         para que no cambie el tamaño del contenedor mientras uno arrastra. */
      var destino = sobre || elegido;
      if (destino && porId[destino]) {
        var nd = porId[destino];
        var pq = puntoEn(nd.lon, nd.lat);
        if (pq.visible) {
          ctx.font = '600 13px ui-sans-serif,system-ui,sans-serif';
          var w = ctx.measureText(nd.nombre).width;
          var tx = Math.min(Math.max(pq.x + 10, 4), An - w - 14);
          var ty = Math.min(Math.max(pq.y - 12, 18), Al - 6);
          ctx.fillStyle = 'rgba(10,6,8,.82)';
          ctx.beginPath();
          /* Sin roundRect: Safari no lo tuvo hasta 2023 y aquí no hay
             transpilador que lo arregle. */
          ctx.rect(tx - 5, ty - 13, w + 10, 19);
          ctx.fill();
          ctx.fillStyle = '#f6d79a';
          ctx.fillText(nd.nombre, tx, ty);
        }
      }
    }

    function repintar() {
      if (pendiente) return;
      pendiente = true;
      requestAnimationFrame(pintar);
    }

    /* ---------- el latido ---------- */
    function latido() {
      if (animando) {
        var t = Math.min((Date.now() - animando.t0) / animando.ms, 1);
        var e = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;   /* suave en los dos extremos */
        giroLon = animando.lon0 + animando.dLon * e;
        giroLat = animando.lat0 + animando.dLat * e;
        escala = animando.esc0 + animando.dEsc * e;
        if (t >= 1) animando = null;
        pintar();
      } else if (arrastrando) {
        /* mientras se arrastra pinta el propio manejador del puntero */
      } else if (Math.abs(velocidad) > 0.004) {
        giroLon += velocidad;
        velocidad *= 0.955;                 /* frenada: el globo pesa */
        pintar();
      } else if (girando) {
        giroLon += 0.085;                   /* una vuelta en unos 70 segundos */
        pintar();
      }
      requestAnimationFrame(latido);
    }

    /* ---------- a quién se ha pulsado ----------
       Prueba del rayo sobre los puntos YA PROYECTADOS, no sobre Path2D con
       isPointInPath: la coordenada que espera isPointInPath depende de la
       transformación del contexto y aquí hay un factor de densidad de píxeles
       puesto. Dos sistemas de coordenadas y un bug que solo aparece en
       pantallas Retina; esto no tiene ese problema. */
    function dentro(pieza, px, py) {
      var s = pieza.s, n = pieza.n, dentroDe = false;
      for (var i = 0, j = n - 1; i < n; j = i++) {
        var xi = s[i * 2], yi = s[i * 2 + 1], xj = s[j * 2], yj = s[j * 2 + 1];
        if (((yi > py) !== (yj > py)) && (px < (xj - xi) * (py - yi) / (yj - yi) + xi)) {
          dentroDe = !dentroDe;
        }
      }
      return dentroDe;
    }

    function quienEn(px, py) {
      var r = R * escala;
      if ((px - cx) * (px - cx) + (py - cy) * (py - cy) > r * r) return null;

      /* Primero los puntos de capital, y con holhura generosa: son el único
         asidero de los países que miden tres píxeles. */
      var mejor = null, mejorD = 196;
      naciones.forEach(function (n) {
        var q = puntoEn(n.lon, n.lat);
        if (!q.visible) return;
        var d = (q.x - px) * (q.x - px) + (q.y - py) * (q.y - py);
        if (d < mejorD) { mejorD = d; mejor = n.id; }
      });
      if (mejor) return mejor;

      for (var i = 0; i < paises.length; i++) {
        var p = paises[i];
        if (!p.hispano || !porId[p.id]) continue;
        for (var j = 0; j < p.piezas.length; j++) {
          if (dentro(p.piezas[j], px, py)) return p.id;
        }
      }
      return null;
    }

    function local(ev) {
      var c = lienzo.getBoundingClientRect();
      return { x: ev.clientX - c.left, y: ev.clientY - c.top };
    }

    /* ---------- girar con el dedo o el ratón ---------- */
    var ult = null, punteros = {}, pinza = null;

    lienzo.addEventListener('pointerdown', function (ev) {
      punteros[ev.pointerId] = local(ev);
      var ids = Object.keys(punteros);
      if (ids.length === 2) {
        var a = punteros[ids[0]], b = punteros[ids[1]];
        pinza = { d: Math.hypot(a.x - b.x, a.y - b.y), esc: escala };
        arrastrando = false;
        return;
      }
      arrastrando = true; movido = false; animando = null;
      velocidad = 0;
      ult = local(ev);
      if (lienzo.setPointerCapture) { try { lienzo.setPointerCapture(ev.pointerId); } catch (e) {} }
    });

    lienzo.addEventListener('pointermove', function (ev) {
      if (punteros[ev.pointerId]) punteros[ev.pointerId] = local(ev);
      var ids = Object.keys(punteros);

      if (pinza && ids.length >= 2) {
        var a = punteros[ids[0]], b = punteros[ids[1]];
        var d = Math.hypot(a.x - b.x, a.y - b.y);
        if (pinza.d > 8) escala = Math.min(Math.max(pinza.esc * d / pinza.d, 1), 4);
        repintar();
        return;
      }

      var p = local(ev);
      if (arrastrando && ult) {
        /* El giro se divide por la escala: con el globo ampliado, el mismo
           desplazamiento del dedo debe recorrer menos grados o resulta
           imposible apuntar a nada. */
        var k = 0.34 / escala;
        var dLon = -(p.x - ult.x) * k;
        giroLon += dLon;
        giroLat = Math.min(Math.max(giroLat + (p.y - ult.y) * k, -88), 88);
        velocidad = dLon;
        if (Math.abs(p.x - ult.x) + Math.abs(p.y - ult.y) > 3) movido = true;
        ult = p;
        girando = false;
        pintar();
        return;
      }

      /* Sin arrastrar: resaltar lo que hay debajo. Solo en punteros finos; en
         un dedo no existe "pasar por encima" y el resaltado se quedaría
         pegado al último sitio tocado. */
      if (ev.pointerType === 'mouse') {
        var q = quienEn(p.x, p.y);
        if (q !== sobre) {
          sobre = q;
          lienzo.style.cursor = q ? 'pointer' : 'grab';
          repintar();
        }
      }
    });

    function soltar(ev) {
      delete punteros[ev.pointerId];
      if (Object.keys(punteros).length < 2) pinza = null;
      if (!arrastrando) return;
      arrastrando = false; ult = null;

      if (!movido) {
        var p = local(ev);
        var q = quienEn(p.x, p.y);
        if (q) {
          elegido = q;
          velocidad = 0;
          if (opciones.alPulsar) opciones.alPulsar(porId[q], puntoEn(porId[q].lon, porId[q].lat));
        }
        repintar();
      }
    }
    lienzo.addEventListener('pointerup', soltar);
    lienzo.addEventListener('pointercancel', soltar);
    lienzo.addEventListener('pointerleave', function (ev) {
      delete punteros[ev.pointerId];
      if (ev.pointerType === 'mouse' && sobre && !arrastrando) { sobre = null; repintar(); }
    });

    /* La rueda del ratón NO se toca: en una portada, secuestrar el scroll para
       ampliar el globo deja al visitante atrapado a media página. Se amplía
       con los botones y con la pinza, que son gestos que se eligen. */

    /* ---------- teclado ----------
       Un lienzo no se puede recorrer con el tabulador: para quien no usa ratón,
       un globo en canvas es un cuadro vacío. Las flechas lo giran y la tira de
       banderas de abajo son botones de verdad. */
    lienzo.tabIndex = 0;
    lienzo.addEventListener('keydown', function (ev) {
      var paso = ev.shiftKey ? 15 : 5, usada = true;
      if (ev.key === 'ArrowLeft') giroLon -= paso;
      else if (ev.key === 'ArrowRight') giroLon += paso;
      else if (ev.key === 'ArrowUp') giroLat = Math.min(giroLat + paso, 88);
      else if (ev.key === 'ArrowDown') giroLat = Math.max(giroLat - paso, -88);
      else if (ev.key === '+' || ev.key === '=') escala = Math.min(escala * 1.25, 4);
      else if (ev.key === '-' || ev.key === '_') escala = Math.max(escala / 1.25, 1);
      else usada = false;
      if (usada) { ev.preventDefault(); girando = false; animando = null; velocidad = 0; pintar(); }
    });

    /* ---------- ir a un país ---------- */
    function irA(id, abrirFicha) {
      var n = porId[id];
      if (!n) return;
      girando = false; velocidad = 0; elegido = id;
      /* Por el lado corto: de Filipinas a México son 170° hacia el este o 190°
         hacia el oeste, y el globo debe ir por donde iría una mano. */
      var dLon = ((-n.lon) - giroLon + 540) % 360 - 180;
      animando = {
        t0: Date.now(), ms: 900,
        lon0: giroLon, dLon: dLon,
        lat0: giroLat, dLat: n.lat * 0.8 - giroLat,
        esc0: escala, dEsc: Math.max(1.5, escala) - escala
      };
      if (abrirFicha && opciones.alPulsar) {
        window.setTimeout(function () {
          if (porId[id]) opciones.alPulsar(porId[id], puntoEn(porId[id].lon, porId[id].lat));
        }, 940);
      }
    }

    /* ---------- montar ---------- */
    contenedor.classList.add('eh-globo');
    contenedor.innerHTML = '';

    var escena = document.createElement('div');
    escena.className = 'eh-globo__escena';
    escena.appendChild(lienzo);

    var mandos = document.createElement('div');
    mandos.className = 'eh-globo__mandos';
    mandos.innerHTML =
      '<button type="button" data-a="mas" aria-label="Acercar">+</button>' +
      '<button type="button" data-a="menos" aria-label="Alejar">−</button>' +
      '<button type="button" data-a="girar" aria-label="Girar o parar el globo" class="on">⏸</button>';
    escena.appendChild(mandos);
    contenedor.appendChild(escena);

    mandos.addEventListener('click', function (ev) {
      var b = ev.target.closest('button');
      if (!b) return;
      var a = b.getAttribute('data-a');
      animando = null;
      if (a === 'mas') escala = Math.min(escala * 1.4, 4);
      if (a === 'menos') escala = Math.max(escala / 1.4, 1);
      if (a === 'girar') {
        girando = !girando;
        velocidad = 0;
        b.textContent = girando ? '⏸' : '▶';
        b.classList.toggle('on', girando);
      }
      pintar();
    });

    /* La tira de banderas. Dos trabajos a la vez: es lo bonito de la pantalla
       y es el único camino con teclado hasta cada país. */
    if (opciones.tira !== false) {
      var tira = document.createElement('div');
      tira.className = 'eh-globo__tira';
      tira.setAttribute('role', 'group');
      tira.setAttribute('aria-label', 'Ir a una nación de la Hispanidad');
      tira.innerHTML = naciones.map(function (n) {
        return '<button type="button" class="eh-globo__bandera" data-id="' + EH.escapar(n.id) + '" ' +
          'title="' + EH.escapar(n.nombre) + '">' +
          (EH.banderas ? EH.banderas.svg(n.id, 30) : '') +
          '<span>' + EH.escapar(n.nombre) + '</span></button>';
      }).join('');
      tira.addEventListener('click', function (ev) {
        var b = ev.target.closest('.eh-globo__bandera');
        if (b) irA(b.getAttribute('data-id'), true);
      });
      contenedor.appendChild(tira);
    }

    if (opciones.leyenda !== false) {
      var ley = document.createElement('div');
      ley.className = 'eh-mapa__leyenda';
      ley.innerHTML =
        '<span><i class="eh-mapa__punto" style="background:#d9a441"></i> Estado soberano</span>' +
        '<span><i class="eh-mapa__punto" style="background:#c98a1e"></i> Territorio</span>' +
        '<span><i class="eh-mapa__punto" style="background:#b51d33"></i> Disputado</span>' +
        '<span><i class="eh-mapa__punto" style="background:#3a6ea5"></i> Herencia y diáspora</span>' +
        '<span>Arrastra para girar. Pulsa un país para su ficha.</span>';
      contenedor.appendChild(ley);
    }

    medir();
    pintar();
    requestAnimationFrame(latido);

    /* Un solo observador para el contenedor: con el evento resize de la
       ventana no se enteraría de que una columna de al lado se ha plegado. */
    if (window.ResizeObserver) {
      new ResizeObserver(function () { medir(); repintar(); }).observe(contenedor);
    } else {
      window.addEventListener('resize', function () { medir(); repintar(); });
    }

    return { irA: irA, elegir: function (id) { elegido = id; repintar(); } };
  }

  return {
    /* Misma firma que EH.mapa.pintar, para que cambiar de mapa plano a globo
       sea cambiar una palabra en la página y nada más. */
    pintar: function (contenedor, naciones, opciones) {
      if (!contenedor) return null;
      if (!EH.MUNDO) {
        /* Antes esto no decía nada y el hueco del globo quedaba en negro: una
           portada con un agujero y ninguna explicación. */
        contenedor.innerHTML = '<p class="eh-tabla__vacio">No se pudieron cargar las fronteras del mundo ' +
          '(falta <code>activos/js/mundo.js</code>).</p>';
        return null;
      }
      return crear(contenedor, naciones, opciones || {});
    },
    ficha: function (contenedor, nacion, punto) {
      /* La ficha es la de mapa.js. El globo solo le dice dónde ponerla: le
         pasa un objeto que finge ser un elemento con posición, porque es lo
         único que esa función lee. */
      if (!EH.mapa || !EH.mapa.ficha) return;
      var c = contenedor.getBoundingClientRect();
      EH.mapa.ficha(contenedor, nacion, {
        getBoundingClientRect: function () {
          return { left: c.left + (punto ? punto.x : c.width / 2), top: c.top + (punto ? punto.y : 40) };
        }
      });
    }
  };
})();
