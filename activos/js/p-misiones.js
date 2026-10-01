/* =========================================================================
   MIS MISIONES — lo que se hace el minuto después de inscribirse
   =========================================================================
   POR QUÉ ESTA PANTALLA ES LA MÁS IMPORTANTE DEL SITIO
   Un movimiento pierde a su gente en el minuto siguiente a la inscripción. No
   por falta de convicción: por falta de instrucciones. Quien entra quiere
   hacer algo hoy y encuentra un manifiesto que ya leyó.

   POR QUÉ CADA MISIÓN DICE SI SE COMPRUEBA O NO
   Porque la mayoría son autodeclaradas y fingir lo contrario es mentir. Se
   marca cada una como VERIFICADA, SEMIVERIFICADA o AUTODECLARADA, con esas
   palabras. Un sistema que dice comprobar lo que no comprueba se descubre en
   dos semanas y se lleva por delante la confianza en todo lo demás.

   POR QUÉ LOS GUIONES SE COPIAN PERO AVISAN
   Publicar el mismo texto desde cien cuentas es comportamiento no auténtico
   coordinado para Meta y manipulación de plataforma para X: cerrarían las
   cuentas del movimiento el primer mes. Los guiones son estructura, y los
   corchetes son obligatorios.
   ========================================================================= */
