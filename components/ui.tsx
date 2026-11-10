import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import type { ReactNode } from "react";
import Reveal from "./Reveal";
import { site } from "@/lib/site";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] ${
        light ? "bg-white/10 text-lime ring-1 ring-white/15" : "bg-brand/10 text-brand-dark"
      }`}
    >
      <span className={`size-1.5 rounded-full ${light ? "bg-lime" : "bg-brand"}`} aria-hidden />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  text,
  light = false,
  center = false,
  id,
}: {
  eyebrow: string;
  title: ReactNode;
  text?: ReactNode;
  light?: boolean;
  center?: boolean;
  id?: string;
}) {
  return (
    <Reveal className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <Eyebrow light={light}>{eyebrow}</Eyebrow>
      <h2
        id={id}
        className={`mt-5 text-3xl font-bold leading-[1.1] text-balance sm:text-4xl lg:text-5xl ${
          light ? "text-white" : "text-forest-900"
        }`}
      >
        {title}
      </h2>
      {text && (
        <p className={`mt-5 text-lg leading-relaxed text-pretty ${light ? "text-white/70" : "text-muted"}`}>{text}</p>
      )}
    </Reveal>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "lime" | "outline" | "ghost-light";
  className?: string;
}) {
  const styles = {
    primary: "bg-brand text-white hover:bg-brand-dark shadow-lg shadow-brand/25",
    lime: "bg-lime text-forest-950 hover:bg-white",
    outline: "border border-forest-900/15 text-forest-900 hover:bg-forest-900 hover:text-white",
    "ghost-light": "border border-white/25 text-white hover:bg-white hover:text-forest-950",
  }[variant];
  const isExternal = href.startsWith("tel:") || href.startsWith("mailto:") || href.startsWith("http");
  const cls = `group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-300 ${styles} ${className}`;
  return isExternal ? (
    <a href={href} className={cls}>
      {children}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

export function PageHero({
  eyebrow,
  title,
  text,
  image,
  crumb,
}: {
  eyebrow: string;
  title: ReactNode;
  text: ReactNode;
  image: string;
  crumb?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-forest-950 pt-36 pb-20 sm:pt-44 sm:pb-28">
      <Image
        src={image}
        alt=""
        fill
        loading="eager"
        fetchPriority="high"
        sizes="100vw"
        className="-z-10 object-cover opacity-35"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-forest-950/70 via-forest-950/60 to-forest-950" aria-hidden />
      <div className="bg-leaf-pattern absolute inset-0 -z-10" aria-hidden />
      <Container>
        <Reveal className="max-w-3xl">
          {crumb && (
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-sm text-white/60">
                <li>
                  <Link href="/" className="hover:text-lime">
                    Home
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li aria-current="page" className="text-white/90">
                  {crumb}
                </li>
              </ol>
            </nav>
          )}
          <Eyebrow light>{eyebrow}</Eyebrow>
          <h1 className="mt-6 text-4xl font-bold leading-[1.05] text-white text-balance sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75 text-pretty">{text}</p>
        </Reveal>
      </Container>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <Reveal className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-brand px-6 py-14 sm:px-12 sm:py-20">
        <Image
          src="/images/recycle-bins.jpg"
          alt=""
          fill
          sizes="(min-width: 1280px) 1280px, 100vw"
          className="object-cover opacity-15 mix-blend-luminosity"
        />
        <div className="absolute -top-24 -right-24 size-80 rounded-full bg-lime/30 blur-3xl" aria-hidden />
        <div className="relative flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold leading-tight text-white text-balance sm:text-4xl lg:text-5xl">
              Let us work while you unwind.
            </h2>
            <p className="mt-4 text-lg text-white/85">
              Tell us about your salon, office or home — we&apos;ll design a waste plan that keeps you clean, green and
              compliant.
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <ButtonLink href="/contact" variant="lime">
              Get a free consultation
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
            </ButtonLink>
            <ButtonLink href={site.phoneHref} variant="ghost-light">
              <Phone className="size-4" aria-hidden /> {site.phoneDisplay}
            </ButtonLink>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
