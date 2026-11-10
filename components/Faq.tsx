import { Plus } from "lucide-react";
import Reveal from "./Reveal";
import { faqs } from "@/lib/site";

export default function Faq() {
  return (
    <div className="mx-auto mt-14 max-w-3xl divide-y divide-forest-900/10 rounded-[1.75rem] bg-white px-5 ring-1 ring-black/5 sm:px-8">
      {faqs.map((f, i) => (
        <Reveal key={f.q} delay={i * 60}>
          <details className="group py-2" {...(i === 0 ? { open: true } : {})}>
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-4 text-left font-display text-base font-semibold text-forest-900 sm:text-lg [&::-webkit-details-marker]:hidden">
              {f.q}
              <span className="grid size-9 shrink-0 place-items-center rounded-full bg-brand/10 text-brand transition-transform duration-300 group-open:rotate-45">
                <Plus className="size-5" aria-hidden />
              </span>
            </summary>
            <p className="pb-5 pr-2 leading-relaxed text-muted sm:pr-14">{f.a}</p>
          </details>
        </Reveal>
      ))}
    </div>
  );
}
