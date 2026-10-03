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
   "texto": "Isla bajo soberanía española desde 1493; Juan Ponce de León fundó el primer asentamiento en 1508 y San Juan en 1521, la ciudad de fundación europea más antigua bajo bandera estadounidense. España la cedió a Estados Unidos en el Tratado de París de 1898. Hoy es territorio no incorporado: sus habitantes son ciudadanos estadounidenses desde la ley Jones de 1917, pero no votan por el presidente ni tienen representación con voto en el Congreso. El español y el inglés son oficiales desde la ley de 1993.",
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
   "texto": "Móvil fue española entre 1780 y 1813, cuando Bernardo de Gálvez la tomó a los británicos y la integró en la Florida Occidental española. Esa etapa no dejó población hispana continua. La de hoy, 306.966 personas y 6,0% del estado, es migración reciente a la construcción, la avicultura y las plantas de automóviles.",
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
   "ano": "1511",
   "titulo": "1492-1519: las islas, lo único que se pisó",
   "texto": "El 12 de octubre de 1492 la expedición de Colón desembarca en Guanahaní. Durante veintisiete años lo español en América son islas: Santo Domingo, fundada en 1496 y trasladada a su sitio actual en 1502, es la primera ciudad europea permanente del continente; Puerto Rico se ocupa en 1508 y Cuba en 1511. El continente se bordea y se describe, no se gobierna: Balboa ve el Pacífico en 1513 y el asentamiento del Darién (1510) se abandona. Esta época se pinta pequeña a propósito, porque lo fue.",
   "cifras": "1492: desembarco, 12 de octubre; 1496-1502: Santo Domingo; 1508: Puerto Rico; 1511: Cuba; 1513: el Pacífico, 25 de septiembre; 4 territorios pintados.",
   "territorios": [
    "espana",
    "republica-dominicana",
    "cuba",
    "puerto-rico"
   ],
   "fuente": "Archivo General de Indias, Capitulaciones de Santa Fe, 17 de abril de 1492 (pares.cultura.gob.es); Diario del primer viaje en la transcripción de Bartolomé de las Casas."
  },
  {
   "ano": "1543",
   "titulo": "1519-1543: la conquista continental",
   "texto": "En veinticuatro años el mapa pasa de cuatro islas a dos continentes. Tenochtitlan cae el 13 de agosto de 1521 y Cajamarca el 16 de noviembre de 1532. Se fundan Panamá (1519), Santiago de Guatemala (1524), Quito (1534), Lima (1535), Asunción (1537), Bogotá (1538) y Santiago de Chile (1541). Se crean los virreinatos de Nueva España (1535) y del Perú (1542). Costa Rica, Argentina y Uruguay quedan fuera de esta época: todavía no hay poblaciones españolas estables en ellas.",
   "cifras": "1521 y 1532: las dos caídas; 1535 y 1542: los dos primeros virreinatos; 1542: Leyes Nuevas, 20 de noviembre; 17 territorios pintados frente a 4 en la época anterior.",
   "territorios": [
    "espana",
    "mexico",
    "guatemala",
    "honduras",
    "el-salvador",
    "nicaragua",
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
    "paraguay"
   ],
   "fuente": "Recopilación de Leyes de los Reynos de las Indias (1680), libros II y V; actas de fundación conservadas en el Archivo General de Indias."
  },
  {
   "ano": "1571",
   "titulo": "1543-1598: la plata, el Pacífico y el techo del avance",
   "texto": "Potosí (1545) y Zacatecas (1546) convierten la plata americana en la moneda del mundo. Legazpi llega a Cebú en 1565 y Manila se funda el 24 de junio de 1571: el galeón de Manila une Asia y América durante 250 años, desde el tornaviaje de Urdaneta en 1565 hasta el último viaje en 1815. Se cierran los huecos del mapa: Cartago (1563), San Miguel de Tucumán (1565), Buenos Aires de nuevo en 1580. San Agustín de Florida (1565) es la ciudad de ocupación europea continua más antigua de Estados Unidos. En 1598 Curalaba detiene el avance y el Biobío queda como frontera.",
   "cifras": "1545: Potosí; 1565: Manila y San Agustín; 1565-1815: 250 años de galeón, desde el tornaviaje de Urdaneta; 1598: Curalaba, 23 de diciembre; 1503-1660: unas 16.900 toneladas de plata y 185 de oro REGISTRADAS en la Casa de la Contratación (Hamilton, 1929); registradas, no extraídas: el contrabando no se puede cuantificar; 21 territorios.",
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
    "filipinas",
    "estados-unidos-hispano"
   ],
   "fuente": "Earl J. Hamilton, American Treasure and the Price Revolution in Spain, 1501-1650, Harvard University Press, 1934 (plata registrada en la Casa de la Contratación)."
  },
  {
   "ano": "1650",
   "titulo": "1598-1700: el mapa deja de crecer",
   "texto": "Un siglo sin conquistas nuevas y con pérdidas. Portugal se separa el 1 de diciembre de 1640 y con él Brasil; Inglaterra toma Jamaica en 1655; el tercio occidental de La Española pasa a Francia con la paz de Ryswick (1697). Santa Fe de Nuevo México se funda en 1610, pero la rebelión pueblo de 1680 expulsa a los españoles doce años. La población de España baja de unos 8 millones a finales del XVI a unos 7,5 en 1717. El mapa pintado es el mismo de antes: ya no crece.",
   "cifras": "1640: separación de Portugal; 1655: Jamaica; 1697: Ryswick; 1680-1692: rebelión pueblo; ~8 millones (censo de Castilla, 1591, extrapolado) y ~7,5 millones (vecindario de Campoflorido, 1717); 21 territorios.",
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
    "filipinas",
    "estados-unidos-hispano"
   ],
   "fuente": "Instituto Nacional de Estadística, censos históricos: Censo de Castilla de 1591 y Vecindario de Campoflorido de 1717 (ine.es); Tratado de Ryswick, 20 de septiembre de 1697."
  },
  {
   "ano": "1776",
   "titulo": "1700-1788: el siglo borbónico",
   "texto": "Los Borbones reorganizan América: virreinato de Nueva Granada (creado en 1717, suprimido en 1723 y restablecido en 1739) y del Río de la Plata (1776). Montevideo se funda entre 1724 y 1726 y entra al mapa. España recibe Luisiana en 1762 y funda San Diego en 1769. El Reglamento de libre comercio de 1778 habilita trece puertos peninsulares. El censo de Floridablanca (1787) cuenta 10.409.879 habitantes en España. Es también el siglo de las grandes revueltas: Túpac Amaru II en 1780-1781.",
   "cifras": "1717 y 1776: dos virreinatos nuevos; 1726: Montevideo; 1762: Luisiana; 1769: San Diego; 1778: 13 puertos habilitados; 1787: 10.268.110 habitantes en España según el censo de Floridablanca (INE); 22 territorios.",
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
   "fuente": "Instituto Nacional de Estadística, Censo de Floridablanca de 1787 (ine.es); Reglamento y aranceles reales para el comercio libre de España a Indias, 12 de octubre de 1778."
  },
  {
   "ano": "1790",
   "titulo": "1788-1810: la máxima extensión y la grieta",
   "texto": "Hacia 1790 el imperio alcanza su mayor extensión realmente administrada. Lo que lo rompe llega desde Europa, no desde América: en 1795 el Tratado de Basilea cede Santo Domingo a Francia, en 1800 San Ildefonso devuelve Luisiana, y en mayo de 1808 las abdicaciones de Bayona dejan la monarquía sin rey legítimo. De ese vacío nacen las juntas americanas de 1809 y 1810. Las Cortes de Cádiz sientan diputados de América y Filipinas, y la Constitución de 1812 define la Nación como la de los españoles \"de ambos hemisferios\".",
   "cifras": "1795: cesión de Santo Domingo, 22 de julio; 1800: Luisiana a Francia, 1 de octubre; 1808: Dos de Mayo y abdicaciones de Bayona; 1812: Constitución de Cádiz, 19 de marzo, artículo 1; 22 territorios.",
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
   "fuente": "Constitución Política de la Monarquía Española, Cádiz, 19 de marzo de 1812, artículo 1 (Congreso de los Diputados, congreso.es); Tratado de Basilea (1795) y tercer Tratado de San Ildefonso (1800)."
  },
  {
   "ano": "1825",
   "titulo": "1810-1826: las independencias",
   "texto": "En dieciséis años se forman los territorios que hoy son quince Estados. 1810: juntas en Caracas, Buenos Aires y Bogotá, y el grito de Dolores. Después Paraguay (1811), Argentina (1816), Chile (1818), Perú, México y Centroamérica (1821) y Bolivia (1825). Ayacucho, el 9 de diciembre de 1824, decide la guerra; el Callao se rinde el 23 de enero de 1826. Dos faltan a propósito en este mapa: Uruguay no es independiente hasta 1828 y Santo Domingo está ocupado por Haití de 1822 a 1844. España conserva Cuba, Puerto Rico y Filipinas.",
   "cifras": "1810-1826: 16 años; 1824: Ayacucho, 9 de diciembre; 1826: rendición del Callao, 23 de enero; 20 territorios pintados; España pasa de gobernar un continente a tres colonias.",
   "territorios": [
    "espana",
    "mexico",
    "guatemala",
    "honduras",
    "el-salvador",
    "nicaragua",
    "costa-rica",
    "panama",
    "colombia",
    "venezuela",
    "ecuador",
    "peru",
    "bolivia",
    "chile",
    "argentina",
    "paraguay",
    "cuba",
    "puerto-rico",
    "filipinas",
    "estados-unidos-hispano"
   ],
   "fuente": "Actas de independencia nacionales de cada república; tratados de paz y reconocimiento firmados por España desde el de México, 28 de diciembre de 1836, en adelante."
  },
  {
   "ano": "1860",
   "titulo": "1826-1884: repúblicas jóvenes y la pérdida del norte",
   "texto": "Uruguay se independiza en 1828 y Santo Domingo en 1844: el mapa hispanoamericano se completa. Al norte se parte: el Tratado de Guadalupe Hidalgo (2 de febrero de 1848) traspasa a Estados Unidos unos 1.370.000 km², y con Texas (1845) y La Mesilla (1853) México pierde más de la mitad de su territorio. España vuelve dos veces: anexiona Santo Domingo entre 1861 y 1865, y se instala en Fernando Poo desde 1843, germen de Guinea Ecuatorial. Chile y Argentina solo ocupan Araucanía y Patagonia después de 1878.",
   "cifras": "1828: Uruguay; 1844: República Dominicana, 27 de febrero; 1848: 1.370.000 km² cedidos; 1853: La Mesilla, 76.845 km²; 1861-1865: anexión española de Santo Domingo; 1843 y 1858: Fernando Poo; 23 territorios.",
   "territorios": [
    "espana",
    "mexico",
    "guatemala",
    "honduras",
    "el-salvador",
    "nicaragua",
    "costa-rica",
    "panama",
    "colombia",
    "venezuela",
    "ecuador",
    "peru",
    "bolivia",
    "chile",
    "argentina",
    "paraguay",
    "uruguay",
    "republica-dominicana",
    "cuba",
    "puerto-rico",
    "filipinas",
    "guinea-ecuatorial",
    "estados-unidos-hispano"
   ],
   "fuente": "Tratado de Guadalupe Hidalgo, 2 de febrero de 1848 (National Archives de Estados Unidos, archives.gov; Secretaría de Relaciones Exteriores de México); Tratado de La Mesilla, 30 de diciembre de 1853."
  },
  {
   "ano": "1890",
   "titulo": "1884-1898: el último crecimiento, en África",
   "texto": "Es la primera época en que los 24 territorios aparecen a la vez, y lo seguirán estando hasta hoy, aunque por razones distintas: aquí por soberanía española; desde 1898, solo por la lengua. En diciembre de 1884 España declara protectorado la costa de Río de Oro y funda Villa Cisneros, mientras la Conferencia de Berlín reparte África. Pero el Sáhara que se pinta es una línea de costa: el interior no se ocupa hasta 1934. En Guinea, Río Muni se le reconoce a España en 1900 y no se controla del todo hasta 1926. Al mismo tiempo empiezan las guerras que acabarán con todo: Cuba en 1895, Filipinas en 1896.",
   "cifras": "26 de diciembre de 1884: protectorado de Río de Oro; 1884-1885: Conferencia de Berlín; 1900: Tratado de París por Río Muni; 1926 y 1934: ocupación efectiva de Río Muni y del interior sahariano; 24 territorios, el máximo de la serie.",
   "territorios": [
    "espana",
    "mexico",
    "guatemala",
    "honduras",
    "el-salvador",
    "nicaragua",
    "costa-rica",
    "panama",
    "colombia",
    "venezuela",
    "ecuador",
    "peru",
    "bolivia",
    "chile",
    "argentina",
    "paraguay",
    "uruguay",
    "republica-dominicana",
    "cuba",
    "puerto-rico",
    "filipinas",
    "guinea-ecuatorial",
    "sahara-occidental",
    "estados-unidos-hispano"
   ],
   "fuente": "Gaceta de Madrid, real orden de 26 de diciembre de 1884 (protectorado de Río de Oro); Acta General de la Conferencia de Berlín, 26 de febrero de 1885; Tratado hispano-francés de París, 27 de junio de 1900."
  },
  {
   "ano": "1930",
   "titulo": "1898-1968: sin imperio, con idioma",
   "texto": "El Tratado de París, el 10 de diciembre de 1898, cierra el ciclo: España renuncia a Cuba y cede Puerto Rico, Guam y Filipinas por 20 millones de dólares; en 1899 vende a Alemania las Carolinas, las Marianas y los Palaos por 25 millones de pesetas. Cuba es república en 1902, Puerto Rico sigue siendo territorio de Estados Unidos y Filipinas se independiza en 1946. A España le quedan Guinea, el Sáhara, Ifni y el protectorado de Marruecos (1912-1956). El mapa se mantiene pintado porque la lengua se queda donde el Estado se fue.",
   "cifras": "10 de diciembre de 1898: 20 millones de dólares por Filipinas; 12 de febrero de 1899: 25 millones de pesetas por Carolinas, Marianas y Palaos; 1902: Cuba; 1946: Filipinas; 1912-1956: protectorado de Marruecos; 24 territorios.",
   "territorios": [
    "espana",
    "mexico",
    "guatemala",
    "honduras",
    "el-salvador",
    "nicaragua",
    "costa-rica",
    "panama",
    "colombia",
    "venezuela",
    "ecuador",
    "peru",
    "bolivia",
    "chile",
    "argentina",
    "paraguay",
    "uruguay",
    "republica-dominicana",
    "cuba",
    "puerto-rico",
    "filipinas",
    "guinea-ecuatorial",
    "sahara-occidental",
    "estados-unidos-hispano"
   ],
   "fuente": "Tratado de Paz entre España y los Estados Unidos, París, 10 de diciembre de 1898 (Library of Congress, loc.gov); Tratado hispano-alemán, 12 de febrero de 1899."
  },
  {
   "ano": "1975",
   "titulo": "1968-1976: la descolonización africana",
   "texto": "Guinea Ecuatorial se independiza el 12 de octubre de 1968 y es hoy el único Estado africano con el español como lengua oficial. Ifni pasa a Marruecos en 1969. El 16 de octubre de 1975 la Corte Internacional de Justicia dictamina que el Sáhara no tenía vínculos de soberanía con Marruecos ni con Mauritania; el 14 de noviembre España firma los Acuerdos de Madrid y completa su retirada el 26 de febrero de 1976 sin celebrar el referéndum prometido. Naciones Unidas sigue listando el Sáhara Occidental como territorio no autónomo.",
   "cifras": "12 de octubre de 1968: Guinea Ecuatorial; 4 de enero de 1969: Ifni a Marruecos; 16 de octubre de 1975: dictamen de la CIJ; 14 de noviembre de 1975: Acuerdos de Madrid; 26 de febrero de 1976: salida española; censo español del Sáhara de 1974: 73.497 saharauis autóctonos, de 95.019 personas censadas en total. Iba a ser el padrón del referéndum que nunca se celebró, y por eso es el objeto mismo de la disputa.",
   "territorios": [
    "espana",
    "mexico",
    "guatemala",
    "honduras",
    "el-salvador",
    "nicaragua",
    "costa-rica",
    "panama",
    "colombia",
    "venezuela",
    "ecuador",
    "peru",
    "bolivia",
    "chile",
    "argentina",
    "paraguay",
    "uruguay",
    "republica-dominicana",
    "cuba",
    "puerto-rico",
    "filipinas",
    "guinea-ecuatorial",
    "sahara-occidental",
    "estados-unidos-hispano"
   ],
   "fuente": "Corte Internacional de Justicia, opinión consultiva sobre el Sáhara Occidental, 16 de octubre de 1975 (icj-cij.org, caso 61); Naciones Unidas, lista de territorios no autónomos (un.org/dppa/decolonization); Acuerdos Tripartitos de Madrid, 14 de noviembre de 1975."
  },
  {
   "ano": "2026",
   "titulo": "1976-hoy: 24 naciones y territorios, una lengua",
   "texto": "Hoy el mapa no se sostiene en soberanía sino en lengua y población. El Instituto Cervantes cifra en 635.743.000 los usuarios potenciales de español y en 520 millones los hablantes con dominio nativo, la primera vez que esa cifra pasa de quinientos millones; Estados Unidos es el segundo país del mundo por número de hispanohablantes. Dos de los 24 no caben en la misma casilla: en Filipinas el español dejó de ser cooficial en 1987 y en el Sáhara Occidental la lengua de uso es el árabe hassanía. Decirlo forma parte del mapa, no es una nota al pie.",
   "cifras": "635.743.000 hablantes potenciales y 520 millones con dominio nativo (Instituto Cervantes, anuario 2025); 6,2% de la población mundial; 1973: el español deja de ser lengua oficial de Filipinas; desde 1987 figura como lengua de promoción voluntaria; 24 territorios pintados.",
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
   "fuente": "Instituto Cervantes, El español en el mundo. Anuario del Instituto Cervantes 2024 (cvc.cervantes.es/lengua/anuario); U.S. Census Bureau, American Community Survey (census.gov)."
  }
 ],
 "ciudades": {
  "cartagena-de-indias": {
   "fundacion": "Fundada en 1533",
   "retrato": "blas-de-lezo",
   "texto": "Del 13 de marzo al 20 de mayo de 1741, unos 68 dias, la flota mas grande que Inglaterra habia reunido jamas —entre 180 y 190 velas y mas de 25.000 hombres— asedio esta ciudad. Dentro habia unos 3.000 soldados, seis navios y milicias criollas, negros libres y unos 600 arqueros indigenas. Resistieron. Los britanicos reembarcaron derrotados, diezmados por la fiebre amarilla y la disenteria. El mando supremo era del virrey Sebastian de Eslava; su segundo, el teniente general Blas de Lezo, es a quien la memoria se quedo. Entre los oficiales que se marcharon vencidos iba Lawrence Washington, hermano mayor de George.",
   "fuente": "Asedio de Cartagena de Indias, 1741. Las cifras britanicas de bajas varian mucho segun la fuente: la franja defendible es de 8.000 a 12.000 muertos.",
   "ver": "blas-de-lezo"
  }
 },
 "causas": {
  "malvinas": {
   "titulo": "Malvinas: territorio en disputa",
   "texto": "El Reino Unido las administra como Territorio Británico de Ultramar desde enero de 1833, cuando reocupó el archipiélago por la fuerza. Argentina reclama la soberanía y la ratificó en la Disposición Transitoria Primera de su Constitución de 1994; Londres sostiene que no se negocia sin el consentimiento de los isleños. La ONU no ha fallado sobre el fondo: la resolución 2065 (XX) de 1965 reconoció que existe una disputa de soberanía e invitó a negociar, y la 31/49 de 1976 pidió abstenerse de modificaciones unilaterales mientras durase la negociación. El Comité de Descolonización sigue incluyendo «Falkland Islands (Malvinas)» entre sus 17 territorios no autónomos.",
   "cifras": "Superficie: 12.173 km²; Población residente: 3.662 habitantes (censo de 2021, un 8% más que en 2016); Referéndum del 10 y 11 de marzo de 2013: 1.650 habilitados, 1.518 votos emitidos (92,0% de participación), 1.513 por el sí (99,8%) y 3 por el no; Reocupación británica: enero de 1833; Resolución 502 del Consejo de Seguridad: 3 de abril de 1982",
   "fuente": "Falkland Islands Government, Census 2021 – Full Report (superficie y población), nationalarchives.gov.fk; resultado oficial del referéndum de 2013 proclamado por el Falkland Islands Government; ONU, Comité Especial de Descolonización (C-24), ficha «Falkland Islands (Malvinas)», https://www.un.org/dppa/decolonization/en/content/falkland-islands-malvinas; resoluciones AGONU 2065 (XX) de 1965, 3160 (XXVIII) de 1973 y 31/49 de 1976; Consejo de Seguridad, resolución 502 (1982)"
  },
  "mar-argentino": {
   "titulo": "El mar: cómo se llama de verdad y cuánto vale",
   "texto": "«Mar de Malvinas» no existe en la cartografía. La Organización Hidrográfica Internacional nunca lo incluyó —tampoco el «Mar Argentino»— en su publicación Limits of Oceans and Seas de 1953: internacionalmente esas aguas son Océano Atlántico Sur. «Mar Argentino» es el nombre argentino de la parte menos profunda del margen continental, y la propia Armada Argentina aclara que es una denominación histórica y cultural que no implica soberanía ni jurisdicción. La disputa real no es por el nombre sino por la zona de pesca de 200 millas que Londres declaró alrededor de las islas entre 1986 y 1990: ahí está el dinero.",
   "cifras": "Licencias de pesca cobradas por el gobierno isleño: 32.368.550 libras ejecutadas en 2022/23 y 36.140.392 libras presupuestadas para 2024/25; Captura comercial total en las zonas isleñas en 2024: 261.903 t, de ellas 146.689 t de calamar Illex argentinus y 48.888 t de calamar Doryteuthis gahi; Zona marítima en litigio alrededor de las islas: 550.566 km²; Sea Lion: 917 millones de barriles de recursos 2C, decisión final de inversión el 10 de diciembre de 2025, primer crudo previsto para 2028, inversión de 1.800 millones de dólares hasta el primer crudo",
   "fuente": "Armada Argentina, ficha «Mar Argentino», argentina.gob.ar (denominación y su alcance); OHI, Limits of Oceans and Seas (S-23, 1953); Falkland Islands Government, Treasury, Approved Estimates of Revenue & Expenditure for the Financial Year 2024/25, partida 0070 «Fishing Licence Fees», pág. 80; FIG Fisheries Department, Fishery Statistics 2024, volumen 29 (2015–2024), https://www.gov.fk/fisheries; Flanders Marine Institute, World EEZ v12 (25-oct-2023); Rockhopper Exploration, comunicado regulatorio «Final Investment Decision on Sea Lion», 10 de diciembre de 2025"
  },
  "georgias": {
   "titulo": "Georgias del Sur y Sandwich del Sur",
   "texto": "Se cuentan aparte porque son una unidad administrativa distinta: hasta 1985 fueron Dependencias de las Malvinas y en octubre de ese año el Reino Unido las constituyó como Territorio Británico de Ultramar propio, gobernado desde Stanley pero con normas y presupuesto separados. Argentina las reclama como parte de la provincia de Tierra del Fuego, Antártida e Islas del Atlántico Sur. No tienen población civil permanente, solo dotación científica en King Edward Point y Bird Island, y al no haber cuerpo electoral no cabe allí el argumento de la autodeterminación. Tampoco figuran en la lista de territorios no autónomos de la ONU, donde sí están las Malvinas.",
   "cifras": "Superficie terrestre del territorio: 3.903 km²; Territorio separado desde el 3 de octubre de 1985; Población: sin residentes permanentes, 22 personas en verano y 12 en invierno (dato de 2018); Zona marítima en litigio: 1.237.783 km²",
   "fuente": "Government of South Georgia and the South Sandwich Islands, gov.gs (creación del territorio en 1985 y ausencia de población permanente); Flanders Marine Institute, Maritime Boundaries Geodatabase, World EEZ v12 (2023), polígono «Overlapping claim South Georgia and the South Sandwich Islands: United Kingdom / Argentina»; ONU, C-24, lista de 17 territorios no autónomos (no los incluye); cifra de población de 2018 tomada de fuentes secundarias, no de un censo oficial"
  },
  "antartida": {
   "titulo": "El Tratado Antártico congela todo",
   "texto": "Se firmó en Washington el 1 de diciembre de 1959 y entró en vigor el 23 de junio de 1961. Su artículo IV congela el asunto: nadie renuncia a lo que reclamaba, nadie reconoce lo ajeno y, mientras el tratado esté vigente, no se puede presentar una reclamación nueva ni ampliar una existente. Argentina y Chile lo firmaron como partes originales y lo ratificaron. La consecuencia política es directa y no admite matices: ningún movimiento puede prometer «recuperar» o «quedarse con» la Antártida sin romper un tratado que firmó su propio país. El tratado no tiene fecha de caducidad.",
   "cifras": "Firma: 1 de diciembre de 1959, doce signatarios originales, entre ellos Argentina y Chile; Entrada en vigor: 23 de junio de 1961; Partes actuales: 58, de ellas 29 consultivas (2025); Ámbito: al sur de los 60° de latitud sur (artículo VI); Protocolo de Madrid: firmado el 4 de octubre de 1991, en vigor el 14 de enero de 1998; su artículo 7 prohíbe toda actividad sobre recursos minerales salvo investigación científica; su artículo 25 permite pedir una conferencia de revisión 50 años después de la entrada en vigor, es decir a partir de 2048",
   "fuente": "Tratado Antártico (Washington, 1 de diciembre de 1959), artículos IV y VI; Protocolo al Tratado Antártico sobre Protección del Medio Ambiente (Madrid, 4 de octubre de 1991), artículos 7 y 25, publicado en España como BOE-A-1998-3726 y aprobado en Argentina por la Ley 24.216; Secretaría del Tratado Antártico, listado de partes, https://www.ats.aq/devAS/Parties (58 partes, 29 consultivas)"
  }
 },
 "maritimo": {
  "franjas": {
   "titulo": "Las cuatro franjas del mar, con su anchura exacta",
   "texto": "Cuatro franjas, medidas todas desde la línea de base, no desde la orilla. Mar territorial: hasta 12 millas náuticas (art. 3); ahí sí hay soberanía, limitada por el paso inocente de buques extranjeros. Zona contigua: hasta 24 millas (art. 33); solo control aduanero, fiscal, migratorio y sanitario, no soberanía. Zona económica exclusiva: hasta 200 millas (art. 57); derechos soberanos sobre los recursos, pero navegación, sobrevuelo y cables siguen libres para todos (art. 58). Plataforma continental: 200 millas o hasta el borde del margen continental, con tope de 350 millas o de 100 millas desde la isóbata de 2.500 metros (art. 76); solo suelo y subsuelo.",
   "cifras": "Mar territorial: 12 M (1982, art. 3); zona contigua: 24 M (1982, art. 33); zona económica exclusiva: 200 M (1982, art. 57); plataforma continental: 200 M o borde del margen continental, con tope de 350 M o isóbata de 2.500 m + 100 M (1982, art. 76). 1 M = milla náutica.",
   "fuente": "Naciones Unidas, Convención de las Naciones Unidas sobre el Derecho del Mar (CONVEMAR), Montego Bay, 10 de diciembre de 1982, arts. 3, 33, 55-58 y 76. Texto oficial: https://www.un.org/depts/los/convention_agreements/texts/unclos/unclos_e.pdf"
  },
  "gigantes": {
   "titulo": "Chile, Ecuador y España: la isla pequeña rinde más mar que la costa larga",
   "texto": "Tres casos donde una isla lejana multiplica el país. Chile: 3.681.989 km² de zona económica exclusiva frente a 756.102 km² de tierra, casi cinco veces; Rapa Nui, que mide 163,6 km², está a 3.680 km del continente y por sí sola proyecta un círculo de 200 millas. Ecuador: 1.077.231 km² de ZEE frente a 283.561 km² de tierra, casi cuatro veces, y el salto lo da Galápagos. España: 1.039.233 km² frente a 505.944 km², el doble, y la mayor porción es la de Canarias. Es el dato que mejor enseña la idea sin exagerarla.",
   "cifras": "Chile: ZEE 3.681.989 km² / tierra 756.102 km² = 4,9 veces. Ecuador: ZEE 1.077.231 km² / tierra 283.561 km² = 3,8 veces. España: ZEE 1.039.233 km² / tierra 505.944 km² = 2,1 veces. Rapa Nui: 163,6 km² de isla, a 3.680 km del Chile continental; su área marina protegida, declarada en 2018, abarca 720.000 km². Canarias: unos 456.237 km², el 43,9% de la ZEE española. Datos de ZEE de la base del proyecto Sea Around Us (sin año de corte oficial publicado por el proyecto para esta lista).",
   "fuente": "Áreas de ZEE: proyecto Sea Around Us, Instituto para los Océanos y la Pesca, Universidad de British Columbia, recopiladas en «The World's 230 Exclusive Economic Zones from largest to smallest», Flanders Marine Institute (VLIZ), https://www.vliz.be/imisdocs/publications/369815.pdf — Áreas terrestres: Instituto Nacional de Estadísticas de Chile (756.102 km², continental e insular, sin territorio antártico); Instituto Geográfico Militar e INEC de Ecuador (283.561 km², incluido Galápagos); Instituto Nacional de Estadística de España (505.944 km²). Área marina protegida de Rapa Nui: Ministerio del Medio Ambiente de Chile, 2018, https://mma.gob.cl/isla-de-pascua-tendra-el-area-marina-protegida-mas-grande-de-chile/ — Porción canaria: Universidad de La Laguna, «Las aguas marítimas de Canarias», repositorio riull.ull.es."
  },
  "solapamientos": {
   "titulo": "Donde el mar hispano choca consigo mismo: seis sentencias y tres pleitos abiertos",
   "texto": "Sí chocan, y hay sentencias. Nicaragua contra Colombia: la Corte Internacional de Justicia confirmó el 19 de noviembre de 2012 la soberanía colombiana sobre San Andrés, Providencia, Santa Catalina y los cayos, pero trazó una frontera única que dio a Nicaragua zona económica al este del meridiano 82; Colombia denunció el Pacto de Bogotá ocho días después y no acata la línea. Siguieron dos sentencias más, en 2022 y 2023. Perú contra Chile se resolvió en 2014; Nicaragua contra Honduras, en 2007; el golfo de Fonseca, en 1992. Siguen sin acuerdo el golfo de Venezuela y la plataforma austral chileno-argentina.",
   "cifras": "CIJ 19-nov-2012 (Nicaragua c. Colombia): frontera única de plataforma y ZEE, unánime; islas y cayos para Colombia. Colombia denuncia el Pacto de Bogotá el 27-nov-2012. CIJ 21-abr-2022: Colombia violó los derechos de soberanía de Nicaragua en su ZEE, y las líneas de base rectas nicaragüenses (decreto de 2013) no se ajustan al derecho internacional. CIJ 13-jul-2023: rechaza, por 13 votos contra 4, la plataforma extendida de Nicaragua dentro de las 200 M de Colombia. CIJ 27-ene-2014 (Perú c. Chile): el límite sigue el paralelo del Hito nº 1 durante 80 M y luego la equidistancia hasta las 200 M. CIJ 8-oct-2007 (Nicaragua c. Honduras): línea bisectriz; Bobel, Savanna, Port Royal y South Cay para Honduras. CIJ 11-sep-1992 (El Salvador/Honduras, Nicaragua interviniente): el golfo de Fonseca es bahía histórica en soberanía conjunta de los tres Estados, salvo una franja costera de 3 M. Sin delimitar: Colombia-Venezuela, golfo de Venezuela (Coquivacoa), sin acuerdo desde 1830; Chile-Argentina, plataforma continental extendida austral, Decreto Supremo chileno nº 95 de 2021, protestado formalmente por Argentina en 2021.",
   "fuente": "Corte Internacional de Justicia, icj-cij.org: «Controversia territorial y marítima (Nicaragua c. Colombia)», sentencia del 19-nov-2012; «Presuntas violaciones de derechos soberanos y espacios marítimos en el mar Caribe (Nicaragua c. Colombia)», caso 155, sentencia del 21-abr-2022 (https://www.icj-cij.org/case/155); «Cuestión de la delimitación de la plataforma continental más allá de 200 millas marinas (Nicaragua c. Colombia)», sentencia del 13-jul-2023; «Controversia marítima (Perú c. Chile)», caso 137, sentencia del 27-ene-2014 (https://www.icj-cij.org/case/137); «Controversia territorial y marítima entre Nicaragua y Honduras en el mar Caribe», caso 120, sentencia del 8-oct-2007; «Controversia fronteriza terrestre, insular y marítima (El Salvador/Honduras: Nicaragua interviniente)», sentencia del 11-sep-1992. Decreto Supremo 95/2021 de Chile y nota de protesta argentina, comunicaciones depositadas en DOALOS."
  },
  "convemar": {
   "titulo": "Cuatro países hispanohablantes no son parte de la Convención",
   "texto": "De los 20 Estados hispanohablantes, cuatro no son parte de la CONVEMAR. Colombia la firmó el 10 de diciembre de 1982 y nunca la ratificó. El Salvador la firmó el 5 de diciembre de 1984 y nunca la ratificó. Perú no la firmó jamás. Venezuela votó contra el texto el 30 de abril de 1982 y tampoco la firmó. Los otros dieciséis sí son parte, incluidos los dos sin costa: Paraguay desde 1986 y Bolivia desde 1995. Estados Unidos no firmó la Convención; sí firmó el Acuerdo de 1994 sobre la Parte XI, pero su Senado nunca lo ha aprobado.",
   "cifras": "No parte: Colombia (firma 10-dic-1982, sin ratificar), El Salvador (firma 5-dic-1984, sin ratificar), Perú (sin firma), Venezuela (voto en contra el 30-abr-1982, sin firma). Parte: 16 de 20, entre ellos Paraguay (26-sep-1986), Bolivia (28-abr-1995), México (18-mar-1983), Cuba (15-ago-1984), Argentina (1-dic-1995), Chile (25-ago-1997), España (15-ene-1997), Guinea Ecuatorial (21-jul-1997), Nicaragua (3-may-2000), Ecuador (24-sep-2012), República Dominicana (10-jul-2009). Filipinas: 8-may-1984. Total de partes en la Convención: 172 (la última, Camboya, 6-feb-2026). Estados Unidos: no es parte. Votación de adopción del texto, 30-abr-1982: 130 a favor, 4 en contra (Estados Unidos, Israel, Turquía y Venezuela), 17 abstenciones.",
   "fuente": "Naciones Unidas, División de Asuntos Oceánicos y del Derecho del Mar (DOALOS), «Chronological lists of ratifications of, accessions and successions to the Convention and the related Agreements», consultada el 3 de octubre de 2026: https://www.un.org/Depts/los/reference_files/chronological_lists_of_ratifications.htm — Firmas sin ratificación: United Nations Treaty Collection, capítulo XXI.6. Votación de 1982: Autoridad Internacional de los Fondos Marinos, «UNCLOS at 40», https://isa.org.jm/unclos-at-40-2/"
  }
 },
 "rotuloMar": "Franja aproximada: 200 millas nauticas, 370 km de mar con derechos exclusivos sobre pesca, petroleo y fondo marino. Son derechos economicos, no soberania.",
 "sefardi": {
  "que-es": {
   "titulo": "Qué es el ladino o judeoespañol",
   "texto": "El judeoespañol —también djudezmo, espanyol o spanyolit— es la lengua de los judíos expulsados de Castilla y Aragón en 1492. Su base es el castellano medieval: conserva la f- inicial (fijo, fablar), formas como agora o mozotros y distinciones de sibilantes que el español peninsular perdió entre los siglos XVI y XVII. Incorporó léxico hebreo, turco, griego, italiano y francés. En Marruecos dio una variedad propia, la haquetía, con fuerte sustrato árabe. Se escribió en caracteres hebreos (letra rashí en imprenta, solitreo a mano) y, desde el siglo XX, en alfabeto latino. «Ladino» designaba en origen la traducción literal de textos hebreos; hoy nombra la lengua entera.",
   "cifras": "Edicto de expulsión de Castilla y Aragón: 31 de marzo de 1492; alfabetos documentados: hebreo cuadrado, rashí, solitreo, latino y usos puntuales de griego y cirílico en los Balcanes; paso al alfabeto latino en la prensa judeoespañola de Turquía: desde la reforma alfabética turca de 1928.",
   "fuente": "Jewish Language Project, ficha «Judeo-Spanish/Judezmo/Ladino», consultada el 3-oct-2026 (https://www.jewishlanguages.org/judeo-spanish-judezmo-ladino); Real Academia Española, nota sobre la creación de la Academia Nacional del Judeoespañol, 2019 (https://www.rae.es)."
  },
  "cuantos": {
   "titulo": "Cuántos lo hablan y en qué peligro está",
   "texto": "No hay censo de hablantes de judeoespañol en ningún país: toda cifra es una estimación de autor. El Jewish Language Project da 51.000 hablantes en 2024, frente a 350.000 en 1900, y señala que los nativos más jóvenes pasan de los cincuenta años. Ethnologue dio 133.000 en 2018. La diferencia no es un error de nadie: una cifra cuenta hablantes nativos y la otra incluye a quien lo entiende o lo aprendió de adulto. La UNESCO lo clasifica como «seriamente en peligro» en su Atlas de 2010, categoría definida como la lengua que hablan los abuelos, que los padres entienden pero no transmiten a sus hijos. Rango honesto: 50.000-130.000.",
   "cifras": "51.000 hablantes (2024, Jewish Language Project); 350.000 (1900, misma fuente); 133.000 en el mundo (2018, Ethnologue); categoría UNESCO «seriamente en peligro» (Atlas de las lenguas del mundo en peligro, 3.ª edición, 2010).",
   "fuente": "Jewish Language Project, consultado el 3-oct-2026 (jewishlanguages.org); Ethnologue, edición de 2018; UNESCO, Atlas de las lenguas del mundo en peligro, 3.ª ed., 2010."
  },
  "donde": {
   "titulo": "Dónde vive hoy el mundo sefardí",
   "texto": "Las comunidades con memoria judeoespañola están hoy en Israel, Turquía, Grecia, Bulgaria, Marruecos, Francia, Estados Unidos, Argentina, México y Panamá. Pero las cifras disponibles son de población judía, no de hablantes de ladino, y no deben presentarse como lo segundo. Dos advertencias de bulto: en Israel la mayoría de quienes se llaman sefardíes son mizrajíes de origen arabófono, sin relación con el judeoespañol; y en Panamá y en buena parte de México las comunidades sefardíes proceden de Siria, de rito sefardí pero nunca de lengua judeoespañola. La comunidad judeoespañola histórica más viva fuera de Israel es la de Turquía.",
   "cifras": "Población judía a 1-ene-2024 salvo indicación: Israel 7.153.000 (dato a 1-oct-2025); Estados Unidos 6.300.000; Francia 438.500; Argentina 170.000; México 41.000; Turquía 15.000; Panamá 10.000; Grecia 4.000; Bulgaria 2.000; Marruecos en torno a 2.000.",
   "fuente": "Sergio DellaPergola, «World Jewish Population 2024», y Sheskin y Dashefsky, American Jewish Year Book; tabla reproducida por la Jewish Virtual Library, consultada el 3-oct-2026 (https://jewishvirtuallibrary.org/jewish-population-of-the-world)."
  },
  "ley2015": {
   "titulo": "La ley española de 2015 para los sefardíes",
   "texto": "La Ley 12/2015, de 24 de junio, abrió la nacionalidad española a los sefardíes originarios de España sin exigirles residencia ni renunciar a su otra nacionalidad. Daba tres años de plazo; el Consejo de Ministros lo prorrogó un año el 9 de marzo de 2018 y la ventana se cerró a medianoche del 30 de septiembre de 2019. Los solicitantes fueron abrumadoramente latinoamericanos: México, Venezuela y Colombia encabezaron la lista. De las 89.078 solicitudes que llegaron al Ministerio, 73.017 acabaron en concesión y 7.344 en denegación; en julio de 2026 seguían pendientes 7.856 expedientes.",
   "cifras": "Ley 12/2015, de 24 de junio (BOE-A-2015-7045, publicada el 25-jun-2015), en vigor el 1-oct-2015. Plazo original hasta el 1-oct-2018, prorrogado por acuerdo del Consejo de Ministros del 9-mar-2018 hasta el 1-oct-2019; cierre material de presentación el 30-sep-2019. Solicitudes presentadas 89.078; resueltas 81.222; concedidas 73.017; denegadas 7.344; pendientes 7.856 (último dato publicado, recogido en julio de 2026). Por país al cierre: México unas 20.000, Venezuela unas 14.600, Colombia unas 13.600, de unas 127.000 actas en total.",
   "fuente": "BOE, Ley 12/2015, de 24 de junio; La Moncloa, acuerdo del Consejo de Ministros de 9 de marzo de 2018; Dirección General de los Registros y del Notariado, declaraciones de su director general Pedro Garrido al cierre del plazo (30-sep-2019); Ministerio de la Presidencia, Justicia y Relaciones con las Cortes, datos estadísticos de nacionalidad, recogidos en julio de 2026."
  },
  "riesgo": {
   "titulo": "El riesgo de poner a Israel como aliado en el mapa",
   "texto": "Un mapa obliga a dibujar una línea. Declarar aliado al Estado de Israel fuerza a decidir qué se pinta en Cisjordania, Gaza, el Golán y Jerusalén, y ninguna de esas líneas es neutral: 157 de los 193 Estados de la ONU reconocen el Estado de Palestina, y España lo reconoció el 28 de mayo de 2024 con las fronteras de 1967 y capital en Jerusalén Este. El movimiento dice representar 24 naciones; la posición oficial de casi todas ellas contradice cualquier trazado que acompañe a la palabra «aliado». Y el vínculo del ladino no sostiene esa conclusión: la lengua la custodian una academia y una diáspora, no un Estado.",
   "cifras": "157 de 193 Estados miembros de la ONU reconocen el Estado de Palestina (recuento tras la Asamblea General de septiembre de 2025; eran 148 antes de ella). España: reconocimiento aprobado en Consejo de Ministros el 28-may-2024, junto a Irlanda y Noruega. Hebreo: única lengua oficial de Israel según la Ley Básica de 2018, que dejó al árabe con «estatus especial». El ladino no tiene estatus de lengua oficial en Israel.",
   "fuente": "La Moncloa, acuerdo del Consejo de Ministros de 28 de mayo de 2024 y declaración institucional del presidente del Gobierno; recuentos de reconocimiento del Estado de Palestina publicados tras la Asamblea General de la ONU de septiembre de 2025 (UNRIC y prensa internacional); Ley Básica «Israel como Estado nación del pueblo judío», Knéset, 2018."
  },
  "alternativa": {
   "titulo": "La alternativa: la diáspora sefardí como capa del mapa",
   "texto": "La versión que sí aguanta: una capa de mapa llamada «Diáspora sefardí: el mundo del judeoespañol» que marca ciudades, no banderas. Toledo y Córdoba como origen; Salónica, Estambul, Esmirna, Sofía y Sarajevo como el mundo judeoespañol otomano; Tetuán y Tánger para la haquetía; Jerusalén por la Autoridad y la Academia del Ladino; Buenos Aires, Ciudad de México y Nueva York por la diáspora americana. Israel aparece en el mapa, con una institución verificable detrás, sin que el movimiento declare aliado a un Estado ni trace una frontera en disputa. La leyenda separa «vínculo lingüístico» de «posición política», y solo afirma el primero.",
   "cifras": "Anclas verificables de cada punto: Jerusalén, ley de la Knéset del 3-mar-1996 y academia correspondiente de la RAE desde el 3-oct-2019; Madrid, Ley 12/2015 con 73.017 concesiones (dato de julio de 2026); Lisboa, vía sefardita 2015-2026 con 56.685 concesiones hasta 2021; Estambul, Salónica y Sofía, comunidades judeoespañolas históricas con población judía actual de 15.000, parte de los 4.000 de Grecia y 2.000 respectivamente (2024).",
   "fuente": "Elaboración propia a partir de las fichas «la-academia», «la-ley-2015», «portugal-tambien» y «donde-estan» de este mismo encargo; fuentes primarias: RAE, ASALE, BOE, La Moncloa, Ministerio de la Presidencia, Justicia y Relaciones con las Cortes (España), Diário da República (Portugal) y American Jewish Year Book."
  }
 },
 "lezo": {
  "quien-era": {
   "titulo": "Quién era Blas de Lezo",
   "texto": "Blas de Lezo y Olavarrieta nació el 3 de febrero de 1689 en Pasajes (Pasaia), Guipúzcoa, y murió el 7 de septiembre de 1741 en Cartagena de Indias. Embarcó adolescente en la escuadra franco-española: a los 15 años estuvo en la batalla de Vélez-Málaga, el 24 de agosto de 1704, y en 1707 en la defensa de Tolón. Mandó escuadra en el Pacífico desde el Callao entre 1720 y 1728. En 1730 reclamó en Génova dos millones de pesos retenidos por el Banco de San Jorge, amenazando con bombardear la ciudad. En 1732 participó en la toma de Orán. Teniente general de la Armada en 1734, llegó a Cartagena de Indias el 11 de marzo de 1737 como comandante del apostadero.",
   "cifras": "Nacimiento: 3-feb-1689, Pasajes (Guipúzcoa); Muerte: 7-sep-1741, Cartagena de Indias, a los 52 años; Batalla de Vélez-Málaga: 24-ago-1704, con 15 años; Defensa de Tolón: 1707; Asedio de Barcelona: 1713-1714; Escuadra del Pacífico (Callao): 1720-1728; Génova: 1730, 2.000.000 de pesos; Orán: 1732; Teniente general de la Armada: 1734; Toma de mando en Cartagena de Indias: 11-mar-1737",
   "fuente": "Wikipedia EN y ES, «Blas de Lezo» (consultadas 3-oct-2026): https://en.wikipedia.org/wiki/Blas_de_Lezo y https://es.wikipedia.org/wiki/Blas_de_Lezo — Fundación Museo Naval (Madrid), ficha «Blas de Lezo»: https://www.fundacionmuseonaval.com/etblasdelezo.html — Biografía académica de referencia: Gonzalo M. Quintero Saravia, «Don Blas de Lezo, defensor de Cartagena de Indias», Planeta, Bogotá, 2002 (citada, no consultada directamente)"
  },
  "las-heridas": {
   "titulo": "Las heridas: qué perdió y de qué lado",
   "texto": "Tres mutilaciones, en este orden. Pierna IZQUIERDA: destrozada por una bala de cañón en la batalla de Vélez-Málaga, el 24 de agosto de 1704, a bordo del navío francés Foudroyant; amputada allí mismo, sin anestesia, POR DEBAJO DE LA RODILLA. Ojo IZQUIERDO: reventado por una esquirla en la defensa de Tolón, en 1707. Brazo DERECHO: un balazo de mosquete en el ANTEBRAZO, durante el asedio de Barcelona de 1713-1714, lo dejó sin movilidad el resto de su vida; NO fue amputado. Y en 1741, ya durante el asedio de Cartagena, fue herido además en el muslo y en una mano.",
   "cifras": "Pierna izquierda: 24-ago-1704, batalla de Vélez-Málaga, amputada por debajo de la rodilla, sin anestesia; Ojo izquierdo: 1707, defensa de Tolón, esquirla; Brazo derecho: 1713-1714, asedio de Barcelona, bala de mosquete en el antebrazo, pérdida de movilidad SIN amputación; Cojo, tuerto y manco: a los 25 o 26 años según la fuente; Heridas de 1741: muslo y mano, durante el asedio de Cartagena",
   "fuente": "Wikipedia ES, «Blas de Lezo»: «una bala de cañón le destrozó la pierna izquierda», «una esquirla le reventó el ojo izquierdo», «recibió un balazo en el antebrazo derecho, que quedó sin movilidad hasta el fin de sus días» (consultada 3-oct-2026): https://es.wikipedia.org/wiki/Blas_de_Lezo — Wikipedia EN, «Blas de Lezo»: «his left leg was hit by cannon-shot and was amputated under the knee», «lost use of his right arm»: https://en.wikipedia.org/wiki/Blas_de_Lezo — PanoramaCultural.com.co, «Las heridas y pesares de Don Blas de Lezo y Olavarrieta»: detalla el impacto en el puente del Foudroyant, la esquirla del muro de piedra en Tolón y la «afectación tendinosa, muscular, vascular o nerviosa» del brazo derecho: https://panoramacultural.com.co/historia/7365/las-heridas-y-pesares-de-don-blas-de-lezo-y-olavarrieta"
  },
  "la-batalla": {
   "titulo": "El asedio de Cartagena de Indias, 1741",
   "texto": "Del 13 de marzo al 20 de mayo de 1741, unos 68 días. Vernon llevó, según los recuentos, entre 180 y 190 velas: 29 a 35 navíos de línea, 21 a 26 fragatas y 130 a 140 transportes, con 12.000 a 16.000 soldados y 15.000 a 18.600 marineros, incluidos unos 3.600 coloniales de Virginia. Lezo y el virrey Sebastián de Eslava tenían 6 navíos de línea (Galicia, África, San Felipe, San Carlos, Conquistador y Dragón) y entre 3.000 y 4.000 defensores. Los británicos tomaron Bocachica y se estrellaron después contra el castillo de San Felipe de Barajas; reembarcaron y se retiraron a Jamaica.",
   "cifras": "Fechas: 13-mar a 20-may-1741, unos 68 días. Británicos: 180-190 buques; 29-35 navíos de línea; 21-26 fragatas; 130-140 transportes; 12.000-16.000 soldados de tierra (Zafra Caramé, 2017: 15.490); 15.000-18.630 marineros; ~3.600 coloniales de Virginia. Españoles: 6 navíos de línea; 3.000-4.000 hombres (Zafra Caramé: 3.150; Fernández Duro, 1902: 1.100 regulares más milicias); 600 arqueros indígenas. BAJAS BRITÁNICAS, serie completa: 2.500 (Rolt, 1749); 6.000 muertos en combate más 7.500 heridos (Maddox, 2009); 9.000 muertos (Fernández Duro, 1902); ~9.240, el 77% de 12.000 desembarcados (Geggus, 1979); 9.000-12.000 muertos y 7.500 heridos o enfermos (Zafra Caramé, 2017); 9.500-11.500 muertos (Wikipedia EN); 18.000 hombres perdidos (John Pembroke, oficial británico, 1741); 20.000 muertos por diversas causas (William Coxe, 1815); 1.100 muertos más en el mes siguiente a la retirada (Fortescue, 1899). Bajas españolas: 800 muertos y 1.200 heridos (Zafra Caramé); 600 muertos (Fernández Duro). Pérdidas materiales españolas: 6 navíos, 395 cañones, 5 fuertes y 3 baterías.",
   "fuente": "Wikipedia ES, «Sitio de Cartagena de Indias (1741)», que atribuye cada cifra a su autor y año (consultada 3-oct-2026): https://es.wikipedia.org/wiki/Sitio_de_Cartagena_de_Indias_(1741) — Wikipedia EN, «Battle of Cartagena de Indias»: https://en.wikipedia.org/wiki/Battle_of_Cartagena_de_Indias — Fundación Museo Naval (Madrid), que da 6 barcos y 2.800 hombres frente a 180 buques y 23.600 soldados: https://www.fundacionmuseonaval.com/etblasdelezo.html — Obra académica de referencia sobre la expedición: Richard Harding, «Amphibious Warfare in the Eighteenth Century: The British Expedition to the West Indies, 1740-1742», Royal Historical Society / Boydell & Brewer, 1991 (citada, no consultada directamente)"
  },
  "las-medallas-de-vernon": {
   "titulo": "Las medallas de Vernon: una victoria que no existió",
   "texto": "Existen y se pueden ver. El Museo Marítimo Nacional de Greenwich conserva varias piezas. En el anverso, Vernon de pie recibe la espada que le tiende «DON BLASS», arrodillado ante él, con la leyenda «THE SPANISH PRIDE PULLD DOWN BY ADMIRAL VERNON». En el reverso, dos navíos entran hacia unos fuertes unidos por una cadena, con la leyenda «TRUE BRITISH HEROES TOOK CARTHAGENA» y el exergo «APRIL 1741». Son de aleación de cobre o de latón tipo pinchbeck, imitación de oro, de 36 a 38 milímetros. Ninguna fue oficial: las hicieron botoneros y fabricantes de juguetería británicos por iniciativa privada.",
   "cifras": "Leyenda del anverso, literal: «THE . SPANISH . PRIDE . PULLD . DOWN . BY . ADMIRAL . VERNON .» («El orgullo español abatido por el almirante Vernon»). Leyenda del reverso: «TRUE BRITISH HEROES TOOK CARTHAGENA» («Verdaderos héroes británicos tomaron Cartagena»). Exergo: «APRIL 1741». Material: aleación de cobre, latón pinchbeck y «bath metal»; 36-38 mm. Datado por el museo: «after 1741»; autor: desconocido. Número de variedades: hasta once tipos de medallas y monedas conmemorativas de Cartagena, ninguna oficial y todas de artesanos ajenos al gobierno (Fernández Duro, 1902); el conjunto de toda la campaña de Vernon supera las 200 variedades catalogadas (Adams-Chao, con códigos CAv, CAvo, CAvow; también Betts y Milford Haven-Grueber).",
   "fuente": "Royal Museums Greenwich / National Maritime Museum, objeto RMGC-38480, «Medal commemorating Vernon's attack on Cartagena, 1741»: https://www.rmg.co.uk/collections/objects/rmgc-object-38480 — Massachusetts Historical Society, guía de colección «Medals Related to Admiral Edward Vernon's Caribbean Campaign, 1740-1741»: https://www.masshist.org/collection-guides/view/fao0018 — Cesáreo Fernández Duro, «Armada española», 1902, citado en Wikipedia ES, «Sitio de Cartagena de Indias (1741)» — Catálogo Adams-Chao de medallas del almirante Vernon, vía fichas de Stack's Bowers"
  },
  "el-final": {
   "titulo": "El final: murió castigado, no condecorado",
   "texto": "Murió en Cartagena de Indias el 7 de septiembre de 1741, a los 52 años, de unas calenturas que en pocos días derivaron en tabardillo, es decir tifus, tres meses y medio después de la retirada británica; arrastraba las heridas del asedio en el muslo y en una mano. No lo trataron como héroe. Mantuvo una guerra de cartas con el virrey Eslava, que llegó a solicitar y obtener del rey su castigo. Su destitución como jefe del apostadero y la orden de regresar a España para ser reprendido se aprobaron el 21 de octubre de 1741, cuando ya había muerto. Fue el único mando principal del asedio que no recibió recompensa alguna.",
   "cifras": "Muerte: 7-sep-1741, Cartagena de Indias, a los 52 años. Causa según fuente contemporánea: «unas calenturas, que en breves días se le declaró tabardillo» (tifus). Destitución y orden de regreso para ser reprendido: aprobadas el 21-oct-1741. Entierro: convento de Santo Domingo de Cartagena de Indias, según una carta de 1773 de su hijo localizada por Mariela Beltrán y Carolina Aguado; la ubicación exacta de la tumba es desconocida y no se ha hallado la partida de defunción. Reparación póstuma: marquesado de Ovieco a su hijo Blas de Lezo y Pacheco, concedido por Carlos III en 1760 según Wikipedia ES y el 21-feb-1762 según otras fuentes; es decir, 19 o 21 años después de su muerte. A Eslava se le reconoció de inmediato, y en 1760 su hijo Gaspar recibió el marquesado de la Real Defensa.",
   "fuente": "Wikipedia ES, «Blas de Lezo» (consultada 3-oct-2026): https://es.wikipedia.org/wiki/Blas_de_Lezo — Wikipedia EN, «Blas de Lezo», que cita la fuente contemporánea del tabardillo y confirma que «the site of his grave is unknown»: https://en.wikipedia.org/wiki/Blas_de_Lezo — Mariela Beltrán y Carolina Aguado, «La última batalla de Blas de Lezo», 2018, vía entrevista en Libertad Digital, 12-jun-2018: https://www.libertaddigital.com/cultura/historia/2018-06-12/mariela-beltran-y-carolina-aguado-desmitifican-al-marino-en-la-ultima-batalla-de-blas-de-lezo-1276620300/ — Fundación Museo Naval (Madrid), ficha «Blas de Lezo»: https://www.fundacionmuseonaval.com/etblasdelezo.html"
  },
  "la-leyenda-vs-el-dato": {
   "titulo": "Lo que se repite de Lezo y no es verdad",
   "texto": "Cinco cosas que circulan y no se pueden sostener. Una: «todo buen español debe mear mirando a Inglaterra»; su biógrafo Gonzalo M. Quintero Saravia dice que no consta en ningún documento que haya visto o estudiado. Dos: el intercambio de cartas con Vernon y el «carbón de Irlanda a Londres»; no hay rastro documental, y además el carbón iba de Inglaterra a Irlanda, no al contrario. Tres: que fuera la mayor fuerza de desembarco de la historia hasta Normandía. Cuatro: que Gran Bretaña prohibiera hablar de la derrota. Cinco: que lo llamaran «Mediohombre» en vida; el apodo aparece en un manual escolar de 1920 y en una novela de 1989.",
   "cifras": "Frase «todo buen español debería mear siempre mirando a Inglaterra»: apócrifa; Gonzalo M. Quintero Saravia, doctor en Historia de América y biógrafo de Lezo: «no consta en ningún documento que yo haya visto, estudiado o encontrado», «es totalmente apócrifa» (El Español, 11-jul-2024). Cartas con Vernon y el carbón irlandés: sin evidencia, y el comercio de carbón iba en sentido inverso (Wikipedia EN). «Mayor fuerza de desembarco hasta Normandía» y «Gran Bretaña prohibió hablar de la derrota»: ambas negadas por Mariela Beltrán y Carolina Aguado, 2018. Apodos «Mediohombre» y «Patapalo»: «There is no contemporary proof that these (or others) were actually used during de Lezo's lifetime» (Wikipedia EN); documentados solo en un manual escolar colombiano de 1920 y en una novela de James Michener de 1989. Frase de la estatua de Cádiz, «dile a mis hijos que morí como un buen vasco»: «al parecer tampoco las pronunció nunca» (El Español, 2024).",
   "fuente": "El Español, «La verdad sobre la famosa frase de Blas de Lezo de \"todo español debe mear mirando a Inglaterra\"», 11-jul-2024, con declaraciones de Gonzalo M. Quintero Saravia: https://www.elespanol.com/historia/20240711/verdad-famosa-frase-blas-lezo-espanol-debe-mear-mirando-inglaterra/869663178_0.html — Libertad Digital, entrevista a Mariela Beltrán y Carolina Aguado sobre «La última batalla de Blas de Lezo», 12-jun-2018: https://www.libertaddigital.com/cultura/historia/2018-06-12/mariela-beltran-y-carolina-aguado-desmitifican-al-marino-en-la-ultima-batalla-de-blas-de-lezo-1276620300/ — Wikipedia EN, «Blas de Lezo», apartados sobre apodos y citas apócrifas: https://en.wikipedia.org/wiki/Blas_de_Lezo"
  },
  "retrato": {
   "titulo": "El retrato: no existe ninguno del natural",
   "texto": "No hay ningún retrato de Lezo pintado del natural que esté identificado como tal. El cuadro que todo el mundo usa es el del Museo Naval de Madrid, inventario MNM-431: óleo sobre lienzo de autor desconocido, fechado en 1853, copia de un original del siglo XVIII, donado el 14 de julio de 1853 por el marqués de Ovieco, descendiente del marino. Es decir, la imagen canónica es una copia del siglo XIX, 112 años posterior a su muerte. Existe un segundo retrato, del siglo XVIII y también de autor desconocido, en la colección de la condesa de Revilla-Gigedo, expuesto en el Museo Naval en 2013.",
   "cifras": "Museo Naval de Madrid, inventario MNM-431: óleo sobre lienzo, autor desconocido, fechado 1853, copia de un original del siglo XVIII; solicitado por el museo el 24-nov-1852 y donado el 14-jul-1853 por el marqués de Ovieco. Segundo retrato: colección Condesa de Revilla-Gigedo, siglo XVIII, autor desconocido, expuesto por primera vez en la muestra «Blas de Lezo, el valor del Mediohombre», Museo Naval de Madrid, 2013. Descripción de la iconografía conocida: marco ovalado, figura de medio cuerpo, ligeramente girada hacia su izquierda, mirando al frente, ojo izquierdo perdido y entrecerrado, mano izquierda apoyada en un bastón de general; en la otra versión, coraza dorada y peluca blanca larga tipo allonge. Descripción física atribuida: tez pálida, complexión gruesa, estatura media, vestía con elegancia.",
   "fuente": "Museo Naval de Madrid, pieza MNM-431, vía la ficha de Wikimedia Commons «Don Blas de Lezo -Museo Naval-.jpg» (https://commons.wikimedia.org/wiki/File:Don_Blas_de_Lezo_-Museo_Naval-.jpg) y reseñas de la exposición «Blas de Lezo, el valor del Mediohombre», Museo Naval de Madrid, 2013 — Google Arts & Culture / Fundación Museo Naval, ficha «Blas de Lezo y Olavarrieta», Colección Condesa de Revilla-Gigedo, siglo XVIII, autor desconocido: https://artsandculture.google.com/asset/blas-de-lezo-y-olavarrieta-unknown/egEi1uAObHFHFA — Biblioteca Virtual de Defensa, registro 40977, «Retrato del teniente general de la Armada Blas de Lezo»: https://bibliotecavirtual.defensa.gob.es/BVMDefensa/es/consulta/registro.do?id=40977 (NO PUDE ABRIRLO: el servidor cortó la conexión dos veces; la descripción de la postura procede de resultados de búsqueda que citan esa ficha, no de la ficha leída)"
  }
 }
};
