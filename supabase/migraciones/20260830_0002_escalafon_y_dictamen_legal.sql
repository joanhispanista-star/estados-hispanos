-- =====================================================================
--  LOS ESTADOS HISPANOS — migración 0002
--  El escalafón de mando y lo que impuso el dictamen legal
-- =====================================================================
--
--  POR QUÉ EXISTE ESTA MIGRACIÓN Y NO SE EDITÓ LA 0001
--  Regla de la casa: una migración no se reescribe, se corrige con otra. Aun
--  cuando la 0001 todavía no se haya aplicado, editarla haría que dos copias
--  del repositorio con el mismo nombre de archivo tuvieran contenidos
--  distintos, que es exactamente como una base y su repositorio se
--  desincronizan sin que nadie se entere.
--
--  QUÉ CAMBIA Y POR QUÉ
--
--  1. EL ESCALAFÓN. La 0001 trae los nombres romanos (Ciudadano, Heraldo,
--     Cónsul, Procónsul, Senador, Legado). El fundador pidió después una
--     escalera de mando que termine en comandante, y añadió un séptimo
--     escalón. Se distingue además lo que se gana solo de lo que se nombra:
--     prometer un ascenso automático que en realidad depende de que alguien
--     te nombre es la forma más rápida de perder a la gente buena, que es
--     precisamente la que lleva la cuenta de sus puntos.
--
--  2. EL DINERO DEJA DE DAR HONOR. La 0001 daba 15 puntos por aportar, con
--     tope de 300 de por vida, razonando que un tope bajo impedía comprar el
--     grado. La revisión jurídica lo tumbó y tiene razón: mientras aportar
--     sume aunque sea un punto, el dinero compra estatus. Y un esquema donde
--     el dinero produce rango dentro de una organización que además premia
--     traer gente es justo lo que el Decreto 4334 de 2008 persigue. El tipo
--     'aportar_economico' desaparece. Quien aporta figura en el informe de
--     transparencia, que es donde corresponde, no en el escalafón.
--
--  3. TECHO DEL 25 % AL HONOR DE INVITAR, con rendimientos decrecientes.
--     Sin techo, la forma óptima de ascender es traer cuentas. Con techo, hay
--     que haber hecho algo además de invitar. La profundidad sigue siendo
--     UNO: no existe, ni existirá, honor por la gente que invitaron los que
--     tú invitaste. Esa cadena es el rasgo que define jurídicamente una
--     pirámide y no está en este esquema ni para enseñar una estadística.
--
--  4. LOS SIETE TIPOS DE APORTE QUE FALTABAN. La propia 0001 dejó la nota:
--     registrar_aporte() falla a gritos ante un tipo desconocido, así que sin
--     sembrarlos la plataforma no puede registrar ni una inscripción.
--
--  5. contar_reconocimientos(). El contador de la portada. Hace falta una
--     función porque el RLS impide —a propósito— que un miembro lea los
--     aportes de los demás: un conteo hecho desde el cliente devolvería
--     siempre 1 y el número de la portada sería mentira.
--
--  Idempotente: se puede aplicar dos veces sin romper nada.
-- =====================================================================


-- ---------------------------------------------------------------------
--  1. EL ESCALAFÓN DE MANDO
-- ---------------------------------------------------------------------
--  rango_para_honor() y nombre_de_rango() leen de esta tabla, así que
--  actualizarla basta: no hay ningún nombre de grado escrito en el código.

alter table public.rangos
  add column if not exists via text not null default 'automatico'
    check (via in ('automatico', 'nombramiento'));

comment on column public.rangos.via is
  'automatico = se gana solo, con honor y condiciones que la plataforma comprueba. nombramiento = lo decide la Presidencia. La pantalla lo dice con esas palabras.';

insert into public.rangos (nivel, nombre, honor_min, que_da, via) values
  (1, 'Inscrito',              0,     'Está dentro. Tiene voz en el muro, en el chat y en la sala de su nación.',                         'automatico'),
  (2, 'Militante',             100,   'Ya no es público: es fuerza. Puede recoger apoyos a nombre del movimiento.',                       'automatico'),
  (3, 'Portavoz',              350,   'Puede hablar del movimiento en público y abrir la sala de su ciudad. Entra al Círculo.',            'automatico'),
  (4, 'Comandante de Núcleo',  900,   'Sostiene un núcleo local con gente de verdad: convoca, organiza y responde por su grupo.',         'automatico'),
  (5, 'Comandante de Ciudad',  2000,  'Coordina varios núcleos de una misma ciudad y responde por la recogida de apoyos allí.',           'automatico'),
  (6, 'Comandante de Nación',  5000,  'Responde por un país entero ante el movimiento y ante el partido hermano de su nación.',           'nombramiento'),
  (7, 'Estado Mayor',          12000, 'Habla en nombre del movimiento entero y define la estrategia junto a la Presidencia.',             'nombramiento')
