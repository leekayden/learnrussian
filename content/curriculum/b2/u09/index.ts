import type { Unit } from "@/lib/curriculum/types";

/** B2 · Unit 9 — Motion IV: prefixed carry verbs & metaphor. */
export const u09: Unit = {
  id: "b2-u09",
  level: "b2",
  number: 9,
  title: "Motion IV: prefixed carry verbs",
  topicIds: ["b2-u09-motion-4"],
  lessons: [
    {
      id: "b2-u09-l1",
      title: "принести́ / привезти́ / привести́ and friends",
      topicIds: ["b2-u09-motion-4"],
      vocab: ["приносить", "принести", "привозить", "приехать", "привезти", "привести", "уносить", "увозить", "уводить", "доставить"],
      grammar: [
        {
          title: "One grid to rule them all",
          body: `Prefixes attach to all three carry pairs:
- нести́/носи́ть: принести́ (bring), унести́ (carry away), разнести́ (deliver around), перенести́ ( переносить — reschedule!)
- везти́/вози́ть: привезти́, увезти́, перевезти́ (transport across)
- вести́/води́ть: привести́ (bring a person), увести́ (lead away), отвести́ (take aside)
Metaphor: переноси́ть встре́чу (reschedule a meeting), заводи́ть друзья́ (make friends), доводи́ть до бе́зумия.`,
          examples: [
            { ru: "Он принё'с мне кофе.", en: "He brought me coffee." },
            { ru: "Встре'чу перенесли' на пя'тницу.", en: "The meeting was moved to Friday." },
          ],
        },
      ],
      exercises: [
        {
          id: "b2-u09-l1-e1",
          type: "single",
          text: "Встре́чу ___ на за́втра.",
          options: [{ id: "a", label: "перенесли" }, { id: "b", label: "принесли" }], answer: "a"
        },
        {
          id: "b2-u09-l1-e2",
          type: "single",
          text: "Гри́ша ___ но́вого сотрудника и познако́мил нас. (brought a person)",
          options: [{ id: "a", label: "привёл" }, { id: "b", label: "принёс" }], answer: "a"
        },
      ],
      drills: [{ kind: "cloze", count: 4 }],
    },
  ],

  test: [
    {
      id: "b2-u09-test-1",
      type: "single",
      text: "Заво́д ___ но́вые ста́нки. (delivers around — habitual)",
      options: [{ id: "a", label: "развозит" }, { id: "b", label: "разносит" }], answer: "a"
    },
    {
      id: "b2-u09-test-2",
      type: "single",
      text: "___ встре́чу — bad idea. (cancel→ reschedule)",
      options: [{ id: "a", label: "Переноси́ть" }, { id: "b", label: "Приноси́ть" }], answer: "a"
    },
    {
      id: "b2-u09-test-3",
      type: "true-false",
      text: "привезти́ = bring by vehicle.",
      answer: true,
    },
  ],
};
