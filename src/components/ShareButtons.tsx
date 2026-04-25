"use client";

import { useState } from "react";

export function ShareButtons() {
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "failed">(
    "idle"
  );
  const [downloadStatus, setDownloadStatus] = useState<
    "idle" | "working" | "failed"
  >("idle");

  const handleCopyLink = async () => {
    const ts = Date.now();
    const url = `https://mementocount.com/share/${ts}`;
    try {
      await navigator.clipboard.writeText(url);
      setCopyStatus("copied");
      setTimeout(() => setCopyStatus("idle"), 2000);
    } catch {
      setCopyStatus("failed");
      setTimeout(() => setCopyStatus("idle"), 2000);
    }
  };

  const handleDownload = async () => {
    setDownloadStatus("working");
    try {
      const ts = Date.now();
      const res = await fetch(`/api/share?ts=${ts}`);
      if (!res.ok) throw new Error("fetch failed");
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `memento-${ts}.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      setDownloadStatus("idle");
    } catch {
      setDownloadStatus("failed");
      setTimeout(() => setDownloadStatus("idle"), 2000);
    }
  };

  return (
    <section className="border-t border-[#0A0A0A]/10 bg-[#FAFAF7] px-6 py-16 text-[#0A0A0A]">
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-sans text-xs uppercase tracking-[0.2em] text-[#0A0A0A]/50">
          Share this moment
        </p>
        <p className="mt-4 font-serif text-2xl leading-snug sm:text-3xl">
          Freeze the count, share the instant.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <button
            type="button"
            onClick={handleDownload}
            disabled={downloadStatus === "working"}
            className="w-full rounded-none border border-[#0A0A0A] px-6 py-3 font-sans text-sm uppercase tracking-wider text-[#0A0A0A] transition-colors hover:bg-[#0A0A0A] hover:text-[#FAFAF7] disabled:cursor-wait disabled:opacity-60 sm:w-auto"
          >
            {downloadStatus === "working"
              ? "Preparing…"
              : downloadStatus === "failed"
              ? "Try again"
              : "Download image"}
          </button>

          <button
            type="button"
            onClick={handleCopyLink}
            className="w-full rounded-none border border-[#0A0A0A] px-6 py-3 font-sans text-sm uppercase tracking-wider text-[#0A0A0A] transition-colors hover:bg-[#0A0A0A] hover:text-[#FAFAF7] sm:w-auto"
          >
            {copyStatus === "copied"
              ? "Link copied ✓"
              : copyStatus === "failed"
              ? "Copy failed"
              : "Copy shareable link"}
          </button>
        </div>
      </div>
    </section>
  );
}
