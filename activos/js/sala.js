/* =========================================================================
   LA SALA DE HONOR Y GLORIA
   =========================================================================
   DOS GALERIAS SEPARADAS, Y LA SEPARACION NO ES ESTETICA

   A los que ya no estan se les puede contar entero: la gesta, la biografia y
   tambien lo incomodo. Bartolome de las Casas defendio a los indigenas y
   propuso traer esclavos africanos; Bolivar libero cinco naciones y murio
   acusado de dictador. Una galeria que solo cuenta la mitad buena no es honor,
   es propaganda, y se desmonta en el primer debate.

   A los que estan vivos NO se les puede hacer lo mismo. Ninguna de estas
   personas ha dado su consentimiento para aparecer aqui, ninguna pertenece al
   movimiento y ninguna lo respalda. Lo que se honra es su OBRA PUBLICA, con
   hechos comprobables. Por eso:

     - Solo hay cita textual cuando se puede sostener con su fuente. De catorce
       fichas, una. Las otras trece describen la obra, que es verificable, en
       vez de inventar una frase bonita.
     - Cada ficha lleva un campo "matiz" con lo que impide presentarla como
       partidaria del movimiento.
     - Cada ficha lleva el descargo, y hay una via para pedir que se retire.

   Atribuirle a alguien vivo una frase que no dijo es difamacion, y ademas
   hunde la credibilidad del movimiento entero con una sola busqueda.

   POR ESO EH.VIVOS VA VACIO EN EL SITIO PUBLICADO
   Las catorce fichas existen y estan escritas, pero viven en
   borradores/sala-personas-vivas-en-revision.json, fuera de la carpeta
   que se publica. No se pintaban en ninguna parte, pero viajaban dentro
   de este archivo, que cualquiera puede descargar, y contenian juicios
   editoriales sobre personas reales. Un periodista que encuentre las
   notas internas de un movimiento politico sobre catorce artistas vivos
   tiene el titular hecho.

   LOS VIDEOS NO SE INCRUSTAN SOLOS
   Un iframe de YouTube que carga al abrir la pagina le cuenta a Google quien
   visita un sitio de afiliacion politica. Aqui el video se carga solo cuando
   la persona lo pide, y desde youtube-nocookie. Y no se inventa ningun
   identificador de video: donde no hay uno confirmado, hay una busqueda.
   ========================================================================= */

window.EH = window.EH || {};

EH.SALA = {
  "introduccion": "Entra despacio. Esta es la Sala de Honor y Gloria de Los Estados Hispanos.\n\nAquí no se guarda el pasado: aquí se le mira a la cara. En estos muros están quienes sirvieron a la Hispanidad, y a todos ellos los llamamos, con orgullo, soldados de la Hispanidad. Conviene decir enseguida qué significa eso, porque la mayoría no empuñó un arma en su vida y algunos habrían rechazado el nombre. Soldado, aquí, es quien sostiene algo cuando sostenerlo cuesta. Un poeta también sostiene una frontera: la de las palabras con que un pueblo se explica a sí mismo. La sostiene la maestra que enseña a leer en un caserío sin luz, el médico que se queda cuando los demás se van, la traductora que impide que dos naciones se malentiendan, el tejedor que no deja morir un dibujo de mil años, el que abre cada semana la sala del barrio y pone las sillas aunque no venga nadie. Ninguno de ellos disparó nunca. Todos ellos aguantaron.\n\nNuestra Hispanidad es mestiza, indígena, africana, europea y asiática, y esta sala tiene que parecerse a eso o no sirve. Se lee en español porque el español es lo que nos permite entendernos, no lo que nos hace iguales. Aquí hay nombres de la península y del altiplano, del Caribe negro y de la selva, del Pacífico y de África hispana, de Manila y de los Andes. Se honra lo que alguien hizo, no de dónde vino, ni bajo qué bandera lo hizo, ni de qué lado estuvo. Y no hay en estos muros un solo nombre honrado por lo que destruyó.\n\nLas personas vivas que ves aquí no están afiliadas a este movimiento y no lo respaldan. Están reconocidas por él, que es distinto y es más limpio: reconocer no obliga a nadie, y por eso puede hacerse sin pedir permiso, pero se deshace al primer aviso.\n\nDescúbrete si quieres. Lee los nombres despacio, uno a uno, que para eso están escritos grandes. Y sal de aquí con una pregunta, no con una consigna: ¿qué frontera sostengo yo?",
  "reglasDeHonor": [
    "Se entra por propuesta escrita de otra persona, nunca por decisión propia. Puede proponer cualquiera, sea o no del movimiento, y la propuesta tiene que decir qué medalla pide y por qué hecho concreto.",
    "Toda ficha nace con fuentes. Sin al menos tres fuentes públicas y localizables no hay ficha, por muy conocido que sea el nombre. Las fuentes se publican junto a la ficha, para que cualquiera pueda desmentirnos.",
    "Ninguna cita se publica sin texto original comprobable. Si no podemos verificar la frase exacta, describimos la obra y dejamos el hueco de la cita vacío. Antes vacío que aproximado: una frase inventada le roba la voz a la persona a la que decimos honrar.",
    "Decide el Consejo de la Sala: un número impar de personas, con nombre y apellido públicos, mandato de dos años y acta publicada de cada decisión. Quien propone una ficha no vota esa ficha. Ningún miembro del Consejo puede recibir medalla durante su mandato ni en el año siguiente.",
    "A toda persona viva se le avisa antes de publicar su ficha, con el texto completo por delante y quince días para responder. Si no contesta, la ficha puede publicarse solo con obra pública documentada y sin afirmar ni insinuar vínculo alguno con el movimiento. Si contesta que no, no se publica y ahí termina el asunto.",
    "Prueba de la lectura en voz alta: si una ficha de persona viva no puede leerse entera delante de esa persona sin que se sienta incómoda, mal usada o comprometida, se reescribe o no se publica. Es el examen que decide, y lo aplica el Consejo antes de votar.",
    "Se sale cuando la persona honrada lo pide. Basta con pedirlo: no hay que dar motivos, no se discute y no se negocia. La ficha se retira en un plazo máximo de siete días y no se vuelve a publicar. Los familiares directos de una persona fallecida pueden pedir lo mismo, con el mismo efecto.",
    "Se sale también cuando falla la prueba: si una fuente resulta falsa, tergiversada o mal atribuida, la ficha cae y se publica en su lugar una corrección firmada y fechada, que no se borra nunca. Los errores del movimiento se quedan a la vista.",
    "Se sale, por último, cuando la obra se contradice: si aparecen hechos posteriores graves y probados de esa persona contra el derecho de otros, la ficha se retira y se explica por qué. Ninguna retirada se hace en silencio.",
    "Nadie entra por su cargo. No se honra a nadie por ejercer una función pública, ni se publican fichas nuevas de candidatos durante una campaña electoral. Los Estados, los gobiernos y los partidos no reciben medallas: las reciben las personas y, a veces, las comunidades.",
    "Las medallas no se venden, no se compran, no se patrocinan y no se usan en publicidad, en campañas ni para pedir dinero. Quien las use así, las pierde, y la pérdida se publica.",
    "Ninguna medalla se concede por matar, conquistar o someter. El valor se honra por lo que defendió, jamás por lo que destruyó, y ningún expediente de esta sala puede sostenerse sobre el daño hecho a otro pueblo.",
    "Una persona puede llevar más de una medalla, pero cada medalla necesita su propio expediente y su propia votación. No se conceden en bloque ni por trayectoria general.",
    "La sala se revisa entera una vez al año, en público, y se publica qué se corrigió, qué se retiró y qué se rechazó. Un muro que nunca cambia es un muro que ya no se lee.",
    "Y la regla que las sostiene a todas: estar aquí no hace a nadie de este movimiento, ni nos hace a nosotros dueños de su nombre. Honramos obra ajena, en préstamo y con permiso de devolverlo."
  ],
  "textoDescargo": "Sobre lo que esta sala significa, y sobre lo que no significa.\n\nLas personas que figuran en la Sala de Honor y Gloria no pertenecen a Los Estados Hispanos, no lo representan y no lo respaldan. Muchas vivieron siglos antes de que este movimiento existiera. Otras están vivas, trabajando hoy, y no nos deben nada: ni una palabra, ni una firma, ni una foto. Su presencia aquí no expresa su opinión sobre nosotros, y nadie debe leerla así.\n\nLo que se honra aquí es la obra pública: lo que estas personas escribieron, construyeron, enseñaron, cantaron, defendieron o descubrieron a la vista de todos, con fuentes que cualquiera puede comprobar y que publicamos al lado de cada ficha. No inventamos citas. No ponemos en boca de nadie palabras que no dijo. Cuando no podemos verificar una frase, contamos la obra y callamos la frase. Ninguna ficha se usa en publicidad, en campañas políticas o para recaudar dinero, y ninguna insinúa que la persona honrada comparta nuestras ideas.\n\nSi usted figura en esta sala y prefiere no figurar, o si es familiar de alguien que figura, basta con decírnoslo por la dirección de contacto que aparece al pie de esta sala. No le pediremos motivos, no discutiremos su decisión y no la comentaremos en público: retiraremos la ficha en un plazo máximo de siete días y no volveremos a publicarla. Y si hemos cometido un error de dato, de fecha o de atribución, corríjanoslo: publicaremos la corrección firmada y fechada, en el mismo lugar donde estuvo el error.\n\nHonrar a alguien sin pedirle permiso solo es honroso si puede deshacerse al primer aviso. Esa es la condición con la que existe esta sala.",
  "notaVivos": "Las fichas de personas vivas no viajan en este archivo. Están escritas, pero se guardan aparte porque contienen valoraciones sobre personas que no han consentido aparecer, y este archivo lo descarga cualquiera. Se publicarán una a una, cuando cada persona lo autorice por escrito."
};

