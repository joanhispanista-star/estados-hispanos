/* =========================================================================
   LAS NACIONES
   =========================================================================
   POR QUÉ LA FICHA COMPLETA VA EN UN CUADRO Y NO EN OTRA PÁGINA
   Veinticuatro páginas separadas serían veinticuatro archivos que mantener
   sincronizados con los datos. El cuadro se abre sobre la rejilla y escribe
   la nación en la dirección (#colombia), así que el enlace se puede compartir
   y al abrirlo se ve la ficha directamente. Se comparte igual que una página
   propia sin ser veinticuatro páginas.
   ========================================================================= */
(function () {
  'use strict';

  var FILTROS = [
    { k: 'todas', n: 'Las 24' },
    { k: 'soberano', n: 'Soberanas' },
    { k: 'territorio', n: 'Territorio' },
    { k: 'disputado', n: 'En disputa' },
    { k: 'herencia', n: 'Herencia' },
    { k: 'diaspora', n: 'Diáspora' }
  ];

  var ETIQUETAS = {
    soberano: 'Estado soberano',
    territorio: 'Territorio no incorporado',
    disputado: 'Territorio en disputa',
    herencia: 'Herencia hispana',
    diaspora: 'Diáspora'
  };

  function tarjeta(n) {
    return '<article class="eh-nacion" data-id="' + EH.escapar(n.id) + '" tabindex="0" role="button" ' +
      'aria-label="Ver la ficha de ' + EH.escapar(n.nombre) + '" style="cursor:pointer">' +
      '<div class="eh-nacion__cabeza">' +
        '<span class="eh-nacion__bandera">' + EH.banderas.svg(n.id, 44) + '</span>' +
        '<div style="min-width:0">' +
          '<h3 class="eh-nacion__nombre">' + EH.escapar(n.nombre) + '</h3>' +
          '<p class="eh-nacion__oficial">' + EH.escapar(n.capital) + '</p>' +
        '</div>' +
      '</div>' +
      '<div class="eh-nacion__cuerpo">' +
        '<div class="eh-nacion__datos">' +
          '<div class="eh-nacion__dato"><b>' + EH.poblacion(n.poblacion) + '</b><span>habitantes</span></div>' +
          '<div class="eh-nacion__dato"><b>' + EH.poblacion(n.hispanohablantes) + '</b><span>hablan español</span></div>' +
          '<div class="eh-nacion__dato"><b>' + EH.magnitud(n.pibNominalMillonesUsd) + '</b><span>PIB en USD</span></div>' +
        '</div>' +
        '<p class="eh-tarjeta__cuerpo">' + EH.escapar(n.resumen) + '</p>' +
      '</div>' +
      '<div class="eh-tarjeta__pie" style="margin:0 1.2rem 1.1rem">' +
        '<span class="eh-etiqueta eh-etiqueta--' + EH.escapar(n.estatus) + '">' +
          EH.escapar(ETIQUETAS[n.estatus] || n.estatus) + '</span>' +
      '</div>' +
      '</article>';
  }

  function ficha(n) {
    var orgullo = (n.orgullo || []).map(function (o) {
      return '<li>' + EH.escapar(o) + '</li>';
    }).join('');

    var figuras = (n.figuras || []).map(function (f) {
      return '<div style="margin-bottom:.8rem">' +
        '<b style="color:var(--oro2)">' + EH.escapar(f.nombre) + '</b><br>' +
        '<span style="font-size:.87rem;color:var(--suave)">' + EH.escapar(f.porQue) + '</span></div>';
    }).join('');

    /* La nota honesta va SIEMPRE que exista, y va destacada, no escondida al
       final en letra pequeña. Es la pieza que separa a este sitio de la
       propaganda: un movimiento que solo publica lo que le favorece no dura
       el primer debate. */
    var honesta = n.notaHonesta
      ? '<div class="eh-aviso"><span class="eh-aviso__icono">◆</span><div>' +
        '<strong>Lo que también hay que decir.</strong> ' + EH.escapar(n.notaHonesta) + '</div></div>'
      : '';

    var confianza = n.confianzaDatos && n.confianzaDatos !== 'alta'
      ? '<p class="eh-tenue" style="margin-top:.8rem">Fiabilidad de las cifras de esta ficha: <b>' +
        EH.escapar(n.confianzaDatos) + '</b>. Confírmalas en la fuente antes de citarlas.</p>'
      : '';

    return '<button class="eh-mapa__cerrar" type="button" id="ehCerrar" aria-label="Cerrar">×</button>' +
      '<div class="eh-fila" style="gap:.9rem;margin-bottom:.3rem">' +
        EH.banderas.svg(n.id, 62, 'eh-bandera--g') +
        '<div style="min-width:0">' +
          '<h2 id="ehModalTitulo" style="margin:0;font-size:1.7rem">' + EH.escapar(n.nombre) + '</h2>' +
          '<p class="eh-tenue" style="margin:0">' + EH.escapar(n.nombreOficial) + '</p>' +
        '</div>' +
      '</div>' +
      '<span class="eh-etiqueta eh-etiqueta--' + EH.escapar(n.estatus) + '">' +
        EH.escapar(ETIQUETAS[n.estatus] || n.estatus) + '</span>' +

      /* La capital solo entra en la rejilla si es un nombre corto. En la ficha
         de la diáspora estadounidense, «capital» es una frase entera sobre sus
         núcleos, y metida en una casilla de cifra desbordaba y se leía fatal.
         Cuando es larga, baja a una línea propia debajo. */
      '<div class="eh-nacion__datos" style="margin:1.2rem 0">' +
        '<div class="eh-nacion__dato"><b>' + EH.poblacion(n.poblacion) + '</b><span>habitantes</span></div>' +
        '<div class="eh-nacion__dato"><b>' + EH.poblacion(n.hispanohablantes) + '</b><span>hablan español</span></div>' +
        '<div class="eh-nacion__dato"><b>' + EH.magnitud(n.pibNominalMillonesUsd) + '</b><span>PIB en USD</span></div>' +
        (String(n.capital).length <= 24
          ? '<div class="eh-nacion__dato"><b>' + EH.escapar(n.capital) + '</b><span>capital</span></div>'
          : '') +
      '</div>' +
      (String(n.capital).length > 24
        ? '<p class="eh-tenue" style="margin:-.6rem 0 1rem"><b style="color:var(--oro2)">Capital:</b> ' +
          EH.escapar(n.capital) + '</p>'
        : '') +

      '<p style="color:var(--suave)">' + EH.escapar(n.resumen) + '</p>' +

      (n.lema ? '<p class="eh-consigna" style="font-size:1.1rem">«' + EH.escapar(n.lema) + '»</p>' : '') +

      '<h3 style="font-size:1.05rem;margin-top:1.4rem">Para sacar pecho</h3>' +
      '<ul class="eh-nacion__orgullo">' + orgullo + '</ul>' +

      '<h3 style="font-size:1.05rem">Nombres que abrieron puerta</h3>' +
      figuras +

      '<h3 style="font-size:1.05rem;margin-top:1.2rem">Lo que le dio a la Hispanidad</h3>' +
      '<p style="color:var(--suave);font-size:.93rem">' + EH.escapar(n.aporteALaHispanidad) + '</p>' +

      honesta + confianza +

      /* La diáspora estadounidense tiene página propia: es la única ficha que
         no cabe en una tarjeta, y es la que el movimiento más necesita que se
         lea entera. */
      (n.id === 'estados-unidos-hispano'
        ? '<a class="eh-boton eh-boton--oro eh-boton--bloque" href="eeuu.html" style="margin-top:1rem">' +
          'Ver la página completa de la Hispanidad estadounidense</a>'
        : '') +

      '<div class="eh-tarjeta__pie">' +
        '<div style="display:grid;gap:.35rem;font-size:.8rem">' +
          '<span><b>Gentilicio:</b> ' + EH.escapar(n.gentilicio) + '</span>' +
          '<span><b>Moneda:</b> ' + EH.escapar(n.moneda) + '</span>' +
          '<span><b>Independencia:</b> ' + EH.escapar(n.independencia) + '</span>' +
          '<span><b>Lenguas:</b> ' + EH.escapar((n.idiomasCooficiales || []).join('; ') || 'español') + '</span>' +
        '</div>' +
      '</div>' +

      '<div id="ehCompartir" style="margin-top:1.2rem"></div>';
  }

  var modal, caja;

  function abrir(id) {
    var n = EH.nacion(id);
    if (!n) return;
    caja.innerHTML = ficha(n);
    modal.classList.add('on');
    caja.scrollTop = 0;
    if (history.replaceState) history.replaceState(null, '', '#' + id);
    document.getElementById('ehCerrar').addEventListener('click', cerrar);

    var comp = document.getElementById('ehCompartir');
    var texto = n.nombre + ' en el mapa de Los Estados Hispanos: ' +
      ((n.orgullo && n.orgullo[0]) || n.resumen);
    comp.innerHTML = EH.redes.botones(texto, location.href.split('#')[0] + '#' + id, 'nacion:' + id);
    EH.redes.activarBotones(comp, texto, location.href.split('#')[0] + '#' + id, 'nacion:' + id);
    // El foco entra al cuadro: si no, quien navega con teclado sigue en la
    // rejilla de detrás y no se entera de que se abrió nada.
    caja.setAttribute('tabindex', '-1');
    caja.focus();
  }

  function cerrar() {
    modal.classList.remove('on');
    if (history.replaceState) history.replaceState(null, '', location.pathname);
  }

  EH.pagina = function () {
    modal = document.getElementById('ehModal');
    caja = document.getElementById('ehModalCaja');

    var mapa = document.getElementById('ehMapa');
    EH.globo.pintar(mapa, EH.NACIONES, {
      alPulsar: function (n) { abrir(n.id); }
    });

    document.getElementById('ehFiltros').innerHTML = FILTROS.map(function (f, i) {
      var n = f.k === 'todas' ? EH.NACIONES.length
        : EH.NACIONES.filter(function (x) { return x.estatus === f.k; }).length;
      return '<button type="button" data-f="' + f.k + '"' + (i === 0 ? ' class="on"' : '') + '>' +
        EH.escapar(f.n) + ' <span class="eh-tenue">' + n + '</span></button>';
    }).join('');

    function pintar(filtro) {
      var lista = filtro === 'todas' ? EH.NACIONES_ORDENADAS
        : EH.NACIONES_ORDENADAS.filter(function (n) { return n.estatus === filtro; });
      document.getElementById('ehRejilla').innerHTML = lista.map(tarjeta).join('');
      document.querySelectorAll('.eh-nacion[data-id]').forEach(function (el) {
        el.addEventListener('click', function () { abrir(el.getAttribute('data-id')); });
        el.addEventListener('keydown', function (e) {
          if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); abrir(el.getAttribute('data-id')); }
        });
      });
    }

    document.querySelectorAll('#ehFiltros button').forEach(function (b) {
      b.addEventListener('click', function () {
        document.querySelectorAll('#ehFiltros button').forEach(function (o) { o.classList.remove('on'); });
        b.classList.add('on');
        pintar(b.getAttribute('data-f'));
      });
    });

    pintar('todas');

    modal.addEventListener('click', function (e) { if (e.target === modal) cerrar(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') cerrar(); });

    // Si alguien llega con #colombia, se le abre la ficha directamente.
    var h = location.hash.replace('#', '');
    if (h && EH.nacion(h)) abrir(h);
  };
})();
