/* =========================================================================
   EL GRAN PLAN
   =========================================================================
   POR QUÉ EL ARGUMENTO CONTRARIO SE PINTA CON EL MISMO PESO VISUAL QUE EL PROPIO
   Es la decisión de diseño más importante de esta página. Si el contraargumento
   va en letra pequeña al final, el lector entiende que se le está vendiendo
   algo. Si va en una caja igual de grande, entiende que puede fiarse del resto.
   En una causa territorial, donde el adversario va a citar precisamente ese
   contraargumento, adelantarlo es además la mejor defensa que hay.

   POR QUÉ EL PLAZO SE DICE AUNQUE SEAN DÉCADAS
   Porque prometer que las Malvinas se resuelven en cinco años garantiza que
   dentro de cinco años el movimiento pierda a toda su gente de golpe.
   ========================================================================= */
(function () {
  'use strict';

  function fase(f) {
    var acciones = (f.acciones || []).map(function (a) {
      return '<li>' + EH.escapar(a) + '</li>';
    }).join('');

    return '<article class="eh-tarjeta" style="margin-bottom:1rem">' +
      '<div class="eh-fila eh-fila--entre" style="align-items:flex-start;gap:1rem">' +
        '<div class="eh-fila" style="gap:.9rem;align-items:baseline;flex:1;min-width:220px">' +
          '<span class="eh-numeral">' + EH.escapar(f.numero) + '</span>' +
          '<div style="min-width:0">' +
            '<h3 class="eh-tarjeta__titulo" style="margin-bottom:.15rem">' + EH.escapar(f.nombre) + '</h3>' +
            '<span class="eh-etiqueta">' + EH.escapar(f.ventana) + '</span>' +
          '</div>' +
        '</div>' +
      '</div>' +

      '<p class="eh-tarjeta__cuerpo" style="margin-top:.9rem">' + EH.escapar(f.objetivo) + '</p>' +

      '<div class="eh-nacion__dato" style="margin:1rem 0;background:var(--oro-vidrio);border-color:var(--oro3)">' +
        '<span style="color:var(--oro)">La meta que se cuenta</span>' +
        '<b style="font-size:.95rem;line-height:1.4;margin-top:.2rem;display:block">' +
          EH.escapar(f.metaMedible) + '</b>' +
      '</div>' +

      '<details>' +
        '<summary style="cursor:pointer;color:var(--oro2);font-size:.85rem;font-weight:600">' +
          'Qué se hace en esta fase</summary>' +
        '<ul class="eh-nacion__orgullo" style="margin-top:.8rem">' + acciones + '</ul>' +
        '<div class="eh-aviso"><span class="eh-aviso__icono">◆</span><div>' +
          '<strong>Lo que puede hacerla fracasar.</strong> ' + EH.escapar(f.riesgo) + '</div></div>' +
      '</details>' +
      '</article>';
  }

  function causa(c) {
    return '<article class="eh-tarjeta" id="' + EH.escapar(c.id) + '" ' +
      'style="margin-bottom:1.1rem;scroll-margin-top:80px">' +

      '<h3 class="eh-tarjeta__titulo" style="font-size:1.35rem">' + EH.escapar(c.nombre) + '</h3>' +
      '<p class="eh-tenue" style="margin-bottom:1rem">Reclama: ' + EH.escapar(c.quienReclama) + '</p>' +

      '<h4 style="color:var(--oro);font-size:.72rem;letter-spacing:.14em;text-transform:uppercase">' +
        'Dónde está hoy</h4>' +
      '<p class="eh-tarjeta__cuerpo">' + EH.escapar(c.situacionReal) + '</p>' +

      '<h4 style="color:var(--oro);font-size:.72rem;letter-spacing:.14em;text-transform:uppercase;margin-top:1.1rem">' +
        'En qué se apoya</h4>' +
      '<p class="eh-tarjeta__cuerpo">' + EH.escapar(c.fundamentoJuridico) + '</p>' +

      /* El argumento contrario, con marco propio y del mismo tamaño. */
      '<div style="margin-top:1.1rem;padding:1rem;border:1px solid var(--linea2);' +
        'border-left:3px solid var(--azul);border-radius:var(--radio-s);background:var(--bg2)">' +
        '<h4 style="color:#7fb0e0;font-size:.72rem;letter-spacing:.14em;text-transform:uppercase;margin:0 0 .5rem">' +
          'Lo que dice la otra parte</h4>' +
        '<p class="eh-tarjeta__cuerpo" style="margin:0">' + EH.escapar(c.contraargumento) + '</p>' +
      '</div>' +

      '<h4 style="color:var(--oro);font-size:.72rem;letter-spacing:.14em;text-transform:uppercase;margin-top:1.1rem">' +
        'Qué puede hacer un movimiento civil</h4>' +
      '<p class="eh-tarjeta__cuerpo">' + EH.escapar(c.viaLegitima) + '</p>' +

      '<div class="eh-tarjeta__pie">' +
        '<div class="eh-fila" style="gap:.6rem">' +
          '<span class="eh-etiqueta eh-etiqueta--disputado">Plazo real: ' + EH.escapar(c.horizonte) + '</span>' +
        '</div>' +
        (c.advertencia
          ? '<p style="margin-top:.8rem;font-size:.82rem;color:var(--tenue);line-height:1.55">' +
            '<b style="color:var(--ambar)">Lo que no podemos afirmar:</b> ' +
            EH.escapar(c.advertencia) + '</p>'
          : '') +
      '</div>' +
      '</article>';
  }

  EH.pagina = function () {
    var P = EH.PLAN;

    document.getElementById('ehFases').innerHTML = P.fases.map(fase).join('');
    document.getElementById('ehCausas').innerHTML = P.causas.map(causa).join('');

    /* La nota sobre la Antártida va aparte y destacada: es donde la ambición
       del movimiento choca de frente con un tratado en vigor, y decirlo aquí
       vale más que esconderlo. */
    if (P.notaAntartida) {
      document.getElementById('ehAntartida').innerHTML =
        '<div class="eh-tarjeta eh-tarjeta--oro">' +
        '<h3 class="eh-tarjeta__titulo">Sobre el sector antártico, sin adornos</h3>' +
        '<p class="eh-tarjeta__cuerpo">' + EH.escapar(P.notaAntartida) + '</p></div>';
    }

    // Si se llega con #malvinas, se resalta esa causa un momento.
    var h = location.hash.replace('#', '');
    if (h) {
      var el = document.getElementById(h);
      if (el) {
        el.scrollIntoView({ block: 'start' });
        el.classList.add('eh-tarjeta--oro');
      }
    }
  };
})();
