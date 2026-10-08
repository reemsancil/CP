# Mrs. Reem’s English class

Open index.html in a browser, or serve this folder with `python3 -m http.server 8000`.

The homepage shows School supplies and My daily routine lesson folders, each with picture-pair, matching-word, and missing-picture games. There is / There are is a separate lesson game. All content is English; visible pictures have English words beneath them. The heading has no description below it.

Students enter their name and class section after completing a game, then submit results to the same Supabase project used by CE2 and CM1. Teacher results are at teacher.html: sign in with the existing teacher account to view CP records and download CSV. Names and results are not saved in browser storage or published to GitHub. Supabase controls access through the existing database permissions and row level security.

Scores record completed pairs/questions (4 of 4), including retries, consistent with CE2’s practice completion scoring. The on-screen summary also shows turns, attempts, or first-try answers; these extra details are not stored because the shared table has only score/total fields. Games have no timer and allow unlimited retries.

See CP-RESULTS-SETUP.md for the database section prerequisite. Live database acceptance still needs verification; a submission reports success only after Supabase accepts it.
