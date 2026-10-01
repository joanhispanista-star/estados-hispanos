/* =========================================================================
   CONFIGURACIÓN DEL MOVIMIENTO
   =========================================================================
   Este es el ÚNICO archivo que Joan tiene que editar para poner la plataforma
   en marcha. Todo lo demás lee de aquí.

   POR QUÉ ESTÁ TODO VACÍO DE ENTRADA
   Porque la regla de la casa es que la interfaz no promete lo que el código no
   cumple. Con las redes vacías, los botones salen apagados y dicen "sin abrir"
   en vez de llevar a un enlace roto. Con Supabase vacío, la plataforma anuncia
   en pantalla que está en modo demostración. Nada finge funcionar.

   POR QUÉ NO HAY NINGÚN SECRETO AQUÍ
   Este archivo se descarga al navegador de cualquiera. La clave anónima de
   Supabase va aquí por diseño (es pública y el RLS es lo que protege los
   datos). La clave de servicio NUNCA: esa vive solo en el servidor.
   ========================================================================= */

window.EH = window.EH || {};

EH.CONFIG = {

  /* --- identidad ------------------------------------------------------- */
  movimiento : 'Los Estados Hispanos',
  lema       : 'Lo que nos une ya existe',
  dominio    : '',                     // ej: 'losestadoshispanos.org'
  correo     : '',                     // correo público de contacto

  /* --- el fundador -----------------------------------------------------
     Se muestra en la portada. Escribe aquí lo que sea CIERTO: un movimiento
     que exagera el currículo de su fundador se cae con una sola búsqueda. */
  fundador : {
    nombre  : 'Joan',
    titulo  : 'Fundador',
    desde   : '2026',
    ciudad  : 'Bogotá, Colombia',
    frase   : 'No somos pocos: estamos separados.',
    retrato : '',                      // ruta a una foto, ej: 'activos/img/fundador.jpg'
    semblanza : ''                     // 2 o 3 frases reales. Vacío = no se muestra.
  },

  /* --- Supabase --------------------------------------------------------
     Vacío = modo demostración: todo se guarda en ESTE navegador y la
     plataforma lo dice en pantalla. Rellena las dos líneas y la misma
     plataforma pasa a funcionar en la nube, sin tocar nada más. */
  supabase : {
    url  : '',
    anon : ''
  },

  /* --- redes sociales --------------------------------------------------
     Deja vacía la que no exista todavía: sale apagada y rotulada "sin abrir",
     que es la verdad, en lugar de un enlace que no lleva a ninguna parte. */
  redes : {
    tiktok    : '',
    instagram : '',
    facebook  : '',
    youtube   : '',
    x         : '',
    whatsapp  : '',      // enlace de canal o de comunidad
    telegram  : '',
    linkedin  : '',
    twitch    : '',
    kick      : ''
  },

  /* --- publicaciones destacadas del movimiento -------------------------
     Lo que se enseña en el muro del Frente Digital. Cada entrada:
       { red: 'tiktok', url: 'URL DE INCRUSTAR, no la del navegador',
         titulo: 'de qué va, en una línea' }

     OJO con la url: tiene que ser la de incrustar, que cada red publica en
     su botón «insertar» y NO es la que sale en la barra del navegador.

     Y una cosa que no es un detalle: estas publicaciones se cargan SOLO
     cuando alguien pulsa. Un reproductor que arranca al abrir la página le
     cuenta a esa empresa quién visita un sitio de afiliación política,
     aunque el visitante no pulse nada ni tenga cuenta. */
  publicaciones : [],

  /* --- aportes económicos ----------------------------------------------
     REGLA INNEGOCIABLE: la plataforma no custodia dinero de nadie, jamás.
     Aquí solo va el enlace a una pasarela licenciada (Bold, Wompi, Mercado
     Pago, Stripe...). Mientras esté vacío, la pantalla de aportes lo dice y
     no simula un cobro. */
  pagos : {
    proveedor : '',                    // nombre visible, ej: 'Bold'
    enlace    : '',                    // enlace de pago del proveedor
    nit       : '',                    // NIT o identificación del receptor
    razon     : ''                     // razón social que recibe
  },

  /* --- llaves de almacenamiento local ----------------------------------
     DISTINTA de la del taller (estados_hispanos_v1). Si compartieran clave,
     entrar a la plataforma borraría los carteles y el ideario de Joan. */
  clave       : 'estados_hispanos_plataforma_v1',
  claveSesion : 'estados_hispanos_sesion_v1',

  /* --- la versión del texto de consentimiento --------------------------
     Cuando cambie el aviso de privacidad hay que subir este número. Queda
     registrado con cada inscripción: es la prueba de QUÉ aceptó cada persona.
     Sin esto, una reclamación de habeas data no se puede contestar. */
  versionConsentimiento : '2026-08-30'
};
