import type { Unit } from "@/lib/curriculum/types";

/** C1 · Unit 5 — Modality & evidentials. */
export const u05: Unit = {
  id: "c1-u05",
  level: "c1",
  number: 5,
  title: "Modality and evidentials",
  topicIds: ["c1-u05-modality-evidentials"],
  lessons: [
    {
      id: "c1-u05-l1",
      title: "должно быть, якобы, якоби… видимо, seems family",
      topicIds: ["c1-u05-modality-evidentials"],
      vocab: ["видимо", "вероятно", "наверное", "кажущийся", "оказаться", "якобы", "будто", "очевидный", "слух", "догадка"],
      grammar: [
        {
          title: "Marking the source of knowledge",
          body: `Evidential markers show WHERE knowledge came from: должно быть / очеви́дно / по-ви́димому (inference), ка́жется (impression), оказа́лось (discovery against expectation), я́кобы (reported with doubt), бу́дто бы (as if). «Он я́кобы был там» = he claims he was there — and I'm not vouching.

Evidential markers show WHERE the knowledge comes from:
- **должно быть / очеви́дно / по-ви́димому** — inference: Должно быть, он за́нят.
- **ка́жется / оказа́лось** — impression vs discovery: Ка́жется, дождь ко́нчился. Оказа́лось, что... 
- **я́кобы** — reported with doubt: Он я́кобы был там. (he CLAIMED to be)
- **ка́к бу́дто / бу́дто бы** — as if (doubtful reporting): Он бу́дто бы не зна́л.`,
          why: "я́кобы and бу́дто бы cast doubt on the REPORT, not the event — journalists and gossipers live on them. And «Вам бы отдохну́ть» is advice without an imperative: бы marks the situation as unreal/desirable, the dative names who would benefit. Soft advice, no order given.",
          examples: [
            { ru: "Он я'кобы ничего' не зна'л.", en: "He claims he knew nothing (and we doubt it)." },
          ],
          tip: "якобы and будто бы cast doubt on the REPORT, not the event — journalists love them.",
        },
      ],
      exercises: [
        {
          id: "c1-u05-l1-e1",
          type: "single",
          text: "___, все уже́ ушли́. (inference from evidence)",
          options: [{ id: "a", label: "Видимо" }, { id: "b", label: "Якобы" }], answer: "a"
        },
        {
          id: "c1-u05-l1-e2",
          type: "single",
          text: "Он ___ ничего́ не знал. (reported with doubt)",
          options: [{ id: "a", label: "якобы" }, { id: "b", label: "очевидно" }], answer: "a"
        },
        {
          id: "c1-u05-l1-e3",
          type: "fill-blank",
          text: "___ быть, он уже́ дое́хал. *(must have)*",
          answers: ["Должно"],
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
  ],

  test: [
    {
      id: "c1-u05-test-1",
      type: "single",
      text: "Marker of DOUBTFUL hearsay:",
      options: [{ id: "a", label: "якобы" }, { id: "b", label: "очевидно" }], answer: "a"
    },
    {
      id: "c1-u05-test-2",
      type: "single",
      text: "«Оказа́лось, что…» signals:",
      options: [{ id: "a", label: "discovery against expectation" }, { id: "b", label: "a command" }], answer: "a"
    },
    {
      id: "c1-u05-test-3",
      type: "short-answer",
      text: "Apparently (inference, 2 words):",
      answer: "должно быть",
    },
  ],
};
