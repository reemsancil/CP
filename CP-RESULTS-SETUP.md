# CP results in the shared Supabase project

This project reuses CE2/CM1’s public Supabase URL, publishable key, student_results table, and teacher account. No teacher password, database password, or secret key belongs in this repository.

CP C and CP F must be accepted by the existing class_section check constraint before submissions work. Run the SQL below in the existing Supabase project’s SQL editor. It preserves every section already allowed by the current constraint and adds CP sections. It fails rather than guessing if there is not exactly one section check constraint.

```sql
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
```

If the existing INSERT policy also restricts class sections, add CP C and CP F to that restriction. Preserve RLS, anonymous insert-only access, teacher-only SELECT, and server-generated completed_at. Do not grant public read access.

## Check the integration

Finish a CP game and submit a name and section. Open teacher.html and sign in with your existing teacher account. Confirm the record is in the correct CP section. The CP dashboard filters only CP records; CE2 and CM1 remain unchanged. Teacher sessions stay in memory and are cleared on reload/sign-out. Submission retries reuse the same UUID and payload to avoid duplicates after a lost response. Student forms reset on restart or close.

Practice scores count completed pairs/questions including retries, not first-attempt accuracy. These submissions use the existing anonymous practice endpoint.

The same SQL is available in cp-sections.sql. Browser checks passed for all seven games, completion forms, mock submission success/failure, same-ID retries, teacher sign-in, CP filtering, CSV download, logout, and mobile layout. The live Supabase domain was blocked by the execution environment, so production rules and credentials were not tested or changed.