(function () {
  'use strict';

  var ETAPAS = [
    { k: 'primer dia', n: 'El primer día', d: 'Hoy. Ahora. Antes de cerrar esta pestaña.' },
    { k: 'primera semana', n: 'La primera semana', d: 'Siete días para dejar de ser un nombre en una lista.' },
    { k: 'primer mes', n: 'El primer mes', d: 'Donde se decide si eres militante o simpatizante.' }
  ];

  var mias = [];

  function hechas() {
    var m = {};
    mias.forEach(function (a) {
      if (a.tipo === 'mision' && a.referencia) m[a.referencia] = true;
    });
    return m;
  }

  function etiquetaPrueba(texto) {
    var t = String(texto || '');
    if (/^VERIFICAD/i.test(t)) return ['Lo comprueba la plataforma', 'eh-etiqueta--verde'];
    if (/^SEMIVERIFICAD/i.test(t)) return ['Se comprueba a medias', 'eh-etiqueta--territorio'];
    return ['Lo declaras tú', ''];
  }

  function pintarMisiones() {
    var ya = hechas();
    var M = EH.MANUAL.misiones;
    var total = M.length;
    var listas = M.filter(function (m) { return ya[String(m.orden)]; }).length;

    var html = '<div class="eh-tarjeta eh-tarjeta--oro" style="margin-bottom:1.5rem">' +
      '<div class="eh-fila eh-fila--entre">' +
        '<h2 style="margin:0;font-size:1.2rem">Tus misiones</h2>' +
        '<b class="eh-oro">' + listas + ' de ' + total + '</b>' +
      '</div>' +
      '<div class="eh-barra"><i style="width:' + Math.round((listas / total) * 100) + '%"></i></div>' +
      '<p class="eh-tenue" style="margin:.3rem 0 0">' +
        (listas === 0 ? 'Empieza por la primera. Tarda menos de lo que crees.'
          : listas === total ? 'Las catorce. Ahora el trabajo está fuera de esta pantalla.'
          : 'Cada una suma honor y te acerca al siguiente nivel.') +
      '</p></div>';

    ETAPAS.forEach(function (e) {
      var lista = M.filter(function (m) { return m.etapa === e.k; });
      if (!lista.length) return;
      html += '<h3 style="margin-top:2rem">' + EH.escapar(e.n) +
        '<span class="eh-tenue" style="display:block;font-family:var(--sans);font-size:.82rem;' +
        'font-weight:400;letter-spacing:0;text-transform:none">' + EH.escapar(e.d) + '</span></h3>';

      html += lista.map(function (m) {
        var lista_ = ya[String(m.orden)];
        var prueba = etiquetaPrueba(m.comoSeComprueba);
        return '<article class="eh-tarjeta" style="margin-bottom:.8rem' +
          (lista_ ? ';border-color:rgba(63,143,94,.5)' : '') + '">' +
          '<div class="eh-fila" style="gap:.9rem;align-items:flex-start">' +
            '<span class="eh-numeral" style="font-size:1.5rem' +
              (lista_ ? ';color:#6ec38d' : '') + '">' + m.orden + '</span>' +
            '<div style="flex:1;min-width:200px">' +
              '<div class="eh-fila eh-fila--entre" style="align-items:baseline">' +
                '<h4 style="margin:0;font-size:1rem">' + EH.escapar(m.titulo) + '</h4>' +
                '<span class="eh-etiqueta">' + m.minutos + ' min</span>' +
              '</div>' +
              '<p class="eh-tarjeta__cuerpo" style="margin-top:.5rem">' + EH.escapar(m.queHacer) + '</p>' +
              '<p class="eh-tenue" style="margin-top:.5rem"><b>Para qué:</b> ' +
                EH.escapar(m.porQueImporta) + '</p>' +
              '<div class="eh-fila" style="margin-top:.8rem">' +
                '<span class="eh-etiqueta ' + prueba[1] + '">' + prueba[0] + '</span>' +
                (lista_
                  ? '<span class="eh-etiqueta eh-etiqueta--verde">Hecha</span>'
                  : '<button class="eh-boton eh-boton--p eh-boton--oro" type="button" ' +
                    'data-mision="' + m.orden + '">Marcar como hecha</button>') +
              '</div>' +
            '</div>' +
          '</div></article>';
      }).join('');
    });

    document.getElementById('ehMisiones').innerHTML = html;

    document.querySelectorAll('[data-mision]').forEach(function (b) {
      b.addEventListener('click', function () {
        var n = b.getAttribute('data-mision');
        EH.datos.registrarAporte('mision', n, 'Misión ' + n + ' declarada como hecha')
          .then(function () {
            EH.aviso('Misión anotada');
            return EH.datos.aportes(EH.datos.sesion().id);
          })
          .then(function (l) { mias = l; pintarMisiones(); })
          .catch(function (e) { EH.aviso(e.message); });
      });
    });
  }

  function pintarGuiones() {
    var G = EH.MANUAL.guionesRedes || [];
    document.getElementById('ehGuiones').innerHTML =
      '<div class="eh-aviso eh-aviso--mal"><span class="eh-aviso__icono">!</span><div>' +
        '<strong>Léelo antes de copiar nada.</strong> ' + EH.escapar(EH.MANUAL.reglaGuiones || '') +
      '</div></div>' +
      G.map(function (g, i) {
        return '<article class="eh-tarjeta" style="margin-bottom:.9rem">' +
          '<div class="eh-fila eh-fila--entre" style="align-items:baseline">' +
            '<h4 style="margin:0">' + EH.escapar(g.red) + '</h4>' +
            '<span class="eh-etiqueta">' + EH.escapar(g.formato) + '</span>' +
          '</div>' +
          '<pre style="white-space:pre-wrap;font-family:var(--sans);font-size:.88rem;' +
            'color:var(--suave);background:var(--bg2);border:1px solid var(--linea);' +
            'border-radius:var(--radio-s);padding:1rem;margin:.9rem 0;overflow-x:auto">' +
            EH.escapar(g.guion) + '</pre>' +
          '<div class="eh-fila">' +
            '<button class="eh-boton eh-boton--p" type="button" data-guion="' + i + '">Copiar</button>' +
          '</div>' +
          '<p class="eh-tenue" style="margin-top:.7rem"><b class="eh-oro">Lo que lo hace funcionar:</b> ' +
            EH.escapar(g.consejo) + '</p>' +
          '<p class="eh-tenue" style="margin-top:.3rem"><b style="color:#f07a8e">El error de siempre:</b> ' +
            EH.escapar(g.errorComun) + '</p>' +
          '</article>';
      }).join('');

    document.querySelectorAll('[data-guion]').forEach(function (b) {
      b.addEventListener('click', function () {
        var g = G[Number(b.getAttribute('data-guion'))];
        EH.redes.copiar(g.guion);
        if (EH.datos.sesion()) {
          EH.datos.registrarAporte('difundir', 'guion:' + g.red, 'Usó el guion de ' + g.red)
            .catch(function () { /* tope diario alcanzado: no se molesta al usuario */ });
        }
      });
    });
  }

  function pintarInvitar() {
    var I = EH.MANUAL.comoInvitar || {};
    var yo = EH.datos.sesion();
    var enlace = yo ? EH.enlaceReclutamiento(yo.id) : '';
    var mensaje = (I.mensajePersonal || '') + (enlace ? '\n\n' + enlace : '');

    document.getElementById('ehInvitar').innerHTML =
      '<div class="eh-tarjeta eh-tarjeta--oro">' +
        '<h3 class="eh-tarjeta__titulo">Cómo se invita</h3>' +
        '<p class="eh-tarjeta__cuerpo">' + EH.escapar(I.principio || '') + '</p>' +
        '<p class="eh-tenue" style="margin-top:.7rem"><b>A quién primero:</b> ' +
          EH.escapar(I.quienesPrimero || '') + '</p>' +
        '<pre style="white-space:pre-wrap;font-family:var(--sans);font-size:.88rem;' +
          'color:var(--suave);background:var(--bg2);border:1px solid var(--linea);' +
          'border-radius:var(--radio-s);padding:1rem;margin:1rem 0">' +
          EH.escapar(mensaje) + '</pre>' +
        '<button class="eh-boton eh-boton--oro eh-boton--p" type="button" id="ehCopiarInv">' +
          'Copiar con mi enlace</button>' +
      '</div>' +

      '<div class="eh-aviso"><span class="eh-aviso__icono">◆</span><div>' +
        '<strong>Lo que no hay que hacer.</strong><ul style="margin:.5rem 0 0;padding-left:1.1rem">' +
        (I.queNoHacer || []).map(function (x) {
          return '<li style="margin-bottom:.25rem">' + EH.escapar(x) + '</li>';
        }).join('') + '</ul></div></div>' +

      '<div class="eh-aviso eh-aviso--info"><span class="eh-aviso__icono">◆</span><div>' +
        '<strong>El honor no es dinero y nunca lo será.</strong> No se compra, no se vende, ' +
        'no se transfiere y no da parte de ningún aporte. Ganas honor por la gente que ' +
        'invitas <b>tú</b>, nunca por la que invitaron ellos: aquí no hay niveles ni red ' +
        'debajo de nadie. Y el honor de invitar no puede pasar de la cuarta parte de tu total. ' +
        'Si alguien te ofrece dinero o comisión por traer gente en nombre del movimiento, ' +
        'no somos nosotros.' +
      '</div></div>';

    var b = document.getElementById('ehCopiarInv');
    if (b) b.addEventListener('click', function () { EH.redes.copiar(mensaje); });
  }

  function pintarNiveles() {
    var E = EH.MANUAL.escalafon || [];
    document.getElementById('ehNiveles').innerHTML =
      '<p class="eh-plomo" style="margin-bottom:1.2rem">' +
        'Siete niveles. Los tres primeros no los puede frenar nadie. Los niveles cuatro y ' +
        'cinco también se ganan con honor, pero el equipo tiene que verificar el núcleo o el ' +
        'acto. Los dos últimos los nombra la dirección: cumplir los requisitos <b>no</b> ' +
        'asciende, y preferimos decírtelo ahora.' +
      '</p>' +
      E.map(function (e, i) {
        var g = EH.reputacion.GRADOS[i] || {};
        var via = e.comoSeLlega;
        var et = via === 'automatico' ? ['Se gana solo', 'eh-etiqueta--verde']
          : via === 'verificado' ? ['El equipo lo verifica', 'eh-etiqueta--territorio']
          : ['Lo nombra la dirección', ''];
        return '<article class="eh-tarjeta" style="margin-bottom:.8rem">' +
          '<div class="eh-fila eh-fila--entre" style="align-items:baseline">' +
            '<div class="eh-fila" style="gap:.8rem;align-items:baseline">' +
              '<span class="eh-numeral" style="font-size:1.5rem">' + e.nivel + '</span>' +
              '<h4 style="margin:0;font-size:1.05rem">' + EH.escapar(e.nombre) + '</h4>' +
            '</div>' +
            '<span class="eh-etiqueta ' + et[1] + '">' + et[0] + '</span>' +
          '</div>' +
          (g.desde !== undefined ? '<p class="eh-oro" style="margin:.5rem 0 0;font-size:.85rem"><b>' +
            EH.numero(g.desde) + ' de honor</b></p>' : '') +
          '<p class="eh-tarjeta__cuerpo" style="margin-top:.5rem"><b>Desbloquea:</b> ' +
            EH.escapar(e.queDesbloquea) + '</p>' +
          '<p class="eh-tenue" style="margin-top:.4rem"><b>Responde de:</b> ' +
            EH.escapar(e.responsabilidad) + '</p>' +
          ((e.requisitos || []).length
            ? '<ul class="eh-nacion__orgullo" style="margin-top:.7rem">' +
              e.requisitos.map(function (r) { return '<li>' + EH.escapar(r) + '</li>'; }).join('') +
              '</ul>'
            : '') +
          '</article>';
      }).join('') +
      '<p class="eh-tenue" style="margin-top:1rem">' + EH.escapar(EH.MANUAL.notaEscalafon || '') + '</p>';
  }

  /* ------------------------------------------------------------------ */
  EH.pagina = function () {
    var yo = EH.datos.sesion();

    if (!yo) {
      document.getElementById('ehContenido').innerHTML =
        '<div class="eh-tarjeta eh-tarjeta--oro eh-centro">' +
        '<h2>Las misiones son para miembros</h2>' +
        '<p class="eh-tarjeta__cuerpo" style="max-width:44ch;margin:0 auto 1.2rem">' +
        'Aquí está lo que hay que hacer el primer día, la primera semana y el primer mes. ' +
        'Inscribirse es gratis y toma dos minutos.</p>' +
        '<a class="eh-boton eh-boton--oro" href="inscripcion.html">Inscribirme</a></div>';
      return;
    }

    /* Quien acaba de inscribirse llega con ?bienvenida=1. Es el momento de
       mayor intención de toda la relación con esta persona y no se puede
       desperdiciar en una pantalla de "gracias por registrarte". */
    var nuevo = new URLSearchParams(location.search).get('bienvenida');
    if (nuevo) {
      document.getElementById('ehBienvenida').innerHTML =
        '<div class="eh-tarjeta eh-tarjeta--oro" style="margin-bottom:1.5rem">' +
        '<p class="eh-rotulo">Ya estás dentro</p>' +
        '<h1 style="font-size:clamp(1.5rem,4vw,2.2rem)">Bienvenido, ' +
          EH.escapar(yo.nombre.split(' ')[0]) + '</h1>' +
        '<div class="eh-prosa">' +
          String(EH.MANUAL.bienvenida || '').split(/\n\s*\n/).map(function (p) {
            return '<p>' + EH.escapar(p.trim()) + '</p>';
          }).join('') +
        '</div></div>';
    }

    /* La ruta de SU país, sacada de la ficha electoral: la primera pregunta de
       cualquiera que entra es "y yo qué hago desde aquí". */
    var ruta = EH.rutaDe ? EH.rutaDe(yo.nacion) : null;
    var suPais = '';
    if (ruta && ruta.local) {
      suPais = '<div class="eh-tarjeta" style="margin-bottom:1.5rem;border-left:3px solid var(--oro)">' +
        '<p class="eh-rotulo">Desde ' + EH.escapar(ruta.pais) + '</p>' +
        '<h3 class="eh-tarjeta__titulo">' + EH.escapar(ruta.local.porDondeEmpezar || '') + '</h3>' +
        '<div class="eh-nacion__dato" style="margin-top:1rem;background:var(--oro-vidrio);border-color:var(--oro3)">' +
          '<span style="color:var(--oro)">Tu primer paso esta semana</span>' +
          '<b style="font-size:.92rem;line-height:1.5;margin-top:.2rem;display:block;font-family:var(--sans)">' +
            EH.escapar(ruta.local.primerPaso || '') + '</b>' +
        '</div>' +
        '<a class="eh-boton eh-boton--p" href="partidos.html#' + EH.escapar(yo.nacion) +
          '" style="margin-top:.9rem">Ver la ruta completa de ' + EH.escapar(ruta.pais) + '</a>' +
        '</div>';
    }

    /* La Escuela va antes que las misiones para quien acaba de entrar. Las
       misiones son trabajo; la Escuela es lo que hace que ese trabajo tenga
       sentido, y es lo que retiene a quien todavía no está convencido. */
    var escuela =
      '<a class="eh-tarjeta eh-tarjeta--enlace eh-tarjeta--oro" href="escuela.html" ' +
        'style="display:block;margin-bottom:1.5rem">' +
        '<p class="eh-rotulo">La Escuela</p>' +
        '<h3 class="eh-tarjeta__titulo">Antes de salir a convencer, hay que saber</h3>' +
        '<p class="eh-tarjeta__cuerpo">' +
          'Diez lecciones de tres minutos, cuarenta y cinco preguntas y seis retos. Por qué ' +
          'Cartagena decide que hoy hablemos español, de dónde salen veinte repúblicas, y qué ' +
          'contestar cuando alguien diga que esto es nostalgia imperial.' +
        '</p>' +
        '<p class="eh-tarjeta__pie eh-oro">Empezar por la primera lección →</p>' +
      '</a>';

    document.getElementById('ehContenido').innerHTML = suPais + escuela +
      '<div class="eh-pestanas" id="ehPestanas">' +
        '<button type="button" data-h="misiones" class="on">Misiones</button>' +
        '<button type="button" data-h="guiones">Guiones para redes</button>' +
        '<button type="button" data-h="invitar">Cómo invitar</button>' +
        '<button type="button" data-h="niveles">Los niveles</button>' +
      '</div>' +
      '<div class="eh-hoja on" data-hoja="misiones"><div id="ehMisiones"></div></div>' +
      '<div class="eh-hoja" data-hoja="guiones"><div id="ehGuiones"></div></div>' +
      '<div class="eh-hoja" data-hoja="invitar"><div id="ehInvitar"></div></div>' +
      '<div class="eh-hoja" data-hoja="niveles"><div id="ehNiveles"></div></div>';

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

    EH.datos.aportes(yo.id).then(function (l) {
      mias = l;
      pintarMisiones();
      pintarGuiones();
      pintarInvitar();
      pintarNiveles();
    });
  };
})();
