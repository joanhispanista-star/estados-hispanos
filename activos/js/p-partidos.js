/* =========================================================================
   PARTIDOS HERMANOS — la ruta electoral
   =========================================================================
   POR QUÉ LOS APOYOS RECOGIDOS SON AUTODECLARADOS Y LA PANTALLA LO DICE
   Un contador de firmas que suma solo porque alguien pulsa un botón es una
   cifra inventada, y sobre esa cifra se planifican campañas. Aquí el aporte
   de apoyos se registra como declaración del militante y queda marcado como
   pendiente de verificar contra los formularios entregados. La barra enseña
   las dos cosas: lo declarado y lo verificado. Si un día solo se enseñara lo
   declarado, el movimiento acabaría creyéndose su propio número.

   POR QUÉ SE EMPUJA EL CARGO LOCAL Y NO LA PRESIDENCIA
   Porque es donde las cuentas salen. Una curul de concejo se gana con entre
   cuatrocientos y mil doscientos votos en un municipio mediano; una alcaldía
   pide quince veces más firmas que ese mismo concejo. La asimetría es el
   argumento entero del movimiento y la pantalla la enseña.
   ========================================================================= */
(function () {
  'use strict';

  var modal, caja;

  /* Devuelve la bandera dibujada, no el emoji: en Windows el emoji se ve
     como las dos letras del pais y la tarjeta parece rota. */
  function bandera(id, ancho) {
    return EH.banderas.svg(id, ancho || 26);
  }

  /* ------------------------------------------------------------------
     CONTADORES
     ------------------------------------------------------------------ */
  function contadores(recogidas) {
    var lista = EH.PAISES_CON_CONTADOR;
    if (!lista.length) {
      return '<div class="eh-tarjeta eh-centro eh-tenue" style="grid-column:1/-1;padding:2rem">' +
        'Ningún país tiene hoy una cifra oficial vigente que se pueda contar.</div>';
    }
    return lista.map(function (p) {
      var hechas = recogidas[p.id] || 0;
      var pc = Math.min(100, (hechas / p.requisitoCantidad) * 100);
      return '<article class="eh-tarjeta eh-tarjeta--oro">' +
        '<div class="eh-fila" style="gap:.6rem">' +
          bandera(p.id, 34) +
          '<h3 class="eh-tarjeta__titulo" style="margin:0">' + EH.escapar(p.pais) + '</h3>' +
        '</div>' +
        '<div style="margin-top:1rem">' +
          '<span class="eh-cifra__n" style="font-size:2rem">' +
            EH.numero(Math.max(0, p.requisitoCantidad - hechas)) + '</span>' +
          '<span class="eh-cifra__u">apoyos por conseguir</span>' +
        '</div>' +
        '<div class="eh-barra" style="margin-top:.9rem"><i style="width:' + pc.toFixed(1) + '%"></i></div>' +
        '<p class="eh-tenue" style="margin:.4rem 0 0">' +
          EH.numero(hechas) + ' declarados de ' + EH.numero(p.requisitoCantidad) + ' · ' +
          EH.escapar(p.requisitoUnidad) + '</p>' +
        '<p class="eh-tarjeta__pie">' + EH.escapar(p.reglaEnUnaFrase) + '</p>' +
        '<button class="eh-boton eh-boton--p" type="button" data-pais="' + EH.escapar(p.id) +
          '" style="margin-top:.8rem">Ver la ruta completa</button>' +
        '</article>';
    }).join('');
  }

  /* ------------------------------------------------------------------
     TARJETA DE PAÍS
     ------------------------------------------------------------------ */
  function tarjeta(p) {
    var t = EH.TIPOS_REQUISITO[p.tipoRequisito] || EH.TIPOS_REQUISITO.no_aplica;
    var ventana = {
      abierta: ['Ventana abierta', 'eh-etiqueta--verde'],
      cerrada: ['Ventana cerrada', 'eh-etiqueta--disputado'],
      permanente: ['Se puede en cualquier momento', 'eh-etiqueta--verde'],
      desconocida: ['Ventana sin confirmar', 'eh-etiqueta--territorio']
    }[p.ventanaAbierta] || ['', ''];

    return '<article class="eh-tarjeta eh-tarjeta--enlace" data-pais="' + EH.escapar(p.id) + '" ' +
      'tabindex="0" role="button" style="cursor:pointer;border-left:3px solid ' + t.c + '">' +
      '<div class="eh-fila" style="gap:.6rem;margin-bottom:.6rem">' +
        bandera(p.id, 30) +
        '<h3 class="eh-tarjeta__titulo" style="margin:0;flex:1;min-width:0">' + EH.escapar(p.pais) + '</h3>' +
      '</div>' +
      '<div class="eh-fila" style="gap:.4rem;margin-bottom:.8rem">' +
        '<span class="eh-etiqueta" style="color:' + t.c + ';border-color:' + t.c + '">' +
          EH.escapar(t.n) + '</span>' +
        '<span class="eh-etiqueta ' + ventana[1] + '">' + EH.escapar(ventana[0]) + '</span>' +
      '</div>' +
      '<p class="eh-tarjeta__cuerpo">' + EH.escapar(p.reglaEnUnaFrase) + '</p>' +
      (p.contadorPosible
        ? '<p class="eh-tarjeta__pie eh-oro"><b>' + EH.numero(p.requisitoCantidad) + '</b> ' +
          EH.escapar(p.requisitoUnidad) + '</p>'
        : '<p class="eh-tarjeta__pie">' + EH.escapar(p.porQueNoHayContador) + '</p>') +
      '</article>';
  }

  /* ------------------------------------------------------------------
     FICHA COMPLETA
     ------------------------------------------------------------------ */
  function ficha(p) {
    var L = p.local || {};
    var cargos = (L.cargos || []).map(function (c) {
      var dif = { accesible: 'eh-etiqueta--verde', media: 'eh-etiqueta--territorio', alta: 'eh-etiqueta--disputado' }[c.dificultad] || '';
      return '<div class="eh-tarjeta" style="margin-bottom:.7rem;padding:1rem">' +
        '<div class="eh-fila eh-fila--entre" style="align-items:baseline">' +
          '<h4 style="margin:0">' + EH.escapar(c.cargo) + '</h4>' +
          '<span class="eh-etiqueta ' + dif + '">' + EH.escapar(c.dificultad) + '</span>' +
        '</div>' +
        '<p class="eh-tarjeta__cuerpo" style="margin-top:.5rem">' + EH.escapar(c.queHace) + '</p>' +
        '<div style="display:grid;gap:.3rem;margin-top:.7rem;font-size:.8rem;color:var(--suave)">' +
          '<span><b>Apoyos o aval:</b> ' + EH.escapar(c.firmasOAvales) + '</span>' +
          '<span><b>Votos que suele costar:</b> ' + EH.escapar(c.votosTipicos) + '</span>' +
          '<span><b>Cuándo:</b> ' + EH.escapar(c.cuandoSeElige) + '</span>' +
          '<span><b>Quién puede:</b> ' + EH.escapar(c.requisitosPersonales) + '</span>' +
        '</div></div>';
    }).join('');

    var t = EH.TIPOS_REQUISITO[p.tipoRequisito] || EH.TIPOS_REQUISITO.no_aplica;

    return '<button class="eh-mapa__cerrar" type="button" id="ehCerrar" aria-label="Cerrar">×</button>' +
      '<div class="eh-fila" style="gap:.8rem;margin-bottom:.4rem">' +
        bandera(p.id, 46) +
        '<h2 style="margin:0;font-size:1.6rem">' + EH.escapar(p.pais) + '</h2>' +
      '</div>' +

      '<span class="eh-etiqueta" style="color:' + t.c + ';border-color:' + t.c + '">' +
        EH.escapar(t.n) + '</span>' +
      '<p class="eh-tenue" style="margin-top:.5rem">' + EH.escapar(t.d) + '</p>' +

      '<h3 style="font-size:1.05rem;margin-top:1.4rem">Cómo nace un partido aquí</h3>' +
      '<p style="color:var(--suave);font-size:.92rem">' + EH.escapar(p.viaPartido) + '</p>' +

      '<div class="eh-nacion__dato" style="margin:1rem 0;background:var(--oro-vidrio);border-color:var(--oro3)">' +
        '<span style="color:var(--oro)">La regla, en una frase</span>' +
        '<b style="font-size:.92rem;line-height:1.5;margin-top:.2rem;display:block;font-family:var(--sans)">' +
          EH.escapar(p.reglaEnUnaFrase) + '</b>' +
      '</div>' +

      (p.porQueNoHayContador
        ? '<div class="eh-aviso"><span class="eh-aviso__icono">◆</span><div>' +
          '<strong>Por qué aquí no ponemos un contador.</strong> ' +
          EH.escapar(p.porQueNoHayContador) + '</div></div>'
        : '') +

      '<div class="eh-aviso eh-aviso--mal"><span class="eh-aviso__icono">!</span><div>' +
        '<strong>La trampa de este país.</strong> ' + EH.escapar(p.trampa) + '</div></div>' +

      (L.porDondeEmpezar
        ? '<h3 style="font-size:1.05rem;margin-top:1.4rem">Por dónde se empieza de verdad</h3>' +
          '<p style="color:var(--suave);font-size:.92rem">' + EH.escapar(L.porDondeEmpezar) + '</p>' +
          '<div class="eh-nacion__dato" style="margin:1rem 0;background:rgba(63,143,94,.10);border-color:rgba(63,143,94,.42)">' +
            '<span style="color:#6ec38d">Tu primer paso, esta semana</span>' +
            '<b style="font-size:.92rem;line-height:1.5;margin-top:.2rem;display:block;font-family:var(--sans)">' +
              EH.escapar(L.primerPaso) + '</b>' +
          '</div>'
        : '') +

      (cargos
        ? '<details style="margin-top:1rem"><summary style="cursor:pointer;color:var(--oro2);font-size:.88rem;font-weight:600">' +
          'Los cargos locales a los que se puede llegar</summary>' +
          '<p class="eh-tenue" style="margin:.8rem 0">' + EH.escapar(L.vocabulario || '') + '</p>' +
          cargos +
          (L.trampa ? '<div class="eh-aviso"><span class="eh-aviso__icono">◆</span><div>' +
            '<strong>Lo que arruina candidaturas nuevas aquí.</strong> ' + EH.escapar(L.trampa) +
            '</div></div>' : '') +
          '</details>'
        : '') +

      '<div class="eh-tarjeta__pie">' +
        '<div style="display:grid;gap:.4rem;font-size:.8rem">' +
          '<span><b>Autoridad electoral:</b> ' + EH.escapar(p.autoridad) + '</span>' +
          '<span><b>Norma:</b> ' + EH.escapar(p.normaClave) + '</span>' +
          '<span><b>Plazos:</b> ' + EH.escapar(p.plazos) + '</span>' +
          '<span><b>Próxima elección:</b> ' + EH.escapar(p.proximaEleccion) + '</span>' +
        '</div>' +
        '<div class="eh-aviso eh-aviso--info" style="margin-top:1rem">' +
          '<span class="eh-aviso__icono">◆</span><div>' +
          '<strong>Fiabilidad: ' + EH.escapar(p.confianza) + '.</strong> ' +
          EH.escapar(p.porQueEsaConfianza) +
          '<br><br><b>Antes de recoger un solo apoyo, confírmalo:</b> ' +
          EH.escapar(p.dondeConfirmar) + '</div></div>' +
      '</div>';
  }

  function abrir(id) {
    var p = EH.rutaDe(id);
    if (!p) return;
    caja.innerHTML = ficha(p);
    modal.classList.add('on');
    caja.scrollTop = 0;
    caja.setAttribute('tabindex', '-1');
    caja.focus();
    document.getElementById('ehCerrar').addEventListener('click', cerrar);
    if (history.replaceState) history.replaceState(null, '', '#' + id);
  }

  function cerrar() {
    modal.classList.remove('on');
    if (history.replaceState) history.replaceState(null, '', location.pathname);
  }

  /* ------------------------------------------------------------------ */
  EH.pagina = function () {
    modal = document.getElementById('ehModal');
    caja = document.getElementById('ehModalCaja');

    /* Apoyos declarados por los miembros, por país. En modo local se cuentan
       desde el libro mayor; en la nube saldrán de la vista verificada. */
    var recogidas = {};

    document.getElementById('ehContadores').innerHTML = contadores(recogidas);

    /* --- filtros por tipo de requisito --- */
    var tipos = {};
    EH.RUTA_ELECTORAL.forEach(function (p) { tipos[p.tipoRequisito] = (tipos[p.tipoRequisito] || 0) + 1; });
    var claves = ['todos'].concat(Object.keys(tipos));

    document.getElementById('ehFiltros').innerHTML = claves.map(function (k, i) {
      var n = k === 'todos' ? EH.RUTA_ELECTORAL.length : tipos[k];
      var nom = k === 'todos' ? 'Los 20' : (EH.TIPOS_REQUISITO[k] || {}).n || k;
      return '<button type="button" data-f="' + EH.escapar(k) + '"' + (i === 0 ? ' class="on"' : '') + '>' +
        EH.escapar(nom) + ' <span class="eh-tenue">' + n + '</span></button>';
    }).join('');

    function pintar(f) {
      var lista = f === 'todos' ? EH.RUTA_ELECTORAL
        : EH.RUTA_ELECTORAL.filter(function (p) { return p.tipoRequisito === f; });
      // Los que tienen contador primero: son los únicos donde alguien puede
      // ponerse a trabajar hoy mismo.
      lista = lista.slice().sort(function (a, b) {
        if (a.contadorPosible !== b.contadorPosible) return a.contadorPosible ? -1 : 1;
        return a.pais.localeCompare(b.pais, 'es');
      });
      document.getElementById('ehPaises').innerHTML = lista.map(tarjeta).join('');
      enganchar();
    }

    function enganchar() {
      document.querySelectorAll('[data-pais]').forEach(function (el) {
        el.addEventListener('click', function (e) {
          e.stopPropagation();
          abrir(el.getAttribute('data-pais'));
        });
        el.addEventListener('keydown', function (e) {
          if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); abrir(el.getAttribute('data-pais')); }
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
    pintar('todos');

    /* --- declarar apoyos recogidos --- */
    var yo = EH.datos.sesion();
    var cajaAp = document.getElementById('ehAporteFirmas');
    if (yo) {
      cajaAp.innerHTML = '<div class="eh-tarjeta">' +
        '<h3 class="eh-tarjeta__titulo">¿Recogiste apoyos?</h3>' +
        '<p class="eh-tarjeta__cuerpo">Declara cuántos llevas. Queda anotado como ' +
        '<b>declarado</b> hasta que el equipo lo contraste con los formularios: un contador ' +
        'de firmas inflado hace perder meses de trabajo a gente real.</p>' +
        '<div class="eh-fila" style="margin-top:.9rem">' +
          '<input class="eh-entrada" id="ehCuantas" type="number" min="1" max="5000" ' +
            'placeholder="Cuántos apoyos" style="max-width:170px">' +
          '<button class="eh-boton eh-boton--oro" type="button" id="ehDeclarar">Declarar</button>' +
        '</div></div>';
      document.getElementById('ehDeclarar').addEventListener('click', function () {
        var n = Number(document.getElementById('ehCuantas').value);
        if (!n || n < 1) { EH.aviso('Escribe cuántos apoyos recogiste'); return; }
        EH.datos.registrarAporte('firmas', String(n), n + ' apoyos declarados, pendientes de verificar')
          .then(function () { EH.aviso('Anotado. Queda pendiente de verificación.'); })
          .catch(function (e) { EH.aviso(e.message); });
      });
    } else {
      cajaAp.innerHTML = '<p class="eh-tenue">Para declarar apoyos recogidos hay que ' +
        '<a href="inscripcion.html">estar inscrito</a>.</p>';
    }

    /* --- el pacto --- */
    var P = EH.PACTO;
    if (P) {
      document.getElementById('ehPactoTitulo').textContent = P.titulo;
      document.getElementById('ehPactoPreambulo').textContent = P.preambulo;
      document.getElementById('ehClausulas').innerHTML = (P.clausulas || []).map(function (c) {
        return '<article class="eh-tarjeta" style="margin-bottom:.9rem">' +
          '<div class="eh-fila" style="gap:.9rem;align-items:baseline">' +
            '<span class="eh-numeral" style="font-size:1.6rem">' + c.numero + '</span>' +
            '<h3 class="eh-tarjeta__titulo" style="margin:0;flex:1;min-width:200px">' +
              EH.escapar(c.titulo) + '</h3>' +
          '</div>' +
          '<p class="eh-tarjeta__cuerpo" style="margin-top:.6rem">' + EH.escapar(c.texto) + '</p>' +
          '<p class="eh-tarjeta__pie"><b class="eh-oro">Por qué existe:</b> ' +
            EH.escapar(c.porQue) + '</p>' +
          '</article>';
      }).join('');

      var col = function (titulo, lista, color) {
        return '<div class="eh-tarjeta"><h3 class="eh-tarjeta__titulo" style="color:' + color + '">' +
          EH.escapar(titulo) + '</h3><ul class="eh-nacion__orgullo">' +
          (lista || []).map(function (x) { return '<li>' + EH.escapar(x) + '</li>'; }).join('') +
          '</ul></div>';
      };
      document.getElementById('ehIntercambio').innerHTML =
        col('Lo que pone la organización', P.loQueLaOrganizacionDa, 'var(--oro2)') +
        col('Lo que pone cada partido', P.loQueElPartidoDa, 'var(--oro2)') +
        col('Lo que rompe el pacto', P.causalesDeExpulsion, '#f07a8e');
    }

    /* --- los límites --- */
    var L = EH.LIMITES_APOYO;
    if (L) {
      document.getElementById('ehReglaGeneral').textContent = L.reglaGeneral;
      document.getElementById('ehTextoLimites').innerHTML =
        '<strong>Lo que hay que saber antes de ayudar a un partido hermano.</strong> ' +
        EH.escapar(L.textoUi);

      document.getElementById('ehProhibido').innerHTML = (L.prohibidoSiempre || []).map(function (x) {
        return '<div class="eh-tarjeta" style="margin-bottom:.7rem;padding:1rem">' +
          '<h4 style="margin:0 0 .4rem">' + EH.escapar(x.que) + '</h4>' +
          '<p class="eh-tarjeta__cuerpo">' + EH.escapar(x.porQue) + '</p>' +
          '<p class="eh-tenue" style="margin-top:.4rem">Por ejemplo: ' + EH.escapar(x.ejemploPais) + '</p>' +
          '</div>';
      }).join('');

      document.getElementById('ehPermitido').innerHTML = (L.permitido || []).map(function (x) {
        return '<div class="eh-tarjeta" style="margin-bottom:.7rem;padding:1rem">' +
          '<h4 style="margin:0 0 .4rem">' + EH.escapar(x.que) + '</h4>' +
          '<p class="eh-tarjeta__cuerpo">' + EH.escapar(x.comoSeHace) + '</p>' +
          '<p class="eh-tenue" style="margin-top:.4rem"><b class="eh-oro">Vale porque:</b> ' +
            EH.escapar(x.valorReal) + '</p></div>';
      }).join('');

      if ((L.precedentes || []).length) {
        document.getElementById('ehPrecedentes').innerHTML =
          '<h3>Internacionales de partidos que ya existen y funcionan</h3>' +
          '<div class="eh-rejilla eh-rejilla--3" style="margin-top:1rem">' +
          L.precedentes.map(function (x) {
            return '<div class="eh-tarjeta"><h4>' + EH.escapar(x.nombre) + '</h4>' +
              '<p class="eh-tarjeta__cuerpo">' + EH.escapar(x.queEs) + '</p>' +
              '<p class="eh-tarjeta__pie">' + EH.escapar(x.leccion) + '</p></div>';
          }).join('') + '</div>';
      }
    }

    modal.addEventListener('click', function (e) { if (e.target === modal) cerrar(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') cerrar(); });

    var h = location.hash.replace('#', '');
    if (h && EH.rutaDe(h)) abrir(h);
  };
})();
