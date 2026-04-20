// Baseline calibrated to April 19, 2026 00:00 UTC
// Derived from: PRB 2024 estimate (~117B ever born), current ~8.1B living,
// rolled forward from Jan 1, 2026 using the rates below.
// Sources: Population Reference Bureau (2024), UN World Population Prospects (2024 rev.)

export const BASELINE_TIMESTAMP_MS = Date.UTC(2026, 3, 19, 0, 0, 0); // Month is 0-indexed: 3 = April

// Cumulative totals at baseline
export const BORN_BASELINE = 117_030_000_000;   // Total humans ever born
export const LIVING_BASELINE = 8_120_000_000;   // Currently alive
export const DEAD_BASELINE = BORN_BASELINE - LIVING_BASELINE; // Derived, not hardcoded

// Global per-second rates (UN WPP 2024 mid-year averages)
export const BIRTH_RATE_PER_SECOND = 4.3;
export const DEATH_RATE_PER_SECOND = 2.0;

// Derived ratio at baseline — used for sanity checks only, not rendering
export const BASELINE_DECEASED_PCT = (DEAD_BASELINE / BORN_BASELINE) * 100;
