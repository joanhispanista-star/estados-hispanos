/* =========================================================================
   LAS BANDERAS, DIBUJADAS
   =========================================================================
   POR QUÉ NO SE USAN LOS EMOJI 🇪🇸 🇺🇸
   Porque Windows no los trae. En el equipo de Joan —y en el de la mitad de
   quienes abran esto desde un computador— 🇺🇸 no se ve como una bandera: se
   ve como las letras «US». En un sitio cuyo argumento entero es un mapa de
   veinticuatro naciones, eso no es un detalle estético, es el sitio roto.

   Y el fundador pidió expresamente ver «la hermosa bandera de Estados
   Unidos». Un par de letras grises no es eso.

   POR QUÉ TODAS MIDEN 3:2 AUNQUE NO SEA SU PROPORCIÓN REAL
   Las proporciones oficiales van del 2:1 de Honduras al 19:10 de Estados
   Unidos. Mezcladas en una fila quedan descuadradas y parece un error. Se
   normalizan a 3:2 a propósito, que es lo que hace cualquier atlas.

   QUÉ SE DIBUJA Y QUÉ NO, DICHO CLARO
   Los campos, las franjas, los triángulos, los soles y las estrellas son
   exactos: son geometría. Los escudos heráldicos finos —el águila de México,
   el escudo de España, el de Guatemala— NO se reproducen: dibujarlos mal es
   peor que no dibujarlos. En su lugar va una marca sobria en la posición y
   el tamaño correctos, y la ficha del país lleva el escudo descrito en texto.
   Es la misma decisión que tomó el mapa: antes un hueco honesto que un
   contorno inventado.
   ========================================================================= */

window.EH = window.EH || {};

