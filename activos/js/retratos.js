/* =========================================================================
   LOS RETRATOS
   =========================================================================
   POR QUÉ ESTÁN DIBUJADOS A MANO EN SVG Y NO SON FOTOGRAFÍAS NI IMÁGENES
   Tres razones, y las tres importan:

   1. DERECHOS. Blas de Lezo murió en 1741 y su imagen no tiene dueño, pero
      los retratos que circulan de él SÍ: el más conocido es un óleo muy
      posterior, y la fotografía de un cuadro tiene su propio derecho. Un
      dibujo propio no se lo debe a nadie.

   2. PESO Y PROMESA. La plataforma abre con doble clic y sin internet. Un
      retrato en SVG son seis kilobytes que viajan con la página.

   3. HONRADEZ. Esto es un DIBUJO y se nota que lo es. No existe ningún
      retrato del natural de Blas de Lezo: cualquier cara concreta que se le
      ponga es una invención. Un grabado lo admite a la vista; una imagen que
      pareciera una fotografía de época lo escondería, y eso sería falsificar
      un documento histórico en un sitio que presume de no mentir.

   SI SE QUIERE PONER AQUÍ UNA IMAGEN GENERADA CON IA
   Se puede, y la ficha la prefiere si existe: basta guardar el archivo en
   `activos/img/blas-de-lezo.jpg` y añadir `imagen` a su ficha en
   contenido-mapa.js. Pero debe ir rotulada como ilustración, no como retrato
   de época. La diferencia entre esas dos cosas es la credibilidad de todo lo
   demás que diga el sitio.

   =========================================================================
   LO QUE EL DIBUJO AFIRMA, Y POR QUÉ
   =========================================================================
   Las mutilaciones no son adorno: son el personaje, y dibujarlas del lado
   equivocado es un error que quien lo conozca ve en un segundo.

   - PARCHE EN EL OJO IZQUIERDO. El suyo, no el de quien mira: por eso en la
     imagen cae a la DERECHA. Lo perdió en 1707 en el sitio de Tolón.
   - BRAZO DERECHO INÚTIL: cuelga muerto, sin doblar el codo, a la IZQUIERDA
     de la imagen. Un disparo se lo inutilizó en el sitio de Barcelona, 1714.
   - LA PIERNA NO SE VE, porque es un busto. La izquierda la perdió a los
     quince años en Vélez-Málaga, en 1704, y de ahí lo de «Patapalo».

   PRIMER INTENTO FALLIDO, anotado para que no se repita: con la cabeza
   pequeña, centrada y con los hombros dentro del marco, salía un muñeco de
   aplicación. Lo que lo arregló fue encuadre de retrato de verdad —cabeza
   grande, hombros saliéndose por los lados— y construir la cara por PLANOS de
   luz y sombra en vez de rellenarla de un solo color. Un ojo redondo también
   lo estropeaba: en una cara dura el ojo es almendrado y la ceja va baja.
   ========================================================================= */

window.EH = window.EH || {};

