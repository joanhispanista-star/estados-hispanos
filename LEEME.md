# La plataforma pública de Los Estados Hispanos

## 🌎 En vivo

**https://joanhispanista-star.github.io/estados-hispanos/**

Publicada el 4 de septiembre de 2026. Ese enlace se puede compartir con
cualquiera: funciona en el teléfono, no pide instalar nada y va por HTTPS.

**Para publicar cambios:** doble clic en `Publicar los cambios.cmd`, un nivel
más arriba. Tarda uno o dos minutos en verse.

> ⚠️ **El repositorio público contiene SOLO esta carpeta.** Tu taller privado
> (`index.html` de la raíz), `El_libro_hispano.docx`, la captura y los
> borradores se quedan en tu computador. El remoto se llama `publico` y no
> `origin` justo para que nadie suba por descuido la rama que lleva todo eso.

**Cómo se abre sin internet:** doble clic en `plataforma/index.html`. Funciona
igual que tu taller.

> Tu taller de propaganda sigue donde estaba, intacto: `../index.html`.
> No se ha tocado ni una línea. Son dos cosas distintas y conviven:
> **el taller es tu herramienta privada; la plataforma es la puerta pública.**

---

## 1. Qué hay dentro

| Pantalla | Qué hace |
|---|---|
| `index.html` | Portada: mapamundi con las 24 naciones, las cifras, la presidencia y el contador de adhesiones. |
| `naciones.html` | Las 24 entidades de la Hispanidad, una por una, con lo que enorgullece y lo que incomoda. |
| `manifiesto.html` | El Manifiesto Hispano en 8 secciones. Cada una con su enlace propio y su botón de compartir. Descargable en texto. |
| `plan.html` | Seis fases con fechas y metas medibles. Y las 8 causas territoriales, cada una con el argumento de la otra parte. |
| `sala.html` | Sala de Honor y Gloria: 18 figuras históricas, 8 medallas propias. |
| `partidos.html` | Qué exige la ley de cada país para fundar un partido, los cargos locales, el Pacto de la Hispanidad y los límites del apoyo entre naciones. |
| `circulo.html` | Círculo de Emprendedores: 5 rutas, 8 lecciones, 6 empresas que lo lograron. |
| `comunidad.html` | Muro, ranking, directorio de miembros y los niveles de participación. |
| `chat.html` | Salas: Plaza Mayor, una por nación y la del Círculo. |
| `misiones.html` | El manual del recluta: 14 misiones, 8 guiones para redes y cómo invitar. |
| `inscripcion.html` | El formulario de alta, con las cuatro autorizaciones separadas. |
| `aportar.html` | Los aportes. Hoy dice la verdad: todavía no se recibe ninguno. |
| `panel.html` | Tu CRM: padrón, mapa de presencia, aportes, autorizaciones y copia de seguridad. |
| `legal/` | Ocho documentos, incluido el que deja al miembro ver, exportar y borrar sus datos de verdad. |

---

## 2. Modo demostración

La plataforma funciona **entera** hoy mismo, pero los datos viven solo en el
navegador de cada persona. Se lo dice a todo el mundo en pantalla; no finge.

**Para que sea real hacen falta dos líneas** en `activos/js/config.js`:

```js
supabase: {
  url  : 'https://TU-PROYECTO.supabase.co',
  anon : 'TU-CLAVE-ANONIMA'
}
```

Y aplicar las tres migraciones de `supabase/migraciones/` **en orden**. Nada
más. Ninguna pantalla se entera del cambio: la capa de datos es la misma.

> ⚠️ **Antes de conectar Supabase, no metas datos de gente real en el panel.**
> En modo demostración el panel no está protegido: lo que protege el padrón
> son las políticas del servidor, y todavía no hay servidor.

---

## 3. Lo que solo puedes hacer tú, con fechas

Estas cinco cosas bloquean el lanzamiento y ninguna es código.

| # | Qué | Para cuándo | Por qué bloquea |
|---|---|---|---|
| 1 | **Rellenar `config.js`**: tu nombre completo, ciudad, correo de contacto y las redes que ya existan. | Esta semana | Sin correo de contacto, la Sala de Honor no se puede difundir (prometemos retirar una ficha en 48 h y no hay dónde reclamarlo) y la página de aportes no puede decir dónde denunciar una suplantación. |
| 2 | **Abrir el proyecto de Supabase** y aplicar las tres migraciones. | Semana 2 | Sin esto no hay padrón compartido: cada persona que se inscriba se queda en su propio navegador y tú no la ves. |
| 3 | **Constituir la asociación sin ánimo de lucro** y sacar el NIT. | Antes de pedir un solo peso | Mientras no exista, cualquier aporte es ingreso personal tuyo: pagas renta a tu nombre, respondes con tu patrimonio y no puedes abrir cuenta ni contratar pasarela. |
| 4 | **Una hora con un abogado electoral colombiano.** | Antes de recoger la primera firma | Las cifras de `partidos.html` llevan su nivel de fiabilidad y a qué organismo confirmarlas. Confírmalas antes de mandar a nadie a la calle. |
| 5 | **Generar la imagen de compartir** en tu taller y guardarla como `activos/img/tarjeta.jpg`, y descomentar la línea `og:image` de `index.html`. | Antes de la primera campaña | Sin ella, los enlaces que se compartan por WhatsApp salen sin miniatura y convierten mucho peor. |

