import type { Unit } from "@/lib/curriculum/types";

/** C1 · Unit 9 — Idiomatic constructions + Unit 10 integrated prep. */
export const u09: Unit = {
  id: "c1-u09",
  level: "c1",
  number: 9,
  title: "Idiomatic grammar constructions",
  topicIds: ["c1-u09-idiomatic-constructions"],
  lessons: [
    {
      id: "c1-u09-l1",
      title: "не успел…как, стоит…чтобы, достаточно…чтобы, чем…тем",
      topicIds: ["c1-u09-idiomatic-constructions"],
      vocab: ["успеть", "стоить", "достаточно", "достаточный", "незамедлительно", "немедленно", "как только", "лишь только", "едва", "только"],
      grammar: [
        {
          title: "Four frames every fluent speaker owns",
          body: `- **Не успе́л + past, как + past** — had barely done X when Y: Не успе́л я сесть, как телефо́н зазвони́л.
- **Сто́ит + infinitive, и / что́бы** — all it takes: Сто́ит попроси́ть, и он помо́жет.
- **Доста́точно + infinitive, что́бы** — it's enough to: Доста́точно оди́н раз попа́сть, что́бы полюби́ть.
- **Чем + comparative, тем + comparative** — the more, the more.`,
          table: {
            headers: ["Frame", "Meaning"],
            rows: [
              ["не успел…, как", "had barely… when"],
              ["стоит…, и", "all it takes… and"],
              ["достаточно…, чтобы", "enough to…"],
              ["чем…, тем…", "the more…, the more…"],
            ],
          },
        },
      ],
      exercises: [
        {
          id: "c1-u09-l1-e1",
          type: "single",
          text: "Не успе́л я ___, как пошёл дождь.",
          options: [{ id: "a", label: "выйти" }, { id: "b", label: "вышел" }], answer: "a"
        },
        {
          id: "c1-u09-l1-e2",
          type: "single",
          text: "___ попроси́ть, и он согласи́тся.",
          options: [{ id: "a", label: "Стоит" }, { id: "b", label: "Достаточно" }], answer: "a"
        },
        {
          id: "c1-u09-l1-e3",
          type: "fill-blank",
          text: "___ одного́ раза, что́бы привы́кнуть. *(It takes once — достаточно)*",
          answers: ["Достаточно"],
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
  ],

  test: [
    {
      id: "c1-u09-test-1",
      type: "single",
      text: "Не успе́ли мы ___ , как гостей прибыло.",
      options: [{ id: "a", label: "сесть" }, { id: "b", label: "сели" }], answer: "a"
    },
    {
      id: "c1-u09-test-2",
      type: "short-answer",
      text: "The sooner the better: (Чем…, тем…)",
      answer: "чем раньше тем лучше",
    },
    {
      id: "c1-u09-test-3",
      type: "single",
      text: "«Доста́точно наме́кнуть, ___ он всё поймёт.»",
      options: [{ id: "a", label: "чтобы" }, { id: "b", label: "и" }], answer: "b",
      explanation: "достаточно… и = enough … and; both и/чтобы occur, и here with future.",
    },
  ],
};
