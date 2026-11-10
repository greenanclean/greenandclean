import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name} — Waste Management Kerala`,
    short_name: site.name,
    description: site.description,
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#f6f8ef",
    theme_color: "#0b3326",
    lang: "en-IN",
    categories: ["business", "utilities"],
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/icons/maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
