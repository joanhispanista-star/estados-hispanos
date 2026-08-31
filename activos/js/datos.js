/* =========================================================================
   CAPA DE DATOS
   =========================================================================
   Toda la plataforma habla con este archivo y con ninguno más. Ninguna
   pantalla toca Supabase directamente ni escribe en localStorage a mano.

   POR QUÉ EXISTEN DOS MODOS
   Modo LOCAL (por defecto): los datos viven en este navegador. Sirve para
   enseñar la plataforma HOY, sin cuentas, sin internet, con doble clic.
   Modo NUBE: cuando EH.CONFIG.supabase tiene url y clave. Mismos nombres de
   función, misma forma de respuesta. Las pantallas no saben en cuál están.

   Esto no es elegancia: es que el fundador no se quede bloqueado esperando a
   abrir cuentas para poder mostrarle el proyecto a alguien.

   POR QUÉ NO SE USA EL SDK DE SUPABASE
   Traerlo desde un CDN rompería la promesa de "abre sin internet" y metería
   una dependencia de terceros en una plataforma política. Se habla con la API
   REST usando fetch, que es web estándar y no se cae si un CDN desaparece.

   POR QUÉ EL MODO LOCAL NO PIDE CONTRASEÑA
   Porque no podría verificarla de verdad: cualquiera con la consola abierta
   entraría igual. Pedir una contraseña que no protege nada es mentirle al
   usuario. En modo local la plataforma avisa en pantalla de que es una
   demostración.
   ========================================================================= */

window.EH = window.EH || {};

