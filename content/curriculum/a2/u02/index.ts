import type { Unit } from "@/lib/curriculum/types";

/**
 * A2 · Unit 2 — First cases, one step at a time. Notes v2:
 * elaborate plain-English explanations with English contrasts.
 */
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
          body: `Every Russian noun belongs to one of three genders — masculine, feminine or neuter — and unlike French or German, Russian lets you **read the gender straight off the ending** about 90% of the time:

- Ends in a **consonant** (до́м, го́род, университе́т) → **masculine**
- Ends in **-а / -я** (у́лица, му́зыка, не́деля) → **feminine**
- Ends in **-о / -е** (письмо́, мо́ре, зда́ние) → **neuter**
- Ends in **-й** (музе́й, σουvenir... no: сувени́р is consonant; музе́й) or soft **-ь** → usually **masculine** (музе́й, слова́рь), though a small set of -ь nouns are feminine (пло́щадь, дверь) — those you learn with the word, like accounting for exceptions in any language.

Why should a word for "table" have a gender at all? Because gender is not about sex — it is a filing system. It tells every adjective, every past-tense verb and every pronoun which ending to take: краси́вый го́род, краси́вая у́лица, краси́вое мо́ре; го́род стои́л, у́лица стои́ла. Once you know a noun's gender, a whole chain of other forms decides itself.`,
          why: `Gender endings are the visible tracks of case endings: masculine nouns keep a bare consonant, feminine nouns carry the historical -а, neuters carry -о/-е. Because the endings are so consistent, the gender is not arbitrary data to memorise — it is printed on the word itself.`,
          table: {
            headers: ["Gender", "Ending", "Example"],
            rows: [
              ["masculine", "consonant, -й, -ь", "дом, музей, словарь"],
              ["feminine", "-а, -я, -ь", "улица, музыка, площадь"],
              ["neuter", "-о, -е", "письмо, море"],
            ],
          },
          examples: [
            { ru: "Го'род большо'й, а у'лицы у'зкие.", en: "The city is big, but the streets are narrow — adjective agrees with each noun." },
            { ru: "Это но'вое кафе' у мо'ря.", en: "That's a new café by the sea — neuter agreement." },
          ],
          tip: "Two famous troublemakers: **кино́** and **метро́** end in -о but are masculine, because they are chopped-off abbreviations (кинематограф, метрополитен). You will meet them in your first week — just memorise those two and move on.",
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
          body: `When a noun is the **direct object** — the thing the verb acts on — Russian switches it into the **accusative case**. English manages with word order alone (*I read the book* — swap the words and the meaning flips); Russian instead changes the noun's ending, which frees up word order for emphasis.

For **inanimate things** the system is delightfully light:
- Masculine and neuter nouns **do not change at all**: Я чита́ю журна́л. Я чита́ю письмо́.
- Feminine **-а → -у**: кни́га → Я чита́ю кни́гу; **-я → -ю**: му́зыка → слу́шаю му́зыку.

So the entire workload falls on feminine nouns in -а/-я. Everything else keeps its dictionary form.`,
          why: `Why do only feminines move? Historical accident with a pattern: the -у/-ю ending was originally a separate object-marker that attached to one class of nouns and then spread only to feminine -а/-я words. Masculine objects stay "nominative-looking" because the accusative form they would have had merged with the nominative centuries ago.`,
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
            { ru: "Я пью' чай без са'хара.", en: "I drink tea without sugar — tea is masculine, unchanged." },
            { ru: "Она' пи'шет ру'чкой, а не карандашо'м.", en: "She writes with a pen, not a pencil — different case, but note ручку would be the object form." },
          ],
          tip: "The error to kill early: making masculine objects change. «Я чита́ю кни́гу» is right, but «Я пью ча́ю» (at this stage) and «Я ви́жу домов»-type overcorrections are not. Rule of thumb: **only feminine -а/-я nouns visibly move.**",
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
          body: `Russian splits objects into **animate** (alive: people, animals) and **inanimate** (everything else) — a distinction English never makes. For animate masculine nouns, the accusative borrows the **genitive** ending -а/-я: бра́т → Я ви́жу бра́та; кот → Я ви́жу кота́.

Feminine animates work exactly like objects did in the previous lesson (сестра́ → сестру́). What changes the game conceptually: now a sentence like «Я зна́ю э́того челове́ка» shows the *person* marked, and the marking agrees in an unexpected place — the adjective too (**э́того**, not э́тот).

A quick sanity test students find useful: can it walk away and complain? Then it's animate. Кот — yes. Книга — no. Слова́рь — no (despite containing "words").`,
          why: `The animate/inanimate split is ancient grammar memory: objects that could act back were grammatically treated more like recipients. Russian kept the distinction with remarkable discipline — it even applies to chess pieces (виннова́я фи́гура... skip) and to nouns like поко́йник (deceased) versus труп (corpse): one is animate, the other isn't. Language is dark sometimes.`,
          table: {
            headers: ["Nominative", "Accusative"],
            rows: [
              ["брат (m anim)", "брата"],
              ["кот (m anim)", "кота"],
              ["сестра (f)", "сестру"],
              ["журнал (m inan)", "журнал"],
            ],
          },
          examples: [
            { ru: "Я ви'жу бра'та и сестру' каждый день.", en: "I see my brother and sister every day." },
            { ru: "Она' лю'бит своего' пса.", en: "She loves her dog — пёс → пса." },
          ],
          tip: "The classic mix-up: «Я ви́жу бра́т» — forgetting the shift for people. Anchor sentence: **Я ви́жу бра́та, а не бра́та... — Я ви́жу бра́та.** One memorised sentence («Я ви́жу бра́та») is worth five rules here.",
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
          body: `To say where you or something **is** (not where it is going — that's the next lesson), Russian uses the **prepositional case**, which exists only after a handful of prepositions: в (in), на (on/at), о/об (about), при (at the time of).

The formation is friendly: almost everything ends in **-е**. Masculine consonants grow -е (в го́роде, в музе́е), feminine -а/-я trade their ending for -е/-и (в шко́ле, в Росси́и — note -ия → -ии), and neuters swap -о/-е for stressed -е (окно́ → в окне́, мо́ре → в мо́ре). The case is easy to form and impossible to use alone — it never appears without one of its prepositions (в, на, о/об, при), which is exactly why it is called the PREPOsitional.`,
          table: {
            headers: ["Nominative", "Prepositional"],
            rows: [
              ["город", "в городе"],
              ["музей", "в музее"],
              ["Россия", "в России"],
              ["работа", "на работе"],
            ],
          },
          examples: [
            { ru: "Я живу' в обще'житии.", en: "I live in the dorm — -ие → -ии." },
            { ru: "Мы говоря'м о фи'льмах, а не о поли'тике.", en: "We talk about films, not politics." },
          ],
          tip: "Choose в or на by meaning, not by rule-matching: в = enclosed (в шко́ле), на = open spaces, events, and fixed points (на у́лице, на конце́рте, на рабо́те, на по́чте). Learners who try to reduce this to logic go crazy; treat the на-set as a vocabulary habit.",
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
          body: `Russian marks the difference between **being somewhere** and **heading somewhere** entirely through case:

- **Где?** (where are you?) → в/на + **prepositional**: Я в шко́ле. — I am at school.
- **Куда́?** (where to?) → в/на + **accusative**: Я иду́ в шко́лу. — I am going to school.

Same preposition, different case, different reality. With feminine nouns you can see it plainly: в Росси́и (in Russia) vs в Росси́ю (to Russia). With masculine nouns the difference is invisible (в теа́тре vs в теа́тр) — you still know which is which from the verb (idyom vs est).`,
          why: `This pair (prepositional = static location, accusative = direction) is one of the most systematic things in Russian. It never wobbles: если you can ask где?, it is prepositional; если куда́?, it is accusative. Learners who anchor on the two question words stop mixing them up within a week.`,
          table: {
            headers: ["Question", "Case", "Example"],
            rows: [
              ["Где ты?", "prep", "в театре"],
              ["Куда ты идёшь?", "acc", "в театр"],
            ],
          },
          examples: [
            { ru: "Мы е'дем в Росси'ю в авгу'сте.", en: "We're going to Russia in August — direction, so accusative." },
            { ru: "Я уже' в Росси'и.", en: "I'm already in Russia — location, so prepositional." },
          ],
          tip: "Watch the verb: motion verbs (идти́, е́хать) demand direction (accusative); position verbs (быть, жить, рабо́тать) demand location (prepositional). If the sentence has «иду́/е́ду/лети́м», your case radar should beep: accusative.",
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
