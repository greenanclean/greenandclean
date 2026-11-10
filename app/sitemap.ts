import type { MetadataRoute } from "next";
import { services, site, wasteCategories } from "@/lib/site";

const abs = (p: string) => `${site.url}${p}`;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    {
      url: site.url,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      images: [abs("/images/hero-park.jpg"), abs("/images/sorting-waste.jpg"), abs("/images/logo.png")],
    },
    {
      url: abs("/services"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
      images: [...services.map((s) => abs(s.image)), ...wasteCategories.map((c) => abs(c.image))],
    },
    {
      url: abs("/about"),
      lastModified,
      changeFrequency: "yearly",
      priority: 0.7,
      images: [abs("/images/recycle-bins.jpg"), abs("/images/logo.png")],
    },
    {
      url: abs("/contact"),
      lastModified,
      changeFrequency: "yearly",
      priority: 0.8,
    },
  ];
}
