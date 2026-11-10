import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const alt = "Green & Clean services";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg("Our services", "Salon, office & home waste — handled right.");
}
