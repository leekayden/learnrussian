import type { Unit } from "@/lib/curriculum/types";

/** A2 · Unit 2 — First cases, one step at a time. */
export const u02: Unit = {
  id: "a2-u02",
  level: "a2",
  number: 2,
  title: "First cases: naming, objecting, locating",
  topicIds: ["a2-u02-cases-rap"],
  lessons: [
    {
      id: "a2-u02-l1",
      title: "Step 1: gender from the ending",
      topicIds: ["a2-u02-cases-rap"],
      vocab: ["город", "дом", "улица", "музыка", "письмо", "море", "музей", "словарь", "кино", "метро"],
      grammar: [
        {
          title: "Read the gender off the ending",
          body: `- consonant → **masculine** (дом, го́род)
- **-а/-я** → **feminine** (у́лица, му́зыка)
- **-о/-е** → **neuter** (письмо́, мо́ре)
- **-й/-ь** → usually masculine (музе́й, слова́рь); feminine -ь learned with the word (пло́щадь).`,
          table: {
            headers: ["Gender", "Ending", "Example"],
            rows: [
              ["masculine", "consonant, -й, -ь", "дом, музей, словарь"],
              ["feminine", "-а, -я, -ь", "улица, музыка, площадь"],
              ["neuter", "-о, -е", "письмо, море"],
            ],
          },
          tip: "кино́ and метро́ end in -о but are masculine — abbreviations are the exception.",
        },
      ],
      exercises: [
        {
          id: "a2-u02-l1-e1",
          type: "matching",
          text: "Noun → gender:",
          prompts: [
            { id: "p1", label: "музей" },
            { id: "p2", label: "музыка" },
            { id: "p3", label: "письмо" },
          ],
          responses: [
            { id: "r1", label: "feminine" }, { id: "r2", label: "masculine" }, { id: "r3", label: "neuter" },
          ],
          answer: { p1: "r2", p2: "r1", p3: "r3" },
        },
        {
          id: "a2-u02-l1-e2",
          type: "single",
          text: "Which is feminine?",
          options: [{ id: "a", label: "улица" }, { id: "b", label: "город" }], answer: "a",
        },
        {
          id: "a2-u02-l1-e3",
          type: "true-false",
          text: "«Письмо́» is masculine.",
          answer: false,
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
    {
      id: "a2-u02-l2",
      title: "Step 2: accusative of things",
      topicIds: ["a2-u02-cases-rap"],
      vocab: ["книга", "музыка", "чай", "письмо", "газета", "журнал", "кофе", "вода", "ручка", "тетрадь"],
      grammar: [
        {
          title: "The object of the action",
          body: `Accusative = the direct object. For **things** (inanimate):
- masculine/neuter: **no change** (Я чита́ю журна́л / письмо́)
- feminine **-а → -у**, **-я → -ю** (кни́га → кни́гу, му́зыка → му́зыку)`,
          table: {
            headers: ["Nominative", "Accusative"],
            rows: [
              ["журнал (m)", "журнал"],
              ["письмо (n)", "письмо"],
              ["книга (f)", "книгу"],
              ["музыка (f)", "музыку"],
            ],
          },
          examples: [
            { ru: "Я пью' чай.", en: "I drink tea." },
          ],
        },
      ],
      exercises: [
        {
          id: "a2-u02-l2-e1",
          type: "single",
          text: "Я чита́ю ___.",
          options: [{ id: "a", label: "газета" }, { id: "b", label: "газету" }], answer: "b",
        },
        {
          id: "a2-u02-l2-e2",
          type: "fill-blank",
          text: "Она́ слу́шает ___. *(music)*",
          answers: ["музыку"],
        },
        {
          id: "a2-u02-l2-e3",
          type: "true-false",
          text: "«Я пью кофе» — кофе changes.",
          answer: false,
          explanation: "Borrowings like кофе never decline.",
        },
      ],
      drills: [
        { kind: "noun-case", count: 4, cases: ["acc"] },
        { kind: "cloze", count: 2 },
      ],
    },
    {
      id: "a2-u02-l3",
      title: "Step 3: accusative of people and animals",
      topicIds: ["a2-u02-cases-rap"],
      vocab: ["брат", "сестра", "отец", "мать", "друг", "кошка", "собака", "человек", "девушка", "кот"],
      grammar: [
        {
          title: "Animate → genitive-looking",
          body: `Living beings get a special accusative:
- masculine animate: **-а** (бра́т → бра́та, кот → кота́)
- feminine: same as before (сестра́ → сестру́)
- «Я зна́ю э́того челове́ка.»`,
          examples: [
            { ru: "Я ви'жу бра'та и сестру'.", en: "I see my brother and sister." },
          ],
          tip: "Walk-and-protest test: cat = animate; book = not.",
        },
      ],
      exercises: [
        {
          id: "a2-u02-l3-e1",
          type: "single",
          text: "Я ви́жу ___. (brother)",
          options: [{ id: "a", label: "брата" }, { id: "b", label: "брат" }], answer: "a",
        },
        {
          id: "a2-u02-l3-e2",
          type: "fill-blank",
          text: "Она́ люби́т свою́ ___. *(dog)*",
          answers: ["собаку"],
        },
        {
          id: "a2-u02-l3-e3",
          type: "fill-blank",
          text: "Я ви́жу ___. *(the cat — masc animate)*",
          answers: ["кота"],
        },
      ],
      drills: [
        { kind: "noun-case", count: 3, cases: ["acc"] },
        { kind: "cloze", count: 2 },
      ],
    },
    {
      id: "a2-u02-l4",
      title: "Step 4: prepositional — where it is",
      topicIds: ["a2-u02-cases-rap"],
      vocab: ["работа", "театр", "площадь", "Россия", "Англия", "магазин", "школа", "город", "улица", "почта"],
      grammar: [
        {
          title: "в / на + -е",
          body: `Location = **в/на + prepositional** (ends in -е, -и):
- в го́роде, в музе́е, на рабо́те, в Росси́и
- **на** for open spaces & fixed spots: на у́лице, на пло́щади, на по́чте, на заво́де
- **о/об** = about: о го́роде, об Англии.`,
          table: {
            headers: ["Nominative", "Prepositional"],
            rows: [
              ["город", "в городе"],
              ["музей", "в музее"],
              ["Россия", "в России"],
              ["работа", "на работе"],
            ],
          },
          tip: "в = enclosed; на = open space, event, or fixed point (на рабо́те, на по́чте).",
        },
      ],
      exercises: [
        {
          id: "a2-u02-l4-e1",
          type: "single",
          text: "Я живу́ в ___. (Moscow)",
          options: [{ id: "a", label: "Москве" }, { id: "b", label: "Москву" }], answer: "a",
        },
        {
          id: "a2-u02-l4-e2",
          type: "fill-blank",
          text: "Она́ всегда́ на ___. *(work)*",
          answers: ["работе"],
        },
        {
          id: "a2-u02-l4-e3",
          type: "fill-blank",
          text: "Мы говори́м о ___. *(Russia)*",
          answers: ["России"],
        },
      ],
      drills: [
        { kind: "noun-case", count: 4, cases: ["prep"] },
        { kind: "cloze", count: 2 },
      ],
    },
    {
      id: "a2-u02-l5",
      title: "Step 5: где vs куда — location vs direction",
      topicIds: ["a2-u02-cases-rap"],
      vocab: ["идти", "ехать", "школа", "аптека", "театр", "Россия", "магазин", "вокзал", "аэропорт", "парк"],
      grammar: [
        {
          title: "One preposition, two cases",
          body: `- **Где?** (where at) → в/на + **prepositional**: Я в шко́ле.
- **Куда́?** (where to) → в/на + **accusative**: Я иду́ **в шко́лу**.
Compare: Росси́я → в Росси́и (at) / в Росси́ю (to).`,
          table: {
            headers: ["Question", "Case", "Example"],
            rows: [
              ["Где ты?", "prep", "в театре"],
              ["Куда ты идёшь?", "acc", "в театр"],
            ],
          },
          tip: "Ask куда́ or где first — the case follows the question.",
        },
      ],
      exercises: [
        {
          id: "a2-u02-l5-e1",
          type: "single",
          text: "Куда́ ты идёшь? — В ___. (theatre)",
          options: [{ id: "a", label: "театр" }, { id: "b", label: "театре" }], answer: "a",
        },
        {
          id: "a2-u02-l5-e2",
          type: "fill-blank",
          text: "Мы е́дем в ___. *(Russia — direction)*",
          answers: ["Россию"],
        },
        {
          id: "a2-u02-l5-e3",
          type: "matching",
          text: "Question → case:",
          prompts: [
            { id: "p1", label: "Где ты?" },
            { id: "p2", label: "Куда́ ты идёшь?" },
          ],
          responses: [
            { id: "r1", label: "в/на + accusative" }, { id: "r2", label: "в/на + prepositional" },
          ],
          answer: { p1: "r2", p2: "r1" },
        },
      ],
      drills: [
        { kind: "noun-case", count: 3, cases: ["acc", "prep"] },
        { kind: "cloze", count: 3 },
      ],
    },
  ],

  test: [
    {
      id: "a2-u02-test-1", type: "single",
      text: "Я чита́ю ___.",
      options: [{ id: "a", label: "письмо" }, { id: "b", label: "письму" }], answer: "a",
    },
    {
      id: "a2-u02-test-2", type: "single",
      text: "Я ви́жу ___. (sister)",
      options: [{ id: "a", label: "сестру" }, { id: "b", label: "сестра" }], answer: "a",
    },
    {
      id: "a2-u02-test-3", type: "short-answer",
      text: "Where is the museum? (в + …)",
      answer: "в музее",
    },
    {
      id: "a2-u02-test-4", type: "fill-blank",
      text: "Куда́ вы е́дете? — В ___.",
      answers: ["Россию"],
    },
    {
      id: "a2-u02-test-5", type: "true-false",
      text: "«Я на рабо́те» = I am at work.",
      answer: true,
    },
    {
      id: "a2-u02-test-6", type: "matching",
      text: "Noun → gender:",
      prompts: [
        { id: "p1", label: "площадь" }, { id: "p2", label: "театр" }, { id: "p3", label: "море" },
      ],
      responses: [
        { id: "r1", label: "neuter" }, { id: "r2", label: "masculine" }, { id: "r3", label: "feminine" },
      ],
      answer: { p1: "r3", p2: "r2", p3: "r1" },
    },
    {
      id: "a2-u02-test-7", type: "ordering",
      text: "Build: **She works at a school.**",
      items: [
        { id: "1", label: "Она" }, { id: "2", label: "работает" }, { id: "3", label: "в" }, { id: "4", label: "школе" },
      ],
      answer: ["1", "2", "3", "4"],
    },
  ],
};
