import { ImageResponse } from "next/og";
import { renderOGTemplate } from "@/lib/og-template";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const tsParam = searchParams.get("ts");
  const timestampMs = tsParam ? parseInt(tsParam, 10) : Date.now();

  const safeTs =
    !isNaN(timestampMs) && timestampMs > 0 && timestampMs < 9_999_999_999_999
      ? timestampMs
      : Date.now();

  return new ImageResponse(renderOGTemplate({ timestampMs: safeTs }), {
    width: 1200,
    height: 630,
  });
}
