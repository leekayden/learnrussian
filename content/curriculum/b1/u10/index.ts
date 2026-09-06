import type { Unit } from "@/lib/curriculum/types";

/** B1 · Unit 10 — Complex sentences: который, чтобы, когда, потому что. */
export const u10: Unit = {
  id: "b1-u10",
  level: "b1",
  number: 10,
  title: "Complex sentences: gluing clauses",
  topicIds: ["b1-u10-complex-sentences"],
  lessons: [
    {
      id: "b1-u10-l1",
      title: "который in all cases",
      topicIds: ["b1-u10-complex-sentences"],
      vocab: ["писатель", "роман", "герой", "фильм", "история", "девушка", "вечер", "центр", "река", "вопрос"],
      grammar: [
        {
          title: "который copies the noun's role",
          body: `**кото́рый** = who/which. Its CASE comes from its job in the subordinate clause; gender/number from the noun it replaces:
- Фильм, **кото́рый** я ви́дел (acc — я ви́дел фильм)
- Фильм, **кото́рый** мне понра́вился (nom — фильм понра́вился)
- Девушка, **с кото́рой** я говори́л (inst — говори́л с ней)
- Дом, **в кото́ром** я живу́ (prep — живу́ в до́ме)`,
          table: {
            headers: ["Function", "Form"],
            rows: [
              ["subject", "который (nom)"],
              ["object", "который/которую (acc)"],
              ["whose", "которого (gen)"],
              ["to whom", "которому (dat)"],
              ["with which", "с которым (inst)"],
              ["in which", "в котором (prep)"],
            ],
          },
        },
      ],
      exercises: [
        {
          id: "b1-u10-l1-e1",
          type: "single",
          text: "Письмо́, ___, лежи́т на столе́. (я написа́л письмо́)",
          options: [{ id: "a", label: "которое я написал" }, { id: "b", label: "которым я написал" }], answer: "a"
        },
        {
          id: "b1-u10-l1-e2",
          type: "single",
          text: "Писа́тель, ___, живёт в Петербу́рге. (я говори́л о писа́теле)",
          options: [{ id: "a", label: "о котором" }, { id: "b", label: "которого" }], answer: "a"
        },
        {
          id: "b1-u10-l1-e3",
          type: "fill-blank",
          text: "Де́вушка, ___ я познако́мился на ве́чере, врач. *(с кото́рой)*",
          answers: ["с которой"],
        },
      ],
      drills: [{ kind: "cloze", count: 4 }],
    },
    {
      id: "b1-u10-l2",
      title: "чтобы, когда, потому что, поэтому, хотя",
      topicIds: ["b1-u10-complex-sentences"],
      vocab: ["потому", "поэтому", "хотя", "когда", "пока", "если", "зато", "вместо", "вдруг", "конечно"],
      grammar: [
        {
          title: "The glue words",
          body: `- **что́бы + past/infinitive** = in order to / that: Я пришёл, что́бы помо́чь. Важно́, что́бы ты пришёл.
- **когда́ / пока́** = when / while-until: Пока́ я гото́влю, ты накрыва́й на стол.
- **потому́ что** (because — after) vs **так как** (before/after, more formal) vs **поэ́тому** (therefore — result).
- **хотя́** = although; **зато́** = but on the other hand (compensation): До́м ма́ленький, зато́ све́тлый.`,
          examples: [
            { ru: "Я взял зонт, потому' что шёл дождь.", en: "I took an umbrella because it was raining." },
            { ru: "Шёл дождь, поэ'тому я взял зонт.", en: "It was raining, so I took an umbrella." },
          ],
          tip: "чтобы never takes a future form: «Я хочу́, что́бы ты пришёл» (past form inside!) — never «прийдёшь».",
        },
      ],
      exercises: [
        {
          id: "b1-u10-l2-e1",
          type: "single",
          text: "Я прие́хал ___, что́бы помо́чь тебе́.",
          options: [{ id: "a", label: "для того" }, { id: "b", label: "потому" }], answer: "a"
        },
        {
          id: "b1-u10-l2-e2",
          type: "single",
          text: "___ было хо́лодно, мы всё же вы́шли гуля́ть.",
          options: [{ id: "a", label: "Хотя" }, { id: "b", label: "Потому что" }], answer: "a"
        },
        {
          id: "b1-u10-l2-e3",
          type: "fill-blank",
          text: "Я хочу́, ___ ты написа́л э́ссе. *(чтобы + past)*",
          answers: ["чтобы"],
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
  ],

  test: [
    {
      id: "b1-u10-test-1",
      type: "single",
      text: "Го́род, ___, краси́в. (я живу́ в го́роде)",
      options: [{ id: "a", label: "в котором я живу" }, { id: "b", label: "который я живу" }], answer: "a"
    },
    {
      id: "b1-u10-test-2",
      type: "single",
      text: "Я взял зонт, ___ шёл дождь.",
      options: [{ id: "a", label: "потому что" }, { id: "b", label: "поэтому" }], answer: "a"
    },
    {
      id: "b1-u10-test-3",
      type: "true-false",
      text: "After чтобы, the verb is in the past form.",
      answer: true,
    },
    {
      id: "b1-u10-test-4",
      type: "short-answer",
      text: "Connect with который: «Э́то де́вушка. Я познако́мился с ней.» → «Э́то де́вушка, ___»",
      answer: "с которой я познакомился",
    },
  ],
};
