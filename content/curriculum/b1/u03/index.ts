import type { Unit } from "@/lib/curriculum/types";

/** B1 · Unit 3 — Carry verbs and idiomatic motion, one step at a time. */
export const u03: Unit = {
  id: "b1-u03",
  level: "b1",
  number: 3,
  title: "Motion III: carrying, leading, and idioms",
  topicIds: ["b1-u03-motion-3"],
  lessons: [
    {
      id: "b1-u03-l1",
      title: "Step 1: нести́ / везти́ / вести́ — the carry grid",
      topicIds: ["b1-u03-motion-3"],
      vocab: ["носить", "возить", "вести", "чемодан", "рюкзак", "груз", "перевозить", "приносить", "уносить", "почтальон"],
      grammar: [
        {
          title: "Third dimension: what moves",
          body: `- **нести́/носи́ть** = carry on foot
- **везти́/вози́ть** = carry by vehicle
- **вести́/води́ть** = lead (person, animal) / drive (вести́ маши́ну)
One trip vs habitual, same as идти/ходить.`,
          table: {
            headers: ["", "one trip", "habitual"],
            rows: [
              ["carry (on foot)", "нести", "носить"],
              ["carry (vehicle)", "везти", "возить"],
              ["lead / drive", "вести", "водить"],
            ],
          },
          tip: "Prefix freely: принести́ (bring), увезти́, привести́ (bring someone).",
        },
      ],
      exercises: [
        {
          id: "b1-u03-l1-e1",
          type: "single",
          text: "Почтальо́н ___ по́чту ка́ждое у́тро. (habitual)",
          options: [{ id: "a", label: "носит" }, { id: "b", label: "несёт" }], answer: "a",
        },
        {
          id: "b1-u03-l1-e2",
          type: "single",
          text: "Смотри́, он ___ тяжёлый чемода́н! (right now)",
          options: [{ id: "a", label: "несёт" }, { id: "b", label: "носит" }], answer: "a",
        },
        {
          id: "b1-u03-l1-e3",
          type: "fill-blank",
          text: "Оте́ц научи́л меня́ ___ маши́ну. *(drive)*",
          answers: ["водить"],
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
    {
      id: "b1-u03-l2",
      title: "Step 2: idiomatic motion — вы́йти за́муж, проводи́ть вре́мя",
      topicIds: ["b1-u03-motion-3"],
      vocab: ["жениться", "выйти", "проводить", "провожать", "заходить", "переезжать", "уходить", "выходной", "свадьба", "время"],
      grammar: [
        {
          title: "Motion verbs that stopped moving",
          body: `- **вы́йти за́муж за + acc** — to marry (a woman): Она́ вы́шла за́муж за врача́.
- **жени́ться на + prep** — to marry (a man): Он жени́лся на Та́не.
- **проводи́ть вре́мя** — spend time: Мы хорошо́ проводи́м вре́мя.
- **вы́ходно́й** — day off.`,
          examples: [
            { ru: "Мы хорошо' проводи'м вре'мя вме'сте.", en: "We have a good time together." },
          ],
          tip: "Away = вы-/у- (вы́йти из ко́мнаты); toward = в-/при- (войти́ в ко́мнату).",
        },
      ],
      exercises: [
        {
          id: "b1-u03-l2-e1",
          type: "single",
          text: "Она́ вы́шла за́муж ___.",
          options: [{ id: "a", label: "за журналиста" }, { id: "b", label: "за журналисте" }], answer: "a",
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
      id: "b1-u03-test-1", type: "single",
      text: "Кто вам ___ гру́зы? (by vehicle, habitual)",
      options: [{ id: "a", label: "возит" }, { id: "b", label: "везёт" }], answer: "a",
    },
    {
      id: "b1-u03-test-2", type: "short-answer",
      text: "Bring me the book, please: (принести́)",
      answer: "принеси мне книгу пожалуйста",
    },
    {
      id: "b1-u03-test-3", type: "true-false",
      text: "вести́ маши́ну = to drive a car.",
      answer: true,
    },
    {
      id: "b1-u03-test-4", type: "matching",
      text: "Match:",
      prompts: [
        { id: "p1", label: "нести́" }, { id: "p2", label: "везти́" }, { id: "p3", label: "вести́" },
      ],
      responses: [
        { id: "r1", label: "lead / drive" }, { id: "r2", label: "carry on foot" }, { id: "r3", label: "carry by vehicle" },
      ],
      answer: { p1: "r2", p2: "r3", p3: "r1" },
    },
  ],
};
