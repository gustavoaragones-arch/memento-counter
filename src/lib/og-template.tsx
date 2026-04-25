import React from "react";
import { computeSnapshot, formatCount } from "./counter";

interface OGTemplateProps {
  timestampMs?: number;
}

export function renderOGTemplate({ timestampMs }: OGTemplateProps = {}) {
  const snapshot = computeSnapshot(timestampMs ?? Date.now());
  const bornStr = formatCount(snapshot.born);
  const deceasedStr = formatCount(snapshot.deceased);
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
          padding: "60px 30px",
        }}
      >
        <div
          style={{
            fontSize: 22,
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            color: "rgba(10, 10, 10, 0.6)",
            fontFamily: "sans-serif",
          }}
        >
          Ever born
        </div>
        <div
          style={{
            fontSize: 84,
            marginTop: 30,
            fontVariantNumeric: "tabular-nums",
          }}
        >
          {bornStr}
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
          padding: "60px 30px",
        }}
      >
        <div
          style={{
            fontSize: 22,
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            color: "rgba(250, 250, 247, 0.6)",
            fontFamily: "sans-serif",
          }}
        >
          Ever deceased
        </div>
        <div
          style={{
            fontSize: 84,
            marginTop: 30,
            fontVariantNumeric: "tabular-nums",
          }}
        >
          {deceasedStr}
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
          padding: "20px 40px",
          backgroundColor: "rgba(10, 10, 10, 0.92)",
          color: "rgba(250, 250, 247, 0.85)",
          fontFamily: "sans-serif",
          fontSize: 18,
          letterSpacing: "0.1em",
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
