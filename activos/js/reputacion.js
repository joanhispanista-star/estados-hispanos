/* =========================================================================
   APORTES A LA HISPANIDAD — honor, escalafón y cargos
   =========================================================================
   TRES REGLAS QUE NO SE TOCAN, y el porqué de cada una:

   1. EL HONOR NO SE CONVIERTE EN DINERO. Nunca, en ninguna dirección. En el
      momento en que traer gente produce un pago, esto deja de ser un
      movimiento político y pasa a ser captación masiva de dinero: delito en
      Colombia (art. 316 del Código Penal, Decreto 4334 de 2008). Esa línea se
      cruza sin darse cuenta y no hay vuelta atrás.

   2. EL DINERO NO DA HONOR. Ni proporcional ni fijo: CERO. La primera versión
      de este archivo daba 15 puntos fijos por aportar, razonando que al ser
      fijos nadie podía "comprar" el grado. La revisión jurídica lo tumbó y
      tenía razón: mientras aportar sume aunque sea un punto, el dinero compra
      estatus. Por eso el tipo "aportar_economico" ya no existe. Quien aporta
      aparece en el informe de transparencia, que es donde corresponde, no en
      el escalafón.

   3. PROFUNDIDAD UNO. Se gana honor por la gente que uno invita
      DIRECTAMENTE, y jamás por la gente que inviten ellos. La cadena de
      niveles —lo que en un multinivel se llama la red de abajo— es el rasgo
      que define jurídicamente una pirámide, y aquí no existe: ni en la base
      de datos, ni siquiera para enseñar una estadística bonita en el panel.

   4. EL HONOR POR INVITAR TIENE TECHO. Como mucho, una cuarta parte del honor
      total de una persona puede venir de invitaciones, y cada invitación vale
      menos que la anterior. Sin ese techo, la forma óptima de ascender es
      inventar correos; con él, la forma óptima es hacer cosas.

   5. SE PIERDE. Si el invitado se va o resulta ser una cuenta falsa, el honor
      correspondiente se revierte. Un sistema que solo suma se infla y se
      defrauda.

   ─────────────────────────────────────────────────────────────────────────
   POR QUÉ HAY DOS ESCALERAS Y NO UNA
   El GRADO se gana solo, con aportes medidos, y nadie lo puede regalar ni
   quitar por simpatía. El CARGO se nombra, porque responder por una ciudad
   entera no es cuestión de puntos sino de confianza.

   Mezclarlas sería el error clásico: prometer que a los 2.000 puntos uno
   "es" comandante de ciudad y que luego eso dependa de que alguien lo
   nombre. Así se pierde a la gente buena, que es la que cuenta los puntos.
   Aquí se dice cuál es cuál, en la propia pantalla.
   ========================================================================= */

window.EH = window.EH || {};

