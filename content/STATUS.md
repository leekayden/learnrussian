# Curriculum rebuild status

Goal: every lesson teaches ONE concept (step-by-step pacing), full coverage
A2 → C2. ✅ COMPLETE — all levels rebuilt/verified.

| Level | Units | Lessons | Step-by-step? | Notes |
|---|---|---|---|---|
| A2  | 12 | 56 | ✅ rebuilt | split multi-topic lessons into micro-lessons |
| B1  | 12 | 33 | ✅ rebuilt | u01→5, u02→3, u03/u04/u05/u09→2, u10→4, u11→3; u06/u07/u08/u12 already single-concept |
| B2  | 12 | 21 | ✅ rebuilt | u03→2, u05→2, u10→2, u11→2; rest already single-concept |
| C1  | 10 | 15 | ✅ rebuilt | u01→2, u04→2, u09→2, u10→2; rest already single-concept |
| C2  | 12 | 25 | ✅ authored step-by-step | case synonymy, aspect stylistics, expressive morphology, particles, phraseology, register editing |

Total: 58 units, ~150 micro-lessons, 5 level exams, placement test.

## Micro-lesson checklist (used across all levels)
1. One grammar block per lesson: rule → one table → 2-3 examples → trap tip
2. 5-10 vocab words, all present in `words` (verify: `node --env-file=.env scripts/check-vocab.mjs`)
3. 3-5 exercises + 1-2 drill specs
4. Unit test gates the next unit (≥80%)
