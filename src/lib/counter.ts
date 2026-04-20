import {
  BASELINE_TIMESTAMP_MS,
  BORN_BASELINE,
  DEAD_BASELINE,
  BIRTH_RATE_PER_SECOND,
  DEATH_RATE_PER_SECOND,
} from "./constants";

export interface CounterSnapshot {
  born: number;
  deceased: number;
  living: number;
}

/**
 * Compute current cumulative totals from a fixed baseline.
 * Using elapsed time since baseline (not incrementing per tick) guarantees
 * consistency across refreshes and devices.
 */
export function computeSnapshot(nowMs: number = Date.now()): CounterSnapshot {
  const elapsedSeconds = (nowMs - BASELINE_TIMESTAMP_MS) / 1000;

  const born = BORN_BASELINE + elapsedSeconds * BIRTH_RATE_PER_SECOND;
  const deceased = DEAD_BASELINE + elapsedSeconds * DEATH_RATE_PER_SECOND;
  const living = born - deceased;

  return { born, deceased, living };
}

/**
 * Format a number with locale-aware thousands separators.
 * Floors to integer — fractional humans are not rendered.
 */
export function formatCount(n: number): string {
  return Math.floor(n).toLocaleString("en-US");
}
