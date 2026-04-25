import { ImageResponse } from "next/og";
import { renderOGTemplate } from "@/lib/og-template";

export const runtime = "edge";
export const alt = "Memento — a live count of every human who ever lived";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(renderOGTemplate(), { ...size });
}