---

## 4. Las reglas que están metidas en el código

No son opiniones: están implementadas y hay comentarios explicando el porqué
en cada archivo.

1. **La plataforma no custodia dinero.** No existe ningún campo llamado saldo,
   billetera, recarga, retiro ni transferencia entre usuarios, y no existirá.
2. **El dinero no da honor.** Ni fijo ni proporcional: cero.
3. **Profundidad uno.** Ganas honor por quien invitas tú, jamás por quien
   invitaron ellos. No hay red debajo de nadie, ni siquiera en la base de datos.
4. **El honor de invitar tiene techo del 25 %** y rendimientos decrecientes.
5. **Cuatro autorizaciones separadas y ninguna premarcada.** La afiliación
   política es dato sensible: una sola casilla que agrupe todo la invalida.
6. **El botón de borrar borra de verdad**, sin escribirle a nadie.
7. **Cero fotografías de personas vivas** en la Sala de Honor.
8. **Sin cookies, sin analítica de terceros y sin píxeles de redes.** En un
   sitio de afiliación política, un píxel delata la militancia del visitante.

---

## 5. De dónde salen los datos

Todo el contenido pasó por investigación y después por una **verificación
adversarial**: un segundo agente cuyo único trabajo era encontrar lo que
estaba mal. Encontró bastante, y está corregido:

- **Naciones:** 3 afirmaciones falsas y 11 imprecisiones. Ecuador tiene cuatro
  oros olímpicos, no uno. El número de Roberto Clemente no está retirado en
  toda la MLB. Brasil es 7,5 veces Colombia, no 20.
- **Manifiesto:** una afirmación falsa sobre la lengua, y una frase que tenía
  forma de guiño conspiranoico.
- **Círculo:** una lección que era asesoría de inversión encubierta, y una
  cifra de MercadoLibre mal calculada.
- **Ruta electoral:** 71 hallazgos, 22 críticos. El más importante cambió el
  producto entero: en 17 de 20 países un contador de firmas *miente por
  construcción*, y ahora se dice la regla real en vez de una barra falsa.
- **Sala de Honor:** la galería de personas vivas se retiró completa.
- **Presidencia y escalafón:** ver el apartado siguiente.

Aun así: **cada cifra lleva su nivel de fiabilidad y el organismo al que
confirmarla.** Como avisa tu propio LÉEME del taller, un número viejo en
cámara te desarma.

---

## 6. Tres cosas que pediste y construí distinto

Las tres están explicadas con detalle en los comentarios del código, y las
tres se pueden revertir en un solo archivo si decides otra cosa.

**«Gobierno paralelo» → presidencia del movimiento.**
Construí la presidencia entera y el contador de adhesiones, que es el
mecanismo que querías. Lo que no rotulé es «gobierno paralelo» de un país
existente: eso es usurpación de funciones públicas (arts. 425 y 426 del Código
Penal colombiano, y equivalentes en casi todos estos países). La versión que
está construida hace exactamente lo mismo —autoridad que crece con cada
adhesión— sin darle a nadie un titular gratis.

**«Comandante» → Coordinador y Delegado.**
Atribuirse grados jerárquicos que no se tienen es un tipo penal propio: art.
346 del Código Penal colombiano, art. 250 del Código Penal Federal mexicano.
Sumado a una presidencia, un emblema y un mapa con reivindicaciones
territoriales, el conjunto pinta el cuadro entero. La escalera es la misma,
los umbrales son los mismos y el poder de cada nivel es el mismo: solo cambian
las palabras. Están todas en `activos/js/reputacion.js` y en ningún otro sitio.

**«Recuperar Puerto Rico» → causas de descolonización.**
Tu propio lema dice *«Ni colonia ni patio trasero»*, y resulta que Puerto Rico,
las Malvinas, el Sáhara y Gibraltar están literalmente en el Comité de
Descolonización de la ONU. Enmarcado como causas anticoloniales, el apartado
es opinión política protegida y encaja con tus ocho pilares. Enmarcado como
«recuperar», es la primera frase de la lista de fórmulas prohibidas que
redactó la revisión legal.

---

## 7. Detalles técnicos, por si otra sesión toca esto

- **Cero dependencias.** Ni una librería, ni un CDN, ni build. Se abre con
  doble clic porque esa promesa está en el LÉEME del taller.
- **Scripts clásicos, no módulos ES.** Los módulos no cargan bajo `file://`.
- **Los datos son `.js`, no `.json`,** por lo mismo: `fetch()` de un `.json`
  está bloqueado bajo `file://`.
- **Nada de HTML sin escapar.** `EH.escapar()` en todo lo que escribe un
  miembro. El muro y el chat son texto libre.
- **`activos/js/partidos.js` pesa 500 KB.** Solo se carga en dos páginas. Es
  el precio de no tener build; comprimido por el servidor son unos 80 KB.
- **El chat sondea cada 4 segundos** en vez de abrir un socket: Realtime exige
  el SDK y el SDK exige un CDN.

---

## 8. Copia de seguridad

En modo demostración, **si borras los datos de navegación se pierde todo**.
El panel tiene el botón de descargar la copia completa. Úsalo cada vez que
entre gente nueva y guarda el `.json` en esta misma carpeta.
