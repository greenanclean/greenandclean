import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const alt = "About Green & Clean";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg("About us", "10+ years of keeping Kerala clean & green.");
}
