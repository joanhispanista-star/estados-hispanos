-- =====================================================================
--  LOS ESTADOS HISPANOS — migración 0003
--  Vocabulario defendible: fuera los grados militares y el "reconocimiento"
-- =====================================================================
--
--  POR QUÉ EXISTE ESTA MIGRACIÓN
--  Una revisión jurídica adversarial sobre la presidencia del movimiento
--  encontró dos problemas que ya estaban escritos en el código, no en el
--  futuro. Ninguno es una interpretación forzada: los dos son tipos penales
--  propios y de prueba trivial.
--
--  1. LOS GRADOS DE MANDO. La migración 0002 sembró "Comandante de Núcleo",
--     "Comandante de Ciudad", "Comandante de Nación" y "Estado Mayor".
--     Atribuirse grados jerárquicos e insignias que no se tienen está tipificado
--     en el art. 346 del Código Penal colombiano y en el art. 250 del Código
--     Penal Federal mexicano. Aislado quizá nadie miraría; junto a una
--     presidencia, un emblema, un mapa con reivindicaciones territoriales y una
--     estructura organizada por naciones, el conjunto pinta el cuadro completo.
--     Y "escalafón" es la palabra del ordenamiento militar y policial.
--
--     LO QUE NO CAMBIA: los umbrales de honor, lo que puede hacer cada nivel y
--     la escalera entera. Solo las palabras.
--
--  2. "RECONOCER" LA PRESIDENCIA. "Reconocimiento" es el término técnico del
--     derecho internacional para el reconocimiento de gobiernos y de Estados.
--     Es literalmente el encuadre de una presidencia paralela, que es el marco
--     que este movimiento NO quiere. "Adhesión" describe mejor lo que de verdad
--     ocurre —un socio se adhiere a una asociación— y no invoca ese marco.
--
--  3. LA TERCERA VÍA DE ASCENSO. Los niveles 4 y 5 estaban marcados como
--     "automatico" cuando en realidad esperan a que alguien del equipo
--     verifique el núcleo o el acto. Un militante que cumple y no asciende, sin
--     saber por qué ni a quién reclamar, es un militante que se va. Se añade la
--     vía "verificado" y la pantalla la dice con esas palabras.
--
--  Idempotente: se puede aplicar dos veces sin romper nada.
-- =====================================================================


-- ---------------------------------------------------------------------
--  1. LA TERCERA VÍA
-- ---------------------------------------------------------------------
alter table public.rangos drop constraint if exists rangos_via_check;
alter table public.rangos
  add constraint rangos_via_check
  check (via in ('automatico', 'verificado', 'nombramiento'));

comment on column public.rangos.via is
  'automatico = sube solo al llegar al honor. verificado = sube al llegar al honor, pero el equipo confirma el núcleo o el acto. nombramiento = lo decide la dirección; cumplir los requisitos NO asciende.';


-- ---------------------------------------------------------------------
--  2. LOS NIVELES DE PARTICIPACIÓN
-- ---------------------------------------------------------------------
insert into public.rangos (nivel, nombre, honor_min, que_da, via) values
  (1, 'Inscrito',                0,     'Está dentro. Tiene voz en el muro, en el chat y en la sala de su nación.',                    'automatico'),
  (2, 'Militante',               100,   'Ya no es público: es fuerza. Puede recoger apoyos a nombre del movimiento.',                  'automatico'),
  (3, 'Portavoz',                350,   'Puede hablar del movimiento en público y abrir la sala de su ciudad. Entra al Círculo.',       'automatico'),
  (4, 'Coordinador de Núcleo',   900,   'Sostiene un núcleo local: convoca, organiza y responde por su grupo.',                        'verificado'),
  (5, 'Coordinador de Ciudad',   2000,  'Coordina varios núcleos de una misma ciudad y responde por los apoyos recogidos allí.',       'verificado'),
  (6, 'Delegado de Nación',      5000,  'Responde por un país entero ante el movimiento y ante el partido hermano de su nación.',      'nombramiento'),
  (7, 'Junta Fundacional',       12000, 'Habla en nombre del movimiento entero y define la estrategia junto a la presidencia.',        'nombramiento')
on conflict (nivel) do update
  set nombre    = excluded.nombre,
      honor_min = excluded.honor_min,
      que_da    = excluded.que_da,
      via       = excluded.via;

