import type { Unit } from "@/lib/curriculum/types";

/** C1 · Unit 4 — Advanced subordination, one step at a time. */
export const u04: Unit = {
  id: "c1-u04",
  level: "c1",
  number: 4,
  title: "Correlatives, clefts and multi-level clauses",
  topicIds: ["c1-u04-subordination"],
  lessons: [
    {
      id: "c1-u04-l1",
      title: "Step 1: тот…кто, то…что — correlative pairs",
      topicIds: ["c1-u04-subordination"],
      vocab: ["тот", "кто", "что", "настолько", "насколько", "поскольку", "словно", "скучать", "удивить", "результат"],
      grammar: [
        {
          title: "Pointing at whole clauses",
          body: `- **Тот, кто**… — He who…: Тот, кто чита́ет, не скуча́ет.
- **То, что** + clause as subject/object: То, что он пришёл, удиви́ло всех.
The demonstrative (тот/то) carries the case; the clause fills it.`,
          table: {
            headers: ["Correlative", "Example"],
            rows: [
              ["Тот, кто…", "Тот, кто опоздал, дождётся"],
              ["То, что…", "То, что ты сказал, изменило всё"],
            ],
          },
        },
      ],
      exercises: [
        {
          id: "c1-u04-l1-e1",
          type: "single",
          text: "___, кто опозда́л, дождётся.",
          options: [{ id: "a", label: "Тот" }, { id: "b", label: "Это" }], answer: "a",
        },
        {
          id: "c1-u04-l1-e2",
          type: "single",
          text: "___, что сказано, будет сделано.",
          options: [{ id: "a", label: "То" }, { id: "b", label: "Этот" }], answer: "a",
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
    {
      id: "c1-u04-l2",
      title: "Step 2: насто́лько…что, так что, словно",
      topicIds: ["c1-u04-subordination"],
      vocab: ["талантливый", "легко", "поздний", "пойти", "домой", "заседание", "начаться", "опоздать", "будто", "ровно"],
      grammar: [
        {
          title: "Degree and result",
          body: `- **Насто́лько…, что** — so…that: Он та́лантлив настолько, что... лени́в.
- **так что** = so (result): Поздне́й... better: Уже́ по́здно, так что пошли́ домо́й.
- Comparatives: **словно / бу́дто / ро́вно** — as if (literary).`,
          examples: [
            { ru: "Он опозда'л, так что заседа'ние уже' шло.", en: "He was late, so the meeting had already started." },
          ],
        },
      ],
      exercises: [
        {
          id: "c1-u04-l2-e1",
          type: "single",
          text: "Он уста́л, ___ не мог идти́. (so tired that)",
          options: [{ id: "a", label: "настолько" }, { id: "b", label: "настолько же" }], answer: "a",
        },
        {
          id: "c1-u04-l2-e2",
          type: "single",
          text: "«так что» expresses:",
          options: [{ id: "a", label: "result" }, { id: "b", label: "concession" }], answer: "a",
        },
        {
          id: "c1-u04-l2-e3",
          type: "short-answer",
          text: "Connect: «Он опозда́л. Началось заседа́ние.» (result: так что)",
          answer: "он опоздал так что началось заседание",
          accept: ["он опоздал, так что заседание началось"],
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
  ],

  test: [
    {
      id: "c1-u04-test-1", type: "single",
      text: "___ что сказано, будет сделано.",
      options: [{ id: "a", label: "То," }, { id: "b", label: "Что," }], answer: "a",
    },
    {
      id: "c1-u04-test-2", type: "single",
      text: "«так что» expresses:",
      options: [{ id: "a", label: "result" }, { id: "b", label: "concession" }], answer: "a",
    },
    {
      id: "c1-u04-test-3", type: "short-answer",
      text: "Connect: «Он опозда́л. Началось заседа́ние.» (result: так что)",
      answer: "он опоздал так что началось заседание",
      accept: ["он опоздал, так что заседание началось"],
    },
  ],
};
