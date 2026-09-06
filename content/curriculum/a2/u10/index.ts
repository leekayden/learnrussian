import type { Unit } from "@/lib/curriculum/types";

/** A2 · Unit 10 — Motion verbs II: prefixes. */
export const u10: Unit = {
  id: "a2-u10",
  level: "a2",
  number: 10,
  title: "Motion verbs II: the prefix system",
  topicIds: ["a2-u10-motion-2"],
  lessons: [
    {
      id: "a2-u10-l1",
      title: "при-, у-, в-, вы-: arrive, leave, enter, exit",
      topicIds: ["a2-u10-motion-2"],
      vocab: [
        "приходить",
        "приехать",
        "уходить",
        "уехать",
        "входить",
        "войти",
        "выходить",
        "выйти",
        "аэропорт",
        "вокзал",
      ],
      grammar: [
        {
          title: "Prefix + motion verb = new meaning",
          body: `Motion verbs + prefix make a **perfective/imperfective pair family**. The stem trick: with и-prefixes use ид-/-йд- (прийти́, пойду́... приду́!) and ех- (прие́хать):
- **при-** = arrive: приходи́ть / прийти́ (come on foot), приезжа́ть / прие́хать (arrive by vehicle)
- **у-** = leave: уходи́ть / уйти́, уезжа́ть / уе́хать
- **в-** = enter: входи́ть / войти́ (во + йд: войду́)
- **вы-** = exit: выходи́ть / вы́йти (вы́йду)`,
          table: {
            headers: ["Prefix", "Meaning", "On foot", "By vehicle"],
            rows: [
              ["при-", "arrive", "прийти", "приехать"],
              ["у-", "depart", "уйти", "уехать"],
              ["в-", "enter", "войти", "въехать"],
              ["вы-", "exit", "выйти", "выехать"],
            ],
          },
          examples: [
            { ru: "Вчера' ко мне пришёл друг.", en: "Yesterday a friend came to see me." },
            { ru: "Она' уе'хала в Ита'лию.", en: "She left for Italy." },
          ],
          tip: "прийти́ is suppletive: приду́, придёшь, приду́т — the д comes back. вы́йти → вы́йду (й appears).",
        },
        {
          title: "Who came where: cases with prefixes",
          body: `Destination stays accusative: **прие́хать в Москву́**, **войти́ в ко́мнату**.
Arriving FROM: **из/с/от + genitive**: прие́хать из Ло́ндона, уйти́ с рабо́ты.
Person to visit: **к + dative**: прийти́ к врачу́.`,
          examples: [
            { ru: "Она' пришла' из шко'лы в пять.", en: "She came home from school at five." },
          ],
        },
      ],
      exercises: [
        {
          id: "a2-u10-l1-e1",
          type: "single",
          text: "Гость ___ в ко́мнату. (enters)",
          options: [
            { id: "a", label: "входит" },
            { id: "b", label: "выходит" },
          ],
          answer: "a",
        },
        {
          id: "a2-u10-l1-e2",
          type: "single",
          text: "Она́ ___ из аэропо́рта в шесть. (arrived by car/plane)",
          options: [
            { id: "a", label: "приехала" },
            { id: "b", label: "уехала" },
          ],
          answer: "a",
        },
        {
          id: "a2-u10-l1-e3",
          type: "fill-blank",
          text: "Я ___ с рабо́ты по́здно. *(I leave work late — habitual)*",
          answers: ["ухожу"],
        },
        {
          id: "a2-u10-l1-e4",
          type: "true-false",
          text: "«прие́хать в Москву́» keeps the accusative after прие́хать.",
          answer: true,
        },
      ],
      drills: [{ kind: "cloze", count: 4 }],
    },
    {
      id: "a2-u10-l2",
      title: "за-, под-, от-, до-, пере-, про-, с-",
      topicIds: ["a2-u10-motion-2"],
      vocab: [
        "заходить",
        "зайти",
        "подходить",
        "подойти",
        "отходить",
        "доехать",
        "переехать",
        "пройти",
        "провожать",
        "заблудиться",
      ],
      grammar: [
        {
          title: "The rest of the core prefixes",
          body: `- **за-** = drop in / stop by: заходи́ть / зайти́ (Заходи́те! — Come on in!)
- **под-** = approach: подходи́ть / подойти́ (Подойди́ сюда́. — Come here.)
- **от-** = move away from: отходи́ть / отойти́ (По́езд отхо́дит в семь. — the train departs)
- **до-** = reach: дое́хать / дойти́ (Мы дое́хали за час. — We got there in an hour)
- **пере-** = cross / move: переходи́ть / перейти́ (дорогу), перее́хать (в но́вую кварти́ру)
- **про-** = pass by / through: проходи́ть / пройти́ (пройти́ ми́мо ма́газина)
- **с-** = come down: сходи́ть / сойти́ (сойти́ с авто́буса — get OFF the bus)`,
          examples: [
            { ru: "Мы перее'хали в но'вую кварти'ру.", en: "We moved to a new flat." },
            { ru: "Наконе'ц я дошла' до до'ма.", en: "Finally I made it home." },
          ],
          tip: "Don't overthink the prefix map — learn the top two meanings per prefix and let reading do the rest. The dictionary shows every prefixed partner.",
        },
        {
          title: "Getting on and off",
          body: `- **сесть на / сади́ться на** + acc = get ON (по́езд, авто́бус)
- **сойти́ с / выходи́ть из** + gen = get OFF
- пересесть на + acc = change to (another line): переся́дьте на вто́рой авто́бус.`,
          examples: [
            { ru: "Я во'шёл в авто'бус и се'л у окна'.", en: "I got on the bus and sat by the window." },
          ],
        },
      ],
      exercises: [
        {
          id: "a2-u10-l2-e1",
          type: "single",
          text: "___ в седьмо́й авто́бус и переся́дьте на пло́щади.",
          options: [
            { id: "a", label: "Сядьте" },
            { id: "b", label: "Сойдите" },
          ],
          answer: "a",
        },
        {
          id: "a2-u10-l2-e2",
          type: "single",
          text: "Мы ___ через мост. (crossed)",
          options: [
            { id: "a", label: "перешли" },
            { id: "b", label: "прошли" },
          ],
          answer: "a",
        },
        {
          id: "a2-u10-l2-e3",
          type: "fill-blank",
          text: "Заходи́те к нам {{blank}}! *(Drop in to see us some evening.)*",
          answers: ["каким-нибудь вечером"],
        },
        {
          id: "a2-u10-l2-e4",
          type: "true-false",
          text: "«отходи́ть» can mean (of a train) to depart.",
          answer: true,
        },
      ],
      drills: [{ kind: "cloze", count: 4 }],
    },
  ],

  test: [
    {
      id: "a2-u10-test-1",
      type: "single",
      text: "Вчера́ ко мне ___ дру́зья. (came — on foot / general)",
      options: [
        { id: "a", label: "приехали" },
        { id: "b", label: "пришли" },
      ],
      answer: "b",
    },
    {
      id: "a2-u10-test-2",
      type: "single",
      text: "Она́ ___ в Ло́ндон в про́шлом го́ду. (moved)",
      options: [
        { id: "a", label: "переехала" },
        { id: "b", label: "приехала" },
      ],
      answer: "a",
    },
    {
      id: "a2-u10-test-3",
      type: "fill-blank",
      text: "Сойди́те на сле́дующей остано́вке и ___ до музе́я пе́шком. *(reach it on foot — perfective)*",
      answers: ["дойдите"],
    },
    {
      id: "a2-u10-test-4",
      type: "true-false",
      text: "«вы́йти из авто́буса» means to get off the bus.",
      answer: true,
    },
    {
      id: "a2-u10-test-5",
      type: "matching",
      text: "Prefix → meaning:",
      prompts: [
        { id: "p1", label: "под-" },
        { id: "p2", label: "за-" },
        { id: "p3", label: "пере-" },
      ],
      responses: [
        { id: "r1", label: "cross / re-" },
        { id: "r2", label: "approach" },
        { id: "r3", label: "drop in" },
      ],
      answer: { p1: "r2", p2: "r3", p3: "r1" },
    },
  ],
};
