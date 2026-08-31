-- =====================================================================
--  LOS ESTADOS HISPANOS · FASE 1 — Núcleo de la plataforma
--  Miembros, consentimientos, honor, muro, chat, donaciones y CRM.
-- =====================================================================
--  CÓMO LEER ESTE ARCHIVO
--  Los comentarios explican el PORQUÉ de cada decisión de seguridad.
--  El "qué" ya lo dice el SQL.
--
--  ES IDEMPOTENTE A PROPÓSITO
--  La base real y el repositorio se desincronizan siempre, en todos los
--  proyectos. Este archivo se puede aplicar dos, tres o diez veces sin
--  romper nada: las tablas usan "if not exists", las políticas se borran
--  antes de crearse, las vistas se recrean enteras y las semillas usan
--  "on conflict do update".
--
--  LAS TRES REGLAS DE ESTA BASE DE DATOS
--  1. El honor se gana, no se escribe. El cliente NUNCA inserta en
--     "aportes": ni con política, ni con permiso de tabla. Doble cerrojo.
--  2. El dinero no compra grado, y la plataforma no custodia un peso.
--     "donaciones" es un LIBRO DE REGISTRO, no una billetera.
--  3. El consentimiento es prueba legal (Ley 1581 de 2012): se inserta,
--     jamás se corrige encima. Un trigger lo impide de verdad.
-- =====================================================================

create extension if not exists pgcrypto;


-- =====================================================================
--  0. FUNCIONES DE APOYO
-- =====================================================================
--  POR QUÉ "security definer" EN es_equipo()
--  Esta función se usa DENTRO de las políticas de la tabla "roles". Si
--  fuese "invoker", la política de roles consultaría roles y Postgres
--  entraría en recursión infinita ("infinite recursion detected in policy").
--  Al ser definer se salta el RLS de esa consulta interna y corta el ciclo.
--
--  POR QUÉ search_path = ''
--  Con el search_path abierto, cualquiera que pueda crear objetos en un
--  esquema anterior de la ruta puede suplantar una tabla o una función y
--  ejecutar código con los privilegios del dueño. Vaciarlo y calificar
--  todo a mano ("public.x", "auth.uid()") elimina esa clase entera de
--  ataque. Se hace en TODAS las funciones de este archivo, sin excepción.
create or replace function public.es_equipo(p_miembro uuid default null)
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1
      from public.roles r
     where r.miembro_id = coalesce(p_miembro, auth.uid())
       and r.rol in ('fundador', 'equipo')
  );
$$;


-- =====================================================================
--  1. NACIONES — catálogo de las 24 entidades de la Hispanidad
-- =====================================================================
--  POR QUÉ ES UNA TABLA Y NO UNA LISTA EN EL CÓDIGO
--  Porque "miembros.nacion" apunta aquí con clave foránea. Sin catálogo,
--  un cliente puede inscribirse en la nación "asdf" y el ranking por
--  nación deja de cuadrar para siempre.
--
--  LAS 24 SON 20 ESTADOS SOBERANOS + 4 QUE CASI NADIE CUENTA. El campo
--  "estatus" existe para que la interfaz pueda DECIRLO en vez de fingir
--  que Filipinas o Puerto Rico son lo mismo que Uruguay. La honestidad
--  del dato es parte de la marca del movimiento.
create table if not exists public.naciones (
  id        text primary key,
  nombre    text not null,
  estatus   text not null default 'soberano'
            check (estatus in ('soberano', 'territorio', 'disputado', 'herencia', 'diaspora')),
  lat       numeric(8, 4),
  lon       numeric(8, 4),
  orden     smallint not null default 99,
  activa    boolean  not null default true
);

comment on table public.naciones is
  'Catálogo de las 24 entidades de la Hispanidad. Público y de solo lectura para el cliente.';
comment on column public.naciones.estatus is
  'soberano | territorio | disputado | herencia | diaspora. La interfaz debe mostrarlo tal cual: no todas son Estados.';

insert into public.naciones (id, nombre, estatus, lat, lon, orden) values
  ('espana',                 'España',                          'soberano',    40.4600,   -3.7500,  1),
  ('mexico',                 'México',                          'soberano',    23.6300, -102.5500,  2),
  ('guatemala',              'Guatemala',                       'soberano',    15.7800,  -90.2300,  3),
  ('honduras',               'Honduras',                        'soberano',    15.2000,  -86.2400,  4),
  ('el-salvador',            'El Salvador',                     'soberano',    13.7900,  -88.9000,  5),
  ('nicaragua',              'Nicaragua',                       'soberano',    12.8700,  -85.2100,  6),
  ('costa-rica',             'Costa Rica',                      'soberano',     9.7500,  -83.7500,  7),
  ('panama',                 'Panamá',                          'soberano',     8.5400,  -80.7800,  8),
  ('cuba',                   'Cuba',                            'soberano',    21.5200,  -77.7800,  9),
  ('republica-dominicana',   'República Dominicana',            'soberano',    18.7400,  -70.1600, 10),
  ('venezuela',              'Venezuela',                       'soberano',     6.4200,  -66.5900, 11),
  ('colombia',               'Colombia',                        'soberano',     4.5700,  -74.3000, 12),
  ('ecuador',                'Ecuador',                         'soberano',    -1.8300,  -78.1800, 13),
  ('peru',                   'Perú',                            'soberano',    -9.1900,  -75.0200, 14),
  ('bolivia',                'Bolivia',                         'soberano',   -16.2900,  -63.5900, 15),
  ('chile',                  'Chile',                           'soberano',   -35.6800,  -71.5400, 16),
  ('argentina',              'Argentina',                       'soberano',   -38.4200,  -63.6200, 17),
  ('paraguay',               'Paraguay',                        'soberano',   -23.4400,  -58.4400, 18),
  ('uruguay',                'Uruguay',                         'soberano',   -32.5200,  -55.7700, 19),
  ('guinea-ecuatorial',      'Guinea Ecuatorial',               'soberano',     1.6500,   10.2700, 20),
  ('puerto-rico',            'Puerto Rico',                     'territorio',  18.2200,  -66.5900, 21),
  ('sahara-occidental',      'Sáhara Occidental',               'disputado',   24.2200,  -12.8900, 22),
  ('filipinas',              'Filipinas',                       'herencia',    12.8800,  121.7700, 23),
  ('estados-unidos-hispano', 'La Hispanidad en Estados Unidos', 'diaspora',    33.8000, -107.5000, 24)
on conflict (id) do update
  set nombre  = excluded.nombre,
      estatus = excluded.estatus,
      lat     = excluded.lat,
      lon     = excluded.lon,
      orden   = excluded.orden;


-- =====================================================================
--  2. RANGOS — el escalafón que se gana con honor
-- =====================================================================
--  POR QUÉ EN TABLA Y NO EN UN "case" DENTRO DE UNA FUNCIÓN
--  Porque la pantalla tiene que poder mostrar la escalera completa y
--  "cuánto te falta para el siguiente". Con la escalera en código, la
--  interfaz acaba repitiéndola a mano y las dos versiones se separan.
create table if not exists public.rangos (
  nivel     smallint primary key,
  nombre    text not null unique,
  honor_min integer not null,
  que_da    text
);

insert into public.rangos (nivel, nombre, honor_min, que_da) values
  (1, 'Ciudadano', 0,    'Tiene voz en el muro, en el chat y en la sala de su nación.'),
  (2, 'Heraldo',   100,  'Puede difundir a nombre del movimiento y abrir hilos en el muro.'),
  (3, 'Cónsul',    350,  'Puede hablar en público del movimiento y entra al Círculo.'),
  (4, 'Procónsul', 900,  'Sostiene un núcleo local: convoca, organiza y responde por su grupo.'),
  (5, 'Senador',   2000, 'Coordina varios núcleos de una misma ciudad.'),
  (6, 'Legado',    5000, 'Responde por una nación entera ante el movimiento.')
