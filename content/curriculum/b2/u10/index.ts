import type { Unit } from "@/lib/curriculum/types";

/** B2 · Unit 10 — Comparatives, one step at a time. */
export const u10: Unit = {
  id: "b2-u10",
  level: "b2",
  number: 10,
  title: "Comparatives and superlatives in full",
  topicIds: ["b2-u10-comparatives"],
  lessons: [
    {
      id: "b2-u10-l1",
      title: "Step 1: comparative + genitive vs чем",
      topicIds: ["b2-u10-comparatives"],
      vocab: ["лучше", "хуже", "больше", "меньше", "старый", "молодой", "сравнение", "город", "брат", "высокий"],
      grammar: [
        {
          title: "Two ways to say “than”",
          body: `Two ways to say 'than': short comparative + genitive (старше бра́та) or чем + nominative (старше, чем брат). The genitive version is shorter and very common in speech; чем is heavier and more formal.

- Short comparative + **genitive**: Он умне́е меня́. Он ста́рше бра́та.
- **чем + any case** (must repeat the noun's case): Он умне́е, чем я. Это важне́е, чем э́то.
The genitive version is shorter and very common in speech.`,
          why: "The genitive after a comparative is Russian's 'of the two' logic — he is older OF THE TWO brothers. чем instead builds a full comparison clause. Both correct; the genitive is what speech prefers and writing tolerates in either form.",

          table: {
            headers: ["Pattern", "Example"],
            rows: [
              ["comparative + gen", "старше брата"],
              ["чем + nom", "старше, чем брат"],
            ],
          },
          tip: "After a short comparative the second element goes GENITIVE: красивее города́ — never «красивее город».",
        },
      ],
      exercises: [
        {
          id: "b2-u10-l1-e1",
          type: "single",
          text: "Он ста́рше ___. (я)",
          options: [{ id: "a", label: "меня" }, { id: "b", label: "я" }], answer: "a",
        },
        {
          id: "b2-u10-l1-e2",
          type: "single",
          text: "Эта задача ___ той.",
          options: [{ id: "a", label: "сложнее" }, { id: "b", label: "более сложнее" }], answer: "a",
        },
        {
          id: "b2-u10-l1-e3",
          type: "true-false",
          text: "«чем» requires genitive after it.",
          answer: false,
          explanation: "чем + nominative (or matching case); the GENITIVE attaches to the comparative itself.",
        },
      ],
      drills: [{ kind: "comparative", count: 4 }, { kind: "cloze", count: 2 }],
    },
    {
      id: "b2-u10-l2",
      title: "Step 2: чем…тем, гораз́до, superlatives",
      topicIds: ["b2-u10-comparatives"],
      vocab: ["гораздо", "значительно", "качество", "эффективность", "заметно", "самый", "наиболее", "важнейший", "лучший", "возможный"],
      grammar: [
        {
          title: "Intensifiers and the superlative ladder",
          body: `than…тем builds correlative comparisons: Чем бо́льше, тем лу́чше. Superlative ladder: са́мый (neutral), наибо́лее (formal), -ейший (emphatic bookish): важне́йший. Intensifiers горáздо/значи́тельно/мно́го + comparative = much better.

- **горáздо / значи́тельно / мно́го + comparative** = much: мно́го лу́чше.
- **чем…, тем…**: Чем бо́льше, тем лу́чше. — The more, the better.
- Superlative: **са́мый** (neutral), наибо́лее (formal), -ейший (emphatic bookish): важне́йший.`,
          why: "чем…тем is a fixed correlative frame — both halves required, each holding a comparative. And the three superlative strategies differ by register, not meaning: са́мый for speech, наибо́лее for reports, -ейший for rhetoric. Choosing is choosing a register.",

          table: {
            headers: ["Device", "Example"],
            rows: [
              ["гораздо + comp", "гораздо лучше"],
              ["чем…, тем…", "чем раньше, тем лучше"],
              ["самый", "самый лучший"],
              ["-ейший", "важнейший"],
            ],
          },
        },
      ],
      exercises: [
        {
          id: "b2-u10-l2-e1",
          type: "short-answer",
          text: "The more we learn, the easier it gets: (Чем…, тем…)",
          answer: "чем больше мы учимся тем легче становится",
          accept: ["чем больше учимся тем легче"],
        },
        {
          id: "b2-u10-l2-e2",
          type: "single",
          text: "«гораздо лучше» =",
          options: [{ id: "a", label: "much better" }, { id: "b", label: "the best" }], answer: "a",
        },
        {
          id: "b2-u10-l2-e3",
          type: "true-false",
          text: "наибо́лее suits academic style; са́мый is neutral.",
          answer: true,
        },
      ],
      drills: [{ kind: "comparative", count: 4 }, { kind: "cloze", count: 2 }],
    },
  ],

  test: [
    {
      id: "b2-u10-test-1", type: "single",
      text: "Эта задача ___ той.",
      options: [{ id: "a", label: "сложнее" }, { id: "b", label: "более сложнее" }], answer: "a",
    },
    {
      id: "b2-u10-test-2", type: "short-answer",
      text: "The more the better: (Чем…, тем…)",
      answer: "чем больше тем лучше",
    },
    {
      id: "b2-u10-test-3", type: "true-false",
      text: "«гораздо лучше» = much better.",
      answer: true,
    },
  ],
};
