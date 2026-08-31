/* =========================================================================
   LOS DOCUMENTOS LEGALES
   =========================================================================
   POR QUÉ ESTÁN AQUÍ Y NO ESCRITOS EN OCHO HTML
   Porque describen lo que hace el código, y el código cambia. Con los ocho
   documentos en un solo archivo, actualizar la lista de datos que se recogen
   es un cambio en un sitio. Repartidos en ocho páginas, al tercer cambio hay
   tres versiones distintas de la verdad circulando, y en materia de datos
   personales eso ya es una infracción.

   ESTOS TEXTOS DESCRIBEN LA PLATAFORMA REAL, NO UNA PLANTILLA.
   Cada afirmación se puede comprobar leyendo el código:
     · "no pedimos cédula" → mira los campos de inscripcion.html.
     · "el honor no se transfiere" → no existe ninguna función que lo mueva.
     · "no custodiamos dinero" → busca "saldo" o "billetera" en el proyecto y
        no aparecen en ninguna parte, a propósito.
   Si algún día el código deja de cumplir una de estas frases, el bug no está
   en el código: está aquí.

   LO QUE FALTA Y SE DICE: mientras no exista la asociación con NIT, el
   responsable del tratamiento es el fundador EN PERSONA. Es incómodo y es la
   verdad jurídica. En cuanto se constituya, se rellena EH.CONFIG.razonSocial
   y estos textos se actualizan solos.
   ========================================================================= */

window.EH = window.EH || {};

