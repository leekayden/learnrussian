import type { Unit } from "@/lib/curriculum/types";

/**
 * A2 · Unit 9 — Motion verbs I, one step at a time. Notes v2:
 * elaborate explanations, English contrasts, reasoning callouts.
 */
export const u09: Unit = {
  id: "a2-u09",
  level: "a2",
  number: 9,
  title: "Motion verbs I: идти or ехать?",
  topicIds: ["a2-u09-motion-1"],
  lessons: [
    {
      id: "a2-u09-l1",
      title: "Step 1: the four-verb grid",
      topicIds: ["a2-u09-motion-1"],
      vocab: ["идти", "ходить", "ехать", "ездить", "пешком", "автобус", "машина", "метро", "поезд", "такси"],
      grammar: [
        {
          title: "Direction × transport",
          body: `English has one verb — *to go* — and lets context do the rest. Russian refuses to be vague: it forces you to specify **two facts** about every journey before you can even open your mouth.

**Fact 1: on foot or by vehicle?** Идти́/ходи́ть are for walking; е́хать/е́здить are for any transport — car, bus, train, bike, horse.

**Fact 2: one direction or round trip?** Идти́/е́хать describe motion **in progress right now** or **one single journey**: Я иду́ в шко́лу (I'm on my way). Ходи́ть/е́здить describe **habits and round trips** — there AND back: Я хожу́ в шко́лу (I attend school), Я е́зжу на рабо́ту (I commute).

So «Я е́зжу в Москву́» does not mean "I'm driving to Moscow" — it means you make that trip repeatedly. And «Я иду́ в кино́» means you are literally on your way, foot-powered, this minute.`,
          why: `Why four verbs where English needs one? Russian divides motion along two axes that matter grammatically: the *mode* (foot vs vehicle) and the *shape* of the journey (single vector vs repeated circuit). The round-trip verbs exist because the question "how do you get to work?" is about a recurring circuit, not a one-time vector — a distinction English speakers feel but never had to encode.`,
          table: {
            headers: ["", "one direction (now)", "habitual / round trips"],
            rows: [
              ["on foot", "идти", "ходить"],
              ["by vehicle", "ехать", "ездить"],
            ],
          },
          examples: [
            { ru: "Смотри', она' идёт к нам!", en: "Look — she's coming toward us! One vector, on foot, unfolding now." },
            { ru: "Я е'зжу к роди'телям раз в ме'сяц.", en: "I visit my parents once a month — a recurring circuit, by transport." },
          ],
          tip: "The classic error: «Я е́ду на рабо́ту на метро́» said as a general habit. If you *always* take the metro, you е́здите. Reserve е́ду for the journey happening today — «Сего́дня я е́ду на рабо́ту пешко́м, метро́ закры́то».",
        },
      ],
      exercises: [
        {
          id: "a2-u09-l1-e1",
          type: "single",
          text: "Я ___ на рабо́ту на маши́не. (regularly)",
          options: [{ id: "a", label: "езжу" }, { id: "b", label: "еду" }], answer: "a",
        },
        {
          id: "a2-u09-l1-e2",
          type: "single",
          text: "Смотри́ — он ___ к нам! (now, on foot)",
          options: [{ id: "a", label: "идёт" }, { id: "b", label: "ходит" }], answer: "a",
        },
        {
          id: "a2-u09-l1-e3",
          type: "true-false",
          text: "«Я е́ду в Москву́» = I'm on my way to Moscow.",
          answer: true,
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
    {
      id: "a2-u09-l2",
      title: "Step 2: conjugating the motion verbs",
      topicIds: ["a2-u09-motion-1"],
      vocab: ["бежать", "плыть", "лететь", "ехать", "идти", "ходить", "ездить", "дорога", "улица", "светофор"],
      grammar: [
        {
          title: "All four conjugated",
          body: `Here are the four base verbs in full. Notice that идти́ and е́хать are both irregular-but-predictable: иду́ keeps its д, е́ду keeps its е — and the endings are the ones you already know.

- **идти́**: иду́, идёшь, идёт, идём, идёте, иду́т (ё marks the stress)
- **е́хать**: е́ду, е́дешь, е́дет, е́дем, е́дете, е́дут
- **ходи́ть**: хожу́, хо́дишь, хо́дит, хо́дим, хо́дите, хо́дят (ш appears in я!)
- **е́здить**: е́зжу, е́здишь, е́здит, е́здим, е́здите, е́здят

Later you will meet their siblings — бежать́ (run), плыть (swim), лете́ть (fly) — which follow the same logic but keep their own quirks. The grid above is the core investment; everything else builds on it.`,
          why: `The -ш- in хожу́ is the same consonant history you met with писа́ть → пишу́: an old *х* softened toward ш before the personal ending. And ё in идёшь is not decoration — ё is always stressed in Russian, so these forms announce themselves loudly in speech, which is exactly what motion verbs do in conversation.`,
          table: {
            headers: ["Person", "идти", "ехать"],
            rows: [
              ["я", "иду", "еду"],
              ["ты", "идёшь", "едешь"],
              ["они", "идут", "едут"],
            ],
          },
        },
      ],
      exercises: [
        {
          id: "a2-u09-l2-e1",
          type: "fill-blank",
          text: "Мы ___ в музе́й. *(on foot, now)*",
          answers: ["идём"],
        },
        {
          id: "a2-u09-l2-e2",
          type: "fill-blank",
          text: "Ты ___ бы́стро! *(ride)*",
          answers: ["едешь"],
        },
        {
          id: "a2-u09-l2-e3",
          type: "true-false",
          text: "«они́ е́дут» is the correct form.",
          answer: true,
        },
      ],
      drills: [{ kind: "conjugation", count: 4, slots: ["presfut_sg1", "presfut_sg2", "presfut_pl3"] }],
    },
    {
      id: "a2-u09-l3",
      title: "Step 3: by bus, on foot, in a car",
      topicIds: ["a2-u09-motion-1"],
      vocab: ["автобус", "машина", "пешком", "поезд", "самолёт", "метро", "такси", "приехать", "уехать", "поездка"],
      grammar: [
        {
          title: "Means of transport",
          body: `To say **how** you travel, Russian puts the transport into the prepositional after **на**: на авто́бусе, на метро́, на маши́не, на по́езде, на самолё́те, на та́кси. Walking is the exception — **пешко́м** is a pure adverb with no preposition at all: Я пришёл пешко́м.

The destination keeps the rule from Unit 2: в/на + accusative. So a full journey is two case decisions stacked: **Я е́ду в Казань на по́езде** (to Kazan — accusative; by train — prepositional).

Watch the fine print: **на метро́** never becomes «в метро́» when talking about means of travel, but «в метро́» is fine for *location inside the system* («в метро́ хо́лодно»). And на та́кси means riding by taxi; в такси́ means sitting inside one.`,
          why: `Why «на» for transport? Historically you climbed *onto* vehicles — they were platforms, not boxes. Trains and buses still work that way (на по́езде, на авто́бусе — you get ON). Cars are the modern loophole: на маши́не treats the car as a means, в маши́не treats it as a box you sit inside. The preposition remembers when vehicles stopped being open-air.`,
          table: {
            headers: ["Phrase", "Meaning"],
            rows: [
              ["на автобусе", "by bus"],
              ["на метро", "by metro"],
              ["пешком", "on foot"],
              ["в такси", "inside the taxi (location)"],
            ],
          },
        },
      ],
      exercises: [
        {
          id: "a2-u09-l3-e1",
          type: "single",
          text: "Она́ прие́хала ___.",
          options: [{ id: "a", label: "на поезде" }, { id: "b", label: "в поезде" }], answer: "a",
        },
        {
          id: "a2-u09-l3-e2",
          type: "fill-blank",
          text: "Я приду́ ___. *(on foot)*",
          answers: ["пешком"],
        },
        {
          id: "a2-u09-l3-e3",
          type: "true-false",
          text: "«на метро́» is the standard phrase.",
          answer: true,
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
    {
      id: "a2-u09-l4",
      title: "Step 4: пойти / поехать — setting off",
      topicIds: ["a2-u09-motion-1"],
      vocab: ["пойти", "поехать", "гулять", "прогуляться", "давай", "давайте", "сначала", "потом", "билет", "вокзал"],
      grammar: [
        {
          title: "по- = one whole trip (perfective)",
          body: `Add **по-** to идти́ and е́хать and you get their perfective partners: **пойти́** and **пое́хать** — to set off, to make one complete trip. They carry future meaning or a single completed departure:

- Мы **пойдём** в кино́? — Shall we go to the movies? (one planned trip)
- Она́ **по́ехала** домо́й. — She headed home. (one departure, completed)

In invitations they are unbeatable: **Дава́й пойдём гуля́ть!** — Let's go for a walk! The по- prefix promises a beginning and an end, which is what an invitation needs.`,
          why: `Why does по- make the trip "complete"? По- is the prefix of *setting a boundary* — it appears all over Russian marking actions with a finish line (поесть = have a bite, попить = have a drink). Пойти́ frames the journey as one bounded event: you leave, you arrive, done. That is why it loves future tense and invitations.`,
          table: {
            headers: ["Imperfective", "Perfective", "Feel"],
            rows: [
              ["идти в кино", "пойти в кино", "was heading vs will head off"],
              ["ехать домой", "поехать домой", "was riding vs set off home"],
            ],
          },
        },
      ],
      exercises: [
        {
          id: "a2-u09-l4-e1",
          type: "single",
          text: "Дава́йте ___ в кафе́!",
          options: [{ id: "a", label: "пойдём" }, { id: "b", label: "ходим" }], answer: "a",
        },
        {
          id: "a2-u09-l4-e2",
          type: "single",
          text: "Она́ ___ домо́й в шесть. (set off)",
          options: [{ id: "a", label: "поехала" }, { id: "b", label: "ездила" }], answer: "a",
        },
        {
          id: "a2-u09-l4-e3",
          type: "ordering",
          text: "Build: **I go to work on foot.**",
          items: [
            { id: "1", label: "Я" }, { id: "2", label: "хожу" }, { id: "3", label: "на работу" }, { id: "4", label: "пешком" },
          ],
          answer: ["1", "2", "3", "4"],
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
  ],

  test: [
    {
      id: "a2-u09-test-1", type: "single",
      text: "Куда́ ты ___? — В аптеку, рядом. (on foot, now)",
      options: [{ id: "a", label: "идёшь" }, { id: "b", label: "ездишь" }], answer: "a",
    },
    {
      id: "a2-u09-test-2", type: "single",
      text: "Я обы́чно ___ на рабо́ту на метро́.",
      options: [{ id: "a", label: "езжу" }, { id: "b", label: "еду" }], answer: "a",
    },
    {
      id: "a2-u09-test-3", type: "short-answer",
      text: "Translate: We went to the cinema yesterday. (perfective)",
      answer: "мы вчера пошли в кино",
      accept: ["вчера мы пошли в кино"],
    },
    {
      id: "a2-u09-test-4", type: "fill-blank",
      text: "Она́ прие́хала ___ самолё́те.",
      answers: ["на"],
    },
    {
      id: "a2-u09-test-5", type: "true-false",
      text: "ходи́ть/е́здить describe habitual or round-trip motion.",
      answer: true,
    },
    {
      id: "a2-u09-test-6", type: "ordering",
      text: "Build: **I go to work on foot.**",
      items: [
        { id: "1", label: "Я" }, { id: "2", label: "хожу" }, { id: "3", label: "на работу" }, { id: "4", label: "пешком" },
      ],
      answer: ["1", "2", "3", "4"],
    },
  ],
};
