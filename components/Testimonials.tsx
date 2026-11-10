import { Quote } from "lucide-react";
import Reveal from "./Reveal";
import { testimonials } from "@/lib/site";

export default function Testimonials() {
  return (
    <div className="mt-16 grid gap-6 md:grid-cols-2">
      {testimonials.map((t, i) => (
        <Reveal
          as="figure"
          key={t.name}
          delay={(i % 2) * 120}
          className={`relative flex flex-col rounded-[1.75rem] p-8 sm:p-10 ${
            i === 0 || i === 3 ? "bg-forest-900 text-white" : "bg-white text-ink ring-1 ring-black/5"
          }`}
        >
          <Quote className={`size-10 ${i === 0 || i === 3 ? "text-lime" : "text-brand"}`} aria-hidden />
          <blockquote className="mt-6 flex-1 text-lg leading-relaxed">
            <p>&ldquo;{t.quote}&rdquo;</p>
          </blockquote>
          <figcaption className="mt-8 flex items-center gap-4">
            <span
              className={`grid size-12 place-items-center rounded-full font-display text-lg font-semibold ${
                i === 0 || i === 3 ? "bg-lime text-forest-950" : "bg-brand/10 text-brand-dark"
              }`}
              aria-hidden
            >
              {t.name.charAt(0)}
            </span>
            <span>
              <span className="block font-semibold">{t.name}</span>
              <span className={`block text-sm ${i === 0 || i === 3 ? "text-white/60" : "text-muted"}`}>{t.role}</span>
            </span>
          </figcaption>
        </Reveal>
      ))}
    </div>
  );
}
