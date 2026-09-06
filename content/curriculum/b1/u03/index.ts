import type { Unit } from "@/lib/curriculum/types";

/** B1 · Unit 3 — Motion III: carry verbs and idiomatic motion. */
export const u03: Unit = {
  id: "b1-u03",
  level: "b1",
  number: 3,
  title: "Motion III: carrying, leading, and idioms",
  topicIds: ["b1-u03-motion-3"],
  lessons: [
    {
      id: "b1-u03-l1",
      title: "носить / возить / вести — carrying things and people",
      topicIds: ["b1-u03-motion-3"],
      vocab: ["носить", "возить", "вести", "чемодан", "рюкзак", "груз", "перевозить", "приносить", "уносить"],
      grammar: [
        {
          title: "The third dimension: what moves",
          body: `идти/ходить = YOU move on foot. е́хать/е́здить = YOU in a vehicle.
**нести́/носи́ть** = carry on foot; **везти́/вози́ть** = carry by vehicle; **вести́/води́ть** = lead (a person, an animal, a car... вести́ маши́ну = to drive).
Same multidirectional rule: носи́ть/вози́ть/води́ть = habitually; нести́/везти́/вести́ = right now, one direction.`,
          table: {
            headers: ["", "one trip", "habitual"],
            rows: [
              ["carry (on foot)", "нести", "носить"],
              ["carry (vehicle)", "везти", "возить"],
              ["lead / drive", "вести", "водить"],
            ],
          },
          examples: [
            { ru: "Он всегда' но'сит с со'бой слова'рь.", en: "He always carries a dictionary with him." },
            { ru: "Такси' ве'зет нас в аэропо'рт.", en: "The taxi is taking us to the airport." },
          ],
          tip: "Prefix these like идти/ехать: приноси́ть/принести́ (bring), увози́ть/увезти́, приводи́ть/привести́ (bring someone).",
        },
      ],
      exercises: [
        {
          id: "b1-u03-l1-e1",
          type: "single",
          text: "Почтальо́н ___ по́чту ка́ждое у́тро. (delivers — habitual)",
          options: [{ id: "a", label: "носит" }, { id: "b", label: "несёт" }], answer: "a"
        },
        {
          id: "b1-u03-l1-e2",
          type: "single",
          text: "Смотри́, он ___ тако́й тяжёлый чемода́н!",
          options: [{ id: "a", label: "несёт" }, { id: "b", label: "носит" }], answer: "a"
        },
        {
          id: "b1-u03-l1-e3",
          type: "fill-blank",
          text: "Мой оте́ц нау́чил меня́ ___ маши́ну. *(води́ть)*",
          answers: ["водить"],
        },
      ],
      drills: [{ kind: "cloze", count: 4 }],
    },
    {
      id: "b1-u03-l2",
      title: "Idiomatic motion: вы́йти за́муж, проводи́ть вре́мя",
      topicIds: ["b1-u03-motion-3"],
      vocab: ["жениться", "выйти", "проводить", "провожать", "заходить", "переезжать", "уходить", "выходить", "выходной", "свадьба"],
      grammar: [
        {
          title: "Motion verbs that stopped moving",
          body: `- **вы́йти за́муж** (за + acc) — to marry (a woman): Она́ вы́шла за́муж за врача́.
- **жени́ться** (на + prep) — to marry (a man): Он жени́лся на Та́не.
- **проводи́ть вре́мя** — to spend time: Мы проводи́ли ле́то у мо́ря.
- **вы́ходно́й** — day off: В э́тот день у меня́ вы́ходно́й.`,
          examples: [
            { ru: "Мы хорошо' проводи'м вре'мя вме'сте.", en: "We have a good time together." },
          ],
          tip: "Outward vs inward: вы-/у- = AWAY (вы́йти из ко́мнаты), в-/при- = TOWARD (войти́ в ко́мнату).",
        },
      ],
      exercises: [
        {
          id: "b1-u03-l2-e1",
          type: "single",
          text: "Она́ вы́шла за́муж ___ журнали́ста.",
          options: [{ id: "a", label: "за журналиста" }, { id: "b", label: "за журналисте" }], answer: "a"
        },
        {
          id: "b1-u03-l2-e2",
          type: "fill-blank",
          text: "Мы проводи́м ле́то ___ мо́ря. *(at the sea)*",
          answers: ["у"],
        },
        {
          id: "b1-u03-l2-e3",
          type: "true-false",
          text: "«Он жени́лся на Та́не» uses на + prepositional.",
          answer: true,
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
  ],

  test: [
    {
      id: "b1-u03-test-1",
      type: "single",
      text: "Кто вам ___ гру́зы? (delivers by car — habitual)",
      options: [{ id: "a", label: "возит" }, { id: "b", label: "везёт" }], answer: "a"
    },
    {
      id: "b1-u03-test-2",
      type: "short-answer",
      text: "Bring me the book, please: (принеси́…)",
      answer: "принеси мне книгу пожалуйста",
    },
    {
      id: "b1-u03-test-3",
      type: "true-false",
      text: "вести́ маши́ну = to drive a car.",
      answer: true,
    },
    {
      id: "b1-u03-test-4",
      type: "matching",
      text: "Match:",
      prompts: [
        { id: "p1", label: "нести́" },
        { id: "p2", label: "везти́" },
        { id: "p3", label: "вести́" },
      ],
      responses: [
        { id: "r1", label: "lead / drive" },
        { id: "r2", label: "carry on foot" },
        { id: "r3", label: "carry by vehicle" },
      ],
      answer: { p1: "r2", p2: "r3", p3: "r1" },
    },
  ],
};
