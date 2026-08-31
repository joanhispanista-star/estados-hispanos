/* =========================================================================
   PANEL DE MANDO (CRM)
   =========================================================================
   POR QUÉ EL NÚMERO GRANDE NO ES "INSCRITOS"
   Porque inscritos es la métrica que engaña. Un padrón de diez mil personas
   que no hacen nada es una lista de correos, y cuesta lo mismo mantenerlo que
   a mil que se mueven. La métrica de esta casa es RECLUTADORES ACTIVOS POR
   SEMANA: cuánta gente trajo a alguien en los últimos siete días. Si ese
   número es cero, el movimiento no está creciendo aunque el padrón suba.

   POR QUÉ NO HAY ÁRBOL DE RECLUTAMIENTO
   Es lo primero que pide cualquiera que haya visto un multinivel, y es
   justamente lo que no puede existir. Ver "a quién trajo la gente que traje"
   es la estructura de niveles que define jurídicamente una pirámide. Aquí se
   ve, de cada miembro, a quién trajo ÉL. Profundidad uno. Ni siquiera para
   enseñar una estadística bonita.

   POR QUÉ LA AUDITORÍA DE CONSENTIMIENTOS ESTÁ EN EL PANEL
   Porque la carga de probar la autorización es del responsable. El día que
   llegue una reclamación de habeas data, la respuesta tiene que salir de
   aquí en un minuto, no de una búsqueda en correos viejos.
   ========================================================================= */
