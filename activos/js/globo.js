/* =========================================================================
   EL GLOBO HISPANO
   =========================================================================
   QUÉ ES
   La Tierra, que se arrastra con el dedo y se amplía hasta ver los pueblos.
   Encima van capas: los veinticuatro, el mar que les corresponde, las ocho
   causas territoriales, los estados de Estados Unidos coloreados por su
   población hispana, las ciudades con su historia y una línea del tiempo.

   POR QUÉ CANVAS Y NO SVG
   El mapa plano (mapa.js) es SVG y así debe seguir: treinta polígonos quietos.
   Aquí hay 25.000 puntos que se vuelven a proyectar SESENTA VECES POR SEGUNDO
   mientras el dedo se mueve. En SVG son 25.000 nodos del DOM reescritos por
   fotograma: se arrastra a tirones en cualquier teléfono.

   POR QUÉ NO SE USA THREE.JS NI D3-GEO
   Hay que bajarlos de un CDN y esta plataforma promete abrir con doble clic y
   sin internet. La proyección ortográfica son ocho líneas de trigonometría.

   =========================================================================
   LA PARTE DIFÍCIL: QUÉ HACER CON LA MITAD QUE NO SE VE
   =========================================================================
   Media esfera está siempre de espaldas. Un país partido por el borde no se
   puede dibujar sin decidir algo, y las dos salidas ingenuas se ven feas:
   cerrar la figura deja una cuerda recta cruzando el globo, y dibujarlo todo
   igual proyecta el país reflejado sobre sí mismo.

   Lo que se hace aquí: cada punto de la cara oculta se EMPUJA hasta el canto
   del disco conservando su ángulo, y todo se recorta al disco. Así la parte
   oculta se aplasta contra el borde, que es lo que hace de verdad una
   silueta. Un país entero de espaldas no se dibuja: dejaría una astilla.

   =========================================================================
   LO QUE ESTE MAPA NO HACE, Y LO DICE EN PANTALLA
   =========================================================================
   - La línea del tiempo NO dibuja fronteras históricas. Pinta los territorios
     de hoy que en cada época estaban bajo gobierno hispano. Dibujar la
     frontera exacta de 1680 sería inventarla, y el panel de la época lo
     advierte con todas las letras.
   - La banda azul del mar NO es la zona económica exclusiva real: es una
     franja aproximada de 200 millas náuticas desde la costa. Las zonas reales
     se recortan donde dos países se solapan, y eso aquí no se dibuja.
   - El color de una causa territorial NO dice «esto es nuestro». Dice «esto
     está en disputa y el Gran Plan explica las dos posturas».

   DEPENDE DE: mundo.js, estados-eeuu.js, ciudades.js, causas.js,
   contenido-mapa.js (los textos), banderas.js y mapa.js (la ficha de nación,
   que es la misma del mapa plano: una sola copia de ese cuadro).
   ========================================================================= */

window.EH = window.EH || {};