on conflict (nivel) do update
  set nombre    = excluded.nombre,
      honor_min = excluded.honor_min,
      que_da    = excluded.que_da;

create or replace function public.rango_para_honor(p_honor integer)
returns smallint
language sql
stable
set search_path = ''
as $$
  select coalesce(max(r.nivel), 1)::smallint
    from public.rangos r
   where r.honor_min <= greatest(coalesce(p_honor, 0), 0);
$$;

create or replace function public.nombre_de_rango(p_nivel smallint)
returns text
language sql
stable
set search_path = ''
as $$
  select r.nombre from public.rangos r where r.nivel = p_nivel;
$$;


-- =====================================================================
--  3. MIEMBROS — el perfil PÚBLICO, y solo lo público
-- =====================================================================
--  POR QUÉ AQUÍ NO HAY CORREO NI TELÉFONO
--  Esta es la decisión de seguridad más importante del archivo. El RLS de
--  Postgres filtra FILAS, no columnas. Si el correo viviera en esta tabla,
--  cualquier política que permita ver los perfiles públicos permitiría
--  también leer el correo de todos: una base de datos de militantes de un
--  movimiento político, servida al primer curioso con la clave anónima.
--  Los datos de contacto viven en "miembros_contacto", con su propio RLS.
--  Ese es el motivo, y por eso no se "simplifica" juntándolas otra vez.
--
--  POR QUÉ honor_total Y rango ESTÁN AQUÍ SI SE CALCULAN
--  Porque el ranking de 600 millones de personas no se puede sumar en cada
--  consulta. Son una caché. El libro mayor manda: si alguna vez no cuadran,
--  gana "aportes" y se arregla llamando a refrescar_honor().
create table if not exists public.miembros (
  id             uuid primary key references auth.users(id) on delete cascade,
  nombre         text not null check (length(trim(nombre)) between 2 and 80),
  alias          text unique check (alias is null or alias ~ '^[a-z0-9_.-]{3,24}$'),
  nacion         text not null references public.naciones(id),
  ciudad         text,
  biografia      text check (biografia is null or length(biografia) <= 1000),
  avatar_url     text,
  oficio         text,
  aporta         text[] not null default '{}',
  honor_total    integer  not null default 0,
  rango          smallint not null default 1 references public.rangos(nivel),
  rango_nombre   text     not null default 'Ciudadano',
  rol            text     not null default 'miembro'
                 check (rol in ('miembro', 'equipo', 'fundador')),
  publico        boolean  not null default true,
  reclutado_por  uuid references public.miembros(id) on delete set null,
  creado_en      timestamptz not null default now(),
  actualizado_en timestamptz not null default now(),
  constraint miembros_no_se_recluta_solo check (reclutado_por is null or reclutado_por <> id)
);

comment on column public.miembros.rol is
  'ESPEJO de solo lectura de la tabla roles. Existe para que la interfaz no tenga que cruzar dos tablas. Un trigger impide que el cliente lo escriba: si fuese editable, cualquiera se nombraría fundador con un PATCH.';
comment on column public.miembros.publico is
  'false = el perfil no aparece en el directorio ni en el ranking. Militar en un movimiento político puede ser peligroso en algunos países: esto no es una preferencia estética.';

create index if not exists idx_miembros_nacion  on public.miembros (nacion);
create index if not exists idx_miembros_ranking on public.miembros (honor_total desc) where publico;
create index if not exists idx_miembros_reclutador on public.miembros (reclutado_por);


-- ---------------------------------------------------------------------
--  3.b DATOS DE CONTACTO — separados a propósito (ver arriba)
-- ---------------------------------------------------------------------
create table if not exists public.miembros_contacto (
  miembro_id uuid primary key references public.miembros(id) on delete cascade,
  correo     text,
  telefono   text,
  creado_en  timestamptz not null default now()
);

-- Índice único insensible a mayúsculas: "Joan@x.com" y "joan@x.com" son la
-- misma persona, y un movimiento que duplica militantes se cuenta mal a sí
-- mismo. Se hace con expresión y no con citext para no depender de una
-- extensión que en Supabase vive en otro esquema.
create unique index if not exists idx_contacto_correo_unico
  on public.miembros_contacto (lower(correo)) where correo is not null;


-- =====================================================================
--  4. ROLES — quién es fundador y quién es equipo
-- =====================================================================
--  POR QUÉ EN TABLA APARTE Y SIN NINGUNA POLÍTICA DE ESCRITURA
--  La escalada de privilegios más común en Supabase es un rol guardado en
--  la fila del propio usuario con una política "update using (id =
--  auth.uid())". El usuario se asciende solo con una petición HTTP. Aquí
--  el rol vive en su propia tabla, el cliente no tiene ni permiso de tabla
--  ni política de insert/update/delete, y solo el service_role (o Joan
--  desde el panel de Supabase) puede nombrar a alguien.
create table if not exists public.roles (
  miembro_id   uuid primary key references public.miembros(id) on delete cascade,
  rol          text not null check (rol in ('fundador', 'equipo')),
  otorgado_por uuid references public.miembros(id) on delete set null,
  creado_en    timestamptz not null default now()
);


-- =====================================================================
--  5. CONSENTIMIENTOS — la prueba legal (Ley 1581 de 2012)
-- =====================================================================
--  POR QUÉ NUNCA SE ACTUALIZA UNA FILA
--  Ante una reclamación de habeas data hay que poder responder QUÉ texto
--  aceptó esa persona y CUÁNDO. Si "otorgado" se pudiera cambiar de true a
--  false encima de la misma fila, la prueba desaparecería justo cuando hace
--  falta. Revocar una autorización es INSERTAR una fila nueva con
--  otorgado = false. El trigger de más abajo lo obliga.
--
--  POR QUÉ ip_hash Y NO ip
--  La IP es dato personal. Se guarda su huella, calculada en el servidor
--  con un pepper que vive solo como variable de entorno de la Edge
--  Function. Sirve para demostrar que hubo un acto de aceptación desde un
--  origen, sin construir un registro de por dónde se conecta cada militante.
create table if not exists public.consentimientos (
  id            uuid primary key default gen_random_uuid(),
  miembro_id    uuid not null references public.miembros(id) on delete cascade,
  tipo          text not null
                check (tipo in ('tratamiento_basico', 'afiliacion_politica', 'comunicaciones')),
  otorgado      boolean not null,
  texto_version text not null,
  ip_hash       text,
  creado_en     timestamptz not null default now()
);

create index if not exists idx_consentimientos_miembro
  on public.consentimientos (miembro_id, tipo, creado_en desc);

--  El dato de afiliación política es DATO SENSIBLE en la Ley 1581: exige
--  autorización expresa y separada, y su tratamiento no puede ser condición
--  para nada más. Por eso es un tipo propio y no una casilla escondida en
--  el consentimiento básico.
comment on column public.consentimientos.tipo is
  'afiliacion_politica es dato sensible (art. 5 Ley 1581): autorización expresa, separada y nunca obligatoria.';

create or replace function public.trg_consentimiento_inmutable()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  -- La única salida es el borrado por derecho de supresión, que pasa por
  -- public.borrar_mi_cuenta() y enciende esta bandera a conciencia. Sin
  -- la bandera, ni un update ni un delete tocan esta tabla.
  if coalesce(current_setting('eh.borrado_legal', true), 'off') <> 'on' then
    raise exception
      'Los consentimientos no se modifican ni se borran: para revocar, inserte una fila nueva con otorgado = false.';
  end if;
  return coalesce(new, old);
end;
$$;

drop trigger if exists consentimiento_inmutable on public.consentimientos;
create trigger consentimiento_inmutable
  before update or delete on public.consentimientos
  for each row execute function public.trg_consentimiento_inmutable();


