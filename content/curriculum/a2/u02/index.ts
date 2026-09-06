import type { Unit } from "@/lib/curriculum/types";

/** A2 · Unit 2 — Nominative, accusative & prepositional: your first cases. */
export const u02: Unit = {
  id: "a2-u02",
  level: "a2",
  number: 2,
  title: "First cases: naming, objecting, locating",
  topicIds: ["a2-u02-cases-rap"],
  lessons: [
    {
      id: "a2-u02-l1",
      title: "Gender: every noun has one",
      topicIds: ["a2-u02-cases-rap"],
      vocab: [
        "город",
        "дом",
        "парк",
        "улица",
        "музей",
        "кино",
        "школа",
        "музыка",
        "письмо",
        "вопрос",
      ],
      grammar: [
        {
          title: "Three genders, read from the ending",
          body: `Every Russian noun is **masculine, feminine or neuter**. You can tell from the dictionary ending:
- consonant (дом, го́род) → **masculine**
- **-а / -я** (у́лица, му́зыка) → **feminine**
- **-о / -е** (письмо́, мо́ре) → **neuter**
- **-ь** can be either — learn those with their gender (музе́й is masculine; look at -й = masculine too).

Gender matters because adjectives and past-tense verbs agree with it: краси́вый го́род, краси́вая у́лица, краси́вое мо́ре.`,
          table: {
            headers: ["Gender", "Typical ending", "Examples"],
            rows: [
              ["masculine", "consonant, -й, -ь", "дом, музе́й, слова́рь"],
              ["feminine", "-а, -я, -ь", "у́лица, му́зыка, дверь"],
              ["neuter", "-о, -е", "письмо́, мо́ре, кино́"],
            ],
          },
          examples: [
            { ru: "Го'род большо'й.", en: "The city is big." },
            { ru: "У'лица ти'хая.", en: "The street is quiet." },
          ],
          tip: "кино́ and метро́ end in -о but are masculine (they're abbreviations). Treat them as exceptions to memorise.",
        },
        {
          title: "It / he / she follows gender",
          body: `он = he/it (masculine), она́ = she/it (feminine), оно́ = it (neuter). Russian uses он/она́ for objects too:
- Где дом? — Он тут. (Where is the house? — It's here.)
- Где му́зыка? — Она́ тут.`,
        },
      ],
      exercises: [
        {
          id: "a2-u02-l1-e1",
          type: "matching",
          text: "Match each noun to its gender:",
          prompts: [
            { id: "p1", label: "музей" },
            { id: "p2", label: "музыка" },
            { id: "p3", label: "письмо" },
            { id: "p4", label: "дом" },
          ],
          responses: [
            { id: "r1", label: "feminine" },
            { id: "r2", label: "masculine" },
            { id: "r3", label: "neuter" },
          ],
          answer: { p1: "r2", p2: "r1", p3: "r3", p4: "r2" },
          explanation: "-й masculine, -а feminine, -о neuter.",
        },
        {
          id: "a2-u02-l1-e2",
          type: "single",
          text: "Which noun is feminine?",
          options: [
            { id: "a", label: "улица" },
            { id: "b", label: "город" },
            { id: "c", label: "кино" },
          ],
          answer: "a",
        },
        {
          id: "a2-u02-l1-e3",
          type: "fill-blank",
          text: "Где шко́ла? — {{blank}} тут. *(Where is the school? — It (she) is here.)*",
          answers: ["она"],
        },
        {
          id: "a2-u02-l1-e4",
          type: "true-false",
          text: "«Письмо́» is masculine.",
          answer: false,
          explanation: "-о ending → neuter.",
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },

    {
      id: "a2-u02-l2",
      title: "The accusative: I see what?",
      topicIds: ["a2-u02-cases-rap"],
      vocab: [
        "брат",
        "сестра",
        "мать",
        "отец",
        "друг",
        "кошка",
        "собака",
        "книга",
        "чай",
        "кофе",
      ],
      grammar: [
        {
          title: "What the accusative does",
          body: `The **accusative** marks the *direct object* — the thing or person the verb acts on. English does this with word order; Russian does it with endings:
- Я чита́ю кни́гу. — I am reading a book (кни́га → кни́гу).
- Я ви́жу дом. — I see the house (masculine: no change!).`,
          table: {
            caption: "Accusative singular endings (inanimate things)",
            headers: ["Gender", "Nominative", "Accusative"],
            rows: [
              ["masculine", "дом, чай", "дом, чай (unchanged)"],
              ["feminine -а", "кни́га", "кни́гу (-а → -у)"],
              ["feminine -я", "му́зыка", "му́зыку (-я → -ю)"],
              ["neuter", "письмо́", "письмо́ (unchanged)"],
            ],
          },
          examples: [
            { ru: "Я пью' чай.", en: "I am drinking tea." },
            { ru: "Она' слушает му'зыку.", en: "She is listening to music." },
          ],
          tip: "Masculine and neuter objects look exactly like the dictionary form. Only feminine -а/-я nouns change.",
        },
        {
          title: "People and animals: animate accusative",
          body: `For **living beings** (animate), the masculine accusative copies the *genitive* (-а/-я), not the nominative:
- Я ви́жу бра́та. — I see (my) brother.
- Я зна́ю э́того челове́ка. — I know this person.
Feminine animate is the same as inanimate: Я ви́жу сестру́.
Animals count as animate: Я ви́жу кота́. (кото́в for plural, later)`,
          examples: [
            { ru: "Я люблю' мою' соба'ку.", en: "I love my dog." },
            { ru: "Она' встре'тила дру'га.", en: "She met a friend." },
          ],
          tip: "Test: can it walk and protest? Then it's animate. Кот — animate. Книга — not.",
        },
      ],
      exercises: [
        {
          id: "a2-u02-l2-e1",
          type: "single",
          text: "Я чита́ю ___. (a book)",
          options: [
            { id: "a", label: "книга" },
            { id: "b", label: "книгу" },
            { id: "c", label: "книге" },
          ],
          answer: "b",
        },
        {
          id: "a2-u02-l2-e2",
          type: "single",
          text: "Я ви́жу ___. (my brother)",
          options: [
            { id: "a", label: "брат" },
            { id: "b", label: "брата" },
            { id: "c", label: "брату" },
          ],
          answer: "b",
          explanation: "Animate masculine → -а.",
        },
        {
          id: "a2-u02-l2-e3",
          type: "fill-blank",
          text: "Она́ пьёт {{blank}}. *(She is drinking coffee.)*",
          answers: ["кофе"],
          explanation: "кофе is an indeclinable borrowing — it never changes.",
        },
        {
          id: "a2-u02-l2-e4",
          type: "fill-blank",
          text: "Я ви́жу {{blank}}. *(I see the cat. — masculine animate)*",
          answers: ["кота"],
        },
        {
          id: "a2-u02-l2-e5",
          type: "true-false",
          text: "«Я ви́жу дом» — the word дом changes here.",
          answer: false,
          explanation: "Inanimate masculine accusative = nominative.",
        },
      ],
      drills: [
        { kind: "noun-case", count: 4, cases: ["acc"] },
        { kind: "cloze", count: 2 },
      ],
    },

    {
      id: "a2-u02-l3",
      title: "Prepositional: where it's at",
      topicIds: ["a2-u02-cases-rap"],
      vocab: [
        "работа",
        "магазин",
        "аптека",
        "театр",
        "площадь",
        "море",
        "город",
        "Россия",
        "Москва",
        "Англия",
      ],
      grammar: [
        {
          title: "в / на + prepositional = location",
          body: `To say where you are, use **в** (in) or **на** (on/at) + the **prepositional case**. The prepositional exists ONLY with a preposition (в, на, о, при).
Endings: masculine consonant → +**е** (в го́роде), -й → **-е** (в музе́е), -а → **-е** (в шко́ле), -о/-е → **-е** (в письме́), -ия → **-ии** (в Росси́и).`,
          table: {
            headers: ["Nominative", "в / на + Prep.", "Meaning"],
            rows: [
              ["город", "в городе", "in the city"],
              ["музей", "в музее", "in the museum"],
              ["работа", "на работе", "at work"],
              ["море", "на море", "at the sea"],
              ["Россия", "в России", "in Russia"],
              ["Англия", "в Англии", "in England"],
            ],
          },
          examples: [
            { ru: "Я живу' в Москве'.", en: "I live in Moscow." },
            { ru: "Она' рабо'тает в шко'ле.", en: "She works at a school." },
            { ru: "Мы на' море.", en: "We are at the sea." },
          ],
          tip: "в vs на: use **на** for events (на конце́рте), open spaces (на у́лице, на пло́щади), and fixed spots (на рабо́те, на по́чте). Everything enclosed → **в**.",
        },
        {
          title: "About it: о / об + prepositional",
          body: `**о** (about) also takes prepositional: о го́роде (about the city), о му́зыке, о Росси́и. Before a vowel use **об**: об Англии, о́бе... no — just remember об + vowel (об э́том).`,
          examples: [
            { ru: "Мы говори'м о му'зыке.", en: "We are talking about music." },
          ],
        },
        {
          title: "Where to vs where at: в + accusative!",
          body: `**Where to?** (direction) uses **в/на + accusative** — the case you learned in lesson 2!
- Куда́ ты идёшь? — В магази́н. (to the shop — accusative, no ending change for masculine)
- Я иду́ в Росси́ю. (Росси́я → Росси́ю)
**Where at?** → в/на + prepositional. Compare: Я иду́ в шко́лу (to) / Я в шко́ле (at).`,
          examples: [
            { ru: "Мы е'дем в Англию.", en: "We are going to England." },
          ],
          tip: "Direction = accusative (куда́?), location = prepositional (где?). This one pair of questions will keep you out of trouble all course long.",
        },
      ],
      exercises: [
        {
          id: "a2-u02-l3-e1",
          type: "single",
          text: "Я живу́ в ___. (Moscow)",
          options: [
            { id: "a", label: "Москва" },
            { id: "b", label: "Москве" },
            { id: "c", label: "Москву" },
          ],
          answer: "b",
        },
        {
          id: "a2-u02-l3-e2",
          type: "single",
          text: "Куда́ ты идёшь? — В ___. (to the theatre)",
          options: [
            { id: "a", label: "театре" },
            { id: "b", label: "театр" },
            { id: "c", label: "театру" },
          ],
          answer: "b",
          explanation: "Direction → accusative; masculine inanimate accusative = номinative form.",
        },
        {
          id: "a2-u02-l3-e3",
          type: "fill-blank",
          text: "Она́ всегда́ на {{blank}} до пяти́. *(She is always at work until five.)*",
          answers: ["работе"],
        },
        {
          id: "a2-u02-l3-e4",
          type: "fill-blank",
          text: "Мы говори́м о {{blank}}. *(We are talking about Russia.)*",
          answers: ["России"],
        },
        {
          id: "a2-u02-l3-e5",
          type: "matching",
          text: "Location or direction? Match the question to its case:",
          prompts: [
            { id: "p1", label: "Где ты?" },
            { id: "p2", label: "Куда́ ты идёшь?" },
          ],
          responses: [
            { id: "r1", label: "в/на + prepositional" },
            { id: "r2", label: "в/на + accusative" },
          ],
          answer: { p1: "r1", p2: "r2" },
        },
      ],
      drills: [
        { kind: "noun-case", count: 3, cases: ["prep"] },
        { kind: "cloze", count: 3 },
      ],
    },
  ],

  test: [
    {
      id: "a2-u02-test-1",
      type: "single",
      text: "Я чита́ю ___.",
      options: [
        { id: "a", label: "письмо" },
        { id: "b", label: "письму" },
        { id: "c", label: "письме" },
      ],
      answer: "a",
      explanation: "Neuter accusative = nominative.",
    },
    {
      id: "a2-u02-test-2",
      type: "single",
      text: "Я ви́жу ___. (my sister)",
      options: [
        { id: "a", label: "сестра" },
        { id: "b", label: "сестру" },
        { id: "c", label: "сестры" },
      ],
      answer: "b",
    },
    {
      id: "a2-u02-test-3",
      type: "short-answer",
      text: "Where is the museum? Use «в + prepositional»: (in the museum)",
      answer: "в музее",
    },
    {
      id: "a2-u02-test-4",
      type: "short-answer",
      text: "I live in England: (use в + one word)",
      answer: "я живу в англии",
    },
    {
      id: "a2-u02-test-5",
      type: "fill-blank",
      text: "Куда́ вы е́дете? — В {{blank}}. *(To Russia.)*",
      answers: ["Россию"],
    },
    {
      id: "a2-u02-test-6",
      type: "true-false",
      text: "«Я на работе» means “I am at work”.",
      answer: true,
    },
    {
      id: "a2-u02-test-7",
      type: "matching",
      text: "Match noun → gender:",
      prompts: [
        { id: "p1", label: "площадь" },
        { id: "p2", label: "театр" },
        { id: "p3", label: "море" },
      ],
      responses: [
        { id: "r1", label: "neuter" },
        { id: "r2", label: "masculine" },
        { id: "r3", label: "feminine" },
      ],
      answer: { p1: "r3", p2: "r2", p3: "r1" },
      explanation: "-ь feminine here (пло́щадь), театр masculine, море neuter.",
    },
    {
      id: "a2-u02-test-8",
      type: "ordering",
      text: "Build: **She works at a school.**",
      items: [
        { id: "1", label: "Она" },
        { id: "2", label: "работает" },
        { id: "3", label: "в" },
        { id: "4", label: "школе" },
      ],
      answer: ["1", "2", "3", "4"],
    },
  ],
};
