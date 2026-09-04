/* =========================================================================
   SALA DE HONOR Y GLORIA
   =========================================================================
   TRES DECISIONES QUE NO SON ESTÉTICAS

   1. EL DESCARGO VA EN CADA FICHA DE PERSONA VIVA, no en un pie de página.
      Ninguna de estas personas ha dado su consentimiento, ninguna pertenece
      al movimiento y ninguna lo respalda. Si eso solo se dice una vez arriba,
      la captura de pantalla que circula por WhatsApp no lo lleva.

   2. LA MEDALLA SIEMPRE DICE QUIÉN LA DA. Mezclar una distinción inventada
      por este movimiento con un Grammy o un Cervantes, sin distinguirlas,
      sería hacerla pasar por lo que no es.

   3. LOS VÍDEOS NO SE CARGAN SOLOS. Un iframe de YouTube que arranca al abrir
      la página le cuenta a Google quién visita un sitio de afiliación
      política. Aquí hace falta un clic, y se carga desde youtube-nocookie.
      Y no hay ni un identificador de vídeo inventado: donde no hay uno
      confirmado, hay un botón de búsqueda, que es la verdad.
   ========================================================================= */
(function () {
  'use strict';

  var modal, caja;

  var CATEGORIAS = {
    armas: 'Valor', letras: 'Letras', ciencia: 'Ciencia', derecho: 'Derecho',
    arte: 'Arte', exploracion: 'Exploración', pensamiento: 'Pensamiento', libertad: 'Libertad',
    musica: 'Música', divulgacion: 'Divulgación', academia: 'Academia', cine: 'Cine',
    deporte: 'Deporte', empresa: 'Empresa', periodismo: 'Periodismo'
  };

  function indiceMedalla(id) {
    for (var i = 0; i < EH.MEDALLAS.length; i++) if (EH.MEDALLAS[i].id === id) return i;
    return 0;
  }

  function banderaDe(nacionId) {
    var n = EH.nacion(nacionId);
    return n ? n.bandera : '';
  }

  /* ------------------------------------------------------------------
     TARJETAS
     ------------------------------------------------------------------ */
  function tarjetaHistorico(f) {
    var m = EH.medalla(f.medalla);
    return '<article class="eh-tarjeta eh-tarjeta--enlace" data-honrado="' + EH.escapar(f.id) + '" ' +
      'tabindex="0" role="button" style="cursor:pointer;text-align:center">' +
      (m ? EH.medallas.dibujar(m, 62, indiceMedalla(f.medalla)) : '') +
      '<h3 class="eh-tarjeta__titulo" style="margin-top:.6rem;font-size:1.1rem">' +
        EH.escapar(f.nombre) + '</h3>' +
      '<p class="eh-tenue" style="margin:0">' + EH.escapar(f.anios) + '</p>' +
      '<div class="eh-fila eh-fila--centro" style="gap:.35rem;margin:.7rem 0">' +
        '<span class="eh-etiqueta">' + EH.escapar(banderaDe(f.nacion) + ' ' + (EH.nombreNacion(f.nacion) || '')) + '</span>' +
        '<span class="eh-etiqueta eh-etiqueta--soberano">' +
          EH.escapar(CATEGORIAS[f.categoria] || f.categoria) + '</span>' +
      '</div>' +
      '<p class="eh-tarjeta__cuerpo" style="text-align:left">' + EH.escapar(f.oficio) + '</p>' +
      ((f.tambienReclamadoPor || []).length
        ? '<p class="eh-tarjeta__pie" style="text-align:left">También lo reclaman: ' +
          EH.escapar(f.tambienReclamadoPor.map(EH.nombreNacion).join(', ')) + '</p>'
        : '') +
      '</article>';
  }

  function tarjetaVivo(f) {
    var m = EH.medalla(f.medalla);
    return '<article class="eh-tarjeta eh-tarjeta--enlace" data-honrado="' + EH.escapar(f.id) + '" ' +
      'tabindex="0" role="button" style="cursor:pointer;text-align:center">' +
      (m ? EH.medallas.dibujar(m, 56, indiceMedalla(f.medalla)) : '') +
      '<h3 class="eh-tarjeta__titulo" style="margin-top:.6rem;font-size:1.05rem">' +
        EH.escapar(f.nombre) + '</h3>' +
      '<div class="eh-fila eh-fila--centro" style="gap:.35rem;margin:.6rem 0">' +
        '<span class="eh-etiqueta">' + EH.escapar(banderaDe(f.nacion) + ' ' + (EH.nombreNacion(f.nacion) || '')) + '</span>' +
        '<span class="eh-etiqueta eh-etiqueta--soberano">' +
          EH.escapar(CATEGORIAS[f.categoria] || f.categoria) + '</span>' +
      '</div>' +
      '<p class="eh-tarjeta__cuerpo" style="text-align:left">' + EH.escapar(f.oficio) + '</p>' +
      '</article>';
  }

  /* ------------------------------------------------------------------
     FICHA COMPLETA
     ------------------------------------------------------------------ */
  function ficha(f, vivo) {
    var m = EH.medalla(f.medalla);
    var cabecera =
      '<button class="eh-mapa__cerrar" type="button" id="ehCerrar" aria-label="Cerrar">×</button>' +
      '<div class="eh-fila" style="gap:1rem;align-items:flex-start">' +
        (m ? EH.medallas.dibujar(m, 64, indiceMedalla(f.medalla)) : '') +
        '<div style="min-width:0;flex:1">' +
          '<h2 style="margin:0 0 .2rem;font-size:1.5rem">' + EH.escapar(f.nombre) + '</h2>' +
          '<p class="eh-tenue" style="margin:0">' +
            EH.escapar(vivo ? f.oficio : (f.nombreCompleto + ' · ' + f.anios)) + '</p>' +
          '<div class="eh-fila" style="gap:.35rem;margin-top:.6rem">' +
            '<span class="eh-etiqueta">' + EH.escapar(banderaDe(f.nacion) + ' ' + (EH.nombreNacion(f.nacion) || '')) + '</span>' +
            '<span class="eh-etiqueta eh-etiqueta--soberano">' +
              EH.escapar(CATEGORIAS[f.categoria] || f.categoria) + '</span>' +
          '</div>' +
        '</div>' +
      '</div>';

    if (!vivo) {
      return cabecera +
        '<h3 style="font-size:1.05rem;margin-top:1.4rem">La escena</h3>' +
        '<p style="color:var(--suave)">' + EH.escapar(f.gesta) + '</p>' +

        (f.fraseVerificable
          ? '<p class="eh-consigna">«' + EH.escapar(f.fraseVerificable) + '»</p>' : '') +

        '<h3 style="font-size:1.05rem">Quién fue</h3>' +
        '<p style="color:var(--suave);font-size:.93rem">' + EH.escapar(f.biografia) + '</p>' +

        '<h3 style="font-size:1.05rem">Qué le dio a la Hispanidad</h3>' +
        '<p style="color:var(--suave);font-size:.93rem">' + EH.escapar(f.porQueImporta) + '</p>' +

        (f.controversia
          ? '<div class="eh-aviso"><span class="eh-aviso__icono">◆</span><div>' +
            '<strong>Lo que también hay que decir.</strong> ' + EH.escapar(f.controversia) +
            '</div></div>'
          : '') +

        ((f.tambienReclamadoPor || []).length
          ? '<div class="eh-aviso eh-aviso--bien"><span class="eh-aviso__icono">◆</span><div>' +
            '<strong>Lo reclaman varias naciones.</strong> ' +
            EH.escapar(f.tambienReclamadoPor.map(EH.nombreNacion).join(', ')) +
            '. Eso, que en otros sitios es una pelea, aquí es exactamente el argumento.' +
            '</div></div>'
          : '') +

        (m ? '<div class="eh-tarjeta__pie">' + EH.medallas.conNombre(m, indiceMedalla(f.medalla)) +
          '<p class="eh-tenue" style="margin-top:.6rem">' + EH.escapar(m.porQue) + '</p></div>' : '');
    }

    /* --- persona viva --- */
    var busqueda = f.busquedaSugerida
      ? 'https://www.youtube.com/results?search_query=' + encodeURIComponent(f.busquedaSugerida)
      : null;

    return cabecera +

      /* El descargo va aquí arriba, antes que el elogio. Es lo primero que
         tiene que leer quien llegue, incluida la propia persona honrada. */
      '<div class="eh-aviso eh-aviso--info" style="margin-top:1.2rem">' +
        '<span class="eh-aviso__icono">◆</span><div>' +
        '<strong>' + EH.escapar(f.nombre) + ' no pertenece a este movimiento ni lo respalda.</strong> ' +
        'No ha dado su consentimiento para aparecer aquí y probablemente no sabe que esta página ' +
        'existe. Lo que se honra es su obra pública. Si quiere que retiremos esta ficha, la ' +
        'retiramos en 48 horas, sin discutir y sin pedir explicaciones.' +
        '</div></div>' +

      '<h3 style="font-size:1.05rem;margin-top:1.2rem">Su obra</h3>' +
      '<p style="color:var(--suave);font-size:.93rem">' + EH.escapar(f.obra) + '</p>' +

      '<h3 style="font-size:1.05rem">Por qué está en esta sala</h3>' +
      '<p style="color:var(--suave);font-size:.93rem">' + EH.escapar(f.porQueEstaAqui) + '</p>' +

      (f.citaVerificable
        ? '<p class="eh-consigna">«' + EH.escapar(f.citaVerificable) + '»</p>' +
          '<p class="eh-tenue" style="margin-top:-.8rem">' + EH.escapar(f.dondeLoDijo) +
          (f.citaPendienteDeVerificar
            ? ' <b style="color:var(--ambar)">· pendiente de contrastar en fuente primaria</b>'
            : '') + '</p>'
        : '<p class="eh-tenue">No publicamos ninguna cita suya porque no hemos podido ' +
          'contrastar el texto exacto en una fuente primaria. Preferimos describir su obra, ' +
          'que sí es comprobable, antes que ponerle en la boca una frase aproximada.</p>') +

      (f.matiz
        ? '<div class="eh-aviso"><span class="eh-aviso__icono">◆</span><div>' +
          '<strong>El matiz.</strong> ' + EH.escapar(f.matiz) + '</div></div>'
        : '') +

      (busqueda
        ? '<h3 style="font-size:1.05rem;margin-top:1.2rem">Ver y escuchar</h3>' +
          (f.canal ? '<p class="eh-tenue">Canal: ' + EH.escapar(f.canal) +
            (f.plataforma ? ' · ' + EH.escapar(f.plataforma) : '') + '</p>' : '') +
          '<div id="ehVideo" data-busqueda="' + EH.escapar(f.busquedaSugerida) + '"></div>' +
          '<a class="eh-boton eh-boton--p" href="' + busqueda + '" target="_blank" ' +
            'rel="noopener noreferrer">Buscarlo en YouTube</a>' +
          '<p class="eh-tenue" style="margin-top:.6rem">No incrustamos vídeos automáticamente: ' +
            'un reproductor que carga solo le cuenta a Google quién visita un sitio político. ' +
            'Y no inventamos enlaces: esta búsqueda es la que lleva a su material.</p>'
        : '') +

      (m ? '<div class="eh-tarjeta__pie">' + EH.medallas.conNombre(m, indiceMedalla(f.medalla)) +
        '<p class="eh-tenue" style="margin-top:.6rem">' + EH.escapar(m.porQue) + '</p></div>' : '');
  }

  function abrir(id) {
    var r = EH.honrado(id);
    if (!r) return;
    caja.innerHTML = ficha(r.f, r.vivo);
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

  function enganchar() {
    document.querySelectorAll('[data-honrado]').forEach(function (el) {
      el.addEventListener('click', function () { abrir(el.getAttribute('data-honrado')); });
      el.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); abrir(el.getAttribute('data-honrado')); }
      });
    });
  }

  /* ------------------------------------------------------------------ */
  EH.pagina = function () {
    modal = document.getElementById('ehModal');
    caja = document.getElementById('ehModalCaja');

    document.getElementById('ehIntro').innerHTML =
      String(EH.SALA.introduccion || '').split(/\n\s*\n/).map(function (p) {
        return '<p>' + EH.escapar(p.trim()) + '</p>';
      }).join('');

    document.getElementById('ehDescargo').innerHTML =
      '<strong>Antes de mirar esta galería.</strong> ' + EH.escapar(EH.SALA.textoDescargo || '');

    /* --- medallas --- */
    document.getElementById('ehMedallas').innerHTML = EH.MEDALLAS.map(function (m, i) {
      return '<div class="eh-tarjeta eh-centro">' +
        EH.medallas.dibujar(m, 66, i) +
        '<h4 style="margin:.6rem 0 .3rem;color:' + (m.color || 'var(--oro2)') + '">' +
          EH.escapar(m.nombre) + '</h4>' +
        '<p class="eh-tarjeta__cuerpo" style="font-size:.85rem">' + EH.escapar(m.porQue) + '</p>' +
        '<p class="eh-tarjeta__pie" style="font-size:.76rem">' + EH.escapar(m.criterio) + '</p>' +
        '</div>';
    }).join('');

    /* --- históricos, con filtro por categoría --- */
    var cats = {};
    EH.HISTORICOS.forEach(function (f) { cats[f.categoria] = (cats[f.categoria] || 0) + 1; });
    var claves = ['todas'].concat(Object.keys(cats));

    document.getElementById('ehFiltrosH').innerHTML = claves.map(function (k, i) {
      return '<button class="eh-boton eh-boton--p' + (i === 0 ? ' eh-boton--oro' : ' eh-boton--fantasma') +
        '" type="button" data-cat="' + EH.escapar(k) + '">' +
        EH.escapar(k === 'todas' ? 'Las ' + EH.HISTORICOS.length : (CATEGORIAS[k] || k)) + '</button>';
    }).join('');

    function pintarH(cat) {
      var lista = cat === 'todas' ? EH.HISTORICOS
        : EH.HISTORICOS.filter(function (f) { return f.categoria === cat; });
      document.getElementById('ehHistoricos').innerHTML = lista.map(tarjetaHistorico).join('');
      enganchar();
    }

    document.querySelectorAll('[data-cat]').forEach(function (b) {
      b.addEventListener('click', function () {
        document.querySelectorAll('[data-cat]').forEach(function (o) {
          o.classList.remove('eh-boton--oro'); o.classList.add('eh-boton--fantasma');
        });
        b.classList.add('eh-boton--oro'); b.classList.remove('eh-boton--fantasma');
        pintarH(b.getAttribute('data-cat'));
      });
    });
    pintarH('todas');

    /* --- vivos ---
       Hoy no se publica ninguna. La galería de personas vivas se escribió
       entera y una revisión legal la tumbó completa: citas sin contrastar,
       premios que no existían, y sobre todo catorce personas que no han dado
       su consentimiento para aparecer en la galería de un movimiento político.

       Se podría haber dejado el apartado vacío y en silencio. Se hace lo
       contrario: se explica por qué está vacío y qué hace falta para llenarlo.
       Un movimiento que cuenta lo que NO publicó y por qué es exactamente el
       que resulta creíble cuando publica algo. */
    if (EH.VIVOS_PUBLICOS.length) {
      document.getElementById('ehVivos').innerHTML = EH.VIVOS_PUBLICOS.map(tarjetaVivo).join('');
    } else {
      document.getElementById('ehVivos').innerHTML =
        '<div class="eh-tarjeta eh-tarjeta--oro" style="grid-column:1/-1">' +
        '<h3 class="eh-tarjeta__titulo">Todavía no hay nadie vivo en esta sala, y es a propósito</h3>' +
        '<div class="eh-prosa">' +
          '<p>Escribimos catorce fichas de artistas, divulgadores y académicos que hoy hablan de ' +
          'la lengua y de la unión hispana. No se publica ninguna.</p>' +
          '<p>La razón es sencilla: <b>ninguna de esas personas nos ha dado permiso</b>. Colgar ' +
          'el retrato de alguien vivo junto a una medalla inventada por nosotros afirma, sin ' +
          'decirlo, que esa persona está con nosotros. Y varias de ellas, con toda la razón, no ' +
          'querrían estarlo. Además, al contrastar los datos aparecieron premios mal atribuidos ' +
          'y récords que no pudimos confirmar en la fuente oficial.</p>' +
          '<p>Honrar a alguien contra su voluntad, o con datos que no se sostienen, no es ' +
          'honrarlo. Así que la sala se queda con quienes ya no están, que sí se pueden contar ' +
          'enteros, y esta pared espera.</p>' +
        '</div>' +
        '<h4 style="margin-top:1.4rem">Qué hace falta para que alguien vivo entre aquí</h4>' +
        '<ul class="eh-nacion__orgullo">' +
          (EH.SALA_CONDICIONES || []).map(function (c) {
            return '<li>' + EH.escapar(c) + '</li>';
          }).join('') +
        '</ul>' +
        '<p class="eh-tarjeta__pie">Si eres una de esas personas, o quieres proponer a alguien ' +
        'que sí quiera estar, ' +
        (EH.CONFIG.correo ? 'escribe a <b>' + EH.escapar(EH.CONFIG.correo) + '</b>.'
          : 'el correo de contacto se publicará en cuanto exista.') + '</p>' +
        '</div>';
    }

    /* --- lo que solo ve la dirección ---
       Las fichas apartadas no se borran: la decisión de publicarlas o no es
       política y es del fundador, no del programador. Pero tampoco se
       publican calladamente. */
    if (EH.datos.esFundador()) {
      document.getElementById('ehRevision').innerHTML =
        '<div class="eh-tarjeta" style="border-color:var(--ambar)">' +
        '<h3 class="eh-tarjeta__titulo" style="color:var(--ambar)">Las catorce fichas ' +
          '<span class="eh-etiqueta">solo lo ves tú</span></h3>' +
        '<p class="eh-tarjeta__cuerpo">' +
          'Están escritas y no se han perdido. Pero <b>no viajan en el sitio publicado</b>: ' +
          'viven en <code>borradores/sala-personas-vivas-en-revision.json</code>, fuera de la ' +
          'carpeta que se publica.' +
        '</p>' +
        '<p class="eh-tarjeta__cuerpo" style="margin-top:.7rem">' +
          'No se pintaban en ninguna parte, pero viajaban dentro de <code>sala.js</code>, que ' +
          'cualquiera puede descargar, y contienen valoraciones sobre personas reales que no han ' +
          'consentido aparecer. Un periodista que encuentre las notas internas de un movimiento ' +
          'político sobre catorce artistas vivos tiene el titular hecho.' +
        '</p>' +
        '<p class="eh-tarjeta__pie">' +
          'Para publicar a alguien hacen falta las cuatro condiciones de arriba, y reescribir su ' +
          'campo <code>matiz</code>: varios repiten o insinúan cosas que no pueden salir de ahí.' +
        '</p></div>';
    }

    /* --- reglas de la sala --- */
    document.getElementById('ehReglas').innerHTML =
      '<div class="eh-tarjeta eh-tarjeta--oro">' +
        '<h3 class="eh-tarjeta__titulo">Cómo funciona esta sala</h3>' +
        '<ul class="eh-nacion__orgullo">' +
          (EH.SALA.reglasDeHonor || []).map(function (r) {
            return '<li>' + EH.escapar(r) + '</li>';
          }).join('') +
        '</ul>' +
      '</div>' +
      '<div class="eh-tarjeta" style="margin-top:1rem">' +
        '<h3 class="eh-tarjeta__titulo">Pedir que retiremos una ficha</h3>' +
        '<p class="eh-tarjeta__cuerpo">' +
          'Si apareces en esta sala y no quieres, escríbenos y la retiramos en <b>48 horas</b>, ' +
          'sin discutir y sin pedirte explicaciones. Lo mismo vale para tu representante. ' +
          'Honrar a alguien contra su voluntad no es honrarlo.' +
        '</p>' +
        '<p class="eh-tarjeta__pie">' +
          (EH.CONFIG.correo
            ? 'Escribe a <b>' + EH.escapar(EH.CONFIG.correo) + '</b>.'
            : 'El correo de contacto todavía no está publicado. Hasta que lo esté, esta sala ' +
              'no debería difundirse fuera del movimiento: un compromiso de retirada sin una ' +
              'dirección donde reclamarlo no vale nada.') +
        '</p>' +
      '</div>';

    modal.addEventListener('click', function (e) { if (e.target === modal) cerrar(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') cerrar(); });

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

    var h = location.hash.replace('#', '');
    if (h && EH.honrado(h)) abrir(h);
  };
})();
