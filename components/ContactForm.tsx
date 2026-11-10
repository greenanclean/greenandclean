"use client";

import { useSearchParams } from "next/navigation";
import { useState, type FormEvent } from "react";
import { CircleCheck, Send } from "lucide-react";
import { services, site } from "@/lib/site";

const inputCls =
  "mt-2 block w-full rounded-xl border-0 bg-cream px-4 py-3.5 text-ink ring-1 ring-black/10 placeholder:text-muted/60 focus:bg-white focus:ring-2 focus:ring-brand focus:outline-none";

/**
 * No backend yet: on submit this opens the visitor's email app with the enquiry pre-filled,
 * addressed to the business email. Swap for an API route (e.g. Resend) when deploying to Vercel.
 */
export default function ContactForm() {
  const params = useSearchParams();
  const initialService = services.some((s) => s.key === params.get("service")) ? params.get("service")! : "";
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const service = services.find((s) => s.key === f.get("service"))?.title ?? "General enquiry";
    const subject = `Website enquiry: ${service}`;
    const body = [
      `Name: ${f.get("name")}`,
      `Phone: ${f.get("phone")}`,
      `Email: ${f.get("email") || "-"}`,
      `Business / location: ${f.get("location") || "-"}`,
      `Service: ${service}`,
      "",
      `${f.get("message") || ""}`,
    ].join("\n");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="mt-8 rounded-2xl bg-brand/10 p-8 text-center">
        <CircleCheck className="mx-auto size-12 text-brand" aria-hidden />
        <p className="mt-4 font-display text-xl font-semibold text-forest-900">Your email app should now be open.</p>
        <p className="mt-2 text-muted">
          Just hit send. If nothing opened, email us at{" "}
          <a className="font-semibold text-brand underline" href={`mailto:${site.email}`}>
            {site.email}
          </a>{" "}
          or call{" "}
          <a className="font-semibold text-brand underline" href={site.phoneHref}>
            {site.phoneDisplay}
          </a>
          .
        </p>
        <button type="button" onClick={() => setSent(false)} className="mt-6 text-sm font-semibold text-forest-900 underline">
          Edit my enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="mt-8 grid gap-5 sm:grid-cols-2">
      <label className="block text-sm font-medium text-forest-900">
        Your name *
        <input name="name" required autoComplete="name" className={inputCls} placeholder="Full name" />
      </label>
      <label className="block text-sm font-medium text-forest-900">
        Phone *
        <input
          name="phone"
          required
          type="tel"
          autoComplete="tel"
          inputMode="tel"
          pattern="[0-9+\s\-]{8,15}"
          className={inputCls}
          placeholder="+91"
        />
      </label>
      <label className="block text-sm font-medium text-forest-900">
        Email
        <input name="email" type="email" autoComplete="email" className={inputCls} placeholder="you@example.com" />
      </label>
      <label className="block text-sm font-medium text-forest-900">
        Business name / location
        <input name="location" className={inputCls} placeholder="e.g. Salon, Kochi" />
      </label>
      <label className="block text-sm font-medium text-forest-900 sm:col-span-2">
        Service
        <select name="service" defaultValue={initialService} className={inputCls}>
          <option value="">Not sure yet — advise me</option>
          {services.map((s) => (
            <option key={s.key} value={s.key}>
              {s.title}
            </option>
          ))}
        </select>
      </label>
      <label className="block text-sm font-medium text-forest-900 sm:col-span-2">
        Message
        <textarea
          name="message"
          rows={4}
          className={inputCls}
          placeholder="Tell us about your waste — type, rough quantity, how often you need pickup…"
        />
      </label>
      <div className="flex flex-col items-start gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted">We handle all non-medical waste. Biomedical waste is not accepted.</p>
        <button
          type="submit"
          className="group inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand/25 transition-all hover:bg-brand-dark"
        >
          Send enquiry
          <Send className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
        </button>
      </div>
    </form>
  );
}
