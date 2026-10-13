# Mrs. Reem’s English class

Open index.html in a browser, or serve this folder with `python3 -m http.server 8000`.

The homepage shows School supplies and My daily routine lesson folders, each with picture-pair and missing-picture games. There is / There are is a separate lesson game. All content is English; game pictures and missing-picture answers do not require reading; the optional Word Guide includes English labels. The heading has no description below it.

Students enter their name and class section after completing a game, then submit results to the same Supabase project used by CE2 and CM1. Teacher results are at teacher.html: sign in with the existing teacher account to view CP records and download CSV. Names and results are not saved in browser storage or published to GitHub. Supabase controls access through the existing database permissions and row level security.

Scores record completed pairs/questions (5 of 5 for pairs; 6 of 6 for missing pictures; 4 of 4 for grammar), including retries, consistent with CE2’s practice completion scoring. The on-screen summary also shows turns, attempts, or first-try answers; these extra details are not stored because the shared table has only score/total fields. Games have no timer and allow unlimited retries.

See CP-RESULTS-SETUP.md for the database section prerequisite. Live database acceptance still needs verification; a submission reports success only after Supabase accepts it.

## Unit 1 gifts and certificates

Children can use Check my gifts or My certificates with their name and CP section. Teachers may send one Unit 1 certificate after all five current games have full completion results. Removed word-matching games do not count. Names are matched ignoring case and repeated spaces; spelling still needs to match. Different class sections remain separate. This is name-and-class identification, not student authentication.

Before publishing this feature, run school-certificates.sql in the existing Supabase SQL editor. It adds a certificate table and three scoped RPCs without changing student_results. The teacher account alone can award certificates, and eligibility is checked again in the database. Existing anonymous result reading remains restricted. Children can look up and open only certificates matching the supplied name, class and level. Student gift lookups have no directory/list endpoint. Live database setup and browser verification still need to be completed.

See GIFTS-SETUP.md for the shared CP, CE2 and CM1 certificate setup and the standalone test instructions.

Game completion checkmarks are remembered in this browser after an exercise finishes, including low scores and retries. Completing every exercise marks its lesson and Unit 1. These local checkmarks do not award gifts or replace submitted teacher records.
