/* =========================================================================
   PÁGINAS LEGALES
   =========================================================================
   Cada archivo de legal/ es una carcasa de veinte líneas que declara qué
   documento pinta:  <body data-doc="aviso-de-privacidad" data-base="../">
   El contenido vive en activos/js/legal.js. Así los ocho documentos no se
   separan entre sí al primer cambio.
   ========================================================================= */
(function () {
  'use strict';

  function parrafos(texto) {
    return String(texto).split(/\n\s*\n/).map(function (p) {
      var t = p.trim();
      // Las listas del documento vienen como líneas sueltas dentro del mismo
      // bloque. Si el bloque tiene varias líneas, se pinta como lista: en un
      // texto legal, un muro de líneas pegadas no lo lee nadie.
      if (t.indexOf('\n') >= 0) {
        return '<ul class="eh-nacion__orgullo">' + t.split('\n').map(function (l) {
          return '<li>' + EH.escapar(l.trim()) + '</li>';
        }).join('') + '</ul>';
      }
      return '<p>' + EH.escapar(t) + '</p>';
    }).join('');
  }

  EH.pagina = function () {
    var clave = document.body.getAttribute('data-doc');
    var doc = EH.LEGAL[clave];
    var caja = document.getElementById('ehContenido');

    if (!doc) {
      caja.innerHTML = '<div class="eh-aviso eh-aviso--mal"><span class="eh-aviso__icono">!</span>' +
        '<div><strong>Ese documento no existe.</strong> Puede que el enlace esté mal escrito.</div></div>';
      return;
    }

    document.title = doc.titulo + ' · ' + EH.CONFIG.movimiento;

    var otros = Object.keys(EH.LEGAL).filter(function (k) { return k !== clave; });

    caja.innerHTML =
      '<p class="eh-rotulo">Documento legal</p>' +
      '<h1 style="font-size:clamp(1.7rem,4.4vw,2.6rem)">' + EH.escapar(doc.titulo) + '</h1>' +
      '<p class="eh-plomo">' + EH.escapar(doc.entradilla) + '</p>' +
      '<p class="eh-tenue">Versión ' + EH.escapar(EH.CONFIG.versionConsentimiento) + '</p>' +

      '<div class="eh-prosa" style="margin-top:2rem">' +
        doc.secciones.map(function (s) {
          return '<section style="margin-bottom:2.2rem">' +
            '<h2 style="font-size:1.25rem">' + EH.escapar(s.t) + '</h2>' +
            parrafos(s.c) + '</section>';
        }).join('') +
      '</div>' +

      '<div class="eh-tarjeta eh-tarjeta--oro" style="margin-top:2rem">' +
        '<h3 class="eh-tarjeta__titulo">Ejercer tus derechos no requiere escribir a nadie</h3>' +
        '<p class="eh-tarjeta__cuerpo">Puedes ver, descargar y borrar todos tus datos desde una ' +
        'sola página, con un botón que funciona de verdad.</p>' +
        '<a class="eh-boton eh-boton--oro eh-boton--p" href="tus-derechos.html" style="margin-top:.9rem">' +
        'Ver, exportar y borrar mis datos</a>' +
      '</div>' +

      '<div style="margin-top:2.5rem">' +
        '<h3 style="font-size:1rem">Los demás documentos</h3>' +
        '<div class="eh-redes" style="margin-top:.8rem">' +
          otros.map(function (k) {
            return '<a class="eh-red" href="' + EH.escapar(k) + '.html">' +
              '<span>' + EH.escapar(EH.LEGAL[k].titulo) + '</span></a>';
          }).join('') +
        '</div>' +
      '</div>';
  };
})();
