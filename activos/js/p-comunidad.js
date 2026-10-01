/* =========================================================================
   COMUNIDAD
   =========================================================================
   POR QUÉ LA FICHA PROPIA VA ARRIBA DEL TODO
   Porque es lo que la persona viene a ver. Un movimiento pierde a su gente
   cuando entrar no devuelve nada: el honor, el grado y lo que falta para el
   siguiente son la única prueba visible de que lo que hizo contó.

   POR QUÉ SE ENSEÑA CUÁNTO HONOR SE RECORTÓ POR EL TECHO
   El honor de invitar tiene techo del 25 %. Si alguien trae a veinte personas
   y ve que sus puntos no suben como esperaba, sin explicación concluye que el
   sistema está roto o que le hacen trampa. Decírselo —"se te recortaron 180
   por el techo, haz algo más y se te desbloquean"— convierte una frustración
   en una instrucción.
   ========================================================================= */
(function () {
  'use strict';

  var miembros = [];

  /* ------------------------------------------------------------------
     MI FICHA
     ------------------------------------------------------------------ */
  function pintarYo() {
    var caja = document.getElementById('yo');
    var yo = EH.datos.sesion();

    if (!yo) {
      caja.innerHTML =
        '<div class="eh-tarjeta eh-tarjeta--oro eh-centro">' +
        '<h2 style="margin-bottom:.4rem">Todavía no eres parte</h2>' +
        '<p class="eh-tarjeta__cuerpo" style="max-width:46ch;margin:0 auto 1.2rem">' +
        'Puedes leer el muro y ver a los miembros. Para publicar, escribir en el chat y ' +
        'tener tu propio escalafón hay que inscribirse: es gratis y toma dos minutos.</p>' +
        '<a class="eh-boton eh-boton--oro" href="inscripcion.html">Inscribirme</a></div>';
      return;
    }

    var g = EH.reputacion.grado(yo.honor);
    var enlace = EH.enlaceReclutamiento(yo.id);
    var nacion = EH.nacion(yo.nacion);

    var recorte = yo.honor_recortado
      ? '<div class="eh-aviso"><span class="eh-aviso__icono">◆</span><div>' +
        '<strong>' + EH.numero(yo.honor_recortado) + ' puntos en espera.</strong> ' +
        'El honor por invitar no puede pasar de la cuarta parte de tu total: es la regla que ' +
        'impide que esto se convierta en una pirámide. Se te desbloquean solos en cuanto ' +
        'sumes honor haciendo otras cosas.</div></div>'
      : '';

    caja.innerHTML =
      '<div class="eh-tarjeta eh-tarjeta--oro">' +
        '<div class="eh-fila" style="gap:1.2rem;align-items:flex-start">' +
          '<span class="eh-avatar eh-avatar--g">' + EH.escapar(EH.iniciales(yo.nombre)) + '</span>' +
          '<div style="flex:1;min-width:220px">' +
            '<h2 style="margin:0 0 .3rem;font-size:1.5rem">' + EH.escapar(yo.nombre) + '</h2>' +
            '<div class="eh-fila" style="gap:.5rem">' +
              EH.reputacion.insignia(yo.honor) +
              '<span class="eh-etiqueta eh-fila" style="gap:.35rem;flex-wrap:nowrap">' +
                (nacion ? EH.banderas.svg(yo.nacion, 16) : '') +
                EH.escapar(EH.nombreNacion(yo.nacion)) + '</span>' +
              (yo.ciudad ? '<span class="eh-etiqueta">' + EH.escapar(yo.ciudad) + '</span>' : '') +
            '</div>' +
            '<p class="eh-tenue" style="margin:.7rem 0 0">' + EH.escapar(g.que) + '</p>' +
          '</div>' +
          '<div style="text-align:right;min-width:120px">' +
            '<span class="eh-cifra__n" style="font-size:2.2rem">' + EH.numero(yo.honor) + '</span>' +
            '<span class="eh-cifra__u">de honor</span>' +
          '</div>' +
        '</div>' +

        (g.siguiente
          ? '<div style="margin-top:1.2rem">' +
            '<div class="eh-fila eh-fila--entre" style="font-size:.82rem;color:var(--tenue)">' +
              '<span>Siguiente: <b class="eh-oro">' + EH.escapar(g.siguiente) + '</b>' +
              (g.siguienteVia === 'nombramiento' ? ' <span class="eh-etiqueta">lo nombra la Presidencia</span>' : '') +
              '</span>' +
              '<span>faltan ' + EH.numero(g.faltan) + '</span>' +
            '</div>' +
            '<div class="eh-barra"><i style="width:' + Math.max(2, g.progreso) + '%"></i></div>' +
            (g.siguienteExige && g.siguienteExige.length
              ? '<p class="eh-tenue" style="margin:.4rem 0 0">Además: ' +
                EH.escapar(g.siguienteExige.join(' · ')) + '</p>'
              : '') +
            '</div>'
          : '<p class="eh-tenue" style="margin-top:1rem">Estás en lo más alto del escalafón.</p>') +

        recorte +

        '<div class="eh-tarjeta__pie">' +
          '<h4 style="margin-bottom:.5rem">Tu enlace para invitar</h4>' +
          '<div class="eh-fila">' +
            '<input class="eh-entrada" id="ehEnlace" readonly value="' + EH.escapar(enlace) + '" style="flex:1;min-width:200px;font-size:.8rem">' +
            '<button class="eh-boton eh-boton--p" type="button" id="ehCopiar">Copiar</button>' +
          '</div>' +
          '<p class="eh-tenue" style="margin-top:.6rem">' +
            'Quien entre por aquí queda ligado a ti. <b>El honor no es dinero y nunca lo será:</b> ' +
            'no se compra, no se vende, no se transfiere y no da parte de ningún aporte. ' +
            'Si alguien te ofrece dinero o comisión por traer gente en nombre del movimiento, no somos nosotros.' +
          '</p>' +
        '</div>' +

        '<div class="eh-fila" style="margin-top:1rem">' +
          '<a class="eh-boton eh-boton--p" href="misiones.html">Mis misiones</a>' +
          '<a class="eh-boton eh-boton--p" href="chat.html">Chat interno</a>' +
          '<a class="eh-boton eh-boton--p eh-boton--fantasma" href="legal/tus-derechos.html">Mis datos</a>' +
          '<button class="eh-boton eh-boton--p eh-boton--fantasma" type="button" id="ehSalir">Salir</button>' +
        '</div>' +

        '<div id="ehMisAportes" style="margin-top:1.2rem"></div>' +
      '</div>';

    document.getElementById('ehCopiar').addEventListener('click', function () {
      EH.redes.copiar(enlace);
    });
    document.getElementById('ehSalir').addEventListener('click', function () {
      EH.datos.salir().then(function () { location.reload(); });
    });

    /* El historial de aportes es un requisito, no un adorno: cada punto tiene
       que ser explicable y apelable. Sin esto, el honor es una caja negra. */
    EH.datos.aportes(yo.id).then(function (lista) {
      if (!lista.length) return;
      document.getElementById('ehMisAportes').innerHTML =
        '<details><summary style="cursor:pointer;color:var(--oro2);font-size:.85rem;font-weight:600">' +
        'De dónde salió cada punto (' + lista.length + ')</summary>' +
        '<div style="margin-top:.8rem">' + lista.map(function (a) {
          return '<div class="eh-fila eh-fila--entre" style="padding:.4rem 0;border-bottom:1px solid var(--linea);font-size:.84rem">' +
            '<span>' + EH.escapar(EH.reputacion.nombreTipo(a.tipo)) +
            (a.nota ? ' <span class="eh-tenue">· ' + EH.escapar(a.nota) + '</span>' : '') + '</span>' +
            '<span class="eh-oro" style="white-space:nowrap">+' + EH.numero(a.honor) + ' · ' +
            EH.escapar(EH.fecha(a.creado_en)) + '</span></div>';
        }).join('') + '</div></details>';
    });
  }

  /* ------------------------------------------------------------------
     EL MURO
     ------------------------------------------------------------------ */
  function pintarPublicar() {
    var caja = document.getElementById('ehPublicar');
    if (!EH.datos.sesion()) { caja.innerHTML = ''; return; }
    caja.innerHTML =
      '<div class="eh-tarjeta" style="margin-bottom:1.2rem">' +
        '<textarea class="eh-entrada" id="ehTexto" maxlength="900" ' +
          'placeholder="Qué está pasando en tu ciudad, qué necesitas, qué conseguiste."></textarea>' +
        '<div class="eh-fila eh-fila--entre" style="margin-top:.7rem">' +
          '<span class="eh-tenue" id="ehCuenta">0 / 900</span>' +
          '<button class="eh-boton eh-boton--oro eh-boton--p" type="button" id="ehEnviarMuro">Publicar</button>' +
        '</div>' +
      '</div>';

    var t = document.getElementById('ehTexto');
    t.addEventListener('input', function () {
      document.getElementById('ehCuenta').textContent = t.value.length + ' / 900';
    });
    document.getElementById('ehEnviarMuro').addEventListener('click', function () {
      var texto = t.value.trim();
      if (texto.length < 3) { EH.aviso('Escribe algo primero'); return; }
      EH.datos.publicar(texto)
        .then(function () { t.value = ''; document.getElementById('ehCuenta').textContent = '0 / 900'; cargarMuro(); EH.aviso('Publicado'); })
        .catch(function (e) { EH.aviso(e.message); });
    });
  }

  function cargarMuro() {
    var caja = document.getElementById('ehMuro');
    EH.datos.publicaciones().then(function (lista) {
      if (!lista.length) {
        caja.className = '';
        caja.innerHTML = '<div class="eh-tarjeta eh-centro eh-tenue" style="padding:2.5rem 1rem">' +
          'El muro está vacío. La primera publicación de un movimiento la escribe alguien: ' +
          'que sea la tuya.</div>';
        return;
      }
      caja.className = '';
      caja.innerHTML = '<div class="eh-tarjeta">' + lista.map(function (p) {
        var n = EH.nacion(p.autor_nacion);
        return '<article class="eh-mensaje">' +
          '<span class="eh-avatar">' + EH.escapar(EH.iniciales(p.autor)) + '</span>' +
          '<div class="eh-mensaje__cuerpo">' +
            '<div class="eh-mensaje__cabeza">' +
              '<span class="eh-mensaje__quien">' + EH.escapar(p.autor) + '</span>' +
              (n ? '<span class="eh-mensaje__meta eh-fila" style="gap:.3rem;flex-wrap:nowrap">' +
                EH.banderas.svg(n.id, 14) + EH.escapar(n.nombre) + '</span>' : '') +
              '<span class="eh-mensaje__meta">' + EH.escapar(EH.fecha(p.creado_en)) + '</span>' +
            '</div>' +
            '<p class="eh-mensaje__texto">' + EH.escapar(p.texto) + '</p>' +
          '</div>' +
        '</article>';
      }).join('') + '</div>';
    }).catch(function (e) {
      caja.className = '';
      caja.innerHTML = '<div class="eh-aviso eh-aviso--mal"><span class="eh-aviso__icono">!</span><div>' +
        '<strong>No se pudo cargar el muro.</strong> ' + EH.escapar(e.message) + '</div></div>';
    });
  }

  /* ------------------------------------------------------------------
     ESCALAFÓN Y MIEMBROS
     ------------------------------------------------------------------ */
  function pintarRanking() {
    var caja = document.getElementById('ehRanking');
    if (!miembros.length) {
      caja.innerHTML = '<div class="eh-tarjeta eh-centro eh-tenue" style="padding:2rem">' +
        'Todavía no hay nadie en el escalafón.</div>';
      return;
    }
    caja.innerHTML = '<div class="eh-tabla-caja"><table class="eh-tabla">' +
      '<thead><tr><th>#</th><th>Miembro</th><th>Nación</th><th>Grado</th><th>Honor</th></tr></thead><tbody>' +
      miembros.slice(0, 100).map(function (m, i) {
        var n = EH.nacion(m.nacion);
        return '<tr><td class="eh-oro">' + (i + 1) + '</td>' +
          '<td><div class="eh-fila" style="gap:.5rem;flex-wrap:nowrap">' +
            '<span class="eh-avatar eh-avatar--p">' + EH.escapar(EH.iniciales(m.nombre)) + '</span>' +
            '<b>' + EH.escapar(m.nombre) + '</b></div></td>' +
          '<td>' + (n ? '<span class="eh-fila" style="gap:.4rem;flex-wrap:nowrap">' +
            EH.banderas.svg(n.id, 18) + EH.escapar(n.nombre) + '</span>'
            : EH.escapar(m.nacion || '—')) + '</td>' +
          '<td>' + EH.reputacion.insignia(m.honor) + '</td>' +
          '<td class="eh-oro"><b>' + EH.numero(m.honor) + '</b></td></tr>';
      }).join('') + '</tbody></table></div>';
  }

  function pintarMiembros() {
    var texto = document.getElementById('ehBuscar').value.trim().toLowerCase();
    var nacion = document.getElementById('ehFiltroNacion').value;
    var lista = miembros.filter(function (m) {
      if (nacion && m.nacion !== nacion) return false;
      if (!texto) return true;
      return (m.nombre + ' ' + (m.ciudad || '') + ' ' + (m.oficio || '')).toLowerCase().indexOf(texto) >= 0;
    });

    var caja = document.getElementById('ehMiembros');
    if (!lista.length) {
      caja.innerHTML = '<div class="eh-tarjeta eh-centro eh-tenue" style="padding:2rem;grid-column:1/-1">' +
        'Nadie coincide con esa búsqueda.</div>';
      return;
    }
    caja.innerHTML = lista.map(function (m) {
      var n = EH.nacion(m.nacion);
      return '<article class="eh-tarjeta">' +
        '<div class="eh-fila" style="gap:.8rem;flex-wrap:nowrap">' +
          '<span class="eh-avatar">' + EH.escapar(EH.iniciales(m.nombre)) + '</span>' +
          '<div style="min-width:0">' +
            '<b>' + EH.escapar(m.nombre) + '</b><br>' +
            '<span class="eh-tenue">' + EH.escapar((n ? n.bandera + ' ' : '') +
              (m.ciudad || EH.nombreNacion(m.nacion))) + '</span>' +
          '</div>' +
        '</div>' +
        (m.oficio ? '<p class="eh-tarjeta__cuerpo" style="margin-top:.7rem">' + EH.escapar(m.oficio) + '</p>' : '') +
        (m.biografia ? '<p class="eh-tenue" style="margin-top:.4rem">' + EH.escapar(m.biografia) + '</p>' : '') +
        '<div class="eh-tarjeta__pie">' + EH.reputacion.insignia(m.honor) + '</div>' +
        '</article>';
    }).join('');
  }

  function pintarGrados() {
    document.getElementById('ehGrados').innerHTML = EH.reputacion.GRADOS.map(function (g) {
      var exige = (g.exige || []).map(function (e) {
        return '<li>' + EH.escapar(e) + '</li>';
      }).join('');
      return '<article class="eh-tarjeta" style="margin-bottom:.8rem">' +
        '<div class="eh-fila eh-fila--entre" style="align-items:baseline">' +
          '<div class="eh-fila" style="gap:.8rem;align-items:baseline">' +
            '<span class="eh-numeral" style="font-size:1.6rem">' + g.n + '</span>' +
            '<h3 class="eh-tarjeta__titulo" style="margin:0">' + EH.escapar(g.nombre) + '</h3>' +
          '</div>' +
          /* Las tres vías se dicen con su nombre. Llamar "automático" a un
             nivel que en realidad espera a que alguien lo verifique deja al
             militante bloqueado sin saber por qué ni a quién reclamar, y eso
             es exactamente cómo se pierde a la gente que más trabaja. */
          '<span class="eh-etiqueta' +
            (g.via === 'automatico' ? ' eh-etiqueta--verde'
              : g.via === 'verificado' ? ' eh-etiqueta--territorio' : '') + '">' +
            (g.via === 'automatico' ? 'Se gana solo'
              : g.via === 'verificado' ? 'Se gana solo, pero el equipo lo verifica'
              : 'Lo nombra la dirección') + '</span>' +
        '</div>' +
        '<p class="eh-tarjeta__cuerpo" style="margin-top:.6rem">' + EH.escapar(g.que) + '</p>' +
        '<div class="eh-tarjeta__pie">' +
          '<b class="eh-oro">' + EH.numero(g.desde) + ' de honor</b>' +
          (exige ? '<ul class="eh-nacion__orgullo" style="margin-top:.6rem">' + exige + '</ul>' : '') +
        '</div>' +
        '</article>';
    }).join('');

    document.getElementById('ehReglasHonor').innerHTML =
      '<div class="eh-tarjeta eh-tarjeta--oro">' +
      '<h3 class="eh-tarjeta__titulo">Las reglas del honor</h3>' +
      '<ul class="eh-nacion__orgullo">' +
        '<li><b>Entrar es gratis y siempre lo será.</b> No hay ningún nivel de pago.</li>' +
        '<li><b>El dinero no da honor.</b> Ni proporcional ni fijo: cero. Quien aporta figura en el informe de transparencia, no en el escalafón.</li>' +
        '<li><b>El honor no es dinero.</b> No se compra, no se vende, no se transfiere y no se cambia por nada.</li>' +
        '<li><b>Profundidad uno.</b> Ganas honor por quien invitas tú, jamás por quien invitaron ellos. Aquí no hay niveles ni red debajo de nadie.</li>' +
        '<li><b>El honor de invitar tiene techo:</b> como mucho la cuarta parte de tu total, y cada invitación vale menos que la anterior.</li>' +
        '<li><b>Se pierde.</b> Si el invitado se va o resulta ser una cuenta falsa, esos puntos se revierten.</li>' +
        '<li><b>Cada punto es explicable y apelable.</b> Tienes el historial completo en tu ficha.</li>' +
      '</ul></div>';
  }

  /* ------------------------------------------------------------------ */
  EH.pagina = function () {
    document.getElementById('ehAvisoModo').innerHTML = EH.avisoModo();
    pintarYo();
    pintarPublicar();
    cargarMuro();
    pintarGrados();

    document.getElementById('ehFiltroNacion').innerHTML =
      '<option value="">Todas las naciones</option>' +
      EH.NACIONES_ORDENADAS.map(function (n) {
        return '<option value="' + EH.escapar(n.id) + '">' + EH.escapar(n.bandera + ' ' + n.nombre) + '</option>';
      }).join('');

    EH.datos.miembros({ soloPublicos: true }).then(function (lista) {
      miembros = lista;
      pintarRanking();
      pintarMiembros();
    });

    document.getElementById('ehBuscar').addEventListener('input', pintarMiembros);
    document.getElementById('ehFiltroNacion').addEventListener('change', pintarMiembros);

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
