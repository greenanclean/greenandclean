import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const alt = "Green & Clean — Waste management services in Kerala";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg("Waste management · Kerala", "Your mess is our mission.");
}
