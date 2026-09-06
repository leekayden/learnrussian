import type { Unit } from "@/lib/curriculum/types";

/** B1 · Unit 11 — Pronouns in all cases; negatives; -то / -нибудь. */
export const u11: Unit = {
  id: "b1-u11",
  level: "b1",
  number: 11,
  title: "Pronoun declension masterclass",
  topicIds: ["b1-u11-pronouns"],
  lessons: [
    {
      id: "b1-u11-l1",
      title: "кто/что/себя/сам + negatives",
      topicIds: ["b1-u11-pronouns"],
      vocab: ["никто", "ничто", "никакой", "ничей", "некого", "нечего", "себя", "сам", "весь", "всякий"],
      grammar: [
        {
          title: "Preposition splits negatives",
          body: `Negatives: **никто́, ничего́, никако́й, ничей**. A preposition squeezes in: ни **с** ке́м (with nobody), ни **о** чём (about nothing), не **у** кого́ (there's no one to…).
**Не́кому / не́чего** (stress on не-) = no one/nothing to do X: Мне не́чего сказа́ть. Ему́ не́кого спра́шивать.`,
          examples: [
            { ru: "Я никого' не ви'жу.", en: "I see nobody." },
            { ru: "Мне не'чего де'лать.", en: "I have nothing to do." },
          ],
          tip: "Double negative is REQUIRED: ни- pronoun + не verb. «Никто́ пришёл» is wrong; «Никто́ не пришёл» is right.",
        },
        {
          title: "себя and сам",
          body: `**себя́** (self, declines like тебя́): Он купи́л себе́ маши́ну. Взгляни́ на себя́!
**сам** = myself/in person (agrees): Я са́м э́то сде́лал. Она́ сама́ сказа́ла.
**весь / всё / все** = all: весь день, всё вре́мя, все лю́ди.`,
        },
      ],
      exercises: [
        {
          id: "b1-u11-l1-e1",
          type: "single",
          text: "Я ни с кем не ___.",
          options: [{ id: "a", label: "говорю" }, { id: "b", label: "говорю о" }], answer: "a"
        },
        {
          id: "b1-u11-l1-e2",
          type: "fill-blank",
          text: "Он купи́л ___ но́вый телефо́н. *(himself — dative)*",
          answers: ["себе"],
        },
        {
          id: "b1-u11-l1-e3",
          type: "fill-blank",
          text: "___ не́чего сказа́ть. *(To him there's nothing to say.)*",
          answers: ["Ему"],
        },
      ],
      drills: [{ kind: "cloze", count: 4 }],
    },
    {
      id: "b1-u11-l2",
      title: "-то vs -нибудь vs кое-",
      topicIds: ["b1-u11-pronouns"],
      vocab: ["кто-то", "что-нибудь", "какой-то", "кое-кто", "кое-где", "какой-нибудь", "кое-как", "всюду", "куда-то", "как-то"],
      grammar: [
        {
          title: "The three indefinite families",
          body: `- **-то** = speaker knows it exists, you don't know what: кто́-то стучи́т (someone is knocking — real).
- **-нибудь** = any old, non-specific: Ска́жи́ что-нибу́дь! (say anything); за́втра и́ли когда́-нибу́дь.
- **кое-** = speaker knows and hints: кое-кто зна́ет (a certain someone knows). Preposition splits: кое **о** чём.`,
          examples: [
            { ru: "Кто'-то постуча'л в две'рь.", en: "Somebody knocked on the door." },
            { ru: "Дава'й что'-нибу'дь съе'дим.", en: "Let's eat something or other." },
          ],
        },
      ],
      exercises: [
        {
          id: "b1-u11-l2-e1",
          type: "single",
          text: "Слу́шай, кто́-то ___ в дверь. (knocked — real event)",
          options: [{ id: "a", label: "кто-то" }, { id: "b", label: "кто-нибудь" }], answer: "a"
        },
        {
          id: "b1-u11-l2-e2",
          type: "single",
          text: "Приходи́ ___! (any time at all)",
          options: [{ id: "a", label: "когда-нибудь" }, { id: "b", label: "кое-когда" }], answer: "a"
        },
        {
          id: "b1-u11-l2-e3",
          type: "true-false",
          text: "кое- needs a preposition in between: кое о чём.",
          answer: true,
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
  ],

  test: [
    {
      id: "b1-u11-test-1",
      type: "single",
      text: "Я ни ___ не сказа́л. (о чём)",
      options: [{ id: "a", label: "о чём" }, { id: "b", label: "что" }], answer: "a"
    },
    {
      id: "b1-u11-test-2",
      type: "short-answer",
      text: "There's nothing to lose: (не́чего…)",
      answer: "нечего терять",
    },
    {
      id: "b1-u11-test-3",
      type: "single",
      text: "Она́ ___ улыба́ется. (сам, fem)",
      options: [{ id: "a", label: "сама" }, { id: "b", label: "само" }], answer: "a"
    },
    {
      id: "b1-u11-test-4",
      type: "true-false",
      text: "кто́-нибудь = the speaker has a specific person in mind.",
      answer: false,
      explanation: "That's кто́-то.",
    },
  ],
};
