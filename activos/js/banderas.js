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

  /* La marca que sustituye a un escudo heráldico. Sobria y en su sitio: no
     intenta parecer el escudo, solo ocupa su lugar sin mentir. */
  function marca(cx, cy, r, color) {
    return '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="none" stroke="' +
      color + '" stroke-width="' + (r * 0.26).toFixed(2) + '" opacity=".82"/>' +
      '<circle cx="' + cx + '" cy="' + cy + '" r="' + (r * 0.34).toFixed(2) + '" fill="' + color + '" opacity=".82"/>';
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
      return tresBandas('#AA151B', '#F1BF00', '#AA151B', H / 2) +
        marca(W * 0.36, H / 2, 4.6, '#8A6B1F');
    },

    mexico: function () {
      return franjas(['#006847', '#FFFFFF', '#CE1126'], true) +
        marca(W / 2, H / 2, 5, '#7B5A28');
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
        marca(W / 2, H / 2, 5, '#6B5A1E');
    },

    venezuela: function () {
      var s = franjas(['#FFCC00', '#00247D', '#CF142B']);
      // Las ocho estrellas van en arco sobre la franja azul.
      for (var i = 0; i < 8; i++) {
        var a = Math.PI * (0.64 + (i / 7) * 0.72);
        s += estrella(W / 2 + Math.cos(a) * 15, H / 2 - Math.sin(a) * 15 + 7.5, 1.9, '#FFFFFF');
      }
      return s;
    },

    peru: function () { return franjas(['#D91023', '#FFFFFF', '#D91023'], true); },

    bolivia: function () {
      return franjas(['#D52B1E', '#F9E300', '#007A33']) + marca(W / 2, H / 2, 4.6, '#6B5A1E');
    },

    chile: function () {
      return '<rect width="' + W + '" height="' + (H / 2) + '" fill="#FFFFFF"/>' +
        '<rect y="' + (H / 2) + '" width="' + W + '" height="' + (H / 2) + '" fill="#D52B1E"/>' +
        '<rect width="' + (W / 3) + '" height="' + (H / 2) + '" fill="#0039A6"/>' +
        estrella(W / 6, H / 4, 5.4, '#FFFFFF');
    },

    argentina: function () {
      return franjas(['#74ACDF', '#FFFFFF', '#74ACDF']) + sol(W / 2, H / 2, 5.2, '#F6B40E');
    },

    uruguay: function () {
      var s = '<rect width="' + W + '" height="' + H + '" fill="#FFFFFF"/>';
      // Nueve franjas: las cuatro azules son las pares, y solo a la derecha
      // del cantón en las cuatro primeras.
      for (var i = 1; i < 9; i += 2) {
        var y = H / 9 * i, alto = H / 9;
        var x = (i < 5) ? W * 0.4 : 0, ancho = (i < 5) ? W * 0.6 : W;
        s += '<rect x="' + x + '" y="' + y.toFixed(2) + '" width="' + ancho + '" height="' + alto.toFixed(2) + '" fill="#0038A8"/>';
      }
      s += sol(W * 0.2, H * 0.22, 5, '#FCD116');
      return s;
    },

    paraguay: function () {
      return franjas(['#D52B1E', '#FFFFFF', '#0038A8']) + marca(W / 2, H / 2, 4.2, '#1F6B3B');
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
        marca(W / 2, H / 2, 3.4, '#1F6B3B');
    },

    guatemala: function () {
      return franjas(['#4997D0', '#FFFFFF', '#4997D0'], true) + marca(W / 2, H / 2, 4.6, '#2E6B3E');
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

    'el-salvador': function () {
      return franjas(['#0F47AF', '#FFFFFF', '#0F47AF']) + marca(W / 2, H / 2, 4.2, '#8A6B1F');
    },

    nicaragua: function () {
      return franjas(['#0067C6', '#FFFFFF', '#0067C6']) + marca(W / 2, H / 2, 4.2, '#2E6B8E');
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
      return franjas(['#3E9A00', '#FFFFFF', '#E32118']) +
        '<path d="M0 0L' + (H * 0.5).toFixed(2) + ' ' + (H / 2) + 'L0 ' + H + 'Z" fill="#0073CE"/>' +
        marca(W * 0.62, H / 2, 4, '#5A6B2E');
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
