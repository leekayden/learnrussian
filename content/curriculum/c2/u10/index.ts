import type { Unit } from "@/lib/curriculum/types";

/** C2 · Unit 10 — Phraseology. */
export const u10: Unit = {
  id: "c2-u10",
  level: "c2",
  number: 10,
  title: "Phraseology: idioms, proverbs, set grammar",
  topicIds: ["c2-u10-phraseology"],
  lessons: [
    {
      id: "c2-u10-l1",
      title: "Idiom grammar: frozen cases inside idioms",
      topicIds: ["c2-u10-phraseology"],
      vocab: ["нос", "кот", "очки", "телефон", "обман", "соль", "выражение", "идиома", "фразеологизм", "значение"],
      grammar: [
        {
          title: "Idioms fix their own grammar",
          body: `Inside an idiom the forms are FROZEN — don't modernise them:
- **бить баклу́ши** (idler — lit. knock chips), **води́ть за нос** (lead by the nose), **зару́бить на носу́** (note it well — dative frozen!), **кот напла́кал** (very little).
- Cases inside: **висе́ть на телефо́не** (be on the phone constantly), **втереть очки́** (pull the wool over eyes).
You may inflect the NOMINAL head: заруби́л / заруби́те на носу́; but never swap the frozen case: «зару́бить на нос» is a recognised error.`,
          table: {
            headers: ["Idiom", "Meaning", "Freeze trap"],
            rows: [
              ["зарубить на носу", "note it well", "dative -у is frozen"],
              ["кот наплакал", "next to nothing", "no plural"],
              ["бить баклуши", "idle", "no plural, no relexification"],
            ],
          },
        },
      ],
      exercises: [
        {
          id: "c2-u10-l1-e1",
          type: "single",
          text: "«зару́бить на носу́» — the form носу́ is:",
          options: [{ id: "a", label: "frozen dative — never «на нос»" }, { id: "b", label: "optional stylistic variant" }], answer: "a"
        },
        {
          id: "c2-u10-l1-e2",
          type: "single",
          text: "«кот напла́кал» means:",
          options: [{ id: "a", label: "very little" }, { id: "b", label: "very many" }], answer: "a"
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
    {
      id: "c2-u10-l2",
      title: "Proverbs: grammar patterns worth memorising",
      topicIds: ["c2-u10-phraseology"],
      vocab: ["труд", "пруд", "рыбка", "слово", "воробей", "копейка", "рубль", "тише", "дальше", "старый"],
      grammar: [
        {
          title: "Proverb templates",
          body: `- **Без труда́ не вы́нешь и ры́бку из пруда́.** — no pain, no gain (double negation + genitive).
- **Сло́во не воробе́й: вы́летит — не пойма́ешь.** — word once out… (perfective futures in sequence)
- **Ти́ше едешь — да́льше бу́дешь.** — slow and steady (comparatives!).
- **Копе́йка рубль бережёт.** — a penny saved…`,
          examples: [
            { ru: "Ти'ше едешь — да'льше бу'дешь.", en: "Slow and steady wins the race." },
          ],
          tip: "Proverbs are your best friends for aspect pairs and imperative forms — they freeze perfect grammar patterns.",
        },
      ],
      exercises: [
        {
          id: "c2-u10-l2-e1",
          type: "single",
          text: "«Ти́ше едешь — да́льше бу́дешь» uses:",
          options: [{ id: "a", label: "comparative adverbs" }, { id: "b", label: "imperative" }], answer: "a"
        },
        {
          id: "c2-u10-l2-e2",
          type: "single",
          text: "«Без труда́…» pattern shows:",
          options: [{ id: "a", label: "double negation with genitive" }, { id: "b", label: "parcellation" }], answer: "a"
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
  ],

  test: [
    {
      id: "c2-u10-test-1",
      type: "single",
      text: "«кот напла́кал» is about:",
      options: [{ id: "a", label: "scarcity" }, { id: "b", label: "abundance" }], answer: "a"
    },
    {
      id: "c2-u10-test-2",
      type: "single",
      text: "Frozen case inside «зару́бить на носу́»:",
      options: [{ id: "a", label: "dative" }, { id: "b", label: "genitive" }], answer: "a"
    },
    {
      id: "c2-u10-test-3",
      type: "true-false",
      text: "Idioms allow swapping their frozen prepositions and cases freely.",
      answer: false,
    },
  ],
};
