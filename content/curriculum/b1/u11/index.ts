import type { Unit } from "@/lib/curriculum/types";

/** B1 · Unit 11 — Pronoun declension, one step at a time. */
export const u11: Unit = {
  id: "b1-u11",
  level: "b1",
  number: 11,
  title: "Pronoun declension masterclass",
  topicIds: ["b1-u11-pronouns"],
  lessons: [
    {
      id: "b1-u11-l1",
      title: "Step 1: negatives with prepositions inside",
      topicIds: ["b1-u11-pronouns"],
      vocab: ["никто", "ничто", "никакой", "ничей", "некого", "нечего", "спрашивать", "делать", "говорить", "винить"],
      grammar: [
        {
          title: "ни- forms + не verb; preposition splits",
          body: `Negative pronouns come as double trouble: the ни- word AND a negated verb. Никто́ не пришёл. And a preposition squeezes between ни and the word: ни с ке́м, ни о чём. The stressed variants не́кого/не́чего take infinitives: Мне не́чего сказа́ть.Negatives: **никто́, ничего́, никако́й, ничей**. A preposition squeezes in:
- ни **с** ке́м (with nobody), ни **о** чём (about nothing)
**Не́кому / не́чего** (stress on не-) = no one/nothing to do X:
- Мне не́чего сказа́ть. Ему́ не́кого спра́шивать.`,
          plain: `Say "nobody came" and Russian insists on "nobody did not come" — both negative words together, every time. If a preposition is needed, it squeezes inside the negative word: ни с кем, ни о чём.`,
          why: "Russian requires double negation the way English forbids it — negative concord was standard English until the 1700s and never left Russian. The preposition-splitting (ни с ке́м) exists because ни- words cannot carry a preposition on their back, so the preposition wedges inside.",

          table: {
            headers: ["Form", "Example"],
            rows: [
              ["никто не", "Никто не пришёл"],
              ["ни с кем", "Я ни с кем не говорю"],
              ["нечего + inf", "Мне нечего делать"],
            ],
          },
          tip: "Double negative REQUIRED: ни- pronoun + не verb. «Никто́ пришёл» is wrong.",
        },
      ],
      exercises: [
        {
          id: "b1-u11-l1-e1",
          type: "single",
          text: "Я ни с кем не ___.",
          options: [{ id: "a", label: "говорю" }, { id: "b", label: "говорю о" }], answer: "a",
        },
        {
          id: "b1-u11-l1-e2",
          type: "fill-blank",
          text: "___ не́чего сказа́ть. *(To him…)*",
          answers: ["Ему"],
        },
        {
          id: "b1-u11-l1-e3",
          type: "true-false",
          text: "«Никто́ пришёл» is correct Russian.",
          answer: false,
          explanation: "Needs не: Никто́ не пришёл.",
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
    {
      id: "b1-u11-l2",
      title: "Step 2: себя and сам",
      topicIds: ["b1-u11-pronouns"],
      vocab: ["себя", "сам", "купить", "машина", "сделать", "гордиться", "взглянуть", "человек", "самостоятельный", "довольный"],
      grammar: [
        {
          title: "Self vs in person",
          body: `себя́ (self) declines like тебя́ and has no nominative: Он купи́л себе́ маши́ну. сам agrees fully and means 'in person, without help': Я сам э́то сде́лал. весь (all) declines too: весь день, всю неде́лю, все лю́ди.- **себя́** (self — declines like тебя́): Он купи́л **себе́** маши́ну. Взгляни́ **на себя́**! Он дово́лен **собо́й**.
- **сам** = myself/in person (agrees like этот): Я **са́м** э́то сде́лал. Она́ **сама́** сказа́ла.
- **весь / всё / все** = all: весь день, всё вре́мя, все лю́ди.`,
          plain: `English "self" does two jobs; Russian splits them. Себя is the receiver — buy a car for yourself, look at yourself — while сам means "in person, all by myself", as in I did it myself.`,
          why: "себя́ never appears as a subject because Russian treats 'self' as the object of one's own actions — you direct things at yourself. сам, meanwhile, is an adjective meaning 'that very person, unaided' — which is why it agrees fully. The pair confuses because English 'self' covers both jobs.",

          table: {
            headers: ["Pronoun", "Example"],
            rows: [
              ["себе (dat)", "купил себе машину"],
              ["собой (inst)", "доволен собой"],
              ["сам / сама", "Я сам это сделал"],
            ],
          },
        },
      ],
      exercises: [
        {
          id: "b1-u11-l2-e1",
          type: "fill-blank",
          text: "Он купи́л ___ но́вый телефо́н. *(himself — dative)*",
          answers: ["себе"],
        },
        {
          id: "b1-u11-l2-e2",
          type: "single",
          text: "Она́ ___ улыба́ется. (in person, fem)",
          options: [{ id: "a", label: "сама" }, { id: "b", label: "само" }], answer: "a",
        },
        {
          id: "b1-u11-l2-e3",
          type: "true-false",
          text: "«весь день» = all day.",
          answer: true,
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
    {
      id: "b1-u11-l3",
      title: "Step 3: -то vs -нибудь vs кое-",
      topicIds: ["b1-u11-pronouns"],
      vocab: ["кто-то", "что-нибудь", "какой-то", "кое-кто", "кое-где", "какой-нибудь", "кое-как", "всюду", "куда-то", "стучать"],
      grammar: [
        {
          title: "Three indefinite families",
          body: `Three indefinite families: -то (a certain unknown one — real): кто́-то стучи́т; -нибудь (any, whatever): Ска́жи́ что-нибу́дь; кое- (the speaker knows): кое-кто зна́ет — with the preposition inside: кое о чём.- **-то** = speaker knows it exists, you don't know what: кто́-то стучи́т (real).
- **-нибудь** = any old, non-specific: Ска́жи́ что-нибу́дь! за́втра и́ли когда́-нибу́дь.
- **кое-** = speaker knows and hints: кое-кто зна́ет. Preposition splits: кое **о** чём.`,
          plain: `The little ending tells how much you know: кто-то is a real but unnamed someone, что-нибудь is any old thing, and кое-кто means I know exactly who — and I am not telling.`,
          why: "The choice encodes the speaker's knowledge: -то says it exists and I know which, -нибудь says I don't care which, кое- says I know and I'm not telling. Three particles, three epistemic stances — Russian makes you declare how much you know about your own vague reference.",

          table: {
            headers: ["Particle", "Meaning"],
            rows: [
              ["-то", "a certain unknown one (real)"],
              ["-нибудь", "any, whatever"],
              ["кое-", "a certain one (speaker knows)"],
            ],
          },
        },
      ],
      exercises: [
        {
          id: "b1-u11-l3-e1",
          type: "single",
          text: "Слу́шай, ___ стучит в дверь. (real event)",
          options: [{ id: "a", label: "кто-то" }, { id: "b", label: "кто-нибудь" }], answer: "a",
        },
        {
          id: "b1-u11-l3-e2",
          type: "single",
          text: "Приходи́ ___! (any time at all)",
          options: [{ id: "a", label: "когда-нибудь" }, { id: "b", label: "кое-когда" }], answer: "a",
        },
        {
          id: "b1-u11-l3-e3",
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
      id: "b1-u11-test-1", type: "single",
      text: "Я ни ___ не сказа́л. (о чём)",
      options: [{ id: "a", label: "о чём" }, { id: "b", label: "что" }], answer: "a",
    },
    {
      id: "b1-u11-test-2", type: "short-answer",
      text: "There's nothing to lose: (не́чего…)",
      answer: "нечего терять",
    },
    {
      id: "b1-u11-test-3", type: "single",
      text: "Она́ ___ улыба́ется. (сам, fem)",
      options: [{ id: "a", label: "сама" }, { id: "b", label: "само" }], answer: "a",
    },
    {
      id: "b1-u11-test-4", type: "true-false",
      text: "кто́-нибудь = the speaker has a specific person in mind.",
      answer: false,
      explanation: "That's кто́-то.",
    },
  ],
};