EH.reputacion = (function () {
  'use strict';

  /* Cada tipo de aporte, lo que vale y cuántas veces al día cuenta.

     POR QUÉ EL TIPO SE LLAMA "adherir" Y NO "reconocer"
     "Reconocimiento" es el término técnico del derecho internacional para el
     reconocimiento de gobiernos y de Estados: es exactamente el marco de una
     presidencia paralela, y el que un fiscal buscaría. "Adhesión" es lo que
     hace un socio con una asociación y describe mejor lo que de verdad pasa.
     Mismo gesto, misma fuerza, sin el encuadre que no interesa. */
  var TIPOS = {
    inscripcion       : { honor: 10, nombre: 'Se unió al movimiento',        tope: 1 },
    adherir           : { honor: 15, nombre: 'Se adhirió al movimiento',     tope: 1 },
    perfil            : { honor: 10, nombre: 'Completó su ficha',            tope: 1 },
    reclutar          : { honor: 25, nombre: 'Trajo a un hispano',           tope: 8 },
    publicar          : { honor: 5,  nombre: 'Publicó en el muro',           tope: 6 },
    difundir          : { honor: 8,  nombre: 'Difundió el movimiento',       tope: 5 },
    mision            : { honor: 12, nombre: 'Cumplió una misión',           tope: 6 },
    firmas            : { honor: 35, nombre: 'Recogió apoyos para el partido', tope: 4 },
    organizar         : { honor: 60, nombre: 'Organizó un acto',             tope: 2 },
    nodo              : { honor: 80, nombre: 'Levantó un núcleo local',      tope: 1 },
    mentoria          : { honor: 40, nombre: 'Dio mentoría en el Círculo',   tope: 3 },
    traducir          : { honor: 30, nombre: 'Tradujo o documentó',          tope: 4 },
    testimonio        : { honor: 20, nombre: 'Aportó un testimonio',         tope: 2 }
  };

  /* ═══════════════════════════════════════════════════════════════════
     LOS NIVELES DE PARTICIPACIÓN
     ═══════════════════════════════════════════════════════════════════
     POR QUÉ NO SE LLAMAN "COMANDANTE" Y POR QUÉ ESTO YA NO ES UN "ESCALAFÓN"

     El fundador pidió una escalera que terminara en comandante. Se escribió
     así, y hubo que cambiarla: atribuirse grados jerárquicos e insignias que
     no se tienen es un tipo penal propio, no una interpretación forzada
     (art. 346 del Código Penal colombiano; art. 250 del Código Penal Federal
     mexicano). Y "escalafón" es la palabra del ordenamiento militar y
     policial, no la de un partido.

     Aislado, quizá nadie miraría. Sumado a una presidencia, un emblema, un
     mapa con reivindicaciones territoriales y una estructura por naciones, el
     conjunto pinta justo el cuadro que un fiscal necesita, y le regala al
     adversario político un titular gratis.

     LO QUE NO CAMBIÓ: la escalera es la misma, los umbrales son los mismos y
     lo que puede hacer cada nivel es lo mismo. Solo cambian las palabras, y
     estas son las que usan los partidos de verdad.

     SI JOAN QUIERE LOS NOMBRES MILITARES DE VUELTA, se cambian aquí y en
     ningún otro sitio: ninguna pantalla lleva un nombre de nivel escrito a
     mano. Pero que sea una decisión suya, tomada sabiendo esto.

     LAS TRES VÍAS, y por qué son tres y no dos:
       automatico   — sube solo al llegar al honor; nadie lo puede frenar.
       verificado   — sube al llegar al honor, PERO alguien del equipo tiene
                      que confirmar el núcleo o el acto. Se marca aparte
                      porque llamarlo automático dejaría a un militante
                      bloqueado sin saber por qué ni a quién reclamar.
       nombramiento — lo decide la dirección. Cumplir los requisitos NO
                      asciende, y la pantalla lo dice con esas palabras.
     ═══════════════════════════════════════════════════════════════════ */
  var GRADOS = [
    {
      n: 1, nombre: 'Inscrito', desde: 0, via: 'automatico',
      que: 'Está dentro. Tiene voz en el muro, en el chat y en su sala nacional.',
      exige: []
    },
    {
      n: 2, nombre: 'Militante', desde: 100, via: 'automatico',
      que: 'Ya no es público: es fuerza. Puede recoger apoyos a nombre del movimiento.',
      exige: ['Completar las misiones del primer día', 'Traer al menos a un hispano']
    },
    {
      n: 3, nombre: 'Portavoz', desde: 350, via: 'automatico',
      que: 'Puede hablar del movimiento en público y abrir la sala de su ciudad. Entra al Círculo de Emprendedores.',
      exige: ['Traer al menos a tres hispanos', 'Publicar en dos redes distintas']
    },
    {
      n: 4, nombre: 'Coordinador de Núcleo', desde: 900, via: 'verificado',
      que: 'Sostiene un núcleo local con gente de verdad. Convoca, organiza y responde por su grupo.',
      exige: ['Traer al menos a cinco hispanos', 'Levantar un núcleo con cinco personas', 'Organizar un acto']
    },
    {
      n: 5, nombre: 'Coordinador de Ciudad', desde: 2000, via: 'verificado',
      que: 'Coordina varios núcleos de una misma ciudad y responde por la recogida de apoyos allí.',
      exige: ['Tres núcleos activos en su ciudad', 'Quince hispanos traídos', 'Cien apoyos recogidos']
    },
    {
      n: 6, nombre: 'Delegado de Nación', desde: 5000, via: 'nombramiento',
      que: 'Responde por un país entero ante el movimiento y ante el partido hermano de su nación.',
      exige: ['Ser Coordinador de Ciudad', 'Ser nombrado por la dirección', 'Uno por nación']
    },
    {
      n: 7, nombre: 'Junta Fundacional', desde: 12000, via: 'nombramiento',
      que: 'Habla en nombre del movimiento entero y define la estrategia junto a la presidencia.',
      exige: ['Ser nombrado por la dirección', 'Refrendo de los Delegados de Nación']
    }
  ];

  /* Los CARGOS son otra cosa: no se ganan con puntos, se asignan. Se listan
     aparte para que nadie los confunda con los niveles de participación.
     Todos son cargos estatutarios de una asociación privada, como los de
     cualquier fundación o federación: ninguno invoca, imita ni sustituye un
     cargo público. */
  var CARGOS = [
    { k: 'presidencia',  n: 'Presidencia del movimiento', d: 'Dirige el movimiento hasta el Primer Congreso.' },
    { k: 'nacion',       n: 'Delegación de Nación',      d: 'Responde por un país. Uno por nación.' },
    { k: 'ciudad',       n: 'Coordinación de Ciudad',    d: 'Coordina los núcleos de una ciudad.' },
    { k: 'juridico',     n: 'Secretaría Jurídica',       d: 'Custodia la figura legal y los datos. Tiene veto sobre lo que se publica.' },
    { k: 'comunicacion', n: 'Secretaría de Comunicación', d: 'Calendario, prensa y tono común.' },
    { k: 'finanzas',     n: 'Secretaría de Finanzas',    d: 'Libro de ingresos y gastos desde el primer peso, con soportes.' },
    { k: 'formacion',    n: 'Escuela de Cuadros',        d: 'Convierte simpatizantes en militantes capaces de dar un debate.' },
    { k: 'exterior',     n: 'Relaciones Hispanas',       d: 'Contacto con los partidos hermanos de las otras naciones.' }
  ];

  return {

    TIPOS: TIPOS,
    GRADOS: GRADOS,
    CARGOS: CARGOS,

    /* Devuelve el honor de un tipo, o null si no existe. Que devuelva null en
       vez de 0 es deliberado: un tipo mal escrito tiene que fallar a gritos,
       no sumar cero en silencio durante meses. */
    valor: function (tipo) { return TIPOS[tipo] ? TIPOS[tipo].honor : null; },
    nombreTipo: function (tipo) { return TIPOS[tipo] ? TIPOS[tipo].nombre : tipo; },
    topeDiario: function (tipo) { return TIPOS[tipo] ? TIPOS[tipo].tope : 0; },

    /* El grado que corresponde a una cantidad de honor, con lo que falta para
       el siguiente. La barra de progreso lee de aquí. */
    grado: function (honor) {
      honor = Number(honor) || 0;
      var actual = GRADOS[0];
      for (var i = 0; i < GRADOS.length; i++) if (honor >= GRADOS[i].desde) actual = GRADOS[i];
      var siguiente = GRADOS.filter(function (g) { return g.desde > honor; })[0] || null;
      var base = actual.desde;
      var techo = siguiente ? siguiente.desde : actual.desde;
      return {
        nivel: actual.n,
        nombre: actual.nombre,
        que: actual.que,
        via: actual.via,
        exige: actual.exige,
        siguiente: siguiente ? siguiente.nombre : null,
        siguienteVia: siguiente ? siguiente.via : null,
        siguienteExige: siguiente ? siguiente.exige : [],
        faltan: siguiente ? siguiente.desde - honor : 0,
        progreso: siguiente ? Math.round(((honor - base) / (techo - base)) * 100) : 100
      };
    },

    /* Alias antiguo: hubo una versión con "rango" y el nombre puede haber
       quedado en alguna pantalla. Se mantiene para no romper nada. */
    rango: function (honor) { return EH.reputacion.grado(honor); },

    /* La parte del honor que puede venir de invitar. Es el techo de la regla 4
       y está aquí como constante para que se pueda auditar de un vistazo. */
    TECHO_INVITACIONES: 0.25,

    /* Recalcula honor y grado de TODOS los miembros a partir del libro mayor.
       Es la única forma de sumar honor en modo local: si el total guardado y
       el libro se separan alguna vez, gana el libro.

       AQUÍ SE APLICAN LAS DOS DEFENSAS CONTRA LA PIRÁMIDE:
       · Rendimientos decrecientes: la invitación número n vale 0,85 elevado a
         n de lo que valía la primera, con suelo de 5 puntos. Traer a diez
         personas rinde bastante menos que diez veces traer a una.
       · Techo del 25 %: si el honor de invitar supera un tercio del honor
         ganado haciendo otras cosas, se recorta. Un tercio del resto es
         justamente el 25 % del total. Así nadie puede llegar a comandante
         solo trayendo gente: hay que haber hecho algo además.

       Ojo: esto se recalcula entero cada vez en vez de ir sumando. Con
       cientos de miles de aportes habría que pasarlo a la base de datos, pero
       con un movimiento que arranca es correcto y, sobre todo, es auditable:
       cualquiera puede recomputar el ranking desde el libro mayor. */
    recalcular: function (d) {
      var otros = {}, invit = {};

      d.aportes.forEach(function (a) {
        var h = Number(a.honor) || 0;
        if (a.tipo === 'reclutar') {
          invit[a.miembro_id] = invit[a.miembro_id] || [];
          invit[a.miembro_id].push(h);
        } else {
          otros[a.miembro_id] = (otros[a.miembro_id] || 0) + h;
        }
      });

      d.miembros.forEach(function (m) {
        var base = otros[m.id] || 0;
        var lista = invit[m.id] || [];

        var porInvitar = 0;
        lista.forEach(function (h, i) {
          porInvitar += Math.max(5, Math.round(h * Math.pow(0.85, i)));
        });

        var techo = Math.floor(base / 3);
        m.honor_invitando = Math.min(porInvitar, techo);
        m.honor_haciendo = base;
        m.honor = base + m.honor_invitando;
        m.rango = EH.reputacion.grado(m.honor).nivel;
        // Se guarda cuánto honor se recortó: la pantalla se lo dice al
        // miembro en vez de dejarle creer que el sistema le falla la cuenta.
        m.honor_recortado = Math.max(0, porInvitar - m.honor_invitando);
      });
      return d;
    },

    hoyLleva: function (aportes, tipo) {
      var hoy = new Date().toISOString().slice(0, 10);
      return aportes.filter(function (a) {
        return a.tipo === tipo && String(a.creado_en).slice(0, 10) === hoy;
      }).length;
    },

    insignia: function (honor) {
      var g = EH.reputacion.grado(honor);
      return '<span class="eh-rango eh-rango--' + Math.min(g.nivel, 6) + '">' + g.nombre + '</span>';
    }
  };
})();
