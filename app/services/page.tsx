import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Building2, CircleAlert, CircleCheck, House, Scissors } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import { ButtonLink, Container, CtaBand, Eyebrow, PageHero, SectionHeading } from "@/components/ui";
import { breadcrumbLd, pageMetadata, pages, servicesLd } from "@/lib/seo";
import { commercialPerks, services, wasteCategories } from "@/lib/site";

export const metadata: Metadata = pageMetadata(pages.services);

const icons = { salon: Scissors, commercial: Building2, residential: House } as const;

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Services", path: "/services" }])} />
      <JsonLd data={servicesLd} />
      <PageHero
        crumb="Services"
        eyebrow="Our services"
        title={
          <>
            Clean, green and compliant — <span className="text-lime">for every kind of space.</span>
          </>
        }
        text="Salons, offices, retail stores and homes each produce different waste. We handle each one the right way."
        image="/images/recycling-bottles.jpg"
      />

      {/* Quick nav */}
      <div className="sticky top-18 z-30 border-b border-black/5 bg-cream/90 backdrop-blur-xl">
        <Container className="flex gap-2 overflow-x-auto py-3 [scrollbar-width:none]">
          {services.map((s) => {
            const Icon = icons[s.key];
            return (
              <a
                key={s.key}
                href={`#${s.key}`}
                className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-forest-900 ring-1 ring-black/5 hover:bg-forest-900 hover:text-white"
              >
                <Icon className="size-4" aria-hidden /> {s.title}
              </a>
            );
          })}
        </Container>
      </div>

      {services.map((s, idx) => {
        const Icon = icons[s.key];
        const flip = idx % 2 === 1;
        return (
          <section key={s.key} id={s.key} className={`scroll-mt-36 py-24 sm:py-28 ${flip ? "bg-sand" : ""}`}>
            <Container className="grid items-center gap-14 lg:grid-cols-2">
              <Reveal className={`relative ${flip ? "lg:order-2" : ""}`}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
                  <Image
                    src={s.image}
                    alt={`${s.title} service in Kerala`}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <span className="absolute -top-5 -left-3 grid size-16 place-items-center rounded-2xl bg-brand text-white shadow-xl sm:-left-5">
                  <Icon className="size-8" aria-hidden />
                </span>
              </Reveal>

              <div>
                <Reveal>
                  <Eyebrow>{`Service 0${idx + 1}`}</Eyebrow>
                  <h2 className="mt-5 text-3xl font-bold leading-tight text-forest-900 sm:text-4xl">{s.title}</h2>
                  <p className="mt-3 font-display text-lg font-medium text-brand">{s.short}</p>
                  <p className="mt-5 text-lg leading-relaxed text-muted">{s.text}</p>
                </Reveal>
                <Reveal delay={120} className="mt-8 grid gap-6 sm:grid-cols-2">
                  <div className="rounded-2xl bg-white p-6 ring-1 ring-black/5">
                    <h3 className="text-sm font-semibold uppercase tracking-widest text-forest-900">We handle</h3>
                    <ul className="mt-4 space-y-2.5">
                      {s.handles.map((h) => (
                        <li key={h} className="flex gap-2.5 text-sm text-ink/80">
                          <CircleCheck className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden /> {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-2xl bg-forest-900 p-6 text-white">
                    <h3 className="text-sm font-semibold uppercase tracking-widest text-lime">We serve</h3>
                    <ul className="mt-4 space-y-2.5">
                      {s.serves.map((h) => (
                        <li key={h} className="flex gap-2.5 text-sm text-white/85">
                          <CircleCheck className="mt-0.5 size-4 shrink-0 text-lime" aria-hidden /> {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
                {s.key === "commercial" && (
                  <Reveal delay={200} className="mt-6 flex flex-wrap gap-2">
                    {commercialPerks.map((p) => (
                      <span key={p} className="rounded-full bg-brand/10 px-4 py-2 text-sm font-medium text-brand-dark">
                        {p}
                      </span>
                    ))}
                  </Reveal>
                )}
                <Reveal delay={250} className="mt-8">
                  <ButtonLink href={`/contact?service=${s.key}`}>
                    Enquire about this service
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
                  </ButtonLink>
                </Reveal>
              </div>
            </Container>
          </section>
        );
      })}

      {/* DETAILED WASTE LIST */}
      <section className="relative overflow-hidden bg-forest-950 py-24 sm:py-32">
        <div className="bg-leaf-pattern absolute inset-0" aria-hidden />
        <Container className="relative">
          <SectionHeading
            light
            eyebrow="What we collect"
            title="The complete commercial waste list"
            text="Every stream is segregated at source and sent for recycling, recovery or responsible disposal."
          />
          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {wasteCategories.map((c, i) => (
              <Reveal
                key={c.title}
                delay={(i % 3) * 100}
                className="overflow-hidden rounded-3xl border border-white/10 bg-white/5"
              >
                <div className="relative h-40">
                  <Image
                    src={c.image}
                    alt={`${c.title} waste`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950 to-transparent" aria-hidden />
                  <h3 className="absolute bottom-4 left-6 text-2xl font-semibold text-white">{c.title}</h3>
                </div>
                <ul className="space-y-2 p-6 pt-4">
                  {c.items.map((it) => (
                    <li key={it} className="flex gap-2.5 text-sm text-white/75">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-lime" aria-hidden /> {it}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
            <Reveal delay={100} className="flex flex-col justify-center rounded-3xl bg-lime p-8 text-forest-950">
              <CircleAlert className="size-9" aria-hidden />
              <h3 className="mt-5 text-2xl font-semibold">We do not handle medical waste</h3>
              <p className="mt-3 leading-relaxed text-forest-950/80">
                Biomedical and infectious waste must go through authorised biomedical waste facilities. Everything else —
                we&apos;ve got you covered.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
