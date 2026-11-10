import type { Metadata } from "next";
import Image from "next/image";
import { Award, CircleCheck, HeartHandshake, Leaf, ShieldCheck, Truck, Users } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import { Container, CtaBand, PageHero, SectionHeading } from "@/components/ui";
import { breadcrumbLd, pageMetadata, pages, webPageLd } from "@/lib/seo";
import { offerings, reasons, site, stats } from "@/lib/site";

export const metadata: Metadata = pageMetadata(pages.about);

const reasonIcons = [HeartHandshake, Leaf, Truck, Users, ShieldCheck];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "About", path: "/about" }])} />
      <JsonLd data={webPageLd("AboutPage", "/about", pages.about.title, pages.about.description)} />
      <PageHero
        crumb="About"
        eyebrow="About us"
        title={
          <>
            Waste isn&apos;t just something to throw away. <span className="text-lime">It&apos;s a responsibility.</span>
          </>
        }
        text="Smart, safe and sustainable waste solutions for businesses and homes across Kerala — backed by over a decade of experience."
        image="/images/recycling-hands.jpg"
      />

      {/* WHO WE ARE */}
      <section className="py-24 sm:py-32">
        <Container className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Who we are" title="A cleaner Kerala, one pickup at a time." />
            <Reveal delay={100} className="mt-6 space-y-5 text-lg leading-relaxed text-muted">
              <p>
                At Green &amp; Clean, we believe waste is a responsibility. With over a decade of experience in the waste
                management sector, we offer smart, safe and sustainable solutions for businesses across Kerala.
              </p>
              <p>
                From salons and spas to corporate offices and retail spaces, we make sure your waste is collected,
                segregated, processed and disposed of in an environmentally friendly manner — while staying compliant
                with local regulations.
              </p>
            </Reveal>
            <Reveal delay={200} className="mt-10 grid grid-cols-2 gap-4">
              {stats.slice(0, 2).map((s) => (
                <div key={s.label} className="rounded-2xl bg-white p-6 ring-1 ring-black/5">
                  <p className="font-display text-4xl font-bold text-brand">{s.value}</p>
                  <p className="mt-1 text-sm text-muted">{s.label}</p>
                </div>
              ))}
            </Reveal>
          </div>

          <Reveal delay={150} className="relative">
            <div className="relative aspect-square overflow-hidden rounded-[2rem]">
              <Image
                src="/images/recycle-bins.jpg"
                alt="Red, green and blue segregation bins"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-8 left-4 w-56 rounded-3xl bg-white p-5 shadow-2xl ring-1 ring-black/5 sm:-left-8 sm:w-64">
              <Image
                src="/images/logo.png"
                alt="Green & Clean logo — There is no Planet B, in association with Green 360-N.E.R.T"
                width={900}
                height={675}
                sizes="256px"
                className="h-auto w-full"
              />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* WHAT WE OFFER */}
      <section className="relative overflow-hidden bg-forest-900 py-24 sm:py-32">
        <div className="bg-leaf-pattern absolute inset-0" aria-hidden />
        <Container className="relative grid gap-16 lg:grid-cols-2">
          <SectionHeading
            light
            eyebrow="What we offer"
            title="Everything your space needs to handle waste the right way."
            text="We set you up, show your team how it works, collect on schedule and give you the paperwork to prove it."
          />
          <ul className="grid gap-4 self-center">
            {offerings.map((o, i) => (
              <Reveal
                as="li"
                key={o}
                delay={i * 100}
                className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-5 text-lg font-medium text-white"
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-lime text-forest-950">
                  <CircleCheck className="size-5" aria-hidden />
                </span>
                {o}
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 sm:py-32">
        <Container>
          <SectionHeading center eyebrow="Why choose us" title="Five reasons businesses trust Green & Clean" />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((r, i) => {
              const Icon = reasonIcons[i];
              return (
                <Reveal
                  key={r.title}
                  delay={(i % 3) * 100}
                  className="group rounded-[1.75rem] bg-white p-8 ring-1 ring-black/5 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-forest-900/5"
                >
                  <span className="grid size-14 place-items-center rounded-2xl bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                    <Icon className="size-7" aria-hidden />
                  </span>
                  <h3 className="mt-6 text-xl font-semibold text-forest-900">{r.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{r.text}</p>
                </Reveal>
              );
            })}
            <Reveal
              delay={200}
              className="flex flex-col justify-between rounded-[1.75rem] bg-lime p-8 text-forest-950"
            >
              <Award className="size-10" aria-hidden />
              <div>
                <p className="mt-6 text-sm font-semibold uppercase tracking-widest">In association with</p>
                <p className="mt-1 font-display text-2xl font-bold">{site.associate}</p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
