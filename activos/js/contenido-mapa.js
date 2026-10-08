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
   "hispanos": 3167325,
   "huella": 90.0,
   "historia": "Trescientos noventa años de soberanía española, de 1508 a 1898. San Juan, trasladada desde Caparra en 1521, es la ciudad de fundación europea más antigua bajo bandera estadounidense. No es un estado: en el globo debe ir rotulada como territorio."
  },
  "nm": {
   "nombre": "Nuevo México",
   "pct": 49.1,
   "texto": "El territorio más hispano de los cincuenta estados, y aun así no llega a la mitad: 49,1%. Juan de Oñate inició la colonización en 1598 y Santa Fe se fundó en 1610, la capital estatal más antigua del país. Fue español hasta 1821 y mexicano hasta 1848, cuando el Tratado de Guadalupe Hidalgo lo pasó a Estados Unidos. La constitución estatal de 1911 ordenó publicar las leyes en español e inglés. Los hispanos son el grupo más numeroso: 49,1% frente a 35,1% de blancos no hispanos.",
   "fuente": "U.S. Census Bureau, American Community Survey (ACS) 2024, estimaciones de 1 año, tabla B03003; comparación con blancos no hispanos, tabla B03002 «Hispanic or Latino Origin by Race» de la misma encuesta. https://data.census.gov/table/ACSDT1Y2024.B03003",
   "hispanos": 1046253,
   "huella": 87.6,
   "historia": "San Gabriel (1598) y Santa Fe (1610), capital continua desde entonces, se asentaron en un territorio ya poblado por los pueblos. La revuelta de 1680 expulsó a España doce años y esos doce años no se cuentan como soberanía efectiva."
  },
  "ca": {
   "nombre": "California",
   "pct": 40.8,
   "texto": "Primer estado por número absoluto de hispanos: 16,07 millones de personas. El nombre viene de una novela española de caballerías impresa hacia 1510. Fue español desde 1769, con la cadena de misiones, y mexicano de 1821 a 1848. Los Ángeles se fundó en 1781 como El Pueblo de Nuestra Señora la Reina de los Ángeles. Los hispanos son hoy el grupo más numeroso del estado: 40,8% frente a 32,6% de blancos no hispanos.",
   "fuente": "U.S. Census Bureau, American Community Survey (ACS) 2024, estimaciones de 1 año, tabla B03003; comparación con blancos no hispanos, tabla B03002 de la misma encuesta. https://data.census.gov/table/ACSDT1Y2024.B03003",
   "hispanos": 16069214,
   "huella": 66.4,
   "historia": "Veintiuna misiones, cuatro presidios y tres pueblos entre 1769 y 1823, casi todos sobre rancherías indígenas ya existentes. Solo 52 años de soberanía española: los menos de los cuatro grandes del suroeste."
  },
  "tx": {
   "nombre": "Texas",
   "pct": 40.3,
   "texto": "El dato que corrige el eslogan: Texas es 40,3% hispano, no la mitad. Pero sí es el grupo más numeroso del estado, por delante de los blancos no hispanos, que son el 37,8%. San Antonio de Béxar se fundó en 1718; el territorio fue español, luego mexicano hasta 1836 y se incorporó a Estados Unidos en 1845. El nombre viene del español «tejas», tomado de una voz caddo que significa amigos. Segundo estado por número absoluto: 12,6 millones de hispanos.",
   "fuente": "U.S. Census Bureau, American Community Survey (ACS) 2024, estimaciones de 1 año, tabla B03003; comparación con blancos no hispanos, tabla B03002 de la misma encuesta. https://data.census.gov/table/ACSDT1Y2024.B03003",
   "hispanos": 12602305,
   "huella": 60.9,
   "historia": "La ocupación estable empezó en 1716, tras el fracaso de la misión de 1690. Ysleta del Sur (1682) la fundaron tiguas huidos de Nuevo México junto a frailes españoles, no colonos llegados a tierra vacía."
  },
  "az": {
   "nombre": "Arizona",
   "pct": 32.1,
   "texto": "Arizona entró en Estados Unidos en dos tiempos: el norte en 1848 y la franja sur en 1854 con la Venta de La Mesilla. Tucsón nació como presidio español en 1775 y la misión de San Xavier del Bac la inició el jesuita Eusebio Francisco Kino a finales del siglo XVII. Hoy el estado es 32,1% hispano, pero los blancos no hispanos siguen siendo mayoría absoluta con 51,2%.",
   "fuente": "U.S. Census Bureau, American Community Survey (ACS) 2024, estimaciones de 1 año, tabla B03003; comparación con blancos no hispanos, tabla B03002 de la misma encuesta. https://data.census.gov/table/ACSDT1Y2024.B03003",
   "hispanos": 2435661,
   "huella": 52.5,
   "historia": "La Pimeria Alta de Kino: Guevavi y San Xavier del Bac desde la decada de 1690, presidio de Tubac en 1752 y traslado a Tucson en 1775, sobre el poblado o'odham de S-cuk Son."
  },
  "nv": {
   "nombre": "Nevada",
   "pct": 30.6,
   "texto": "El nombre es español: «nevada», por la sierra. A Las Vegas la bautizó así la expedición de Antonio Armijo de 1829-1830, que buscaba agua en el camino entre Santa Fe y California. El territorio fue mexicano hasta 1848. Hoy casi uno de cada tres residentes es hispano, 30,6%, sobre todo mexicanos y salvadoreños ligados a la hostelería y la construcción del área de Las Vegas.",
   "fuente": "U.S. Census Bureau, American Community Survey (ACS) 2024, estimaciones de 1 año, tabla B03003. https://data.census.gov/table/ACSDT1Y2024.B03003",
   "hispanos": 999427,
   "huella": 20.1,
   "historia": "Ningún asentamiento español ni mexicano permanente: solo el Camino Español entre Santa Fe y Los Ángeles, abierto en 1829. Su puntaje sale casi entero del nombre y de los 27 años de soberanía mexicana."
  },
  "fl": {
   "nombre": "Florida",
   "pct": 28.7,
   "texto": "La bautizó Juan Ponce de León en 1513 por la Pascua Florida. San Agustín, fundada en 1565 por Pedro Menéndez de Avilés, es la ciudad de fundación europea habitada de forma continua más antigua de la parte continental del país. Fue española hasta 1763 y otra vez entre 1783 y 1821. El exilio cubano desde 1959 y las migraciones posteriores de Puerto Rico, Venezuela y Colombia la hicieron el tercer estado por número de hispanos: 6,7 millones, el 28,7%.",
   "fuente": "U.S. Census Bureau, American Community Survey (ACS) 2024, estimaciones de 1 año, tabla B03003; comparación con blancos no hispanos, tabla B03002 de la misma encuesta. https://data.census.gov/table/ACSDT1Y2024.B03003",
   "hispanos": 6706088,
   "huella": 78.0,
   "historia": "San Agustín (1565) se levantó junto a la aldea timucua de Seloy. Es la de fundación europea habitada sin interrupción más antigua del país continental, no de todo EE.UU.: San Juan de Puerto Rico es de 1521."
  },
  "nj": {
   "nombre": "Nueva Jersey",
   "pct": 23.5,
   "texto": "Sin pasado colonial español: lo hispano aquí es del siglo XX. Union City y West New York concentraron el exilio cubano desde los años sesenta; después llegaron dominicanos, puertorriqueños, colombianos, peruanos y ecuatorianos al corredor de Newark, Paterson y Elizabeth. Con 23,5% y 2,23 millones de personas es el estado más hispano del noreste por proporción, por delante de Nueva York y Connecticut.",
   "fuente": "U.S. Census Bureau, American Community Survey (ACS) 2024, estimaciones de 1 año, tabla B03003. https://data.census.gov/table/ACSDT1Y2024.B03003",
   "hispanos": 2229464,
   "huella": 0.0,
   "historia": "Sin presencia española ni mexicana histórica."
  },
  "co": {
   "nombre": "Colorado",
   "pct": 23.2,
   "texto": "El nombre es español, por el río Colorado. El sur del estado perteneció a México hasta 1848 y lo poblaron familias hispanas venidas de Nuevo México: San Luis, fundada en 1851 en el valle de San Luis, es la población más antigua de Colorado. Pueblo, Durango, Alamosa, Trinidad y La Junta siguen en el mapa. Hoy el 23,2% de la población es hispana, 1,38 millones de personas.",
   "fuente": "U.S. Census Bureau, American Community Survey (ACS) 2024, estimaciones de 1 año, tabla B03003. https://data.census.gov/table/ACSDT1Y2024.B03003",
   "hispanos": 1382948,
   "huella": 14.4,
   "historia": "España no fundó poblado permanente. Las mercedes de Conejos y Sangre de Cristo son de época mexicana, pero San Luis, el pueblo más antiguo del estado, se levantó en 1851, ya bajo bandera estadounidense."
  },
  "ny": {
   "nombre": "Nueva York",
   "pct": 20.2,
   "texto": "Cuarto estado por número absoluto: 4,02 millones de hispanos. La ley Jones de 1917 dio la ciudadanía estadounidense a los puertorriqueños, y la gran migración posterior a 1945 formó El Barrio, en el este de Harlem. Washington Heights es el núcleo dominicano más conocido del país. Mexicanos, ecuatorianos y colombianos completan un conjunto que hoy es el 20,2% del estado, justo en la media nacional.",
   "fuente": "U.S. Census Bureau, American Community Survey (ACS) 2024, estimaciones de 1 año, tabla B03003. https://data.census.gov/table/ACSDT1Y2024.B03003",
   "hispanos": 4019288,
   "huella": 0.0,
   "historia": "Sin presencia española ni mexicana histórica."
  },
  "il": {
   "nombre": "Illinois",
   "pct": 19.4,
   "texto": "Chicago atrajo trabajadores mexicanos desde los años diez del siglo XX para los ferrocarriles y la siderurgia; de ahí salieron los barrios de Pilsen y La Villita. Los puertorriqueños se asentaron alrededor de Humboldt Park. Con 2,46 millones de hispanos, el 19,4%, Illinois es el quinto estado por número absoluto y el más hispano del Medio Oeste por proporción.",
   "fuente": "U.S. Census Bureau, American Community Survey (ACS) 2024, estimaciones de 1 año, tabla B03003. https://data.census.gov/table/ACSDT1Y2024.B03003",
   "hispanos": 2462768,
   "huella": 0.0,
   "historia": "Sin presencia española ni mexicana histórica."
  },
  "ct": {
   "nombre": "Connecticut",
   "pct": 19.2,
   "texto": "La migración puertorriqueña de mediados del siglo XX a las fábricas y al cultivo de tabaco del valle del río Connecticut dejó comunidades grandes en Hartford, Bridgeport, New Britain y Waterbury. Después llegaron dominicanos, mexicanos y ecuatorianos. Hoy el 19,2% de los residentes es hispano: 706.806 personas sobre 3,67 millones de habitantes.",
   "fuente": "U.S. Census Bureau, American Community Survey (ACS) 2024, estimaciones de 1 año, tabla B03003. https://data.census.gov/table/ACSDT1Y2024.B03003",
   "hispanos": 706806,
   "huella": 0.0,
   "historia": "Sin presencia española ni mexicana histórica."
  },
  "ri": {
   "nombre": "Rhode Island",
   "pct": 18.8,
   "texto": "El estado de menor superficie del país tiene una de las proporciones hispanas más altas del noreste: 18,8%. Providence, Central Falls y Pawtucket concentran comunidades dominicana, guatemalteca, colombiana y puertorriqueña llegadas a partir de los años setenta. En cifras absolutas son 208.976 personas: proporción alta sobre una población pequeña, 1,11 millones de habitantes.",
   "fuente": "U.S. Census Bureau, American Community Survey (ACS) 2024, estimaciones de 1 año, tabla B03003. https://data.census.gov/table/ACSDT1Y2024.B03003",
   "hispanos": 208976,
   "huella": 0.0,
   "historia": "Sin presencia española ni mexicana histórica."
  },
  "ut": {
   "nombre": "Utah",
   "pct": 16.9,
   "texto": "La expedición de los franciscanos Francisco Atanasio Domínguez y Silvestre Vélez de Escalante atravesó y cartografió Utah en 1776 buscando ruta a California; más tarde el Camino Viejo Español cruzó el estado. La población hispana actual, 16,9% y 592.412 personas, viene sobre todo de la migración mexicana del siglo XX a la minería, la agricultura y la construcción del área de Salt Lake City.",
   "fuente": "U.S. Census Bureau, American Community Survey (ACS) 2024, estimaciones de 1 año, tabla B03003. https://data.census.gov/table/ACSDT1Y2024.B03003",
   "hispanos": 592412,
   "huella": 15.0,
   "historia": "La expedición de Domínguez y Escalante cruzó el territorio en 1776 sin dejar poblado. España nunca se asentó y el nombre viene de los yutas, llegado al inglés a través del español."
  },
  "or": {
   "nombre": "Oregón",
   "pct": 15.5,
   "texto": "Las expediciones españolas de Bruno de Heceta y Juan Francisco de la Bodega y Quadra recorrieron esta costa en 1775 y dejaron topónimos como Heceta Head. Lo hispano de hoy, sin embargo, viene del trabajo agrícola del siglo XX en el valle de Willamette y del programa bracero iniciado en 1942. El 15,5% de la población es hispana: 662.740 personas.",
   "fuente": "U.S. Census Bureau, American Community Survey (ACS) 2024, estimaciones de 1 año, tabla B03003. https://data.census.gov/table/ACSDT1Y2024.B03003",
   "hispanos": 662740,
   "huella": 0.0,
   "historia": "Bruno de Heceta tomó posesión de la costa en 1775 y avistó la desembocadura del Columbia, pero sin asentamiento ni soberanía efectiva la fórmula le da cero: mide poblamiento y soberanía, no exploración."
  },
  "wa": {
   "nombre": "Washington",
   "pct": 15.0,
   "texto": "La huella española está en la carta marina: las islas San Juan, Fidalgo, Guemes, López y Camano, y los estrechos de Rosario y Haro, los nombraron las expediciones de Quimper, Eliza y Narváez entre 1790 y 1792. En 1792 España levantó en la actual Neah Bay el puesto de Núñez Gaona, el único asentamiento español en este estado, abandonado ese mismo año. Hoy el 15,0% de la población es hispana: 1,19 millones de personas.",
   "fuente": "U.S. Census Bureau, American Community Survey (ACS) 2024, estimaciones de 1 año, tabla B03003. https://data.census.gov/table/ACSDT1Y2024.B03003",
   "hispanos": 1194522,
   "huella": 3.1,
   "historia": "Núñez Gaona, en la actual Neah Bay, fue el único asentamiento español del noroeste: se instaló en mayo de 1792 y se levantó ese mismo otoño. Queda la toponimia marítima: Fidalgo, Rosario, López."
  },
  "id": {
   "nombre": "Idaho",
   "pct": 14.3,
   "texto": "La población hispana de Idaho creció con el trabajo agrícola del siglo XX —remolacha, patata y ganado— y con el programa bracero a partir de 1942; el sur del estado, en el valle del río Snake, concentra la mayoría. Hoy son 286.185 personas, el 14,3% del estado. No hubo asentamiento colonial español en este territorio.",
   "fuente": "U.S. Census Bureau, American Community Survey (ACS) 2024, estimaciones de 1 año, tabla B03003. https://data.census.gov/table/ACSDT1Y2024.B03003",
   "hispanos": 286185,
   "huella": 0.0,
   "historia": "Sin presencia española ni mexicana histórica."
  },
  "ks": {
   "nombre": "Kansas",
   "pct": 14.2,
   "texto": "La expedición de Francisco Vázquez de Coronado llegó en 1541 a Quivira, en el centro de lo que hoy es Kansas, buscando ciudades de oro que no existían: reclamación cartográfica sin ningún control efectivo. La población hispana actual nació de los ferrocarriles y los frigoríficos de Garden City, Dodge City y Liberal. Hoy es el 14,2% del estado: 422.762 personas.",
   "fuente": "U.S. Census Bureau, American Community Survey (ACS) 2024, estimaciones de 1 año, tabla B03003. https://data.census.gov/table/ACSDT1Y2024.B03003",
   "hispanos": 422762,
   "huella": 2.0,
   "historia": "Territorio de la Luisiana española sin un solo poblado español. Coronado llegó a Quivira en 1541 y el padre Juan de Padilla murió allí, pero la exploración no es uno de los cinco factores."
  },
  "ma": {
   "nombre": "Massachusetts",
   "pct": 14.0,
   "texto": "Sin pasado colonial español. Lo hispano llegó con la migración puertorriqueña de posguerra a las ciudades industriales —Holyoke, Springfield y Lawrence— y después con dominicanos, guatemaltecos y salvadoreños en el área de Boston. Hoy son 998.795 personas, el 14,0% del estado: a punto de pasar del millón.",
   "fuente": "U.S. Census Bureau, American Community Survey (ACS) 2024, estimaciones de 1 año, tabla B03003. https://data.census.gov/table/ACSDT1Y2024.B03003",
   "hispanos": 998795,
   "huella": 0.0,
   "historia": "Sin presencia española ni mexicana histórica."
  },
  "ne": {
   "nombre": "Nebraska",
   "pct": 13.5,
   "texto": "La expedición de Pedro de Villasur fue destruida en 1720 en las llanuras de lo que hoy es Nebraska, y con ella el intento español de frenar la influencia francesa en esta zona: nunca hubo asentamiento. La comunidad hispana actual nació de los ferrocarriles y los frigoríficos del sur de Omaha a comienzos del siglo XX, y de la migración centroamericana a Lexington y Grand Island. Hoy, 13,5% y 271.524 personas.",
   "fuente": "U.S. Census Bureau, American Community Survey (ACS) 2024, estimaciones de 1 año, tabla B03003. https://data.census.gov/table/ACSDT1Y2024.B03003",
   "hispanos": 271524,
   "huella": 0.0,
   "historia": "De derecho fue Luisiana española de 1762 a 1800, pero España nunca se asentó: la expedición de Villasur fue aniquilada en 1720 cerca del actual río Loup. La fórmula le da cero y así se publica."
  },
  "ok": {
   "nombre": "Oklahoma",
   "pct": 13.5,
   "texto": "Este territorio formó parte de la Luisiana española entre 1762 y 1800, pero sin asentamiento ni control real: reclamación en el mapa, no gobierno sobre el terreno. La población hispana actual, 551.226 personas y 13,5% del estado, procede de la migración mexicana del siglo XX a la agricultura, la construcción y los servicios de Oklahoma City y Tulsa.",
   "fuente": "U.S. Census Bureau, American Community Survey (ACS) 2024, estimaciones de 1 año, tabla B03003. https://data.census.gov/table/ACSDT1Y2024.B03003",
   "hispanos": 551226,
   "huella": 2.0,
   "historia": "Luisiana española y, en la franja del mango, territorio mexicano hasta 1848. No hubo misión ni presidio: solo rutas de comercio que salían de Nuevo México hacia las praderas."
  },
  "md": {
   "nombre": "Maryland",
   "pct": 13.3,
   "texto": "El área metropolitana de Washington reúne desde los años ochenta una de las mayores concentraciones de salvadoreños del país, junto a hondureños, guatemaltecos y mexicanos; los condados de Montgomery y Prince George's son el centro. Hoy el 13,3% de la población de Maryland es hispana: 830.948 personas sobre 6,26 millones de habitantes.",
   "fuente": "U.S. Census Bureau, American Community Survey (ACS) 2024, estimaciones de 1 año, tabla B03003. https://data.census.gov/table/ACSDT1Y2024.B03003",
   "hispanos": 830948,
   "huella": 0.0,
   "historia": "Sin presencia española ni mexicana histórica."
  },
  "dc": {
   "nombre": "Distrito de Columbia",
   "pct": 12.6,
   "texto": "La capital federal no es un estado: no tiene senadores y su delegado en la Cámara de Representantes no vota. La guerra civil salvadoreña de los años ochenta llevó a Mount Pleasant y Columbia Heights una comunidad que marcó esos barrios y sigue siendo el núcleo hispano de la ciudad. Hoy el 12,6% de sus 702.250 residentes es hispano: 88.430 personas.",
   "fuente": "U.S. Census Bureau, American Community Survey (ACS) 2024, estimaciones de 1 año, tabla B03003. https://data.census.gov/table/ACSDT1Y2024.B03003",
   "huella": 0.0,
   "historia": "Sin presencia española ni mexicana histórica."
  },
  "nc": {
   "nombre": "Carolina del Norte",
   "pct": 12.0,
   "texto": "Uno de los crecimientos hispanos más rápidos del país: hoy es el 12,0% del estado, 1,32 millones de personas, sobre todo mexicanos y centroamericanos llegados a la construcción, la avicultura y el tabaco desde los años noventa. Charlotte, Raleigh-Durham y Winston-Salem concentran la mayoría. No hubo asentamiento español estable en este territorio.",
   "fuente": "U.S. Census Bureau, American Community Survey (ACS) 2024, estimaciones de 1 año, tabla B03003. https://data.census.gov/table/ACSDT1Y2024.B03003",
   "hispanos": 1324570,
   "huella": 3.1,
   "historia": "El fuerte San Juan, construido en el poblado nativo de Joara, fue el primer asentamiento europeo del interior del país (1567), pero sus habitantes lo quemaron año y medio después."
  },
  "de": {
   "nombre": "Delaware",
   "pct": 11.7,
   "texto": "Delaware no tuvo presencia colonial española. Su población hispana, 122.813 personas sobre 1.051.917 habitantes, el 11,7%, se formó con migración mexicana y guatemalteca a la avicultura del condado de Sussex y con comunidades puertorriqueña y dominicana en Wilmington y Georgetown. La proporción queda por debajo de la media nacional, que en 2024 fue del 20,0%.",
   "fuente": "U.S. Census Bureau, American Community Survey (ACS) 2024, estimaciones de 1 año, tabla B03003. https://data.census.gov/table/ACSDT1Y2024.B03003",
   "hispanos": 122813,
   "huella": 0.0,
   "historia": "Sin presencia española ni mexicana histórica."
  },
  "ga": {
   "nombre": "Georgia",
   "pct": 11.6,
   "texto": "La costa de Georgia fue la provincia española de Guale, con misiones franciscanas como Santa Catalina desde el siglo XVI; España las replegó hacia San Agustín a finales del XVII ante la presión inglesa. Lo hispano de hoy no desciende de allí: viene de la migración mexicana y centroamericana al área de Atlanta y a la agricultura del sur del estado desde los años noventa. Hoy, 11,6% y 1,30 millones de personas.",
   "fuente": "U.S. Census Bureau, American Community Survey (ACS) 2024, estimaciones de 1 año, tabla B03003. https://data.census.gov/table/ACSDT1Y2024.B03003",
   "hispanos": 1299200,
   "huella": 37.0,
   "historia": "La cadena de misiones de Guale y Mocama, desde 1566, fue el primer asentamiento europeo del territorio, siglo y medio antes de Savannah. España se retiró a Florida en la década de 1680 y de ahí viene la ruptura."
  },
  "va": {
   "nombre": "Virginia",
   "pct": 11.6,
   "texto": "El primer intento europeo de asentamiento en la bahía de Chesapeake fue español: la misión jesuita de Ajacán, en 1570, destruida al año siguiente. No dejó continuidad alguna. Lo hispano actual se concentra en el norte de Virginia, con salvadoreños, bolivianos y peruanos llegados desde los años ochenta al área de Washington. Hoy el 11,6% del estado es hispano: 1,02 millones de personas.",
   "fuente": "U.S. Census Bureau, American Community Survey (ACS) 2024, estimaciones de 1 año, tabla B03003. https://data.census.gov/table/ACSDT1Y2024.B03003",
   "hispanos": 1017833,
   "huella": 0.0,
   "historia": "Sin presencia española ni mexicana histórica."
  },
  "wy": {
   "nombre": "Wyoming",
   "pct": 11.1,
   "texto": "El estado menos poblado del país tiene, sin embargo, una proporción hispana apreciable: 11,1%, es decir 65.030 personas sobre 587.618 habitantes. La comunidad se formó con el trabajo ferroviario, la minería del carbón y el pastoreo de ovejas desde finales del siglo XIX, con núcleos en Cheyenne, Laramie y el condado de Sweetwater.",
   "fuente": "U.S. Census Bureau, American Community Survey (ACS) 2024, estimaciones de 1 año, tabla B03003. https://data.census.gov/table/ACSDT1Y2024.B03003",
   "huella": 2.0,
   "historia": "Solo la esquina suroeste del actual estado estuvo bajo soberanía mexicana, hasta 1848. Ni España ni México fundaron nada dentro de sus límites de hoy."
  },
  "hi": {
   "nombre": "Hawái",
   "pct": 10.2,
   "texto": "A comienzos del siglo XX las plantaciones de azúcar llevaron a Hawái unos miles de trabajadores puertorriqueños, y sus descendientes mantienen comunidad e identidad propias en las islas. Hoy el 10,2% de la población es hispana, 147.896 personas, también con mexicanos y centroamericanos de llegada reciente.",
   "fuente": "U.S. Census Bureau, American Community Survey (ACS) 2024, estimaciones de 1 año, tabla B03003. https://data.census.gov/table/ACSDT1Y2024.B03003",
   "hispanos": 147896,
   "huella": 0.0,
   "historia": "Sin presencia española ni mexicana histórica."
  },
  "ar": {
   "nombre": "Arkansas",
   "pct": 9.5,
   "texto": "Arkansas fue parte de la Luisiana española entre 1762 y 1800: el Fuerte Carlos III, en el Puesto de Arkansas, sufrió en 1783 el único combate de la guerra de independencia estadounidense en territorio del actual estado. La población hispana de hoy, 294.671 personas y 9,5%, llegó sobre todo a la avicultura y el procesamiento de alimentos del noroeste desde los años noventa.",
   "fuente": "U.S. Census Bureau, American Community Survey (ACS) 2024, estimaciones de 1 año, tabla B03003. https://data.census.gov/table/ACSDT1Y2024.B03003",
   "hispanos": 294671,
   "huella": 14.4,
   "historia": "El Puesto de Arkansas pasó a manos españolas en 1769 y se rebautizó fuerte Carlos III: fue el único punto guarnecido del territorio, y el asentamiento europeo original era francés."
  },
  "pa": {
   "nombre": "Pensilvania",
   "pct": 9.4,
   "texto": "La migración puertorriqueña de posguerra al norte de Filadelfia y a las ciudades industriales del valle del Lehigh dejó comunidades muy visibles en Allentown, Bethlehem, Reading y Lancaster, donde los hispanos son hoy una parte central de la población urbana. En todo el estado son 1,23 millones de personas, el 9,4% de los habitantes de Pensilvania.",
   "fuente": "U.S. Census Bureau, American Community Survey (ACS) 2024, estimaciones de 1 año, tabla B03003. https://data.census.gov/table/ACSDT1Y2024.B03003",
   "hispanos": 1232617,
   "huella": 0.0,
   "historia": "Sin presencia española ni mexicana histórica."
  },
  "in": {
   "nombre": "Indiana",
   "pct": 9.0,
   "texto": "Los mexicanos llegaron al noroeste de Indiana desde los años diez del siglo XX, a las acerías de Gary y East Chicago y a los ferrocarriles. Hoy la población hispana es de 626.616 personas, el 9,0% del estado, repartida también por Indianápolis y las zonas agrícolas del norte.",
   "fuente": "U.S. Census Bureau, American Community Survey (ACS) 2024, estimaciones de 1 año, tabla B03003. https://data.census.gov/table/ACSDT1Y2024.B03003",
   "hispanos": 626616,
   "huella": 0.0,
   "historia": "Sin presencia española ni mexicana histórica."
  },
  "wi": {
   "nombre": "Wisconsin",
   "pct": 8.4,
   "texto": "Las curtidurías y fundiciones del sur de Milwaukee atrajeron trabajadores mexicanos desde los años veinte; más tarde llegaron puertorriqueños y, al campo, jornaleros para la industria láctea. Hoy el 8,4% de Wisconsin es hispano: 499.904 personas, a un paso del medio millón.",
   "fuente": "U.S. Census Bureau, American Community Survey (ACS) 2024, estimaciones de 1 año, tabla B03003. https://data.census.gov/table/ACSDT1Y2024.B03003",
   "hispanos": 499904,
   "huella": 0.0,
   "historia": "Sin presencia española ni mexicana histórica."
  },
  "sc": {
   "nombre": "Carolina del Sur",
   "pct": 7.9,
   "texto": "España fundó en 1566 Santa Elena, en la actual isla de Parris, capital de La Florida española durante una década y abandonada en 1587. No dejó población. Lo hispano de hoy, 434.217 personas y 7,9% del estado, es migración reciente a la construcción, la hostelería de la costa y la agricultura.",
   "fuente": "U.S. Census Bureau, American Community Survey (ACS) 2024, estimaciones de 1 año, tabla B03003. https://data.census.gov/table/ACSDT1Y2024.B03003",
   "hispanos": 434217,
   "huella": 17.1,
   "historia": "Santa Elena, en la actual isla de Parris, fue capital de La Florida entre 1566 y 1576 y se abandonó definitivamente en 1587. El desembarco de Lucas Vázquez de Ayllón fue en 1526, pero dónde se levantó San Miguel de Gualdape sigue en discusión."
  },
  "tn": {
   "nombre": "Tennessee",
   "pct": 7.8,
   "texto": "Tennessee no tuvo asentamiento español estable, aunque la expedición de Hernando de Soto cruzó el río Misisipi por esta zona en 1541. La población hispana es reciente: creció con la construcción y los servicios de Nashville y Memphis desde los años noventa. Hoy son 566.839 personas, el 7,8% del estado.",
   "fuente": "U.S. Census Bureau, American Community Survey (ACS) 2024, estimaciones de 1 año, tabla B03003. https://data.census.gov/table/ACSDT1Y2024.B03003",
   "hispanos": 566839,
   "huella": 3.2,
   "historia": "Espana construyo el fuerte San Fernando de las Barrancas en 1795, en lo que hoy es Memphis, y lo desmantelo en 1797 al aplicarse el Tratado de San Lorenzo. No hubo nada mas."
  },
  "ia": {
   "nombre": "Iowa",
   "pct": 7.8,
   "texto": "La población hispana de Iowa se formó en dos oleadas: trabajadores mexicanos en los ferrocarriles y los frigoríficos desde los años veinte, y migración mexicana y centroamericana a la industria cárnica desde los noventa, en localidades como Marshalltown, Storm Lake y West Liberty. Hoy son 253.224 personas, el 7,8% del estado.",
   "fuente": "U.S. Census Bureau, American Community Survey (ACS) 2024, estimaciones de 1 año, tabla B03003. https://data.census.gov/table/ACSDT1Y2024.B03003",
   "hispanos": 253224,
   "huella": 8.8,
   "historia": "El gobernador español de Luisiana concedió en 1796 las Minas de España a Julien Dubuque, colono francocanadiense: el título era español y el poblador no. Es toda la huella del estado."
  },
  "la": {
   "nombre": "Luisiana",
   "pct": 7.8,
   "texto": "Luisiana fue colonia española de 1762 a 1800. Tras el incendio de 1788, Nueva Orleans se reconstruyó bajo administración española: la arquitectura del Barrio Francés es en buena parte española, no francesa. Entre 1778 y 1783 llegaron los isleños canarios a la parroquia de San Bernardo y su habla española sobrevivió hasta el siglo XX. El gobernador Bernardo de Gálvez tomó Baton Rouge a los británicos en 1779. Hoy el estado es 7,8% hispano: 357.628 personas.",
   "fuente": "U.S. Census Bureau, American Community Survey (ACS) 2024, estimaciones de 1 año, tabla B03003. https://data.census.gov/table/ACSDT1Y2024.B03003",
   "hispanos": 357628,
   "huella": 19.4,
   "historia": "Española de hecho de 1769 a 1803. España fundó Nueva Iberia y Galveztown en 1779 y reconstruyó Nueva Orleans tras los incendios de 1788 y 1794, de donde viene su casco histórico de aire español."
  },
  "ak": {
   "nombre": "Alaska",
   "pct": 7.7,
   "texto": "Las expediciones españolas de Juan Pérez, en 1774, y de Bodega y Quadra llegaron hasta estas costas, y de ahí vienen topónimos como Valdez, Córdova y la bahía de Bucareli: reclamación cartográfica sin asentamiento. La población hispana actual, 57.229 personas y 7,7% del estado, se concentra en Anchorage y vive del sector público, la pesca y los servicios.",
   "fuente": "U.S. Census Bureau, American Community Survey (ACS) 2024, estimaciones de 1 año, tabla B03003. https://data.census.gov/table/ACSDT1Y2024.B03003",
   "huella": 0.0,
   "historia": "Cuatro expediciones entre 1774 y 1792 dejaron nombres que siguen en el mapa —Valdez, Cordova, Revillagigedo, Bucareli— pero ningun poblado. La formula, que mide asentamiento, le da cero."
  },
  "mn": {
   "nombre": "Minnesota",
   "pct": 6.7,
   "texto": "La comunidad hispana de Minnesota empezó con jornaleros mexicanos de la remolacha azucarera que se asentaron en el West Side de Saint Paul a partir de los años veinte; después llegaron mexicanos, ecuatorianos y centroamericanos a las Ciudades Gemelas y a la industria cárnica del sur. Hoy son 388.435 personas, el 6,7% del estado.",
   "fuente": "U.S. Census Bureau, American Community Survey (ACS) 2024, estimaciones de 1 año, tabla B03003. https://data.census.gov/table/ACSDT1Y2024.B03003",
   "hispanos": 388435,
   "huella": 0.0,
   "historia": "Sin presencia española ni mexicana histórica."
  },
  "mi": {
   "nombre": "Míchigan",
   "pct": 6.1,
   "texto": "Las fábricas de automóviles y las remolacheras llevaron mexicanos a Míchigan desde los años veinte; el barrio de Mexicantown, en el suroeste de Detroit, nació de ahí. Hoy la población hispana es de 621.831 personas, el 6,1% del estado, con núcleos también en Grand Rapids, Holland y Saginaw.",
   "fuente": "U.S. Census Bureau, American Community Survey (ACS) 2024, estimaciones de 1 año, tabla B03003. https://data.census.gov/table/ACSDT1Y2024.B03003",
   "hispanos": 621831,
   "huella": 0.0,
   "historia": "Sin presencia española ni mexicana histórica."
  },
  "al": {
   "nombre": "Alabama",
   "pct": 6.0,
   "texto": "Móvil fue española entre 1780, cuando Bernardo de Gálvez se la tomó a los británicos y la integró en la Florida Occidental, y 1813, cuando Estados Unidos la ocupó durante la guerra de 1812. Esa etapa no dejó población hispana continua. La de hoy, 306.966 personas y 6,0% del estado, es migración reciente a la construcción, la avicultura y las plantas de automóviles.",
   "fuente": "U.S. Census Bureau, American Community Survey (ACS) 2024, estimaciones de 1 año, tabla B03003. https://data.census.gov/table/ACSDT1Y2024.B03003",
   "hispanos": 306966,
   "huella": 14.3,
   "historia": "Espana tomo Mobila en 1780 y la retuvo hasta 1813, y fundo los fuertes San Esteban y Confederacion. El primer asentamiento europeo permanente del territorio, sin embargo, fue frances, en 1702."
  },
  "mo": {
   "nombre": "Misuri",
   "pct": 5.6,
   "texto": "San Luis y Santa Genoveva estuvieron bajo administración española entre 1762 y 1800, dentro de la Luisiana española, con gobernadores y milicia españoles pero población mayoritariamente francesa. La comunidad hispana actual, 346.700 personas y 5,6% del estado, se concentra en el Westside de Kansas City y en el sur de San Luis.",
   "fuente": "U.S. Census Bureau, American Community Survey (ACS) 2024, estimaciones de 1 año, tabla B03003. https://data.census.gov/table/ACSDT1Y2024.B03003",
   "hispanos": 346700,
   "huella": 19.4,
   "historia": "San Luis fue la capital de la Alta Luisiana española. Bajo España se fundaron Carondelet, San Fernando (hoy Florissant), Nuevo Madrid (1789) y Cabo Girardeau (1793), pero los primeros colonos europeos fueron franceses."
  },
  "ky": {
   "nombre": "Kentucky",
   "pct": 5.5,
   "texto": "Kentucky no tuvo presencia colonial española. Su población hispana es reciente y creció con la cría de caballos, la construcción y la industria de Louisville y Lexington desde los años noventa. Hoy son 252.640 personas, el 5,5% del estado, muy por debajo de la media nacional del 20,0%.",
   "fuente": "U.S. Census Bureau, American Community Survey (ACS) 2024, estimaciones de 1 año, tabla B03003. https://data.census.gov/table/ACSDT1Y2024.B03003",
   "hispanos": 252640,
   "huella": 0.0,
   "historia": "Sin presencia española ni mexicana histórica."
  },
  "oh": {
   "nombre": "Ohio",
   "pct": 5.1,
   "texto": "La comunidad hispana más antigua de Ohio es puertorriqueña: desde finales de los años cuarenta las acerías de Lorain y Cleveland reclutaron trabajadores de la isla. Después llegaron mexicanos al noroeste agrícola, a Toledo y Fremont. Hoy son 606.933 personas, el 5,1% del estado.",
   "fuente": "U.S. Census Bureau, American Community Survey (ACS) 2024, estimaciones de 1 año, tabla B03003. https://data.census.gov/table/ACSDT1Y2024.B03003",
   "hispanos": 606933,
   "huella": 0.0,
   "historia": "Sin presencia española ni mexicana histórica."
  },
  "nh": {
   "nombre": "Nuevo Hampshire",
   "pct": 5.0,
   "texto": "Nuevo Hampshire tiene una de las proporciones hispanas más bajas de Nueva Inglaterra: 5,0%, es decir 70.912 personas sobre 1,41 millones de habitantes. La comunidad es reciente y se concentra en Manchester y Nashua, con origen sobre todo dominicano y puertorriqueño, por cercanía con el norte de Massachusetts.",
   "fuente": "U.S. Census Bureau, American Community Survey (ACS) 2024, estimaciones de 1 año, tabla B03003. https://data.census.gov/table/ACSDT1Y2024.B03003",
   "huella": 0.0,
   "historia": "Sin presencia española ni mexicana histórica."
  },
  "nd": {
   "nombre": "Dakota del Norte",
   "pct": 5.0,
   "texto": "Dakota del Norte quedó dentro de la Luisiana que España administró entre 1762 y 1800: una reclamación en el mapa, sin asentamiento ni gobierno efectivo tan al norte. La población hispana actual, 39.853 personas y 5,0% del estado, creció con el auge petrolero de la cuenca de Bakken y con la industria cárnica. Es uno de los conjuntos hispanos más pequeños del país.",
   "fuente": "U.S. Census Bureau, American Community Survey (ACS) 2024, estimaciones de 1 año, tabla B03003. https://data.census.gov/table/ACSDT1Y2024.B03003",
   "huella": 0.0,
   "historia": "Sin presencia española ni mexicana histórica."
  },
  "mt": {
   "nombre": "Montana",
   "pct": 4.9,
   "texto": "Montana no tuvo asentamiento español. Su población hispana se formó con el pastoreo de ovejas, el ferrocarril y la remolacha azucarera desde finales del siglo XIX, con núcleos en Billings y el valle del Yellowstone. Hoy son 55.506 personas, el 4,9% del estado, sobre 1,14 millones de habitantes.",
   "fuente": "U.S. Census Bureau, American Community Survey (ACS) 2024, estimaciones de 1 año, tabla B03003. https://data.census.gov/table/ACSDT1Y2024.B03003",
   "huella": 8.0,
   "historia": "Sin presencia española de ninguna clase: su puntaje sale entero del nombre, que es la palabra montaña. Es el caso que mejor muestra el límite de medir toponimia como si fuera historia."
  },
  "sd": {
   "nombre": "Dakota del Sur",
   "pct": 4.9,
   "texto": "Dakota del Sur quedó dentro de la Luisiana que España administró entre 1762 y 1800, sin asentamiento ni control efectivo. Su población hispana es reciente: 44.947 personas, el 4,9% del estado, ligada sobre todo a la industria cárnica de Sioux Falls y Huron y al trabajo agrícola del este.",
   "fuente": "U.S. Census Bureau, American Community Survey (ACS) 2024, estimaciones de 1 año, tabla B03003. https://data.census.gov/table/ACSDT1Y2024.B03003",
   "huella": 0.0,
   "historia": "Sin presencia española ni mexicana histórica."
  },
  "ms": {
   "nombre": "Misisipi",
   "pct": 4.0,
   "texto": "Natchez fue española entre 1779 y 1798, cuando Bernardo de Gálvez tomó la Florida Occidental a los británicos; el trazado español de la ciudad todavía se reconoce. Esa etapa no dejó continuidad demográfica. Hoy Misisipi es 4,0% hispano, 118.529 personas: una de las cinco proporciones más bajas de los 52 territorios de esta lista.",
   "fuente": "U.S. Census Bureau, American Community Survey (ACS) 2024, estimaciones de 1 año, tabla B03003. https://data.census.gov/table/ACSDT1Y2024.B03003",
   "hispanos": 118529,
   "huella": 12.9,
   "historia": "El distrito de Natchez fue español de 1779 a 1798 y España levantó el fuerte Nogales en 1791, en el actual Vicksburg. Antes se habían asentado los franceses, en 1699, en la bahía de Biloxi."
  },
  "vt": {
   "nombre": "Vermont",
   "pct": 2.7,
   "texto": "Vermont tiene la tercera proporción hispana más baja del país, después de Virginia Occidental y Maine: 2,7%, es decir 17.401 personas sobre 648.493 habitantes, el conjunto hispano más pequeño de los cincuenta estados. Hay jornaleros latinoamericanos en las granjas lácteas, pero no una comunidad urbana consolidada.",
   "fuente": "U.S. Census Bureau, American Community Survey (ACS) 2024, estimaciones de 1 año, tabla B03003. https://data.census.gov/table/ACSDT1Y2024.B03003",
   "huella": 0.0,
   "historia": "Sin presencia española ni mexicana histórica."
  },
  "me": {
   "nombre": "Maine",
   "pct": 2.3,
   "texto": "Maine tiene la segunda proporción hispana más baja del país: 2,3%, es decir 32.869 personas sobre 1,41 millones de habitantes. No hubo presencia colonial española y la migración latinoamericana ha sido escasa; en los últimos años han llegado trabajadores a la hostelería de la costa y al procesamiento de marisco.",
   "fuente": "U.S. Census Bureau, American Community Survey (ACS) 2024, estimaciones de 1 año, tabla B03003. https://data.census.gov/table/ACSDT1Y2024.B03003",
   "huella": 0.0,
   "historia": "Sin presencia española ni mexicana histórica."
  },
  "wv": {
   "nombre": "Virginia Occidental",
   "pct": 2.3,
   "texto": "Virginia Occidental tiene la menor proporción hispana del país: 2,3%, es decir 41.002 personas sobre 1.769.979 habitantes. No hubo presencia colonial española aquí ni se ha formado una comunidad hispana urbana comparable a la de los estados vecinos. Es también el dato con el margen de error relativo más alto de los 52: más o menos 1.640 personas, un 4% del total.",
   "fuente": "U.S. Census Bureau, American Community Survey (ACS) 2024, estimaciones de 1 año, tabla B03003. https://data.census.gov/table/ACSDT1Y2024.B03003",
   "huella": 0.0,
   "historia": "Sin presencia española ni mexicana histórica."
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
  },
  "2.18,41.38": {
   "texto": "En abril de 1493 Colón entró en Barcelona con seis o siete taínos, loros y algo de oro, y fue recibido por Fernando II e Isabel I; la tradición sitúa la escena en el Salón del Tinell, pero los documentos solo aseguran que ocurrió en la ciudad. Cuatro meses antes, el 7 de diciembre de 1492, el rey había estado a punto de morir en la plaza del Rey: Joan de Canyamars, un campesino catalán, le abrió el cuello de una cuchillada. Fernando escuchó el relato de las Indias con la herida recién cosida. Debajo de todo aquello seguía Barcino, la colonia romana.",
   "fuente": "Dietari de l'Antic Consell Barceloní (Manual de Novells Ardits), entradas de diciembre de 1492 y abril de 1493; crónica de Pedro Miguel Carbonell; conjunto arqueológico de Barcino, MUHBA.",
   "fundacion": "poblado ibero previo (Barkeno), colonia romana de Barcino hacia el 10 a. C."
  },
  "-0.40,39.49": {
   "texto": "Todos los jueves a mediodía, siete u ocho hombres con blusón negro se sientan en sillas de madera ante la puerta de los Apóstoles de la catedral y reparten el agua del Turia. Es el Tribunal de las Aguas: juzga en valenciano y de palabra, sin abogados, y su fallo no se apela. Las acequias que administra quedaron reconocidas en el derecho del reino tras la conquista de Jaume I, que entró en la ciudad el 9 de octubre de 1238, y el reparto que aplica viene de época andalusí. La UNESCO lo inscribió en 2009 como patrimonio inmaterial. La ciudad romana, Valentia, se había fundado en 138 a. C. con veteranos licenciados.",
   "fuente": "UNESCO, Lista representativa del patrimonio cultural inmaterial (2009); Furs de València; Periochae de Tito Livio, libro 55, sobre la fundación de Valentia.",
   "fundacion": "Valentia romana fundada en 138 a. C., en territorio edetano"
  },
  "-0.89,41.65": {
   "texto": "El nombre de la ciudad es el nombre de un emperador pasado por tres idiomas. Hacia el 14 a. C. se fundó Caesar Augusta sobre Salduie, poblado sedetano que ya acuñaba moneda propia; fue la única ciudad del imperio que llevó el nombre completo de Augusto, y se repartió en lotes entre veteranos de las legiones IV Macedónica, VI Victrix y X Gémina. En árabe quedó Saraqusta, capital de una taifa rica en impuestos y en astrónomos, hasta que el 18 de diciembre de 1118 entró en ella Alfonso I el Batallador. Saraqusta se dijo después Zaragoza: Augusto sigue ahí, desfigurado.",
   "fuente": "Ruta de Caesaraugusta y Museo del Foro, Ayuntamiento de Zaragoza; monetario ibérico y romano del Museo de Zaragoza; documentación de la conquista de 1118 de Alfonso I.",
   "fundacion": "ciudad ibera de Salduie previa, Caesar Augusta hacia el 14 a. C."
  },
  "-6.34,38.91": {
   "texto": "Durante siglos, lo que hoy es el teatro romano de Mérida fue una loma con unas piedras asomando a la que los vecinos llamaban Las Siete Sillas; nadie sabía que debajo había un graderío para unas 6.000 personas. Se excavó a partir de 1910, con José Ramón Mélida al frente, y en 1933 Margarita Xirgu representó allí la Medea de Séneca en versión de Unamuno. Hubo una segunda cita en 1934 y después diecinueve años de silencio: el festival volvió en 1953, y desde entonces no ha parado. La ciudad se había fundado en el 25 a. C. para los soldados licenciados —emeriti— de las legiones V Alaudae y X Gémina, y su puente sobre el Guadiana tenía 60 arcos.",
   "fuente": "Consorcio de la Ciudad Monumental de Mérida; UNESCO, Conjunto Arqueológico de Mérida (1993); Turismo de Extremadura, fichas del teatro romano y del puente sobre el Guadiana.",
   "fundacion": "Emerita Augusta, fundada en el 25 a. C."
  },
  "-4.12,40.95": {
   "texto": "El 11 de diciembre de 1474 murió Enrique IV en Madrid. Dos días después, en Segovia, su media hermana Isabel se hizo proclamar reina con la espada desnuda llevada delante y la punta hacia arriba: un gesto de justicia que a varios nobles les pareció una insolencia, porque Fernando, su marido, estaba en Aragón y no se había enterado. Llegó en enero, furioso, y el 15 de enero de 1475 firmaron la Concordia de Segovia, que puso por escrito quién mandaba en qué. Isabel jugaba con ventaja: tenía dentro de la ciudad el Alcázar y el tesoro real.",
   "fuente": "Crónicas de Alfonso de Palencia y Hernando del Pulgar sobre la proclamación de 1474; texto de la Concordia de Segovia (enero de 1475).",
   "fundacion": "oppidum celtibérico previo, municipio romano; sin fecha de fundación"
  },
  "-4.75,41.65": {
   "texto": "Colón murió en Valladolid el 20 de mayo de 1506, el día siguiente de firmar su testamento, sin haber recuperado los cargos que le reclamaba a la Corona y convencido todavía de haber llegado a Asia. Lo enterraron en un convento de la ciudad, y allí empezó el viaje más largo de su vida: a Sevilla en 1509, a Santo Domingo hacia 1542, a La Habana en 1795 y otra vez a Sevilla en 1898, cada mudanza con una guerra detrás. Santo Domingo sostiene que los huesos buenos son los suyos; un análisis de ADN publicado en 2006 apoyó los de Sevilla.",
   "fuente": "Testamento de Cristóbal Colón, 19 de mayo de 1506; Casa-Museo de Colón, Valladolid; Catedral de Sevilla y estudio genético de 2006 dirigido por José Antonio Lorente.",
   "fundacion": "núcleo anterior repoblado por Pedro Ansúrez entre 1072 y 1095"
  },
  "-6.89,37.23": {
   "texto": "Palos no se ofreció voluntaria. El 30 de abril de 1492 una provisión real le ordenó entregar dos carabelas armadas y tripuladas, como pago de una pena que la villa debía a la Corona. La orden se leyó en voz alta en la iglesia de San Jorge y el pueblo se hizo el sordo, hasta que Martín Alonso Pinzón, armador de allí mismo, puso su nombre y su dinero detrás del viaje; entonces aparecieron los marineros. Zarparon antes del amanecer del 3 de agosto de 1492, unos noventa hombres, y volvieron el 15 de marzo de 1493.",
   "fuente": "Real provisión de 30 de abril de 1492 (Archivo General de Indias); Diario del primer viaje en la copia de Bartolomé de las Casas; Muelle de las Carabelas, Diputación de Huelva.",
   "fundacion": "villa documentada desde el siglo XIV, sin acta de fundación"
  },
  "-5.88,39.47": {
   "texto": "Francisco Pizarro nació en Trujillo hacia 1478, hijo no reconocido de un capitán, y murió apuñalado en Lima en 1541. Lo que volvió del Perú a este pueblo fue dinero: los palacios de la plaza mayor se levantaron con el rescate de Atahualpa. En el Palacio de la Conquista, los bustos de la fachada son Pizarro, la princesa inca Inés Huaylas Yupanqui y su hija Francisca, nacida en Perú en 1534, casada con su propio tío Hernando y, durante años, una de las mujeres más ricas de Extremadura. Del mismo pueblo salió Francisco de Orellana, que bajó el Amazonas en 1542.",
   "fuente": "Palacio de la Conquista de Trujillo (bustos e inscripciones de la fachada); Agustín de Zárate, Historia del descubrimiento y conquista del Perú (1555); entradas de Francisco Pizarro y Francisca Pizarro en el Diccionario Biográfico de la Real Academia de la Historia.",
   "fundacion": "Turgalium romano y Turyala andalusí; tomada por Fernando III en 1232"
  },
  "-103.33,20.67": {
   "texto": "Guadalajara hubo que fundarla cuatro veces en diez años porque las tres primeras no aguantaron. La gente de Nuño de Guzmán la plantó en Nochistlán (1532), luego en Tonalá (1533) y después en Tlacotán (1535). En 1541 la rebelión del Mixtón la dejó sitiada, y allí murió Pedro de Alvarado, el conquistador de Guatemala, el 4 de julio de 1541: no lo aplastó su propio caballo, sino el del escribano Baltasar de Montoya, que rodó cuesta abajo encima de él. Las familias supervivientes discutieron si huir; la tradición atribuye a Beatriz Hernández la frase que zanjó la junta, «el rey es mi gallo». El 14 de febrero de 1542 firmaron el acta en Atemajac. Esa es la Guadalajara de hoy.",
   "fuente": "Acta de fundación del 14 de febrero de 1542, Archivo Histórico de Jalisco; Enciclopedia de los Municipios de México, ficha de Guadalajara (INAFED).",
   "fundacion": "cuatro fundaciones entre 1532 y 1542 (la definitiva, 14 de febrero de 1542, en el valle de Atemajac, habitado por cocas y tecuexes)"
  },
  "-102.58,22.77": {
   "texto": "El 8 de septiembre de 1546 Juan de Tolosa acampó al pie del cerro de La Bufa, en tierra zacateca, y unos indígenas del lugar le mostraron piedras con plata. El campamento se volvió una de las ciudades más ricas de Nueva España: Felipe II le concedió escudo y el título de Muy Noble y Leal en 1588, y de aquí arrancaba el Camino Real de Tierra Adentro, la ruta de la plata que subía hasta Santa Fe de Nuevo México. Final abrupto: el 23 de junio de 1914 la División del Norte de Pancho Villa tomó el cerro a sangre, y Victoriano Huerta renunció tres semanas después, el 15 de julio.",
   "fuente": "INAH, Centro Histórico de Zacatecas; expediente UNESCO nº 676 (1993); partes de guerra de la División del Norte, junio de 1914.",
   "fundacion": "1546, en territorio zacateco y caxcán"
  },
  "-100.33,25.67": {
   "texto": "Monterrey hubo que fundarla tres veces. Alberto del Canto puso Santa Lucía en 1577 y la abandonaron. En 1582 Luis de Carvajal y de la Cueva fundó la villa de San Luis Rey de Francia; era judío converso, la Inquisición lo arrestó en 1589 y murió en prisión en 1591, y su villa se vació. El 20 de septiembre de 1596 Diego de Montemayor volvió con doce familias y refundó el sitio como Ciudad Metropolitana de Nuestra Señora de Monterrey, por el virrey conde de Monterrey. Tres siglos después, la Fundidora de Fierro y Acero (1900) convirtió ese pueblo de doce familias en la capital industrial del norte.",
   "fuente": "Acta de fundación de 1596, Archivo Histórico de Monterrey; proceso inquisitorial de Luis de Carvajal y de la Cueva, AGN, Ramo Inquisición.",
   "fundacion": "tres intentos: 1577, 1582 y la refundación del 20 de septiembre de 1596, junto al manantial de Santa Lucía, en territorio de grupos seminómadas del noreste"
  },
  "-96.67,17.08": {
   "texto": "Antes de los españoles aquí había una guarnición mexica, Huaxyácac, puesta para vigilar la ruta al Soconusco; los zapotecas llevaban siglos en el valle y Monte Albán ya estaba abandonado. Los españoles levantaron la villa de Antequera en 1529 y Carlos V le dio título de ciudad en 1532. Pero lo gordo pasó en enero de 1932: Alfonso Caso abrió la Tumba 7 de Monte Albán y sacó más de 400 objetos de oro, jade y hueso tallado, de factura mixteca, el mayor hallazgo de orfebrería prehispánica del continente. La ciudad se llama Oaxaca de Juárez desde 1872, por Benito Juárez, zapoteco nacido en Guelatao en 1806.",
   "fuente": "Alfonso Caso, «Las exploraciones en Monte Albán, temporada 1931-1932», INAH; Enciclopedia de los Municipios de México, ficha de Oaxaca de Juárez (INAFED).",
   "fundacion": "guarnición mexica de Huaxyácac anterior, en valle zapoteco; villa española de Antequera en 1529, título de ciudad en 1532"
  },
  "-90.50,19.83": {
   "texto": "Campeche es la única ciudad amurallada de México, y la amurallaron por miedo. Francisco de Montejo «el Mozo» fundó la villa en 1540 sobre el asentamiento maya de Ah Kin Pech; el puerto exportaba palo de tinte y eso lo convirtió en imán de corsarios, hasta que en 1663 una flota pirata saqueó la ciudad completa. El 3 de enero de 1686 empezó la muralla y en octubre de 1704 el ingeniero Jaime Franck cerró el hexágono: 2.741 metros de perímetro, ocho baluartes, 225.024 pesos y dieciocho años de obra. La UNESCO la declaró Patrimonio de la Humanidad en 1999.",
   "fuente": "Ficha de la Ciudad Histórica Fortificada de Campeche, Sistema de Información Cultural, Secretaría de Cultura (sic.cultura.gob.mx); «Murallas de Campeche» e «Historia de San Francisco de Campeche», Wikipedia en español, consultadas el 7 de octubre de 2026.",
   "fundacion": "señorío maya de Ah Kin Pech (Can Pech) anterior; villa española el 4 de octubre de 1540"
  },
  "-99.62,18.57": {
   "texto": "Taxco no tiene acta de fundación: es un real de minas que creció sobre el pueblo nahua de Tlachco, donde los enviados de Cortés buscaban estaño hacia 1528 y encontraron plata. El personaje es José de la Borda, que llegó sin nada y dio con la veta de San Ignacio; con ese dinero pagó entera la iglesia de Santa Prisca (1751-1758), una de las fachadas más desbordadas del barroco americano, y dejó la frase que todavía se repite: «Dios da a Borda y Borda da a Dios». Segundo acto: el estadounidense William Spratling llegó en 1929 y abrió taller. Hasta entonces Taxco exportaba mineral, no joyas.",
   "fuente": "INAH, templo de Santa Prisca y San Sebastián, Taxco; Enciclopedia de los Municipios de México, ficha de Taxco de Alarcón (INAFED).",
   "fundacion": "pueblo nahua de Tlachco anterior; real de minas español desde 1528, sin acta de fundación"
  },
  "-100.38,20.63": {
   "texto": "La fundación de Querétaro la negoció un otomí, no un español: Conín, comerciante bautizado como Fernando de Tapia, que en los lienzos coloniales aparece como el que entrega la ciudad. La fecha tradicional es el 25 de julio de 1531, día de Santiago, y la leyenda dice que la batalla se detuvo cuando el sol se eclipsó y apareció una cruz en el cielo. El dato duro, y todavía visible: el acueducto que pagó Juan Antonio de Urrutia y Arana, marqués del Villar del Águila, entre 1726 y 1738 —74 arcos, 1.280 metros, 23 de altura—. Y en el Cerro de las Campanas fusilaron a Maximiliano el 19 de junio de 1867.",
   "fuente": "«Los Arcos», Asociación Nacional de Ciudades Mexicanas del Patrimonio Mundial (ciudadespatrimonio.mx); Acueducto de Querétaro, Historic Civil Engineering Landmark de la ASCE; Enciclopedia de los Municipios de México, ficha de Querétaro (INAFED).",
   "fundacion": "asentamiento otomí anterior; fundación tradicional el 25 de julio de 1531"
  },
  "-91.52,14.83": {
   "texto": "En febrero de 1524 las huestes de Pedro de Alvarado derrotaron a los k'iche' en los llanos de El Pinal; la tradición sitúa ahí la muerte de Tecún Umán. Sobre Xelajuj No'j, los aliados tlaxcaltecas pusieron el nombre náhuatl Quetzaltenango. En 1838 la ciudad fue capital del Estado de Los Altos, sexto estado de la Federación Centroamericana, con su propia bandera y moneda; Rafael Carrera lo disolvió por las armas en enero de 1840. El 24 de octubre de 1902 el volcán Santa María reventó al lado, en una de las erupciones mayores del siglo XX, y enterró los cafetales de la costa en ceniza.",
   "fuente": "Cartas de relación de Pedro de Alvarado (1524); documentación del Estado de Los Altos y la campaña de Rafael Carrera (1838-1840); catálogo de erupciones del Global Volcanism Program (Smithsonian) y la literatura geológica sobre el Santa María 1902.",
   "fundacion": "asentamiento k'iche' de Xelajuj No'j anterior, ocupada por los españoles en 1524"
  },
  "-85.96,15.91": {
   "texto": "Aquí se acabó el hombre que quiso ser dueño de Centroamérica. William Walker, el filibustero de Tennessee que llegó a presidente de Nicaragua en 1856 y restableció la esclavitud, desembarcó en 1860 en la costa hondureña para repetir la jugada. La marina británica lo capturó y lo entregó a las autoridades de Honduras: el 12 de septiembre de 1860 fue fusilado en Trujillo, con 36 años, y su tumba sigue en el cementerio viejo. Es la misma bahía donde Colón había tocado tierra firme en agosto de 1502, en su cuarto viaje.",
   "fuente": "Relaciones del cuarto viaje de Colón; crónicas de la fundación atribuida a Juan de Medina por orden de Francisco de las Casas; partes del capitán Nowell Salmon (HMS Icarus) y prensa hondureña y estadounidense de 1860 sobre la captura y ejecución de Walker.",
   "fundacion": "zona poblada antes (Guaymura), villa española en mayo de 1525"
  },
  "-88.58,14.58": {
   "texto": "Durante cinco años el tribunal supremo de Centroamérica funcionó en un pueblo de montaña. La Real Audiencia de los Confines, creada por cédula del 13 de septiembre de 1543, expedida en Valladolid, para hacer cumplir las Leyes Nuevas de 1542 —las que prohibían esclavizar indígenas—, se instaló en Gracias el 16 de mayo de 1544 y gobernaba desde Chiapas hasta Panamá. Los encomenderos protestaron por lo apartado del sitio y en 1549 el tribunal se mudó a Santiago de Guatemala. Gracias se quedó con el nombre y sin el poder. A pocas leguas, en Cerquín, el lenca Lempira había resistido hasta 1537.",
   "fuente": "Cédulas reales de 1542-1543 y actuaciones de la Real Audiencia y Chancillería de los Confines de Guatemala y Nicaragua; Wikipedia en español «Gracias (Lempira)» y reportajes históricos de El Heraldo y La Prensa (Honduras) sobre las tres fundaciones.",
   "fundacion": "fundada en Opoa en octubre de 1536, refundada en su sitio definitivo el 14 de enero de 1539"
  },
  "-89.03,13.94": {
   "texto": "Parte del añil que teñía la ropa de Europa salía de aquí: Suchitoto fue el mayor mercado del tinte en El Salvador, y de eso vienen los muros gruesos, los zaguanes y la iglesia de Santa Lucía. Recibió título de ciudad el 15 de julio de 1858, con Gerardo Barrios. Después el tinte sintético alemán hundió el añil y, entre 1973 y 1976, la represa del Cerrón Grande sobre el río Lempa inundó el valle: el pueblo despertó a la orilla de un lago que antes no existía. En los años ochenta fue frente de guerra y se vació de gente.",
   "fuente": "Decreto de título de ciudad de 1858 (gobierno de Gerardo Barrios); documentación de CEL sobre la central hidroeléctrica Cerrón Grande; Wikipedia en español «Lago Suchitlán» y «Cerrón Grande Dam» para fechas de obra y superficie.",
   "fundacion": "poblado pipil anterior, villa colonial y ciudad desde el 15 de julio de 1858"
  },
  "-86.09,11.97": {
   "texto": "El 13 de abril de 1538, un sábado de cuaresma, el fraile dominico Blas del Castillo se hizo bajar con poleas al cráter del volcán Masaya. Llevaba una cruz para espantar al demonio y un martillo para picar la roca: estaba convencido de que el lago incandescente del fondo era oro fundido, y bajó en secreto para que no se enteraran los poderosos de León. Repitió el descenso tres veces y las muestras no eran oro ni plata. Nueve años antes, en 1529, fray Francisco de Bobadilla había plantado una cruz en el borde para exorcizar lo que llamaban la Boca del Infierno.",
   "fuente": "Gonzalo Fernández de Oviedo, Historia general y natural de las Indias (descripción del Masaya, 1529); relación del descenso de fray Blas del Castillo recogida por Oviedo; reportajes documentados de La Prensa (Nicaragua) sobre el episodio y la «Boca del Infierno».",
   "fundacion": "poblado chorotega anterior, título de villa de San Fernando de Masaya en 1819"
  },
  "-84.83,9.97": {
   "texto": "Una lengua de arena de unos ocho kilómetros fue durante medio siglo la salida de Costa Rica al mundo. El 29 de abril de 1814 se habilitó como puerto mayor y por ahí empezó a irse el café: en carretas de bueyes desde el Valle Central, semanas de barro hasta el muelle, y de ahí a Valparaíso y a Londres. Juan Rafael Mora le dio el título de ciudad en 1858, tras la participación de los porteños en la Campaña Nacional. En 1890 el ferrocarril al Atlántico llegó a Limón, el café cambió de océano y el Pacífico esperó su propio tren hasta 1910.",
   "fuente": "Expediente de habilitación del puerto ante la Real Audiencia de Guatemala (1814); decreto de título de ciudad de 1858; Wikipedia en español «Historia de Puntarenas» y «Puntarenas (ciudad)»; INCOP, reseña histórica del puerto.",
   "fundacion": "sin acta de fundación española: puerto habilitado el 29 de abril de 1814, ciudad desde 1858"
  },
  "-83.03,10.00": {
   "texto": "Colón ancló frente a la isla Uvita el 25 de septiembre de 1502 y siguió de largo. El puerto nació de verdad en 1871, cuando Costa Rica empezó un ferrocarril al Atlántico para sacar el café. La obra tardó 19 años y se llevó miles de vidas por malaria; los contratistas trajeron jamaiquinos, chinos e italianos. Minor Keith, que la terminó en 1890, se quedó con tierra a los lados, plantó banano y en 1899 fundó la United Fruit. Un contrato bananero de 1934 prohibió emplear trabajadores negros en la zona del Pacífico, y Limón quedó siendo el país donde se podía vivir.",
   "fuente": "Diario del cuarto viaje de Colón (1502); contratos Soto-Keith y documentación del Ferrocarril al Atlántico (1871-1890); contrato bananero de 1934 (Asamblea Legislativa de Costa Rica); estudios sobre la migración afrocaribeña a Limón.",
   "fundacion": "fondeadero de Colón en 1502, puerto abierto en 1871 con el ferrocarril al Atlántico"
  },
  "-79.66,9.55": {
   "texto": "Durante siglo y medio la plata del Perú se cambiaba por género europeo en una aldea del Caribe. La feria duraba de treinta a sesenta días, y en ese mes el lugar era uno de los mercados más caros del mundo: se dormía en la calle a precio de palacio. Francis Drake murió de disentería frente a esta bahía el 28 de enero de 1596 y lo echaron al mar en un ataúd de plomo. Henry Morgan la saqueó en 1668; el almirante Edward Vernon la arrasó el 21 de noviembre de 1739. España mandó sus flotas por el Cabo de Hornos y la feria no volvió.",
   "fuente": "Documentación del sistema de flotas y ferias de Tierra Firme (Archivo General de Indias, Casa de Contratación); relaciones de la fundación por Francisco Valverde y Mercado (1597); crónica del último viaje de Drake (1595-1596); partes británicos del ataque de Vernon, noviembre de 1739.",
   "fundacion": "bautizado Puerto Bello por Colón en 1502, fundado como San Felipe de Portobelo el 20 de marzo de 1597"
  },
  "-79.98,21.80": {
   "texto": "En 1518 Hernán Cortés pasó por Trinidad reclutando hombres para la expedición a México: la villa tenía cuatro años y ya servía de trampolín hacia el continente. Tres siglos después el azúcar del Valle de los Ingenios la hizo rica, con decenas de ingenios trabajados por miles de esclavizados y la torre de Manaca-Iznaga, de más de cuarenta metros, levantada hacia 1816 para vigilar los cañaverales; su campana marcaba la jornada. Cuando el azúcar se mudó a Matanzas y Cienfuegos, Trinidad quedó detenida en el tiempo, y por eso mismo la UNESCO la inscribió como Patrimonio de la Humanidad en 1988.",
   "fuente": "UNESCO, Lista del Patrimonio Mundial, expediente 460 «Trinidad y el Valle de los Ingenios» (1988); Oficina del Conservador de la Ciudad de Trinidad.",
   "fundacion": "asentamiento taíno previo en la región de Guamuhaya, villa española en 1514"
  },
  "-74.50,20.35": {
   "texto": "Diego Velázquez la fundó en 1511 como Nuestra Señora de la Asunción: primera villa y primera capital de Cuba, hasta que el gobierno se trasladó a Santiago en 1515. En su iglesia se conserva la Cruz de la Parra, que la tradición atribuye a Colón en 1492. En 1987 un equipo con el belga Roger Dechamps, la cubana Raquel Carrera y el historiador Alejandro Hartmann la examinó: la madera no es europea sino antillana, Coccoloba diversifolia, y el carbono 14 la sitúa con 95% de certeza entre los años 860 y 1530. La reliquia es caribeña, no traída de España.",
   "fuente": "Estudio de 1987 de R. Dechamps (Museo Real de África Central, Tervuren), R. Carrera (Instituto de Investigaciones Forestales de Cuba) y A. Hartmann, recogido por Juventud Rebelde (6-ago-2011) y EcuRed, entrada «Cruz de la Parra».",
   "fundacion": "región taína poblada, primera villa española en 1511"
  },
  "-77.92,21.38": {
   "texto": "Nació en 1514 como Santa María del Puerto del Príncipe junto al mar y se mudó dos veces; en 1528 quedó tierra adentro, entre dos ríos, buscando pastos y distancia de los corsarios. No le sirvió: en 1668 Henry Morgan la saqueó de todos modos. De ahí viene la leyenda de sus calles, un laberinto de plazuelas y callejones torcidos que, según el relato popular, se trazó para perder a los asaltantes; los historiadores lo discuten y lo atribuyen al crecimiento sin plan. Sin río navegable, la ciudad guardó el agua de lluvia en tinajones de barro. La UNESCO inscribió su centro histórico en 2008.",
   "fuente": "UNESCO, Lista del Patrimonio Mundial, expediente 1270 «Centro histórico de Camagüey» (2008); crónicas del saqueo de Puerto Príncipe de 1668.",
   "fundacion": "villa de 1514 en la costa, trasladada al sitio actual en 1528"
  },
  "-70.69,19.79": {
   "texto": "En 1605 y 1606 el gobernador Antonio de Osorio cumplió una orden de Felipe III: quemar las ciudades del norte y el oeste de la isla para cortar el contrabando con holandeses, ingleses y franceses. Puerto Plata, fundada hacia 1502, fue incendiada y sus vecinos obligados a marcharse tierra adentro; de aquel traslado forzoso salieron pueblos como Monte Plata y Bayaguana. La bahía quedó casi vacía más de un siglo, con la fortaleza San Felipe como única guardia. La ciudad volvió a nacer el 22 de julio de 1736, repoblada con familias canarias traídas por la Corona: la misma ciudad, dos fundaciones separadas por ciento treinta años de monte.",
   "fuente": "Estudio «Fundación de Puerto Plata, las devastaciones de 1605-1606 y su repoblación con inmigrantes canarios en el siglo XVIII» (academia.edu); entrada «Devastaciones de Osorio».",
   "fundacion": "costa taína poblada, fundación hacia 1502, destruida en 1605 y refundada el 22 de julio de 1736"
  },
  "-70.67,19.50": {
   "texto": "La ciudad ha muerto dos veces. El 2 de diciembre de 1562 un terremoto la derribó y los sobrevivientes la rehicieron a orillas del Yaque del Norte, donde sigue. En septiembre de 1863, durante la Guerra de la Restauración contra España, fueron los propios dominicanos quienes la incendiaron: con las tropas españolas atrincheradas en la fortaleza, los rebeldes prefirieron quemar sus casas antes que dejarles la plaza. De esa decisión salió el gobierno provisional que llevó al fin de la anexión en 1865. El nombre viene de los primeros hidalgos pobladores, los treinta «caballeros» que la tradición sitúa en los años finales del siglo XV.",
   "fuente": "Crónicas y documentos de la Guerra de la Restauración (1863-1865); Academia Dominicana de la Historia, sobre el terremoto de 1562 y el traslado al Yaque.",
   "fundacion": "en el Cibao taíno ya poblado, fundación a finales del siglo XV; sitio actual desde los años 1560"
  },
  "-66.62,18.00": {
   "texto": "El 21 de marzo de 1937, Domingo de Ramos, la policía disparó contra una marcha del Partido Nacionalista en la calle Marina. Las cifras varían según la fuente: entre diecinueve y veintiún muertos, dos de ellos policías, y de un centenar a más de doscientos heridos. Una comisión independiente presidida por el abogado Arthur Garfield Hays investigó los hechos y los llamó masacre, nombre que quedó. La misma ciudad guarda uno de los edificios más fotografiados de Puerto Rico: el Parque de Bombas, pabellón de franjas rojas y negras levantado en 1882 para una feria agrícola e industrial y convertido al año siguiente en cuartel de bomberos.",
   "fuente": "Informe de la Comisión Hays (1937); contraste de cifras en prensa puertorriqueña: Metro PR (21-mar-2013), Noticel (27-mar-2019) y Claridad.",
   "fundacion": "territorio taíno del sur, poblado desde el siglo XVII y reconocido como pueblo en 1692"
  },
  "-67.04,18.08": {
   "texto": "Fue la segunda villa de la isla, fundada en 1511 por orden de Juan Ponce de León y bautizada en honor de Germana de Foix, segunda esposa de Fernando el Católico. Durante sesenta años no logró quedarse quieta: los corsarios franceses la quemaron varias veces y los vecinos la fueron moviendo, hasta que Felipe II autorizó en 1570 el traslado a las lomas de Santa Marta, cumplido en 1573 y fuera del alcance de un desembarco. Allí sigue. En diciembre de 1606 los dominicos recibieron licencia para levantar aquí el convento de Porta Coeli; su capilla se data en 1609 y es de las más antiguas que quedan en pie en América.",
   "fuente": "Enciclopedia de Puerto Rico (Fundación Puertorriqueña de las Humanidades), entrada «Municipio de San Germán»; Histopedia de Puerto Rico, «La villa de San Germán».",
   "fundacion": "suroeste taíno ya poblado, villa de 1511 en la costa; sitio actual desde 1573"
  },
  "-71.13,8.40": {
   "texto": "Juan Rodríguez Suárez fundó Santiago de los Caballeros de Mérida en 1558 sin permiso de la Audiencia de Santa Fe, en tierras de pueblos timoto-cuicas. Lo juzgaron por usurpar funciones de la Corona y lo condenaron a muerte; escapó y la sentencia nunca se cumplió, pero su ciudad quedó anulada. Juan de Maldonado la refundó en 1559 y la trasladó a la meseta entre los ríos Chama y Albarregas, donde sigue. En 1785 abrió el Real Colegio Seminario de San Buenaventura, germen de la Universidad de Los Andes. Y en 1960 se inauguró el teleférico a Pico Espejo: 12,5 kilómetros de cable hasta los 4.765 metros.",
   "fuente": "Academia Nacional de la Historia de Venezuela (proceso contra Rodríguez Suárez y refundación de Maldonado); historia institucional de la Universidad de Los Andes; Sistema Teleférico de Mérida",
   "fundacion": "1558, refundada en 1559 (valles de pueblos timoto-cuicas)"
  },
  "-71.66,10.73": {
   "texto": "El 14 de diciembre de 1922 el pozo Barroso II reventó en la costa oriental del lago, cerca de Cabimas, y escupió crudo durante nueve días a razón de unos 100.000 barriles diarios sin control. Ese chorro convirtió el lago de Maracaibo en el centro petrolero del país. Antes la ciudad había sido fundada tres veces sobre una zona de palafitos añú: Ambrosio Alfínger en 1529, Alonso Pacheco en 1569 y Pedro Maldonado en 1574, ya como Nueva Zamora. El 24 de julio de 1823 la batalla naval del lago puso fin a la guerra de independencia en territorio venezolano; en el continente siguió hasta Ayacucho, en 1824. Hasta 1962 se cruzaba en ferry.",
   "fuente": "Academia Nacional de la Historia de Venezuela (fundaciones y batalla del Lago); crónica petrolera de Barroso II (Caribbean Petroleum / Ministerio de Energía y Petróleo)",
   "fundacion": "asentamientos añú anteriores; fundada tres veces: 1529, 1569 y 1574"
  },
  "-63.60,8.10": {
   "texto": "Se llamó Angostura porque ahí el Orinoco se estrecha a unos 900 metros. El 22 de mayo de 1764 Joaquín Sabás Moreno de Mendoza cumplió la real orden de trasladar a ese paso la ciudad de Santo Tomé de Guayana, levantada en 1595 y mudada varias veces antes, y en 1819 fue la capital de la revolución: el 15 de febrero Bolívar abrió el Congreso de Angostura con su discurso más citado, y el 17 de diciembre ese mismo Congreso proclamó la República de Colombia. En 1824 el médico alemán Johann Siegert empezó a preparar allí un amargo para la tropa; el nombre del pueblo se le quedó pegado aunque la fábrica se mudó a Trinidad en 1875. La ciudad pasó a llamarse Ciudad Bolívar en 1846.",
   "fuente": "Actas del Congreso de Angostura (1819); Academia Nacional de la Historia de Venezuela; historia corporativa de Angostura sobre el traslado de 1875",
   "fundacion": "1764, como Angostura (con intentos previos de Santo Tomé de Guayana desde 1595)"
  },
  "-74.20,11.25": {
   "texto": "Rodrigo de Bastidas desembarcó el 29 de julio de 1525 en una bahía que ya tenía dueños: los pueblos tairona de Bonda y Taganga vivían allí y resistieron décadas. Es la ciudad fundada por españoles más antigua de Colombia que nunca se abandonó, y también la más castigada: piratas y corsarios la asaltaron una veintena de veces entre los siglos XVI y XVIII, hasta el punto de que los vecinos huían al monte por costumbre. El 17 de diciembre de 1830 Simón Bolívar murió en la quinta de San Pedro Alejandrino, en una cama prestada por un comerciante español.",
   "fuente": "Academia Colombiana de Historia (fundación de 1525 y asaltos corsarios); Museo Quinta de San Pedro Alejandrino (fecha y circunstancias de la muerte de Bolívar)",
   "fundacion": "29 de julio de 1525, sobre una bahía tairona poblada (Bonda, Taganga)"
  },
  "-73.37,5.55": {
   "texto": "Antes de Tunja estaba Hunza, sede del zaque, uno de los dos grandes señoríos muiscas. Gonzalo Suárez Rendón la refundó como ciudad española el 6 de agosto de 1539 encima de ese asentamiento. A 2.820 metros es la capital departamental más alta de Colombia. Lo raro está en los techos: la casa del fundador y otras casonas del siglo XVI conservan pinturas murales con rinocerontes, elefantes y dioses paganos, copiados de grabados europeos por encargo de encomenderos, algo casi único en la América colonial. En 1819 el ejército libertador pasó por aquí: Pantano de Vargas el 25 de julio, Boyacá el 7 de agosto.",
   "fuente": "Academia Boyacense de Historia; Casa del Fundador Suárez Rendón (UPTC) para las pinturas murales; ICANH sobre el señorío muisca de Hunza",
   "fundacion": "6 de agosto de 1539, sobre Hunza, capital del zaque muisca"
  },
  "-74.43,9.24": {
   "texto": "Santa Cruz de Mompox se fundó en 1537 en tierras del cacique Mompoj, sobre un poblado malibú; hay fuentes que corren la fundación a 1540 y le cambian el fundador. Durante dos siglos fue la aduana obligatoria del Magdalena: todo lo que subía hacia Bogotá paraba aquí. Después el río se fue. El brazo de Mompox se colmató y en el siglo XIX la navegación se mudó al brazo de Loba; la ciudad quedó varada, sin obras nuevas, y por eso llegó entera a 1995, cuando la Unesco la declaró patrimonio mundial. Bolívar reclutó allí cientos de hombres hacia 1812.",
   "fuente": "Expediente de la Unesco del Centro Histórico de Santa Cruz de Mompox (1995); historiografía local recogida en la historia del municipio, que registra las dos fechas de fundación (1537 y 1540)",
   "fundacion": "1537 (fecha discutida), en territorio del cacique Mompoj, sobre poblado malibú"
  },
  "-73.53,5.63": {
   "texto": "Hernán Suárez de Villalobos la fundó el 12 de junio de 1572 y la nombró por Andrés Díaz Venero de Leiva, primer presidente de la Real Audiencia del Nuevo Reino de Granada. Su plaza empedrada mide unos 14.000 metros cuadrados, de las mayores de América, y nunca se asfaltó. En octubre de 1812 sesionó allí el Congreso de las Provincias Unidas de la Nueva Granada, y en diciembre de 1823 murió en la villa Antonio Nariño, el que había traducido e impreso los derechos del hombre. Debajo hay un mar cretácico: en 1977, en la vereda Monquirá, un campesino descubrió un pliosaurio de unos siete metros que se conserva en el sitio del hallazgo.",
   "fuente": "Academia Colombiana de Historia (fundación y Congreso de 1812); Museo El Fósil y Centro de Investigaciones Paleontológicas de Villa de Leyva (el ejemplar de kronosaurio)",
   "fundacion": "12 de junio de 1572"
  },
  "-79.21,-3.99": {
   "texto": "Alonso de Mercadillo la fundó dos veces: hacia 1546 en el valle de Garrochamba y en 1548 la trasladó al valle de Cuxibamba, entre los ríos Malacatos y Zamora, en territorio palta donde los incas ya habían pasado. Su dato más terco es eléctrico: en 1897 una veintena de vecinos —José Miguel Burneo, Ramón Eguiguren, Manuel Carrión y el ingeniero Alberto Rhor entre ellos— juntó plata, trajo de Francia dos turbinas de 12 kilovatios y las montó en el río Malacatos. En abril de 1899 se encendió el alumbrado público: Loja fue la primera ciudad del Ecuador con luz eléctrica.",
   "fuente": "Reportaje histórico de Ecuavisa sobre los 125 años de la electrificación del Ecuador (turbinas del Malacatos, 1897-1899); Casa de la Cultura Ecuatoriana, núcleo de Loja, para las fundaciones de Mercadillo",
   "fundacion": "territorio palta con presencia inca previa; 1546 (discutida) y traslado en 1548"
  },
  "-79.02,-8.12": {
   "texto": "A pocos kilómetros de la plaza mayor está Chan Chan, la capital del reino chimú: unos 14 km2 de muros de adobe —1.414 hectáreas según la delimitación de la Unesco—, la mayor ciudad de barro de América, levantada desde hacia 850 d. C. y absorbida por los incas hacia 1470. Diego de Almagro plantó la villa española al lado, en 1534, y Pizarro la llamó Trujillo por su pueblo de Extremadura. En 1687, con los corsarios subiendo por el Pacífico, se mandó cercarla con una muralla elíptica de adobe; de aquel anillo hoy solo quedan tramos sueltos, encajados entre casas y avenidas.",
   "fuente": "UNESCO, ficha de la Zona Arqueológica de Chan Chan (criterios y extensión del sitio); Municipalidad Provincial de Trujillo, reseña histórica",
   "fundacion": "capital chimú de Chan Chan anterior, villa española en 1534"
  },
  "-78.53,-7.15": {
   "texto": "Aquí no hubo fundación española: la ciudad ya existía y era el centro administrativo inca del norte, con los baños termales donde Atahualpa acampaba. El 16 de noviembre de 1532 Francisco Pizarro, con unos 168 hombres, lo capturó en la plaza en una emboscada de una sola tarde. Atahualpa ofreció llenar de oro una sala hasta donde alcanzaba su brazo alzado, y dos veces de plata. Lo cumplió y lo ejecutaron igual, en 1533. El Cuarto del Rescate sigue en pie —11,80 por 7,30 metros y 3,10 de alto— y es el único edificio inca que queda en la ciudad.",
   "fuente": "Municipalidad Provincial de Cajamarca (gob.pe), \"La conquista y el virreinato en Cajamarca\"; Britannica, \"Battle of Cajamarca (1532)\"; ficha del Cuarto del Rescate",
   "fundacion": "ciudad inca preexistente, sin acta de fundación española"
  },
  "-63.23,-17.75": {
   "texto": "Esta ciudad se mudó unos 220 kilómetros. Ñuflo de Chávez la fundó el 26 de febrero de 1561 junto al arroyo Sutó, en lo que hoy es San José de Chiquitos, buscando la ruta al Paraguay y la plata del Perú. Quedaba demasiado lejos de todo y demasiado expuesta, así que los vecinos la fueron corriendo al oeste hasta asentarse en San Lorenzo de la Frontera, junto al río Piraí, en la década de 1590, llevándose el nombre puesto. Chávez no lo vio: lo mataron los itatines en 1568.",
   "fuente": "Comité pro Santa Cruz, \"Fundación de Santa Cruz, 26 de febrero de 1561\"; Wikipedia, \"Santa Cruz de la Sierra\" y \"Ñuflo de Chaves\"",
   "fundacion": "26 de febrero de 1561, en otro emplazamiento; trasladada al sitio actual en la década de 1590"
  },
  "-67.13,-17.98": {
   "texto": "Se fundó el 1 de noviembre de 1606 como Villa de San Felipe de Austria, encima de un cerro con plata y sobre tierra de los urus, que son los que le dan el nombre. La plata se agotó y lo que sostuvo a la región fue el estaño: Oruro se volvió el centro urbano y ferroviario de la minería boliviana del estaño, aunque la mina que hizo la fortuna de Simón Patiño —La Salvadora, que compró el 16 de agosto de 1897 y cuya veta rica apareció hacia 1900— no estaba aquí. En 1952 el Estado nacionalizó las minas. Hoy lo que convoca es el Carnaval, declarado patrimonio por la Unesco en 2001.",
   "fuente": "Gobierno Autónomo Municipal de Oruro, reseña de fundación; UNESCO, proclamación del Carnaval de Oruro como obra maestra del patrimonio oral e inmaterial (2001)",
   "fundacion": "territorio uru anterior, villa española el 1 de noviembre de 1606"
  },
  "-71.62,-33.05": {
   "texto": "Valparaíso no tiene acta de fundación. Juan de Saavedra llegó en 1536 a una ensenada donde ya vivía gente, el caserío que los cronistas llaman Quintil, y el puerto se fue formando solo, sin damero ni plaza mayor: de ahí los cerros tomados, los ascensores y las escaleras. En 1827 nació allí El Mercurio de Valparaíso, el diario en castellano más antiguo que todavía se publica. El terremoto del 16 de agosto de 1906 lo arrasó, y en 1914 el Canal de Panamá le quitó de golpe los barcos que antes doblaban el Cabo de Hornos.",
   "fuente": "UNESCO, ficha del Área Histórica de la Ciudad Portuaria de Valparaíso (2003); Memoria Chilena (Biblioteca Nacional), Valparaíso y El Mercurio de Valparaíso",
   "fundacion": "caserío indígena de Quintil anterior, llegada española en 1536, sin acta de fundación"
  },
  "-73.25,-39.80": {
   "texto": "Pedro de Valdivia la fundó el 9 de febrero de 1552 sobre Ainil, una población mapuche-huilliche que ya ocupaba la confluencia de los ríos. En 1599 los mapuche al mando de Pelantaro la destruyeron y la ciudad desapareció del mapa casi medio siglo; en 1643 una flota holandesa ocupó la bahía vacía unos meses y el susto fue tal que en 1645 la Corona la refundó como un sistema de fuertes a la entrada del río: Corral, Niebla, Mancera. El 22 de mayo de 1960 le tocó el terremoto más fuerte jamás registrado, de magnitud 9,5.",
   "fuente": "Memoria Chilena (Biblioteca Nacional de Chile), \"Valdivia\" y el sistema de fuertes de la bahía de Corral; USGS, catálogo de grandes terremotos (Chile, 1960)",
   "fundacion": "asentamiento mapuche-huilliche de Ainil anterior, fundación el 9 de febrero de 1552"
  },
  "-64.18,-31.40": {
   "texto": "Jerónimo Luis de Cabrera la fundó el 6 de julio de 1573 junto al río Suquía, en una zona de asentamientos comechingones; al año siguiente sus propios rivales lo destituyeron y lo decapitaron. Lo que hizo a Córdoba fue el colegio jesuita: de 1613 arranca la casa de estudios que en 1622 pudo otorgar grados, la universidad más antigua del país. De esas mismas aulas salió en 1918 la Reforma Universitaria, que cambió el gobierno de las universidades en media América Latina. La Manzana Jesuítica es patrimonio de la humanidad desde el año 2000.",
   "fuente": "Universidad Nacional de Córdoba, historia institucional; UNESCO, ficha de la Manzana y Estancias Jesuíticas de Córdoba (2000)",
   "fundacion": "asentamientos comechingones anteriores, fundación el 6 de julio de 1573"
  },
  "-65.42,-24.78": {
   "texto": "La fundó Hernando de Lerma el 16 de abril de 1582, en un valle ya poblado, y la bautizó Ciudad de Lerma por sí mismo; a él lo terminaron preso y muerto en una cárcel de España y el nombre no cuajó. Su momento llegó el 20 de febrero de 1813: Manuel Belgrano derrotó allí al ejército realista de Pío Tristán y, en vez de llevarse a los prisioneros, los dejó ir bajo juramento de no volver a pelear contra la revolución. Después vino Martín Miguel de Güemes y su guerra de gauchos, que frenó años las invasiones desde el Alto Perú.",
   "fuente": "Gobierno de la Provincia de Salta, reseña histórica de la fundación; Archivo General de la Nación / Academia Nacional de la Historia, batalla de Salta (1813)",
   "fundacion": "valle poblado por comunidades diaguitas y pulares, fundación el 16 de abril de 1582"
  },
  "-55.87,-27.35": {
   "texto": "Nació el 25 de marzo de 1615 como reducción jesuítica, Nuestra Señora de la Encarnación de Itapúa, fundada por Roque González de Santa Cruz entre los guaraníes de la zona, y no estaba aquí: estaba en la otra orilla del Paraná, donde hoy se levanta Posadas. La cruzaron después, en balsas. Lo extraordinario pasó cuatro siglos más tarde: la represa de Yacyretá subió el embalse y el centro bajo de la ciudad, con su mercado y sus calles, quedó bajo el agua. Miles de familias se mudaron a barrios nuevos y sobre lo inundado se construyó una playa urbana.",
   "fuente": "Municipalidad de Encarnación, \"Historia de la ciudad\"; Entidad Binacional Yacyretá, cronología del llenado del embalse (cota 83)",
   "fundacion": "población guaraní de Itapúa, reducción jesuítica el 25 de marzo de 1615"
  },
  "-57.97,-31.39": {
   "texto": "El punto de partida es militar y modesto: el 8 de noviembre de 1756 el gobernador de Montevideo, José Joaquín de Viana, mandó levantar unos cuarteles provisorios junto al salto del río Uruguay, el rápido que cortaba la navegación. La población definitiva arranca en 1817, a partir de un campamento militar portugués; el departamento se creó en 1837 y el rango de ciudad llegó por decreto del 8 de junio de 1863. Allí nació, el 31 de diciembre de 1878, Horacio Quiroga, el de los cuentos de la selva, que se quitó la vida en 1937. Y allí, desde 1979, Uruguay y Argentina se reparten la electricidad de Salto Grande, la represa binacional tendida entre las dos orillas.",
   "fuente": "Intendencia de Salto, \"Historia y archivos\"; Comisión Técnica Mixta de Salto Grande, cronología de la obra; biografía de Horacio Quiroga",
   "fundacion": "cuarteles de 1756, poblamiento definitivo en 1817, ciudad en 1863"
  },
  "-117.18,32.82": {
   "texto": "El 16 de julio de 1769 Junípero Serra levantó la cruz en una loma sobre Cosoy, aldea kumeyaay habitada mucho antes de que llegara nadie de España. La expedición había salido de la Baja con unos 300 hombres y el escorbuto se llevó a decenas antes de clavar el primer poste. Seis años después, la noche del 4 al 5 de noviembre de 1775, cientos de kumeyaay quemaron la misión, ya trasladada a Nipaguay, y mataron al fraile Luis Jayme. Se reconstruyó en adobe. Cabrillo había fondeado en la bahía en 1542 y el nombre lo puso Vizcaíno en 1602.",
   "fuente": "Diario de fray Junípero Serra (1769), edición de Antonine Tibesar; archivo histórico de la Misión Basílica San Diego de Alcalá; National Park Service, Cabrillo National Monument.",
   "fundacion": "aldea kumeyaay de Cosoy anterior, presidio y misión en 1769"
  },
  "-119.72,34.44": {
   "texto": "El presidio se plantó el 21 de abril de 1782, el último de los cuatro de la Alta California, pegado a Syuxtun, pueblo chumash cuyas canoas de tablas cosidas —el tomol— cruzaban el canal hasta las islas. La misión llegó en 1786. Pero lo que hoy se ve es mucho más joven: el terremoto del 29 de junio de 1925 derribó el centro, y la ciudad respondió creando una junta de arquitectura que obligó a reconstruir en estilo español. Esas tejas y esos arcos blancos no son del siglo XVIII; son una decisión de urbanismo de 1925.",
   "fuente": "Santa Barbara Trust for Historic Preservation, El Presidio de Santa Bárbara State Historic Park; USGS, reseña del terremoto de Santa Bárbara de 1925.",
   "fundacion": "pueblo chumash de Syuxtun anterior, presidio en 1782"
  },
  "-121.89,36.60": {
   "texto": "Sebastián Vizcaíno bautizó el puerto el 16 de diciembre de 1602 en honor al virrey Gaspar de Zúñiga, conde de Monterrey, y lo describió tan bien que casi lo pierde: la expedición de Gaspar de Portolá pasó de largo en 1769 sin reconocerlo y acabó dando con la bahía de San Francisco. Volvió, y el 3 de junio de 1770 levantó allí el presidio, junto a las rancherías rumsen. Monterey fue capital de la Alta California con España y con México, y en 1849 la convención que escribió la primera constitución del estado la imprimió en español y en inglés.",
   "fuente": "Relación del viaje de Sebastián Vizcaíno (1602-1603); California State Parks, Monterey State Historic Park; actas de la Convención Constitucional de Monterey, 1849.",
   "fundacion": "aldeas rumsen (ohlone) anteriores, puerto nombrado en 1602 y presidio en 1770"
  },
  "-110.89,32.21": {
   "texto": "El nombre no es español: viene del o'odham Cuk Son, «base negra», por la falda oscura del cerro que hoy llaman Sentinel Peak, donde ya se cultivaba maíz junto al río. El 20 de agosto de 1775, Hugo O'Conor —un irlandés al servicio del rey de España, al que llamaban «el capitán colorado»— eligió el sitio del presidio de San Agustín del Tucsón, y la guarnición se mudó desde Tubac al año siguiente. El 1 de mayo de 1782 un ataque apache estuvo a punto de tomarlo: lo defendió, herido, el capitán Pedro Allande y Saavedra.",
   "fuente": "Arizona Historical Society, documentación del presidio de San Agustín del Tucsón; Kieran McCarty, «Desert Documentary: The Spanish Years» (1976).",
   "fundacion": "aldea o'odham de Cuk Son anterior, presidio en 1775"
  },
  "-106.51,31.78": {
   "texto": "El 30 de abril de 1598, tras días de sed, la expedición de Juan de Oñate —unos 500 colonos y, según sus propias relaciones, miles de cabezas de ganado— llegó al vado del Río Grande, celebró misa y tomó posesión de todo lo que había al norte. De aquel banquete sale la pretensión de que la primera acción de gracias ocurrió allí, 23 años antes de Plymouth. La misión de Guadalupe se fundó el 8 de diciembre de 1659, en la orilla sur, hoy Ciudad Juárez. Y en 1682, huyendo de la revuelta pueblo de 1680, los tigua fundaron Ysleta del Sur, que sigue en pie.",
   "fuente": "«Don Juan de Oñate, Colonizer of New Mexico», edición de George P. Hammond y Agapito Rey (1953); historia oficial del Ysleta del Sur Pueblo.",
   "fundacion": "paso del río en territorio manso y suma, vado tomado en 1598 y misión de 1659 en la orilla sur"
  },
  "-87.22,30.42": {
   "texto": "En agosto de 1559, Tristán de Luna y Arellano entró en la bahía con once naves y unas 1.500 personas para fundar la primera ciudad europea permanente de lo que hoy es Estados Unidos. Cinco semanas después, el 19 de septiembre, un huracán hundió casi toda la flota con la comida aún en las bodegas. Vinieron el hambre y los motines, y en 1561 la Corona ordenó abandonarlo todo. No es leyenda: en la bahía se han localizado tres pecios de aquella flota (1992, 2006 y 2016) y en 2015 se identificó el campamento en tierra. Pensacola se refundó en 1698.",
   "fuente": "University of West Florida, proyectos arqueológicos Luna Settlement y Emanuel Point Shipwrecks; relaciones de la expedición de Tristán de Luna y Arellano, Archivo General de Indias.",
   "fundacion": "asentamiento español en 1559, abandonado en 1561 y refundado en 1698"
  },
  "-90.04,30.00": {
   "texto": "España recibió Luisiana en 1762 y le costó cobrarla: los criollos franceses expulsaron al gobernador Antonio de Ulloa en 1768 y en 1769 Alejandro O'Reilly desembarcó con más de dos mil soldados y fusiló a cinco cabecillas. Pero lo que de verdad cambió la ciudad fue el fuego. El Viernes Santo 21 de marzo de 1788 ardieron 856 edificios, casi el casco entero, y en 1794 otros 212. Las ordenanzas españolas de reconstrucción impusieron ladrillo, teja y galerías, así que el llamado Barrio Francés es, piedra por piedra, español. El Cabildo y la catedral salen de ahí.",
   "fuente": "Actas del Cabildo de Nueva Orleans, Louisiana State Museum (The Cabildo); estudios de Gilbert C. Din sobre la Luisiana española.",
   "fundacion": "fundada por Francia en 1718, bajo gobierno español de 1763 a 1803"
  },
  "-105.42,37.20": {
   "texto": "En abril de 1851, unas cincuenta familias hispanas de Taos y Abiquiú cruzaron hacia el norte y trazaron San Luis de la Culebra, el pueblo habitado más antiguo de Colorado. Se fundó en territorio que ya era de Estados Unidos desde 1848, pero poblando una merced mexicana de 1844, en tierras que los ute recorrían desde mucho antes. Lo primero que cavaron fue la acequia: su derecho de agua, fechado el 10 de abril de 1852, es el más antiguo reconocido del estado y todavía riega. Al lado sigue La Vega, un ejido de unas 600 acres que se pastorea en común.",
   "fuente": "History Colorado y Colorado Encyclopedia, entradas sobre San Luis y las acequias del valle de San Luis; registro de derechos de agua de la División 3 de Colorado.",
   "fundacion": "1851, poblando la merced mexicana de Sangre de Cristo de 1844"
  },
  "120.39,17.57": {
   "texto": "En 1572 Juan de Salcedo plantó la Villa Fernandina sobre Bigan, un puerto fluvial donde las juncas chinas ya cambiaban seda por oro ilocano. De ahí salió una casta rara: mestizos de sangley que se enriquecieron con el añil y el tabaco y se construyeron casas de piedra abajo y madera arriba, almacén en el bajo y salón en el alto. En esa misma plaza, el 20 de septiembre de 1763, los españoles ahorcaron a María Josefa Gabriela Silang, viuda de Diego Silang, después de colgar a casi un centenar de sus hombres. La UNESCO declaró el casco histórico Patrimonio Mundial en 1999.",
   "fuente": "UNESCO, Centro del Patrimonio Mundial, ficha 502 «Historic City of Vigan» (inscripción de 1999); National Historical Commission of the Philippines, marcadores de Vigan y de la revuelta de Diego y Gabriela Silang (1762-1763).",
   "fundacion": "poblado de Bigan preexistente, villa espanola en 1572"
  },
  "122.55,10.71": {
   "texto": "El puerto se abrió al comercio exterior en 1855 y en veinte años Iloilo dejó de vivir del tejido de piña y jusi para mover el azúcar de Negros: el vicecónsul británico Nicholas Loney prestaba dinero a los hacenderos y metió molinos de vapor, y los telares de Molo se hundieron. Lo que casi nadie recuerda: cuando Manila cayó ante los estadounidenses el 13 de agosto de 1898, el gobierno español de Filipinas se mudó aquí. Iloilo fue su última capital, hasta que el general Diego de los Ríos evacuó la plaza en la Nochebuena de 1898 y la entregó a los revolucionarios filipinos.",
   "fuente": "National Historical Commission of the Philippines, marcadores del gobierno español de 1898 y del Grito de Santa Bárbara; «A Britisher in the Philippines: the Letters of Nicholas Loney» (Manila, Biblioteca Nacional, 1964) para el azúcar y los molinos.",
   "fundacion": "poblados de Irong-Irong y Ogtong anteriores; Villa Rica de Arevalo en 1581"
  },
  "122.08,6.92": {
   "texto": "El 23 de junio de 1635 el jesuita Melchor de Vera puso la primera piedra del Real Fuerte de San José, hoy fuerte del Pilar. Para levantarlo juntaron albañiles y soldados traídos de Cebú, Pampanga, Luzón y Nueva España, que no se entendían entre sí; la explicación más aceptada es que de ese español de obra salió el chabacano, lengua criolla con gramática filipina y vocabulario español, viva hoy en Zamboanga y con primas en Cavite y Ternate. En 1663 España abandonó el fuerte para defender Manila de Koxinga, y el ingeniero Juan Sicarra lo reconstruyó en 1718-1719 bajo la advocación del Pilar.",
   "fuente": "Museo Nacional de Filipinas, marcador y museo del fuerte del Pilar (fechas de 1635, 1663 y 1718-1719); John M. Lipski, estudios sobre el chabacano de Zamboanga y los criollos hispanofilipinos.",
   "fundacion": "asentamientos subanun y lutaos anteriores; primera piedra del fuerte el 23 de junio de 1635"
  },
  "9.77,1.87": {
   "texto": "Bata creció como factoría en la costa ndowe, entre los ríos Utonde y Ekuku, y en 1900 el sitio lo ocupaban los franceses. Ese mismo año el Tratado de París del 27 de junio fijó los límites del Muni y el enclave quedó para España, que se quedó con 26.017 kilómetros cuadrados frente a las pretensiones mucho mayores que había llevado a la mesa. Bata fue capital de la Guinea continental y puerto de la madera okume y del cacao. El 7 de marzo de 2021 estallaron los depósitos del cuartel de Nkoantoma y se llevaron por delante barrios enteros de la ciudad.",
   "fuente": "Tratado de París de 27 de junio de 1900 entre Francia y España sobre límites en el golfo de Guinea; Mariano L. de Castro y María Luisa de la Calle, trabajos sobre la colonización española del golfo de Guinea; comunicados oficiales guineanos de marzo de 2021 sobre Nkoantoma.",
   "fundacion": "factoria comercial anterior, ciudad formalizada en 1900"
  },
  "10.82,1.59": {
   "texto": "Se llamó Oyala y Djibloho antes de llamarse Ciudad de la Paz: una capital abierta a machete en la selva de Wele-Nzas, a 454 metros de altitud, a 20 kilómetros del aeropuerto de Mengomeyén y lejos del mar. Ese es el punto. Teodoro Obiang, que llegó al poder por el golpe de agosto de 1979 y sobrevivió al intento de marzo de 2004, quiso un gobierno que no se pueda tomar desde la costa. El plano trae avenidas de seis carriles, una presa en el río Wele y la Universidad Afroamericana de África Central, abierta en 2015. El distrito mide 81,5 kilómetros cuadrados. El traslado no está consumado: Malabo sigue siendo la capital oficial del país.",
   "fuente": "Ficha «Ciudad de la Paz / Oyala» y «Provincia de Djibloho» en Wikipedia en español, consultadas el 7 de octubre de 2026 (superficie, altitud y cronología administrativa); reportajes de prensa internacional sobre la construcción de Oyala.",
   "fundacion": "obras iniciadas hacia 2011-2012 junto a la aldea de Oyala"
  },
  "-15.94,23.71": {
   "texto": "En noviembre de 1884, mientras en Berlín se repartía África, el teniente Emilio Bonelli desembarcó en la península de Río de Oro y plantó una caseta de madera: eso fue Villa Cisneros. España declaró el protectorado el 26 de diciembre de aquel año. En 1932 la República la convirtió en colonia penitenciaria y allí fueron a parar deportados del levantamiento del Alto Llobregat y, en agosto, implicados en la sublevación del general Sanjurjo. España se marchó en 1976; Mauritania ocupó la plaza y renunció a ella en 1979, y desde entonces la administra Marruecos. Hoy la bahía es una de las mecas del kitesurf.",
   "fuente": "Real orden de 26 de diciembre de 1884 por la que España declara el protectorado de Río de Oro; artículo «La colonia penitenciaria de Villa Cisneros. Deportaciones», revista Historia y Comunicación Social, Universidad Complutense de Madrid.",
   "fundacion": "establecimiento espanol de Villa Cisneros, noviembre de 1884"
  },
  "-11.68,26.73": {
   "texto": "Esmara no la fundaron los españoles. La levantó hacia 1898 el chej Ma el Ainin como capital religiosa y base contra la penetración francesa: hizo traer canteros para una mezquita y un ksar de piedra en pleno desierto, y la mezquita nunca se terminó. En 1913 una columna francesa la destruyó. El 15 de mayo de 1934, después de la sumisión pactada con las tribus, una unidad española al mando del capitán Bullón entró en el pueblo, y Smara quedó como puesto de las Tropas Nómadas hasta la retirada de 1975-1976. Las ruinas del ksar y de la mezquita siguen en pie.",
   "fuente": "«Los fuertes del Sahara español», comunicación académica de la ACAMI (2023), para los puestos militares y la cronología de 1934; Encyclopaedia Britannica, entrada «Smara», para la fundación de Ma el Ainin y la destrucción francesa de 1913.",
   "fundacion": "fundada hacia 1898 por el chej Ma el Ainin; guarnicion espanola desde 1934"
  },
  "28.98,41.01": {
   "texto": "En 1493, un año después de la expulsión, los hermanos David y Samuel ibn Nahmías montaron en Constantinopla la primera imprenta del Imperio otomano y sacaron un libro en hebreo. Los recién llegados organizaron sus sinagogas por procedencia —el kal de Aragón, el de Castilla, el de Portugal, el de Córdoba— en Balat y Hasköy, y su judeoespañol acabó imponiéndose incluso sobre los judíos romaniotas que ya vivían allí y hablaban griego. Hoy queda El Amaneser, suplemento mensual del semanario Şalom escrito íntegramente en judeoespañol: el único periódico del mundo en esa lengua. Su número 200 salió en 2021.",
   "fuente": "Centro de Investigaciones sobre la Cultura Sefardí Otomano-Turca de Estambul (editor de El Amaneser); Encyclopaedia Judaica, entrada «Istanbul»",
   "fundacion": "Bizancio griego hacia 660 a.C., refundada como Constantinopla en 330"
  },
  "22.94,40.64": {
   "texto": "El 15 de marzo de 1943 salió de la estación de Salónica el primer convoy hacia Auschwitz-Birkenau. Hasta agosto fueron diecinueve, cargados en el gueto Baron Hirsch, pegado a las vías. Las cifras no cuadran del todo entre fuentes —entre 42.830 y 48.974 deportados—, pero el resultado sí: más de 38.000 fueron gaseados al llegar, y al terminar la guerra quedaban en la ciudad menos de 2.000 judíos de una comunidad que llevaba allí cuatro siglos y medio hablando judeoespañol. Tres meses antes, en diciembre de 1942, el cementerio judío fue arrasado; sobre el solar está hoy el campus de la Universidad Aristóteles.",
   "fuente": "Enciclopedia del Holocausto del USHMM, entrada «Salonika»; Holocaust Memorial Day Trust, «15 March 1943»; Stefania Zezza en Sephardic Horizons, vol. 6",
   "fundacion": "fundada en 316 a.C. por Casandro sobre aldeas que ya existían, entre ellas Terma"
  },
  "18.41,43.86": {
   "texto": "Laura Papo Bohoreta (Sarajevo, 1891-1942) decidió que el judeoespañol de su barrio merecía escribirse. Recogió romances, refranes y canciones que las mujeres se habían pasado de memoria desde el siglo XVI, y en 1932 firmó «La mužer sefardí de Bosna», el primer estudio sobre ellas, redactado en su propia lengua. Sus obras de teatro se representaron en la ciudad. Murió en 1942, poco después de que se llevaran a sus hijos. Los sefardíes aparecen en los registros otomanos de Sarajevo desde 1565, como comerciantes de paño fino, y levantaron Il Kal Viejo en 1581: el edificio sigue en pie y hoy es el Museo Judío.",
   "fuente": "Museo Judío de Bosnia y Herzegovina (sinagoga de 1581); «The Sephardim of Bosnia», Spirit of Bosnia, vol. 3, n.º 1 (2008)",
   "fundacion": "sobre el poblado medieval de Vrhbosna, ciudad otomana fundada hacia 1461"
  },
  "-5.36,35.58": {
   "texto": "En 1862 la Alliance Israélite Universelle abrió en Tetuán su primera escuela del mundo: antes que en París, Estambul o Bagdad. Enseñaba en francés a chicos que en casa hablaban haketía, el judeoespañol del norte de Marruecos trenzado con árabe y hebreo —«ferazmal», «mazal», «meldar»—. La judería se había mudado al mellah nuevo hacia 1808 y España ocupó la ciudad en 1860; entre la escuela francesa y el castellano de los recién llegados, el habla vieja se fue borrando sin que nadie la prohibiera. Los tetuaníes emigraron después a Israel, Caracas, Madrid y Ceuta. Queda la sinagoga de Isaac Bengualid y queda el cementerio judío de la ladera.",
   "fuente": "Archivos de la Alliance Israélite Universelle (París), escuela de Tetuán, 1862; Yaakov Bentolila, estudios sobre la haketía, Universidad Ben Gurión",
   "fundacion": "núcleo meriní anterior arrasado en el siglo XV, refundada hacia 1484-1492 por exiliados granadinos"
  },
  "-56.43,-25.75": {
   "texto": "Villa Rica del Espíritu Santo nació en 1570 en el Guairá, al oriente del Paraná, en tierras que hoy son brasileñas. Cuando los bandeirantes de São Paulo arrasaron la región entre 1628 y 1632 para capturar indígenas, la ciudad entera se puso a caminar: cambió de sitio varias veces, siempre hacia el poniente, hasta clavar su plaza en 1682 al pie del Ybytyruzú. No es una metáfora — los vecinos cargaban el cabildo, la imagen del santo y el nombre. Aquí nació Manuel Ortiz Guerrero, el poeta que le puso letra a «India».",
   "fuente": "Historiografía paraguaya sobre los traslados de Villa Rica del Espíritu Santo; coordenadas tomadas de la ficha geográfica de Villarrica (departamento de Guairá), consultada el 8 de octubre de 2026.",
   "fundacion": "1570 (año discutido), emplazamiento definitivo en 1682"
  },
  "-57.43,-23.41": {
   "texto": "La Villa Real de la Concepción se plantó en 1773 por orden del gobernador Agustín Fernando de Pinedo con dos tareas incómodas: frenar las cabalgatas mbayá-guaycurú y marcar presencia frente al avance portugués por el norte. El río fue su oficio: por su puerto bajaron la yerba mate y el tanino del quebracho, y de ese dinero le quedó el apodo de «la Perla del Norte». También fue cuartel de rebeldes dos veces: en la revolución liberal de 1904 su guarnición leal se rindió sin combate ante las fuerzas llegadas por el río, y aquí se levantó el cuartel en marzo de 1947, lo que abrió la guerra civil.",
   "fuente": "Reseña histórica de Concepción y del departamento de Concepción (fundación por Agustín Fernando de Pinedo, 1773); coordenadas verificadas el 8 de octubre de 2026.",
   "fundacion": "Fundada en 1773"
  },
  "-55.70,-27.13": {
   "texto": "La última reducción fundada sobre el Paraná, en junio de 1706, fue también la más ambiciosa: unas ocho hectáreas de plaza, talleres, viviendas en hilera y dos templos. En 1728 vivían allí unos 3.000 guaraníes. Lo que hay que mirar es el friso de piedra de la iglesia mayor: una fila de ángeles músicos con arpa, clave, órgano y maracas. No es adorno piadoso — en las reducciones había orquestas guaraníes que ejecutaban barroco europeo, y el friso retrata lo que de verdad se oía. La obra quedó trunca con la expulsión de los jesuitas en 1767.",
   "fuente": "Expediente de la UNESCO «Misiones jesuíticas de La Santísima Trinidad de Paraná y Jesús de Tavarangue» (inscripción de 1993) y fichas derivadas; coordenadas de las ruinas 27°07′55″S 55°42′07″O, verificadas el 8 de octubre de 2026.",
   "fundacion": "reducción jesuítica fundada en junio de 1706"
  },
  "-55.75,-27.06": {
   "texto": "El pueblo de Jesús se fundó en 1685 junto al río Monday y se mudó varias veces hasta parar aquí en 1760. Siete años después llegó la orden de expulsión y la obra se congeló a media altura: el templo nunca recibió techo. Por eso se ve lo que en una iglesia terminada queda escondido, y algo que no se repite en América: arcos trilobulados de aire mudéjar, rarísimos a este lado del Atlántico. El edificio iba a ser de los mayores de todas las misiones, con tres naves. Comparte con Trinidad la inscripción de la UNESCO de 1993.",
   "fuente": "Expediente de la UNESCO n.º 648 y fichas de las ruinas de Jesús de Tavarangüé; coordenadas 27°03′22″S 55°45′09″O, verificadas el 8 de octubre de 2026. Las medidas exactas del templo varían según la fuente y no se afirman aquí.",
   "fundacion": "reducción fundada en 1685, trasladada a este sitio en 1760"
  },
  "-58.51,-27.07": {
   "texto": "Carlos Antonio López mandó fortificar en 1854 un codo del río Paraguay donde ningún barco podía pasar sin exponer el costado. Allí se alinearon casi dos kilómetros de baterías y una cadena tendida de orilla a orilla que, al izarse, dejaba a los buques quietos bajo los cañones. La llamaron el Gibraltar de Sudamérica. En la guerra de la Triple Alianza aguantó más de dos años, con hasta 24.000 hombres y con Francisco Solano López adentro; el 19 de febrero de 1868 los acorazados brasileños forzaron el paso y el 25 de julio cayó. El tratado aliado ordenó arrasarla.",
   "fuente": "Fichas históricas de la Fortaleza de Humaitá y del sitio de Humaitá (guerra de la Triple Alianza); coordenadas 27°04′06″S 58°30′31″O, verificadas el 8 de octubre de 2026.",
   "fundacion": "fortificación iniciada en 1854, el pueblo creció alrededor"
  },
  "-66.17,-17.41": {
   "texto": "El valle ya trabajaba cuando llegaron los españoles: los incas lo llamaban Qochapampa y Huayna Cápac instaló allí miles de mitmaqkuna traídos de lejos para sembrar maíz para el Estado. Sobre eso se fundó la Villa de Oropesa en 1571, refundada en 1574, y el oficio no cambió de fondo: trigo y maíz subiendo a Potosí para alimentar las minas. El 27 de mayo de 1812, con los hombres ya derrotados, mujeres y ancianas defendieron la colina de San Sebastián contra las tropas de Goyeneche. De esa fecha viene el Día de la Madre en Bolivia, y la colina se llama la Coronilla.",
   "fuente": "Historia regional del valle de Cochabamba (ocupación incaica con mitmaqkuna y abastecimiento de Potosí) y relato de la Coronilla, 27 de mayo de 1812; coordenadas de la plaza 14 de Septiembre.",
   "fundacion": "Villa de Oropesa, 1571, refundada en 1574"
  },
  "-64.75,-21.52": {
   "texto": "Luis de Fuentes y Vargas la fundó el 4 de julio de 1574 por orden del virrey Toledo, y el nombre lo decía todo: Villa de San Bernardo de la Frontera de Tarixa. Era un puesto de frontera contra los chiriguanos, que la hostigaron más de un siglo. El 15 de abril de 1817, en La Tablada, la guerrilla de Eustaquio «Moto» Méndez derrotó a la columna realista y la ciudad quedó libre. Lo raro vino después: en 1826 su cabildo decidió por cuenta propia pertenecer a Bolivia y no a Salta. Argentina siguió reclamando el territorio durante décadas.",
   "fuente": "Crónica de la fundación de la Villa de San Bernardo de la Frontera de Tarixa (1574) y de la batalla de La Tablada (1817). La fecha exacta del acuerdo del cabildo de 1826 y el tratado que cerró el reclamo argentino no se reverificaron en esta ronda.",
   "fundacion": "4 de julio de 1574"
  },
  "-60.78,-17.85": {
   "texto": "A pocos kilómetros del pueblo hay un campo de ruinas que casi nadie busca: Santa Cruz de la Sierra la Vieja, la ciudad que Ñuflo de Chaves fundó en 1561 y que luego se mudó hacia el poniente, a más de 250 kilómetros, hasta el sitio que ocupa hoy. La misión de San José se levantó en 1698, con los padres Felipe Suárez y Dionisio Ávila, sobre población chiquitana que ya estaba allí. Su conjunto es el único de Chiquitos construido en piedra: los demás son de adobe y madera. Las misiones chiquitanas entraron en la lista de la UNESCO en 1990.",
   "fuente": "Fichas de las misiones jesuíticas de Chiquitos (fundación de 1698 por Felipe Suárez y Dionisio Ávila, única iglesia del conjunto en piedra) e inscripción UNESCO de 1990; coordenadas 17°50′44″S 60°44′26″O, consultadas el 8 de octubre de 2026.",
   "fundacion": "misión jesuítica fundada en 1698"
  },
  "-80.52,8.33": {
   "texto": "Gaspar de Espinosa ya conocía el terreno: en 1516 lo había recorrido saqueando los señoríos del Pacífico, con Francisco Pizarro y Diego de Almagro entre su gente. Volvió el 20 de mayo de 1522, por orden del gobernador Pedro Arias Dávila, y plantó la villa sobre el territorio del cacique Natá, cuyo nombre se quedó con el pueblo que lo desalojó. Se llamó «de los Caballeros» porque el suelo se repartió entre hidalgos. De aquí salieron las entradas a Veragua y los refuerzos hacia Nicaragua. La iglesia de Santiago Apóstol, hoy basílica menor, conserva fábrica del siglo XVIII.",
   "fuente": "Gonzalo Fernández de Oviedo, Historia general y natural de las Indias (entrada de Gaspar de Espinosa por Natá y Escoria, 1516); crónicas de la gobernación de Castilla del Oro sobre la fundación de 1522; Wikipedia en español «Natá de los Caballeros» y «Basílica Menor Santiago Apóstol de Natá».",
   "fundacion": "fundada el 20 de mayo de 1522 sobre el señorío del cacique Natá"
  },
  "-79.47,9.58": {
   "texto": "Diego de Nicuesa desembarcó aquí en 1510 con lo que le quedaba de una expedición deshecha, y la tradición le atribuye la frase que dio nombre al puerto. El sitio se abandonó y Diego de Albítez lo repobló hacia 1519. Fue la boca caribeña del Camino Real: por aquí salía la plata del Perú. El 29 de julio de 1572 Francis Drake tomó la plaza de madrugada con unos setenta hombres, pero una herida de bala en la pierna lo dejó desangrándose y sus marineros se lo llevaron sin la plata. En 1597 la Corona mudó la feria a Portobelo y el pueblo quedó vacío.",
   "fuente": "Relaciones del viaje de Diego de Nicuesa en Fernández de Oviedo; «Sir Francis Drake Revived» (Londres, 1626), relato del asalto de 1572 compilado por Philip Nichols; documentación del sistema de flotas y ferias de Tierra Firme, Archivo General de Indias; Wikipedia en español «Nombre de Dios (Panamá)».",
   "fundacion": "primer asentamiento en 1510, repoblado hacia 1519-1520"
  },
  "-82.43,8.43": {
   "texto": "Se fundó el 19 de marzo de 1602 como San José de David, aunque las fuentes se contradicen sobre el fundador: unas nombran a Juan López de Sequeira y otras a Francisco de Gama. Trescientos diecinueve años después tuvo la guerra al lado. El 21 de febrero de 1921 una columna costarricense al mando del coronel Héctor Zúñiga Mora ocupó Pueblo Nuevo de Coto, entonces del distrito panameño de Alanje, a pocas horas de David. En ese frente del Pacífico los costarricenses fueron derrotados, y el 5 de marzo todo había acabado por presión de Estados Unidos. El límite no se cerró hasta 1941.",
   "fuente": "Relaciones de la fundación de San José de David (1602), con el desacuerdo sobre el fundador recogido en Wikipedia en español «David (ciudad)»; documentación de la Guerra de Coto en el Archivo Nacional de Panamá y el Archivo Nacional de Costa Rica; texto del tratado de límites Echandi Montero-Fernández Jaén, 1 de mayo de 1941.",
   "fundacion": "fundada el 19 de marzo de 1602 como San José de David"
  },
  "-80.28,7.76": {
   "texto": "Nació de una huida. El 28 de enero de 1671 Henry Morgan incendió Panamá la Vieja, y un grupo de familias acomodadas se embarcó hacia la península de Azuero; la tradición las pone al mando del capitán gallego Gil Jacinto Barahona y data el pueblo hacia el 19 de julio de 1671. Traían a Santa Librada por patrona y le empezaron el templo de inmediato: el altar mayor se estrenó el 20 de julio de 1679 y la obra se cerró en 1725. Aquí nació, el 28 de noviembre de 1856, Belisario Porras, tres veces presidente de Panamá.",
   "fuente": "Crónicas del asalto de Morgan a Panamá la Vieja (1671); historia de la parroquia de Santa Librada publicada por la Diócesis de Chitré y por La Estrella de Panamá; Wikipedia en español «Distrito de Las Tablas» y «Belisario Porras».",
   "fundacion": "hacia el 19 de julio de 1671, fecha de tradición y sin acta conocida"
  },
  "-84.09,9.94": {
   "texto": "A las seis y cuarto de la tarde del sábado 9 de agosto de 1884 se encendieron veinticinco lámparas de carbón en el centro de San José, alimentadas por una planta hidroeléctrica de cincuenta kilovatios instalada en Aranjuez, junto a una caída del río Torres; la montaron el ingeniero Manuel Víctor Dengo Bertora y el guatemalteco Luis Batres García, y la pagó el café. Se repite que fue la tercera ciudad del mundo con luz pública: eso es un mito discutido, la fecha no. Sesenta y un años antes ni era capital: la ganó el 5 de abril de 1823 en el cerro de Ochomogo.",
   "fuente": "Acuerdos del cabildo de Cartago sobre la Boca del Monte (1737-1738); partes de la batalla de Ochomogo, 5 de abril de 1823; ICE, «La primera planta eléctrica en Costa Rica» (documento institucional, datos de potencia, lámparas y constructores); Archivo Nacional de Costa Rica, «Un momento con la historia», agosto de 2021; artículo «San José y el mito de la tercera ciudad con luz eléctrica», Cambio Político.",
   "fundacion": "poblada desde 1738 como Villa Nueva de la Boca del Monte"
  },
  "-84.12,9.99": {
   "texto": "Fadrique Gutiérrez levantó aquí, desde 1876, una torre de defensa con un defecto que se ve a simple vista: las troneras se ensanchan hacia fuera, de modo que recogen el fuego enemigo en vez de desviarlo. El escultor murió sin terminar la fortificación y quedó la torre sola, El Fortín, que la provincia convirtió en su emblema y el Estado protege como monumento. El poblado arrancó en 1706, cuando vecinos salidos de Cartago levantaron una ermita en el paraje de Alvirilla; en 1714 se mudó al sitio que los indígenas llamaban Cubujuquí, y tomó el nombre de Heredia en 1763, por el gobernador Alonso Fernández de Heredia. En 1823 peleó del lado perdedor en Ochomogo y la capital se le fue a San José.",
   "fuente": "Documentación de la Villa Vieja de Cubujuquí (1706) y del cambio de nombre en 1763 bajo el gobernador Alonso Fernández de Heredia; expedientes del Centro de Investigación y Conservación del Patrimonio Cultural de Costa Rica sobre El Fortín; Wikipedia en español «El Fortín (Heredia)» y «Fadrique Gutiérrez».",
   "fundacion": "villa de 1706 con el nombre de Cubujuquí"
  },
  "-85.45,10.15": {
   "texto": "Aquí no hubo acta de fundación: el pueblo era la cabecera del cacique Nicoya, chorotega, cuando Gil González Dávila llegó en 1523 y lo bautizó. Durante tres siglos el Partido de Nicoya dependió de León, en Nicaragua. El 25 de julio de 1824 el cabildo abierto votó pasarse a Costa Rica; Santa Cruz lo acompañó y Guanacaste, la actual Liberia, votó por Nicaragua. El Congreso Federal lo ratificó el 9 de diciembre de 1825, y la frontera no quedó cerrada hasta el tratado Cañas-Jerez del 15 de abril de 1858. La iglesia de San Blas, del siglo XVII, sigue en servicio.",
   "fuente": "Acta del cabildo abierto de Nicoya del 25 de julio de 1824 y decreto de ratificación del Congreso Federal de Centroamérica del 9 de diciembre de 1825; texto del tratado Cañas-Jerez (1858); relación del viaje de Gil González Dávila (1522-1523) en Fernández de Oviedo.",
   "fundacion": "pueblo chorotega anterior, sin acta de fundación española; presencia española desde 1523"
  },
  "-89.56,13.99": {
   "texto": "En 1902 los cafetaleros de Santa Ana se pusieron a construir un teatro a la europea y lo estrenaron el 27 de febrero de 1910; por los planos pasaron Francisco Durini y Cristóbal Molinari. Mientras el grano se vendía bien, aquel escenario trajo ópera y zarzuela a una ciudad de occidente. En 1933, con el precio del café hundido tras la crisis, se acabó la época de oro del teatro. Enfrente, la catedral neogótica se levantaba desde 1906, y el 11 de febrero de 1913 Santa Ana tuvo diócesis propia. La ciudad española creció encima de Sihuatehuacán, asentamiento pipil anterior a la conquista.",
   "fuente": "Teatro Nacional de Santa Ana, ficha del Ministerio de Cultura de El Salvador (portal.cultura.gob.sv); Diario El Salvador, reportaje sobre los 113 años del teatro.",
   "fundacion": "villa española levantada sobre el poblado pipil de Sihuatehuacán, hacia 1569 (fecha discutida)"
  },
  "-89.67,13.74": {
   "texto": "El 22 de enero de 1932, con el precio del café en el suelo, miles de campesinos indígenas tomaron Izalco a machete. Encabezaba el levantamiento el cacique José Feliciano Ama, nacido en 1881, mayordomo de la cofradía del Corpus Christi desde 1917 y por tanto la voz que llevaba los reclamos del pueblo ante el gobierno. Duró días. El régimen de Maximiliano Hernández Martínez respondió matando a quien tuviera traza de indígena, y el 28 de enero colgaron a Ama de un árbol del parque Saldaña, en el barrio La Asunción. Después de 1932 en Izalco se dejó de hablar náhuat en público.",
   "fuente": "Expedientes y bibliografía sobre la matanza de 1932 en El Salvador; ContraPunto (El Salvador), «José Feliciano Ama, cacique y líder indígena (1932)».",
   "fundacion": "pueblo pipil anterior a la conquista; los dos Izalcos se unieron en una sola villa en el siglo XIX (fecha discutida)"
  },
  "-89.36,13.83": {
   "texto": "En 1976 una topadora estaba terraceando un terreno en San Juan Opico para construir silos de granos y partió una pared de barro endurecido. Debajo había una aldea maya entera: la erupción de la Loma Caldera la había sepultado bajo cinco a siete metros de ceniza. No se ha encontrado ni un cuerpo. La gente alcanzó a salir corriendo y dejó la cena servida, los petates tendidos, las vasijas con comida y un sembradío de yuca en pie, el único campo de yuca prehispánico documentado en América. Por eso le dicen la Pompeya de América. La UNESCO la inscribió como Patrimonio Mundial en 1993.",
   "fuente": "UNESCO, Centro del Patrimonio Mundial, ficha 675 «Joya de Cerén Archaeological Site»; Ministerio de Cultura de El Salvador.",
   "fundacion": "aldea maya sepultada hacia el año 600 d. C.; redescubierta en 1976"
  },
  "-88.18,13.48": {
   "texto": "El 8 de mayo de 1530 el capitán Luis de Moscoso plantó San Miguel de la Frontera. No era una ciudad para vivir: era una plaza de guerra para someter al señorío lenca de Chaparrastique, nombre del lugar que ya existía y que se traduce como «lugar de las orquídeas hermosas». La frontera se quedó en el nombre y en 1586 el poblado recibió el título de ciudad. El volcán que comparte ese nombre sigue mandando: el 29 de diciembre de 2013 el Chaparrastique soltó una columna de ceniza de varios kilómetros y obligó a evacuar los cantones de su falda, a unos quince kilómetros del centro.",
   "fuente": "Reseña histórica de San Miguel (fundación de 1530 y título de ciudad de 1586); boletines del Ministerio de Medio Ambiente y Recursos Naturales de El Salvador sobre la erupción del 29 de diciembre de 2013.",
   "fundacion": "fundada el 8 de mayo de 1530 sobre territorio del señorío lenca de Chaparrastique"
  },
  "-89.88,16.93": {
   "texto": "La isla se llamaba Nojpetén y era la capital de los itzaes, el último Estado maya independiente. Hernán Cortés pasó por ahí en 1525, camino a Honduras, y dejó un caballo cojo que los itzaes acabaron veneran-do como Tzimin Chac; frailes que llegaron décadas después se lo encontraron convertido en ídolo. Ciento setenta y dos años más tarde, el 13 de marzo de 1697, Martín de Ursúa y Arizmendi, gobernador de Yucatán, cruzó el lago en una galeota armada y tomó la isla. Derribaron los templos y encima levantaron la actual Flores. Ese día se cerró la conquista de Mesoamérica, casi dos siglos después de Tenochtitlan.",
   "fuente": "Prensa Libre (Guatemala), «1697: la conquista de Tayasal, último reducto maya»; crónicas de la conquista del Petén.",
   "fundacion": "Nojpetén, capital itzá anterior a la conquista; tomada el 13 de marzo de 1697"
  },
  "-89.35,14.57": {
   "texto": "En 1594 el escultor Quirio Cataño talló un Cristo de madera oscura —de naranjo, según la tradición— que acabó en el pueblo de Esquipulas y lo convirtió en el santuario más visitado de Centroamérica; su fiesta cae el 15 de enero. La basílica blanca de cuatro torres que lo guarda se inauguró en 1759. El nombre del pueblo salió de Guatemala en los años ochenta: aquí se reunieron los cinco presidentes centroamericanos en mayo de 1986, y el acuerdo de paz que nació de ese proceso, Esquipulas II, se firmó el 7 de agosto de 1987 en Ciudad de Guatemala. Óscar Arias ganó el Nobel ese mismo año.",
   "fuente": "Reseña histórica de la Catedral Basílica de Esquipulas; texto del Acuerdo de Esquipulas II, firmado el 7 de agosto de 1987.",
   "fundacion": "asentamiento ch'orti' anterior; pueblo colonial de mediados del siglo XVI (fecha discutida)"
  },
  "-91.11,14.94": {
   "texto": "Entre 1701 y 1703 el fraile dominico Francisco Ximénez estuvo de cura en Santo Tomás Chichicastenango y le pusieron en las manos un manuscrito en k'iche' escrito con letras latinas. Lo copió en una columna y lo tradujo al español en la de al lado, en algún momento de esos dos años: no se conoce la fecha exacta en que lo terminó. Ese cuaderno es la única vía por la que conocemos el Popol Vuh, porque el original k'iche' se perdió. Hoy el manuscrito de Ximénez está en la Newberry Library de Chicago. La iglesia donde apareció sigue en pie sobre la plataforma de un templo prehispánico, y en sus gradas se sigue quemando copal.",
   "fuente": "Manuscrito de Francisco Ximénez, Newberry Library (Chicago); cronología del Popol Vuh, libro sagrado k'iche'.",
   "fundacion": "pueblo k'iche' de Chuwi'la, anterior a la conquista; cabecera colonial del siglo XVI"
  },
  "-83.77,12.00": {
   "texto": "El nombre viene del corsario neerlandés Abraham Blauvelt, que usaba esta laguna hacia 1633. Bluefields fue la capital de la Mosquitia: el Tratado de Managua de 1860 la dejó bajo soberanía nicaragüense pero con autogobierno miskito, en la llamada Reserva Mosquitia. El 12 de febrero de 1894 el general Rigoberto Cabezas ocupó la ciudad con tropas y en noviembre la Convención Mosquita liquidó la Reserva. En Managua eso se enseña como «la Reincorporación»; en la costa, mucha gente lo cuenta como una anexión. Aquí se habla criollo inglés y la iglesia morava sigue pesando más que cualquier oficina.",
   "fuente": "Tratado Zeledón-Wyke (Managua, 1860) y Convención Mosquita de 1894; CIJ, «Controversia territorial y marítima (Nicaragua c. Colombia)», sentencia del 19 de noviembre de 2012.",
   "fundacion": "poblado miskito y kukra con presencia europea desde la década de 1630, sin acta de fundación"
  },
  "-87.17,12.53": {
   "texto": "El Realejo fue el astillero del Pacífico centroamericano: con cedro de la zona y jarcia traída de Nicoya se botaban allí los barcos del comercio con Panamá y el Perú. Por eso lo buscaron los piratas. En 1685 llegaron Edward Davis, Charles Swan y William Knight con ocho naves y 640 hombres; 470 desembarcaron, marcharon tierra adentro, saquearon León y al volver quemaron El Realejo, que los vecinos ya habían dejado vacío. Zarparon el 7 de septiembre de 1685. El puerto nunca recuperó el pulso y en el siglo XIX su tráfico pasó a Corinto.",
   "fuente": "Troy S. Floyd, «Realejo: A Forgotten Colonial Port and Shipbuilding Center in Nicaragua», Hispanic American Historical Review 51(2), 1971.",
   "fundacion": "fundado hacia 1532-1534"
  },
  "-85.82,11.44": {
   "texto": "El istmo de Rivas, poco más de veinte kilómetros entre el lago Cocibolca y el Pacífico, fue atajo interoceánico: desde 1851 la compañía de Cornelius Vanderbilt cruzaba por aquí a los viajeros que iban a California. Ese negocio trajo al filibustero William Walker, derrotado en Rivas el 29 de junio de 1855. El 11 de abril de 1856, en la segunda batalla, sus hombres se atrincheraron en el mesón de Guerra; el maestro Enmanuel Mongalo y Rubio le prendió fuego bajo las balas y los obligó a salir. Walker terminó fusilado en Trujillo, Honduras, el 12 de septiembre de 1860.",
   "fuente": "Partes y documentos de la Guerra Nacional (1855-1857) recogidos por la Academia de Geografía e Historia de Nicaragua; registros de la Accessory Transit Company.",
   "fundacion": "valle nicarao, erigido en villa española en 1717"
  },
  "-88.04,15.78": {
   "texto": "La Corona construyó San Fernando de Omoa para que la plata de las minas de Tegucigalpa saliera escoltada y para frenar a los británicos de Belice y la Mosquitia: muros de piedra coralina, foso y la mayor obra militar de Centroamérica. No sirvió de mucho. El 16 de octubre de 1779, con unos 150 hombres entre soldados y marineros, los británicos la asaltaron y se la quedaron junto con la plata que esperaba embarque. La ocuparon apenas hasta finales de noviembre de ese año: las fiebres y el contraataque español los echaron de allí.",
   "fuente": "Partes del asalto británico de 1779 (expedición de Luttrell y Dalrymple); «Planos de la Fortaleza, Puerto y Población de Omoa», Biblioteca Virtual de Defensa (España).",
   "fundacion": "fortaleza levantada entre 1756 y 1775"
  },
  "-86.52,16.33": {
   "texto": "Tras perder la segunda guerra caribe (1795-1797), los británicos deportaron de San Vicente a unos 5.000 garífunas. Los dejaron primero en el islote de Baliceaux, donde murió más de la mitad de hambre y de fiebre amarilla. El 12 de abril de 1797 desembarcaron 2.026 sobrevivientes en Punta Gorda, Roatán, sin provisiones. De allí pasaron a Trujillo y desde la costa hondureña poblaron el litoral de Belice, Guatemala y Nicaragua; Honduras conmemora esa fecha cada año. Las islas fueron colonia británica en 1852 y pasaron a Honduras por el tratado Wyke-Cruz, firmado el 28 de noviembre de 1859.",
   "fuente": "Expedientes británicos de la deportación de San Vicente (1797) y Tratado Wyke-Cruz (1859); recuentos recogidos en la conmemoración hondureña del 12 de abril.",
   "fundacion": "isla poblada antes de 1502, asentamiento garífuna desde 1797"
  },
  "-87.19,13.30": {
   "texto": "Cristóbal de la Cueva levantó aquí la villa de Xerez de la Frontera de Choluteca en marzo de 1535, sobre tierra chorotega y en la ruta hacia el golfo de Fonseca. Lo que la hizo famosa fue 1998: en octubre el huracán Mitch descargó más de 900 milímetros de lluvia en tres días sobre la zona. El puente nuevo, obra de ingeniería japonesa inaugurada ese mismo año, aguantó sin daños; lo que se movió fue el río Choluteca, que se abrió otro cauce y dejó el puente cruzando tierra seca. Hoy se estudia como un cálculo correcto sobre un supuesto equivocado.",
   "fuente": "USGS, informes hidrológicos sobre Honduras tras el huracán Mitch (2001); CIJ, «Controversia fronteriza terrestre, insular y marítima (El Salvador/Honduras, Nicaragua interviniente)», sentencia del 11 de septiembre de 1992.",
   "fundacion": "villa española en marzo de 1535, fecha discutida"
  },
  "-65.22,-26.81": {
   "texto": "El 9 de julio de 1816, en una casa alquilada a Francisca Bazán de Laguna, los diputados de las Provincias Unidas firmaron la independencia. El acta se mandó imprimir en español, quechua y aymara: la guerra se peleaba en el Alto Perú y había que leerla en voz alta a gente que no hablaba castellano. Cuatro años antes, el 24 de septiembre de 1812, Manuel Belgrano desobedeció la orden de retirarse a Córdoba y venció al ejército realista a las puertas del pueblo. La ciudad tampoco estaba en su sitio original: nació en 1565 en Ibatín y se mudó en 1685.",
   "fuente": "Coordenadas: Wikipedia en español, «Plaza Independencia (Tucumán)», consultado el 8 de octubre de 2026. Relato: texto del Acta de la Independencia del 9 de julio de 1816 y bibliografía estándar sobre el Congreso de Tucumán y la batalla de 1812.",
   "fundacion": "fundada en 1565 en Ibatín y trasladada al emplazamiento actual en 1685"
  },
  "-68.82,-32.88": {
   "texto": "El 20 de marzo de 1861, a las 20:36, un terremoto borró la ciudad en menos de un minuto. Las cifras de muertos no coinciden entre fuentes: la más citada es 4.247 y otras llegan a unos 6.000, sobre una población de alrededor de 18.000 habitantes. En lugar de reconstruir encima, el gobierno mandó trazar una Mendoza nueva al suroeste: el agrimensor Julio Balloffet puso calles anchas, la Plaza Independencia en el centro y cuatro plazas satélites alrededor, pensadas como lugares donde correr cuando volviera a temblar. El agua que riega esos árboles baja por acequias que los huarpes ya usaban antes de 1561.",
   "fuente": "Coordenadas: latlong.net, ficha de Plaza Independencia (Mendoza), consultado el 8 de octubre de 2026. Terremoto y ciudad nueva: Wikipedia en español, «Terremoto de Mendoza de 1861», y reportajes de MDZ Online (20 de marzo de 2022 y 20 de marzo de 2025), que recogen las dos horquillas de víctimas.",
   "fundacion": "fundada el 2 de marzo de 1561 y refundada en 1562"
  },
  "-60.67,-32.95": {
   "texto": "Rosario no tiene acta de fundación ni fundador: creció sola sobre el Pago de los Arroyos, a partir de una merced de tierras de 1689 y de la capilla que Santiago de Montenegro levantó hacia 1731. Recién el 3 de agosto de 1852 un decreto de Justo José de Urquiza le dio título de ciudad. Antes de todo eso, el 27 de febrero de 1812, Manuel Belgrano izó por primera vez la bandera celeste y blanca en la barranca, en la batería Independencia que acababa de armar para vigilar el Paraná. La piedra del monumento se puso en 1898 y se inauguró en 1957.",
   "fuente": "Coordenadas y cronología del monumento: Wikipedia en español, «Monumento histórico nacional a la Bandera», y la ficha oficial en argentina.gob.ar/cultura/monumentos, consultadas el 8 de octubre de 2026. Las baterías Libertad e Independencia figuran en ambas.",
   "fundacion": "sin acta de fundación: poblada desde fines del siglo XVII, con título de ciudad en 1852"
  },
  "-68.31,-54.79": {
   "texto": "El 12 de octubre de 1884 Augusto Lasserre izó la bandera argentina en Ushuaia, pero no sobre tierra vacía: ahí funcionaba desde 1869 una misión anglicana, abierta por Waite Stirling y continuada por Thomas Bridges, que vivió entre los yámanas y armó un diccionario de su lengua con más de treinta mil palabras. Hoy es casi todo lo que queda escrito de ese idioma. En 1902 llegó el presidio: los presos talaron el bosque, construyeron el pueblo y tendieron el ferrocarril con el que acarreaban la leña. La cárcel cerró en 1947; el tren y el edificio quedaron.",
   "fuente": "Fecha de fundación y presidio: bibliografía estándar sobre la Expedición Lasserre de 1884 y el Presidio de Ushuaia. Coordenadas: Wikipedia en español, «Museo del Fin del Mundo» (Maipú 173), consultado el 8 de octubre de 2026. El tamaño del diccionario de Bridges queda sin confirmar en fuente primaria.",
   "fundacion": "izamiento de la bandera el 12 de octubre de 1884, sobre una misión anglicana de 1869"
  },
  "-70.94,-53.16": {
   "texto": "Chile ocupó el estrecho con una goleta de madera: la Ancud salió de Chiloé en mayo de 1843 con poco más de veinte personas y el 21 de septiembre izó la bandera en Fuerte Bulnes, antes de que otra potencia reclamara el paso. El fuerte era invivible —viento, suelo malo, leña escasa—, así que en diciembre de 1848 José de los Santos Mardones mudó la colonia unos sesenta kilómetros al norte, a Punta Arenosa. Lo que la volvió rica fue la lana: hacia 1877 el gobernador Diego Dublé Almeyda hizo traer unas trescientas ovejas y de ahí salieron las grandes estancias.",
   "fuente": "Fuerte Bulnes, la Ancud y el traslado de 1848: historiografía estándar de Magallanes. Coordenadas de la Plaza Benjamín Muñoz Gamero: fichas geográficas consultadas el 8 de octubre de 2026 (evendo.com y Wikipedia, «Punta Arenas»), coincidentes en el centro de la plaza.",
   "fundacion": "colonia instalada en Fuerte Bulnes en 1843 y trasladada a Punta Arenas en diciembre de 1848"
  },
  "-73.76,-42.48": {
   "texto": "Castro se fundó el 12 de febrero de 1567 con el nombre de Santiago de Castro y es una de las ciudades más antiguas que siguen en pie en Chile. Lo extraordinario es cómo terminó aquí la colonia: Chiloé fue el último territorio español en Chile y uno de los dos últimos reductos realistas de Sudamérica. Cuando el resto del continente ya era independiente, en el archipiélago seguía ondeando la bandera del rey, y solo capituló con el Tratado de Tantauco, firmado el 15 de enero de 1826, ocho años después de la independencia de Chile. En 1600 el corsario holandés Baltazar de Cordes la había tomado y saqueado.",
   "fuente": "Fundación y coordenadas de la Plaza de Armas: Wikipedia, «Castro, Chile», y la ficha de la Plaza de Armas de Castro en appchiloeturismo.cl, consultadas el 8 de octubre de 2026. Tratado de Tantauco: texto del tratado de 15 de enero de 1826.",
   "fundacion": "fundada el 12 de febrero de 1567 como Santiago de Castro"
  },
  "-58.08,-32.33": {
   "texto": "A Paysandú le dicen «La Heroica» por treinta días de 1864. El 6 de diciembre las fuerzas de Venancio Flores y la escuadra brasileña del almirante Tamandaré empezaron a bombardear la ciudad; adentro resistía Leandro Gómez con alrededor de mil hombres y municiones contadas. Cayó el 2 de enero de 1865 y Gómez, ya rendido, fue fusilado ese mismo día. El nombre viene de mucho antes y no es español: «Pay Sandú» significa «padre Sandú» en guaraní, por el religioso que encabezó el puesto de ganado que la misión de Yapeyú instaló en esta costa del río Uruguay.",
   "fuente": "Sitio de 1864-65: historiografía uruguaya estándar sobre la Guerra de la Triple Alianza y la defensa de Leandro Gómez; no se pudo reverificar en esta ronda el número exacto de defensores. Coordenadas: Wikipedia, «Paysandú» (32°19′17″S 58°04′32″O), consultado el 8 de octubre de 2026; corresponden al casco céntrico, no a una plaza concreta.",
   "fundacion": "origen en un puesto de ganado de la misión de Yapeyú, siglo XVIII"
  },
  "-58.32,-33.40": {
   "texto": "Es el poblado más antiguo que sigue habitado en Uruguay y no lo fundaron colonos: nació como reducción franciscana para los chanás, con el nombre de Santo Domingo Soriano, levantada hacia 1624 en una isla del río Negro. La mudaron varias veces hasta fijarla en 1708 en el sitio actual; Montevideo no empezó a construirse hasta 1724. En la madrugada del 28 de febrero de 1811, a pocos kilómetros, en el arroyo Asencio, Pedro Viera y Venancio Benavides se alzaron contra España y en días tomaron Mercedes y Soriano: así arrancó la revolución oriental, la que llamaron «la admirable alarma».",
   "fuente": "Fundación, traslados y antigüedad relativa frente a Colonia del Sacramento: Wikipedia, «Villa Soriano», y «Soriano Department», consultados el 8 de octubre de 2026. Coordenadas: la misma ficha (33°24′00″S 58°19′12″O), redondeadas; son del pueblo, no de un punto del casco. Grito de Asencio: historiografía uruguaya estándar.",
   "fundacion": "reducción franciscana hacia 1624, en su emplazamiento actual desde 1708"
  },
  "-70.52,19.22": {
   "texto": "En 1494 Colón mandó levantar el fuerte de la Concepción en la Vega Real, en pleno territorio del cacicazgo taíno de Maguá, no en un vacío. La villa que creció alrededor llegó a ser sede de obispado en 1511, por bula de Julio II, a la vez que Santo Domingo y San Juan. El 2 de diciembre de 1562 un terremoto la derribó entera. Los sobrevivientes no reconstruyeron: cargaron lo que pudieron y se mudaron a la orilla del río Camú, donde está hoy La Vega. Las ruinas de la ciudad muerta siguen en pie y se llaman La Vega Vieja.",
   "fuente": "Parque Nacional Histórico y Arqueológico Ruinas de La Vega Vieja (Ministerio de Cultura, R. D.); bula \"Romanus Pontifex\" de Julio II, 8 de agosto de 1511, sobre la erección de los obispados de Santo Domingo, Concepción de la Vega y San Juan.",
   "fundacion": "1494 (fuerte de la Concepción), reconstruida en su emplazamiento actual después de 1562"
  },
  "-68.71,18.62": {
   "texto": "El cacicazgo de Higüey fue el último de La Española en caer, y la villa española se montó encima. Bartolomé de las Casas contó la campaña: en 1504 el cacique Cotubanamá fue capturado escondido en una cueva de la isla Saona y ahorcado en Santo Domingo. Sobre ese territorio, Juan Ponce de León —antes de pasar a Puerto Rico— organizó Salvaleón de Higüey y se hizo una casa de piedra que todavía se visita en San Rafael del Yuma. Cuatro siglos y medio después, entre 1954 y 1971, se levantó allí la basílica de la Altagracia, de hormigón desnudo, proyecto de los arquitectos franceses Pierre Dupré y André Dunoyer de Segonzac, ganadores del concurso internacional de 1947.",
   "fuente": "Bartolomé de las Casas, \"Historia de las Indias\", libro II (guerra de Higüey y muerte de Cotubanamá); archivo de la Basílica de Nuestra Señora de la Altagracia, Higüey.",
   "fundacion": "principios del siglo XVI, hacia 1502-1505 (fecha discutida)"
  },
  "-69.33,19.21": {
   "texto": "Samaná se fundó en 1756 con familias canarias que el gobernador Francisco Rubio y Peñaranda llevó a la bahía para que no la ocupara ninguna otra potencia. Lo inesperado vino después: en 1824 y 1825, invitados por el presidente haitiano Jean-Pierre Boyer, llegaron varios cientos de afroamericanos libres de Filadelfia y Baltimore. Trajeron el metodismo y el inglés, y sus descendientes, los americanos de Samaná, siguieron predicando y cantando en inglés más de siglo y medio. Su templo, «la Churcha», llegó mucho más tarde: se fabricó en Inglaterra y se armó pieza por pieza en 1901, y fue el único edificio de madera que quedó en pie tras el incendio que arrasó el pueblo en 1946. En 1976 el gobierno demolió buena parte del pueblo viejo para rehacerlo pensando en el turismo.",
   "fuente": "Martha Ellen Davis, investigaciones y grabaciones sobre \"los americanos de Samaná\" y su tradición religiosa; Archivo General de la Nación (R. D.), documentación sobre la repoblación canaria de 1756.",
   "fundacion": "1756 (Santa Bárbara de Samaná, con colonos canarios)"
  },
  "-71.64,19.85": {
   "texto": "El 25 de marzo de 1895, en una casa de Montecristi, José Martí y Máximo Gómez firmaron el manifiesto que abría la última guerra de independencia de Cuba; salieron de allí rumbo a la isla el 1 de abril y Martí murió en combate el 19 de mayo. Gómez, dominicano, vivía en el pueblo: su casa es hoy museo. Montecristi llevaba siglos de ir y venir: fundada en el siglo XVI, quedó vacía con las devastaciones de Osorio de 1605 y 1606, cuando la Corona obligó a quemar y despoblar el norte para cortar el contrabando con holandeses e ingleses, y se repobló con canarios en el siglo XVIII.",
   "fuente": "Manifiesto de Montecristi, 25 de marzo de 1895, texto en las Obras completas de José Martí; Casa-Museo Máximo Gómez, Montecristi; crónicas de las devastaciones de Osorio (1605-1606).",
   "fundacion": "siglo XVI (fecha discutida, suele darse 1533), despoblada en 1605-1606 y repoblada en el siglo XVIII como San Fernando de Monte Cristi"
  },
  "-66.73,18.44": {
   "texto": "Arecibo lleva el nombre del cacique Arasibo, cuyo poblado estaba allí antes que nada español, y quedó constituida en villa en 1616. Pero su historia famosa empieza en 1963: en un sumidero de piedra caliza al sur del pueblo abrió el radiotelescopio de Arecibo, un plato de 305 metros que fue el mayor del mundo durante más de medio siglo. Desde él, en 1974, se envió al cúmulo M13 un mensaje de 1.679 bits con la fórmula del ADN y la silueta de una persona. El 1 de diciembre de 2020, tras romperse varios cables, la plataforma de instrumentos —unas 900 toneladas— cayó sobre el plato y lo destrozó.",
   "fuente": "National Science Foundation, informes sobre la rotura de cables y el colapso del telescopio de Arecibo (agosto-diciembre de 2020); documentación del Mensaje de Arecibo preparado por Frank Drake y Carl Sagan (1974).",
   "fundacion": "1616 como Villa de San Felipe del Arecibo, sobre el territorio del cacique Arasibo"
  },
  "-65.88,18.43": {
   "texto": "Loíza se llama así por Yuiza, la única cacica documentada de Puerto Rico, muerta hacia 1513; la tradición dice que estuvo casada con Pedro Mejías, un africano libre. En las haciendas de caña del río Grande de Loíza se formó una de las poblaciones negras libres más densas de la isla, y de ahí salió la bomba. Las fiestas de Santiago Apóstol, del 25 al 28 de julio, sacan tres imágenes distintas del mismo santo —la de los hombres, la de las mujeres y la de los niños— y los vejigantes con caretas de coco seco, que Castor Ayala empezó a hacer en su taller de Medianía Alta hacia 1950.",
   "fuente": "Ricardo Alegría, \"La fiesta de Santiago Apóstol en Loíza Aldea\" (1954); Instituto de Cultura Puertorriqueña, documentación sobre el taller de caretas de Castor Ayala en Medianía Alta.",
   "fundacion": "poblado taíno de la cacica Yuiza; constituida como pueblo en el siglo XVIII (suele darse 1719, fecha discutida)"
  },
  "-65.44,18.15": {
   "texto": "En 1941 la Marina de Estados Unidos expropió cerca de dos terceras partes de Vieques y empujó a miles de vecinos hacia una franja central; el extremo este fue campo de bombardeo durante sesenta años. El 19 de abril de 1999 una bomba errada lanzada desde un caza mató a David Sanes Rodríguez, vigilante civil viequense. Siguieron cuatro años de campamentos dentro del polígono, desobediencia civil y cientos de detenciones, hasta que el 1 de mayo de 2003 la Marina cesó el fuego y se fue. El terreno pasó a ser refugio federal y la limpieza de explosivos y contaminación sigue en marcha.",
   "fuente": "Traspaso de los terrenos de la Marina de EE. UU. al US Fish and Wildlife Service, 1 de mayo de 2003; expediente del este de Vieques en la lista de prioridades nacionales de limpieza (Superfund) de la EPA; nominación del Fortín Conde de Mirasol al Registro Nacional de Lugares Históricos.",
   "fundacion": "el pueblo de Isabel Segunda se constituyó en 1843, sobre una isla poblada desde época precolombina"
  },
  "11.32,1.63": {
   "texto": "De este rincón de selva fang salieron los dos únicos presidentes que ha tenido el país. Francisco Macías Nguema nació en 1924 en Nsegayong, distrito de Mongomo, y gobernó desde octubre de 1968. Su sobrino Teodoro Obiang Nguema, nacido en Acoacán el 5 de junio de 1942, lo derrocó el 3 de agosto de 1979 y lo hizo fusilar el 29 de septiembre de ese mismo año. Desde entonces el pueblo recibió carretera asfaltada, la basílica de la Inmaculada Concepción, consagrada en 2011, y el aeropuerto internacional de Mengomeyén, inaugurado el 12 de octubre de 2012 y una de las iglesias más grandes de África.",
   "fuente": "Max Liniger-Goumaz, «Historical Dictionary of Equatorial Guinea»; Ibrahim K. Sundiata, «Equatorial Guinea: Colonialism, State Terror and the Search for Stability» (1990).",
   "fundacion": "poblado fang anterior a la colonia, convertido en puesto administrativo español en el siglo XX (sin año de fundación documentado)."
  },
  "5.63,-1.41": {
   "texto": "Una isla de unos 17 km² donde se habla fa d'ambô, un criollo de base portuguesa, dentro del único país hispanohablante de África. Naves portuguesas la avistaron un 1 de enero —1471 o 1473, según la fuente— y de ahí el nombre, Ano Bom. España la recibió junto con Fernando Poo por el Tratado de El Pardo, firmado el 11 de marzo de 1778. El conde de Argelejo murió ese mismo año y su segundo, Primo de Rivera, abandonó la expedición en 1780. Los annoboneses se gobernaron solos, con su propio vicario laico, hasta que España se instaló de verdad en 1885.",
   "fuente": "Texto del Tratado de El Pardo (1778) en la «Colección de los tratados de paz» de España; Max Liniger-Goumaz, «Historical Dictionary of Equatorial Guinea»; Armando Zamora Segorbe, estudios sobre el fa d'ambô.",
   "fundacion": "poblamiento desde finales del siglo XV, capital isleña consolidada bajo administración española en el siglo XIX."
  },
  "-9.65,26.12": {
   "texto": "El último soldado español salió del Sáhara el 26 de febrero de 1976; al día siguiente, en este pozo del desierto, el Frente Polisario proclamó la República Árabe Saharaui Democrática. El acta se leyó bajo una jaima, tres meses después de la Marcha Verde y de los Acuerdos de Madrid del 14 de noviembre de 1975, que repartieron la administración del territorio entre Marruecos y Mauritania sin consultar a sus habitantes. Bir Lehlu quedó como capital provisional de la RASD hasta 2008, cuando el título pasó a Tifariti. Está al este del muro de arena marroquí, en zona bajo control del Polisario.",
   "fuente": "Acuerdos de Madrid, registrados en la Serie de Tratados de la ONU; Tony Hodges, «Western Sahara: The Roots of a Desert War» (1983).",
   "fundacion": "pozo y campamento beduino sin año de fundación, con valor político desde 1976."
  },
  "-8.13,27.50": {
   "texto": "No son una ciudad: son campamentos en la hamada argelina, levantados entre 1975 y 1976 por quienes huyeron de la guerra. Llevan los nombres de los pueblos que dejaron atrás —El Aaiún, Auserd, Smara, Dajla y, desde 2011, Bojador— y Rabuni hace de sede administrativa. El Polisario y los refugiados denuncian bombardeos marroquíes sobre los campamentos de desplazados de Um Draiga y Guelta Zemmur en febrero de 1976; Rabat lo niega. El alto el fuego llegó el 6 de septiembre de 1991, con la MINURSO creada por la Resolución 690 del 29 de abril. El referéndum previsto en el plan de arreglo de 1991 sigue sin celebrarse treinta y cinco años después; el Consejo de Seguridad renueva el mandato de la MINURSO año tras año.",
   "fuente": "Resolución 690 del Consejo de Seguridad de la ONU (29 de abril de 1991); informes del ACNUR sobre la operación en los campamentos de Tinduf; Tony Hodges, «Western Sahara: The Roots of a Desert War» (1983).",
   "fundacion": "fundados entre 1975 y 1976."
  },
  "27.14,38.42": {
   "texto": "En 1626 nació aquí Sabbatai Zeví, hijo de un agente comercial del puerto. En 1665 se proclamó mesías y media diáspora sefardí le creyó: hubo quien vendió la casa para esperar el fin de los tiempos. El sultán Mehmed IV lo hizo llevar a Edirne y en septiembre de 1666 Zeví se convirtió al islam con el nombre de Aziz Mehmed Efendi; de sus seguidores salieron los dönme. La judería de Kemeraltı llegó a reunir nueve sinagogas en pocos cientos de metros, entre ellas Bikur Holim, de 1724. El gran incendio de 1922 arrasó los barrios griego y armenio y la dejó casi intacta.",
   "fuente": "Gershom Scholem, «Sabbatai Sebi: el mesías místico» (1957); Henri Nahum, «Juifs de Smyrne, XIXe-XXe siècle» (1997).",
   "fundacion": "ciudad milenaria (Esmirna antigua, refundada en el siglo IV a.C.); la judería sefardí se forma tras 1492."
  },
  "28.23,36.44": {
   "texto": "El 23 de julio de 1944 el mando alemán ordenó a los judíos de Rodas presentarse con sus documentos. Reunieron a 1.673 personas, las embarcaron en barcazas hasta El Pireo pasando por Cos y Leros, y de allí siguieron en vagones de ganado: llegaron a Auschwitz-Birkenau el 16 de agosto, unos 2.400 kilómetros después. Fue la deportación más larga del Holocausto. Sobrevivieron 151. El cónsul turco Selahattin Ülkümen consiguió la liberación de 42 personas alegando nacionalidad turca, aunque solo trece tenían pasaporte turco; aviones alemanes bombardearon después el consulado y su mujer, Mihrinissa, embarazada, murió a consecuencia del ataque. La sinagoga Kahal Shalom, de 1577, sigue en pie en la judería.",
   "fuente": "Museo Judío de Rodas (rhodesjewishmuseum.org, sección «Holocaust»); expediente de Selahattin Ülkümen, Justo entre las Naciones, Yad Vashem (1989).",
   "fundacion": "ciudad fundada en 408-407 a.C. por la unión de Yáliso, Camiro y Lindo."
  },
  "-5.81,35.76": {
   "texto": "Aquí se hablaba haketía: castellano antiguo mezclado con hebreo y árabe, la lengua de los sefardíes del norte de Marruecos, que todavía llamaban «la ley de Sefarad» a lo suyo. La sinagoga Nahón, costeada por Moisés Nahón en 1878, fue una de varias en la calle que hoy llaman de las Sinagogas; se restauró en 1994 y funciona como museo. La comunidad se vació en pocos años: entre 1961 y 1964 la Operación Yakhín trasladó a unos 97.000 judíos marroquíes a Israel con el consentimiento tácito de Hasán II, y las guerras de 1967 y 1973 se llevaron a casi todos los demás.",
   "fuente": "Michael M. Laskier, «North African Jewry in the Twentieth Century» (1994); Iacob M. Hassán y los estudios de haketía del CSIC; Sarah Leibovici, «Chronique des Juifs de Tétouan» (1984).",
   "fundacion": "origen fenicio-cartaginés (Tingis), anterior al siglo V a.C."
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
 "rotuloMar": "Franja aproximada: 200 millas náuticas, 370 km de mar con derechos exclusivos sobre pesca, petróleo y fondo marino. Son derechos económicos, no soberanía.",
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
 },
 "huellaMetodo": "ESCALA DE HUELLA HISTÓRICA ESPAÑOLA (0-100), v1, 7 de octubre de 2026.\n\nEs una SEGUNDA medida, distinta de la que ya pinta el globo. La capa actual mide población hispana de hoy; esta mide cuanto tiempo y con cuanta densidad hubo administración y poblamiento español o mexicano dentro de las fronteras actuales de cada estado. No son la misma cosa y no deben compartir leyenda.\n\nDEFINICIÓN QUE LO DECIDE TODO. \"Soberania efectiva\" = años en que España mantuvo dentro del actual estado al menos un asentamiento, guarnicion o sede administrativa permanente. La soberanía solo reclamada en los mapas no cuenta. Por eso Florida empieza en 1565 y no en 1513, y por eso once estados de la antigua Luisiana puntúan casi cero.\n\nFÓRMULA: H = A + B + C + D + E (máximo 100)\n\nA. AÑOS DE SOBERANÍA ESPAÑOLA EFECTIVA — 30 puntos\nA = 30 x (años / 300), con tope en 30. La referencia de 300 años la fija Puerto Rico (1508-1898), que llega al tope.\n\nB. AÑOS DE SOBERANÍA MEXICANA POSTERIOR — 10 puntos\nB = 10 x (años / 27); 27 años es el periodo completo, 1821-1848. Cuando México cubrió solo parte del actual estado: 10 si fue todo o casi todo, 5 si fue una parte sustancial, 2 si fue solo una franja. Texas cuenta 15 años (1821-1836).\n\nC. PRIMERA FUNDACIÓN EUROPEA PERMANENTE DEL ESTADO — 20 puntos\n20 = española, anterior a 1600 y habitada sin interrupción hasta hoy\n17 = española, siglo XVII\n14 = española, siglo XVIII\n11 = española, siglo XIX\n10 = española y la primera del estado, pero abandonada después\n 6 = hubo asentamiento español permanente, pero otra potencia europea se asentó antes\n 3 = solo fuertes o misiones de menos de 20 años, sin continuidad\n 0 = ningún asentamiento español\n\nD. NÚMERO DE ASENTAMIENTOS ESPAÑOLES PERMANENTES — 25 puntos\nMisiones, presidios, pueblos y villas fundados bajo soberanía española o mexicana que estuvieron habitados 20 años o más. Bandas: 25 o más -> 25; 15-24 -> 20; 8-14 -> 15; 4-7 -> 10; 1-3 -> 5; 0 -> 0.\n\nE. TOPONIMIA — 15 puntos\nNombre del estado: 8 si es español (Florida, Nuevo México, California, Nevada, Colorado, Montana, Puerto Rico); 5 si es un nombre indígena transmitido por el español (Texas, Arizona, Utah); 0 si no.\nCiudades: 7 x (ciudades con nombre español entre las diez mayores del estado / 10). Se usa solo el ORDEN del censo de 2020; no se publica ninguna cifra de población de ninguna ciudad.\n\nRANKING: HUELLA HISTÓRICA frente a POBLACIÓN HISPANA ACTUAL\n(el segundo número es el puesto en la capa que ya tiene el globo, con Puerto Rico incluido)\n\n 1. Puerto Rico     90,0  ->  1.o\n 2. Nuevo México    87,6  ->  2.o\n 3. Florida         78,0  ->  7.o\n 4. California      66,4  ->  3.o\n 5. Texas           60,9  ->  4.o\n 6. Arizona         52,5  ->  5.o\n 7. Georgia         37,0  -> ~23.o\n 8. Nevada          20,1  ->  6.o\n 9. Luisiana        19,4  -> ~34.o\n10. Misuri          19,4  -> ~39.o\n\nFLORIDA: 3.a en huella histórica y 7.a en población hispana. Si el globo cuenta solo estados y deja Puerto Rico aparte como territorio, Florida sale 2.a, detrás de Nuevo México.\n\nNO SALE PRIMERA y no la vamos a mover. Puerto Rico la supera por 390 años de soberanía frente a 236. Nuevo México la supera por tres cosas concretas: 27 años de soberanía mexicana que Florida no tuvo (Florida paso de España a Estados Unidos en 1821 sin etapa mexicana), continuidad sin el hueco británico de 1763-1783, y una toponimia urbana mucho más viva. Donde Florida gana a todos los estados es en el factor C, con la fundación europea permanente más antigua del pais continental, y empata en el tope del factor D.\n\nDONDE SE SEPARAN LAS DOS MEDIDAS, que es el punto del encargo:\n- La historia pesa más que la demografía en Georgia (7.a en huella, ~23.a en población), Luisiana (9.a y ~34.a), Misuri (10.o y ~39.o), Carolina del Sur, Alabama y Misisipi. Son estados que la capa actual deja prácticamente apagados.\n- La demografía pesa más que la historia en Nueva Jersey, Nueva York, Illinois, Connecticut y Rhode Island: están entre los diez primeros por población hispana y sacan 0,0 en esta escala, porque no hubo ni soberanía ni asentamiento español. Por eso no aparecen en la lista de fichas.\n- Florida se mueve cuatro puestos hacia arriba; el movimiento más grande de todos es el de Misuri, veintinueve puestos.\n\nLÍMITES QUE LA ESCALA ENSEÑA DE SÍ MISMA: Montana saca 8,0 sin un solo dia de presencia española, solo por su nombre; Oregón y Alaska sacan 0,0 pese a expediciones reales y a una toponimia marítima que sigue en el mapa. La fórmula mide soberanía y poblamiento, no exploración. Está en advertencias que hacer con eso."
};