(function () {
  'use strict';

  var C = EH.CONFIG;
  var hayNube = !!(C.supabase && C.supabase.url && C.supabase.anon);

  /* ---------------------------------------------------------------------
     ALMACÉN LOCAL
     --------------------------------------------------------------------- */
  var VACIO = {
    miembros: [], consentimientos: [], publicaciones: [], comentarios: [],
    mensajes: [], aportes: [], donaciones: [], notas: []
  };

  function leerTodo() {
    try {
      var crudo = localStorage.getItem(C.clave);
      if (!crudo) return JSON.parse(JSON.stringify(VACIO));
      var d = JSON.parse(crudo);
      // Se completa lo que falte: si mañana se añade una colección, los datos
      // de quien ya venía usando la plataforma no revientan al leerse.
      Object.keys(VACIO).forEach(function (k) { if (!Array.isArray(d[k])) d[k] = []; });
      return d;
    } catch (e) {
      return JSON.parse(JSON.stringify(VACIO));
    }
  }

  function guardarTodo(d) {
    try {
      localStorage.setItem(C.clave, JSON.stringify(d));
      return true;
    } catch (e) {
      // Cuota llena. Se avisa en vez de perder datos en silencio.
      if (EH.aviso) EH.aviso('No se pudo guardar: el navegador está lleno');
      return false;
    }
  }

  function id() {
    // La marca de tiempo sola no basta: dos inscripciones en el mismo
    // milisegundo colisionarían y una sobrescribiría a la otra.
    return Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 9);
  }

  function ahora() { return new Date().toISOString(); }

  /* ---------------------------------------------------------------------
     CLIENTE REST DE SUPABASE
     --------------------------------------------------------------------- */
  var sesionNube = null;

  function url(ruta) { return C.supabase.url.replace(/\/+$/, '') + ruta; }

  function cabeceras(extra) {
    var h = { apikey: C.supabase.anon, 'Content-Type': 'application/json' };
    h.Authorization = 'Bearer ' + ((sesionNube && sesionNube.access_token) || C.supabase.anon);
    if (extra) Object.keys(extra).forEach(function (k) { h[k] = extra[k]; });
    return h;
  }

  function pedir(ruta, opciones) {
    opciones = opciones || {};
    return fetch(url(ruta), {
      method: opciones.metodo || 'GET',
      headers: cabeceras(opciones.cabeceras),
      body: opciones.cuerpo ? JSON.stringify(opciones.cuerpo) : undefined
    }).then(function (r) {
      return r.text().then(function (t) {
        var d = null;
        try { d = t ? JSON.parse(t) : null; } catch (e) { d = t; }
        if (!r.ok) {
          var m = (d && (d.message || d.error_description || d.msg || d.error)) || ('Error ' + r.status);
          throw new Error(m);
        }
        return d;
      });
    });
  }

  function tabla(nombre, consulta) {
    return pedir('/rest/v1/' + nombre + (consulta ? '?' + consulta : ''));
  }

  function insertar(nombre, fila) {
    return pedir('/rest/v1/' + nombre, {
      metodo: 'POST', cuerpo: fila, cabeceras: { Prefer: 'return=representation' }
    }).then(function (r) { return Array.isArray(r) ? r[0] : r; });
  }

  /* ---------------------------------------------------------------------
     SESIÓN
     --------------------------------------------------------------------- */
  var miembroActual = null;

  function recordarSesion(m) {
    miembroActual = m;
    try {
      if (m) localStorage.setItem(C.claveSesion, JSON.stringify({ id: m.id, token: sesionNube && sesionNube.access_token }));
      else localStorage.removeItem(C.claveSesion);
    } catch (e) { /* navegación privada: la sesión durará solo esta pestaña */ }
  }

  /* =====================================================================
     API PÚBLICA
     ===================================================================== */
  EH.datos = {

    modo: function () { return hayNube ? 'nube' : 'local'; },
    enNube: function () { return hayNube; },

    /* Restaura la sesión al cargar cualquier página. */
    iniciar: function () {
      var guardado;
      try { guardado = JSON.parse(localStorage.getItem(C.claveSesion) || 'null'); } catch (e) { guardado = null; }
      if (!guardado) return Promise.resolve(null);

      if (!hayNube) {
        var d = leerTodo();
        miembroActual = d.miembros.filter(function (m) { return m.id === guardado.id; })[0] || null;
        return Promise.resolve(miembroActual);
      }

      sesionNube = { access_token: guardado.token };
      return tabla('miembros', 'id=eq.' + encodeURIComponent(guardado.id) + '&select=*')
        .then(function (r) { miembroActual = (r && r[0]) || null; return miembroActual; })
        .catch(function () { recordarSesion(null); return null; });
    },

    sesion: function () { return miembroActual; },

    esFundador: function () {
      return !!(miembroActual && (miembroActual.rol === 'fundador' || miembroActual.rol === 'equipo'));
    },

    /* -----------------------------------------------------------------
       INSCRIPCIÓN
       Los consentimientos no son decorativos: son la prueba legal de qué
       autorizó cada persona y con qué versión del texto. Se guarda una fila
       por autorización y nunca se sobrescribe.
       ----------------------------------------------------------------- */
    inscribir: function (f) {
      var reclutador = null;
      try { reclutador = localStorage.getItem('eh_reclutador') || null; } catch (e) { }

      var nuevo = {
        id: id(),
        nombre: f.nombre,
        correo: (f.correo || '').trim().toLowerCase(),
        telefono: f.telefono || '',
        nacion: f.nacion,
        ciudad: f.ciudad || '',
        oficio: f.oficio || '',
        biografia: f.biografia || '',
        aporta: f.aporta || [],
        publico: f.publico !== false,
        rol: 'miembro',
        honor: 0,
        rango: 1,
        reclutado_por: reclutador,
        creado_en: ahora()
      };

      /* CUATRO autorizaciones separadas, cuatro filas distintas.
         No es burocracia: una sola casilla que agrupe todo INVALIDA la
         autorización del dato sensible (Decreto 1377 de 2013, hoy compilado
         en el 1074 de 2015). La afiliación política es dato sensible por el
         art. 5 de la Ley 1581, la transferencia internacional necesita
         autorización propia por el art. 26, la mayoría de edad la exige el
         art. 7, y las comunicaciones son opcionales y no se pueden exigir.

         La carga de probar la autorización es del responsable, así que se
         guarda la versión del texto que se mostró. La dirección IP la tiene
         que sellar el servidor: desde el navegador no se puede saber, y
         escribir aquí una IP inventada sería peor que no tener ninguna. */
      var pruebas = [
        { tipo: 'afiliacion_politica', otorgado: !!f.consPolitico },
        { tipo: 'transferencia_internacional', otorgado: !!f.consTransferencia },
        { tipo: 'mayoria_edad', otorgado: !!f.consEdad },
        { tipo: 'comunicaciones', otorgado: !!f.consComunicaciones }
      ].map(function (c) {
        return {
          id: id(), miembro_id: nuevo.id, tipo: c.tipo, otorgado: c.otorgado,
          version_texto: C.versionConsentimiento,
          agente: (navigator.userAgent || '').slice(0, 250),
          creado_en: ahora()
        };
      });

      if (!hayNube) {
        var d = leerTodo();
        if (d.miembros.some(function (m) { return m.correo === nuevo.correo; })) {
          return Promise.reject(new Error('Ese correo ya está inscrito en este navegador.'));
        }
        d.miembros.push(nuevo);
        d.consentimientos = d.consentimientos.concat(pruebas);
        // El honor se registra siempre como aporte, nunca sumando a mano al
        // miembro: si el libro mayor y el total no cuadran, gana el libro.
        d.aportes.push({ id: id(), miembro_id: nuevo.id, tipo: 'inscripcion', honor: 10, nota: 'Se une al movimiento', creado_en: ahora() });
        if (reclutador && d.miembros.some(function (m) { return m.id === reclutador; })) {
          d.aportes.push({ id: id(), miembro_id: reclutador, tipo: 'reclutar', referencia: nuevo.id, honor: 25, nota: 'Trajo a ' + nuevo.nombre, creado_en: ahora() });
        }
        EH.reputacion.recalcular(d);
        guardarTodo(d);
        var yo = d.miembros.filter(function (m) { return m.id === nuevo.id; })[0];
        recordarSesion(yo);
        return Promise.resolve(yo);
      }

      // En la nube el alta pasa por Auth: sin usuario no hay fila de miembro,
      // porque todas las políticas de RLS cuelgan de auth.uid().
      return pedir('/auth/v1/signup', {
        metodo: 'POST', cuerpo: { email: nuevo.correo, password: f.clave }
      }).then(function (r) {
        if (r && r.access_token) sesionNube = { access_token: r.access_token };
        nuevo.id = (r && r.user && r.user.id) || (r && r.id) || nuevo.id;
        pruebas.forEach(function (p) { p.miembro_id = nuevo.id; });
        return insertar('miembros', nuevo);
      }).then(function (m) {
        return insertar('consentimientos', pruebas).then(function () { return m; });
      }).then(function (m) {
        recordarSesion(m);
        return EH.datos.registrarAporte('inscripcion', null, 'Se une al movimiento')
          .catch(function () { })
          .then(function () { return m; });
      });
    },

    entrar: function (correo, clave) {
      correo = (correo || '').trim().toLowerCase();

      if (!hayNube) {
        var d = leerTodo();
        var m = d.miembros.filter(function (x) { return x.correo === correo; })[0];
        if (!m) return Promise.reject(new Error('Ese correo no está inscrito en este navegador.'));
        recordarSesion(m);
        return Promise.resolve(m);
      }

      return pedir('/auth/v1/token?grant_type=password', {
        metodo: 'POST', cuerpo: { email: correo, password: clave }
      }).then(function (r) {
        sesionNube = { access_token: r.access_token };
        return tabla('miembros', 'id=eq.' + r.user.id + '&select=*');
      }).then(function (r) {
        var m = r && r[0];
        if (!m) throw new Error('La cuenta existe pero no tiene ficha de miembro.');
        recordarSesion(m);
        return m;
      });
    },

    salir: function () {
      sesionNube = null;
      recordarSesion(null);
      return Promise.resolve();
    },

    /* -----------------------------------------------------------------
       MIEMBROS
       ----------------------------------------------------------------- */
    miembros: function (filtro) {
      filtro = filtro || {};
      if (!hayNube) {
        var lista = leerTodo().miembros.slice();
        if (filtro.nacion) lista = lista.filter(function (m) { return m.nacion === filtro.nacion; });
        if (filtro.soloPublicos) lista = lista.filter(function (m) { return m.publico !== false; });
        if (filtro.texto) {
          var t = filtro.texto.toLowerCase();
          lista = lista.filter(function (m) {
            return (m.nombre + ' ' + m.ciudad + ' ' + m.oficio + ' ' + m.correo).toLowerCase().indexOf(t) >= 0;
          });
        }
        lista.sort(function (a, b) { return (b.honor || 0) - (a.honor || 0); });
        return Promise.resolve(lista);
      }
      var q = 'select=*&order=honor.desc';
      if (filtro.nacion) q += '&nacion=eq.' + encodeURIComponent(filtro.nacion);
      if (filtro.soloPublicos) q += '&publico=is.true';
      return tabla('miembros', q);
    },

    actualizarPerfil: function (cambios) {
      if (!miembroActual) return Promise.reject(new Error('No hay sesión.'));
      if (!hayNube) {
        var d = leerTodo();
        var m = d.miembros.filter(function (x) { return x.id === miembroActual.id; })[0];
        if (!m) return Promise.reject(new Error('Miembro no encontrado.'));
        Object.keys(cambios).forEach(function (k) { m[k] = cambios[k]; });
        guardarTodo(d);
        miembroActual = m;
        return Promise.resolve(m);
      }
      return pedir('/rest/v1/miembros?id=eq.' + miembroActual.id, {
        metodo: 'PATCH', cuerpo: cambios, cabeceras: { Prefer: 'return=representation' }
      }).then(function (r) { miembroActual = (r && r[0]) || miembroActual; return miembroActual; });
    },

    reclutasDe: function (idMiembro) {
      if (!hayNube) {
        return Promise.resolve(leerTodo().miembros.filter(function (m) { return m.reclutado_por === idMiembro; }));
      }
      return tabla('miembros', 'reclutado_por=eq.' + idMiembro + '&select=*');
    },

    /* -----------------------------------------------------------------
       APORTES A LA HISPANIDAD (el libro mayor de reputación)
       ----------------------------------------------------------------- */
    registrarAporte: function (tipo, referencia, nota) {
      if (!miembroActual) return Promise.reject(new Error('No hay sesión.'));
      var honor = EH.reputacion.valor(tipo);
      if (honor === null) return Promise.reject(new Error('Tipo de aporte desconocido: ' + tipo));

      if (!hayNube) {
        var d = leerTodo();
        d.aportes.push({
          id: id(), miembro_id: miembroActual.id, tipo: tipo, honor: honor,
          referencia: referencia || null, nota: nota || '', creado_en: ahora()
        });
        EH.reputacion.recalcular(d);
        guardarTodo(d);
        miembroActual = d.miembros.filter(function (m) { return m.id === miembroActual.id; })[0] || miembroActual;
        return Promise.resolve(miembroActual);
      }

      // En la nube el cliente NO puede insertar en aportes: la tabla no tiene
      // política de insert, a propósito. El único camino es esta función, que
      // valida el tipo y aplica el tope diario en el servidor.
      return pedir('/rest/v1/rpc/registrar_aporte', {
        metodo: 'POST',
        cuerpo: { p_tipo: tipo, p_referencia: referencia || null, p_nota: nota || '' }
      });
    },

    aportes: function (idMiembro) {
      if (!hayNube) {
        var lista = leerTodo().aportes.filter(function (a) { return a.miembro_id === idMiembro; });
        lista.sort(function (a, b) { return b.creado_en.localeCompare(a.creado_en); });
        return Promise.resolve(lista);
      }
      return tabla('aportes', 'miembro_id=eq.' + idMiembro + '&select=*&order=creado_en.desc');
    },

    /* -----------------------------------------------------------------
       MURO
       ----------------------------------------------------------------- */
    publicaciones: function (nacion) {
      if (!hayNube) {
        var d = leerTodo();
        var lista = d.publicaciones.slice();
        if (nacion) lista = lista.filter(function (p) { return p.nacion === nacion; });
        lista.sort(function (a, b) { return b.creado_en.localeCompare(a.creado_en); });
        return Promise.resolve(lista.map(function (p) {
          var a = d.miembros.filter(function (m) { return m.id === p.miembro_id; })[0];
          return Object.assign({}, p, {
            autor: a ? a.nombre : 'Miembro',
            autor_nacion: a ? a.nacion : null,
            autor_rango: a ? a.rango : 1
          });
        }));
      }
      var q = 'select=*,miembros(nombre,nacion,rango)&order=creado_en.desc&limit=80';
      if (nacion) q += '&nacion=eq.' + encodeURIComponent(nacion);
      return tabla('publicaciones', q).then(function (r) {
        return (r || []).map(function (p) {
          var a = p.miembros || {};
          return Object.assign({}, p, { autor: a.nombre || 'Miembro', autor_nacion: a.nacion, autor_rango: a.rango || 1 });
        });
      });
    },

    publicar: function (texto) {
      if (!miembroActual) return Promise.reject(new Error('Hay que estar inscrito para publicar.'));
      var fila = { id: id(), miembro_id: miembroActual.id, texto: texto, nacion: miembroActual.nacion, creado_en: ahora() };
      if (!hayNube) {
        var d = leerTodo();
        d.publicaciones.push(fila);
        guardarTodo(d);
        return EH.datos.registrarAporte('publicar', fila.id, 'Publicación en el muro').then(function () { return fila; });
      }
      delete fila.id;
      return insertar('publicaciones', fila).then(function (p) {
        return EH.datos.registrarAporte('publicar', p.id, 'Publicación en el muro').catch(function () { }).then(function () { return p; });
      });
    },

    /* -----------------------------------------------------------------
       CHAT
       En la nube se consulta cada pocos segundos en vez de abrir un socket:
       Realtime exige el SDK y el SDK exige un CDN. Se prefiere el sondeo
       antes que romper la promesa de cero dependencias.
       ----------------------------------------------------------------- */
    mensajes: function (sala, desde) {
      if (!hayNube) {
        var d = leerTodo();
        var lista = d.mensajes.filter(function (m) { return m.sala === sala; });
        if (desde) lista = lista.filter(function (m) { return m.creado_en > desde; });
        lista.sort(function (a, b) { return a.creado_en.localeCompare(b.creado_en); });
        return Promise.resolve(lista.map(function (p) {
          var a = d.miembros.filter(function (m) { return m.id === p.miembro_id; })[0];
          return Object.assign({}, p, { autor: a ? a.nombre : 'Miembro', autor_rango: a ? a.rango : 1 });
        }));
      }
      var q = 'sala=eq.' + encodeURIComponent(sala) + '&select=*,miembros(nombre,rango)&order=creado_en.asc&limit=200';
      if (desde) q += '&creado_en=gt.' + encodeURIComponent(desde);
      return tabla('mensajes', q).then(function (r) {
        return (r || []).map(function (p) {
          var a = p.miembros || {};
          return Object.assign({}, p, { autor: a.nombre || 'Miembro', autor_rango: a.rango || 1 });
        });
      });
    },

    enviar: function (sala, texto) {
      if (!miembroActual) return Promise.reject(new Error('Hay que estar inscrito para escribir.'));
      var fila = { id: id(), sala: sala, miembro_id: miembroActual.id, texto: texto, creado_en: ahora() };
      if (!hayNube) {
        var d = leerTodo();
        d.mensajes.push(fila);
        guardarTodo(d);
        return Promise.resolve(fila);
      }
      delete fila.id;
      return insertar('mensajes', fila);
    },

    /* -----------------------------------------------------------------
       APORTES ECONÓMICOS
       Se registra la INTENCIÓN y la referencia del proveedor. El dinero no
       pasa por aquí en ningún momento: lo cobra una pasarela licenciada.
       ----------------------------------------------------------------- */
    registrarDonacion: function (monto, moneda, referencia) {
      var fila = {
        id: id(),
        miembro_id: miembroActual ? miembroActual.id : null,
        monto: monto, moneda: moneda || 'COP',
        referencia_externa: referencia || null,
        estado: 'anunciada',
        creado_en: ahora()
      };
      if (!hayNube) {
        var d = leerTodo();
        d.donaciones.push(fila);
        guardarTodo(d);
        return Promise.resolve(fila);
      }
      delete fila.id;
      return insertar('donaciones', fila);
    },

    donaciones: function () {
      if (!hayNube) return Promise.resolve(leerTodo().donaciones.slice().reverse());
      return tabla('donaciones', 'select=*&order=creado_en.desc');
    },

    /* -----------------------------------------------------------------
       CRM
       ----------------------------------------------------------------- */
    notas: function (idMiembro) {
      if (!hayNube) return Promise.resolve(leerTodo().notas.filter(function (n) { return n.miembro_id === idMiembro; }));
      return tabla('notas_crm', 'miembro_id=eq.' + idMiembro + '&select=*&order=creado_en.desc');
    },

    anotar: function (idMiembro, texto, etiqueta) {
      var fila = { id: id(), miembro_id: idMiembro, texto: texto, etiqueta: etiqueta || '', creado_en: ahora() };
      if (!hayNube) {
        var d = leerTodo();
        d.notas.push(fila);
        guardarTodo(d);
        return Promise.resolve(fila);
      }
      delete fila.id;
      return insertar('notas_crm', fila);
    },

    /* -----------------------------------------------------------------
       DERECHOS DEL TITULAR (Ley 1581 de 2012)
       No son un extra: sin poder ver, exportar y borrar sus datos, la
       inscripción no cumple la ley de habeas data.
       ----------------------------------------------------------------- */
    misDatos: function () {
      if (!miembroActual) return Promise.reject(new Error('No hay sesión.'));
      var yo = miembroActual.id;
      if (!hayNube) {
        var d = leerTodo();
        return Promise.resolve({
          miembro: d.miembros.filter(function (m) { return m.id === yo; })[0] || null,
          consentimientos: d.consentimientos.filter(function (c) { return c.miembro_id === yo; }),
          aportes: d.aportes.filter(function (a) { return a.miembro_id === yo; }),
          publicaciones: d.publicaciones.filter(function (p) { return p.miembro_id === yo; }),
          mensajes: d.mensajes.filter(function (m) { return m.miembro_id === yo; }),
          donaciones: d.donaciones.filter(function (x) { return x.miembro_id === yo; })
        });
      }
      return Promise.all([
        tabla('miembros', 'id=eq.' + yo + '&select=*'),
        tabla('consentimientos', 'miembro_id=eq.' + yo + '&select=*'),
        tabla('aportes', 'miembro_id=eq.' + yo + '&select=*'),
        tabla('publicaciones', 'miembro_id=eq.' + yo + '&select=*'),
        tabla('mensajes', 'miembro_id=eq.' + yo + '&select=*'),
        tabla('donaciones', 'miembro_id=eq.' + yo + '&select=*')
      ]).then(function (r) {
        return { miembro: r[0][0] || null, consentimientos: r[1], aportes: r[2], publicaciones: r[3], mensajes: r[4], donaciones: r[5] };
      });
    },

    borrarMisDatos: function () {
      if (!miembroActual) return Promise.reject(new Error('No hay sesión.'));
      var yo = miembroActual.id;
      if (!hayNube) {
        var d = leerTodo();
        d.miembros = d.miembros.filter(function (x) { return x.id !== yo; });
        ['consentimientos', 'aportes', 'publicaciones', 'mensajes', 'donaciones', 'notas'].forEach(function (col) {
          d[col] = d[col].filter(function (x) { return x.miembro_id !== yo; });
        });
        guardarTodo(d);
        return EH.datos.salir();
      }
      // En la nube el borrado lo hace una función del servidor: el cliente no
      // tiene ni puede tener permiso para tocar los libros inmutables. El
      // nombre tiene que coincidir EXACTO con el de la migración 0001, o el
      // derecho de supresión falla en silencio y eso es la infracción misma.
      return pedir('/rest/v1/rpc/borrar_mi_cuenta', { metodo: 'POST', cuerpo: {} })
        .then(function () { return EH.datos.salir(); });
    },

    /* -----------------------------------------------------------------
       ADHESIONES AL MOVIMIENTO
       Es el contador de la portada. En la nube se pide por una función del
       servidor y no leyendo la tabla: el RLS impide —a propósito— que un
       miembro lea los aportes de los demás, así que un conteo hecho desde el
       cliente devolvería siempre 1 y el número de la portada sería mentira.

       Se llama adhesión y no reconocimiento a conciencia: "reconocimiento" es
       el término del derecho internacional para reconocer gobiernos, y ese
       encuadre es exactamente el que no le conviene a este movimiento.
       ----------------------------------------------------------------- */
    adhesiones: function () {
      if (!hayNube) {
        var vistos = {};
        leerTodo().aportes.forEach(function (a) {
          if (a.tipo === 'adherir') vistos[a.miembro_id] = true;
        });
        return Promise.resolve(Object.keys(vistos).length);
      }
      return pedir('/rest/v1/rpc/contar_adhesiones', { metodo: 'POST', cuerpo: {} })
        .then(function (n) { return Number(n) || 0; })
        .catch(function () { return 0; });
    },

    /* -----------------------------------------------------------------
       ESTADÍSTICAS DEL PANEL
       El número que importa no es "inscritos": es cuántos reclutan cada
       semana. Un padrón que no crece solo es una lista de correos.
       ----------------------------------------------------------------- */
    estadisticas: function () {
      return Promise.all([EH.datos.miembros(), EH.datos.donaciones()]).then(function (r) {
        var ms = r[0], ds = r[1];
        var hace7 = new Date(Date.now() - 7 * 864e5).toISOString();
        var hace30 = new Date(Date.now() - 30 * 864e5).toISOString();
        var reclutadores = {};
        ms.forEach(function (m) { if (m.reclutado_por && m.creado_en > hace7) reclutadores[m.reclutado_por] = true; });
        var porNacion = {};
        ms.forEach(function (m) { porNacion[m.nacion] = (porNacion[m.nacion] || 0) + 1; });
        return {
          total: ms.length,
          semana: ms.filter(function (m) { return m.creado_en > hace7; }).length,
          mes: ms.filter(function (m) { return m.creado_en > hace30; }).length,
          reclutadoresActivos: Object.keys(reclutadores).length,
          conReclutador: ms.filter(function (m) { return !!m.reclutado_por; }).length,
          naciones: Object.keys(porNacion).length,
          porNacion: porNacion,
          honorTotal: ms.reduce(function (s, m) { return s + (m.honor || 0); }, 0),
          donaciones: ds.length,
          montoAnunciado: ds.reduce(function (s, x) { return s + (Number(x.monto) || 0); }, 0)
        };
      });
    },

    /* Copia de seguridad completa del modo local. El LÉEME del taller ya
       advierte que borrar los datos de navegación se lo lleva todo; aquí
       pasa exactamente lo mismo, así que la copia no es opcional. */
    exportarTodo: function () { return Promise.resolve(leerTodo()); },

    importarTodo: function (objeto) {
      if (!objeto || typeof objeto !== 'object') return Promise.reject(new Error('Archivo no válido.'));
      var d = JSON.parse(JSON.stringify(VACIO));
      Object.keys(VACIO).forEach(function (k) { if (Array.isArray(objeto[k])) d[k] = objeto[k]; });
      guardarTodo(d);
      return Promise.resolve(d);
    }
  };

})();
