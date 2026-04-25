import React from "react";
import { computeSnapshot, formatCount, formatApproxScale } from "./counter";

interface OGTemplateProps {
  timestampMs?: number;
}

export function renderOGTemplate({ timestampMs }: OGTemplateProps = {}) {
  const snapshot = computeSnapshot(timestampMs ?? Date.now());
  const bornStr = formatCount(snapshot.born);
  const deceasedStr = formatCount(snapshot.deceased);
  const bornApprox = formatApproxScale(snapshot.born);
  const deceasedApprox = formatApproxScale(snapshot.deceased);
  const deceasedPct = ((snapshot.deceased / snapshot.born) * 100).toFixed(1);

  const frozenLabel = timestampMs
    ? new Date(timestampMs).toUTCString()
    : null;

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        fontFamily: "serif",
        position: "relative",
      }}
    >
      {/* Light half — Born */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "50%",
          height: "100%",
          backgroundColor: "#FAFAF7",
          color: "#0A0A0A",
          padding: "60px 40px 100px 40px",
        }}
      >
        <div
          style={{
            fontSize: 20,
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            color: "rgba(10, 10, 10, 0.55)",
            fontFamily: "sans-serif",
          }}
        >
          Ever born
        </div>
        <div
          style={{
            fontSize: 56,
            marginTop: 24,
            fontVariantNumeric: "tabular-nums",
            lineHeight: 1.1,
          }}
        >
          {bornStr}
        </div>
        <div
          style={{
            fontSize: 20,
            marginTop: 16,
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            color: "rgba(10, 10, 10, 0.5)",
            fontFamily: "sans-serif",
          }}
        >
          {bornApprox}
        </div>
      </div>

      {/* Dark half — Deceased */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "50%",
          height: "100%",
          backgroundColor: "#0A0A0A",
          color: "#FAFAF7",
          padding: "60px 40px 100px 40px",
        }}
      >
        <div
          style={{
            fontSize: 20,
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            color: "rgba(250, 250, 247, 0.55)",
            fontFamily: "sans-serif",
          }}
        >
          Ever deceased
        </div>
        <div
          style={{
            fontSize: 56,
            marginTop: 24,
            fontVariantNumeric: "tabular-nums",
            lineHeight: 1.1,
          }}
        >
          {deceasedStr}
        </div>
        <div
          style={{
            fontSize: 20,
            marginTop: 16,
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            color: "rgba(250, 250, 247, 0.5)",
            fontFamily: "sans-serif",
          }}
        >
          {deceasedApprox}
        </div>
      </div>

      {/* Footer strip — spans both halves */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "18px 40px",
          backgroundColor: "rgba(10, 10, 10, 0.94)",
          color: "rgba(250, 250, 247, 0.9)",
          fontFamily: "sans-serif",
          fontSize: 17,
          letterSpacing: "0.08em",
        }}
      >
        <div style={{ display: "flex" }}>mementocount.com</div>
        <div style={{ display: "flex" }}>
          {frozenLabel
            ? `This moment — ${frozenLabel}`
            : `${deceasedPct}% of humans ever born are deceased`}
        </div>
      </div>
    </div>
  );
}