-- =====================================================================
--  6. APORTES — el libro mayor del honor. INMUTABLE.
-- =====================================================================
--  Catálogo primero: el honor de cada tipo lo decide la base, no el cliente.
--  Si el cliente pudiera mandar los puntos, "publicar" valdría 5 o 50.000
--  según lo que escriba en el JSON, y el escalafón no significaría nada.
create table if not exists public.tipos_aporte (
  codigo               text primary key,
  nombre               text not null,
  honor                integer not null,
  tope_diario_veces    smallint not null default 1,
  tope_honor_total     integer,
  requiere_equipo      boolean not null default false,
  descripcion          text
);

--  LOS DOS TOPES, Y POR QUÉ HAY DOS
--  tope_diario_veces frena la granja de cuentas: sin él, la forma óptima de
--  ascender es inventar correos toda la noche.
--  tope_honor_total frena algo distinto y más grave: que el dinero compre
--  grado. "aportar_economico" tiene tope de por vida bajísimo a propósito.
--  Quien aporta diez millones y quien aporta mil pesos suben lo mismo, y
--  ambos llegan al techo enseguida. Si el grado se comprara, el escalafón
--  sería una subasta. Además, honor y dinero jamás se cruzan en la otra
--  dirección: el honor no se convierte en pagos, porque eso convertiría un
--  movimiento político en captación masiva de dinero (art. 316 del Código
--  Penal colombiano, Decreto 4334 de 2008).
insert into public.tipos_aporte (codigo, nombre, honor, tope_diario_veces, tope_honor_total, requiere_equipo, descripcion) values
  ('reclutar',          'Trajo a un hispano',          25,  8, null,  false, 'Solo cuenta si la persona traída existe y quedó registrada como reclutada por quien reclama el honor.'),
  ('publicar',          'Publicó en el muro',           5,  6, 2000,  false, 'La publicación referenciada tiene que ser suya.'),
  ('difundir',          'Difundió el movimiento',       8,  5, 2000,  false, 'Difusión declarada por el propio miembro; el tope diario es lo único que la contiene.'),
  ('aportar_economico', 'Aportó a la causa',           15,  3,  300,  false, 'Solo con una donación en estado confirmada. Tope de por vida bajo: el dinero no compra grado.'),
  ('organizar',         'Organizó un acto',            60,  2, null,  true,  'Lo verifica el equipo: un acto o no ocurrió o hay fotos y asistentes.'),
  ('mentoria',          'Dio mentoría en el Círculo',  40,  3, null,  true,  'Lo confirma el equipo con quien recibió la mentoría.'),
  ('traducir',          'Tradujo o documentó',         30,  4, 3000,  false, 'La referencia apunta al trabajo entregado.')
on conflict (codigo) do update
  set nombre            = excluded.nombre,
      honor             = excluded.honor,
      tope_diario_veces = excluded.tope_diario_veces,
      tope_honor_total  = excluded.tope_honor_total,
      requiere_equipo   = excluded.requiere_equipo,
      descripcion       = excluded.descripcion;

--  NOTA PARA QUIEN AMPLÍE ESTO
--  activos/js/reputacion.js maneja además inscripcion, reconocer, perfil,
--  mision, firmas, nodo y testimonio. NO se siembran aquí porque el alcance
--  acordado de esta migración son los siete de arriba, y registrar_aporte
--  falla a gritos con un tipo desconocido en vez de sumar cero en silencio.
--  Para añadirlos basta un insert en tipos_aporte con su honor y sus topes.

create table if not exists public.aportes (
  id         uuid primary key default gen_random_uuid(),
  miembro_id uuid not null references public.miembros(id) on delete cascade,
  tipo       text not null references public.tipos_aporte(codigo),
  honor      integer not null,
  referencia text,
  nota       text,
  creado_en  timestamptz not null default now()
);

comment on table public.aportes is
  'Libro mayor INMUTABLE del honor. El cliente no tiene política de insert, update ni delete, y tampoco permiso de tabla. La única puerta es public.registrar_aporte().';

create index if not exists idx_aportes_miembro on public.aportes (miembro_id, creado_en desc);
create index if not exists idx_aportes_tipo_dia on public.aportes (miembro_id, tipo, creado_en desc);

--  Doble cerrojo también contra el propio backend: aunque un día alguien se
--  equivoque y conceda permisos, un aporte ya escrito no se puede editar ni
--  borrar sin encender la bandera de borrado legal. Un libro mayor que se
--  puede reescribir no es un libro mayor.
create or replace function public.trg_aporte_inmutable()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  if coalesce(current_setting('eh.borrado_legal', true), 'off') <> 'on' then
    raise exception 'Los aportes no se modifican ni se borran: el honor es un registro histórico.';
  end if;
  return coalesce(new, old);
end;
$$;

drop trigger if exists aporte_inmutable on public.aportes;
create trigger aporte_inmutable
  before update or delete on public.aportes
  for each row execute function public.trg_aporte_inmutable();


-- ---------------------------------------------------------------------
--  6.b Recálculo del honor y del rango
-- ---------------------------------------------------------------------
--  POR QUÉ SE RECALCULA DESDE CERO Y NO SE SUMA AL TOTAL
--  Sumar es rápido y miente en cuanto se pierde un mensaje o se repite un
--  trigger. Recalcular desde el libro mayor no puede desviarse nunca.
create or replace function public.refrescar_honor(p_miembro uuid)
returns void
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_honor integer;
  v_nivel smallint;
begin
  select coalesce(sum(a.honor), 0) into v_honor
    from public.aportes a
   where a.miembro_id = p_miembro;

  v_nivel := public.rango_para_honor(v_honor);

  -- La bandera abre el candado del trigger que protege honor y rango. Es
  -- local a la transacción: no queda encendida para nadie más.
  perform set_config('eh.recalculo', 'on', true);

  update public.miembros
     set honor_total    = v_honor,
         rango          = v_nivel,
         rango_nombre   = public.nombre_de_rango(v_nivel),
         actualizado_en = now()
   where id = p_miembro;

  -- Se apaga en cuanto se usa. set_config local dura toda la transacción, y
  -- si quedara encendida, un update del cliente en esa misma transacción
  -- entraría con el blindaje de columnas desactivado.
  perform set_config('eh.recalculo', 'off', true);
end;
$$;

create or replace function public.trg_aporte_refresca_honor()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  perform public.refrescar_honor(new.miembro_id);
  return new;
end;
$$;

drop trigger if exists aporte_refresca_honor on public.aportes;
create trigger aporte_refresca_honor
  after insert on public.aportes
  for each row execute function public.trg_aporte_refresca_honor();


-- ---------------------------------------------------------------------
--  6.c Columnas blindadas de "miembros"
-- ---------------------------------------------------------------------
--  El miembro puede editar su ficha (nombre, ciudad, biografía...). Lo que
--  NO puede es tocar honor, rango, rol ni su reclutador. La política de
--  update no basta: el RLS decide si la fila se puede tocar, no qué
--  columnas. Este trigger devuelve los valores viejos en silencio en vez de
--  fallar, para que la interfaz no tenga que enviar exactamente el
--  subconjunto correcto de campos.
create or replace function public.trg_miembro_campos_blindados()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  if coalesce(current_setting('eh.recalculo', true), 'off') <> 'on' then
    new.honor_total  := old.honor_total;
    new.rango        := old.rango;
    new.rango_nombre := old.rango_nombre;
    new.rol          := old.rol;
    -- El reclutador se fija una vez y no se vuelve a tocar: si fuese
    -- editable, se podría reasignar la autoría de un reclutamiento ya
    -- pagado en honor.
    if old.reclutado_por is not null then
      new.reclutado_por := old.reclutado_por;
    end if;
  end if;
  new.actualizado_en := now();
  return new;
end;
$$;

