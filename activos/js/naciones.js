/* =========================================================================
   LAS 24 ENTIDADES DE LA HISPANIDAD
   =========================================================================
   POR QUE ES UN ARCHIVO .JS Y NO UN .JSON
   Porque fetch() de un .json esta bloqueado cuando la pagina se abre con doble
   clic (protocolo file://). Un .js se carga con una etiqueta script y funciona
   igual en local que publicado. Es la unica forma de cumplir la promesa del
   LEEME: abre sin internet y sin instalar nada.

   POR QUE ESTAN LAS 24 Y NO 20
   Veinte son los Estados soberanos donde el espanol es lengua oficial. A esos
   se suman cuatro que el movimiento reconoce y casi nadie cuenta:
     - Puerto Rico, territorio no incorporado de Estados Unidos.
     - Sahara Occidental, territorio no autonomo segun la ONU. Es la ficha mas
       delicada del dossier: se redacta sin tomar partido y con las cifras
       declaradas como lo que son, estimaciones sin censo.
     - Filipinas, 333 anos hispana y hoy NO hispanohablante. Esta por herencia,
       y su ficha lo dice sin adornos. El chabacano se cuenta aparte porque es
       un criollo de base espanola, no espanol.
     - La Hispanidad en Estados Unidos, que por numero de hablantes es una de
       las mayores del mundo. Es el dato mas poderoso que tenemos.

   ESTE DOSSIER PASO POR UNA VERIFICACION ADVERSARIAL. Se corrigieron tres
   afirmaciones falsas (Ecuador tiene cuatro oros olimpicos y no uno; el numero
   de Roberto Clemente no esta retirado en toda la MLB; Brasil es 7,5 veces
   Colombia y no 20) y ocho imprecisiones, entre ellas las cifras del Sahara y
   la confusion entre hablantes de chabacano y de espanol en Filipinas.

   AUN ASI: el LEEME del taller lo advierte y aqui se repite. Antes de citar
   cualquiera de estos datos en prensa o en un debate, confirmalo en la fuente
   oficial. Un numero viejo en camara te desarma.
   ========================================================================= */

window.EH = window.EH || {};