EH.retratos = (function () {
  'use strict';

  var PIEL = '#c99a74', PIEL_S = '#a3744f', PIEL_SS = '#7d5436', PIEL_L = '#e0b792';
  var PELO = '#1d1216', TELA = '#6d1626', TELA_S = '#4a0e1a', ORO = '#c9962f';

  return {
    'blas-de-lezo': function () {
      return '' +
      '<svg viewBox="0 0 200 248" xmlns="http://www.w3.org/2000/svg" role="img" ' +
        'aria-label="Retrato dibujado de Blas de Lezo: busto de un oficial de la Armada española del siglo XVIII, ' +
        'con sombrero de tres picos, parche sobre el ojo izquierdo y el brazo derecho caído.">' +
        '<defs>' +
          /* Rayado de grabado: líneas finas y paralelas que dan volumen sin un
             solo degradado. Es lo que hace que parezca una estampa de su siglo
             y no una silueta plana. */
          '<pattern id="ehRay" width="2.6" height="2.6" patternUnits="userSpaceOnUse" patternTransform="rotate(40)">' +
            '<line x1="0" y1="0" x2="0" y2="2.6" stroke="#2a1008" stroke-width=".9" opacity=".34"/></pattern>' +
          '<radialGradient id="ehFondo" cx="38%" cy="26%" r="84%">' +
            '<stop offset="0" stop-color="#4a2f3b"/><stop offset=".62" stop-color="#2a1a22"/>' +
            '<stop offset="1" stop-color="#110a0e"/></radialGradient>' +
          '<linearGradient id="ehOro" x1="0" y1="0" x2="0" y2="1">' +
            '<stop offset="0" stop-color="#f0c46b"/><stop offset="1" stop-color="#8a6520"/></linearGradient>' +
          '<clipPath id="ehMarco"><rect x="5" y="5" width="190" height="238" rx="7"/></clipPath>' +
        '</defs>' +

        '<rect x="5" y="5" width="190" height="238" rx="7" fill="url(#ehFondo)"/>' +
        '<g clip-path="url(#ehMarco)">' +

          /* Separa la figura del fondo sin contorno blanco, que es lo que hace
             que una silueta parezca pegatina. */
          '<ellipse cx="100" cy="112" rx="82" ry="92" fill="#d9a441" opacity=".075"/>' +

          /* ================= CASACA =================
             Los hombros SE SALEN del marco por los lados. Es lo que convierte
             un monigote centrado en un retrato: en el primer intento cabían
             enteros y la figura flotaba. */
          '<path d="M100 170 C62 172 24 190 10 222 L2 248 L198 248 L190 222 C176 190 138 172 100 170 Z" ' +
            'fill="' + TELA + '"/>' +
          '<path d="M100 170 C62 172 24 190 10 222 L2 248 L198 248 L190 222 C176 190 138 172 100 170 Z" ' +
            'fill="url(#ehRay)"/>' +
          /* Lado en sombra: la luz entra por la izquierda de la imagen. */
          '<path d="M100 170 C138 172 176 190 190 222 L198 248 L120 248 L112 180 Z" fill="' + TELA_S + '" opacity=".72"/>' +

          /* Solapas con vivo de oro y botonadura: uniforme de oficial de la
             Armada. Es lo que lo separa de un pirata de verdad, que era
             justamente la gracia del encargo. */
          '<path d="M100 176 L68 248 L92 248 L100 196 L108 248 L132 248 Z" fill="#f0e3d2" opacity=".93"/>' +
          '<path d="M100 176 L68 248 M100 176 L132 248" fill="none" stroke="' + ORO + '" stroke-width="2"/>' +
          '<path d="M68 196 L40 208 L34 248 L62 240 Z" fill="' + TELA_S + '" stroke="' + ORO + '" stroke-width="1.5"/>' +
          '<path d="M132 196 L160 208 L166 248 L138 240 Z" fill="' + TELA_S + '" stroke="' + ORO + '" stroke-width="1.5"/>' +
          '<g fill="url(#ehOro)" stroke="#5e430f" stroke-width=".5">' +
            '<circle cx="100" cy="212" r="3.4"/><circle cx="100" cy="228" r="3.4"/><circle cx="100" cy="244" r="3.4"/>' +
          '</g>' +

          /* ================= BRAZO DERECHO, CAÍDO =================
             El suyo es el derecho: en la imagen, el de la IZQUIERDA. Cuelga
             muerto, pegado al cuerpo, SIN DOBLAR EL CODO, y la bocamanga mira
             al suelo en vez de sostener nada. Es la única manera de dibujar un
             brazo inútil sin ponerle un cartel al lado. */
          '<path d="M30 206 C16 222 10 240 9 248 L44 248 C44 232 48 216 56 204 Z" fill="' + TELA + '" ' +
            'stroke="#26070f" stroke-width="2.2"/>' +
          '<path d="M30 206 C16 222 10 240 9 248 L44 248 C44 232 48 216 56 204 Z" fill="url(#ehRay)"/>' +
          '<path d="M12 236 L43 236 L44 248 L9 248 Z" fill="' + TELA_S + '" stroke="' + ORO + '" stroke-width="1.4"/>' +

          /* ================= PELO, detrás ================= */
          '<path d="M58 78 C40 100 38 142 50 178 C64 174 72 152 69 124 Z" fill="' + PELO + '"/>' +
          '<path d="M142 78 C160 100 162 142 150 178 C136 174 128 152 131 124 Z" fill="' + PELO + '"/>' +
          /* Bucles enrollados a la altura de la oreja: era el peinado del
             oficial de su siglo, y es lo que distingue una peluca de epoca de
             una melena lisa. Sin ellos el pelo caia como un velo. */
          '<g fill="#2b1b22" stroke="' + PELO + '" stroke-width="1.3">' +
            '<ellipse cx="51" cy="130" rx="11.5" ry="8"/><ellipse cx="54" cy="149" rx="10" ry="7"/>' +
            '<ellipse cx="149" cy="130" rx="11.5" ry="8"/><ellipse cx="146" cy="149" rx="10" ry="7"/>' +
          '</g>' +

          /* ================= CUELLO ================= */
          '<path d="M81 136 L119 136 L123 172 C113 180 87 180 77 172 Z" fill="' + PIEL + '"/>' +
          '<path d="M81 136 L119 136 L123 172 C113 180 87 180 77 172 Z" fill="' + PIEL_SS + '" opacity=".45"/>' +
          /* Corbatín de lino */
          '<path d="M100 158 C86 160 76 170 74 182 C86 190 114 190 126 182 C124 170 114 160 100 158 Z" ' +
            'fill="#f4ece0" stroke="#bda894" stroke-width="1"/>' +

          /* ================= CARA, POR PLANOS =================
             Base, luego el lado en sombra, luego el hueco del pómulo. Tres
             tonos planos leen como un grabado; un relleno de un solo color
             lee como una aplicación, que es lo que pasaba antes. */
          '<path d="M100 48 C73 48 60 68 60 94 C60 120 77 142 100 145 C123 142 140 120 140 94 C140 68 127 48 100 48 Z" ' +
            'fill="' + PIEL + '"/>' +
          '<path d="M100 48 C127 48 140 68 140 94 C140 120 123 142 100 145 C109 136 115 118 115 94 C115 68 109 54 100 48 Z" ' +
            'fill="' + PIEL_S + '" opacity=".55"/>' +
          /* Pómulos hundidos y mandíbula marcada: el «duro» del encargo. Una
             cara redonda con parche parece un disfraz de carnaval. */
          '<path d="M70 94 C76 104 80 110 84 112 C78 114 70 108 68 98 Z" fill="' + PIEL_SS + '" opacity=".4"/>' +
          '<path d="M130 94 C124 104 120 110 116 112 C122 114 130 108 132 98 Z" fill="' + PIEL_SS + '" opacity=".5"/>' +
          '<path d="M73 118 C81 133 90 140 100 143 C110 140 119 133 127 118" ' +
            'fill="none" stroke="' + PIEL_SS + '" stroke-width="1.6" opacity=".55"/>' +
          /* Barba de dos días: sin esto la cara sale demasiado limpia para un
             hombre que acaba de pasar 67 días de asedio. */
          '<path d="M71 110 C77 136 87 146 100 148 C113 146 123 136 129 110 C123 130 112 138 100 139 C88 138 77 130 71 110 Z" ' +
            'fill="#3a2a28" opacity=".18"/>' +
          '<path d="M100 48 C73 48 60 68 60 94 C60 120 77 142 100 145 C123 142 140 120 140 94 C140 68 127 48 100 48 Z" ' +
            'fill="url(#ehRay)" opacity=".5"/>' +

          /* ================= OJO DERECHO (el que conservó) =================
             A la izquierda de la imagen. Almendrado, nunca redondo: un círculo
             sale canica y desarma la cara entera. */
          '<path d="M70 89 C76 82 90 81 96 88 C90 95 76 96 70 89 Z" fill="#efe7dd"/>' +
          '<clipPath id="ehOjoBL"><path d="M70 89 C76 82 90 81 96 88 C90 95 76 96 70 89 Z"/></clipPath>' +
          '<g clip-path="url(#ehOjoBL)">' +
            '<circle cx="83" cy="90" r="4.4" fill="#36220f"/>' +
            '<circle cx="83" cy="90" r="2" fill="#0d0708"/>' +
            '<circle cx="84.8" cy="88.2" r="1.1" fill="#fff" opacity=".9"/>' +
          '</g>' +
          /* El parpado, ENCIMA del iris y bajando hasta tapar casi un tercio. */
          '<path d="M69 88 C76 81 91 80 97 87" fill="none" stroke="#241610" stroke-width="2.6" stroke-linecap="round"/>' +
          '<path d="M70 90 C76 96 90 95 96 89" fill="none" stroke="#8a6245" stroke-width="1.2"/>' +
          /* La ceja baja y quebrada es casi todo el gesto: subida, la misma
             cara sale asustada. */
          '<path d="M66 76 C74 69 90 69 98 75" fill="none" stroke="' + PELO + '" stroke-width="4.2" stroke-linecap="round"/>' +
          '<path d="M72 98 C80 102 90 101 95 97" fill="none" stroke="' + PIEL_SS + '" stroke-width="1.2" opacity=".6"/>' +

          /* ================= EL PARCHE: ojo IZQUIERDO suyo ================= */
          '<path d="M58 70 C84 62 120 62 142 72" fill="none" stroke="#120a0d" stroke-width="3.2"/>' +
          '<path d="M104 78 C112 73 128 73 134 80 C134 95 127 101 118 101 C108 101 104 92 104 78 Z" ' +
            'fill="#140b0e" stroke="#050304" stroke-width="1.2"/>' +
          '<path d="M107 83 C115 79 126 79 131 84" fill="none" stroke="#453036" stroke-width="1"/>' +
          /* La cicatriz que baja desde la ceja perdida. */
          '<path d="M126 66 L116 104" fill="none" stroke="#9e6a52" stroke-width="2.2" stroke-linecap="round" opacity=".9"/>' +

          /* ================= NARIZ ================= */
          '<path d="M98 88 C96 100 93 110 90 114 C94 117 102 117 106 114" ' +
            'fill="none" stroke="' + PIEL_SS + '" stroke-width="2.2" stroke-linecap="round"/>' +
          '<path d="M98 90 C100 102 102 110 105 114" fill="none" stroke="' + PIEL_L + '" stroke-width="1.6" opacity=".55"/>' +

          /* ================= BOCA =================
             Recta, apretada y con las comisuras hacia abajo. Es la diferencia
             entre un hombre duro y un hombre enfadado. */
          '<path d="M84 126 C92 123 108 123 116 126" fill="none" stroke="#5e3a2e" stroke-width="3" stroke-linecap="round"/>' +
          '<path d="M82 126 L79 130 M118 126 L121 130" fill="none" stroke="#5e3a2e" stroke-width="2" stroke-linecap="round"/>' +

          /* ================= PELO delantero ================= */
          '<path d="M100 42 C70 42 57 62 59 90 C61 80 65 70 73 64 C86 56 114 56 127 64 C135 70 139 80 141 90 ' +
            'C143 62 130 42 100 42 Z" fill="' + PELO + '"/>' +

          /* ================= SOMBRERO DE TRES PICOS =================
             Vale más que un adorno: es lo que hace que la silueta se reconozca
             de lejos y de un vistazo como un oficial del XVIII. Sin él, con el
             parche y nada más, la figura leía como pirata de disfraz. */
          /* LA CORONA primero, y que asome por encima del ala. En el intento
             anterior el ala se la comia entera y el sombrero quedaba reducido
             a un arco fino: de lejos parecia un platano sobre la cabeza. */
          '<path d="M70 50 C70 26 82 17 100 17 C118 17 130 26 130 50 Z" fill="#30222a"/>' +
          '<path d="M100 17 C118 17 130 26 130 50 L113 50 C115 30 110 21 100 17 Z" fill="#1c1218"/>' +
          '<path d="M70 45 C82 41 118 41 130 45" fill="none" stroke="' + ORO + '" stroke-width="2.2"/>' +
          /* EL ALA, como una banda GRUESA con sus dos cantos y no como una
             linea. Los picos laterales levantados son la silueta que hace que
             un sombrero de tres picos se reconozca de un vistazo. */
          '<path d="M24 62 C34 36 60 22 100 22 C140 22 166 36 176 62 ' +
                   'C168 59 162 52 156 47 C143 52 128 54 100 54 C72 54 57 52 44 47 ' +
                   'C38 52 32 59 24 62 Z" fill="#1c1218"/>' +
          '<path d="M100 22 C140 22 166 36 176 62 C168 59 162 52 156 47 C143 52 128 54 100 54 Z" fill="#2a1d24"/>' +
          '<path d="M24 62 C34 36 60 22 100 22 C140 22 166 36 176 62" fill="none" ' +
            'stroke="url(#ehOro)" stroke-width="2.4"/>' +
          '<path d="M44 47 C57 52 72 54 100 54 C128 54 143 52 156 47" fill="none" ' +
            'stroke="#55434b" stroke-width="1.4"/>' +
          /* La escarapela roja, al lado izquierdo del sombrero. */
          '<circle cx="48" cy="44" r="7" fill="#a3122a" stroke="' + ORO + '" stroke-width="1.8"/>' +
          '<circle cx="48" cy="44" r="2.5" fill="' + ORO + '"/>' +

        '</g>' +
        '<rect x="5" y="5" width="190" height="238" rx="7" fill="none" stroke="url(#ehOro)" stroke-width="2.4"/>' +
        '<rect x="10" y="10" width="180" height="228" rx="4" fill="none" stroke="#8a6520" stroke-width=".7" opacity=".55"/>' +
      '</svg>';
    }
  };
})();
