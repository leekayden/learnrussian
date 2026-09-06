import type { LevelCurriculum } from "@/lib/curriculum/types";
import { u01 } from "./u01";
import { u02 } from "./u02";
import { u03 } from "./u03";
import { u04 } from "./u04";
import { u05 } from "./u05";
import { u06 } from "./u06";
import { u07 } from "./u07";
import { u08 } from "./u08";
import { u09 } from "./u09";
import { u10 } from "./u10";
import { u11 } from "./u11";
import { u12 } from "./u12";

export const b2: LevelCurriculum = {
  level: "b2",
  units: [u01, u02, u03, u04, u05, u06, u07, u08, u09, u10, u11, u12],
  exam: [
    {
      id: "b2-exam-1",
      type: "single",
      text: "___ his help we succeeded: Благодаря́ ___ мы успе́ли.",
      options: [{ id: "a", label: "его помощи" }, { id: "b", label: "его помощь" }],
      answer: "a",
    },
    {
      id: "b2-exam-2",
      type: "single",
      text: "Он сказа́л, что ___. (report: «Я за́нят»)",
      options: [{ id: "a", label: "занят" }, { id: "b", label: "был занят" }],
      answer: "a",
      explanation: "No tense shift in Russian indirect speech.",
    },
    {
      id: "b2-exam-3",
      type: "single",
      text: "___ бы он ни де́лал, все недово́льны.",
      options: [{ id: "a", label: "Что" }, { id: "b", label: "Что́бы" }],
      answer: "a",
    },
    {
      id: "b2-exam-4",
      type: "single",
      text: "Кто прие́хал? — ___. (rheme fronting)",
      options: [{ id: "a", label: "Приехала мама" }, { id: "b", label: "Мама приехала" }],
      answer: "a",
    },
    {
      id: "b2-exam-5",
      type: "short-answer",
      text: "The more we learn, the easier it gets: (Чем…, тем…)",
      answer: "чем больше мы учимся тем легче становится",
      accept: ["чем больше учимся тем легче"],
    },
    {
      id: "b2-exam-6",
      type: "true-false",
      text: "«полторы недели» is correct.",
      answer: true,
    },
    {
      id: "b2-exam-7",
      type: "short-answer",
      text: "Genitive under negation: «Я не чита́л ___» (э́та статья́)",
      answer: "этой статьи",
    },
    {
      id: "b2-exam-8",
      type: "single",
      text: "Зако́н ___ госуда́рством. (was adopted — agent instrumental)",
      options: [{ id: "a", label: "принят" }, { id: "b", label: "принятый" }],
      answer: "a",
    },
  ],
};
