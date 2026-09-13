import type { Unit } from "@/lib/curriculum/types";

/**
 * A2 · Unit 10 — Motion prefixes, one step at a time. Notes v2:
 * elaborate explanations, English contrasts, reasoning callouts.
 */
export const u10: Unit = {
  id: "a2-u10",
  level: "a2",
  number: 10,
  title: "Motion verbs II: the prefix system",
  topicIds: ["a2-u10-motion-2"],
  lessons: [
    {
      id: "a2-u10-l1",
      title: "Step 1: при- (arrive) and у- (depart)",
      topicIds: ["a2-u10-motion-2"],
      vocab: ["приходить", "приехать", "уходить", "уехать", "прийти", "улететь", "гость", "аэропорт", "вокзал", "встречать"],
      grammar: [
        {
          title: "Arrive vs depart — the two directions of life",
          body: `Bolt a prefix onto a motion verb and the verb gains a precise meaning — and usually becomes **perfective** (one bounded event). The first pair you need deals with the two basic facts of any trip: arriving and leaving.

- **при-** = arrive: приходи́ть/прийти́ (on foot), приезжа́ть/прие́хать (by vehicle)
- **у-** = depart: уходи́ть/уйти́, уезжа́ть/уе́хать

Watch the stems bend: прийти́ → **приду́**, придёшь, приду́т (the д resurfaces), while уй­ти → уйду́ keeps its й. The imperfective partners (приходи́ть, уходи́ть) are what you use for habits and processes: «Он всегда́ ухо́дит по́здно».`,
          plain: `при- means arriving and у- means leaving: пришёл (came), ушёл (left). Once you feel при as 'here now' and у as 'gone', dozens of other verbs start explaining themselves.`,
          why: `При- and у- are pure spatial logic: при- presses *toward* the speaker or destination (it lives inside прие́хать, принеси́... bring here, прийти́), у- pulls *away* (уйти́, увезти́). Once you feel при = "here now" and у = "gone", dozens of verbs decode themselves without a dictionary.`,
          table: {
            headers: ["Prefix", "On foot", "By vehicle"],
            rows: [
              ["при-", "прийти", "приехать"],
              ["у-", "уйти", "уехать"],
            ],
          },
          examples: [
            { ru: "Вчера' ко мне пришёл друг.", en: "Yesterday a friend came over — arrived at my place." },
            { ru: "Она' уе'хала в Ита'лию на учёбу'.", en: "She left for Italy to study — away = у-." },
          ],
          tip: "Note the preposition dance: arrive **в/на + accusative** (прие́хать в Москву́), depart **из/с + genitive** (уе́хать из До́модедово), visit a person **к + dative** (прийти́ к врачу́). Three prepositions, three cases — the motion verb only sets the stage.",
        },
      ],
      exercises: [
        {
          id: "a2-u10-l1-e1",
          type: "single",
          text: "Она́ ___ из аэропо́рта в шесть. (arrived)",
          options: [{ id: "a", label: "приехала" }, { id: "b", label: "уехала" }], answer: "a",
        },
        {
          id: "a2-u10-l1-e2",
          type: "fill-blank",
          text: "Я ___ с рабо́ты по́здно. *(leave — habitual)*",
          answers: ["ухожу"],
        },
        {
          id: "a2-u10-l1-e3",
          type: "true-false",
          text: "прийти́ → я приду́.",
          answer: true,
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
    {
      id: "a2-u10-l2",
      title: "Step 2: в- (enter) and вы- (exit)",
      topicIds: ["a2-u10-motion-2"],
      vocab: ["входить", "войти", "выходить", "выйти", "комната", "дверь", "выход", "вход", "зал", "сцена"],
      grammar: [
        {
          title: "Into and out of",
          body: `- **в-/во-** = enter: входи́ть / войти́ (во́йду — the й appears for pronunciation)
- **вы-** = exit: выходи́ть / вы́йти (вы́йду)

The destination keeps the accusative: войти́ **в ко́мнату**. Leaving takes **из + genitive**: вый­ти **из до́ма**, вы́йти **из авто́буса** (get off the bus).

This pair also survives in everyday nouns you already know: **вход** (entrance) and **выход** (exit) — the metro signs you will look at every day.`,
          plain: `в- sends you in, вы- sends you out: войти (enter), выйти (exit). The same two live on every metro sign as вход and выход — likely the first words you read underground.`,
          why: "v-/vo- and vy- are exact antonyms: enter vs exit. The prefix v- is a preposition in disguise (v komnatu = vojti v komnatu), which is why the destination stays accusative. And vyjti derived the everyday nouns vkhod/vykhod.",
          examples: [
            { ru: "Гость вошёл и се'л у окна'.", en: "The guest came in and sat by the window." },
            { ru: "Мы вы'шли из теа'тра в интерва'ле.", en: "We stepped out of the theatre at intermission." },
          ],
          tip: "English speakers often say «выйти с работы» — the Russian idiom is **уйти́ с рабо́ты** or **вы́йти из о́фиса**. The safe pattern: из/с + genitive after any leave-verb, в + accusative after any enter-verb.",
        },
      ],
      exercises: [
        {
          id: "a2-u10-l2-e1",
          type: "single",
          text: "Гость ___ в ко́мнату. (enters)",
          options: [{ id: "a", label: "входит" }, { id: "b", label: "выходит" }], answer: "a",
        },
        {
          id: "a2-u10-l2-e2",
          type: "fill-blank",
          text: "Она́ ___ из маши́ны. *(got out)*",
          answers: ["вышла"],
        },
        {
          id: "a2-u10-l2-e3",
          type: "true-false",
          text: "«выйти из авто́буса» = get off the bus.",
          answer: true,
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
    {
      id: "a2-u10-l3",
      title: "Step 3: за- (drop in), под- (approach), от- (move away)",
      topicIds: ["a2-u10-motion-2"],
      vocab: ["заходить", "зайти", "подходить", "подойти", "отходить", "походить", "сосед", "расстояние", "поезд", "перрон"],
      grammar: [
        {
          title: "Side trips, approaches, departures",
          body: `- **за-** = drop in on the way / step in briefly: заходи́ть/зайти́. «Заходи́те!» is what Russians say when you visit — *come on in!* The за- tells the guest the visit is casual, unplanned.
- **под-** = approach: подходи́ть/подойти́ — Подойди́ сюда́. (Come up here.) The по- intensifies the *near* idea.
- **от-** = move away from: отходи́ть/отойти́ — Отойди́ от две́ри. Also, for trains: **По́езд отхо́дит в семь** (departs).`,
          plain: `Three prefixes paint three little scenes: за- for dropping in on the way, под- for coming closer, от- for stepping away. Заходите! — come on in! — is what a host says when you knock.`,
          why: `Notice how physical these prefixes are: за- ducking behind/into something, под- closing a distance, от- opening one. Russian builds its motion vocabulary from *spatial scenes*, then reuses the same scenes for abstract meaning — отойти́ от дел (retire from business), зайти́ слишком далеко́ (go too far). Feel the scene, and the abstract uses follow.`,
          table: {
            headers: ["Prefix", "Meaning", "Example"],
            rows: [
              ["за-", "drop in", "зайди ко мне"],
              ["под-", "approach", "подойди сюда"],
              ["от-", "move away / depart", "поезд отходит"],
            ],
          },
        },
      ],
      exercises: [
        {
          id: "a2-u10-l3-e1",
          type: "single",
          text: "По́езд ___ в семь часо́в. (departs)",
          options: [{ id: "a", label: "отходит" }, { id: "b", label: "заходит" }], answer: "a",
        },
        {
          id: "a2-u10-l3-e2",
          type: "fill-blank",
          text: "___ сю́да! *(Come up here — approach)*",
          answers: ["Подойди"],
        },
        {
          id: "a2-u10-l3-e3",
          type: "true-false",
          text: "«Заходи́те!» is what a host says to a guest.",
          answer: true,
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
    {
      id: "a2-u10-l4",
      title: "Step 4: до- (reach), пере- (cross), про- (pass), с- (get off)",
      topicIds: ["a2-u10-motion-2"],
      vocab: ["доехать", "дойти", "переехать", "перейти", "пройти", "сойти", "мост", "квартира", "остановка", "мило"],
      grammar: [
        {
          title: "Reach, cross, pass, descend",
          body: `- **до-** = reach a target (often with effort): дое́хать / дойти́ — Мы наконе́ц дое́хали до да́чи. До- almost always drags **до + genitive** along: дойти́ **до му́зея**.
- **пере-** = cross or relocate: перейти́ до́рогу (cross the street), перее́хать в но́вую кварти́ру (move flats)
- **про-** = pass by/through: пройти́ ми́мо ма́газина (walk past), прое́хать свою́ остано́вку (miss your stop)
- **с-** = descend: сойти́ с авто́буса (get OFF — с + genitive), while сесть на авто́бус is getting ON.`,
          plain: `Four more scenes: до- reaches a goal, пере- crosses over, про- passes by, с- climbs down. They even explain everyday phrases: перейти дорогу (cross the street), сойти с автобуса (get off the bus).`,
          why: "Each prefix paints a spatial scene: do- reaching a goal, pere- crossing over, pro- sliding past, s- descending. Russian builds abstract meaning from these scenes too — pereekhat (move house) is literal crossing turned metaphor.",
          table: {
            headers: ["Prefix", "Meaning", "Example"],
            rows: [
              ["до-", "reach", "дойти до дома"],
              ["пере-", "cross", "перейти дорогу"],
              ["про-", "pass", "пройти мимо"],
              ["с-", "get off", "сойти с автобуса"],
            ],
          },
        },
      ],
      exercises: [
        {
          id: "a2-u10-l4-e1",
          type: "single",
          text: "Мы ___ через мост. (crossed)",
          options: [{ id: "a", label: "перешли" }, { id: "b", label: "прошли" }], answer: "a",
        },
        {
          id: "a2-u10-l4-e2",
          type: "fill-blank",
          text: "Сойди́те на сле́дующей остано́вке и ___ до музе́я пе́шком. *(reach)*",
          answers: ["дойдите"],
        },
        {
          id: "a2-u10-l4-e3",
          type: "true-false",
          text: "«сесть на авто́бус» = get ON the bus.",
          answer: true,
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
  ],

  test: [
    {
      id: "a2-u10-test-1", type: "single",
      text: "Вчера́ ко мне ___ друзья́. (came on foot)",
      options: [{ id: "a", label: "пришли" }, { id: "b", label: "приехали" }], answer: "a",
    },
    {
      id: "a2-u10-test-2", type: "single",
      text: "Она́ ___ в Ло́ндон. (moved)",
      options: [{ id: "a", label: "переехала" }, { id: "b", label: "приехала" }], answer: "a",
    },
    {
      id: "a2-u10-test-3", type: "fill-blank",
      text: "Сойди́те и ___ до музе́я пе́шком. *(reach — perfective)*",
      answers: ["дойдите"],
    },
    {
      id: "a2-u10-test-4", type: "true-false",
      text: "«вы́йти из авто́буса» = get off the bus.",
      answer: true,
    },
    {
      id: "a2-u10-test-5", type: "matching",
      text: "Prefix → meaning:",
      prompts: [
        { id: "p1", label: "под-" }, { id: "p2", label: "за-" }, { id: "p3", label: "пере-" },
      ],
      responses: [
        { id: "r1", label: "cross / re-" }, { id: "r2", label: "approach" }, { id: "r3", label: "drop in" },
      ],
      answer: { p1: "r2", p2: "r3", p3: "r1" },
    },
  ],
};
