/* =========================================================================
   LO QUE EL MAPA CUENTA
   =========================================================================
   QUE HAY AQUI
   Los textos y las cifras que el globo ensena al pulsar: el porcentaje de
   poblacion hispana de cada estado de Estados Unidos, las epocas de la linea
   del tiempo, las fichas de ciudad, las causas territoriales, el mar y la
   huella sefardi.

   POR QUE ESTA SEPARADO DE LA GEOMETRIA
   Porque una cifra del censo caduca cada ano y una frontera no. Si los dos
   vivieran en el mismo archivo, actualizar un porcentaje obligaria a tocar
   doscientos kilobytes de costas. Aqui se corrige un numero y ya esta.

   DE DONDE SALE
   De una investigacion con fuente por dato, y despues de una REFUTACION
   ADVERSARIA: un segundo agente cuyo unico encargo era tumbar cada cifra.
   Encontro bastante, y esta aplicado:
     - La linea del tiempo decia "1571-1815: 250 anos de galeon". De 1571 a
       1815 van 244. Los 250 se cuentan desde 1565, el tornaviaje de Urdaneta.
     - El censo de Floridablanca de 1787 estaba en 10.409.879 habitantes; el
       INE publica 10.268.110.
     - El Instituto Cervantes ya no dice 600 millones de usuarios: dice
       635.743.000, y 520 millones de nativos.
     - "El espanol fue cooficial en Filipinas hasta 1987" es falso: dejo de
       ser lengua oficial con la Constitucion de 1973.
     - La epoca 1884-1898 se anunciaba como "la unica con los 24 territorios
       a la vez" cuando otras tres epocas tambien los tienen.

   LO QUE NO ESTA, Y SE DICE EN PANTALLA
   Las fichas de ciudad. La investigacion que iba a escribirlas no llego a
   terminar, asi que por ahora solo hay una: Cartagena de Indias, y esa se
   publica porque su contenido sale del frente de Blas de Lezo, que si paso la
   refutacion. Las demas ciudades salen en el mapa con su punto gris y sin
   ficha, y el globo lo dice: "todavia no hay ficha de esta ciudad". Rellenarlas
   con un parrafo generico seria justo lo que este sitio no hace.

   ADVERTENCIA SOBRE LOS ESTADOS DE EE.UU.
   Los 52 datos son de UNA sola fuente y UN solo ano, para que se puedan
   comparar entre si: Census Bureau, American Community Survey 2024, tabla
   B03003. Pero la refutacion de ese frente NO llego a correr. Las cifras
   vienen con fuente y tabla exactas; aun asi, hay que confirmarlas antes de
   ponerlas en camara.

   EL DATO QUE CORRIGE UN ESLOGAN
   Texas no es "mitad hispano": es el 40,3%. Lo que SI se puede decir, y es
   mas fuerte, es que los hispanos ya son el grupo mas numeroso de Texas, por
   delante de los blancos no hispanos (37,8%). Ningun estado llega al 50%: el
   mayor es Nuevo Mexico con 49,1%. Y el estado con MAS hispanos en numero
   absoluto no es ese, es California, con 16 millones. Esa diferencia entre
   proporcion y numero es la leccion del mapa.
   ========================================================================= */

window.EH = window.EH || {};

