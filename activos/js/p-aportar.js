/* =========================================================================
   APORTAR
   =========================================================================
   ESTA PANTALLA ES LA PRUEBA DE FUEGO DE LA HONESTIDAD DEL SITIO
   Mientras no haya entidad, cuenta y pasarela, aquí NO puede haber un botón
   de aportar. Ni siquiera apagado: un botón en gris promete exactamente lo
   mismo que uno encendido, y quien llega buscando cómo ayudar se va con la
   idea de que el dinero ya se está moviendo por algún lado.

   Lo que va en su lugar es la verdad —no hemos recibido un peso— y los tres
   pasos que faltan, con nombre. Que sea comprobable es lo que hace creíble
   todo lo demás que dice este sitio.

   Cuando EH.CONFIG.pagos tenga proveedor y enlace, esta misma pantalla cambia
   sola: aparecen los tramos y el botón real. No hay que tocar el HTML.
   ========================================================================= */
(function () {
  'use strict';

  /* Tramos de aporte. Cada uno dice QUÉ PAGA, no qué obtiene el aportante:
     prometer una contraprestación convertiría la donación en otra cosa. */
  var TRAMOS = [
    { m: 20000,  n: 'Un mensaje',   q: 'Cubre el envío de convocatorias a un nodo entero durante un mes.' },
    { m: 50000,  n: 'Una jornada',  q: 'Paga los formularios y el transporte de una jornada de recogida de apoyos.' },
    { m: 150000, n: 'Un acto',      q: 'Cubre el alquiler de una sala y el sonido de un foro de cuarenta personas.' },
    { m: 500000, n: 'Un mes',       q: 'Sostiene la infraestructura del movimiento durante un mes.' }
  ];

  function sinPasarela() {
    var C = EH.CONFIG;
    return '' +
      '<h1 style="font-size:clamp(1.8rem,4.6vw,2.8rem)">Todavía no recibimos aportes</h1>' +

      '<div class="eh-prosa" style="margin-top:1.2rem">' +
        '<p>Este movimiento <b>no tiene ninguna pasarela de pago conectada</b>, no tiene ' +
        'cuenta bancaria propia y <b>no ha recibido un solo peso</b>. Preferimos decirlo así, ' +
        'con todas las letras, antes que poner un botón que no lleva a ninguna parte.</p>' +
      '</div>' +

      '<h2 style="font-size:1.3rem;margin-top:2rem">Qué falta, en este orden</h2>' +
      '<div style="margin-top:1rem">' +
        [['Constituir la asociación sin ánimo de lucro y obtener su NIT',
          'Mientras no exista la entidad, cualquier peso que entre es ingreso personal del ' +
          'fundador: paga impuestos a su nombre, responde con su patrimonio y no puede abrir ' +
          'cuenta ni contratar pasarela.'],
         ['Abrir la cuenta bancaria a nombre de la asociación',
          'Nunca una cuenta personal. El dinero va del aportante al banco de la asociación y ' +
          'la plataforma no aparece en esa ruta.'],
         ['Contratar una pasarela vigilada y publicar el primer informe',
          'Un proveedor de pagos autorizado, el reglamento de aportes y el informe de ' +
          'transparencia. Los tres, antes de recibir el primer aporte.']
        ].map(function (p, i) {
          return '<div class="eh-tarjeta" style="margin-bottom:.8rem">' +
            '<div class="eh-fila" style="gap:1rem;align-items:baseline">' +
              '<span class="eh-numeral" style="font-size:1.7rem">' + (i + 1) + '</span>' +
              '<div style="flex:1;min-width:200px">' +
                '<h3 class="eh-tarjeta__titulo" style="margin-bottom:.3rem;font-size:1.05rem">' +
                  EH.escapar(p[0]) + '</h3>' +
                '<p class="eh-tarjeta__cuerpo">' + EH.escapar(p[1]) + '</p>' +
              '</div>' +
            '</div></div>';
        }).join('') +
      '</div>' +

      '<p style="color:var(--suave);margin-top:1.2rem">' +
        'Cuando los tres pasos estén hechos, esta pantalla cambiará y publicaremos la fecha. ' +
        'El movimiento nunca guardará tu dinero: todo pasará por un proveedor de pagos ' +
        'autorizado y llegará directo a la cuenta de la asociación.</p>' +

      '<div class="eh-fila" style="margin-top:1.8rem">' +
        '<a class="eh-boton eh-boton--oro eh-boton--g" href="misiones.html">Quiero ayudar sin dinero</a>' +
      '</div>';
  }

  function conPasarela() {
    var C = EH.CONFIG;
    return '' +
      '<h1 style="font-size:clamp(1.8rem,4.6vw,2.8rem)">Aportar a la causa</h1>' +
      '<p class="eh-plomo">' +
        'El aporte es voluntario, no da ningún derecho económico, no da honor ni grado, y se ' +
        'puede hacer una vez o cada mes. Lo cobra ' + EH.escapar(C.pagos.proveedor) +
        ', que es un proveedor de pagos autorizado' +
        (C.pagos.razon ? ', y llega a la cuenta de ' + EH.escapar(C.pagos.razon) : '') + '.' +
      '</p>' +

      '<div class="eh-rejilla eh-rejilla--2" style="margin-top:1.8rem">' +
        TRAMOS.map(function (t) {
          return '<div class="eh-tarjeta">' +
            '<h3 class="eh-tarjeta__titulo">' + EH.escapar(t.n) + '</h3>' +
            '<span class="eh-cifra__n" style="font-size:1.7rem;text-align:left">' +
              EH.numero(t.m) + '</span>' +
            '<p class="eh-tarjeta__cuerpo" style="margin-top:.6rem">' + EH.escapar(t.q) + '</p>' +
            '<a class="eh-boton eh-boton--oro eh-boton--bloque" style="margin-top:1rem" ' +
              'href="' + EH.escapar(C.pagos.enlace) + '" target="_blank" rel="noopener noreferrer" ' +
              'data-monto="' + t.m + '">Aportar ' + EH.numero(t.m) + '</a>' +
            '</div>';
        }).join('') +
      '</div>' +

      '<div class="eh-aviso eh-aviso--info"><span class="eh-aviso__icono">◆</span><div>' +
        '<strong>Qué pasa al pulsar.</strong> Se abre la página de ' +
        EH.escapar(C.pagos.proveedor) + ', que es quien cobra. Esta plataforma no ve ni ' +
        'guarda los datos de tu tarjeta: solo anota que un aporte fue anunciado, con su ' +
        'referencia, para poder cuadrarlo contra el extracto bancario.' +
      '</div></div>';
  }

  EH.pagina = function () {
    var C = EH.CONFIG;
    var hay = !!(C.pagos && C.pagos.proveedor && C.pagos.enlace);

    document.getElementById('ehEstado').innerHTML = hay ? conPasarela() : sinPasarela();

    document.getElementById('ehDenuncia').innerHTML = C.correo
      ? 'Escríbenos a <b>' + EH.escapar(C.correo) + '</b> y lo denunciamos juntos.'
      : 'Todavía no hay un correo de contacto publicado: en cuanto lo haya, aparecerá aquí.';

    /* Se registra la INTENCIÓN de aportar, nunca el pago. El pago lo confirma
       el proveedor contra su propio sistema; darlo por bueno desde aquí sería
       inventar ingresos en el libro. */
    document.querySelectorAll('[data-monto]').forEach(function (a) {
      a.addEventListener('click', function () {
        EH.datos.registrarDonacion(Number(a.getAttribute('data-monto')), 'COP', null)
          .catch(function () { /* que falle el registro no debe frenar el pago */ });
      });
    });

    /* --- transparencia ---
       El compromiso de publicar ingresos y gastos aparece aunque no haya nada
       que publicar todavía. Es la mejor defensa reputacional de un movimiento
       político nuevo, y anunciarlo antes de recibir el primer peso vale más
       que anunciarlo después. */
    EH.datos.donaciones().then(function (lista) {
      var total = lista.reduce(function (s, d) { return s + (Number(d.monto) || 0); }, 0);
      document.getElementById('ehTransparencia').innerHTML =
        '<div class="eh-tarjeta eh-tarjeta--oro">' +
        '<h3 class="eh-tarjeta__titulo">Informe de transparencia</h3>' +
        '<p class="eh-tarjeta__cuerpo">' +
          'El movimiento se compromete a publicar sus ingresos y gastos al menos cada tres ' +
          'meses, conciliados contra el extracto bancario y no contra esta base de datos. ' +
          (hay
            ? 'Aportes anunciados hasta ahora: <b>' + EH.numero(lista.length) + '</b>, por un ' +
              'total anunciado de <b>' + EH.numero(total) + '</b>. «Anunciado» significa que ' +
              'alguien pulsó el botón: la cifra confirmada la da el proveedor de pagos, no esta pantalla.'
            : 'Hoy la cifra es cero y no hay nada que conciliar.') +
        '</p></div>';
    });
  };
})();
