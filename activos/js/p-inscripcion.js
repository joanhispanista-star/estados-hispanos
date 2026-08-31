/* =========================================================================
   INSCRIPCIÓN
   =========================================================================
   POR QUÉ LA VALIDACIÓN ES A MANO Y NO SOLO CON required
   Porque el navegador enseña sus propios mensajes en el idioma del sistema y
   con su propio estilo. En un formulario de afiliación política, un cartel
   gris del navegador diciendo "Please fill out this field" rompe la confianza
   que todo lo demás intenta construir.
   ========================================================================= */
(function () {
  'use strict';

  /* Lo que alguien puede aportar. Es la pregunta más útil del formulario: un
     movimiento sirve de algo cuando sabe qué sabe hacer su gente. */
  var AYUDAS = [
    { k: 'difundir', n: 'Difundir en redes' },
    { k: 'organizar', n: 'Organizar en mi ciudad' },
    { k: 'firmas', n: 'Recoger apoyos' },
    { k: 'juridico', n: 'Derecho' },
    { k: 'diseno', n: 'Diseño y video' },
    { k: 'texto', n: 'Escribir' },
    { k: 'tecnologia', n: 'Tecnología' },
    { k: 'traducir', n: 'Traducir' },
    { k: 'empresa', n: 'Empresa y negocios' },
    { k: 'academia', n: 'Academia' },
    { k: 'contactos', n: 'Contactos y prensa' },
    { k: 'lugar', n: 'Prestar un lugar' }
  ];

  function ver(id, mostrar) {
    document.getElementById(id).classList.toggle('on', !!mostrar);
  }

  EH.pagina = function () {
    var C = EH.CONFIG;
    var enNube = EH.datos.enNube();

    /* --- si ya hay sesión, no tiene sentido este formulario --- */
    var yo = EH.datos.sesion();
    if (yo) {
      location.replace('comunidad.html#yo');
      return;
    }

    document.getElementById('ehAvisoModo').innerHTML = EH.avisoModo();

    /* --- quién te invitó ---
       Se lee del enlace ?r= que guardó el cascarón. Reconocerlo en pantalla
       hace dos cosas: le da valor al que invita y le dice al que llega que
       alguien concreto lo trajo, que convierte mucho mejor que llegar solo. */
    var invita = null;
    try { invita = localStorage.getItem('eh_reclutador'); } catch (e) { }
    if (invita) {
      EH.datos.miembros().then(function (todos) {
        var r = todos.filter(function (m) { return m.id === invita; })[0];
        if (!r) return;
        document.getElementById('ehQuienInvita').innerHTML =
          '<div class="eh-aviso eh-aviso--bien"><span class="eh-aviso__icono">◆</span><div>' +
          '<strong>' + EH.escapar(r.nombre) + '</strong> te invitó a Los Estados Hispanos. ' +
          'Cuando te inscribas, se le reconocerá el aporte.</div></div>';
      });
    }

    /* --- naciones --- */
    document.getElementById('fNacion').innerHTML =
      '<option value="">Elige tu nación…</option>' +
      EH.NACIONES_ORDENADAS.map(function (n) {
        var matiz = n.estatus === 'soberano' ? '' :
          n.estatus === 'diaspora' ? ' (diáspora)' :
          n.estatus === 'herencia' ? ' (herencia hispana)' :
          n.estatus === 'territorio' ? ' (territorio)' : ' (territorio en disputa)';
        return '<option value="' + EH.escapar(n.id) + '">' +
          EH.escapar(n.bandera + ' ' + n.nombre + matiz) + '</option>';
      }).join('');

    /* --- en qué puede ayudar --- */
    document.getElementById('ehAporta').innerHTML = AYUDAS.map(function (a) {
      return '<label class="eh-casilla" style="padding:.55rem .7rem;margin:0">' +
        '<input type="checkbox" name="aporta" value="' + a.k + '">' +
        '<span style="font-size:.83rem">' + EH.escapar(a.n) + '</span></label>';
    }).join('');

    /* --- contraseña: solo tiene sentido si hay servidor ---
       En modo local no se pide, porque no se podría comprobar. Pedir una
       contraseña que no protege nada sería mentirle al usuario. */
    if (enNube) {
      document.getElementById('ehCampoClave').classList.remove('eh-oculto');
      document.getElementById('fEntrarClave').classList.remove('eh-oculto');
    }

    /* --- quién responde por los datos ---
       Mientras no exista la asociación, el responsable es el fundador en
       persona. Es la verdad jurídica y hay que escribirla, no esconderla. */
    document.getElementById('ehResponsable').innerHTML = C.razonSocial
      ? 'Responsable del tratamiento: ' + EH.escapar(C.razonSocial) +
        (C.nit ? ', NIT ' + EH.escapar(C.nit) : '') + '.'
      : 'Responsable del tratamiento: <b>' + EH.escapar(C.fundador.nombre) + '</b>, en persona, ' +
        'mientras la asociación del movimiento no esté constituida. ' +
        (C.correo ? 'Correo de datos: ' + EH.escapar(C.correo) + '.' : '');

    /* --- envío --- */
    var forma = document.getElementById('ehForma');
    forma.addEventListener('submit', function (e) {
      e.preventDefault();

      var v = {
        nombre: document.getElementById('fNombre').value.trim(),
        correo: document.getElementById('fCorreo').value.trim(),
        clave: document.getElementById('fClave').value,
        nacion: document.getElementById('fNacion').value,
        ciudad: document.getElementById('fCiudad').value.trim(),
        oficio: document.getElementById('fOficio').value.trim(),
        biografia: document.getElementById('fBio').value.trim(),
        aporta: Array.prototype.slice.call(forma.querySelectorAll('[name=aporta]:checked'))
          .map(function (c) { return c.value; }),
        publico: document.getElementById('cPublico').checked,
        consPolitico: document.getElementById('cPolitico').checked,
        consTransferencia: document.getElementById('cTransferencia').checked,
        consEdad: document.getElementById('cEdad').checked,
        consComunicaciones: document.getElementById('cComunicaciones').checked
      };

      var mal = false;
      ver('eNombre', !v.nombre); mal = mal || !v.nombre;
      var correoOk = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.correo);
      ver('eCorreo', !correoOk); mal = mal || !correoOk;
      ver('eNacion', !v.nacion); mal = mal || !v.nacion;
      if (enNube) {
        var claveOk = v.clave.length >= 8;
        ver('eClave', !claveOk); mal = mal || !claveOk;
      }
      var consOk = v.consPolitico && v.consTransferencia && v.consEdad;
      ver('eConsent', !consOk); mal = mal || !consOk;

      if (mal) {
        var primero = forma.querySelector('.eh-error.on');
        if (primero) primero.scrollIntoView({ block: 'center', behavior: 'smooth' });
        return;
      }

      var boton = document.getElementById('ehEnviar');
      boton.disabled = true;
      boton.textContent = 'Inscribiendo…';

      EH.datos.inscribir(v)
        .then(function () {
          // Se va directo a las misiones, no a una pantalla de "gracias".
          // El minuto siguiente a inscribirse es donde se pierde a la gente:
          // si no hay nada que hacer, no vuelve.
          location.href = 'misiones.html?bienvenida=1';
        })
        .catch(function (err) {
          boton.disabled = false;
          boton.textContent = 'Crear mi cuenta';
          EH.aviso(err.message);
        });
    });

    /* --- entrar --- */
    document.getElementById('ehFormaEntrar').addEventListener('submit', function (e) {
      e.preventDefault();
      var correo = document.getElementById('fEntrarCorreo').value.trim();
      var clave = document.getElementById('fEntrarClave').value;
      if (!correo) { EH.aviso('Escribe tu correo'); return; }
      EH.datos.entrar(correo, clave)
        .then(function () { location.href = 'comunidad.html#yo'; })
        .catch(function (err) { EH.aviso(err.message); });
    });
  };
})();
