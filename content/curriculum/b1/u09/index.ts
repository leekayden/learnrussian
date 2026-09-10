import type { Unit } from "@/lib/curriculum/types";

/** B1 · Unit 9 — Verbal adverbs, one step at a time. */
export const u09: Unit = {
  id: "b1-u09",
  level: "b1",
  number: 9,
  title: "Verbal adverbs: doing while doing",
  topicIds: ["b1-u09-verbal-adverbs"],
  lessons: [
    {
      id: "b1-u09-l1",
      title: "Step 1: imperfective verbal adverbs (-я)",
      topicIds: ["b1-u09-verbal-adverbs"],
      vocab: ["читать", "гулять", "сидеть", "слушать", "улыбаться", "здороваться", "смотреть", "писать", "идти", "говорить"],
      grammar: [
        {
          title: "Present stem + -я: simultaneous action",
          body: `Imperfective verbal adverbs: present stem + -я. Она́ вошла́, улыба́ясь — she came in smiling. They describe an action SIMULTANEOUS with the main verb, and the subject must be shared.The imperfective verbal adverb says what the subject was doing AT THE SAME TIME as the main verb:
- Она́ вошла́, **улыба́ясь**. — She came in smiling.
- Он шёл, **здороваясь** с прохо́жими.
Formation: present-tense они-form minus -ут/-ат, plus -я: чита́ют → чита́я; занима́ются → занима́ясь.`,
          why: "Two formations because two time-relations exist: simultaneous (-я) and prior (-в). English splits these across 'while smiling' and 'having smiled'; Russian keeps one part of speech and switches the ending. The golden rule: the verbal adverb's subject MUST be the main clause's subject — Chekhov's joke about the hat flying off 'while approaching the station' shows what happens otherwise.",

          table: {
            headers: ["Verb", "Verbal adverb"],
            rows: [
              ["читать", "читая"],
              ["улыбаться", "улыбаясь"],
              ["идти", "идя"],
            ],
          },
        },
      ],
      exercises: [
        {
          id: "b1-u09-l1-e1",
          type: "single",
          text: "Он шёл, ___ в окно́. (looking — process)",
          options: [{ id: "a", label: "глядя" }, { id: "b", label: "глянув" }], answer: "a",
        },
        {
          id: "b1-u09-l1-e2",
          type: "single",
          text: "Verbal adverb of занима́ться:",
          options: [{ id: "a", label: "занимаясь" }, { id: "b", label: "занявшись" }], answer: "a",
        },
        {
          id: "b1-u09-l1-e3",
          type: "true-false",
          text: "Imperfective verbal adverbs end in -я.",
          answer: true,
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
    {
      id: "b1-u09-l2",
      title: "Step 2: perfective verbal adverbs (-в / -вшись)",
      topicIds: ["b1-u09-verbal-adverbs"],
      vocab: ["вернуться", "увидеть", "открыть", "закрыть", "прощаться", "получить", "прочитать", "вздохнуть", "закрыться", "написать"],
      grammar: [
        {
          title: "Past stem + -в / -вшись: action BEFORE the main verb",
          body: `Perfective verbal adverbs: past masc minus -л, plus -в (верну́вшись for -ся verbs). Прочита́в письмо́, он сжёг его́ — the reading COMPLETED before the burning began.- **Прочита́в письмо́, он сжёг его́.** — Having read the letter, he burned it.
- Formation: perfective past masculine minus -л, plus -в: прочита́л → прочита́в
- Reflexives add -шись: верну́лся → верну́вшись`,
          why: "The -в suffix sits on the past stem, so the adverb inherits completion: its action is strictly BEFORE the main verb's. Sequence (first read, then burn) is baked into the morphology — no conjunction needed.",

          table: {
            headers: ["Verb", "Verbal adverb"],
            rows: [
              ["прочитать", "прочитав"],
              ["увидеть", "увидев"],
              ["вернуться", "вернувшись"],
            ],
          },
          tip: "The subject of the verbal adverb MUST be the subject of the main verb: «Читая книгу, мне понравилась сцена» is wrong.",
        },
      ],
      exercises: [
        {
          id: "b1-u09-l2-e1",
          type: "single",
          text: "___ письмо́, она́ написа́ла отве́т. (having received)",
          options: [{ id: "a", label: "Получив" }, { id: "b", label: "Получая" }], answer: "a",
        },
        {
          id: "b1-u09-l2-e2",
          type: "single",
          text: "Verbal adverb of уви́деть:",
          options: [{ id: "a", label: "увидев" }, { id: "b", label: "видя" }], answer: "a",
        },
        {
          id: "b1-u09-l2-e3",
          type: "true-false",
          text: "«Прочита́в кни́гу, я пошёл спать» — correct sequence.",
          answer: true,
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
  ],

  test: [
    {
      id: "b1-u09-test-1", type: "single",
      text: "Verbal adverb of уви́деть:",
      options: [{ id: "a", label: "увидев" }, { id: "b", label: "видя" }], answer: "a",
    },
    {
      id: "b1-u09-test-2", type: "single",
      text: "Он сиде́л, ___ в окно́. (looking)",
      options: [{ id: "a", label: "глядя" }, { id: "b", label: "глянув" }], answer: "a",
    },
    {
      id: "b1-u09-test-3", type: "true-false",
      text: "«Прочита́в кни́гу, я пошёл спать» — correct sequence of actions.",
      answer: true,
    },
    {
      id: "b1-u09-test-4", type: "short-answer",
      text: "Make a verbal adverb: занима́ться → ___ спо́ртом, он чувствует себя хорошо́",
      answer: "занимаясь",
    },
  ],
};
