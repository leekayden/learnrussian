import type { Unit } from "@/lib/curriculum/types";

/**
 * A2 · Unit 1 — The present tense system, one step at a time.
 * Notes v2: elaborate but plain-English explanations, young-adult register,
 * explicit contrast with English, annotated examples, reasoning callouts.
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
          body: `Here is the single most useful fact about Russian verbs: there is exactly **one present tense**. English forces you to choose between "I work", "I am working" and "I do work" — Russian uses the same verb form for all three. «Я рабо́таю» can mean *I work (every day)*, *I am working (right now)* or *I do work (unlike my roommate)*. The sentence around it decides which reading you get; the verb itself never changes.

Every regular verb follows the same two-step recipe. First, take the infinitive — the dictionary form ending in **-ть** — and remove it: рабо́тать → рабо́та-. What is left is called the **stem**, and it carries the meaning. Second, attach the ending that matches who is doing the action. You are not memorising six different verbs; you are learning **one stem plus six endings**, and the same six endings recycle through thousands of verbs:

- **-ю** for я (I)
- **-ешь** for ты (you, one person, informal)
- **-ет** for он/она́ (he/she)
- **-ем** for мы (we)
- **-ете** for вы (you plural, and also "you" when being polite)
- **-ют** for они́ (they)

Notice something convenient: the endings all contain **е** (ешь, ет, ем, ете). This family of verbs is therefore called the **first conjugation** or the **-е- family**. Once you can hear that -е-, you can produce every form.`,
          plain: `Russian verbs have only one present tense. Learn one set of endings, swap them for whoever is acting, and that single form covers I work, I am working and I do work.`,
          why: `English marks "who is acting" with a subject pronoun and mostly leaves the verb alone — the only change is the -s on *he/she works*. Russian goes the other way: the **ending itself** announces who is acting, so the pronoun can even be dropped («Рабо́таю» = *I'm working*). That is why memorising the endings matters more here than it ever did in English.`,
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
            { ru: "Я чита'ю много. ", en: "I read a lot — could be a habit or right now; Russian doesn't say." },
            { ru: "Ты слу'шаешь подка'сты?", en: "Do you listen to podcasts? Note -ешь for ты." },
            { ru: "Мы гуля'ем в па'рке каждый день.", en: "We walk in the park every day — -ем for мы." },
          ],
          tip: "The most common mistake at this stage is mixing up **-ешь** and **-ете**. They look almost identical. Fix it by remembering that **-ете** comes with **вы** and both have that 'polite, formal' length to them: *вы* and *-ете* go together, *ты* and *-ешь* stay short.",
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
          body: `Russian has a centuries-old spelling rule that will follow you through every case and every verb: after the "hushing" consonants **ж, ш, ч, щ** (and ц), you may not write the letters **ю** or **я** in unstressed endings — you write **у / а** instead. This is pure spelling: the *sound* is almost identical, but Russian writing keeps the letters honest.

So with слы́шать (to hear), the я-form is **слы́шу** (never "слушю") and the они-form is **слы́шат** (never "слушают"). The same applies to держа́ть (to hold) → держу́, де́ржат and молча́ть (to be silent) → молчу́, мо́лчат.

Why should you care so early? Because this rule silently explains dozens of forms you will meet: **учу́** (I teach), **плачу́** (I pay), **ищу́** (I search). Learners who skip it keep writing illegal forms like "учю" for years. Thirty seconds of attention now saves all of that.`,
          plain: `This one is pure spelling: after ж, ш, ч, щ write у or а in endings, never ю or я. The sound barely changes — you just cannot write 'учю'.`,
          why: `The rule exists because ю/я historically signalled a *soft* (palatalised) consonant before them. Ж, ш, ч, щ are already hushing sounds that could not stay soft in endings, so the spelling settled on у/а. You are not learning an arbitrary exception — you are seeing a 1000-year-old sound law in action.`,
          table: {
            headers: ["Infinitive", "я", "они"],
            rows: [
              ["слушать", "слушаю", "слушают"],
              ["слышать", "слышу", "слышат"],
              ["молчать", "молчу", "молчат"],
            ],
          },
          examples: [
            { ru: "Я всегда' слу'шаю подка'сты в доро'ге.", en: "I always listen to podcasts on the way — ш + у." },
            { ru: "Они' молча'т на ле'кциях.", en: "They sit silent in lectures — ч + а." },
          ],
          tip: "The rule bans **ю/я** only after ж/ш/ч/щ/ц in endings. After any other consonant, write ю/я as normal (игра́ть → игра́ют). Stress changes nothing here.",
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
          text: "Они́ ___ му́зыку в нау́шниках. *(hear — they wear headphones)*",
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
          title: "The second family: -ишь, -ит, -им, -ите, -ят",
          body: `Verbs ending in **-ить** form the **second conjugation**. Their endings are the mirror image of the first family — everywhere the first family had е, this one has **и**: говорю́, говори́шь, говори́т, говори́м, говори́те, говоря́т.

Two complications make this family feel trickier than it is:

**1. The я/они forms shift the final consonant.** In roughly half of common -ить verbs, the last consonant of the stem softens or doubles in the я and они forms: люби́ть → я **люблю́**, они́ **лю́бят** (б grows an л); гото́вить → я гото́влю (в grows an л). The middle of the table is untouched — ты лю́бишь, мы лю́бим, вы лю́бите are perfectly regular.

**2. Some -еть verbs belong here too.** смотре́ть looks first-conjugation but conjugates soft: я смотрю́, ты смо́тришь, они́ смо́трят. The dictionary flags these; after two or three you start predicting them correctly.`,
          plain: `The second verb family uses и endings: ты говоришь, мы говорим. In about half of these verbs only the я and они forms change their consonant — the other four stay perfectly regular.`,
          why: `Why does the shift happen only in я and они? Those two endings historically began with a vowel (-ю, -ят) that pressed against the stem and palatalised its final consonant; the other endings started with и/е sounds that fit without pressure. The result: two "special" forms per verb, four regular ones. That 2-out-of-6 asymmetry is normal in Russian and worth expecting rather than fighting.`,
          table: {
            headers: ["", "говорить", "любить", "смотреть"],
            rows: [
              ["я", "говорю", "люблю", "смотрю"],
              ["ты", "говоришь", "любишь", "смотришь"],
              ["он / она", "говорит", "любит", "смотрит"],
              ["мы", "говорим", "люби"],
              ["вы", "говорите", "любите", "смотрите"],
              ["они", "говорят", "любят", "смотрят"],
            ],
          },
          examples: [
            { ru: "Я говорю' по-ру'сски каждый день.", en: "I speak Russian every day." },
            { ru: "Мы гото'вим у'жин вме'сте.", en: "We cook dinner together — no shift in мы forms." },
            { ru: "Они' смо'трат сериа'л без перево'да.", en: "They watch the series without translation." },
          ],
          tip: "The classic overcorrection is shifting where you shouldn't: **ты гото́вишь** keeps вл-free — the shift belongs only to я and они́. Drill the pattern as two special forms per verb and four boring ones; that framing prevents most errors.",
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
          text: "Они телевизор. *(watch)*",
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
          body: `A large, well-behaved family of verbs contains **-ова-** or **-ева-** right before the -ть: рисова́ть (to draw), та́нцевать (to dance), пробова́ть (to try), сове́товать (to advise), путеше́ствовать (to travel).

In the person forms, that chunk collapses to **-у-**: рисова́ть → я рису́ю, ты рису́ешь, они́ рису́ют. The -ова- is only there to hold the infinitive together.

One verb in this family drops an extra letter: **чувствовать** → я **чувствую** (the first в vanishes). You will meet it constantly — feelings come up in every conversation — so treat «я чувствую» as a single memorised chunk rather than a puzzle.`,
          plain: `Verbs with -ова- or -ева- in the middle drop that piece when you use them: рисовать becomes я рисую. Dance, try, advise, travel — they all follow this one move.`,
          why: `The -ова- suffix is an old verb-builder that rode along with hundreds of borrowed activities (танцева́ть from French danser, организова́ть, координи́ровать). It survives in the infinitive only; the moment personal endings attach, Russian strips it back down to -у-. That is why so many "international" activities follow this pattern automatically.`,
          table: {
            headers: ["Infinitive", "я", "ты", "они"],
            rows: [
              ["рисовать", "рисую", "рисуешь", "рисуют"],
              ["танцевать", "танцую", "танцуешь", "танцуют"],
              ["пробовать", "пробую", "пробуешь", "пробуют"],
            ],
          },
          examples: [
            { ru: "Я рису'ю, когда' нервни'чаю.", en: "I draw when I'm nervous." },
            { ru: "Мы пробу'ем всё ме'стное.", en: "We try everything local when travelling." },
          ],
          tip: "Do not confuse this family with similar-looking -ать verbs: рисова́ть → рису́ю, but игра́ть → игра́ю (no -ова-, nothing collapses). The trigger is the letters **-ова-/-ева-** inside the word, nothing else.",
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
          body: `Two verbs carry so much daily weight that they are worth knowing cold. **хоте́ть** (to want) and **мочь** (to be able) ignore both conjugation families and follow their own music. They also have a quirk: in хо́чешь/хо́чет the stress sits on the first syllable, but in хоти́м/хоти́те it jumps to the end — and they do not even keep the same root all the way through (хот- vs хот-ят is fine, but мочь → мо́гут swaps its consonant).

Learn them as two six-word poems, speak them out loud a few times, and they are yours for life. You will use «я хочу́» and «мо́жно» in almost every conversation you have in Russian — ordering food, asking favours, making plans.`,
          plain: `Just two verbs to memorise cold: хотеть (to want) and мочь (to be able). They ignore both regular patterns, so learn their six forms by heart — you will use them every single day.`,
          why: "Irregular verbs resist regularisation precisely because they are frequent — everyone hears them daily, so the odd forms never wear off. Rare verbs quietly level out; frequent ones fossilise. Same in English: went, was, gave.",
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
            { ru: "Я хочу' пойти' на коце'рт.", en: "I want to go to the concert." },
            { ru: "Ты мо'жешь мне помо'чь с те'сисом?", en: "Can you help me with my thesis?" },
          ],
          tip: "The classic slip is «я мо́жу» — borrowing the regular -у ending for an irregular verb. Amusingly, мочу́ does exist, but as the я-form of мочи́ть (to soak): one misplaced letter and you have announced that you wet yourself. Precision pays.",
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
          title: "Four heavy-hitters + the want-to pattern",
          body: `A short row of very frequent verbs refuses to be fully regular, and each is worth a moment:

- **жить** (to live): живу́, живёшь, живу́т — the ё appears in ты/он forms. ё always marks stress, so these forms announce themselves when spoken.
- **дать** (to give): дам, дашь, даст, дади́м, дади́те, даду́т — ancient and completely irregular; you simply memorise it.
- **есть** (to eat): ем, ешь, ест, еди́м, еди́те, едя́т.
- **писа́ть** (to write): пишу́, пи́шешь — a consonant swap (с→ш) in я, same family as спать → сплю.
- **иска́ть** (to search): ищу́, и́щешь; **ждать** (to wait): жду, ждёшь — the last two are regular enough to pick up on the way.

And one pattern to take away today: **хотеть + infinitive**. To say what you want *to do*, conjugate хотеть and leave the second verb completely alone: «Я хочу́ чита́ть», «Они́ хотя́т отдохну́ть». No linking word is needed — Russian just stacks the two verbs.`,
          plain: `A few very common verbs each have one odd form to memorise. The want-to pattern is simple: only 'want' changes — я хочу читать — and the second verb stays exactly as it is.`,
          why: `Verbs like дать and есть are leftovers from the oldest layer of the language — the same words that gave English *give* and *eat* their irregular pasts. High-frequency verbs resist regularisation because everyone hears them daily; rare ones quietly level out. So irregularity is not chaos — it is a frequency fossil.`,
          examples: [
            { ru: "Мы живём в обща'ге на второ'м ку'рсе.", en: "We live in the dorm in our second year." },
            { ru: "Дай мне зна'ть, когда' освободи'шься.", en: "Let me know when you're free." },
            { ru: "Они' хотя'т отдохну'ть по'сле сессии.", en: "They want to rest after exams — хотеть changes, отдыхать stays." },
          ],
          tip: "Do not attach extra endings to the second verb: «Я хочу́ чита́ю» is the single most common beginner sentence in Russian courses worldwide. The rule is mechanical: only хотеть changes; what follows stays in the infinitive.",
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
