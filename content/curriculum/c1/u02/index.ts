import type { Unit } from "@/lib/curriculum/types";

/** C1 · Units 2–4: academic participles, literary adverbs, advanced subordination. */
export const u02: Unit = {
  id: "c1-u02",
  level: "c1",
  number: 2,
  title: "Academic participle style",
  topicIds: ["c1-u02-academic-style"],
  lessons: [
    {
      id: "c1-u02-l1",
      title: "-мый adjectives and participle chains",
      topicIds: ["c1-u02-academic-style"],
      vocab: ["ведомый", "искомый", "желаемый", "уважаемый", "любимый", "невидимый", "определяемый", "рассматриваемый", "исследуемый", "незыблемый"],
      grammar: [
        {
          title: "-мый: passive potential",
          body: `Imperfective passive in **-мый** = 'being ~-able': определя́емый (defined as), рассма́триваемый (under consideration), жела́емый (desired), любимый.
Academic style chains them: «Пробле́ма, рассма́триваемая в э́той статье́, свя́зана с явле́ниями, опи́санными вы́ше» (The problem considered in this article relates to phenomena described above).`,
          examples: [
            { ru: "В раccма'триваемом слу'чае…", en: "In the case under consideration…" },
          ],
          tip: "-мый participles require imperfective transitive verbs. No -мый from спать or пойти.",
        },
      ],
      exercises: [
        {
          id: "c1-u02-l1-e1",
          type: "single",
          text: "«При́нципы, ___ в главе́ 2» (lay out — класть, imperfective)",
          options: [{ id: "a", label: "полагаемые" }, { id: "b", label: "положенные" }], answer: "a"
        },
        {
          id: "c1-u02-l1-e2",
          type: "true-false",
          text: "«вышеупомянутый» = above-mentioned (formal).",
          answer: true,
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
  ],

  test: [
    {
      id: "c1-u02-test-1",
      type: "single",
      text: "-мый participles come from ___ verbs.",
      options: [{ id: "a", label: "imperfective transitive" }, { id: "b", label: "perfective reflexive" }], answer: "a"
    },
    {
      id: "c1-u02-test-2",
      type: "single",
      text: "In academic style, «рассма́триваемая пробле́ма» means:",
      options: [{ id: "a", label: "the problem being considered" }, { id: "b", label: "the problem we will consider" }], answer: "a"
    },
  ],
};
