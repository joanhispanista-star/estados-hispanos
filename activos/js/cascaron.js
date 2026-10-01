/* =========================================================================
   EL CASCARÓN — barra, pie, aviso flotante y utilidades comunes
   =========================================================================
   POR QUÉ LA BARRA Y EL PIE SE INYECTAN POR JAVASCRIPT
   Son doce páginas. Escritos a mano, el día que se añada una sección se
   olvidará en cuatro de ellas y nadie lo notará hasta que un visitante se
   quede sin poder llegar. Aquí se escriben una vez.

   CADA PÁGINA DECLARA DÓNDE ESTÁ:
     <body data-pagina="inicio" data-base="">
     <body data-pagina="legal"  data-base="../">
   El data-base es lo que permite que las páginas dentro de legal/ encuentren
   los mismos archivos sin rutas absolutas, que romperían al publicar el sitio
   en un subdirectorio.
   ========================================================================= */

window.EH = window.EH || {};

(function () {
  'use strict';

  var cuerpo = document.body;
  var BASE = cuerpo.getAttribute('data-base') || '';
  var PAGINA = cuerpo.getAttribute('data-pagina') || '';

  EH.BASE = BASE;

  /* ---------------------------------------------------------------------
     UTILIDADES
     --------------------------------------------------------------------- */

  /* Escapa texto antes de meterlo en el HTML.
     NO es opcional: los miembros publican texto libre en el muro y en el
     chat. Sin esto, el primero que escriba una etiqueta de script se lleva
     la sesión de todos los que lean su mensaje. */
  EH.escapar = function (t) {
    return String(t === null || t === undefined ? '' : t)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  };

  EH.fecha = function (iso) {
    if (!iso) return '';
    var d = new Date(iso);
    if (isNaN(d)) return '';
    var seg = Math.floor((Date.now() - d.getTime()) / 1000);
    if (seg < 60) return 'ahora mismo';
    if (seg < 3600) return 'hace ' + Math.floor(seg / 60) + ' min';
    if (seg < 86400) return 'hace ' + Math.floor(seg / 3600) + ' h';
    if (seg < 604800) return 'hace ' + Math.floor(seg / 86400) + ' d';
    return d.toLocaleDateString('es', { day: 'numeric', month: 'short', year: 'numeric' });
  };

  EH.numero = function (n) {
    return (Number(n) || 0).toLocaleString('es');
  };

  /* Cifras grandes en lenguaje humano: 1.850.000 millones de dólares no se
     entiende; 1,85 billones sí. Se usa la escala larga, que es la del
     español: un billón es un millón de millones. */
  EH.magnitud = function (millones) {
    var n = Number(millones) || 0;
    if (n >= 1000000) return (n / 1000000).toFixed(n / 1000000 >= 10 ? 1 : 2).replace('.', ',') + ' billones';
    if (n >= 1000) return (n / 1000).toFixed(n / 1000 >= 100 ? 0 : 1).replace('.', ',') + ' mil millones';
    return EH.numero(n) + ' millones';
  };

  EH.poblacion = function (n) {
    n = Number(n) || 0;
    if (n >= 1000000) return (n / 1000000).toFixed(n / 1000000 >= 100 ? 0 : 1).replace('.', ',') + ' M';
    if (n >= 1000) return Math.round(n / 1000) + ' mil';
    return EH.numero(n);
  };

  EH.iniciales = function (nombre) {
    var p = String(nombre || '?').trim().split(/\s+/);
    return ((p[0] || '?')[0] + (p.length > 1 ? p[p.length - 1][0] : '')).toUpperCase();
  };

  var temporizadorAviso;
  EH.aviso = function (texto) {
    var t = document.getElementById('ehToast');
    if (!t) {
      t = document.createElement('div');
      t.id = 'ehToast';
      t.className = 'eh-toast';
      t.setAttribute('role', 'status');
      document.body.appendChild(t);
    }
    t.textContent = texto;
    t.classList.add('on');
    clearTimeout(temporizadorAviso);
    temporizadorAviso = setTimeout(function () { t.classList.remove('on'); }, 2800);
  };

  /* ---------------------------------------------------------------------
     EL ENLACE DE RECLUTAMIENTO
     Cada miembro tiene un enlace con ?r=su-id. Quien entre por ahí queda
     ligado a él y le da honor al inscribirse.

     POR QUÉ SE GUARDA Y NO SE LEE SOLO AL FINAL: casi nadie se inscribe en la
     primera visita. Lee el manifiesto, se va, vuelve dos días después por
     otra vía. Si el reclutador solo se leyera de la URL en el momento de
     inscribirse, se perdería el mérito en la mayoría de los casos reales.
     --------------------------------------------------------------------- */
  (function capturarReclutador() {
    try {
      var r = new URLSearchParams(location.search).get('r');
      if (r) localStorage.setItem('eh_reclutador', r);
    } catch (e) { /* sin localStorage el reclutamiento no se atribuye, y ya */ }
  })();

  EH.enlaceReclutamiento = function (idMiembro) {
    var raiz = location.href.split('?')[0].split('#')[0]
      .replace(/[^/]*$/, '')                 // quita el nombre del archivo
      .replace(/legal\/$/, '');              // y sube desde las páginas legales
    return raiz + 'inscripcion.html?r=' + encodeURIComponent(idMiembro);
  };

  /* ---------------------------------------------------------------------
     BARRA DE NAVEGACIÓN
     --------------------------------------------------------------------- */
  /* Las etiquetas son cortas a propósito. Con «El Gran Plan» y «Sala de
     Honor» enteros, la fila de enlaces pedía 799 px y solo había 780: la
     barra se desbordaba en cualquier portátil de 1024 px antes incluso de
     añadir Redes. Los títulos largos viven dentro de cada página. */
  var SECCIONES = [
    { k: 'naciones',   t: 'Naciones',    h: 'naciones.html' },
    { k: 'manifiesto', t: 'Manifiesto',  h: 'manifiesto.html' },
    { k: 'plan',       t: 'El Plan',     h: 'plan.html' },
    { k: 'sala',       t: 'Sala',        h: 'sala.html' },
    { k: 'partidos',   t: 'Partidos',    h: 'partidos.html' },
    { k: 'circulo',    t: 'Círculo',     h: 'circulo.html' },
    { k: 'comunidad',  t: 'Comunidad',   h: 'comunidad.html' },
    { k: 'redes',      t: 'Redes',       h: 'redes.html' },
    { k: 'aportar',    t: 'Aportar',     h: 'aportar.html' }
  ];

  function pintarBarra() {
    var yo = EH.datos.sesion();
    var enlaces = SECCIONES.map(function (s) {
      return '<a href="' + BASE + s.h + '"' + (PAGINA === s.k ? ' class="on"' : '') + '>' + s.t + '</a>';
    });

    if (yo) {
      // Misiones va lo primero para quien ya entró: es lo único de la barra
      // que le dice qué hacer HOY, y es donde se retiene a la gente.
      enlaces.push('<a href="' + BASE + 'misiones.html"' + (PAGINA === 'misiones' ? ' class="on"' : '') + '>Misiones</a>');
      enlaces.push('<a href="' + BASE + 'chat.html"' + (PAGINA === 'chat' ? ' class="on"' : '') + '>Chat</a>');
      if (yo.rol === 'fundador' || yo.rol === 'equipo') {
        enlaces.push('<a href="' + BASE + 'panel.html"' + (PAGINA === 'panel' ? ' class="on"' : '') + '>Panel</a>');
      }
      enlaces.push('<a href="' + BASE + 'comunidad.html#yo" class="eh-nav__yo">' +
        '<span class="eh-avatar eh-avatar--p">' + EH.escapar(EH.iniciales(yo.nombre)) + '</span></a>');
    } else {
      enlaces.push('<a href="' + BASE + 'inscripcion.html" class="eh-boton eh-boton--oro eh-boton--p">Inscribirme</a>');
    }

    var barra = document.createElement('header');
    barra.className = 'eh-nav';
    barra.innerHTML =
      '<div class="eh-limite eh-nav__caja">' +
        '<a class="eh-nav__marca" href="' + BASE + 'index.html">' +
          EH.sello.mini() +
          // El subtítulo era PLVS VLTRA. Se cambió por el lema propio del
          // movimiento: una divisa en latín bajo un emblema circular acerca
          // demasiado la marca a la heráldica de un Estado, y esa confusión
          // es justo la que no interesa alimentar.
          '<span class="eh-nav__nombre">Los Estados Hispanos<small>MOVIMIENTO</small></span>' +
        '</a>' +
        '<button class="eh-nav__hamburguesa" type="button" aria-label="Abrir el menú" aria-expanded="false">☰</button>' +
        '<nav class="eh-nav__enlaces" id="ehEnlaces">' + enlaces.join('') + '</nav>' +
      '</div>';

    document.body.insertBefore(barra, document.body.firstChild);

    var boton = barra.querySelector('.eh-nav__hamburguesa');
    var menu = barra.querySelector('#ehEnlaces');
    boton.addEventListener('click', function () {
      var abierto = menu.classList.toggle('abierto');
      boton.setAttribute('aria-expanded', String(abierto));
    });
  }

  /* ---------------------------------------------------------------------
     PIE
     --------------------------------------------------------------------- */
  function pintarPie() {
    var C = EH.CONFIG;
    var anio = new Date().getFullYear();

    var pie = document.createElement('footer');
    pie.className = 'eh-pie';
    pie.innerHTML =
      '<div class="eh-limite">' +
        '<div class="eh-pie__rejilla">' +
          '<div>' +
            '<h5>El movimiento</h5>' +
            '<ul>' +
              '<li><a href="' + BASE + 'manifiesto.html">Manifiesto Hispano</a></li>' +
              '<li><a href="' + BASE + 'plan.html">El Gran Plan</a></li>' +
              '<li><a href="' + BASE + 'naciones.html">Las naciones</a></li>' +
              '<li><a href="' + BASE + 'eeuu.html">La Hispanidad de Estados Unidos</a></li>' +
              '<li><a href="' + BASE + 'sala.html">Sala de Honor</a></li>' +
              '<li><a href="' + BASE + 'partidos.html">Partidos hermanos</a></li>' +
            '</ul>' +
          '</div>' +
          '<div>' +
            '<h5>Participar</h5>' +
            '<ul>' +
              '<li><a href="' + BASE + 'inscripcion.html">Inscribirme</a></li>' +
              '<li><a href="' + BASE + 'escuela.html">La Escuela</a></li>' +
              '<li><a href="' + BASE + 'comunidad.html">Comunidad</a></li>' +
              '<li><a href="' + BASE + 'circulo.html">Círculo de Emprendedores</a></li>' +
              '<li><a href="' + BASE + 'redes.html">Frente Digital</a></li>' +
              '<li><a href="' + BASE + 'aportar.html">Aportar a la causa</a></li>' +
            '</ul>' +
          '</div>' +
          '<div>' +
            '<h5>Tus datos</h5>' +
            '<ul>' +
              // El primero es el que de verdad importa: el que HACE algo. Los
              // documentos van después. Una página de derechos escondida al
              // final de una lista de textos legales no la encuentra nadie.
              '<li><a href="' + BASE + 'legal/tus-derechos.html">Ver, exportar y borrar mis datos</a></li>' +
              '<li><a href="' + BASE + 'legal/aviso-de-privacidad.html">Aviso de privacidad</a></li>' +
              '<li><a href="' + BASE + 'legal/terminos-y-condiciones.html">Términos de uso</a></li>' +
              '<li><a href="' + BASE + 'legal/politica-de-aportes.html">Aportes y transparencia</a></li>' +
              '<li><a href="' + BASE + 'legal/reglamento-de-honor.html">Reglamento del honor</a></li>' +
              '<li><a href="' + BASE + 'legal/seguridad-de-los-miembros.html">Seguridad de los miembros</a></li>' +
            '</ul>' +
          '</div>' +
          '<div>' +
            '<h5>Frente digital</h5>' +
            EH.redes.barra() +
          '</div>' +
        '</div>' +
        '<div class="eh-pie__legal">' +
          '<span>© ' + anio + ' ' + EH.escapar(C.movimiento) + (C.dominio ? ' · ' + EH.escapar(C.dominio) : '') + '</span>' +
          '<span>' + (EH.datos.enNube() ? 'Datos en servidor propio' : 'Modo demostración: los datos viven solo en este navegador') + '</span>' +
        '</div>' +
      '</div>';

    document.body.appendChild(pie);
  }

  /* ---------------------------------------------------------------------
     AVISO DE MODO DEMOSTRACIÓN
     La interfaz no promete lo que el código no cumple. Si no hay servidor,
     cada pantalla que guarda datos tiene que decirlo, no disimularlo.
     --------------------------------------------------------------------- */
  EH.avisoModo = function () {
    if (EH.datos.enNube()) return '';
    return '<div class="eh-aviso"><span class="eh-aviso__icono">◆</span><div>' +
      '<strong>Modo demostración.</strong> Todavía no hay servidor conectado: lo que se ' +
      'inscribe, se publica o se escribe aquí se guarda <b>solo en este navegador</b> y no ' +
      'lo ve nadie más. Sirve para enseñar la plataforma completa hoy. Se convierte en real ' +
      'rellenando dos líneas en <code>activos/js/config.js</code>.' +
      '</div></div>';
  };

  /* ---------------------------------------------------------------------
     ARRANQUE
     Todo lo que necesita saber quién eres espera a que la sesión cargue.
     Cada página expone EH.pagina() y el cascarón la llama cuando ya hay
     sesión: así ninguna pantalla pinta un estado que luego cambia.
     --------------------------------------------------------------------- */
  document.addEventListener('DOMContentLoaded', function () {
    EH.datos.iniciar()
      .catch(function () { return null; })
      .then(function () {
        pintarBarra();
        try {
          if (typeof EH.pagina === 'function') EH.pagina();
        } catch (e) {
          console.error('Fallo al pintar la página:', e);
          var m = document.getElementById('ehPrincipal') || document.querySelector('main');
          if (m) {
            m.insertAdjacentHTML('afterbegin',
              '<div class="eh-limite"><div class="eh-aviso eh-aviso--mal"><span class="eh-aviso__icono">!</span>' +
              '<div><strong>Algo falló al cargar esta pantalla.</strong> ' + EH.escapar(e.message) + '</div></div></div>');
          }
        }
        pintarPie();
      });
  });

})();