drop trigger if exists miembro_campos_blindados on public.miembros;
create trigger miembro_campos_blindados
  before update on public.miembros
  for each row execute function public.trg_miembro_campos_blindados();

--  El espejo del rol: roles manda, miembros.rol solo refleja.
create or replace function public.trg_rol_espejo()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_id  uuid := coalesce(new.miembro_id, old.miembro_id);
  v_rol text := case when tg_op = 'DELETE' then 'miembro' else new.rol end;
begin
  -- La comprobación de existencia no es paranoia: al borrar un miembro, la
  -- cascada borra primero su fila de roles y dispara esto. Intentar
  -- actualizar la fila que se está borrando en ese mismo momento haría
  -- fallar el borrado de cuenta por culpa de un espejo que ya no importa.
  if exists (select 1 from public.miembros m where m.id = v_id) then
    perform set_config('eh.recalculo', 'on', true);
    update public.miembros set rol = v_rol where id = v_id;
    perform set_config('eh.recalculo', 'off', true);
  end if;
  return coalesce(new, old);
end;
$$;

drop trigger if exists rol_espejo on public.roles;
create trigger rol_espejo
  after insert or update or delete on public.roles
  for each row execute function public.trg_rol_espejo();


-- =====================================================================
--  7. registrar_aporte() — la ÚNICA puerta para sumar honor
-- =====================================================================
--  POR QUÉ ES security definer Y EL CLIENTE NO ESCRIBE EN "aportes"
--  Porque toda la validación (tipo válido, tope diario, tope de por vida,
--  y que lo que se declara haya ocurrido de verdad) tiene que correr en un
--  sitio donde el cliente no pueda saltársela. Una política de RLS no
--  puede contar cuántos aportes van hoy ni comprobar que la donación está
--  confirmada; una función sí.
--
--  POR QUÉ NO ACEPTA UN MIEMBRO ARBITRARIO
--  Si aceptara p_miembro libre, cualquiera podría regalarse honor en nombre
--  de otro o, peor, quemarle los topes del día a un rival. El miembro es
--  siempre auth.uid(), salvo que quien llama sea del equipo.
--
--  POR QUÉ CADA TIPO SE VERIFICA DISTINTO
--  Un aporte que solo se declara vale lo que valga la palabra del que lo
--  declara. Los que se pueden comprobar contra la base, se comprueban.
create or replace function public.registrar_aporte(
  p_tipo       text,
  p_referencia text default null,
  p_nota       text default null,
  p_miembro    uuid default null
)
returns public.aportes
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_yo        uuid := auth.uid();
  v_miembro   uuid;
  v_equipo    boolean := public.es_equipo();
  v_tipo      public.tipos_aporte;
  v_hoy       integer;
  v_acumulado integer;
  v_fila      public.aportes;
begin
  if v_yo is null and not v_equipo then
    raise exception 'Hay que haber iniciado sesión para registrar un aporte.';
  end if;

  -- Solo el equipo puede registrar en cabeza de otra persona.
  v_miembro := coalesce(p_miembro, v_yo);
  if v_miembro <> coalesce(v_yo, v_miembro) and not v_equipo then
    raise exception 'No se puede registrar honor en nombre de otro miembro.';
  end if;

  if not exists (select 1 from public.miembros m where m.id = v_miembro) then
    raise exception 'El miembro % no existe.', v_miembro;
  end if;

  select * into v_tipo from public.tipos_aporte t where t.codigo = p_tipo;
  if v_tipo.codigo is null then
    -- Falla a gritos. Un tipo mal escrito que sumara cero en silencio
    -- pasaría meses sin que nadie lo note.
    raise exception 'Tipo de aporte desconocido: %', p_tipo;
  end if;

  if v_tipo.requiere_equipo and not v_equipo then
    raise exception 'El aporte "%" lo tiene que verificar el equipo.', v_tipo.nombre;
  end if;

  -- --- verificaciones propias de cada tipo ---------------------------
  if p_tipo = 'reclutar' then
    -- No basta con decir que trajo a alguien: esa persona tiene que existir
    -- y tener a quien reclama como reclutador. Es la defensa contra el
    -- fraude más rentable de todo el sistema.
    if p_referencia is null
       or not exists (
         select 1 from public.miembros m
          where m.id::text = p_referencia
            and m.reclutado_por = v_miembro
       ) then
      raise exception 'El reclutamiento no cuadra: la persona traída no existe o no lo tiene a usted como reclutador.';
    end if;
    if exists (select 1 from public.aportes a
                where a.tipo = 'reclutar' and a.referencia = p_referencia) then
      raise exception 'Ese reclutamiento ya fue registrado.';
    end if;

  elsif p_tipo = 'aportar_economico' then
    -- Honor solo con dinero CONFIRMADO por la pasarela. Si bastara con
    -- anunciar una donación, el honor se regalaría con un botón.
    if p_referencia is null
       or not exists (
         select 1 from public.donaciones d
          where d.id::text = p_referencia
            and d.miembro_id = v_miembro
            and d.estado = 'confirmada'
       ) then
      raise exception 'No hay una donación confirmada con esa referencia a su nombre.';
    end if;
    if exists (select 1 from public.aportes a
                where a.tipo = 'aportar_economico' and a.referencia = p_referencia) then
      raise exception 'Esa donación ya otorgó honor.';
    end if;

  elsif p_tipo = 'publicar' then
    if p_referencia is null
       or not exists (
         select 1 from public.publicaciones p
          where p.id::text = p_referencia and p.miembro_id = v_miembro
       ) then
      raise exception 'La publicación referenciada no existe o no es suya.';
    end if;
    if exists (select 1 from public.aportes a
                where a.tipo = 'publicar' and a.referencia = p_referencia) then
      raise exception 'Esa publicación ya otorgó honor.';
    end if;
  end if;

  -- --- tope diario ----------------------------------------------------
  -- El "día" es el del servidor (UTC), no el de Bogotá: el contador se
  -- reinicia a las 7 de la tarde hora colombiana. Se deja así a propósito
  -- porque el movimiento es de 24 naciones en seis husos horarios y elegir
  -- uno sería arbitrario. La pantalla no debe prometer "a medianoche".
  select count(*) into v_hoy
    from public.aportes a
   where a.miembro_id = v_miembro
     and a.tipo = p_tipo
     and a.creado_en >= date_trunc('day', now());

  if v_hoy >= v_tipo.tope_diario_veces then
    raise exception 'Tope diario alcanzado para "%": % por día.', v_tipo.nombre, v_tipo.tope_diario_veces;
  end if;

  -- --- tope de honor de por vida --------------------------------------
  if v_tipo.tope_honor_total is not null then
    select coalesce(sum(a.honor), 0) into v_acumulado
      from public.aportes a
     where a.miembro_id = v_miembro and a.tipo = p_tipo;

    if v_acumulado + v_tipo.honor > v_tipo.tope_honor_total then
      raise exception 'Tope de honor alcanzado para "%": % de por vida.', v_tipo.nombre, v_tipo.tope_honor_total;
    end if;
  end if;

  insert into public.aportes (miembro_id, tipo, honor, referencia, nota)
  values (v_miembro, p_tipo, v_tipo.honor, p_referencia, nullif(left(coalesce(p_nota, ''), 300), ''))
  returning * into v_fila;

  return v_fila;
end;
$$;


-- =====================================================================
--  8. PUBLICACIONES Y COMENTARIOS — el muro
-- =====================================================================
create table if not exists public.publicaciones (
  id         uuid primary key default gen_random_uuid(),
  miembro_id uuid not null references public.miembros(id) on delete cascade,
  texto      text not null check (length(trim(texto)) between 1 and 2000),
  nacion     text references public.naciones(id),
  oculta     boolean not null default false,
  creado_en  timestamptz not null default now(),
  editado_en timestamptz
);

