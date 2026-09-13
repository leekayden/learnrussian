import type { Unit } from "@/lib/curriculum/types";

/** B2 · Unit 1 — Aspect III: prefix semantics. */
export const u01: Unit = {
  id: "b2-u01",
  level: "b2",
  number: 1,
  title: "Aspect III: what prefixes really mean",
  topicIds: ["b2-u01-aspect-3"],
  lessons: [
    {
      id: "b2-u01-l1",
      title: "за-, по-, от-, про-, по- (plural): the semantic grid",
      topicIds: ["b2-u01-aspect-3"],
      vocab: ["заиграть", "запеть", "погулять", "походить", "отработать", "просидеть", "перестать", "заболеть", "закричать", "заговорить"],
      grammar: [
        {
          title: "Pure-aspect prefixes with their own meanings",
          body: `By B2, prefixes stop being 'done-markers' and start carrying meaning. За- on a verb of sound or state means STARTING — запе́ть (burst into song), заболе́ть (fall ill), заговори́ть (start talking). По- on an imperfective means DOING FOR A WHILE — погуля́ть, почита́ть, походи́ть.- **за-** = start (unexpectedly): запе́ть (burst into song), заболе́ть (fall ill), заговори́ть.
- **по-** + imperfective = do for a while: погуля́ть (take a walk), почита́ть, походи́ть (walk around a bit).
- **от-/про- + time quantity** = spend that long: отрабо́тать пять лет (put in five years), просиде́ть весь ве́чер (sit through the whole evening).
- **пере-/за-/по- + прекращение**: переста́ть (stop), забы́ть.`,
          plain: `Small pieces stuck on the front of a verb add their own meaning: start doing, do for a while, or spend that long doing. Learn the piece, not just the whole verb.`,
          why: "These are called aspectual sub-meanings: the prefix no longer changes the scene, only the action's phase. За- = ingressive (crossing the entrance), по- = delimitative (a bounded stretch of doing). English needs a whole clause ('started singing', 'walked for a bit'); Russian gets it inside one word.",

          table: {
            headers: ["Prefix", "Nuance", "Example"],
            rows: [
              ["за-", "ingressive (start)", "закричать"],
              ["по-", "delimitative (a while)", "погулять"],
              ["от-/про-", "finitive (spend time)", "отработать год"],
              ["пере-", "re-do", "переписать"],
            ],
          },
        },
      ],
      exercises: [
        {
          id: "b2-u01-l1-e1",
          type: "single",
          text: "Она́ ___ и весь дом слы́шал её го́лос. (burst out singing)",
          options: [{ id: "a", label: "запела" }, { id: "b", label: "пела" }], answer: "a"
        },
        {
          id: "b2-u01-l1-e2",
          type: "single",
          text: "Дава́йте ___ часо́к в па́рке. (walk for a bit)",
          options: [{ id: "a", label: "походим" }, { id: "b", label: "заходим" }], answer: "a"
        },
        {
          id: "b2-u01-l1-e3",
          type: "true-false",
          text: "«просиде́ть весь ве́чер» emphasizes the whole duration wasted/spent.",
          answer: true,
        },
      ],
      drills: [{ kind: "cloze", count: 4 }],
    },
    {
      id: "b2-u01-l2",
      title: "Stress, stems and tricky pairs",
      topicIds: ["b2-u01-aspect-3"],
      vocab: ["заняться", "заниматься", "кончить", "кончать", "лгать", "солгать", "трогать", "тронуть", "сохнуть", "высохнуть"],
      grammar: [
        {
          title: "Irregular pair partners",
          body: `Other prefixes measure time or repetition: отрабо́тать пять лет (put in five years), просиде́ть весь ве́чер (sit through the whole evening), переписа́ть (rewrite). And some pairs have irregular partners: занима́ться → заня́ться, тро́гать → тро́нуть, сохну́ть → вы́сохнуть.Some pairs surprise: занима́ться → заня́ться; тро́гать → тро́нуть; сохну́ть → вы́сохнуть; лга́ть/лга́л → солга́ть/солга́л (stem shortens: лгу, лгал but солгал).
Aspect decides vowel/stress: умере́ть → умира́ть (die: once → many metaphorically).`,
          plain: `Most verb pairs follow the pattern, but a few old, everyday verbs reshape themselves. Memorize занялся, тронул and высох as individuals, like English went or children.`,
          why: "Finitive prefixes (ot-, pro-) frame the action as SPENT — the time quantity becomes part of the verb. Irregular pairs exist because these verbs are old and frequent: frequent verbs resist regularisation the way English 'went' resists 'goed'.",
          examples: [
            { ru: "Он на'конец заня'лся спо'ртом.", en: "He finally took up sport." },
          ],
          tip: "Use the dictionary's aspect partner field (verbs.partner) — it links every pair for you.",
        },
      ],
      exercises: [
        {
          id: "b2-u01-l2-e1",
          type: "single",
          text: "Past tense of солга́ть (he):",
          options: [{ id: "a", label: "солгал" }, { id: "b", label: "солгал(о)… ложил" }], answer: "a"
        },
        {
          id: "b2-u01-l2-e2",
          type: "true-false",
          text: "занима́ться / заня́ться — the perfective drops the -а- and shifts stress.",
          answer: true,
        },
      ],
      drills: [{ kind: "conjugation", count: 5 }, { kind: "cloze", count: 2 }],
    },
  ],

  test: [
    {
      id: "b2-u01-test-1",
      type: "single",
      text: "He burst out laughing: он ___.",
      options: [{ id: "a", label: "засмеялся" }, { id: "b", label: "смеялся" }], answer: "a"
    },
    {
      id: "b2-u01-test-2",
      type: "single",
      text: "Я ___ весь день за компью́тером. (sat through)",
      options: [{ id: "a", label: "просидел" }, { id: "b", label: "сидел" }], answer: "a"
    },
    {
      id: "b2-u01-test-3",
      type: "true-false",
      text: "по- + imperfective → delimitative 'for a while'.",
      answer: true,
    },
    {
      id: "b2-u01-test-4",
      type: "short-answer",
      text: "Give the perfective partner: тро́гать → ___",
      answer: "тронуть",
    },
  ],
};
