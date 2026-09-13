import type { Unit } from "@/lib/curriculum/types";

/** C1 · Units 6–9 compact: word-formation grid, formal registers, ellipsis, idioms. */
export const u06: Unit = {
  id: "c1-u06",
  level: "c1",
  number: 6,
  title: "Word-formation master grid",
  topicIds: ["c1-u06-word-formation-2"],
  lessons: [
    {
      id: "c1-u06-l1",
      title: "All verb prefixes × meanings; rare suffixes",
      topicIds: ["c1-u06-word-formation-2"],
      vocab: ["написать", "переписать", "дописать", "записать", "подписать", "описать", "списать", "выписать", "прописать", "предписание"],
      grammar: [
        {
          title: "One verb, ten futures: писать × prefixes",
          body: `One verb, ten futures: писа́ть + prefixes. написа́ть (write), переписа́ть (rewrite), дописа́ть (finish writing), запи́са́ть (note down), подпи́са́ть (sign), опи́са́ть (describe), списа́ть (copy/cheat), вы́писать (write out/prescribe), пропи́са́ть (register officially).

- **написа́ть** — write (result); **переписа́ть** — rewrite; **дописа́ть** — finish writing; **записа́ть** — note down; **подписа́ть** — sign; **описа́ть** — describe; **списа́ть** — copy/cheat; **вы́писать** — order/write out; **прописа́ть** — register (officially).
Each prefix contributes direction, completeness, or metaphor. Compare nouns: подпись (signature), описа́ние (description), предписа́ние (directive).`,
          plain: `Learn new verbs in families, not alone: one root plus a small front piece gives you write, rewrite, sign, copy and more. Guessing from the piece works more often than it fails.`,
          why: "Each prefix contributes direction, completeness or metaphor — and the derived nouns keep the family resemblance: подпи́сь (signature), опи́сание (description), предписа́ние (directive). Learn the grid as a system and a dozen words come free with each verb.",
          examples: [
            { ru: "Не списыва'й!",
 en: "Don't copy (cheat)!" },
          ],
          tip: "Stress shifts mark verbs of one-direction action vs state: разреза́ть/разре́зать pairs differ aspectually, not lexically.",
        },
      ],
      exercises: [
        {
          id: "c1-u06-l1-e1",
          type: "matching",
          text: "Prefix → meaning with писа́ть:",
          prompts: [
            { id: "p1", label: "под-" },
            { id: "p2", label: "о-" },
            { id: "p3", label: "с-" },
          ],
          responses: [
            { id: "r1", label: "copy/cheat" },
            { id: "r2", label: "sign" },
            { id: "r3", label: "describe" },
          ],
          answer: { p1: "r2", p2: "r3", p3: "r1" },
        },
        {
          id: "c1-u06-l1-e2",
          type: "true-false",
          text: "«вы́писать лекарство» = to prescribe.",
          answer: true,
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
  ],

  test: [
    {
      id: "c1-u06-test-1",
      type: "single",
      text: "Describe = ___ + писа́ть.",
      options: [{ id: "a", label: "о-" }, { id: "b", label: "под-" }], answer: "a"
    },
    {
      id: "c1-u06-test-2",
      type: "single",
      text: "«подпись» is:",
      options: [{ id: "a", label: "a signature (noun)" }, { id: "b", label: "to sign (verb)" }], answer: "a"
    },
  ],
};