create index if not exists idx_publicaciones_muro   on public.publicaciones (creado_en desc) where not oculta;
create index if not exists idx_publicaciones_nacion on public.publicaciones (nacion, creado_en desc);

create table if not exists public.comentarios (
  id             uuid primary key default gen_random_uuid(),
  publicacion_id uuid not null references public.publicaciones(id) on delete cascade,
  miembro_id     uuid not null references public.miembros(id) on delete cascade,
  texto          text not null check (length(trim(texto)) between 1 and 1000),
  oculto         boolean not null default false,
  creado_en      timestamptz not null default now()
);

create index if not exists idx_comentarios_publicacion on public.comentarios (publicacion_id, creado_en);

--  POR QUÉ "oculta" Y NO BORRADO DIRECTO PARA LA MODERACIÓN
--  Un movimiento político tiene que poder demostrar qué retiró y por qué.
--  Borrar sin rastro convierte cualquier acusación de censura en su palabra
--  contra la nuestra. El autor sí puede borrar lo suyo: eso es su derecho.


-- =====================================================================
--  9. SALAS Y MENSAJES — el chat interno
-- =====================================================================
create table if not exists public.salas (
  id          uuid primary key default gen_random_uuid(),
  codigo      text not null unique,
  nombre      text not null,
  tipo        text not null check (tipo in ('global', 'nacion', 'circulo')),
  nacion      text references public.naciones(id),
  descripcion text,
  creada_por  uuid references public.miembros(id) on delete set null,
  creado_en   timestamptz not null default now(),
  -- Una sala de nación sin nación sería invisible para su propia gente.
  constraint sala_nacion_coherente check (
    (tipo = 'nacion' and nacion is not null) or (tipo <> 'nacion' and nacion is null)
  )
);

--  El Círculo es cerrado de verdad: quién está dentro se declara aquí.
create table if not exists public.sala_miembros (
  sala_id    uuid not null references public.salas(id) on delete cascade,
  miembro_id uuid not null references public.miembros(id) on delete cascade,
  creado_en  timestamptz not null default now(),
  primary key (sala_id, miembro_id)
);

create table if not exists public.mensajes (
  id         uuid primary key default gen_random_uuid(),
  sala_id    uuid not null references public.salas(id) on delete cascade,
  miembro_id uuid not null references public.miembros(id) on delete cascade,
  texto      text not null check (length(trim(texto)) between 1 and 4000),
  creado_en  timestamptz not null default now()
);

create index if not exists idx_mensajes_sala on public.mensajes (sala_id, creado_en desc);

insert into public.salas (codigo, nombre, tipo, descripcion) values
  ('global', 'Plaza Mayor', 'global', 'La sala de toda la Hispanidad.')
on conflict (codigo) do nothing;

--  Una sala por nación, sembrada desde el catálogo: así no hay naciones sin
--  casa y el nombre no depende de que alguien lo escriba a mano.
insert into public.salas (codigo, nombre, tipo, nacion, descripcion)
select 'nacion-' || n.id, n.nombre, 'nacion', n.id, 'Sala de ' || n.nombre || '.'
  from public.naciones n
on conflict (codigo) do nothing;

--  POR QUÉ ESTAS DOS FUNCIONES SON security definer
--  Las políticas de "mensajes" tienen que preguntar por la sala y por la
--  pertenencia al círculo. Si lo hicieran como invoker, cada consulta a
--  mensajes dispararía el RLS de salas y de sala_miembros, que a su vez
--  consultan... El definer rompe la cadena y además hace la política mucho
--  más barata, que es lo que decide si un chat va fluido o a tirones.
create or replace function public.puede_ver_sala(p_sala uuid)
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1
      from public.salas s
     where s.id = p_sala
       and (
            s.tipo in ('global', 'nacion')
         or exists (select 1 from public.sala_miembros sm
                     where sm.sala_id = s.id and sm.miembro_id = auth.uid())
         or public.es_equipo()
       )
  );
$$;

--  Ver y escribir no son lo mismo. Cualquier miembro ve la sala de Perú;
--  escribir en ella es de los peruanos (y del equipo). Si no se separase,
--  las salas nacionales se llenarían de gente de fuera el primer día.
create or replace function public.puede_escribir_sala(p_sala uuid)
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1
      from public.salas s
     where s.id = p_sala
       and (
            s.tipo = 'global'
         or (s.tipo = 'nacion' and exists (
              select 1 from public.miembros m
               where m.id = auth.uid() and m.nacion = s.nacion))
         or (s.tipo = 'circulo' and exists (
              select 1 from public.sala_miembros sm
               where sm.sala_id = s.id and sm.miembro_id = auth.uid()))
         or public.es_equipo()
       )
  );
$$;


-- =====================================================================
--  10. DONACIONES — registro, jamás custodia
-- =====================================================================
--  LA REGLA QUE NO SE NEGOCIA
--  Aquí no hay saldo, ni recarga, ni retiro, ni "billetera". Custodiar
--  dinero de terceros en Colombia exige licencia SEDPE y vigilancia de la
--  Superfinanciera. Esta tabla anota que una pasarela licenciada cobró algo
--  y guarda SU referencia. El dinero nunca toca la plataforma.
--
--  POR QUÉ NO HAY NI UN CAMPO DE TARJETA
--  Porque no debe existir la tentación de "guardar los últimos cuatro". Sin
--  columna donde meterlos, no hay incidente PCI posible. El check de abajo
--  es cinturón sobre tirantes: rechaza una referencia que parezca un número
--  de tarjeta, por si un día alguien copia el campo equivocado.
create table if not exists public.donaciones (
  id                 uuid primary key default gen_random_uuid(),
  miembro_id         uuid references public.miembros(id) on delete set null,
  monto              numeric(14, 2) not null check (monto > 0),
  moneda             char(3) not null default 'COP' check (moneda ~ '^[A-Z]{3}$'),
  proveedor          text,
  referencia_externa text unique,
  estado             text not null default 'anunciada'
                     check (estado in ('anunciada', 'confirmada', 'fallida', 'reembolsada')),
  nota               text,
  creado_en          timestamptz not null default now(),
  confirmado_en      timestamptz,
  constraint referencia_no_parece_tarjeta
    check (referencia_externa is null or referencia_externa !~ '^[0-9]{13,19}$')
);

create index if not exists idx_donaciones_miembro on public.donaciones (miembro_id, creado_en desc);

--  El cliente puede ANUNCIAR que va a aportar (eso es lo que dispara el
--  enlace de la pasarela). Confirmar es otra cosa: solo el webhook, con el
--  service_role, puede pasar una donación a "confirmada". Si el cliente
--  pudiera, se regalaría honor y ensuciaría la contabilidad del movimiento.
create or replace function public.trg_donacion_estado()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  if auth.uid() is not null and not public.es_equipo() then
    if tg_op = 'INSERT' then
      new.estado := 'anunciada';
      new.confirmado_en := null;
    else
      raise exception 'El estado de una donación solo lo cambia la pasarela.';
    end if;
  end if;
  if new.estado = 'confirmada' and new.confirmado_en is null then
    new.confirmado_en := now();
  end if;
  return new;
end;
$$;

drop trigger if exists donacion_estado on public.donaciones;
create trigger donacion_estado
  before insert or update on public.donaciones
  for each row execute function public.trg_donacion_estado();


-- =====================================================================
--  11. CRM — solo el fundador y su equipo
-- =====================================================================
--  Lo que se escribe aquí es opinión sobre personas reales, y el titular
--  tiene derecho a conocer sus datos. Se aísla en tablas propias para que
--  ninguna vista pública lo arrastre por accidente en un "select *".
create table if not exists public.notas_crm (
  id         uuid primary key default gen_random_uuid(),
  miembro_id uuid not null references public.miembros(id) on delete cascade,
  autor_id   uuid references public.miembros(id) on delete set null,
  texto      text not null,
  etiqueta   text,
  creado_en  timestamptz not null default now()
);

