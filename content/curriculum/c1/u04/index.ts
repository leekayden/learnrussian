import type { Unit } from "@/lib/curriculum/types";

/** C1 · Unit 4 — Advanced subordination: correlatives, clefts, так что. */
export const u04: Unit = {
  id: "c1-u04",
  level: "c1",
  number: 4,
  title: "Correlatives, clefts and multi-level clauses",
  topicIds: ["c1-u04-subordination"],
  lessons: [
    {
      id: "c1-u04-l1",
      title: "тот…кто, настолько…что, то, что",
      topicIds: ["c1-u04-subordination"],
      vocab: ["тот", "кто", "настолько", "насколько", "поскольку", "благодарность", "сила", "вид", "словно", "вследствие"],
      grammar: [
        {
          title: "Correlative pairs",
          body: `- **Тот, кто**… — He who…: Тот, кто чита́ет, не скуча́ет.
- **Насто́лько…, что** — so…that: Он та́лантлив настолько, что... легко́.
- **То, что** + clause as subject: То, что он пришёл, удиви́ло всех. (cleft-like focus)
- **так что** = so (result): Поздне́й, так что пошли́ домо́й.
- Comparatives: **словно / бу́дто / ро́вно** — as if (literary).`,
          examples: [
            { ru: "То' что ты сказа'л, измени'ло всё.", en: "What you said changed everything." },
          ],
        },
      ],
      exercises: [
        {
          id: "c1-u04-l1-e1",
          type: "single",
          text: "___, кто late, извините… «___, кто опозда́л, дождётся».",
          options: [{ id: "a", label: "Тот" }, { id: "b", label: "Это" }], answer: "a"
        },
        {
          id: "c1-u04-l1-e2",
          type: "single",
          text: "Он уста́л, ___ не мог идти́. (so tired that)",
          options: [{ id: "a", label: "настолько" }, { id: "b", label: "настолько же" }], answer: "a"
        },
        {
          id: "c1-u04-l1-e3",
          type: "true-false",
          text: "«То, что» clauses can be the subject of a sentence.",
          answer: true,
        },
      ],
      drills: [{ kind: "cloze", count: 4 }],
    },
  ],

  test: [
    {
      id: "c1-u04-test-1",
      type: "single",
      text: "___ что сказано, будет сделано.",
      options: [{ id: "a", label: "То," }, { id: "b", label: "Что," }], answer: "a"
    },
    {
      id: "c1-u04-test-2",
      type: "single",
      text: "«так что» expresses:",
      options: [{ id: "a", label: "result" }, { id: "b", label: "concession" }], answer: "a"
    },
    {
      id: "c1-u04-test-3",
      type: "short-answer",
      text: "Connect: «Он опозда́л. Началось заседа́ние.» (result: так что)",
      answer: "он опоздал так что началось заседание",
      accept: ["он опоздал, так что заседание началось"],
    },
  ],
};
