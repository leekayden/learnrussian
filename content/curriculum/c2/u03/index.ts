import type { Unit } from "@/lib/curriculum/types";

/** C2 · Unit 3 — Aspect stylistics I: performatives and meaning-split pairs. */
export const u03: Unit = {
  id: "c2-u03",
  level: "c2",
  number: 3,
  title: "Aspect stylistics I: performatives and meaning splits",
  topicIds: ["c2-u03-aspect-stylistics-1"],
  lessons: [
    {
      id: "c2-u03-l1",
      title: "Performatives: saying IS doing",
      topicIds: ["c2-u03-aspect-stylistics-1"],
      vocab: ["обещание", "поздравление", "благодарность", "извинение", "предложение", "отказ", "восклицание", "пояснение", "мольба", "речевой"],
      grammar: [
        {
          title: "1st-person imperfective as an act",
          body: `Speech-act verbs use the 1st-person imperfective present to PERFORM the act: Обеща́ю! (I promise — the promising happens now), Благодарю́ вас, Извиняюсь, Предлага́ю тост. The perfective would push the act into the future: пообеща́ю = I'll promise (later).

Speech-act verbs use the **1st-person singular imperfective present** to PERFORM the act in the moment of speaking:
- **Обеща́ю!** — I promise! (the promising happens now)
- **Благодарю́ вас.** — Thank you (more formal than спаси́бо).
- **Извиня́юсь** (colloquial) / **прошу́ проще́ния** (careful style).
The perfective here would break the act: «пообеща́ю» = I'll promise (later) — different meaning.`,
          plain: `When saying is doing — Обещаю!, Благодарю вас — use the plain present; the promise happens in the very moment of speaking. The other version only promises to promise later, and the deed never lands.`,
          why: "Performatives are actions done BY SAYING: the utterance is the deed. That is why only the imperfective present works — the act is ongoing at the instant of speech. Saying «Я поблагодарю́ его» plans a future act; it no longer performs one.",

          table: {
            headers: ["Performative", "Act performed"],
            rows: [
              ["Обещаю", "I promise"],
              ["Поздравляю", "I congratulate you"],
              ["Предлагаю тост", "I propose a toast"],
              ["Умоляю", "I beg you"],
            ],
          },
          tip: "Only imperfective present works: the act is ONGOING at the instant of utterance. «Я поблагодарю́ его» = I'll thank him later — a plan, not an act.",
        },
      ],
      exercises: [
        {
          id: "c2-u03-l1-e1",
          type: "single",
          text: "Say “I apologise” as a performative (colloquial):",
          options: [{ id: "a", label: "Извиняюсь!" }, { id: "b", label: "Извинюсь!" }], answer: "a"
        },
        {
          id: "c2-u03-l1-e2",
          type: "single",
          text: "«Я пообеща́ю ему́» means:",
          options: [{ id: "a", label: "I will promise him (later)" }, { id: "b", label: "I promise him (now)" }], answer: "a"
        },
        {
          id: "c2-u03-l1-e3",
          type: "true-false",
          text: "Performatives use the perfective future.",
          answer: false,
          explanation: "They use 1st-person imperfective present.",
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
    {
      id: "c2-u03-l2",
      title: "Pairs where aspect splits the meaning",
      topicIds: ["c2-u03-aspect-stylistics-1"],
      vocab: ["резать", "отрезать", "слушать", "прослушать", "садиться", "сесть", "ложиться", "лечь", "сыпать", "насыпать"],
      grammar: [
        {
          title: "Not just time — different words in different aspects",
          body: `Some aspect pairs split the meaning itself: ре́зать/отреза́ть (cut off), нареза́ть (cut into pieces); сы́пать/насы́пать (pour in) vs вы́сыпать (pour out); слу́шать/прослушать (listen vs [recording] has been played).

Some pairs diverge lexically:
- **ре́зать / разре́зать** (cut up) vs **отре́зать** (cut off) vs **нареза́ть** (cut into pieces) — prefix decides the result.
- **сы́пать / насы́пать** — pour in; **вы́сыпать** — pour out; **просы́пать** (colloquial) — oversleep (different verb family!).
- **слу́шать / прослу́шать** — listen vs miss/hear out (запи́сь прослу́шана = the recording HAS BEEN PLAYED).`,
          plain: `These are not two copies of one verb — each partner has its own result: насыпать pours in, высыпать pours out. Learn every pair as separate words with separate pictures.`,
          why: "In these pairs the prefix is not just 'done' — it chooses a result-scenario. Запись прослу́шана is bureaucratic passive ('the recording has been reviewed'), and просы́пать drifted to 'oversleep' entirely. Learn each pair with its own scenario, not as pure grammar.",

          table: {
            headers: ["Imperfective", "Perfective", "Meaning"],
            rows: [
              ["резать", "отрезать", "cut off"],
              ["сыпать", "насыпать", "pour in"],
              ["слушать", "прослушать", "listen through / (passive) has been played"],
            ],
          },
        },
      ],
      exercises: [
        {
          id: "c2-u03-l2-e1",
          type: "single",
          text: "«Запись прослу́шана» means:",
          options: [{ id: "a", label: "the recording has been played/listened to" }, { id: "b", label: "the recording is being listened to now" }], answer: "a"
        },
        {
          id: "c2-u03-l2-e2",
          type: "single",
          text: "Cut off a slice: ___ кусо́к.",
          options: [{ id: "a", label: "отрежь" }, { id: "b", label: "нарежь" }], answer: "a"
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
  ],

  test: [
    {
      id: "c2-u03-test-1",
      type: "single",
      text: "Correct performative:",
      options: [{ id: "a", label: "Благодарю вас" }, { id: "b", label: "Поблагодарю вас (now)" }], answer: "a"
    },
    {
      id: "c2-u03-test-2",
      type: "single",
      text: "Pour in some flour: ___ муки́.",
      options: [{ id: "a", label: "насыпь" }, { id: "b", label: "высыпь" }], answer: "a"
    },
    {
      id: "c2-u03-test-3",
      type: "true-false",
      text: "«просы́пать» can mean to oversleep.",
      answer: true,
    },
  ],
};