create index if not exists idx_notas_crm_miembro on public.notas_crm (miembro_id, creado_en desc);

create table if not exists public.etiquetas_miembro (
  miembro_id uuid not null references public.miembros(id) on delete cascade,
  etiqueta   text not null,
  autor_id   uuid references public.miembros(id) on delete set null,
  creado_en  timestamptz not null default now(),
  primary key (miembro_id, etiqueta)
);


-- =====================================================================
--  12. DERECHO DE SUPRESIÓN (Ley 1581) — borrar de verdad
-- =====================================================================
--  Sin esto, la inscripción no cumple la ley. Enciende la bandera que abre
--  los candados de los libros inmutables, borra en cascada desde miembros y
--  la apaga. Es la ÚNICA vía legítima de borrado, y está escrita en un solo
--  sitio para que se pueda auditar de un vistazo.
create or replace function public.borrar_mi_cuenta()
returns void
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_yo uuid := auth.uid();
begin
  if v_yo is null then
    raise exception 'No hay sesión.';
  end if;
  perform set_config('eh.borrado_legal', 'on', true);
  delete from public.miembros where id = v_yo;
  perform set_config('eh.borrado_legal', 'off', true);
end;
$$;


-- =====================================================================
--  13. RLS — se enciende en TODAS las tablas, sin excepción
-- =====================================================================
--  Una tabla sin RLS en Supabase es una tabla pública: la clave anónima
--  está en el bundle de cualquier navegador. Encenderlo es el punto de
--  partida, no una medida extra.
alter table public.naciones          enable row level security;
alter table public.rangos            enable row level security;
alter table public.miembros          enable row level security;
alter table public.miembros_contacto enable row level security;
alter table public.roles             enable row level security;
alter table public.consentimientos   enable row level security;
alter table public.tipos_aporte      enable row level security;
alter table public.aportes           enable row level security;
alter table public.publicaciones     enable row level security;
alter table public.comentarios       enable row level security;
alter table public.salas             enable row level security;
alter table public.sala_miembros     enable row level security;
alter table public.mensajes          enable row level security;
alter table public.donaciones        enable row level security;
alter table public.notas_crm         enable row level security;
alter table public.etiquetas_miembro enable row level security;

--  POR QUÉ NO SE USA "force row level security" AQUÍ
--  Es tentador: obliga incluso al dueño de la tabla a obedecer el RLS. Pero
--  en estas dos tablas rompería justo lo que hay que proteger. El honor
--  entra por registrar_aporte(), que es security definer y corre COMO EL
--  DUEÑO; con force, ese insert chocaría contra la ausencia deliberada de
--  política de insert y no se podría sumar honor nunca. Y el borrado en
--  cascada desde "miembros" (derecho de supresión) fallaría por lo mismo.
--  El cierre real de estas dos tablas son las políticas de más abajo MÁS
--  los permisos de tabla de la sección 14: ninguna concede escritura.


-- --- catálogos: lectura pública, escritura de nadie -------------------
drop policy if exists naciones_lectura on public.naciones;
create policy naciones_lectura on public.naciones
  for select to anon, authenticated using (true);

drop policy if exists rangos_lectura on public.rangos;
create policy rangos_lectura on public.rangos
  for select to anon, authenticated using (true);

--  La tabla de tipos se lee para pintar "qué suma cuánto" en la pantalla de
--  honor. Enseñar las reglas es correcto: lo que no puede es cambiarlas.
drop policy if exists tipos_aporte_lectura on public.tipos_aporte;
create policy tipos_aporte_lectura on public.tipos_aporte
  for select to anon, authenticated using (true);


-- --- miembros ---------------------------------------------------------
--  Anónimo ve solo los perfiles marcados como públicos: el ranking de la
--  portada tiene que funcionar sin cuenta, o el movimiento no se ve.
drop policy if exists miembros_select_anon on public.miembros;
create policy miembros_select_anon on public.miembros
  for select to anon using (publico);

drop policy if exists miembros_select on public.miembros;
create policy miembros_select on public.miembros
  for select to authenticated
  using (publico or id = auth.uid() or public.es_equipo());

--  El alta es del propio usuario y solo para su propia fila: sin esto,
--  cualquiera crearía fichas a nombre de otros uuid.
drop policy if exists miembros_insert on public.miembros;
create policy miembros_insert on public.miembros
  for insert to authenticated with check (id = auth.uid());

drop policy if exists miembros_update on public.miembros;
create policy miembros_update on public.miembros
  for update to authenticated
  using (id = auth.uid() or public.es_equipo())
  with check (id = auth.uid() or public.es_equipo());

--  Borrarse es un derecho, y por eso existe la política. Pasa igual por
--  borrar_mi_cuenta() cuando hay que arrastrar los libros inmutables.
drop policy if exists miembros_delete on public.miembros;
create policy miembros_delete on public.miembros
  for delete to authenticated using (id = auth.uid());


-- --- contacto: nunca de terceros --------------------------------------
drop policy if exists contacto_select on public.miembros_contacto;
create policy contacto_select on public.miembros_contacto
  for select to authenticated
  using (miembro_id = auth.uid() or public.es_equipo());

drop policy if exists contacto_insert on public.miembros_contacto;
create policy contacto_insert on public.miembros_contacto
  for insert to authenticated with check (miembro_id = auth.uid());

drop policy if exists contacto_update on public.miembros_contacto;
create policy contacto_update on public.miembros_contacto
  for update to authenticated
  using (miembro_id = auth.uid()) with check (miembro_id = auth.uid());

drop policy if exists contacto_delete on public.miembros_contacto;
create policy contacto_delete on public.miembros_contacto
  for delete to authenticated using (miembro_id = auth.uid());


-- --- roles: se leen, no se escriben -----------------------------------
--  Sin política de insert, update ni delete. A propósito. Nombrar equipo se
--  hace desde el panel de Supabase o desde una función del servidor.
drop policy if exists roles_select on public.roles;
create policy roles_select on public.roles
  for select to authenticated
  using (miembro_id = auth.uid() or public.es_equipo());


-- --- consentimientos: se insertan y se leen; nunca se corrigen ---------
drop policy if exists consentimientos_select on public.consentimientos;
create policy consentimientos_select on public.consentimientos
  for select to authenticated
  using (miembro_id = auth.uid() or public.es_equipo());

drop policy if exists consentimientos_insert on public.consentimientos;
create policy consentimientos_insert on public.consentimientos
  for insert to authenticated with check (miembro_id = auth.uid());
--  Ninguna política de update ni de delete. El trigger lo remata.


-- --- aportes: SIN política de insert. Es la decisión, no un olvido -----
--  Quien lea esto dentro de un año y piense "falta el insert": no falta.
--  El honor entra solo por public.registrar_aporte().
drop policy if exists aportes_select on public.aportes;
create policy aportes_select on public.aportes
  for select to authenticated
  using (miembro_id = auth.uid() or public.es_equipo());


-- --- muro -------------------------------------------------------------
drop policy if exists publicaciones_select_anon on public.publicaciones;
create policy publicaciones_select_anon on public.publicaciones
  for select to anon
  using (not oculta and exists (
    select 1 from public.miembros m where m.id = miembro_id and m.publico
  ));

drop policy if exists publicaciones_select on public.publicaciones;
create policy publicaciones_select on public.publicaciones
  for select to authenticated
  using (not oculta or miembro_id = auth.uid() or public.es_equipo());

drop policy if exists publicaciones_insert on public.publicaciones;
create policy publicaciones_insert on public.publicaciones
  for insert to authenticated with check (miembro_id = auth.uid());

