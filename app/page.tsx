import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  CircleCheck,
  ClipboardList,
  Droplets,
  House,
  Leaf,
  Phone,
  Recycle,
  Scissors,
  ShieldCheck,
  Trash2,
  Truck,
  Wind,
} from "lucide-react";
import type { Metadata } from "next";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import Testimonials from "@/components/Testimonials";
import { ButtonLink, Container, CtaBand, Eyebrow, SectionHeading } from "@/components/ui";
import { faqLd, pageMetadata, pages } from "@/lib/seo";
import { districts, impact, process, services, site, stats, wasteCategories } from "@/lib/site";

export const metadata: Metadata = pageMetadata(pages.home);

const serviceIcons = { salon: Scissors, commercial: Building2, residential: House } as const;
const impactIcons = [Trash2, Droplets, Wind, ShieldCheck];
const processIcons = [ClipboardList, Recycle, Truck, CircleCheck];

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqLd} />

      {/* HERO */}
      <section className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-forest-950">
        <Image
          src="/images/hero-park.jpg"
          alt="Sunlit green park with fresh leaves"
          fill
          loading="eager"
          fetchPriority="high"
          sizes="100vw"
          className="-z-10 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-forest-950/95 via-forest-950/75 to-forest-950/20" aria-hidden />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-forest-950 to-transparent" aria-hidden />
        <div className="absolute inset-x-0 top-0 -z-10 h-48 bg-gradient-to-b from-forest-950/80 to-transparent" aria-hidden />

        <Container className="flex w-full flex-1 items-center pt-32 pb-16">
          <div className="grid w-full items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow light>
                  <span className="hidden sm:inline">Sustainable waste management · Kerala</span>
                  <span className="sm:hidden">Waste management · Kerala</span>
                </Eyebrow>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="mt-6 text-[2.6rem] font-extrabold leading-[0.98] text-white min-[400px]:text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
                  Your mess is <br className="hidden sm:block" />
                  <span className="relative inline-block text-lime">
                    our mission.
                    <svg
                      className="absolute -bottom-2 left-0 w-full text-lime/60"
                      viewBox="0 0 300 12"
                      fill="none"
                      preserveAspectRatio="none"
                      aria-hidden
                    >
                      <path d="M2 9c60-6 140-8 296-3" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                    </svg>
                  </span>
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/80 sm:text-xl">
                  Safe, reliable and compliant waste management for salons, offices and homes across all 14 districts
                  of Kerala — so you can focus on your business.
                </p>
              </Reveal>
              <Reveal delay={300} className="mt-10 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/contact" variant="lime">
                  Book a pickup
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
                </ButtonLink>
                <ButtonLink href={site.phoneHref} variant="ghost-light">
                  <Phone className="size-4" aria-hidden /> Call {site.phoneDisplay}
                </ButtonLink>
              </Reveal>
            </div>

            <Reveal delay={400} className="hidden lg:col-span-5 lg:block">
              <div className="animate-float relative ml-auto max-w-sm rounded-3xl border border-white/15 bg-white/10 p-7 text-white shadow-2xl backdrop-blur-xl">
                <div className="flex items-center gap-4">
                  <span className="relative block size-14 rounded-full bg-white p-1">
                    <Image src="/images/emblem.png" alt="" fill sizes="56px" className="rounded-full object-contain" />
                  </span>
                  <div>
                    <p className="font-display text-xl font-semibold italic">&ldquo;{site.motto}&rdquo;</p>
                    <p className="text-sm text-white/60">with {site.associate}</p>
                  </div>
                </div>
                <ul className="mt-6 space-y-3 text-sm">
                  {["Segregated bins & containers", "Scheduled pickups", "Monthly compliance reports"].map((t) => (
                    <li key={t} className="flex items-center gap-3">
                      <CircleCheck className="size-5 text-lime" aria-hidden /> {t}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 rounded-2xl bg-forest-950/50 px-4 py-3 text-xs text-white/70">
                  We handle all non-medical waste. Biomedical waste is not accepted.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>

        {/* stats strip */}
        <div className="border-t border-white/10 bg-forest-950/60 backdrop-blur">
          <Container className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`py-6 sm:py-8 ${i % 2 === 1 ? "pl-6 border-l border-white/10" : ""} ${
                  i >= 2 ? "border-t border-white/10 lg:border-t-0" : ""
                } ${i === 2 ? "lg:pl-6 lg:border-l" : ""}`}
              >
                <p className="font-display text-3xl font-bold text-white sm:text-4xl">{s.value}</p>
                <p className="mt-1 text-sm text-white/60">{s.label}</p>
              </div>
            ))}
          </Container>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 sm:py-32">
        <Container>
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="What we do"
              title={
                <>
                  Waste solutions built for <span className="text-brand">how you work.</span>
                </>
              }
              text="Helping businesses and homes stay hygienic, eco-friendly and legally compliant — without the stress."
            />
            <Reveal>
              <ButtonLink href="/services" variant="outline">
                All services <ArrowRight className="size-4" aria-hidden />
              </ButtonLink>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {services.map((s, i) => {
              const Icon = serviceIcons[s.key];
              return (
                <Reveal key={s.key} delay={i * 120}>
                  <Link
                    href={`/services#${s.key}`}
                    className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-white shadow-sm ring-1 ring-black/5 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-forest-900/10"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={s.image}
                        alt={`${s.title} by Green & Clean in Kerala`}
                        fill
                        sizes="(min-width: 768px) 33vw, 100vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-forest-950/60 to-transparent" aria-hidden />
                      <span className="absolute bottom-4 left-4 grid size-12 place-items-center rounded-2xl bg-white text-brand shadow-lg">
                        <Icon className="size-6" aria-hidden />
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-7">
                      <h3 className="text-xl font-semibold text-forest-900">{s.title}</h3>
                      <p className="mt-3 flex-1 leading-relaxed text-muted">{s.short}</p>
                      <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                        Learn more
                        <ArrowUpRight
                          className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          aria-hidden
                        />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* WHY IT MATTERS */}
      <section className="relative overflow-hidden bg-forest-900 py-24 sm:py-32">
        <div className="bg-leaf-pattern absolute inset-0" aria-hidden />
        <Container className="relative grid items-center gap-16 lg:grid-cols-2">
          <Reveal className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] sm:aspect-[5/4] lg:aspect-[4/5]">
              <Image
                src="/images/sorting-waste.jpg"
                alt="Worker in gloves segregating mixed waste for recycling"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute right-3 -bottom-6 max-w-[16rem] rounded-2xl bg-lime p-5 text-forest-950 shadow-xl lg:-right-6">
              <Leaf className="size-6" aria-hidden />
              <p className="mt-2 font-display text-lg font-semibold leading-snug">
                Kerala is our home — and it deserves better.
              </p>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              light
              eyebrow="Why it matters"
              title="You're not just managing waste. You're making a difference."
              text="With increasing pollution and improper disposal practices, businesses have a crucial role to play in protecting the environment. Partnering with Green & Clean puts you on the right side of that story."
            />
            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {impact.map((item, i) => {
                const Icon = impactIcons[i];
                return (
                  <Reveal
                    key={item.title}
                    delay={i * 100}
                    className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:bg-white/10"
                  >
                    <Icon className="size-7 text-lime" aria-hidden />
                    <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/65">{item.text}</p>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* PROCESS */}
      <section className="py-24 sm:py-32">
        <Container>
          <SectionHeading
            center
            eyebrow="How it works"
            title="Four simple steps to a cleaner workplace"
            text="From the first visit to the monthly report, we take care of the whole cycle."
          />
          <div className="relative mt-16">
            <div
              className="absolute top-10 right-[12%] left-[12%] hidden h-px border-t-2 border-dashed border-brand/25 lg:block"
              aria-hidden
            />
          <ol className="relative grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {process.map((step, i) => {
              const Icon = processIcons[i];
              return (
                <Reveal as="li" key={step.title} delay={i * 120} className="relative text-center">
                  <div className="relative mx-auto grid size-20 place-items-center rounded-full bg-white shadow-lg ring-8 ring-cream">
                    <Icon className="size-8 text-brand" aria-hidden />
                    <span className="absolute -top-1 -right-1 grid size-7 place-items-center rounded-full bg-forest-900 text-xs font-bold text-white">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-forest-900">{step.title}</h3>
                  <p className="mx-auto mt-2 max-w-xs leading-relaxed text-muted">{step.text}</p>
                </Reveal>
              );
            })}
          </ol>
          </div>
        </Container>
      </section>

      {/* WHAT WE COLLECT */}
      <section className="bg-sand py-24 sm:py-32">
        <Container>
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="What we collect"
              title="From PET bottles to pallets — sorted, recovered, recycled."
            />
            <Reveal>
              <ButtonLink href="/services#commercial" variant="outline">
                Full waste list <ArrowRight className="size-4" aria-hidden />
              </ButtonLink>
            </Reveal>
          </div>
          <div className="mt-14 grid auto-rows-[220px] grid-cols-2 gap-4 sm:auto-rows-[260px] lg:grid-cols-4">
            {wasteCategories.map((c, i) => (
              <Reveal
                key={c.title}
                delay={(i % 4) * 80}
                className={`group relative overflow-hidden rounded-3xl ${
                  i === 0 ? "col-span-2 row-span-2" : i >= 5 ? "col-span-2" : ""
                }`}
              >
                <Image
                  src={c.image}
                  alt={`${c.title} waste collected for recycling`}
                  fill
                  sizes={i === 0 || i >= 5 ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 25vw, 50vw"}
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/85 via-forest-950/20 to-transparent" aria-hidden />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <h3 className={`font-semibold text-white ${i === 0 ? "text-2xl sm:text-3xl" : "text-lg sm:text-xl"}`}>
                    {c.title}
                  </h3>
                  <p className="mt-1 line-clamp-2 text-sm text-white/75">{c.items.slice(0, i === 0 ? 4 : 2).join(" · ")}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* DISTRICTS MARQUEE */}
      <section className="overflow-hidden border-y border-forest-900/10 bg-white py-10" aria-label="Districts we serve">
        <Container className="mb-6">
          <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-muted">
            Serving businesses across all 14 districts of Kerala
          </p>
        </Container>
        <div className="relative [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <ul className="animate-marquee flex w-max gap-4">
            {[...districts, ...districts].map((d, i) => (
              <li
                key={`${d}-${i}`}
                aria-hidden={i >= districts.length}
                className="flex items-center gap-3 rounded-full border border-forest-900/10 bg-cream px-6 py-3 font-display text-lg font-medium whitespace-nowrap text-forest-900"
              >
                <Leaf className="size-4 text-brand" aria-hidden /> {d}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 sm:py-32">
        <Container>
          <SectionHeading center eyebrow="Our happy clients" title="Trusted by salons, spas and offices" />
          <Testimonials />
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-sand py-24 sm:py-32" aria-labelledby="faq-heading">
        <Container>
          <SectionHeading
            center
            id="faq-heading"
            eyebrow="FAQ"
            title="Questions businesses ask us"
            text="Everything you need to know about our waste management services in Kerala."
          />
          <Faq />
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
