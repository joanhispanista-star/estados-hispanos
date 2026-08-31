/* =========================================================================
   PORTADA
   ========================================================================= */
(function () {
  'use strict';

  /* La meta de adhesiones sube por tramos. Una barra que va a un millón desde
     el primer día está siempre vacía y desanima; una que va al siguiente
     tramo se llena y empuja. */
  function metaSiguiente(n) {
    var tramos = [100, 500, 1000, 5000, 10000, 50000, 100000, 500000, 1000000];
    for (var i = 0; i < tramos.length; i++) if (n < tramos[i]) return tramos[i];
    return Math.ceil(n / 1000000) * 1000000 + 1000000;
  }

  EH.pagina = function () {
    var C = EH.CONFIG;

    document.getElementById('ehSello').innerHTML = EH.sello.grande(EH.NACIONES.length);
    document.getElementById('ehAvisoModo').innerHTML = EH.avisoModo();

    /* --- cifras --- */
    var T = EH.TOTALES;
    var cifras = [
      { n: EH.poblacion(T.hispanohablantesMundo), u: 'hispanohablantes', x: 'Segunda lengua materna del mundo.' },
      { n: EH.NACIONES.length, u: 'naciones y territorios', x: 'Veinte soberanos, más Puerto Rico, el Sáhara, Filipinas y la diáspora.' },
      { n: EH.magnitud(T.pibCombinadoMillonesUsd).replace(' billones', ' B'), u: 'de dólares de PIB', x: 'Sumado, el orden de magnitud de una potencia mundial.' },
      { n: '< 15 %', u: 'del comercio es entre nosotros', x: 'La Unión Europea ronda el 60 %. Ahí está todo el margen.' }
    ];
    document.getElementById('ehCifras').innerHTML = cifras.map(function (c) {
      return '<div class="eh-cifra"><span class="eh-cifra__n">' + EH.escapar(c.n) + '</span>' +
        '<span class="eh-cifra__u">' + EH.escapar(c.u) + '</span>' +
        '<span class="eh-cifra__x">' + EH.escapar(c.x) + '</span></div>';
    }).join('');
    document.getElementById('ehMetodo').textContent = T.notaMetodologica;

    /* --- mapa --- */
    var caja = document.getElementById('ehMapa');
    EH.mapa.pintar(caja, EH.NACIONES, {
      arcos: true,
      alPulsar: function (n, nodo) { EH.mapa.ficha(caja, n, nodo); }
    });

    /* --- cinta --- */
    // Se pinta dos veces seguidas porque la animación desplaza justo la mitad
    // del ancho: con una sola copia se vería el hueco al reiniciar el ciclo.
    var pieza = EH.LEMAS.map(function (l) {
      return '<span class="eh-cinta__pieza">' + EH.escapar(l) + '</span>';
    }).join('');
    document.getElementById('ehCinta').innerHTML = pieza + pieza;

    /* --- fundador --- */
    var f = C.fundador;
    document.getElementById('ehFundadorNombre').textContent = f.nombre;
    var semblanza = document.getElementById('ehSemblanza');
    semblanza.innerHTML = f.semblanza
      ? '<p>' + EH.escapar(f.semblanza) + '</p>'
      : '<p>' + EH.escapar(f.ciudad) + '. Fundó Los Estados Hispanos en ' + EH.escapar(f.desde) +
        ' con una idea sencilla y difícil: que quinientos millones de personas que ya se ' +
        'entienden dejen de negociar por separado.</p>' +
        (f.frase ? '<p class="eh-consigna">' + EH.escapar(f.frase) + '</p>' : '');

    /* --- adhesiones --- */
    EH.datos.adhesiones().then(function (n) {
      var meta = metaSiguiente(n);
      document.getElementById('ehReconocimientos').textContent = EH.numero(n);
      document.getElementById('ehBarraRec').style.width = Math.min(100, (n / meta) * 100) + '%';
      document.getElementById('ehMetaRec').textContent =
        EH.numero(meta - n) + ' más para llegar a ' + EH.numero(meta);

      var yo = EH.datos.sesion();
      var caja = document.getElementById('ehBotonRec');

      if (!yo) {
        caja.innerHTML = '<a class="eh-boton eh-boton--oro eh-boton--bloque" href="inscripcion.html">' +
          'Inscribirme y adherirme</a>';
        return;
      }

      return EH.datos.aportes(yo.id).then(function (mios) {
        var ya = mios.some(function (a) { return a.tipo === 'adherir'; });
        if (ya) {
          caja.innerHTML = '<p class="eh-etiqueta eh-etiqueta--verde" style="font-size:.7rem">' +
            'Ya te adheriste al movimiento</p>';
          return;
        }
        caja.innerHTML = '<button class="eh-boton eh-boton--oro eh-boton--bloque" type="button" id="ehRec">' +
          'Me adhiero al movimiento</button>';
        document.getElementById('ehRec').addEventListener('click', function () {
          EH.datos.registrarAporte('adherir', null, 'Se adhirió al movimiento')
            .then(function () {
              EH.aviso('Adhesión registrada. Gracias.');
              EH.pagina();
            })
            .catch(function (e) { EH.aviso(e.message); });
        });
      });
    });

    /* --- redes --- */
    document.getElementById('ehRedes').innerHTML = EH.redes.rejilla();
  };
})();
