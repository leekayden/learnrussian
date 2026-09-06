import type { Unit } from "@/lib/curriculum/types";

/** C2 · Unit 4 — Aspect stylistics II: negated imperatives, iteratives. */
export const u04: Unit = {
  id: "c2-u04",
  level: "c2",
  number: 4,
  title: "Aspect stylistics II: commands, forbiddings, old habits",
  topicIds: ["c2-u04-aspect-stylistics-2"],
  lessons: [
    {
      id: "c2-u04-l1",
      title: "Negated imperatives: не говори vs не скажи",
      topicIds: ["c2-u04-aspect-stylistics-2"],
      vocab: ["говорить", "сказать", "трогать", "тронуть", "входить", "войти", "забывать", "забыть", "опаздывать", "опоздать"],
      grammar: [
        {
          title: "The two prohibitions",
          body: `- **не + imperfective imperative** = general prohibition, don't even start: Не кури́ здесь! Не тро́гай!
- **не + perfective imperative** = warning against a SPECIFIC, often accidental completion: Не опозда́й! (mind you don't be late), Не забу́дь (don't forget), Не упади́!
The perfective version fears a one-off mishap; the imperfective bans the practice.`,
          table: {
            headers: ["Form", "Meaning"],
            rows: [
              ["Не входи", "Don't come in (ban)"],
              ["Не упади", "Mind you don't fall (warning)"],
              ["Не говори никому", "Don't tell anyone (ban)"],
              ["Не скажи ему ничего лишнего", "Careful not to say too much"],
            ],
          },
          tip: "Warnings about accidents take perfective: не простуди́сь (don't catch cold), не потеря́й (don't lose it).",
        },
      ],
      exercises: [
        {
          id: "c2-u04-l1-e1",
          type: "single",
          text: "Мама говорит: не ___ с незнако́мыми! (general ban)",
          options: [{ id: "a", label: "разговаривай" }, { id: "b", label: "поговори" }], answer: "a"
        },
        {
          id: "c2-u04-l1-e2",
          type: "single",
          text: "Береги́сь, не ___! (mind you don't slip — one-off)",
          options: [{ id: "a", label: "поскользнись" }, { id: "b", label: "скользи" }], answer: "a"
        },
        {
          id: "c2-u04-l1-e3",
          type: "true-false",
          text: "«Не забу́дь ключи́» uses the perfective because it fears one specific slip.",
          answer: true,
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
    {
      id: "c2-u04-l2",
      title: "Iteratives: ха́живал, си́живал, гова́ривал",
      topicIds: ["c2-u04-aspect-stylistics-2"],
      vocab: ["фольклор", "сказка", "устный", "стиль", "ирония"],
      grammar: [
        {
          title: "The lost habitual aspect",
          body: `Russian once had a habitual marker **-ива-/-ва-** + stress shift: ха́живал (used to walk [regularly]), си́живал (used to sit), гова́ривал (used to say), ви́дывал (have seen in one's time).
Today they survive as **folkloric/facetious**: «Зна́ем мы, как вы пе́вали!» or literary nostalgia: «Здесь Пу́шкин быва́л».
Modern Russian expresses habit with imperfective past: он чита́л по вечера́м.`,
          examples: [
            { ru: "Мы с ним вмéсте хаживали по грибы.", en: "He and I used to go mushrooming together." },
          ],
          tip: "Recognize them when reading classic literature; use only for a folksy or ironic flavour — never in neutral speech.",
        },
      ],
      exercises: [
        {
          id: "c2-u04-l2-e1",
          type: "single",
          text: "«Он вида́л ви́ды» is:",
          options: [{ id: "a", label: "facetious: he's seen it all" }, { id: "b", label: "a formal report" }], answer: "a"
        },
        {
          id: "c2-u04-l2-e2",
          type: "true-false",
          text: "Iteratives like ха́живал are normal in modern neutral speech.",
          answer: false,
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
  ],

  test: [
    {
      id: "c2-u04-test-1",
      type: "single",
      text: "General ban on smoking here:",
      options: [{ id: "a", label: "Не курите здесь" }, { id: "b", label: "Не закурите здесь" }], answer: "a"
    },
    {
      id: "c2-u04-test-2",
      type: "single",
      text: "One-off warning: не ___!",
      options: [{ id: "a", label: "потеряй" }, { id: "b", label: "теряй" }], answer: "a"
    },
    {
      id: "c2-u04-test-3",
      type: "short-answer",
      text: "Name the verb class: ха́живал, си́живал, гова́ривал —",
      answer: "iteratives",
      accept: ["iterative verbs", "habituals"],
    },
  ],
};
