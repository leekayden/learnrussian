import type { Unit } from "@/lib/curriculum/types";

/** C1 · Unit 9 — Idiomatic constructions, one step at a time. */
export const u09: Unit = {
  id: "c1-u09",
  level: "c1",
  number: 9,
  title: "Idiomatic grammar constructions",
  topicIds: ["c1-u09-idiomatic-constructions"],
  lessons: [
    {
      id: "c1-u09-l1",
      title: "Step 1: не успе́л…, как / сто́ит…, и",
      topicIds: ["c1-u09-idiomatic-constructions"],
      vocab: ["успеть", "стоить", "незамедлительно", "немедленно", "как только", "лишь только", "едва", "только", "телефон", "зазвонить"],
      grammar: [
        {
          title: "Barely…and all it takes…and",
          body: `The frame не успе́л + past, как + past: Не успе́л я сесть, как телефо́н зазвони́л — had barely sat down when the phone rang. Both verbs perfective past; the как-clause is the interruption.

- **Не успе́л + past, как + past** — had barely done X when Y: Не успе́л я сесть, как телефо́н зазвони́л.
- **Сто́ит + infinitive, и** — all it takes: Сто́ит попроси́ть, и он помо́жет.
The first frame pairs perfective past with perfective past; the second pairs infinitive with future.`,
          plain: `These frames are how Russians tell quick-fire stories: No sooner had I…, All it takes is…. Nail them and your storytelling instantly sounds more native.`,
          why: "The frame is a fixed two-part mould: first the interrupted action, then the interruption with как. Fossilised syntax — learn the chunk whole, not word by word.",

          table: {
            headers: ["Frame", "Meaning"],
            rows: [
              ["не успел…, как", "had barely… when"],
              ["стоит…, и", "all it takes… and"],
            ],
          },
        },
      ],
      exercises: [
        {
          id: "c1-u09-l1-e1",
          type: "single",
          text: "Не успе́л я ___, как пошёл дождь.",
          options: [{ id: "a", label: "выйти" }, { id: "b", label: "вышел" }], answer: "a",
        },
        {
          id: "c1-u09-l1-e2",
          type: "single",
          text: "___ попроси́ть, и он согласи́тся.",
          options: [{ id: "a", label: "Стоит" }, { id: "b", label: "Достаточно" }], answer: "a",
        },
        {
          id: "c1-u09-l1-e3",
          type: "true-false",
          text: "«Не успе́л я сесть» uses the infinitive after успе́л.",
          answer: false,
          explanation: "Past: не успе́л я СЕЛ… no — the frame is «не успел + infinitive»: не успел сесть.",
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
    {
      id: "c1-u09-l2",
      title: "Step 2: доста́точно…, что́бы / чем…, тем…",
      topicIds: ["c1-u09-idiomatic-constructions"],
      vocab: ["достаточно", "достаточный", "намекнуть", "привыкнуть", "попасть", "полюбить", "раньше", "лучше", "больше", "легче"],
      grammar: [
        {
          title: "Enough to…and the more…the more…",
          body: `The frame сто́ит + infinitive, и: Сто́ит попроси́ть, и он помо́жет — all it takes is asking, and he helps. Infinitive first, future second.

- **Доста́точно + infinitive, что́бы / и** — it's enough to: Доста́точно оди́н раз попа́сть, что́бы полюби́ть.
- **Чем + comparative, тем + comparative** — the more, the more: Чем бо́льше, тем лу́чше.`,
          plain: `Чем…, тем… maps onto the more…, the more… almost word for word — the one frame you can build by feel. Достаточно…, чтобы is its cousin: one small action, and the result follows.`,
          why: "Стои́t here is impersonal ('it is worth'), so no subject appears; the и-clause then states the automatic consequence in the future. The pair достато́чно…, что́бы works the same way with sufficiency instead of minimal effort.",

          table: {
            headers: ["Frame", "Meaning"],
            rows: [
              ["достаточно…, чтобы", "enough to…"],
              ["чем…, тем…", "the more…, the more…"],
            ],
          },
          tip: "достаточно… и + future works too: Доста́точно намекну́ть, и он всё поймёт.",
        },
      ],
      exercises: [
        {
          id: "c1-u09-l2-e1",
          type: "single",
          text: "«Доста́точно наме́кнуть, ___ он всё поймёт.»",
          options: [{ id: "a", label: "и" }, { id: "b", label: "что" }], answer: "a",
          explanation: "достаточно… и + future = enough … and he'll understand.",
        },
        {
          id: "c1-u09-l2-e2",
          type: "short-answer",
          text: "The sooner the better: (Чем…, тем…)",
          answer: "чем раньше тем лучше",
        },
        {
          id: "c1-u09-l2-e3",
          type: "true-false",
          text: "«достаточно…, чтобы» can take either чтобы+past or и+future.",
          answer: true,
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
  ],

  test: [
    {
      id: "c1-u09-test-1", type: "single",
      text: "Не успе́ли мы ___ , как гости́ прие́хали.",
      options: [{ id: "a", label: "сесть" }, { id: "b", label: "сели" }], answer: "a",
    },
    {
      id: "c1-u09-test-2", type: "short-answer",
      text: "The sooner the better: (Чем…, тем…)",
      answer: "чем раньше тем лучше",
    },
    {
      id: "c1-u09-test-3", type: "single",
      text: "«Доста́точно наме́кнуть, ___ он всё поймёт.»",
      options: [{ id: "a", label: "чтобы" }, { id: "b", label: "и" }], answer: "b",
      explanation: "достаточно… и + future; чтобы + past also occurs but и fits here.",
    },
  ],
};
