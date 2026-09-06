import type { Unit } from "@/lib/curriculum/types";

/** A2 · Unit 9 — Verbs of motion I: on foot vs by vehicle. */
export const u09: Unit = {
  id: "a2-u09",
  level: "a2",
  number: 9,
  title: "Motion verbs I: идти or ехать?",
  topicIds: ["a2-u09-motion-1"],
  lessons: [
    {
      id: "a2-u09-l1",
      title: "Two dimensions: direction × transport",
      topicIds: ["a2-u09-motion-1"],
      vocab: [
        "идти",
        "ходить",
        "ехать",
        "ездить",
        "пойти",
        "поехать",
        "автобус",
        "метро",
        "пешком",
        "машина",
      ],
      grammar: [
        {
          title: "The four basic motion verbs",
          body: `Russian splits "to go" into:
- **идти́** — to go on foot, RIGHT NOW, in one direction: Я иду́ в шко́лу.
- **ходи́ть** — to go on foot, habitually / back and forth: Я хожу́ в шко́лу (I attend school).
- **е́хать** — to go by vehicle, now, one direction: Я е́ду домо́й.
- **е́здить** — to go by vehicle, habitually / multidirectional: Я е́зжу на рабо́ту на метро́.`,
          table: {
            headers: ["", "one direction (now)", "habitual / round trips"],
            rows: [
              ["on foot", "идти", "ходить"],
              ["by vehicle", "ехать", "ездить"],
            ],
          },
          examples: [
            { ru: "Куда' ты идёшь? — В магази'н.", en: "Where are you going (on foot)? — To the shop." },
            { ru: "Я е'зжу на рабо'ту на авто'бусе.", en: "I go to work by bus." },
          ],
          tip: "Use идти/ехать for ONE journey in progress or about to happen; ходить/ездить for regular trips and round trips (there AND back).",
        },
        {
          title: "Conjugation: иду vs еду",
          body: `идти́: иду́, идёшь, идёт, идём, идёте, иду́т.
е́хать: е́ду, е́дешь, е́дет, е́дем, е́дете, е́дут.
ходи́ть: хожу́, хо́дишь, хо́дит, хо́дим, хо́дите, хо́дят.
е́здить: е́зжу, е́здишь, е́здит, е́здим, е́здите, е́здят.`,
        },
      ],
      exercises: [
        {
          id: "a2-u09-l1-e1",
          type: "single",
          text: "Я ___ на рабо́ту на маши́не. (regularly)",
          options: [
            { id: "a", label: "еду" },
            { id: "b", label: "езжу" },
          ],
          answer: "b",
        },
        {
          id: "a2-u09-l1-e2",
          type: "single",
          text: "Смотри́ — он ___ к нам! (right now, on foot)",
          options: [
            { id: "a", label: "идёт" },
            { id: "b", label: "ходит" },
          ],
          answer: "a",
        },
        {
          id: "a2-u09-l1-e3",
          type: "fill-blank",
          text: "Мы ___ в музе́й. *(We are walking to the museum. — one direction, on foot)*",
          answers: ["идём"],
        },
        {
          id: "a2-u09-l1-e4",
          type: "true-false",
          text: "«Я е́ду в Москву́» = I'm on my way to Moscow (by transport).",
          answer: true,
        },
      ],
      drills: [
        { kind: "conjugation", count: 4, slots: ["presfut_sg1", "presfut_sg2", "presfut_pl3"] },
        { kind: "cloze", count: 2 },
      ],
    },
    {
      id: "a2-u09-l2",
      title: "Пойти́ / пое́хать and motion + time",
      topicIds: ["a2-u09-motion-1"],
      vocab: [
        "гулять",
        "прогуляться",
        "ехать",
        "уехать",
        "приехать",
        "поездка",
        "путешествие",
        "билет",
        "вокзал",
        "аэропорт",
      ],
      grammar: [
        {
          title: "Deciding to go: по- prefix",
          body: `**пойти́ / пое́хать** (perfective!) = to set off, go (one whole trip):
- Мы **пойдём** в кино́? — Shall we go to the cinema?
- Она́ **по́ехала** домо́й. — She set off home.
After по- the verb is perfective: future meaning or one completed departure.`,
          examples: [
            { ru: "Дава'й пойдём гуля'ть!", en: "Let's go for a walk!" },
          ],
        },
        {
          title: "By bus, on foot, in a car",
          body: `- **на + prepositional** for transport: на авто́бусе, на метро́, на маши́не, на по́езде, на самолё́те
- **пешко́м** = on foot (adverb, no preposition): Я пришёл пешко́м.
Destination: в/на + accusative — Я е́ду **в Казань на по́езде**.`,
          examples: [
            { ru: "Она' прие'хала на та-кси.", en: "She arrived by taxi." },
          ],
          tip: "FIXED: на метро́ (never в метро), на по́езде, на самолёте; but в маши́не also exists for 'inside the car' (location), на маши́не for transport-as-means.",
        },
      ],
      exercises: [
        {
          id: "a2-u09-l2-e1",
          type: "single",
          text: "Дава́йте ___ в кафе́!",
          options: [
            { id: "a", label: "пойдём" },
            { id: "b", label: "ходим" },
          ],
          answer: "a",
        },
        {
          id: "a2-u09-l2-e2",
          type: "single",
          text: "Она́ прие́хала ___.",
          options: [
            { id: "a", label: "на поезде" },
            { id: "b", label: "на поезде́" },
            { id: "c", label: "в поезде" },
          ],
          answer: "a",
        },
        {
          id: "a2-u09-l2-e3",
          type: "fill-blank",
          text: "Я приду́ {{blank}}. *(I'll come on foot.)*",
          answers: ["пешком"],
        },
        {
          id: "a2-u09-l2-e4",
          type: "true-false",
          text: "«Я е́зжал в Лондон» (colloquial е́здить past) describes a round trip: went and came back.",
          answer: true,
        },
      ],
      drills: [
        { kind: "conjugation", count: 4, slots: ["past_m", "past_f", "presfut_sg1"] },
        { kind: "cloze", count: 3 },
      ],
    },
  ],

  test: [
    {
      id: "a2-u09-test-1",
      type: "single",
      text: "Куда́ ты ___? — В аптéку, в двух шага́х. (on foot, now)",
      options: [
        { id: "a", label: "идёшь" },
        { id: "b", label: "ездишь" },
      ],
      answer: "a",
    },
    {
      id: "a2-u09-test-2",
      type: "single",
      text: "Я обы́чно ___ на рабо́ту на метро́.",
      options: [
        { id: "a", label: "еду" },
        { id: "b", label: "езжу" },
      ],
      answer: "b",
    },
    {
      id: "a2-u09-test-3",
      type: "short-answer",
      text: "Translate: (We went to the cinema yesterday. — set off, perfective, masc/neutral group)",
      answer: "мы вчера пошли в кино",
      accept: ["вчера мы пошли в кино"],
    },
    {
      id: "a2-u09-test-4",
      type: "fill-blank",
      text: "Она́ прие́хала ___ самолё́те. *(by plane)*",
      answers: ["на"],
    },
    {
      id: "a2-u09-test-5",
      type: "true-false",
      text: "ходи́ть/е́здить describe habitual or round-trip motion.",
      answer: true,
    },
    {
      id: "a2-u09-test-6",
      type: "ordering",
      text: "Build: **I go to work on foot.**",
      items: [
        { id: "1", label: "Я" },
        { id: "2", label: "хожу" },
        { id: "3", label: "на работу" },
        { id: "4", label: "пешком" },
      ],
      answer: ["1", "2", "3", "4"],
    },
  ],
};
