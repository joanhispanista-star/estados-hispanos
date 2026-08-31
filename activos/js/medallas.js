/* =========================================================================
   LAS MEDALLAS — dibujo
   =========================================================================
   POR QUÉ NINGUNA SE PARECE AL ESCUDO DE UN ESTADO
   Restricción de diseño dura y deliberada: nada de columnas con cinta latina
   (es el escudo de España), nada de águila con serpiente (es el de México),
   nada de coronas, cuartelados, toisones ni orlas. Tampoco armas de fuego.
   Un movimiento que reparte medallas con la heráldica de un Estado se está
   presentando como ese Estado, y eso es exactamente lo que no puede hacer.

   Los símbolos son suyos y de nadie más: un farallón, un caracol, un crisol,
   una empalizada de palenque, un puente tejido, la virgulilla de la eñe, un
   telar y un aljibe. Cosas, no blasones.

   POR QUÉ SE DIBUJAN EN SVG Y NO SON IMÁGENES
   Escalan sin pesar, se pueden recolorear desde el dato, y sobre todo: la
   plataforma abre sin internet y ocho PNG serían ocho peticiones más.
   ========================================================================= */

window.EH = window.EH || {};

EH.medallas = (function () {
  'use strict';

  /* Cada glifo se dibuja dentro de un cuadro de 48×48 centrado en el disco.
     Se identifican por el símbolo que declara la medalla, no por su id, para
     que añadir una medalla nueva no obligue a tocar este archivo si reutiliza
     un símbolo que ya existe. */
  var GLIFOS = {

    // Un farallón: la roca que aguanta el mar. Valor y resistencia.
    farallon: '<path d="M8 38 L18 14 L26 26 L32 18 L40 38 Z" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round"/>' +
              '<path d="M6 40h36" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',

    // Un caracol: la espiral que guarda la voz. La palabra y la memoria.
    caracol: '<path d="M24 24 m0 -3 a3 3 0 1 1 -3 3 a6 6 0 1 0 6 -6 a9 9 0 1 0 -9 9 a12 12 0 1 0 12 -12" ' +
             'fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>',

    // Un crisol: donde los metales distintos se hacen uno. El mestizaje.
    crisol: '<path d="M14 14 h20 l-3 18 a7 7 0 0 1 -14 0 Z" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round"/>' +
            '<path d="M20 8v4M24 6v6M28 8v4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',

    // Una empalizada de palenque: los que se hicieron libres por su cuenta.
    palenque: '<path d="M12 40V16l4-6 4 6v24M24 40V14l4-6 4 6v26M36 40V18l3-5" ' +
              'fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>' +
              '<path d="M8 24h34M8 32h34" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',

    // Un puente tejido: unir dos orillas con hilo, no con piedra.
    puente: '<path d="M6 30 Q24 12 42 30" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/>' +
            '<path d="M6 30v8M42 30v8M14 22v16M24 17v21M34 22v16" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>' +
            '<path d="M6 38h36" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>',

    // La virgulilla de la eñe: la letra que no tiene ningún otro idioma.
    virgulilla: '<path d="M10 20 q5 -8 10 0 t10 0 t8 0" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>' +
                '<path d="M14 40V26h20v14" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>',

    // Un telar: la obra que se hace hilo a hilo y se ve al final.
    telar: '<path d="M10 10v28M38 10v28" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/>' +
           '<path d="M10 16h28M10 24h28M10 32h28" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>' +
           '<path d="M18 10v28M30 10v28" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".7"/>',

    // Un aljibe: el que junta el agua que nadie ve para cuando haga falta.
    aljibe: '<path d="M12 20h24v16a4 4 0 0 1 -4 4H16a4 4 0 0 1 -4 -4Z" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round"/>' +
            '<path d="M10 20h28" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/>' +
            '<path d="M24 20V8M18 12l6-5 6 5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>'
  };

  var ORDEN = ['farallon', 'caracol', 'crisol', 'palenque', 'puente', 'virgulilla', 'telar', 'aljibe'];

  function glifoDe(medalla, indice) {
    var s = (medalla.simbolo || '') + ' ' + (medalla.nombre || '') + ' ' + (medalla.id || '');
    s = s.toLowerCase();
    var claves = { farallon: 'farall', caracol: 'caracol', crisol: 'crisol', palenque: 'palenq',
                   puente: 'puente', virgulilla: 'virgul', telar: 'telar', aljibe: 'aljibe' };
    for (var k in claves) if (s.indexOf(claves[k]) >= 0) return GLIFOS[k];
    // Si un día se añade una medalla con otro símbolo, se le presta uno en
    // vez de dejar el hueco vacío: un disco sin dibujo parece un fallo.
    return GLIFOS[ORDEN[indice % ORDEN.length]];
  }

  return {
    /* Devuelve el SVG de una medalla. tam en píxeles. */
    dibujar: function (medalla, tam, indice) {
      if (!medalla) return '';
      tam = tam || 64;
      var c = medalla.color || '#d9a441';
      var id = 'med' + String(medalla.id || indice || 0).replace(/[^a-z0-9]/gi, '');
      return '<svg viewBox="0 0 48 60" width="' + tam + '" height="' + Math.round(tam * 60 / 48) + '" ' +
        'role="img" aria-label="Medalla ' + EH.escapar(medalla.nombre || '') + '">' +
        '<defs><linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1">' +
          '<stop offset="0" stop-color="' + c + '" stop-opacity=".95"/>' +
          '<stop offset="1" stop-color="' + c + '" stop-opacity=".45"/>' +
        '</linearGradient></defs>' +
        // La cinta
        '<path d="M16 2h6l-3 10 3 10h-6l3-10z" fill="' + c + '" opacity=".55"/>' +
        '<path d="M26 2h6l-3 10 3 10h-6l3-10z" fill="' + c + '" opacity=".8"/>' +
        // El disco
        '<circle cx="24" cy="36" r="21" fill="#1b0f12" stroke="url(#' + id + ')" stroke-width="2.4"/>' +
        '<circle cx="24" cy="36" r="17" fill="none" stroke="' + c + '" stroke-width=".7" opacity=".5"/>' +
        '<g transform="translate(0,12) scale(.66) translate(12,0)" color="' + c + '">' +
          glifoDe(medalla, indice || 0) +
        '</g>' +
        '</svg>';
    },

    /* La medalla con su nombre, para pegarla en una ficha. Lleva SIEMPRE el
       rótulo de quién la otorga: mezclarla con un Grammy o un Cervantes sin
       decir que es un invento del movimiento sería hacerla pasar por lo que
       no es. */
    conNombre: function (medalla, indice) {
      if (!medalla) return '';
      return '<div class="eh-fila" style="gap:.8rem;align-items:center">' +
        EH.medallas.dibujar(medalla, 52, indice) +
        '<div style="min-width:0">' +
          '<b style="color:' + (medalla.color || 'var(--oro2)') + '">' + EH.escapar(medalla.nombre) + '</b><br>' +
          '<span class="eh-tenue" style="font-size:.74rem">Distinción otorgada por Los Estados Hispanos</span>' +
        '</div></div>';
    }
  };
})();
