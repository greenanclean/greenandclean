import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const alt = "Contact Green & Clean";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg("Contact us", "Book a pickup or a free consultation.");
}