EH.MAPA_CONTENIDO = {
 "estadosEEUU": {
  "pr": {
   "nombre": "Puerto Rico",
   "pct": 98.9,
   "texto": "Isla bajo soberanía española desde 1493; Juan Ponce de León fundó el primer asentamiento en 1508 y San Juan en 1521, la ciudad de fundación europea más antigua bajo bandera estadounidense. España la cedió a Estados Unidos en el Tratado de París de 1898. Hoy es territorio no incorporado: sus habitantes son ciudadanos estadounidenses desde la ley Jones de 1917, pero no votan por el presidente ni tienen representación con voto en el Congreso. El español y el inglés son cooficiales desde la Ley de Idiomas Oficiales de 1902; en 1991 una ley dejó el español como único idioma oficial y en 1993 otra restauró la cooficialidad, que es la situación vigente.",
   "fuente": "U.S. Census Bureau, American Community Survey (ACS) 2024, estimaciones de 1 año, tabla B03003 «Hispanic or Latino Origin» (archivo acsdt1y2024-b03003.dat del Summary File). https://data.census.gov/table/ACSDT1Y2024.B03003",
   "hispanos": 3167325
  },
  "nm": {
   "nombre": "Nuevo México",
   "pct": 49.1,
   "texto": "El territorio más hispano de los cincuenta estados, y aun así no llega a la mitad: 49,1%. Juan de Oñate inició la colonización en 1598 y Santa Fe se fundó en 1610, la capital estatal más antigua del país. Fue español hasta 1821 y mexicano hasta 1848, cuando el Tratado de Guadalupe Hidalgo lo pasó a Estados Unidos. La constitución estatal de 1911 ordenó publicar las leyes en español e inglés. Los hispanos son el grupo más numeroso: 49,1% frente a 35,1% de blancos no hispanos.",
   "fuente": "U.S. Census Bureau, American Community Survey (ACS) 2024, estimaciones de 1 año, tabla B03003; comparación con blancos no hispanos, tabla B03002 «Hispanic or Latino Origin by Race» de la misma encuesta. https://data.census.gov/table/ACSDT1Y2024.B03003",
   "hispanos": 1046253
  },
  "ca": {
   "nombre": "California",
   "pct": 40.8,
   "texto": "Primer estado por número absoluto de hispanos: 16,07 millones de personas. El nombre viene de una novela española de caballerías impresa hacia 1510. Fue español desde 1769, con la cadena de misiones, y mexicano de 1821 a 1848. Los Ángeles se fundó en 1781 como El Pueblo de Nuestra Señora la Reina de los Ángeles. Los hispanos son hoy el grupo más numeroso del estado: 40,8% frente a 32,6% de blancos no hispanos.",
   "fuente": "U.S. Census Bureau, American Community Survey (ACS) 2024, estimaciones de 1 año, tabla B03003; comparación con blancos no hispanos, tabla B03002 de la misma encuesta. https://data.census.gov/table/ACSDT1Y2024.B03003",
   "hispanos": 16069214
  },
  "tx": {
   "nombre": "Texas",
   "pct": 40.3,
   "texto": "El dato que corrige el eslogan: Texas es 40,3% hispano, no la mitad. Pero sí es el grupo más numeroso del estado, por delante de los blancos no hispanos, que son el 37,8%. San Antonio de Béxar se fundó en 1718; el territorio fue español, luego mexicano hasta 1836 y se incorporó a Estados Unidos en 1845. El nombre viene del español «tejas», tomado de una voz caddo que significa amigos. Segundo estado por número absoluto: 12,6 millones de hispanos.",
   "fuente": "U.S. Census Bureau, American Community Survey (ACS) 2024, estimaciones de 1 año, tabla B03003; comparación con blancos no hispanos, tabla B03002 de la misma encuesta. https://data.census.gov/table/ACSDT1Y2024.B03003",
   "hispanos": 12602305
  },
  "az": {
   "nombre": "Arizona",
   "pct": 32.1,
   "texto": "Arizona entró en Estados Unidos en dos tiempos: el norte en 1848 y la franja sur en 1854 con la Venta de La Mesilla. Tucsón nació como presidio español en 1775 y la misión de San Xavier del Bac la inició el jesuita Eusebio Francisco Kino a finales del siglo XVII. Hoy el estado es 32,1% hispano, pero los blancos no hispanos siguen siendo mayoría absoluta con 51,2%.",
   "fuente": "U.S. Census Bureau, American Community Survey (ACS) 2024, estimaciones de 1 año, tabla B03003; comparación con blancos no hispanos, tabla B03002 de la misma encuesta. https://data.census.gov/table/ACSDT1Y2024.B03003",
   "hispanos": 2435661
  },
  "nv": {
   "nombre": "Nevada",
   "pct": 30.6,
   "texto": "El nombre es español: «nevada», por la sierra. A Las Vegas la bautizó así la expedición de Antonio Armijo de 1829-1830, que buscaba agua en el camino entre Santa Fe y California. El territorio fue mexicano hasta 1848. Hoy casi uno de cada tres residentes es hispano, 30,6%, sobre todo mexicanos y salvadoreños ligados a la hostelería y la construcción del área de Las Vegas.",
   "fuente": "U.S. Census Bureau, American Community Survey (ACS) 2024, estimaciones de 1 año, tabla B03003. https://data.census.gov/table/ACSDT1Y2024.B03003",
   "hispanos": 999427
  },
  "fl": {
   "nombre": "Florida",
   "pct": 28.7,
   "texto": "La bautizó Juan Ponce de León en 1513 por la Pascua Florida. San Agustín, fundada en 1565 por Pedro Menéndez de Avilés, es la ciudad de fundación europea habitada de forma continua más antigua de la parte continental del país. Fue española hasta 1763 y otra vez entre 1783 y 1821. El exilio cubano desde 1959 y las migraciones posteriores de Puerto Rico, Venezuela y Colombia la hicieron el tercer estado por número de hispanos: 6,7 millones, el 28,7%.",
   "fuente": "U.S. Census Bureau, American Community Survey (ACS) 2024, estimaciones de 1 año, tabla B03003; comparación con blancos no hispanos, tabla B03002 de la misma encuesta. https://data.census.gov/table/ACSDT1Y2024.B03003",
   "hispanos": 6706088
  },
  "nj": {
   "nombre": "Nueva Jersey",
   "pct": 23.5,
   "texto": "Sin pasado colonial español: lo hispano aquí es del siglo XX. Union City y West New York concentraron el exilio cubano desde los años sesenta; después llegaron dominicanos, puertorriqueños, colombianos, peruanos y ecuatorianos al corredor de Newark, Paterson y Elizabeth. Con 23,5% y 2,23 millones de personas es el estado más hispano del noreste por proporción, por delante de Nueva York y Connecticut.",
   "fuente": "U.S. Census Bureau, American Community Survey (ACS) 2024, estimaciones de 1 año, tabla B03003. https://data.census.gov/table/ACSDT1Y2024.B03003",
   "hispanos": 2229464
  },
  "co": {
   "nombre": "Colorado",
   "pct": 23.2,
   "texto": "El nombre es español, por el río Colorado. El sur del estado perteneció a México hasta 1848 y lo poblaron familias hispanas venidas de Nuevo México: San Luis, fundada en 1851 en el valle de San Luis, es la población más antigua de Colorado. Pueblo, Durango, Alamosa, Trinidad y La Junta siguen en el mapa. Hoy el 23,2% de la población es hispana, 1,38 millones de personas.",
   "fuente": "U.S. Census Bureau, American Community Survey (ACS) 2024, estimaciones de 1 año, tabla B03003. https://data.census.gov/table/ACSDT1Y2024.B03003",
   "hispanos": 1382948
  },
  "ny": {
   "nombre": "Nueva York",
   "pct": 20.2,
   "texto": "Cuarto estado por número absoluto: 4,02 millones de hispanos. La ley Jones de 1917 dio la ciudadanía estadounidense a los puertorriqueños, y la gran migración posterior a 1945 formó El Barrio, en el este de Harlem. Washington Heights es el núcleo dominicano más conocido del país. Mexicanos, ecuatorianos y colombianos completan un conjunto que hoy es el 20,2% del estado, justo en la media nacional.",
   "fuente": "U.S. Census Bureau, American Community Survey (ACS) 2024, estimaciones de 1 año, tabla B03003. https://data.census.gov/table/ACSDT1Y2024.B03003",
   "hispanos": 4019288
  },
  "il": {
   "nombre": "Illinois",
   "pct": 19.4,
   "texto": "Chicago atrajo trabajadores mexicanos desde los años diez del siglo XX para los ferrocarriles y la siderurgia; de ahí salieron los barrios de Pilsen y La Villita. Los puertorriqueños se asentaron alrededor de Humboldt Park. Con 2,46 millones de hispanos, el 19,4%, Illinois es el quinto estado por número absoluto y el más hispano del Medio Oeste por proporción.",
   "fuente": "U.S. Census Bureau, American Community Survey (ACS) 2024, estimaciones de 1 año, tabla B03003. https://data.census.gov/table/ACSDT1Y2024.B03003",
   "hispanos": 2462768
  },
  "ct": {
   "nombre": "Connecticut",
   "pct": 19.2,
   "texto": "La migración puertorriqueña de mediados del siglo XX a las fábricas y al cultivo de tabaco del valle del río Connecticut dejó comunidades grandes en Hartford, Bridgeport, New Britain y Waterbury. Después llegaron dominicanos, mexicanos y ecuatorianos. Hoy el 19,2% de los residentes es hispano: 706.806 personas sobre 3,67 millones de habitantes.",
   "fuente": "U.S. Census Bureau, American Community Survey (ACS) 2024, estimaciones de 1 año, tabla B03003. https://data.census.gov/table/ACSDT1Y2024.B03003",
   "hispanos": 706806
  },
  "ri": {
   "nombre": "Rhode Island",
   "pct": 18.8,
   "texto": "El estado de menor superficie del país tiene una de las proporciones hispanas más altas del noreste: 18,8%. Providence, Central Falls y Pawtucket concentran comunidades dominicana, guatemalteca, colombiana y puertorriqueña llegadas a partir de los años setenta. En cifras absolutas son 208.976 personas: proporción alta sobre una población pequeña, 1,11 millones de habitantes.",
   "fuente": "U.S. Census Bureau, American Community Survey (ACS) 2024, estimaciones de 1 año, tabla B03003. https://data.census.gov/table/ACSDT1Y2024.B03003",
   "hispanos": 208976
  },
  "ut": {
   "nombre": "Utah",
   "pct": 16.9,
   "texto": "La expedición de los franciscanos Francisco Atanasio Domínguez y Silvestre Vélez de Escalante atravesó y cartografió Utah en 1776 buscando ruta a California; más tarde el Camino Viejo Español cruzó el estado. La población hispana actual, 16,9% y 592.412 personas, viene sobre todo de la migración mexicana del siglo XX a la minería, la agricultura y la construcción del área de Salt Lake City.",
   "fuente": "U.S. Census Bureau, American Community Survey (ACS) 2024, estimaciones de 1 año, tabla B03003. https://data.census.gov/table/ACSDT1Y2024.B03003",
   "hispanos": 592412
  },
  "or": {
   "nombre": "Oregón",
   "pct": 15.5,
   "texto": "Las expediciones españolas de Bruno de Heceta y Juan Francisco de la Bodega y Quadra recorrieron esta costa en 1775 y dejaron topónimos como Heceta Head. Lo hispano de hoy, sin embargo, viene del trabajo agrícola del siglo XX en el valle de Willamette y del programa bracero iniciado en 1942. El 15,5% de la población es hispana: 662.740 personas.",
   "fuente": "U.S. Census Bureau, American Community Survey (ACS) 2024, estimaciones de 1 año, tabla B03003. https://data.census.gov/table/ACSDT1Y2024.B03003",
   "hispanos": 662740
  },
  "wa": {
   "nombre": "Washington",
   "pct": 15.0,
   "texto": "La huella española está en la carta marina: las islas San Juan, Fidalgo, Guemes, López y Camano, y los estrechos de Rosario y Haro, los nombraron las expediciones de Quimper, Eliza y Narváez entre 1790 y 1792. En 1792 España levantó en la actual Neah Bay el puesto de Núñez Gaona, el único asentamiento español en este estado, abandonado ese mismo año. Hoy el 15,0% de la población es hispana: 1,19 millones de personas.",
   "fuente": "U.S. Census Bureau, American Community Survey (ACS) 2024, estimaciones de 1 año, tabla B03003. https://data.census.gov/table/ACSDT1Y2024.B03003",
   "hispanos": 1194522
  },
  "id": {
   "nombre": "Idaho",
   "pct": 14.3,
   "texto": "La población hispana de Idaho creció con el trabajo agrícola del siglo XX —remolacha, patata y ganado— y con el programa bracero a partir de 1942; el sur del estado, en el valle del río Snake, concentra la mayoría. Hoy son 286.185 personas, el 14,3% del estado. No hubo asentamiento colonial español en este territorio.",
   "fuente": "U.S. Census Bureau, American Community Survey (ACS) 2024, estimaciones de 1 año, tabla B03003. https://data.census.gov/table/ACSDT1Y2024.B03003",
   "hispanos": 286185
  },
  "ks": {
   "nombre": "Kansas",
   "pct": 14.2,
   "texto": "La expedición de Francisco Vázquez de Coronado llegó en 1541 a Quivira, en el centro de lo que hoy es Kansas, buscando ciudades de oro que no existían: reclamación cartográfica sin ningún control efectivo. La población hispana actual nació de los ferrocarriles y los frigoríficos de Garden City, Dodge City y Liberal. Hoy es el 14,2% del estado: 422.762 personas.",
   "fuente": "U.S. Census Bureau, American Community Survey (ACS) 2024, estimaciones de 1 año, tabla B03003. https://data.census.gov/table/ACSDT1Y2024.B03003",
   "hispanos": 422762
  },
  "ma": {
   "nombre": "Massachusetts",
   "pct": 14.0,
   "texto": "Sin pasado colonial español. Lo hispano llegó con la migración puertorriqueña de posguerra a las ciudades industriales —Holyoke, Springfield y Lawrence— y después con dominicanos, guatemaltecos y salvadoreños en el área de Boston. Hoy son 998.795 personas, el 14,0% del estado: a punto de pasar del millón.",
   "fuente": "U.S. Census Bureau, American Community Survey (ACS) 2024, estimaciones de 1 año, tabla B03003. https://data.census.gov/table/ACSDT1Y2024.B03003",
   "hispanos": 998795
  },
  "ne": {
   "nombre": "Nebraska",
   "pct": 13.5,
   "texto": "La expedición de Pedro de Villasur fue destruida en 1720 en las llanuras de lo que hoy es Nebraska, y con ella el intento español de frenar la influencia francesa en esta zona: nunca hubo asentamiento. La comunidad hispana actual nació de los ferrocarriles y los frigoríficos del sur de Omaha a comienzos del siglo XX, y de la migración centroamericana a Lexington y Grand Island. Hoy, 13,5% y 271.524 personas.",
   "fuente": "U.S. Census Bureau, American Community Survey (ACS) 2024, estimaciones de 1 año, tabla B03003. https://data.census.gov/table/ACSDT1Y2024.B03003",
   "hispanos": 271524
  },
  "ok": {
   "nombre": "Oklahoma",
   "pct": 13.5,
   "texto": "Este territorio formó parte de la Luisiana española entre 1762 y 1800, pero sin asentamiento ni control real: reclamación en el mapa, no gobierno sobre el terreno. La población hispana actual, 551.226 personas y 13,5% del estado, procede de la migración mexicana del siglo XX a la agricultura, la construcción y los servicios de Oklahoma City y Tulsa.",
   "fuente": "U.S. Census Bureau, American Community Survey (ACS) 2024, estimaciones de 1 año, tabla B03003. https://data.census.gov/table/ACSDT1Y2024.B03003",
   "hispanos": 551226
  },
  "md": {
   "nombre": "Maryland",
   "pct": 13.3,
   "texto": "El área metropolitana de Washington reúne desde los años ochenta una de las mayores concentraciones de salvadoreños del país, junto a hondureños, guatemaltecos y mexicanos; los condados de Montgomery y Prince George's son el centro. Hoy el 13,3% de la población de Maryland es hispana: 830.948 personas sobre 6,26 millones de habitantes.",
   "fuente": "U.S. Census Bureau, American Community Survey (ACS) 2024, estimaciones de 1 año, tabla B03003. https://data.census.gov/table/ACSDT1Y2024.B03003",
   "hispanos": 830948
  },
  "dc": {
   "nombre": "Distrito de Columbia",
   "pct": 12.6,
   "texto": "La capital federal no es un estado: no tiene senadores y su delegado en la Cámara de Representantes no vota. La guerra civil salvadoreña de los años ochenta llevó a Mount Pleasant y Columbia Heights una comunidad que marcó esos barrios y sigue siendo el núcleo hispano de la ciudad. Hoy el 12,6% de sus 702.250 residentes es hispano: 88.430 personas.",
   "fuente": "U.S. Census Bureau, American Community Survey (ACS) 2024, estimaciones de 1 año, tabla B03003. https://data.census.gov/table/ACSDT1Y2024.B03003"
  },
  "nc": {
   "nombre": "Carolina del Norte",
   "pct": 12.0,
   "texto": "Uno de los crecimientos hispanos más rápidos del país: hoy es el 12,0% del estado, 1,32 millones de personas, sobre todo mexicanos y centroamericanos llegados a la construcción, la avicultura y el tabaco desde los años noventa. Charlotte, Raleigh-Durham y Winston-Salem concentran la mayoría. No hubo asentamiento español estable en este territorio.",
   "fuente": "U.S. Census Bureau, American Community Survey (ACS) 2024, estimaciones de 1 año, tabla B03003. https://data.census.gov/table/ACSDT1Y2024.B03003",
   "hispanos": 1324570
  },
  "de": {
   "nombre": "Delaware",
   "pct": 11.7,
   "texto": "Delaware no tuvo presencia colonial española. Su población hispana, 122.813 personas sobre 1.051.917 habitantes, el 11,7%, se formó con migración mexicana y guatemalteca a la avicultura del condado de Sussex y con comunidades puertorriqueña y dominicana en Wilmington y Georgetown. La proporción queda por debajo de la media nacional, que en 2024 fue del 20,0%.",
   "fuente": "U.S. Census Bureau, American Community Survey (ACS) 2024, estimaciones de 1 año, tabla B03003. https://data.census.gov/table/ACSDT1Y2024.B03003",
   "hispanos": 122813
  },
  "ga": {
   "nombre": "Georgia",
   "pct": 11.6,
   "texto": "La costa de Georgia fue la provincia española de Guale, con misiones franciscanas como Santa Catalina desde el siglo XVI; España las replegó hacia San Agustín a finales del XVII ante la presión inglesa. Lo hispano de hoy no desciende de allí: viene de la migración mexicana y centroamericana al área de Atlanta y a la agricultura del sur del estado desde los años noventa. Hoy, 11,6% y 1,30 millones de personas.",
   "fuente": "U.S. Census Bureau, American Community Survey (ACS) 2024, estimaciones de 1 año, tabla B03003. https://data.census.gov/table/ACSDT1Y2024.B03003",
   "hispanos": 1299200
  },
  "va": {
   "nombre": "Virginia",
   "pct": 11.6,
   "texto": "El primer intento europeo de asentamiento en la bahía de Chesapeake fue español: la misión jesuita de Ajacán, en 1570, destruida al año siguiente. No dejó continuidad alguna. Lo hispano actual se concentra en el norte de Virginia, con salvadoreños, bolivianos y peruanos llegados desde los años ochenta al área de Washington. Hoy el 11,6% del estado es hispano: 1,02 millones de personas.",
   "fuente": "U.S. Census Bureau, American Community Survey (ACS) 2024, estimaciones de 1 año, tabla B03003. https://data.census.gov/table/ACSDT1Y2024.B03003",
   "hispanos": 1017833
  },
  "wy": {
   "nombre": "Wyoming",
   "pct": 11.1,
   "texto": "El estado menos poblado del país tiene, sin embargo, una proporción hispana apreciable: 11,1%, es decir 65.030 personas sobre 587.618 habitantes. La comunidad se formó con el trabajo ferroviario, la minería del carbón y el pastoreo de ovejas desde finales del siglo XIX, con núcleos en Cheyenne, Laramie y el condado de Sweetwater.",
   "fuente": "U.S. Census Bureau, American Community Survey (ACS) 2024, estimaciones de 1 año, tabla B03003. https://data.census.gov/table/ACSDT1Y2024.B03003"
  },
  "hi": {
   "nombre": "Hawái",
   "pct": 10.2,
   "texto": "A comienzos del siglo XX las plantaciones de azúcar llevaron a Hawái unos miles de trabajadores puertorriqueños, y sus descendientes mantienen comunidad e identidad propias en las islas. Hoy el 10,2% de la población es hispana, 147.896 personas, también con mexicanos y centroamericanos de llegada reciente.",
   "fuente": "U.S. Census Bureau, American Community Survey (ACS) 2024, estimaciones de 1 año, tabla B03003. https://data.census.gov/table/ACSDT1Y2024.B03003",
   "hispanos": 147896
  },
  "ar": {
   "nombre": "Arkansas",
   "pct": 9.5,
   "texto": "Arkansas fue parte de la Luisiana española entre 1762 y 1800: el Fuerte Carlos III, en el Puesto de Arkansas, sufrió en 1783 el único combate de la guerra de independencia estadounidense en territorio del actual estado. La población hispana de hoy, 294.671 personas y 9,5%, llegó sobre todo a la avicultura y el procesamiento de alimentos del noroeste desde los años noventa.",
   "fuente": "U.S. Census Bureau, American Community Survey (ACS) 2024, estimaciones de 1 año, tabla B03003. https://data.census.gov/table/ACSDT1Y2024.B03003",
   "hispanos": 294671
  },
  "pa": {
   "nombre": "Pensilvania",
   "pct": 9.4,
   "texto": "La migración puertorriqueña de posguerra al norte de Filadelfia y a las ciudades industriales del valle del Lehigh dejó comunidades muy visibles en Allentown, Bethlehem, Reading y Lancaster, donde los hispanos son hoy una parte central de la población urbana. En todo el estado son 1,23 millones de personas, el 9,4% de los habitantes de Pensilvania.",
   "fuente": "U.S. Census Bureau, American Community Survey (ACS) 2024, estimaciones de 1 año, tabla B03003. https://data.census.gov/table/ACSDT1Y2024.B03003",
   "hispanos": 1232617
  },
  "in": {
   "nombre": "Indiana",
   "pct": 9.0,
   "texto": "Los mexicanos llegaron al noroeste de Indiana desde los años diez del siglo XX, a las acerías de Gary y East Chicago y a los ferrocarriles. Hoy la población hispana es de 626.616 personas, el 9,0% del estado, repartida también por Indianápolis y las zonas agrícolas del norte.",
   "fuente": "U.S. Census Bureau, American Community Survey (ACS) 2024, estimaciones de 1 año, tabla B03003. https://data.census.gov/table/ACSDT1Y2024.B03003",
   "hispanos": 626616
  },
  "wi": {
   "nombre": "Wisconsin",
   "pct": 8.4,
   "texto": "Las curtidurías y fundiciones del sur de Milwaukee atrajeron trabajadores mexicanos desde los años veinte; más tarde llegaron puertorriqueños y, al campo, jornaleros para la industria láctea. Hoy el 8,4% de Wisconsin es hispano: 499.904 personas, a un paso del medio millón.",
   "fuente": "U.S. Census Bureau, American Community Survey (ACS) 2024, estimaciones de 1 año, tabla B03003. https://data.census.gov/table/ACSDT1Y2024.B03003",
   "hispanos": 499904
  },
  "sc": {
   "nombre": "Carolina del Sur",
   "pct": 7.9,
   "texto": "España fundó en 1566 Santa Elena, en la actual isla de Parris, capital de La Florida española durante una década y abandonada en 1587. No dejó población. Lo hispano de hoy, 434.217 personas y 7,9% del estado, es migración reciente a la construcción, la hostelería de la costa y la agricultura.",
   "fuente": "U.S. Census Bureau, American Community Survey (ACS) 2024, estimaciones de 1 año, tabla B03003. https://data.census.gov/table/ACSDT1Y2024.B03003",
   "hispanos": 434217
  },
  "tn": {
   "nombre": "Tennessee",
   "pct": 7.8,
   "texto": "Tennessee no tuvo asentamiento español estable, aunque la expedición de Hernando de Soto cruzó el río Misisipi por esta zona en 1541. La población hispana es reciente: creció con la construcción y los servicios de Nashville y Memphis desde los años noventa. Hoy son 566.839 personas, el 7,8% del estado.",
   "fuente": "U.S. Census Bureau, American Community Survey (ACS) 2024, estimaciones de 1 año, tabla B03003. https://data.census.gov/table/ACSDT1Y2024.B03003",
   "hispanos": 566839
  },
  "ia": {
   "nombre": "Iowa",
   "pct": 7.8,
   "texto": "La población hispana de Iowa se formó en dos oleadas: trabajadores mexicanos en los ferrocarriles y los frigoríficos desde los años veinte, y migración mexicana y centroamericana a la industria cárnica desde los noventa, en localidades como Marshalltown, Storm Lake y West Liberty. Hoy son 253.224 personas, el 7,8% del estado.",
   "fuente": "U.S. Census Bureau, American Community Survey (ACS) 2024, estimaciones de 1 año, tabla B03003. https://data.census.gov/table/ACSDT1Y2024.B03003",
   "hispanos": 253224
  },
  "la": {
   "nombre": "Luisiana",
   "pct": 7.8,
   "texto": "Luisiana fue colonia española de 1762 a 1800. Tras el incendio de 1788, Nueva Orleans se reconstruyó bajo administración española: la arquitectura del Barrio Francés es en buena parte española, no francesa. Entre 1778 y 1783 llegaron los isleños canarios a la parroquia de San Bernardo y su habla española sobrevivió hasta el siglo XX. El gobernador Bernardo de Gálvez tomó Baton Rouge a los británicos en 1779. Hoy el estado es 7,8% hispano: 357.628 personas.",
   "fuente": "U.S. Census Bureau, American Community Survey (ACS) 2024, estimaciones de 1 año, tabla B03003. https://data.census.gov/table/ACSDT1Y2024.B03003",
   "hispanos": 357628
  },
  "ak": {
   "nombre": "Alaska",
   "pct": 7.7,
   "texto": "Las expediciones españolas de Juan Pérez, en 1774, y de Bodega y Quadra llegaron hasta estas costas, y de ahí vienen topónimos como Valdez, Córdova y la bahía de Bucareli: reclamación cartográfica sin asentamiento. La población hispana actual, 57.229 personas y 7,7% del estado, se concentra en Anchorage y vive del sector público, la pesca y los servicios.",
   "fuente": "U.S. Census Bureau, American Community Survey (ACS) 2024, estimaciones de 1 año, tabla B03003. https://data.census.gov/table/ACSDT1Y2024.B03003"
  },
  "mn": {
   "nombre": "Minnesota",
   "pct": 6.7,
   "texto": "La comunidad hispana de Minnesota empezó con jornaleros mexicanos de la remolacha azucarera que se asentaron en el West Side de Saint Paul a partir de los años veinte; después llegaron mexicanos, ecuatorianos y centroamericanos a las Ciudades Gemelas y a la industria cárnica del sur. Hoy son 388.435 personas, el 6,7% del estado.",
   "fuente": "U.S. Census Bureau, American Community Survey (ACS) 2024, estimaciones de 1 año, tabla B03003. https://data.census.gov/table/ACSDT1Y2024.B03003",
   "hispanos": 388435
  },
  "mi": {
   "nombre": "Míchigan",
   "pct": 6.1,
   "texto": "Las fábricas de automóviles y las remolacheras llevaron mexicanos a Míchigan desde los años veinte; el barrio de Mexicantown, en el suroeste de Detroit, nació de ahí. Hoy la población hispana es de 621.831 personas, el 6,1% del estado, con núcleos también en Grand Rapids, Holland y Saginaw.",
   "fuente": "U.S. Census Bureau, American Community Survey (ACS) 2024, estimaciones de 1 año, tabla B03003. https://data.census.gov/table/ACSDT1Y2024.B03003",
   "hispanos": 621831
  },
  "al": {
   "nombre": "Alabama",
   "pct": 6.0,
   "texto": "Móvil fue española entre 1780, cuando Bernardo de Gálvez se la tomó a los británicos y la integró en la Florida Occidental, y 1813, cuando Estados Unidos la ocupó durante la guerra de 1812. Esa etapa no dejó población hispana continua. La de hoy, 306.966 personas y 6,0% del estado, es migración reciente a la construcción, la avicultura y las plantas de automóviles.",
   "fuente": "U.S. Census Bureau, American Community Survey (ACS) 2024, estimaciones de 1 año, tabla B03003. https://data.census.gov/table/ACSDT1Y2024.B03003",
   "hispanos": 306966
  },
  "mo": {
   "nombre": "Misuri",
   "pct": 5.6,
   "texto": "San Luis y Santa Genoveva estuvieron bajo administración española entre 1762 y 1800, dentro de la Luisiana española, con gobernadores y milicia españoles pero población mayoritariamente francesa. La comunidad hispana actual, 346.700 personas y 5,6% del estado, se concentra en el Westside de Kansas City y en el sur de San Luis.",
   "fuente": "U.S. Census Bureau, American Community Survey (ACS) 2024, estimaciones de 1 año, tabla B03003. https://data.census.gov/table/ACSDT1Y2024.B03003",
   "hispanos": 346700
  },
  "ky": {
   "nombre": "Kentucky",
   "pct": 5.5,
   "texto": "Kentucky no tuvo presencia colonial española. Su población hispana es reciente y creció con la cría de caballos, la construcción y la industria de Louisville y Lexington desde los años noventa. Hoy son 252.640 personas, el 5,5% del estado, muy por debajo de la media nacional del 20,0%.",
   "fuente": "U.S. Census Bureau, American Community Survey (ACS) 2024, estimaciones de 1 año, tabla B03003. https://data.census.gov/table/ACSDT1Y2024.B03003",
   "hispanos": 252640
  },
  "oh": {
   "nombre": "Ohio",
   "pct": 5.1,
   "texto": "La comunidad hispana más antigua de Ohio es puertorriqueña: desde finales de los años cuarenta las acerías de Lorain y Cleveland reclutaron trabajadores de la isla. Después llegaron mexicanos al noroeste agrícola, a Toledo y Fremont. Hoy son 606.933 personas, el 5,1% del estado.",
   "fuente": "U.S. Census Bureau, American Community Survey (ACS) 2024, estimaciones de 1 año, tabla B03003. https://data.census.gov/table/ACSDT1Y2024.B03003",
   "hispanos": 606933
  },
  "nh": {
   "nombre": "Nuevo Hampshire",
   "pct": 5.0,
   "texto": "Nuevo Hampshire tiene una de las proporciones hispanas más bajas de Nueva Inglaterra: 5,0%, es decir 70.912 personas sobre 1,41 millones de habitantes. La comunidad es reciente y se concentra en Manchester y Nashua, con origen sobre todo dominicano y puertorriqueño, por cercanía con el norte de Massachusetts.",
   "fuente": "U.S. Census Bureau, American Community Survey (ACS) 2024, estimaciones de 1 año, tabla B03003. https://data.census.gov/table/ACSDT1Y2024.B03003"
  },
  "nd": {
   "nombre": "Dakota del Norte",
   "pct": 5.0,
   "texto": "Dakota del Norte quedó dentro de la Luisiana que España administró entre 1762 y 1800: una reclamación en el mapa, sin asentamiento ni gobierno efectivo tan al norte. La población hispana actual, 39.853 personas y 5,0% del estado, creció con el auge petrolero de la cuenca de Bakken y con la industria cárnica. Es uno de los conjuntos hispanos más pequeños del país.",
   "fuente": "U.S. Census Bureau, American Community Survey (ACS) 2024, estimaciones de 1 año, tabla B03003. https://data.census.gov/table/ACSDT1Y2024.B03003"
  },
  "mt": {
   "nombre": "Montana",
   "pct": 4.9,
   "texto": "Montana no tuvo asentamiento español. Su población hispana se formó con el pastoreo de ovejas, el ferrocarril y la remolacha azucarera desde finales del siglo XIX, con núcleos en Billings y el valle del Yellowstone. Hoy son 55.506 personas, el 4,9% del estado, sobre 1,14 millones de habitantes.",
   "fuente": "U.S. Census Bureau, American Community Survey (ACS) 2024, estimaciones de 1 año, tabla B03003. https://data.census.gov/table/ACSDT1Y2024.B03003"
  },
  "sd": {
   "nombre": "Dakota del Sur",
   "pct": 4.9,
   "texto": "Dakota del Sur quedó dentro de la Luisiana que España administró entre 1762 y 1800, sin asentamiento ni control efectivo. Su población hispana es reciente: 44.947 personas, el 4,9% del estado, ligada sobre todo a la industria cárnica de Sioux Falls y Huron y al trabajo agrícola del este.",
   "fuente": "U.S. Census Bureau, American Community Survey (ACS) 2024, estimaciones de 1 año, tabla B03003. https://data.census.gov/table/ACSDT1Y2024.B03003"
  },
  "ms": {
   "nombre": "Misisipi",
   "pct": 4.0,
   "texto": "Natchez fue española entre 1779 y 1798, cuando Bernardo de Gálvez tomó la Florida Occidental a los británicos; el trazado español de la ciudad todavía se reconoce. Esa etapa no dejó continuidad demográfica. Hoy Misisipi es 4,0% hispano, 118.529 personas: una de las cinco proporciones más bajas de los 52 territorios de esta lista.",
   "fuente": "U.S. Census Bureau, American Community Survey (ACS) 2024, estimaciones de 1 año, tabla B03003. https://data.census.gov/table/ACSDT1Y2024.B03003",
   "hispanos": 118529
  },
  "vt": {
   "nombre": "Vermont",
   "pct": 2.7,
   "texto": "Vermont tiene la tercera proporción hispana más baja del país, después de Virginia Occidental y Maine: 2,7%, es decir 17.401 personas sobre 648.493 habitantes, el conjunto hispano más pequeño de los cincuenta estados. Hay jornaleros latinoamericanos en las granjas lácteas, pero no una comunidad urbana consolidada.",
   "fuente": "U.S. Census Bureau, American Community Survey (ACS) 2024, estimaciones de 1 año, tabla B03003. https://data.census.gov/table/ACSDT1Y2024.B03003"
  },
  "me": {
   "nombre": "Maine",
   "pct": 2.3,
   "texto": "Maine tiene la segunda proporción hispana más baja del país: 2,3%, es decir 32.869 personas sobre 1,41 millones de habitantes. No hubo presencia colonial española y la migración latinoamericana ha sido escasa; en los últimos años han llegado trabajadores a la hostelería de la costa y al procesamiento de marisco.",
   "fuente": "U.S. Census Bureau, American Community Survey (ACS) 2024, estimaciones de 1 año, tabla B03003. https://data.census.gov/table/ACSDT1Y2024.B03003"
  },
  "wv": {
   "nombre": "Virginia Occidental",
   "pct": 2.3,
   "texto": "Virginia Occidental tiene la menor proporción hispana del país: 2,3%, es decir 41.002 personas sobre 1.769.979 habitantes. No hubo presencia colonial española aquí ni se ha formado una comunidad hispana urbana comparable a la de los estados vecinos. Es también el dato con el margen de error relativo más alto de los 52: más o menos 1.640 personas, un 4% del total.",
   "fuente": "U.S. Census Bureau, American Community Survey (ACS) 2024, estimaciones de 1 año, tabla B03003. https://data.census.gov/table/ACSDT1Y2024.B03003"
  }
 },
 "epocas": [
  {
   "ano": "1492",
   "titulo": "El primer contacto (1492-1499)",
   "texto": "El 25 de noviembre de 1491 se firman en Santa Fe las Capitulaciones de Granada y el 2 de enero de 1492 los Reyes Católicos entran en la ciudad; el 12 de octubre la expedición de Colón toca tierra en una isla de las Bahamas. Fuera de la Península, lo único que España gobierna de verdad en estos años son dos franjas de La Española: la costa norte, con el fuerte de La Navidad (1492) y La Isabela (1493), y la del sur, con Santo Domingo (1496), más las Canarias, cuya conquista termina en Tenerife en 1496. El mapa de esta época es diminuto: unos cientos de hombres en un puñado de fuertes. Todo lo demás es exploración, no gobierno.",
   "territorios": [
    "espana",
    "republica-dominicana"
   ],
   "fuente": "Archivo General de Indias (Sevilla), secciones Patronato y Contratación; Tratado de Tordesillas, 7 de junio de 1494; Real Academia de la Historia, Diccionario Biográfico electrónico, entrada «Cristóbal Colón», 2018. https://dbe.rah.es"
  },
  {
   "ano": "1511",
   "titulo": "Las Antillas: el ensayo (1500-1518)",
   "texto": "España monta en las Antillas el modelo que después exporta al continente: encomienda, oro de placer y cabildo. Ponce de León ocupa Puerto Rico en 1508 y Diego Velázquez, Cuba en 1511. En 1510 nace en el Darién la primera población estable de tierra firme y en 1513 Balboa alcanza el Pacífico. Es también la época del derrumbe demográfico taíno y de la primera respuesta jurídica: el sermón de Montesinos (1511) y las Leyes de Burgos (1512), que regulan la encomienda sin abolirla.",
   "territorios": [
    "espana",
    "republica-dominicana",
    "puerto-rico",
    "cuba",
    "panama"
   ],
   "fuente": "Leyes de Burgos, 27 de diciembre de 1512; repartimiento de La Española de 1514, Archivo General de Indias; Massimo Livi Bacci, «Los estragos de la conquista», Crítica, 2006."
  },
  {
   "ano": "1535",
   "titulo": "La conquista continental (1519-1550)",
   "texto": "En treinta años cae el eje de las dos grandes organizaciones estatales americanas. Tenochtitlan se rinde el 13 de agosto de 1521; Pizarro captura a Atahualpa en Cajamarca el 16 de noviembre de 1532 y entra en Cuzco en 1533. Alrededor se fundan las capitales que todavía existen: Panamá (1519), Guatemala (1524), Quito y Lima (1534-1535), Asunción (1537), Bogotá (1538), Santiago de Chile (1541). Costa Rica y el Río de la Plata quedan fuera: los intentos fracasan y el primer Buenos Aires se abandona en 1541.",
   "territorios": [
    "espana",
    "mexico",
    "guatemala",
    "el-salvador",
    "honduras",
    "nicaragua",
    "panama",
    "cuba",
    "republica-dominicana",
    "puerto-rico",
    "colombia",
    "venezuela",
    "ecuador",
    "peru",
    "bolivia",
    "chile",
    "paraguay"
   ],
   "fuente": "Leyes y ordenanzas nuevamente hechas para la gobernación de las Indias («Leyes Nuevas»), 1542, Archivo General de Indias; Real Academia de la Historia, Diccionario Biográfico electrónico, 2018; John H. Elliott, «Imperios del mundo atlántico», Taurus, 2006."
  },
  {
   "ano": "1580",
   "titulo": "Dos océanos: el apogeo (1550-1598)",
   "texto": "Es la época en que el mapa se cierra y cruza el Pacífico. Legazpi llega a Cebú en 1565 y Manila se funda en 1571: el galeón une Acapulco con Asia durante dos siglos y medio. En 1565 nace San Agustín, en la actual Florida. Cartago (1563) incorpora Costa Rica, Córdoba se funda en 1573 y Buenos Aires se refunda en 1580. La plata de Potosí y Zacatecas lo paga todo y, entre 1580 y 1640, sostiene además la corona portuguesa en manos de Felipe II y sus sucesores.",
   "territorios": [
    "espana",
    "mexico",
    "guatemala",
    "el-salvador",
    "honduras",
    "nicaragua",
    "costa-rica",
    "panama",
    "cuba",
    "republica-dominicana",
    "puerto-rico",
    "colombia",
    "venezuela",
    "ecuador",
    "peru",
    "bolivia",
    "chile",
    "argentina",
    "paraguay",
    "filipinas",
    "estados-unidos-hispano"
   ],
   "fuente": "Earl J. Hamilton, «American Treasure and the Price Revolution in Spain, 1501-1650», Harvard University Press, 1934; John J. TePaske, «A New World of Gold and Silver», Brill, 2010; Archivo General de Indias, Casa de la Contratación."
  },
  {
   "ano": "1650",
   "titulo": "El siglo XVII: la frontera se detiene (1598-1700)",
   "texto": "El imperio deja de crecer y empieza a perder piezas. En 1598 el desastre de Curalaba expulsa a los españoles del sur de Chile y en 1641 la paz de Quillín reconoce la frontera del Biobío: la Araucanía no será gobernada por nadie de fuera hasta 1883. Portugal se separa en 1640, Inglaterra toma Jamaica en 1655 y y en 1697, con la paz de Ryswick, España deja de combatir a Francia en La Española: el tratado no menciona la isla, pero la ocupación francesa del oeste queda consentida de hecho, y no se reconoce por escrito hasta Basilea, en 1795. En las fronteras del norte el poder real son misiones y presidios: la revuelta pueblo de 1680 echa a los españoles de Nuevo México doce años.",
   "territorios": [
    "espana",
    "mexico",
    "guatemala",
    "el-salvador",
    "honduras",
    "nicaragua",
    "costa-rica",
    "panama",
    "cuba",
    "republica-dominicana",
    "puerto-rico",
    "colombia",
    "venezuela",
    "ecuador",
    "peru",
    "bolivia",
    "chile",
    "argentina",
    "paraguay",
    "filipinas",
    "estados-unidos-hispano"
   ],
   "fuente": "Parlamento de Quillín, 1641, Archivo Nacional de Chile; Tratado de Ryswick, 1697; Real Academia de la Historia, Diccionario Biográfico electrónico, 2018."
  },
  {
   "ano": "1776",
   "titulo": "El siglo XVIII borbónico (1700-1788)",
   "texto": "Los Borbones rehacen la administración para cobrar más: nacen el virreinato de Nueva Granada (1717, restaurado en 1739) y el del Río de la Plata (1776), y el reglamento de 1778 abre el comercio americano a trece puertos peninsulares. Montevideo se funda entre 1724 y 1726, y las misiones de California arrancan en 1769. También es el siglo de la reacción: los jesuitas son expulsados en 1767, y la rebelión de Túpac Amaru II y la de los comuneros, ambas en 1780-1781, muestran el coste del nuevo fiscalismo.",
   "territorios": [
    "espana",
    "mexico",
    "guatemala",
    "el-salvador",
    "honduras",
    "nicaragua",
    "costa-rica",
    "panama",
    "cuba",
    "republica-dominicana",
    "puerto-rico",
    "colombia",
    "venezuela",
    "ecuador",
    "peru",
    "bolivia",
    "chile",
    "argentina",
    "paraguay",
    "uruguay",
    "filipinas",
    "estados-unidos-hispano"
   ],
   "fuente": "Reglamento y aranceles reales para el comercio libre de España a Indias, 12 de octubre de 1778; INE, serie histórica «Censos de población de España: censo de Aranda (1768-1769) y censo de Floridablanca (1787)»; Alexander von Humboldt, «Ensayo político sobre el reino de la Nueva España», 1811."
  },
  {
   "ano": "1825",
   "titulo": "Las independencias (1808-1825)",
   "texto": "La invasión napoleónica de 1808 rompe la legitimidad: sin rey, los cabildos americanos forman juntas. En 1810 se levantan Caracas, Buenos Aires, Bogotá, México y Chile en cinco meses. Quince años después el continente está perdido: Boyacá (1819), Carabobo (1821), Pichincha (1822), Junín y Ayacucho (1824) cierran la guerra y Bolivia se declara en 1825. A España le quedan Cuba, Puerto Rico y Filipinas; Florida se entregó a Estados Unidos en julio de 1821, en ejecución del tratado Adams-Onís que se había firmado en 1819. El mapa de esta época es el de los nuevos Estados, no el de una frontera estable.",
   "territorios": [
    "espana",
    "mexico",
    "guatemala",
    "honduras",
    "el-salvador",
    "nicaragua",
    "costa-rica",
    "panama",
    "cuba",
    "republica-dominicana",
    "puerto-rico",
    "venezuela",
    "colombia",
    "ecuador",
    "peru",
    "bolivia",
    "chile",
    "argentina",
    "paraguay",
    "uruguay",
    "filipinas",
    "estados-unidos-hispano"
   ],
   "fuente": "Tratados de Córdoba, 24 de agosto de 1821; Acta de Independencia de Centroamérica, 15 de septiembre de 1821; Tratado Adams-Onís, 22 de febrero de 1819 (Library of Congress, Treaties and Conventions); Real Academia de la Historia, Diccionario Biográfico electrónico, 2018."
  },
  {
   "ano": "1860",
   "titulo": "Las repúblicas y las últimas colonias (1826-1897)",
   "texto": "Las repúblicas se reparten y se rompen: la Gran Colombia se disuelve en 1830 y México, entre la anexión de Texas en 1845 y el tratado de Guadalupe Hidalgo de 1848, pierde cerca de la mitad de su territorio. España conserva Cuba, Puerto Rico y Filipinas, reanexiona Santo Domingo entre 1861 y 1865, y ocupa de verdad Fernando Poo (hoy Bioko) desde 1858, aunque el continente guineano sigue sin administración española. Cuba se subleva dos veces: la guerra de los Diez Años (1868-1878) y la que empieza en 1895 y acaba con el imperio. Chile y Argentina someten la Araucanía y la Patagonia entre 1861 y 1885.",
   "territorios": [
    "espana",
    "mexico",
    "guatemala",
    "honduras",
    "el-salvador",
    "nicaragua",
    "costa-rica",
    "panama",
    "cuba",
    "republica-dominicana",
    "puerto-rico",
    "venezuela",
    "colombia",
    "ecuador",
    "peru",
    "bolivia",
    "chile",
    "argentina",
    "paraguay",
    "uruguay",
    "guinea-ecuatorial",
    "filipinas",
    "estados-unidos-hispano"
   ],
   "fuente": "Tratado de Guadalupe Hidalgo, 2 de febrero de 1848, Secretaría de Relaciones Exteriores de México; Tratado de El Pardo, 1778, y documentación de gobierno de Fernando Poo, Archivo General de la Administración (Alcalá de Henares); Paz del Zanjón, 1878."
  },
  {
   "ano": "1898",
   "titulo": "El 98: el fin del imperio (1898-1933)",
   "texto": "La guerra con Estados Unidos dura cuatro meses y liquida cuatro siglos. Las escuadras españolas son destruidas en Cavite el 1 de mayo y en Santiago de Cuba el 3 de julio de 1898, y el Tratado de París, firmado el 10 de diciembre, entrega Cuba, Puerto Rico, Guam y Filipinas. Al año siguiente España vende a Alemania las Carolinas, las Marianas y los Palaos. Cuba es república en 1902; Puerto Rico sigue siendo territorio estadounidense. Filipinas pasa a Estados Unidos y sale del mapa de gobierno hispánico.",
   "territorios": [
    "espana",
    "mexico",
    "guatemala",
    "honduras",
    "el-salvador",
    "nicaragua",
    "costa-rica",
    "panama",
    "cuba",
    "republica-dominicana",
    "puerto-rico",
    "venezuela",
    "colombia",
    "ecuador",
    "peru",
    "bolivia",
    "chile",
    "argentina",
    "paraguay",
    "uruguay",
    "guinea-ecuatorial",
    "estados-unidos-hispano"
   ],
   "fuente": "Tratado de Paz entre España y los Estados Unidos, París, 10 de diciembre de 1898 (texto en la Gaceta de Madrid); Tratado hispano-alemán de 12 de febrero de 1899; Tratado de París de 27 de junio de 1900; Foraker Act (1900) y Jones-Shafroth Act (1917), Congreso de los Estados Unidos."
  },
  {
   "ano": "1950",
   "titulo": "África: la ocupación tardía (1934-1967)",
   "texto": "El Sáhara aparece aquí y no antes. España lo reclama desde 1884, pero durante medio siglo solo ocupa factorías en la costa; las columnas que entran en el interior, y las que toman Ifni, son de 1934. En Guinea, el continente de Río Muni no queda administrado hasta los años veinte. El franquismo convierte ambos en provincias españolas (el Sáhara en 1958, Guinea en 1959) para sostener ante la ONU que no eran colonias sino territorio nacional, y esquivar así la descolonización, y pierde Ifni en 1969 tras la guerra de 1957-1958.",
   "territorios": [
    "espana",
    "mexico",
    "guatemala",
    "honduras",
    "el-salvador",
    "nicaragua",
    "costa-rica",
    "panama",
    "cuba",
    "republica-dominicana",
    "puerto-rico",
    "venezuela",
    "colombia",
    "ecuador",
    "peru",
    "bolivia",
    "chile",
    "argentina",
    "paraguay",
    "uruguay",
    "guinea-ecuatorial",
    "sahara-occidental",
    "estados-unidos-hispano"
   ],
   "fuente": "Naciones Unidas, resolución 1514 (XV) de la Asamblea General, 14 de diciembre de 1960; Tratado de Fez, 4 de enero de 1969 (Boletín Oficial del Estado); decretos de provincialización del Sáhara (1958) y de Guinea (1959), Boletín Oficial del Estado."
  },
  {
   "ano": "1975",
   "titulo": "La descolonización africana (1968-1976)",
   "texto": "Guinea Ecuatorial se independiza el 12 de octubre de 1968 y entra en la ONU un mes después: es hoy el único Estado africano con el español como lengua oficial. El Sáhara termina de otra manera. El 16 de octubre de 1975 la Corte Internacional de Justicia dictamina que no había vínculos de soberanía territorial con Marruecos ni con Mauritania; ese mismo día se anuncia la Marcha Verde, el 14 de noviembre España firma los Acuerdos de Madrid y el 26 de febrero de 1976 se retira sin haber celebrado el referéndum.",
   "territorios": [
    "espana",
    "mexico",
    "guatemala",
    "honduras",
    "el-salvador",
    "nicaragua",
    "costa-rica",
    "panama",
    "cuba",
    "republica-dominicana",
    "puerto-rico",
    "venezuela",
    "colombia",
    "ecuador",
    "peru",
    "bolivia",
    "chile",
    "argentina",
    "paraguay",
    "uruguay",
    "guinea-ecuatorial",
    "sahara-occidental",
    "estados-unidos-hispano"
   ],
   "fuente": "Corte Internacional de Justicia, «Sahara occidental, opinión consultiva de 16 de octubre de 1975» (https://www.icj-cij.org/case/61); Acuerdos de Madrid, 14 de noviembre de 1975, registrados en la ONU (doc. S/11880); censo del Sáhara español de 1974, Servicio de Estadística del Gobierno General del Sáhara; Naciones Unidas, Comité de Descolonización (https://www.un.org/dppa/decolonization/es/nsgt)."
  },
  {
   "ano": "2026",
   "titulo": "Hoy: la lengua sin imperio (1976-2026)",
   "texto": "El español tiene hoy 635 millones de hablantes potenciales y 520 millones de hablantes con dominio nativo: la tercera comunidad nativa del mundo, tras el chino mandarín y el hindi. Es lengua oficial o de hecho en veinte Estados y en Puerto Rico, y en Estados Unidos, donde no es oficial, 44,9 millones de personas de cinco años o más lo hablan en casa. Dos de los veinticuatro territorios de este mapa no son hispanohablantes mayoritarios: Filipinas, donde el español perdió la oficialidad plena con la Constitución de 1973 y desde la de 1987 figura como lengua de promoción voluntaria, y el Sáhara Occidental, donde funciona como segunda lengua.",
   "territorios": [
    "espana",
    "mexico",
    "guatemala",
    "honduras",
    "el-salvador",
    "nicaragua",
    "costa-rica",
    "panama",
    "cuba",
    "republica-dominicana",
    "puerto-rico",
    "venezuela",
    "colombia",
    "ecuador",
    "peru",
    "bolivia",
    "chile",
    "argentina",
    "paraguay",
    "uruguay",
    "guinea-ecuatorial",
    "sahara-occidental",
    "filipinas",
    "estados-unidos-hispano"
   ],
   "fuente": "Instituto Cervantes, «El español en el mundo. Anuario 2025» y Observatorio Global del Español (https://cvc.cervantes.es/lengua/anuario/anuario_25/); U.S. Census Bureau, American Community Survey 2024, tabla S1601 (https://data.census.gov/table/ACSST1Y2024.S1601); INEGE, IV Censo General de Población y Viviendas de Guinea Ecuatorial, 2015 (https://inege.org); Naciones Unidas, Comité de Descolonización, lista de territorios no autónomos."
  }
 ],
 "ciudades": {
  "-99.92,16.85": {
   "texto": "Durante 250 años, una vez al año, un barco llegaba aquí desde Manila cargado de seda, porcelana y marfil, y volvía con plata mexicana. Fue la ruta comercial regular más larga de la historia: el Galeón de Manila, abierto en 1565 cuando Andrés de Urdaneta descubrió la corriente de regreso por el norte del Pacífico. La travesía duraba hasta seis meses y mataba tripulantes por escorbuto. La feria de Acapulco movía la economía del virreinato unas semanas al año. El último galeón, el Magallanes, llegó en 1815.",
   "fuente": "Archivo General de Indias, fondo Filipinas; INEGI, Censo de Población y Vivienda 2020; UNESCO, Programa Ruta de la Seda Marítima",
   "fundacion": "puerto activo desde 1565"
  },
  "-90.73,14.57": {
   "texto": "Fue capital de una Audiencia que iba de Chiapas a Costa Rica, y la destruyeron dos veces. La sede anterior, Ciudad Vieja, quedó sepultada en 1541 por una avalancha de agua y lodo del volcán de Agua; murió la gobernadora Beatriz de la Cueva. Trasladada al valle de Panchoy en 1543, creció con universidad e imprenta hasta que los terremotos de Santa Marta, en julio y septiembre de 1773, la arruinaron. La Corona ordenó abandonarla y mudar la capital. Mucha gente se negó a irse, y por eso la ciudad sigue allí.",
   "fuente": "INE (Guatemala), XII Censo Nacional de Población 2018; UNESCO, expediente 65 (Antigua Guatemala, 1979); Archivo General de Centro América",
   "fundacion": "Fundada en 1543"
  },
  "-71.53,-16.42": {
   "texto": "Arequipa se construyó con sillar, la piedra volcánica blanca del Chachani y el Misti, y eso le da el color y también la razón: en una zona de terremotos convenía una piedra ligera y abundante. El monasterio de Santa Catalina, abierto en 1579, era una ciudad cerrada de unos veinte mil metros cuadrados donde las hijas segundas de las familias ricas vivían con criadas propias; no se abrió al público hasta 1970. La ciudad tuvo fama de levantisca: se alzó contra gobiernos en 1950 y 1955 y se la llamó el león del sur.",
   "fuente": "INEI (Perú), Censos Nacionales 2017; UNESCO, expediente 1016 (Centro histórico de la ciudad de Arequipa, 2000); Monasterio de Santa Catalina, archivo",
   "fundacion": "Fundada en 1540"
  },
  "-57.64,-25.29": {
   "texto": "Asunción se llamó «madre de ciudades» porque de aquí salieron las expediciones que refundaron Buenos Aires y poblaron el Plata. Era una colonia sin oro y sin salida al mar, y eso la hizo distinta: el guaraní no se perdió y hoy Paraguay es el único país americano donde una lengua indígena es cooficial en todo el territorio y la habla una proporción tan alta de la población; Bolivia y Perú también tienen lenguas indígenas oficiales, pero con alcance territorial. Al sur funcionaron las misiones jesuíticas, con decenas de miles de guaraníes, hasta la expulsión de 1767. La Guerra de la Triple Alianza (1864-1870) mató a una parte enorme de la población paraguaya.",
   "fuente": "INE (Paraguay), Censo Nacional de Población y Viviendas 2022; Archivo Nacional de Asunción; UNESCO, expediente 648 (Misiones jesuíticas de La Santísima Trinidad de Paraná y Jesús de Tavarangue, 1993)",
   "fundacion": "Fundada en 1537"
  },
  "-74.08,4.60": {
   "texto": "Gonzalo Jiménez de Quesada fundó Santa Fe en 1538 en el territorio del zipa muisca, cuyas aldeas y caminos ya estaban allí; a los pocos meses se le juntaron dos expediciones rivales, la de Federmán desde Coro y la de Belalcázar desde Quito, y los tres jefes se fueron a litigar a España. En 1810 la ciudad declaró su junta, y luego la república se partió entre centralistas y federalistas: a esa guerra entre criollos se la llama la Patria Boba, y es la razón por la que la reconquista española de 1816 fue tan fácil.",
   "fuente": "DANE, Censo Nacional de Población y Vivienda 2018; Archivo General de la Nación (Colombia), fondo Colonia; Real Academia de la Historia, entrada «Gonzalo Jiménez de Quesada»",
   "fundacion": "Fundada en 1538"
  },
  "-58.40,-34.60": {
   "texto": "Hubo que fundarla dos veces: la de Pedro de Mendoza, en 1536, se abandonó en 1541 por hambre y por la resistencia indígena, y los caballos que dejaron allí se multiplicaron en la pampa. Juan de Garay la refundó en 1580. Durante dos siglos fue un puerto secundario que vivía del contrabando, porque la ley mandaba comerciar por Lima. En 1806 y 1807 invasiones británicas tomaron la ciudad y fueron expulsadas por milicias locales, sin ayuda de España: tres años después, el 25 de mayo de 1810, el cabildo abierto depuso al virrey.",
   "fuente": "INDEC (Argentina), Censo Nacional de Población, Hogares y Viviendas 2022; Archivo General de la Nación (Argentina), actas del Cabildo de Buenos Aires",
   "fundacion": "1536 y refundada en 1580"
  },
  "-6.22,36.53": {
   "texto": "En 1812, con la ciudad sitiada por el ejército francés y reducida a una isla, los diputados reunidos en Cádiz aprobaron la primera Constitución española. La firmaron también representantes americanos, y declaró españoles a los nacidos en América: por un momento el imperio intentó convertirse en nación. El sitio duró más de dos años y la ciudad no cayó. La Constitución fue abolida por Fernando VII en 1814, restaurada en 1820 y abolida otra vez en 1823, pero su texto se copió en Portugal, Nápoles y media Hispanoamérica.",
   "fuente": "Congreso de los Diputados (España), edición facsímil de la Constitución política de la Monarquía Española de 1812; INE (España), Padrón municipal 2023",
   "fundacion": "asentamiento fenicio, siglo IX-VIII a. C."
  },
  "-66.92,10.50": {
   "texto": "El 19 de abril de 1810 el cabildo de Caracas depuso al capitán general y empezó el proceso que llevó a la independencia de Venezuela; el 5 de julio de 1811 se declaró. Catorce meses después, el 26 de marzo de 1812, un terremoto destruyó Caracas en Jueves Santo y el clero realista lo presentó como castigo divino; la Primera República se derrumbó ese año. De esta ciudad salieron Simón Bolívar, nacido en 1783, y Francisco de Miranda, que murió en una cárcel de Cádiz en 1816.",
   "fuente": "INE (Venezuela), XIV Censo Nacional de Población y Vivienda 2011; Academia Nacional de la Historia (Venezuela), actas del cabildo de Caracas; FUNVISIS, catálogo sísmico histórico",
   "fundacion": "Fundada en 1567"
  },
  "-75.52,10.40": {
   "texto": "En marzo de 1741 el almirante Edward Vernon llegó con la mayor flota que había cruzado el Atlántico hasta entonces. Enfrente tenía a Blas de Lezo, un marino vasco que ya había perdido un ojo, una pierna y el uso de un brazo en combate. Londres acuñó medallas de victoria antes de que acabara la batalla: Vernon había enviado el parte por adelantado. Tras 67 días de sitio, la fiebre y las murallas lo obligaron a reembarcar. Lezo murió el 7 de septiembre de 1741, enfermo y desacreditado por el virrey Eslava, su rival.",
   "fuente": "Archivo General de Indias, expedientes del sitio de 1741; Real Academia de la Historia, Diccionario Biográfico Electrónico, entrada «Blas de Lezo y Olavarrieta»; DANE, Censo Nacional de Población y Vivienda 2018; UNESCO, expediente 285 (Puerto, fortalezas y conjunto monumental de Cartagena, 1984)",
   "fundacion": "Fundada en 1533",
   "retrato": "blas-de-lezo"
  },
  "-83.93,9.87": {
   "texto": "Fue capital de Costa Rica durante 258 años, hasta que la perdió en una batalla de una tarde. En 1823, tras la independencia, Cartago quería unirse al imperio mexicano de Iturbide y San José quería la república: el 5 de abril se enfrentaron en Ochomogo y ganó San José, que se quedó la capital. El volcán Irazú, encima de la ciudad, y los terremotos de 1841 y 1910 destruyeron el resto: la iglesia principal quedó en ruinas en 1910 y nunca se terminó de reconstruir. Allí sigue, abierta al cielo.",
   "fuente": "INEC (Costa Rica), X Censo Nacional de Población 2011; Archivo Nacional de Costa Rica; Red Sismológica Nacional (UCR)",
   "fundacion": "Fundada en 1563"
  },
  "123.90,10.32": {
   "texto": "Aquí llegó Magallanes en 1521, bautizó al jefe local y regaló a su esposa una imagen del Niño Jesús que todavía se venera; semanas después murió en la isla vecina de Mactán a manos de Lapulapu, y la expedición siguió sin él hasta completar la primera vuelta al mundo. Cuarenta y cuatro años más tarde, Legazpi fundó en Cebú el primer asentamiento español permanente en Asia, antes de mudar la capital a Manila. La fiesta del Santo Niño, el Sinulog, sigue llenando la ciudad cada enero.",
   "fuente": "Philippine Statistics Authority, 2020 Census of Population and Housing; Antonio Pigafetta, relación del primer viaje alrededor del mundo (1524); National Historical Commission of the Philippines",
   "fundacion": "Fundada en 1565"
  },
  "-90.53,14.62": {
   "texto": "Esta capital nació de una orden de mudanza: tras los terremotos de 1773 la Corona mandó trasladar la ciudad al valle de la Ermita, y el traslado se hizo oficial en 1776. Aquí, el 15 de septiembre de 1821, los notables de la Capitanía General firmaron el acta de independencia de Centroamérica sin que se disparara un tiro, y en el mismo texto dejaron la decisión final a un congreso futuro: por eso el istmo pasó por el imperio de Iturbide y luego por la república federal, que se deshizo en 1839 en cinco países.",
   "fuente": "INE (Guatemala), XII Censo Nacional de Población 2018; Archivo General de Centro América, Acta de Independencia de 1821",
   "fundacion": "Fundada en 1776"
  },
  "-99.13,19.44": {
   "texto": "No fue fundada por españoles: los mexicas levantaron México-Tenochtitlan en un islote del lago de Texcoco en 1325, con calzadas, acueducto y chinampas. Cortés la vio en 1519 y la describió mayor que Sevilla. Tras un sitio de 93 días cayó el 13 de agosto de 1521, y los españoles trazaron su ciudad encima, usando las piedras de los templos. Luego pelearon durante siglos contra el agua: el desagüe del valle, empezado en 1607 por Enrico Martínez, secó los lagos. Hoy el centro se hunde por bombear su propio acuífero.",
   "fuente": "INEGI, Censo de Población y Vivienda 2020; INAH, Proyecto Templo Mayor; Bernal Díaz del Castillo, «Historia verdadera de la conquista de la Nueva España» (1632)",
   "fundacion": "México-Tenochtitlan 1325, caída 1521"
  },
  "-57.84,-34.48": {
   "texto": "Es la única de esta lista fundada por Portugal, y cambió de manos siete veces. Nació en 1680 justo enfrente de Buenos Aires para meter mercancía de contrabando en el Río de la Plata saltándose el monopolio español, y funcionó: entraba tanto género que el virreinato perdía ingresos. España la tomó y la devolvió varias veces por tratados sucesivos hasta quedársela en 1777. Por eso su casco viejo tiene dos trazados mezclados: calles portuguesas irregulares y manzanas españolas en cuadrícula, una al lado de la otra.",
   "fuente": "INE (Uruguay), Censo 2011; UNESCO, expediente 747 (Barrio histórico de Colonia del Sacramento, 1995); Tratado de San Ildefonso de 1777",
   "fundacion": "1680, fundada por Portugal"
  },
  "-87.65,14.46": {
   "texto": "Comayagua fue capital de Honduras casi tres siglos y perdió el puesto por política, no por terremotos: en 1880 el presidente Marco Aurelio Soto trasladó el gobierno a Tegucigalpa, en parte por la resistencia conservadora de la antigua sede episcopal. En su catedral hay un reloj antiguo que la tradición local atribuye a un regalo de la Corona española y a un origen andalusí. Ningún estudio técnico publicado lo ha datado, y la propia atribución cambia según quien la cuente: unas versiones dicen la Alhambra y otras el Alcázar de Sevilla. La ciudad conserva el trazado colonial casi intacto.",
   "fuente": "INE (Honduras), XVII Censo de Población y VI de Vivienda 2013; Instituto Hondureño de Antropología e Historia, inventario del centro histórico de Comayagua",
   "fundacion": "Fundada en 1537"
  },
  "-4.77,37.88": {
   "texto": "En el siglo X Córdoba era capital de un califato independiente y probablemente la ciudad más grande de Europa occidental. La biblioteca de Al-Hakam II se contaba por decenas de miles de volúmenes cuando los monasterios del norte guardaban cientos. Allí trabajaron el médico Abulcasis y, más tarde, Averroes y Maimónides, nacidos ambos en la ciudad con doce años de diferencia. El califato se deshizo en guerra civil entre 1009 y 1031, y en 1013 las tropas berberiscas saquearon el palacio de Medina Azahara.",
   "fuente": "UNESCO, expediente 313 (Centro histórico de Córdoba, 1984 y 1994); Real Academia de la Historia, Diccionario Biográfico Electrónico, entradas «Averroes» y «Maimónides»; INE (España), Padrón municipal 2023",
   "fundacion": "Corduba romana, 169 a. C."
  },
  "-69.68,11.42": {
   "texto": "Coro fue la primera capital de Venezuela y escenario de un episodio raro: entre 1528 y 1546 Carlos V entregó la provincia en contrato a los banqueros alemanes Welser, a los que debía dinero, y sus gobernadores salieron a buscar El Dorado con resultados sangrientos. En 1795 el zambo libre José Leonardo Chirino encabezó aquí una insurrección que pedía la ley de los franceses y la libertad de los esclavos; fue aplastada y Chirino ahorcado en 1796. Sus casas de barro y techos de caña siguen en pie.",
   "fuente": "INE (Venezuela), Censo 2011; UNESCO, expediente 658 (Coro y su puerto, 1993); Academia Nacional de la Historia (Venezuela)",
   "fundacion": "Fundada en 1527"
  },
  "-79.00,-2.90": {
   "texto": "La ciudad española de 1557 se trazó encima de Tomebamba, una capital inca que Huayna Cápac había hecho construir con piedras traídas del Cusco y que quedó arruinada en la guerra entre Huáscar y Atahualpa. Los sillares incas están reutilizados en muros coloniales del barrio de Pumapungo. En el siglo XIX Cuenca exportó al mundo el sombrero de paja toquilla, tejido en Ecuador, que se hizo famoso como «sombrero de Panamá» porque se vendía a los obreros del canal: el nombre sigue mal puesto desde entonces.",
   "fuente": "INEC (Ecuador), Censo de Población y Vivienda 2022; UNESCO, expediente 863 (Centro histórico de Santa Ana de los Ríos de Cuenca, 1999) y Lista de Patrimonio Inmaterial 2012; Instituto Nacional de Patrimonio Cultural del Ecuador",
   "fundacion": "1557, sobre Tomebamba inca"
  },
  "-71.97,-13.53": {
   "texto": "Cusco era la capital de un imperio de millones de personas cuando llegaron los españoles: no se fundó en 1534, se refundó encima. Los muros incas aguantan los terremotos que tiran las iglesias levantadas sobre ellos, como se vio en 1650 y 1950. En 1536 Manco Inca sitió la ciudad con un ejército enorme durante casi un año y no la recuperó. En 1780 el cacique José Gabriel Condorcanqui, Túpac Amaru II, encabezó la mayor rebelión del periodo colonial; lo ejecutaron en la plaza mayor en 1781 y la Corona prohibió hasta los retratos de los incas.",
   "fuente": "INEI (Perú), Censos Nacionales 2017; UNESCO, expediente 273 (Ciudad del Cusco, 1983); Archivo Regional del Cusco, expediente de la rebelión de 1780",
   "fundacion": "capital inca, tomada en 1533 y refundada en 1534"
  },
  "-13.20,27.15": {
   "texto": "Es la ciudad más joven de esta lista: la fundó en 1938 el capitán español Antonio de Oro junto al río Saguía el Hamra, como puesto administrativo del Sahara Español, y creció cuando se empezó a explotar el fosfato de Bu Craa en los años sesenta. España se retiró en 1975-1976 sin organizar la consulta prevista. Hoy El Aaiún está administrada de hecho por Marruecos, pero Naciones Unidas mantiene el Sahara Occidental en su lista de territorios no autónomos y no reconoce soberanía: control efectivo y título jurídico no coinciden.",
   "fuente": "Naciones Unidas, Comité Especial de Descolonización, lista de territorios no autónomos; Haut-Commissariat au Plan (Marruecos), Recensement Général de la Population 2014; Acuerdos de Madrid, 14 de noviembre de 1975",
   "fundacion": "Fundada en 1938"
  },
  "-3.58,37.16": {
   "texto": "El 2 de enero de 1492 Boabdil entregó las llaves de la ciudad a los Reyes Católicos y terminaron ocho siglos de poder musulmán en la península. Las Capitulaciones firmadas semanas antes prometían a los granadinos conservar su religión, su lengua y sus bienes. No se cumplieron: en 1502 se obligó a convertirse o marcharse, y la rebelión de las Alpujarras (1568-1571) acabó con la deportación de los moriscos del reino. En ese mismo 1492, en el campamento de Santa Fe, se firmó con Colón el contrato del viaje.",
   "fuente": "Archivo General de Simancas, Capitulaciones de Granada; Real Academia de la Historia, Diccionario Biográfico Electrónico, entrada «Boabdil»; INE (España), Padrón municipal 2023",
   "fundacion": "taifa zirí desde 1013, reino nazarí desde 1238"
  },
  "-85.95,11.93": {
   "texto": "Granada estaba en un lago conectado con el Caribe por el río San Juan, así que los piratas podían llegar navegando: la saquearon en 1665, 1670 y 1685. En 1856 un abogado estadounidense, William Walker, se hizo presidente de Nicaragua con un ejército privado y restableció la esclavitud; al retirarse en 1856 incendió la ciudad y dejó un cartel que decía «aquí fue Granada». Perdió contra un ejército de los cinco países centroamericanos y fue fusilado en Honduras en 1860. Granada se reconstruyó sobre el mismo trazado.",
   "fuente": "INIDE (Nicaragua), Censo 2005; Instituto Nicaragüense de Cultura, archivo del centro histórico de Granada",
   "fundacion": "Fundada en 1524"
  },
  "-101.28,21.02": {
   "texto": "La mina La Valenciana, abierta en 1760, llegó a dar una parte enorme de la plata del mundo y pagó iglesias que todavía están en pie. El 28 de septiembre de 1810 esa riqueza se volvió contra la ciudad: los insurgentes de Hidalgo asaltaron la Alhóndiga de Granaditas, el granero donde se habían encerrado españoles y criollos ricos con el intendente Riaño. Murieron cientos y el saqueo le costó a Hidalgo el apoyo de los criollos. Al año siguiente su cabeza estuvo colgada en una esquina de la propia Alhóndiga, diez años.",
   "fuente": "INEGI, Censo de Población y Vivienda 2020; UNESCO, expediente 482 (Ciudad histórica de Guanajuato y minas adyacentes, 1988); INEHRM, documentos de la Independencia",
   "fundacion": "Fundada en 1548"
  },
  "-79.92,-2.22": {
   "texto": "Guayaquil fue el astillero del Pacífico español: con madera de guachapelí y balsa de la costa se construyeron aquí navíos para toda la mar del Sur, y por eso la atacaron piratas en 1624, 1687 y 1709. El 9 de octubre de 1820 la ciudad se declaró independiente por su cuenta y creó una provincia libre; el 26 de julio de 1822 Bolívar y San Martín se vieron aquí a solas, sin testigos ni actas, y nadie sabe con certeza qué se dijeron. San Martín se retiró de la guerra poco después.",
   "fuente": "INEC (Ecuador), Censo de Población y Vivienda 2022; Archivo Histórico del Guayas; Academia Nacional de Historia del Ecuador",
   "fundacion": "proceso de fundación entre 1534 y 1547"
  },
  "-82.37,23.13": {
   "texto": "La Habana existe tal como es por un problema de navegación: los barcos que volvían de América necesitaban juntarse y esperar los vientos, y su bahía de bolsa era el mejor refugio del Caribe. Desde 1561 las flotas de Nueva España y Tierra Firme se reunían aquí para cruzar juntas, protegidas por una cadena entre dos castillos. En 1762 los británicos tomaron la ciudad tras dos meses de sitio y la devolvieron al año siguiente a cambio de Florida. España respondió construyendo La Cabaña, la mayor fortaleza española de América.",
   "fuente": "ONEI (Cuba), Anuario Estadístico de Cuba 2022; UNESCO, expediente 204 (La Habana Vieja y su sistema de fortificaciones, 1982); Archivo General de Indias, fondo Santo Domingo",
   "fundacion": "1519 en su emplazamiento actual"
  },
  "-68.15,-16.50": {
   "texto": "La Paz se fundó en 1548 en una hondonada, en la ruta de la plata de Potosí al puerto de Arica. En 1781 el líder aymara Túpac Katari la sitió dos veces con decenas de miles de combatientes y la ciudad pasó meses de hambre; fue descuartizado en noviembre de ese año y su frase sobre volver convertido en millones se sigue citando en política boliviana. Hoy es la sede del gobierno a unos 3.600 metros de altura, y su vecina El Alto, que empezó como barrio en la meseta, ya es una ciudad aparte.",
   "fuente": "INE (Bolivia), Censo Nacional de Población y Vivienda 2012; Archivo y Biblioteca Nacionales de Bolivia, expedientes del cerco de 1781",
   "fundacion": "Fundada en 1548"
  },
  "-86.88,12.44": {
   "texto": "La ciudad se mudó entera. León Viejo, fundada en 1524 junto al lago de Managua, fue abandonada en 1610 por los temblores y el volcán Momotombo; quedó enterrada y se redescubrió en 1967. La nueva León se hizo capital intelectual: en su universidad, creada en 1812, estudió Rubén Darío, que cambió la poesía en español y está enterrado en la catedral, la mayor de Centroamérica. En 1956 un poeta de 27 años, Rigoberto López Pérez, disparó aquí contra el dictador Anastasio Somoza García en una fiesta; Somoza murió días después.",
   "fuente": "INIDE (Nicaragua), VIII Censo de Población y IV de Vivienda 2005; UNESCO, expediente 613 (Ruinas de León Viejo, 2000)",
   "fundacion": "Fundada en 1524"
  },
  "-77.05,-12.05": {
   "texto": "Pizarro fundó Lima en 1535 junto al mar porque desde allí se podía embarcar la plata, y la ciudad gobernó medio continente durante casi tres siglos. En 1746 un terremoto y un tsunami la destruyeron: en el puerto del Callao murió casi toda la población y quedaron unas pocas decenas de sobrevivientes. Aquí funcionó también el tribunal del Santo Oficio, instalado en 1570 y suprimido en 1820. Y aquí se firmó la independencia el 28 de julio de 1821, aunque la guerra en el Perú siguió tres años más, hasta Ayacucho.",
   "fuente": "INEI (Perú), Censos Nacionales 2017; Instituto Geofísico del Perú, catálogo de sismos históricos; UNESCO, expediente 500 (Centro histórico de Lima, 1988 y 1991)",
   "fundacion": "Fundada en 1535"
  },
  "-118.18,33.99": {
   "texto": "El pueblo de Nuestra Señora la Reina de los Ángeles se fundó en 1781 con 44 pobladores llegados desde Sonora y Sinaloa: según el censo que levantó el propio gobernador Felipe de Neve, la mayoría eran mestizos, mulatos, negros e indígenas, y solo dos se declararon españoles. La ciudad vivió del ganado hasta que Estados Unidos se quedó California en 1848. El nombre, el trazado de la plaza y la calle Olvera siguen allí, y hoy es la ciudad con más hispanohablantes del país: el español nunca dejó de hablarse en ella.",
   "fuente": "U.S. Census Bureau, 2020 Census; Los Angeles City Archives, padrón de 1781; Tratado de Guadalupe Hidalgo (1848), texto oficial",
   "fundacion": "Fundada en 1781"
  },
  "-3.69,40.40": {
   "texto": "Madrid no era la ciudad más rica ni la más poblada de Castilla cuando Felipe II instaló allí la corte en 1561. Era el centro geométrico: un rey que gobernaba desde papeles quería estar a la misma distancia de todo. La decisión no se publicó como ley, solo se mudó la administración, y aun así entre 1561 y 1600 la población se multiplicó. Felipe III la trasladó a Valladolid en 1601 y volvió en 1606 tras pagar Madrid una compensación. Desde entonces la capital no se ha movido.",
   "fuente": "Archivo Histórico Nacional (España), documentación de la Corte; INE (España), Padrón municipal 2023",
   "fundacion": "Mayrit andalusí, hacia 865"
  },
  "8.78,3.75": {
   "texto": "Malabo no la fundó España: la levantaron los británicos en 1827 como Port Clarence, base contra la trata de esclavos en una isla que era española por tratado desde 1778 pero que España casi no ocupaba. Cuando los británicos se fueron, pasó a llamarse Santa Isabel y fue capital de la Guinea Española. Es el caso más claro de la diferencia entre reclamación nominal y control efectivo: España tenía el título desde 1778 y una administración real solo a partir de la segunda mitad del siglo XIX. El país se independizó en 1968 y es el único hispanohablante de África.",
   "fuente": "Instituto Nacional de Estadística de Guinea Ecuatorial, IV Censo General de Población y Viviendas 2015; Tratado de El Pardo de 1778; Archivo General de la Administración (España), fondo África",
   "fundacion": "Fundada en 1827"
  },
  "120.98,14.61": {
   "texto": "Manila fue capital española en Asia durante 333 años y su puerto cerró el círculo del comercio mundial: la plata de México compraba seda china aquí. Miguel López de Legazpi la fundó en 1571 sobre el asentamiento musulmán de Rajá Solimán. Dentro de Intramuros se imprimió en 1593 el primer libro de Filipinas y se escribieron gramáticas del tagalo. En 1762 los británicos la ocuparon dos años. En febrero y marzo de 1945, la batalla entre tropas japonesas y estadounidenses destruyó Intramuros casi por completo y mató a decenas de miles de civiles.",
   "fuente": "Philippine Statistics Authority, 2020 Census of Population and Housing; National Historical Commission of the Philippines; Archivo General de Indias, fondo Filipinas",
   "fundacion": "Fundada en 1571"
  },
  "-89.62,20.97": {
   "texto": "Francisco de Montejo el Mozo fundó Mérida en 1542 sobre la ciudad maya de T'hó, y las piedras talladas de sus edificios están en los muros de la catedral. Yucatán tardó casi veinte años en someterse y nunca del todo: en 1847 estalló la Guerra de Castas, que los mayas rebeldes sostuvieron desde Chan Santa Cruz hasta 1901. En 1562, en Maní, fray Diego de Landa quemó los libros mayas que encontró; después escribió la relación que, paradójicamente, permitió a Knorozov empezar a descifrar la escritura maya.",
   "fuente": "INEGI, Censo de Población y Vivienda 2020; Diego de Landa, «Relación de las cosas de Yucatán» (1566), edición del CSIC; INAH, Centro Yucatán",
   "fundacion": "Fundada en 1542"
  },
  "-56.17,-34.86": {
   "texto": "Montevideo nació como respuesta militar: España la fundó en los años 1720 para echar a los portugueses, que se habían establecido enfrente en Colonia del Sacramento. Su bahía era mejor que la de Buenos Aires y pronto fue base de la escuadra española del Atlántico Sur. Después, la Banda Oriental quedó en medio: entre 1843 y 1851 la ciudad vivió un sitio de nueve años en la guerra civil, con defensores extranjeros entre ellos Giuseppe Garibaldi. De ahí salió un país tapón entre Argentina y Brasil, reconocido en 1828.",
   "fuente": "INE (Uruguay), Censo 2011 y Censo 2023; Archivo General de la Nación (Uruguay); Museo Histórico Nacional del Uruguay",
   "fundacion": "proceso de fundación entre 1724 y 1730"
  },
  "-79.53,8.97": {
   "texto": "Por el istmo cruzaba a lomo de mula la plata del Perú camino de España, y eso convirtió a Panamá en objetivo. En 1671 Henry Morgan llegó con cerca de 1.400 hombres, cruzó la selva y la ciudad quedó destruida por el fuego; los vecinos la reconstruyeron en 1673 en una península más defendible, la que hoy es el Casco Antiguo. Panamá Viejo quedó en ruinas y se puede visitar. Dos siglos después el istmo volvió a ser paso obligado: el canal se abrió en 1914 y Panamá no lo controló del todo hasta 1999.",
   "fuente": "INEC (Panamá), Censo de Población y Vivienda 2023; UNESCO, expediente 790 (Sitio arqueológico de Panamá Viejo y Casco Antiguo, 1997 y 2003); Autoridad del Canal de Panamá",
   "fundacion": "1519 y refundada en 1673"
  },
  "-76.61,2.42": {
   "texto": "Popayán es una ciudad pequeña que dio once presidentes de Colombia, y de ella salió Francisco José de Caldas, el sabio que midió la altura con la temperatura de ebullición del agua y a quien fusilaron en Bogotá en 1816 pese a pedir tiempo para terminar sus trabajos. El Jueves Santo de 1983 un terremoto derribó la catedral y buena parte del centro durante la Semana Santa; la ciudad se reconstruyó piedra por piedra con el mismo trazado, y por eso hoy se sigue viendo blanca y colonial.",
   "fuente": "DANE, Censo Nacional de Población y Vivienda 2018; Servicio Geológico Colombiano, informe del sismo de Popayán de 1983; Banco de la República, Biblioteca Luis Ángel Arango, fondo Caldas",
   "fundacion": "Fundada en 1537"
  },
  "-65.75,-19.57": {
   "texto": "A 4.000 metros de altura, por una montaña de plata, Potosí llegó a ser una de las ciudades más grandes del mundo y dio la moneda que se usaba en China: el real de ocho. Desde 1573 el virrey Toledo organizó la mita, un turno de trabajo forzoso que obligaba a las comunidades indígenas a enviar hombres a la mina y al azogue de Huancavelica; muchos no volvieron. De aquí viene «vale un potosí». Cuando la plata bajó, la ciudad se vació: hoy el Cerro Rico está tan perforado que su cumbre se hunde.",
   "fuente": "INE (Bolivia), Censo Nacional de Población y Vivienda 2012; UNESCO, expediente 420 (Ciudad de Potosí, 1987); Archivo y Biblioteca Nacionales de Bolivia, fondo Casa de la Moneda",
   "fundacion": "Fundada en 1545"
  },
  "-98.20,19.05": {
   "texto": "Puebla se fundó sin repartir indígenas entre encomenderos: era una ciudad de colonos españoles que debían trabajar la tierra ellos mismos, un experimento de la Audiencia para frenar el poder de los conquistadores. Salió bien y se volvió la segunda ciudad del virreinato, con talleres de loza de Talavera y la mayor producción de harina. El 5 de mayo de 1862 el ejército mexicano de Ignacio Zaragoza derrotó aquí a las tropas francesas, mucho mejor armadas; un año después los franceses volvieron y tomaron la ciudad tras dos meses de sitio.",
   "fuente": "INEGI, Censo de Población y Vivienda 2020; UNESCO, expediente 416 (Centro histórico de Puebla, 1987); INAH, archivo histórico",
   "fundacion": "Fundada en 1531"
  },
  "-78.50,-0.21": {
   "texto": "Quito no se fundó en un terreno vacío: era un centro inca importante y el general Rumiñahui la incendió en 1534 antes de que llegaran los españoles, para no entregarla. Sebastián de Benalcázar levantó la ciudad española sobre esas ruinas el 6 de diciembre de 1534. Dos siglos después, en 1736, llegó aquí la Misión Geodésica francesa de La Condamine con los oficiales españoles Jorge Juan y Antonio de Ulloa: midieron un arco de meridiano en el ecuador para saber la forma de la Tierra. Tardaron casi diez años.",
   "fuente": "INEC (Ecuador), Censo de Población y Vivienda 2022; UNESCO, expediente 2 (Ciudad de Quito, 1978); Archivo Nacional del Ecuador",
   "fundacion": "asentamiento inca y preinca, refundada en 1534"
  },
  "-5.67,40.97": {
   "texto": "En 1550 Carlos V hizo algo insólito: paró las conquistas y mandó discutir si eran legítimas. En Valladolid, pero con los argumentos nacidos en las cátedras de Salamanca, Bartolomé de las Casas sostuvo que los indígenas eran súbditos libres; Juan Ginés de Sepúlveda, que la guerra estaba justificada. Antes, en 1539, el dominico Francisco de Vitoria había enseñado allí que el Papa no podía regalar tierras habitadas y que ningún título bastaba por sí solo. De esas clases salió el derecho internacional moderno.",
   "fuente": "Universidad de Salamanca, Archivo Histórico; Francisco de Vitoria, «Relectio de Indis» (1539), edición del CSIC; INE (España), Padrón municipal 2023",
   "fundacion": "universidad en 1218"
  },
  "-81.31,29.89": {
   "texto": "Es la ciudad de origen europeo habitada sin interrupción más antigua del territorio continental de Estados Unidos, y nació de una operación militar: Pedro Menéndez de Avilés la fundó en 1565 para destruir la colonia francesa protestante de Fort Caroline, y ejecutó a los prisioneros en un lugar que todavía se llama Matanzas. Francis Drake la quemó en 1586. En 1738 el gobernador español dio libertad a los esclavos huidos de Carolina que se hicieran católicos: así se formó Fort Mose, el primer asentamiento de negros libres documentado en lo que hoy es Estados Unidos.",
   "fuente": "U.S. Census Bureau, 2020 Census; National Park Service, Castillo de San Marcos National Monument; Florida Division of Historical Resources, Fort Mose Historic State Park",
   "fundacion": "Fundada en 1565"
  },
  "-98.51,29.49": {
   "texto": "San Antonio empezó en 1718 con una misión franciscana y un presidio, y en 1731 llegaron quince familias canarias enviadas por la Corona para poblarla: sus apellidos siguen en la ciudad. La misión de San Antonio de Valero se secularizó y se convirtió en cuartel; en 1836, durante la rebelión de Texas contra México, allí se libró el sitio de El Álamo, trece días que acabaron con casi todos los defensores y dieron a Texas su mito fundador. Las otras cuatro misiones del río siguen en uso como parroquias.",
   "fuente": "U.S. Census Bureau, 2020 Census; UNESCO, expediente 1466 (Misiones de San Antonio, 2015); Texas State Historical Association, Handbook of Texas",
   "fundacion": "Fundada en 1718"
  },
  "-66.13,18.44": {
   "texto": "San Juan era la llave del Caribe y lo aguantó casi todo. En 1595 Francis Drake entró en la bahía y fue repelido; en 1598 el conde de Cumberland tomó la ciudad por tierra y la abandonó meses después, diezmado por la disentería; en 1625 los holandeses de Boudewijn Hendricksz la quemaron pero no pudieron con el Morro; en 1797 Abercromby se retiró con 7.000 hombres. Cayó en 1898, no por asalto, sino por tratado: España la cedió a Estados Unidos en París. Sigue siendo territorio no incorporado.",
   "fuente": "U.S. Census Bureau, 2020 Census (Puerto Rico); UNESCO, expediente 266 (La Fortaleza y sitio histórico nacional de San Juan, 1983); Tratado de París de 1898",
   "fundacion": "Fundada en 1521"
  },
  "-89.20,13.71": {
   "texto": "La ciudad ha sido reconstruida tantas veces que se la llamó «el valle de las hamacas». El terremoto del 10 de octubre de 1986 derribó edificios del centro y del Hospital Bloom en plena guerra civil, y el del 13 de enero de 2001 volvió a golpear el área metropolitana. Aquí, el 24 de marzo de 1980, un francotirador mató al arzobispo Óscar Arnulfo Romero mientras oficiaba misa en la capilla del hospital La Divina Providencia, un día después de pedir por radio a los soldados que desobedecieran la orden de matar.",
   "fuente": "DIGESTYC (El Salvador), VI Censo de Población y V de Vivienda 2007; Comisión de la Verdad para El Salvador (ONU), «De la locura a la esperanza» (1993)",
   "fundacion": "Fundada en 1525"
  },
  "-105.94,35.69": {
   "texto": "En 1680 los pueblos del norte de Nuevo México, coordinados por el líder tewa Popé, expulsaron a los españoles de Santa Fe tras un sitio y mataron a cientos de colonos; los sobrevivientes huyeron hasta El Paso del Norte. Los pueblos gobernaron doce años, el periodo más largo en que una rebelión indígena recuperó su territorio en Norteamérica, y España no volvió hasta 1692. Santa Fe fue capital española, luego mexicana y desde 1846 estadounidense, y sigue siendo capital de Nuevo México: la sede de gobierno más antigua del país.",
   "fuente": "U.S. Census Bureau, 2020 Census; National Park Service, Pecos National Historical Park (Pueblo Revolt); New Mexico Office of the State Historian",
   "fundacion": "Fundada en 1610"
  },
  "-70.67,-33.45": {
   "texto": "Seis meses después de fundarla, mientras Pedro de Valdivia estaba fuera, los picunches de Michimalonco atacaron y quemaron Santiago; según las crónicas, Inés de Suárez organizó la defensa. La ciudad se reconstruyó y Valdivia murió en 1553 a manos de los mapuches, que detuvieron el avance español en el río Biobío durante más de dos siglos: la llamada Guerra de Arauco. Esa frontera es la razón de que Chile colonial fuera pobre y militar. Santiago quedó encajonada entre la cordillera y la costa, con terremotos en 1647, 1730 y 1906.",
   "fuente": "INE (Chile), Censo de Población y Vivienda 2017; Archivo Nacional de Chile, actas del cabildo de Santiago; Pedro Mariño de Lobera, «Crónica del Reino de Chile» (siglo XVI)",
   "fundacion": "Fundada en 1541"
  },
  "-8.54,42.88": {
   "texto": "Hacia el año 820 un obispo anunció que había encontrado la tumba del apóstol Santiago en un bosque gallego. Sobre ese hallazgo se levantó la ciudad y la ruta que durante la Edad Media trajo a cientos de miles de peregrinos desde Francia, Alemania e Inglaterra. En 997 Almanzor saqueó Compostela y se llevó las campanas a Córdoba; respetó el sepulcro. El Códice Calixtino, hacia 1140, incluye la primera guía de viaje de Europa, con avisos sobre posadas, ríos peligrosos y barqueros tramposos.",
   "fuente": "Oficina de Acogida al Peregrino de Santiago, estadísticas 2023; Catedral de Santiago, Archivo, Códice Calixtino; INE (España), Padrón municipal 2023",
   "fundacion": "siglo IX"
  },
  "-75.82,20.02": {
   "texto": "El 3 de julio de 1898, frente a esta bahía, la escuadra española del almirante Cervera salió a pelear sabiendo que perdía: tenía orden de no quedar atrapada en el puerto. En unas horas la flota estadounidense la destruyó y con ella acabó el imperio español en América y en Asia. Días antes, en la loma de San Juan, habían combatido los Rough Riders de Theodore Roosevelt. El 10 de diciembre se firmó el Tratado de París: Cuba quedó bajo ocupación estadounidense, y Puerto Rico, Guam y Filipinas pasaron a Estados Unidos.",
   "fuente": "ONEI (Cuba), Anuario Estadístico de Cuba 2022; Tratado de París de 1898, texto oficial (Gaceta de Madrid); U.S. Naval History and Heritage Command",
   "fundacion": "Fundada en 1515"
  },
  "-69.90,18.47": {
   "texto": "Aquí empezó todo lo demás: la primera catedral, la primera universidad y la primera Audiencia de América, y desde aquí salieron las expediciones a Cuba, México y el Perú. También el primer juicio al sistema: el 21 de diciembre de 1511, en una iglesia de la ciudad, el dominico Antonio de Montesinos preguntó a los encomenderos con qué derecho tenían a los indios en servidumbre. El sermón llegó al rey Fernando y produjo las Leyes de Burgos de 1512, el primer intento de regular el trato a los indígenas.",
   "fuente": "ONE (República Dominicana), X Censo Nacional de Población y Vivienda 2022; UNESCO, expediente 526 (Ciudad colonial de Santo Domingo, 1990); Leyes de Burgos de 1512, Archivo General de Indias",
   "fundacion": "1496, trasladada en 1502"
  },
  "-5.98,37.41": {
   "texto": "Durante casi dos siglos ninguna nave podía ir a América sin pasar por una oficina sevillana. La Casa de la Contratación, creada por orden de los Reyes Católicos en 1503, registraba cargamentos, examinaba pilotos y guardaba el padrón real de los mapas. Allí se tomó declaración a los dieciocho supervivientes que volvieron con Elcano el 8 de septiembre de 1522; Magallanes no estaba entre ellos, había muerto en Mactán el año anterior. El monopolio terminó por un motivo físico: el Guadalquivir se fue cegando y los galeones ya no podían subir el río. En 1717 la Corona trasladó el control a Cádiz, aguas abiertas.",
   "fuente": "Archivo General de Indias, fondo Casa de la Contratación; INE (España), Padrón municipal 2023",
   "fundacion": "Hispalis romana, siglo II a. C."
  },
  "-65.26,-19.04": {
   "texto": "Se llamó Chuquisaca, Charcas y La Plata antes de llamarse Sucre, y fue la cabeza jurídica de media Sudamérica: su Audiencia y su universidad, abierta en 1624, formaron a los abogados que después escribieron las independencias. El 25 de mayo de 1809 hubo aquí un levantamiento contra las autoridades coloniales, anterior a los de Caracas y Buenos Aires. Sigue siendo la capital constitucional de Bolivia, aunque el gobierno y el congreso se fueron a La Paz después de la guerra civil de 1898-1899, y el pleito no se ha cerrado.",
   "fuente": "INE (Bolivia), Censo Nacional de Población y Vivienda 2012; UNESCO, expediente 566 (Ciudad histórica de Sucre, 1991); Archivo y Biblioteca Nacionales de Bolivia",
   "fundacion": "1538-1540"
  },
  "-87.22,14.10": {
   "texto": "Nació como real de minas de plata en un valle estrecho, y esa geografía decide su historia: cada temporada de lluvias el río Choluteca pone a prueba a la ciudad. En 1998 el huracán Mitch desbordó el río, arrasó barrios enteros del centro y dejó al país con pérdidas equivalentes a buena parte de su producto anual. Fue capital solo desde 1880, cuando Soto trasladó el gobierno desde Comayagua, y entre 1824 y 1880 la capitalidad llegó a alternar entre las dos ciudades por ley.",
   "fuente": "INE (Honduras), Censo 2013; CEPAL, «Honduras: evaluación de los daños ocasionados por el huracán Mitch» (1999)",
   "fundacion": "Fundada en 1578"
  },
  "-4.02,39.87": {
   "texto": "En el siglo XII, en una ciudad recién tomada a los musulmanes, equipos mixtos de cristianos, judíos y mozárabes tradujeron al latín la ciencia griega y árabe que Europa no conocía: Ptolomeo, Al-Juarismi, Avicena. Gerardo de Cremona llegó desde Italia solo para eso y tradujo unas setenta obras. El arzobispo Raimundo y después Alfonso X impulsaron el trabajo; con Alfonso X se tradujo al castellano, no al latín, y esa decisión hizo del castellano una lengua de ciencia. Buena parte de lo que Europa leyó en 1200 pasó por aquí.",
   "fuente": "UNESCO, expediente 379 (Ciudad histórica de Toledo, 1986); Real Academia de la Historia, Diccionario Biográfico Electrónico, entrada «Gerardo de Cremona»; INE (España), Padrón municipal 2023",
   "fundacion": "Toletum romana, conquistada en 192 a. C."
  },
  "-96.16,19.18": {
   "texto": "Por este puerto entró y salió casi todo lo que unió a España con Nueva España durante tres siglos: la plata hacia Sevilla, los libros, los caballos y la viruela. Cortés fundó aquí la Villa Rica de la Vera Cruz en 1519 y usó un truco legal: al constituir un cabildo dejaba de depender del gobernador de Cuba. Para que nadie volviera, inutilizó sus naves. El fuerte de San Juan de Ulúa, en el islote de enfrente, fue lo último que España entregó de México: su guarnición se rindió en 1825, cuatro años después de la independencia.",
   "fuente": "INEGI, Censo de Población y Vivienda 2020; Archivo General de la Nación (México), fondo Marina; INAH, Fuerte de San Juan de Ulúa",
   "fundacion": "Fundada en 1519"
  }
 },
 "causas": {
  "malvinas": {
   "titulo": "Malvinas: en disputa, administradas por el Reino Unido desde 1833",
   "texto": "El Reino Unido administra las islas desde el 3 de enero de 1833 —control interrumpido solo entre el 2 de abril y el 14 de junio de 1982— como Territorio Británico de Ultramar. Argentina reclama la soberanía y considera el acto de 1833 una ocupación por la fuerza. El Reino Unido invoca la autodeterminación de los isleños. La Asamblea General reconoció la disputa en la resolución 2065 (XX), del 16 de diciembre de 1965, e invitó a negociar; la 31/49, del 1 de diciembre de 1976, pidió no introducir modificaciones unilaterales. Ninguna resolución atribuye la soberanía a ninguna de las dos partes. Siguen en la lista de territorios no autónomos del Comité de Descolonización (C-24).",
   "fuente": "Asamblea General de la ONU, resoluciones 2065 (XX) de 1965, 3160 (XXVIII) de 1973 y 31/49 de 1976; Consejo de Seguridad de la ONU, resolución 502 (1982); Comité Especial de Descolonización (C-24), lista de territorios no autónomos, sesión de 2025 (https://www.un.org/dppa/decolonization/es/nsgt y press.un.org/en/2025/ga12739.doc.htm); Falkland Islands Government, Census 2021 Full Report, publicado en 2022 (https://www.falklands.gov.fk/policy/downloads); resultado del referéndum de 2013 según el recuento oficial difundido por el gobierno de las islas y reproducido por Britannica y France 24 (2013)."
  },
  "mar-argentino": {
   "titulo": "El mar se llama Atlántico Sur: «mar de Malvinas» no existe en cartografía",
   "texto": "«Mar de Malvinas» no es un topónimo cartográfico. La Organización Hidrográfica Internacional, en «Límites de océanos y mares» (publicación S-23, 3.ª edición, 1953), llama a esa masa de agua océano Atlántico Sur y no reconoce ningún mar con ese nombre. «Mar Argentino» es la denominación que el Instituto Geográfico Nacional argentino da a la plataforma frente a sus costas: válida en Argentina, no internacional. Rótulo correcto: «océano Atlántico Sur». Alrededor de las islas se administran dos zonas de conservación pesquera, la FICZ (1986) y la FOCZ (1990), que Argentina no reconoce. El agua vale dinero por el calamar y por el petróleo de Sea Lion.",
   "fuente": "Organización Hidrográfica Internacional, Limits of Oceans and Seas, publicación especial S-23, 3.ª ed., 1953; Instituto Geográfico Nacional de Argentina (ign.gob.ar), mapa bicontinental y fascículos «Malvinas, Antártida y Atlántico Sur»; Falkland Islands Government, National Accounts 2013-2023 (publicadas en 2024) y Fisheries Department; nota de prensa del Gobierno de las islas sobre la FID de Sea Lion (gov.fk, diciembre de 2025) y comunicados de Rockhopper Exploration y Navitas Petroleum del 10 de diciembre de 2025; informe NSAI de octubre de 2024; Ley argentina 26.659 (infoleg.gob.ar). Las cifras de licencias (2022) y de captura de Loligo (2023) proceden de Eurofish y MercoPress citando al gobierno isleño, no de un documento oficial consultado."
  },
  "georgias": {
   "titulo": "Georgias del Sur y Sandwich del Sur: otro territorio, otro expediente",
   "texto": "Son un Territorio Británico de Ultramar propio desde el 3 de octubre de 1985; antes eran Dependencias de las Malvinas. Se cuentan aparte por tres razones verificables: administración separada, ninguna población permanente —solo personal científico y oficial rotativo— y, por eso, no figuran en la lista de 17 territorios no autónomos de la ONU, donde sí están las Malvinas. Argentina las reclama desde 1927 (Georgias) y 1948 (Sandwich) y las integra en la provincia de Tierra del Fuego. Quedan al norte del paralelo 60° Sur, así que el Tratado Antártico no las cubre: su disputa no está congelada por ese tratado.",
   "fuente": "Government of South Georgia & the South Sandwich Islands, «About SGSSI» (gov.gs); separación del territorio por orden constitucional británica de 1985; Comité Especial de Descolonización de la ONU, lista de territorios no autónomos de 2025, donde el territorio NO aparece; superficies de zona de 200 millas según Sea Around Us (Universidad de Columbia Británica), derivadas de la Maritime Boundaries Geodatabase de VLIZ Marine Regions. La superficie del grupo Sandwich del Sur y el tamaño del área marina protegida provienen de fuentes secundarias."
  },
  "antartida": {
   "titulo": "El Tratado Antártico congela todo: nadie puede prometer la Antártida",
   "texto": "Firmado en Washington el 1 de diciembre de 1959 por doce Estados —entre ellos Argentina, Chile y el Reino Unido— y en vigor desde el 23 de junio de 1961. Su artículo IV congela las reclamaciones: ningún acto posterior sirve para afirmar, apoyar ni negar soberanía, y «no se harán nuevas reclamaciones de soberanía territorial en la Antártida, ni se ampliarán las reclamaciones anteriormente hechas valer» mientras el tratado esté vigente. No tiene fecha de caducidad. Consecuencia política directa: Argentina y Chile firmaron ese tratado y lo siguen aplicando, así que ningún movimiento puede prometer «recuperar» ni «quedarse» con la Antártida sin romper un tratado de su propio país.",
   "fuente": "Secretaría del Tratado Antártico (ats.aq): texto del Tratado Antártico de 1959 (ats.aq/e/antarctictreaty.html) y del Protocolo al Tratado Antártico sobre Protección del Medio Ambiente, Protocolo de Madrid de 1991 (ats.aq/e/protocol.html); Australian Antarctic Division, «The Madrid Protocol» (antarctica.gov.au), que advierte expresamente que la «prohibición de 50 años» de minería es un malentendido extendido; Departamento de Estado de EE. UU., depositario del tratado, actualización de 2024 sobre número de Partes."
  }
 },
 "maritimo": {
  "franjas": {
   "titulo": "Las cuatro franjas del mar: cuánto mide cada una y qué derechos da",
   "texto": "La Convención de las Naciones Unidas sobre el Derecho del Mar (CONVEMAR, abierta a firma en Montego Bay el 10 de diciembre de 1982, en vigor desde el 16 de noviembre de 1994) define cuatro franjas, todas medidas desde las líneas de base, no desde la costa visible. Mar territorial: hasta 12 millas náuticas, soberanía plena salvo el paso inocente. Zona contigua: hasta 24 millas, solo control aduanero, fiscal, migratorio y sanitario. Zona económica exclusiva: hasta 200 millas, derechos sobre los recursos, no soberanía. Plataforma continental: el fondo marino, hasta 200 millas, o hasta 350 si el margen continental llega más lejos.",
   "fuente": "Naciones Unidas, Convención de las Naciones Unidas sobre el Derecho del Mar (CONVEMAR), 1982, artículos 2, 3, 5, 7, 17, 33, 55-58, 76, 77 y 303.2. Texto oficial en español: https://www.un.org/depts/los/convention_agreements/texts/unclos/convemar_es.pdf"
  },
  "gigantes": {
   "titulo": "Tres islas que valen más mar que todo su país",
   "texto": "Tres islas lejanas pesan más que el territorio de sus países. Chile: la zona económica exclusiva suma unos 3.681.989 km², y solo Isla de Pascua y Salas y Gómez aportan unos 720.412 km², frente a 164 km² de tierra. Ecuador: unos 1.077.231 km² de zona económica exclusiva contra 283.561 km² de territorio, casi cuatro veces más mar que tierra, y casi todo ese mar lo genera Galápagos. España: unos 1.039.233 km², de los que Canarias aporta más del sesenta por ciento con 7.447 km² de islas. La geometría manda: una isla aislada genera hasta 431.000 km².",
   "fuente": "Totales de ZEE: Flanders Marine Institute, «Maritime Boundaries Geodatabase: Maritime Boundaries and Exclusive Economic Zones (200NM)», versión 12, 2023 (marineregions.org), que es la base de las cifras más citadas; para Chile, Biblioteca del Congreso Nacional de Chile, «Espacios marítimos de Chile: legislación, declaraciones oficiales y superficies» (bcn.cl). Superficies terrestres: Instituto Nacional de Estadística de España; Instituto Geográfico Militar e INE de Chile; Instituto Nacional de Estadística y Censos del Ecuador. Reserva Marina de Galápagos (142.759 km², 2022): Ministerio del Ambiente, Agua y Transición Ecológica del Ecuador. Base jurídica española: Ley 15/1978, de 20 de febrero, sobre zona económica (Atlántico y Canarias); Ley 44/2010, de 30 de diciembre, de aguas canarias; Real Decreto 236/2013, de 5 de abril (ZEE en el Mediterráneo noroccidental). La geometría de 431.000 km² es cálculo propio sobre 370,4 km de radio."
  },
  "solapamientos": {
   "titulo": "Donde el mar hispano choca consigo mismo",
   "texto": "El Caribe y el Pacífico hispanos están llenos de zonas que se superponen, porque donde dos costas distan menos de 400 millas náuticas ninguna de las dos puede llegar a 200. El caso mayor es Nicaragua contra Colombia: la Corte Internacional de Justicia falló el 19 de noviembre de 2012, dio a Colombia las islas y cayos pero trasladó a Nicaragua una gran franja de zona económica exclusiva al este del meridiano 82. Colombia no lo ha aplicado y denunció el Pacto de Bogotá ocho días después. Siguen sin delimitar el golfo de Venezuela y la plataforma al sur del cabo de Hornos.",
   "fuente": "Corte Internacional de Justicia (icj-cij.org): «Controversia territorial y marítima (Nicaragua c. Colombia)», fallo de 19 de noviembre de 2012; «Presuntas violaciones de derechos soberanos y espacios marítimos en el mar Caribe (Nicaragua c. Colombia)», fallo de 21 de abril de 2022; «Cuestión de la delimitación de la plataforma continental más allá de 200 millas marinas desde la costa de Nicaragua (Nicaragua c. Colombia)», fallo de 13 de julio de 2023; «Controversia marítima (Perú c. Chile)», fallo de 27 de enero de 2014; «Controversia sobre fronteras terrestres, insulares y marítimas (El Salvador/Honduras, Nicaragua interviniente)», fallo de 11 de septiembre de 1992. Traducciones oficiales del fallo de 2022 y del resumen de 2023 publicadas por la Cancillería de Colombia (cancilleria.gov.co). Golfo de Venezuela: Sociedad Geográfica de Colombia, «Fronteras marítimas y oceánicas: diferendo limítrofe con Venezuela». Argentina-Chile: Decreto Supremo 95 de Chile (23-ago-2021) y comunicado del Ministerio de Relaciones Exteriores de Argentina (ago-2021)."
  },
  "convemar": {
   "titulo": "Quién no ha ratificado la Convención del Mar",
   "texto": "Cuatro Estados hispanohablantes no son parte de la CONVEMAR: Venezuela, que votó en contra de su adopción en 1982 y nunca la firmó; Perú, que nunca la firmó y mantiene en su Constitución un «dominio marítimo» de 200 millas; Colombia, que la firmó el 10 de diciembre de 1982 y nunca la ratificó; y El Salvador, que la firmó el 5 de diciembre de 1984 y tampoco la ratificó. Estados Unidos tampoco es parte: firmó el Acuerdo de 1994 sobre la Parte XI, pero el Senado nunca dio su consentimiento. Ecuador fue el último hispanohablante en adherirse, el 24 de septiembre de 2012.",
   "fuente": "Naciones Unidas, División de Asuntos Oceánicos y del Derecho del Mar (DOALOS), «Chronological lists of ratifications of, accessions and successions to the Convention and the related Agreements», consultado el 3 de octubre de 2026: https://www.un.org/depts/los/reference_files/chronological_lists_of_ratifications.htm — y Colección de Tratados de las Naciones Unidas, capítulo XXI.6, estado de firmas y ratificaciones: https://treaties.un.org"
  }
 },
 "rotuloMar": "Franja aproximada: 200 millas nauticas, 370 km de mar con derechos exclusivos sobre pesca, petroleo y fondo marino. Son derechos economicos, no soberania.",
 "sefardi": {
  "que-es": {
   "titulo": "Qué es el ladino (judeoespañol)",
   "texto": "El judeoespañol, llamado popularmente ladino, es la lengua que los judíos expulsados de Castilla y Aragón en 1492 llevaron al Imperio otomano, los Balcanes y el norte de África. Su base es el castellano de finales del siglo XV, con aportes de aragonés, leonés y portugués, y préstamos posteriores del hebreo, turco, griego, italiano y francés. Entre especialistas, ladino designa en rigor la lengua calco de las traducciones bíblicas; la hablada se llama judeoespañol, djudezmo o espanyol, y haquetía en el norte de Marruecos. Se escribió siglos en alfabeto hebreo (letra rashí y cursiva solitreo), y también en griego, cirílico y árabe; hoy domina el latino. No es castellano medieval congelado: evolucionó quinientos años por su cuenta.",
   "fuente": "CSIC, proyecto Sefardiweb (CCHS-CSIC), «El judeoespañol o ladino» (http://www.proyectos.cchs.csic.es/sefardiweb/node/10); UNESCO, «Atlas de las lenguas del mundo en peligro», 2.ª ed., 2010; RAE/ASALE, notas institucionales sobre el judeoespañol, 2018-2019 (https://www.asale.org/noticia/se-acuerda-la-creacion-de-la-academia-nacional-del-judeoespanol-en-israel-0); Wikipedia-EN «Judaeo-Spanish» (alfabetos), consultada el 3-oct-2026."
  },
  "cuantos": {
   "titulo": "Cuántos lo hablan y en qué peligro está",
   "texto": "No hay un número fiable. Ethnologue daba 51.000 hablantes nativos en el mundo en su edición de 2018; ediciones y reseñas posteriores citan hasta 133.000, de ellos 125.000 en Israel. La horquilla honesta es 50.000-133.000; el tope de 400.000 que circula no tiene fuente localizable. Contarlos es difícil: ningún censo estatal pregunta por el judeoespañol, casi todos los hablantes son bilingües y mayores, y las cuentas mezclan a quien lo habla con quien lo entiende de oído. La UNESCO, en su Atlas de las lenguas del mundo en peligro (2.ª edición, 2010), lo clasifica como seriamente en peligro, cuarto de cinco niveles: lo hablan los abuelos y la generación de los padres lo entiende pero no lo transmite.",
   "fuente": "Ethnologue, ed. 2018, cifra recogida en Wikipedia-EN «Judaeo-Spanish» (https://en.wikipedia.org/wiki/Judaeo-Spanish); UNESCO, «Atlas de las lenguas del mundo en peligro», 2.ª ed., 2010 (https://unesdoc.unesco.org/ark:/48223/pf0000192416); El Debate, 2-may-2023, «El ladino lucha por no desaparecer con poco más de 130.000 hablantes en el mundo»; reportajes sobre Turquía y El Amaneser recogidos por eSefarad (https://esefarad.com)."
  },
  "donde": {
   "titulo": "Dónde vive hoy el mundo sefardí",
   "texto": "La comunidad vive repartida, y hay que decir qué se cuenta: estas cifras son de población judía total por país, no de sefardíes ni de hablantes de ladino. Con datos a 2024 recopilados por la Jewish Virtual Library (de DellaPergola y Sheskin-Dashefsky): Israel 7.153.000; Estados Unidos 6.300.000; Francia 438.500; Argentina 170.000; México 41.000; Turquía 15.000; Panamá 10.000; Grecia 4.000; Bulgaria 2.000. Marruecos no figura en esa tabla. En Turquía casi toda la comunidad es sefardí y los lingüistas estiman unos 8.000 hablantes de ladino; allí se imprime El Amaneser, único mensual del mundo íntegramente en esa lengua.",
   "fuente": "Jewish Virtual Library, «Vital Statistics: Jewish Population of the World», datos a 9-may-2024, elaborados a partir de Sergio DellaPergola (American Jewish Year Book) y Sheskin-Dashefsky (https://jewishvirtuallibrary.org/jewish-population-of-the-world); datos de Turquía, El Amaneser y Şalom: reportajes recogidos por eSefarad (https://esefarad.com)."
  },
  "ley2015": {
   "titulo": "La ley española de 2015 para sefardíes",
   "texto": "La Ley 12/2015, de 24 de junio, abrió la nacionalidad española a los sefardíes originarios de España sin exigir residencia ni renunciar a otra nacionalidad, pero con dos exámenes del Instituto Cervantes y prueba de vínculo especial con España. El plazo era de tres años y el Consejo de Ministros lo prorrogó en marzo de 2018 hasta el 1 de octubre de 2019. Al cerrarse, el Ministerio de Justicia anunció 132.226 solicitudes, unas 72.000 solo en septiembre de 2019, con México, Venezuela y Colombia a la cabeza. Los datos ministeriales citados en 2026 hablan de 89.078 expedientes, 73.017 concesiones y 7.856 pendientes. Las dos cifras no cuadran.",
   "fuente": "BOE, Ley 12/2015, de 24 de junio (https://www.boe.es/buscar/act.php?id=BOE-A-2015-7045); La Moncloa, acuerdo del Consejo de Ministros de 9-mar-2018 (prórroga del plazo); Ministerio de Justicia, cierre del plazo el 1-oct-2019, recogido por Noticias Jurídicas y France 24 (1-oct-2019); Ministerio de la Presidencia, Justicia y Relaciones con las Cortes, datos citados por Infobae el 15-jul-2026."
  },
  "riesgo": {
   "titulo": "El riesgo de poner a Israel como aliado",
   "texto": "Mala idea, y no por el conflicto: por el coste para este movimiento. Un globo obliga a dibujar fronteras, y las de Israel no están cerradas: Cisjordania, Gaza, Jerusalén Este y el Golán son objeto de resoluciones del Consejo de Seguridad y de la opinión consultiva de la Corte Internacional de Justicia de 19 de julio de 2024. Cualquier línea que se trace será la noticia, y el movimiento pasará a discutirse por Gaza y no por la Hispanidad. Además, 19 de los 20 países de América Latina reconocen el Estado de Palestina y cinco no tienen relaciones con Israel. El ladino no sostiene esa conclusión: es un vínculo con una comunidad, no con un Estado.",
   "fuente": "Corte Internacional de Justicia, opinión consultiva de 19-jul-2024; Consejo de Seguridad de la ONU, resoluciones 478 y 497; BOE, Real Decreto-ley 10/2025, de 23 de septiembre (BOE-A-2025-18831, https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-18831); Euronews y Al Jazeera, convalidación del 8-oct-2025; Bloomberg Línea, 2-may-2024 (rupturas en América Latina); Gobierno de México, 21-mar-2025; Reino de Marruecos y prensa española (El Español, El Independiente, Infobae), 17-jul-2023 (carta de Netanyahu a Mohamed VI); Gobierno de Paraguay, 12-dic-2024; Presidencia de Argentina, 11-jun-2025."
  },
  "alternativa": {
   "titulo": "La alternativa: la diáspora sefardí, no un Estado",
   "texto": "La versión que funciona: marcar en el mapa la diáspora sefardí, no un Estado. Una capa cultural y lingüística con puntos en Estambul, Esmirna, Tesalónica, Sofía, Sarajevo, Jerusalén, Tetuán, París, Seattle, Buenos Aires, Ciudad de México y Panamá, titulada «vínculo cultural, no alianza política». Israel sigue apareciendo —es donde vive el mayor número de hablantes— pero como comunidad, no como aliado, y así el mapa no dibuja ninguna frontera. Conserva lo que el fundador quiere: el ladino contado, los sefardíes reconocidos y documentos duros detrás: la Ley 12/2015, el Decreto-Lei 30-A/2015, la Academia de 2019 y el Atlas de la UNESCO.",
   "fuente": "Red de Juderías de España – Caminos de Sefarad (https://redjuderias.org, notas de la 68.ª Asamblea General, 2025); BOE, Ley 12/2015, de 24 de junio; PGDLisboa, DL n.º 30-A/2015, de 27 de febrero; ASALE/RAE, Academia Nacional del Judeoespañol, 2018-2019; UNESCO, «Atlas de las lenguas del mundo en peligro», 2.ª ed., 2010."
  }
 },
 "lezo": {
  "quien-era": {
   "titulo": "Quién era Blas de Lezo",
   "texto": "Blas de Lezo y Olavarrieta nació en Pasajes de San Pedro, Guipúzcoa, el 3 de febrero de 1689 y fue bautizado el día 9 en la iglesia de San Pedro Mártir. Se formó en Francia y embarcó siendo niño como guardiamarina de la armada francesa. Combatió en Vélez-Málaga (1704), en la defensa de Tolón (1707) y en el sitio de Barcelona (1714). Después mandó la escuadra del Mar del Sur en el Pacífico (1723-1730) y participó en las operaciones de Génova (1731) y Orán (1732). Fue ascendido a teniente general de la Armada el 6 de junio de 1734 y llegó a Cartagena de Indias el 11 de marzo de 1737 como comandante general del apostadero.",
   "fuente": "Fundación Museo Naval / Museo Naval de Madrid, ficha biográfica de Blas de Lezo (https://www.fundacionmuseonaval.com/etblasdelezo.html); Centro Virtual Cervantes, Museo Naval de Madrid, Sala 3, personajes (https://cvc.cervantes.es/actcult/museo_naval/sala3/personajes/personajes_02.htm); Gonzalo M. Quintero Saravia, «Don Blas de Lezo. Biografía de un marino español», Edaf, 2016; Todo a Babor, «Blas de Lezo, su biografía sin mitos ni fantasías» (https://www.todoababor.es/historia/blas-de-lezo-biografia-defensor-cartagena-de-indias/)"
  },
  "las-heridas": {
   "titulo": "Las heridas: qué perdió, dónde y de qué lado",
   "texto": "Tres mutilaciones, todas antes de los 26 años. Pierna izquierda: destrozada por un cañonazo en la batalla de Vélez-Málaga, el 24 de agosto de 1704, a bordo del navío francés Foudroyant; se le amputó por debajo de la rodilla. Ojo izquierdo: reventado por una esquirla en 1707, defendiendo el castillo de Santa Catalina en Tolón. Brazo derecho: una bala de mosquete le inutilizó el antebrazo en el sitio de Barcelona; el brazo NO fue amputado, quedó inerte. El lado del ojo es el izquierdo en todas las fuentes que lo precisan; ninguna fuente seria dice derecho. La fecha del brazo sí discrepa: 1712, 1713 o el 11 de septiembre de 1714.",
   "fuente": "Centro Virtual Cervantes, Museo Naval de Madrid, Sala 3, personajes, da 1712 para el brazo (https://cvc.cervantes.es/actcult/museo_naval/sala3/personajes/personajes_02.htm); Todo a Babor, «Blas de Lezo, su biografía sin mitos ni fantasías», da 1713 y precisa «antebrazo derecho» (https://www.todoababor.es/historia/blas-de-lezo-biografia-defensor-cartagena-de-indias/); Wikipedia en inglés, «Blas de Lezo», con nota de que no hay prueba contemporánea de los apodos, da 1714 (https://en.wikipedia.org/wiki/Blas_de_Lezo); Infobae, 24 de agosto de 2024, sobre los 320 años de Vélez-Málaga y la pierna izquierda (https://www.infobae.com/espana/2024/08/24/a-320-anos-de-la-batalla-de-velez-malaga-el-dia-que-comenzo-la-leyenda-de-blas-de-lezo-a-costa-de-perder-su-pierna-izquierda/)"
  },
  "la-batalla": {
   "titulo": "El asedio de Cartagena de Indias, 1741",
   "texto": "El asedio duró del 13 de marzo al 20 de mayo de 1741. Vernon llevó entre 180 y 196 buques y entre 23.600 y 30.000 hombres; la plaza tenía 6 navíos de línea y unos 3.000 defensores. El mando supremo era del virrey Sebastián de Eslava; Lezo mandaba las fuerzas navales. El asalto fallido al castillo de San Felipe de Barajas, el 20 de abril, decidió la campaña y Vernon se retiró a Jamaica. Sobre las bajas británicas no hay cifra firme: de ese asalto los cronistas ingleses dan de 300 a 600 bajas y las fuentes españolas más de mil muertos. La cifra de 18.000 o 20.000 muertos que circula mezcla muertos, heridos y enfermos.",
   "fuente": "Richard Harding, «Amphibious Warfare in the Eighteenth Century: The British Expedition to the West Indies, 1740-1742», Royal Historical Society / Boydell, 1991; Reed Browning, «The War of the Austrian Succession», 1993; Cesáreo Fernández Duro, «Armada Española», 1902; Fundación Museo Naval (180 buques y 23.600 hombres frente a 6 barcos y 2.800 hombres) (https://www.fundacionmuseonaval.com/etblasdelezo.html); National Maritime Museum, Greenwich, ficha de medalla RMGC-38479, que sitúa el intento desastroso en abril de 1741 (https://www.rmg.co.uk/collections/objects/rmgc-object-38479)"
  },
  "las-medallas-de-vernon": {
   "titulo": "Las medallas de la victoria que no ocurrió",
   "texto": "Existen y se conservan. Comerciantes londinenses acuñaron en 1741 medallas de latón y cobre celebrando la toma de Cartagena antes de saber el resultado: Vernon había despachado a Londres la noticia de haber entrado en la bahía interior, y en Inglaterra se leyó como victoria. En el anverso, Vernon de pie con la espada y «DON BLASS» de rodillas entregándole la suya, con la leyenda «THE SPANISH PRIDE PULLD DOWN BY ADMIRAL VERNON». En el reverso, barcos y fuertes y la leyenda «TRUE BRITISH HEROES TOOK CARTHAGENA», con el exergo «APRIL 1741». El National Maritime Museum de Greenwich conserva ejemplares; uno es de latón y mide 36 milímetros.",
   "fuente": "National Maritime Museum, Greenwich, ficha de objeto RMGC-38479, «Medal commemorating Vernon's attack on Cartagena, 1741» (https://www.rmg.co.uk/collections/objects/rmgc-object-38479) y RMGC-38529 (https://www.rmg.co.uk/collections/objects/rmgc-object-38529); Massachusetts Historical Society, guía de colección «Medals Related to Admiral Edward Vernon's Caribbean Campaign, 1740-1741» (https://www.masshist.org/collection-guides/view/fao0018); John W. Adams, Fernando Chao y Anne E. Bentley, «Medallic Portraits of Admiral Vernon: Medals Sometimes Lie», Kolbe & Fanning, 2010"
  },
  "el-final": {
   "titulo": "Cómo murió y cómo lo trató la corona",
   "texto": "Murió el 7 de septiembre de 1741 en su casa de Cartagena, a los 52 años, de unas calenturas que se declararon tabardillo, es decir tifus. Tras la retirada británica el virrey Eslava ya lo había apartado del mando directo y lo acusó de desobediencia e insubordinación; los informes que llegaron a Madrid repartieron la gloria a Eslava, ascendido a capitán general, y dejaron a Lezo fuera del reparto de honores. El reconocimiento llegó a su familia unos veinte años después, cuando la corona concedió a su hijo el marquesado de Ovieco. Sobre el lugar de su tumba hay dos versiones incompatibles y ninguna está cerrada.",
   "fuente": "Wikipedia en inglés, «Blas de Lezo», que cita la expresión de época sobre el tabardillo y dice que el lugar de su tumba es desconocido (https://en.wikipedia.org/wiki/Blas_de_Lezo); Gonzalo M. Quintero Saravia, «Don Blas de Lezo. Biografía de un marino español», Edaf, 2016, que publica la carta de su hijo Blas Fernando de 1773-1774 sobre el entierro en el convento de los Dominicos; Todo a Babor, «Blas de Lezo, su biografía sin mitos ni fantasías», sobre el conflicto con Eslava y el marquesado en 1762 (https://www.todoababor.es/historia/blas-de-lezo-biografia-defensor-cartagena-de-indias/); Zenda, «La última batalla de Blas de Lezo» (https://www.zendalibros.com/la-ultima-batalla-blas-lezo/)"
  },
  "la-leyenda-vs-el-dato": {
   "titulo": "La leyenda frente al dato",
   "texto": "Cuatro cosas que se repiten de Lezo y no se sostienen. Primera: la frase «todo español debe mear mirando a Inglaterra» no aparece en ningún documento; su biógrafo Quintero Saravia la considera apócrifa, igual que la despedida «morí como un buen vasco». Segunda: no hay prueba contemporánea de que en vida se le llamara «Mediohombre» ni «Patapalo». Tercera: es falso que Inglaterra prohibiera hablar de la derrota; en Londres se publicaron relatos británicos en 1743, aunque el primer ministro Walpole intentara minimizarla por conveniencia política. Cuarta: no fue la mayor flota de desembarco hasta Normandía; la expedición española a Orán de 1732 movilizó entre 500 y 600 buques.",
   "fuente": "Gonzalo M. Quintero Saravia, «Don Blas de Lezo. Biografía de un marino español», Edaf, 2016, recogido en El Español, 11 de julio de 2024 (https://www.elespanol.com/historia/20240711/verdad-famosa-frase-blas-lezo-espanol-debe-mear-mirando-inglaterra/869663178_0.html); Todo a Babor, «Blas de Lezo, su biografía sin mitos ni fantasías», 2023 (https://www.todoababor.es/historia/blas-de-lezo-biografia-defensor-cartagena-de-indias/); Wikipedia en inglés, «Blas de Lezo», sobre la falta de prueba contemporánea de los apodos y sobre el Stanhope (https://en.wikipedia.org/wiki/Blas_de_Lezo)"
  },
  "retrato": {
   "titulo": "Su cara: lo que hay y lo que no hay",
   "texto": "No se conoce ningún retrato pintado del natural. La imagen que todo el mundo usa es el óleo del Museo Naval de Madrid: anónimo, fechado en 1853, copia de un original del siglo XVIII que estaba en manos de sus descendientes y que donó el marqués de Ovieco el 14 de julio de 1853; se restauró en 1992. Es decir, la cara que circula se pintó 112 años después de su muerte. Muestra medio cuerpo en óvalo, ligeramente girado, peluca larga, el ojo izquierdo perdido y entrecerrado, sin parche, y la mano izquierda apoyada en el bastón de general.",
   "fuente": "Centro Virtual Cervantes, Museo Naval de Madrid, Sala 3, personajes: «copia anónima del año 1853 de un original» (https://cvc.cervantes.es/actcult/museo_naval/sala3/personajes/personajes_02.htm); Biblioteca Virtual de Defensa, ficha «Retrato del teniente general de la Armada Blas de Lezo», registro 40977 (https://bibliotecavirtual.defensa.gob.es/BVMDefensa/es/consulta/registro.do?id=40977); Museo Naval de Madrid, exposición «Blas de Lezo, el valor del Mediohombre», 2013-2014"
  }
 }
};
