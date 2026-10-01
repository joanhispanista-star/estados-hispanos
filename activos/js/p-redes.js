/* =========================================================================
   FRENTE DIGITAL
   =========================================================================
   POR QUÉ NO SE INCRUSTAN LOS FEEDS AUTOMÁTICAMENTE
   Sería lo fácil: pegar el script de TikTok, el de Instagram y el de X y
   dejar que la página se llene sola. Y sería un error en este sitio concreto.

   Esos scripts cargan desde servidores de Meta, ByteDance y X en cuanto
   alguien abre la página, y les cuentan quién visita un sitio de afiliación
   política — aunque el visitante no pulse nada, no tenga cuenta y no sepa que
   existen. La revisión legal lo dijo con todas las letras: en un sitio de
   militancia, un píxel de una red social delata al visitante ante un tercero.

   Así que aquí el contenido se carga SOLO cuando alguien lo pide, con un
   clic, y se dice por qué. Es un clic más y es la diferencia entre respetar a
   quien entra y venderlo sin que se entere.

   POR QUÉ NO HAY CONTADORES DE SEGUIDORES
   Porque no se pueden saber sin la API de cada red, y ninguna de las cuentas
   existe todavía. Un número inventado en la pantalla que mide el alcance del
   movimiento sería la mentira más tonta posible.
   ========================================================================= */
