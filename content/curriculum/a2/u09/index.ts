import type { Unit } from "@/lib/curriculum/types";

/** A2 · Unit 9 — Motion verbs I, one step at a time. */
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
          body: `- **идти́** — on foot, right now, one direction: Я иду́ в шко́лу.
- **ходи́ть** — on foot, habitually / round trips: Я хожу́ в шко́лу.
- **е́хать** — by vehicle, now: Я е́ду домо́й.
- **е́здить** — by vehicle, habitually: Я е́зжу на рабо́ту.`,
          table: {
            headers: ["", "one direction (now)", "habitual / round trips"],
            rows: [
              ["on foot", "идти", "ходить"],
              ["by vehicle", "ехать", "ездить"],
            ],
          },
          tip: "Round trip = там AND back → ходить/ездить. One journey in progress → идти/ехать.",
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
          body: `- идти́: иду́, идёшь, идёт, идём, идёте, иду́т
- е́хать: е́ду, е́дешь, е́дет, е́дем, е́дете, е́дут
- ходи́ть: хожу́, хо́дишь, хо́дит, хо́дим, хо́дите, хо́дят
- е́здить: е́зжу, е́здишь, е́здит, е́здим, е́здите, е́здят`,
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
          body: `- **на + prepositional**: на авто́бусе, на метро́, на маши́не, на по́езде, на самолё́те, на та́кси
- **пешко́м** = on foot (adverb — no preposition!)
Destination: в/на + accusative — Я е́ду **в Казань на по́езде**.`,
          examples: [
            { ru: "Она' прие'хала на та-кси.", en: "She arrived by taxi." },
          ],
          tip: "Fixed: на метро́ (never в метро́); на по́езде; but в маши́не = inside the car (location).",
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
          body: `- **пойти́ / пое́хать** = set off, go (one complete trip):
- Мы **пойдём** в кино́? — Shall we go?
- Она́ **по́ехала** домо́й. — She set off home.
- **Дава́й пойдём гуля́ть!** — Let's go for a walk!`,
          examples: [
            { ru: "Дава'й пойдём гуля'ть!", en: "Let's go for a walk!" },
          ],
          tip: "по- makes them perfective: future meaning or one completed departure.",
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
