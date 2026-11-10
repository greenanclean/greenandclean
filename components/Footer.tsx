import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { nav, services, site } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden bg-forest-950 text-white/75">
      <div className="bg-leaf-pattern absolute inset-0 opacity-60" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 pt-20 pb-10 sm:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12">
          <div className="sm:col-span-2 lg:col-span-4">
            <div className="inline-block rounded-2xl bg-white p-4">
              <Image
                src="/images/logo.png"
                alt="Green & Clean — There is no Planet B. In association with Green 360-N.E.R.T"
                width={200}
                height={150}
                className="h-auto w-44"
              />
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed">{site.description}</p>
            <p className="mt-4 text-sm">
              In association with <span className="font-semibold text-lime">{site.associate}</span>
            </p>
          </div>

          <div className="lg:col-span-2">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-white">Explore</h2>
            <ul className="mt-5 space-y-3 text-sm">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="hover:text-lime">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-white">Services</h2>
            <ul className="mt-5 space-y-3 text-sm">
              {services.map((s) => (
                <li key={s.key}>
                  <Link href={`/services#${s.key}`} className="hover:text-lime">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-white">Get in touch</h2>
            <ul className="mt-5 space-y-4 text-sm">
              <li>
                <a href={site.phoneHref} className="flex gap-3 hover:text-lime">
                  <Phone className="mt-0.5 size-4 shrink-0 text-lime" aria-hidden /> {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="flex gap-3 break-all hover:text-lime">
                  <Mail className="mt-0.5 size-4 shrink-0 text-lime" aria-hidden /> {site.email}
                </a>
              </li>
              <li>
                <a href={site.address.mapsUrl} target="_blank" rel="noopener noreferrer" className="flex gap-3 hover:text-lime">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-lime" aria-hidden />
                  <span>
                    {site.address.line1}
                    <br />
                    {site.address.city} – {site.address.pin}, {site.address.state}
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs sm:flex-row sm:items-center">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p className="font-display text-sm italic text-lime/90">&ldquo;{site.motto}&rdquo;</p>
        </div>
      </div>
    </footer>
  );
}