(function () {
  'use strict';

  /* Cómo se llama cada red y qué pide de verdad. El consejo no es decorativo:
     es la diferencia entre publicar y que lo vea alguien. */
  var PERFILES = {
    tiktok:    { n: 'TikTok',    que: 'Vídeo vertical de 30 a 60 s. Los tres primeros segundos deciden todo.' },
    instagram: { n: 'Instagram', que: 'Carrusel y reel. Las láminas se guardan y se reenvían; el texto largo no.' },
    facebook:  { n: 'Facebook',  que: 'Texto largo sin enlace en el cuerpo. Es donde están los mayores de 35.' },
    youtube:   { n: 'YouTube',   que: 'Vídeo largo y shorts. Es el único que sigue dando visitas meses después.' },
    x:         { n: 'X',         que: 'Hilos. Es donde discute la prensa y donde se cita al movimiento.' },
    whatsapp:  { n: 'WhatsApp',  que: 'Canal y estados. En el mundo hispano es el canal real, no un extra.' },
    telegram:  { n: 'Telegram',  que: 'Canal sin límite de tamaño. Sirve para la gente ya convencida.' },
    linkedin:  { n: 'LinkedIn',  que: 'Donde está el Círculo de Emprendedores y la prensa económica.' },
    twitch:    { n: 'Twitch',    que: 'Directos largos. Convierte poco y fideliza mucho.' },
    kick:      { n: 'Kick',      que: 'Alternativa a Twitch con menos competencia hispana.' }
  };

  function tarjetaCanal(k, url) {
    var p = PERFILES[k] || { n: k, que: '' };
    var abierto = !!url;
    return '<article class="eh-tarjeta' + (abierto ? '' : '') + '" style="' +
      (abierto ? 'border-color:var(--oro3)' : 'opacity:.6') + '">' +
      '<div class="eh-fila eh-fila--entre" style="align-items:flex-start">' +
        '<div class="eh-fila" style="gap:.6rem;align-items:center">' +
          '<span style="color:var(--oro2);display:flex">' + (EH.redes.ICONOS[k] || '') + '</span>' +
          '<b>' + EH.escapar(p.n) + '</b>' +
        '</div>' +
        '<span class="eh-etiqueta' + (abierto ? ' eh-etiqueta--verde' : '') + '">' +
          (abierto ? 'Abierto' : 'Sin abrir') + '</span>' +
      '</div>' +
      '<p class="eh-tarjeta__cuerpo" style="margin-top:.7rem">' + EH.escapar(p.que) + '</p>' +
      (abierto
        ? '<a class="eh-boton eh-boton--p eh-boton--oro" style="margin-top:.9rem" href="' +
          EH.escapar(url) + '" target="_blank" rel="noopener noreferrer">Ir al canal</a>'
        : '<p class="eh-tarjeta__pie">Se enciende solo al poner el enlace en ' +
          '<code>activos/js/config.js</code>.</p>') +
      '</article>';
  }

  EH.pagina = function () {
    var r = EH.CONFIG.redes || {};
    var claves = Object.keys(PERFILES);
    var abiertas = claves.filter(function (k) { return !!r[k]; });

    /* --- el estado, sin maquillaje --- */
    document.getElementById('ehEstadoCanales').innerHTML = abiertas.length
      ? '<div class="eh-aviso eh-aviso--bien"><span class="eh-aviso__icono">◆</span><div>' +
        '<strong>' + abiertas.length + ' de ' + claves.length + ' canales abiertos.</strong> ' +
        'No publicamos número de seguidores porque no se puede saber sin la interfaz de cada ' +
        'red, y un número inventado en la pantalla que mide el alcance del movimiento sería ' +
        'la mentira más tonta posible.</div></div>'
      : '<div class="eh-aviso"><span class="eh-aviso__icono">◆</span><div>' +
        '<strong>Todavía no hay ningún canal abierto.</strong> Es lo que es, y se dice. ' +
        'Abrir las cuentas es gratis y toma una tarde; lo que cuesta es sostenerlas. ' +
        'En cuanto exista una, se enciende sola aquí poniendo el enlace en ' +
        '<code>activos/js/config.js</code>.</div></div>';

    document.getElementById('ehCanales').innerHTML =
      '<div class="eh-rejilla eh-rejilla--3">' +
      claves.map(function (k) { return tarjetaCanal(k, r[k]); }).join('') +
      '</div>';

    /* --- el muro: publicaciones destacadas, a un clic ---
       EH.CONFIG.publicaciones es una lista de {red, url, titulo}. Mientras
       esté vacía, la sección explica qué va aquí en vez de fingir actividad. */
    var destacadas = EH.CONFIG.publicaciones || [];
    var muro = document.getElementById('ehMuroRedes');

    if (!destacadas.length) {
      muro.innerHTML = '<div class="eh-tarjeta">' +
        '<p class="eh-tarjeta__cuerpo">' +
          'Aquí van las publicaciones del movimiento, para poder verlas sin salir de la ' +
          'página. Todavía no hay ninguna.' +
        '</p>' +
        '<p class="eh-tarjeta__cuerpo" style="margin-top:.7rem">' +
          'Cuando las haya, se cargarán <b>solo al pulsar</b>, nunca solas. Un reproductor ' +
          'de TikTok o de Instagram que arranca al abrir la página le cuenta a esa empresa ' +
          'quién visita un sitio de afiliación política, aunque el visitante no pulse nada ' +
          'y ni siquiera tenga cuenta. Un clic de más es barato; eso no.' +
        '</p>' +
        '<p class="eh-tarjeta__pie">Se añaden en <code>activos/js/config.js</code>, en la ' +
        'lista <code>publicaciones</code>.</p></div>';
    } else {
      muro.innerHTML = '<div class="eh-rejilla eh-rejilla--2">' +
        destacadas.map(function (p, i) {
          var icono = EH.redes.ICONOS[p.red] || '';
          return '<article class="eh-tarjeta">' +
            '<div class="eh-fila" style="gap:.5rem;align-items:center">' +
              '<span style="color:var(--oro2);display:flex">' + icono + '</span>' +
              '<b>' + EH.escapar((PERFILES[p.red] || {}).n || p.red) + '</b>' +
            '</div>' +
            '<p class="eh-tarjeta__cuerpo" style="margin-top:.6rem">' +
              EH.escapar(p.titulo || '') + '</p>' +
            '<div data-incrustar="' + i + '" style="margin-top:.9rem">' +
              '<button class="eh-boton eh-boton--p eh-boton--oro" type="button">Cargar la publicación</button>' +
              '<p class="eh-tenue" style="margin-top:.5rem;font-size:.76rem">' +
                'Se carga desde ' + EH.escapar((PERFILES[p.red] || {}).n || p.red) +
                ' solo si pulsas. Antes de eso, esa empresa no sabe que estás aquí.</p>' +
            '</div></article>';
        }).join('') + '</div>';

      document.querySelectorAll('[data-incrustar]').forEach(function (caja) {
        caja.querySelector('button').addEventListener('click', function () {
          var p = destacadas[Number(caja.getAttribute('data-incrustar'))];
          caja.innerHTML = '<iframe src="' + EH.escapar(p.url) + '" loading="lazy" ' +
            'style="width:100%;aspect-ratio:9/14;border:1px solid var(--linea);border-radius:var(--radio-s)" ' +
            'allow="encrypted-media" referrerpolicy="no-referrer"></iframe>';
        });
      });
    }

    /* --- los guiones, que ya existen en el manual del recluta --- */
    var G = (EH.MANUAL && EH.MANUAL.guionesRedes) || [];
    document.getElementById('ehGuiones').innerHTML =
      '<div class="eh-aviso eh-aviso--mal"><span class="eh-aviso__icono">!</span><div>' +
        '<strong>Antes de copiar nada.</strong> ' +
        EH.escapar((EH.MANUAL && EH.MANUAL.reglaGuiones) || '') +
      '</div></div>' +
      G.map(function (g, i) {
        return '<article class="eh-tarjeta" style="margin-bottom:.9rem">' +
          '<div class="eh-fila eh-fila--entre" style="align-items:baseline">' +
            '<h3 class="eh-tarjeta__titulo" style="margin:0;font-size:1.05rem">' +
              EH.escapar(g.red) + '</h3>' +
            '<span class="eh-etiqueta">' + EH.escapar(g.formato) + '</span>' +
          '</div>' +
          '<pre style="white-space:pre-wrap;font-family:var(--sans);font-size:.87rem;' +
            'color:var(--suave);background:var(--bg2);border:1px solid var(--linea);' +
            'border-radius:var(--radio-s);padding:1rem;margin:.9rem 0;max-height:240px;' +
            'overflow:auto">' + EH.escapar(g.guion) + '</pre>' +
          '<button class="eh-boton eh-boton--p" type="button" data-guion="' + i + '">Copiar</button>' +
          '<p class="eh-tenue" style="margin-top:.7rem"><b class="eh-oro">Lo que lo hace funcionar:</b> ' +
            EH.escapar(g.consejo) + '</p>' +
          '<p class="eh-tenue" style="margin-top:.3rem"><b style="color:#f07a8e">El error de siempre:</b> ' +
            EH.escapar(g.errorComun) + '</p></article>';
      }).join('');

    document.querySelectorAll('[data-guion]').forEach(function (b) {
      b.addEventListener('click', function () {
        var g = G[Number(b.getAttribute('data-guion'))];
        EH.redes.copiar(g.guion);
        if (EH.datos.sesion()) {
          EH.datos.registrarAporte('difundir', 'guion:' + g.red, 'Usó el guion de ' + g.red)
            .catch(function () { });
        }
      });
    });

    /* --- munición: cifras verificadas, listas para disparar --- */
    var T = EH.TOTALES;
    var MUNICION = [
      'Quinientos millones de personas se entienden sin traductor. Veinticuatro naciones. ' +
        'Y negociamos en veinte mesas distintas, cada uno por su cuenta.',
      'Sumada, la Hispanidad es una de las mayores economías del planeta. Y menos del 15 % ' +
        'de nuestro comercio es entre nosotros. La Unión Europea ronda el 60 %.',
      'San Agustín, Florida, se fundó en 1565: cuarenta y dos años antes que Jamestown. ' +
        'Lo hispano en Norteamérica no llegó después. Llegó primero.',
      'En 1741, un hombre al que le faltaban una pierna y un ojo defendió Cartagena de Indias ' +
        'contra la mayor fuerza anfibia que Inglaterra había reunido nunca. Por eso hoy ' +
        'hablamos español.',
      'El derecho internacional nació en español, en Salamanca, discutiendo si la conquista ' +
        'era lícita. Es el único imperio de la historia que produjo sus propios acusadores.'
    ];

    document.getElementById('ehMunicion').innerHTML =
      '<div class="eh-rejilla eh-rejilla--2" style="text-align:left">' +
      MUNICION.map(function (m, i) {
        return '<div class="eh-tarjeta">' +
          '<p class="eh-tarjeta__cuerpo">' + EH.escapar(m) + '</p>' +
          '<div data-municion="' + i + '" style="margin-top:.9rem"></div></div>';
      }).join('') + '</div>';

    MUNICION.forEach(function (m, i) {
      var caja = document.querySelector('[data-municion="' + i + '"]');
      var url = location.href.split('#')[0].replace('redes.html', 'index.html');
      caja.innerHTML = EH.redes.botones(m, url, 'municion:' + i);
      EH.redes.activarBotones(caja, m, url, 'municion:' + i);
    });
  };
})();
