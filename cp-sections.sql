BEGIN;
DO $$
DECLARE
  constraint_name text;
  previous_expression text;
BEGIN
  SELECT conname, pg_get_expr(conbin, conrelid)
    INTO STRICT constraint_name, previous_expression
  FROM pg_constraint
  WHERE conrelid = 'public.student_results'::regclass
    AND contype = 'c'
    AND pg_get_constraintdef(oid) LIKE '%class_section%';

  EXECUTE format('ALTER TABLE public.student_results DROP CONSTRAINT %I', constraint_name);
  EXECUTE format(
    'ALTER TABLE public.student_results ADD CONSTRAINT %I CHECK ((%s) OR class_section IN (%L, %L))',
    constraint_name, previous_expression, 'CP C', 'CP F'
  );
END $$;
COMMIT;
