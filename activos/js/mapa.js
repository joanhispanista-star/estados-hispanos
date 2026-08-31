/* =========================================================================
   EL MAPAMUNDI HISPANO
   =========================================================================
   POR QUÉ NO SE USA UNA LIBRERÍA DE MAPAS
   Leaflet, Mapbox o D3 traerían el mapa hecho, pero hay que bajarlos de un
   CDN y esta plataforma promete abrir con doble clic y sin internet. Además,
   un mapa político de terceros pinta las fronteras según su proveedor: en un
   sitio que habla del Esequibo, del Sáhara y de las Malvinas, eso no lo
   decide un tercero. Se dibuja aquí, con proyección equirectangular en SVG.

   POR QUÉ SOLO SE DIBUJAN LAS COSTAS DEL MUNDO HISPANO
   Porque son las únicas que se pueden trazar a mano con honradez. Fingir un
   planisferio completo con contornos inventados se nota y abarata todo el
   sitio. El resto del mundo queda en retícula: es una decisión de diseño
   —este mapa muestra NUESTRO mundo— y de paso es la verdad sobre lo que el
   archivo sabe dibujar.

   Los contornos son deliberadamente gruesos: a 1000 px de ancho, el detalle
   de una costa real sería ruido.
   ========================================================================= */

window.EH = window.EH || {};