on conflict (nivel) do update
  set nombre    = excluded.nombre,
      honor_min = excluded.honor_min,
      que_da    = excluded.que_da,
      via       = excluded.via;

--  Los nombres del perfil se quedaron con el escalafón viejo. Se refrescan.
update public.miembros m
   set rango_nombre = public.nombre_de_rango(m.rango)
 where m.rango_nombre is distinct from public.nombre_de_rango(m.rango);


-- ---------------------------------------------------------------------
--  2. EL DINERO NO DA HONOR
-- ---------------------------------------------------------------------
--  Primero se revierte el honor ya concedido por este tipo, si lo hubiera.
--  Se enciende la bandera del borrado legal porque el libro mayor es
--  inmutable por trigger: esta es una de las poquísimas correcciones que la
--  organización puede hacer sobre él, y queda escrita aquí para que se pueda
--  auditar quién la hizo y por qué.
do $$
declare
  v_afectados integer;
begin
  select count(*) into v_afectados from public.aportes where tipo = 'aportar_economico';

  if v_afectados > 0 then
    perform set_config('eh.borrado_legal', 'on', true);
    delete from public.aportes where tipo = 'aportar_economico';
    perform set_config('eh.borrado_legal', 'off', true);
    raise notice 'Se revirtieron % aportes de honor por dinero.', v_afectados;
  end if;

  delete from public.tipos_aporte where codigo = 'aportar_economico';
end;
$$;


-- ---------------------------------------------------------------------
--  3. LOS TIPOS DE APORTE QUE FALTABAN
-- ---------------------------------------------------------------------
insert into public.tipos_aporte
  (codigo, nombre, honor, tope_diario_veces, tope_honor_total, requiere_equipo, descripcion) values

  ('inscripcion', 'Se unió al movimiento',      10, 1, 10,   false,
   'Una sola vez en la vida. El tope de por vida lo garantiza aunque falle todo lo demás.'),

  ('reconocer',   'Reconoció la presidencia',   15, 1, 15,   false,
   'Una sola vez. Reconocer la Presidencia Interina es un acto voluntario y revocable; el honor no se devuelve al retirarlo, porque el acto sí ocurrió.'),

  ('perfil',      'Completó su ficha',          10, 1, 10,   false,
   'Una sola vez, cuando el perfil tiene nación, ciudad, oficio y biografía.'),

  ('mision',      'Cumplió una misión',         12, 6, 600,  false,
   'Misiones del manual del recluta. Muchas son autodeclaradas y la pantalla lo dice: la plataforma no finge que verifica lo que no verifica.'),

  ('firmas',      'Recogió apoyos',             35, 4, null, true,
   'Lo verifica el equipo contra los formularios entregados. Sin verificación no se registra: un contador de firmas inflado hace perder meses de trabajo a gente real.'),

  ('nodo',        'Levantó un núcleo local',    80, 1, null, true,
   'Lo verifica el equipo: un núcleo son cinco personas con nombre y un lugar fijo, no un grupo de WhatsApp.'),

  ('testimonio',  'Aportó un testimonio',       20, 2, 400,  false,
   'Historia propia publicada en el muro y marcada como testimonio.')

on conflict (codigo) do update
  set nombre            = excluded.nombre,
      honor             = excluded.honor,
      tope_diario_veces = excluded.tope_diario_veces,
      tope_honor_total  = excluded.tope_honor_total,
      requiere_equipo   = excluded.requiere_equipo,
      descripcion       = excluded.descripcion;


