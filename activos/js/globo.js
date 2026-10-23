/* =========================================================================
   EL GLOBO HISPANO
   =========================================================================
   QUÉ ES
   La Tierra, que se arrastra con el dedo y se amplía hasta ver los pueblos.
   Encima van capas: los veinticuatro, el mar que les corresponde, las ocho
   causas territoriales, las disputas de límites con su estado, los estados
   de Estados Unidos coloreados por su población hispana, las ciudades con su
   historia y una línea del tiempo.

   POR QUÉ CANVAS Y NO SVG
   El mapa plano (mapa.js) es SVG y así debe seguir: treinta polígonos quietos.
   Aquí hay 25.000 puntos que se vuelven a proyectar SESENTA VECES POR SEGUNDO
   mientras el dedo se mueve. En SVG son 25.000 nodos del DOM reescritos por
   fotograma: se arrastra a tirones en cualquier teléfono.

   POR QUÉ NO SE USA THREE.JS NI D3-GEO
   Hay que bajarlos de un CDN y esta plataforma promete abrir con doble clic y
   sin internet. La proyección ortográfica son ocho líneas de trigonometría.

   =========================================================================
   LA PARTE DIFÍCIL: QUÉ HACER CON LA MITAD QUE NO SE VE
   =========================================================================
   Media esfera está siempre de espaldas. Un país partido por el borde no se
   puede dibujar sin decidir algo, y las dos salidas ingenuas se ven feas:
   cerrar la figura deja una cuerda recta cruzando el globo, y dibujarlo todo
   igual proyecta el país reflejado sobre sí mismo.

   Lo que se hace aquí: cada punto de la cara oculta se EMPUJA hasta el canto
   del disco conservando su ángulo, y todo se recorta al disco. Así la parte
   oculta se aplasta contra el borde, que es lo que hace de verdad una
   silueta. Un país entero de espaldas no se dibuja: dejaría una astilla.

   =========================================================================
   LO QUE ESTE MAPA NO HACE, Y LO DICE EN PANTALLA
   =========================================================================
   - La línea del tiempo NO dibuja fronteras históricas. Pinta los territorios
     de hoy que en cada época estaban bajo gobierno hispano. Dibujar la
     frontera exacta de 1680 sería inventarla, y el panel de la época lo
     advierte con todas las letras.
   - El mar SÍ es el real (Marine Regions, mares.js), pero esos datos son de
     2023. Lo que pasó después —sentencias, tratados— no está en esa
     geometría: está en las fichas de disputa (disputas.js), con su fecha.
     La franja calculada de 200 millas solo se dibuja si mares.js no llega.
   - El color de una disputa dice en qué ESTADO está —abierta, ante un
     tribunal, resuelta—, no quién tiene razón. Entre dos naciones hispanas
     el movimiento no toma partido, y la ficha lo dice.
   - Lo único del mar que se dibuja calculado está rayado y lo avisa: el que
     hay frente a la Guayana Esequiba, que ninguna fuente traza.
   - El color de una causa territorial NO dice «esto es nuestro». Dice «esto
     está en disputa y el Gran Plan explica las dos posturas».

   DEPENDE DE: mundo.js, estados-eeuu.js, ciudades.js, causas.js, mares.js,
   disputas.js, contenido-mapa.js (los textos), banderas.js y mapa.js (la ficha de nación,
   que es la misma del mapa plano: una sola copia de ese cuadro).
   ========================================================================= */

window.EH = window.EH || {};

