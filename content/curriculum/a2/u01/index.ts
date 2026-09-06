import type { Unit } from "@/lib/curriculum/types";

/**
 * A2 · Unit 1 — The present tense system.
 * Assumes A1 basics (alphabet, pronouns, simple sentences) and rebuilds
 * verb conjugation from zero, since weak grammar is the entry assumption.
 */
export const u01: Unit = {
  id: "a2-u01",
  level: "a2",
  number: 1,
  title: "The present tense: how Russian verbs really work",
  topicIds: ["a2-u01-present-tense"],
  lessons: [
    // ──────────────────────────────────────────────────────────────
    {
      id: "a2-u01-l1",
      title: "Present tense I: the -ть recipe",
      topicIds: ["a2-u01-present-tense"],
      vocab: [
        "работать",
        "читать",
        "слушать",
        "делать",
        "думать",
        "гулять",
        "знать",
        "понимать",
        "спрашивать",
        "отдыхать",
      ],
      grammar: [
        {
          title: "One tense, one recipe",
          body: `Russian has **one present tense** — it covers English "I work", "I am working" and "I do work".

The recipe for almost every verb:
1. Take the infinitive and remove **-ть**: рабо́тать → рабо́та-.
2. Add the ending that matches the person:`,
          table: {
            caption: "рабо́тать (to work) — the model verb",
            headers: ["Person", "Form", "Meaning"],
            rows: [
              ["я", "рабо́таю", "I work"],
              ["ты", "ра́ботаешь", "you work (one person, informal)"],
              ["он / она́", "ра́ботает", "he / she works"],
              ["мы", "ра́ботаем", "we work"],
              ["вы", "ра́ботаете", "you work (plural or polite)"],
              ["они́", "ра́ботают", "they work"],
            ],
          },
          examples: [
            { ru: "Я чита'ю кни'гу.", en: "I am reading a book." },
            { ru: "Ты слу'шаешь му'зыку?", en: "Do you listen to music?" },
            { ru: "Мы де'лаем уро'ки.", en: "We are doing homework." },
          ],
          tip: "вы is used for several people AND for one person politely — it always takes the plural ending (-ете).",
        },
        {
          title: "Two ending sets: -ю / -ешь",
          body: `Verbs ending in **-ать** (and most in **-ять**) take the endings above: -ю, -ешь, -ет, -ем, -ете, -ют.

Two small adjustments:
- If the stem ends in a vowel, я/они get **-ю / -ют** (чита́ть → чита́ю, чита́ют). If it ends in a consonant sound, they get **-у / -ут** (слы́шать → слы́шу, слы́шат).
- After **ж, ш, щ, ч** never write я/ю — write **а/у**: слы́шать → слы́шат (not "слушают").`,
          examples: [
            { ru: "Она' гуля'ет в па'рке.", en: "She is walking in the park." },
            { ru: "Вы зна'ете э'того челове'ка?", en: "Do you know this person?" },
            { ru: "Они' отдыха'ют до'ма.", en: "They are resting at home." },
          ],
          tip: "Stress can shift: я понима́ю but ты пони-ма́ешь keeps stress on -а́. Don't worry about stress patterns yet — the dictionary shows them.",
        },
      ],
      exercises: [
        {
          id: "a2-u01-l1-e1",
          type: "single",
          text: "Я ___ му́зыку. (I listen to music.)",
          options: [
            { id: "a", label: "слушаю" },
            { id: "b", label: "слушаешь" },
            { id: "c", label: "слушают" },
          ],
          answer: "a",
          explanation: "я → -ю: слушаю.",
        },
        {
          id: "a2-u01-l1-e2",
          type: "short-answer",
          text: "Translate: **He works in a shop.** (one word for “works”)",
          answer: "работает",
          accept: ["он работает"],
          explanation: "он/она → -ет: работает.",
        },
        {
          id: "a2-u01-l1-e3",
          type: "fill-blank",
          text: "Ты {{blank}} кни́гу. *(You are reading a book.)*",
          answers: ["читаешь"],
          explanation: "ты → -ешь: читаешь.",
        },
        {
          id: "a2-u01-l1-e4",
          type: "matching",
          text: "Match the pronoun to its ending:",
          prompts: [
            { id: "p1", label: "я" },
            { id: "p2", label: "ты" },
            { id: "p3", label: "мы" },
            { id: "p4", label: "они" },
          ],
          responses: [
            { id: "r1", label: "-ешь" },
            { id: "r2", label: "-ют" },
            { id: "r3", label: "-ю" },
            { id: "r4", label: "-ем" },
          ],
          answer: { p1: "r3", p2: "r1", p3: "r4", p4: "r2" },
        },
        {
          id: "a2-u01-l1-e5",
          type: "ordering",
          text: "Build the sentence: **We are walking in the park.**",
          items: [
            { id: "1", label: "Мы" },
            { id: "2", label: "гуляем" },
            { id: "3", label: "в" },
            { id: "4", label: "парке" },
          ],
          answer: ["1", "2", "3", "4"],
        },
        {
          id: "a2-u01-l1-e6",
          type: "true-false",
          text: "«Они понимают» is the correct form of “they understand”.",
          answer: true,
          explanation: "они → -ют: понимают.",
        },
      ],
      drills: [
        { kind: "conjugation", count: 4, slots: ["presfut_sg1", "presfut_sg2", "presfut_sg3"] },
        { kind: "cloze", count: 2 },
      ],
    },

    // ──────────────────────────────────────────────────────────────
    {
      id: "a2-u01-l2",
      title: "Present tense II: -ить / -еть verbs and little consonant shifts",
      topicIds: ["a2-u01-present-tense"],
      vocab: [
        "говорить",
        "любить",
        "смотреть",
        "учить",
        "готовить",
        "звонить",
        "ходить",
        "иметь",
        "уметь",
        "помнить",
      ],
      grammar: [
        {
          title: "The -ить set: soft endings",
          body: `Verbs ending in **-ить** take a *softer* ending set. The recipe is the same — remove -ть, add:
**-ю/-у, -ишь, -ит, -им, -ите, -ят/-ат**`,
          table: {
            caption: "говори́ть (to speak)",
            headers: ["Person", "Form", "Meaning"],
            rows: [
              ["я", "говорю́", "I speak"],
              ["ты", "говори́шь", "you speak"],
              ["он / она́", "говори́т", "he / she speaks"],
              ["мы", "говори́м", "we speak"],
              ["вы", "говори́те", "you speak"],
              ["они́", "говоря́т", "they speak"],
            ],
          },
          examples: [
            { ru: "Я говорю' по-ру'сски.", en: "I speak Russian." },
            { ru: "Мы лю'бим чита'ть.", en: "We love to read." },
          ],
        },
        {
          title: "Consonant shifts: люблю, смотрю",
          body: `Many common -ить verbs change their last consonant in the **я** and **они** forms. You do not need rules — learn the pair:
- люби́ть → я люблю́, они́ лю́бят (б → бл)
- гото́вить → я гото́влю, они́ гото́вят (в → вл)
- смотре́ть → я смотрю́, они́ смо́трят (е drops out)
- учи́ть → я учу́, они́ у́чат (after ч always у/а)`,
          examples: [
            { ru: "Я очень люблю' Москву'.", en: "I love Moscow very much." },
            { ru: "Что ты смотри'шь?", en: "What are you watching?" },
          ],
          tip: "The **ты/мы/вы** forms never change: ты любишь, мы готовим. Only я and они shift.",
        },
        {
          title: "-еть verbs",
          body: `-еть verbs mostly follow the first set: име́ть → я име́ю, ты име́ешь, они́ име́ют. уметь → уме́ю, уме́ешь…`,
          examples: [
            { ru: "Я уме'ю пла'вать.", en: "I can swim (I know how to swim)." },
          ],
        },
      ],
      exercises: [
        {
          id: "a2-u01-l2-e1",
          type: "single",
          text: "Я ___ по-англи́йски. (I speak English.)",
          options: [
            { id: "a", label: "говорю" },
            { id: "b", label: "говоришь" },
            { id: "c", label: "говорите" },
          ],
          answer: "a",
        },
        {
          id: "a2-u01-l2-e2",
          type: "short-answer",
          text: "Translate: **I love you.** (two words)",
          answer: "я люблю тебя",
          accept: ["люблю тебя"],
          explanation: "любить → люблю; “you” (object) is тебя.",
        },
        {
          id: "a2-u01-l2-e3",
          type: "fill-blank",
          text: "Мы ___ у́жин. *(We are cooking dinner.)*",
          answers: ["готовим"],
          explanation: "мы → -им: готовим (no consonant shift in мы forms).",
        },
        {
          id: "a2-u01-l2-e4",
          type: "fill-blank",
          text: "Они́ ___ телеви́зор. *(They are watching TV.)*",
          answers: ["смотрят"],
          explanation: "смотреть → они смотрят (е drops out).",
        },
        {
          id: "a2-u01-l2-e5",
          type: "true-false",
          text: "«Ты любишь» has a consonant shift (б → бл).",
          answer: false,
          explanation: "Only я/они forms shift: ты любишь is regular.",
        },
        {
          id: "a2-u01-l2-e6",
          type: "ordering",
          text: "Build: **Do you speak Russian?** (polite)",
          items: [
            { id: "1", label: "Вы" },
            { id: "2", label: "говорите" },
            { id: "3", label: "по-русски" },
            { id: "4", label: "?" },
          ],
          answer: ["1", "2", "3", "4"],
        },
      ],
      drills: [
        { kind: "conjugation", count: 4, slots: ["presfut_sg1", "presfut_pl1", "presfut_pl3"] },
        { kind: "cloze", count: 2 },
      ],
    },

    // ──────────────────────────────────────────────────────────────
    {
      id: "a2-u01-l3",
      title: "Present tense III: -ова- / -ева- verbs and spelling rules",
      topicIds: ["a2-u01-present-tense"],
      vocab: [
        "рисовать",
        "пробовать",
        "советовать",
        "чувствовать",
        "танцевать",
        "путешествовать",
        "беседовать",
        "фотографировать",
        "поздравлять",
        "проверять",
      ],
      grammar: [
        {
          title: "-ова- / -ева- → -у-",
          body: `Verbs with **-ова-** or **-ева-** before -ть lose those letters in the person forms and use **-у- / -ю-** plus the first ending set:
- рисова́ть → я рису́ю, ты рису́ешь, они́ рису́ют
- танцева́ть → я танцу́ю, ты танцу́ешь
- пробова́ть → я пробу́ю, ты пробу́ешь`,
          table: {
            headers: ["Infinitive", "я", "ты", "они"],
            rows: [
              ["рисова́ть", "рисую", "рисуешь", "рисуют"],
              ["танцева́ть", "танцую", "танцуешь", "танцуют"],
              ["чувствовать", "чувствую", "чувствуешь", "чувствуют"],
            ],
          },
          examples: [
            { ru: "Я люблю' рисова'ть.", en: "I love to draw." },
            { ru: "Она' танцу'ет очень хорошо'.", en: "She dances very well." },
          ],
          tip: "чувствовать loses its **в** as well: я чувствую (not «чувствую́» — just memorise it).",
        },
        {
          title: "The spelling rule you will use forever",
          body: `After **ж, ш, щ, ч, ц** Russian never writes unstressed я or ю — always **а / у**:
- слы́шать → они́ слы́шат
- у́чить → я учу́
- смотре́ть → смотри́шь is fine (и is allowed after ж/ш/ч — only я/ю are banned).`,
          examples: [
            { ru: "Я всегда' слушаю вас.", en: "I always listen to you." },
          ],
          tip: "Saying it wrong is invisible in speech — but you'll write this correctly in every exercise from now on.",
        },
        {
          title: "-ять verbs: я→я, but check the stem",
          body: `-ять verbs like **поздравля́ть** (to congratulate) and **проверя́ть** (to check) are regular: я поздравля́ю, ты поздравля́ешь, они́ поздравля́ют. The -я- belongs to the stem.`,
        },
      ],
      exercises: [
        {
          id: "a2-u01-l3-e1",
          type: "short-answer",
          text: "Translate: **I am drawing.** (one word)",
          answer: "рисую",
        },
        {
          id: "a2-u01-l3-e2",
          type: "single",
          text: "Она́ ___. (She dances.)",
          options: [
            { id: "a", label: "танцует" },
            { id: "b", label: "танцуют" },
            { id: "c", label: "танцываешь" },
          ],
          answer: "a",
        },
        {
          id: "a2-u01-l3-e3",
          type: "fill-blank",
          text: "Я чу́вствую, {{blank}} ты пра́в. *(I feel that you are right.)* — type the missing word “что”.",
          answers: ["что"],
        },
        {
          id: "a2-u01-l3-e4",
          type: "true-false",
          text: "«Они рисуют» is spelled correctly.",
          answer: true,
        },
        {
          id: "a2-u01-l3-e5",
          type: "matching",
          text: "Match infinitive → я-form:",
          prompts: [
            { id: "p1", label: "пробовать" },
            { id: "p2", label: "советовать" },
            { id: "p3", label: "проверять" },
            { id: "p4", label: "путешествовать" },
          ],
          responses: [
            { id: "r1", label: "я проверяю" },
            { id: "r2", label: "я пробую" },
            { id: "r3", label: "я путешествую" },
            { id: "r4", label: "я советую" },
          ],
          answer: { p1: "r2", p2: "r4", p3: "r1", p4: "r3" },
        },
      ],
      drills: [
        { kind: "conjugation", count: 4, slots: ["presfut_sg1", "presfut_pl3"] },
        { kind: "cloze", count: 2 },
      ],
    },

    // ──────────────────────────────────────────────────────────────
    {
      id: "a2-u01-l4",
      title: "Present tense IV: the verbs you can't live without",
      topicIds: ["a2-u01-present-tense"],
      vocab: [
        "хотеть",
        "мочь",
        "дать",
        "жить",
        "есть",
        "писать",
        "спать",
        "искать",
        "ждать",
        "сказать",
      ],
      grammar: [
        {
          title: "хотеть and мочь — irregular from the root",
          body: `Two ultra-common verbs are irregular in every form. Learn them as music:`,
          table: {
            caption: "хоте́ть (to want) and мочь (can, be able)",
            headers: ["", "хотеть", "мочь"],
            rows: [
              ["я", "хочу́", "могу́"],
              ["ты", "хо́чешь", "мо́жешь"],
              ["он / она́", "хо́чет", "мо́жет"],
              ["мы", "хоти́м", "мо́жем"],
              ["вы", "хоти́те", "мо́жете"],
              ["они́", "хотя́т", "мо́гут"],
            ],
          },
          examples: [
            { ru: "Я хочу' пить.", en: "I want to drink." },
            { ru: "Вы мо'жете мне помо'чь?", en: "Can you help me?" },
          ],
          tip: "хотеть is picky: singular forms (я/ты/он) stress хо́-, plural (мы/вы/они) stress -ти́. Notice я хочу́ is the exception.",
        },
        {
          title: "жить, дать, есть, писать, спать",
          body: `- **жить** (to live): я живу́, ты живёшь, они́ живу́т — note **ё** appears in ты/он forms.
- **дать** (to give): я дам, ты дашь, он даст, мы дади́м, вы дади́те, они́ даду́т — irregular, memorise.
- **есть** (to eat): я ем, ты ешь, он ест, мы еди́м, вы еди́те, они́ едя́т.
- **писа́ть** (to write): я пишу́, ты пи́шешь — с → ш shift.
- **спать** (to sleep): я сплю, ты спишь, они́ спят.`,
          examples: [
            { ru: "Мы живём в го'роде.", en: "We live in the city." },
            { ru: "Дай мне, пожа'луйста, во'ду.", en: "Give me some water, please." },
            { ru: "Я пишу' письма' бабушке.", en: "I write letters to my grandmother." },
          ],
          tip: "ждать (to wait) and искать (to look for) are regular-ish: я жду, ты ждёшь; я ищу, ты и́щешь.",
        },
        {
          title: "Saying what you want to do",
          body: `Want + infinitive: **Я хочу + infinitive.** Nothing changes in the second verb:
- Я хочу́ чита́ть. — I want to read.
- Они́ хотя́т отдохну́ть. — They want to rest.`,
        },
      ],
      exercises: [
        {
          id: "a2-u01-l4-e1",
          type: "single",
          text: "Я ___ спать. (I want to sleep.)",
          options: [
            { id: "a", label: "хочу" },
            { id: "b", label: "хочешь" },
            { id: "c", label: "хотят" },
          ],
          answer: "a",
        },
        {
          id: "a2-u01-l4-e2",
          type: "short-answer",
          text: "Translate: **She can't come today.** — just the verb: (she can)",
          answer: "может",
          accept: ["она может"],
        },
        {
          id: "a2-u01-l4-e3",
          type: "fill-blank",
          text: "Ты {{blank}} в Ки́еве? *(Do you live in Kyiv?)*",
          answers: ["живёшь"],
        },
        {
          id: "a2-u01-l4-e4",
          type: "matching",
          text: "Match the verb to its я-form:",
          prompts: [
            { id: "p1", label: "писать" },
            { id: "p2", label: "спать" },
            { id: "p3", label: "искать" },
            { id: "p4", label: "дать" },
          ],
          responses: [
            { id: "r1", label: "я дам" },
            { id: "r2", label: "я пишу" },
            { id: "r3", label: "я ищу" },
            { id: "r4", label: "я сплю" },
          ],
          answer: { p1: "r2", p2: "r4", p3: "r3", p4: "r1" },
        },
        {
          id: "a2-u01-l4-e5",
          type: "true-false",
          text: "«Мы хотим» is the correct form for “we want”.",
          answer: true,
        },
        {
          id: "a2-u01-l4-e6",
          type: "ordering",
          text: "Build: **They want to rest.**",
          items: [
            { id: "1", label: "Они" },
            { id: "2", label: "хотят" },
            { id: "3", label: "отдыхать" },
          ],
          answer: ["1", "2", "3"],
        },
      ],
      drills: [
        { kind: "conjugation", count: 5, slots: ["presfut_sg1", "presfut_sg2", "presfut_pl3"] },
        { kind: "cloze", count: 3 },
      ],
    },
  ],

  test: [
    {
      id: "a2-u01-test-1",
      type: "short-answer",
      text: "рабо́тать — form for **вы**",
      answer: "работаете",
    },
    {
      id: "a2-u01-test-2",
      type: "short-answer",
      text: "люби́ть — form for **они**",
      answer: "любят",
    },
    {
      id: "a2-u01-test-3",
      type: "short-answer",
      text: "мочь — form for **я**",
      answer: "могу",
    },
    {
      id: "a2-u01-test-4",
      type: "single",
      text: "Она́ ___ в больни́це. (She works in a hospital.)",
      options: [
        { id: "a", label: "работает" },
        { id: "b", label: "работают" },
        { id: "c", label: "работаете" },
      ],
      answer: "a",
    },
    {
      id: "a2-u01-test-5",
      type: "single",
      text: "Which я-form is spelled correctly?",
      options: [
        { id: "a", label: "я учю" },
        { id: "b", label: "я учу" },
        { id: "c", label: "я учю́" },
      ],
      answer: "b",
      explanation: "After ч always у, never ю.",
    },
    {
      id: "a2-u01-test-6",
      type: "fill-blank",
      text: "Я {{blank}} рисова́ть, {{blank}} у меня́ нет вре́мени. *(I want to draw, but I have no time.)*",
      answers: ["хочу", "но"],
    },
    {
      id: "a2-u01-test-7",
      type: "matching",
      text: "Match:",
      prompts: [
        { id: "p1", label: "мы / смотреть" },
        { id: "p2", label: "ты / жить" },
        { id: "p3", label: "они / готовить" },
        { id: "p4", label: "я / искать" },
      ],
      responses: [
        { id: "r1", label: "смотрят" },
        { id: "r2", label: "живёшь" },
        { id: "r3", label: "смотрим" },
        { id: "r4", label: "готовят" },
        { id: "r5", label: "ищу" },
        { id: "r6", label: "живу" },
      ],
      answer: { p1: "r3", p2: "r2", p3: "r4", p4: "r5" },
    },
    {
      id: "a2-u01-test-8",
      type: "true-false",
      text: "«Ты дать» is a correct form.",
      answer: false,
      explanation: "ты → дашь.",
    },
    {
      id: "a2-u01-test-9",
      type: "ordering",
      text: "Build: **I want to speak Russian.**",
      items: [
        { id: "1", label: "Я" },
        { id: "2", label: "хочу" },
        { id: "3", label: "говорить" },
        { id: "4", label: "по-русски" },
      ],
      answer: ["1", "2", "3", "4"],
    },
    {
      id: "a2-u01-test-10",
      type: "short-answer",
      text: "Translate: **We live in Moscow.** (use «в Москве́»)",
      answer: "мы живём в москве",
    },
  ],
};
