import type { Unit } from "@/lib/curriculum/types";

/** B1 · Unit 9 — Verbal adverbs (деепричастия). */
export const u09: Unit = {
  id: "b1-u09",
  level: "b1",
  number: 9,
  title: "Verbal adverbs: doing while doing",
  topicIds: ["b1-u09-verbal-adverbs"],
  lessons: [
    {
      id: "b1-u09-l1",
      title: "Imperfective -я, perfective -в / -вши",
      topicIds: ["b1-u09-verbal-adverbs"],
      vocab: ["читать", "гулять", "сидеть", "слушать", "улыбаться", "вернуться", "увидеть", "открыть", "закрыть", "прощаться"],
      grammar: [
        {
          title: "Two formations, one job",
          body: `A verbal adverb (дееприча́стие) says what the SUBJECT was doing while the main verb happened:
- **Imperfective: -я** (present stem + я): чита́я (while reading), гуля́я, улыба́ясь
- **Perfective: -в / -вши**: прочита́в (having read), уви́дев, верну́вшись
«Она́ вошла́, улыба́ясь» = She came in smiling. «Прочита́в письмо́, он сжёг его» = Having read the letter, he burned it.`,
          table: {
            headers: ["Verb", "Verbal adverb", "Aspect"],
            rows: [
              ["читать", "читая", "imperfective"],
              ["улыбаться", "улыбаясь", "imperfective"],
              ["прочитать", "прочитав", "perfective"],
              ["вернуться", "вернувшись", "perfective"],
            ],
          },
          tip: "The subject of the verbal adverb MUST be the subject of the main verb. «Читая книгу, мне понравилась сцена» is wrong — who was reading?",
        },
      ],
      exercises: [
        {
          id: "b1-u09-l1-e1",
          type: "single",
          text: "___ письмо́, она́ написа́ла отве́т. (having received)",
          options: [{ id: "a", label: "Получив" }, { id: "b", label: "Получая" }], answer: "a"
        },
        {
          id: "b1-u09-l1-e2",
          type: "single",
          text: "Он шёл, ___ с прохо́жими. (greeting — habitual process)",
          options: [{ id: "a", label: "здороваясь" }, { id: "b", label: "поздоровавшись" }], answer: "a"
        },
        {
          id: "b1-u09-l1-e3",
          type: "true-false",
          text: "Perfective verbal adverbs end in -в or -вши.",
          answer: true,
        },
      ],
      drills: [{ kind: "cloze", count: 4 }],
    },
  ],

  test: [
    {
      id: "b1-u09-test-1",
      type: "single",
      text: "Verbal adverb of уви́деть:",
      options: [{ id: "a", label: "увидев" }, { id: "b", label: "видя" }], answer: "a"
    },
    {
      id: "b1-u09-test-2",
      type: "single",
      text: "Он сиде́л, ___ в окно́. (looking)",
      options: [{ id: "a", label: "глядя" }, { id: "b", label: "глянув" }], answer: "a"
    },
    {
      id: "b1-u09-test-3",
      type: "true-false",
      text: "«Прочита́в кни́гу, я пошёл спать» — correct sequence of actions.",
      answer: true,
    },
    {
      id: "b1-u09-test-4",
      type: "short-answer",
      text: "Make a verbal adverb: занима́ться → ___ спо́ртом, он чувствует себя хорошо́",
      answer: "занимаясь",
    },
  ],
};
