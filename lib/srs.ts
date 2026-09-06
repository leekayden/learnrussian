import {
  createEmptyCard,
  fsrs,
  generatorParameters,
  type Card,
  type Grade,
  type RecordLogItem,
  type State,
} from "ts-fsrs";

const params = generatorParameters({
  request_retention: 0.9,
  maximum_interval: 365,
  learning_steps: ["1m", "10m"],
  relearning_steps: ["10m"],
});

const scheduler = fsrs(params);

export type { Card, Grade, State };
export const Rating = {
  Again: 1 as Grade,
  Hard: 2 as Grade,
  Good: 3 as Grade,
  Easy: 4 as Grade,
};

/** A fresh (New) card as of `now`. */
export function newCard(now = new Date()): Card {
  return createEmptyCard(now);
}

/** Rebuild a ts-fsrs Card from our stored row. */
export function toFsrsCard(row: {
  state: number;
  due: Date;
  stability: number;
  difficulty: number;
  step: number;
  reps: number;
  lapses: number;
  lastReview: Date | null;
}): Card {
  return {
    due: row.due,
    stability: row.stability,
    difficulty: row.difficulty,
    elapsed_days: 0,
    scheduled_days: 0,
    reps: row.reps,
    lapses: row.lapses,
    state: row.state as State,
    last_review: row.lastReview ?? undefined,
    learning_steps: row.step,
  };
}

/** Grade a card; returns the updated card + the review log. */
export function review(card: Card, grade: Grade, now = new Date()): RecordLogItem {
  return scheduler.repeat(card, now)[grade];
}