(function () {
  'use strict';

  var miembros = [];
  var stats = null;

  function csv(filas) {
    /* El punto y coma es deliberado: Excel en español abre con coma los
       archivos separados por punto y coma, y con coma abre todo en una sola
       columna. El BOM del principio es lo que salva los acentos. */
    return '﻿' + filas.map(function (f) {
      return f.map(function (c) {
        var s = String(c === null || c === undefined ? '' : c);
        return /[";\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
      }).join(';');
    }).join('\r\n');
  }

  function descargar(nombre, contenido, tipo) {
    var b = new Blob([contenido], { type: (tipo || 'text/csv') + ';charset=utf-8' });
    var a = document.createElement('a');
    a.href = URL.createObjectURL(b);
    a.download = nombre;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(function () { URL.revokeObjectURL(a.href); }, 1000);
  }

  function tarjetaCifra(n, u, x, destacada) {
    return '<div class="eh-tarjeta' + (destacada ? ' eh-tarjeta--oro' : '') + ' eh-centro">' +
      '<span class="eh-cifra__n" style="font-size:2.1rem">' + EH.escapar(n) + '</span>' +
      '<span class="eh-cifra__u">' + EH.escapar(u) + '</span>' +
      (x ? '<span class="eh-cifra__x">' + EH.escapar(x) + '</span>' : '') + '</div>';
  }

  function pintarResumen() {
    var s = stats;
    document.getElementById('ehResumen').innerHTML =
      tarjetaCifra(EH.numero(s.reclutadoresActivos), 'reclutadores activos esta semana',
        'El único número que dice si el movimiento crece solo. Si es cero, el padrón sube por inercia.', true) +
      tarjetaCifra(EH.numero(s.total), 'inscritos en total', s.semana + ' esta semana · ' + s.mes + ' este mes') +
      tarjetaCifra(EH.numero(s.naciones) + ' / ' + EH.NACIONES.length, 'naciones con alguien dentro',
        'Una nación sin nadie es una nación donde el movimiento no existe.') +
      tarjetaCifra(
        s.total ? Math.round((s.conReclutador / s.total) * 100) + ' %' : '0 %',
        'llegaron invitados por alguien',
        'El resto llegó por su cuenta. Cuanto más alto, más se sostiene solo.');
  }

  function pintarPorNacion() {
    var s = stats;
    var filas = EH.NACIONES_ORDENADAS
      .map(function (n) { return { n: n, c: s.porNacion[n.id] || 0 }; })
      .sort(function (a, b) { return b.c - a.c; });

    document.getElementById('ehPorNacion').innerHTML =
      '<div class="eh-tabla-caja"><table class="eh-tabla" style="min-width:0">' +
      '<thead><tr><th>Nación</th><th>Miembros</th><th>Estado</th></tr></thead><tbody>' +
      filas.map(function (f) {
        return '<tr><td>' + EH.escapar(f.n.bandera + ' ' + f.n.nombre) + '</td>' +
          '<td class="eh-oro"><b>' + f.c + '</b></td>' +
          '<td>' + (f.c === 0
            ? '<span class="eh-etiqueta">Sin presencia</span>'
            : f.c < 5
              ? '<span class="eh-etiqueta eh-etiqueta--territorio">Primeros contactos</span>'
              : '<span class="eh-etiqueta eh-etiqueta--verde">Núcleo posible</span>') +
          '</td></tr>';
      }).join('') + '</tbody></table></div>';
  }

  function pintarTabla() {
    var texto = (document.getElementById('ehBuscar').value || '').trim().toLowerCase();
    var nacion = document.getElementById('ehNacion').value;
    var lista = miembros.filter(function (m) {
      if (nacion && m.nacion !== nacion) return false;
      if (!texto) return true;
      return (m.nombre + ' ' + (m.correo || '') + ' ' + (m.ciudad || '') + ' ' + (m.oficio || ''))
        .toLowerCase().indexOf(texto) >= 0;
    });

    var caja = document.getElementById('ehTabla');
    if (!lista.length) {
      caja.innerHTML = '<div class="eh-tabla-caja"><p class="eh-tabla__vacio">' +
        (miembros.length ? 'Nadie coincide con ese filtro.'
          : 'Todavía no hay nadie inscrito. El padrón empieza contigo.') + '</p></div>';
      return;
    }

    caja.innerHTML = '<div class="eh-tabla-caja"><table class="eh-tabla">' +
      '<thead><tr><th>Miembro</th><th>Contacto</th><th>Nación</th><th>Oficio</th>' +
      '<th>Grado</th><th>Honor</th><th>Trajo</th><th>Entró</th></tr></thead><tbody>' +
      lista.map(function (m) {
        var n = EH.nacion(m.nacion);
        var trajo = miembros.filter(function (x) { return x.reclutado_por === m.id; }).length;
        var quien = m.reclutado_por
          ? (miembros.filter(function (x) { return x.id === m.reclutado_por; })[0] || {}).nombre
          : null;
        return '<tr>' +
          '<td><b>' + EH.escapar(m.nombre) + '</b>' +
            (quien ? '<br><span class="eh-tenue" style="font-size:.72rem">lo trajo ' +
              EH.escapar(quien) + '</span>' : '') + '</td>' +
          '<td style="font-size:.78rem">' + EH.escapar(m.correo || '—') +
            (m.telefono ? '<br>' + EH.escapar(m.telefono) : '') + '</td>' +
          '<td>' + EH.escapar(n ? n.bandera + ' ' + n.nombre : m.nacion || '—') +
            (m.ciudad ? '<br><span class="eh-tenue" style="font-size:.72rem">' +
              EH.escapar(m.ciudad) + '</span>' : '') + '</td>' +
          '<td style="font-size:.8rem">' + EH.escapar(m.oficio || '—') + '</td>' +
          '<td>' + EH.reputacion.insignia(m.honor) + '</td>' +
          '<td class="eh-oro"><b>' + EH.numero(m.honor) + '</b></td>' +
          '<td>' + (trajo ? '<b class="eh-oro">' + trajo + '</b>' : '<span class="eh-tenue">—</span>') + '</td>' +
          '<td style="font-size:.78rem">' + EH.escapar(EH.fecha(m.creado_en)) + '</td>' +
          '</tr>';
      }).join('') + '</tbody></table></div>' +
      '<p class="eh-tenue" style="margin-top:.6rem">' + lista.length + ' de ' + miembros.length +
      ' miembros. La columna «Trajo» cuenta solo a quien invitó esa persona directamente: ' +
      'no existe, ni existirá, un árbol de niveles.</p>';
  }

  EH.pagina = function () {
    var caja = document.getElementById('ehContenido');
    var yo = EH.datos.sesion();

    /* La puerta.
       ATENCIÓN, Y ESTÁ ESCRITO A PROPÓSITO: esconder la página no es
       protegerla. Lo que de verdad impide que alguien lea el padrón son las
       políticas de RLS del servidor, no este if. En modo local no hay
       servidor y por tanto no hay protección real: por eso el aviso de abajo
       lo dice sin rodeos. */
    if (!yo) {
      caja.innerHTML = '<div class="eh-tarjeta eh-centro"><h2>Hay que entrar</h2>' +
        '<p class="eh-tarjeta__cuerpo">Este panel es del fundador y su equipo.</p>' +
        '<a class="eh-boton" href="inscripcion.html" style="margin-top:1rem">Entrar</a></div>';
      return;
    }
    if (!EH.datos.esFundador() && EH.datos.enNube()) {
      caja.innerHTML = '<div class="eh-tarjeta eh-centro"><h2>Este panel no es para tu cargo</h2>' +
        '<p class="eh-tarjeta__cuerpo">Lo ven el fundador y el equipo. Tu ficha está en la comunidad.</p>' +
        '<a class="eh-boton" href="comunidad.html#yo" style="margin-top:1rem">Ir a mi ficha</a></div>';
      return;
    }

    caja.innerHTML =
      '<h1 style="font-size:clamp(1.6rem,4vw,2.3rem)">Panel de mando</h1>' +
      (EH.datos.enNube() ? '' :
        '<div class="eh-aviso"><span class="eh-aviso__icono">◆</span><div>' +
        '<strong>Modo demostración: este panel no está protegido.</strong> Los datos viven ' +
        'en este navegador y cualquiera que abra esta página en este equipo los ve. Lo que ' +
        'de verdad protege el padrón son las políticas del servidor, y todavía no hay ' +
        'servidor. No metas aquí datos de gente real hasta conectar Supabase.</div></div>') +

      '<div class="eh-rejilla eh-rejilla--4" id="ehResumen" style="margin-top:1.5rem"></div>' +

      '<div class="eh-pestanas" id="ehPestanas" style="margin-top:2rem">' +
        '<button type="button" data-h="padron" class="on">Padrón</button>' +
        '<button type="button" data-h="naciones">Por nación</button>' +
        '<button type="button" data-h="dinero">Aportes</button>' +
        '<button type="button" data-h="legal">Autorizaciones</button>' +
        '<button type="button" data-h="copia">Copia de seguridad</button>' +
      '</div>' +

      '<div class="eh-hoja on" data-hoja="padron">' +
        '<div class="eh-fila" style="margin-bottom:1rem">' +
          '<input class="eh-entrada" id="ehBuscar" type="search" placeholder="Buscar por nombre, correo, ciudad u oficio" style="max-width:340px">' +
          '<select class="eh-entrada" id="ehNacion" style="max-width:230px"></select>' +
          '<button class="eh-boton eh-boton--p" type="button" id="ehCsv">Exportar CSV</button>' +
        '</div>' +
        '<div id="ehTabla" class="eh-cargando">Cargando el padrón…</div>' +
      '</div>' +

      '<div class="eh-hoja" data-hoja="naciones">' +
        '<div class="eh-mapa" id="ehMapaPanel" style="margin-bottom:1.5rem"></div>' +
        '<div id="ehPorNacion"></div>' +
      '</div>' +

      '<div class="eh-hoja" data-hoja="dinero"><div id="ehDinero"></div></div>' +
      '<div class="eh-hoja" data-hoja="legal"><div id="ehLegal"></div></div>' +
      '<div class="eh-hoja" data-hoja="copia"><div id="ehCopia"></div></div>';

    document.getElementById('ehNacion').innerHTML =
      '<option value="">Todas las naciones</option>' +
      EH.NACIONES_ORDENADAS.map(function (n) {
        return '<option value="' + EH.escapar(n.id) + '">' + EH.escapar(n.bandera + ' ' + n.nombre) + '</option>';
      }).join('');

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

    document.getElementById('ehBuscar').addEventListener('input', pintarTabla);
    document.getElementById('ehNacion').addEventListener('change', pintarTabla);

    document.getElementById('ehCsv').addEventListener('click', function () {
      var cab = ['Nombre', 'Correo', 'Teléfono', 'Nación', 'Ciudad', 'Oficio', 'Puede ayudar en',
        'Grado', 'Honor', 'Trajo a', 'Lo trajo', 'Público', 'Fecha de ingreso'];
      var filas = [cab].concat(miembros.map(function (m) {
        var quien = m.reclutado_por
          ? (miembros.filter(function (x) { return x.id === m.reclutado_por; })[0] || {}).nombre || m.reclutado_por
          : '';
        return [m.nombre, m.correo, m.telefono, EH.nombreNacion(m.nacion), m.ciudad, m.oficio,
          (m.aporta || []).join(' '), EH.reputacion.grado(m.honor).nombre, m.honor,
          miembros.filter(function (x) { return x.reclutado_por === m.id; }).length,
          quien, m.publico === false ? 'no' : 'sí', m.creado_en];
      }));
      descargar('padron-estados-hispanos.csv', csv(filas));
      EH.aviso('Padrón exportado');
    });

    /* --- carga --- */
    Promise.all([EH.datos.miembros(), EH.datos.estadisticas()]).then(function (r) {
      miembros = r[0];
      stats = r[1];
      pintarResumen();
      pintarTabla();
      pintarPorNacion();

      /* El mapa del panel pinta solo las naciones donde hay alguien: enseña
         de un vistazo dónde el movimiento existe y dónde es una intención. */
      var conGente = EH.NACIONES.filter(function (n) { return (stats.porNacion[n.id] || 0) > 0; });
      var caja = document.getElementById('ehMapaPanel');
      if (conGente.length) {
        EH.mapa.pintar(caja, conGente, { arcos: false, etiquetas: conGente.length <= 8 });
      } else {
        caja.innerHTML = '<p class="eh-tabla__vacio">Todavía no hay presencia en ninguna nación.</p>';
      }
    });

    /* --- aportes --- */
    EH.datos.donaciones().then(function (lista) {
      var total = lista.reduce(function (s, d) { return s + (Number(d.monto) || 0); }, 0);
      document.getElementById('ehDinero').innerHTML =
        '<div class="eh-aviso"><span class="eh-aviso__icono">◆</span><div>' +
          '<strong>Esto NO es contabilidad.</strong> Aquí solo se anota que alguien pulsó el ' +
          'botón de aportar. La cifra que vale es la del extracto bancario y la del proveedor ' +
          'de pagos, y el libro de ingresos se concilia contra ellos, nunca contra esta tabla.' +
        '</div></div>' +
        (lista.length
          ? '<div class="eh-tabla-caja"><table class="eh-tabla" style="min-width:0">' +
            '<thead><tr><th>Fecha</th><th>Monto anunciado</th><th>Moneda</th><th>Estado</th><th>Referencia</th></tr></thead><tbody>' +
            lista.map(function (d) {
              return '<tr><td>' + EH.escapar(EH.fecha(d.creado_en)) + '</td>' +
                '<td class="eh-oro"><b>' + EH.numero(d.monto) + '</b></td>' +
                '<td>' + EH.escapar(d.moneda) + '</td>' +
                '<td><span class="eh-etiqueta">' + EH.escapar(d.estado) + '</span></td>' +
                '<td style="font-size:.76rem">' + EH.escapar(d.referencia_externa || '—') + '</td></tr>';
            }).join('') + '</tbody></table></div>' +
            '<p class="eh-tenue" style="margin-top:.6rem">Total anunciado: ' + EH.numero(total) + '</p>'
          : '<p class="eh-tabla__vacio">No hay ningún aporte anunciado. Es lo esperable: ' +
            'la pantalla de aportes dice que todavía no se reciben.</p>');
    });

    /* --- autorizaciones ---
       La prueba legal. Si alguien reclama, la respuesta sale de aquí. */
    EH.datos.exportarTodo().then(function (d) {
      var cons = d.consentimientos || [];
      var porTipo = {};
      cons.forEach(function (c) {
        porTipo[c.tipo] = porTipo[c.tipo] || { si: 0, no: 0 };
        porTipo[c.tipo][c.otorgado ? 'si' : 'no']++;
      });

      var NOMBRES = {
        afiliacion_politica: 'Afiliación política (dato sensible)',
        transferencia_internacional: 'Transferencia internacional de datos',
        mayoria_edad: 'Declaración de mayoría de edad',
        comunicaciones: 'Comunicaciones (opcional)'
      };

      document.getElementById('ehLegal').innerHTML =
        '<div class="eh-aviso eh-aviso--info"><span class="eh-aviso__icono">◆</span><div>' +
          '<strong>La carga de probar la autorización es tuya, no del titular.</strong> ' +
          'Aquí está la prueba: qué autorizó cada persona, con qué versión del texto y ' +
          'cuándo. Nunca se sobrescribe una fila: revocar es insertar una nueva.' +
        '</div></div>' +
        (cons.length
          ? '<div class="eh-rejilla eh-rejilla--2">' + Object.keys(porTipo).map(function (t) {
              return '<div class="eh-tarjeta">' +
                '<h4>' + EH.escapar(NOMBRES[t] || t) + '</h4>' +
                '<p class="eh-tarjeta__cuerpo">Autorizadas: <b class="eh-oro">' + porTipo[t].si +
                '</b> · Denegadas: <b>' + porTipo[t].no + '</b></p></div>';
            }).join('') + '</div>' +
            '<button class="eh-boton eh-boton--p" type="button" id="ehCsvCons" style="margin-top:1rem">' +
            'Exportar el registro de autorizaciones</button>'
          : '<p class="eh-tabla__vacio">No hay autorizaciones registradas todavía.</p>');

      var b = document.getElementById('ehCsvCons');
      if (b) b.addEventListener('click', function () {
        var filas = [['Miembro', 'Nombre', 'Tipo', 'Otorgado', 'Versión del texto', 'Fecha', 'Agente']]
          .concat(cons.map(function (c) {
            var m = (d.miembros || []).filter(function (x) { return x.id === c.miembro_id; })[0] || {};
            return [c.miembro_id, m.nombre || '', NOMBRES[c.tipo] || c.tipo,
              c.otorgado ? 'sí' : 'no', c.version_texto, c.creado_en, c.agente || ''];
          }));
        descargar('autorizaciones-estados-hispanos.csv', csv(filas));
        EH.aviso('Registro exportado');
      });
    });

    /* --- copia de seguridad --- */
    document.getElementById('ehCopia').innerHTML =
      '<div class="eh-aviso"><span class="eh-aviso__icono">◆</span><div>' +
        '<strong>En modo demostración, esto es lo único que salva los datos.</strong> ' +
        'Viven en el almacenamiento de este navegador: si borras los datos de navegación, ' +
        'se pierden todos y no hay forma de recuperarlos. Descarga la copia cada vez que ' +
        'entre gente nueva y guárdala en la carpeta del proyecto.' +
      '</div></div>' +
      '<div class="eh-fila">' +
        '<button class="eh-boton eh-boton--oro" type="button" id="ehBajarCopia">Descargar copia completa</button>' +
        '<label class="eh-boton eh-boton--fantasma" style="cursor:pointer">Restaurar desde archivo' +
          '<input type="file" id="ehSubirCopia" accept="application/json" style="display:none"></label>' +
      '</div>';

    document.getElementById('ehBajarCopia').addEventListener('click', function () {
      EH.datos.exportarTodo().then(function (d) {
        descargar('copia-estados-hispanos-' + new Date().toISOString().slice(0, 10) + '.json',
          JSON.stringify(d, null, 1), 'application/json');
        EH.aviso('Copia descargada');
      });
    });

    document.getElementById('ehSubirCopia').addEventListener('change', function (e) {
      var f = e.target.files[0];
      if (!f) return;
      var lector = new FileReader();
      lector.onload = function () {
        try {
          var d = JSON.parse(lector.result);
          // Restaurar PISA lo que hay. Se pregunta, porque perder el padrón
          // por un clic distraído no tiene vuelta atrás.
          if (!confirm('Esto reemplaza TODOS los datos actuales por los del archivo. ¿Seguro?')) return;
          EH.datos.importarTodo(d).then(function () {
            EH.aviso('Copia restaurada');
            location.reload();
          });
        } catch (err) {
          EH.aviso('El archivo no es una copia válida');
        }
      };
      lector.readAsText(f);
    });
  };
})();