EH.MEDALLAS = [
  {
    "id": "farallon",
    "nombre": "Medalla del Farallón",
    "porQue": "El valor físico. Reconoce a quien se quedó cuando quedarse costaba la vida: sostuvo una plaza, una retirada, un palenque, un hospital o un camino para que otros pudieran salvarse. Honra el aguante, no la victoria; la roca no gana al mar, simplemente sigue ahí cuando el mar se va.",
    "criterio": "Se concede únicamente a título histórico, sobre hechos probados por al menos dos fuentes documentales independientes y anteriores a la existencia del movimiento. El acto tiene que haber sido en defensa de personas o de una comunidad concreta, nunca en una campaña de conquista o de sometimiento. No se cuenta por batallas ganadas ni por enemigos vencidos: se cuenta por vidas que siguieron vivas gracias a esa persona. Si el mismo expediente contiene un hecho probado de crueldad contra población civil, la medalla no se concede aunque el resto del expediente sea admirable.",
    "simbolo": "Un farallón de piedra batido por tres olas, visto de frente. Sin cinta, sin lema y sin orla.",
    "color": "#1B3A5C",
    "quienLaRecibe": "historico"
  },
  {
    "id": "caracol",
    "nombre": "Medalla del Caracol",
    "porQue": "La palabra pública. El caracol marino que se sopla para llamar al pueblo, avisar del peligro o convocar la minga. Reconoce a quien usa hoy su voz para informar con verdad, explicar lo difícil o llamar a la gente a algo que la mejora, sea desde un periódico, un púlpito, un aula, una radio o una cámara de teléfono.",
    "criterio": "Obra pública verificable y sostenida: al menos tres años de trabajo o doce piezas públicas que cualquiera pueda encontrar y comprobar, con fecha y autoría. La voz honrada tiene que haber servido para informar o para unir sin degradar a nadie: no se concede a quien haya construido su audiencia insultando a un pueblo, a una raza o a un país. Una mentira grave comprobada y no rectificada retira la medalla. Se otorga solo a personas vivas; a las voces que ya no están se las honra con la medalla de la causa que sirvieron.",
    "simbolo": "Una caracola marina de labios abiertos, sola, sin manos que la sostengan.",
    "color": "#C25A21",
    "quienLaRecibe": "vivo"
  },
  {
    "id": "crisol",
    "nombre": "Medalla del Crisol",
    "porQue": "La ciencia y el saber que cura, mide, siembra, navega o construye. El crisol es donde el material se prueba a temperatura de verdad y sale otra cosa; nada entra en él por prestigio. Reconoce el conocimiento que alguien puso a disposición de los demás, con su nombre y su fecha encima.",
    "criterio": "Obra científica o técnica publicada, fechada, atribuible y comprobable por terceros: un método, un remedio, un mapa, una máquina, una vacuna, una cosecha nueva, un cálculo. Cuenta igual el saber tradicional cuando está documentado y es atribuible a una persona o a una comunidad determinada: medicina de plantas, agricultura de altura, navegación, ingeniería de agua, textil. No se concede por títulos, cargos, cátedras ni premios recibidos: se concede por el trabajo, y la ficha tiene que poder decir en una frase qué problema resolvió.",
    "simbolo": "Un crisol de barro inclinado, con una sola gota de metal fundido cayendo.",
    "color": "#2B2F6E",
    "quienLaRecibe": "cualquiera"
  },
  {
    "id": "palenque",
    "nombre": "Medalla del Palenque",
    "porQue": "La defensa del derecho de los pueblos a existir con su tierra, sus leyes y su lengua. El palenque fue el pueblo que los cimarrones levantaron para ser libres, y su puerta estaba abierta. Reconoce a quien defendió ese derecho desde donde le tocó: el púlpito, el tribunal, la ley, la imprenta o la empalizada.",
    "criterio": "Hechos documentados de defensa de un pueblo, una comunidad o un grupo humano concreto frente a quien pretendía someterlo, despojarlo o borrarlo, asumiendo un riesgo personal real y comprobable. Vale el sermón, la denuncia, el pleito ganado o perdido, la ley redactada, la huida organizada y el pueblo fundado. No se concede a quien defendió a un pueblo a costa de otro, ni a quien lo hizo desde el poder sin riesgo alguno. Cada expediente cita el documento, el año y el lugar.",
    "simbolo": "Una empalizada de troncos con la puerta abierta de par en par.",
    "color": "#2F6B45",
    "quienLaRecibe": "cualquiera"
  },
  {
    "id": "puente-tejido",
    "nombre": "Medalla del Puente Tejido",
    "porQue": "La unión entre naciones hispanas. En los Andes hay puentes de fibra trenzada que cruzan un abismo y que las comunidades de las dos orillas rehacen juntas cada año: si una sola deja de venir, no hay puente. Reconoce a quien hizo que dos o más pueblos hispanos se tocaran de verdad.",
    "criterio": "Haber creado o sostenido algo concreto y comprobable que una a dos o más naciones hispanas: un tratado, una escuela, una editorial, una ruta de comercio justo, un congreso que se repite, una orquesta, una red de investigación, una obra hecha entre varios países. Tiene que existir el resultado: nombre, años de funcionamiento y personas alcanzadas. No basta con haber pedido la unión en un discurso, por hermoso que fuera el discurso; eso, si es voz viva, corresponde a la Medalla del Caracol.",
    "simbolo": "Un puente colgante de fibra trenzada tendido sobre un abismo, con las dos amarras a la vista.",
    "color": "#A8792C",
    "quienLaRecibe": "cualquiera"
  },
  {
    "id": "virgulilla",
    "nombre": "Medalla de la Virgulilla",
    "porQue": "La lengua. La virgulilla es la tilde que corona la eñe: un trazo diminuto que no es de ningún Estado y sin el cual media Hispanidad no sabría escribir su propio nombre. Reconoce a quien estudió, fijó, enseñó, tradujo o salvó una lengua nuestra, y aquí son nuestras el español y también las lenguas originarias y criollas que conviven con él.",
    "criterio": "Obra de lengua verificable y localizable: una gramática, un diccionario, una traducción importante, una campaña de alfabetización con cifras, la escritura o normalización de una lengua originaria, o una enseñanza sostenida durante años con alumnos que puedan atestiguarla. Pesa igual haber enseñado español a mil personas que haber salvado de la desaparición una lengua de doscientos hablantes. No se concede a quien haya trabajado por imponer una lengua borrando otra.",
    "simbolo": "La virgulilla sola, trazada sobre campo liso, sin la letra debajo: la letra la pone quien la mira.",
    "color": "#6A2E6B",
    "quienLaRecibe": "cualquiera"
  },
  {
    "id": "telar",
    "nombre": "Medalla del Telar",
    "porQue": "La obra artística: música, poesía, novela, pintura, cine, danza, oficio y artesanía. En el telar la trama pasa una y otra vez por los mismos hilos hasta que aparece una figura que antes no existía. Reconoce a quien nos dio una figura nueva para mirarnos.",
    "criterio": "Obra publicada, editada, expuesta, grabada o interpretada en público, atribuible con fecha, que haya salido del lugar donde nació y llegado a gente que no conocía a su autor. Se admite la obra colectiva atribuible a un taller, una comunidad o una escuela. Se honra la obra, no la fama: la ficha describe la obra concreta y jamás pone en boca del autor palabras que no consten en una fuente localizable. Si no se puede verificar la frase, se cuenta la obra y el hueco de la cita se queda vacío.",
    "simbolo": "Un telar de cintura con los hilos tensos y la trama a medio hacer.",
    "color": "#9E2B33",
    "quienLaRecibe": "cualquiera"
  },
  {
    "id": "aljibe",
    "nombre": "Medalla del Aljibe",
    "porQue": "El trabajo callado. El aljibe está bajo tierra, no lo ve nadie y de él bebe todo el mundo. Reconoce a quien sostiene un núcleo local del movimiento sin que se le note: abre la sala, pone las sillas, contesta los mensajes, lleva las cuentas al día, se acuerda de quien lleva dos meses sin venir y va a buscarlo.",
    "criterio": "Es la única medalla que exige pertenecer al movimiento, porque honra trabajo interno. Doce meses seguidos sosteniendo un núcleo local, con actividad comprobable mes a mes. La propuesta la firman al menos cinco personas de ese núcleo que no sean la persona propuesta ni familiares suyos. Nadie se la propone a sí mismo. No se concede por ocupar un cargo dentro del movimiento: se concede por hacer, en persona, lo que nadie quiere hacer.",
    "simbolo": "La boca de un aljibe con la cuerda tensa y el cántaro subiendo, todavía sin llegar al borde.",
    "color": "#4A6B78",
    "quienLaRecibe": "miembro"
  }
];