EH.banderas = (function () {
  'use strict';

  var W = 60, H = 40;

  /* --- helpers de geometría ------------------------------------------- */

  function estrella(cx, cy, r, color, puntas, giro) {
    puntas = puntas || 5;
    giro = giro === undefined ? -Math.PI / 2 : giro;
    var ri = r * (puntas === 5 ? 0.382 : 0.5);
    var p = [];
    for (var i = 0; i < puntas * 2; i++) {
      var rad = (i % 2 === 0) ? r : ri;
      var a = giro + (i * Math.PI) / puntas;
      p.push((cx + Math.cos(a) * rad).toFixed(2) + ' ' + (cy + Math.sin(a) * rad).toFixed(2));
    }
    return '<path d="M' + p.join('L') + 'Z" fill="' + color + '"/>';
  }

  function franjas(colores, vertical) {
    var n = colores.length;
    return colores.map(function (c, i) {
      return vertical
        ? '<rect x="' + (W / n * i) + '" y="0" width="' + (W / n) + '" height="' + H + '" fill="' + c + '"/>'
        : '<rect x="0" y="' + (H / n * i) + '" width="' + W + '" height="' + (H / n) + '" fill="' + c + '"/>';
    }).join('');
  }

  /* Tres franjas horizontales con la del medio al doble de alto: es el patrón
     de España, Colombia y Ecuador, y el ancho de la central cambia en cada una. */
  function tresBandas(arriba, medio, abajo, altoMedio) {
    var a = (H - altoMedio) / 2;
    return '<rect width="' + W + '" height="' + a + '" fill="' + arriba + '"/>' +
      '<rect y="' + a + '" width="' + W + '" height="' + altoMedio + '" fill="' + medio + '"/>' +
      '<rect y="' + (a + altoMedio) + '" width="' + W + '" height="' + a + '" fill="' + abajo + '"/>';
  }

  /* ---------------------------------------------------------------------
     EMBLEMAS
     ---------------------------------------------------------------------
     La primera versión ponía un círculo con un punto dentro en todas las
     banderas con escudo. Visto en fila y sobre fondo claro, no parecía un
     escudo: parecía una diana, y las nueve banderas que lo llevaban parecían
     sin terminar.

     Ahora cada una lleva el elemento que de verdad la distingue, dibujado con
     la geometría que sí se puede sostener: la estrella en corona de Paraguay,
     el triángulo con arcoíris de El Salvador y Nicaragua, el árbol con seis
     estrellas de Guinea Ecuatorial, el escudo con la cruz de la República
     Dominicana, el escudo entre columnas de España, el águila de México, el
     cóndor de Ecuador y la corona de laurel de Bolivia y Guatemala.

     Lo que sigue sin dibujarse es el detalle heráldico fino, y no por pereza:
     a los tamaños en que esto se usa —de 14 a 62 píxeles— un escudo
     cuartelado con sus castillos y leones es una mancha. Lo que se busca es
     que a 30 píxeles cada bandera se reconozca de un vistazo, que es lo que
     hace un atlas.
     --------------------------------------------------------------------- */

  /* Corona de laurel: dos ramas curvas que se abren hacia arriba. */
  function corona(cx, cy, r, color) {
    var g = '';
    [-1, 1].forEach(function (lado) {
      g += '<path d="M' + (cx + lado * r * 0.1).toFixed(2) + ' ' + (cy + r * 0.85).toFixed(2) +
        'Q' + (cx + lado * r).toFixed(2) + ' ' + (cy + r * 0.55).toFixed(2) +
        ' ' + (cx + lado * r * 0.72).toFixed(2) + ' ' + (cy - r * 0.75).toFixed(2) +
        '" fill="none" stroke="' + color + '" stroke-width="' + (r * 0.2).toFixed(2) +
        '" stroke-linecap="round"/>';
    });
    return g;
  }

  /* Escudo: la silueta clásica, plana arriba y en punta abajo. */
  function escudo(cx, cy, w, h, relleno, borde) {
    var x = cx - w / 2, y = cy - h / 2;
    return '<path d="M' + x + ' ' + y + 'h' + w + 'v' + (h * 0.55) +
      'q0 ' + (h * 0.45) + ' ' + (-w / 2) + ' ' + (h * 0.45) +
      'q' + (-w / 2) + ' 0 ' + (-w / 2) + ' ' + (-h * 0.45) + 'Z" fill="' + relleno +
      '" stroke="' + (borde || 'none') + '" stroke-width="' + (w * 0.08).toFixed(2) + '"/>';
  }

  /* Un ave de alas abiertas. Sirve para el águila mexicana y para el cóndor
     ecuatoriano: a este tamaño lo que se reconoce es la silueta, no la especie.

     El primer intento era un solo path con ocho curvas encadenadas y salía
     una polilla: las puntas de las alas caían y el cuerpo desaparecía. Esta
     versión compone tres piezas separadas —dos alas y un cuerpo— porque así
     se puede controlar cada una, y las alas suben en vez de caer, que es lo
     que distingue a un ave heráldica de un insecto. */
  function ave(cx, cy, env, color) {
    /* Tercera versión. La primera era un path de ocho curvas y salía una
       polilla. La segunda usaba curvas de Bézier por ala y se cerraban en
       cuenco: parecía un bigote. Esta usa POLÍGONOS: las alas son cuñas que
       apuntan arriba y afuera, y el cuerpo es una pieza aparte. Las rectas no
       se deforman al rellenarse, que es lo que estropeaba a las otras dos. */
    var a = env / 2, g = '';
    [-1, 1].forEach(function (s) {
      g += '<path d="M' + (cx + s * a * 0.1) + ' ' + (cy - env * 0.04) +
        'L' + (cx + s * a * 0.62) + ' ' + (cy - env * 0.34) +
        'L' + (cx + s * a) + ' ' + (cy - env * 0.22) +
        'L' + (cx + s * a * 0.78) + ' ' + (cy + env * 0.04) +
        'L' + (cx + s * a * 0.3) + ' ' + (cy + env * 0.14) +
        'Z" fill="' + color + '"/>';
    });
    // Cuerpo y cola.
    g += '<path d="M' + (cx - env * 0.1) + ' ' + (cy - env * 0.1) +
      'L' + (cx + env * 0.1) + ' ' + (cy - env * 0.1) +
      'L' + (cx + env * 0.06) + ' ' + (cy + env * 0.32) +
      'L' + (cx - env * 0.06) + ' ' + (cy + env * 0.32) + 'Z" fill="' + color + '"/>';
    // Cabeza de perfil, mirando a su derecha, con el pico.
    g += '<circle cx="' + (cx + env * 0.04) + '" cy="' + (cy - env * 0.18) +
      '" r="' + (env * 0.1).toFixed(2) + '" fill="' + color + '"/>';
    g += '<path d="M' + (cx + env * 0.12) + ' ' + (cy - env * 0.21) +
      'L' + (cx + env * 0.26) + ' ' + (cy - env * 0.16) +
      'L' + (cx + env * 0.12) + ' ' + (cy - env * 0.11) + 'Z" fill="' + color + '"/>';
    return g;
  }

  /* Triángulo con arcoíris: el corazón de los escudos centroamericanos. */
  function trianguloCentroamericano(cx, cy, r, azul, oro) {
    var s = '<path d="M' + cx + ' ' + (cy - r) + 'L' + (cx + r * 0.92) + ' ' + (cy + r * 0.62) +
      'L' + (cx - r * 0.92) + ' ' + (cy + r * 0.62) + 'Z" fill="none" stroke="' + azul +
      '" stroke-width="' + (r * 0.17).toFixed(2) + '" stroke-linejoin="round"/>';
    // El arcoíris sobre los volcanes.
    s += '<path d="M' + (cx - r * 0.52) + ' ' + (cy + r * 0.1) +
      'q' + (r * 0.52) + ' ' + (-r * 0.62) + ' ' + (r * 1.04) + ' 0" fill="none" stroke="' + oro +
      '" stroke-width="' + (r * 0.16).toFixed(2) + '" stroke-linecap="round"/>';
    // Los tres volcanes, apenas insinuados.
    s += '<path d="M' + (cx - r * 0.42) + ' ' + (cy + r * 0.44) + 'l' + (r * 0.2) + ' ' + (-r * 0.26) +
      'l' + (r * 0.2) + ' ' + (r * 0.26) + 'M' + (cx - r * 0.04) + ' ' + (cy + r * 0.44) +
      'l' + (r * 0.22) + ' ' + (-r * 0.32) + 'l' + (r * 0.22) + ' ' + (r * 0.32) +
      '" fill="none" stroke="' + azul + '" stroke-width="' + (r * 0.13).toFixed(2) +
      '" stroke-linejoin="round"/>';
    return s;
  }

  /* Último recurso, por si mañana se añade una nación con escudo y nadie le
     dibuja el suyo: un escudito neutro, que al menos parece un escudo. */
  function marca(cx, cy, r, color) {
    return escudo(cx, cy, r * 1.5, r * 1.9, 'none', color) +
      '<circle cx="' + cx + '" cy="' + (cy - r * 0.12) + '" r="' + (r * 0.3).toFixed(2) +
      '" fill="' + color + '" opacity=".85"/>';
  }

  function sol(cx, cy, r, color, rayos) {
    rayos = rayos || 16;
    var s = '<circle cx="' + cx + '" cy="' + cy + '" r="' + (r * 0.52).toFixed(2) + '" fill="' + color + '"/>';
    for (var i = 0; i < rayos; i++) {
      var a = (i / rayos) * Math.PI * 2;
      var x1 = cx + Math.cos(a) * r * 0.66, y1 = cy + Math.sin(a) * r * 0.66;
      var x2 = cx + Math.cos(a) * r, y2 = cy + Math.sin(a) * r;
      s += '<path d="M' + x1.toFixed(2) + ' ' + y1.toFixed(2) + 'L' + x2.toFixed(2) + ' ' + y2.toFixed(2) +
        '" stroke="' + color + '" stroke-width="' + (r * 0.16).toFixed(2) + '" stroke-linecap="round"/>';
    }
    return s;
  }

  /* ---------------------------------------------------------------------
     ESTADOS UNIDOS
     Es la que el fundador pidió por su nombre, así que va entera y exacta:
     trece franjas, cantón de siete franjas de alto y dos quintos de ancho, y
     las cincuenta estrellas en sus nueve filas alternas de seis y cinco.
     Se generan con un bucle porque escribir cincuenta a mano es pedir que
     falte una, y faltaría justo la que alguien cuente.
     --------------------------------------------------------------------- */
  function estadosUnidos() {
    var ROJO = '#B22234', AZUL = '#3C3B6E', BLANCO = '#FFFFFF';
    var altoFranja = H / 13;
    var s = '<rect width="' + W + '" height="' + H + '" fill="' + BLANCO + '"/>';
    for (var i = 0; i < 13; i += 2) {
      s += '<rect y="' + (i * altoFranja).toFixed(3) + '" width="' + W +
        '" height="' + altoFranja.toFixed(3) + '" fill="' + ROJO + '"/>';
    }
    var cW = W * 0.4, cH = altoFranja * 7;
    s += '<rect width="' + cW.toFixed(2) + '" height="' + cH.toFixed(2) + '" fill="' + AZUL + '"/>';

    // Nueve filas: las impares llevan seis estrellas, las pares cinco.
    var r = cH / 9 * 0.33;
    for (var fila = 0; fila < 9; fila++) {
      var cuantas = (fila % 2 === 0) ? 6 : 5;
      var y = cH / 10 * (fila + 1);
      for (var col = 0; col < cuantas; col++) {
        var x = (fila % 2 === 0)
          ? cW / 12 * (col * 2 + 1)
          : cW / 12 * (col * 2 + 2);
        s += estrella(x, y, r, BLANCO);
      }
    }
    return s;
  }

  /* ---------------------------------------------------------------------
     LAS VEINTICUATRO
     --------------------------------------------------------------------- */
  var DIBUJOS = {

    'estados-unidos-hispano': estadosUnidos,

    espana: function () {
      /* El escudo va a un tercio del asta, no centrado, como en la real.
         Lleva corona arriba y las dos columnas de Hércules a los lados: a este
         tamaño el cuartelado con castillos y leones es una mancha, pero la
         silueta corona-escudo-columnas sí se reconoce. */
      var cx = W * 0.36, cy = H / 2 + 0.4;
      return tresBandas('#AA151B', '#F1BF00', '#AA151B', H / 2) +
        // Las columnas de Hércules, con su basa y su capitel.
        '<g fill="#9B1B2E">' +
          '<rect x="' + (cx - 6.4) + '" y="' + (cy - 4.2) + '" width="1.5" height="8.4"/>' +
          '<rect x="' + (cx - 7) + '" y="' + (cy - 4.8) + '" width="2.7" height="1"/>' +
          '<rect x="' + (cx - 7) + '" y="' + (cy + 3.8) + '" width="2.7" height="1"/>' +
          '<rect x="' + (cx + 4.9) + '" y="' + (cy - 4.2) + '" width="1.5" height="8.4"/>' +
          '<rect x="' + (cx + 4.3) + '" y="' + (cy - 4.8) + '" width="2.7" height="1"/>' +
          '<rect x="' + (cx + 4.3) + '" y="' + (cy + 3.8) + '" width="2.7" height="1"/>' +
        '</g>' +
        // La corona.
        '<path d="M' + (cx - 3) + ' ' + (cy - 5.2) + 'l.9 -2l1.2 1.3l.9 -1.9l.9 1.9l1.2 -1.3l.9 2Z" ' +
          'fill="#D4A32C" stroke="#8A6B1F" stroke-width="0.3"/>' +
        // El escudo, cuartelado en dos tonos: no es heráldica exacta, pero
        // deja de ser un bloque rojo plano.
        escudo(cx, cy, 7.4, 9, '#F2E6C8', '#8A6B1F') +
        '<path d="M' + (cx - 3.7) + ' ' + (cy - 4.5) + 'h3.7v4.3h-3.7Z" fill="#C8102E" opacity=".9"/>' +
        '<path d="M' + cx + ' ' + (cy - 0.2) + 'h3.7v2.1q0 2.1 -1.85 2.1Z" fill="#C8102E" opacity=".9"/>' +
        '<rect x="' + (cx - 1) + '" y="' + (cy - 0.6) + '" width="2" height="4.6" fill="#1F6B3B" opacity=".55"/>';
    },

    mexico: function () {
      // El águila sobre el nopal: a este tamaño lo que se reconoce es la
      // silueta oscura en mitad de la franja blanca, y eso sí se puede dibujar.
      return franjas(['#006847', '#FFFFFF', '#CE1126'], true) +
        ave(W / 2, H / 2 - 1.4, 11, '#5C4423') +
        '<path d="M' + (W / 2 - 4) + ' ' + (H / 2 + 4.6) + 'q4 2.6 8 0" fill="none" ' +
        'stroke="#2E6B3E" stroke-width="1.5" stroke-linecap="round"/>';
    },

    colombia: function () {
      return '<rect width="' + W + '" height="' + (H / 2) + '" fill="#FCD116"/>' +
        '<rect y="' + (H / 2) + '" width="' + W + '" height="' + (H / 4) + '" fill="#003893"/>' +
        '<rect y="' + (H * 0.75) + '" width="' + W + '" height="' + (H / 4) + '" fill="#CE1126"/>';
    },

    ecuador: function () {
      return '<rect width="' + W + '" height="' + (H / 2) + '" fill="#FFDD00"/>' +
        '<rect y="' + (H / 2) + '" width="' + W + '" height="' + (H / 4) + '" fill="#0072CE"/>' +
        '<rect y="' + (H * 0.75) + '" width="' + W + '" height="' + (H / 4) + '" fill="#EF3340"/>' +
        // El cóndor con las alas abiertas sobre el escudo.
        ave(W / 2, H / 2 - 1, 12, '#6B5A1E') +
        escudo(W / 2, H / 2 + 3.4, 5.4, 5.4, '#F2E6C8', '#6B5A1E');
    },

    venezuela: function () {
      var s = franjas(['#FFCC00', '#00247D', '#CF142B']);
      /* Las ocho estrellas forman un arco en sonrisa DENTRO de la franja
         azul. La versión anterior las calculaba sobre un círculo de radio 15
         centrado fuera de sitio y el arco salía disparado hasta el amarillo:
         se veía una curva blanca cruzando media bandera. El centro está
         ahora por encima de las estrellas, que es lo que hace la sonrisa. */
      var cx = W / 2, cy = H / 2 - 6.5, r = 10;
      for (var i = 0; i < 8; i++) {
        var a = (30 + (i / 7) * 120) * Math.PI / 180;
        s += estrella(cx + Math.cos(a) * r, cy + Math.sin(a) * r, 1.7, '#FFFFFF');
      }
      return s;
    },

    peru: function () { return franjas(['#D91023', '#FFFFFF', '#D91023'], true); },

    bolivia: function () {
      return franjas(['#D52B1E', '#F9E300', '#007A33']) +
        corona(W / 2, H / 2, 5.2, '#2E6B3E') +
        escudo(W / 2, H / 2 - 0.4, 5, 5.4, '#F2E6C8', '#6B5A1E');
    },

    chile: function () {
      return '<rect width="' + W + '" height="' + (H / 2) + '" fill="#FFFFFF"/>' +
        '<rect y="' + (H / 2) + '" width="' + W + '" height="' + (H / 2) + '" fill="#D52B1E"/>' +
        '<rect width="' + (W / 3) + '" height="' + (H / 2) + '" fill="#0039A6"/>' +
        estrella(W / 6, H / 4, 5.4, '#FFFFFF');
    },

    argentina: function () {
      // El Sol de Mayo ocupa casi toda la franja blanca en la bandera real.
      // A 5,2 de radio quedaba un puntito invisible por debajo de 22 px.
      return franjas(['#74ACDF', '#FFFFFF', '#74ACDF']) + sol(W / 2, H / 2, 6.4, '#F6B40E');
    },

    uruguay: function () {
      /* Nueve franjas y un cantón blanco. La versión anterior intentaba
         recortar las franjas a mano según el índice y salían cuatro barras
         gruesas mal alineadas. Ahora se pintan las nueve enteras y encima se
         pone el cantón: es como se construye de verdad y no hay que acertar
         ningún recorte. */
      var s = '<rect width="' + W + '" height="' + H + '" fill="#FFFFFF"/>';
      for (var i = 1; i < 9; i += 2) {
        s += '<rect y="' + (H / 9 * i).toFixed(2) + '" width="' + W +
          '" height="' + (H / 9).toFixed(2) + '" fill="#0038A8"/>';
      }
      var lado = H / 9 * 4;           // el cantón cubre cuatro franjas
      s += '<rect width="' + lado.toFixed(2) + '" height="' + lado.toFixed(2) + '" fill="#FFFFFF"/>';
      s += sol(lado / 2, lado / 2, lado * 0.33, '#F6B40E');
      return s;
    },

    paraguay: function () {
      // La estrella dentro de la corona: es literalmente el anverso de su
      // escudo, y resulta ser de los pocos que sí cabe dibujar entero.
      return franjas(['#D52B1E', '#FFFFFF', '#0038A8']) +
        '<circle cx="' + (W / 2) + '" cy="' + (H / 2) + '" r="5.2" fill="#FFFFFF" stroke="#1F6B3B" stroke-width="0.7"/>' +
        corona(W / 2, H / 2, 4.3, '#1F6B3B') +
        estrella(W / 2, H / 2, 2.4, '#F6B40E');
    },

    cuba: function () {
      var s = '';
      for (var i = 0; i < 5; i++) {
        s += '<rect y="' + (H / 5 * i).toFixed(2) + '" width="' + W + '" height="' + (H / 5).toFixed(2) +
          '" fill="' + (i % 2 === 0 ? '#002A8F' : '#FFFFFF') + '"/>';
      }
      s += '<path d="M0 0L' + (H * 0.58).toFixed(2) + ' ' + (H / 2) + 'L0 ' + H + 'Z" fill="#CF142B"/>';
      s += estrella(H * 0.18, H / 2, 4.4, '#FFFFFF');
      return s;
    },

    'puerto-rico': function () {
      var s = '';
      for (var i = 0; i < 5; i++) {
        s += '<rect y="' + (H / 5 * i).toFixed(2) + '" width="' + W + '" height="' + (H / 5).toFixed(2) +
          '" fill="' + (i % 2 === 0 ? '#ED0000' : '#FFFFFF') + '"/>';
      }
      s += '<path d="M0 0L' + (H * 0.58).toFixed(2) + ' ' + (H / 2) + 'L0 ' + H + 'Z" fill="#0050F0"/>';
      s += estrella(H * 0.18, H / 2, 4.4, '#FFFFFF');
      return s;
    },

    'republica-dominicana': function () {
      return '<rect width="' + (W / 2) + '" height="' + (H / 2) + '" fill="#002D62"/>' +
        '<rect x="' + (W / 2) + '" width="' + (W / 2) + '" height="' + (H / 2) + '" fill="#CE1126"/>' +
        '<rect y="' + (H / 2) + '" width="' + (W / 2) + '" height="' + (H / 2) + '" fill="#CE1126"/>' +
        '<rect x="' + (W / 2) + '" y="' + (H / 2) + '" width="' + (W / 2) + '" height="' + (H / 2) + '" fill="#002D62"/>' +
        '<rect x="' + (W / 2 - 2.4) + '" width="4.8" height="' + H + '" fill="#FFFFFF"/>' +
        '<rect y="' + (H / 2 - 2.4) + '" width="' + W + '" height="4.8" fill="#FFFFFF"/>' +
        // El escudo con la cruz: la única bandera del mundo con una Biblia.
        escudo(W / 2, H / 2, 6, 6.6, '#FFFFFF', '#1F6B3B') +
        '<path d="M' + (W / 2) + ' ' + (H / 2 - 2) + 'v4M' + (W / 2 - 2) + ' ' + (H / 2) +
        'h4" stroke="#002D62" stroke-width="0.9" stroke-linecap="round"/>';
    },

    guatemala: function () {
      /* Los fusiles cruzados sobre el pergamino salían como un nudo
         hexagonal ilegible. Se quedan la corona y el pergamino, que es lo que
         de verdad se distingue, y encima el quetzal: el ave es lo que nadie
         confunde con otro escudo centroamericano. */
      var cx = W / 2, cy = H / 2;
      return franjas(['#4997D0', '#FFFFFF', '#4997D0'], true) +
        corona(cx, cy + 1, 5.4, '#2E6B3E') +
        '<path d="M' + (cx - 3.4) + ' ' + (cy + 1.8) + 'h6.8" stroke="#E8DCC0" ' +
        'stroke-width="2.1" stroke-linecap="round"/>' +
        '<path d="M' + (cx - 3.4) + ' ' + (cy + 1.8) + 'h6.8" stroke="#8A7A4E" ' +
        'stroke-width="0.4" stroke-linecap="round" opacity=".6"/>' +
        // El quetzal, de perfil y con la cola larga, que es su rasgo.
        '<circle cx="' + (cx + 0.4) + '" cy="' + (cy - 2.6) + '" r="1.5" fill="#2E6B3E"/>' +
        '<path d="M' + (cx + 1.7) + ' ' + (cy - 3) + 'l1.3 .5l-1.3 .6Z" fill="#C8A020"/>' +
        '<path d="M' + (cx - 0.4) + ' ' + (cy - 1.6) + 'q-2.4 1.4 -3.6 3.2" fill="none" ' +
        'stroke="#2E6B3E" stroke-width="1.1" stroke-linecap="round"/>';
    },

    honduras: function () {
      var s = franjas(['#0073CF', '#FFFFFF', '#0073CF']);
      // Las cinco estrellas en aspa, una por cada república centroamericana.
      var d = 4.6;
      [[0, 0], [-d, -d], [d, -d], [-d, d], [d, d]].forEach(function (p) {
        s += estrella(W / 2 + p[0], H / 2 + p[1], 1.9, '#0073CF');
      });
      return s;
    },

    /* El Salvador y Nicaragua comparten el triángulo con los volcanes y el
       arcoíris: no es un descuido del dibujo, es que sus escudos vienen los
       dos del de la República Federal de Centroamérica. */
    'el-salvador': function () {
      return franjas(['#0F47AF', '#FFFFFF', '#0F47AF']) +
        trianguloCentroamericano(W / 2, H / 2, 5.4, '#0F47AF', '#F6B40E');
    },

    nicaragua: function () {
      return franjas(['#0067C6', '#FFFFFF', '#0067C6']) +
        trianguloCentroamericano(W / 2, H / 2, 5.4, '#0067C6', '#F6B40E');
    },

    'costa-rica': function () {
      // Cinco franjas, pero la roja central vale el doble que las demás.
      var u = H / 6;
      return '<rect width="' + W + '" height="' + u + '" fill="#002B7F"/>' +
        '<rect y="' + u + '" width="' + W + '" height="' + u + '" fill="#FFFFFF"/>' +
        '<rect y="' + (u * 2) + '" width="' + W + '" height="' + (u * 2) + '" fill="#CE1126"/>' +
        '<rect y="' + (u * 4) + '" width="' + W + '" height="' + u + '" fill="#FFFFFF"/>' +
        '<rect y="' + (u * 5) + '" width="' + W + '" height="' + u + '" fill="#002B7F"/>';
    },

    panama: function () {
      return '<rect width="' + (W / 2) + '" height="' + (H / 2) + '" fill="#FFFFFF"/>' +
        '<rect x="' + (W / 2) + '" width="' + (W / 2) + '" height="' + (H / 2) + '" fill="#DA121A"/>' +
        '<rect y="' + (H / 2) + '" width="' + (W / 2) + '" height="' + (H / 2) + '" fill="#072357"/>' +
        '<rect x="' + (W / 2) + '" y="' + (H / 2) + '" width="' + (W / 2) + '" height="' + (H / 2) + '" fill="#FFFFFF"/>' +
        estrella(W / 4, H / 4, 4.2, '#072357') +
        estrella(W * 0.75, H * 0.75, 4.2, '#DA121A');
    },

    'guinea-ecuatorial': function () {
      var cx = W * 0.62, cy = H / 2;
      var s = franjas(['#3E9A00', '#FFFFFF', '#E32118']) +
        '<path d="M0 0L' + (H * 0.5).toFixed(2) + ' ' + (H / 2) + 'L0 ' + H + 'Z" fill="#0073CE"/>';
      // El árbol de la ceiba, y encima sus seis estrellas.
      s += '<path d="M' + cx + ' ' + (cy + 4) + 'v-3.2" stroke="#5A4423" stroke-width="1.1" stroke-linecap="round"/>';
      s += '<path d="M' + (cx - 3.4) + ' ' + (cy + 0.8) + 'q3.4 -4.4 6.8 0Z" fill="#2E6B3E"/>';
      for (var i = 0; i < 6; i++) {
        s += estrella(cx - 4.4 + i * 1.76, cy - 3.6, 0.95, '#0073CE');
      }
      return s;
    },

    filipinas: function () {
      var s = '<rect width="' + W + '" height="' + (H / 2) + '" fill="#0038A8"/>' +
        '<rect y="' + (H / 2) + '" width="' + W + '" height="' + (H / 2) + '" fill="#CE1126"/>' +
        '<path d="M0 0L' + (H * 0.866).toFixed(2) + ' ' + (H / 2) + 'L0 ' + H + 'Z" fill="#FFFFFF"/>' +
        sol(H * 0.29, H / 2, 4.4, '#FCD116', 8);
      // Las tres estrellas de los vértices del triángulo.
      [[H * 0.055, H * 0.12], [H * 0.055, H * 0.88], [H * 0.78, H / 2]].forEach(function (p) {
        s += estrella(p[0], p[1], 2.1, '#FCD116');
      });
      return s;
    },

    'sahara-occidental': function () {
      var s = franjas(['#000000', '#FFFFFF', '#007A3D']) +
        '<path d="M0 0L' + (H * 0.5).toFixed(2) + ' ' + (H / 2) + 'L0 ' + H + 'Z" fill="#C4111B"/>';
      // Media luna y estrella sobre la franja blanca.
      s += '<path d="M' + (W * 0.56) + ' ' + (H / 2) + 'a4.2 4.2 0 1 0 4.2 -4.2 a3.3 3.3 0 1 1 -4.2 4.2Z" fill="#C4111B"/>';
      s += estrella(W * 0.72, H / 2, 2.6, '#C4111B');
      return s;
    }
  };

  /* Para las fichas que no tienen dibujo propio (o si mañana se añade una
     entidad nueva), se pinta un campo neutro con sus iniciales. Un hueco en
     blanco parece un fallo; esto parece lo que es. */
  function generica(id, nombre) {
    var iniciales = String(nombre || id).split(/[\s-]+/).slice(0, 2)
      .map(function (p) { return (p[0] || '').toUpperCase(); }).join('');
    return '<rect width="' + W + '" height="' + H + '" fill="#2a1a1e"/>' +
      '<text x="' + (W / 2) + '" y="' + (H / 2 + 5) + '" text-anchor="middle" ' +
      'font-family="Georgia,serif" font-size="15" fill="#8d7568">' + EH.escapar(iniciales) + '</text>';
  }

  return {

    /* El SVG de una bandera. ancho en píxeles; el alto sale solo. */
    svg: function (id, ancho, clase) {
      ancho = ancho || 30;
      var n = (EH.nacion ? EH.nacion(id) : null) || {};
      var dibujo = DIBUJOS[id];
      var cuerpo = dibujo ? dibujo() : generica(id, n.nombre);
      return '<svg class="eh-bandera' + (clase ? ' ' + clase : '') + '" viewBox="0 0 ' + W + ' ' + H +
        '" width="' + ancho + '" height="' + Math.round(ancho * H / W) + '" role="img" ' +
        'aria-label="Bandera de ' + EH.escapar(n.nombre || id) + '">' +
        cuerpo +
        // Un borde tenue: sin él, las banderas con blanco en el canto se
        // funden con el fondo claro de una tarjeta y parecen recortadas.
        '<rect width="' + W + '" height="' + H + '" fill="none" stroke="rgba(0,0,0,.35)" stroke-width="1"/>' +
        '</svg>';
    },

    /* Bandera y nombre, que es como aparece en casi todas las pantallas. */
    conNombre: function (id, ancho) {
      var n = (EH.nacion ? EH.nacion(id) : null) || {};
      return '<span class="eh-fila" style="gap:.45rem;flex-wrap:nowrap;align-items:center">' +
        EH.banderas.svg(id, ancho || 22) +
        '<span>' + EH.escapar(n.nombre || id) + '</span></span>';
    },

    tiene: function (id) { return !!DIBUJOS[id]; },
    cuantas: function () { return Object.keys(DIBUJOS).length; }
  };
})();