EH.mapa = (function () {
  'use strict';

  /* Encuadre. Cabe desde Baja California hasta Filipinas, y desde el norte de
     España hasta la punta de la Antártida reclamada. */
  var VISTA = { lonMin: -125, lonMax: 140, latMax: 52, latMin: -70 };
  var ANCHO = 1000;
  var ALTO = Math.round(ANCHO * (VISTA.latMax - VISTA.latMin) / (VISTA.lonMax - VISTA.lonMin));

  function x(lon) { return (lon - VISTA.lonMin) / (VISTA.lonMax - VISTA.lonMin) * ANCHO; }
  function y(lat) { return (VISTA.latMax - lat) / (VISTA.latMax - VISTA.latMin) * ALTO; }

  function trazo(puntos) {
    return 'M' + puntos.map(function (p) { return x(p[0]).toFixed(1) + ' ' + y(p[1]).toFixed(1); }).join('L') + 'Z';
  }

  /* ---------------------------------------------------------------------
     CONTORNOS  [longitud, latitud]
     --------------------------------------------------------------------- */
  var TIERRAS = {

    suramerica: [
      [-81, -4], [-80.5, 1], [-78, 8], [-75, 10.5], [-71, 12.5], [-66, 11], [-62, 10.5],
      [-60, 8], [-56, 6], [-52, 5], [-50, 0], [-44, -2.5], [-38, -5], [-35, -8], [-37, -12],
      [-39, -18], [-41, -22], [-48, -25.5], [-53, -33], [-57, -35], [-62, -39], [-65, -45],
      [-68, -50], [-68, -55], [-74, -52], [-75, -47], [-73, -42], [-73, -37], [-71, -30],
      [-70, -23], [-71, -18], [-77, -12], [-81, -6]
    ],

    centroamericaYMexico: [
      [-78, 8], [-80, 9], [-83, 10], [-85, 11], [-87, 13], [-90, 14], [-92, 15], [-95, 16],
      [-98, 16.5], [-101, 17], [-104, 19], [-106, 22], [-109, 23], [-112, 27], [-114, 29],
      [-117, 32], [-115, 32], [-111, 31], [-107, 32], [-103, 29], [-100, 26], [-97, 26],
      [-95, 19], [-92, 19], [-90, 21], [-87, 21.5], [-87, 18], [-89, 16], [-88, 15.5],
      [-84, 15], [-83, 12], [-82, 9], [-79, 9]
    ],

    /* Las Antillas hispanas, cada una por separado: en el Caribe una silueta
       continua sería un error grosero y muy visible. */
    cuba: [[-84.9, 21.9], [-81, 23.2], [-77, 23], [-74.2, 20.3], [-77.5, 19.9], [-80, 21.5], [-83, 22]],
    laEspanola: [[-74.5, 19.9], [-71, 19.9], [-68.3, 19], [-68.4, 18.2], [-71.6, 17.8], [-74.4, 18.4]],
    puertoRico: [[-67.3, 18.5], [-65.6, 18.5], [-65.6, 17.9], [-67.2, 17.9]],

    /* Norteamérica. Está aquí por un motivo concreto: sin ella, el nodo de la
       Hispanidad en Estados Unidos —sesenta y siete millones de personas—
       flotaba en el vacío como si no perteneciera a ningún sitio. Los puntos
       del norte se salen del encuadre a propósito: el SVG los recorta solo, y
       un borde recortado se lee como un mapa cortado, que es la verdad,
       mientras que un borde plano dibujado a mano se lee como un error. */
    norteamerica: [
      [-117, 32], [-120, 34], [-122, 37], [-124, 40], [-124, 46], [-125, 49], [-130, 54],
      [-140, 60], [-110, 62], [-90, 62], [-75, 58], [-66, 48], [-70, 43], [-74, 40],
      [-76, 37], [-81, 31], [-80, 27], [-82, 25], [-84, 30], [-88, 30], [-94, 29],
      [-97, 26], [-100, 26], [-103, 29], [-106, 32], [-111, 31], [-115, 32]
    ],

    /* Europa, con Iberia dentro y no aparte: España es una nación de este mapa
       y su nodo tiene que caer sobre tierra reconocible, no sobre una astilla. */
    europa: [
      [-9.5, 43.8], [-9, 38.7], [-7.5, 37.2], [-5.6, 36], [-2, 36.7], [0, 39], [3, 42],
      [3.3, 43.4], [5, 43.2], [7, 44], [9, 44.4], [12, 45], [13.5, 45.6], [15, 44.5],
      [18, 42.5], [20, 40], [23, 38], [26, 40], [29, 41], [30, 45], [34, 46], [40, 48],
      [45, 55], [30, 60], [20, 60], [10, 58], [4, 52], [-2, 52], [-6, 50], [-9.5, 48]
    ],

    /* África entera. La versión anterior solo dibujaba el saliente occidental
       y quedaba como una mancha sin identificar. Con el continente completo,
       el Sáhara Occidental y Guinea Ecuatorial se sitúan de un vistazo. */
    africa: [
      [-6, 36], [-9, 33], [-13, 28], [-17, 21], [-17, 15], [-16, 12], [-13, 8.5],
      [-8, 5], [-3, 5], [2, 6], [6, 4], [9.5, 4], [9.5, 0], [12, -5], [13, -9],
      [12, -16], [15, -23], [18, -29], [20, -34.5], [25, -34], [30, -31], [33, -26],
      [35, -22], [40, -16], [40, -11], [39, -7], [42, -1], [43, 4], [51, 11], [45, 11],
      [43, 13], [40, 15], [38, 18], [35, 22], [34, 28], [32, 31], [25, 32], [20, 32],
      [15, 32], [10, 34], [3, 37], [-2, 36]
    ],

    filipinas: [
      [120.9, 18.5], [122, 17], [122.5, 14], [124, 13], [122, 11], [125.5, 9.8],
      [126.5, 7], [125.5, 5.6], [122, 7], [120, 5.5], [119.8, 8], [121.5, 10.5],
      [120.5, 13.5], [119.8, 16]
    ],

    /* Punta de la península antártica: aparece porque el Gran Plan habla del
       sector reclamado. No se dibuja el continente entero: a esta latitud la
       proyección lo deformaría hasta la caricatura. */
    antartida: [[-70, -63], [-60, -63.5], [-57, -63], [-58, -65], [-62, -67], [-68, -68], [-73, -70], [-75, -70], [-75, -66]]
  };

  /* ---------------------------------------------------------------------
     ARCOS
     La unión no es una lista: se ve. Cada arco es una curva entre dos
     naciones, combada hacia arriba, como una ruta de vuelo.
     --------------------------------------------------------------------- */
  function arco(a, b) {
    var x1 = x(a.lon), y1 = y(a.lat), x2 = x(b.lon), y2 = y(b.lat);
    var cx = (x1 + x2) / 2;
    var cy = (y1 + y2) / 2 - Math.abs(x2 - x1) * 0.16 - 8;
    return '<path class="eh-mapa__lazo" d="M' + x1.toFixed(1) + ' ' + y1.toFixed(1) +
      'Q' + cx.toFixed(1) + ' ' + cy.toFixed(1) + ' ' + x2.toFixed(1) + ' ' + y2.toFixed(1) + '"/>';
  }

  /* El radio del nodo crece con la raíz de la población, no con la población.
     Con escala lineal, México sería un disco enorme y Uruguay un punto
     invisible: el mapa contaría que solo importan los grandes, que es
     exactamente lo contrario del mensaje. */
  function radio(poblacion) {
    var p = Math.max(Number(poblacion) || 0, 100000);
    return Math.min(11, Math.max(3.2, Math.sqrt(p / 1000000) * 1.5));
  }

  return {

    ANCHO: ANCHO,
    ALTO: ALTO,
    proyectar: function (lon, lat) { return { x: x(lon), y: y(lat) }; },

    /* Pinta el mapa dentro de un contenedor.
       opciones: { etiquetas, arcos, alPulsar, destacar } */
    pintar: function (contenedor, naciones, opciones) {
      opciones = opciones || {};
      if (!contenedor) return;

      var retic = '';
      for (var lon = -120; lon <= 140; lon += 20) {
        retic += '<path class="eh-mapa__rejilla" d="M' + x(lon).toFixed(1) + ' 0V' + ALTO + '"/>';
      }
      for (var lat = 40; lat >= -60; lat -= 20) {
        retic += '<path class="eh-mapa__rejilla" d="M0 ' + y(lat).toFixed(1) + 'H' + ANCHO + '"/>';
      }
      // El ecuador, algo más marcado: casi la mitad de las naciones hispanas
      // están a menos de quince grados de él y eso se ve de un vistazo.
      retic += '<path d="M0 ' + y(0).toFixed(1) + 'H' + ANCHO + '" stroke="rgba(217,164,65,.13)" stroke-width=".8" stroke-dasharray="4 6" fill="none"/>';

      var tierra = Object.keys(TIERRAS).map(function (k) {
        return '<path class="eh-mapa__tierra" d="' + trazo(TIERRAS[k]) + '"/>';
      }).join('');

      /* Los arcos salen de España hacia América y de México hacia el sur y
         hacia Filipinas: son las rutas históricas reales de la lengua, no
         una telaraña decorativa de todos contra todos. */
      var lazos = '';
      if (opciones.arcos !== false) {
        var por = {};
        naciones.forEach(function (n) { por[n.id] = n; });
        [
          ['espana', 'mexico'], ['espana', 'colombia'], ['espana', 'argentina'],
          ['espana', 'guinea-ecuatorial'], ['espana', 'sahara-occidental'],
          ['mexico', 'filipinas'], ['mexico', 'guatemala'], ['mexico', 'cuba'],
          ['colombia', 'peru'], ['colombia', 'venezuela'], ['peru', 'chile'],
          ['argentina', 'chile'], ['argentina', 'uruguay'],
          ['cuba', 'republica-dominicana'], ['cuba', 'puerto-rico'],
          ['colombia', 'estados-unidos-hispano'], ['mexico', 'estados-unidos-hispano']
        ].forEach(function (par) {
          if (por[par[0]] && por[par[1]]) lazos += arco(por[par[0]], por[par[1]]);
        });
      }

      var nodos = naciones.map(function (n) {
        var r = radio(n.poblacion);
        var destacado = opciones.destacar === n.id ? ' on' : '';
        return '<g class="eh-mapa__nodo ' + EH.escapar(n.estatus) + destacado + '" data-id="' + EH.escapar(n.id) + '" ' +
          'tabindex="0" role="button" aria-label="' + EH.escapar(n.nombre) + '">' +
          '<circle class="halo" cx="' + x(n.lon).toFixed(1) + '" cy="' + y(n.lat).toFixed(1) + '" r="' + (r + 5).toFixed(1) + '"/>' +
          '<circle class="punto" cx="' + x(n.lon).toFixed(1) + '" cy="' + y(n.lat).toFixed(1) + '" r="' + r.toFixed(1) + '"/>' +
          '</g>';
      }).join('');

      var etiquetas = '';
      if (opciones.etiquetas) {
        etiquetas = naciones.map(function (n) {
          return '<text class="eh-mapa__etiqueta" x="' + (x(n.lon) + radio(n.poblacion) + 3).toFixed(1) +
            '" y="' + (y(n.lat) + 2).toFixed(1) + '">' + EH.escapar(n.nombre) + '</text>';
        }).join('');
      }

      contenedor.innerHTML =
        '<svg viewBox="0 0 ' + ANCHO + ' ' + ALTO + '" role="img" ' +
        'aria-label="Mapa del mundo hispano con ' + naciones.length + ' naciones y territorios">' +
        retic + tierra + lazos + nodos + etiquetas +
        '</svg>' +
        '<div class="eh-mapa__leyenda">' +
          '<span><i class="eh-mapa__punto" style="background:#d9a441"></i> Estado soberano</span>' +
          '<span><i class="eh-mapa__punto" style="background:#c98a1e"></i> Territorio</span>' +
          '<span><i class="eh-mapa__punto" style="background:#d1213c"></i> Disputado</span>' +
          '<span><i class="eh-mapa__punto" style="background:#3a6ea5"></i> Herencia y diáspora</span>' +
          '<span>El tamaño del punto es la población</span>' +
        '</div>';

      /* Pulsar y teclado. El foco por teclado no es un adorno: sin él, el mapa
         entero es invisible para quien no usa ratón. */
      contenedor.querySelectorAll('.eh-mapa__nodo').forEach(function (g) {
        function abrir() {
          var n = naciones.filter(function (z) { return z.id === g.getAttribute('data-id'); })[0];
          if (!n) return;
          contenedor.querySelectorAll('.eh-mapa__nodo').forEach(function (o) { o.classList.remove('on'); });
          g.classList.add('on');
          if (opciones.alPulsar) opciones.alPulsar(n, g);
        }
        g.addEventListener('click', abrir);
        g.addEventListener('keydown', function (e) {
          if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); abrir(); }
        });
      });
    },

    /* La ficha flotante que sale al tocar una nación. */
    ficha: function (contenedor, nacion, nodo) {
      var vieja = contenedor.querySelector('.eh-mapa__ficha');
      if (vieja) vieja.remove();

      var caja = document.createElement('div');
      caja.className = 'eh-mapa__ficha';
      caja.innerHTML =
        '<button class="eh-mapa__cerrar" type="button" aria-label="Cerrar">×</button>' +
        '<h4>' + EH.escapar(nacion.bandera || '') + ' ' + EH.escapar(nacion.nombre) + '</h4>' +
        '<div class="met">' +
          '<span>' + EH.poblacion(nacion.poblacion) + ' habitantes</span>' +
          '<span>' + EH.escapar(nacion.capital) + '</span>' +
        '</div>' +
        '<p>' + EH.escapar((nacion.orgullo && nacion.orgullo[0]) || nacion.resumen || '') + '</p>' +
        '<a class="eh-boton eh-boton--p eh-boton--oro" href="' + EH.BASE + 'naciones.html#' +
          EH.escapar(nacion.id) + '">Ver la ficha completa</a>';

      // Se coloca junto al nodo, y el CSS la ancla abajo en pantallas
      // estrechas para que no se salga por un lado.
      var caja1 = contenedor.getBoundingClientRect();
      var caja2 = nodo.getBoundingClientRect();
      caja.style.left = Math.min(Math.max(caja2.left - caja1.left + 14, 8), Math.max(8, caja1.width - 310)) + 'px';
      caja.style.top = Math.max(caja2.top - caja1.top - 10, 8) + 'px';

      contenedor.appendChild(caja);
      caja.querySelector('.eh-mapa__cerrar').addEventListener('click', function () { caja.remove(); });
    }
  };
})();