EH.globo = (function () {
  'use strict';

  var RAD = Math.PI / 180;
  var TAU = Math.PI * 2;

  /* 200 millas náuticas en radianes sobre la esfera. Es la anchura de la zona
     económica exclusiva: 370,4 km sobre un radio terrestre de 6.371 km. De
     aquí sale el grosor de la banda azul, y por eso la banda se estrecha sola
     cerca del canto del globo, como debe. */
  var MILLAS200 = 370.4 / 6371;

  /* El color dice el estatus, el mismo código que la leyenda del mapa plano:
     quien ya la leyó no tiene que aprenderla otra vez. */
  var COLOR = {
    soberano:   { r: '#d9a441', b: '#f6d79a' },
    territorio: { r: '#c98a1e', b: '#ecc274' },
    disputado:  { r: '#b51d33', b: '#f07d8f' },
    herencia:   { r: '#3a6ea5', b: '#8fc0e8' },
    diaspora:   { r: '#33608f', b: '#86b6e0' }
  };
  var AJENO = { r: '#32202a', b: '#4e333c' };
  var APAGADO = { r: '#241a20', b: '#3a2a31' };   /* fuera de la época elegida */

  /* La diáspora sefardí, por código ISO. NO es una alianza con ningún Estado:
     es el mapa de donde vive la otra lengua hispánica, el judeoespañol, que
     salió de Sefarad en 1492 y se habló cinco siglos en estas costas.
     Se marca por código y no por nombre porque «Turquía» o «Turquia» no es una
     llave fiable y un acento perdido borraría un país del mapa.
     El porqué de que sea esto y no otra cosa está en contenido-mapa.js. */
  var SEFARDI = ['TUR', 'GRC', 'BGR', 'ISR', 'MAR', 'MKD', 'BIH', 'SRB'];
  /* Estaban tambien Francia e Italia y se quitaron por dos razones. La buena:
     el judeoespanol no se hablo alli cinco siglos; hay comunidad sefardi, que
     es otra cosa, y mezclarlas desdibuja justo lo que la capa quiere ensenar.
     La que lo hizo evidente: Natural Earth mete la Guayana Francesa dentro de
     Francia, asi que marcar Francia pintaba de morado un trozo de Suramerica
     pegado al Esequibo. Un error de un solo codigo ISO, visible al instante. */

  /* --------------------------------------------------------------------
     PREPARAR (una sola vez por carga de página)
     --------------------------------------------------------------------
     De [lon,lat] a vector unitario (x,y,z). UNA VEZ, porque el seno y el
     coseno de una latitud no cambian nunca: lo que cambia al girar es la
     matriz, no el país. Sin esto serían 50.000 llamadas a Math.cos por
     fotograma y el globo iría a tirones en cualquier teléfono. */
  var paises = null, estados = null, causas = null, ciudades = null, RETICULA = null;
  var urbano = null, urbanoPedido = false;
  var mares = null;
  var disputas = null;
  var detalle = null, detallePedido = false;

  /* Las fronteras a 1:10 se piden la primera vez que alguien amplia por
     encima de x6, igual que las manchas urbanas y por las mismas razones:
     pesan 411 KB y por debajo de x6 ese detalle no se veria. */
  function pedirDetalle(alLlegar) {
    if (detallePedido) return;
    detallePedido = true;
    function preparar() {
      detalle = {};
      var d = EH.MUNDO_DETALLE || {};
      Object.keys(d).forEach(function (k) { detalle[k] = d[k].map(aPieza); });
      if (alLlegar) alLlegar();
    }
    if (window.EH.MUNDO_DETALLE) { preparar(); return; }
    EH.alCargarDetalle = preparar;
    var s = document.createElement('script');
    s.src = (EH.BASE || '') + 'activos/js/mundo-detalle.js';
    s.onerror = function () { detalle = {}; };   /* sin detalle, el mapa sigue con 1:50 */
    document.head.appendChild(s);
  }

  /* Los datos de Marine Regions vienen en ingles. Los rotulos se COMPONEN en
     espanol a partir del tipo de zona y de los Estados, en vez de traducir la
     frase inglesa: "Overlapping claim Falkland / Malvinas Islands: United
     Kingdom / Argentina" no se puede traducir bien palabra por palabra, y en
     un sitio que habla de soberania, un rotulo mal traducido es un rotulo que
     toma partido sin querer. */
  var SOBERANO_ES = {
    'Spain': 'España', 'Mexico': 'México', 'Guatemala': 'Guatemala', 'Honduras': 'Honduras',
    'El Salvador': 'El Salvador', 'Nicaragua': 'Nicaragua', 'Costa Rica': 'Costa Rica',
    'Panama': 'Panamá', 'Cuba': 'Cuba', 'Dominican Republic': 'República Dominicana',
    'Venezuela': 'Venezuela', 'Colombia': 'Colombia', 'Ecuador': 'Ecuador', 'Peru': 'Perú',
    'Chile': 'Chile', 'Argentina': 'Argentina', 'Uruguay': 'Uruguay',
    'Equatorial Guinea': 'Guinea Ecuatorial', 'Western Sahara': 'Sáhara Occidental',
    'Philippines': 'Filipinas', 'United Kingdom': 'Reino Unido', 'Guyana': 'Guyana',
    'United States': 'Estados Unidos', 'Belize': 'Belice', 'Morocco': 'Marruecos',
    'Brazil': 'Brasil', 'Haiti': 'Haití', 'Jamaica': 'Jamaica', 'France': 'Francia',
    'Portugal': 'Portugal', 'Gabon': 'Gabón', 'Sao Tome and Principe': 'Santo Tomé y Príncipe',
    'Netherlands': 'Países Bajos', 'Trinidad and Tobago': 'Trinidad y Tobago',
    'Bahamas': 'Bahamas', 'Malaysia': 'Malasia', 'China': 'China', 'Taiwan': 'Taiwán',
    'Vietnam': 'Vietnam', 'Dominica': 'Dominica', 'Cameroon': 'Camerún', 'Nigeria': 'Nigeria'
  };
  var TERRITORIO_ES = {
    'Falkland / Malvinas Islands': 'Islas Malvinas',
    'South Georgia and the South Sandwich Islands': 'Georgias del Sur y Sandwich del Sur',
    'Puerto Rico': 'Puerto Rico', 'Galapagos': 'Galápagos', 'Canary Islands': 'Canarias',
    'Easter Island': 'Isla de Pascua', 'San Andrés y Providencia': 'San Andrés y Providencia'
  };
  function es(n) { return SOBERANO_ES[n] || n || ''; }

  /* QUE MAR SE PINTA COMO NUESTRO. Antes se miraba si el Estado tenia nombre
     en espanol en la tabla de arriba, y la tabla tiene tambien a Guyana, al
     Reino Unido y a Brasil para poder rotular sus fichas: la zona de Guyana
     salia en azul como si fuera hispana. Ahora es una lista cerrada con los
     Estados de los veinticuatro, y nada mas. */
  var MAR_HISPANO = {
    'Spain': 1, 'Mexico': 1, 'Guatemala': 1, 'Honduras': 1, 'El Salvador': 1, 'Nicaragua': 1,
    'Costa Rica': 1, 'Panama': 1, 'Cuba': 1, 'Dominican Republic': 1, 'Venezuela': 1,
    'Colombia': 1, 'Ecuador': 1, 'Peru': 1, 'Chile': 1, 'Argentina': 1, 'Uruguay': 1,
    'Equatorial Guinea': 1, 'Philippines': 1
  };

  /* El mar de las Malvinas y el de las Georgias lo administra el Reino Unido
     y lo reclama Argentina. Marine Regions lo clasifica como zona britanica de
     200 millas, que es la descripcion de quien lo controla; en este mapa se
     dibuja como zona EN DISPUTA, que es la descripcion de su estado juridico.
     Las dos cosas son verdad, y el rotulo dice las dos. */
  var ZONAS_EN_DISPUTA = {
    'Falkland / Malvinas Islands': 'Lo administra el Reino Unido desde 1833 y lo reclama Argentina.',
    'South Georgia and the South Sandwich Islands': 'Lo administra el Reino Unido y lo reclama Argentina.'
  };
  /* EL COLOR DE UNA DISPUTA ES SU ESTADO, nunca un bando. Rojo: abierta.
     Naranja: la esta decidiendo un tribunal. Dorado: la decidio un tribunal
     (el mismo dorado de los limites por sentencia). Verde: la cerro un
     tratado. Violeta: regimen comun, el mismo de las zonas compartidas.
     Gris azulado: congelada, que es lo que hace el Tratado Antartico. */
  var ESTADO_DISPUTA = {
    'sin-resolver':            { t: 'Sin resolver',               c: '#ef5d73' },
    'pendiente-ante-tribunal': { t: 'Pendiente ante un tribunal', c: '#f29a4a' },
    'resuelta-por-tribunal':   { t: 'Resuelta por un tribunal',   c: '#f0c46b' },
    'resuelta-por-tratado':    { t: 'Resuelta por tratado',       c: '#8fd0a8' },
    'regimen-conjunto':        { t: 'Régimen común',              c: '#ac8fe6' },
    'congelada-por-tratado':   { t: 'Congelada por tratado',      c: '#9fb4cc' },
    /* Un acuerdo firmado que aun no rige (Republica Dominicana con Aruba y
       Curazao). No es una disputa ni esta resuelta: pintarlo de verde diria
       que ya vale, y de rojo, que hay pleito. */
    'firmada-sin-vigor':       { t: 'Firmada, sin entrar en vigor', c: '#c9dc8e' }
  };
  var TIPO_DISPUTA = {
    'terrestre': 'En tierra', 'maritima': 'En el mar', 'terrestre-y-maritima': 'En tierra y en el mar'
  };
  function estadoDe(dd) { return ESTADO_DISPUTA[dd.d.estado] || ESTADO_DISPUTA['sin-resolver']; }

  /* De la llave de cada causa en el mapa al id de su ficha en EH.PLAN. Habia
     dos copias de este diccionario y las dos decian 'belice' cuando el Plan
     la llama 'belice-guatemala': la causa de Belice se abria sin texto y sin
     el argumento de la otra parte, que es justo lo que no puede faltar. */
  var CAUSA_PLAN = { malvinas: 'malvinas', georgias: 'malvinas', esequibo: 'esequibo',
                     gibraltar: 'gibraltar', belice: 'belice-guatemala', antartida: 'antartida' };

  /* Que zonas del mar se pintan. Lo usan el DIBUJO y el CLIC: si el clic
     probara tambien las que no se pintan, el mar de Brasil abriria una ficha
     sin que se viera nada debajo del dedo. */
  function zonaPintada(zz) {
    return zz.tipo === 'disputa' || zz.tipo === 'conjunto' || !!ZONAS_EN_DISPUTA[zz.ter] ||
           zz.a === 'Western Sahara' || !!MAR_HISPANO[zz.a] ||
           (zz.a === 'United States' && zz.ter === 'Puerto Rico');
  }

  var alLlegarUrbano = [];

  /* LAS MANCHAS URBANAS NO VIAJAN CON LA PAGINA.
     Son 370 KB y solo hacen falta al ampliar, asi que se piden la primera vez
     que alguien se acerca de verdad. Se traen con una etiqueta <script> y no
     con fetch porque bajo file:// —que es como promete abrir este sitio— un
     fetch a un archivo local esta bloqueado y un script no. */
  function pedirUrbano() {
    if (urbanoPedido) return;
    urbanoPedido = true;
    if (window.EH.URBANO) { prepararUrbano(); return; }
    EH.alCargarUrbano = prepararUrbano;
    var s = document.createElement('script');
    s.src = (EH.BASE || '') + 'activos/js/urbano.js';
    s.onerror = function () {
      /* Si no llega, el mapa sigue funcionando sin esa capa y lo dice; antes
         de esto, un archivo que no cargara dejaba una casilla marcada que no
         pintaba nada y ninguna explicacion. */
      urbano = [];
      alLlegarUrbano.forEach(function (f) { f(false); });
      alLlegarUrbano = [];
    };
    document.head.appendChild(s);
  }

  function prepararUrbano() {
    urbano = (EH.URBANO || []).map(aPieza);
    alLlegarUrbano.forEach(function (f) { f(true); });
    alLlegarUrbano = [];
  }

  function aPieza(plano) {
    var n = plano.length / 2, v = new Float64Array(n * 3), i, lon, lat, cl;
    for (i = 0; i < n; i++) {
      lon = plano[i * 2] * RAD; lat = plano[i * 2 + 1] * RAD;
      cl = Math.cos(lat);
      v[i * 3] = cl * Math.cos(lon);
      v[i * 3 + 1] = cl * Math.sin(lon);
      v[i * 3 + 2] = Math.sin(lat);
    }
    return { v: v, n: n, s: new Float32Array(n * 2), ll: plano, x0: 0, x1: 0, y0: 0, y1: 0 };
  }

  function anillo(lon0, lon1, lat, paso) {
    /* Un arco de paralelo, muestreado. Hace falta para las cuñas antárticas:
       de un meridiano a otro por la línea de los 60 grados sur hay que ir por
       el ARCO, no por la recta, o la cuña sale con el techo hundido. */
    var p = [], g, d = lon1 >= lon0 ? (paso || 2) : -(paso || 2);
    for (g = lon0; d > 0 ? g <= lon1 : g >= lon1; g += d) { p.push(g); p.push(lat); }
    if (p[p.length - 2] !== lon1) { p.push(lon1); p.push(lat); }
    return p;
  }

  function preparar() {
    if (paises || !EH.MUNDO) return;

    paises = EH.MUNDO.map(function (p) {
      return {
        id: p.id, iso: p.c, nombre: p.n, hispano: !!p.h,
        sefardi: SEFARDI.indexOf(p.c) >= 0,
        piezas: p.p.map(aPieza)
      };
    });

    estados = (EH.ESTADOS_EEUU || []).map(function (e) {
      return { s: e.s, nombre: e.n, lat: e.lat, lon: e.lon, piezas: e.p.map(aPieza) };
    });

    causas = {};
    var cm = EH.CAUSAS_MAPA || {};
    Object.keys(cm).forEach(function (k) { causas[k] = cm[k].map(aPieza); });

    /* Las cuñas antárticas no vienen de ningún archivo de fronteras: son
       sectores de longitud. Se construyen aquí a partir de los grados que ya
       figuran verificados en EH.PLAN.notaAntartida. */
    if (EH.ANTARTIDA) {
      causas.__antartida = EH.ANTARTIDA.sectores.map(function (s) {
        var pl = EH.ANTARTIDA.paralelo;
        /* Hasta -89,5 y no hasta -90: en el polo exacto todos los meridianos
           son el mismo punto y el polígono se cierra sobre sí mismo. */
        return {
          id: s.id, titulo: s.titulo, km2: s.km2,
          pieza: aPieza(anillo(s.lonA, s.lonB, pl, 1.5).concat(anillo(s.lonB, s.lonA, -89.5, 1.5)))
        };
      });
    }

    ciudades = (EH.CIUDADES || []).map(function (c) {
      var lon = c[0] * RAD, lat = c[1] * RAD, cl = Math.cos(lat);
      return {
        x: cl * Math.cos(lon), y: cl * Math.sin(lon), z: Math.sin(lat),
        lon: c[0], lat: c[1], rango: c[2], pob: c[3], nombre: c[4], pais: c[5]
      };
    });

    marcarCostas();

    if (EH.MARES) {
      mares = {
        zonas: EH.MARES.zonas.map(function (z) {
          return { n: z.n, tipo: z.tipo, a: z.a, b: z.b, c: z.c, ter: z.ter, km2: z.km2,
                   piezas: z.p.map(aPieza) };
        }),
        lineas: EH.MARES.lineas.map(function (l) {
          return { n: l.n, c: l.c, t: l.t, a: l.a, b: l.b, f: l.f, piezas: l.p.map(aPieza) };
        })
      };
    }

    /* Las disputas: el rombo va en su coordenada; "zona" es el area en tierra
       (Natural Earth) y "mar" el area calculada, en las pocas que la tienen. */
    if (EH.DISPUTAS && EH.DISPUTAS.lista) {
      disputas = EH.DISPUTAS.lista.map(function (d) {
        var lo = d.lon * RAD, la = d.lat * RAD, cl = Math.cos(la);
        return {
          d: d, x: cl * Math.cos(lo), y: cl * Math.sin(lo), z: Math.sin(la),
          zona: (d.zona || []).map(aPieza),
          mar: d.mar ? d.mar.piezas.map(aPieza) : []
        };
      });
    }

    var lineas = [], lon, lat, p;
    for (lon = -180; lon < 180; lon += 30) {
      p = [];
      for (lat = -90; lat <= 90; lat += 3) { p.push(lon); p.push(lat); }
      lineas.push(aPieza(p));
    }
    for (lat = -60; lat <= 60; lat += 30) lineas.push(aPieza(anillo(-180, 180, lat, 3)));
    RETICULA = lineas;
  }

  /* ---------------------------------------------------------------------
     QUE TROZO DEL CONTORNO ES COSTA
     ---------------------------------------------------------------------
     POR QUE HACE FALTA
     La banda azul del mar se dibuja como un trazo muy grueso sobre el
     contorno del pais. Trazando el contorno ENTERO, la banda aparecia tambien
     alrededor de las fronteras de TIERRA, y eso producia dos disparates que se
     veian a simple vista: el mar de Uruguay y el de Argentina se metian
     doscientas millas dentro de Brasil, y BOLIVIA Y PARAGUAY, que no tienen
     mar, salian rodeados de oceano.

     COMO SE DISTINGUE
     Un vertice es frontera de tierra si OTRO pais tiene un vertice casi en el
     mismo sitio. Natural Earth deriva las fronteras de una topologia comun, asi
     que dos paises vecinos comparten practicamente los mismos puntos a lo largo
     de su linde; en mar abierto no hay nadie al lado. Lo que no case con nadie,
     es costa.

     POR QUE SE CALCULA AQUI Y NO VIENE EN UN ARCHIVO
     Porque tiene que salir EXACTAMENTE de la misma geometria que se dibuja. Si
     las costas vinieran de otro archivo, cualquier cambio de simplificacion
     dejaria la banda desplazada de la orilla. Con una rejilla de busqueda son
     unas decenas de milisegundos una sola vez.

     LO QUE SIGUE SIN SER EXACTO, Y EL ROTULO LO DICE
     Donde una costa termina en una frontera, la banda se corta en seco (de ahi
     el remate cuadrado, no redondo). La frontera maritima real entre dos
     vecinos no es perpendicular a la orilla, asi que ahi sigue siendo una
     aproximacion. Pero se acaba a la altura del limite, que es lo que antes no
     pasaba. */
  var EPS_BORDE = 0.14;          /* grados; ~15 km */
  /* 200 millas nauticas en grados de LATITUD: 370,4 km sobre los 111,1 km que
     mide un grado. En longitud hay que dividir por el coseno de la latitud. */
  var GRADOS200 = 370.4 / 111.1;
  /* Las causas cuyo MAR tambien esta en disputa, y no solo la tierra. Las
     Malvinas, por la zona de pesca que el Reino Unido licencia desde 1987; y
     la Guayana Esequiba, porque frente a su costa esta el bloque donde se
     encontro el petroleo: ahi el mar es casi todo el asunto. */
  var MAR_EN_DISPUTA = ['malvinas', 'georgias', 'esequibo'];
  var CELDA = 0.5;

  /* Calcula el borde de las 200 millas de una pieza que ya tiene marcada su
     costa. Se saco a su propia funcion para poder aplicarlo tambien a las
     Malvinas y a la Guayana Esequiba, que no son paises de la lista pero si
     tienen mar, y en disputa. */
  function calcularBorde(pieza) {
    var ll = pieza.ll, n = pieza.n, k;
    /* Hacia donde es "fuera" lo decide por donde da la vuelta el anillo: si el
       area con signo es positiva gira en sentido antihorario y fuera queda a
       la derecha de la marcha. Suponerlo seria apostar a como viene ordenada
       la fuente. */
    var area = 0;
    for (k = 0; k < n; k++) {
      var k2 = (k + 1) % n;
      area += ll[k * 2] * ll[k2 * 2 + 1] - ll[k2 * 2] * ll[k * 2 + 1];
    }
    var fuera = area > 0 ? 1 : -1;
    var off = new Float64Array(n * 3);
    /* La direccion de la costa se toma en una VENTANA ANCHA, no entre el
       vertice anterior y el siguiente. Con la ventana corta, cada entrante
       giraba la normal de golpe y el limite salia con picos y lazos: en el
       Caribe parecia una marana. */
    var VENT = 4;
    for (k = 0; k < n; k++) {
      var a0 = (k - VENT + n * 2) % n, a1 = (k + VENT) % n;
      var la0 = ll[k * 2 + 1];
      var cosla = Math.max(Math.cos(la0 * RAD), 0.08);   /* tope cerca del polo */
      var tx = (ll[a1 * 2] - ll[a0 * 2]) * cosla;
      var ty = ll[a1 * 2 + 1] - ll[a0 * 2 + 1];
      var tl = Math.sqrt(tx * tx + ty * ty) || 1;
      var nx = (ty / tl) * fuera, ny = (-tx / tl) * fuera;
      /* La longitud se divide por el coseno de la latitud: un grado de
         longitud se encoge segun se sube, y sin esto la banda de Chile saldria
         del triple de ancha que la de Colombia. */
      var lonO = ll[k * 2] + nx * GRADOS200 / cosla;
      var latO = Math.max(-89.5, Math.min(89.5, la0 + ny * GRADOS200));
      var lr = latO * RAD, cl2 = Math.cos(lr), lo2 = lonO * RAD;
      off[k * 3] = cl2 * Math.cos(lo2);
      off[k * 3 + 1] = cl2 * Math.sin(lo2);
      off[k * 3 + 2] = Math.sin(lr);
    }
    pieza.off = off;
    pieza.so = new Float32Array(n * 2);
  }

  function marcarCostas() {
    var rejilla = {}, costera = {}, i, j, k, c, pieza, ll, n;

    function meter(malla, lon, lat, dueno) {
      var g = Math.floor(lon / CELDA) + ',' + Math.floor(lat / CELDA);
      (malla[g] || (malla[g] = [])).push(lon, lat, dueno);
    }

    function hayCerca(malla, lon, lat, eps, excepto) {
      var gx = Math.floor(lon / CELDA), gy = Math.floor(lat / CELDA);
      for (var dx = -1; dx <= 1; dx++) {
        for (var dy = -1; dy <= 1; dy++) {
          c = malla[(gx + dx) + ',' + (gy + dy)];
          if (!c) continue;
          for (var q = 0; q < c.length; q += 3) {
            if (excepto !== undefined && c[q + 2] === excepto) continue;
            if (Math.abs(c[q] - lon) < eps && Math.abs(c[q + 1] - lat) < eps) return true;
          }
        }
      }
      return false;
    }

    /* Primera pasada: todos los vertices de todos los paises. */
    for (i = 0; i < paises.length; i++) {
      for (j = 0; j < paises[i].piezas.length; j++) {
        ll = paises[i].piezas[j].ll;
        for (k = 0; k < ll.length; k += 2) meter(rejilla, ll[k], ll[k + 1], i);
      }
    }

    /* Segunda: que trozo del contorno de cada pais es COSTA.
       Un vertice es frontera de tierra si OTRO pais tiene un vertice casi en
       el mismo sitio: Natural Earth deriva las fronteras de una topologia
       comun, asi que dos vecinos comparten practicamente los mismos puntos a
       lo largo de su linde. En mar abierto no hay nadie al lado.
       Se hace para TODOS los paises, no solo los hispanos, porque la costa
       ajena hace falta despues: es lo que permite saber que trozo de la
       Guayana Esequiba da al Atlantico y cual es frontera con Guyana. */
    for (i = 0; i < paises.length; i++) {
      for (j = 0; j < paises[i].piezas.length; j++) {
        pieza = paises[i].piezas[j];
        ll = pieza.ll; n = pieza.n;
        var costa = new Uint8Array(n);
        for (k = 0; k < n; k++) {
          costa[k] = hayCerca(rejilla, ll[k * 2], ll[k * 2 + 1], EPS_BORDE, i) ? 0 : 1;
          if (costa[k]) meter(costera, ll[k * 2], ll[k * 2 + 1], i);
        }
        pieza.costa = costa;
      }
    }

    /* Tercera: el borde de las 200 millas, solo para quien lo va a dibujar. */
    for (i = 0; i < paises.length; i++) {
      if (!paises[i].hispano) continue;
      for (j = 0; j < paises[i].piezas.length; j++) calcularBorde(paises[i].piezas[j]);
    }

    /* Cuarta: el mar de las causas que lo tienen.
       LAS MALVINAS y la GUAYANA ESEQUIBA no son paises de la lista, pero su
       mar es parte de la disputa y en el Esequibo es casi todo el asunto: ahi
       esta el bloque donde se encontro petroleo. Aqui la regla cambia: un
       vertice de la causa es COSTA si esta cerca de un vertice que ya se sabe
       costero de algun pais. En las Malvinas eso vale para todo su contorno,
       porque son islas; en el Esequibo solo para su borde atlantico, que es el
       unico trozo que coincide con la costa de Guyana. El resto de su
       perimetro es frontera de tierra y no genera mar.
       El margen es mayor que el de las fronteras porque estas dos geometrias
       vienen de la capa de areas en disputa, a 1:10 millones, y los paises a
       1:50: las mismas costas, dibujadas con distinto detalle. */
    MAR_EN_DISPUTA.forEach(function (clave) {
      var grupo = causas[clave];
      if (!grupo) return;
      for (var g = 0; g < grupo.length; g++) {
        var pz = grupo[g], l2 = pz.ll, m = pz.n, u, hay = 0;
        var cst = new Uint8Array(m);
        for (u = 0; u < m; u++) {
          cst[u] = hayCerca(costera, l2[u * 2], l2[u * 2 + 1], 0.25) ? 1 : 0;
          hay += cst[u];
        }
        if (!hay) continue;
        pz.costa = cst;
        calcularBorde(pz);
      }
    });
  }

  function mezclar(a, b, t) {
    /* Interpolación de color en RGB. Para una rampa secuencial de un solo tono
       a otro es suficiente; no hace falta pasar por otro espacio de color. */
    t = Math.max(0, Math.min(1, t));
    var r = Math.round(a[0] + (b[0] - a[0]) * t),
        g = Math.round(a[1] + (b[1] - a[1]) * t),
        z = Math.round(a[2] + (b[2] - a[2]) * t);
    return 'rgb(' + r + ',' + g + ',' + z + ')';
  }
  var RAMPA_A = [30, 46, 66], RAMPA_B = [240, 196, 107];

  /* --------------------------------------------------------------------
     UNA INSTANCIA DE GLOBO
     -------------------------------------------------------------------- */
  function crear(contenedor, naciones, opciones) {
    opciones = opciones || {};
    preparar();

    var CONT = EH.MAPA_CONTENIDO || {};
    var FICHAS_CIUDAD = CONT.ciudades || {};
    var DATOS_ESTADO = CONT.estadosEEUU || {};
    var EPOCAS = CONT.epocas || [];
    var FICHAS_CAUSA = CONT.causas || {};

    var porId = {};
    naciones.forEach(function (n) { porId[n.id] = n; });

    /* Las ciudades con ficha van PRIMERO en la lista de dibujo, y aparecen
       antes al ampliar. Sin esto, Cartagena de Indias —la ciudad que mas
       historia tiene en este mapa— no salia: Barranquilla esta a noventa
       kilometros, es mas grande, y le ganaba el sitio a la etiqueta. La ciudad
       por la que existe media Sala de Honor desaparecia por un codazo.
       El rango efectivo de una ciudad con ficha se topa en 3, asi que sale
       desde un aumento medio aunque sea un pueblo. */
    var ciudadesOrden = ciudades.slice();
    ciudadesOrden.forEach(function (c) {
      c._ficha = !!(CONT.ciudades || {})[clave(c)];
      c._rango = c._ficha ? Math.min(c.rango, 3) : c.rango;
    });
    ciudadesOrden.sort(function (a, b) {
      if (a._ficha !== b._ficha) return a._ficha ? -1 : 1;
      if (a._rango !== b._rango) return a._rango - b._rango;
      return b.pob - a.pob;
    });

    /* Mirando al Atlántico hispano: España arriba a la derecha y América a la
       izquierda. Es el único encuadre donde se ven las dos orillas a la vez,
       que es de lo que habla el movimiento. */
    var giroLon = -52, giroLat = 12, escala = 1;
    var ESCALA_MAX = 24, ESCALA_MIN = 1;

    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var girando = !reduce && opciones.girar !== false;
    var velocidad = 0, arrastrando = false, movido = false;
    var sobre = null, sobreCiudad = null, elegido = opciones.destacar || null;
    var animando = null, pendiente = false;
    var epoca = null;                      /* null = hoy */

    /* QUE MIDE EL COLOR DE LOS ESTADOS DE EE.UU.
       'poblacion' = el porcentaje de poblacion hispana segun el censo.
       'huella'    = cuanta historia espanola tiene el estado.
       Hacen falta las DOS porque no son lo mismo, y confundirlas lleva a
       discusiones falsas. Florida es el septimo estado por poblacion hispana
       —28,7%, un dato del censo que no se puede cambiar— y de los primeros por
       historia: la bautizo Ponce de Leon en 1513 y San Agustin, de 1565, es la
       ciudad de fundacion europea mas antigua habitada sin interrupcion del
       pais continental. Con una sola medida, el mapa parecia estar diciendo que
       Florida es poco hispana, y no es eso lo que decia: decia otra cosa. */
    var medidaEEUU = 'poblacion';

    var capas = {
      urbano: opciones.urbano !== false,
      miembros: opciones.miembros !== false,
      mar: opciones.mar !== false,
      causas: opciones.causas !== false,
      disputas: opciones.disputas !== false,
      estados: opciones.estados !== false,
      ciudades: opciones.ciudades !== false,
      sefardi: opciones.sefardi !== false
    };

    /* EL PANEL DE DETALLE
       Se pidio expresamente que al pulsar un pais o un sitio historico el mapa
       NO desapareciera. Antes la ficha llevaba un enlace ("Ver la ficha
       completa") que cambiaba de pagina: el globo se perdia, y con el la
       posicion, el aumento y la epoca que uno hubiera puesto.
       Ahora la informacion completa sale en un panel AL LADO, y el globo se
       recoloca para seguir entero a la vista. En pantalla ancha el panel se
       acopla a la derecha; en un telefono, abajo. */
    var panelAbierto = false, seleccion = null, panelEl = null;

    /* CUANTA GENTE HAY INSCRITA Y DONDE.
       Sale de la misma capa de datos que el padron del panel, asi que funciona
       igual con la base en la nube que en modo demostracion; la diferencia la
       dice el rotulo, no el dibujo.
       SOLO POR NACION, nunca por ciudad. La afiliacion politica es dato
       sensible y en un pueblo con un solo inscrito, un punto en el mapa es un
       nombre. Si alguna vez se baja a ciudad, que sea una decision tomada a
       sabiendas y con un minimo de inscritos por punto, no un efecto
       secundario de haber podido. */
    var porNacion = null, totalMiembros = 0, miembrosListos = false;
    if (EH.datos && EH.datos.estadisticas) {
      EH.datos.estadisticas().then(function (s) {
        porNacion = (s && s.porNacion) || {};
        totalMiembros = Object.keys(porNacion).reduce(function (a, k) { return a + porNacion[k]; }, 0);
        miembrosListos = true;
        repintar();
        sincronizarMiembros();
      }).catch(function () { miembrosListos = true; porNacion = {}; sincronizarMiembros(); });
    }

    function sitioPanel() {
      if (!panelAbierto) return { w: 0, h: 0 };
      if (An >= 760) return { w: Math.min(380, Math.round(An * 0.42)), h: 0 };
      return { w: 0, h: Math.min(Math.round(Al * 0.56), 420) };
    }

    var lienzo = document.createElement('canvas');
    lienzo.className = 'eh-globo__lienzo';
    lienzo.setAttribute('role', 'img');
    lienzo.setAttribute('aria-label',
      'Globo terráqueo giratorio con las ' + naciones.length + ' naciones y territorios de la Hispanidad resaltados. ' +
      'Flechas para girar; más y menos para acercar.');
    var ctx = lienzo.getContext('2d');
    var An = 0, Al = 0, cx = 0, cy = 0, R = 0, dpr = 1;

    function medir() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      An = contenedor.clientWidth || 640;
      /* Cuadrado, con techo: en un monitor ancho un globo de 1.200 px de alto
         obliga a desplazar la página para ver la portada entera. */
      Al = Math.min(An, 620);
      lienzo.width = Math.round(An * dpr);
      lienzo.height = Math.round(Al * dpr);
      lienzo.style.width = An + 'px';
      lienzo.style.height = Al + 'px';
      /* QUIEN DECIDE DONDE SE ACOPLA EL PANEL
         Lo decide el JavaScript, mirando el ancho del CONTENEDOR, y se lo
         comunica al CSS con una clase. Antes el CSS lo decidia por su cuenta
         con una media query sobre el ancho de la VENTANA, y no son lo mismo:
         con la ventana a 790 px el contenedor medía 710, asi que el CSS
         acoplaba el panel al costado mientras el lienzo dejaba el hueco
         abajo. El panel tapaba el globo y abajo quedaba una franja vacia. */
      contenedor.classList.toggle('eh-globo--lateral', An >= 760);

      /* El globo se centra en el hueco QUE QUEDA, no en el lienzo entero: con
         el panel abierto, centrarlo en el lienzo lo dejaria medio tapado. */
      var sp = sitioPanel();
      cx = (An - sp.w) / 2;
      cy = (Al - sp.h) / 2;
      R = Math.min(An - sp.w, Al - sp.h) * 0.455;
    }

    /* ---------- proyección ---------- */
    var mat = new Float64Array(9);
    function matriz() {
      var a = giroLon * RAD, b = giroLat * RAD;
      var ca = Math.cos(a), sa = Math.sin(a), cb = Math.cos(b), sb = Math.sin(b);
      /* fila 0 = profundidad hacia quien mira, fila 1 = derecha, fila 2 = arriba */
      mat[0] = ca * cb;  mat[1] = sa * cb;  mat[2] = sb;
      mat[3] = -sa;      mat[4] = ca;       mat[5] = 0;
      mat[6] = -ca * sb; mat[7] = -sa * sb; mat[8] = cb;
    }

    /* Devuelve 0 si la pieza está entera de espaldas (no se dibuja), 1 si está
       de cara pero fuera del lienzo (tampoco), 2 si hay que dibujarla.
       El descarte por caja es lo que permite ampliar 24 veces sin que baje de
       60 fotogramas: a esa escala, nueve de cada diez países están fuera. */
    function proyectar(pieza) {
      var v = pieza.v, s = pieza.s, n = pieza.n, r = R * escala, vistos = 0;
      var m0 = mat[0], m1 = mat[1], m2 = mat[2], m3 = mat[3], m4 = mat[4],
          m6 = mat[6], m7 = mat[7], m8 = mat[8];
      var x0 = 1e9, x1 = -1e9, y0 = 1e9, y1 = -1e9;
      for (var i = 0; i < n; i++) {
        var x = v[i * 3], y = v[i * 3 + 1], z = v[i * 3 + 2];
        var p = m0 * x + m1 * y + m2 * z;
        var d = m3 * x + m4 * y;
        var a = m6 * x + m7 * y + m8 * z;
        if (p >= 0) {
          vistos++;
        } else {
          var mg = Math.sqrt(d * d + a * a);
          if (mg < 1e-9) { d = 0; a = 1; mg = 1; }    /* el punto antipodal exacto */
          d /= mg; a /= mg;
        }
        var sx = cx + r * d, sy = cy - r * a;
        s[i * 2] = sx; s[i * 2 + 1] = sy;
        if (sx < x0) x0 = sx;
        if (sx > x1) x1 = sx;
        if (sy < y0) y0 = sy;
        if (sy > y1) y1 = sy;
      }
      pieza.x0 = x0; pieza.x1 = x1; pieza.y0 = y0; pieza.y1 = y1;
      if (!vistos) return 0;
      var m = 40;        /* margen: un trazo grueso asoma aunque la caja no */
      if (x1 < -m || x0 > An + m || y1 < -m || y0 > Al + m) return 1;
      return 2;
    }

    /* Proyecta el borde de las 200 millas con la misma regla que todo lo
       demas: lo que queda de espaldas se empuja al canto del disco. */
    function proyectarBorde(pieza) {
      var v = pieza.off, s = pieza.so, n = pieza.n, r = R * escala;
      for (var i = 0; i < n; i++) {
        var x = v[i * 3], y = v[i * 3 + 1], z = v[i * 3 + 2];
        var p = mat[0] * x + mat[1] * y + mat[2] * z;
        var d = mat[3] * x + mat[4] * y;
        var a = mat[6] * x + mat[7] * y + mat[8] * z;
        if (p < 0) {
          var mg = Math.sqrt(d * d + a * a) || 1;
          d /= mg; a /= mg;
        }
        s[i * 2] = cx + r * d;
        s[i * 2 + 1] = cy - r * a;
      }
    }

    /* Una LINEA no se proyecta como una figura. A una figura se le empujan
       los puntos ocultos al canto del disco para cerrarla bien; a una linea
       eso la arrastraria por el borde del globo. Aqui los puntos de espaldas
       cortan el trazo y se sigue al otro lado, como en la reticula. */
    /* Que contorno se usa para un pais: el de detalle si ya llego y estamos
       cerca, el del mundo si no. Lo usan el DIBUJO y el CLIC, y tienen que
       usar el mismo: si se dibujara el de detalle y se pulsara contra el del
       mundo, un clic junto a la costa caeria en el mar o en el pais vecino. */
    function piezasDe(ph) {
      if (escala >= 6 && detalle && detalle[ph.id]) return detalle[ph.id];
      return ph.piezas;
    }

    function trazarLinea(pieza) {
      var v = pieza.v, n = pieza.n, r = R * escala, roto = true, algo = false;
      for (var i = 0; i < n; i++) {
        var x = v[i * 3], y = v[i * 3 + 1], z = v[i * 3 + 2];
        if (mat[0] * x + mat[1] * y + mat[2] * z <= 0) { roto = true; continue; }
        var px = cx + r * (mat[3] * x + mat[4] * y);
        var py = cy - r * (mat[6] * x + mat[7] * y + mat[8] * z);
        if (roto) { ctx.moveTo(px, py); roto = false; } else ctx.lineTo(px, py);
        algo = true;
      }
      return algo;
    }

    function trazar(pieza) {
      var s = pieza.s, n = pieza.n;
      ctx.moveTo(s[0], s[1]);
      for (var i = 1; i < n; i++) ctx.lineTo(s[i * 2], s[i * 2 + 1]);
      ctx.closePath();
    }

    function trazarSi(grupo) {
      /* Traza todas las piezas visibles de un grupo. Devuelve si pintó algo,
         para no gastar un fill con el camino vacío. */
      var algo = false;
      for (var j = 0; j < grupo.length; j++) {
        if (proyectar(grupo[j]) === 2) { trazar(grupo[j]); algo = true; }
      }
      return algo;
    }

    function puntoEn(lon, lat) {
      var la = lat * RAD, lo = lon * RAD, cl = Math.cos(la);
      var x = cl * Math.cos(lo), y = cl * Math.sin(lo), z = Math.sin(la);
      var p = mat[0] * x + mat[1] * y + mat[2] * z;
      var d = mat[3] * x + mat[4] * y;
      var a = mat[6] * x + mat[7] * y + mat[8] * z;
      var r = R * escala;
      return { x: cx + r * d, y: cy - r * a, visible: p > 0 };
    }

    /* De la pantalla a la esfera. Hace falta para el doble clic: hay que saber
       sobre qué trozo de mundo se ha pulsado para centrarlo ahí. */
    function esferaEn(px, py) {
      var r = R * escala;
      var d = (px - cx) / r, a = -(py - cy) / r;
      var q = 1 - d * d - a * a;
      if (q < 0) return null;                        /* fuera del disco */
      var p = Math.sqrt(q);
      var x = mat[0] * p + mat[3] * d + mat[6] * a;
      var y = mat[1] * p + mat[4] * d + mat[7] * a;
      var z = mat[2] * p + mat[5] * d + mat[8] * a;
      return { lat: Math.asin(Math.max(-1, Math.min(1, z))) / RAD, lon: Math.atan2(y, x) / RAD };
    }

    /* ---------- qué naciones toca pintar en la época elegida ---------- */
    function vivaEn(id) {
      if (epoca === null || !EPOCAS[epoca]) return true;
      var lista = EPOCAS[epoca].territorios;
      return !lista || lista.indexOf(id) >= 0;
    }

    /* ---------- umbral de ciudades ----------
       Cuántas ciudades se enseñan según el aumento. Sin esta escalera, al
       abrir el mapa saldrían 1.855 nombres amontonados y no se leería ninguno;
       y al ampliar del todo no saldría ninguno, que es peor. */
    function umbralCiudades() {
      if (escala < 1.7) return -1;                    /* ninguna */
      return Math.min(10, Math.round(Math.log(escala) / Math.LN2 * 2) - 1);
    }

    /* ---------- dibujo ---------- */
    function pintar() {
      pendiente = false;
      matriz();
      var r = R * escala, i, j;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, An, Al);

      /* El halo va FUERA del recorte: dentro, el propio recorte se lo comería
         y el globo quedaría pegado al fondo como una pegatina. */
      var halo = ctx.createRadialGradient(cx, cy, r * 0.97, cx, cy, r * 1.14);
      halo.addColorStop(0, 'rgba(217,164,65,.22)');
      halo.addColorStop(1, 'rgba(217,164,65,0)');
      ctx.fillStyle = halo;
      ctx.beginPath();
      ctx.arc(cx, cy, r * 1.14, 0, TAU);
      ctx.fill();

      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, TAU);
      ctx.clip();

      /* Océano. El degradado no está centrado: la luz entra por arriba a la
         izquierda y eso es lo único que hace que un círculo parezca una bola. */
      var mar = ctx.createRadialGradient(cx - r * 0.32, cy - r * 0.38, r * 0.08, cx, cy, r * 1.08);
      mar.addColorStop(0, '#24455f');
      mar.addColorStop(0.55, '#15283a');
      mar.addColorStop(1, '#070d15');
      ctx.fillStyle = mar;
      ctx.fillRect(0, 0, An, Al);

      /* --- retícula ---
         Aquí NO se empujan al canto los puntos ocultos: son líneas abiertas,
         así que basta con cortar el trazo y seguir al otro lado. Empujarlas
         dejaría arcos falsos pegados al borde.
         No es adorno: sin ninguna línea, una esfera lisa que gira parece una
         mancha que late. La retícula es lo que hace ver que ESTÁ GIRANDO. */
      ctx.strokeStyle = 'rgba(217,164,65,.09)';
      ctx.lineWidth = 0.6;
      ctx.beginPath();
      for (i = 0; i < RETICULA.length; i++) {
        var l = RETICULA[i], roto = true;
        for (j = 0; j < l.n; j++) {
          var lx = l.v[j * 3], ly = l.v[j * 3 + 1], lz = l.v[j * 3 + 2];
          if (mat[0] * lx + mat[1] * ly + mat[2] * lz <= 0) { roto = true; continue; }
          var px = cx + r * (mat[3] * lx + mat[4] * ly);
          var py = cy - r * (mat[6] * lx + mat[7] * ly + mat[8] * lz);
          if (roto) { ctx.moveTo(px, py); roto = false; } else ctx.lineTo(px, py);
        }
      }
      ctx.stroke();

      /* --- el mar que nos corresponde ---
         Se dibuja ANTES que la tierra y como un trazo muy grueso sobre la
         costa: la mitad que cae tierra adentro la tapa luego el país. El
         grosor es 200 millas náuticas a la escala del globo, así que se
         estrecha solo cerca del canto, igual que lo haría de verdad. */
      /* Ni el mar de 200 millas ni las causas se dibujan cuando hay una epoca
         elegida, y no es un capricho: la zona economica exclusiva nace con la
         Convencion del Mar de 1982, y el pleito del Esequibo o el de Belice son
         del siglo XX. Pintarlos sobre un mapa de 1511 seria un anacronismo, y
         de los que se ven: alguien diria "en 1511 ya se reclamaba eso" y
         tendria razon en reirse. */
      var hoy = (epoca === null);
      if (capas.mar && hoy && mares) {
        /* --- EL MAR REAL ---
           Zonas y limites de Marine Regions, cada uno con su estado. Se dibuja
           antes que la tierra: los poligonos de zona llegan hasta la linea de
           base y la tierra los tapa donde haga falta.
           Las zonas de los veinticuatro van en azul; las que estan en disputa,
           en rojo; las de regimen comun, en violeta. Ningun otro Estado lleva
           relleno: el mar ajeno no se pinta, igual que la tierra ajena va en
           penumbra. */
        var ii, jj, zz;
        var tono = Math.max(0.08, Math.min(0.22, 0.30 - escala * 0.016));
        for (ii = 0; ii < mares.zonas.length; ii++) {
          zz = mares.zonas[ii];
          /* El Sahara Occidental va en rojo, no en azul: es una de las
             veinticuatro, pero su mar esta tan en disputa como su tierra —
             Marruecos legislo sobre esas aguas en 2020—, y pintarlo como
             zona economica asentada seria dar por resuelto lo que no lo esta. */
          var disputada = zz.tipo === 'disputa' || ZONAS_EN_DISPUTA[zz.ter] || zz.a === 'Western Sahara';
          if (!zonaPintada(zz)) continue;
          ctx.beginPath();
          var hayZ = false;
          for (jj = 0; jj < zz.piezas.length; jj++) {
            if (proyectar(zz.piezas[jj]) === 2) { trazar(zz.piezas[jj]); hayZ = true; }
          }
          if (!hayZ) continue;
          var resalta = sobreZona === zz;
          if (disputada) ctx.fillStyle = 'rgba(181,29,51,' + (tono * (resalta ? 2.4 : 1.25)).toFixed(3) + ')';
          else if (zz.tipo === 'conjunto') ctx.fillStyle = 'rgba(140,110,200,' + (tono * (resalta ? 2.4 : 1.3)).toFixed(3) + ')';
          else ctx.fillStyle = 'rgba(93,168,214,' + (tono * (resalta ? 2.2 : 1)).toFixed(3) + ')';
          ctx.fill();
        }

        /* --- los limites, por su estado juridico ---
           Un trazo distinto para cada cosa que puede ser un limite. Es lo que
           contesta "esto quien lo decidio": un tratado, una sentencia, una
           linea media a falta de acuerdo, o nadie todavia. */
        var ESTILO = {
          acordado: { d: [],      w: 0.9, c: 'rgba(170,215,240,.62)' },
          tribunal: { d: [],      w: 1.3, c: 'rgba(240,196,107,.85)' },
          media:    { d: [4, 3],  w: 0.8, c: 'rgba(170,215,240,.48)' },
          exterior: { d: [1.5, 3], w: 0.8, c: 'rgba(126,196,236,.50)' },
          conjunto: { d: [],      w: 1.1, c: 'rgba(170,140,230,.80)' },
          disputa:  { d: [5, 3],  w: 1.4, c: 'rgba(240,125,143,.92)' }
        };
        var apagado = Math.max(0.15, Math.min(1, 1.9 - escala * 0.17));
        ['exterior', 'media', 'acordado', 'conjunto', 'tribunal', 'disputa'].forEach(function (clase) {
          var e = ESTILO[clase];
          ctx.beginPath();
          var hayL = false;
          for (var a = 0; a < mares.lineas.length; a++) {
            var ln = mares.lineas[a];
            if (ln.c !== clase) continue;
            for (var b = 0; b < ln.piezas.length; b++) if (trazarLinea(ln.piezas[b])) hayL = true;
          }
          if (!hayL) return;
          ctx.save();
          /* Las lineas en disputa y las de sentencia NO se apagan al acercar:
             son las que se viene a mirar. Las demas si, para que al entrar en
             una ciudad no la cruce media docena de rayas. */
          ctx.globalAlpha = (clase === 'disputa' || clase === 'tribunal') ? 1 : apagado;
          ctx.setLineDash(e.d);
          ctx.lineWidth = e.w;
          ctx.strokeStyle = e.c;
          ctx.stroke();
          ctx.restore();
        });
      } else if (capas.mar && hoy) {
        ctx.save();
        ctx.lineJoin = 'round';
        /* Remate CUADRADO, no redondo: donde la costa acaba en una frontera, un
           remate redondo abria un abanico de doscientas millas dentro del
           vecino. Con el cuadrado la banda se corta a la altura del limite. */
        ctx.lineCap = 'butt';
        ctx.lineWidth = Math.max(2, r * MILLAS200 * 2);
        ctx.strokeStyle = 'rgba(93,168,214,' + Math.max(0.07, Math.min(0.22, 0.30 - escala * 0.016)).toFixed(3) + ')';
        ctx.beginPath();
        for (i = 0; i < paises.length; i++) {
          var pm = paises[i];
          if (!pm.hispano || !porId[pm.id] || !vivaEn(pm.id)) continue;
          /* La diaspora no lleva banda: Estados Unidos esta en este mapa por
             sus sesenta y ocho millones de hispanos, no como Estado hispano, y
             pintarle doscientas millas de "mar hispano" alrededor seria una
             reclamacion que nadie ha hecho y un titular regalado al contrario.
             La zona economica exclusiva es un derecho del Estado ribereño, y el
             Estado ribereno ahi es Estados Unidos. */
          if (porId[pm.id].estatus === 'diaspora') continue;
          for (j = 0; j < pm.piezas.length; j++) {
            var pz = pm.piezas[j];
            if (proyectar(pz) !== 2 || !pz.costa) continue;
            /* Tramos seguidos de costa. El anillo esta cerrado, asi que se
               recorre dando una vuelta entera y se corta donde empieza la
               tierra. */
            var s = pz.s, nn = pz.n, abierto = false, c0;
            for (var u = 0; u <= nn; u++) {
              var idx = u % nn;
              if (pz.costa[idx]) {
                c0 = idx * 2;
                if (!abierto) { ctx.moveTo(s[c0], s[c0 + 1]); abierto = true; }
                else ctx.lineTo(s[c0], s[c0 + 1]);
              } else {
                abierto = false;
              }
            }
          }
        }
        ctx.stroke();

        /* --- el canto de las 200 millas, y las lineas laterales ---
           Esto es lo que convierte la mancha en una delimitacion. El trazo
           discontinuo marca el limite exterior; las dos lineas cortas que
           salen de los extremos de cada tramo de costa cierran la zona y
           ensenan donde empieza la del vecino.
           El pais sobre el que esta el cursor se dibuja con linea continua y
           mas clara: asi se lee de un vistazo CUAL es su mar. */
        for (i = 0; i < paises.length; i++) {
          var pb = paises[i];
          if (!pb.hispano || !porId[pb.id] || !vivaEn(pb.id)) continue;
          if (porId[pb.id].estatus === 'diaspora') continue;
          var suyo = (sobre === pb.id || elegido === pb.id);
          ctx.beginPath();
          for (j = 0; j < pb.piezas.length; j++) {
            var pc = pb.piezas[j];
            if (!pc.costa || proyectar(pc) !== 2) continue;
            proyectarBorde(pc);
            /* Un tramo de costa de dos o tres puntos es un islote: su limite
               sale como un garabato y no aporta nada. Se cuenta antes y se
               salta. El relleno si los dibuja, asi que el islote sigue
               teniendo su mar; lo que no tiene es canto. */
            var sc = pc.s, so = pc.so, nn = pc.n, abierto = false, ini = -1, ult = -1;
            var largo = 0;
            for (var w = 0; w < nn; w++) largo += pc.costa[w];
            if (largo < 6) continue;
            for (var u = 0; u <= nn; u++) {
              var ix = u % nn;
              if (pc.costa[ix] && u < nn + 1) {
                if (!abierto) { ctx.moveTo(so[ix * 2], so[ix * 2 + 1]); abierto = true; ini = ix; }
                else ctx.lineTo(so[ix * 2], so[ix * 2 + 1]);
                ult = ix;
              } else if (abierto) {
                /* Cerrar el tramo: del borde a la costa por los dos extremos. */
                ctx.lineTo(sc[ult * 2], sc[ult * 2 + 1]);
                ctx.moveTo(sc[ini * 2], sc[ini * 2 + 1]);
                ctx.lineTo(so[ini * 2], so[ini * 2 + 1]);
                abierto = false;
              }
            }
          }
          /* Los limites se apagan al acercar. Son la respuesta a "de quien es
             este mar", y esa pregunta se hace mirando el continente; cuando
             uno esta dentro de una ciudad, media docena de circulos
             discontinuos cruzandose encima solo estorban. El del pais senalado
             no se apaga: ese se esta mirando a proposito. */
          var tenue = suyo ? 1 : Math.max(0.12, Math.min(1, 1.9 - escala * 0.17));
          ctx.setLineDash(suyo ? [] : [6, 4]);
          ctx.lineWidth = suyo ? 1.6 : 0.9;
          ctx.strokeStyle = suyo ? 'rgba(150,215,255,.95)' : 'rgba(126,196,236,' + (0.5 * tenue).toFixed(3) + ')';
          ctx.stroke();
        }
        /* --- el mar en disputa ---
           Mismo dibujo que el de los veinte, pero en rojo: la banda dice que
           hay mar, el color dice que no esta resuelto de quien es. Va DESPUES
           de los demas para que se vea encima donde se solapan, que en el
           Esequibo es justo lo que pasa con la zona que reclama Venezuela. */
        var hayDisputa = false;
        ctx.save();
        ctx.lineJoin = 'round';
        ctx.lineCap = 'butt';
        ctx.lineWidth = Math.max(2, r * MILLAS200 * 2);
        ctx.strokeStyle = 'rgba(181,29,51,.20)';
        ctx.beginPath();
        MAR_EN_DISPUTA.forEach(function (clave) {
          var grupo = causas[clave];
          if (!grupo) return;
          for (var g = 0; g < grupo.length; g++) {
            var pz = grupo[g];
            if (!pz.costa || proyectar(pz) !== 2) continue;
            hayDisputa = true;
            var sq = pz.s, mm = pz.n, ab = false, c1;
            for (var w = 0; w <= mm; w++) {
              var ii = w % mm;
              if (pz.costa[ii]) {
                c1 = ii * 2;
                if (!ab) { ctx.moveTo(sq[c1], sq[c1 + 1]); ab = true; }
                else ctx.lineTo(sq[c1], sq[c1 + 1]);
              } else ab = false;
            }
          }
        });
        ctx.stroke();
        ctx.restore();

        if (hayDisputa) {
          ctx.save();
          ctx.setLineDash([5, 4]);
          ctx.lineWidth = 1.1;
          ctx.strokeStyle = 'rgba(240,125,143,' + Math.max(0.2, Math.min(0.8, 1.6 - escala * 0.14)).toFixed(3) + ')';
          ctx.beginPath();
          MAR_EN_DISPUTA.forEach(function (clave) {
            var grupo = causas[clave];
            if (!grupo) return;
            for (var g = 0; g < grupo.length; g++) {
              var pz = grupo[g];
              if (!pz.costa || !pz.off || proyectar(pz) !== 2) continue;
              proyectarBorde(pz);
              var sc2 = pz.s, so2 = pz.so, mm2 = pz.n, ab2 = false, i0 = -1, iu = -1;
              var largo2 = 0;
              for (var w2 = 0; w2 < mm2; w2++) largo2 += pz.costa[w2];
              if (largo2 < 4) continue;
              for (var u2 = 0; u2 <= mm2; u2++) {
                var ix2 = u2 % mm2;
                if (pz.costa[ix2]) {
                  if (!ab2) { ctx.moveTo(so2[ix2 * 2], so2[ix2 * 2 + 1]); ab2 = true; i0 = ix2; }
                  else ctx.lineTo(so2[ix2 * 2], so2[ix2 * 2 + 1]);
                  iu = ix2;
                } else if (ab2) {
                  ctx.lineTo(sc2[iu * 2], sc2[iu * 2 + 1]);
                  ctx.moveTo(sc2[i0 * 2], sc2[i0 * 2 + 1]);
                  ctx.lineTo(so2[i0 * 2], so2[i0 * 2 + 1]);
                  ab2 = false;
                }
              }
            }
          });
          ctx.stroke();
          ctx.restore();
        }

        ctx.setLineDash([]);
        ctx.restore();
      }

      /* --- el mar en disputa que Marine Regions no trae ---
         Dos areas. La MEDIALUNA de Chile y Argentina va RELLENA: sus lados
         salen de coordenadas oficiales (Ley 27.557, CLPC 2016, Tratado de
         1984). El mar frente a la GUAYANA ESEQUIBA va RAYADO: Marine Regions
         se lo da entero a Guyana, que lo administra, y la linea que lo separa
         es un calculo de este mapa. Tiene que verse distinto de lo que viene
         de una fuente. */
      if (capas.disputas && hoy && disputas) {
        for (i = 0; i < disputas.length; i++) {
          var dm = disputas[i];
          if (!dm.mar.length) continue;
          ctx.beginPath();
          if (!trazarSi(dm.mar)) continue;
          var oficial = dm.d.mar && dm.d.mar.oficial;
          if (oficial) {
            ctx.save();
            ctx.globalAlpha = sobreDisputa === dm ? 0.6 : 0.38;
            ctx.fillStyle = estadoDe(dm).c;
            ctx.fill();
            ctx.restore();
          } else {
            ctx.fillStyle = rayado(estadoDe(dm).c, sobreDisputa === dm);
            ctx.fill();
          }
          ctx.save();
          ctx.setLineDash(oficial ? [] : [4, 3]);
          ctx.globalAlpha = 0.75;
          ctx.strokeStyle = estadoDe(dm).c;
          ctx.lineWidth = 1;
          ctx.stroke();
          ctx.restore();
        }
      }

      /* --- el mundo ajeno, en penumbra ---
         Todo en un solo trazo: son 155 países y pintarlos de uno en uno cuesta
         310 cambios de estado del contexto por fotograma. */
      ctx.beginPath();
      var hayAjeno = false;
      for (i = 0; i < paises.length; i++) {
        if (paises[i].hispano || (capas.sefardi && paises[i].sefardi)) continue;
        if (trazarSi(paises[i].piezas)) hayAjeno = true;
      }
      if (hayAjeno) {
        ctx.fillStyle = AJENO.r;
        ctx.fill();
        ctx.strokeStyle = AJENO.b;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }

      /* --- cuñas antárticas ---      /* Las cuñas van DESPUÉS del mundo ajeno, no antes. Dibujadas antes, la
         Antártida se pintaba encima y tapaba justo lo que la capa quiere
         enseñar: las cuñas solo asomaban sobre el mar. Las reclamaciones son
         sobre el hielo, así que tienen que verse sobre el hielo.
         Cada sector reclamado, y el solapamiento chileno-argentino encima en
         otro tono. Ese solapamiento ES el argumento del sitio: son 21 grados
         reclamados dos veces, el mismo hielo contado dos veces. Un mapa que
         los pintara de un solo color estaría repitiendo el bulo del 80%. */
      if (capas.causas && hoy && causas.__antartida) {
        for (i = 0; i < causas.__antartida.length; i++) {
          var sec = causas.__antartida[i];
          if (proyectar(sec.pieza) !== 2) continue;
          ctx.beginPath();
          trazar(sec.pieza);
          if (sec.id === 'britanico') {
            ctx.fillStyle = 'rgba(120,130,150,.13)';
          } else if (sec.id === 'solape') {
            ctx.fillStyle = 'rgba(217,164,65,.17)';
          } else {
            ctx.fillStyle = 'rgba(217,164,65,.12)';
          }
          ctx.fill();
          ctx.strokeStyle = 'rgba(217,164,65,.30)';
          ctx.lineWidth = 0.7;
          ctx.stroke();
        }
      }


      /* --- la huella sefardí ---
         Un tono propio, ni hispano ni ajeno. No marca una alianza con ningún
         Estado: marca dónde se habló el judeoespañol durante cinco siglos. */
      if (capas.sefardi) {
        ctx.beginPath();
        var haySef = false;
        for (i = 0; i < paises.length; i++) {
          if (paises[i].hispano || !paises[i].sefardi) continue;
          if (trazarSi(paises[i].piezas)) haySef = true;
        }
        if (haySef) {
          ctx.fillStyle = '#4a3a52';
          ctx.fill();
          ctx.strokeStyle = '#6d5578';
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }

      /* --- los nuestros, uno a uno porque cada uno lleva su color --- */
      for (i = 0; i < paises.length; i++) {
        var ph = paises[i];
        if (!ph.hispano) continue;
        var nac = porId[ph.id];
        if (!nac) continue;                  /* filtrado fuera por quien llama */
        var viva = vivaEn(ph.id);
        var col = viva ? (COLOR[nac.estatus] || COLOR.soberano) : APAGADO;
        var activo = viva && (sobre === ph.id || elegido === ph.id);

        ctx.beginPath();
        if (escala >= 6 && !detallePedido) pedirDetalle(repintar);
        if (!trazarSi(piezasDe(ph))) continue;
        ctx.fillStyle = activo ? col.b : col.r;
        ctx.fill();
        ctx.strokeStyle = activo ? '#fff6e6' : col.b;
        ctx.lineWidth = activo ? 1.6 : 0.8;
        ctx.stroke();
      }

      /* --- los estados de Estados Unidos ---
         Encima de la mancha de EE.UU., cada uno con su tono según su población
         hispana. Sin esta capa el mapa dice que Vermont es tan hispano como
         Nuevo México, y se equivoca por un factor de veinte. */
      if (estadosVisibles()) {
        for (i = 0; i < estados.length; i++) {
          var es = estados[i];
          var dat = DATOS_ESTADO[(es.s || '').toLowerCase()];
          ctx.beginPath();
          if (!trazarSi(es.piezas)) continue;
          var val = null, tope = 50;
          if (dat) {
            if (medidaEEUU === 'huella' && typeof dat.huella === 'number') { val = dat.huella; tope = 100; }
            else if (medidaEEUU === 'poblacion' && typeof dat.pct === 'number') { val = dat.pct; }
          }
          if (val !== null) {
            ctx.fillStyle = mezclar(RAMPA_A, RAMPA_B, val / tope);
          } else {
            /* Sin dato no se inventa un tono: se deja gris y la leyenda lo
               explica. Un degradado bonito con un número inventado debajo es
               exactamente lo que este sitio no hace. */
            ctx.fillStyle = '#2b2b33';
          }
          ctx.fill();
          ctx.strokeStyle = 'rgba(10,16,24,.55)';
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }

      /* --- las ocho causas --- */
      if (capas.causas && hoy) {
        ctx.save();
        ctx.setLineDash([5, 3]);
        Object.keys(causas).forEach(function (k) {
          if (k === '__antartida') return;
          ctx.beginPath();
          if (!trazarSi(causas[k])) return;
          ctx.fillStyle = 'rgba(181,29,51,.42)';
          ctx.fill();
          ctx.strokeStyle = '#f07d8f';
          ctx.lineWidth = 1.1;
          ctx.stroke();
        });
        ctx.restore();

        /* El litoral que Bolivia perdió en 1879 no es un área: es un tramo de
           costa. Se dibuja como tal. Rellenar un trozo de Chile sería
           reclamar territorio chileno, que no es lo que dice la causa. */
        if (EH.LITORAL_BOLIVIA) {
          var L = EH.LITORAL_BOLIVIA;
          var a1 = puntoEn(-70.4, L.latNorte), a2 = puntoEn(-70.4, L.latSur);
          if (a1.visible && a2.visible) {
            ctx.beginPath();
            ctx.moveTo(a1.x, a1.y);
            ctx.lineTo(a2.x, a2.y);
            ctx.strokeStyle = '#f07d8f';
            ctx.lineWidth = Math.max(2.5, r * 0.012);
            ctx.lineCap = 'round';
            ctx.stroke();
          }
        }
      }

      /* --- las areas en disputa, en tierra ---
         Las de Natural Earth que no son causas del Gran Plan: el Campo de
         Hielo Sur, el Rincon de Artigas, Olivenza, Guantanamo, Mbanie... Van
         ENCIMA de los paises porque estan dentro de ellos, y con el color de
         su estado: Mbanie sale dorada porque ya la decidio la Corte. */
      if (capas.disputas && hoy && disputas) {
        ctx.save();
        ctx.setLineDash([3, 2]);
        for (i = 0; i < disputas.length; i++) {
          var dz = disputas[i];
          if (!dz.zona.length) continue;
          ctx.beginPath();
          if (!trazarSi(dz.zona)) continue;
          ctx.fillStyle = estadoDe(dz).c;
          ctx.globalAlpha = sobreDisputa === dz ? 0.55 : 0.30;
          ctx.fill();
          ctx.globalAlpha = 0.95;
          ctx.strokeStyle = estadoDe(dz).c;
          ctx.lineWidth = 1;
          ctx.stroke();
          ctx.globalAlpha = 1;
        }
        ctx.restore();
      }

      /* --- un punto en cada capital ---
         No es decorativo: Puerto Rico, Guinea Ecuatorial y El Salvador son tan
         pequeños en una esfera de 600 píxeles que sin el punto no hay nada
         que pulsar. Al ampliar se encogen: ya se ve el país. */
      var rPunto = escala > 4 ? 1.8 : 2.6;
      naciones.forEach(function (n) {
        if (!vivaEn(n.id)) return;
        var q = puntoEn(n.lon, n.lat);
        if (!q.visible) return;
        var col = COLOR[n.estatus] || COLOR.soberano;
        var act = (sobre === n.id || elegido === n.id);
        ctx.beginPath();
        ctx.arc(q.x, q.y, act ? 4.6 : rPunto, 0, TAU);
        ctx.fillStyle = act ? '#fff6e6' : col.b;
        ctx.fill();
      });

      /* --- manchas urbanas ---
         Debajo de los puntos y de los nombres: es el suelo construido, no una
         etiqueta. Solo desde x4: por debajo de eso una ciudad entera mide dos
         pixeles y la mancha es un borron. */
      if (capas.urbano && escala >= 4) {
        if (!urbanoPedido) pedirUrbano();
        if (urbano && urbano.length) {
          ctx.beginPath();
          var hayU = false;
          for (i = 0; i < urbano.length; i++) {
            if (proyectar(urbano[i]) === 2) { trazar(urbano[i]); hayU = true; }
          }
          if (hayU) {
            ctx.fillStyle = 'rgba(255,241,214,.30)';
            ctx.fill();
          }
        }
      }

      /* --- ciudades --- */
      var puestas = [];
      var visibles = [];
      if (capas.ciudades) {
        var umbral = umbralCiudades();
        /* LAS CIUDADES CON FICHA SE VEN DESDE EL PRIMER MOMENTO, con su punto
           dorado, aunque todavia no quepa el nombre. Antes habia que ampliar
           tres veces y media para que apareciera la primera, asi que quien
           abria la portada no llegaba a enterarse de que cincuenta y cuatro
           ciudades tenian historia detras. Una funcion que hay que buscar es
           una funcion que no existe. */
        if (umbral >= 0 || capas.ciudades) {
          ctx.font = '500 11px ui-sans-serif,system-ui,sans-serif';
          ctx.textBaseline = 'middle';
          for (i = 0; i < ciudadesOrden.length; i++) {
            var cd = ciudadesOrden[i];
            /* Las doce mayores aglomeraciones se ven desde el primer
               momento, sin ampliar: es lo que contesta "donde esta la gente"
               antes de tocar nada. Su nombre espera a x1,6 como los demas. */
            var esGigante = cd.rango <= 1;
            if (!cd._ficha && !esGigante && (umbral < 0 || cd._rango > umbral)) continue;
            var p = mat[0] * cd.x + mat[1] * cd.y + mat[2] * cd.z;
            if (p <= 0.02) continue;             /* de espaldas o pegada al canto */
            var sx = cx + r * (mat[3] * cd.x + mat[4] * cd.y);
            var sy = cy - r * (mat[6] * cd.x + mat[7] * cd.y + mat[8] * cd.z);
            if (sx < -60 || sx > An + 60 || sy < -20 || sy > Al + 20) continue;

            var tieneFicha = cd._ficha;
            /* El nombre tarda un poco mas en salir que el punto: a la escala
               del mundo entero, cincuenta y cuatro rotulos se pisan unos a
               otros y no se lee ninguno. El punto solo, en cambio, cabe. */
            var conNombre = tieneFicha ? escala >= 1.9 : (esGigante ? escala >= 1.6 : true);
            var anchoT = conNombre ? ctx.measureText(cd.nombre).width : 0;
            var caja = conNombre ? [sx + 5, sy - 7, sx + 11 + anchoT, sy + 7]
                                 : [sx - 5, sy - 5, sx + 5, sy + 5];

            /* Reparto por codazos: la primera que llega se queda el sitio.
               Como la lista va ordenada por rango, las que ganan son siempre
               las mayores. Sin esto, al ampliar sale una maraña ilegible. */
            var choca = false;
            for (j = 0; j < puestas.length; j++) {
              var o = puestas[j];
              if (caja[0] < o[2] && caja[2] > o[0] && caja[1] < o[3] && caja[3] > o[1]) { choca = true; break; }
            }
            if (choca) continue;
            puestas.push(caja);
            cd._sx = sx; cd._sy = sy; cd._ancho = anchoT;
            visibles.push(cd);

            var destacada = sobreCiudad === cd;
            /* EL TAMANO DEL PUNTO ES LA GENTE QUE VIVE AHI.
               Antes todos los puntos median lo mismo y el mapa decia que Lima
               y un pueblo de ocho mil habitantes pesan igual. Es logaritmico y
               no lineal: con la poblacion en crudo, Ciudad de Mexico saldria
               con un punto de tres centimetros y a su lado no se veria nada
               mas. La poblacion viene en miles. */
            /* Y se atenua a vista de mundo. Con el tamano completo, los
               ciento setenta puntos de las ciudades con historia tapaban el
               mapa desde el primer momento: la informacion estaba, pero el
               mapa no se leia. Crece con el aumento. */
            var rp = Math.min(1.7 + Math.log(1 + cd.pob) / 1.55, 9) *
                     Math.min(1, 0.45 + escala * 0.2);
            ctx.beginPath();
            ctx.arc(sx, sy, destacada ? rp + 2 : rp, 0, TAU);
            ctx.fillStyle = tieneFicha ? 'rgba(240,196,107,.92)' : 'rgba(245,236,226,.52)';
            ctx.fill();
            ctx.strokeStyle = tieneFicha ? 'rgba(18,8,10,.85)' : 'rgba(18,8,10,.45)';
            ctx.lineWidth = tieneFicha ? 1.1 : 0.7;
            ctx.stroke();
            if (conNombre) {
              ctx.fillStyle = destacada ? '#fff6e6' : (tieneFicha ? '#f6d79a' : 'rgba(245,236,226,.78)');
              ctx.strokeStyle = 'rgba(7,13,21,.85)';
              ctx.lineWidth = 2.6;
              ctx.lineJoin = 'round';
              ctx.strokeText(cd.nombre, sx + 6, sy);   /* borde oscuro: si no, un
                                                          nombre sobre tierra clara
                                                          no se lee */
              ctx.fillText(cd.nombre, sx + 6, sy);
            }
          }
        }
      }
      /* La lista de lo que se puede pulsar se rehace CADA fotograma a partir
         de lo que acaba de dibujarse. Antes se filtraba por un campo que
         sobrevivia de fotogramas anteriores, asi que una ciudad que ya se
         habia salido de la pantalla seguia respondiendo al clic. */
      visiblesCiudad = visibles;

      /* --- las disputas: un rombo por cada una ---
         Rombo y no punto, para que no se confunda con una ciudad. Se dibujan
         todas, tambien las resueltas: saber que el Beagle se cerro en 1984 o
         el limite entre Peru y Chile en 2014 ensena tanto como saber cuales
         siguen abiertas. Van encima de las ciudades porque son menos y son
         a lo que se viene. */
      var vistasD = [];
      if (capas.disputas && hoy && disputas) {
        /* A vista de mundo el rombo se mide con el globo: en un telefono la
           esfera mide 340 pixeles y sesenta rombos de siete tapaban el mapa. */
        var lado = escala < 2 ? Math.max(2.4, Math.min(3.6, R / 80)) : 4.6;
        for (i = 0; i < disputas.length; i++) {
          var dd = disputas[i];
          if (mat[0] * dd.x + mat[1] * dd.y + mat[2] * dd.z <= 0.02) continue;
          var rx = cx + r * (mat[3] * dd.x + mat[4] * dd.y);
          var ry = cy - r * (mat[6] * dd.x + mat[7] * dd.y + mat[8] * dd.z);
          if (rx < -10 || rx > An + 10 || ry < -10 || ry > Al + 10) continue;
          var ld = sobreDisputa === dd ? lado + 2 : lado;
          ctx.beginPath();
          ctx.moveTo(rx, ry - ld);
          ctx.lineTo(rx + ld, ry);
          ctx.lineTo(rx, ry + ld);
          ctx.lineTo(rx - ld, ry);
          ctx.closePath();
          ctx.fillStyle = estadoDe(dd).c;
          ctx.fill();
          ctx.strokeStyle = 'rgba(10,6,8,.9)';
          ctx.lineWidth = 1.1;
          ctx.stroke();
          dd._sx = rx; dd._sy = ry;
          vistasD.push(dd);
        }
        /* EL NOMBRE, desde x2,6. En un telefono no hay "pasar por encima":
           sin nombre, un rombo no dice que es hasta que se toca. Se reparte
           el sitio con los nombres de las ciudades (puestas) con la misma
           regla de codazos: si choca, no sale, y el rombo sigue ahi. */
        if (escala >= 2.6) {
          ctx.font = '600 11px ui-sans-serif,system-ui,sans-serif';
          ctx.textBaseline = 'middle';
          ctx.lineJoin = 'round';
          for (i = 0; i < vistasD.length; i++) {
            var dn = vistasD[i], tn = dn.d.corto || dn.d.titulo;
            var wn = ctx.measureText(tn).width;
            var cn = [dn._sx + 7, dn._sy - 7, dn._sx + 13 + wn, dn._sy + 7];
            var chocaN = false;
            for (j = 0; j < puestas.length; j++) {
              var on = puestas[j];
              if (cn[0] < on[2] && cn[2] > on[0] && cn[1] < on[3] && cn[3] > on[1]) { chocaN = true; break; }
            }
            if (chocaN) continue;
            puestas.push(cn);
            ctx.strokeStyle = 'rgba(7,13,21,.9)';
            ctx.lineWidth = 3;
            ctx.strokeText(tn, dn._sx + 8, dn._sy);
            ctx.fillStyle = estadoDe(dn).c;
            ctx.fillText(tn, dn._sx + 8, dn._sy);
          }
        }
      }
      /* Igual que las ciudades: lo pulsable se rehace en cada fotograma con
         lo que se acaba de dibujar, para que un rombo que ya se fue de la
         pantalla no siga respondiendo. */
      visiblesDisputa = vistasD;

      /* --- los miembros ---
         Un circulo por nacion, del tamano de la gente que hay inscrita, y el
         numero dentro cuando cabe. Va encima de todo lo demas porque es lo
         unico del mapa que cambia solo: lo demas es geografia. */
      if (capas.miembros && miembrosListos && porNacion && totalMiembros > 0) {
        naciones.forEach(function (n) {
          var cuantos = porNacion[n.id] || 0;
          if (!cuantos || !vivaEn(n.id)) return;
          var q = puntoEn(n.lon, n.lat);
          if (!q.visible) return;
          var rr = Math.min(7 + Math.log(1 + cuantos) * 5.5, 38);
          ctx.beginPath();
          ctx.arc(q.x, q.y, rr, 0, TAU);
          ctx.fillStyle = 'rgba(217,164,65,.22)';
          ctx.fill();
          ctx.strokeStyle = 'rgba(240,196,107,.85)';
          ctx.lineWidth = 1.4;
          ctx.stroke();
          if (rr > 12) {
            ctx.font = '700 ' + Math.min(Math.round(rr * 0.62), 17) + 'px ui-sans-serif,system-ui,sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillStyle = '#fff6e6';
            ctx.fillText(String(cuantos), q.x, q.y);
            ctx.textAlign = 'left';
            ctx.textBaseline = 'alphabetic';
          }
        });
      }

      ctx.restore();

      /* El canto, al final y fuera del recorte: un trazo sobre el borde del
         recorte sale cortado a la mitad de su grosor. */
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, TAU);
      ctx.strokeStyle = 'rgba(240,196,107,.42)';
      ctx.lineWidth = 1.1;
      ctx.stroke();

      /* El nombre de lo que hay bajo el cursor. Va sobre el lienzo y no en un
         <div> para que no cambie el tamaño del contenedor al arrastrar. */
      var rot = null;
      if (sobreDisputa && capas.disputas && hoy && visiblesDisputa.indexOf(sobreDisputa) >= 0) {
        rot = { t: sobreDisputa.d.titulo + '  ·  ' + estadoDe(sobreDisputa).t,
                corto: (sobreDisputa.d.corto || sobreDisputa.d.titulo) + '  ·  ' + estadoDe(sobreDisputa).t,
                x: sobreDisputa._sx, y: sobreDisputa._sy };
      } else if (sobre && porId[sobre]) {
        var nd = porId[sobre], pq = puntoEn(nd.lon, nd.lat);
        if (pq.visible) rot = { t: nd.nombre, x: pq.x, y: pq.y };
      } else if (sobreEstado) {
        var de = DATOS_ESTADO[(sobreEstado.s || '').toLowerCase()];
        var pe = puntoEn(sobreEstado.lon, sobreEstado.lat);
        if (pe.visible) {
          var cola = '';
          if (de && medidaEEUU === 'huella' && typeof de.huella === 'number') {
            cola = '  ·  huella española ' + de.huella.toFixed(0) + '/100';
          } else if (de && typeof de.pct === 'number') {
            cola = '  ·  ' + de.pct.toFixed(1).replace('.', ',') + ' % hispano';
          }
          rot = { t: (de && de.nombre ? de.nombre : sobreEstado.nombre) + cola, x: pe.x, y: pe.y };
        }
      }
      if (rot) {
        ctx.font = '600 13px ui-sans-serif,system-ui,sans-serif';
        var w = ctx.measureText(rot.t).width;
        /* Un titulo largo no cabe en un telefono: salia cortado por la
           izquierda. Si no cabe, el nombre corto. */
        if (w > An - 24 && rot.corto) {
          rot.t = rot.corto;
          w = ctx.measureText(rot.t).width;
        }
        var tx = Math.min(Math.max(rot.x + 10, 4), An - w - 14);
        var ty = Math.min(Math.max(rot.y - 12, 18), Al - 6);
        ctx.fillStyle = 'rgba(10,6,8,.86)';
        /* Sin roundRect: Safari no lo tuvo hasta 2023 y aquí no hay
           transpilador que lo arregle. */
        ctx.fillRect(tx - 5, ty - 13, w + 10, 19);
        ctx.fillStyle = '#f6d79a';
        ctx.textBaseline = 'alphabetic';
        ctx.fillText(rot.t, tx, ty);
      }
    }

    var visiblesCiudad = [], sobreEstado = null, sobreZona = null;
    var visiblesDisputa = [], sobreDisputa = null;

    /* La trama rayada del mar calculado. Una por color, hecha una vez: crear
       un patron en cada fotograma son sesenta lienzos por segundo. */
    var rayados = {};
    function rayado(color, fuerte) {
      var k = color + (fuerte ? '+' : '');
      if (rayados[k]) return rayados[k];
      var c = document.createElement('canvas');
      c.width = c.height = 8;
      var g = c.getContext('2d');
      g.strokeStyle = color;
      g.globalAlpha = fuerte ? 0.8 : 0.5;
      g.lineWidth = 1.2;
      g.beginPath();
      g.moveTo(0, 8); g.lineTo(8, 0);
      g.moveTo(-2, 2); g.lineTo(2, -2);
      g.moveTo(6, 10); g.lineTo(10, 6);
      g.stroke();
      rayados[k] = ctx.createPattern(c, 'repeat');
      return rayados[k];
    }

    /* La llave con la que una ciudad busca su ficha: su propia coordenada.
       NO el nombre. Hay dos Granadas en el mapa (la de España y la de
       Nicaragua), dos Santiagos de peso (Chile y Cuba) y varias Córdobas y
       Méridas: con el nombre por llave, la ficha de una se abriría sobre la
       otra, y el error sería invisible hasta que alguien lo leyera.
       La coordenada es única por construcción, y el archivo de contenido
       guarda la llave calculada EXACTAMENTE igual, desde el mismo dato. */
    function clave(cd) { return cd.lon.toFixed(2) + ',' + cd.lat.toFixed(2); }

    function repintar() {
      if (pendiente) return;
      pendiente = true;
      requestAnimationFrame(pintar);
    }

    /* ---------- el latido ---------- */
    var enVista = true;
    if (window.IntersectionObserver) {
      new IntersectionObserver(function (e) { enVista = e[0].isIntersecting; }).observe(lienzo);
    }
    function latido(ahora) {
      if (animando) {
        if (!animando.t0) animando.t0 = ahora;
        var t = Math.min((ahora - animando.t0) / animando.ms, 1);
        var e = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
        giroLon = animando.lon0 + animando.dLon * e;
        giroLat = animando.lat0 + animando.dLat * e;
        escala = animando.esc0 + animando.dEsc * e;
        if (t >= 1) { animando = null; sincronizarMandos(); }
        pintar();
      } else if (arrastrando) {
        /* mientras se arrastra pinta el propio manejador del puntero */
      } else if (!enVista) {
        /* Fuera de la vista no se gira ni se pinta: en un telefono, el globo
           girando por debajo de la tira de ciudades gastaba bateria y le
           robaba fotogramas al desplazamiento de la pagina. */
      } else if (Math.abs(velocidad) > 0.004) {
        giroLon += velocidad;
        velocidad *= 0.955;                 /* frenada: el globo pesa */
        pintar();
      } else if (girando) {
        giroLon += 0.085 / escala;          /* ampliado, gira más despacio o marea */
        pintar();
      }
      requestAnimationFrame(latido);
    }

    /* ---------- a quién se ha pulsado ----------
       Prueba del rayo sobre los puntos YA PROYECTADOS, no con isPointInPath:
       la coordenada que espera isPointInPath depende de la transformación del
       contexto, y aquí hay un factor de densidad de píxeles puesto. Serían dos
       sistemas de coordenadas y un fallo que solo asoma en pantallas Retina. */
    function dentro(pieza, px, py) {
      /* Se vuelve a proyectar ANTES de preguntar. Una pieza de espaldas guarda
         sus puntos empujados al canto del disco, y si el antipoda del centro
         cae dentro de un pais, ese anillo empujado rodea el disco entero: con
         Indochina en el centro, pulsar Tailandia abria Peru. */
      if (proyectar(pieza) !== 2) return false;
      if (px < pieza.x0 || px > pieza.x1 || py < pieza.y0 || py > pieza.y1) return false;
      var s = pieza.s, n = pieza.n, d = false;
      for (var i = 0, j = n - 1; i < n; j = i++) {
        var xi = s[i * 2], yi = s[i * 2 + 1], xj = s[j * 2], yj = s[j * 2 + 1];
        if (((yi > py) !== (yj > py)) && (px < (xj - xi) * (py - yi) / (yj - yi) + xi)) d = !d;
      }
      return d;
    }

    function ciudadEn(px, py) {
      if (!capas.ciudades) return null;
      var mejor = null, mejorD = 144;
      for (var i = 0; i < visiblesCiudad.length; i++) {
        var c = visiblesCiudad[i];
        if (c._sx === undefined) continue;
        /* La etiqueta también vale como blanco: apuntar a un punto de tres
           píxeles con el dedo es imposible. Pero SOLO si hay etiqueta: a vista
           de mundo las ciudades salen sin nombre, a diez píxeles unas de
           otras, y con un blanco de doce píxeles cada una se tragaban el toque
           de Centroamérica y del Caribe entero. Sin nombre, seis píxeles. */
        var conNombre = (c._ancho || 0) > 0;
        if (conNombre && px >= c._sx - 7 && px <= c._sx + c._ancho + 8 && Math.abs(py - c._sy) < 9) return c;
        var d = (c._sx - px) * (c._sx - px) + (c._sy - py) * (c._sy - py);
        if (d < Math.min(mejorD, conNombre ? 144 : 36)) { mejorD = d; mejor = c; }
      }
      return mejor;
    }

    function quienEn(px, py) {
      var r = R * escala;
      if ((px - cx) * (px - cx) + (py - cy) * (py - cy) > r * r) return null;
      /* Primero los puntos de capital, con holgura: son el único asidero de
         los países que miden tres píxeles. Al ampliar deja de hacer falta y
         estorbaría, así que la holgura se cierra. */
      if (escala < 4) {
        var mejor = null, mejorD = 196;
        for (var k = 0; k < naciones.length; k++) {
          var n = naciones[k];
          if (!vivaEn(n.id)) continue;
          var q = puntoEn(n.lon, n.lat);
          if (!q.visible) continue;
          var d = (q.x - px) * (q.x - px) + (q.y - py) * (q.y - py);
          if (d < mejorD) { mejorD = d; mejor = n.id; }
        }
        if (mejor) return mejor;
      }
      for (var i = 0; i < paises.length; i++) {
        var p = paises[i];
        if (!p.hispano || !porId[p.id] || !vivaEn(p.id)) continue;
        if (p.id === 'estados-unidos-hispano' && estadosVisibles()) continue;
        var pz = piezasDe(p);
        for (var j = 0; j < pz.length; j++) {
          if (dentro(pz[j], px, py)) return p.id;
        }
      }
      return null;
    }

    function zonaEn(px, py) {
      if (!mares || !capas.mar || epoca !== null) return null;
      for (var i = 0; i < mares.zonas.length; i++) {
        var z = mares.zonas[i];
        if (!zonaPintada(z)) continue;
        for (var j = 0; j < z.piezas.length; j++) {
          if (dentro(z.piezas[j], px, py)) return z;
        }
      }
      return null;
    }

    function rotuloZona(z) {
      if (z.a === 'Western Sahara' && z.tipo !== 'disputa') {
        return { t: 'Mar del Sáhara Occidental', sub: 'Zona en disputa',
                 nota: 'La controla y la ha legislado Marruecos; la ONU sigue listando el Sáhara como territorio no autónomo.' };
      }
      var disp = ZONAS_EN_DISPUTA[z.ter];
      if (disp) return { t: 'Mar de ' + (TERRITORIO_ES[z.ter] || z.ter), sub: 'Zona en disputa', nota: disp };
      if (z.tipo === 'disputa') {
        var partes = [es(z.a), es(z.b), es(z.c)].filter(Boolean).join(', ');
        return { t: 'Zona reclamada a la vez', sub: 'En disputa: ' + partes,
                 nota: 'Más de un Estado la reclama. Hasta que no se resuelva, no es de ninguno.' };
      }
      if (z.tipo === 'conjunto') {
        return { t: 'Zona de régimen común', sub: [es(z.a), es(z.b)].filter(Boolean).join(' y '),
                 nota: 'La administran los dos Estados juntos, por tratado.' };
      }
      var ter = z.ter && z.ter !== z.a ? (TERRITORIO_ES[z.ter] || z.ter) : '';
      return { t: 'Zona económica exclusiva', sub: es(z.a) + (ter ? ' · ' + ter : ''),
               nota: 'Derechos exclusivos sobre la pesca, el petróleo y el fondo marino hasta 200 millas. ' +
                     'Son derechos económicos, no soberanía.' };
    }

    function abrirZona(z, punto) {
      var r = rotuloZona(z);
      var html = '<h4>' + EH.escapar(r.t) + '</h4>' +
        '<div class="met"><span' + (z.tipo === 'disputa' || ZONAS_EN_DISPUTA[z.ter] ? ' style="color:var(--rojo2)"' : '') + '>' +
          EH.escapar(r.sub) + '</span>' +
          (z.km2 ? '<span>' + EH.escapar(Math.round(z.km2).toLocaleString('es')) + ' km²</span>' : '') +
        '</div><p>' + EH.escapar(r.nota) + '</p>' +
        '<p class="eh-tenue" style="font-size:.7rem">Marine Regions, World EEZ v12 (VLIZ, 2023). ' +
        'Lo posterior a 2023 está en las fichas de disputa.</p>';
      seleccion = null;
      /* El mar no tiene ficha ampliada: con el panel abierto se cierra, para
         no dejar panel y tarjeta a la vez contando cosas distintas. */
      if (panelAbierto) cerrarPanel();
      sobreZona = z;
      caja(html, punto);
      repintar();
    }

    function disputaEn(px, py, tactil) {
      if (!capas.disputas || epoca !== null) return null;
      /* Unos diez pixeles con raton y veintidos con el dedo: un rombo de
         cuatro pixeles no se acierta con una yema de diez milimetros. */
      var mejor = null, mejorD = tactil ? 484 : 110;
      for (var i = 0; i < visiblesDisputa.length; i++) {
        var d = visiblesDisputa[i];
        var e = (d._sx - px) * (d._sx - px) + (d._sy - py) * (d._sy - py);
        if (e < mejorD) { mejorD = e; mejor = d; }
      }
      return mejor;
    }

    /* conMar: false = las areas en tierra; true = las del mar. */
    function areaDisputaEn(px, py, conMar) {
      if (!capas.disputas || epoca !== null || !disputas) return null;
      for (var i = 0; i < disputas.length; i++) {
        var grupo = conMar ? disputas[i].mar : disputas[i].zona;
        for (var j = 0; j < grupo.length; j++) {
          if (dentro(grupo[j], px, py)) return disputas[i];
        }
      }
      return null;
    }

    function causaEn(px, py) {
      if (!capas.causas || epoca !== null) return null;
      var k, j, cl = Object.keys(causas);
      for (var i = 0; i < cl.length; i++) {
        k = cl[i];
        if (k === '__antartida') continue;
        for (j = 0; j < causas[k].length; j++) {
          if (dentro(causas[k][j], px, py)) return k;
        }
      }
      if (causas.__antartida) {
        for (i = 0; i < causas.__antartida.length; i++) {
          /* El solapamiento primero: esta ENCIMA de los otros dos y es la
             ficha que mas ensena, asi que debe ganar el clic. */
          var s = causas.__antartida[i];
          if (s.id === 'solape' && dentro(s.pieza, px, py)) return 'antartida';
        }
        for (i = 0; i < causas.__antartida.length; i++) {
          if (dentro(causas.__antartida[i].pieza, px, py)) return 'antartida';
        }
      }
      return null;
    }

    /* Los textos de las causas son los del Gran Plan, que ya estaban escritos
       y verificados. El mapa no inventa doctrina: la ensena donde ocurre. */
    var NOMBRE_CAUSA = {
      malvinas: 'Malvinas, Georgias del Sur y Sandwich del Sur',
      georgias: 'Georgias del Sur y Sandwich del Sur',
      esequibo: 'La Guayana Esequiba',
      gibraltar: 'Gibraltar',
      belice: 'El diferendo entre Guatemala y Belice',
      antartida: 'La Antartida reclamada'
    };

    function abrirCausa(k, punto) {
      var c = (CONT.causas || {});
      var f = c[k] || (k === 'georgias' ? c.georgias : null) ||
              (k === 'malvinas' ? c.malvinas : null) ||
              (k === 'antartida' ? c.antartida : null);
      var delPlan = null;
      if (EH.PLAN && EH.PLAN.causas) {
        EH.PLAN.causas.forEach(function (x) { if (x.id === CAUSA_PLAN[k]) delPlan = x; });
      }
      var html = '<h4>' + EH.escapar((f && f.titulo) || NOMBRE_CAUSA[k] || k) + '</h4>' +
        '<div class="met"><span style="color:var(--rojo2)">Territorio en disputa</span></div>';
      if (f && f.texto) {
        html += '<p>' + EH.escapar(f.texto.slice(0, 460)) + (f.texto.length > 460 ? '…' : '') + '</p>';
      } else if (delPlan && delPlan.situacionReal) {
        html += '<p>' + EH.escapar(delPlan.situacionReal.slice(0, 420)) + '…</p>';
      }
      /* Este parrafo no se quita. El color rojo no dice "esto es nuestro":
         dice "esto esta en disputa", y el Gran Plan publica tambien el
         argumento de la otra parte. Sin esta frase, el mapa reclama. */
      html += '<p class="eh-tenue" style="font-size:.72rem">El color marca una disputa abierta, no una ' +
        'propiedad. El Gran Plan publica tambien el argumento de la otra parte.</p>';
      seleccion = { tipo: 'causa', dato: k };
      if (panelAbierto) { ampliar(); return; }
      html += PIE_AMPLIAR;
      caja(html, punto);
    }

    /* Cuando se ven los estados, el pais "Estados Unidos" queda debajo de
       ellos y no debe ganar el clic: antes ganaba siempre, porque se prueba
       antes, y ningun estado se podia pulsar ni pasar por encima. */
    function estadosVisibles() {
      return !!(capas.estados && estados.length && vivaEn('estados-unidos-hispano') && porId['estados-unidos-hispano']);
    }

    function estadoEn(px, py) {
      if (!estadosVisibles()) return null;
      for (var i = 0; i < estados.length; i++) {
        for (var j = 0; j < estados[i].piezas.length; j++) {
          if (dentro(estados[i].piezas[j], px, py)) return estados[i];
        }
      }
      return null;
    }

    function local(ev) {
      var c = lienzo.getBoundingClientRect();
      return { x: ev.clientX - c.left, y: ev.clientY - c.top };
    }

    /* ---------- girar, ampliar ---------- */
    var ult = null, punteros = {}, pinza = null;

    function fijarEscala(nueva, px, py) {
      nueva = Math.min(Math.max(nueva, ESCALA_MIN), ESCALA_MAX);
      if (nueva === escala) return;
      matriz();          /* con la matriz del fotograma anterior, da un salto */
      /* Ampliar hacia donde está el cursor, no hacia el centro: si no, lo que
         uno quiere mirar se escapa de la pantalla justo al ampliar. */
      var antes = (px !== undefined) ? esferaEn(px, py) : null;
      escala = nueva;
      if (antes) {
        matriz();
        var ahora = esferaEn(px, py);
        if (ahora) {
          giroLon += (antes.lon - ahora.lon);
          giroLat = Math.min(Math.max(giroLat - (antes.lat - ahora.lat), -88), 88);
        }
      }
      sincronizarMandos();
      repintar();
    }

    lienzo.addEventListener('pointerdown', function (ev) {
      punteros[ev.pointerId] = local(ev);
      var ids = Object.keys(punteros);
      if (ids.length === 2) {
        var a = punteros[ids[0]], b = punteros[ids[1]];
        pinza = { d: Math.hypot(a.x - b.x, a.y - b.y), esc: escala };
        arrastrando = false;
        return;
      }
      arrastrando = true; movido = false; animando = null; velocidad = 0;
      ult = local(ev);
      if (lienzo.setPointerCapture) { try { lienzo.setPointerCapture(ev.pointerId); } catch (e) {} }
    });

    lienzo.addEventListener('pointermove', function (ev) {
      if (punteros[ev.pointerId]) punteros[ev.pointerId] = local(ev);
      var ids = Object.keys(punteros);

      if (pinza && ids.length >= 2) {
        var a = punteros[ids[0]], b = punteros[ids[1]];
        var d = Math.hypot(a.x - b.x, a.y - b.y);
        if (pinza.d > 8) fijarEscala(pinza.esc * d / pinza.d, (a.x + b.x) / 2, (a.y + b.y) / 2);
        return;
      }

      var p = local(ev);
      if (arrastrando && ult) {
        /* El giro se divide por la escala: ampliado, el mismo desplazamiento
           del dedo debe recorrer menos grados o es imposible apuntar a nada. */
        var k = 0.34 / escala;
        var dLon = -(p.x - ult.x) * k;
        giroLon += dLon;
        giroLat = Math.min(Math.max(giroLat + (p.y - ult.y) * k, -88), 88);
        velocidad = dLon;
        if (Math.abs(p.x - ult.x) + Math.abs(p.y - ult.y) > 3) movido = true;
        ult = p;
        girando = false; sincronizarMandos();
        pintar();
        return;
      }

      /* Sin arrastrar: resaltar lo que hay debajo. Solo con ratón; en un dedo
         no existe «pasar por encima» y el resaltado se quedaría pegado al
         último sitio tocado. */
      if (ev.pointerType === 'mouse') {
        var dpu = disputaEn(p.x, p.y);
        var cd = dpu ? null : ciudadEn(p.x, p.y);
        var q = (dpu || cd) ? null : quienEn(p.x, p.y);
        var es = (dpu || cd || q) ? null : estadoEn(p.x, p.y);
        if (dpu !== sobreDisputa || cd !== sobreCiudad || q !== sobre || es !== sobreEstado) {
          sobreDisputa = dpu; sobreCiudad = cd; sobre = q; sobreEstado = es;
          lienzo.style.cursor = (dpu || cd || q || es) ? 'pointer' : 'grab';
          repintar();
        }
      }
    });

    function soltar(ev) {
      delete punteros[ev.pointerId];
      var eraPinza = !!pinza;
      if (Object.keys(punteros).length < 2) pinza = null;
      /* Tras un pellizco, el dedo que queda sigue girando el globo. Antes
         habia que levantarlo y volver a apoyarlo. */
      var resto = Object.keys(punteros);
      if (eraPinza && resto.length === 1) {
        arrastrando = true; movido = true; ult = punteros[resto[0]];
        return;
      }
      if (!arrastrando) return;
      arrastrando = false; ult = null;
      if (movido) return;

      /* Pulsar algo PARA el giro. Si no, la ficha se quedaba quieta y el pais
         se iba: a los quince segundos la tarjeta senalaba el oceano. */
      if (girando) { girando = false; sincronizarMandos(); }
      /* Con el dedo no existe "pasar por encima": el resaltado de lo ultimo
         tocado se quedaba pegado sobre el globo hasta tocar otra cosa igual. */
      var tactil = ev.pointerType !== 'mouse';
      if (tactil) { sobreDisputa = null; sobreCiudad = null; }

      var p = local(ev);
      /* El rombo primero: es el blanco mas pequeno y el mas deliberado. Si
         la ciudad ganara, Ceuta abriria la ciudad y nunca su disputa. */
      var dpu = disputaEn(p.x, p.y, tactil);
      if (dpu) { abrirDisputa(dpu, p); return; }
      var cd = ciudadEn(p.x, p.y);
      if (cd) { abrirCiudad(cd, p); return; }
      /* Las areas en tierra van ANTES que el pais que las contiene: pulsar
         dentro de Olivenza debe abrir Olivenza, no Espana. */
      var dz = areaDisputaEn(p.x, p.y, false);
      if (dz) { abrirDisputa(dz, p); return; }
      var q = quienEn(p.x, p.y);
      if (q) {
        elegido = q; velocidad = 0;
        if (opciones.alPulsar) opciones.alPulsar(porId[q], puntoEn(porId[q].lon, porId[q].lat));
        repintar();
        return;
      }
      var es = estadoEn(p.x, p.y);
      if (es) { abrirEstado(es, p); return; }
      /* Las causas se prueban al final: estan encima de un pais en el dibujo
         pero debajo de el al pulsar, porque pulsar Venezuela debe abrir
         Venezuela aunque el Esequibo este al lado. */
      var ca = causaEn(p.x, p.y);
      if (ca) { abrirCausa(ca, p); return; }
      var dmz = areaDisputaEn(p.x, p.y, true);
      if (dmz) { abrirDisputa(dmz, p); return; }
      /* El mar se prueba el ULTIMO: casi todo el globo cerca de la costa es
         zona economica de alguien, y si fuera antes, no habria manera de
         pulsar una ciudad costera sin abrir la ficha de su mar. */
      var zn = zonaEn(p.x, p.y);
      if (zn) { abrirZona(zn, p); return; }
    }
    lienzo.addEventListener('pointerup', soltar);
    /* Un gesto que cancela el sistema no es un toque: no abre nada. */
    lienzo.addEventListener('pointercancel', function (ev) {
      delete punteros[ev.pointerId];
      pinza = null; arrastrando = false; ult = null;
    });
    lienzo.addEventListener('pointerleave', function (ev) {
      delete punteros[ev.pointerId];
      if (ev.pointerType === 'mouse' && !arrastrando && (sobre || sobreCiudad || sobreEstado || sobreDisputa)) {
        sobre = sobreCiudad = sobreEstado = sobreDisputa = null;
        repintar();
      }
    });

    /* La rueda amplía, PERO suelta la página en los topes. Antes la rueda no
       hacía nada, para no secuestrar el desplazamiento de la portada; el
       problema es que entonces ampliar en un portátil sin pantalla táctil
       costaba buscar un botón. Este término medio es el de los mapas serios:
       dentro del globo la rueda amplía, y cuando ya no se puede ampliar más
       (o menos) el gesto vuelve a desplazar la página. */
    /* Y SOLO cuando el globo esta "tomado": despues de pulsarlo, o con Ctrl.
       Sin esto, quien subia por la portada con el cursor cruzando el globo
       quedaba atrapado: cada golpe de rueda hacia arriba ampliaba, y hacian
       falta veinticinco para llegar al tope y que la pagina volviera a
       moverse. Es lo que hacen los mapas incrustados serios. */
    var tomado = false, pistaHasta = 0;
    lienzo.addEventListener('pointerdown', function () { tomado = true; });
    lienzo.addEventListener('pointerleave', function (ev) { if (ev.pointerType === 'mouse') tomado = false; });
    lienzo.addEventListener('wheel', function (ev) {
      if (!tomado && !ev.ctrlKey && !ev.metaKey) {
        /* No se para el desplazamiento: se dice como ampliar, y nada mas. */
        var ahora = ev.timeStamp || 0;
        if (ahora > pistaHasta) {
          pistaHasta = ahora + 2200;
          pista.classList.add('on');
          window.setTimeout(function () { pista.classList.remove('on'); }, 1800);
        }
        return;
      }
      var fuera = (ev.deltaY > 0 && escala <= ESCALA_MIN) || (ev.deltaY < 0 && escala >= ESCALA_MAX);
      if (fuera) return;                     /* sin preventDefault: scroll normal */
      ev.preventDefault();
      animando = null; girando = false;
      var p = local(ev);
      fijarEscala(escala * (ev.deltaY > 0 ? 0.88 : 1.14), p.x, p.y);
    }, { passive: false });

    lienzo.addEventListener('dblclick', function (ev) {
      var p = local(ev);
      var destino = esferaEn(p.x, p.y);
      if (!destino) return;
      ev.preventDefault();
      girando = false; velocidad = 0;
      volar(destino.lon, destino.lat, Math.min(escala * 2.2, ESCALA_MAX));
    });

    /* ---------- teclado ----------
       Un lienzo no se recorre con el tabulador: para quien no usa ratón, un
       globo en canvas es un cuadro vacío. Las flechas lo giran, y la tira de
       banderas de abajo son botones de verdad. */
    lienzo.tabIndex = 0;
    lienzo.addEventListener('keydown', function (ev) {
      var paso = (ev.shiftKey ? 15 : 5) / Math.sqrt(escala), usada = true;
      if (ev.key === 'ArrowLeft') giroLon -= paso;
      else if (ev.key === 'ArrowRight') giroLon += paso;
      else if (ev.key === 'ArrowUp') giroLat = Math.min(giroLat + paso, 88);
      else if (ev.key === 'ArrowDown') giroLat = Math.max(giroLat - paso, -88);
      else if (ev.key === '+' || ev.key === '=') fijarEscala(escala * 1.3);
      else if (ev.key === '-' || ev.key === '_') fijarEscala(escala / 1.3);
      else usada = false;
      if (usada) { ev.preventDefault(); girando = false; animando = null; velocidad = 0; sincronizarMandos(); pintar(); }
    });

    /* ---------- volar a un sitio ---------- */
    function volar(lon, lat, esc, ms) {
      girando = false; velocidad = 0;
      /* giroLon ES la longitud que queda en el centro de la pantalla, sin
         cambiarle el signo. Aqui habia un fallo: se volaba a -lon, o sea al
         ANTIPODA. Pulsar la bandera de Colombia llevaba el globo a Indonesia,
         y como del otro lado solo se ve oceano parecia que no hubiera pasado
         nada.
         El rodeo del 540 es para ir por el lado CORTO: de Filipinas a Mexico
         son 170 grados hacia el este o 190 hacia el oeste, y el globo tiene
         que girar por donde giraria una mano. */
      var dLon = (lon - giroLon + 540) % 360 - 180;
      animando = {
        t0: 0, ms: ms || 900,
        lon0: giroLon, dLon: dLon,
        lat0: giroLat, dLat: Math.max(-88, Math.min(88, lat)) - giroLat,
        esc0: escala, dEsc: (esc === undefined ? escala : Math.min(Math.max(esc, ESCALA_MIN), ESCALA_MAX)) - escala
      };
    }

    /* Volar a una ciudad y abrirle la ficha. La ficha se abre DESPUES del
       vuelo porque antes el punto todavia esta en otro sitio de la pantalla y
       la tarjeta saldria colocada donde la ciudad ya no esta. */
    function irACiudad(cd) {
      if (!cd) return;
      sobreCiudad = cd;
      volar(cd.lon, cd.lat, Math.max(escala, 7));
      window.setTimeout(function () {
        /* La ficha se abre SIEMPRE, aunque la ciudad no haya quedado de cara.
           Con un "if (q.visible)" delante, cualquier vuelo que no terminara
           —la pestana en segundo plano congela los fotogramas, por ejemplo—
           dejaba el clic sin respuesta y sin explicacion. Si no esta visible,
           la tarjeta sale en el centro, que es donde va a aterrizar. */
        var q = puntoEn(cd.lon, cd.lat);
        abrirCiudad(cd, q.visible ? q : { x: An / 2, y: Al / 2 });
      }, 950);
    }

    /* Cuanto acercarse a cada disputa: a las de un islote o un pueblo, mucho;
       a las de mar abierto, poco, que si no se ve agua y nada mas. */
    function aumentoPara(dd) {
      if (dd.d.id === 'antartida-reclamos-superpuestos') return 1.8;
      /* Las que tienen un area de mar dibujada se acercan segun lo que mide:
         la Medialuna son 160 por 39 km y a x3 no se ve; el mar del Esequibo
         ocupa medio Atlantico de Guyana y a x8 no cabe. */
      if (dd.d.mar && dd.d.mar.piezas && dd.d.mar.piezas.length) {
        var x0 = 999, x1 = -999, y0 = 999, y1 = -999;
        dd.d.mar.piezas.forEach(function (pl) {
          for (var k = 0; k < pl.length; k += 2) {
            x0 = Math.min(x0, pl[k]); x1 = Math.max(x1, pl[k]);
            y0 = Math.min(y0, pl[k + 1]); y1 = Math.max(y1, pl[k + 1]);
          }
        });
        var ext = Math.max((x1 - x0) * Math.cos((y0 + y1) / 2 * RAD), y1 - y0);
        return Math.max(2.5, Math.min(14, 18 / ext));
      }
      if (dd.zona.length) return 7;
      if (dd.d.tipo === 'maritima') return 3;
      return 4.5;
    }

    function irADisputa(dd) {
      if (!dd) return;
      /* Una disputa de hoy no se abre sobre el mapa de 1650, ni con la capa
         apagada: saldria una ficha sobre un mapa que no la muestra. */
      if (epoca !== null && btnHoy) btnHoy.click();
      if (!capas.disputas) {
        capas.disputas = true;
        var cb = panel && panel.querySelector('[data-c=disputas]');
        if (cb) cb.checked = true;
      }
      sobreDisputa = dd;
      volar(dd.d.lon, dd.d.lat, aumentoPara(dd));
      window.setTimeout(function () {
        var q = puntoEn(dd.d.lon, dd.d.lat);
        abrirDisputa(dd, q.visible ? q : { x: An / 2, y: Al / 2 });
      }, 950);
    }

    function irA(id, abrirFicha) {
      var n = porId[id];
      if (!n) return;
      elegido = id;
      volar(n.lon, n.lat * 0.8, Math.max(2.2, escala));
      if (abrirFicha && opciones.alPulsar) {
        window.setTimeout(function () {
          if (porId[id]) opciones.alPulsar(porId[id], puntoEn(porId[id].lon, porId[id].lat));
        }, 940);
      }
    }

    /* ---------- el panel de detalle ---------- */
    function fila(etiqueta, valor) {
      if (!valor && valor !== 0) return '';
      return '<div class="eh-globo__dato"><dt>' + EH.escapar(etiqueta) + '</dt>' +
             '<dd>' + EH.escapar(String(valor)) + '</dd></div>';
    }

    function parrafos(titulo, texto) {
      if (!texto) return '';
      return '<h5>' + EH.escapar(titulo) + '</h5><p>' + EH.escapar(texto) + '</p>';
    }

    function detalleNacion(n) {
      var h = '<header class="eh-globo__panel-cab">' +
        (EH.banderas ? EH.banderas.svg(n.id, 44) : '') +
        '<div><h4>' + EH.escapar(n.nombre) + '</h4>' +
        (n.nombreOficial ? '<p class="eh-tenue">' + EH.escapar(n.nombreOficial) + '</p>' : '') +
        '</div></header>';
      if (n.lema) h += '<p class="eh-globo__lema">«' + EH.escapar(n.lema) + '»</p>';
      h += '<dl class="eh-globo__datos">' +
        fila('Capital', n.capital) +
        fila('Población', n.poblacion ? EH.poblacion(n.poblacion) : null) +
        fila('Hispanohablantes', n.hispanohablantes ? EH.poblacion(n.hispanohablantes) : null) +
        fila('Gentilicio', n.gentilicio) +
        fila('Moneda', n.moneda) +
        fila('Independencia', n.independencia) +
        '</dl>';
      if (n.resumen) h += '<p>' + EH.escapar(n.resumen) + '</p>';
      if (n.orgullo && n.orgullo.length) {
        h += '<h5>Lo que enorgullece</h5><ul>' +
          n.orgullo.map(function (x) { return '<li>' + EH.escapar(x) + '</li>'; }).join('') + '</ul>';
      }
      if (n.figuras && n.figuras.length) {
        h += '<h5>Figuras</h5><ul>' +
          n.figuras.map(function (x) { return '<li>' + EH.escapar(typeof x === 'string' ? x : (x.nombre || '')) + '</li>'; }).join('') + '</ul>';
      }
      h += parrafos('Lo que aporta a la Hispanidad', n.aporteALaHispanidad);
      /* La nota honesta NO se omite nunca. Es la parte que incomoda, y el
         sitio existe en parte por publicarla. */
      if (n.notaHonesta) {
        h += '<h5>Y lo que incomoda</h5><p class="eh-globo__incomoda">' + EH.escapar(n.notaHonesta) + '</p>';
      }
      if (n.confianzaDatos) {
        h += '<p class="eh-tenue" style="font-size:.72rem">Fiabilidad de las cifras: ' +
          EH.escapar(n.confianzaDatos) + '. Confírmalas con el organismo del país antes de usarlas en público.</p>';
      }
      h += '<a class="eh-globo__panel-ir" href="' + EH.BASE + 'naciones.html#' + EH.escapar(n.id) + '">Abrir la página de ' + EH.escapar(n.nombre) + '</a>';
      return h;
    }

    function detalleCiudad(cd) {
      var f = FICHAS_CIUDAD[clave(cd)], nac = porId[cd.pais];
      var h = '<header class="eh-globo__panel-cab">' +
        (nac && EH.banderas ? EH.banderas.svg(nac.id, 40) : '') +
        '<div><h4>' + EH.escapar(cd.nombre) + '</h4>' +
        '<p class="eh-tenue">' + (nac ? EH.escapar(nac.nombre) : 'Diáspora sefardí') +
        (f && f.fundacion ? ' · ' + EH.escapar(f.fundacion) : '') + '</p></div></header>';
      if (f && f.retrato && EH.retratos && EH.retratos[f.retrato]) {
        h += '<div class="eh-globo__retrato">' + EH.retratos[f.retrato]() + '</div>';
      }
      if (f) {
        h += '<p>' + EH.escapar(f.texto) + '</p>';
        if (f.fuente) h += '<p class="eh-tenue" style="font-size:.72rem">' + EH.escapar(f.fuente) + '</p>';
      } else {
        h += '<p class="eh-tenue">Todavía no hay ficha de esta ciudad. Las que ya la tienen salen con el punto dorado.</p>';
      }
      h += '<dl class="eh-globo__datos">' +
        fila('Población del área urbana', cd.pob ? EH.poblacion(cd.pob * 1000) : null) +
        fila('Coordenadas', cd.lat.toFixed(2) + ', ' + cd.lon.toFixed(2)) +
        '</dl>' +
        '<p class="eh-tenue" style="font-size:.72rem">La población sale de una sola fuente para las ' +
        ciudades.length.toLocaleString('es') + ' ciudades del mapa (Natural Earth) y es la del área urbana, ' +
        'no la del municipio.</p>';
      if (nac) {
        h += '<button type="button" class="eh-globo__panel-ir" data-nacion="' + EH.escapar(nac.id) + '">Ver ' + EH.escapar(nac.nombre) + '</button>';
      }
      return h;
    }

    function detalleEstado(es) {
      var d = DATOS_ESTADO[(es.s || '').toLowerCase()] || {};
      var h = '<header class="eh-globo__panel-cab"><div><h4>' +
        EH.escapar(d.nombre || es.nombre) + '</h4>' +
        '<p class="eh-tenue">Estados Unidos</p></div></header>';
      h += '<dl class="eh-globo__datos">' +
        fila('Población hispana hoy', typeof d.pct === 'number' ? d.pct.toFixed(1).replace('.', ',') + ' %' : null) +
        fila('En personas', d.hispanos ? EH.poblacion(d.hispanos) : null) +
        fila('Huella histórica española', typeof d.huella === 'number' ? d.huella.toFixed(0) + ' / 100' : null) +
        '</dl>';
      if (d.texto) h += '<p>' + EH.escapar(d.texto) + '</p>';
      if (d.historia) h += parrafos('Huella española', d.historia);
      if (d.fuente) h += '<p class="eh-tenue" style="font-size:.72rem">' + EH.escapar(d.fuente) + '</p>';
      h += '<a class="eh-globo__panel-ir" href="' + EH.BASE + 'eeuu.html">La Hispanidad de Estados Unidos</a>';
      return h;
    }

    function detalleCausa(k) {
      var c = null;
      if (EH.PLAN && EH.PLAN.causas) {
        EH.PLAN.causas.forEach(function (x) { if (x.id === CAUSA_PLAN[k]) c = x; });
      }
      var f = (CONT.causas || {})[k];
      var h = '<header class="eh-globo__panel-cab"><div><h4>' +
        EH.escapar((c && c.nombre) || (f && f.titulo) || NOMBRE_CAUSA[k] || k) + '</h4>' +
        '<p class="eh-tenue" style="color:var(--rojo2)">Territorio en disputa</p></div></header>';
      if (f && f.texto) h += '<p>' + EH.escapar(f.texto) + '</p>';
      if (c) {
        h += parrafos('Quién lo reclama', c.quienReclama);
        h += parrafos('La situación real', c.situacionReal);
        h += parrafos('El fundamento jurídico', c.fundamentoJuridico);
        /* El contraargumento va SIEMPRE y con el mismo tamano que el resto. Es
           la regla de la casa: cada causa se publica con el argumento de la
           otra parte, y esconderlo aqui seria hacer propaganda. */
        h += parrafos('Lo que responde la otra parte', c.contraargumento);
        h += parrafos('La vía legítima', c.viaLegitima);
        h += parrafos('El horizonte', c.horizonte);
        if (c.advertencia) {
          h += '<h5>Advertencia</h5><p class="eh-globo__incomoda">' + EH.escapar(c.advertencia) + '</p>';
        }
      }
      h += '<p class="eh-tenue" style="font-size:.72rem">El color rojo marca una disputa abierta, no una ' +
        'propiedad.</p>' +
        '<a class="eh-globo__panel-ir" href="' + EH.BASE + 'plan.html#causas">Las ocho causas del Gran Plan</a>';
      return h;
    }

    var NEUTRAL = 'Las dos partes son naciones hispanas. El movimiento no toma partido entre ellas: ' +
      'aquí van las dos posiciones con el mismo espacio, y el mapa no pinta a ninguna como dueña.';

    /* "La posicion de el Reino Unido" no es espanol: el articulo se contrae. */
    function posicionDe(quien) {
      return /^el /.test(quien) ? 'La posición del ' + quien.slice(3) : 'La posición de ' + quien;
    }

    function detalleDisputa(dd) {
      var d = dd.d, e = estadoDe(dd);
      var h = '<header class="eh-globo__panel-cab"><div><h4>' + EH.escapar(d.titulo) + '</h4>' +
        '<p class="eh-tenue">' + EH.escapar(d.partes) + '</p></div></header>' +
        '<p class="eh-globo__estado"><i class="eh-globo__rombo" style="background:' + e.c + '"></i>' +
        EH.escapar(e.t) + ' <span class="eh-tenue">· ' + EH.escapar(TIPO_DISPUTA[d.tipo] || '') + '</span></p>' +
        '<p>' + EH.escapar(d.texto) + '</p>';
      if (d.hispanos) h += '<p class="eh-globo__neutral">' + EH.escapar(NEUTRAL) + '</p>';
      /* Las dos posiciones, en el mismo formato y una detras de otra. Es la
         regla de la casa y aqui no tiene excepcion: ni en las causas del Gran
         Plan se esconde el argumento de la otra parte. */
      h += parrafos(posicionDe(d.quienA), d.posicionA);
      h += parrafos(posicionDe(d.quienB), d.posicionB);
      if (d.hitos && d.hitos.length) {
        h += '<h5>Los hitos</h5><ul class="eh-globo__hitos">' +
          d.hitos.map(function (x) { return '<li>' + EH.escapar(x) + '</li>'; }).join('') + '</ul>';
      }
      h += parrafos('Lo que ha cambiado desde 2023', d.cambio);
      if (d.mar) {
        h += parrafos(d.mar.oficial ? 'El área dibujada' : 'El mar rayado', d.mar.nota +
          (d.mar.km2 ? ' Unos ' + Math.round(d.mar.km2).toLocaleString('es') + ' km².' : ''));
      }
      h += '<p class="eh-tenue" style="font-size:.72rem">Fuentes: ' + EH.escapar(d.fuente) +
        '. Confianza ' + EH.escapar(d.confianza) + '. Revisado al ' +
        EH.escapar((EH.DISPUTAS && EH.DISPUTAS.fecha) || '') + '.</p>';
      if (d.causa) {
        h += '<button type="button" class="eh-globo__panel-ir" data-causa="' + EH.escapar(d.causa) + '">' +
          'Es una causa del Gran Plan: ver su ficha</button>';
      }
      return h;
    }

    function ampliar() {
      if (!seleccion) return;
      var h = '';
      if (seleccion.tipo === 'nacion') h = detalleNacion(seleccion.dato);
      else if (seleccion.tipo === 'ciudad') h = detalleCiudad(seleccion.dato);
      else if (seleccion.tipo === 'estado') h = detalleEstado(seleccion.dato);
      else if (seleccion.tipo === 'causa') h = detalleCausa(seleccion.dato);
      else if (seleccion.tipo === 'disputa') h = detalleDisputa(seleccion.dato);
      if (!h) return;
      var vieja = contenedor.querySelector('.eh-mapa__ficha');
      if (vieja) vieja.remove();
      panelEl.querySelector('.eh-globo__panel-cuerpo').innerHTML = h;
      panelEl.classList.add('on');
      panelEl.scrollTop = 0;
      panelAbierto = true;
      medir();
      pintar();
      panelEl.querySelector('.eh-globo__panel-cerrar').focus();
    }

    function cerrarPanel() {
      if (!panelAbierto) return;
      panelAbierto = false;
      panelEl.classList.remove('on');
      medir();
      pintar();
      lienzo.focus();
    }

    var PIE_AMPLIAR = '<button type="button" class="eh-boton eh-boton--p eh-boton--oro" data-ampliar="1">' +
      'Ampliar la información</button>';

    /* ---------- fichas ---------- */
    /* Con el panel ya abierto, pulsar otra cosa lo CAMBIA directamente en vez
       de sacar la tarjeta pequena por delante. Si no, quedaban las dos cosas a
       la vez contando paises distintos, que es peor que cualquiera de las dos
       por separado. */
    function mostrar(construir, punto) {
      if (panelAbierto) { ampliar(); return; }
      construir(punto);
    }

    function caja(html, punto) {
      var vieja = contenedor.querySelector('.eh-mapa__ficha');
      if (vieja) vieja.remove();
      var c = document.createElement('div');
      c.className = 'eh-mapa__ficha';
      c.innerHTML = '<button class="eh-mapa__cerrar" type="button" aria-label="Cerrar">×</button>' + html;
      var cc = contenedor.getBoundingClientRect(), lc = lienzo.getBoundingClientRect();
      c.style.left = Math.min(Math.max(lc.left - cc.left + punto.x + 14, 8), Math.max(8, cc.width - 320)) + 'px';
      c.style.top = '8px';
      contenedor.appendChild(c);
      var bAmp = c.querySelector('[data-ampliar]');
      if (bAmp) bAmp.addEventListener('click', ampliar);
      /* Se mide DESPUES de meterla en la pagina y se sube si no cabe: hasta que
         no esta puesta no se sabe lo que mide, y una ficha con retrato mide el
         doble que una sin el. Antes se colocaba a ciegas junto al punto y el
         dibujo salia cortado por el borde de abajo. */
      var alto = c.getBoundingClientRect().height;
      var arriba = lc.top - cc.top + punto.y - 10;
      c.style.top = Math.max(Math.min(arriba, cc.height - alto - 8), 8) + 'px';
      c.querySelector('.eh-mapa__cerrar').addEventListener('click', function () {
        c.remove();
        sobreDisputa = sobreCiudad = sobreZona = null;
        repintar();
      });
      return c;
    }

    function abrirCiudad(cd, punto) {
      sobreCiudad = cd;
      var f = FICHAS_CIUDAD[clave(cd)];
      var nac = porId[cd.pais];
      var html =
        '<h4 class="eh-fila" style="gap:.5rem;flex-wrap:nowrap">' +
          (nac && EH.banderas ? EH.banderas.svg(nac.id, 24) : '') +
          '<span>' + EH.escapar(cd.nombre) + '</span></h4>' +
        '<div class="met"><span>' + (nac ? EH.escapar(nac.nombre) : 'Diáspora sefardí') + '</span>' +
          (cd.pob ? '<span>' + EH.escapar(EH.poblacion(cd.pob * 1000)) + ' hab. (área urbana)</span>' : '') +
          (f && f.fundacion ? '<span>' + EH.escapar(f.fundacion) + '</span>' : '') +
        '</div>';
      if (f) {
        /* El retrato va ANTES del texto. Puesto despues, con la ficha acotada
           en altura quedaba debajo del desplazamiento: habia que saber que
           estaba ahi para verlo, y es justo lo que la ficha tiene que ensenar. */
        if (f.retrato && EH.retratos && EH.retratos[f.retrato]) {
          html += '<div class="eh-globo__retrato">' + EH.retratos[f.retrato]() + '</div>';
        }
        html += '<p>' + EH.escapar(f.texto) + '</p>';
        if (f.fuente) html += '<p class="eh-tenue" style="font-size:.7rem">' + EH.escapar(f.fuente) + '</p>';
      } else {
        /* No se rellena con un párrafo genérico. Decir que todavía no hay
           ficha es verdad; inventarle una historia a un pueblo es exactamente
           lo que este sitio no hace. */
        html += '<p class="eh-tenue">Todavía no hay ficha de esta ciudad. Las que ya la tienen ' +
                'salen con el punto dorado.</p>';
      }
      seleccion = { tipo: 'ciudad', dato: cd };
      if (panelAbierto) { ampliar(); repintar(); return; }
      html += PIE_AMPLIAR;
      caja(html, punto);
      repintar();
    }

    function abrirDisputa(dd, punto) {
      sobreDisputa = dd;
      var d = dd.d, e = estadoDe(dd);
      /* La tarjeta pequena corta el texto. Mejor al final de una frase, si
         hay una en el ultimo tercio; si no, en la ultima palabra entera y sin
         el signo que la cierre: antes salia ".…" o un "El…" colgando. */
      var corto = d.texto;
      if (corto.length > 420) {
        var trozo = corto.slice(0, 420), fin = trozo.lastIndexOf('. ');
        corto = fin > 280 ? trozo.slice(0, fin + 1)
                          : trozo.replace(/\s+\S*$/, '').replace(/[\s.,;:]+$/, '') + '…';
      }
      var html = '<h4>' + EH.escapar(d.titulo) + '</h4>' +
        '<div class="met"><span style="color:' + e.c + '">◆ ' + EH.escapar(e.t) + '</span>' +
          '<span>' + EH.escapar(d.partes) + '</span></div>' +
        '<p>' + EH.escapar(corto) + '</p>';
      if (d.hispanos) {
        html += '<p class="eh-tenue" style="font-size:.72rem">Entre dos naciones hispanas: el movimiento ' +
          'no toma partido.</p>';
      }
      seleccion = { tipo: 'disputa', dato: dd };
      if (panelAbierto) { ampliar(); repintar(); return; }
      html += PIE_AMPLIAR;
      caja(html, punto);
      repintar();
    }

    function abrirEstado(es, punto) {
      var d = DATOS_ESTADO[(es.s || '').toLowerCase()];
      var html = '<h4>' + EH.escapar((d && d.nombre) || es.nombre) + '</h4>';
      if (d && typeof d.pct === 'number') {
        /* Las DOS medidas, siempre, aunque el mapa este pintando una sola: es
           justo la comparacion lo que ensena algo. */
        html += '<div class="met"><span><strong style="color:var(--oro2)">' +
          EH.escapar(d.pct.toFixed(1).replace('.', ',')) + ' %</strong> de población hispana hoy</span>' +
          (d.hispanos ? '<span>' + EH.escapar(EH.poblacion(d.hispanos)) + ' personas</span>' : '') +
          (typeof d.huella === 'number'
            ? '<span><strong style="color:var(--oro2)">' + EH.escapar(d.huella.toFixed(0)) +
              '/100</strong> de huella española</span>' : '') +
          '</div>';
        if (d.texto) html += '<p>' + EH.escapar(d.texto) + '</p>';
        if (d.historia) html += '<p>' + EH.escapar(d.historia) + '</p>';
        if (d.fuente) html += '<p class="eh-tenue" style="font-size:.7rem">' + EH.escapar(d.fuente) + '</p>';
      } else {
        html += '<p class="eh-tenue">Sin dato de población hispana para este estado.</p>';
      }
      seleccion = { tipo: 'estado', dato: es };
      if (panelAbierto) { ampliar(); return; }
      html += PIE_AMPLIAR;
      caja(html, punto);
    }

    /* ---------- montaje ---------- */
    contenedor.classList.add('eh-globo');
    contenedor.innerHTML = '';

    var escena = document.createElement('div');
    escena.className = 'eh-globo__escena';
    escena.appendChild(lienzo);

    var mandos = document.createElement('div');
    mandos.className = 'eh-globo__mandos';
    mandos.innerHTML =
      '<button type="button" data-a="mas" aria-label="Acercar">+</button>' +
      '<button type="button" data-a="menos" aria-label="Alejar">−</button>' +
      '<button type="button" data-a="inicio" aria-label="Volver a la vista general">⤢</button>' +
      '<button type="button" data-a="girar" aria-label="Girar o parar el globo">⏸</button>';
    escena.appendChild(mandos);

    var aviso = document.createElement('div');
    aviso.className = 'eh-globo__aumento';
    escena.appendChild(aviso);

    var pista = document.createElement('div');
    pista.className = 'eh-globo__pista';
    pista.setAttribute('aria-hidden', 'true');
    pista.textContent = 'Pulsa el globo para acercar con la rueda, o usa Ctrl + rueda';
    escena.appendChild(pista);

    panelEl = document.createElement('aside');
    panelEl.className = 'eh-globo__panel';
    panelEl.setAttribute('aria-label', 'Información ampliada');
    panelEl.innerHTML =
      '<button type="button" class="eh-globo__panel-cerrar" aria-label="Cerrar la información">×</button>' +
      '<div class="eh-globo__panel-cuerpo"></div>';
    panelEl.querySelector('.eh-globo__panel-cerrar').addEventListener('click', cerrarPanel);
    /* Dentro del panel puede haber un boton para saltar a otra nacion sin
       cerrar nada. */
    panelEl.addEventListener('click', function (ev) {
      /* De una disputa a su causa del Gran Plan, sin cerrar el panel. */
      var bc = ev.target.closest('[data-causa]');
      if (bc) {
        seleccion = { tipo: 'causa', dato: bc.getAttribute('data-causa') };
        ampliar();
        return;
      }
      var b = ev.target.closest('[data-nacion]');
      if (!b) return;
      var n = porId[b.getAttribute('data-nacion')];
      if (!n) return;
      seleccion = { tipo: 'nacion', dato: n };
      elegido = n.id;
      ampliar();
      volar(n.lon, n.lat * 0.8, Math.max(escala, 2.2));
    });
    escena.appendChild(panelEl);
    contenedor.appendChild(escena);

    /* Escape cierra lo que haya abierto, que es lo que espera cualquiera. */
    contenedor.addEventListener('keydown', function (ev) {
      if (ev.key !== 'Escape') return;
      if (panelAbierto) { cerrarPanel(); return; }
      var fh = contenedor.querySelector('.eh-mapa__ficha');
      if (fh) {
        fh.remove(); lienzo.focus();
        sobreDisputa = sobreCiudad = sobreZona = null;
        repintar();
      }
    });

    contenedor.__ehGlobo = {
      panelAbierto: function () { return panelAbierto; },
      ampliarCon: function (sel) { seleccion = sel; ampliar(); },
      pieAmpliar: function () { return PIE_AMPLIAR; },
      engancharAmpliar: function (cont, sel) {
        seleccion = sel;
        var b = cont.querySelector('[data-ampliar]');
        if (b) b.addEventListener('click', ampliar);
      }
    };

    function sincronizarMandos() {
      var bG = mandos.querySelector('[data-a=girar]');
      bG.textContent = girando ? '⏸' : '▶';
      bG.classList.toggle('on', girando);
      bG.setAttribute('aria-pressed', girando ? 'true' : 'false');
      mandos.querySelector('[data-a=mas]').disabled = escala >= ESCALA_MAX;
      mandos.querySelector('[data-a=menos]').disabled = escala <= ESCALA_MIN;
      aviso.textContent = escala > 1.05 ? '×' + escala.toFixed(1).replace('.0', '').replace('.', ',') : '';
      aviso.classList.toggle('on', escala > 1.05);
    }

    mandos.addEventListener('click', function (ev) {
      var b = ev.target.closest('button');
      if (!b) return;
      var a = b.getAttribute('data-a');
      animando = null;
      if (a === 'mas') fijarEscala(escala * 1.5);
      else if (a === 'menos') fijarEscala(escala / 1.5);
      else if (a === 'inicio') { girando = false; volar(-52, 12, 1, 700); }
      else if (a === 'girar') { girando = !girando; velocidad = 0; }
      sincronizarMandos();
      repintar();
    });

    /* --- interruptores de capa --- */
    var ETIQUETAS = [
      { k: 'mar', t: 'Mar y límites', d: 'Zonas económicas y límites reales, con su estado (Marine Regions, 2023)' },
      { k: 'causas', t: 'Causas territoriales', d: 'Las ocho del Gran Plan, en disputa' },
      { k: 'disputas', t: 'Disputas de límites',
        d: (disputas ? disputas.length : 0) + ' disputas de tierra y mar, cada una con su estado y las dos posiciones' },
      { k: 'estados', t: 'EE.UU. por estados', d: 'Tono según su población hispana' },
      { k: 'ciudades', t: 'Ciudades', d: 'Las que tienen historia y las mayores, desde el principio; el resto, al acercar' },
      { k: 'sefardi', t: 'Huella sefardí', d: 'Donde se habló el judeoespañol' },
      { k: 'urbano', t: 'Manchas urbanas', d: 'El área construida de cada ciudad, al acercar' },
      { k: 'miembros', t: 'Miembros', d: 'Dónde hay gente inscrita en el movimiento' }
    ];
    var panel = null;
    if (opciones.capas !== false) {
      panel = document.createElement('div');
      panel.className = 'eh-globo__capas';
      panel.innerHTML = ETIQUETAS.map(function (e) {
        return '<label title="' + EH.escapar(e.d) + '"><input type="checkbox" data-c="' + e.k + '"' +
          (capas[e.k] ? ' checked' : '') + '> ' + EH.escapar(e.t) + '</label>';
      }).join('');
      /* El selector de medida solo aparece si hay datos de huella: sin ellos
         ofreceria una vista vacia, que es peor que no ofrecerla. */
      var hayHuella = Object.keys(DATOS_ESTADO).some(function (k) {
        return typeof DATOS_ESTADO[k].huella === 'number';
      });
      if (hayHuella) {
        var sel = document.createElement('label');
        sel.className = 'eh-globo__medida';
        sel.innerHTML = 'Estados de EE.UU. <select aria-label="Qué mide el color de los estados">' +
          '<option value="poblacion">por población hispana hoy</option>' +
          '<option value="huella">por huella histórica española</option></select>';
        sel.querySelector('select').addEventListener('change', function (ev) {
          medidaEEUU = ev.target.value;
          repintar();
        });
        panel.appendChild(sel);
      }

      panel.addEventListener('change', function (ev) {
        var k = ev.target.getAttribute('data-c');
        if (!k) return;
        capas[k] = ev.target.checked;
        if (k === 'urbano' && ev.target.checked) pedirUrbano();
        if (k === 'miembros') sincronizarMiembros();
        repintar();
      });
      contenedor.appendChild(panel);
    }

    /* --- la línea del tiempo --- */
    if (opciones.tiempo !== false && EPOCAS.length) {
      var tiempo = document.createElement('div');
      tiempo.className = 'eh-globo__tiempo';
      tiempo.innerHTML =
        '<div class="eh-globo__tiempo-fila">' +
          '<button type="button" data-t="hoy" class="on">Hoy</button>' +
          '<input type="range" min="0" max="' + (EPOCAS.length - 1) + '" value="' + (EPOCAS.length - 1) + '" ' +
            'aria-label="Año que se muestra en el mapa">' +
          '<span class="eh-globo__tiempo-ano"></span>' +
        '</div>' +
        '<div class="eh-globo__tiempo-texto"></div>';
      contenedor.appendChild(tiempo);

      var rango = tiempo.querySelector('input');
      var rotuloAno = tiempo.querySelector('.eh-globo__tiempo-ano');
      var texto = tiempo.querySelector('.eh-globo__tiempo-texto');
      var btnHoy = tiempo.querySelector('[data-t=hoy]');

      function pintarEpoca() {
        /* El lector de pantalla anunciaba "7" en vez de "1810". */
        rango.setAttribute('aria-valuetext', epoca === null ? 'Hoy' : String(EPOCAS[epoca].ano));
        if (epoca === null) {
          rotuloAno.textContent = '';
          texto.innerHTML = '';
          btnHoy.classList.add('on');
          rango.value = EPOCAS.length - 1;
        } else {
          var e = EPOCAS[epoca];
          btnHoy.classList.remove('on');
          rotuloAno.textContent = e.ano;
          texto.innerHTML =
            '<strong>' + EH.escapar(e.titulo) + '</strong> ' +
            '<span class="eh-tenue">· ' + (e.territorios ? e.territorios.length : 0) + ' territorios</span>' +
            '<p>' + EH.escapar(e.texto) + '</p>' +
            /* Esta advertencia no se quita. El mapa pinta países de HOY, no
               fronteras de entonces: sin decirlo, el visitante creería que
               está viendo la frontera real de 1680. */
            '<p class="eh-tenue" style="font-size:.72rem">Se pintan los territorios de hoy que en esa ' +
            'época estaban bajo gobierno hispano. No son las fronteras de entonces: dibujarlas exactas ' +
            'sería inventarlas.' + (e.fuente ? ' ' + EH.escapar(e.fuente) : '') + '</p>';
        }
        repintar();
      }
      rango.addEventListener('input', function () {
        var i = parseInt(rango.value, 10);
        epoca = (i === EPOCAS.length - 1) ? null : i;
        pintarEpoca();
      });
      btnHoy.addEventListener('click', function () { epoca = null; pintarEpoca(); });
      pintarEpoca();
    }

    /* La tira de banderas: lo bonito de la pantalla y, a la vez, el único
       camino con teclado hasta cada país. */
    if (opciones.tira !== false) {
      var tira = document.createElement('div');
      tira.className = 'eh-globo__tira';
      tira.setAttribute('role', 'group');
      tira.setAttribute('aria-label', 'Ir a una nación de la Hispanidad');
      tira.innerHTML = naciones.map(function (n) {
        return '<button type="button" class="eh-globo__bandera" data-id="' + EH.escapar(n.id) + '" ' +
          'title="' + EH.escapar(n.nombre) + '">' +
          (EH.banderas ? EH.banderas.svg(n.id, 30) : '') +
          '<span>' + EH.escapar(n.nombre) + '</span></button>';
      }).join('');
      tira.addEventListener('click', function (ev) {
        var b = ev.target.closest('.eh-globo__bandera');
        if (b) irA(b.getAttribute('data-id'), true);
      });
      contenedor.appendChild(tira);
    }

    /* LA TIRA DE CIUDADES CON HISTORIA.
       Es la respuesta al problema de encontrarlas: aqui estan todas, con su
       nombre y su pais, y al pulsar una el globo vuela y abre su ficha. Hace
       ademas de camino con teclado, que un lienzo no tiene. */
    var conFicha = ciudadesOrden.filter(function (c) { return c._ficha; })
      .sort(function (a, b) { return a.nombre.localeCompare(b.nombre, 'es'); });
    if (opciones.ciudadesTira !== false && conFicha.length) {
      var tc = document.createElement('div');
      tc.className = 'eh-globo__ciudades';
      tc.innerHTML =
        '<p class="eh-globo__ciudades-tit">' + conFicha.length +
        ' ciudades cuentan su historia <span class="eh-tenue">· pulsa una y el globo va</span></p>' +
        '<div class="eh-globo__ciudades-lista" role="group" aria-label="Ciudades con historia">' +
        conFicha.map(function (c, i) {
          var nac = porId[c.pais];
          return '<button type="button" data-i="' + i + '">' + EH.escapar(c.nombre) +
            (nac ? '<span>' + EH.escapar(nac.nombre) + '</span>' : '') + '</button>';
        }).join('') + '</div>';
      tc.addEventListener('click', function (ev) {
        var b = ev.target.closest('button[data-i]');
        if (b) irACiudad(conFicha[parseInt(b.getAttribute('data-i'), 10)]);
      });
      contenedor.appendChild(tc);
    }

    /* LA TIRA DE DISPUTAS.
       Por la misma razon que la de ciudades: un rombo de siete pixeles en
       medio del Atlantico no lo encuentra nadie. Van ordenadas por estado,
       las abiertas primero. Debajo, lo que falta por investigar: decir que
       la lista no esta completa es parte de que sea fiable. */
    if (opciones.disputasTira !== false && disputas && disputas.length) {
      var abiertas = disputas.filter(function (x) { return x.d.estado === 'sin-resolver'; }).length;
      var faltan = (EH.DISPUTAS && EH.DISPUTAS.pendientes) || [];
      var proximas = (EH.DISPUTAS && EH.DISPUTAS.proximas) || [];
      var indicePorId = {};
      disputas.forEach(function (x, i) { indicePorId[x.d.id] = i; });
      var MESES = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];
      function fechaCorta(iso) {
        if (!iso) return 'Sin fecha';
        var p = iso.split('-');
        return parseInt(p[2], 10) + ' ' + MESES[parseInt(p[1], 10) - 1] + ' ' + p[0];
      }
      var td = document.createElement('div');
      td.className = 'eh-globo__ciudades eh-globo__disputas';
      td.innerHTML =
        '<p class="eh-globo__ciudades-tit">' + disputas.length + ' disputas de tierra y mar ' +
        '<span class="eh-tenue">· ' + abiertas + ' sin resolver · pulsa una y el globo va</span></p>' +
        '<div class="eh-globo__ciudades-lista" role="group" aria-label="Disputas de límites">' +
        disputas.map(function (x, i) {
          var e = estadoDe(x);
          return '<button type="button" data-d="' + i + '" title="' + EH.escapar(e.t) + '">' +
            '<i class="eh-globo__rombo" style="background:' + e.c + '"></i>' +
            EH.escapar(x.d.titulo) + '</button>';
        }).join('') + '</div>' +
        '<p class="eh-globo__disputas-nota eh-tenue">Revisado al ' +
        EH.escapar((EH.DISPUTAS && EH.DISPUTAS.fecha) || '') + '. El color dice en qué estado está ' +
        'cada disputa, no quién tiene razón.</p>' +
        /* LO QUE VIENE: las fechas en que alguna ficha puede cambiar. Es lo
           que dice cuando este mapa se quedara viejo, y que mirar al volver. */
        (proximas.length
          ? '<details class="eh-globo__disputas-faltan" open><summary>Próximas fechas (' + proximas.length +
            ')</summary><ul class="eh-globo__proximas">' + proximas.map(function (x) {
              var i = indicePorId[x.id];
              return '<li><span class="eh-globo__proxima-fecha">' + EH.escapar(fechaCorta(x.fecha)) + '</span> ' +
                (i !== undefined
                  ? '<button type="button" data-d="' + i + '">' + EH.escapar(x.texto) + '</button>'
                  : EH.escapar(x.texto)) + '</li>';
            }).join('') + '</ul></details>'
          : '') +
        (faltan.length
          ? '<details class="eh-globo__disputas-faltan"><summary>Lo que falta por investigar (' + faltan.length +
            ')</summary><ul>' + faltan.map(function (f) { return '<li>' + EH.escapar(f) + '</li>'; }).join('') +
            '</ul></details>'
          : '');
      td.addEventListener('click', function (ev) {
        var b = ev.target.closest('button[data-d]');
        if (b) irADisputa(disputas[parseInt(b.getAttribute('data-d'), 10)]);
      });
      contenedor.appendChild(td);
    }

    /* Un renglon bajo el globo que dice cuanta gente hay y DE DONDE SALE ESE
       NUMERO. Sin esto, en modo demostracion el mapa ensenaria los inscritos
       del navegador de quien mira como si fueran los del movimiento. */
    var avisoMiembros = document.createElement('p');
    avisoMiembros.className = 'eh-globo__miembros';
    contenedor.appendChild(avisoMiembros);

    function sincronizarMiembros() {
      if (!capas.miembros) { avisoMiembros.textContent = ''; return; }
      if (!miembrosListos) { avisoMiembros.textContent = 'Contando inscritos…'; return; }
      /* El nombre es EH.CONFIG, en mayusculas, igual que lo lee datos.js. Con
         EH.config esto daba siempre "modo demostracion", que ahora mismo es la
         respuesta correcta por casualidad y dejaria de serlo el dia que Joan
         conecte Supabase: el mapa seguiria avisando de algo que ya no pasa. */
      var C = EH.CONFIG || {};
      var nube = !!(C.supabase && C.supabase.url && C.supabase.anon);
      if (!totalMiembros) {
        avisoMiembros.innerHTML = 'Todavía no hay nadie inscrito' +
          (nube ? '.' : ' <span class="eh-tenue">· y en modo demostración solo se vería a quien se inscriba en este mismo navegador</span>');
        return;
      }
      var cuantas = Object.keys(porNacion).length;
      avisoMiembros.innerHTML = '<strong>' + totalMiembros + '</strong> ' +
        (totalMiembros === 1 ? 'persona inscrita' : 'personas inscritas') +
        ' en ' + cuantas + (cuantas === 1 ? ' nación' : ' naciones') +
        (nube ? '' : ' <span class="eh-tenue">· modo demostración: solo las de este navegador, no las del movimiento</span>');
    }
    sincronizarMiembros();

    if (opciones.leyenda !== false) {
      var ley = document.createElement('div');
      ley.className = 'eh-mapa__leyenda';
      ley.innerHTML =
        '<span><i class="eh-mapa__punto" style="background:#d9a441"></i> Estado soberano</span>' +
        '<span><i class="eh-mapa__punto" style="background:#c98a1e"></i> Territorio</span>' +
        '<span><i class="eh-mapa__punto" style="background:#b51d33"></i> En disputa</span>' +
        '<span><i class="eh-mapa__punto" style="background:#3a6ea5"></i> Herencia y diáspora</span>' +
        '<span><i class="eh-mapa__punto" style="background:#4a3a52"></i> Huella sefardí</span>' +
        '<span><i class="eh-mapa__punto eh-mapa__punto--mar"></i> Zona económica exclusiva</span>' +
        '<span><i class="eh-mapa__punto eh-mapa__punto--mar-disputa"></i> Zona en disputa</span>' +
        '<span><i class="eh-mapa__punto eh-mapa__punto--linea-tratado"></i> Límite por tratado</span>' +
        '<span><i class="eh-mapa__punto eh-mapa__punto--linea-tribunal"></i> Límite por sentencia</span>' +
        '<span><i class="eh-mapa__punto eh-mapa__punto--linea-disputa"></i> Límite sin resolver</span>' +
        /* La leyenda de las disputas sale de los MISMOS colores con que se
           pintan, y solo de los estados que hay: antes estaba escrita a mano
           y le faltaban el regimen comun y la Antartida congelada. */
        (disputas
          ? Object.keys(ESTADO_DISPUTA).filter(function (k) {
              return disputas.some(function (x) { return x.d.estado === k; });
            }).map(function (k) {
              return '<span><i class="eh-mapa__punto eh-mapa__punto--rombo" style="background:' +
                ESTADO_DISPUTA[k].c + '"></i> ' + EH.escapar(ESTADO_DISPUTA[k].t) + '</span>';
            }).join('') +
            '<span><i class="eh-mapa__punto eh-mapa__punto--rayado"></i> Mar calculado, no trazado</span>'
          : '') +
        '<span><i class="eh-mapa__punto" style="background:#f0c46b;box-shadow:0 0 0 1px #12080a"></i> Ciudad con historia</span>' +
        '<span>Arrastra para girar · pellizca, o pulsa el globo y usa la rueda, para acercar · doble clic para ir</span>';
      contenedor.appendChild(ley);
    }

    medir();
    sincronizarMandos();
    pintar();
    requestAnimationFrame(latido);

    /* Un observador del contenedor, no el resize de la ventana: así se entera
       de que una columna de al lado se ha plegado. */
    if (window.ResizeObserver) {
      new ResizeObserver(function () { medir(); repintar(); }).observe(contenedor);
    } else {
      window.addEventListener('resize', function () { medir(); repintar(); });
    }

    /* Y una segunda red al volver de segundo plano. Con la pestaña oculta el
       navegador NO entrega los avisos del observador —comprobado: con
       document.hidden en true, un ResizeObserver recién creado no se dispara
       ni una vez—. Así que si alguien gira el teléfono mientras tiene la
       pestaña detrás, al volver el globo seguiría con el tamaño de antes:
       estirado y borroso. Aquí se vuelve a medir al reaparecer. */
    document.addEventListener('visibilitychange', function () {
      if (!document.hidden) { medir(); repintar(); }
    });

    return {
      irA: irA,
      volar: volar,
      elegir: function (id) { elegido = id; repintar(); },
      capa: function (k, v) { capas[k] = v; repintar(); }
    };
  }

  return {
    /* Misma firma que EH.mapa.pintar, para que cambiar de mapa plano a globo
       sea cambiar una palabra en la página y nada más. */
    pintar: function (contenedor, naciones, opciones) {
      if (!contenedor) return null;
      if (!EH.MUNDO) {
        /* Antes esto no decía nada y el hueco quedaba en negro: una portada
           con un agujero y ninguna explicación. */
        contenedor.innerHTML = '<p class="eh-tabla__vacio">No se pudieron cargar las fronteras del mundo ' +
          '(falta <code>activos/js/mundo.js</code>).</p>';
        return null;
      }
      return crear(contenedor, naciones, opciones || {});
    },
    ficha: function (contenedor, nacion, punto) {
      var apiPrev = contenedor.__ehGlobo;
      if (apiPrev && apiPrev.panelAbierto && apiPrev.panelAbierto()) {
        apiPrev.ampliarCon({ tipo: 'nacion', dato: nacion });
        return;
      }
      /* La ficha de nación es la de mapa.js. El globo solo le dice dónde
         ponerla —le pasa un objeto que finge ser un elemento con posición,
         porque es lo único que esa función lee— y le cambia el pie: en vez del
         enlace que se lleva al visitante a otra página, un botón que abre el
         panel AL LADO del globo. */
      if (!EH.mapa || !EH.mapa.ficha) return;
      var c = contenedor.getBoundingClientRect();
      var api = contenedor.__ehGlobo;
      EH.mapa.ficha(contenedor, nacion, {
        getBoundingClientRect: function () {
          return { left: c.left + (punto ? punto.x : c.width / 2), top: c.top + (punto ? punto.y : 40) };
        }
      }, api ? { pie: api.pieAmpliar() } : null);
      if (api) api.engancharAmpliar(contenedor, { tipo: 'nacion', dato: nacion });
    }
  };
})();
