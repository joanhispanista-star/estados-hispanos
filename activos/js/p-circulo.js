/* =========================================================================
   CÍRCULO DE EMPRENDEDORES
   =========================================================================
   POR QUÉ LAS PROHIBICIONES VAN ARRIBA Y NO EN LA LETRA PEQUEÑA
   Un apartado que se llama "cómo hacerse rico" es indistinguible, a primera
   vista, de las mil estafas que usan ese mismo título. La única forma de que
   se note la diferencia en los primeros diez segundos es declarar de entrada
   lo que aquí NO se hace. Además, decir "no damos señales de inversión" y
   luego dar una es responsabilidad legal: la declaración obliga y por eso la
   revisión adversarial reescribió la lección del riesgo cambiario.

   POR QUÉ TODA RUTA ENSEÑA SUS TRAMPAS
   Porque el emprendedor con experiencia reconoce al instante si el que
   escribe ha perdido dinero alguna vez. Las trampas son lo que hace creíble
   el resto de la página.
   ========================================================================= */
(function () {
  'use strict';

  function ruta(r, i) {
    var trampas = (r.trampas || []).map(function (t) {
      return '<li>' + EH.escapar(t) + '</li>';
    }).join('');

    return '<article class="eh-tarjeta" style="margin-bottom:1.1rem">' +
      '<div class="eh-fila" style="gap:1rem;align-items:baseline">' +
        '<span class="eh-numeral">' + (i + 1) + '</span>' +
        '<h3 class="eh-tarjeta__titulo" style="margin:0;flex:1;min-width:200px">' +
          EH.escapar(r.nombre) + '</h3>' +
      '</div>' +

      '<div class="eh-fila" style="gap:.5rem;margin:.9rem 0">' +
        '<span class="eh-etiqueta">Para: ' + EH.escapar(r.paraQuien) + '</span>' +
        '<span class="eh-etiqueta eh-etiqueta--soberano">Capital: ' + EH.escapar(r.capitalInicial) + '</span>' +
      '</div>' +

      '<p class="eh-tarjeta__cuerpo">' + EH.escapar(r.comoFunciona) + '</p>' +

      '<div class="eh-nacion__dato" style="margin:1rem 0;background:var(--oro-vidrio);border-color:var(--oro3)">' +
        '<span style="color:var(--oro)">El primer paso, esta semana</span>' +
        '<b style="font-size:.92rem;line-height:1.5;margin-top:.2rem;display:block;font-family:var(--sans)">' +
          EH.escapar(r.primerPaso) + '</b>' +
      '</div>' +

      '<p style="font-size:.87rem;color:var(--suave)"><b style="color:var(--texto)">Qué se puede esperar: </b>' +
        EH.escapar(r.horizonteIngresos) + '</p>' +

      '<details style="margin-top:.8rem">' +
        '<summary style="cursor:pointer;color:#f07a8e;font-size:.85rem;font-weight:600">' +
          'Cómo se pierde dinero en esta ruta</summary>' +
        '<ul class="eh-nacion__orgullo" style="margin-top:.8rem">' + trampas + '</ul>' +
      '</details>' +
      '</article>';
  }

  EH.pagina = function () {
    var C = EH.CIRCULO;

    document.getElementById('ehManifiesto').textContent = C.manifiestoEconomico;

    /* --- lo que el Círculo no hace, publicado como compromiso --- */
    document.getElementById('ehProhibiciones').innerHTML =
      '<strong>Lo que este Círculo no hará nunca.</strong><ul style="margin:.5rem 0 0;padding-left:1.1rem">' +
      (C.prohibiciones || []).map(function (p) {
        return '<li style="margin-bottom:.3rem">' + EH.escapar(p) + '</li>';
      }).join('') + '</ul>';

    document.getElementById('ehRutas').innerHTML = (C.rutas || []).map(ruta).join('');

    document.getElementById('ehLecciones').innerHTML = (C.lecciones || []).map(function (l) {
      return '<article class="eh-tarjeta">' +
        '<h3 class="eh-tarjeta__titulo">' + EH.escapar(l.titulo) + '</h3>' +
        '<p class="eh-tarjeta__cuerpo">' + EH.escapar(l.cuerpo) + '</p></article>';
    }).join('');

    document.getElementById('ehCasos').innerHTML = (C.casosReales || []).map(function (c) {
      return '<article class="eh-tarjeta">' +
        '<h3 class="eh-tarjeta__titulo" style="font-size:1.05rem">' + EH.escapar(c.empresa) + '</h3>' +
        '<span class="eh-etiqueta">' + EH.escapar(c.pais) + '</span>' +
        '<p class="eh-tarjeta__cuerpo" style="margin-top:.7rem">' + EH.escapar(c.leccion) + '</p>' +
        '<p class="eh-tarjeta__pie" style="color:var(--oro2)">' + EH.escapar(c.dato) + '</p>' +
        '</article>';
    }).join('');

    /* --- pestañas --- */
    document.querySelectorAll('#ehPestanas button').forEach(function (b) {
      b.addEventListener('click', function () {
        document.querySelectorAll('#ehPestanas button').forEach(function (o) { o.classList.remove('on'); });
        b.classList.add('on');
        var h = b.getAttribute('data-h');
        document.querySelectorAll('.eh-hoja').forEach(function (o) {
          o.classList.toggle('on', o.getAttribute('data-hoja') === h);
        });
      });
    });

    /* --- la puerta del Círculo ---
       Se dice el grado que hace falta y cuánto le falta a quien mira. Un
       "contenido exclusivo para miembros" sin decir cómo se llega es una
       pared; decir "te faltan 210 puntos" es una escalera. */
    var yo = EH.datos.sesion();
    var caja = document.getElementById('ehAccion');
    var UMBRAL = 3;

    if (!yo) {
      caja.innerHTML = '<a class="eh-boton eh-boton--oro eh-boton--g" href="inscripcion.html">' +
        'Inscribirme en el movimiento</a>';
      return;
    }

    var g = EH.reputacion.grado(yo.honor);
    if (g.nivel >= UMBRAL) {
      caja.innerHTML = '<a class="eh-boton eh-boton--oro eh-boton--g" href="chat.html?sala=circulo">' +
        'Entrar a la sala del Círculo</a>';
    } else {
      var faltan = EH.reputacion.GRADOS[UMBRAL - 1].desde - (yo.honor || 0);
      caja.innerHTML =
        '<p style="color:var(--suave);margin-bottom:1rem">Eres <b>' + EH.escapar(g.nombre) +
        '</b> con ' + EH.numero(yo.honor) + ' de honor. Te faltan <b class="eh-oro">' +
        EH.numero(faltan) + '</b> para llegar a Portavoz y entrar a la sala.</p>' +
        '<div class="eh-barra" style="max-width:340px;margin:0 auto 1.2rem"><i style="width:' +
        Math.min(100, Math.round((yo.honor / EH.reputacion.GRADOS[UMBRAL - 1].desde) * 100)) + '%"></i></div>' +
        '<a class="eh-boton eh-boton--oro" href="misiones.html">Ver mis misiones</a>';
    }
  };
})();