drop policy if exists publicaciones_update on public.publicaciones;
create policy publicaciones_update on public.publicaciones
  for update to authenticated
  using (miembro_id = auth.uid() or public.es_equipo())
  with check (miembro_id = auth.uid() or public.es_equipo());

drop policy if exists publicaciones_delete on public.publicaciones;
create policy publicaciones_delete on public.publicaciones
  for delete to authenticated
  using (miembro_id = auth.uid() or public.es_equipo());

drop policy if exists comentarios_select_anon on public.comentarios;
create policy comentarios_select_anon on public.comentarios
  for select to anon using (not oculto);

drop policy if exists comentarios_select on public.comentarios;
create policy comentarios_select on public.comentarios
  for select to authenticated
  using (not oculto or miembro_id = auth.uid() or public.es_equipo());

drop policy if exists comentarios_insert on public.comentarios;
create policy comentarios_insert on public.comentarios
  for insert to authenticated
  with check (
    miembro_id = auth.uid()
    and exists (select 1 from public.publicaciones p
                 where p.id = publicacion_id and not p.oculta)
  );

drop policy if exists comentarios_update on public.comentarios;
create policy comentarios_update on public.comentarios
  for update to authenticated
  using (miembro_id = auth.uid() or public.es_equipo())
  with check (miembro_id = auth.uid() or public.es_equipo());

drop policy if exists comentarios_delete on public.comentarios;
create policy comentarios_delete on public.comentarios
  for delete to authenticated
  using (miembro_id = auth.uid() or public.es_equipo());


-- --- chat -------------------------------------------------------------
--  La sala de círculo no aparece ni en la LISTA para quien no está dentro.
--  Que se vea el nombre de una sala cerrada ya filtra información.
drop policy if exists salas_select on public.salas;
create policy salas_select on public.salas
  for select to authenticated using (public.puede_ver_sala(id));

drop policy if exists salas_insert on public.salas;
create policy salas_insert on public.salas
  for insert to authenticated
  with check (public.es_equipo() and creada_por = auth.uid());

drop policy if exists sala_miembros_select on public.sala_miembros;
create policy sala_miembros_select on public.sala_miembros
  for select to authenticated
  using (miembro_id = auth.uid() or public.puede_ver_sala(sala_id));

--  Al círculo se entra por invitación del equipo, no por autoinscripción.
drop policy if exists sala_miembros_insert on public.sala_miembros;
create policy sala_miembros_insert on public.sala_miembros
  for insert to authenticated with check (public.es_equipo());

drop policy if exists sala_miembros_delete on public.sala_miembros;
create policy sala_miembros_delete on public.sala_miembros
  for delete to authenticated
  using (miembro_id = auth.uid() or public.es_equipo());

drop policy if exists mensajes_select on public.mensajes;
create policy mensajes_select on public.mensajes
  for select to authenticated using (public.puede_ver_sala(sala_id));

drop policy if exists mensajes_insert on public.mensajes;
create policy mensajes_insert on public.mensajes
  for insert to authenticated
  with check (miembro_id = auth.uid() and public.puede_escribir_sala(sala_id));

drop policy if exists mensajes_delete on public.mensajes;
create policy mensajes_delete on public.mensajes
  for delete to authenticated
  using (miembro_id = auth.uid() or public.es_equipo());


-- --- donaciones -------------------------------------------------------
--  Cada quien ve lo suyo. El total del movimiento lo publica el equipo
--  cuando quiera y con contexto, no lo deduce cualquiera consultando la
--  tabla.
drop policy if exists donaciones_select on public.donaciones;
create policy donaciones_select on public.donaciones
  for select to authenticated
  using (miembro_id = auth.uid() or public.es_equipo());

drop policy if exists donaciones_insert on public.donaciones;
create policy donaciones_insert on public.donaciones
  for insert to authenticated with check (miembro_id = auth.uid());
--  Sin update ni delete para el cliente: confirmar es cosa del webhook.


-- --- CRM: cerrado al equipo ------------------------------------------
drop policy if exists notas_crm_equipo on public.notas_crm;
create policy notas_crm_equipo on public.notas_crm
  for all to authenticated
  using (public.es_equipo()) with check (public.es_equipo());

drop policy if exists etiquetas_equipo on public.etiquetas_miembro;
create policy etiquetas_equipo on public.etiquetas_miembro
  for all to authenticated
  using (public.es_equipo()) with check (public.es_equipo());


-- =====================================================================
--  14. PERMISOS DE TABLA — el segundo cerrojo
-- =====================================================================
--  LO QUE CASI TODO EL MUNDO SE SALTA
--  "revoke ... from public" NO cierra nada por sí solo. En Supabase los
--  roles anon y authenticated tienen sus PROPIOS permisos, concedidos por
--  las default privileges del esquema public en cuanto se crea la tabla.
--  Hay que revocarles a ELLOS y volver a conceder solo lo justo. Si no se
--  hace, el día que alguien apague una política por error la tabla queda
--  abierta de par en par.
revoke all on all tables in schema public from public, anon, authenticated;

-- Se reafirma: sin USAGE sobre el esquema, ningún grant de tabla sirve. Ya
-- viene concedido en Supabase, pero después de un revoke masivo conviene
-- que quede escrito y no dependa de lo que hubiera antes.
grant usage on schema public to anon, authenticated;

grant select on public.naciones, public.rangos, public.tipos_aporte to anon, authenticated;

grant select, insert, update, delete on public.miembros          to authenticated;
grant select, insert, update, delete on public.miembros_contacto to authenticated;
grant select                         on public.miembros          to anon;

grant select                 on public.roles           to authenticated;
grant select, insert         on public.consentimientos to authenticated;

--  Ni un insert, ni un update, ni un delete sobre el libro mayor. Ni para
--  el propio dueño de la fila. Este grant es el que hace que el "sin
--  política de insert" sea de verdad infranqueable.
grant select on public.aportes to authenticated;

grant select, insert, update, delete on public.publicaciones to authenticated;
grant select, insert, update, delete on public.comentarios   to authenticated;
grant select                         on public.publicaciones to anon;
grant select                         on public.comentarios   to anon;

grant select, insert         on public.salas         to authenticated;
grant select, insert, delete on public.sala_miembros to authenticated;
grant select, insert, delete on public.mensajes      to authenticated;

grant select, insert on public.donaciones to authenticated;

grant select, insert, update, delete on public.notas_crm         to authenticated;
grant select, insert, update, delete on public.etiquetas_miembro to authenticated;


-- =====================================================================
--  15. PERMISOS DE FUNCIÓN — mismo problema, misma cura
-- =====================================================================
--  Una función nueva es EJECUTABLE POR PUBLIC por defecto en Postgres. Y
--  como anon hereda de public, toda función recién creada queda al alcance
--  de la clave anónima. Se revoca a los tres y se concede una por una.
revoke all on function public.es_equipo(uuid)                             from public, anon, authenticated;
revoke all on function public.rango_para_honor(integer)                   from public, anon, authenticated;
revoke all on function public.nombre_de_rango(smallint)                   from public, anon, authenticated;
revoke all on function public.refrescar_honor(uuid)                       from public, anon, authenticated;
revoke all on function public.registrar_aporte(text, text, text, uuid)    from public, anon, authenticated;
revoke all on function public.puede_ver_sala(uuid)                        from public, anon, authenticated;
revoke all on function public.puede_escribir_sala(uuid)                   from public, anon, authenticated;
revoke all on function public.borrar_mi_cuenta()                          from public, anon, authenticated;
revoke all on function public.trg_consentimiento_inmutable()              from public, anon, authenticated;
revoke all on function public.trg_aporte_inmutable()                      from public, anon, authenticated;
revoke all on function public.trg_aporte_refresca_honor()                 from public, anon, authenticated;
revoke all on function public.trg_miembro_campos_blindados()              from public, anon, authenticated;
revoke all on function public.trg_rol_espejo()                            from public, anon, authenticated;
revoke all on function public.trg_donacion_estado()                       from public, anon, authenticated;

