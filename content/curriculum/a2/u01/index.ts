import type { Unit } from "@/lib/curriculum/types";

/**
 * A2 · Unit 1 — The present tense system, one step at a time.
 * Rebuilt for step-by-step pacing: each lesson = ONE concept.
 */
export const u01: Unit = {
  id: "a2-u01",
  level: "a2",
  number: 1,
  title: "The present tense: how Russian verbs really work",
  topicIds: ["a2-u01-present-tense"],
  lessons: [
    {
      id: "a2-u01-l1",
      title: "Step 1: the -ть recipe",
      topicIds: ["a2-u01-present-tense"],
      vocab: ["работать", "читать", "делать", "думать", "гулять"],
      grammar: [
        {
          title: "One tense, one recipe",
          body: `Russian has **one present tense** — it covers "I work", "I am working", "I do work".

The recipe:
1. Remove **-ть**: рабо́тать → рабо́та-.
2. Add the person ending:`,
          table: {
            caption: "рабо́тать (to work)",
            headers: ["Person", "Form", "Meaning"],
            rows: [
              ["я", "рабо́таю", "I work"],
              ["ты", "ра́ботаешь", "you work (informal)"],
              ["он / она́", "ра́ботает", "he / she works"],
              ["мы", "ра́ботаем", "we work"],
              ["вы", "ра́ботаете", "you work (plural / polite)"],
              ["они́", "ра́ботают", "they work"],
            ],
          },
          tip: "вы is plural AND polite-singular — always the plural ending.",
        },
      ],
      exercises: [
        {
          id: "a2-u01-l1-e1",
          type: "single",
          text: "Я ___ книгу. (read)",
          options: [{ id: "a", label: "читаю" }, { id: "b", label: "читает" }], answer: "a",
        },
        {
          id: "a2-u01-l1-e2",
          type: "single",
          text: "Мы ___ на улице. (walk)",
          options: [{ id: "a", label: "гуляете" }, { id: "b", label: "гуляем" }], answer: "b",
        },
        {
          id: "a2-u01-l1-e3",
          type: "fill-blank",
          text: "Ты {{blank}} музыку. *(You listen to music.)*",
          answers: ["слушаешь"],
        },
        {
          id: "a2-u01-l1-e4",
          type: "true-false",
          text: "«Я работаешь» is correct for “I work”.",
          answer: false,
        },
      ],
      drills: [
        { kind: "conjugation", count: 3, slots: ["presfut_sg1", "presfut_sg2", "presfut_sg3"] },
      ],
    },
    {
      id: "a2-u01-l2",
      title: "Step 2: the spelling rule (ж, ш, ч, щ → у/а)",
      topicIds: ["a2-u01-present-tense"],
      vocab: ["слушать", "слышать", "держать", "молчать", "платить"],
      grammar: [
        {
          title: "After hushers, write у/а — never ю/я",
          body: `If the я/они form would land after **ж, ш, ч, щ**, Russian writes **у / а**:
- слы́шать → я слы́шу, они́ слы́шат
- держа́ть → я держу́, они́ де́ржат
- молча́ть → я молчу́, они́ мо́лчат`,
          table: {
            headers: ["Infinitive", "я", "они"],
            rows: [
              ["слушать", "слушаю", "слушают"],
              ["слышать", "слышу", "слышат"],
              ["молчать", "молчу", "молчат"],
            ],
          },
          tip: "This is a spelling rule, not a sound change — but it shows up in every dictation.",
        },
      ],
      exercises: [
        {
          id: "a2-u01-l2-e1",
          type: "single",
          text: "Which is spelled correctly?",
          options: [{ id: "a", label: "я учю" }, { id: "b", label: "я учу" }], answer: "b",
        },
        {
          id: "a2-u01-l2-e2",
          type: "fill-blank",
          text: "Они́ всегда́ ___ пра́вду. *(they tell the truth — слышать? no: «говорить пра́вду» is lie… use «Они́ ___ му́зыку» → слы́шат)*",
          answers: ["слышат"],
        },
        {
          id: "a2-u01-l2-e3",
          type: "true-false",
          text: "«они́ пла́тят» is spelled correctly (плати́ть).",
          answer: true,
        },
      ],
      drills: [{ kind: "conjugation", count: 3, slots: ["presfut_pl3"] }],
    },
    {
      id: "a2-u01-l3",
      title: "Step 3: -ить verbs and the consonant shift",
      topicIds: ["a2-u01-present-tense"],
      vocab: ["говорить", "любить", "готовить", "смотреть", "ходить", "звонить"],
      grammar: [
        {
          title: "Soft endings + я/они shift",
          body: `-ить verbs take **-ю/-ишь/-ит/-им/-ите/-ят/-ат**. Many also shift the last consonant **in я and они forms only**:
- люби́ть → я **люблю́**, они́ **лю́бят** (б→бл)
- гото́вить → я гото́влю, они́ гото́вят
- смотре́ть → я смотрю́, они́ смо́трят (е drops)`,
          table: {
            headers: ["", "говорить", "любить", "смотреть"],
            rows: [
              ["я", "говорю", "люблю", "смотрю"],
              ["ты", "говоришь", "любишь", "смотришь"],
              ["они", "говорят", "любят", "смотрят"],
            ],
          },
          tip: "ты/мы/вы forms NEVER shift: ты любишь, мы готовим.",
        },
      ],
      exercises: [
        {
          id: "a2-u01-l3-e1",
          type: "single",
          text: "Я ___ по-русски.",
          options: [{ id: "a", label: "говорю" }, { id: "b", label: "говоришь" }], answer: "a",
        },
        {
          id: "a2-u01-l3-e2",
          type: "fill-blank",
          text: "Мы ___ у́жин. *(cook)*",
          answers: ["готовим"],
        },
        {
          id: "a2-u01-l3-e3",
          type: "fill-blank",
          text: "Они́ телевизор. *(watch)*",
          answers: ["смотрят"],
        },
      ],
      drills: [{ kind: "conjugation", count: 4, slots: ["presfut_sg1", "presfut_pl1", "presfut_pl3"] }],
    },
    {
      id: "a2-u01-l4",
      title: "Step 4: -ова- / -ева- verbs",
      topicIds: ["a2-u01-present-tense"],
      vocab: ["рисовать", "танцевать", "пробовать", "советовать", "чувствовать", "путешествовать"],
      grammar: [
        {
          title: "-ова- / -ева- → -у-",
          body: `Verbs with **-ова-/-ева-** replace it with **-у-** in person forms:
- рисова́ть → я рису́ю, ты рису́ешь, они́ рису́ют
- танцева́ть → я танцу́ю, ты танцу́ешь`,
          table: {
            headers: ["Infinitive", "я", "ты", "они"],
            rows: [
              ["рисовать", "рисую", "рисуешь", "рисуют"],
              ["танцевать", "танцую", "танцуешь", "танцуют"],
              ["пробовать", "пробую", "пробуешь", "пробуют"],
            ],
          },
          tip: "чувствовать also drops its в: я чувствую.",
        },
      ],
      exercises: [
        {
          id: "a2-u01-l4-e1",
          type: "short-answer",
          text: "I am drawing (one word):",
          answer: "рисую",
        },
        {
          id: "a2-u01-l4-e2",
          type: "fill-blank",
          text: "Она́ ___ на вечери́нке. *(dances)*",
          answers: ["танцует"],
        },
      ],
      drills: [{ kind: "conjugation", count: 3, slots: ["presfut_sg1", "presfut_pl3"] }],
    },
    {
      id: "a2-u01-l5",
      title: "Step 5: irregular core — хотеть and мочь",
      topicIds: ["a2-u01-present-tense"],
      vocab: ["хотеть", "мочь", "помочь", "захотеть", "смочь", "можно"],
      grammar: [
        {
          title: "хотеть / мочь by heart",
          body: `Two verbs you need every hour:`,
          table: {
            headers: ["", "хотеть", "мочь"],
            rows: [
              ["я", "хочу", "могу"],
              ["ты", "хочешь", "можешь"],
              ["он / она", "хочет", "может"],
              ["мы", "хотим", "можем"],
              ["вы", "хотите", "можете"],
              ["они", "хотят", "могут"],
            ],
          },
          examples: [
            { ru: "Я хочу' пить.", en: "I want to drink." },
            { ru: "Вы мо'жете помо'чь?", en: "Can you help?" },
          ],
        },
      ],
      exercises: [
        {
          id: "a2-u01-l5-e1",
          type: "single",
          text: "Я ___ спать.",
          options: [{ id: "a", label: "хочу" }, { id: "b", label: "хотят" }], answer: "a",
        },
        {
          id: "a2-u01-l5-e2",
          type: "short-answer",
          text: "(she can) — one word:",
          answer: "может",
        },
        {
          id: "a2-u01-l5-e3",
          type: "true-false",
          text: "«Мы хотим» is correct.",
          answer: true,
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
    {
      id: "a2-u01-l6",
      title: "Step 6: жить, дать, есть, писать — and хочу + infinitive",
      topicIds: ["a2-u01-present-tense"],
      vocab: ["жить", "дать", "есть", "писать", "спать", "искать", "ждать", "сказать"],
      grammar: [
        {
          title: "Four irregulars + the want-to pattern",
          body: `- **жить**: живу́, живёшь, живу́т (ё!)
- **дать**: дам, дашь, даст, дади́м, дади́те, даду́т
- **есть** (eat): ем, ешь, ест, еди́м, еди́те, едя́т
- **писа́ть**: пишу́, пи́шешь (с→ш); **спа́ть**: сплю, спишь
- Want + infinitive: **Я хочу́ чита́ть.** — second verb untouched.`,
          examples: [
            { ru: "Мы живём в Москве'.", en: "We live in Moscow." },
            { ru: "Дай мне во'ду.", en: "Give me water." },
          ],
          tip: "ждать (wait): жду, ждёшь; искать (look for): ищу́, и́щешь.",
        },
      ],
      exercises: [
        {
          id: "a2-u01-l6-e1",
          type: "fill-blank",
          text: "Ты ___ в Ки́еве? *(live)*",
          answers: ["живёшь"],
        },
        {
          id: "a2-u01-l6-e2",
          type: "matching",
          text: "Verb → я-form:",
          prompts: [
            { id: "p1", label: "писать" },
            { id: "p2", label: "спать" },
            { id: "p3", label: "искать" },
          ],
          responses: [
            { id: "r1", label: "я сплю" },
            { id: "r2", label: "я пишу" },
            { id: "r3", label: "я ищу" },
          ],
          answer: { p1: "r2", p2: "r1", p3: "r3" },
        },
        {
          id: "a2-u01-l6-e3",
          type: "ordering",
          text: "Build: **They want to rest.**",
          items: [
            { id: "1", label: "Они" }, { id: "2", label: "хотят" }, { id: "3", label: "отдыхать" },
          ],
          answer: ["1", "2", "3"],
        },
      ],
      drills: [{ kind: "conjugation", count: 4, slots: ["presfut_sg1", "presfut_sg2", "presfut_pl3"] }],
    },
  ],

  test: [
    {
      id: "a2-u01-test-1", type: "short-answer", text: "рабо́тать — form for **вы**", answer: "работаете",
    },
    {
      id: "a2-u01-test-2", type: "short-answer", text: "люби́ть — form for **они**", answer: "любят",
    },
    {
      id: "a2-u01-test-3", type: "short-answer", text: "мочь — form for **я**", answer: "могу",
    },
    {
      id: "a2-u01-test-4", type: "single",
      text: "Which я-form is spelled correctly?",
      options: [{ id: "a", label: "я учю" }, { id: "b", label: "я учу" }], answer: "b",
    },
    {
      id: "a2-u01-test-5", type: "fill-blank",
      text: "Я {{blank}} рисова́ть, {{blank}} нет вре́мени.",
      answers: ["хочу", "но"],
    },
    {
      id: "a2-u01-test-6", type: "matching",
      text: "Match:",
      prompts: [
        { id: "p1", label: "мы / смотреть" },
        { id: "p2", label: "ты / жить" },
        { id: "p3", label: "я / искать" },
      ],
      responses: [
        { id: "r1", label: "смотрим" }, { id: "r2", label: "живёшь" }, { id: "r3", label: "ищу" },
      ],
      answer: { p1: "r1", p2: "r2", p3: "r3" },
    },
    {
      id: "a2-u01-test-7", type: "true-false", text: "«Ты дать» is a correct form.", answer: false,
    },
    {
      id: "a2-u01-test-8", type: "short-answer",
      text: "Translate: **We live in Moscow.** (в Москве́)",
      answer: "мы живём в москве",
    },
  ],
};
