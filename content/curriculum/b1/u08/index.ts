import type { Unit } from "@/lib/curriculum/types";

/** B1 · Unit 8 — Passive participles + short forms. */
export const u08: Unit = {
  id: "b1-u08",
  level: "b1",
  number: 8,
  title: "Passive participles and their short forms",
  topicIds: ["b1-u08-passive-participles"],
  lessons: [
    {
      id: "b1-u08-l1",
      title: "-нн- / -енн- / -т-",
      topicIds: ["b1-u08-passive-participles"],
      vocab: ["прочитанный", "потерянный", "сделанный", "купленный", "написанный", "открытый", "занятый", "понятный", "переведённый", "построенный"],
      grammar: [
        {
          title: "Forming past passive participles",
          body: `Passive participles reverse the roles: прочи́танный = 'having been read'. Formation depends on the infinitive's tail: -ать → -нн (прочи́танный), -ить → -енн with stem change (ку́пленный), single-syllable stems take -т (взя́тый, откры́тый).Perfective verb → participle with adjective endings:
- verbs in -ать/-ять → **-нн-**: прочита́ть → про́читанный, потеря́ть → поте́рянный
- verbs in -ить → **-енн-** (stem change): купи́ть → ку́пленный, реши́ть → решённый
- one-syllable stems → **-т-**: взя́ть → взя́тый, откры́ть → откры́тый, забы́ть → за́бытый`,
          why: "-нн/-енн/-т are three old adjective-forming suffixes that latched onto different verb classes. The distribution is historical, not logical — but it is almost exceptionless, which is why native speakers never hesitate: the infinitive's tail picks the suffix.",

          table: {
            headers: ["Verb", "Participle", "Short form"],
            rows: [
              ["прочитать", "прочитанный", "прочитана"],
              ["купить", "купленный", "куплено"],
              ["открыть", "открытый", "открыто"],
            ],
          },
        },
      ],
      exercises: [
        {
          id: "b1-u08-l1-e1",
          type: "single",
          text: "Окно́ было ___. (откры́ть)",
          options: [{ id: "a", label: "открыто" }, { id: "b", label: "открытый" }], answer: "a"
        },
        {
          id: "b1-u08-l1-e2",
          type: "fill-blank",
          text: "Я нашёл поте́рянные ___. *(keys — ключи́)*",
          answers: ["ключи"],
        },
        {
          id: "b1-u08-l1-e3",
          type: "true-false",
          text: "Active vs passive: «прочита́вший» is active, «про́читанный» is passive.",
          answer: true,
        },
      ],
      drills: [{ kind: "cloze", count: 4 }],
    },
    {
      id: "b1-u08-l2",
      title: "Short participles vs short adjectives",
      topicIds: ["b1-u08-passive-participles"],
      vocab: ["рассеянный", "воспитанный", "образованный", "приличный", "взволнованный", "усталый", "сердитый", "довольный", "готовый", "свободный"],
      grammar: [
        {
          title: "Short form = predicate",
          body: `Short participles (прочи́тана, постро́ен) are predicates: Кни́га прочи́тана. Long participles (прочи́танная кни́га) are attributes. The pair рассе́янный/рассе́ян shows the split at its clearest: permanent trait vs current state.Short participles act as predicates: Кни́га **прочи́тана**. Заво́д **постро́ен**. Окна **закры́ты**.
Compare: **рассе́янный** (absent-minded — permanent trait) vs **рассе́ян** (scattered — state): Лю́ди рассе́яны по го́роду.
**волнова́ть** → взволнова́н (upset, state) vs волнова́тельный (worrying).`,
          why: "Short forms descend from old predicative participles — they report what HAS HAPPENED to the subject. Long forms are adjectives — they describe what the subject IS. Result vs characteristic; English marks it with 'has been opened' vs 'is open'.",
          examples: [
            { ru: "Письмо' бы'ло напи'сано и отпра'влено.", en: "The letter was written and sent." },
          ],
          tip: "Short participle = RESULT of an action. Long participle/adjective = characteristic.",
        },
      ],
      exercises: [
        {
          id: "b1-u08-l2-e1",
          type: "single",
          text: "Все биле́ты ___. (sold out — short plural)",
          options: [{ id: "a", label: "проданы" }, { id: "b", label: "проданные" }], answer: "a"
        },
        {
          id: "b1-u08-l2-e2",
          type: "fill-blank",
          text: "Тетра́дь ___ и ___. *(проверена и возвращена)*",
          answers: ["проверена"],
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
  ],

  test: [
    {
      id: "b1-u08-test-1",
      type: "single",
      text: "Past passive participle of построить:",
      options: [{ id: "a", label: "построенный" }, { id: "b", label: "построивший" }], answer: "a"
    },
    {
      id: "b1-u08-test-2",
      type: "short-answer",
      text: "Short form (f): «Кни́га ___» (прочита́ть)",
      answer: "прочитана",
    },
    {
      id: "b1-u08-test-3",
      type: "true-false",
      text: "«дверь откры́та» — short participle, result state.",
      answer: true,
    },
    {
      id: "b1-u08-test-4",
      type: "matching",
      text: "Verb → participle:",
      prompts: [
        { id: "p1", label: "потерять" },
        { id: "p2", label: "купить" },
        { id: "p3", label: "взять" },
      ],
      responses: [
        { id: "r1", label: "взятый" },
        { id: "r2", label: "потерянный" },
        { id: "r3", label: "купленный" },
      ],
      answer: { p1: "r2", p2: "r3", p3: "r1" },
    },
  ],
};
