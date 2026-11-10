import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { isIndexable } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  if (!isIndexable) {
    // Vercel preview deployments: keep them out of search results.
    return { rules: { userAgent: "*", disallow: "/" } };
  }
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
