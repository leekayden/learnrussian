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

export const a2: LevelCurriculum = {
  level: "a2",
  units: [u01, u02, u03, u04, u05, u06, u07, u08, u09, u10, u11, u12],
  exam: [
    {
      id: "a2-exam-1",
      type: "short-answer",
      text: "рабо́тать — form for **они**",
      answer: "работают",
    },
    {
      id: "a2-exam-2",
      type: "short-answer",
      text: "Give the prepositional: в ___ (музе́й)",
      answer: "в музее",
    },
    {
      id: "a2-exam-3",
      type: "single",
      text: "Я давно́ не ___ тебе́. (to write — process negation)",
      options: [
        { id: "a", label: "писал" },
        { id: "b", label: "написал" },
      ],
      answer: "a",
    },
    {
      id: "a2-exam-4",
      type: "single",
      text: "Она́ хо́чет стать ___. (переводчи́ца)",
      options: [
        { id: "a", label: "переводчицей" },
        { id: "b", label: "переводчица" },
        { id: "c", label: "переводчице" },
      ],
      answer: "a",
    },
    {
      id: "a2-exam-5",
      type: "single",
      text: "Мы ___ в Но́вый Иорк че́рез неде́лю. (set off — perfective)",
      options: [
        { id: "a", label: "поедем" },
        { id: "b", label: "ездим" },
      ],
      answer: "a",
    },
    {
      id: "a2-exam-6",
      type: "fill-blank",
      text: "У меня́ ___ во́лос на голове́ бо́льше, чем у тебя́. *(I have more hair than you — much/a lot)*",
      answers: ["больше"],
    },
    {
      id: "a2-exam-7",
      type: "short-answer",
      text: "Polite: (Tell me, please, where is the square?) — «пло́щадь»",
      answer: "скажите пожалуйста где площадь",
    },
    {
      id: "a2-exam-8",
      type: "true-false",
      text: "«Мне нра́вятся ру́сские пе́сни» agrees correctly.",
      answer: true,
    },
    {
      id: "a2-exam-9",
      type: "matching",
      text: "Case detective — which case is each bolded form?",
      prompts: [
        { id: "p1", label: "Я звоню́ бра́ту" },
        { id: "p2", label: "Я иду́ к бра́ту" },
        { id: "p3", label: "У бра́та есть дом" },
        { id: "p4", label: "Я иду́ с бра́том" },
      ],
      responses: [
        { id: "r1", label: "genitive" },
        { id: "r2", label: "dative" },
        { id: "r3", label: "instrumental" },
      ],
      answer: { p1: "r2", p2: "r2", p3: "r1", p4: "r3" },
      explanation: "Both звонить кому and к кому are dative; у + gen; с + instrumental.",
    },
    {
      id: "a2-exam-10",
      type: "ordering",
      text: "Build: **Yesterday my sister came home late.**",
      items: [
        { id: "1", label: "Вчера" },
        { id: "2", label: "моя сестра" },
        { id: "3", label: "пришла" },
        { id: "4", label: "домой" },
        { id: "5", label: "поздно" },
      ],
      answer: ["1", "2", "3", "4", "5"],
    },
    {
      id: "a2-exam-11",
      type: "short-answer",
      text: "Вре́мя → genitive: (no time) — «у меня́ нет ___»",
      answer: "времени",
    },
    {
      id: "a2-exam-12",
      type: "single",
      text: "Choose the correct aspect pair member: «Ка́ждое у́тро я ___».",
      options: [
        { id: "a", label: "делаю зарядку" },
        { id: "b", label: "сделаю зарядку" },
      ],
      answer: "a",
    },
  ],
};