EH.NACIONES = [
  {
    "id": "espana",
    "nombre": "España",
    "nombreOficial": "Reino de España",
    "bandera": "🇪🇸",
    "capital": "Madrid",
    "lat": 40.46,
    "lon": -3.75,
    "poblacion": 49100000,
    "hispanohablantes": 47500000,
    "pibNominalMillonesUsd": 1730000,
    "moneda": "Euro (EUR)",
    "idiomasCooficiales": [
      "catalán / valenciano",
      "gallego",
      "euskera",
      "aranés (occitano)"
    ],
    "estatus": "soberano",
    "gentilicio": "español / española",
    "lema": "Plus Ultra",
    "independencia": "Estado soberano de formación medieval; su marco actual es la Constitución de 1978, aprobada en referéndum tras la dictadura.",
    "resumen": "El origen de la lengua que hoy hablan cerca de quinientos millones de personas como lengua materna —seiscientos si se cuentan quienes la manejan con competencia limitada y quienes la estudian— y el segundo mercado editorial del idioma. No es la cabeza de la Hispanidad: es su hermana mayor. Una democracia europea de casi 50 millones de habitantes que aporta capital, universidad y presencia diplomática al mundo hispano.",
    "orgullo": [
      "Lidera el mundo en donación y trasplante de órganos desde hace más de treinta años consecutivos: ningún otro país ha sostenido ese primer puesto tanto tiempo, y su modelo de coordinación hospitalaria se ha copiado en decenas de países.",
      "Tiene la red de alta velocidad ferroviaria más extensa del mundo después de China, con cerca de 4.000 kilómetros en servicio para un país del tamaño de Texas.",
      "El español es la segunda lengua materna del planeta por número de hablantes nativos, solo por detrás del chino mandarín, y la tercera más usada en internet.",
      "Con 50 sitios inscritos, es el quinto país del mundo en la lista de Patrimonio Mundial de la Unesco, y el primero en número de ciudades declaradas Patrimonio."
    ],
    "figuras": [
      {
        "nombre": "Miguel de Cervantes",
        "porQue": "Escribió en 1605 la novela que fundó el género moderno; el Quijote es el libro más traducido del mundo después de la Biblia."
      },
      {
        "nombre": "Santiago Ramón y Cajal",
        "porQue": "Nobel de Medicina en 1906. Demostró que el cerebro está hecho de células individuales: toda la neurociencia posterior parte de sus dibujos."
      },
      {
        "nombre": "Pablo Picasso",
        "porQue": "Cofundó el cubismo y cambió lo que el siglo XX entendía por pintura; el Guernica sigue siendo la denuncia visual más reconocible de la historia."
      }
    ],
    "aporteALaHispanidad": "España aportó la lengua, el derecho de tradición romana y la matriz institucional —universidad, notaría, municipio— sobre la que se construyeron veinte repúblicas. Hoy su aporte es distinto y menos comentado: es el país que más invierte en América Latina después de Estados Unidos, sostiene el Instituto Cervantes y la Real Academia dentro de una asociación de veintitrés academias donde su voto vale lo mismo que el de Guatemala, y sirve de puerta de entrada de lo hispano a la Unión Europea.",
    "notaHonesta": "La relación de España con América incluye la conquista, la encomienda y la trata atlántica, y ese pasado no se resuelve con silencio ni con orgullo. Este movimiento no defiende el imperio: defiende lo que veinte pueblos construyeron después con la lengua que quedó. Además, España no manda en la Hispanidad: es un socio más, y con menos población que México, Colombia o Argentina.",
    "confianzaDatos": "alta"
  },
  {
    "id": "mexico",
    "nombre": "México",
    "nombreOficial": "Estados Unidos Mexicanos",
    "bandera": "🇲🇽",
    "capital": "Ciudad de México",
    "lat": 23.63,
    "lon": -102.55,
    "poblacion": 130000000,
    "hispanohablantes": 127000000,
    "pibNominalMillonesUsd": 1800000,
    "moneda": "Peso mexicano (MXN)",
    "idiomasCooficiales": [
      "68 lenguas indígenas nacionales reconocidas por ley (náhuatl, maya, mixteco, zapoteco, otomí, entre otras)"
    ],
    "estatus": "soberano",
    "gentilicio": "mexicano / mexicana",
    "lema": "",
    "independencia": "Iniciada el 16 de septiembre de 1810 y consumada el 27 de septiembre de 1821.",
    "resumen": "El país más hispanohablante del planeta y la mayor economía de habla española. Una de cada cuatro personas que hablan español en el mundo es mexicana, y buena parte de lo que el mundo come, ve y escucha en nuestro idioma sale de aquí.",
    "orgullo": [
      "Es el país con más hablantes de español del mundo: uno de cada cuatro hispanohablantes del planeta es mexicano, y ninguna otra lengua tiene un país tan dominante en su demografía.",
      "El maíz, el tomate, el cacao, el aguacate, el chile y el frijol fueron domesticados en Mesoamérica. Sin la agricultura mexicana no existirían la pizza italiana, el chocolate suizo ni el curry indio picante.",
      "Guillermo González Camarena patentó en 1940, a los 22 años, un sistema tricromático secuencial de campos: uno de los primeros métodos viables de televisión a color del mundo.",
      "Mario Molina ganó el Nobel de Química en 1995 por demostrar que los clorofluorocarbonos destruían la capa de ozono. Su hallazgo llevó al Protocolo de Montreal, el tratado ambiental más exitoso de la historia."
    ],
    "figuras": [
      {
        "nombre": "Sor Juana Inés de la Cruz",
        "porQue": "Poeta y pensadora del siglo XVII que defendió por escrito el derecho de las mujeres al conocimiento, doscientos años antes de que existiera la palabra feminismo."
      },
      {
        "nombre": "Mario Molina",
        "porQue": "Nobel de Química 1995; primer mexicano en ganar un Nobel científico y arquitecto intelectual del acuerdo que salvó la capa de ozono."
      },
      {
        "nombre": "Frida Kahlo",
        "porQue": "La pintora más reconocible del siglo XX fuera de Europa; convirtió la biografía y el símbolo indígena en lenguaje universal."
      }
    ],
    "aporteALaHispanidad": "México le dio a la Hispanidad su masa crítica y su industria cultural. La imprenta llegó a América por México en 1539, la Real Universidad se fundó en 1551, y en el siglo XX el cine, la radio, la canción ranchera y la telenovela mexicana crearon por primera vez un público continental que se reconocía en un mismo acento y un mismo repertorio. También le dio asilo a la República española derrotada en 1939, y con ella a una generación de científicos, editores y filósofos que refundaron la vida intelectual del idioma.",
    "notaHonesta": "México no tiene un idioma oficial declarado en su Constitución: la ley reconoce el español y 68 lenguas indígenas como lenguas nacionales con la misma validez. También arrastra una crisis de violencia y desapariciones que ninguna cifra de PIB compensa, y una desigualdad regional profunda entre el norte industrial y el sur indígena.",
    "confianzaDatos": "alta"
  },
  {
    "id": "guatemala",
    "nombre": "Guatemala",
    "nombreOficial": "República de Guatemala",
    "bandera": "🇬🇹",
    "capital": "Ciudad de Guatemala",
    "lat": 15.78,
    "lon": -90.23,
    "poblacion": 17600000,
    "hispanohablantes": 15000000,
    "pibNominalMillonesUsd": 112000,
    "moneda": "Quetzal (GTQ)",
    "idiomasCooficiales": [
      "22 lenguas mayas, garífuna y xinka reconocidas como lenguas nacionales (el español es la única lengua oficial)"
    ],
    "estatus": "soberano",
    "gentilicio": "guatemalteco / guatemalteca",
    "lema": "",
    "independencia": "15 de septiembre de 1821.",
    "resumen": "El corazón del mundo maya y el país más poblado de Centroamérica. Guatemala es la prueba viva de que la Hispanidad no borró lo indígena: aquí conviven el español y veintidós lenguas mayas, y de aquí salieron dos premios Nobel en veinticinco años.",
    "orgullo": [
      "La escritura maya, desarrollada en estas tierras, es el único sistema de escritura completo y plenamente descifrado de la América precolombina: podía anotar cualquier frase del idioma hablado, como el alfabeto latino.",
      "Dos premios Nobel para un país de 17 millones: Miguel Ángel Asturias en Literatura (1967) y Rigoberta Menchú de la Paz (1992).",
      "El Popol Vuh, el libro sagrado k'iche', se salvó porque un fraile dominico lo transcribió y lo tradujo al español en Chichicastenango hacia 1701: la mitología maya llegó al siglo XXI montada en nuestro alfabeto.",
      "Luis von Ahn, guatemalteco, inventó el CAPTCHA y el reCAPTCHA —con el que se digitalizaron millones de libros— y después fundó Duolingo, la aplicación con la que hoy el mundo aprende idiomas."
    ],
    "figuras": [
      {
        "nombre": "Miguel Ángel Asturias",
        "porQue": "Nobel de Literatura 1967; su Hombres de maíz abrió el camino del realismo mágico que después conquistaría el mundo."
      },
      {
        "nombre": "Rigoberta Menchú",
        "porQue": "Nobel de la Paz 1992; llevó la causa de los pueblos indígenas de América a la agenda internacional."
      },
      {
        "nombre": "Luis von Ahn",
        "porQue": "Creador del reCAPTCHA y fundador de Duolingo; convirtió a un país centroamericano en origen de una de las plataformas educativas más usadas del planeta."
      }
    ],
    "aporteALaHispanidad": "Guatemala demuestra el modelo que la Hispanidad quiere para sí: un país donde el español es lengua común sin ser lengua única, y donde la Academia de Lenguas Mayas convive con la Academia Guatemalteca de la Lengua Española. La Antigua Guatemala fue capital de toda Centroamérica y sede de la tercera universidad de América. Y en el siglo XXI aporta algo inesperado: talento tecnológico de escala mundial.",
    "notaHonesta": "La cifra de hispanohablantes es una estimación: cerca del 70% de los guatemaltecos tiene el español como lengua materna y buena parte del resto lo habla como segunda lengua, pero existen comunidades mayas monolingües. El país también arrastra el guerra civil de 1960-1996 —con violaciones documentadas por la Comisión de Esclarecimiento Histórico— y una de las tasas de desnutrición infantil más altas del hemisferio.",
    "confianzaDatos": "media"
  },
  {
    "id": "honduras",
    "nombre": "Honduras",
    "nombreOficial": "República de Honduras",
    "bandera": "🇭🇳",
    "capital": "Tegucigalpa",
    "lat": 15.2,
    "lon": -86.24,
    "poblacion": 10600000,
    "hispanohablantes": 10300000,
    "pibNominalMillonesUsd": 36000,
    "moneda": "Lempira (HNL)",
    "idiomasCooficiales": [
      "lenguas indígenas y afrodescendientes reconocidas por ley (garífuna, miskito, lenca, tolupán, pech, tawahka)"
    ],
    "estatus": "soberano",
    "gentilicio": "hondureño / hondureña",
    "lema": "Libre, Soberana e Independiente",
    "independencia": "15 de septiembre de 1821.",
    "resumen": "Guardián de Copán, la capital intelectual del mundo maya clásico, y de la mayor selva tropical de América al norte del Amazonas. Un país de diez millones que le puso a su moneda el nombre del cacique que resistió la conquista.",
    "orgullo": [
      "La Escalinata de los Jeroglíficos de Copán tiene más de 2.200 glifos tallados en sesenta y tres escalones: es el texto maya más largo que existe y una de las inscripciones más extensas de la América antigua.",
      "Copán fue el centro astronómico y escultórico del mundo maya clásico; allí se calculó la duración del año solar con un error de minutos.",
      "La Mosquitia hondureña, con la Reserva de la Biosfera del Río Plátano, es la mayor extensión continua de selva tropical de América al norte de la Amazonía.",
      "La moneda nacional se llama lempira por el cacique lenca que encabezó la resistencia contra los conquistadores en 1537: es de los poquísimos países del mundo cuya divisa lleva el nombre de un líder indígena."
    ],
    "figuras": [
      {
        "nombre": "Salvador Moncada",
        "porQue": "Farmacólogo que descubrió la prostaciclina y el papel del óxido nítrico en el sistema cardiovascular; su exclusión del Nobel de Medicina de 1998 sigue siendo discutida en la comunidad científica."
      },
      {
        "nombre": "José Antonio Velásquez",
        "porQue": "Pintor primitivista, el primero de América Latina reconocido internacionalmente en ese estilo; su San Antonio de Oriente se expuso en Washington en 1954."
      },
      {
        "nombre": "Clementina Suárez",
        "porQue": "Primera mujer hondureña en publicar un libro de poemas (1930) y figura central de la vanguardia literaria centroamericana."
      }
    ],
    "aporteALaHispanidad": "Honduras conserva el archivo en piedra del mundo maya y lo administra como patrimonio de todos los hispanohablantes: Copán es un laboratorio donde epigrafistas de veinte países leen, en español, la escritura precolombina. Su diáspora, además, es una de las columnas de la Hispanidad estadounidense.",
    "notaHonesta": "Es uno de los países más pobres del hemisferio, con más de la mitad de la población bajo la línea de pobreza, alta violencia y una emigración que vacía comunidades enteras. Las cifras de población son estimaciones proyectadas: el último censo completo es de 2013.",
    "confianzaDatos": "media"
  },
  {
    "id": "el-salvador",
    "nombre": "El Salvador",
    "nombreOficial": "República de El Salvador",
    "bandera": "🇸🇻",
    "capital": "San Salvador",
    "lat": 13.79,
    "lon": -88.9,
    "poblacion": 6030000,
    "hispanohablantes": 6000000,
    "pibNominalMillonesUsd": 35000,
    "moneda": "Dólar estadounidense (USD)",
    "idiomasCooficiales": [
      "náhuat-pipil reconocido como lengua en recuperación (el español es la única lengua oficial)"
    ],
    "estatus": "soberano",
    "gentilicio": "salvadoreño / salvadoreña",
    "lema": "Dios, Unión, Libertad",
    "independencia": "15 de septiembre de 1821.",
    "resumen": "El país más pequeño de la América continental y el más densamente poblado, con una capacidad de reinvención que ha sorprendido al continente dos veces en cuarenta años. Su diáspora sostiene una parte enorme de la economía nacional.",
    "orgullo": [
      "Joya de Cerén, la 'Pompeya de América': una aldea maya sepultada por ceniza volcánica hacia el año 600 que conservó las casas, los huertos y hasta la comida servida. Es el único sitio del mundo que muestra cómo vivía el campesinado maya, no sus reyes.",
      "Es el país más pequeño de América continental —21.041 km²— y aun así el más densamente poblado del istmo: cabe entero en el departamento colombiano de Nariño.",
      "Las remesas de los salvadoreños en el exterior equivalen a cerca de la cuarta parte del PIB nacional, una de las proporciones más altas del mundo: la diáspora no es una pérdida, es una economía.",
      "Óscar Arnulfo Romero, arzobispo asesinado en 1980 mientras celebraba misa, fue canonizado por la Iglesia católica en 2018: el primer santo salvadoreño y una figura moral reconocida mucho más allá del catolicismo."
    ],
    "figuras": [
      {
        "nombre": "Óscar Arnulfo Romero",
        "porQue": "Arzobispo asesinado en 1980 y canonizado en 2018; símbolo internacional de la defensa de los pobres frente al poder."
      },
      {
        "nombre": "Roque Dalton",
        "porQue": "Uno de los poetas más influyentes de Centroamérica; su ironía política renovó la poesía en español de los años sesenta."
      },
      {
        "nombre": "Fernando Llort",
        "porQue": "Creó en La Palma un lenguaje visual —color plano, figura ingenua— que se volvió la iconografía reconocible del país entero."
      }
    ],
    "aporteALaHispanidad": "El Salvador aporta el ejemplo más nítido de una Hispanidad transnacional: casi una tercera parte de los salvadoreños vive fuera y sostiene, desde Los Ángeles y Washington, comunidades enteras dentro. También aporta una tradición literaria y de pensamiento —Masferrer, Dalton, Claudia Lars— muy superior a lo que su tamaño haría esperar.",
    "notaHonesta": "El dólar estadounidense es la moneda de curso legal desde 2001; el colón salvadoreño ya no circula. El bitcoin fue moneda de curso legal entre 2021 y 2025, cuando se retiró esa condición en el marco de un acuerdo con el FMI. Las medidas de seguridad de los últimos años han reducido drásticamente los homicidios, pero organismos de derechos humanos han documentado detenciones masivas sin garantías bajo el régimen de excepción: el dato bueno y el dato incómodo son ciertos a la vez.",
    "confianzaDatos": "alta"
  },
  {
    "id": "nicaragua",
    "nombre": "Nicaragua",
    "nombreOficial": "República de Nicaragua",
    "bandera": "🇳🇮",
    "capital": "Managua",
    "lat": 12.87,
    "lon": -85.21,
    "poblacion": 6900000,
    "hispanohablantes": 6600000,
    "pibNominalMillonesUsd": 19000,
    "moneda": "Córdoba (NIO)",
    "idiomasCooficiales": [
      "miskito",
      "creole inglés",
      "sumo-mayangna",
      "rama (oficiales en las regiones autónomas del Caribe)"
    ],
    "estatus": "soberano",
    "gentilicio": "nicaragüense",
    "lema": "En Dios Confiamos",
    "independencia": "15 de septiembre de 1821.",
    "resumen": "El país más extenso de Centroamérica y la patria de Rubén Darío, el poeta que le devolvió a España su propia lengua transformada. Aquí nació el único movimiento literario que cruzó el Atlántico de América hacia Europa.",
    "orgullo": [
      "Rubén Darío fundó el modernismo con Azul... (1888): la primera vez en la historia que un movimiento literario nacido en América cambió la poesía de España, y no al revés. Antonio Machado y Juan Ramón Jiménez lo reconocieron como maestro.",
      "El lago Cocibolca es el mayor lago de Centroamérica y uno de los poquísimos del mundo donde vive el tiburón toro, que remonta el río San Juan desde el Caribe hasta el agua dulce.",
      "Violeta Barrios de Chamorro fue elegida presidenta en 1990: la primera mujer que llegó a la presidencia por votación popular en todo el continente americano.",
      "León y Granada conservan dos de los conjuntos coloniales más completos de América Central, y la catedral de León es el templo más grande de la región y Patrimonio Mundial."
    ],
    "figuras": [
      {
        "nombre": "Rubén Darío",
        "porQue": "Padre del modernismo; el poeta que renovó el idioma para los dos lados del Atlántico y sigue siendo el punto de partida de la poesía hispánica moderna."
      },
      {
        "nombre": "Ernesto Cardenal",
        "porQue": "Poeta y sacerdote, creador del 'exteriorismo'; su Oración por Marilyn Monroe es de los poemas hispanoamericanos más citados del siglo XX."
      },
      {
        "nombre": "Violeta Barrios de Chamorro",
        "porQue": "Primera mujer elegida presidenta en América; su transición pacífica en 1990 cerró una guerra civil por la vía del voto."
      }
    ],
    "aporteALaHispanidad": "Nicaragua le dio a la lengua su punto de inflexión moderno. Antes de Darío, la literatura en español miraba a Madrid; después de Darío, Madrid miró a América. Ese giro es la razón por la que hoy tiene sentido hablar de una Hispanidad de veinte voces y no de una metrópoli con colonias culturales.",
    "notaHonesta": "Desde 2018 el país vive una crisis política grave: organismos internacionales y la OEA han documentado represión, cierre de miles de organizaciones civiles, retirada de nacionalidad a opositores y exilio masivo. Las cifras económicas y demográficas oficiales deben leerse con esa reserva.",
    "confianzaDatos": "media"
  },
  {
    "id": "costa-rica",
    "nombre": "Costa Rica",
    "nombreOficial": "República de Costa Rica",
    "bandera": "🇨🇷",
    "capital": "San José",
    "lat": 9.75,
    "lon": -83.75,
    "poblacion": 5260000,
    "hispanohablantes": 5100000,
    "pibNominalMillonesUsd": 95000,
    "moneda": "Colón costarricense (CRC)",
    "idiomasCooficiales": [
      "lenguas indígenas reconocidas como patrimonio nacional (bribri, cabécar, ngäbere, maleku)"
    ],
    "estatus": "soberano",
    "gentilicio": "costarricense",
    "lema": "",
    "independencia": "15 de septiembre de 1821.",
    "resumen": "Un país que decidió no tener ejército y gastar ese dinero en escuelas y hospitales, y que setenta y cinco años después es la democracia más estable de la región. Costa Rica demuestra que un Estado hispanoamericano pequeño puede fijar el estándar mundial en algo.",
    "orgullo": [
      "Abolió el ejército en 1948 y lo consagró en la Constitución de 1949: el presupuesto militar se trasladó a educación y salud, y desde entonces no ha tenido un golpe de Estado.",
      "Genera de forma sostenida más del 98% de su electricidad con fuentes renovables, y ha encadenado periodos de meses enteros funcionando sin una sola planta de combustibles fósiles.",
      "Revirtió su deforestación: pasó de cerca del 21% de cobertura boscosa en los años ochenta a más de la mitad del territorio hoy. Es el caso de recuperación forestal nacional más citado del mundo.",
      "Concentra alrededor del 5% de la biodiversidad del planeta en el 0,03% de la superficie terrestre, y protege más de una cuarta parte de su territorio."
    ],
    "figuras": [
      {
        "nombre": "Óscar Arias",
        "porQue": "Nobel de la Paz 1987 por el plan que puso fin a las guerras civiles centroamericanas: un presidente de un país sin ejército pacificó a sus vecinos armados."
      },
      {
        "nombre": "Franklin Chang-Díaz",
        "porQue": "Primer astronauta latinoamericano de la NASA; voló siete misiones al espacio, récord compartido, y desarrolla motores de plasma para viajes interplanetarios."
      },
      {
        "nombre": "Carmen Naranjo",
        "porQue": "Narradora y ensayista, ministra de Cultura y una de las voces que definió la literatura centroamericana contemporánea."
      }
    ],
    "aporteALaHispanidad": "Costa Rica le aporta a la Hispanidad su mejor argumento de credibilidad internacional: un país de habla española que lidera índices mundiales de democracia, sostenibilidad y paz. En un movimiento que quiere ser tomado en serio en foros multilaterales, el prestigio costarricense es capital político compartido.",
    "notaHonesta": "El costo de la vida y la desigualdad han crecido, y la seguridad se ha deteriorado en los últimos años con récords de homicidios ligados al narcotráfico de tránsito. La imagen de país idílico ya no describe del todo su realidad urbana.",
    "confianzaDatos": "alta"
  },
  {
    "id": "panama",
    "nombre": "Panamá",
    "nombreOficial": "República de Panamá",
    "bandera": "🇵🇦",
    "capital": "Ciudad de Panamá",
    "lat": 8.54,
    "lon": -80.78,
    "poblacion": 4500000,
    "hispanohablantes": 4300000,
    "pibNominalMillonesUsd": 85000,
    "moneda": "Balboa (PAB) y dólar estadounidense de curso legal",
    "idiomasCooficiales": [
      "lenguas indígenas con reconocimiento en las comarcas (ngäbere, guna, emberá)"
    ],
    "estatus": "soberano",
    "gentilicio": "panameño / panameña",
    "lema": "Pro Mundi Beneficio",
    "independencia": "28 de noviembre de 1821 de España; separación de Colombia el 3 de noviembre de 1903.",
    "resumen": "El país hispanohablante por donde pasa el comercio del mundo. Panamá administra desde 1999 la infraestructura logística más estratégica del planeta, y lo hace en español.",
    "orgullo": [
      "Por el Canal de Panamá pasa cerca del 5% del comercio marítimo mundial, y desde el 31 de diciembre de 1999 lo administra íntegramente Panamá: un país hispanohablante controla una de las llaves del comercio global.",
      "Tiene el mayor registro de buques del mundo: más del 16% del tonelaje mercante del planeta navega bajo bandera panameña.",
      "El cierre del istmo de Panamá hace unos tres millones de años unió dos continentes, desvió las corrientes oceánicas y provocó el Gran Intercambio Biótico Americano: la geografía de Panamá reescribió la biología de medio mundo.",
      "El pueblo guna administra desde 1938 una comarca autónoma con su propio congreso general, uno de los regímenes de autogobierno indígena más antiguos y sólidos de América."
    ],
    "figuras": [
      {
        "nombre": "Rubén Blades",
        "porQue": "Convirtió la salsa en narrativa literaria con Pedro Navaja y Buscando América; múltiple ganador del Grammy y candidato presidencial."
      },
      {
        "nombre": "Mariano Rivera",
        "porQue": "Primer jugador de béisbol elegido por unanimidad al Salón de la Fama, en 2019; el mejor cerrador de la historia de las Grandes Ligas."
      },
      {
        "nombre": "Rogelio Sinán",
        "porQue": "Introdujo la vanguardia en la literatura panameña; su relato La boina roja es un clásico del cuento hispanoamericano."
      }
    ],
    "aporteALaHispanidad": "Panamá le aporta a la Hispanidad una prueba concreta de soberanía recuperada por la vía jurídica y diplomática: los Tratados Torrijos-Carter no se firmaron con las armas sino con abogados, presión internacional y opinión pública. Es el modelo exacto de advocacia que este movimiento defiende. Además es la bisagra logística y financiera entre las dos mitades de América.",
    "notaHonesta": "El país ha figurado en listas internacionales de vigilancia por opacidad financiera tras los Papeles de Panamá de 2016, y ha hecho reformas para salir de ellas. La desigualdad entre la capital y las comarcas indígenas es de las más marcadas del continente.",
    "confianzaDatos": "alta"
  },
  {
    "id": "cuba",
    "nombre": "Cuba",
    "nombreOficial": "República de Cuba",
    "bandera": "🇨🇺",
    "capital": "La Habana",
    "lat": 21.52,
    "lon": -77.78,
    "poblacion": 9700000,
    "hispanohablantes": 9700000,
    "pibNominalMillonesUsd": 100000,
    "moneda": "Peso cubano (CUP)",
    "idiomasCooficiales": [],
    "estatus": "soberano",
    "gentilicio": "cubano / cubana",
    "lema": "",
    "independencia": "Guerra iniciada en 1868; España renunció a la soberanía en 1898 y la república se instauró el 20 de mayo de 1902.",
    "resumen": "La isla que le dio al mundo el son, el mambo y el mejor prosista político de la lengua. Cuba ha exportado durante un siglo música, medicina y literatura muy por encima de lo que su tamaño explicaría.",
    "orgullo": [
      "Carlos Juan Finlay demostró en 1881 que el mosquito transmite la fiebre amarilla. Su hipótesis, ignorada veinte años, permitió sanear Panamá y terminar el Canal: sin un médico cubano, el comercio mundial sería otro.",
      "El son cubano es el tronco del que salieron el mambo, el chachachá y la salsa. Prácticamente toda la música bailable del mundo hispano —y buena parte del jazz latino— desciende de esta isla.",
      "Tiene una de las mayores densidades de médicos por habitante del planeta, en torno a ocho por cada mil personas, muy por encima de países mucho más ricos.",
      "Desarrolló Quimi-Hib, de las primeras vacunas del mundo basadas en un antígeno sintético, contra el Haemophilus influenzae tipo b: ciencia de frontera hecha bajo embargo."
    ],
    "figuras": [
      {
        "nombre": "José Martí",
        "porQue": "El mejor prosista político de la lengua española; su ensayo Nuestra América (1891) es el texto fundacional del pensamiento latinoamericanista."
      },
      {
        "nombre": "Carlos Juan Finlay",
        "porQue": "Descubrió el mecanismo de transmisión de la fiebre amarilla, uno de los grandes hallazgos de la medicina del siglo XIX."
      },
      {
        "nombre": "Alicia Alonso",
        "porQue": "Bailarina que llegó a la cima del ballet mundial interpretando Giselle casi ciega, y fundó una escuela cubana con estilo propio reconocido internacionalmente."
      }
    ],
    "aporteALaHispanidad": "Cuba le dio a la Hispanidad su banda sonora y una parte enorme de su pensamiento político moderno. Fue además la última en separarse de España, en 1898, y por eso conserva un vínculo lingüístico y familiar con la península que ningún otro país americano tiene con esa intensidad. Su diáspora convirtió a Miami en la mayor capital económica y mediática del español en Estados Unidos.",
    "notaHonesta": "Las cifras de este país son las menos fiables del dossier. El PIB nominal se calcula a un tipo de cambio oficial que no refleja la economía real, y las estimaciones independientes difieren enormemente; la cifra se ofrece solo como orden de magnitud. La población cae por una emigración masiva y varios demógrafos sostienen que la población residente real es menor que la oficial. Cuba es además un Estado de partido único con restricciones documentadas a la libertad de expresión y asociación: este movimiento defiende a los cubanos, no a su gobierno.",
    "confianzaDatos": "baja"
  },
  {
    "id": "republica-dominicana",
    "nombre": "República Dominicana",
    "nombreOficial": "República Dominicana",
    "bandera": "🇩🇴",
    "capital": "Santo Domingo",
    "lat": 18.74,
    "lon": -70.16,
    "poblacion": 11300000,
    "hispanohablantes": 11000000,
    "pibNominalMillonesUsd": 127000,
    "moneda": "Peso dominicano (DOP)",
    "idiomasCooficiales": [],
    "estatus": "soberano",
    "gentilicio": "dominicano / dominicana",
    "lema": "Dios, Patria, Libertad",
    "independencia": "27 de febrero de 1844 (de Haití); restauración de la independencia de España el 16 de agosto de 1863.",
    "resumen": "Donde empezó todo en América: la primera ciudad, la primera universidad, la primera catedral. Hoy es una de las economías de más rápido crecimiento del continente y la fábrica de música y peloteros del Caribe.",
    "orgullo": [
      "Santo Domingo es la primera ciudad europea permanente de América (1498) y conserva la primera catedral, la primera fortaleza y la primera universidad del continente, la de Santo Tomás de Aquino, fundada en 1538.",
      "El merengue y la bachata están inscritos en la lista de Patrimonio Cultural Inmaterial de la Humanidad de la Unesco, en 2016 y 2019: dos ritmos de un mismo país reconocidos en tres años.",
      "Es el país que más peloteros aporta a las Grandes Ligas después de Estados Unidos: más de un centenar de dominicanos por temporada en las plantillas.",
      "El Pico Duarte, de 3.101 metros, es la montaña más alta de todo el Caribe insular: la isla tiene alta montaña, desierto, manglar y bosque nuboso en un territorio del tamaño de Suiza."
    ],
    "figuras": [
      {
        "nombre": "Pedro Henríquez Ureña",
        "porQue": "El filólogo y crítico más influyente de América Latina en el siglo XX; formó a generaciones enteras en México y Argentina y definió el estudio del español americano."
      },
      {
        "nombre": "Juan Luis Guerra",
        "porQue": "Llevó el merengue y la bachata a escala mundial con letras de altura literaria; múltiple ganador del Grammy y del Latin Grammy."
      },
      {
        "nombre": "Pedro Martínez",
        "porQue": "Uno de los mejores lanzadores de la historia del béisbol y miembro del Salón de la Fama desde 2015."
      }
    ],
    "aporteALaHispanidad": "Aquí se instaló el primer ayuntamiento, la primera audiencia y la primera universidad del hemisferio: la República Dominicana es el punto cero institucional de la América hispana. En el siglo XXI aporta además una de las industrias musicales más exportadoras del idioma y un caso raro de crecimiento económico sostenido en el Caribe.",
    "notaHonesta": "La relación con Haití, con quien comparte la isla, incluye tensiones migratorias y casos documentados de apatridia tras la sentencia constitucional 168-13 de 2013, que afectó a personas de ascendencia haitiana nacidas en el país. Es un asunto pendiente en materia de derechos humanos.",
    "confianzaDatos": "alta"
  },
  {
    "id": "venezuela",
    "nombre": "Venezuela",
    "nombreOficial": "República Bolivariana de Venezuela",
    "bandera": "🇻🇪",
    "capital": "Caracas",
    "lat": 6.42,
    "lon": -66.59,
    "poblacion": 28400000,
    "hispanohablantes": 28000000,
    "pibNominalMillonesUsd": 102000,
    "moneda": "Bolívar (VES)",
    "idiomasCooficiales": [
      "los idiomas indígenas son oficiales para los pueblos indígenas (Constitución de 1999, art. 9)"
    ],
    "estatus": "soberano",
    "gentilicio": "venezolano / venezolana",
    "lema": "Dios y Federación",
    "independencia": "5 de julio de 1811.",
    "resumen": "El país que produjo al hombre que liberó seis naciones y al gramático que fijó el español de América. Venezuela guarda las mayores reservas de petróleo del planeta y una de las tradiciones musicales más originales del continente.",
    "orgullo": [
      "El Salto Ángel, de 979 metros de caída, es la cascada más alta del mundo: casi veinte veces el Niágara, en una meseta de dos mil millones de años.",
      "Tiene las mayores reservas probadas de petróleo del planeta, unos 300.000 millones de barriles, por encima de Arabia Saudita.",
      "El relámpago del Catatumbo, en la desembocadura del lago de Maracaibo, es el punto con mayor densidad de rayos del mundo: hasta 250 descargas por kilómetro cuadrado al año, con récord Guinness reconocido.",
      "El Sistema de orquestas juveniles fundado por José Antonio Abreu en 1975 ha formado a cientos de miles de niños y se ha replicado en más de setenta países; de él salió Gustavo Dudamel, hoy director de la Filarmónica de Nueva York."
    ],
    "figuras": [
      {
        "nombre": "Simón Bolívar",
        "porQue": "Condujo la independencia de seis naciones actuales y formuló el primer proyecto de unión continental hispanoamericana en la Carta de Jamaica (1815)."
      },
      {
        "nombre": "Andrés Bello",
        "porQue": "Escribió la Gramática de la lengua castellana destinada al uso de los americanos (1847), el texto que dio a América autoridad propia sobre su idioma."
      },
      {
        "nombre": "Gustavo Dudamel",
        "porQue": "Director de orquesta formado en El Sistema; dirige la Filarmónica de Nueva York y ha sido titular de Los Ángeles y de la Ópera de París."
      }
    ],
    "aporteALaHispanidad": "Venezuela aportó la idea misma de una comunidad hispanoamericana. Bolívar la pensó como proyecto político en 1815 y convocó el Congreso de Panamá en 1826; Andrés Bello la fundamentó como comunidad lingüística al escribir una gramática para americanos. Este movimiento es, en buena medida, deudor de esos dos venezolanos.",
    "notaHonesta": "Las cifras de este país son poco fiables y se ofrecen como orden de magnitud. Venezuela atraviesa la mayor crisis migratoria del hemisferio: cerca de 7,9 millones de personas han salido del país según agencias de la ONU, y la contabilidad nacional ha estado años sin publicarse con regularidad tras una hiperinflación. La cifra de población ya descuenta parte de esa salida. Existen además denuncias documentadas por organismos internacionales sobre derechos humanos y sobre la limpieza de los procesos electorales.",
    "confianzaDatos": "baja"
  },
  {
    "id": "colombia",
    "nombre": "Colombia",
    "nombreOficial": "República de Colombia",
    "bandera": "🇨🇴",
    "capital": "Bogotá",
    "lat": 4.57,
    "lon": -74.3,
    "poblacion": 52700000,
    "hispanohablantes": 52000000,
    "pibNominalMillonesUsd": 420000,
    "moneda": "Peso colombiano (COP)",
    "idiomasCooficiales": [
      "las lenguas de los grupos étnicos son oficiales en sus territorios (Constitución de 1991, art. 10): 65 lenguas indígenas, el palenquero, el creole raizal y el romaní"
    ],
    "estatus": "soberano",
    "gentilicio": "colombiano / colombiana",
    "lema": "Libertad y Orden",
    "independencia": "20 de julio de 1810 (grito de independencia); asegurada en la batalla de Boyacá el 7 de agosto de 1819.",
    "resumen": "El único país de Suramérica con costa en dos océanos y el más biodiverso del mundo por metro cuadrado. Colombia le dio a la lengua su novela más leída del siglo XX y mantiene, según los filólogos, uno de los españoles más claros del continente.",
    "orgullo": [
      "Es el país con más especies de aves del mundo —más de 1.900, cerca de una de cada cinco especies del planeta— y el segundo en biodiversidad total después de Brasil, con menos de la séptima parte de su territorio.",
      "San Basilio de Palenque, fundado por esclavizados fugados y reconocido como pueblo libre por la Corona en 1713, conserva el palenquero: la única lengua criolla de base española viva en América del Sur, y Patrimonio Inmaterial de la Humanidad.",
      "Cien años de soledad, de Gabriel García Márquez, se ha traducido a más de cuarenta idiomas y es la novela en español más leída después del Quijote.",
      "La Ciclovía de Bogotá cierra unos 120 kilómetros de vías cada domingo desde 1974 para peatones y ciclistas; el modelo se ha replicado en cientos de ciudades de todo el mundo bajo el nombre de open streets."
    ],
    "figuras": [
      {
        "nombre": "Gabriel García Márquez",
        "porQue": "Nobel de Literatura 1982; su realismo mágico cambió la novela mundial y volvió a poner al español en el centro de la literatura del siglo XX."
      },
      {
        "nombre": "Fernando Botero",
        "porQue": "Creó un estilo tan reconocible que se le llama por su apellido; sus esculturas están en plazas de París, Nueva York, Madrid y Singapur."
      },
      {
        "nombre": "Shakira",
        "porQue": "La artista latinoamericana más vendedora de la historia; llevó el español al primer puesto de las listas globales sin renunciar al idioma."
      }
    ],
    "aporteALaHispanidad": "Colombia aporta la mezcla en estado puro: andina, caribe, amazónica, pacífica y afrodescendiente en un solo Estado, con una Constitución de 1991 que hizo oficiales las lenguas de los pueblos étnicos en sus territorios. Aporta también el prestigio idiomático —el Instituto Caro y Cuervo es el mayor centro de estudios del español en América— y la industria cultural que hoy más música en español coloca en el mundo.",
    "notaHonesta": "Arrastra más de medio siglo de conflicto armado interno con más de nueve millones de víctimas registradas, un acuerdo de paz de 2016 con implementación incompleta y violencia persistente contra líderes sociales. El país que se presenta como el más biodiverso también es uno de los más peligrosos del mundo para quien defiende el ambiente.",
    "confianzaDatos": "alta"
  },
  {
    "id": "ecuador",
    "nombre": "Ecuador",
    "nombreOficial": "República del Ecuador",
    "bandera": "🇪🇨",
    "capital": "Quito",
    "lat": -1.83,
    "lon": -78.18,
    "poblacion": 18100000,
    "hispanohablantes": 17500000,
    "pibNominalMillonesUsd": 122000,
    "moneda": "Dólar estadounidense (USD)",
    "idiomasCooficiales": [
      "kichwa",
      "shuar (idiomas oficiales de relación intercultural, Constitución de 2008)"
    ],
    "estatus": "soberano",
    "gentilicio": "ecuatoriano / ecuatoriana",
    "lema": "Dios, patria y libertad",
    "independencia": "10 de agosto de 1809 (primer grito); consolidada en la batalla de Pichincha el 24 de mayo de 1822.",
    "resumen": "El país que le puso su nombre a la línea que parte el mundo y el primero del planeta en reconocer derechos jurídicos a la naturaleza. En las Galápagos, territorio ecuatoriano, Darwin entendió cómo funciona la vida.",
    "orgullo": [
      "Fue el primer país del mundo en reconocer derechos propios a la naturaleza en su Constitución, en 2008: desde entonces se puede demandar en nombre de un río o de un bosque, y varios tribunales ecuatorianos ya han fallado a favor.",
      "Las islas Galápagos, donde Darwin concibió la selección natural, fueron uno de los primeros doce lugares inscritos en la lista de Patrimonio Mundial de la Unesco, en 1978.",
      "Es el mayor exportador de banano del planeta y aporta más de la mitad del cacao fino de aroma del mundo: el chocolate de alta gama de Europa nace en fincas ecuatorianas.",
      "La Misión Geodésica Francesa midió el arco del meridiano en tierras quiteñas entre 1736 y 1744, y de aquel trabajo salió la definición del metro: la unidad con la que mide el mundo se calibró en el Ecuador."
    ],
    "figuras": [
      {
        "nombre": "Eugenio Espejo",
        "porQue": "Médico, periodista y precursor de la independencia; publicó en el siglo XVIII el primer periódico de Quito y planteó ideas sanitarias adelantadas a su época."
      },
      {
        "nombre": "Oswaldo Guayasamín",
        "porQue": "Su serie La edad de la ira es una de las denuncias pictóricas más potentes del siglo XX latinoamericano; expuesto en el Palacio de la Unesco y en museos de Europa y América."
      },
      {
        "nombre": "Jefferson Pérez",
        "porQue": "Primer campeón olímpico ecuatoriano: oro en Atlanta 1996, plata en Pekín 2008 y tricampeón mundial de marcha atlética."
      }
    ],
    "aporteALaHispanidad": "Ecuador aportó a la lengua el reconocimiento constitucional del kichwa y el shuar como idiomas de relación intercultural, un modelo jurídico que otros países estudian. Y aportó al mundo un concepto exportado desde el español: los derechos de la naturaleza, hoy citados en tribunales de Nueva Zelanda, India y Colombia.",
    "notaHonesta": "El país vive desde 2021 un fuerte deterioro de seguridad por el narcotráfico, con una de las tasas de homicidio de más rápido crecimiento del mundo. La explotación petrolera en la Amazonía sigue en tensión abierta con los derechos de la naturaleza que la Constitución proclama: la consulta popular de 2023 sobre el bloque ITT del Yasuní ganó por el cierre y su ejecución avanza con demoras.",
    "confianzaDatos": "alta"
  },
  {
    "id": "peru",
    "nombre": "Perú",
    "nombreOficial": "República del Perú",
    "bandera": "🇵🇪",
    "capital": "Lima",
    "lat": -9.19,
    "lon": -75.02,
    "poblacion": 34000000,
    "hispanohablantes": 31000000,
    "pibNominalMillonesUsd": 285000,
    "moneda": "Sol (PEN)",
    "idiomasCooficiales": [
      "quechua",
      "aimara",
      "y las demás lenguas originarias, oficiales en las zonas donde predominan"
    ],
    "estatus": "soberano",
    "gentilicio": "peruano / peruana",
    "lema": "Firme y feliz por la unión",
    "independencia": "Proclamada el 28 de julio de 1821 y consolidada en la batalla de Ayacucho el 9 de diciembre de 1824.",
    "resumen": "Sede del imperio más extenso de la América precolombina y de la ciudad más antigua del continente. El Perú alimentó al mundo con la papa y hoy es la referencia gastronómica de la Hispanidad.",
    "orgullo": [
      "Conserva más de 3.000 variedades de papa nativa. El tubérculo que domesticaron los pueblos andinos hace unos 8.000 años sostiene hoy la dieta de Europa, Asia y África: Irlanda, Rusia y China comen Perú.",
      "Caral, en el valle de Supe, es la ciudad más antigua de América: levantó pirámides hace unos 5.000 años, en la misma época que Egipto y mil años antes que los olmecas.",
      "Los quipus incas registraban censos, tributos y calendarios con nudos y colores: un sistema de contabilidad de Estado sin escritura alfabética que administró un imperio de dos millones de kilómetros cuadrados.",
      "La cocina peruana es la única de América Latina que compite de tú a tú con la francesa y la japonesa en los rankings mundiales: el restaurante Central de Lima fue elegido mejor del mundo por The World's 50 Best en 2023."
    ],
    "figuras": [
      {
        "nombre": "Mario Vargas Llosa",
        "porQue": "Nobel de Literatura 2010; uno de los constructores del boom latinoamericano y de la novela política moderna en español."
      },
      {
        "nombre": "César Vallejo",
        "porQue": "Con Trilce (1922) rompió la sintaxis del español y escribió la poesía más radical del idioma en el siglo XX."
      },
      {
        "nombre": "Gastón Acurio",
        "porQue": "Convirtió la cocina peruana en política de Estado y en industria de exportación; el modelo lo han copiado varios países."
      }
    ],
    "aporteALaHispanidad": "El Perú fue el centro administrativo del virreinato más rico de América y ahí se imprimió el primer libro de Sudamérica, en 1584. Aportó al idioma la primera gran obra mestiza —los Comentarios reales del Inca Garcilaso— y sigue aportando el modelo de una Hispanidad donde el quechua y el aimara son oficiales por derecho, no por cortesía.",
    "notaHonesta": "La cifra de hispanohablantes es una estimación: para cerca del 83% de los peruanos el español es lengua materna y la mayoría de los hablantes de quechua y aimara son bilingües, pero subsisten comunidades monolingües. El país arrastra además una inestabilidad política severa —varios presidentes en pocos años— y las secuelas del conflicto armado interno de 1980-2000, con más de 69.000 víctimas según la Comisión de la Verdad.",
    "confianzaDatos": "alta"
  },
  {
    "id": "bolivia",
    "nombre": "Bolivia",
    "nombreOficial": "Estado Plurinacional de Bolivia",
    "bandera": "🇧🇴",
    "capital": "Sucre (capital constitucional); La Paz (sede de gobierno)",
    "lat": -16.29,
    "lon": -63.59,
    "poblacion": 11300000,
    "hispanohablantes": 9500000,
    "pibNominalMillonesUsd": 46000,
    "moneda": "Boliviano (BOB)",
    "idiomasCooficiales": [
      "36 idiomas indígenas oficiales junto al castellano (quechua, aimara, guaraní y 33 más)"
    ],
    "estatus": "soberano",
    "gentilicio": "boliviano / boliviana",
    "lema": "La unión es la fuerza",
    "independencia": "6 de agosto de 1825.",
    "resumen": "El país con más idiomas oficiales del mundo y el mayor espejo natural del planeta. Bolivia guarda una de las reservas de litio más grandes que existen y una tradición de autogobierno indígena sin equivalente en América.",
    "orgullo": [
      "Su Constitución reconoce 36 idiomas indígenas como oficiales junto al castellano: 37 lenguas oficiales, más que cualquier otro país del mundo.",
      "El Salar de Uyuni, de 10.582 km², es la mayor superficie salina del planeta y el espejo natural más grande que existe; bajo esa costra hay una de las mayores reservas de litio conocidas.",
      "Es el único país del mundo que elige por voto popular a los magistrados de sus altas cortes, desde la reforma de 2009.",
      "Tiwanaku levantó a 3.850 metros de altura una arquitectura de bloques de decenas de toneladas encajados sin mortero, mil años antes que los incas, en uno de los entornos más hostiles habitados por el ser humano."
    ],
    "figuras": [
      {
        "nombre": "Jaime Escalante",
        "porQue": "Profesor de matemáticas que llevó a estudiantes latinos de un barrio pobre de Los Ángeles a superar el examen nacional de cálculo; su historia se llevó al cine y cambió el debate educativo en Estados Unidos."
      },
      {
        "nombre": "Marina Núñez del Prado",
        "porQue": "Escultora de proyección internacional que introdujo la figura andina en la escultura moderna; expuso en Europa y Estados Unidos durante cuatro décadas."
      },
      {
        "nombre": "Simón I. Patiño",
        "porQue": "Llegó a controlar buena parte del estaño mundial y a figurar entre los hombres más ricos del planeta en los años treinta, partiendo de una mina en Oruro."
      }
    ],
    "aporteALaHispanidad": "Bolivia le aporta a la Hispanidad su prueba más exigente de que la lengua común no exige uniformidad: es un Estado que se define plurinacional y que ha llevado más lejos que nadie el reconocimiento jurídico de sus pueblos originarios, sin dejar de ser plenamente hispanohablante. La plata de Potosí, además, financió durante dos siglos la economía global: buena parte del dinero que circuló por Europa y Asia entre 1550 y 1750 salió de un cerro boliviano.",
    "notaHonesta": "La plata de Potosí se extrajo con trabajo forzado indígena y africano bajo el sistema de la mita, con un costo humano enorme: el dato de riqueza y el dato de explotación son el mismo hecho. Hoy Bolivia es uno de los países más pobres de Suramérica y no tiene salida al mar desde 1879, un reclamo que llevó a la Corte Internacional de Justicia y que el fallo de 2018 resolvió declarando que Chile no está obligado a negociar.",
    "confianzaDatos": "media"
  },
  {
    "id": "chile",
    "nombre": "Chile",
    "nombreOficial": "República de Chile",
    "bandera": "🇨🇱",
    "capital": "Santiago",
    "lat": -35.68,
    "lon": -71.54,
    "poblacion": 18500000,
    "hispanohablantes": 18200000,
    "pibNominalMillonesUsd": 330000,
    "moneda": "Peso chileno (CLP)",
    "idiomasCooficiales": [
      "mapudungun",
      "rapanui",
      "aimara (reconocidos legalmente; no hay lengua oficial declarada en la Constitución)"
    ],
    "estatus": "soberano",
    "gentilicio": "chileno / chilena",
    "lema": "Por la razón o la fuerza",
    "independencia": "18 de septiembre de 1810 (primera junta nacional); declarada el 12 de febrero de 1818.",
    "resumen": "Un país de 4.300 kilómetros de largo y 180 de ancho promedio, con el desierto más árido del planeta, glaciares y la mayor concentración de telescopios del mundo. Chile es el lugar desde donde la humanidad mira el universo.",
    "orgullo": [
      "El desierto de Atacama, el más árido del mundo, alberga el mayor complejo astronómico del planeta; se estima que hacia 2030 Chile concentrará en torno al 70% de la capacidad de observación astronómica mundial.",
      "Dos premios Nobel de Literatura: Gabriela Mistral en 1945 —la primera persona de América Latina en recibirlo— y Pablo Neruda en 1971.",
      "Produce cerca de una cuarta parte del cobre del mundo y tiene las mayores reservas conocidas: el cableado eléctrico del planeta y la transición energética global dependen de un país hispanohablante.",
      "El rescate de los 33 mineros de la mina San José en 2010, tras 69 días a 700 metros de profundidad, fue seguido en directo por más de mil millones de personas y sigue siendo el operativo de salvamento minero más exitoso de la historia."
    ],
    "figuras": [
      {
        "nombre": "Gabriela Mistral",
        "porQue": "Primera persona latinoamericana en ganar el Nobel de Literatura, en 1945; maestra rural que llegó a reformar la educación mexicana por invitación de Vasconcelos."
      },
      {
        "nombre": "Pablo Neruda",
        "porQue": "Nobel de Literatura 1971; el Canto general es la mayor epopeya poética escrita sobre América."
      },
      {
        "nombre": "Violeta Parra",
        "porQue": "Recopiló y reinventó la música popular chilena y escribió Gracias a la vida, una de las canciones más versionadas del idioma; fue la primera latinoamericana con exposición individual en el Louvre."
      }
    ],
    "aporteALaHispanidad": "Chile le aporta a la Hispanidad rigor institucional y ciencia de frontera: es la ventana desde la que se observa el universo y una de las economías más abiertas del idioma. En lo cultural aportó dos Nobel y una canción popular —la Nueva Canción Chilena— que se volvió el idioma común de la protesta en toda América Latina.",
    "notaHonesta": "El lema nacional 'Por la razón o la fuerza' figura en el escudo desde el siglo XIX y hoy resulta incómodo para muchos chilenos; se incluye porque es el lema real, no porque este movimiento comparta su tono. El país arrastra además las heridas de la dictadura de 1973-1990, con más de 3.200 muertos y desaparecidos documentados, y dos procesos constituyentes fallidos en 2022 y 2023.",
    "confianzaDatos": "alta"
  },
  {
    "id": "argentina",
    "nombre": "Argentina",
    "nombreOficial": "República Argentina",
    "bandera": "🇦🇷",
    "capital": "Buenos Aires",
    "lat": -38.42,
    "lon": -63.62,
    "poblacion": 46700000,
    "hispanohablantes": 46000000,
    "pibNominalMillonesUsd": 640000,
    "moneda": "Peso argentino (ARS)",
    "idiomasCooficiales": [
      "lenguas indígenas con reconocimiento provincial (guaraní en Corrientes; qom, wichí y mocoví en Chaco)"
    ],
    "estatus": "soberano",
    "gentilicio": "argentino / argentina",
    "lema": "En unión y libertad",
    "independencia": "25 de mayo de 1810 (Revolución de Mayo); declarada el 9 de julio de 1816 en Tucumán.",
    "resumen": "El país hispanohablante con más premios Nobel y el que más inventos de uso cotidiano ha dado al mundo. Argentina produce ciencia, fútbol y literatura de primer nivel mundial con la misma naturalidad.",
    "orgullo": [
      "Tiene cinco premios Nobel, más que cualquier otro país de América Latina: tres en ciencias —Houssay en 1947, Leloir en 1970 y Milstein en 1984— y dos de la Paz, Saavedra Lamas en 1936 y Pérez Esquivel en 1980.",
      "El bypass coronario lo estandarizó René Favaloro en 1967; la identificación por huellas dactilares la creó Juan Vucetich, que en 1892 resolvió el primer caso criminal del mundo con ese método; y el bolígrafo moderno se patentó en Buenos Aires en 1943.",
      "La base Orcadas funciona sin interrupción desde 1904: es la instalación humana más antigua en operación continua de toda la Antártida.",
      "El tango es Patrimonio Cultural Inmaterial de la Humanidad desde 2009, y es de los poquísimos géneros populares que se enseña en conservatorios de Tokio, Helsinki y Berlín."
    ],
    "figuras": [
      {
        "nombre": "Jorge Luis Borges",
        "porQue": "Reinventó el cuento y el ensayo en el siglo XX; su influencia atraviesa la literatura, la filosofía y hasta la teoría de la información."
      },
      {
        "nombre": "César Milstein",
        "porQue": "Nobel de Medicina 1984 por los anticuerpos monoclonales, base de buena parte de la biotecnología y de los tratamientos oncológicos actuales. Renunció a patentarlos."
      },
      {
        "nombre": "Lionel Messi",
        "porQue": "Ocho Balones de Oro y campeón del mundo en 2022; el deportista hispanohablante más reconocido del planeta."
      }
    ],
    "aporteALaHispanidad": "Argentina fue durante el siglo XX la gran industria editorial del idioma: cuando la Guerra Civil española paralizó Madrid y Barcelona, Buenos Aires publicó a los exiliados y abasteció de libros a toda América. Editorial Losada, Sudamericana y el Fondo argentino formaron a varias generaciones de lectores hispanoamericanos. Aporta además la mayor tradición científica del idioma en el hemisferio sur.",
    "notaHonesta": "El PIB en dólares es muy sensible al tipo de cambio y a la inflación, y las cifras varían fuerte de un año a otro; la cifra aquí es un orden de magnitud. El país arrastra crisis económicas recurrentes desde hace medio siglo y la deuda de la dictadura de 1976-1983, con 30.000 desaparecidos según los organismos de derechos humanos y cerca de 9.000 casos documentados judicialmente.",
    "confianzaDatos": "alta"
  },
  {
    "id": "paraguay",
    "nombre": "Paraguay",
    "nombreOficial": "República del Paraguay",
    "bandera": "🇵🇾",
    "capital": "Asunción",
    "lat": -23.44,
    "lon": -58.44,
    "poblacion": 6200000,
    "hispanohablantes": 5000000,
    "pibNominalMillonesUsd": 45000,
    "moneda": "Guaraní (PYG)",
    "idiomasCooficiales": [
      "guaraní (cooficial con el castellano desde la Constitución de 1992)"
    ],
    "estatus": "soberano",
    "gentilicio": "paraguayo / paraguaya",
    "lema": "Paz y justicia",
    "independencia": "14 y 15 de mayo de 1811.",
    "resumen": "El único país de América donde una lengua indígena es cooficial y la habla la mayoría de la población, indígena y no indígena. Paraguay genera casi toda su electricidad con agua y exporta el excedente a sus vecinos.",
    "orgullo": [
      "Es el único país de América donde una lengua indígena, el guaraní, es cooficial y la habla la mayoría de la población, incluida la que no es indígena: el bilingüismo español-guaraní es la norma nacional, no una excepción folclórica.",
      "La represa de Itaipú es la central hidroeléctrica que más energía ha generado en toda la historia; Paraguay produce prácticamente el 100% de su electricidad con fuentes renovables y vende el excedente a Brasil y Argentina.",
      "El arpa paraguaya y la guarania, creada por José Asunción Flores en 1925, son un caso raro de género musical con fecha e inventor conocidos que se volvió identidad nacional.",
      "El ñandutí, encaje de aguja tejido en rueda, funde la técnica de los encajes canarios con el imaginario guaraní: el mestizaje hecho objeto, y hoy artesanía reconocida internacionalmente."
    ],
    "figuras": [
      {
        "nombre": "Augusto Roa Bastos",
        "porQue": "Premio Cervantes 1989; Yo el Supremo es una de las cumbres de la novela en español del siglo XX."
      },
      {
        "nombre": "Agustín Barrios 'Mangoré'",
        "porQue": "Compositor y guitarrista que Andrés Segovia y John Williams consideraron el mejor guitarrista-compositor de América; primer guitarrista clásico en grabar discos."
      },
      {
        "nombre": "Josefina Plá",
        "porQue": "Poeta, ceramista y crítica que fundó la modernidad artística paraguaya y abrió el campo cultural a las mujeres del país."
      }
    ],
    "aporteALaHispanidad": "Paraguay es la demostración viva de la tesis central de este movimiento: que la Hispanidad se define por la lengua compartida y no por la sustitución de las lenguas propias. Un país donde el guaraní y el castellano tienen el mismo rango constitucional, y donde nadie considera que hablar guaraní lo haga menos hispanoamericano.",
    "notaHonesta": "La cifra de hispanohablantes es la más matizada de Suramérica: el guaraní lo habla cerca del 90% de la población y el castellano bastante menos, con amplias zonas rurales donde el español es una segunda lengua de dominio limitado. El país cargó además con la Guerra de la Triple Alianza (1864-1870), que le costó una proporción devastadora de su población masculina, y hoy tiene una de las peores distribuciones de la tierra del mundo.",
    "confianzaDatos": "media"
  },
  {
    "id": "uruguay",
    "nombre": "Uruguay",
    "nombreOficial": "República Oriental del Uruguay",
    "bandera": "🇺🇾",
    "capital": "Montevideo",
    "lat": -32.52,
    "lon": -55.77,
    "poblacion": 3440000,
    "hispanohablantes": 3400000,
    "pibNominalMillonesUsd": 82000,
    "moneda": "Peso uruguayo (UYU)",
    "idiomasCooficiales": [
      "lengua de señas uruguaya (reconocida por ley); el portugués del Uruguay tiene reconocimiento educativo en la frontera"
    ],
    "estatus": "soberano",
    "gentilicio": "uruguayo / uruguaya",
    "lema": "Libertad o Muerte",
    "independencia": "Declarada el 25 de agosto de 1825; primera Constitución jurada el 18 de julio de 1830.",
    "resumen": "Tres millones y medio de personas que llevan un siglo adelantándose al mundo en derechos y en fútbol. Uruguay es el país que mejor demuestra que el tamaño no determina la influencia.",
    "orgullo": [
      "Legisló la jornada laboral de ocho horas en 1915, de las primeras del mundo y cuatro años antes del primer convenio de la Organización Internacional del Trabajo. También separó Iglesia y Estado y legalizó el divorcio por sola voluntad de la mujer antes que casi ningún país.",
      "Ganó el primer Mundial de fútbol de la historia, en 1930, y los oros olímpicos de 1924 y 1928: es el país más pequeño que ha sido campeón del mundo, y por eso lleva cuatro estrellas en la camiseta.",
      "Genera más del 90% de su electricidad con fuentes renovables, y en algunos años ha superado el 98%, sin represas gigantes ni energía nuclear: lo hizo con eólica y biomasa en una década.",
      "En 2013 se convirtió en el primer país del mundo en regular legalmente todo el ciclo del cannabis, de la producción a la venta: una decisión discutida, pero pionera a escala planetaria."
    ],
    "figuras": [
      {
        "nombre": "José Gervasio Artigas",
        "porQue": "Su Reglamento de Tierras de 1815 repartió tierra a indígenas, negros libres y criollos pobres: el primer programa de reforma agraria de América."
      },
      {
        "nombre": "Joaquín Torres García",
        "porQue": "Fundó el Universalismo Constructivo y dibujó en 1943 el mapa de América del Sur invertido con la leyenda 'Nuestro norte es el Sur': la imagen más reproducida del pensamiento americano."
      },
      {
        "nombre": "Mario Benedetti",
        "porQue": "Uno de los autores más leídos del idioma; su poesía y sus cuentos entraron a millones de casas hispanohablantes."
      }
    ],
    "aporteALaHispanidad": "Uruguay le aporta a la Hispanidad su mejor carta de presentación institucional: es el país de habla española que encabeza de forma sostenida los índices internacionales de democracia, transparencia y libertad de prensa en América Latina. En un movimiento que reivindica por vía jurídica y diplomática, ese historial vale más que cualquier discurso.",
    "notaHonesta": "Es un país envejecido y de crecimiento demográfico casi nulo, con una emigración joven persistente. Su fortaleza institucional convive con una desigualdad territorial y con problemas de seguridad crecientes en el área metropolitana. El lema 'Libertad o Muerte' proviene de la tradición patriótica del siglo XIX y no tiene hoy carga beligerante.",
    "confianzaDatos": "alta"
  },
  {
    "id": "guinea-ecuatorial",
    "nombre": "Guinea Ecuatorial",
    "nombreOficial": "República de Guinea Ecuatorial",
    "bandera": "🇬🇶",
    "capital": "Malabo (capital oficial); Ciudad de la Paz (Djibloho), nueva sede administrativa",
    "lat": 1.65,
    "lon": 10.27,
    "poblacion": 1750000,
    "hispanohablantes": 1300000,
    "pibNominalMillonesUsd": 12000,
    "moneda": "Franco CFA de África Central (XAF)",
    "idiomasCooficiales": [
      "francés",
      "portugués (cooficiales junto al español)",
      "fang, bubi, ndowe, bisio y annobonés como lenguas nacionales"
    ],
    "estatus": "soberano",
    "gentilicio": "ecuatoguineano / ecuatoguineana",
    "lema": "Unidad, Paz, Justicia",
    "independencia": "12 de octubre de 1968, de España.",
    "resumen": "El único país de África donde el español es lengua oficial y lengua de la calle. Guinea Ecuatorial es la prueba de que la Hispanidad no es un asunto americano y europeo: es también africana.",
    "orgullo": [
      "Es el único Estado soberano de África con el español como lengua oficial, y lo habla en torno a tres de cada cuatro ecuatoguineanos: la Hispanidad tiene territorio africano, no solo memoria.",
      "Su Academia Ecuatoguineana de la Lengua Española, creada en 2013, es miembro de pleno derecho de la Asociación de Academias de la Lengua Española: África se sienta en la mesa donde se decide la norma del idioma.",
      "La isla de Bioko concentra una de las mayores densidades de primates endémicos del planeta, con siete especies en peligro en una superficie menor que la de Mallorca; el Pico Basilé alcanza los 3.011 metros.",
      "En la isla de Annobón se habla el fá d'ambô, criollo de base portuguesa: un archipiélago hispanohablante que guarda una lengua criolla única en el mundo."
    ],
    "figuras": [
      {
        "nombre": "Leoncio Evita",
        "porQue": "Publicó en 1953 Cuando los combes luchaban, la primera novela de Guinea Ecuatorial y una de las primeras novelas africanas escritas en español."
      },
      {
        "nombre": "María Nsue Angüe",
        "porQue": "Su novela Ekomo (1985) fue la primera escrita por una mujer ecuatoguineana y es hoy texto obligado en los estudios de literatura africana en español."
      },
      {
        "nombre": "Donato Ndongo-Bidyogo",
        "porQue": "Narrador, periodista y antólogo; el principal difusor internacional de la literatura africana en lengua española."
      }
    ],
    "aporteALaHispanidad": "Guinea Ecuatorial convierte a la Hispanidad en un hecho de tres continentes. Sin ella, el español sería una lengua de Europa y América; con ella, es también una lengua africana, con una literatura propia que ya tiene setenta años y una academia con voz en la norma común. Esa es una carta diplomática que ninguna otra comunidad lingüística tiene en la misma forma.",
    "notaHonesta": "Tiene una de las rentas por habitante más altas de África gracias al petróleo, y a la vez indicadores sociales muy pobres: la riqueza está extraordinariamente mal repartida. El país lleva bajo el mismo presidente desde 1979 —el mandato más largo del mundo entre jefes de Estado en ejercicio— y organizaciones internacionales documentan graves restricciones a las libertades políticas y casos de corrupción con condenas en tribunales extranjeros. La adhesión de Guinea Ecuatorial a la Hispanidad no es un aval a su gobierno.",
    "confianzaDatos": "media"
  },
  {
    "id": "puerto-rico",
    "nombre": "Puerto Rico",
    "nombreOficial": "Estado Libre Asociado de Puerto Rico",
    "bandera": "🇵🇷",
    "capital": "San Juan",
    "lat": 18.22,
    "lon": -66.59,
    "poblacion": 3200000,
    "hispanohablantes": 3100000,
    "pibNominalMillonesUsd": 120000,
    "moneda": "Dólar estadounidense (USD)",
    "idiomasCooficiales": [
      "inglés (cooficial con el español)"
    ],
    "estatus": "territorio",
    "gentilicio": "puertorriqueño / puertorriqueña (boricua)",
    "lema": "Joannes Est Nomen Eius",
    "independencia": "Territorio no incorporado de Estados Unidos desde 1898. Sus habitantes son ciudadanos estadounidenses desde 1917, pero no votan por el presidente ni tienen representación con voto en el Congreso.",
    "resumen": "Ciento veintisiete años bajo bandera estadounidense y sigue pensando, cantando y peleando en español. Puerto Rico es hoy el mayor exportador de música en español del planeta y la demostración más terca de que una lengua no se pierde por decreto.",
    "orgullo": [
      "Ha conservado el español como lengua propia tras más de un siglo de administración estadounidense, incluidas décadas de escolarización en inglés impuesta: en 1991 lo declaró única lengua oficial y esa pulseada legal sigue siendo un caso de estudio mundial sobre resistencia lingüística.",
      "El reguetón nació aquí, y Bad Bunny fue el artista más escuchado del mundo en Spotify tres años consecutivos —2020, 2021 y 2022— cantando exclusivamente en español. Nunca antes un idioma distinto del inglés había encabezado la escucha global.",
      "La Fortaleza de San Juan, terminada en 1533, es la mansión ejecutiva en uso continuo más antigua de todo el hemisferio occidental.",
      "El Observatorio de Arecibo emitió en 1974 el primer mensaje de radio deliberadamente dirigido a otra civilización: la humanidad se presentó al universo desde suelo puertorriqueño. El radiotelescopio colapsó en 2020."
    ],
    "figuras": [
      {
        "nombre": "Roberto Clemente",
        "porQue": "Primer latinoamericano en el Salón de la Fama del béisbol, en 1973; murió llevando ayuda humanitaria a Nicaragua. Los Piratas de Pittsburgh retiraron su número 21 y hay una campaña para que las Grandes Ligas lo retiren en toda la liga."
      },
      {
        "nombre": "Rita Moreno",
        "porQue": "Una de las poquísimas artistas en ganar Óscar, Emmy, Grammy y Tony; abrió la puerta de Hollywood a los intérpretes hispanos."
      },
      {
        "nombre": "Julia de Burgos",
        "porQue": "La mayor poeta puertorriqueña; su Río Grande de Loíza es uno de los poemas más recitados del Caribe hispano."
      }
    ],
    "aporteALaHispanidad": "Puerto Rico le aporta a la Hispanidad su prueba de resistencia y su punta de lanza cultural. Es el laboratorio donde se demostró que una lengua sobrevive a un siglo de presión institucional si la sostiene la vida diaria, y es la isla desde la que el español conquistó las listas musicales globales del siglo XXI. Su lema oficial, además, es el nombre de un hombre: Joannes est nomen eius, 'Juan es su nombre'.",
    "notaHonesta": "El estatus político es el debate central de la isla y no hay consenso. En el plebiscito de 2020 la estadidad obtuvo alrededor del 52% con una participación cercana al 55%, pero todas las consultas realizadas han sido cuestionadas por su formulación o por el boicot de algún partido, y ninguna es vinculante sin una decisión del Congreso de Estados Unidos. Este movimiento no le dice a los puertorriqueños qué votar: defiende que decidan ellos, en un proceso limpio y reconocido. La isla arrastra además una crisis de deuda pública, la quiebra fiscal de 2016 y una emigración que ha reducido su población en cerca de medio millón de personas en quince años.",
    "confianzaDatos": "alta"
  },
  {
    "id": "sahara-occidental",
    "nombre": "Sahara Occidental",
    "nombreOficial": "Territorio no autónomo del Sahara Occidental; la República Árabe Saharaui Democrática (RASD) fue proclamada por el Frente Polisario en 1976 y Marruecos administra la mayor parte del territorio",
    "bandera": "🇪🇭",
    "capital": "El Aaiún es la mayor ciudad, bajo administración marroquí; Tifariti es la sede proclamada por la RASD al este del muro",
    "lat": 24.22,
    "lon": -12.89,
    "poblacion": 600000,
    "hispanohablantes": 35000,
    "pibNominalMillonesUsd": 0,
    "moneda": "Dirham marroquí (MAD) en la zona administrada por Marruecos; dinar argelino en los campamentos de refugiados de Tinduf",
    "idiomasCooficiales": [
      "árabe hassaniya (lengua del pueblo saharaui)",
      "árabe estándar",
      "el español se conserva como lengua de enseñanza, sanidad y prensa en los campamentos de refugiados y en la administración de la RASD; en la zona bajo administración marroquí las lenguas oficiales son el árabe y el amazigh, y el francés es la segunda lengua"
    ],
    "estatus": "disputado",
    "gentilicio": "saharaui",
    "lema": "",
    "independencia": "Figura desde 1963 en la lista de territorios no autónomos de la ONU y no tiene potencia administradora reconocida desde que España se retiró en 1976. Marruecos administra la mayor parte del territorio y reivindica su soberanía; el Frente Polisario reclama la independencia de la RASD. La ONU mantiene la misión MINURSO desde 1991 y pide una solución negociada y mutuamente aceptable.",
    "resumen": "El único lugar del mundo árabe donde el español sigue siendo lengua de escuela, de hospital y de poesía. Los saharauis lo conservan como parte de su identidad, en un territorio cuyo estatus jurídico continúa abierto ante las Naciones Unidas.",
    "orgullo": [
      "Es, junto a Guinea Ecuatorial, el único punto de África donde el español pervive como lengua de cultura y administración: los saharauis lo enseñan en las escuelas de los campamentos y lo usan en la sanidad y la prensa.",
      "La Generación de la Amistad Saharaui, constituida en Madrid en 2005, publica poesía en español y ha llevado la literatura saharaui a antologías, universidades y festivales de todo el mundo hispano.",
      "Miles de jóvenes saharauis se formaron como médicos, ingenieros y maestros en universidades cubanas y volvieron hablando español: los llaman 'cubarauis', y son de los grupos hispanohablantes más singulares del planeta.",
      "El proyecto Bubisher mantiene desde 2008 una red de bibliotecas y bibliobuses en español en los campamentos: bibliotecas móviles en el desierto, en nuestro idioma."
    ],
    "figuras": [
      {
        "nombre": "Limam Boisha",
        "porQue": "Poeta saharaui en lengua española, miembro de la Generación de la Amistad; su obra Ritos de jaima es referencia de la literatura hispanoafricana."
      },
      {
        "nombre": "Bahia Mahmud Awah",
        "porQue": "Escritor y antropólogo, docente universitario en España; ha documentado en español la tradición oral y la memoria del pueblo saharaui."
      },
      {
        "nombre": "Fatma Galia",
        "porQue": "Escritora y activista, de las primeras voces femeninas saharauis publicadas en español."
      }
    ],
    "aporteALaHispanidad": "El Sahara Occidental aporta algo que ningún otro territorio da: un pueblo que conserva el español por decisión propia, sin Estado que lo imponga y sin que hoy le reporte ventaja administrativa alguna. Es la evidencia más limpia de que la Hispanidad puede ser una elección cultural y no una herencia colonial. Su literatura en español es joven, viva y creciente.",
    "notaHonesta": "Esta es la ficha más delicada del dossier y se redacta sin tomar partido. El estatus del territorio está sin resolver ante la ONU: Marruecos ejerce la administración de la mayor parte y propone un plan de autonomía; el Frente Polisario y la RASD reclaman un referéndum de autodeterminación; la Corte Internacional de Justicia emitió en 1975 una opinión consultiva que no reconoció vínculos de soberanía territorial capaces de impedir la autodeterminación. Este movimiento sostiene únicamente que la solución debe ser jurídica, negociada y respetuosa de la voluntad de la población, en el marco de la ONU. Las cifras son las menos fiables de todo el dossier: no hay censo independiente. La población del territorio ronda las 600.000 personas, y en los campamentos de Tinduf (Argelia) hay entre 90.000 —cifra de planificación de ACNUR para los refugiados más vulnerables— y unas 173.000 según Argelia y el Frente Polisario. El número de hispanohablantes es una estimación de orden de magnitud: las fuentes van desde unas decenas de miles con dominio pleno hasta más de 200.000 con competencia parcial, y no hay forma de cerrarla con honradez.",
    "confianzaDatos": "baja"
  },
  {
    "id": "filipinas",
    "nombre": "Filipinas",
    "nombreOficial": "República de Filipinas",
    "bandera": "🇵🇭",
    "capital": "Manila",
    "lat": 12.88,
    "lon": 121.77,
    "poblacion": 114000000,
    "hispanohablantes": 4000,
    "pibNominalMillonesUsd": 470000,
    "moneda": "Peso filipino (PHP)",
    "idiomasCooficiales": [
      "filipino",
      "inglés (oficiales); el español y el árabe se promueven con carácter voluntario y optativo según la Constitución de 1987"
    ],
    "estatus": "herencia",
    "gentilicio": "filipino / filipina",
    "lema": "Maka-Diyos, Maka-Tao, Makakalikasan at Makabansa (Por Dios, por el pueblo, por la naturaleza y por la patria)",
    "independencia": "Proclamada el 12 de junio de 1898 y reconocida el 4 de julio de 1946. El español fue lengua oficial hasta 1973 y perdió definitivamente ese rango con la Constitución de 1987.",
    "resumen": "Trescientos treinta y tres años hispanos dejaron una huella que no se borró: apellidos, horas, números, apellidos de plaza y una lengua criolla viva. Filipinas no es hoy un país hispanohablante, pero es innegablemente parte de la historia de la Hispanidad.",
    "orgullo": [
      "El chabacano de Zamboanga es la única lengua criolla de base española de Asia y la sigue hablando en torno a 700.000 personas: un español asiático vivo, con periódicos, canciones y misas propias.",
      "El tagalo conserva alrededor de 4.000 raíces españolas, y los filipinos siguen diciendo la hora en español —ala una, alas dos— y contando en español. Los apellidos vienen del Catálogo alfabético de apellidos que el gobernador Clavería repartió en 1849.",
      "José Rizal escribió Noli me tángere (1887) y El filibusterismo (1891) en español: las dos novelas que despertaron una nación asiática están escritas en nuestro idioma, y la Constitución de Malolos de 1899, la primera constitución republicana de Asia, también.",
      "El Galeón de Manila unió Asia y América durante 250 años, de 1565 a 1815: la primera ruta comercial verdaderamente global de la historia iba de Manila a Acapulco, y por ella la plata americana llegó a China y la porcelana china a Europa."
    ],
    "figuras": [
      {
        "nombre": "José Rizal",
        "porQue": "Héroe nacional filipino; escribió en español las novelas que fundaron la conciencia nacional de un país asiático y fue fusilado por ello en 1896."
      },
      {
        "nombre": "Jesús Balmori",
        "porQue": "Uno de los grandes poetas filipinos en lengua española del siglo XX; ganó los Juegos Florales de Manila y mantuvo viva la literatura hispanofilipina."
      },
      {
        "nombre": "Fernando Amorsolo",
        "porQue": "Primer Artista Nacional de Filipinas; su pintura de la luz tropical definió la imagen visual del país en el mundo."
      }
    ],
    "aporteALaHispanidad": "Filipinas le dio a la Hispanidad su dimensión asiática y su ruta global. El Galeón de Manila fue la primera cadena de suministro planetaria y la hizo funcionar en español durante dos siglos y medio. Y le dio a la literatura hispánica un capítulo que casi nadie lee: la de un pueblo asiático que escribió en español su propia independencia. Recuperar ese vínculo —académico, comercial y educativo— es una de las tareas pendientes más grandes y más realistas del mundo hispano.",
    "notaHonesta": "Filipinas está en este mapa por herencia, no por lengua, y el movimiento lo dice sin adornos: el español dejó de ser oficial en 1987 y hoy lo hablan con dominio nativo unos pocos miles de personas. Lo que sí queda es enorme: 333 años de historia común, unas 4.000 raíces españolas en el tagalo, apellidos, calendario, cocina y derecho civil; y el chabacano, criollo de base española con unos 700.000 hablantes, que es una lengua distinta del español y no se cuenta como tal. Presentar a Filipinas como país hispanohablante sería la clase de exageración que hunde la credibilidad de un movimiento entero.",
    "confianzaDatos": "media",
    "chabacanohablantes": 700000
  },
  {
    "id": "estados-unidos-hispano",
    "nombre": "La Hispanidad en Estados Unidos",
    "nombreOficial": "Población de origen hispano de los Estados Unidos de América",
    "bandera": "🇺🇸",
    "capital": "No aplica; sus mayores núcleos son Los Ángeles, Miami, Houston, Nueva York, Chicago, San Antonio y Phoenix",
    "lat": 33.8,
    "lon": -107.5,
    "poblacion": 67000000,
    "hispanohablantes": 43000000,
    "pibNominalMillonesUsd": 3600000,
    "moneda": "Dólar estadounidense (USD)",
    "idiomasCooficiales": [
      "inglés (designado idioma oficial federal por orden ejecutiva en 2025)",
      "Nuevo México funciona de hecho de forma bilingüe desde su Constitución de 1912"
    ],
    "estatus": "diaspora",
    "gentilicio": "hispano / latino estadounidense",
    "lema": "",
    "independencia": "No es un Estado, sino la comunidad hispana dentro de Estados Unidos. Su presencia es anterior a la nación: San Agustín se fundó en 1565, Santa Fe en 1610 y San Antonio en 1718, mucho antes de la independencia estadounidense de 1776.",
    "resumen": "Sesenta y siete millones de personas y una economía que, sola, estaría entre las cinco mayores del planeta. No es una minoría dentro de un país ajeno: es una de las mayores comunidades hispanohablantes del mundo, y llegó primero.",
    "orgullo": [
      "Si los hispanos de Estados Unidos fueran un país, su producto interno bruto —estimado por el informe US Latino GDP en el orden de los 4 billones de dólares— estaría entre las cinco o seis mayores economías del planeta según el año que se compare, y es la que más rápido crece entre las grandes.",
      "Unos 43 millones de personas hablan español en casa: eso coloca a Estados Unidos entre los cinco países con más hispanohablantes del mundo, y el Instituto Cervantes lo sitúa segundo cuando se suma a quienes tienen competencia limitada.",
      "San Agustín, Florida, fundada en 1565, es la ciudad de fundación europea continuamente habitada más antigua de Estados Unidos: 42 años anterior a Jamestown y 55 anterior a Plymouth. Lo hispano no llegó a Estados Unidos; estaba antes.",
      "El español es, con mucha diferencia, la lengua extranjera más estudiada del país: alrededor de la mitad de todas las matrículas universitarias en lenguas distintas del inglés son de español, más que todas las demás lenguas juntas."
    ],
    "figuras": [
      {
        "nombre": "Sonia Sotomayor",
        "porQue": "Primera jueza hispana del Tribunal Supremo de Estados Unidos, desde 2009; hija de padres puertorriqueños criada en el Bronx."
      },
      {
        "nombre": "Ellen Ochoa",
        "porQue": "Primera mujer hispana en viajar al espacio, en 1993; después dirigió el Centro Espacial Johnson de la NASA."
      },
      {
        "nombre": "Lin-Manuel Miranda",
        "porQue": "Autor de Hamilton y de In the Heights; ganador del Pulitzer y de múltiples Tony, llevó la experiencia hispana al centro del teatro estadounidense."
      }
    ],
    "aporteALaHispanidad": "Es el músculo económico y político de la Hispanidad en el país más poderoso del mundo. Aporta capital, mercado de consumo, industria cultural bilingüe y una generación que se mueve entre los dos idiomas sin considerarlo un conflicto. Aporta además una lección incómoda y valiosa: la lengua se mantiene cuando sirve para trabajar, comprar, votar y enamorarse, no cuando se defiende solo con discursos.",
    "notaHonesta": "Esta ficha no es un Estado y hay que leerla con cuidado. Primero, sus habitantes no se suman al total de la Hispanidad como si fueran un país aparte: muchos son a la vez mexicanos, puertorriqueños, salvadoreños o cubanos de origen, y contarlos dos veces inflaría las cifras. Segundo, el PIB de 3,6 billones procede del informe académico US Latino GDP del Latino Donor Collaborative con universidades de California; es una estimación seria pero no una cuenta nacional oficial, por eso la confianza es media. Tercero, 'hispano' es una categoría censal de autoidentificación: incluye a millones de personas que ya no hablan español, y por eso la cifra de población (67 millones) y la de hispanohablantes (43 millones) son muy distintas. Cuarto, se evita a propósito la afirmación popular de que hay más hispanohablantes en Estados Unidos que en España: no se sostiene si se cuentan hablantes con dominio funcional.",
    "confianzaDatos": "media"
  }
];

