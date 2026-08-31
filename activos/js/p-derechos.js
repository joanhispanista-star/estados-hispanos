/* =========================================================================
   TUS DERECHOS — ver, exportar y borrar
   =========================================================================
   ESTA PÁGINA TIENE QUE FUNCIONAR DE VERDAD DESDE EL PRIMER DÍA.
   Una página de derechos que no responde no es un incumplimiento menor: es
   la prueba de la infracción, servida en bandeja a quien reclame.

   Por eso aquí no hay formularios de contacto ni promesas de responder en
   quince días. Hay tres botones que hacen las tres cosas al instante:
   enseñar todo lo que hay sobre ti, descargarlo, y borrarlo.

   POR QUÉ EL BORRADO PIDE ESCRIBIR UNA PALABRA
   Porque es irreversible y no hay papelera. Un clic distraído no puede
   costarle a alguien su historial entero.
   ========================================================================= */
(function () {
  'use strict';

  var NOMBRES = {
    afiliacion_politica: 'Afiliación política (dato sensible)',
    transferencia_internacional: 'Transferencia internacional de datos',
    mayoria_edad: 'Declaración de mayoría de edad',
    comunicaciones: 'Comunicaciones (opcional)'
  };

  function bloque(titulo, n, detalle) {
    return '<div class="eh-tarjeta" style="margin-bottom:.7rem">' +
      '<div class="eh-fila eh-fila--entre" style="align-items:baseline">' +
        '<h4 style="margin:0">' + EH.escapar(titulo) + '</h4>' +
        '<b class="eh-oro">' + n + '</b>' +
      '</div>' +
      (detalle ? '<div style="margin-top:.6rem;font-size:.84rem;color:var(--suave)">' + detalle + '</div>' : '') +
      '</div>';
  }

  EH.pagina = function () {
    var caja = document.getElementById('ehContenido');
    var yo = EH.datos.sesion();

    var cabecera =
      '<p class="eh-rotulo">Habeas data</p>' +
      '<h1 style="font-size:clamp(1.7rem,4.4vw,2.6rem)">Tus datos son tuyos</h1>' +
      '<p class="eh-plomo">Aquí puedes ver todo lo que este movimiento tiene sobre ti, ' +
      'descargarlo y borrarlo. Sin escribirle a nadie, sin dar explicaciones y sin esperar ' +
      'quince días.</p>';

    if (!yo) {
      caja.innerHTML = cabecera +
        '<div class="eh-tarjeta eh-centro" style="margin-top:1.5rem">' +
        '<p class="eh-tarjeta__cuerpo">Para ver tus datos hay que entrar con tu correo.</p>' +
        '<a class="eh-boton eh-boton--oro" href="../inscripcion.html" style="margin-top:1rem">Entrar</a>' +
        '</div>' +
        '<div class="eh-aviso eh-aviso--info" style="margin-top:1.5rem"><span class="eh-aviso__icono">◆</span>' +
        '<div>Si no recuerdas con qué correo te inscribiste, o si quieres ejercer tus derechos ' +
        'por otra vía, escribe a <b>' + EH.escapar(EH.CONFIG.correo || '[correo pendiente]') +
        '</b>. Tenemos 10 días hábiles para responder consultas y 15 para reclamos.</div></div>';
      return;
    }

    caja.innerHTML = cabecera + '<div id="ehDatos" class="eh-cargando">Reuniendo todo…</div>';

    EH.datos.misDatos().then(function (d) {
      var cons = (d.consentimientos || []).map(function (c) {
        return '<div class="eh-fila eh-fila--entre" style="padding:.35rem 0;border-bottom:1px solid var(--linea)">' +
          '<span>' + EH.escapar(NOMBRES[c.tipo] || c.tipo) + '</span>' +
          '<span class="' + (c.otorgado ? 'eh-oro' : '') + '">' +
            (c.otorgado ? 'Autorizado' : 'Denegado') + ' · v' + EH.escapar(c.version_texto) +
            ' · ' + EH.escapar(EH.fecha(c.creado_en)) + '</span></div>';
      }).join('');

      var m = d.miembro || {};
      var perfil = Object.keys(m).filter(function (k) {
        return m[k] !== null && m[k] !== '' && k !== 'id';
      }).map(function (k) {
        var v = Array.isArray(m[k]) ? m[k].join(', ') : m[k];
        return '<div class="eh-fila eh-fila--entre" style="padding:.3rem 0;border-bottom:1px solid var(--linea)">' +
          '<span class="eh-tenue">' + EH.escapar(k) + '</span>' +
          '<span>' + EH.escapar(String(v)) + '</span></div>';
      }).join('');

      document.getElementById('ehDatos').className = '';
      document.getElementById('ehDatos').innerHTML =
        '<h2 style="font-size:1.2rem;margin-top:2rem">Todo lo que hay sobre ti</h2>' +
        bloque('Tu ficha', Object.keys(m).length + ' campos', perfil) +
        bloque('Autorizaciones que diste', (d.consentimientos || []).length, cons) +
        bloque('Aportes a la Hispanidad', (d.aportes || []).length) +
        bloque('Publicaciones en el muro', (d.publicaciones || []).length) +
        bloque('Mensajes en el chat', (d.mensajes || []).length) +
        bloque('Aportes económicos anunciados', (d.donaciones || []).length) +

        '<div class="eh-fila" style="margin-top:1.5rem">' +
          '<button class="eh-boton eh-boton--oro" type="button" id="ehBajar">Descargar todo en un archivo</button>' +
        '</div>' +

        '<div class="eh-tarjeta" style="margin-top:2rem;border-color:rgba(209,33,60,.42)">' +
          '<h3 class="eh-tarjeta__titulo" style="color:#f07a8e">Retirarme y borrar mis datos</h3>' +
          '<p class="eh-tarjeta__cuerpo">Esto borra tu ficha, tu contacto, tus publicaciones, tus ' +
          'mensajes y tus aportes. No hay papelera y no se puede deshacer. De tu adhesión al ' +
          'movimiento solo quedará un número, sin tu nombre.</p>' +
          '<p class="eh-tarjeta__cuerpo" style="margin-top:.7rem">Para confirmar, escribe ' +
          '<b class="eh-oro">BORRAR</b> aquí abajo.</p>' +
          '<div class="eh-fila" style="margin-top:.8rem">' +
            '<input class="eh-entrada" id="ehConfirma" placeholder="BORRAR" style="max-width:170px">' +
            '<button class="eh-boton eh-boton--rojo" type="button" id="ehBorrar">Borrar todo</button>' +
          '</div>' +
        '</div>';

      document.getElementById('ehBajar').addEventListener('click', function () {
        var b = new Blob([JSON.stringify(d, null, 1)], { type: 'application/json;charset=utf-8' });
        var a = document.createElement('a');
        a.href = URL.createObjectURL(b);
        a.download = 'mis-datos-estados-hispanos.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        setTimeout(function () { URL.revokeObjectURL(a.href); }, 1000);
        EH.aviso('Descargado');
      });

      document.getElementById('ehBorrar').addEventListener('click', function () {
        if (document.getElementById('ehConfirma').value.trim().toUpperCase() !== 'BORRAR') {
          EH.aviso('Escribe BORRAR para confirmar');
          return;
        }
        EH.datos.borrarMisDatos()
          .then(function () {
            alert('Listo. Tus datos se borraron. Gracias por haber estado.');
            location.href = '../index.html';
          })
          .catch(function (e) { EH.aviso(e.message); });
      });
    }).catch(function (e) {
      document.getElementById('ehDatos').className = '';
      document.getElementById('ehDatos').innerHTML =
        '<div class="eh-aviso eh-aviso--mal"><span class="eh-aviso__icono">!</span><div>' +
        '<strong>No se pudieron reunir tus datos.</strong> ' + EH.escapar(e.message) +
        ' Escribe a <b>' + EH.escapar(EH.CONFIG.correo || '[correo pendiente]') +
        '</b> y lo resolvemos a mano.</div></div>';
    });
  };
})();