EH.HISTORICOS = [
  {
    "id": "blas-de-lezo",
    "nombre": "Blas de Lezo",
    "nombreCompleto": "Blas de Lezo y Olavarrieta",
    "anios": "1689-1741",
    "nacion": "espana",
    "tambienReclamadoPor": [
      "colombia"
    ],
    "oficio": "Marino y teniente general de la Armada",
    "categoria": "armas",
    "gesta": "En marzo de 1741 aparecieron frente a Cartagena de Indias ciento ochenta y seis velas contando los transportes, con unos veintisiete mil hombres embarcados y una fuerza de desembarco de unos once mil: la mayor fuerza anfibia que Inglaterra había reunido nunca, y la mayor vista en el Caribe en todo el siglo XVIII. Al otro lado de la bahía esperaba un hombre al que le faltaban una pierna y un ojo, y que arrastraba un brazo derecho inutilizado desde Barcelona, con menos de tres mil defensores y seis navíos. Sesenta y siete días después, el almirante Vernon reembarcaba a sus muertos; en Londres ya se habían acuñado las medallas que celebraban la victoria y hubo que esconderlas. Blas de Lezo murió en septiembre, de la peste que quedó en la ciudad que había salvado, sin que nadie le diera las gracias.",
    "porQueImporta": "Sin ese asedio roto, el Caribe y buena parte de América del Sur habrían entrado en la órbita británica y hoy no hablarían español. Es la figura que mejor explica que la Hispanidad no es una idea sino algo que se defendió en un sitio concreto, con gente concreta: soldados peninsulares, milicias de pardos y negros libres de Cartagena, e indígenas de la costa peleando en el mismo muro.",
    "biografia": "Nació en Pasajes, Guipúzcoa, y se hizo a la mar de niño. A los quince años perdió la pierna izquierda en Vélez-Málaga; a los dieciocho, el ojo izquierdo en Tolón; a los veinticinco, el uso del brazo derecho en Barcelona. Sirvió en el Pacífico contra los corsarios, vivió en Lima y allí se casó con Josefa Pacheco, criolla. En 1737 llegó a Cartagena de Indias como comandante general del apostadero. Tras la victoria de 1741 murió el 7 de septiembre, enfermo y enfrentado al virrey; se le enterró sin honores y no se sabe dónde están sus restos.",
    "fraseVerificable": "",
    "medalla": "gran-collar-de-la-hispanidad",
    "controversia": "Las frases altivas que circulan a su nombre son casi todas apócrifas: no hay documento que las sostenga. Murió peleado con el virrey Sebastián de Eslava, que se atribuyó la victoria y lo dejó morir en desgracia; hoy los historiadores discuten cuánto del mérito fue de uno y cuánto del otro. Y hay que decirlo entero: el puerto que defendió era también el mayor mercado de esclavos africanos de la América española.",
    "confianza": "alta"
  },
  {
    "id": "bartolome-de-las-casas",
    "nombre": "Bartolomé de las Casas",
    "nombreCompleto": "Fray Bartolomé de las Casas",
    "anios": "1484-1566",
    "nacion": "espana",
    "tambienReclamadoPor": [
      "mexico",
      "guatemala",
      "nicaragua",
      "republica-dominicana"
    ],
    "oficio": "Fraile dominico, obispo de Chiapas",
    "categoria": "derecho",
    "gesta": "Fue encomendero en Cuba: tuvo indios trabajando para él y se enriqueció con ello. Un día, preparando un sermón, leyó un pasaje del Eclesiástico sobre el pan del pobre, y devolvió sus indios al gobernador. Los cuarenta y ocho años siguientes cruzó el Atlántico catorce veces para gritarle a la corte que los indios eran hombres libres. En 1550 el emperador ordenó suspender las conquistas y convocó en Valladolid a una junta de catorce jueces: Sepúlveda expuso su alegato y Las Casas respondió leyendo cinco días seguidos. Fue la primera vez en la historia que un imperio se detuvo a preguntarse en público si tenía derecho a hacer lo que estaba haciendo.",
    "porQueImporta": "Ocho años antes de Valladolid, sus memoriales habían arrancado a la corona las Leyes Nuevas de 1542, que prohibían esclavizar indios y condenaban la encomienda a extinguirse; la presión de los encomenderos forzó después su recorte. De aquella pelea entera salió la idea, todavía hoy revolucionaria, de que hay derechos que no dependen de la religión, la raza ni la fuerza. La Hispanidad es el único imperio de la historia que produjo sus propios acusadores y les dio imprenta.",
    "biografia": "Sevillano, hijo de un comerciante que viajó con Colón. Pasó a La Española en 1502, fue el primero en cantar misa nueva en América, aunque se había ordenado en Roma, y encomendero en Cuba. Tras su conversión de 1514 entró en la orden de Santo Domingo. Intentó fundaciones pacíficas de campesinos en Cumaná y en la Verapaz guatemalteca; escribió la Brevísima relación de la destrucción de las Indias (1552) y la Historia de las Indias. Fue obispo de Chiapas, donde el clero local le negó la obediencia. Murió en Madrid a los ochenta y dos años, todavía escribiendo memoriales.",
    "fraseVerificable": "",
    "medalla": "medalla-de-la-justicia",
    "controversia": "En su memorial de 1516 propuso traer esclavos africanos para aliviar a los indígenas. Años después escribió que se había arrepentido de ello y que la esclavitud de los negros era tan injusta como la de los indios, pero el daño estaba hecho y la propuesta existió. Además, sus cifras de muertos son a menudo exageradas, y sus páginas alimentaron durante siglos la propaganda de las potencias rivales contra España: honrar a Las Casas obliga a explicar las dos cosas a la vez.",
    "confianza": "alta"
  },
  {
    "id": "francisco-de-vitoria",
    "nombre": "Francisco de Vitoria",
    "nombreCompleto": "Fray Francisco de Vitoria",
    "anios": "1483-1546",
    "nacion": "espana",
    "tambienReclamadoPor": [],
    "oficio": "Teólogo y catedrático de Salamanca",
    "categoria": "pensamiento",
    "gesta": "En 1539, desde una cátedra de Salamanca y sin haber pisado nunca América, un fraile enfermo de gota se puso a desmontar una por una las razones por las que su rey creía poseer las Indias. Ni el papa es señor del mundo, dijo, ni el emperador tampoco, ni el pecado de los indios los priva de sus tierras: eran dueños verdaderos antes de que llegáramos y lo siguen siendo. De ahí sacó algo que nadie había dicho: que existe una comunidad de todos los pueblos, con leyes que obligan hasta a quien tiene los cañones. Carlos V le mandó callar; sus alumnos copiaron las lecciones y las difundieron por Europa.",
    "porQueImporta": "La Escuela de Salamanca es la aportación más grande de la Hispanidad al pensamiento universal: el derecho internacional nació en español, discutiendo si la conquista era lícita. Grocio, que suele llevarse el crédito, leyó a Vitoria antes de escribir.",
    "biografia": "Nació en Burgos, de familia con ascendencia judeoconversa según buena parte de la investigación actual. Estudió en París, volvió a España y en 1526 ganó la cátedra de Prima de Teología de Salamanca, la más importante del reino. No publicó ningún libro: lo que conservamos son apuntes de sus alumnos, entre ellos las relecciones De Indis y De iure belli. Formó a una generación entera de teólogos y juristas, y a través de ellos a los confesores de la corte. Murió en Salamanca en 1546.",
    "fraseVerificable": "",
    "medalla": "medalla-de-la-conciencia",
    "controversia": "Después de tumbar los títulos ilegítimos, Vitoria enumeró unos títulos legítimos: el derecho a viajar y comerciar, y el de proteger a los inocentes. Los juristas de la corona usaron esa lista para justificar exactamente lo que él había condenado, y el argumento de la intervención humanitaria sigue sirviendo hoy para lo mismo. Nunca cruzó el Atlántico ni vio lo que discutía.",
    "confianza": "alta"
  },
  {
    "id": "isabel-barreto",
    "nombre": "Isabel Barreto",
    "nombreCompleto": "Isabel Barreto de Mendaña y Castro",
    "anios": "1567-1612",
    "nacion": "espana",
    "tambienReclamadoPor": [
      "peru"
    ],
    "oficio": "Adelantada y gobernadora de una flota en el Pacífico",
    "categoria": "exploracion",
    "gesta": "En 1595 salió del Callao con cuatro barcos y casi cuatrocientas personas rumbo a unas islas que su marido creía recordar en mitad del Pacífico. Encontraron las Marquesas y las Santa Cruz, pero llegó la fiebre, y con ella murió su marido, Álvaro de Mendaña. Entonces Isabel Barreto tomó el mando de la flota, se hizo obedecer por soldados y pilotos, y llevó a los supervivientes a través de miles de millas de mar abierto hasta Manila. Fue la primera mujer que gobernó una armada española en alta mar, y llegó a puerto.",
    "porQueImporta": "El Pacífico fue durante dos siglos y medio un lago hispánico que unía América con Asia, y esa ruta la sostuvieron marinos, cartógrafos y también mujeres cuyos nombres se borraron. Recordar a Barreto es recordar que la Hispanidad también llega a Filipinas y a Guam por el mar del oeste.",
    "biografia": "Nacida hacia 1567, probablemente en Pontevedra, llegó joven al Perú, donde su familia tenía posición en Lima. Casó con el adelantado Álvaro de Mendaña de Neira y financió con su dote parte de la expedición de 1595. Muerto Mendaña en Santa Cruz, asumió el mando como gobernadora y adelantada. En Manila casó con Fernando de Castro y volvió a cruzar el Pacífico hasta el Perú. Murió hacia 1612, se cree que en Castrovirreyna, en la sierra peruana.",
    "fraseVerificable": "",
    "medalla": "medalla-del-horizonte",
    "controversia": "La crónica de aquel viaje la escribió el piloto Pedro Fernández de Quirós, que no la quería: la retrató dura, avara del agua mientras los marineros morían, y responsable de ahorcamientos a bordo. No hay otra versión, así que juzgamos a una mujer del siglo XVI por el testimonio de un subordinado que competía con ella. Y la expedición dejó muertos entre los isleños de Santa Cruz: aquello no fue solo navegación. El título de primera almiranta es un honor moderno, no un cargo que ella tuviera.",
    "confianza": "media"
  },
  {
    "id": "juan-latino",
    "nombre": "Juan Latino",
    "nombreCompleto": "Juan Latino (Juan de Sesa)",
    "anios": "1518-1596",
    "nacion": "espana",
    "tambienReclamadoPor": [],
    "oficio": "Catedrático de gramática latina y poeta",
    "categoria": "letras",
    "gesta": "Llegó a España esclavo, niño, nacido en África, en el equipaje de una casa noble de Granada. Lo pusieron a acompañar al joven duque a clase para cargarle los libros, y aprendió escuchando desde el fondo del aula. Se graduó en la Universidad de Granada, ganó la cátedra de gramática latina de la catedral y enseñó latín a los hijos de quienes lo habían comprado. Se casó con una dama blanca de familia hidalga, con escándalo de la ciudad, y publicó en hexámetros latinos un poema sobre Lepanto que Cervantes conocía: lo nombra en los versos que abren el Quijote.",
    "porQueImporta": "Es la prueba, en el siglo XVI, de que la lengua española tuvo desde el principio dueños africanos. La Hispanidad no es europea con añadidos: es también negra, y lo es desde antes de que existiera la palabra.",
    "biografia": "Nació hacia 1518, probablemente en África occidental o en un barco negrero; sobre su origen exacto no hay acuerdo. Creció esclavo en la casa de los duques de Sesa, en Baena y luego en Granada, de donde tomó el apellido. Obtuvo el bachillerato en 1546 y ocupó durante décadas la cátedra de gramática. Casó con Ana de Carleval. Publicó el Austrias Carmen sobre la batalla de Lepanto y otras obras en latín. Murió en Granada hacia 1596.",
    "fraseVerificable": "",
    "medalla": "medalla-de-la-palabra",
    "controversia": "Su vida se cuenta a menudo como un cuento de meritocracia y no lo fue: fue una excepción rarísima dentro de un sistema que compraba y vendía personas, y su ascenso dependió del favor de la casa que lo poseía. Las fechas de su nacimiento y muerte y hasta su lugar de origen son inseguras. Y escribió en latín, alabando al hermano del rey, para ser aceptado: ese fue el precio.",
    "confianza": "media"
  },
  {
    "id": "sor-juana-ines-de-la-cruz",
    "nombre": "Sor Juana Inés de la Cruz",
    "nombreCompleto": "Juana Inés de Asbaje y Ramírez de Santillana",
    "anios": "1648-1695",
    "nacion": "mexico",
    "tambienReclamadoPor": [
      "espana"
    ],
    "oficio": "Monja jerónima, poeta y pensadora",
    "categoria": "letras",
    "gesta": "Aprendió a leer a los tres años, escondida en la escuela de su hermana, y pidió que la vistieran de hombre para entrar a la universidad. Como no pudo, se metió a monja: era el único lugar de Nueva España donde una mujer podía tener cuatro mil libros propios. Desde su celda escribió la mejor poesía del siglo, discutió de teología con los obispos y, cuando uno la reprendió por meterse en cosas de hombres, contestó con la Respuesta a Sor Filotea, la Respuesta a Sor Filotea, el alegato más poderoso que ha dado la lengua española por el derecho de las mujeres a estudiar, dos siglos después de que Teresa de Cartagena escribiera el primero. La obligaron a callar, vendió su biblioteca, y murió cuidando a sus hermanas en una epidemia.",
    "porQueImporta": "Es la cumbre literaria de América en la época colonial y la demostración de que el Siglo de Oro no fue solo peninsular: se escribió igual de bien a este lado del mar. Cualquier discusión sobre la mujer en lengua española empieza en ella.",
    "biografia": "Nació en San Miguel Nepantla, hija natural de padre vasco y madre criolla. Niña prodigio en la corte virreinal, entró en 1669 en el convento de San Jerónimo de la ciudad de México. Escribió villancicos, loas, autos sacramentales, la comedia Los empeños de una casa y el poema filosófico Primero sueño. En 1690 el obispo de Puebla publicó sin permiso su crítica a un sermón, con un prólogo que la reprendía; ella respondió en 1691. Poco después renunció a los libros, firmando un documento como la peor del mundo. Murió en la epidemia de 1695, a los cuarenta y seis años.",
    "fraseVerificable": "Hombres necios que acusáis a la mujer sin razón, sin ver que sois la ocasión de lo mismo que culpáis.",
    "medalla": "medalla-de-la-palabra",
    "controversia": "Su renuncia final se sigue discutiendo: unos ven una conversión sincera y otros una abjuración arrancada por la presión de sus confesores. Escribió también loas y panegíricos a los virreyes, porque de ese mecenazgo vivía. Y su convento tenía esclavas: una de ellas, regalada por su madre, aparece en los documentos. Honrarla no exige limpiarla.",
    "confianza": "alta"
  },
  {
    "id": "benito-juarez",
    "nombre": "Benito Juárez",
    "nombreCompleto": "Benito Pablo Juárez García",
    "anios": "1806-1872",
    "nacion": "mexico",
    "tambienReclamadoPor": [],
    "oficio": "Abogado y presidente de México",
    "categoria": "derecho",
    "gesta": "A los doce años era un pastor zapoteco que no hablaba español y caminó desde Guelatao hasta Oaxaca buscando a su hermana, que servía en una casa. A los cincuenta y ocho, con el país invadido por el ejército francés y un archiduque austriaco sentado en un trono mexicano, gobernaba la república desde un carruaje negro, huyendo hacia el norte con el archivo de la nación en el asiento de al lado. Nunca se rindió ni firmó. En 1867 el imperio se derrumbó, y el indio que no hablaba español devolvió la república a su sitio.",
    "porQueImporta": "Demostró que en un país hispanoamericano un indígena podía llegar a lo más alto por la vía de la ley, y dejó la frase que sigue siendo el mejor resumen de cómo deben tratarse las naciones hermanas. Sin Juárez, la idea de que la soberanía de los pueblos hispanos no se negocia con potencias europeas no tendría ejemplo.",
    "biografia": "Nació en San Pablo Guelatao, Oaxaca, huérfano a los tres años. Estudió leyes, fue diputado, juez, gobernador de Oaxaca y ministro. Autor de la Ley Juárez y motor de las Leyes de Reforma, que separaron Iglesia y Estado. Presidió la república durante la Guerra de Reforma y la intervención francesa, con el gobierno itinerante hasta Paso del Norte. Fusiló a Maximiliano en 1867 pese a las peticiones de media Europa. Murió en el cargo, en 1872.",
    "fraseVerificable": "Entre los individuos, como entre las naciones, el respeto al derecho ajeno es la paz.",
    "medalla": "medalla-de-la-justicia",
    "controversia": "La misma Reforma que desamortizó los bienes de la Iglesia disolvió también las tierras comunales de los pueblos indígenas, y muchas acabaron en manos de hacendados: un presidente indígena firmó leyes que dañaron a las comunidades indígenas. Se reeligió dos veces y murió en el poder, acusado por antiguos aliados de perpetuarse; Porfirio Díaz se levantó contra él. Negoció con Estados Unidos el tratado McLane-Ocampo, que cedía derechos de tránsito a cambio de apoyo y que el Senado norteamericano, no el mexicano, tumbó.",
    "confianza": "alta"
  },
  {
    "id": "tupac-amaru-ii",
    "nombre": "Túpac Amaru II",
    "nombreCompleto": "José Gabriel Condorcanqui Noguera",
    "anios": "1738-1781",
    "nacion": "peru",
    "tambienReclamadoPor": [
      "bolivia",
      "argentina",
      "uruguay"
    ],
    "oficio": "Cacique de Surimana, Tungasuca y Pampamarca",
    "categoria": "libertad",
    "gesta": "Era cacique y arriero, hablaba quechua y latín, y descendía del último inca. En noviembre de 1780 prendió al corregidor de Tinta, que exprimía a su gente con los repartos, y lo ejecutó en la plaza. Luego hizo algo que nadie había hecho en América: decretó la libertad de los esclavos y el fin de la mita, y se le juntaron decenas de miles de indios, mestizos y criollos. Lo traicionó un aliado; en la plaza del Cusco lo obligaron a ver morir a su mujer Micaela Bastidas y a su hijo antes de descuartizarlo, y como los caballos no pudieron con él, lo degollaron y repartieron su cuerpo por los pueblos para que sirviera de escarmiento. Sirvió de lo contrario.",
    "porQueImporta": "Cuarenta años antes que los libertadores criollos, la primera gran revolución contra el orden colonial la encabezó un indígena, en nombre de indios, negros y mestizos a la vez. Toda la América hispana que se reivindica mestiza empieza a contarse ahí.",
    "biografia": "Nació en Surimana, Cusco, en 1738. Educado en el colegio de caciques San Francisco de Borja, heredó el cacicazgo y trabajó como arriero entre el Cusco y Potosí, lo que le dio una red de contactos por todo el sur andino y el Alto Perú. Pleiteó durante años en los tribunales por el reconocimiento de su ascendencia inca antes de alzarse. La rebelión de 1780-1781 llegó a movilizar decenas de miles de hombres; venció en Sangarará, fracasó ante el Cusco y fue entregado en abril de 1781. Fue ejecutado el 18 de mayo en la plaza de armas del Cusco.",
    "fraseVerificable": "",
    "medalla": "medalla-de-la-libertad",
    "controversia": "Su alzamiento empezó proclamando lealtad al rey y culpando al mal gobierno, no a la corona. Y no fue incruento: en Sangarará murieron centenares de personas dentro de una iglesia incendiada, criollos y mestizos entre ellas, y esa violencia asustó a los aliados que necesitaba. Era además un cacique acomodado, con negocios de mulas, no un campesino pobre. La frase más famosa que se le atribuye, la del regreso multiplicado, no aparece en ningún documento de la época.",
    "confianza": "alta"
  },
  {
    "id": "simon-bolivar",
    "nombre": "Simón Bolívar",
    "nombreCompleto": "Simón José Antonio de la Santísima Trinidad Bolívar y Palacios",
    "anios": "1783-1830",
    "nacion": "venezuela",
    "tambienReclamadoPor": [
      "colombia",
      "ecuador",
      "peru",
      "bolivia",
      "panama"
    ],
    "oficio": "Militar y estadista, Libertador",
    "categoria": "libertad",
    "gesta": "En 1819, con un ejército descalzo de llaneros, ingleses y esclavos recién liberados, subió los Andes por el páramo de Pisba en la peor época del año, perdiendo caballos y hombres de frío, para caer sobre los realistas por donde nadie lo esperaba. En Boyacá ganó una batalla de dos horas que liberó un virreinato entero. Repitió la jugada hasta que cinco naciones fueron independientes. Y en 1826 convocó en Panamá el primer congreso de todas las repúblicas hispanas, porque sabía que la independencia por separado no servía de nada; casi nadie fue.",
    "porQueImporta": "No fue el primero que soñó la unión de los pueblos hispanoamericanos: Miranda y Viscardo lo hicieron antes. Pero sí fue el primero que la convocó con congreso, sede, fecha y tratados sobre la mesa. El Congreso Anfictiónico de Panamá es el antepasado directo de cualquier movimiento panhispánico: fracasó, y por eso hay que volver a intentarlo.",
    "biografia": "Nació en Caracas en una de las familias más ricas de América, huérfano pronto y educado por Simón Rodríguez. Juró en Roma en 1805 no descansar hasta romper las cadenas del poder español. Escribió la Carta de Jamaica en 1815 tras dos derrotas. Con la ayuda de Haití y a cambio de la promesa de liberar esclavos, volvió a la carga: Boyacá en 1819, Carabobo en 1821 y Junín en 1824 al frente; Pichincha y Ayacucho por mano de Sucre. Fue presidente de la Gran Colombia y dictador en 1828. Murió a los cuarenta y siete años en Santa Marta, arruinado y camino del exilio.",
    "fraseVerificable": "El que sirve a una revolución ara en el mar.",
    "medalla": "medalla-de-la-union",
    "controversia": "En 1813 firmó el Decreto de Guerra a Muerte, que ordenaba matar a los españoles por el hecho de serlo aunque fueran neutrales. Mandó fusilar a su general Manuel Piar, mulato, tras un juicio que muchos consideran político. En 1828 asumió poderes dictatoriales y disolvió la convención, y murió acusado por sus antiguos compañeros de querer una monarquía. Nació dueño de esclavos y liberó a los suyos tarde, cuando necesitaba soldados.",
    "confianza": "alta"
  },
  {
    "id": "andres-bello",
    "nombre": "Andrés Bello",
    "nombreCompleto": "Andrés de Jesús María y José Bello López",
    "anios": "1781-1865",
    "nacion": "venezuela",
    "tambienReclamadoPor": [
      "chile"
    ],
    "oficio": "Gramático, jurista y educador",
    "categoria": "pensamiento",
    "gesta": "Fue Le dio algunas lecciones al joven Bolívar, dos años menor que él, y en 1810 viajó con él a Londres a pedir apoyo para la revolución. Bolívar volvió a pelear; Bello se quedó diecinueve años en Londres, muerto de hambre y copiando manuscritos por unas monedas. Cuando por fin cruzó de nuevo el Atlántico, a Chile, hizo en treinta años tres cosas que ningún ejército puede hacer: escribió el Código Civil que rige todavía a media América, fundó la Universidad de Chile y publicó una gramática del castellano pensada expresamente para los americanos, para que el idioma no se rompiera en veinte idiomas distintos como se había roto el latín.",
    "porQueImporta": "Si hoy un colombiano, un mexicano y un español se entienden sin traductor, es en buena medida obra suya: fue quien decidió que la unidad de la lengua se defendía con razones y no con órdenes de Madrid. Su Código Civil fue adoptado por Ecuador, Colombia y Panamá, y copiado en media docena de países más: es el intento más exitoso de legislación común que ha tenido la Hispanidad.",
    "biografia": "Nació en Caracas, funcionario de la capitanía general antes de 1810. En Londres trabajó con Miranda, tradujo, enseñó y publicó las Silvas americanas, entre ellas la Silva a la agricultura de la zona tórrida. En 1829 se estableció en Chile, donde fue senador, redactor de leyes y del Código Civil promulgado en 1855, primer rector de la Universidad de Chile en 1843 y autor de la Gramática de la lengua castellana destinada al uso de los americanos, de 1847. Murió en Santiago a los ochenta y tres años años.",
    "fraseVerificable": "Mis lecciones se dirigen a mis hermanos, los habitantes de Hispanoamérica.",
    "medalla": "medalla-de-la-conciencia",
    "controversia": "Nunca volvió a Venezuela, y allí hubo quien se lo reprochó toda la vida. En Chile fue el hombre de leyes del orden conservador y escribió para él las instituciones de un presidencialismo fuerte. Su polémica con Sarmiento sobre el idioma lo dejó con fama de purista y de elitista, acusación que su propia gramática desmiente: precisamente sostenía que el uso culto americano era tan legítimo como el peninsular.",
    "confianza": "alta"
  },
  {
    "id": "jose-de-san-martin",
    "nombre": "José de San Martín",
    "nombreCompleto": "José Francisco de San Martín y Matorras",
    "anios": "1778-1850",
    "nacion": "argentina",
    "tambienReclamadoPor": [
      "chile",
      "peru",
      "espana"
    ],
    "oficio": "General, Libertador del sur",
    "categoria": "armas",
    "gesta": "Pasó veintidós años vistiendo el uniforme español y peleando contra Napoleón, y a los treinta y cuatro cruzó el Atlántico para pelear contra su propio ejército. En Mendoza se pasó tres años fabricando cañones, herrando mulas y cosiendo uniformes, y en enero de 1817 metió cinco mil hombres por pasos de cuatro mil metros para aparecer en Chile por donde no había camino. Liberó Chile, se embarcó al Perú y declaró su independencia en Lima. Después se reunió a solas con Bolívar en Guayaquil, y al salir renunció a todo, entregó su ejército y se fue a morir a un pueblo de Francia sin pedir nada.",
    "porQueImporta": "Es el ejemplo de que la independencia hispanoamericana fue una guerra continental y no una suma de guerras nacionales: mandó argentinos, chilenos, peruanos y negros libertos en la misma formación. Y su renuncia en Guayaquil evitó una guerra entre libertadores, que es la lección más útil que este movimiento puede citar.",
    "biografia": "Nació en Yapeyú, antigua misión jesuítica guaraní, hijo de un funcionario español; se crio en España desde los seis años y fue cadete a los once. Combatió en Bailén contra los franceses. En 1812 llegó a Buenos Aires, creó el regimiento de Granaderos a Caballo y venció en San Lorenzo. Organizó el Ejército de los Andes, triunfó en Chacabuco y Maipú, proclamó la independencia del Perú el 28 de julio de 1821 y gobernó como Protector. Tras la entrevista de Guayaquil de 1822 se retiró. Murió en Boulogne-sur-Mer en 1850; pidió que su corazón reposara en Buenos Aires.",
    "fraseVerificable": "El Perú es desde este momento libre e independiente, por la voluntad general de los pueblos y por la justicia de su causa que Dios defiende.",
    "medalla": "medalla-del-valor",
    "controversia": "Como Protector del Perú fue acusado de monárquico: envió agentes a Europa a buscar un príncipe para coronarlo, convencido de que la república no se sostendría, y eso le costó el apoyo de los liberales limeños. Dejó el Perú a medio liberar. Se negó a intervenir en las guerras civiles argentinas y hubo quien lo llamó desertor. Su ejército fue disciplinado con dureza, con fusilamientos incluidos, y muchos de los libertos que lo cruzaron los Andes no volvieron.",
    "confianza": "alta"
  },
  {
    "id": "carlos-gardel",
    "nombre": "Carlos Gardel",
    "nombreCompleto": "Carlos Gardel",
    "anios": "1890-1935",
    "nacion": "argentina",
    "tambienReclamadoPor": [
      "uruguay",
      "francia",
      "colombia"
    ],
    "oficio": "Cantor, compositor y actor",
    "categoria": "arte",
    "gesta": "Convirtió una música de arrabal y de burdel, que la gente decente no quería oír, en un género que se cantó en París, en Nueva York y en Madrid, y lo hizo sin cambiarle el acento. Grabó centenares de discos y filmó películas para Hollywood en español, no dobladas: en español de Buenos Aires. El 24 de junio de 1935 su avión se incendió en la pista de Medellín y murió con su letrista Alfredo Le Pera. Noventa años después, tres países se disputan su cuna, un cuarto guarda el sitio donde murió y en todos suena igual.",
    "porQueImporta": "Es el primer fenómeno de masas verdaderamente panhispánico: la prueba de que una música popular hecha en el sur podía conquistar el idioma entero antes de la radio moderna. Y su disputa de origen, que a otros incomoda, aquí es un símbolo: es de todos porque nadie puede probar que sea solo suyo.",
    "biografia": "Los documentos franceses lo hacen nacer en Toulouse en 1890, hijo de Berthe Gardes, y llegado a Buenos Aires de niño; la tesis uruguaya lo hace nacer en Tacuarembó en 1887. Se nacionalizó uruguayo y después argentino, en 1923. Empezó cantando criollo con José Razzano, y desde 1917 se volcó en el tango canción. Grabó para Odeón, triunfó en París y Nueva York y filmó para Paramount con guiones y canciones de Le Pera. Murió en el accidente aéreo de Medellín y está enterrado en Buenos Aires.",
    "fraseVerificable": "",
    "medalla": "medalla-de-las-artes",
    "controversia": "Su nacimiento sigue sin resolverse y el asunto ha producido décadas de pleitos entre eruditos uruguayos, franceses y argentinos, con documentos que unos consideran probatorios y otros falsificados. El propio Gardel manejó papeles de dos países y regularizó su situación militar por una vía que nunca explicó del todo. Su vida privada y sus amistades fueron cuidadosamente maquilladas tras su muerte por una industria que lo necesitaba impecable.",
    "confianza": "alta"
  },
  {
    "id": "policarpa-salavarrieta",
    "nombre": "Policarpa Salavarrieta",
    "nombreCompleto": "Policarpa Salavarrieta Ríos",
    "anios": "1795-1817",
    "nacion": "colombia",
    "tambienReclamadoPor": [],
    "oficio": "Costurera y espía de la insurgencia",
    "categoria": "libertad",
    "gesta": "Entró a coser en las casas de los oficiales realistas de Santa Fe con nombre falso, y mientras tomaba medidas escuchaba: cuántos hombres salían, por qué camino, con cuántas mulas. Esa información viajaba a los llanos, y en Bogotá los muchachos que ella convencía desertaban del rey. La delataron unos papeles encontrados a un correo. El 14 de noviembre de 1817 la sacaron a la plaza mayor con su novio Alejo Sabaraín; se negó a arrodillarse de espaldas como mandaban para las mujeres, y murió insultando a sus verdugos delante de la ciudad entera.",
    "porQueImporta": "La independencia no la hicieron solo generales a caballo: la sostuvieron redes civiles de mujeres, arrieros y sirvientes cuyos nombres casi todos se perdieron. Ella es el nombre que sí se conserva, y por eso vale por todas.",
    "biografia": "Nació en Guaduas hacia 1795 y quedó huérfana en la epidemia de viruela que mató a sus padres y hermanos. Se trasladó a Santa Fe de Bogotá durante la Reconquista de Pablo Morillo, con documentos falsos y bajo el oficio de costurera. Sirvió de enlace entre la resistencia urbana y las guerrillas de los Llanos, escondió insurgentes y consiguió armas y dinero. Detenida en noviembre de 1817, fue fusilada a los veintidós años junto a otros ocho patriotas. Su rostro estuvo en los billetes colombianos y su nombre en el día de la mujer colombiana.",
    "fraseVerificable": "",
    "medalla": "medalla-de-la-libertad",
    "controversia": "Casi todo lo que sabemos de ella viene de relatos escritos después, cuando ya era símbolo: sus últimas palabras circulan en varias versiones distintas y ninguna es un acta. Su figura ha sido usada por todos los bandos de la política colombiana, de la derecha a la guerrilla, para causas que ella no eligió. Honrarla exige decir dónde termina el documento y dónde empieza la leyenda.",
    "confianza": "media"
  },
  {
    "id": "jose-marti",
    "nombre": "José Martí",
    "nombreCompleto": "José Julián Martí Pérez",
    "anios": "1853-1895",
    "nacion": "cuba",
    "tambienReclamadoPor": [],
    "oficio": "Escritor, periodista y organizador de la independencia cubana",
    "categoria": "libertad",
    "gesta": "A los diecisiete años lo condenaron a las canteras de San Lázaro con grillos que le dejaron cicatrices en los tobillos para toda la vida, por una carta. Deportado, vivió en España, México, Guatemala, Venezuela y Nueva York, y desde el destierro hizo algo más difícil que ganar una batalla: juntó en un solo partido a los generales veteranos, a los emigrados ricos y a los tabaqueros de Tampa que ponían un día de jornal a la semana para comprar fusiles. En 1891 escribió Nuestra América, avisando de que el peligro grande venía del norte. Cuatro años después murió en su primer combate, en Dos Ríos, cabalgando hacia adelante.",
    "porQueImporta": "Nuestra América es el texto fundacional del pensamiento hispanoamericano moderno: la idea de que estos pueblos deben gobernarse con sus propias formas y unirse antes de que otro decida por ellos. Y lo escribió desde dentro de Estados Unidos, sabiendo exactamente lo que veía.",
    "biografia": "Nació en La Habana, hijo de un sargento valenciano y de una canaria. Se graduó en Derecho y Filosofía en Zaragoza. Ejerció de periodista y traductor en México, Guatemala y Nueva York, donde fue corresponsal de diarios de media América y cónsul de Argentina, Paraguay y Uruguay. Publicó Ismaelillo, Versos sencillos y La Edad de Oro. Fundó el Partido Revolucionario Cubano en 1892 y desembarcó en Cuba en abril de 1895. Murió el 19 de mayo en Dos Ríos, a los cuarenta y dos años.",
    "fraseVerificable": "Con los pobres de la tierra quiero yo mi suerte echar.",
    "medalla": "medalla-de-la-libertad",
    "controversia": "No tenía experiencia militar y murió en su primer combate, en una carga que sus generales consideraron innecesaria: la guerra perdió a su cabeza política el primer mes. Chocó con Máximo Gómez y con Antonio Maceo por quién debía mandar, los civiles o los militares. Y desde 1959 su nombre lo reclaman a la vez el gobierno de La Habana y el exilio de Miami: cada uno cita al Martí que le conviene.",
    "confianza": "alta"
  },
  {
    "id": "carlos-juan-finlay",
    "nombre": "Carlos Juan Finlay",
    "nombreCompleto": "Carlos Juan Finlay y Barrés",
    "anios": "1833-1915",
    "nacion": "cuba",
    "tambienReclamadoPor": [],
    "oficio": "Médico e investigador",
    "categoria": "ciencia",
    "gesta": "En 1881, ante una conferencia sanitaria internacional en Washington, un médico cubano dijo que la fiebre amarilla no viajaba en el aire ni en la ropa de los enfermos, sino en un mosquito. Se rieron de él. Durante veinte años siguió haciendo experimentos y repitiendo lo mismo, con fama de excéntrico. En 1900 una comisión del ejército de Estados Unidos fue a La Habana, usó sus mosquitos y sus huevos, y comprobó que tenía razón; En menos de un año la fiebre amarilla desapareció de la ciudad, y gracias a eso se pudo terminar el canal de Panamá, que la enfermedad había detenido matando obreros por millares.",
    "porQueImporta": "Es la respuesta al prejuicio de que la ciencia no se hizo en español: la idea que salvó más vidas en el Caribe la pensó un cubano, publicándola primero en castellano. Y su historia enseña algo que este movimiento debe recordar: lo hispano ha producido descubrimientos de primer orden que otros firmaron.",
    "biografia": "Nació en Puerto Príncipe, hoy Camagüey, hijo de un médico escocés y de una francesa, y se educó en Francia y en Estados Unidos, donde se graduó en el Jefferson Medical College de Filadelfia. Ejerció como oftalmólogo en La Habana. Publicó en 1881 su hipótesis sobre el mosquito hoy llamado Aedes aegypti como agente transmisor de la fiebre amarilla. Tras la confirmación de 1900 fue jefe de sanidad de Cuba. Fue propuesto varias veces al premio Nobel y nunca lo recibió. Murió en La Habana en 1915.",
    "fraseVerificable": "",
    "medalla": "medalla-del-saber",
    "controversia": "El crédito público se lo llevó durante décadas Walter Reed y la comisión norteamericana, y todavía hay manuales que cuentan la historia sin nombrarlo. Sus experimentos consistieron en dejar que mosquitos infectados picaran a voluntarios, muchos de ellos inmigrantes españoles recién llegados y sin medios: con los criterios éticos de hoy no serían aceptables, y algunos enfermaron. Tampoco acertó en todo: durante años defendió tratamientos que no servían.",
    "confianza": "alta"
  },
  {
    "id": "gabriela-mistral",
    "nombre": "Gabriela Mistral",
    "nombreCompleto": "Lucila Godoy Alcayaga",
    "anios": "1889-1957",
    "nacion": "chile",
    "tambienReclamadoPor": [],
    "oficio": "Maestra rural, poeta y cónsul",
    "categoria": "letras",
    "gesta": "La rechazaron en la Escuela Normal por sospechosa de escribir cosas impías en el periódico, así que se hizo maestra sin título, en escuelas de pueblos de montaña donde los niños llegaban descalzos. Escribiendo de noche ganó en 1914 los Juegos Florales de Santiago y no subió al escenario a recogerlo: lo escuchó desde la galería. En 1922 el ministro Vasconcelos la llamó a México para ayudar a levantar la educación rural y las bibliotecas de un país entero, y ella fue. En 1945, en Estocolmo, una maestra de Montegrande recibió el primer premio Nobel de literatura de toda América Latina.",
    "porQueImporta": "Fue la primera vez que el mundo reconoció que en la lengua española de América se escribía literatura mayor, y abrió la puerta por la que pasaron después Asturias, Neruda, García Márquez y Paz. Además puso su prestigio al servicio de la educación de otros países hispanos, no solo del suyo: pensaba la Hispanidad como una sola aula.",
    "biografia": "Nació en Vicuña, valle de Elqui, y se crio en Montegrande. Fue maestra y directora de liceos en Chile, colaboró con la reforma educativa mexicana entre 1922 y 1924, y después fue cónsul de Chile en Nápoles, Madrid, Lisboa, Brasil y Estados Unidos. Publicó Desolación, Ternura, Tala y Lagar. Recibió el Nobel en 1945 y el Premio Nacional de Literatura de Chile en 1951. Murió en Nueva York en 1957 y está enterrada en Montegrande.",
    "fraseVerificable": "Piececitos de niño, azulosos de frío.",
    "medalla": "medalla-de-la-palabra",
    "controversia": "El Chile oficial la convirtió en una abuela santa y asexuada, y borró durante medio siglo su relación con Doris Dana, conocida a fondo solo cuando en 2007 se abrieron sus cartas. Vivió casi toda su vida adulta fuera del país que la puso en los billetes. Y hubo quien atribuyó su Nobel más a la diplomacia hispanoamericana que a su obra, un reproche que la persiguió en vida y que su poesía no merece.",
    "confianza": "alta"
  },
  {
    "id": "jose-rizal",
    "nombre": "José Rizal",
    "nombreCompleto": "José Protasio Rizal Mercado y Alonso Realonda",
    "anios": "1861-1896",
    "nacion": "filipinas",
    "tambienReclamadoPor": [
      "espana"
    ],
    "oficio": "Médico oftalmólogo y novelista",
    "categoria": "letras",
    "gesta": "Era un médico filipino formado en Madrid, París y Heidelberg que operaba cataratas, y entre paciente y paciente escribió en español dos novelas sobre lo que los frailes le hacían a su país. Los libros entraron de contrabando en Filipinas y encendieron una generación entera. Lo desterraron a Dapitan, donde montó una escuela, una clínica y un sistema de agua potable para el pueblo. La noche antes de que lo fusilaran escribió un poema de despedida en castellano y lo escondió en un candil de alcohol; su hermana lo recuperó, y esos versos se aprendieron de memoria en un archipiélago que hoy ya no habla español.",
    "porQueImporta": "Filipinas es la parte amputada de la Hispanidad, y Rizal es la prueba de que existió: su patriotismo filipino se escribió en castellano y se pensó con Cervantes y con las Cortes de Cádiz al lado. Recordarlo obliga a este movimiento a mirar hacia Asia y hacia lo que se perdió por no cuidar la lengua.",
    "biografia": "Nació en Calamba, Laguna, en una familia acomodada de origen chino, malayo y español. Estudió en el Ateneo y en Santo Tomás de Manila y después en la Universidad Central de Madrid. Publicó Noli me tangere en Berlín en 1887 y El filibusterismo en Gante en 1891. Fundó en 1892 la Liga Filipina, asociación reformista y no armada, y fue desterrado a Dapitan cuatro años. Al estallar la revolución del Katipunan fue detenido, juzgado por un consejo de guerra y fusilado en Bagumbayan el 30 de diciembre de 1896, a los treinta y cinco años.",
    "fraseVerificable": "Adiós, Patria adorada, región del sol querida.",
    "medalla": "medalla-de-la-palabra",
    "controversia": "No apoyó la insurrección armada por la que lo mataron: pedía reformas, representación en las Cortes e igualdad de derechos dentro de España, y llegó a ofrecerse como médico militar del ejército español en Cuba. Que fuera declarado héroe nacional bajo la administración colonial norteamericana, precisamente por pacífico y frente a Bonifacio, sigue siendo objeto de debate en Filipinas. Y la retractación que según los frailes firmó la víspera de su muerte se discute desde hace más de un siglo.",
    "confianza": "alta"
  },
  {
    "id": "miguel-de-cervantes",
    "nombre": "Miguel de Cervantes",
    "nombreCompleto": "Miguel de Cervantes Saavedra",
    "anios": "1547-1616",
    "nacion": "espana",
    "tambienReclamadoPor": [],
    "oficio": "Soldado, recaudador y escritor",
    "categoria": "letras",
    "gesta": "En Lepanto, con fiebre y contra la orden de quedarse bajo cubierta, pidió el puesto más peligroso de la galera y salió de allí con la mano izquierda destrozada para siempre. Volviendo a España lo capturaron corsarios y pasó cinco años esclavo en Argel, donde intentó escapar cuatro veces y cada vez cargó él con la culpa para que no mataran a los demás. Rescatado, fue recaudador de impuestos, lo excomulgaron y lo metieron preso. Y a los cincuenta y siete años, viejo y pobre, publicó el libro que inventó la novela moderna.",
    "porQueImporta": "Es el idioma mismo. Quinientos ochenta millones de personas hablan hoy la lengua que se llama de Cervantes, y ese apellido es lo único que hispanos de veinte países aceptan sin discutir como propio de todos. Además el Quijote se escribió contra la solemnidad: ríe de sí mismo, y esa es la mejor herencia posible para un movimiento que no quiere volverse fanático.",
    "biografia": "Nació en Alcalá de Henares, hijo de un cirujano endeudado. Combatió en Lepanto en 1571 y quedó manco de la mano izquierda. Cautivo en Argel entre 1575 y 1580. Solicitó un cargo en las Indias y se lo negaron. Fue comisario de abastos de la Armada Invencible y recaudador en Andalucía, oficio que le costó la cárcel. Publicó La Galatea, El ingenioso hidalgo don Quijote de la Mancha en 1605 y su segunda parte en 1615, las Novelas ejemplares y el Persiles. Murió en Madrid en 1616, pobre, y sus restos se perdieron: en 2015 se halló en las Trinitarias la fosa común donde con toda probabilidad están, pero sin poder señalar cuáles son.",
    "fraseVerificable": "La libertad, Sancho, es uno de los más preciosos dones que a los hombres dieron los cielos.",
    "medalla": "medalla-de-la-palabra",
    "controversia": "La galería no lo puede presentar solo como víctima. Cobró impuestos para la corona como comisario de abastos y acabó preso por sus cuentas; pidió un empleo en Indias que no le dieron; y por boca de sus personajes deslizó sobre moriscos y judeoconversos cosas que hoy no se sostienen. Fue un hombre de su siglo, no un disidente de este.",
    "confianza": "alta"
  }
];

