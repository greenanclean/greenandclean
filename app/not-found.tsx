import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { ButtonLink, Container } from "@/components/ui";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-forest-950 pt-40 pb-28">
      <div className="bg-leaf-pattern absolute inset-0" aria-hidden />
      <Container className="relative text-center">
        <p className="font-display text-8xl font-extrabold text-lime">404</p>
        <h1 className="mt-6 text-3xl font-bold text-white sm:text-4xl">This page has been recycled.</h1>
        <p className="mx-auto mt-4 max-w-md text-white/70">
          The page you&apos;re looking for doesn&apos;t exist — but there&apos;s plenty more to explore.
        </p>
        <ButtonLink href="/" variant="lime" className="mt-10">
          Back to home <ArrowRight className="size-4" aria-hidden />
        </ButtonLink>
      </Container>
    </section>
  );
}
