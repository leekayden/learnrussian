import type { Unit } from "@/lib/curriculum/types";

/** C1 · Unit 10 — Integrated transformations before the C1 exam. */
export const u10: Unit = {
  id: "c1-u10",
  level: "c1",
  number: 10,
  title: "Transformations: say the same thing five ways",
  topicIds: ["c1-u10-transformations"],
  lessons: [
    {
      id: "c1-u10-l1",
      title: "Rewriting workshop",
      topicIds: ["c1-u10-transformations"],
      vocab: ["превращаться", "превратить", "заменить", "заменять", "перефразировать", "сократить", "расширить", "упростить", "уточнить", "обобщить"],
      grammar: [
        {
          title: "Same meaning, different grammar",
          body: `Transformation drills across everything you know:
- Relative clause → participle: «студе́нты, кото́рые сдали́ экза́мен» → «стуле́нты, сдавшие экза́мен»
- Clause → verbal adverb: «Когда́ он уви́дел нас, он улы́бнулся» → «Уви́дев нас, он улы́бнулся»
- Personal → impersonal: «Я хочу́ спать» → «Мне хо́чется спать»
- Active → passive: «Заво́д вы́пускает авто́мобили» → «Автомоби́ли выпуска́ются заво́дом»`,
          examples: [
            { ru: "Хотя' шёл дождь, матч состоя'лся. = Несмотря' на дождь, матч состоя'лся.", en: "Although it rained, the match went ahead. = Despite the rain…" },
          ],
          tip: "Check agreement every time you transform — number, gender, case. Transformations break where agreement slips.",
        },
      ],
      exercises: [
        {
          id: "c1-u10-l1-e1",
          type: "single",
          text: "Participle version: «де'ти, кото'рые игра'ют» →",
          options: [{ id: "a", label: "играющие дети" }, { id: "b", label: "игравшие дети" }], answer: "a"
        },
        {
          id: "c1-u10-l1-e2",
          type: "single",
          text: "Impersonal version of «Я не спал»:",
          options: [{ id: "a", label: "Мне не спалось" }, { id: "b", label: "Я не поспал" }], answer: "a"
        },
        {
          id: "c1-u10-l1-e3",
          type: "single",
          text: "Passive: «Писа'тель написа'л рома'н» →",
          options: [{ id: "a", label: "Роман написан писателем" }, { id: "b", label: "Роман написал писателя" }], answer: "a"
        },
      ],
      drills: [
        { kind: "conjugation", count: 4 },
        { kind: "noun-case", count: 4 },
        { kind: "adjective-case", count: 2 },
      ],
    },
  ],

  test: [
    {
      id: "c1-u10-test-1",
      type: "single",
      text: "«Мне хо́чется спать» = «Я ___».",
      options: [{ id: "a", label: "хочу спать" }, { id: "b", label: "хочется спать" }], answer: "a"
    },
    {
      id: "c1-u10-test-2",
      type: "short-answer",
      text: "Participle: «поезд, кото́рый прихо́дит в де́вять» → «поезд, ___ в де́вять»",
      answer: "приходящий",
    },
    {
      id: "c1-u10-test-3",
      type: "short-answer",
      text: "Verbal adverb: «Когда́ она́ уви́дела нас, она́ замолча́ла» → «___, она́ замолча́ла»",
      answer: "увидев нас",
    },
  ],
};
