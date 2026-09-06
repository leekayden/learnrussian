import type { Unit } from "@/lib/curriculum/types";

/** A2 · Unit 10 — Motion prefixes, one step at a time. */
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
          title: "Arrive vs depart",
          body: `- **при-** = arrive: приходи́ть/прийти́ (on foot), приезжа́ть/прие́хать (by vehicle)
- **у-** = depart: уходи́ть/уйти́, уезжа́ть/уе́хать
Suppletion: прийти́ → приду́, придёшь, приду́т.`,
          table: {
            headers: ["Prefix", "On foot", "By vehicle"],
            rows: [
              ["при-", "прийти", "приехать"],
              ["у-", "уйти", "уехать"],
            ],
          },
          examples: [
            { ru: "Вчера' ко мне пришёл друг.", en: "Yesterday a friend came to see me." },
            { ru: "Она' уе'хала в Ита'лию.", en: "She left for Italy." },
          ],
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
          body: `- **в-** = enter: входи́ть / войти́ (во́йду)
- **вы-** = exit: выходи́ть / вы́йти (вы́йду)
Destination stays accusative: войти́ **в ко́мнату**, вый­ти **из до́ма** (gen with из!).`,
          table: {
            headers: ["Prefix", "On foot", "By vehicle"],
            rows: [
              ["в-", "войти", "въехать"],
              ["вы-", "выйти", "выехать"],
            ],
          },
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
          body: `- **за-** = drop in: заходи́ть/зайти́ — Заходи́те! (Come on in!)
- **под-** = approach: подходи́ть/подойти́ — Подойди́ сюда́.
- **от-** = move away / depart: отходи́ть/отойти́ — По́езд отхо́дит в семь.`,
          examples: [
            { ru: "Заходи' к нам вечером!", en: "Drop by this evening!" },
          ],
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
          body: `- **до-** = reach: дое́хать / дойти́ — Мы дое́хали за час.
- **пере-** = cross / relocate: перейти́ до́рогу, перее́хать в но́вую кварти́ру
- **про-** = pass by/through: пройти́ ми́мо ма́газина
- **с-** = get off: сойти́ с авто́буса; сесть на авто́бус = get ON`,
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
