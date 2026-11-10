import type { Metadata } from "next";
import { Suspense } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import { Container, PageHero } from "@/components/ui";
import { breadcrumbLd, pageMetadata, pages, webPageLd } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata(pages.contact);

const cards = [
  {
    icon: Phone,
    label: "Call us — we're the dust busters!",
    value: site.phoneDisplay,
    href: site.phoneHref,
  },
  { icon: Mail, label: "Mail us", value: site.email, href: `mailto:${site.email}` },
  {
    icon: MapPin,
    label: "Visit us",
    value: `${site.address.line1}, ${site.address.city} – ${site.address.pin}`,
    href: site.address.mapsUrl,
    external: true,
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Contact", path: "/contact" }])} />
      <JsonLd data={webPageLd("ContactPage", "/contact", pages.contact.title, pages.contact.description)} />
      <PageHero
        crumb="Contact"
        eyebrow="Contact us"
        title={
          <>
            Our friendly team would <span className="text-lime">love to hear from you.</span>
          </>
        }
        text="Book a pickup, ask for a quote, or get a free consultation for your salon, office or home."
        image="/images/recycle-bins.jpg"
      />

      <section className="py-20 sm:py-28">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="min-w-0 space-y-4 lg:col-span-5">
            {cards.map((c, i) => (
              <Reveal key={c.label} delay={i * 100}>
                <a
                  href={c.href}
                  {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group flex items-start gap-5 rounded-3xl bg-white p-6 ring-1 ring-black/5 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-forest-900/5 sm:p-7"
                >
                  <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                    <c.icon className="size-6" aria-hidden />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm text-muted">{c.label}</span>
                    <span className="mt-1 block break-words font-display text-lg font-semibold text-forest-900 sm:text-xl">
                      {c.value}
                    </span>
                  </span>
                </a>
              </Reveal>
            ))}
            <Reveal delay={300} className="rounded-3xl bg-forest-900 p-7 text-white">
              <p className="font-display text-xl font-semibold">Serving all 14 districts of Kerala</p>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                Based in Thiruvananthapuram, with scheduled pickups for salons, offices and homes statewide.
              </p>
            </Reveal>
          </div>

          <Reveal delay={150} className="min-w-0 lg:col-span-7">
            <div className="rounded-[2rem] bg-white p-6 shadow-xl shadow-forest-900/5 ring-1 ring-black/5 sm:p-10">
              <h2 className="text-2xl font-bold text-forest-900 sm:text-3xl">Request a pickup or consultation</h2>
              <p className="mt-2 text-muted">Fill in the details and we&apos;ll get back to you shortly.</p>
              <Suspense>
                <ContactForm />
              </Suspense>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
