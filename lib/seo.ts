import type { Metadata } from "next";
import { districts, faqs, services, site } from "./site";

/** Only the production deployment should be indexed — Vercel preview URLs stay out of Google. */
export const isIndexable = process.env.VERCEL_ENV ? process.env.VERCEL_ENV === "production" : true;

export const keywords = [
  "waste management Kerala",
  "waste management Trivandrum",
  "waste management Thiruvananthapuram",
  "salon waste disposal Kerala",
  "salon waste management",
  "commercial waste management Kerala",
  "office waste collection",
  "garbage collection Kerala",
  "waste pickup service Kerala",
  "composting bin Kerala",
  "home composting Trivandrum",
  "recycling services Kerala",
  "eco-friendly waste disposal",
  "Green & Clean",
];

type PageSeo = { title: string; description: string; path: string };

/** Full metadata for a page — Open Graph/Twitter are rebuilt per page so nothing is lost when Next merges. */
export function pageMetadata({ title, description, path }: PageSeo): Metadata {
  const url = path === "/" ? site.url : `${site.url}${path}`;
  return {
    title: path === "/" ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_IN",
      siteName: site.name,
      url,
      title: path === "/" ? title : `${title} | ${site.name}`,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: path === "/" ? title : `${title} | ${site.name}`,
      description,
    },
  };
}

export const pages = {
  home: {
    path: "/",
    title: "Waste Management Services in Kerala | Green & Clean",
    description:
      "Eco-friendly salon, office and home waste management across all 14 districts of Kerala. Scheduled pickups, segregation bins and monthly compliance reports.",
  },
  about: {
    path: "/about",
    title: "About Us – 10+ Years in Waste Management",
    description:
      "Green & Clean is a Thiruvananthapuram-based waste management company with over a decade of experience serving salons, offices and homes across Kerala.",
  },
  services: {
    path: "/services",
    title: "Salon, Office & Home Waste Services",
    description:
      "Salon waste disposal, commercial and office waste collection, and home composting in Kerala. Plastic, paper, metal, wood, textile and dry waste handled responsibly.",
  },
  contact: {
    path: "/contact",
    title: "Contact Us – Book a Waste Pickup in Kerala",
    description:
      "Call +91 62823 05350 or email greenancleanwm@gmail.com to book a waste pickup or free consultation. Based in Thiruvananthapuram, serving all of Kerala.",
  },
} satisfies Record<string, PageSeo>;

/* ---------------- Structured data (schema.org JSON-LD) ---------------- */

const orgId = `${site.url}/#organization`;
const websiteId = `${site.url}/#website`;

export const organizationLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": orgId,
      name: site.name,
      alternateName: "Green and Clean Waste Management",
      description: site.description,
      slogan: site.tagline,
      url: site.url,
      logo: { "@type": "ImageObject", url: `${site.url}/images/logo.png`, width: 900, height: 675 },
      image: `${site.url}/images/hero-park.jpg`,
      telephone: "+91-6282305350",
      email: site.email,
      priceRange: "₹₹",
      address: {
        "@type": "PostalAddress",
        streetAddress: site.address.line1,
        addressLocality: site.address.city,
        addressRegion: site.address.state,
        postalCode: "695587",
        addressCountry: "IN",
      },
      areaServed: districts.map((d) => ({ "@type": "AdministrativeArea", name: `${d}, Kerala, India` })),
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-6282305350",
        email: site.email,
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["English", "Malayalam"],
      },
      knowsAbout: ["Waste management", "Salon waste disposal", "Commercial waste collection", "Recycling", "Composting"],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Waste management services",
        itemListElement: services.map((s) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: s.title, url: `${site.url}/services#${s.key}` },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: site.url,
      name: site.name,
      description: site.description,
      inLanguage: "en-IN",
      publisher: { "@id": orgId },
    },
  ],
};

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...items].map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.path === "/" ? site.url : `${site.url}${it.path}`,
    })),
  };
}

export const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export const servicesLd = {
  "@context": "https://schema.org",
  "@graph": services.map((s) => ({
    "@type": "Service",
    "@id": `${site.url}/services#${s.key}`,
    name: s.title,
    serviceType: s.title,
    description: s.text,
    url: `${site.url}/services#${s.key}`,
    image: `${site.url}${s.image}`,
    provider: { "@id": orgId },
    areaServed: { "@type": "State", name: "Kerala", containedInPlace: { "@type": "Country", name: "India" } },
    audience: { "@type": "Audience", audienceType: s.serves.join(", ") },
  })),
};

export function webPageLd(type: "AboutPage" | "ContactPage" | "WebPage", path: string, name: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${site.url}${path}#webpage`,
    url: `${site.url}${path}`,
    name,
    description,
    inLanguage: "en-IN",
    isPartOf: { "@id": websiteId },
    about: { "@id": orgId },
  };
}
