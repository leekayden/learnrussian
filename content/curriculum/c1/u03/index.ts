import type { Unit } from "@/lib/curriculum/types";

/** C1 · Unit 3 — Literary verbal adverbs + C1 · Unit 4 — Advanced subordination. */
export const u03: Unit = {
  id: "c1-u03",
  level: "c1",
  number: 3,
  title: "Literary verbal adverbs",
  topicIds: ["c1-u03-literary-adverbs"],
  lessons: [
    {
      id: "c1-u03-l1",
      title: "Gerund clauses replacing sentences",
      topicIds: ["c1-u03-literary-adverbs"],
      vocab: ["молча", "лежать", "шутить", "спешить", "переставать", "старательный", "слушать", "щуриться", "молчать", "думать"],
      grammar: [
        {
          title: "Compression and stance",
          body: `Literary verbal adverbs compress whole clauses: «Он встал, помолча́в, и, не глядя на нас, вы́шел» — stood, silent a moment, and left without looking. Perfective -в for prior actions, imperfective -я for simultaneous manner. The golden rule: the verbal adverb's subject MUST be the main clause's subject — «Подходя́ к станции, у меня́ слетела шля́па» (Chekhov's joke) is wrong because the hat wasn't walking.

Writers compress chains of actions: «Он встал, помолча́в, и, не глядя на нас, вы́шел» (He stood, silent a moment, and left without looking at us).
Adverbial gerunds also express MANNER: игра́ючи (effortlessly), лю́бясь... молча́ (wordlessly — lexicalised).
Perfective gerunds sequence events BEFORE the main verb: Прочита́в, он вздохну́л.`,
          plain: `The -в and -я words fold two sentences into one, a bookish economy Russians write more than they say. Whatever you compress, the same person must be doing both actions.`,
          why: "When subjects diverge between the gerund and the main verb, Russian grammar rejects the construction — use a когда́-clause instead. And some gerunds are lexicalised: молча́ stopped being 'while silent' and became just an adverb meaning silently — grammar fossilised into vocabulary.",
          examples: [
            { ru: "Не перестава'я, она' писа'ла.", en: "Without pausing, she kept writing." },
          ],
          tip: "A gerund clause must share the subject with the main clause — otherwise it's a blunder (деепричастный оборот error).",
        },
      ],
      exercises: [
        {
          id: "c1-u03-l1-e1",
          type: "single",
          text: "Which sentence is CORRECT?",
          options: [
            { id: "a", label: "Подходя к станции, у меня слетела шляпа." },
            { id: "b", label: "Подходя к станции, я потерял шляпу." },
          ],
          answer: "b",
          explanation: "The classic Chekhov joke: the hat's owner must be the subject.",
        },
        {
          id: "c1-u03-l1-e2",
          type: "fill-blank",
          text: "___ спеша́, он объясня́л ка́ждый шаг. *(not hurrying)*",
          answers: ["Не"],
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
  ],

  test: [
    {
      id: "c1-u03-test-1",
      type: "single",
      text: "Which is wrong?",
      options: [
        { id: "a", label: "Возвращаясь домой, я встретил друга." },
        { id: "b", label: "Возвращаясь домой, дождь усилился." },
      ],
      answer: "b",
    },
    {
      id: "c1-u03-test-2",
      type: "single",
      text: "«молча» originally is a ___ verbal adverb.",
      options: [{ id: "a", label: "lexicalised" }, { id: "b", label: "future" }], answer: "a"
    },
  ],
};
