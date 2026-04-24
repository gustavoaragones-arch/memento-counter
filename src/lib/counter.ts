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

/**
 * Render a large number as a friendly approximate label.
 * Examples:
 *   117_030_722_739 → "≈ 117 billion"
 *   108_910_336_157 → "≈ 108 billion"
 *   8_120_000_000   → "≈ 8 billion"
 *   520_000_000     → "≈ 520 million"
 * Rounds DOWN to the nearest whole unit to avoid ever overstating.
 */
export function formatApproxScale(n: number): string {
  if (n >= 1_000_000_000) {
    const billions = Math.floor(n / 1_000_000_000);
    return `≈ ${billions} billion`;
  }
  if (n >= 1_000_000) {
    const millions = Math.floor(n / 1_000_000);
    return `≈ ${millions} million`;
  }
  if (n >= 1_000) {
    const thousands = Math.floor(n / 1_000);
    return `≈ ${thousands} thousand`;
  }
  return `≈ ${Math.floor(n)}`;
}

/**
 * Compute how many births/deaths have occurred in a session,
 * given a start timestamp.
 */
export function computeSessionDelta(sessionStartMs: number, nowMs: number = Date.now()) {
  const elapsedSeconds = (nowMs - sessionStartMs) / 1000;
  return {
    bornInSession: elapsedSeconds * 4.3,  // BIRTH_RATE_PER_SECOND
    deceasedInSession: elapsedSeconds * 2.0, // DEATH_RATE_PER_SECOND
    elapsedSeconds,
  };
}
