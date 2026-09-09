import type { Unit } from "@/lib/curriculum/types";

/** C1 · Unit 10 — Integrated transformations, one step at a time. */
export const u10: Unit = {
  id: "c1-u10",
  level: "c1",
  number: 10,
  title: "Transformations: say the same thing five ways",
  topicIds: ["c1-u10-transformations"],
  lessons: [
    {
      id: "c1-u10-l1",
      title: "Step 1: clause → participle / verbal adverb",
      topicIds: ["c1-u10-transformations"],
      vocab: ["превращаться", "превратить", "заменить", "заменять", "перефразировать", "сократить", "расширить", "упростить", "уточнить", "обобщить"],
      grammar: [
        {
          title: "Compression devices",
          body: `- Relative clause → **participle**: «студе́нты, кото́рые сдали́ экза́мен» → «студе́нты, сдавшие экза́мен»
- Clause → **verbal adverb**: «Когда́ он уви́дел нас, он улы́бнулся» → «Уви́дев нас, он улы́бнулся»
Same subject required for the verbal adverb; participle agrees with its noun.`,
          examples: [
            { ru: "Де'ти, кото'рые игра'ют во дворе', шумя'т. → Де'ти, игра'ющие во дворе', шумя'т.", en: "Children playing in the yard are noisy." },
          ],
        },
      ],
      exercises: [
        {
          id: "c1-u10-l1-e1",
          type: "single",
          text: "Participle version: «де'ти, кото'рые игра'ют» →",
          options: [{ id: "a", label: "играющие дети" }, { id: "b", label: "игравшие дети" }], answer: "a",
        },
        {
          id: "c1-u10-l1-e2",
          type: "short-answer",
          text: "Verbal adverb: «Когда́ она́ уви́дела нас, она́ замолча́ла» → «___, она́ замолча́ла»",
          answer: "увидев нас",
        },
        {
          id: "c1-u10-l1-e3",
          type: "short-answer",
          text: "Participle: «поезд, кото́рый прихо́дит в де́вять» → «поезд, ___ в де́вять»",
          answer: "приходящий",
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
    {
      id: "c1-u10-l2",
      title: "Step 2: personal → impersonal / active → passive",
      topicIds: ["c1-u10-transformations"],
      vocab: ["хотеться", "спаться", "работаться", "выпускать", "выпуститься", "писатель", "роман", "написан", "завод", "трудиться"],
      grammar: [
        {
          title: "Dative experiencer and the passive turn",
          body: `- Personal → **impersonal**: «Я хочу́ спать» → «Мне хо́чется спать»; «Я не спал» → «Мне не спало́сь»
- Active → **passive**: «Заво́д вы́пускает авто́мобили» → «Автомоби́ли выпуска́ются заво́дом»; «Писа́тель написа́л рома́н» → «Рома́н на́писан писа́телем»
Check agreement after EVERY transformation — number, gender, case.`,
          table: {
            headers: ["Personal", "Impersonal"],
            rows: [
              ["Я хочу спать", "Мне хочется спать"],
              ["Я не спал", "Мне не спалось"],
            ],
          },
        },
      ],
      exercises: [
        {
          id: "c1-u10-l2-e1",
          type: "single",
          text: "Impersonal version of «Я не спал»:",
          options: [{ id: "a", label: "Мне не спалось" }, { id: "b", label: "Я не поспал" }], answer: "a",
        },
        {
          id: "c1-u10-l2-e2",
          type: "single",
          text: "Passive: «Писа'тель написа'л рома'н» →",
          options: [{ id: "a", label: "Роман написан писателем" }, { id: "b", label: "Роман написал писателя" }], answer: "a",
        },
        {
          id: "c1-u10-l2-e3",
          type: "single",
          text: "«Мне хо́чется спать» = «Я ___».",
          options: [{ id: "a", label: "хочу спать" }, { id: "b", label: "хочется спать" }], answer: "a",
        },
      ],
      drills: [
        { kind: "conjugation", count: 3 },
        { kind: "noun-case", count: 3 },
      ],
    },
  ],

  test: [
    {
      id: "c1-u10-test-1", type: "single",
      text: "«Мне хо́чется спать» = «Я ___».",
      options: [{ id: "a", label: "хочу спать" }, { id: "b", label: "хочется спать" }], answer: "a",
    },
    {
      id: "c1-u10-test-2", type: "short-answer",
      text: "Participle: «поезд, кото́рый прихо́дит в де́вять» → «поезд, ___ в де́вять»",
      answer: "приходящий",
    },
    {
      id: "c1-u10-test-3", type: "short-answer",
      text: "Verbal adverb: «Когда́ она́ уви́дела нас, она́ замолча́ла» → «___, она́ замолча́ла»",
      answer: "увидев нас",
    },
  ],
};