-- ---------------------------------------------------------------------
--  4. EL TECHO DEL 25 % AL HONOR DE INVITAR
-- ---------------------------------------------------------------------
--  Dos defensas, y las dos hacen falta:
--
--  · RENDIMIENTOS DECRECIENTES. La invitación número n vale 0,85 elevado a n
--    de lo que valía la primera, con suelo de 5 puntos. Traer a diez personas
--    rinde bastante menos que diez veces traer a una.
--
--  · TECHO DURO. El honor de invitar no puede pasar de un tercio del honor
--    ganado haciendo otras cosas. Un tercio del resto es exactamente el 25 %
--    del total. Así nadie llega a comandante solo trayendo gente.
--
--  Se recalcula desde el libro mayor y no se va sumando, por la misma razón
--  que en la 0001: sumar es rápido y miente en cuanto se repite un disparador.
create or replace function public.refrescar_honor(p_miembro uuid)
returns void
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_base   integer;
  v_invit  integer;
  v_techo  integer;
  v_honor  integer;
  v_nivel  smallint;
begin
  --  Todo lo que NO es invitar.
  select coalesce(sum(a.honor), 0) into v_base
    from public.aportes a
   where a.miembro_id = p_miembro
     and a.tipo <> 'reclutar';

  --  Invitar, con rendimientos decrecientes por orden de llegada.
  select coalesce(sum(greatest(5, round(x.honor * power(0.85, x.n))))::integer, 0)
    into v_invit
    from (
      select a.honor,
             (row_number() over (order by a.creado_en, a.id) - 1) as n
        from public.aportes a
       where a.miembro_id = p_miembro
         and a.tipo = 'reclutar'
    ) x;

  v_techo := floor(v_base / 3.0)::integer;
  v_invit := least(v_invit, v_techo);
  v_honor := v_base + v_invit;
  v_nivel := public.rango_para_honor(v_honor);

  perform set_config('eh.recalculo', 'on', true);

  update public.miembros
     set honor_total    = v_honor,
         rango          = v_nivel,
         rango_nombre   = public.nombre_de_rango(v_nivel),
         actualizado_en = now()
   where id = p_miembro;

  perform set_config('eh.recalculo', 'off', true);
end;
$$;

comment on function public.refrescar_honor(uuid) is
  'Recalcula el honor desde el libro mayor aplicando rendimientos decrecientes y el techo del 25 % al honor de invitar. Profundidad UNO: no existe honor por la gente que invitaron tus invitados.';


-- ---------------------------------------------------------------------
--  5. EL CONTADOR DE RECONOCIMIENTOS
-- ---------------------------------------------------------------------
--  Devuelve cuántas personas distintas han reconocido la Presidencia
--  Interina. Es una función y no una consulta del cliente porque el RLS
--  impide leer los aportes ajenos: desde el navegador, un conteo directo
--  devolvería siempre 1.
--
--  Es security definer y no filtra ningún dato personal: solo un número.
create or replace function public.contar_reconocimientos()
returns integer
language sql
stable
security definer
set search_path = ''
as $$
  select count(distinct a.miembro_id)::integer
    from public.aportes a
   where a.tipo = 'reconocer';
$$;

revoke all on function public.contar_reconocimientos() from public;
grant execute on function public.contar_reconocimientos() to anon, authenticated;

comment on function public.contar_reconocimientos() is
  'Número de miembros que han reconocido la Presidencia Interina. Se expone a anon a propósito: el contador de la portada lo ve cualquier visitante y no revela quién es nadie.';


-- ---------------------------------------------------------------------
--  6. COMPROBACIÓN
-- ---------------------------------------------------------------------
--  Aplicar una migración y no verificarla es como no aplicarla: en este
--  proyecto ya hay antecedentes de migraciones que nunca llegaron a la base
--  y nadie se enteró durante semanas.
do $$
declare
  v_rangos integer;
  v_tipos  integer;
  v_dinero integer;
begin
  select count(*) into v_rangos from public.rangos;
  select count(*) into v_tipos  from public.tipos_aporte;
  select count(*) into v_dinero from public.tipos_aporte where codigo = 'aportar_economico';

  if v_rangos <> 7 then
    raise exception 'El escalafón debería tener 7 grados y tiene %.', v_rangos;
  end if;
  if v_tipos < 13 then
    raise exception 'Faltan tipos de aporte: hay % y deberían ser al menos 13.', v_tipos;
  end if;
  if v_dinero <> 0 then
    raise exception 'aportar_economico sigue existiendo: el dinero no puede dar honor.';
  end if;

  raise notice 'Migración 0002 aplicada: % grados, % tipos de aporte, 0 honor por dinero.', v_rangos, v_tipos;
end;
$$;
