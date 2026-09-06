// Curriculum content types. Content files under content/curriculum are
// statically imported and typechecked against these.

export const LEVELS = ["a2", "b1", "b2", "c1"] as const;
export type Level = (typeof LEVELS)[number];

export const LEVEL_LABELS: Record<Level, string> = {
  a2: "A2",
  b1: "B1",
  b2: "B2",
  c1: "C1",
};

export const LEVEL_DESCRIPTIONS: Record<Level, string> = {
  a2: "Rebuild the foundations: all six cases, tenses, aspect, motion verbs.",
  b1: "Plurals everywhere, participles, verbal adverbs, complex sentences.",
  b2: "Aspect semantics, impersonal constructions, indirect speech, style.",
  c1: "Advanced syntax, word formation, registers, idiomatic grammar.",
};

/** One self-contained explanation block. Notes must be complete enough to
 * attempt the lesson's practices without external reference. */
export interface GrammarBlock {
  title: string;
  /** Concise markdown: what it is, when to use it. */
  body: string;
  /** Any pattern/endings table. */
  table?: { headers: string[]; rows: string[][]; caption?: string };
  /** 3-5 worked examples. */
  examples?: { ru: string; en: string }[];
  /** Common-trap / usage note. */
  tip?: string;
}

export interface Option {
  id: string;
  label: string;
}

export interface ExerciseBase {
  id: string;
  hint?: string;
  explanation?: string;
  points?: number;
}

/**
 * The 7 quiz-renderer-compatible types. `short-answer.answer` is the
 * canonical answer; `accept` lists alternatives (in-app grading only —
 * exports use the canonical answer).
 */
export type Exercise =
  | (ExerciseBase & { type: "single"; text: string; options: Option[]; answer: string })
  | (ExerciseBase & { type: "multiple"; text: string; options: Option[]; answers: string[] })
  | (ExerciseBase & { type: "true-false"; text: string; answer: boolean })
  | (ExerciseBase & {
      type: "short-answer";
      text: string;
      answer: string;
      accept?: string[];
    })
  | (ExerciseBase & { type: "ordering"; text: string; items: Option[]; answer: string[] })
  | (ExerciseBase & {
      type: "fill-blank";
      text: string; // blanks marked {{blank}}
      answers: string[]; // canonical, per blank in order
      accept?: string[][]; // extra accepted alternatives per blank
      caseInsensitive?: boolean;
    })
  | (ExerciseBase & {
      type: "matching";
      text: string;
      prompts: Option[];
      responses: Option[];
      answer: Record<string, string>;
    });

export interface Lesson {
  id: string; // "a2-u01-l1"
  title: string;
  /** Grammar topic ids this lesson teaches, e.g. "a2-u01-present-tense". */
  topicIds: string[];
  grammar: GrammarBlock[];
  /** Vocabulary as bare Russian words; resolved to dictionary ids at load. */
  vocab: string[];
  exercises: Exercise[];
  /** Runtime-generated drills mixed into practice. */
  drills?: {
    kind: "conjugation" | "noun-case" | "adjective-case" | "comparative" | "cloze";
    count: number;
    slots?: string[];
    cases?: string[];
  }[];
}

export interface Unit {
  id: string; // "a2-u01"
  level: Level;
  number: number;
  title: string;
  /** Unit-level grammar topic ids (unit test grades these). */
  topicIds: string[];
  lessons: Lesson[];
  /** Unit test — pass ≥ 80% to unlock the next unit. */
  test: Exercise[];
}

export interface LevelCurriculum {
  level: Level;
  units: Unit[];
  /** Level exam — pass ≥ 80% to unlock the next level. */
  exam: Exercise[];
}

export const PASS_LESSON = 70;
export const PASS_TEST = 80;
