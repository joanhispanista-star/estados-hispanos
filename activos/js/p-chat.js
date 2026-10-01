/* =========================================================================
   CHAT INTERNO
   =========================================================================
   POR QUÉ SE CONSULTA CADA POCOS SEGUNDOS Y NO HAY SOCKET
   Realtime de Supabase exige su SDK, y el SDK exige traerlo de un CDN. Eso
   rompería la promesa de que la plataforma abre sin internet y metería una
   dependencia de un tercero en un sitio de afiliación política. El sondeo es
   peor técnicamente y mejor para este proyecto. Cuando haya volumen que lo
   justifique, se cambia aquí dentro y ninguna pantalla se entera.

   POR QUÉ SE SONDEA SOLO SI LA PESTAÑA ESTÁ VISIBLE
   Un sondeo cada cuatro segundos en veinte pestañas olvidadas es tráfico
   pagado a cambio de nada.

   POR QUÉ LA SALA DEL CÍRCULO SE CIERRA POR GRADO Y NO POR INVITACIÓN
   Porque una sala cerrada por invitación se convierte en la sala de los
   amigos del fundador en tres semanas. Cerrada por grado, la puerta la abre
   cualquiera que haga el trabajo.
   ========================================================================= */
(function () {
  'use strict';

  var salaActual = null;
  var ultimo = null;
  var reloj = null;
  var GRADO_CIRCULO = 3;

  function salas() {
    var yo = EH.datos.sesion();
    var lista = [{ k: 'global', n: 'Plaza Mayor', d: 'Todas las naciones' }];

    var g = EH.reputacion.grado(yo.honor);
    lista.push({
      k: 'circulo', n: 'Círculo de Emprendedores',
      d: g.nivel >= GRADO_CIRCULO ? 'Negocios' : 'Se abre en Portavoz',
      cerrada: g.nivel < GRADO_CIRCULO
    });

    // La sala de la nación propia va primero entre las nacionales: es donde
    // de verdad se organiza algo, y enterrarla en una lista de veinticuatro
    // haría que nadie la encontrara.
    EH.NACIONES_ORDENADAS.forEach(function (n) {
      lista.push({
        k: 'nacion:' + n.id,
        n: n.nombre,
        id: n.id,
        d: n.id === yo.nacion ? 'Tu nación' : '',
        propia: n.id === yo.nacion
      });
    });

    lista.sort(function (a, b) {
      if (a.k === 'global') return -1;
      if (b.k === 'global') return 1;
      if (a.propia && !b.propia) return -1;
      if (b.propia && !a.propia) return 1;
      return 0;
    });
    return lista;
  }

  function nombreSala(k) {
    if (k === 'global') return 'Plaza Mayor';
    if (k === 'circulo') return 'Círculo de Emprendedores';
    var n = EH.nacion(String(k).replace('nacion:', ''));
    return n ? n.nombre : k;
  }

  function pintarMensajes(lista, anadir) {
    var flujo = document.getElementById('ehFlujo');
    if (!flujo) return;

    if (!anadir && !lista.length) {
      flujo.innerHTML = '<p class="eh-tenue eh-centro" style="padding:2rem 1rem">' +
        'Esta sala está vacía. Escribe lo primero.</p>';
      return;
    }
    if (!anadir) flujo.innerHTML = '';
    else if (!lista.length) return;

    var vacia = flujo.querySelector('.eh-tenue');
    if (vacia && lista.length) flujo.innerHTML = '';

    // ¿Estaba abajo del todo antes de añadir? Si el usuario se había subido a
    // leer algo, saltarle el scroll es la forma más rápida de que cierre.
    var abajo = flujo.scrollHeight - flujo.scrollTop - flujo.clientHeight < 60;

    flujo.insertAdjacentHTML('beforeend', lista.map(function (m) {
      return '<article class="eh-mensaje">' +
        '<span class="eh-avatar eh-avatar--p">' + EH.escapar(EH.iniciales(m.autor)) + '</span>' +
        '<div class="eh-mensaje__cuerpo">' +
          '<div class="eh-mensaje__cabeza">' +
            '<span class="eh-mensaje__quien">' + EH.escapar(m.autor) + '</span>' +
            '<span class="eh-mensaje__meta">' + EH.escapar(EH.fecha(m.creado_en)) + '</span>' +
          '</div>' +
          '<p class="eh-mensaje__texto">' + EH.escapar(m.texto) + '</p>' +
        '</div></article>';
    }).join(''));

    if (abajo || !anadir) flujo.scrollTop = flujo.scrollHeight;
    if (lista.length) ultimo = lista[lista.length - 1].creado_en;
  }

  function abrir(k) {
    salaActual = k;
    ultimo = null;

    document.querySelectorAll('.eh-chat__sala').forEach(function (b) {
      b.classList.toggle('on', b.getAttribute('data-k') === k);
    });
    document.getElementById('ehTituloSala').textContent = nombreSala(k);

    var flujo = document.getElementById('ehFlujo');
    flujo.innerHTML = '<div class="eh-cargando">Cargando…</div>';

    EH.datos.mensajes(k).then(function (lista) { pintarMensajes(lista, false); })
      .catch(function (e) {
        flujo.innerHTML = '<div class="eh-aviso eh-aviso--mal"><span class="eh-aviso__icono">!</span>' +
          '<div><strong>No se pudo abrir la sala.</strong> ' + EH.escapar(e.message) + '</div></div>';
      });

    if (history.replaceState) history.replaceState(null, '', '?sala=' + encodeURIComponent(k));
  }

  function sondear() {
    if (!salaActual || document.hidden) return;
    EH.datos.mensajes(salaActual, ultimo)
      .then(function (lista) { pintarMensajes(lista, true); })
      .catch(function () { /* un fallo de red no debe llenar la sala de errores */ });
  }

  EH.pagina = function () {
    document.getElementById('ehAvisoModo').innerHTML = EH.avisoModo();
    var yo = EH.datos.sesion();
    var caja = document.getElementById('ehContenido');

    if (!yo) {
      caja.innerHTML = '<div class="eh-tarjeta eh-tarjeta--oro eh-centro" style="margin-top:1.5rem">' +
        '<h2 style="margin-bottom:.4rem">El chat es para miembros</h2>' +
        '<p class="eh-tarjeta__cuerpo" style="max-width:44ch;margin:0 auto 1.2rem">' +
        'Todo lo demás del sitio se lee sin inscribirse. Aquí no, porque es donde la gente ' +
        'habla de lo suyo y se organiza.</p>' +
        '<a class="eh-boton eh-boton--oro" href="inscripcion.html">Inscribirme</a></div>';
      return;
    }

    var lista = salas();

    caja.innerHTML =
      '<div class="eh-chat" style="margin-top:1.5rem">' +
        '<div class="eh-chat__salas">' + lista.map(function (s) {
          return '<button class="eh-chat__sala" type="button" data-k="' + EH.escapar(s.k) + '"' +
            (s.cerrada ? ' disabled style="opacity:.45;cursor:not-allowed"' : '') + '>' +
            // La bandera dibujada, no el emoji: en Windows el emoji sale como
            // las dos letras del país y la lista de salas parece un error.
            (s.id ? EH.banderas.svg(s.id, 18) : '') +
            '<span style="flex:1;min-width:0">' + EH.escapar(s.n) +
            (s.d ? '<br><span class="eh-tenue" style="font-size:.72rem">' + EH.escapar(s.d) + '</span>' : '') +
            '</span></button>';
        }).join('') + '</div>' +

        '<div class="eh-chat__panel">' +
          '<div class="eh-chat__cabeza"><b id="ehTituloSala">Plaza Mayor</b></div>' +
          '<div class="eh-chat__flujo" id="ehFlujo"></div>' +
          '<div class="eh-chat__pie">' +
            '<textarea class="eh-entrada" id="ehEscribir" maxlength="700" rows="1" ' +
              'placeholder="Escribe un mensaje…"></textarea>' +
            '<button class="eh-boton eh-boton--oro" type="button" id="ehMandar">Enviar</button>' +
          '</div>' +
        '</div>' +
      '</div>';

    document.querySelectorAll('.eh-chat__sala').forEach(function (b) {
      if (b.disabled) return;
      b.addEventListener('click', function () { abrir(b.getAttribute('data-k')); });
    });

    function mandar() {
      var t = document.getElementById('ehEscribir');
      var texto = t.value.trim();
      if (!texto) return;
      t.value = '';
      EH.datos.enviar(salaActual, texto)
        .then(function () { return EH.datos.mensajes(salaActual, ultimo); })
        .then(function (l) { pintarMensajes(l, true); })
        .catch(function (e) { EH.aviso(e.message); t.value = texto; });
    }

    document.getElementById('ehMandar').addEventListener('click', mandar);
    document.getElementById('ehEscribir').addEventListener('keydown', function (e) {
      // Enter envía, Mayúsculas+Enter hace salto de línea: es lo que la gente
      // ya tiene en los dedos de WhatsApp y de Telegram.
      if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); mandar(); }
    });

    var pedida = new URLSearchParams(location.search).get('sala');
    var valida = lista.filter(function (s) { return s.k === pedida && !s.cerrada; })[0];
    abrir(valida ? pedida : 'global');

    reloj = setInterval(sondear, 4000);
    document.addEventListener('visibilitychange', function () { if (!document.hidden) sondear(); });
    window.addEventListener('beforeunload', function () { clearInterval(reloj); });
  };
})();
