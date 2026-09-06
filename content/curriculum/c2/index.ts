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

export const c2: LevelCurriculum = {
  level: "c2",
  units: [u01, u02, u03, u04, u05, u06, u07, u08, u09, u10, u11, u12],
  exam: [
    {
      id: "c2-exam-1",
      type: "single",
      text: "Indefinite portion: нали́ть ___ (ча́й)",
      options: [{ id: "a", label: "чаю" }, { id: "b", label: "чая" }],
      answer: "a",
    },
    {
      id: "c2-exam-2",
      type: "single",
      text: "In the corner (located): в ___",
      options: [{ id: "a", label: "углу" }, { id: "b", label: "угле" }],
      answer: "a",
    },
    {
      id: "c2-exam-3",
      type: "single",
      text: "General ban: не ___ здесь кури́ть.",
      options: [{ id: "a", label: "нужно" }, { id: "b", label: "следует" }],
      answer: "b",
      explanation: "Formal prohibition: не следует курить.",
    },
    {
      id: "c2-exam-4",
      type: "single",
      text: "He claims he knew nothing: Он ___ ничего́ не знал.",
      options: [{ id: "a", label: "мол" }, { id: "b", label: "же" }],
      answer: "a",
    },
    {
      id: "c2-exam-5",
      type: "single",
      text: "Not a word of truth: ___ сло́ва пра́вды.",
      options: [{ id: "a", label: "Ни" }, { id: "b", label: "Не" }],
      answer: "a",
    },
    {
      id: "c2-exam-6",
      type: "single",
      text: "«зару́бить на носу́» — the frozen case is:",
      options: [{ id: "a", label: "dative" }, { id: "b", label: "accusative" }],
      answer: "a",
    },
    {
      id: "c2-exam-7",
      type: "single",
      text: "Register-ladder formal verb for «сказа́ть» in documents:",
      options: [{ id: "a", label: "уведомить" }, { id: "b", label: "проболтать" }],
      answer: "a",
    },
    {
      id: "c2-exam-8",
      type: "single",
      text: "«по да́нным исто́чников» is ___ frame.",
      options: [{ id: "a", label: "a journalistic sourcing" }, { id: "b", label: "a legal formula" }],
      answer: "a",
    },
    {
      id: "c2-exam-9",
      type: "short-answer",
      text: "In the forest (second locative): в ___",
      answer: "лесу",
    },
    {
      id: "c2-exam-10",
      type: "short-answer",
      text: "Had barely sat down: «Не успе́л ___, как…» (infinitive: сесть)",
      answer: "сесть",
    },
    {
      id: "c2-exam-11",
      type: "single",
      text: "«Ти́ше едешь — да́льше бу́дешь» demonstrates:",
      options: [{ id: "a", label: "comparative adverbs in a proverb" }, { id: "b", label: "parcellation" }],
      answer: "a",
    },
    {
      id: "c2-exam-12",
      type: "true-false",
      text: "«в теку́щем году́» — теку́щий is a frozen present-active participle.",
      answer: true,
    },
  ],
};