--  Solo estas cinco son llamables desde el navegador. es_equipo,
--  puede_ver_sala y puede_escribir_sala NO son un capricho: una política de
--  RLS que llama a una función comprueba el permiso de EJECUCIÓN del rol
--  que consulta; sin este grant, el chat entero devolvería "permission
--  denied" y costaría media tarde entender por qué.
grant execute on function public.registrar_aporte(text, text, text, uuid) to authenticated;
grant execute on function public.borrar_mi_cuenta()                       to authenticated;
grant execute on function public.puede_ver_sala(uuid)                     to authenticated;
grant execute on function public.puede_escribir_sala(uuid)                to authenticated;
grant execute on function public.es_equipo(uuid)                          to authenticated;
--  refrescar_honor NO se concede: recalcular es del servidor. Y las de
--  trigger tampoco: un trigger no necesita que nadie pueda invocarlo a mano.


-- =====================================================================
--  16. VISTAS — todas con security_invoker = on
-- =====================================================================
--  POR QUÉ security_invoker = on EN TODAS, SIN EXCEPCIÓN
--  Una vista normal se ejecuta con los permisos de QUIEN LA CREÓ, y por
--  tanto se salta el RLS de sus tablas base. En este mismo proyecto ya
--  pasó una vez en otra plataforma: una sola vista sin esta cláusula dejó
--  la reputación de todos los usuarios a la vista de cualquiera. Con
--  invoker, la vista solo ve lo que vería quien la consulta.
--
--  Se usa drop + create y no "create or replace" porque replace falla en
--  cuanto cambia una columna, y este archivo tiene que poder aplicarse
--  encima de una versión anterior sin pelear.

--  El ranking: nombre, nación y honor. Ni correo ni teléfono, que ni
--  siquiera están en la tabla que consulta.
drop view if exists public.v_ranking cascade;
create view public.v_ranking with (security_invoker = on) as
select
  m.id,
  m.nombre,
  m.alias,
  m.nacion,
  n.nombre as nacion_nombre,
  m.ciudad,
  m.oficio,
  m.avatar_url,
  m.honor_total,
  m.rango,
  m.rango_nombre,
  m.creado_en,
  rank() over (order by m.honor_total desc, m.creado_en asc) as puesto
from public.miembros m
join public.naciones n on n.id = m.nacion
where m.publico;

comment on view public.v_ranking is
  'Escalafón público. security_invoker = on: quien la consulta solo ve las filas que su RLS le permite ver.';

--  HONESTIDAD DEL DATO, NO SOLO SEGURIDAD
--  Al ser invoker, esta suma cuenta únicamente los perfiles visibles para
--  quien pregunta. Es deliberado: preferimos un número que se queda corto
--  a filtrar a quien pidió no aparecer. La interfaz DEBE rotularlo como
--  "según los perfiles públicos", no como "miembros de la nación". Poner
--  el rótulo grande es obligación, no adorno.
drop view if exists public.v_ranking_naciones cascade;
create view public.v_ranking_naciones with (security_invoker = on) as
select
  n.id            as nacion,
  n.nombre,
  n.estatus,
  n.lat,
  n.lon,
  count(m.id)                     as miembros_visibles,
  coalesce(sum(m.honor_total), 0) as honor_visible
from public.naciones n
left join public.miembros m on m.nacion = n.id and m.publico
group by n.id, n.nombre, n.estatus, n.lat, n.lon;

--  Mi ficha completa, en una sola consulta: perfil, contacto, rol y lo que
--  me falta para el rango siguiente. Todo filtrado por el RLS del que
--  pregunta, así que nadie ve la de otro aunque cambie el uuid en la URL.
drop view if exists public.v_mi_perfil cascade;
create view public.v_mi_perfil with (security_invoker = on) as
select
  m.*,
  c.correo,
  c.telefono,
  sig.nombre    as rango_siguiente,
  sig.honor_min as honor_siguiente,
  greatest(coalesce(sig.honor_min, m.honor_total) - m.honor_total, 0) as honor_faltante
from public.miembros m
left join public.miembros_contacto c on c.miembro_id = m.id
left join lateral (
  select r.nombre, r.honor_min
    from public.rangos r
   where r.honor_min > m.honor_total
   order by r.honor_min
   limit 1
) sig on true
where m.id = auth.uid();

--  El detalle del honor por tipo: alimenta la pantalla "cómo subo de
--  rango" mostrando cuánto llevo y cuánto me deja el tope.
drop view if exists public.v_mis_aportes cascade;
create view public.v_mis_aportes with (security_invoker = on) as
select
  t.codigo,
  t.nombre,
  t.honor              as honor_unitario,
  t.tope_diario_veces,
  t.tope_honor_total,
  t.requiere_equipo,
  a.miembro_id,
  count(a.id)                     as veces,
  coalesce(sum(a.honor), 0)       as honor_ganado
from public.tipos_aporte t
join public.aportes a on a.tipo = t.codigo
group by t.codigo, t.nombre, t.honor, t.tope_diario_veces,
         t.tope_honor_total, t.requiere_equipo, a.miembro_id;

--  Directorio público: lo mismo que el ranking pero ordenable por nación,
--  para el mapa. Se deja aparte porque el mapa no necesita el puesto y
--  calcular un rank() sobre todos los miembros en cada pintado del mapa es
--  caro sin motivo.
drop view if exists public.v_directorio cascade;
create view public.v_directorio with (security_invoker = on) as
select m.id, m.nombre, m.alias, m.nacion, m.ciudad, m.oficio,
       m.avatar_url, m.rango, m.rango_nombre, m.honor_total, m.creado_en
from public.miembros m
where m.publico;

--  Las vistas heredan el permiso que se les dé, no el de sus tablas: hay
--  que revocarlo y concederlo igual que en las tablas.
revoke all on public.v_ranking, public.v_ranking_naciones,
              public.v_mi_perfil, public.v_mis_aportes, public.v_directorio
  from public, anon, authenticated;

grant select on public.v_ranking, public.v_ranking_naciones, public.v_directorio
  to anon, authenticated;
grant select on public.v_mi_perfil, public.v_mis_aportes to authenticated;


-- =====================================================================
--  17. COMPROBACIÓN — para no repetir el error de siempre
-- =====================================================================
--  En el otro proyecto del fundador hubo cinco migraciones que estaban en
--  el repositorio y nunca llegaron a producción, y nadie se enteró en
--  semanas. Este bloque grita si algo quedó a medias. Ejecutar la
--  migración y ver el aviso es la verificación; no basta con que el
--  comando termine sin error.
do $$
declare
  v_sin_rls   text;
  v_naciones  integer;
  v_vistas    text;
begin
  select string_agg(c.relname, ', ')
    into v_sin_rls
    from pg_class c
    join pg_namespace n on n.oid = c.relnamespace
   where n.nspname = 'public' and c.relkind = 'r' and not c.relrowsecurity;
  if v_sin_rls is not null then
    raise warning 'TABLAS SIN RLS EN public: %', v_sin_rls;
  end if;

  select string_agg(c.relname, ', ')
    into v_vistas
    from pg_class c
    join pg_namespace n on n.oid = c.relnamespace
   where n.nspname = 'public' and c.relkind = 'v'
     and coalesce(array_to_string(c.reloptions, ','), '') not like '%security_invoker%';
  if v_vistas is not null then
    raise warning 'VISTAS SIN security_invoker EN public: %', v_vistas;
  end if;

  select count(*) into v_naciones from public.naciones;
  if v_naciones <> 24 then
    raise warning 'Se esperaban 24 naciones y hay %.', v_naciones;
  end if;

  raise notice 'Los Estados Hispanos · fase 1 aplicada. Naciones: %.', v_naciones;
end;
$$;
