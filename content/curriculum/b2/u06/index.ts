import type { Unit } from "@/lib/curriculum/types";

/** B2 · Unit 6 — Conditionals II: как ни, сколько бы ни + mixed. */
export const u06: Unit = {
  id: "b2-u06",
  level: "b2",
  number: 6,
  title: "Conditionals II: concessives and mixed time",
  topicIds: ["b2-u06-conditionals-2"],
  lessons: [
    {
      id: "b2-u06-l1",
      title: "как ни, что бы ни, сколько бы ни",
      topicIds: ["b2-u06-conditionals-2"],
      vocab: ["сопротивляться", "напрасно", "равно", "случаться", "стараться", "усердно", "упрямый", "аргумент", "спорить", "всё"],
      grammar: [
        {
          title: "Concessive бы",
          body: `Russian conditional sentences with хотя́/если concessions contrast with English by keeping the verb in the past even for present meaning: Хотя́ было хо́лодно, мы вы́шли. The concession concedes a FACT, then the main clause insists anyway.

Russian conditional sentences with хотя́/если concessions contrast with English by keeping the verb in the past even for present meaning: Хотя́ было хо́лодно, мы вы́шли. The concession concedes a FACT, then the main clause insists anyway.

**Как (кто/что/где/когда/сколько) ни + past** = no matter how/what…:
- Как ни старайся, не получится. — No matter how hard you try…
- Что бы ни случи́лось, звони́. — Whatever happens, call me.
- Ско́лько бы он ни рабо́тал… — However much he worked…
Note: **что бы ни** is two words (бы + ни); compare **чтобы** (in order to).`,
          plain: `To say no matter what or however much, take the question word, add ни, and put the verb in its past form. Что бы ни случилось — whatever happens, the rule holds.`,
          why: "Concession is argumentation: you grant the opposing fact, then override it. Russian packages the grant in хотя́/хоть + indicative, and the override in but-word (но, зато́). Unlike unreal conditionals, there is no бы here — the conceded fact is real.",
          examples: [
            { ru: "Ско'лько бы мы ни спо'рили, он на своём.", en: "However much we argue, he sticks to his guns." },
          ],
        },
      ],
      exercises: [
        {
          id: "b2-u06-l1-e1",
          type: "single",
          text: "___ бы ни было, звони́ мне.",
          options: [{ id: "a", label: "Что" }, { id: "b", label: "Чтобы" }], answer: "a"
        },
        {
          id: "b2-u06-l1-e2",
          type: "single",
          text: "Как ___ старайся, не помо́жет.",
          options: [{ id: "a", label: "ни" }, { id: "b", label: "не" }], answer: "a"
        },
        {
          id: "b2-u06-l1-e3",
          type: "true-false",
          text: "«Как ни крути» = whatever way you look at it.",
          answer: true,
        },
      ],
      drills: [{ kind: "cloze", count: 4 }],
    },
  ],

  test: [
    {
      id: "b2-u06-test-1",
      type: "single",
      text: "___ бы ни шёл дождь, мы вышли.",
      options: [{ id: "a", label: "Хоть" }, { id: "b", label: "Несмотря" }], answer: "a",
      explanation: "Хоть + past = even though (colloquial concessive).",
    },
    {
      id: "b2-u06-test-2",
      type: "short-answer",
      text: "Whatever happens: (___ бы ни случи́лось)",
      answer: "что",
    },
    {
      id: "b2-u06-test-3",
      type: "true-false",
      text: "«сколько бы ни» takes past tense after it.",
      answer: true,
    },
  ],
};
