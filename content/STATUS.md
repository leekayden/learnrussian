# Curriculum rebuild status

Goal: every lesson teaches ONE concept (step-by-step pacing), full coverage
A2 → C2. Levels are rebuilt one at a time; unit tests and exams stay.

| Level | Units | Lessons | Step-by-step? | Notes |
|---|---|---|---|---|
| A2  | 12 | 56 | ✅ rebuilt | u01-u12 split into micro-lessons |
| B1  | 12 | 23 | ⏳ pending | still 1-2 lessons/unit; split next |
| B2  | 12 | 20 | ⏳ pending | split next |
| C1  | 10 | 15 | ⏳ pending | split next |
| C2  | 12 | 24 | ✅ authored step-by-step | new level: case synonymy, aspect stylistics, expressive morphology, particles, phraseology, register editing |

## Micro-lesson checklist (used in rebuilt units)
1. One grammar block per lesson: rule → one table → 2-3 examples → trap tip
2. 5-10 vocab words, all present in `words` (verify: `node --env-file=.env scripts/check-vocab.mjs`)
3. 3-5 exercises + 1-2 drill specs
4. Unit test gates the next unit (≥80%)
