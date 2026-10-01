/* =========================================================================
   LA ESCUELA
   =========================================================================
   POR QUÉ LA EXPLICACIÓN SALE SIEMPRE, ACIERTES O FALLES
   Porque es donde se aprende. Un cuestionario que solo dice «correcto» no
   enseña nada: enseña a adivinar. Aquí, respondas lo que respondas, aparece
   por qué es esa y de qué ficha de la plataforma sale el dato.

   POR QUÉ NO SE PUEDE REPETIR LA MISMA PREGUNTA PARA SUMAR HONOR
   Porque el honor mide aporte, no insistencia. Cada pregunta cuenta una sola
   vez en la vida y el progreso se guarda por miembro. Sin eso, el camino
   óptimo sería acertar la misma pregunta cien veces, que es exactamente lo
   contrario de aprender.

   POR QUÉ EL PROGRESO VIVE EN ESTE NAVEGADOR Y NO EN EL LIBRO MAYOR
   El honor sí entra en el libro mayor, que es inmutable y auditable. Pero
   «qué preguntas ha contestado cada uno» es un detalle de estudio, no un
   aporte: guardarlo en el libro lo llenaría de ruido. La pantalla lo dice.
   ========================================================================= */
(function () {
  'use strict';

  var CLAVE = 'eh_escuela_v1';
  var POR_RONDA = 10;     // preguntas por ronda
  var PARA_APROBAR = 8;   // aciertos que dan honor

  var ronda = [], indice = 0, aciertos = 0, respondida = false;

  /* ------------------------------------------------------------------
     PROGRESO
     ------------------------------------------------------------------ */
  function miClave() {
    var yo = EH.datos.sesion();
    return CLAVE + ':' + (yo ? yo.id : 'invitado');
  }

  function leerProgreso() {
    try {
      return JSON.parse(localStorage.getItem(miClave()) || 'null') ||
        { leidas: [], acertadas: [], falladas: [], rondas: 0 };
    } catch (e) {
      return { leidas: [], acertadas: [], falladas: [], rondas: 0 };
    }
  }

  function guardarProgreso(p) {
    try { localStorage.setItem(miClave(), JSON.stringify(p)); } catch (e) { }
  }

  function pintarProgreso() {
    var p = leerProgreso();
    var E = EH.ESCUELA;
    var pcLec = Math.round((p.leidas.length / E.lecciones.length) * 100);
    var pcPre = Math.round((p.acertadas.length / E.preguntas.length) * 100);

    document.getElementById('ehProgreso').innerHTML =
      '<div class="eh-rejilla eh-rejilla--2">' +
        '<div class="eh-tarjeta">' +
          '<div class="eh-fila eh-fila--entre" style="align-items:baseline">' +
            '<b>Lecciones leídas</b>' +
            '<span class="eh-oro"><b>' + p.leidas.length + '</b> de ' + E.lecciones.length + '</span>' +
          '</div>' +
          '<div class="eh-barra"><i style="width:' + Math.max(2, pcLec) + '%"></i></div>' +
        '</div>' +
        '<div class="eh-tarjeta">' +
          '<div class="eh-fila eh-fila--entre" style="align-items:baseline">' +
            '<b>Preguntas acertadas</b>' +
            '<span class="eh-oro"><b>' + p.acertadas.length + '</b> de ' + E.preguntas.length + '</span>' +
          '</div>' +
          '<div class="eh-barra"><i style="width:' + Math.max(2, pcPre) + '%"></i></div>' +
          (p.falladas.length
            ? '<p class="eh-tenue" style="margin:.4rem 0 0">' + p.falladas.length +
              ' pendientes de sacarte la espina.</p>'
            : '') +
        '</div>' +
      '</div>';
  }

  /* ------------------------------------------------------------------
     LECCIONES
     ------------------------------------------------------------------ */
  function pintarLecciones() {
    var p = leerProgreso();
    var E = EH.ESCUELA;

    document.getElementById('ehLecciones').innerHTML = E.lecciones.map(function (L) {
      var leida = p.leidas.indexOf(L.orden) >= 0;
      return '<article class="eh-tarjeta" style="margin-bottom:.9rem' +
        (leida ? ';border-color:rgba(63,143,94,.5)' : '') + '">' +
        '<details' + (leida ? '' : '') + '>' +
          '<summary style="cursor:pointer;list-style:none">' +
            '<div class="eh-fila" style="gap:.9rem;align-items:baseline">' +
              '<span class="eh-numeral" style="font-size:1.5rem' +
                (leida ? ';color:#6ec38d' : '') + '">' + L.orden + '</span>' +
              '<div style="flex:1;min-width:200px">' +
                '<div class="eh-fila eh-fila--entre" style="align-items:baseline">' +
                  '<h3 class="eh-tarjeta__titulo" style="margin:0;font-size:1.1rem">' +
                    EH.escapar(L.titulo) + '</h3>' +
                  '<span class="eh-etiqueta">' + L.minutos + ' min</span>' +
                '</div>' +
                '<p class="eh-tenue" style="margin:.35rem 0 0;font-style:italic">' +
                  EH.escapar(L.gancho) + '</p>' +
              '</div>' +
            '</div>' +
          '</summary>' +
          '<div class="eh-prosa" style="margin-top:1.2rem">' +
            String(L.cuerpo).split(/\n\s*\n/).map(function (x) {
              return '<p>' + EH.escapar(x.trim()) + '</p>';
            }).join('') +
          '</div>' +
          '<div class="eh-nacion__dato" style="margin:1rem 0;background:var(--oro-vidrio);border-color:var(--oro3)">' +
            '<span style="color:var(--oro)">Lo que te llevas</span>' +
            '<b style="font-size:.95rem;line-height:1.5;margin-top:.2rem;display:block;font-family:var(--sans)">' +
              EH.escapar(L.loQueTeLlevas) + '</b>' +
          '</div>' +
          '<div class="eh-fila eh-fila--entre">' +
            (leida
              ? '<span class="eh-etiqueta eh-etiqueta--verde">Leída</span>'
              : '<button class="eh-boton eh-boton--p eh-boton--oro" type="button" ' +
                'data-leida="' + L.orden + '">La he leído</button>') +
            '<span class="eh-tenue" style="font-size:.74rem">Sale de ' +
              EH.escapar(L.fuenteEnLaPlataforma) + '</span>' +
          '</div>' +
        '</details></article>';
    }).join('');

    document.querySelectorAll('[data-leida]').forEach(function (b) {
      b.addEventListener('click', function (e) {
        e.preventDefault();
        var n = Number(b.getAttribute('data-leida'));
        var p = leerProgreso();
        if (p.leidas.indexOf(n) < 0) p.leidas.push(n);
        guardarProgreso(p);
        if (EH.datos.sesion()) {
          EH.datos.registrarAporte('mision', 'leccion:' + n, 'Leyó la lección ' + n)
            .catch(function () { /* tope diario: no se molesta a quien estudia */ });
        }
        pintarLecciones();
        pintarProgreso();
        EH.aviso('Lección marcada');
      });
    });
  }

  /* ------------------------------------------------------------------
     EXAMEN
     ------------------------------------------------------------------ */
  function barajar(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function nuevaRonda() {
    var p = leerProgreso();
    var E = EH.ESCUELA;
    /* Primero las falladas y las que nunca se han visto: repetir las que ya
       se dominan no enseña, solo entretiene. */
    var pendientes = E.preguntas.filter(function (q) { return p.acertadas.indexOf(q.id) < 0; });
    if (!pendientes.length) pendientes = E.preguntas;
    ronda = barajar(pendientes).slice(0, POR_RONDA);
    indice = 0; aciertos = 0; respondida = false;
    pintarPregunta();
  }

  function pintarPregunta() {
    var caja = document.getElementById('ehExamen');

    if (indice >= ronda.length) {
      var aprobado = aciertos >= PARA_APROBAR;
      var p = leerProgreso();
      p.rondas = (p.rondas || 0) + 1;
      guardarProgreso(p);

      caja.innerHTML = '<div class="eh-tarjeta eh-tarjeta--oro eh-centro">' +
        '<p class="eh-rotulo eh-rotulo--centro">Ronda terminada</p>' +
        '<span class="eh-cifra__n">' + aciertos + ' / ' + ronda.length + '</span>' +
        '<p class="eh-plomo" style="margin:1rem auto;max-width:44ch">' +
          (aprobado
            ? 'Eso es saber de qué se habla. Con esto se puede dar un debate sin consignas.'
            : 'Vuelve a las lecciones y repite: las preguntas que fallaste salen primero la próxima vez.') +
        '</p>' +
        '<div class="eh-fila eh-fila--centro">' +
          '<button class="eh-boton eh-boton--oro" type="button" id="ehOtra">Otra ronda</button>' +
          '<button class="eh-boton eh-boton--fantasma" type="button" id="ehALecciones">Ir a las lecciones</button>' +
        '</div></div>';

      document.getElementById('ehOtra').addEventListener('click', nuevaRonda);
      document.getElementById('ehALecciones').addEventListener('click', function () {
        document.querySelector('[data-h="lecciones"]').click();
      });

      if (aprobado && EH.datos.sesion()) {
        EH.datos.registrarAporte('mision', 'examen', aciertos + ' de ' + ronda.length + ' en el examen')
          .catch(function () { });
      }
      pintarProgreso();
      return;
    }

    var q = ronda[indice];
    var DIF = { facil: 'Fácil', media: 'Media', dificil: 'Difícil' };

    caja.innerHTML =
      '<div class="eh-fila eh-fila--entre" style="margin-bottom:1rem">' +
        '<span class="eh-tenue">Pregunta ' + (indice + 1) + ' de ' + ronda.length + '</span>' +
        '<span class="eh-etiqueta">' + EH.escapar(DIF[q.dificultad] || q.dificultad) + '</span>' +
      '</div>' +
      '<div class="eh-barra" style="margin-bottom:1.4rem"><i style="width:' +
        Math.round((indice / ronda.length) * 100) + '%"></i></div>' +
      '<div class="eh-tarjeta">' +
        '<h3 class="eh-tarjeta__titulo" style="font-size:1.2rem">' + EH.escapar(q.pregunta) + '</h3>' +
        '<div id="ehOpciones" style="margin-top:1.2rem;display:grid;gap:.6rem">' +
          q.opciones.map(function (o, i) {
            return '<button class="eh-boton" type="button" data-op="' + i + '" ' +
              'style="justify-content:flex-start;text-align:left">' +
              '<b style="color:var(--oro);margin-right:.6rem">' +
              'ABCD'.charAt(i) + '</b>' + EH.escapar(o) + '</button>';
          }).join('') +
        '</div>' +
        '<div id="ehExplicacion"></div>' +
      '</div>';

    respondida = false;
    document.querySelectorAll('[data-op]').forEach(function (b) {
      b.addEventListener('click', function () { responder(Number(b.getAttribute('data-op'))); });
    });
  }

  function responder(elegida) {
    if (respondida) return;
    respondida = true;

    var q = ronda[indice];
    var bien = elegida === q.correcta;
    if (bien) aciertos++;

    var p = leerProgreso();
    if (bien) {
      if (p.acertadas.indexOf(q.id) < 0) p.acertadas.push(q.id);
      p.falladas = p.falladas.filter(function (x) { return x !== q.id; });
    } else if (p.falladas.indexOf(q.id) < 0) {
      p.falladas.push(q.id);
    }
    guardarProgreso(p);

    document.querySelectorAll('[data-op]').forEach(function (b) {
      var i = Number(b.getAttribute('data-op'));
      b.disabled = true;
      if (i === q.correcta) {
        b.style.borderColor = '#6ec38d';
        b.style.background = 'rgba(63,143,94,.14)';
      } else if (i === elegida) {
        b.style.borderColor = '#f07a8e';
        b.style.background = 'rgba(209,33,60,.12)';
      } else {
        b.style.opacity = '.5';
      }
    });

    /* La explicación sale siempre, se acierte o se falle. Es donde se aprende;
       un cuestionario que solo dice «correcto» enseña a adivinar. */
    document.getElementById('ehExplicacion').innerHTML =
      '<div class="eh-aviso ' + (bien ? 'eh-aviso--bien' : 'eh-aviso--mal') + '" style="margin-top:1.2rem">' +
        '<span class="eh-aviso__icono">' + (bien ? '✓' : '✕') + '</span>' +
        '<div><strong>' + (bien ? 'Correcto.' : 'No era esa.') + '</strong> ' +
        EH.escapar(q.explicacion) +
        '<br><span class="eh-tenue" style="font-size:.76rem">Sale de ' +
        EH.escapar(q.fuente) + '</span></div>' +
      '</div>' +
      '<button class="eh-boton eh-boton--oro eh-boton--bloque" type="button" id="ehSiguiente" ' +
        'style="margin-top:1rem">' +
        (indice + 1 >= ronda.length ? 'Ver el resultado' : 'Siguiente') + '</button>';

    document.getElementById('ehSiguiente').addEventListener('click', function () {
      indice++;
      pintarPregunta();
    });
  }

  /* ------------------------------------------------------------------
     RETOS
     ------------------------------------------------------------------ */
  function pintarRetos() {
    document.getElementById('ehRetos').innerHTML =
      '<p class="eh-plomo" style="margin-bottom:1.4rem">' +
        'No son preguntas: son cosas que hacer. Y cada una dice si la comprueba alguien o la ' +
        'declaras tú, porque esta plataforma no finge que verifica lo que no verifica.' +
      '</p>' +
      (EH.ESCUELA.retos || []).map(function (r, i) {
        return '<article class="eh-tarjeta" style="margin-bottom:.9rem">' +
          '<div class="eh-fila" style="gap:.9rem;align-items:baseline">' +
            '<span class="eh-numeral" style="font-size:1.4rem">' + (i + 1) + '</span>' +
            '<h3 class="eh-tarjeta__titulo" style="margin:0;flex:1;min-width:200px">' +
              EH.escapar(r.titulo) + '</h3>' +
          '</div>' +
          '<p class="eh-tarjeta__cuerpo" style="margin-top:.7rem">' + EH.escapar(r.queHacer) + '</p>' +
          '<p class="eh-tenue" style="margin-top:.6rem"><b class="eh-oro">Qué enseña:</b> ' +
            EH.escapar(r.queEnsena) + '</p>' +
          '<p class="eh-tarjeta__pie">' + EH.escapar(r.comoSeComprueba) + '</p>' +
          '</article>';
      }).join('');
  }

  /* ------------------------------------------------------------------ */
  EH.pagina = function () {
    document.getElementById('ehIntro').textContent = EH.ESCUELA.introduccion || '';
    document.getElementById('ehAvisoModo').innerHTML = EH.avisoModo();

    pintarProgreso();
    pintarLecciones();
    pintarRetos();
    nuevaRonda();

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
  };
})();
