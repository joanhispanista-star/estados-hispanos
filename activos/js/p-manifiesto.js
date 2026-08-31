/* =========================================================================
   EL MANIFIESTO
   =========================================================================
   POR QUÉ CADA SECCIÓN TIENE SU PROPIO ENLACE Y SU PROPIO BOTÓN DE COMPARTIR
   Nadie comparte un manifiesto entero. Se comparte la sección que le tocó a
   uno. Con ancla por sección, el que la recibe cae exactamente en el párrafo
   que le mandaron y no en el principio de un texto largo, que es donde se
   abandona la lectura.

   POR QUÉ SE PUEDE DESCARGAR EN TEXTO PLANO
   Para que se pueda leer en voz alta en un acto, imprimir en un volante o
   pegar en un documento sin depender de que esta web exista.
   ========================================================================= */
(function () {
  'use strict';

  function parrafos(cuerpo) {
    return String(cuerpo).split(/\n\s*\n/).map(function (p) {
      return '<p>' + EH.escapar(p.trim()) + '</p>';
    }).join('');
  }

  function textoPlano(M) {
    var l = [];
    l.push(M.titulo.toUpperCase());
    l.push('');
    l.push(M.entradilla);
    l.push('');
    M.secciones.forEach(function (s) {
      l.push('');
      l.push(s.numero + '. ' + s.titulo.toUpperCase());
      l.push('');
      l.push(s.cuerpo);
      l.push('');
      l.push('    « ' + s.consigna + ' »');
    });
    l.push('');
    l.push('---');
    l.push(M.cierre);
    l.push('');
    l.push(EH.CONFIG.movimiento + (EH.CONFIG.dominio ? ' · ' + EH.CONFIG.dominio : ''));
    return l.join('\n');
  }

  EH.pagina = function () {
    var M = EH.MANIFIESTO;

    document.getElementById('ehTitulo').textContent = M.titulo;
    document.getElementById('ehEntradilla').textContent = M.entradilla;
    document.getElementById('ehCierre').textContent = M.cierre;

    /* --- índice --- */
    document.getElementById('ehIndice').innerHTML =
      '<div class="eh-rejilla eh-rejilla--4" style="gap:.5rem">' +
      M.secciones.map(function (s) {
        return '<a class="eh-tarjeta eh-tarjeta--enlace" href="#s' + EH.escapar(s.numero) + '" ' +
          'style="padding:.8rem .9rem">' +
          '<span class="eh-numeral" style="font-size:1.3rem">' + EH.escapar(s.numero) + '</span> ' +
          '<span style="font-size:.87rem;font-weight:600">' + EH.escapar(s.titulo) + '</span></a>';
      }).join('') + '</div>';

    /* --- secciones --- */
    document.getElementById('ehSecciones').innerHTML = M.secciones.map(function (s) {
      return '<article id="s' + EH.escapar(s.numero) + '" style="margin-bottom:3.5rem;scroll-margin-top:80px">' +
        '<div class="eh-fila" style="gap:1rem;align-items:baseline;margin-bottom:.6rem">' +
          '<span class="eh-numeral">' + EH.escapar(s.numero) + '</span>' +
          '<h2 style="margin:0;flex:1;min-width:200px">' + EH.escapar(s.titulo) + '</h2>' +
        '</div>' +
        '<div class="eh-prosa">' + parrafos(s.cuerpo) + '</div>' +
        '<p class="eh-consigna">' + EH.escapar(s.consigna) + '</p>' +
        '<div class="eh-fila" data-seccion="' + EH.escapar(s.numero) + '"></div>' +
        '</article>';
    }).join('');

    /* Botonera de difusión por sección. Se comparte la CONSIGNA, no el título:
       es lo único de un manifiesto que cabe en un mensaje y se recuerda. */
    M.secciones.forEach(function (s) {
      var caja = document.querySelector('[data-seccion="' + s.numero + '"]');
      var url = location.href.split('#')[0] + '#s' + s.numero;
      var texto = '«' + s.consigna + '» — ' + EH.MANIFIESTO.titulo;
      caja.innerHTML = EH.redes.botones(texto, url, 'manifiesto:' + s.numero);
      EH.redes.activarBotones(caja, texto, url, 'manifiesto:' + s.numero);
    });

    /* --- compartir el manifiesto entero --- */
    var comp = document.getElementById('ehCompartir');
    var t = '«' + (M.secciones[0] ? M.secciones[0].consigna : M.titulo) + '» — ' + M.titulo;
    comp.innerHTML = EH.redes.botones(t, location.href.split('#')[0], 'manifiesto');
    EH.redes.activarBotones(comp, t, location.href.split('#')[0], 'manifiesto');

    /* --- descarga ---
       Se usa un Blob y no un data: porque los manifiestos con acentos se
       corrompen al pasar por btoa. Con Blob y charset explícito, el archivo
       se abre bien en Windows, que es donde va a acabar. */
    document.getElementById('ehDescargar').addEventListener('click', function () {
      var blob = new Blob(['﻿' + textoPlano(M)], { type: 'text/plain;charset=utf-8' });
      var a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'Manifiesto-Hispano.txt';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setTimeout(function () { URL.revokeObjectURL(a.href); }, 1000);
      EH.aviso('Manifiesto descargado');
    });
  };
})();
