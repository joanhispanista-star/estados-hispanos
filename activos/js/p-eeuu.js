/* =========================================================================
   LA HISPANIDAD DE ESTADOS UNIDOS
   =========================================================================
   POR QUÉ LAS DOS BANDERAS JUNTAS ARRIBA
   Es el argumento entero de la página en una imagen, antes de leer una sola
   palabra: no hay que escoger. El fundador lo pidió así —«quiero ver la
   hermosa bandera de Estados Unidos»— y además es lo que la declaración
   defiende: ser hispano y ser estadounidense no se estorban.

   POR QUÉ CADA CIFRA LLEVA SU FUENTE A LA VISTA
   Porque esta es la página que un adversario va a intentar desmontar
   primero, y porque las cifras de la comunidad hispana estadounidense
   circulan infladas por todas partes. Una cifra con informe y año es un
   argumento; sin ellos es una consigna.
   ========================================================================= */
(function () {
  'use strict';

  var CAMPOS = {
    ciencia: 'Ciencia', politica: 'Servicio público', cultura: 'Cultura',
    empresa: 'Empresa', deporte: 'Deporte', servicio: 'Servicio', letras: 'Letras'
  };

  function parrafos(t) {
    return String(t || '').split(/\n\s*\n/).map(function (p) {
      return '<p>' + EH.escapar(p.trim()) + '</p>';
    }).join('');
  }

  function etiquetaConfianza(c) {
    if (!c || c === 'alta') return '';
    return '<span class="eh-etiqueta eh-etiqueta--territorio" style="margin-left:.4rem">' +
      'fiabilidad ' + EH.escapar(c) + '</span>';
  }

  EH.pagina = function () {
    var E = EH.EEUU;

    /* --- las dos banderas, juntas y del mismo tamaño --- */
    document.getElementById('ehBanderas').innerHTML =
      EH.banderas.svg('estados-unidos-hispano', 96, 'eh-bandera--g') +
      '<span style="font-family:var(--display);font-size:2rem;color:var(--oro3);line-height:1">+</span>' +
      EH.sello.mini().replace('viewBox="0 0 48 48"', 'viewBox="0 0 48 48" width="56" height="56"');

    document.getElementById('ehTitulo').textContent = E.declaracion.titulo;
    document.getElementById('ehConsigna').textContent = E.declaracion.consigna;
    document.getElementById('ehCuerpo').innerHTML = parrafos(E.declaracion.cuerpo);

    var comp = document.getElementById('ehCompartirDecl');
    var texto = '«' + E.declaracion.consigna + '» — ' + E.declaracion.titulo;
    comp.innerHTML = EH.redes.botones(texto, location.href.split('#')[0], 'eeuu');
    EH.redes.activarBotones(comp, texto, location.href.split('#')[0], 'eeuu');

    /* --- los hitos, en línea de tiempo --- */
    document.getElementById('ehHitos').innerHTML = (E.llegamosPrimero || []).map(function (h) {
      return '<article class="eh-tarjeta" style="margin-bottom:1rem;border-left:3px solid var(--oro3)">' +
        '<div class="eh-fila" style="gap:1rem;align-items:baseline">' +
          '<span class="eh-numeral" style="font-size:1.5rem;white-space:nowrap">' +
            EH.escapar(h.anio) + '</span>' +
          '<h3 class="eh-tarjeta__titulo" style="margin:0;flex:1;min-width:220px">' +
            EH.escapar(h.titulo) + etiquetaConfianza(h.confianza) + '</h3>' +
        '</div>' +
        '<p class="eh-tarjeta__cuerpo" style="margin-top:.8rem">' + EH.escapar(h.relato) + '</p>' +
        '<p class="eh-tarjeta__pie"><b class="eh-oro">Por qué importa:</b> ' +
          EH.escapar(h.porQueImporta) + '</p>' +
        '</article>';
    }).join('');

    /* --- las cifras, con su fuente a la vista --- */
    document.getElementById('ehCifras').innerHTML = (E.cifrasDePoder || []).map(function (c) {
      return '<article class="eh-tarjeta eh-tarjeta--oro">' +
        '<span class="eh-cifra__n" style="font-size:clamp(1.6rem,3.4vw,2.4rem);text-align:left">' +
          EH.escapar(c.numero) + '</span>' +
        '<span class="eh-cifra__u" style="text-align:left">' + EH.escapar(c.unidad) + '</span>' +
        '<p class="eh-tarjeta__cuerpo" style="margin-top:.8rem">' + EH.escapar(c.explicacion) + '</p>' +
        '<p class="eh-tarjeta__pie"><b>Fuente:</b> ' + EH.escapar(c.fuente) +
          etiquetaConfianza(c.confianza) + '</p>' +
        '</article>';
    }).join('');

    /* --- la huella en el mapa --- */
    var H = E.huellaEnElMapa || {};
    document.getElementById('ehHuellaIntro').textContent = H.introduccion || '';

    document.getElementById('ehEstados').innerHTML =
      '<div class="eh-rejilla eh-rejilla--4">' +
      (H.estados || []).map(function (e) {
        return '<div class="eh-tarjeta" style="padding:1rem">' +
          '<b style="font-family:var(--display);font-size:1.1rem;color:var(--oro2)">' +
            EH.escapar(e.nombre) + '</b>' +
          '<p class="eh-tarjeta__cuerpo" style="margin-top:.35rem;font-size:.85rem">' +
            EH.escapar(e.origen) + '</p></div>';
      }).join('') + '</div>';

    if ((H.ciudades || []).length) {
      document.getElementById('ehCiudades').innerHTML =
        '<div class="eh-tarjeta">' +
        '<h4 style="margin-bottom:.7rem">Y las ciudades</h4>' +
        '<p class="eh-tarjeta__cuerpo">' +
          H.ciudades.map(function (c) {
            return '<span class="eh-etiqueta" style="margin:0 .3rem .4rem 0;display:inline-block">' +
              EH.escapar(c) + '</span>';
          }).join('') +
        '</p></div>';
    }

    /* --- las figuras ---
       Las fichas de personas vivas llevan hechos públicos y nada más. No hay
       ni una frase que las ponga del lado del movimiento: ninguna ha dado su
       consentimiento, y varias ocupan cargos que lo hacen imposible. */
    document.getElementById('ehFiguras').innerHTML = (E.figuras || []).map(function (f) {
      return '<article class="eh-tarjeta">' +
        '<h3 class="eh-tarjeta__titulo" style="font-size:1.05rem">' + EH.escapar(f.nombre) + '</h3>' +
        '<div class="eh-fila" style="gap:.35rem;margin:.5rem 0">' +
          '<span class="eh-etiqueta eh-etiqueta--soberano">' +
            EH.escapar(CAMPOS[f.campo] || f.campo) + '</span>' +
          '<span class="eh-etiqueta">' + EH.escapar(f.origen) + '</span>' +
        '</div>' +
        '<p class="eh-tarjeta__cuerpo">' + EH.escapar(f.porQue) + '</p>' +
        '</article>';
    }).join('');

    var vivas = (E.figuras || []).filter(function (f) { return f.vivo; }).length;
    if (vivas) {
      document.getElementById('ehDescargoFiguras').innerHTML =
        '<div class="eh-aviso eh-aviso--info"><span class="eh-aviso__icono">◆</span><div>' +
        '<strong>Ninguna de estas personas pertenece a este movimiento ni lo respalda.</strong> ' +
        'De las ' + (E.figuras || []).length + ' que aparecen, ' + vivas + ' están vivas y no han ' +
        'dado su consentimiento para figurar aquí; algunas ocupan cargos que lo harían imposible. ' +
        'Se reconoce su obra pública, que es distinto. Si alguna quiere que retiremos su ficha, se ' +
        'retira en 48 horas, sin discutir.' +
        '</div></div>';
    }

    document.getElementById('ehNotaHonesta').innerHTML =
      '<strong>Lo que también hay que decir.</strong> ' + EH.escapar(E.notaHonesta || '');
  };
})();
