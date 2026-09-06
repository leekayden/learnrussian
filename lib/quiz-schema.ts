import { z } from "zod";

/**
 * A faithful port of quiz-renderer's lib/quiz-schema.ts (Zod discriminated
 * union) so every quiz we export validates exactly the way the renderer
 * validates on import (/quizzes/new → parseQuizJson).
 */
export const RendererOptionSchema = z.object({
  id: z.string().min(1),
  label: z.string().min(1),
});

const RendererBaseSchema = z.object({
  id: z.string().min(1),
  text: z.string().min(1),
  hint: z.string().optional(),
  points: z.number().positive().default(1),
  explanation: z.string().optional(),
});

export const RendererQuestionSchema = z.discriminatedUnion("type", [
  RendererBaseSchema.extend({
    type: z.literal("single"),
    options: z.array(RendererOptionSchema).min(2),
    answer: z.string(),
  }),
  RendererBaseSchema.extend({
    type: z.literal("multiple"),
    options: z.array(RendererOptionSchema).min(2),
    answers: z.array(z.string()),
  }),
  RendererBaseSchema.extend({
    type: z.literal("true-false"),
    answer: z.boolean(),
  }),
  RendererBaseSchema.extend({
    type: z.literal("short-answer"),
    answer: z.string().optional(),
  }),
  RendererBaseSchema.extend({
    type: z.literal("ordering"),
    items: z.array(RendererOptionSchema).min(2),
    answer: z.array(z.string()),
  }),
  RendererBaseSchema.extend({
    type: z.literal("fill-blank"),
    answers: z.array(z.string()).min(1),
    caseInsensitive: z.boolean().default(true),
  }),
  RendererBaseSchema.extend({
    type: z.literal("matching"),
    prompts: z.array(RendererOptionSchema),
    responses: z.array(RendererOptionSchema),
    answer: z.record(z.string(), z.string()),
  }),
]);

export const RendererQuizSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(1),
  description: z.string().optional(),
  coverNotes: z.array(z.string()).optional(),
  feedbackMode: z.enum(["immediate", "deferred", "none"]).default("immediate"),
  timeLimit: z.number().nonnegative().optional(),
  shuffleQuestions: z.boolean().default(false),
  shuffleOptions: z.boolean().default(false),
  questions: z.array(RendererQuestionSchema).min(1),
});

export type RendererQuiz = z.infer<typeof RendererQuizSchema>;