--  Los perfiles guardan el nombre del nivel como espejo. Hay que refrescarlo o
--  quedaría gente ostentando un grado que la organización acaba de retirar.
update public.miembros m
   set rango_nombre = public.nombre_de_rango(m.rango)
 where m.rango_nombre is distinct from public.nombre_de_rango(m.rango);


-- ---------------------------------------------------------------------
--  3. DE "RECONOCER" A "ADHERIR"
-- ---------------------------------------------------------------------
--  El orden importa: primero se crea el tipo nuevo, luego se mueven los
--  aportes existentes y solo al final se borra el viejo. Al revés, la clave
--  foránea de aportes.tipo dejaría filas huérfanas y el borrado fallaría.
insert into public.tipos_aporte
  (codigo, nombre, honor, tope_diario_veces, tope_honor_total, requiere_equipo, descripcion) values
  ('adherir', 'Se adhirió al movimiento', 15, 1, 15, false,
   'Una sola vez. La adhesión es voluntaria y revocable; el honor no se retira al revocarla, porque el acto sí ocurrió. Antes se llamaba "reconocer" y se cambió: reconocimiento es el término del derecho internacional para reconocer gobiernos, y ese encuadre no le conviene a este movimiento.')
on conflict (codigo) do update
  set nombre            = excluded.nombre,
      honor             = excluded.honor,
      tope_diario_veces = excluded.tope_diario_veces,
      tope_honor_total  = excluded.tope_honor_total,
      requiere_equipo   = excluded.requiere_equipo,
      descripcion       = excluded.descripcion;

do $$
declare
  v_movidos integer := 0;
begin
  if exists (select 1 from public.tipos_aporte where codigo = 'reconocer') then
    -- El libro mayor es inmutable por trigger. Esta es una de las poquísimas
    -- correcciones que la organización puede hacer sobre él, y queda escrita
    -- aquí para que se pueda auditar quién la hizo y por qué.
    perform set_config('eh.borrado_legal', 'on', true);

    update public.aportes
       set tipo = 'adherir',
           nota = coalesce(nullif(nota, ''), 'Se adhirió al movimiento')
     where tipo = 'reconocer';
    get diagnostics v_movidos = row_count;

    perform set_config('eh.borrado_legal', 'off', true);

    delete from public.tipos_aporte where codigo = 'reconocer';
    raise notice 'Se movieron % aportes de reconocer a adherir.', v_movidos;
  end if;
end;
$$;


-- ---------------------------------------------------------------------
--  4. EL CONTADOR, CON SU NOMBRE NUEVO
-- ---------------------------------------------------------------------
create or replace function public.contar_adhesiones()
returns integer
language sql
stable
security definer
set search_path = ''
as $$
  select count(distinct a.miembro_id)::integer
    from public.aportes a
   where a.tipo = 'adherir';
$$;

revoke all on function public.contar_adhesiones() from public;
grant execute on function public.contar_adhesiones() to anon, authenticated;

comment on function public.contar_adhesiones() is
  'Número de miembros adheridos al movimiento. Se expone a anon a propósito: el contador de la portada lo ve cualquier visitante y no revela quién es nadie.';

--  La función vieja se retira para que nadie la llame por costumbre y obtenga
--  siempre cero sin darse cuenta de que cuenta un tipo que ya no existe.
drop function if exists public.contar_reconocimientos();


-- ---------------------------------------------------------------------
--  5. COMPROBACIÓN
-- ---------------------------------------------------------------------
do $$
declare
  v_militar integer;
  v_viejo   integer;
  v_adherir integer;
begin
  select count(*) into v_militar
    from public.rangos
   where nombre ilike '%comandante%' or nombre ilike '%estado mayor%';

  select count(*) into v_viejo   from public.tipos_aporte where codigo = 'reconocer';
  select count(*) into v_adherir from public.tipos_aporte where codigo = 'adherir';

  if v_militar > 0 then
    raise exception 'Quedan % niveles con nombre de grado militar.', v_militar;
  end if;
  if v_viejo <> 0 then
    raise exception 'El tipo "reconocer" sigue existiendo.';
  end if;
  if v_adherir <> 1 then
    raise exception 'Falta el tipo "adherir".';
  end if;

  raise notice 'Migración 0003 aplicada: vocabulario limpio.';
end;
$$;
