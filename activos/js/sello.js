/* =========================================================================
   EL EMBLEMA DEL MOVIMIENTO
   =========================================================================
   POR QUÉ NO HAY COLUMNAS NI DIVISA EN LATÍN
   La primera versión de este archivo dibujaba las Columnas de Hércules con la
   cinta de PLVS VLTRA. Es bonito y es hispánico, y hubo que tirarlo: son los
   dos elementos más identificables del escudo del Reino de España, y en la
   disposición heráldica clásica (columnas coronadas, cinta con divisa latina,
   orla) el emblema de un movimiento político deja de parecer una marca y
   empieza a parecer la imitación del sello de un Estado. Eso, en un sitio que
   además habla de presidencia y de territorios, es regalarle el argumento al
   adversario y arriesgar una imputación por simulación de investidura.

   Y había una contradicción que se veía a un metro: el propio movimiento
   declara que España es una nación más y no la cabeza, y se ponía de emblema
   el escudo de España.

   LO QUE HAY EN SU LUGAR
   Un emblema propio y sin genealogía estatal: veinticuatro puntos en el
   borde, uno por cada nación del mapa, alrededor de un sol naciente. En vez
   de una divisa en latín, el lema del propio movimiento, en español.
   Distintivo, defendible y de nadie más.
   ========================================================================= */

window.EH = window.EH || {};

EH.sello = {

  /* Versión mínima para la barra. A 30 píxeles cualquier detalle se convierte
     en barro, así que aquí solo hay el sol y el anillo. */
  mini: function () {
    return '<svg viewBox="0 0 48 48" aria-hidden="true">' +
      '<circle cx="24" cy="24" r="21.5" fill="none" stroke="#d9a441" stroke-width="2"/>' +
      '<circle cx="24" cy="26.5" r="7.5" fill="#a3122a"/>' +
      '<path d="M24 15V9M13.5 26.5H8M40 26.5h-5.5M16.2 18.7l-3.9-3.9M31.8 18.7l3.9-3.9" ' +
        'stroke="#d9a441" stroke-width="2.2" stroke-linecap="round" fill="none"/>' +
      '<path d="M12 34.5h24" stroke="#f0c46b" stroke-width="2.2" stroke-linecap="round"/>' +
      '</svg>';
  },

  /* Versión de portada. Un punto por nación en la orla: el emblema cuenta
     cuántos somos sin que haga falta leer nada. */
  grande: function (naciones) {
    naciones = naciones || 24;

    var orla = '';
    for (var i = 0; i < naciones; i++) {
      var a = (i / naciones) * Math.PI * 2 - Math.PI / 2;
      var x = 60 + Math.cos(a) * 52;
      var y = 60 + Math.sin(a) * 52;
      orla += '<circle cx="' + x.toFixed(2) + '" cy="' + y.toFixed(2) + '" r="2.1" fill="#d9a441"/>';
    }

    /* Los rayos del sol. Doce, y solo en el semicírculo superior: es un sol
       que sale, no uno que se pone. */
    var rayos = '';
    for (var j = 0; j <= 12; j++) {
      var b = Math.PI + (j / 12) * Math.PI;
      var x1 = 60 + Math.cos(b) * 21;
      var y1 = 68 + Math.sin(b) * 21;
      var x2 = 60 + Math.cos(b) * 29;
      var y2 = 68 + Math.sin(b) * 29;
      rayos += '<path d="M' + x1.toFixed(1) + ' ' + y1.toFixed(1) +
        'L' + x2.toFixed(1) + ' ' + y2.toFixed(1) + '"/>';
    }

    return '<svg class="eh-sello eh-sello--g" viewBox="0 0 120 132" role="img" ' +
      'aria-label="Emblema de Los Estados Hispanos: un sol naciente rodeado de ' + naciones + ' puntos, uno por nación">' +
      '<defs><linearGradient id="ehOro" x1="0" y1="0" x2="0" y2="1">' +
        '<stop offset="0" stop-color="#f0c46b"/><stop offset=".55" stop-color="#d9a441"/>' +
        '<stop offset="1" stop-color="#9a7025"/></linearGradient></defs>' +

      orla +
      '<circle cx="60" cy="60" r="44" fill="#1b0f12" stroke="url(#ehOro)" stroke-width="1.5"/>' +

      '<g stroke="#d9a441" stroke-width="1.5" stroke-linecap="round" fill="none" opacity=".9">' +
        rayos +
      '</g>' +
      '<circle cx="60" cy="68" r="15" fill="#a3122a"/>' +
      '<path d="M45 68a15 15 0 0 1 30 0" fill="#d1213c"/>' +

      // La línea del horizonte: el sol sale por detrás.
      '<path d="M26 68h68" stroke="url(#ehOro)" stroke-width="2" stroke-linecap="round"/>' +

      '<text x="60" y="40" text-anchor="middle" font-family="Georgia,serif" font-size="9.5" ' +
        'font-weight="700" letter-spacing="2.4" fill="#f0c46b">HISPANOS</text>' +

      // El lema tiene 23 caracteres y el lienzo mide 120 de ancho. Con cuerpo
      // 6,6 y espaciado 1,5 se salía por los dos lados y se leía "O QUE NOS
      // UNE YA EXIST". Con estos valores mide unos 84 y respira.
      '<text x="60" y="122" text-anchor="middle" font-family="Georgia,serif" font-size="5.2" ' +
        'letter-spacing="0.7" fill="#8d7568">LO QUE NOS UNE YA EXISTE</text>' +
      '</svg>';
  }
};
