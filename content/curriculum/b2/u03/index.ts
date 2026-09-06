import type { Unit } from "@/lib/curriculum/types";

/** B2 · Unit 3 — Passive voice & participle syntax. */
export const u03: Unit = {
  id: "b2-u03",
  level: "b2",
  number: 3,
  title: "Passive constructions in the wild",
  topicIds: ["b2-u03-passive-syntax"],
  lessons: [
    {
      id: "b2-u03-l1",
      title: "Short participle + agent instrumental",
      topicIds: ["b2-u03-passive-syntax"],
      vocab: ["письмо", "решение", "проект", "автор", "архитектор", "комиссия", "правительство", "закон", "документ", "соглашение"],
      grammar: [
        {
          title: "The full passive sentence",
          body: `Pattern: **Patienser + short participle + agent instrumental**:
- Письмо́ **напи́сано** (автором). — The letter was written (by the author).
- Решéние **бы́ло при́нято** коми́ссией. — The decision was taken by the commission.
Short participles stay short in predicates; long forms only inside noun phrases (на́писанное письмо́).`,
          examples: [
            { ru: "Дома' постро'ены в про'шлом ве'ке.", en: "The houses were built in the last century." },
          ],
          tip: "Only perfective passives have short forms (напи́сано). Imperfective passives use -ся: Письмо́ пи́шется (is being written).",
        },
      ],
      exercises: [
        {
          id: "b2-u03-l1-e1",
          type: "single",
          text: "Зако́н был ___ парла́ментом. (приня́ть)",
          options: [{ id: "a", label: "принят" }, { id: "b", label: "принятый" }], answer: "a"
        },
        {
          id: "b2-u03-l1-e2",
          type: "single",
          text: "Письмо́ ___ се́йчас. (is being written — imperfective)",
          options: [{ id: "a", label: "пишется" }, { id: "b", label: "написано" }], answer: "a"
        },
      ],
      drills: [{ kind: "cloze", count: 4 }],
    },
  ],

  test: [
    {
      id: "b2-u03-test-1",
      type: "single",
      text: "Мост ___ в 2010 году́. (was built)",
      options: [{ id: "a", label: "был построен" }, { id: "b", label: "строился" }], answer: "a"
    },
    {
      id: "b2-u03-test-2",
      type: "short-answer",
      text: "The decision was taken: (Реше́ние…)",
      answer: "решение было принято",
    },
    {
      id: "b2-u03-test-3",
      type: "true-false",
      text: "Agent goes instrumental: «напи́сано писа́телем».",
      answer: true,
    },
  ],
};