(function () {
  'use strict';

  var C = EH.CONFIG;
  var RESP = C.razonSocial
    ? C.razonSocial + (C.nit ? ', NIT ' + C.nit : '')
    : C.fundador.nombre + ' (persona natural, mientras la asociación del movimiento no esté constituida)';
  var CORREO = C.correo || '[correo pendiente de publicar]';

  EH.LEGAL = {

    /* ================================================================= */
    'aviso-de-privacidad': {
      titulo: 'Aviso de privacidad',
      entradilla: 'La versión corta. La larga está en la política de tratamiento.',
      secciones: [
        { t: 'Quién responde por tus datos', c:
          'Responsable: ' + RESP + '. Domicilio: ' + (C.fundador.ciudad || 'Colombia') + '. ' +
          'Correo para asuntos de datos: ' + CORREO + '.\n\n' +
          'Mientras el movimiento no esté constituido como asociación con NIT, quien responde ' +
          'legalmente por tus datos es el fundador en persona. Lo decimos porque es la verdad y ' +
          'porque tienes derecho a saber a quién reclamarle.' },

        { t: 'Qué recogemos', c:
          'Nombre (puede ser un seudónimo), correo electrónico, teléfono si lo das, nación, ' +
          'ciudad, oficio, una biografía opcional y en qué puedes ayudar. Y, solo si lo ' +
          'autorizas en la casilla marcada como sensible, tu afiliación a este movimiento.\n\n' +
          'NO pedimos cédula, pasaporte, foto de documento, dirección exacta ni datos ' +
          'biométricos. No los necesitamos para afiliarte y multiplicarían el daño de una ' +
          'filtración.' },

        { t: 'Por qué tu afiliación es un dato especial', c:
          'La afiliación política está clasificada como DATO SENSIBLE por el artículo 5 de la ' +
          'Ley 1581 de 2012 en Colombia, y como categoría especial por el artículo 9 del RGPD ' +
          'europeo. Por eso su autorización va en una casilla propia, sin premarcar, separada de ' +
          'todo lo demás.\n\n' +
          'NO estás obligado a darla. Puedes leer todo este sitio, el manifiesto, el plan y los ' +
          'materiales sin afiliarte. Solo el estatus de miembro depende de esa casilla, porque ' +
          'ese dato ES la membresía.' },

        { t: 'Para qué los usamos', c:
          'Acreditarte como miembro, comunicarnos contigo, organizar actividades y llevar el ' +
          'registro interno del movimiento. Nada más.\n\n' +
          'No vendemos ni cedemos tu información a terceros con fines comerciales ni electorales ' +
          'ajenos. No publicamos la lista de miembros. No hay píxeles de seguimiento de redes ' +
          'sociales en este sitio, a propósito: delatarían tu militancia ante un tercero.' },

        { t: 'Tus derechos', c:
          'Conocer, actualizar, rectificar y suprimir tus datos; pedir prueba de la autorización ' +
          'que diste y con qué texto; revocarla; y presentar quejas ante la autoridad de tu país ' +
          '(en Colombia, la Superintendencia de Industria y Comercio).\n\n' +
          'Atendemos consultas en 10 días hábiles, prorrogables 5, y reclamos en 15 días hábiles, ' +
          'prorrogables 8, conforme a los artículos 14 y 15 de la Ley 1581 de 2012.\n\n' +
          'Puedes ejercerlos sin escribirle a nadie, desde la página «Ver, exportar y borrar mis ' +
          'datos». El botón de borrado funciona de verdad y borra de verdad.' }
      ]
    },

    /* ================================================================= */
    'politica-de-tratamiento-de-datos': {
      titulo: 'Política de tratamiento de la información',
      entradilla: 'El documento que exige el artículo 17 de la Ley 1581 de 2012.',
      secciones: [
        { t: 'Responsable', c:
          RESP + '. Correo: ' + CORREO + '. Domicilio: ' + (C.fundador.ciudad || 'Colombia') + '.' },

        { t: 'Tratamientos y finalidades, una por una', c:
          '1. Acreditar la condición de miembro del movimiento.\n' +
          '2. Comunicar convocatorias, actos y decisiones del movimiento.\n' +
          '3. Organizar núcleos por ciudad y por nación.\n' +
          '4. Llevar el registro de aportes a la Hispanidad y el nivel de participación.\n' +
          '5. Operar el muro y el chat interno entre miembros.\n' +
          '6. Registrar aportes económicos anunciados, para poder conciliarlos y publicarlos.\n' +
          '7. Medir cuánta gente participa, sin perfilar ideológicamente a nadie.' },

        { t: 'Categorías de datos, y cuál es sensible', c:
          'Datos de identificación y contacto: nombre o seudónimo, correo, teléfono opcional.\n' +
          'Datos de ubicación aproximada: nación y ciudad. Nunca dirección exacta.\n' +
          'Datos de perfil: oficio, biografía, en qué puedes ayudar.\n' +
          'Contenido que publicas: mensajes del muro y del chat.\n\n' +
          'DATO SENSIBLE: la afiliación a este movimiento político (art. 5, Ley 1581 de 2012). ' +
          'Se trata únicamente con autorización previa, expresa e informada, recogida en casilla ' +
          'separada y sin premarcar, y se puede revocar en cualquier momento.' },

        { t: 'Cómo guardamos la prueba de tu autorización', c:
          'La carga de probar que autorizaste es nuestra, no tuya. Por eso guardamos, por cada ' +
          'autorización: el tipo, si la diste o la negaste, la versión exacta del texto que se te ' +
          'mostró, la fecha y hora, y el navegador desde el que la diste.\n\n' +
          'Esas filas no se sobrescriben nunca. Revocar una autorización es insertar una fila ' +
          'nueva, no borrar la vieja: si se pudiera reescribir, no sería prueba de nada. Un ' +
          'disparador de la base de datos lo impide de verdad, no solo por convención.' },

        { t: 'Dónde viven los datos y quién los toca', c:
          'Mientras la plataforma está en modo demostración, los datos viven exclusivamente en el ' +
          'navegador de cada persona y no salen de su equipo. Nadie más los ve, ni siquiera el ' +
          'fundador.\n\n' +
          'Cuando se conecte el servidor, se alojarán en la infraestructura de Supabase, fuera de ' +
          'Colombia, con acceso restringido fila por fila: un miembro solo puede leer su propia ' +
          'ficha y los perfiles que otros han marcado como públicos. Esa restricción no depende ' +
          'de la interfaz sino de la base de datos, que es lo único que de verdad protege.' },

        { t: 'Cuánto tiempo y qué pasa si te vas', c:
          'Tus datos se conservan mientras seas miembro. Si te retiras, se borran: la ficha, el ' +
          'contacto, tus publicaciones, tus mensajes y tus aportes. Del registro de adhesiones ' +
          'solo queda un contador anónimo, sin tu nombre ni tu correo.\n\n' +
          'El registro de autorizaciones se conserva el tiempo que exija la ley, porque es la ' +
          'prueba de que el tratamiento fue lícito mientras duró.' },

        { t: 'Vigencia', c:
          'Versión ' + C.versionConsentimiento + '. Los cambios sustanciales se comunican antes ' +
          'de aplicarse, y cuando afecten al dato sensible se vuelve a pedir la autorización: no ' +
          'se reescribe la versión vieja.' }
      ]
    },

    /* ================================================================= */
    'terminos-y-condiciones': {
      titulo: 'Términos y condiciones de uso',
      entradilla: 'Qué es esta plataforma y, sobre todo, qué no es.',
      secciones: [
        { t: 'Qué NO es esta plataforma', c:
          'No es una entidad financiera y no custodia dinero de nadie.\n' +
          'No es un partido político con personería jurídica.\n' +
          'No es una entidad estatal ni representa a ningún Estado.\n' +
          'No expide ni expedirá documentos con valor ante ninguna autoridad.\n' +
          'No es una oferta de inversión ni promete rentabilidad alguna.\n\n' +
          'Es el sitio de una asociación civil de personas que proponen la unión de los pueblos ' +
          'hispanohablantes por medios democráticos.' },

        { t: 'La presidencia del movimiento', c:
          'La presidencia es un cargo estatutario de esta asociación, como el de cualquier ' +
          'fundación o federación. Su ámbito es el movimiento y nada más. No ejerce función ' +
          'pública, no sustituye a ningún gobierno y no invoca autoridad sobre ningún Estado. ' +
          'Es provisional hasta el Primer Congreso, que elegirá la dirección.' },

        { t: 'Tu cuenta', c:
          'Hay que ser mayor de 18 años. Una cuenta por persona. Los datos deben ser veraces, ' +
          'aunque el nombre puede ser un seudónimo si militar tiene un costo donde vives.\n\n' +
          'Inscribirse es gratis y siempre lo será. No existe ningún nivel de membresía de pago.' },

        { t: 'El honor y los niveles de participación', c:
          'El honor NO es dinero y nunca lo será. No se compra, no se vende, no se transfiere, ' +
          'no se canjea y no da derecho a ninguna parte de los aportes del movimiento, ni ahora ' +
          'ni después.\n\n' +
          'Aportar dinero da CERO honor. Traer gente da honor solo por quien invitas ' +
          'directamente, nunca por quien invitaron ellos, y con un techo del 25 % de tu total.\n\n' +
          'El movimiento puede corregir o retirar honor obtenido con cuentas falsas o con datos ' +
          'inventados. Cada punto es explicable y apelable: tienes el historial completo en tu ficha.' },

        { t: 'Reglas de conducta', c:
          'Se suspende la cuenta a quien difunda xenofobia, racismo o incitación a la violencia; ' +
          'a quien suplante a otra persona; a quien pida dinero en nombre del movimiento; a quien ' +
          'suba listas de contactos ajenos o cree cuentas por otros; y a quien publique datos ' +
          'personales de terceros sin su permiso.' },

        { t: 'Responsabilidad', c:
          'La plataforma se ofrece tal como está. La información electoral de cada país se ' +
          'publica con su nivel de fiabilidad declarado y con el organismo al que hay que ' +
          'confirmarla: las leyes y los umbrales cambian con cada censo y cada calendario. ' +
          'Nadie debe recoger un solo apoyo sin confirmar antes la cifra vigente con la ' +
          'autoridad electoral de su país.' },

        { t: 'Ley aplicable', c:
          'Ley colombiana y jueces de Colombia. Los miembros de otros países conservan los ' +
          'derechos irrenunciables de su domicilio. Versión ' + C.versionConsentimiento + '.' }
      ]
    },

    /* ================================================================= */
    'politica-de-aportes': {
      titulo: 'Política de aportes y transparencia',
      entradilla: 'De dónde puede venir el dinero, de dónde no, y qué se publica.',
      secciones: [
        { t: 'El movimiento nunca custodia fondos', c:
          'Ni un peso pasa por esta plataforma. Cuando haya aportes, irán del aportante a un ' +
          'proveedor de pagos autorizado y de ahí a la cuenta bancaria de la entidad.\n\n' +
          'En el código de este sitio no existe ningún campo llamado saldo, billetera, monedero, ' +
          'recarga, retiro ni transferencia entre usuarios, y no existirá. Guardar dinero de ' +
          'terceros exige licencia de la Superintendencia Financiera.' },

        { t: 'El aporte no da nada a cambio', c:
          'Es voluntario y no otorga ningún derecho económico, participación, retorno, honor, ' +
          'nivel, insignia ni ventaja dentro de la plataforma. Quien aporta figura en el informe ' +
          'de transparencia y no en el ranking.\n\n' +
          'Un aporte con promesa de devolución deja de ser donación y entra en el terreno de la ' +
          'captación no autorizada, que es delito.' },

        { t: 'Fuentes prohibidas', c:
          'Aportes anónimos: prohibidos siempre.\n' +
          'Gobiernos extranjeros y, cuando el movimiento sea partido o campaña en un país, ' +
          'cualquier persona o empresa extranjera para la actividad electoral de ese país ' +
          '(Ley 1475 de 2011, art. 27, en Colombia).\n' +
          'Recursos de origen ilícito o destinados a fines antidemocráticos.\n' +
          'Personas o empresas con procesos por financiación de grupos armados ilegales, ' +
          'narcotráfico o delitos contra los mecanismos de participación democrática.\n' +
          'Efectivo en mano, criptomonedas a una billetera del movimiento, o transferencias a la ' +
          'cuenta personal de cualquier dirigente.' },

        { t: 'Dos bolsas separadas desde el primer día', c:
          'La actividad cultural y de opinión admite aportes internacionales. La actividad ' +
          'electoral de un país concreto, no. Por eso las cuentas se llevan separadas desde ' +
          'ahora: si se mezclaran, el día que el movimiento se inscriba ante una autoridad ' +
          'electoral habría que devolver dinero y explicarlo en público.' },

        { t: 'Transparencia', c:
          'El movimiento se compromete a publicar sus ingresos y gastos al menos cada tres ' +
          'meses, conciliados contra el extracto bancario y no contra su propia base de datos.\n\n' +
          'Si alguien te pide dinero en nombre de Los Estados Hispanos por transferencia, Nequi, ' +
          'Daviplata, criptomonedas o efectivo, no somos nosotros. Escríbenos a ' + CORREO + '.' }
      ]
    },

    /* ================================================================= */
    'reglamento-de-honor': {
      titulo: 'Reglamento del honor',
      entradilla: 'Cómo se gana, cómo se pierde y por qué nunca será dinero.',
      secciones: [
        { t: 'Las siete reglas', c:
          '1. Entrar es gratis y siempre lo será. No hay membresía de pago.\n' +
          '2. El honor no es dinero: no se compra, no se vende, no se transfiere, no se canjea.\n' +
          '3. Aportar dinero da CERO honor. Ni fijo ni proporcional.\n' +
          '4. Profundidad uno: ganas honor por quien invitas tú, jamás por quien invitaron ellos. ' +
          'Aquí no hay niveles ni red debajo de nadie.\n' +
          '5. El honor de invitar no puede pasar del 25 % de tu total, y cada invitación vale ' +
          'menos que la anterior.\n' +
          '6. Se pierde: si el invitado se va o resulta ser una cuenta falsa, esos puntos se ' +
          'revierten.\n' +
          '7. Cada punto es explicable y apelable, con su fecha y su motivo, en tu ficha.' },

        { t: 'Por qué estas reglas y no otras', c:
          'Porque la frontera entre un sistema de reconocimiento y un esquema piramidal es ' +
          'económica y es fina. Un esquema es piramidal cuando el beneficio del que recluta ' +
          'depende de que entren nuevos que paguen. Mientras nadie pague por entrar, nadie cobre ' +
          'por reclutar y el honor no valga dinero, no hay pirámide. Las siete reglas de arriba ' +
          'son exactamente lo que mantiene esas tres cosas en cero.' },

        { t: 'Los niveles', c:
          'Siete. Del uno al tres se suben solos y nadie los puede frenar. El cuatro y el cinco ' +
          'se ganan con honor, pero el equipo tiene que verificar el núcleo o el acto. El seis y ' +
          'el siete los nombra la dirección: cumplir los requisitos NO asciende, y se dice aquí ' +
          'para que nadie se lleve la sorpresa al llegar arriba.' },

        { t: 'Ningún premio con valor de mercado', c:
          'Los reconocimientos son simbólicos y públicos: una insignia, un nombre en una lista, ' +
          'la palabra en una asamblea, la coordinación de un núcleo. Si algún día hay un premio ' +
          'material, se financiará con presupuesto de la asociación y jamás se calculará sobre el ' +
          'número de personas que alguien haya traído.' }
      ]
    },

    /* ================================================================= */
    'politica-de-cookies': {
      titulo: 'Cookies y almacenamiento',
      entradilla: 'Lo que este sitio guarda en tu equipo. Es poco y es todo tuyo.',
      secciones: [
        { t: 'Este sitio no usa cookies', c:
          'Ninguna. Tampoco tiene analítica de terceros, ni píxeles de Meta, ni de TikTok, ni de ' +
          'Google. Es una decisión deliberada: en un sitio de afiliación política, un píxel de ' +
          'una red social delata tu militancia ante esa empresa con solo entrar.' },

        { t: 'Lo que sí guarda, en tu propio navegador', c:
          'estados_hispanos_plataforma_v1 — en modo demostración, todos los datos del movimiento. ' +
          'Vive solo en tu equipo.\n' +
          'estados_hispanos_sesion_v1 — quién eres, para no pedirte el correo cada vez.\n' +
          'eh_reclutador — el identificador de quien te invitó, si llegaste por el enlace de ' +
          'alguien, para reconocerle el aporte cuando te inscribas.\n\n' +
          'Se borran todos vaciando los datos de navegación de este sitio, o con el botón de ' +
          'borrado de la página de tus derechos.' },

        { t: 'Las tipografías', c:
          'El sitio pide dos tipografías a Google Fonts. Si prefieres que tu navegador no ' +
          'contacte con ese servidor, bloquéalo: la plataforma está diseñada para verse bien ' +
          'igualmente con las tipografías de tu sistema, y funciona entera sin internet.' }
      ]
    },

    /* ================================================================= */
    'seguridad-de-los-miembros': {
      titulo: 'Seguridad de los miembros',
      entradilla: 'Para quien vive donde militar tiene un costo personal.',
      secciones: [
        { t: 'Lo que podemos prometerte', c:
          'Puedes inscribirte con un seudónimo. No pedimos cédula, ni pasaporte, ni foto de ' +
          'documento, ni tu dirección: solo tu ciudad.\n\n' +
          'Puedes marcar tu ficha como no pública y participar sin que nadie te vea en la lista ' +
          'de miembros.\n\n' +
          'La lista completa de miembros no la puede leer nadie desde el navegador: ni tú, ni ' +
          'otro miembro. Solo el equipo, y a través del servidor.\n\n' +
          'Puedes borrar todo con un botón, sin escribirle a nadie y sin dar explicaciones.' },

        { t: 'Lo que NO podemos prometerte', c:
          'No podemos garantizar que un gobierno con capacidad técnica no pueda saber que ' +
          'visitaste este sitio. Ninguna plataforma puede prometer eso con honradez, y quien lo ' +
          'prometa te está mintiendo.\n\n' +
          'Si vives en un país donde pertenecer a un movimiento político tiene consecuencias ' +
          'reales, valóralo antes de inscribirte, usa seudónimo, y no publiques tu militancia en ' +
          'redes con tu nombre real.' },

        { t: 'Si algo falla', c:
          'Si hubiera un incidente de seguridad que afecte a datos de miembros, avisaremos a los ' +
          'afectados dentro de las 72 horas siguientes a conocerlo, diciendo qué pasó y qué datos ' +
          'se vieron afectados. Aunque sea vergonzoso. Especialmente si es vergonzoso.' }
      ]
    }
  };
})();
