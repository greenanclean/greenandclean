import Image from "next/image";
import Link from "next/link";

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="group flex items-center gap-2.5" aria-label="Green & Clean — home">
      <span className="relative block size-10 shrink-0 rounded-full bg-white/90 p-0.5 shadow-sm ring-1 ring-black/5 transition-transform duration-500 group-hover:rotate-12 sm:size-11">
        <Image src="/images/emblem.png" alt="" fill sizes="44px" className="rounded-full object-contain" loading="eager" />
      </span>
      <span className="font-display text-lg font-bold leading-none tracking-tight sm:text-xl">
        <span className={light ? "text-lime" : "text-brand"}>Green</span>
        <span className={light ? "text-white/70" : "text-muted"}> &amp; </span>
        <span className={light ? "text-white" : "text-sky"}>Clean</span>
      </span>
    </Link>
  );
}
