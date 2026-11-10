import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { site } from "@/lib/site";
import { isIndexable, keywords, organizationLd, pages } from "@/lib/seo";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: pages.home.title,
    template: `%s | ${site.name}`,
  },
  description: pages.home.description,
  applicationName: site.name,
  keywords,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: "Waste management",
  formatDetection: { telephone: true, email: true, address: true },
  robots: isIndexable
    ? {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-image-preview": "large",
          "max-snippet": -1,
          "max-video-preview": -1,
        },
      }
    : { index: false, follow: false },
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: site.name,
    url: site.url,
    title: pages.home.title,
    description: pages.home.description,
  },
  twitter: {
    card: "summary_large_image",
    title: pages.home.title,
    description: pages.home.description,
  },
  other: {
    "geo.region": "IN-KL",
    "geo.placename": "Thiruvananthapuram, Kerala",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b3326",
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${poppins.variable} ${inter.variable}`}>
      <body className="flex min-h-dvh flex-col">
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <JsonLd data={organizationLd} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-full focus:bg-lime focus:px-4 focus:py-2 focus:text-forest-950"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
