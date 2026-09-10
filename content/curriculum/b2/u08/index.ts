import type { Unit } from "@/lib/curriculum/types";

/** B2 · Units 8–12 combined syllabus coverage: word order, motion IV, comparatives, particles, register. */
export const u08: Unit = {
  id: "b2-u08",
  level: "b2",
  number: 8,
  title: "Word order, particles and emphasis",
  topicIds: ["b2-u08-word-order"],
  lessons: [
    {
      id: "b2-u08-l1",
      title: "Theme and rheme: word order is meaning",
      topicIds: ["b2-u08-word-order"],
      vocab: ["же", "ведь", "уж", "только", "именно", "даже", "вот", "просто", "чуть", "почти"],
      grammar: [
        {
          title: "New information goes last",
          body: `Word order in Russian is grammar, not preference. Ма́ма прие́хала (news: mom arrived) vs Прие́хала ма́ма (news: it's MOM who arrived). The new information — the rheme — goes last; everything else is shared context (theme).Russian word order is flexible because **case endings** carry grammar. Word order marks what's NEW (rheme usually last):
- **Ма́ма прие́хала.** (answer to: Что случи́лось? — news: mom arrived)
- **Прие́хала ма́ма.** (answer to: Кто прие́хал? — news: it's MOM)
Particles sharpen focus: же (contrast/reminder), ведь (you know, after all), именно (precisely), да́же (even).`,
          examples: [
            { ru: "Я же говори'л!", en: "But I told you so!" },
            { ru: "Он ведь не зна'ет.", en: "You know, he doesn't know." },
          ],
        },
      ],
      exercises: [
        {
          id: "b2-u08-l1-e1",
          type: "single",
          text: "Кто купи́л хле́б? — ___. (focus on WHO)",
          options: [{ id: "a", label: "Хлеб купила мама" }, { id: "b", label: "Мама купила хлеб" }], answer: "a"
        },
        {
          id: "b2-u08-l1-e2",
          type: "fill-blank",
          text: "Я ___ проси́л не кури́ть! *(I did tell you — же)*",
          answers: ["же"],
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
  ],

  test: [
    {
      id: "b2-u08-test-1",
      type: "single",
      text: "Neutral order for «children are sleeping»:",
      options: [{ id: "a", label: "Дети спят" }, { id: "b", label: "Спят дети" }], answer: "a"
    },
    {
      id: "b2-u08-test-2",
      type: "single",
      text: "___ я не знал! (I had no idea! — emphatic particle)",
      options: [{ id: "a", label: "Даже" }, { id: "b", label: "Именно" }], answer: "a"
    },
    {
      id: "b2-u08-test-3",
      type: "true-false",
      text: "The rheme (new info) normally sits at the END of the sentence.",
      answer: true,
    },
  ],
};