EH.VIVOS = [];

EH.medalla = function (id) {
  return EH.MEDALLAS.filter(function (x) { return x.id === id; })[0] || null;
};

EH.honrado = function (id) {
  var t = EH.HISTORICOS.filter(function (x) { return x.id === id; })[0];
  if (t) return { f: t, vivo: false };
  var w = EH.VIVOS.filter(function (x) { return x.id === id; })[0];
  return w ? { f: w, vivo: true } : null;
};

/* Fichas que NO se publican y por que. Solo las ve el fundador, en la propia
   sala. Se dejan en el codigo en vez de borrarlas porque la decision de
   incluirlas o no es politica y es suya, no del programador. */
EH.SALA_EN_REVISION = EH.VIVOS.filter(function (f) { return f.publicable === false; });

/* LAS CUATRO CONDICIONES PARA PUBLICAR A ALGUIEN VIVO.
   Las puso la revision legal y no son negociables. Mientras falte una sola,
   la ficha se queda en revision. */
EH.SALA_CONDICIONES = [
  'Consentimiento por escrito de la persona o de su representante. Sin excepciones y sin "seguro que no le importa".',
  'Cada hecho contrastado en fuente PRIMARIA: la web de la academia que da el premio, el boletin oficial, la editorial. Nunca una enciclopedia que cita prensa sin identificar.',
  'La URL completa del canal con su identificador, comprobada a mano. Un nombre suelto no identifica ningun canal.',
  'CERO fotografias. Ni una. El retrato de una persona viva ilustrando una condecoracion de un movimiento politico junta el derecho del fotografo y el derecho a la propia imagen, y ademas afirma pertenencia sin decirlo. Solo tipografia.'
];

/* Y la frase fija que tendria que ir en CADA ficha de persona viva el dia que
   se publique alguna. En cada una, no en un pie de pagina: la captura de
   pantalla que circula por WhatsApp no lleva el pie de pagina. */
EH.SALA_DESLINDE = 'Los Estados Hispanos honra la obra publica de esta persona. ' +
  'Esta distincion no implica vinculo, pertenencia ni respaldo al movimiento. ' +
  'Es una distincion simbolica otorgada por Los Estados Hispanos, no un premio ' +
  'recibido por la persona de ninguna institucion.';
EH.VIVOS_PUBLICOS = EH.VIVOS.filter(function (f) { return f.publicable !== false; });
