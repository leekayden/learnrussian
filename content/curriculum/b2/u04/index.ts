import type { Unit } from "@/lib/curriculum/types";

/** B2 · Unit 4 — Verbal adverbs advanced + B2 connectors in one unit (4), plus indirect speech (5). */
export const u04: Unit = {
  id: "b2-u04",
  level: "b2",
  number: 4,
  title: "Advanced verbal adverbs & complex connectors",
  topicIds: ["b2-u04-adverbs-connectors"],
  lessons: [
    {
      id: "b2-u04-l1",
      title: "Verbal adverbs: fixed phrases and traps",
      topicIds: ["b2-u04-adverbs-connectors"],
      vocab: ["поведение", "собственный", "кратко", "говорить", "откровенно", "независимо", "невзирая", "спустя", "через", "несмотря"],
      grammar: [
        {
          title: "Frozen verbal adverbs",
          body: `Some verbal adverbs are frozen into phrases and lost their subject requirement: судя́ по (judging by), кста́ти говоря́ (by the way), открове́нно говоря́ (frankly speaking), спуста́ год (a year later). «Судя́ по у́лицам, пра́здник» — the streets don't judge; the idiom does.

Frozen forms and their shapes:
- **судя́ по** + dat (judging by): Судя́ по у́лицам, пра́здник.
- **к ра́тко говоря́** — in short; **открове́нно говоря́** — frankly.
- **невзирая на** = despite (formal).
Time: **спустя́** + acc (a while later): Спустя́ год он верну́лся.`,
          plain: `Phrases like судя по and откровенно говоря are frozen — treat them as ready-made chunks. The usual rule about matching the subject simply does not apply here.`,
          why: "Frozen gerunds stopped being grammar and became discourse markers — sentence-level adverbs. They violate the shared-subject rule without raising an eyebrow: the language reanalysed them as fixed expressions, like 'considering' or 'generally speaking'.",
          examples: [
            { ru: "Открове'нно говоря', мне не понра'вился фильм.", en: "Frankly speaking, I didn't like the film." },
          ],
        },
      ],
      exercises: [
        {
          id: "b2-u04-l1-e1",
          type: "single",
          text: "___ по поведе́нию дете́й, они́ уста́ли. (judging by)",
          options: [{ id: "a", label: "Судя" }, { id: "b", label: "Суди" }], answer: "a"
        },
        {
          id: "b2-u04-l1-e2",
          type: "single",
          text: "___ год он уе́хал. (a year later)",
          options: [{ id: "a", label: "Спустя" }, { id: "b", label: "Спустив" }], answer: "a"
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
    {
      id: "b2-u04-l2",
      title: "Connector toolkit: несмотря на то что, в то время как, зато",
      topicIds: ["b2-u04-adverbs-connectors"],
      vocab: ["вопреки", "благодаря", "из-за", "впрочем", "однако", "тем не менее", "вместо", "затем", "следовательно", "таким образом"],
      grammar: [
        {
          title: "Cause, concession, contrast",
          body: `The B2 connector toolkit: несмотря́ на то что (although), благодаря́ + dat (thanks to — positive outcomes), из-за + gen (because of — negative ones), вме́сто того что́бы + inf (instead of doing), тем не ме́нее (nevertheless).

- **несмотря́ на то что** = although (+ clause); **несмотря́ на + acc** = despite (+ noun).
- **благодаря́ + dat** = thanks to (positive); **из-за + gen** = because of (negative).
- **в то вре́мя как** = while/whereas; **впрочем / однако́ / тем не ме́нее** = however.
- **вместо того что́бы + inf** = instead of doing: Вме́сто того что́бы спорить, подумай.`,
          plain: `Russian sorts causes by mood: благодаря for good outcomes, из-за for bad ones. For although-clauses, несмотря на то что is your all-purpose tool — memorize it as one chunk.`,
          why: "blagodarya and iz-za encode the speaker's EVALUATION of causality: helping hands get blagodarya, ruined plans get iz-za. Saying blagodarya bolezni sounds blackly comic. Russian causality is not neutral — it has an attitude.",
          examples: [
            { ru: "Благодаря' его' по'мощи мы успе'ли.", en: "Thanks to his help we made it." },
            { ru: "Из-за дож'дя экску'рсию отмени'ли.", en: "Because of the rain the excursion was cancelled." },
          ],
          tip: "благодаря = good outcome, из-за = bad outcome. «благодаря́ болезни» raises eyebrows.",
        },
      ],
      exercises: [
        {
          id: "b2-u04-l2-e1",
          type: "single",
          text: "___ ты, я не спра́вился бы. (thanks to you)",
          options: [{ id: "a", label: "Благодаря" }, { id: "b", label: "Из-за" }], answer: "a"
        },
        {
          id: "b2-u04-l2-e2",
          type: "fill-blank",
          text: "___ того что́бы жа́ловаться, де́йствуй. *(instead of)*",
          answers: ["Вместо"],
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
  ],

  test: [
    {
      id: "b2-u04-test-1",
      type: "single",
      text: "___ на дождь, экску́рсия состои́лась.",
      options: [{ id: "a", label: "Несмотря" }, { id: "b", label: "Из-за" }], answer: "a"
    },
    {
      id: "b2-u04-test-2",
      type: "single",
      text: "___ задержки рейса мы опозда́ли.",
      options: [{ id: "a", label: "Из-за" }, { id: "b", label: "Благодаря" }], answer: "a"
    },
    {
      id: "b2-u04-test-3",
      type: "true-false",
      text: "«вместо того чтобы + infinitive».",
      answer: true,
    },
    {
      id: "b2-u04-test-4",
      type: "short-answer",
      text: "Frankly speaking: (___ говоря́)",
      answer: "откровенно",
    },
  ],
};