EH.TOTALES = {
  "poblacionTotal": 475880000,
  "hispanohablantesMundo": 500535000,
  "pibCombinadoMillonesUsd": 9943000,
  "notaMetodologica": "Qué se suma y qué no, dicho con precisión para que nadie pueda acusar a este movimiento de inflar sus cifras. POBLACIÓN (475,88 millones): suma la población de los veinte países soberanos hispanohablantes más Puerto Rico (3,2 millones) y el Sahara Occidental (600.000). NO incluye a Filipinas, porque sus 114 millones de habitantes no son hispanohablantes, ni a la Hispanidad en Estados Unidos, porque sus 67 millones ya están contados en buena parte como mexicanos, puertorriqueños, salvadoreños, cubanos o dominicanos de origen: sumarlos sería doble-contar. HISPANOHABLANTES (500,65 millones): suma los hablantes con dominio funcional del español de los veinte soberanos, más Puerto Rico, más una estimación conservadora del Sahara Occidental (35.000, orden de magnitud: la cifra real no se puede cerrar sin censo), más los 43 millones que hablan español en casa en Estados Unidos —esta vez sí, porque son hablantes reales que ningún otro país de la lista contabiliza. NO incluye a Filipinas: el chabacano es un criollo de base española, no español. La cifra queda cerca de los 500 millones de hablantes nativos que reconocen las fuentes académicas; el Instituto Cervantes maneja unos 600 millones porque añade a quienes tienen competencia limitada y a los estudiantes de español en el mundo, un criterio legítimo pero más generoso que el nuestro. PIB (9,94 billones de dólares, es decir 9.943.000 millones): suma el PIB nominal de los veinte soberanos más Puerto Rico (120.000 millones) más la estimación del PIB latino estadounidense (3,6 billones). Hay que decirlo claro: esa última cifra es una estimación académica del informe US Latino GDP, no una cuenta nacional, y mezclarla con PIB oficiales es metodológicamente imperfecto; se hace porque describe una economía real que ninguna otra ficha recoge, y se señala aquí para que quien quiera el dato estrictamente estatal use 6,34 billones. NO se suma Filipinas (no es economía hispanohablante) ni el Sahara Occidental (no tiene contabilidad nacional separada). ADVERTENCIAS DE CALIDAD: las cifras de Cuba y Venezuela son órdenes de magnitud, no datos fiables, por la distorsión de sus tipos de cambio; las de Guatemala, Honduras, Bolivia y Paraguay dependen de proyecciones censales; Chile y Bolivia usan los censos de 2024, más bajos que las proyecciones anteriores. Todo aquí es verificable en fuentes públicas y todo aquí es corregible: quien encuentre un error, que lo diga, y se corrige."
};

/* Atajos usados por todas las pantallas. */
EH.nacion = function (id) {
  return EH.NACIONES.filter(function (n) { return n.id === id; })[0] || null;
};

EH.nombreNacion = function (id) {
  var n = EH.nacion(id);
  return n ? n.nombre : id;
};

/* Las soberanas primero, para los desplegables donde alguien elige su pais.
   Las otras cuatro van al final, pero van: un puertorriqueno o un saharaui
   tienen que poder inscribirse sin que la lista los borre. */
EH.NACIONES_ORDENADAS = EH.NACIONES.slice().sort(function (a, b) {
  var peso = { soberano: 0, territorio: 1, disputado: 2, herencia: 3, diaspora: 4 };
  if (peso[a.estatus] !== peso[b.estatus]) return peso[a.estatus] - peso[b.estatus];
  return a.nombre.localeCompare(b.nombre, 'es');
});
