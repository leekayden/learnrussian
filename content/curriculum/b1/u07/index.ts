import type { Unit } from "@/lib/curriculum/types";

/** B1 · Unit 7 — Active participles. */
export const u07: Unit = {
  id: "b1-u07",
  level: "b1",
  number: 7,
  title: "Active participles: the compressed который",
  topicIds: ["b1-u07-active-participles"],
  lessons: [
    {
      id: "b1-u07-l1",
      title: "Present active: -ущ-/-ющ-, -ащ-/-ящ-",
      topicIds: ["b1-u07-active-participles"],
      vocab: ["читать", "работать", "вести", "петь", "стоять", "расти", "интересоваться", "жить", "спать"],
      grammar: [
        {
          title: "Forming and using them",
          body: `Take the 3rd-person-plural present, swap -ут/-ют → -ущ-/-ющ-, -ат/-ят → -ащ-/-ящ-, add adjective endings:
- чита́ют → чита́ющий (who reads / reading)
- говоря́т → говоря́щий, дерма́т... держа́т → держа́щий
Active present participles describe a noun DOING the action NOW (relative time): лю́ди, говоря́щие по-ру́сски (people who speak Russian).`,
          table: {
            headers: ["Verb", "Participle", "Example"],
            rows: [
              ["читать", "читающий", "человек, читающий книгу"],
              ["стоять", "стоящий", "дом, стоящий у реки"],
              ["лежать", "лежащий", "книга, лежащая на столе"],
            ],
          },
        },
      ],
      exercises: [
        {
          id: "b1-u07-l1-e1",
          type: "single",
          text: "Де́ти, ___ во дворе́, шумя́т. (play — pl)",
          options: [{ id: "a", label: "играющие" }, { id: "b", label: "играющий" }], answer: "a"
        },
        {
          id: "b1-u07-l1-e2",
          type: "fill-blank",
          text: "Он челове́к, ___ по-ру́сски. *(speaking)*",
          answers: ["говорящий"],
        },
        {
          id: "b1-u07-l1-e3",
          type: "true-false",
          text: "Present active participles have no tense of their own — they borrow relative time.",
          answer: true,
        },
      ],
      drills: [{ kind: "cloze", count: 4 }],
    },
    {
      id: "b1-u07-l2",
      title: "Past active: -вш-",
      topicIds: ["b1-u07-active-participles"],
      vocab: ["прочитать", "сделать", "приехать", "победить", "пропасть", "вырасти", "заболеть", "заблудиться", "устать", "выступить"],
      grammar: [
        {
          title: "-вш- + adjective endings",
          body: `Past stem + **-вш-**: прочита́ть → прочита́вший (who (has) read), прие́хать → прие́хавший.
Verbs on consonant stems use -ш-: нести́ → нёсший, вести́ → ве́дший.
Use: челове́к, __ who did the action BEFORE the main verb: Арти́ст, спевший э́ту песню, стал знамени́тым.`,
          examples: [
            { ru: "Студе'нт, сде'лавший оши'бку, испра'вил её.", en: "The student who made a mistake corrected it." },
          ],
          tip: "Both -вш- participles agree in gender/number/case like adjectives: прие́хавшая делега́ция, прие́хавшие гости.",
        },
      ],
      exercises: [
        {
          id: "b1-u07-l2-e1",
          type: "single",
          text: "По́езд, ___ из Москвы́, опа́здывает. (arrived)",
          options: [{ id: "a", label: "приехавший" }, { id: "b", label: "приезжающий" }], answer: "a"
        },
        {
          id: "b1-u07-l2-e2",
          type: "fill-blank",
          text: "Де́вочка, ___ и́скать кота́, верну́лась по́здно. *(who went — пойти́: поше́дшая… use пошедшая)*",
          answers: ["пошедшая"],
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
  ],

  test: [
    {
      id: "b1-u07-test-1",
      type: "single",
      text: "Present active participle of говори́ть:",
      options: [{ id: "a", label: "говорящий" }, { id: "b", label: "говоривший" }], answer: "a"
    },
    {
      id: "b1-u07-test-2",
      type: "single",
      text: "Пе́сня, ___ по ра́дио, мне нра́вится. (sounding — звуча́ть)",
      options: [{ id: "a", label: "звучащая" }, { id: "b", label: "звучавшая" }], answer: "a"
    },
    {
      id: "b1-u07-test-3",
      type: "true-false",
      text: "Past active: держа́ть → держа́вший.",
      answer: true,
    },
    {
      id: "b1-u07-test-4",
      type: "short-answer",
      text: "Rewrite with a participle: «Лю́ди, чита́ют газе́ты» → «лю́ди, ___ газе́ты»",
      answer: "читающие",
    },
  ],
};
