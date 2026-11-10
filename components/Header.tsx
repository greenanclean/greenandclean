"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import Logo from "./Logo";
import { nav, site } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? "bg-white/90 shadow-[0_1px_0_rgb(0_0_0/0.06)] backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <span onClickCapture={() => setOpen(false)}>
          <Logo light={!solid} />
        </span>

        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {nav.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  solid
                    ? active
                      ? "bg-sand text-forest-900"
                      : "text-ink/70 hover:bg-sand hover:text-forest-900"
                    : active
                      ? "bg-white/15 text-white"
                      : "text-white/80 hover:bg-white/10 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.phoneHref}
            aria-label={`Call ${site.phoneDisplay}`}
            className={`inline-flex size-11 items-center justify-center gap-2 rounded-full text-sm font-semibold transition-all lg:size-auto lg:px-5 lg:py-2.5 ${
              solid
                ? "bg-brand text-white hover:bg-brand-dark"
                : "bg-lime text-forest-950 hover:bg-white"
            }`}
          >
            <Phone className="size-4" aria-hidden />
            <span className="hidden lg:inline">{site.phoneDisplay}</span>
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className={`grid size-11 place-items-center rounded-full md:hidden ${
              solid ? "text-forest-900 hover:bg-sand" : "text-white hover:bg-white/10"
            }`}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-black/5 bg-white px-4 pb-10 pt-4 md:hidden"
      >
        <nav aria-label="Mobile" className="flex flex-col">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              aria-current={(item.href === "/" ? pathname === "/" : pathname.startsWith(item.href)) ? "page" : undefined}
              className="border-b border-black/5 py-4 font-display text-2xl font-semibold text-forest-900 aria-[current=page]:text-brand"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <a
          href={site.phoneHref}
          className="mt-8 flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-4 font-semibold text-white"
        >
          <Phone className="size-5" aria-hidden /> Call {site.phoneDisplay}
        </a>
        <a
          href={`mailto:${site.email}`}
          className="mt-3 flex items-center justify-center rounded-full border border-forest-900/15 px-6 py-4 font-semibold text-forest-900"
        >
          {site.email}
        </a>
      </div>
    </header>
  );
}