EH.globo = (function () {
  'use strict';

  var RAD = Math.PI / 180;
  var TAU = Math.PI * 2;

  /* 200 millas náuticas en radianes sobre la esfera. Es la anchura de la zona
     económica exclusiva: 370,4 km sobre un radio terrestre de 6.371 km. De
     aquí sale el grosor de la banda azul, y por eso la banda se estrecha sola
     cerca del canto del globo, como debe. */
  var MILLAS200 = 370.4 / 6371;

  /* El color dice el estatus, el mismo código que la leyenda del mapa plano:
     quien ya la leyó no tiene que aprenderla otra vez. */
  var COLOR = {
    soberano:   { r: '#d9a441', b: '#f6d79a' },
    territorio: { r: '#c98a1e', b: '#ecc274' },
    disputado:  { r: '#b51d33', b: '#f07d8f' },
    herencia:   { r: '#3a6ea5', b: '#8fc0e8' },
    diaspora:   { r: '#33608f', b: '#86b6e0' }
  };
  var AJENO = { r: '#32202a', b: '#4e333c' };
  var APAGADO = { r: '#241a20', b: '#3a2a31' };   /* fuera de la época elegida */

  /* La diáspora sefardí, por código ISO. NO es una alianza con ningún Estado:
     es el mapa de donde vive la otra lengua hispánica, el judeoespañol, que
     salió de Sefarad en 1492 y se habló cinco siglos en estas costas.
     Se marca por código y no por nombre porque «Turquía» o «Turquia» no es una
     llave fiable y un acento perdido borraría un país del mapa.
     El porqué de que sea esto y no otra cosa está en contenido-mapa.js. */
  var SEFARDI = ['TUR', 'GRC', 'BGR', 'ISR', 'MAR', 'MKD', 'BIH', 'SRB'];
  /* Estaban tambien Francia e Italia y se quitaron por dos razones. La buena:
     el judeoespanol no se hablo alli cinco siglos; hay comunidad sefardi, que
     es otra cosa, y mezclarlas desdibuja justo lo que la capa quiere ensenar.
     La que lo hizo evidente: Natural Earth mete la Guayana Francesa dentro de
     Francia, asi que marcar Francia pintaba de morado un trozo de Suramerica
     pegado al Esequibo. Un error de un solo codigo ISO, visible al instante. */

  /* --------------------------------------------------------------------
     PREPARAR (una sola vez por carga de página)
     --------------------------------------------------------------------
     De [lon,lat] a vector unitario (x,y,z). UNA VEZ, porque el seno y el
     coseno de una latitud no cambian nunca: lo que cambia al girar es la
     matriz, no el país. Sin esto serían 50.000 llamadas a Math.cos por
     fotograma y el globo iría a tirones en cualquier teléfono. */
  var paises = null, estados = null, causas = null, ciudades = null, RETICULA = null;

  function aPieza(plano) {
    var n = plano.length / 2, v = new Float64Array(n * 3), i, lon, lat, cl;
    for (i = 0; i < n; i++) {
      lon = plano[i * 2] * RAD; lat = plano[i * 2 + 1] * RAD;
      cl = Math.cos(lat);
      v[i * 3] = cl * Math.cos(lon);
      v[i * 3 + 1] = cl * Math.sin(lon);
      v[i * 3 + 2] = Math.sin(lat);
    }
    return { v: v, n: n, s: new Float32Array(n * 2), x0: 0, x1: 0, y0: 0, y1: 0 };
  }

  function anillo(lon0, lon1, lat, paso) {
    /* Un arco de paralelo, muestreado. Hace falta para las cuñas antárticas:
       de un meridiano a otro por la línea de los 60 grados sur hay que ir por
       el ARCO, no por la recta, o la cuña sale con el techo hundido. */
    var p = [], g, d = lon1 >= lon0 ? (paso || 2) : -(paso || 2);
    for (g = lon0; d > 0 ? g <= lon1 : g >= lon1; g += d) { p.push(g); p.push(lat); }
    if (p[p.length - 2] !== lon1) { p.push(lon1); p.push(lat); }
    return p;
  }

  function preparar() {
    if (paises || !EH.MUNDO) return;

    paises = EH.MUNDO.map(function (p) {
      return {
        id: p.id, iso: p.c, nombre: p.n, hispano: !!p.h,
        sefardi: SEFARDI.indexOf(p.c) >= 0,
        piezas: p.p.map(aPieza)
      };
    });

    estados = (EH.ESTADOS_EEUU || []).map(function (e) {
      return { s: e.s, nombre: e.n, lat: e.lat, lon: e.lon, piezas: e.p.map(aPieza) };
    });

    causas = {};
    var cm = EH.CAUSAS_MAPA || {};
    Object.keys(cm).forEach(function (k) { causas[k] = cm[k].map(aPieza); });

    /* Las cuñas antárticas no vienen de ningún archivo de fronteras: son
       sectores de longitud. Se construyen aquí a partir de los grados que ya
       figuran verificados en EH.PLAN.notaAntartida. */
    if (EH.ANTARTIDA) {
      causas.__antartida = EH.ANTARTIDA.sectores.map(function (s) {
        var pl = EH.ANTARTIDA.paralelo;
        /* Hasta -89,5 y no hasta -90: en el polo exacto todos los meridianos
           son el mismo punto y el polígono se cierra sobre sí mismo. */
        return {
          id: s.id, titulo: s.titulo, km2: s.km2,
          pieza: aPieza(anillo(s.lonA, s.lonB, pl, 1.5).concat(anillo(s.lonB, s.lonA, -89.5, 1.5)))
        };
      });
    }

    ciudades = (EH.CIUDADES || []).map(function (c) {
      var lon = c[0] * RAD, lat = c[1] * RAD, cl = Math.cos(lat);
      return {
        x: cl * Math.cos(lon), y: cl * Math.sin(lon), z: Math.sin(lat),
        lon: c[0], lat: c[1], rango: c[2], pob: c[3], nombre: c[4], pais: c[5]
      };
    });

    var lineas = [], lon, lat, p;
    for (lon = -180; lon < 180; lon += 30) {
      p = [];
      for (lat = -90; lat <= 90; lat += 3) { p.push(lon); p.push(lat); }
      lineas.push(aPieza(p));
    }
    for (lat = -60; lat <= 60; lat += 30) lineas.push(aPieza(anillo(-180, 180, lat, 3)));
    RETICULA = lineas;
  }

  function mezclar(a, b, t) {
    /* Interpolación de color en RGB. Para una rampa secuencial de un solo tono
       a otro es suficiente; no hace falta pasar por otro espacio de color. */
    t = Math.max(0, Math.min(1, t));
    var r = Math.round(a[0] + (b[0] - a[0]) * t),
        g = Math.round(a[1] + (b[1] - a[1]) * t),
        z = Math.round(a[2] + (b[2] - a[2]) * t);
    return 'rgb(' + r + ',' + g + ',' + z + ')';
  }
  var RAMPA_A = [30, 46, 66], RAMPA_B = [240, 196, 107];

  /* --------------------------------------------------------------------
     UNA INSTANCIA DE GLOBO
     -------------------------------------------------------------------- */
  function crear(contenedor, naciones, opciones) {
    opciones = opciones || {};
    preparar();

    var CONT = EH.MAPA_CONTENIDO || {};
    var FICHAS_CIUDAD = CONT.ciudades || {};
    var DATOS_ESTADO = CONT.estadosEEUU || {};
    var EPOCAS = CONT.epocas || [];
    var FICHAS_CAUSA = CONT.causas || {};

    var porId = {};
    naciones.forEach(function (n) { porId[n.id] = n; });

    /* Mirando al Atlántico hispano: España arriba a la derecha y América a la
       izquierda. Es el único encuadre donde se ven las dos orillas a la vez,
       que es de lo que habla el movimiento. */
    var giroLon = -52, giroLat = 12, escala = 1;
    var ESCALA_MAX = 24, ESCALA_MIN = 1;

    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var girando = !reduce && opciones.girar !== false;
    var velocidad = 0, arrastrando = false, movido = false;
    var sobre = null, sobreCiudad = null, elegido = opciones.destacar || null;
    var animando = null, pendiente = false;
    var epoca = null;                      /* null = hoy */

    var capas = {
      mar: opciones.mar !== false,
      causas: opciones.causas !== false,
      estados: opciones.estados !== false,
      ciudades: opciones.ciudades !== false,
      sefardi: opciones.sefardi !== false
    };

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
      /* Cuadrado, con techo: en un monitor ancho un globo de 1.200 px de alto
         obliga a desplazar la página para ver la portada entera. */
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
      /* fila 0 = profundidad hacia quien mira, fila 1 = derecha, fila 2 = arriba */
      mat[0] = ca * cb;  mat[1] = sa * cb;  mat[2] = sb;
      mat[3] = -sa;      mat[4] = ca;       mat[5] = 0;
      mat[6] = -ca * sb; mat[7] = -sa * sb; mat[8] = cb;
    }

    /* Devuelve 0 si la pieza está entera de espaldas (no se dibuja), 1 si está
       de cara pero fuera del lienzo (tampoco), 2 si hay que dibujarla.
       El descarte por caja es lo que permite ampliar 24 veces sin que baje de
       60 fotogramas: a esa escala, nueve de cada diez países están fuera. */
    function proyectar(pieza) {
      var v = pieza.v, s = pieza.s, n = pieza.n, r = R * escala, vistos = 0;
      var m0 = mat[0], m1 = mat[1], m2 = mat[2], m3 = mat[3], m4 = mat[4],
          m6 = mat[6], m7 = mat[7], m8 = mat[8];
      var x0 = 1e9, x1 = -1e9, y0 = 1e9, y1 = -1e9;
      for (var i = 0; i < n; i++) {
        var x = v[i * 3], y = v[i * 3 + 1], z = v[i * 3 + 2];
        var p = m0 * x + m1 * y + m2 * z;
        var d = m3 * x + m4 * y;
        var a = m6 * x + m7 * y + m8 * z;
        if (p >= 0) {
          vistos++;
        } else {
          var mg = Math.sqrt(d * d + a * a);
          if (mg < 1e-9) { d = 0; a = 1; mg = 1; }    /* el punto antipodal exacto */
          d /= mg; a /= mg;
        }
        var sx = cx + r * d, sy = cy - r * a;
        s[i * 2] = sx; s[i * 2 + 1] = sy;
        if (sx < x0) x0 = sx;
        if (sx > x1) x1 = sx;
        if (sy < y0) y0 = sy;
        if (sy > y1) y1 = sy;
      }
      pieza.x0 = x0; pieza.x1 = x1; pieza.y0 = y0; pieza.y1 = y1;
      if (!vistos) return 0;
      var m = 40;        /* margen: un trazo grueso asoma aunque la caja no */
      if (x1 < -m || x0 > An + m || y1 < -m || y0 > Al + m) return 1;
      return 2;
    }

    function trazar(pieza) {
      var s = pieza.s, n = pieza.n;
      ctx.moveTo(s[0], s[1]);
      for (var i = 1; i < n; i++) ctx.lineTo(s[i * 2], s[i * 2 + 1]);
      ctx.closePath();
    }

    function trazarSi(grupo) {
      /* Traza todas las piezas visibles de un grupo. Devuelve si pintó algo,
         para no gastar un fill con el camino vacío. */
      var algo = false;
      for (var j = 0; j < grupo.length; j++) {
        if (proyectar(grupo[j]) === 2) { trazar(grupo[j]); algo = true; }
      }
      return algo;
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

    /* De la pantalla a la esfera. Hace falta para el doble clic: hay que saber
       sobre qué trozo de mundo se ha pulsado para centrarlo ahí. */
    function esferaEn(px, py) {
      var r = R * escala;
      var d = (px - cx) / r, a = -(py - cy) / r;
      var q = 1 - d * d - a * a;
      if (q < 0) return null;                        /* fuera del disco */
      var p = Math.sqrt(q);
      var x = mat[0] * p + mat[3] * d + mat[6] * a;
      var y = mat[1] * p + mat[4] * d + mat[7] * a;
      var z = mat[2] * p + mat[5] * d + mat[8] * a;
      return { lat: Math.asin(Math.max(-1, Math.min(1, z))) / RAD, lon: Math.atan2(y, x) / RAD };
    }

    /* ---------- qué naciones toca pintar en la época elegida ---------- */
    function vivaEn(id) {
      if (epoca === null || !EPOCAS[epoca]) return true;
      var lista = EPOCAS[epoca].territorios;
      return !lista || lista.indexOf(id) >= 0;
    }

    /* ---------- umbral de ciudades ----------
       Cuántas ciudades se enseñan según el aumento. Sin esta escalera, al
       abrir el mapa saldrían 1.855 nombres amontonados y no se leería ninguno;
       y al ampliar del todo no saldría ninguno, que es peor. */
    function umbralCiudades() {
      if (escala < 1.7) return -1;                    /* ninguna */
      return Math.min(10, Math.round(Math.log(escala) / Math.LN2 * 2) - 1);
    }

    /* ---------- dibujo ---------- */
    function pintar() {
      pendiente = false;
      matriz();
      var r = R * escala, i, j;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, An, Al);

      /* El halo va FUERA del recorte: dentro, el propio recorte se lo comería
         y el globo quedaría pegado al fondo como una pegatina. */
      var halo = ctx.createRadialGradient(cx, cy, r * 0.97, cx, cy, r * 1.14);
      halo.addColorStop(0, 'rgba(217,164,65,.22)');
      halo.addColorStop(1, 'rgba(217,164,65,0)');
      ctx.fillStyle = halo;
      ctx.beginPath();
      ctx.arc(cx, cy, r * 1.14, 0, TAU);
      ctx.fill();

      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, TAU);
      ctx.clip();

      /* Océano. El degradado no está centrado: la luz entra por arriba a la
         izquierda y eso es lo único que hace que un círculo parezca una bola. */
      var mar = ctx.createRadialGradient(cx - r * 0.32, cy - r * 0.38, r * 0.08, cx, cy, r * 1.08);
      mar.addColorStop(0, '#24455f');
      mar.addColorStop(0.55, '#15283a');
      mar.addColorStop(1, '#070d15');
      ctx.fillStyle = mar;
      ctx.fillRect(0, 0, An, Al);

      /* --- retícula ---
         Aquí NO se empujan al canto los puntos ocultos: son líneas abiertas,
         así que basta con cortar el trazo y seguir al otro lado. Empujarlas
         dejaría arcos falsos pegados al borde.
         No es adorno: sin ninguna línea, una esfera lisa que gira parece una
         mancha que late. La retícula es lo que hace ver que ESTÁ GIRANDO. */
      ctx.strokeStyle = 'rgba(217,164,65,.09)';
      ctx.lineWidth = 0.6;
      ctx.beginPath();
      for (i = 0; i < RETICULA.length; i++) {
        var l = RETICULA[i], roto = true;
        for (j = 0; j < l.n; j++) {
          var lx = l.v[j * 3], ly = l.v[j * 3 + 1], lz = l.v[j * 3 + 2];
          if (mat[0] * lx + mat[1] * ly + mat[2] * lz <= 0) { roto = true; continue; }
          var px = cx + r * (mat[3] * lx + mat[4] * ly);
          var py = cy - r * (mat[6] * lx + mat[7] * ly + mat[8] * lz);
          if (roto) { ctx.moveTo(px, py); roto = false; } else ctx.lineTo(px, py);
        }
      }
      ctx.stroke();

      /* --- el mar que nos corresponde ---
         Se dibuja ANTES que la tierra y como un trazo muy grueso sobre la
         costa: la mitad que cae tierra adentro la tapa luego el país. El
         grosor es 200 millas náuticas a la escala del globo, así que se
         estrecha solo cerca del canto, igual que lo haría de verdad. */
      /* Ni el mar de 200 millas ni las causas se dibujan cuando hay una epoca
         elegida, y no es un capricho: la zona economica exclusiva nace con la
         Convencion del Mar de 1982, y el pleito del Esequibo o el de Belice son
         del siglo XX. Pintarlos sobre un mapa de 1511 seria un anacronismo, y
         de los que se ven: alguien diria "en 1511 ya se reclamaba eso" y
         tendria razon en reirse. */
      var hoy = (epoca === null);
      if (capas.mar && hoy) {
        ctx.save();
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        ctx.lineWidth = Math.max(2, r * MILLAS200 * 2);
        ctx.strokeStyle = 'rgba(93,168,214,.20)';
        ctx.beginPath();
        for (i = 0; i < paises.length; i++) {
          if (!paises[i].hispano || !porId[paises[i].id] || !vivaEn(paises[i].id)) continue;
          trazarSi(paises[i].piezas);
        }
        ctx.stroke();
        ctx.restore();
      }

      /* --- el mundo ajeno, en penumbra ---
         Todo en un solo trazo: son 155 países y pintarlos de uno en uno cuesta
         310 cambios de estado del contexto por fotograma. */
      ctx.beginPath();
      var hayAjeno = false;
      for (i = 0; i < paises.length; i++) {
        if (paises[i].hispano || (capas.sefardi && paises[i].sefardi)) continue;
        if (trazarSi(paises[i].piezas)) hayAjeno = true;
      }
      if (hayAjeno) {
        ctx.fillStyle = AJENO.r;
        ctx.fill();
        ctx.strokeStyle = AJENO.b;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }

      /* --- cuñas antárticas ---      /* Las cuñas van DESPUÉS del mundo ajeno, no antes. Dibujadas antes, la
         Antártida se pintaba encima y tapaba justo lo que la capa quiere
         enseñar: las cuñas solo asomaban sobre el mar. Las reclamaciones son
         sobre el hielo, así que tienen que verse sobre el hielo.
         Cada sector reclamado, y el solapamiento chileno-argentino encima en
         otro tono. Ese solapamiento ES el argumento del sitio: son 21 grados
         reclamados dos veces, el mismo hielo contado dos veces. Un mapa que
         los pintara de un solo color estaría repitiendo el bulo del 80%. */
      if (capas.causas && hoy && causas.__antartida) {
        for (i = 0; i < causas.__antartida.length; i++) {
          var sec = causas.__antartida[i];
          if (proyectar(sec.pieza) !== 2) continue;
          ctx.beginPath();
          trazar(sec.pieza);
          if (sec.id === 'britanico') {
            ctx.fillStyle = 'rgba(120,130,150,.13)';
          } else if (sec.id === 'solape') {
            ctx.fillStyle = 'rgba(217,164,65,.17)';
          } else {
            ctx.fillStyle = 'rgba(217,164,65,.12)';
          }
          ctx.fill();
          ctx.strokeStyle = 'rgba(217,164,65,.30)';
          ctx.lineWidth = 0.7;
          ctx.stroke();
        }
      }


      /* --- la huella sefardí ---
         Un tono propio, ni hispano ni ajeno. No marca una alianza con ningún
         Estado: marca dónde se habló el judeoespañol durante cinco siglos. */
      if (capas.sefardi) {
        ctx.beginPath();
        var haySef = false;
        for (i = 0; i < paises.length; i++) {
          if (paises[i].hispano || !paises[i].sefardi) continue;
          if (trazarSi(paises[i].piezas)) haySef = true;
        }
        if (haySef) {
          ctx.fillStyle = '#4a3a52';
          ctx.fill();
          ctx.strokeStyle = '#6d5578';
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }

      /* --- los nuestros, uno a uno porque cada uno lleva su color --- */
      for (i = 0; i < paises.length; i++) {
        var ph = paises[i];
        if (!ph.hispano) continue;
        var nac = porId[ph.id];
        if (!nac) continue;                  /* filtrado fuera por quien llama */
        var viva = vivaEn(ph.id);
        var col = viva ? (COLOR[nac.estatus] || COLOR.soberano) : APAGADO;
        var activo = viva && (sobre === ph.id || elegido === ph.id);

        ctx.beginPath();
        if (!trazarSi(ph.piezas)) continue;
        ctx.fillStyle = activo ? col.b : col.r;
        ctx.fill();
        ctx.strokeStyle = activo ? '#fff6e6' : col.b;
        ctx.lineWidth = activo ? 1.6 : 0.8;
        ctx.stroke();
      }

      /* --- los estados de Estados Unidos ---
         Encima de la mancha de EE.UU., cada uno con su tono según su población
         hispana. Sin esta capa el mapa dice que Vermont es tan hispano como
         Nuevo México, y se equivoca por un factor de veinte. */
      if (capas.estados && estados.length && vivaEn('estados-unidos-hispano') && porId['estados-unidos-hispano']) {
        for (i = 0; i < estados.length; i++) {
          var es = estados[i];
          var dat = DATOS_ESTADO[(es.s || '').toLowerCase()];
          ctx.beginPath();
          if (!trazarSi(es.piezas)) continue;
          if (dat && typeof dat.pct === 'number') {
            ctx.fillStyle = mezclar(RAMPA_A, RAMPA_B, dat.pct / 50);
          } else {
            /* Sin dato no se inventa un tono: se deja gris y la leyenda lo
               explica. Un degradado bonito con un número inventado debajo es
               exactamente lo que este sitio no hace. */
            ctx.fillStyle = '#2b2b33';
          }
          ctx.fill();
          ctx.strokeStyle = 'rgba(10,16,24,.55)';
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }

      /* --- las ocho causas --- */
      if (capas.causas && hoy) {
        ctx.save();
        ctx.setLineDash([5, 3]);
        Object.keys(causas).forEach(function (k) {
          if (k === '__antartida') return;
          ctx.beginPath();
          if (!trazarSi(causas[k])) return;
          ctx.fillStyle = 'rgba(181,29,51,.42)';
          ctx.fill();
          ctx.strokeStyle = '#f07d8f';
          ctx.lineWidth = 1.1;
          ctx.stroke();
        });
        ctx.restore();

        /* El litoral que Bolivia perdió en 1879 no es un área: es un tramo de
           costa. Se dibuja como tal. Rellenar un trozo de Chile sería
           reclamar territorio chileno, que no es lo que dice la causa. */
        if (EH.LITORAL_BOLIVIA) {
          var L = EH.LITORAL_BOLIVIA;
          var a1 = puntoEn(-70.4, L.latNorte), a2 = puntoEn(-70.4, L.latSur);
          if (a1.visible && a2.visible) {
            ctx.beginPath();
            ctx.moveTo(a1.x, a1.y);
            ctx.lineTo(a2.x, a2.y);
            ctx.strokeStyle = '#f07d8f';
            ctx.lineWidth = Math.max(2.5, r * 0.012);
            ctx.lineCap = 'round';
            ctx.stroke();
          }
        }
      }

      /* --- un punto en cada capital ---
         No es decorativo: Puerto Rico, Guinea Ecuatorial y El Salvador son tan
         pequeños en una esfera de 600 píxeles que sin el punto no hay nada
         que pulsar. Al ampliar se encogen: ya se ve el país. */
      var rPunto = escala > 4 ? 1.8 : 2.6;
      naciones.forEach(function (n) {
        if (!vivaEn(n.id)) return;
        var q = puntoEn(n.lon, n.lat);
        if (!q.visible) return;
        var col = COLOR[n.estatus] || COLOR.soberano;
        var act = (sobre === n.id || elegido === n.id);
        ctx.beginPath();
        ctx.arc(q.x, q.y, act ? 4.6 : rPunto, 0, TAU);
        ctx.fillStyle = act ? '#fff6e6' : col.b;
        ctx.fill();
      });

      /* --- ciudades --- */
      var puestas = [];
      var visibles = [];
      if (capas.ciudades) {
        var umbral = umbralCiudades();
        if (umbral >= 0) {
          ctx.font = '500 11px ui-sans-serif,system-ui,sans-serif';
          ctx.textBaseline = 'middle';
          for (i = 0; i < ciudades.length; i++) {
            var cd = ciudades[i];
            if (cd.rango > umbral) continue;
            var p = mat[0] * cd.x + mat[1] * cd.y + mat[2] * cd.z;
            if (p <= 0.02) continue;             /* de espaldas o pegada al canto */
            var sx = cx + r * (mat[3] * cd.x + mat[4] * cd.y);
            var sy = cy - r * (mat[6] * cd.x + mat[7] * cd.y + mat[8] * cd.z);
            if (sx < -60 || sx > An + 60 || sy < -20 || sy > Al + 20) continue;

            var tieneFicha = !!FICHAS_CIUDAD[clave(cd)];
            var anchoT = ctx.measureText(cd.nombre).width;
            var caja = [sx + 5, sy - 7, sx + 11 + anchoT, sy + 7];

            /* Reparto por codazos: la primera que llega se queda el sitio.
               Como la lista va ordenada por rango, las que ganan son siempre
               las mayores. Sin esto, al ampliar sale una maraña ilegible. */
            var choca = false;
            for (j = 0; j < puestas.length; j++) {
              var o = puestas[j];
              if (caja[0] < o[2] && caja[2] > o[0] && caja[1] < o[3] && caja[3] > o[1]) { choca = true; break; }
            }
            if (choca) continue;
            puestas.push(caja);
            cd._sx = sx; cd._sy = sy; cd._ancho = anchoT;
            visibles.push(cd);

            var destacada = sobreCiudad === cd;
            ctx.beginPath();
            ctx.arc(sx, sy, tieneFicha ? 3.1 : 2, 0, TAU);
            ctx.fillStyle = tieneFicha ? '#f0c46b' : 'rgba(245,236,226,.62)';
            ctx.fill();
            if (tieneFicha) {
              ctx.strokeStyle = 'rgba(18,8,10,.8)';
              ctx.lineWidth = 1;
              ctx.stroke();
            }
            ctx.fillStyle = destacada ? '#fff6e6' : (tieneFicha ? '#f6d79a' : 'rgba(245,236,226,.78)');
            ctx.strokeStyle = 'rgba(7,13,21,.85)';
            ctx.lineWidth = 2.6;
            ctx.lineJoin = 'round';
            ctx.strokeText(cd.nombre, sx + 6, sy);   /* borde oscuro: si no, un
                                                        nombre sobre tierra clara
                                                        no se lee */
            ctx.fillText(cd.nombre, sx + 6, sy);
          }
        }
      }
      /* La lista de lo que se puede pulsar se rehace CADA fotograma a partir
         de lo que acaba de dibujarse. Antes se filtraba por un campo que
         sobrevivia de fotogramas anteriores, asi que una ciudad que ya se
         habia salido de la pantalla seguia respondiendo al clic. */
      visiblesCiudad = visibles;

      ctx.restore();

      /* El canto, al final y fuera del recorte: un trazo sobre el borde del
         recorte sale cortado a la mitad de su grosor. */
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, TAU);
      ctx.strokeStyle = 'rgba(240,196,107,.42)';
      ctx.lineWidth = 1.1;
      ctx.stroke();

      /* El nombre de lo que hay bajo el cursor. Va sobre el lienzo y no en un
         <div> para que no cambie el tamaño del contenedor al arrastrar. */
      var rot = null;
      if (sobre && porId[sobre]) {
        var nd = porId[sobre], pq = puntoEn(nd.lon, nd.lat);
        if (pq.visible) rot = { t: nd.nombre, x: pq.x, y: pq.y };
      } else if (sobreEstado) {
        var de = DATOS_ESTADO[(sobreEstado.s || '').toLowerCase()];
        var pe = puntoEn(sobreEstado.lon, sobreEstado.lat);
        if (pe.visible) {
          rot = {
            t: (de && de.nombre ? de.nombre : sobreEstado.nombre) +
               (de && typeof de.pct === 'number' ? '  ·  ' + de.pct.toFixed(1).replace('.', ',') + ' % hispano' : ''),
            x: pe.x, y: pe.y
          };
        }
      }
      if (rot) {
        ctx.font = '600 13px ui-sans-serif,system-ui,sans-serif';
        var w = ctx.measureText(rot.t).width;
        var tx = Math.min(Math.max(rot.x + 10, 4), An - w - 14);
        var ty = Math.min(Math.max(rot.y - 12, 18), Al - 6);
        ctx.fillStyle = 'rgba(10,6,8,.86)';
        /* Sin roundRect: Safari no lo tuvo hasta 2023 y aquí no hay
           transpilador que lo arregle. */
        ctx.fillRect(tx - 5, ty - 13, w + 10, 19);
        ctx.fillStyle = '#f6d79a';
        ctx.textBaseline = 'alphabetic';
        ctx.fillText(rot.t, tx, ty);
      }
    }

    var visiblesCiudad = [], sobreEstado = null;

    /* La llave con la que una ciudad busca su ficha: su propia coordenada.
       NO el nombre. Hay dos Granadas en el mapa (la de España y la de
       Nicaragua), dos Santiagos de peso (Chile y Cuba) y varias Córdobas y
       Méridas: con el nombre por llave, la ficha de una se abriría sobre la
       otra, y el error sería invisible hasta que alguien lo leyera.
       La coordenada es única por construcción, y el archivo de contenido
       guarda la llave calculada EXACTAMENTE igual, desde el mismo dato. */
    function clave(cd) { return cd.lon.toFixed(2) + ',' + cd.lat.toFixed(2); }

    function repintar() {
      if (pendiente) return;
      pendiente = true;
      requestAnimationFrame(pintar);
    }

    /* ---------- el latido ---------- */
    function latido(ahora) {
      if (animando) {
        if (!animando.t0) animando.t0 = ahora;
        var t = Math.min((ahora - animando.t0) / animando.ms, 1);
        var e = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
        giroLon = animando.lon0 + animando.dLon * e;
        giroLat = animando.lat0 + animando.dLat * e;
        escala = animando.esc0 + animando.dEsc * e;
        if (t >= 1) { animando = null; sincronizarMandos(); }
        pintar();
      } else if (arrastrando) {
        /* mientras se arrastra pinta el propio manejador del puntero */
      } else if (Math.abs(velocidad) > 0.004) {
        giroLon += velocidad;
        velocidad *= 0.955;                 /* frenada: el globo pesa */
        pintar();
      } else if (girando) {
        giroLon += 0.085 / escala;          /* ampliado, gira más despacio o marea */
        pintar();
      }
      requestAnimationFrame(latido);
    }

    /* ---------- a quién se ha pulsado ----------
       Prueba del rayo sobre los puntos YA PROYECTADOS, no con isPointInPath:
       la coordenada que espera isPointInPath depende de la transformación del
       contexto, y aquí hay un factor de densidad de píxeles puesto. Serían dos
       sistemas de coordenadas y un fallo que solo asoma en pantallas Retina. */
    function dentro(pieza, px, py) {
      if (px < pieza.x0 || px > pieza.x1 || py < pieza.y0 || py > pieza.y1) return false;
      var s = pieza.s, n = pieza.n, d = false;
      for (var i = 0, j = n - 1; i < n; j = i++) {
        var xi = s[i * 2], yi = s[i * 2 + 1], xj = s[j * 2], yj = s[j * 2 + 1];
        if (((yi > py) !== (yj > py)) && (px < (xj - xi) * (py - yi) / (yj - yi) + xi)) d = !d;
      }
      return d;
    }

    function ciudadEn(px, py) {
      if (!capas.ciudades) return null;
      var mejor = null, mejorD = 144;
      for (var i = 0; i < visiblesCiudad.length; i++) {
        var c = visiblesCiudad[i];
        if (c._sx === undefined) continue;
        /* La etiqueta también vale como blanco: apuntar a un punto de tres
           píxeles con el dedo es imposible. */
        if (px >= c._sx && px <= c._sx + c._ancho + 8 && Math.abs(py - c._sy) < 9) return c;
        var d = (c._sx - px) * (c._sx - px) + (c._sy - py) * (c._sy - py);
        if (d < mejorD) { mejorD = d; mejor = c; }
      }
      return mejor;
    }

    function quienEn(px, py) {
      var r = R * escala;
      if ((px - cx) * (px - cx) + (py - cy) * (py - cy) > r * r) return null;
      /* Primero los puntos de capital, con holgura: son el único asidero de
         los países que miden tres píxeles. Al ampliar deja de hacer falta y
         estorbaría, así que la holgura se cierra. */
      if (escala < 4) {
        var mejor = null, mejorD = 196;
        for (var k = 0; k < naciones.length; k++) {
          var n = naciones[k];
          if (!vivaEn(n.id)) continue;
          var q = puntoEn(n.lon, n.lat);
          if (!q.visible) continue;
          var d = (q.x - px) * (q.x - px) + (q.y - py) * (q.y - py);
          if (d < mejorD) { mejorD = d; mejor = n.id; }
        }
        if (mejor) return mejor;
      }
      for (var i = 0; i < paises.length; i++) {
        var p = paises[i];
        if (!p.hispano || !porId[p.id] || !vivaEn(p.id)) continue;
        for (var j = 0; j < p.piezas.length; j++) {
          if (dentro(p.piezas[j], px, py)) return p.id;
        }
      }
      return null;
    }

    function causaEn(px, py) {
      if (!capas.causas || epoca !== null) return null;
      var k, j, cl = Object.keys(causas);
      for (var i = 0; i < cl.length; i++) {
        k = cl[i];
        if (k === '__antartida') continue;
        for (j = 0; j < causas[k].length; j++) {
          if (dentro(causas[k][j], px, py)) return k;
        }
      }
      if (causas.__antartida) {
        for (i = 0; i < causas.__antartida.length; i++) {
          /* El solapamiento primero: esta ENCIMA de los otros dos y es la
             ficha que mas ensena, asi que debe ganar el clic. */
          var s = causas.__antartida[i];
          if (s.id === 'solape' && dentro(s.pieza, px, py)) return 'antartida';
        }
        for (i = 0; i < causas.__antartida.length; i++) {
          if (dentro(causas.__antartida[i].pieza, px, py)) return 'antartida';
        }
      }
      return null;
    }

    /* Los textos de las causas son los del Gran Plan, que ya estaban escritos
       y verificados. El mapa no inventa doctrina: la ensena donde ocurre. */
    var NOMBRE_CAUSA = {
      malvinas: 'Malvinas, Georgias del Sur y Sandwich del Sur',
      georgias: 'Georgias del Sur y Sandwich del Sur',
      esequibo: 'La Guayana Esequiba',
      gibraltar: 'Gibraltar',
      belice: 'El diferendo entre Guatemala y Belice',
      antartida: 'La Antartida reclamada'
    };

    function abrirCausa(k, punto) {
      var c = (CONT.causas || {});
      var f = c[k] || (k === 'georgias' ? c.georgias : null) ||
              (k === 'malvinas' ? c.malvinas : null) ||
              (k === 'antartida' ? c.antartida : null);
      var delPlan = null;
      if (EH.PLAN && EH.PLAN.causas) {
        var mapa = { malvinas: 'malvinas', georgias: 'malvinas', esequibo: 'esequibo',
                     gibraltar: 'gibraltar', belice: 'belice', antartida: 'antartida' };
        EH.PLAN.causas.forEach(function (x) { if (x.id === mapa[k]) delPlan = x; });
      }
      var html = '<h4>' + EH.escapar((f && f.titulo) || NOMBRE_CAUSA[k] || k) + '</h4>' +
        '<div class="met"><span style="color:var(--rojo2)">Territorio en disputa</span></div>';
      if (f && f.texto) {
        html += '<p>' + EH.escapar(f.texto.slice(0, 460)) + (f.texto.length > 460 ? '…' : '') + '</p>';
      } else if (delPlan && delPlan.situacionReal) {
        html += '<p>' + EH.escapar(delPlan.situacionReal.slice(0, 420)) + '…</p>';
      }
      /* Este parrafo no se quita. El color rojo no dice "esto es nuestro":
         dice "esto esta en disputa", y el Gran Plan publica tambien el
         argumento de la otra parte. Sin esta frase, el mapa reclama. */
      html += '<p class="eh-tenue" style="font-size:.72rem">El color marca una disputa abierta, no una ' +
        'propiedad. El Gran Plan publica tambien el argumento de la otra parte.</p>' +
        '<a class="eh-boton eh-boton--p eh-boton--oro" href="' + EH.BASE + 'plan.html#causas">Ver las ocho causas</a>';
      caja(html, punto);
    }

    function estadoEn(px, py) {
      if (!capas.estados) return null;
      for (var i = 0; i < estados.length; i++) {
        for (var j = 0; j < estados[i].piezas.length; j++) {
          if (dentro(estados[i].piezas[j], px, py)) return estados[i];
        }
      }
      return null;
    }

    function local(ev) {
      var c = lienzo.getBoundingClientRect();
      return { x: ev.clientX - c.left, y: ev.clientY - c.top };
    }

    /* ---------- girar, ampliar ---------- */
    var ult = null, punteros = {}, pinza = null;

    function fijarEscala(nueva, px, py) {
      nueva = Math.min(Math.max(nueva, ESCALA_MIN), ESCALA_MAX);
      if (nueva === escala) return;
      matriz();          /* con la matriz del fotograma anterior, da un salto */
      /* Ampliar hacia donde está el cursor, no hacia el centro: si no, lo que
         uno quiere mirar se escapa de la pantalla justo al ampliar. */
      var antes = (px !== undefined) ? esferaEn(px, py) : null;
      escala = nueva;
      if (antes) {
        matriz();
        var ahora = esferaEn(px, py);
        if (ahora) {
          giroLon += (antes.lon - ahora.lon);
          giroLat = Math.min(Math.max(giroLat - (antes.lat - ahora.lat), -88), 88);
        }
      }
      sincronizarMandos();
      repintar();
    }

    lienzo.addEventListener('pointerdown', function (ev) {
      punteros[ev.pointerId] = local(ev);
      var ids = Object.keys(punteros);
      if (ids.length === 2) {
        var a = punteros[ids[0]], b = punteros[ids[1]];
        pinza = { d: Math.hypot(a.x - b.x, a.y - b.y), esc: escala };
        arrastrando = false;
        return;
      }
      arrastrando = true; movido = false; animando = null; velocidad = 0;
      ult = local(ev);
      if (lienzo.setPointerCapture) { try { lienzo.setPointerCapture(ev.pointerId); } catch (e) {} }
    });

    lienzo.addEventListener('pointermove', function (ev) {
      if (punteros[ev.pointerId]) punteros[ev.pointerId] = local(ev);
      var ids = Object.keys(punteros);

      if (pinza && ids.length >= 2) {
        var a = punteros[ids[0]], b = punteros[ids[1]];
        var d = Math.hypot(a.x - b.x, a.y - b.y);
        if (pinza.d > 8) fijarEscala(pinza.esc * d / pinza.d, (a.x + b.x) / 2, (a.y + b.y) / 2);
        return;
      }

      var p = local(ev);
      if (arrastrando && ult) {
        /* El giro se divide por la escala: ampliado, el mismo desplazamiento
           del dedo debe recorrer menos grados o es imposible apuntar a nada. */
        var k = 0.34 / escala;
        var dLon = -(p.x - ult.x) * k;
        giroLon += dLon;
        giroLat = Math.min(Math.max(giroLat + (p.y - ult.y) * k, -88), 88);
        velocidad = dLon;
        if (Math.abs(p.x - ult.x) + Math.abs(p.y - ult.y) > 3) movido = true;
        ult = p;
        girando = false; sincronizarMandos();
        pintar();
        return;
      }

      /* Sin arrastrar: resaltar lo que hay debajo. Solo con ratón; en un dedo
         no existe «pasar por encima» y el resaltado se quedaría pegado al
         último sitio tocado. */
      if (ev.pointerType === 'mouse') {
        var cd = ciudadEn(p.x, p.y);
        var q = cd ? null : quienEn(p.x, p.y);
        var es = (cd || q) ? null : estadoEn(p.x, p.y);
        if (cd !== sobreCiudad || q !== sobre || es !== sobreEstado) {
          sobreCiudad = cd; sobre = q; sobreEstado = es;
          lienzo.style.cursor = (cd || q || es) ? 'pointer' : 'grab';
          repintar();
        }
      }
    });

    function soltar(ev) {
      delete punteros[ev.pointerId];
      if (Object.keys(punteros).length < 2) pinza = null;
      if (!arrastrando) return;
      arrastrando = false; ult = null;
      if (movido) return;

      var p = local(ev);
      var cd = ciudadEn(p.x, p.y);
      if (cd) { abrirCiudad(cd, p); return; }
      var q = quienEn(p.x, p.y);
      if (q) {
        elegido = q; velocidad = 0;
        if (opciones.alPulsar) opciones.alPulsar(porId[q], puntoEn(porId[q].lon, porId[q].lat));
        repintar();
        return;
      }
      var es = estadoEn(p.x, p.y);
      if (es) { abrirEstado(es, p); return; }
      /* Las causas se prueban al final: estan encima de un pais en el dibujo
         pero debajo de el al pulsar, porque pulsar Venezuela debe abrir
         Venezuela aunque el Esequibo este al lado. */
      var ca = causaEn(p.x, p.y);
      if (ca) { abrirCausa(ca, p); return; }
    }
    lienzo.addEventListener('pointerup', soltar);
    lienzo.addEventListener('pointercancel', soltar);
    lienzo.addEventListener('pointerleave', function (ev) {
      delete punteros[ev.pointerId];
      if (ev.pointerType === 'mouse' && !arrastrando && (sobre || sobreCiudad || sobreEstado)) {
        sobre = sobreCiudad = sobreEstado = null;
        repintar();
      }
    });

    /* La rueda amplía, PERO suelta la página en los topes. Antes la rueda no
       hacía nada, para no secuestrar el desplazamiento de la portada; el
       problema es que entonces ampliar en un portátil sin pantalla táctil
       costaba buscar un botón. Este término medio es el de los mapas serios:
       dentro del globo la rueda amplía, y cuando ya no se puede ampliar más
       (o menos) el gesto vuelve a desplazar la página. */
    lienzo.addEventListener('wheel', function (ev) {
      var fuera = (ev.deltaY > 0 && escala <= ESCALA_MIN) || (ev.deltaY < 0 && escala >= ESCALA_MAX);
      if (fuera) return;                     /* sin preventDefault: scroll normal */
      ev.preventDefault();
      animando = null; girando = false;
      var p = local(ev);
      fijarEscala(escala * (ev.deltaY > 0 ? 0.88 : 1.14), p.x, p.y);
    }, { passive: false });

    lienzo.addEventListener('dblclick', function (ev) {
      var p = local(ev);
      var destino = esferaEn(p.x, p.y);
      if (!destino) return;
      ev.preventDefault();
      girando = false; velocidad = 0;
      volar(destino.lon, destino.lat, Math.min(escala * 2.2, ESCALA_MAX));
    });

    /* ---------- teclado ----------
       Un lienzo no se recorre con el tabulador: para quien no usa ratón, un
       globo en canvas es un cuadro vacío. Las flechas lo giran, y la tira de
       banderas de abajo son botones de verdad. */
    lienzo.tabIndex = 0;
    lienzo.addEventListener('keydown', function (ev) {
      var paso = (ev.shiftKey ? 15 : 5) / Math.sqrt(escala), usada = true;
      if (ev.key === 'ArrowLeft') giroLon -= paso;
      else if (ev.key === 'ArrowRight') giroLon += paso;
      else if (ev.key === 'ArrowUp') giroLat = Math.min(giroLat + paso, 88);
      else if (ev.key === 'ArrowDown') giroLat = Math.max(giroLat - paso, -88);
      else if (ev.key === '+' || ev.key === '=') fijarEscala(escala * 1.3);
      else if (ev.key === '-' || ev.key === '_') fijarEscala(escala / 1.3);
      else usada = false;
      if (usada) { ev.preventDefault(); girando = false; animando = null; velocidad = 0; sincronizarMandos(); pintar(); }
    });

    /* ---------- volar a un sitio ---------- */
    function volar(lon, lat, esc, ms) {
      girando = false; velocidad = 0;
      /* giroLon ES la longitud que queda en el centro de la pantalla, sin
         cambiarle el signo. Aqui habia un fallo: se volaba a -lon, o sea al
         ANTIPODA. Pulsar la bandera de Colombia llevaba el globo a Indonesia,
         y como del otro lado solo se ve oceano parecia que no hubiera pasado
         nada.
         El rodeo del 540 es para ir por el lado CORTO: de Filipinas a Mexico
         son 170 grados hacia el este o 190 hacia el oeste, y el globo tiene
         que girar por donde giraria una mano. */
      var dLon = (lon - giroLon + 540) % 360 - 180;
      animando = {
        t0: 0, ms: ms || 900,
        lon0: giroLon, dLon: dLon,
        lat0: giroLat, dLat: Math.max(-88, Math.min(88, lat)) - giroLat,
        esc0: escala, dEsc: (esc === undefined ? escala : Math.min(Math.max(esc, ESCALA_MIN), ESCALA_MAX)) - escala
      };
    }

    function irA(id, abrirFicha) {
      var n = porId[id];
      if (!n) return;
      elegido = id;
      volar(n.lon, n.lat * 0.8, Math.max(2.2, escala));
      if (abrirFicha && opciones.alPulsar) {
        window.setTimeout(function () {
          if (porId[id]) opciones.alPulsar(porId[id], puntoEn(porId[id].lon, porId[id].lat));
        }, 940);
      }
    }

    /* ---------- fichas ---------- */
    function caja(html, punto) {
      var vieja = contenedor.querySelector('.eh-mapa__ficha');
      if (vieja) vieja.remove();
      var c = document.createElement('div');
      c.className = 'eh-mapa__ficha';
      c.innerHTML = '<button class="eh-mapa__cerrar" type="button" aria-label="Cerrar">×</button>' + html;
      var cc = contenedor.getBoundingClientRect(), lc = lienzo.getBoundingClientRect();
      c.style.left = Math.min(Math.max(lc.left - cc.left + punto.x + 14, 8), Math.max(8, cc.width - 320)) + 'px';
      c.style.top = Math.max(lc.top - cc.top + punto.y - 10, 8) + 'px';
      contenedor.appendChild(c);
      c.querySelector('.eh-mapa__cerrar').addEventListener('click', function () { c.remove(); });
      return c;
    }

    function abrirCiudad(cd, punto) {
      sobreCiudad = cd;
      var f = FICHAS_CIUDAD[clave(cd)];
      var nac = porId[cd.pais];
      var html =
        '<h4 class="eh-fila" style="gap:.5rem;flex-wrap:nowrap">' +
          (nac && EH.banderas ? EH.banderas.svg(nac.id, 24) : '') +
          '<span>' + EH.escapar(cd.nombre) + '</span></h4>' +
        '<div class="met"><span>' + (nac ? EH.escapar(nac.nombre) : 'Diáspora sefardí') + '</span>' +
          (cd.pob ? '<span>' + EH.escapar(EH.poblacion(cd.pob * 1000)) + ' hab. (área urbana)</span>' : '') +
          (f && f.fundacion ? '<span>' + EH.escapar(f.fundacion) + '</span>' : '') +
        '</div>';
      if (f) {
        html += '<p>' + EH.escapar(f.texto) + '</p>';
        if (f.retrato && EH.retratos && EH.retratos[f.retrato]) {
          html += '<div class="eh-globo__retrato">' + EH.retratos[f.retrato]() + '</div>';
        }
        if (f.fuente) html += '<p class="eh-tenue" style="font-size:.7rem">' + EH.escapar(f.fuente) + '</p>';
      } else {
        /* No se rellena con un párrafo genérico. Decir que todavía no hay
           ficha es verdad; inventarle una historia a un pueblo es exactamente
           lo que este sitio no hace. */
        html += '<p class="eh-tenue">Todavía no hay ficha de esta ciudad. Las que ya la tienen ' +
                'salen con el punto dorado.</p>';
      }
      if (nac) {
        html += '<a class="eh-boton eh-boton--p eh-boton--oro" href="' + EH.BASE + 'naciones.html#' +
          EH.escapar(nac.id) + '">Ver ' + EH.escapar(nac.nombre) + '</a>';
      }
      caja(html, punto);
      repintar();
    }

    function abrirEstado(es, punto) {
      var d = DATOS_ESTADO[(es.s || '').toLowerCase()];
      var html = '<h4>' + EH.escapar((d && d.nombre) || es.nombre) + '</h4>';
      if (d && typeof d.pct === 'number') {
        html += '<div class="met"><span><strong style="color:var(--oro2)">' +
          EH.escapar(d.pct.toFixed(1).replace('.', ',')) + ' %</strong> de población hispana</span>' +
          (d.hispanos ? '<span>' + EH.escapar(EH.poblacion(d.hispanos)) + ' personas</span>' : '') + '</div>';
        if (d.texto) html += '<p>' + EH.escapar(d.texto) + '</p>';
        if (d.fuente) html += '<p class="eh-tenue" style="font-size:.7rem">' + EH.escapar(d.fuente) + '</p>';
      } else {
        html += '<p class="eh-tenue">Sin dato de población hispana para este estado.</p>';
      }
      html += '<a class="eh-boton eh-boton--p eh-boton--oro" href="' + EH.BASE + 'eeuu.html">La Hispanidad de Estados Unidos</a>';
      caja(html, punto);
    }

    /* ---------- montaje ---------- */
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
      '<button type="button" data-a="inicio" aria-label="Volver a la vista general">⤢</button>' +
      '<button type="button" data-a="girar" aria-label="Girar o parar el globo">⏸</button>';
    escena.appendChild(mandos);

    var aviso = document.createElement('div');
    aviso.className = 'eh-globo__aumento';
    escena.appendChild(aviso);
    contenedor.appendChild(escena);

    function sincronizarMandos() {
      var bG = mandos.querySelector('[data-a=girar]');
      bG.textContent = girando ? '⏸' : '▶';
      bG.classList.toggle('on', girando);
      mandos.querySelector('[data-a=mas]').disabled = escala >= ESCALA_MAX;
      mandos.querySelector('[data-a=menos]').disabled = escala <= ESCALA_MIN;
      aviso.textContent = escala > 1.05 ? '×' + escala.toFixed(1).replace('.0', '').replace('.', ',') : '';
      aviso.classList.toggle('on', escala > 1.05);
    }

    mandos.addEventListener('click', function (ev) {
      var b = ev.target.closest('button');
      if (!b) return;
      var a = b.getAttribute('data-a');
      animando = null;
      if (a === 'mas') fijarEscala(escala * 1.5);
      else if (a === 'menos') fijarEscala(escala / 1.5);
      else if (a === 'inicio') { girando = false; volar(-52, 12, 1, 700); }
      else if (a === 'girar') { girando = !girando; velocidad = 0; }
      sincronizarMandos();
      repintar();
    });

    /* --- interruptores de capa --- */
    var ETIQUETAS = [
      { k: 'mar', t: 'Mar de 200 millas', d: 'Franja aproximada de zona económica exclusiva' },
      { k: 'causas', t: 'Causas territoriales', d: 'Las ocho del Gran Plan, en disputa' },
      { k: 'estados', t: 'EE.UU. por estados', d: 'Tono según su población hispana' },
      { k: 'ciudades', t: 'Ciudades', d: 'Aparecen al acercar' },
      { k: 'sefardi', t: 'Huella sefardí', d: 'Donde se habló el judeoespañol' }
    ];
    var panel = null;
    if (opciones.capas !== false) {
      panel = document.createElement('div');
      panel.className = 'eh-globo__capas';
      panel.innerHTML = ETIQUETAS.map(function (e) {
        return '<label title="' + EH.escapar(e.d) + '"><input type="checkbox" data-c="' + e.k + '"' +
          (capas[e.k] ? ' checked' : '') + '> ' + EH.escapar(e.t) + '</label>';
      }).join('');
      panel.addEventListener('change', function (ev) {
        var k = ev.target.getAttribute('data-c');
        if (!k) return;
        capas[k] = ev.target.checked;
        repintar();
      });
      contenedor.appendChild(panel);
    }

    /* --- la línea del tiempo --- */
    if (opciones.tiempo !== false && EPOCAS.length) {
      var tiempo = document.createElement('div');
      tiempo.className = 'eh-globo__tiempo';
      tiempo.innerHTML =
        '<div class="eh-globo__tiempo-fila">' +
          '<button type="button" data-t="hoy" class="on">Hoy</button>' +
          '<input type="range" min="0" max="' + (EPOCAS.length - 1) + '" value="' + (EPOCAS.length - 1) + '" ' +
            'aria-label="Año que se muestra en el mapa">' +
          '<span class="eh-globo__tiempo-ano"></span>' +
        '</div>' +
        '<div class="eh-globo__tiempo-texto"></div>';
      contenedor.appendChild(tiempo);

      var rango = tiempo.querySelector('input');
      var rotuloAno = tiempo.querySelector('.eh-globo__tiempo-ano');
      var texto = tiempo.querySelector('.eh-globo__tiempo-texto');
      var btnHoy = tiempo.querySelector('[data-t=hoy]');

      function pintarEpoca() {
        if (epoca === null) {
          rotuloAno.textContent = '';
          texto.innerHTML = '';
          btnHoy.classList.add('on');
          rango.value = EPOCAS.length - 1;
        } else {
          var e = EPOCAS[epoca];
          btnHoy.classList.remove('on');
          rotuloAno.textContent = e.ano;
          texto.innerHTML =
            '<strong>' + EH.escapar(e.titulo) + '</strong> ' +
            '<span class="eh-tenue">· ' + (e.territorios ? e.territorios.length : 0) + ' territorios</span>' +
            '<p>' + EH.escapar(e.texto) + '</p>' +
            /* Esta advertencia no se quita. El mapa pinta países de HOY, no
               fronteras de entonces: sin decirlo, el visitante creería que
               está viendo la frontera real de 1680. */
            '<p class="eh-tenue" style="font-size:.72rem">Se pintan los territorios de hoy que en esa ' +
            'época estaban bajo gobierno hispano. No son las fronteras de entonces: dibujarlas exactas ' +
            'sería inventarlas.' + (e.fuente ? ' ' + EH.escapar(e.fuente) : '') + '</p>';
        }
        repintar();
      }
      rango.addEventListener('input', function () {
        var i = parseInt(rango.value, 10);
        epoca = (i === EPOCAS.length - 1) ? null : i;
        pintarEpoca();
      });
      btnHoy.addEventListener('click', function () { epoca = null; pintarEpoca(); });
      pintarEpoca();
    }

    /* La tira de banderas: lo bonito de la pantalla y, a la vez, el único
       camino con teclado hasta cada país. */
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
        '<span><i class="eh-mapa__punto" style="background:#b51d33"></i> En disputa</span>' +
        '<span><i class="eh-mapa__punto" style="background:#3a6ea5"></i> Herencia y diáspora</span>' +
        '<span><i class="eh-mapa__punto" style="background:#4a3a52"></i> Huella sefardí</span>' +
        '<span><i class="eh-mapa__punto" style="background:rgba(93,168,214,.5)"></i> Mar de 200 millas</span>' +
        '<span>Arrastra para girar · rueda o pellizco para acercar · doble clic para ir</span>';
      contenedor.appendChild(ley);
    }

    medir();
    sincronizarMandos();
    pintar();
    requestAnimationFrame(latido);

    /* Un observador del contenedor, no el resize de la ventana: así se entera
       de que una columna de al lado se ha plegado. */
    if (window.ResizeObserver) {
      new ResizeObserver(function () { medir(); repintar(); }).observe(contenedor);
    } else {
      window.addEventListener('resize', function () { medir(); repintar(); });
    }

    /* Y una segunda red al volver de segundo plano. Con la pestaña oculta el
       navegador NO entrega los avisos del observador —comprobado: con
       document.hidden en true, un ResizeObserver recién creado no se dispara
       ni una vez—. Así que si alguien gira el teléfono mientras tiene la
       pestaña detrás, al volver el globo seguiría con el tamaño de antes:
       estirado y borroso. Aquí se vuelve a medir al reaparecer. */
    document.addEventListener('visibilitychange', function () {
      if (!document.hidden) { medir(); repintar(); }
    });

    return {
      irA: irA,
      volar: volar,
      elegir: function (id) { elegido = id; repintar(); },
      capa: function (k, v) { capas[k] = v; repintar(); }
    };
  }

  return {
    /* Misma firma que EH.mapa.pintar, para que cambiar de mapa plano a globo
       sea cambiar una palabra en la página y nada más. */
    pintar: function (contenedor, naciones, opciones) {
      if (!contenedor) return null;
      if (!EH.MUNDO) {
        /* Antes esto no decía nada y el hueco quedaba en negro: una portada
           con un agujero y ninguna explicación. */
        contenedor.innerHTML = '<p class="eh-tabla__vacio">No se pudieron cargar las fronteras del mundo ' +
          '(falta <code>activos/js/mundo.js</code>).</p>';
        return null;
      }
      return crear(contenedor, naciones, opciones || {});
    },
    ficha: function (contenedor, nacion, punto) {
      /* La ficha de nación es la de mapa.js. El globo solo le dice dónde
         ponerla: le pasa un objeto que finge ser un elemento con posición,
         porque es lo único que esa función lee. */
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
