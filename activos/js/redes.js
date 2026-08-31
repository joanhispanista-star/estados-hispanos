/* =========================================================================
   FRENTE DIGITAL — redes sociales y difusión
   =========================================================================
   POR QUÉ LOS ICONOS SON DE TRAZO PROPIO Y NO LOS LOGOS DE MARCA
   Tres razones. Los logotipos oficiales son marcas registradas con normas de
   uso. Pesan y hay que traerlos de fuera, y esta plataforma tiene que abrir
   sin internet. Y un juego de iconos coherente se ve mejor que diez logos de
   estilos distintos amontonados.

   POR QUÉ UNA RED SIN ENLACE SALE APAGADA Y NO SE ESCONDE
   Enseñar diez redes que no existen es mentir sobre el tamaño del movimiento.
   Esconderlas hace creer que no hay plan. Se muestran apagadas y rotuladas
   "sin abrir": es la verdad, y además le recuerda a Joan lo que le falta.

   POR QUÉ SE MIMA TANTO EL COMPARTIR
   WhatsApp no es un competidor, es el canal por donde de verdad se mueve la
   gente en el mundo hispano. Todo lo compartible tiene que volver aquí.
   ========================================================================= */

window.EH = window.EH || {};

EH.redes = (function () {
  'use strict';

  var svg = function (d, relleno) {
    return '<svg viewBox="0 0 24 24" aria-hidden="true" fill="' + (relleno ? 'currentColor' : 'none') +
      '" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">' + d + '</svg>';
  };

  var ICONOS = {
    tiktok: svg('<path d="M15 3v10.5a4 4 0 1 1-3.2-3.92"/><path d="M15 3a5.5 5.5 0 0 0 5 4.5"/>'),
    instagram: svg('<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none"/>'),
    facebook: svg('<path d="M15 3h-2.5A4.5 4.5 0 0 0 8 7.5V10H5.5v4H8v7h4v-7h3l.6-4H12V7.6c0-.6.4-1 1-1H15z"/>'),
    youtube: svg('<rect x="2" y="5" width="20" height="14" rx="4.2"/><path d="M10.2 9.2l5 2.8-5 2.8z"/>'),
    x: svg('<path d="M4 4l7.6 9.2L4.5 20"/><path d="M20 4l-7.4 8.3L20 20h-3.6L4 4h3.6"/>'),
    whatsapp: svg('<path d="M3.5 20.5l1.3-4.1A8.2 8.2 0 1 1 8 19.6z"/><path d="M8.8 9c.4 2.6 3.6 5.8 6.2 6.2.8.1 1.4-.5 1.4-1.3l-2-.9-1 1a7.6 7.6 0 0 1-3.4-3.4l1-1L10 7.6c-.8 0-1.4.6-1.3 1.4z" fill="currentColor" stroke="none"/>'),
    telegram: svg('<path d="M21 4L2.8 11.2l5.4 1.7L19 6.5l-8.4 8v4.6l2.8-3.4 4.6 3.3z"/>'),
    linkedin: svg('<rect x="3" y="3" width="18" height="18" rx="4"/><path d="M7.5 10.5V17M7.5 7.4v.1M11.5 17v-3.6a2.1 2.1 0 0 1 4.2 0V17"/>'),
    twitch: svg('<path d="M4 3h16v11l-4 4h-3l-3 3H8v-3H4z"/><path d="M11 8v4M15 8v4"/>'),
    kick: svg('<path d="M4 3v18M4 12h4l5-6h4M8 12l5 6h4"/>'),
    enlace: svg('<path d="M10 13a4 4 0 0 0 5.7 0l3-3a4 4 0 1 0-5.7-5.7L11.5 6"/><path d="M14 11a4 4 0 0 0-5.7 0l-3 3a4 4 0 1 0 5.7 5.7L12.5 18"/>'),
    correo: svg('<rect x="2.5" y="4.5" width="19" height="15" rx="3"/><path d="M3 7l9 6 9-6"/>')
  };

  var NOMBRES = {
    tiktok: 'TikTok', instagram: 'Instagram', facebook: 'Facebook', youtube: 'YouTube',
    x: 'X', whatsapp: 'WhatsApp', telegram: 'Telegram', linkedin: 'LinkedIn',
    twitch: 'Twitch', kick: 'Kick'
  };

  var ORDEN = ['tiktok', 'instagram', 'facebook', 'youtube', 'x', 'whatsapp', 'telegram', 'linkedin', 'twitch', 'kick'];

  return {

    ICONOS: ICONOS,
    NOMBRES: NOMBRES,

    /* Cuántas redes están realmente abiertas. Lo usa la portada para no
       presumir de un frente digital que no existe. */
    abiertas: function () {
      var r = EH.CONFIG.redes || {};
      return ORDEN.filter(function (k) { return !!r[k]; });
    },

    /* La barra del pie: solo las que existen, más una nota si no hay ninguna. */
    barra: function () {
      var r = EH.CONFIG.redes || {};
      var vivas = ORDEN.filter(function (k) { return !!r[k]; });
      if (!vivas.length) {
        return '<p class="eh-tenue" style="margin:0">Las cuentas del movimiento todavía no están ' +
          'abiertas. Se activan solas al rellenarlas en <code>config.js</code>.</p>';
      }
      return '<div class="eh-redes">' + vivas.map(function (k) {
        return '<a class="eh-red" href="' + EH.escapar(r[k]) + '" target="_blank" rel="noopener noreferrer">' +
          ICONOS[k] + '<span>' + NOMBRES[k] + '</span></a>';
      }).join('') + '</div>';
    },

    /* La rejilla completa, con las que faltan visibles y apagadas. */
    rejilla: function () {
      var r = EH.CONFIG.redes || {};
      return '<div class="eh-redes">' + ORDEN.map(function (k) {
        if (r[k]) {
          return '<a class="eh-red" href="' + EH.escapar(r[k]) + '" target="_blank" rel="noopener noreferrer">' +
            ICONOS[k] + '<span>' + NOMBRES[k] + '</span></a>';
        }
        return '<span class="eh-red eh-red--sin" title="Todavía sin abrir">' +
          ICONOS[k] + '<span>' + NOMBRES[k] + ' · sin abrir</span></span>';
      }).join('') + '</div>';
    },

    /* ---------------------------------------------------------------------
       COMPARTIR
       Se prefiere la hoja nativa del sistema cuando existe, porque en un
       teléfono ofrece las apps que la persona usa de verdad. Los botones
       explícitos son el respaldo para el escritorio.
       --------------------------------------------------------------------- */
    compartir: function (texto, url) {
      url = url || location.href;
      if (navigator.share) {
        return navigator.share({ title: EH.CONFIG.movimiento, text: texto, url: url })
          .catch(function () { /* el usuario canceló: no es un error */ });
      }
      return EH.redes.copiar(texto + ' ' + url);
    },

    copiar: function (texto) {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        return navigator.clipboard.writeText(texto)
          .then(function () { EH.aviso('Copiado'); })
          .catch(function () { EH.redes.copiarAlaAntigua(texto); });
      }
      EH.redes.copiarAlaAntigua(texto);
      return Promise.resolve();
    },

    /* El portapapeles moderno exige contexto seguro. Al abrir la plataforma
       con doble clic (file://) no siempre lo hay, así que hace falta el
       método viejo o el botón de copiar no funcionaría nunca en local. */
    copiarAlaAntigua: function (texto) {
      var a = document.createElement('textarea');
      a.value = texto;
      a.setAttribute('readonly', '');
      a.style.position = 'fixed';
      a.style.left = '-9999px';
      document.body.appendChild(a);
      a.select();
      try { document.execCommand('copy'); EH.aviso('Copiado'); }
      catch (e) { EH.aviso('Copia el texto a mano: el navegador no lo permitió'); }
      document.body.removeChild(a);
    },

    /* Botonera de difusión. Cada uso registra un aporte de honor: difundir el
       movimiento ES un aporte a la hispanidad, y el sistema lo reconoce. */
    botones: function (texto, url, referencia) {
      url = url || location.href;
      var t = encodeURIComponent(texto);
      var u = encodeURIComponent(url);
      var enlaces = [
        { k: 'whatsapp', h: 'https://wa.me/?text=' + t + '%20' + u, n: 'WhatsApp' },
        { k: 'telegram', h: 'https://t.me/share/url?url=' + u + '&text=' + t, n: 'Telegram' },
        { k: 'x', h: 'https://twitter.com/intent/tweet?text=' + t + '&url=' + u, n: 'X' },
        { k: 'facebook', h: 'https://www.facebook.com/sharer/sharer.php?u=' + u, n: 'Facebook' }
      ];
      return '<div class="eh-redes" data-difundir="' + EH.escapar(referencia || '') + '">' +
        enlaces.map(function (e) {
          return '<a class="eh-red" href="' + e.h + '" target="_blank" rel="noopener noreferrer" data-red="' + e.k + '">' +
            ICONOS[e.k] + '<span>' + e.n + '</span></a>';
        }).join('') +
        '<button class="eh-red" type="button" data-red="copiar">' + ICONOS.enlace + '<span>Copiar enlace</span></button>' +
        '</div>';
    },

    /* Engancha la botonera después de pintarla. Se separa de botones() porque
       el HTML se inserta con innerHTML y los oyentes hay que ponerlos luego. */
    activarBotones: function (contenedor, texto, url, referencia) {
      if (!contenedor) return;
      contenedor.querySelectorAll('[data-red]').forEach(function (b) {
        b.addEventListener('click', function () {
          if (b.getAttribute('data-red') === 'copiar') EH.redes.copiar(texto + ' ' + (url || location.href));
          if (EH.datos.sesion()) {
            EH.datos.registrarAporte('difundir', referencia || null, 'Difundió por ' + b.getAttribute('data-red'))
              .catch(function () { /* el tope diario ya se alcanzó: no molesta al usuario */ });
          }
        });
      });
    }
  };
})();
