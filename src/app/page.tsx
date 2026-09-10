import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { ContactForm } from "@/components/contact-form";
import { HeroPanel } from "@/components/hero-panel";
import { OfferCards } from "@/components/offer-cards";
import { pillars, practices } from "@/lib/content";

export const metadata: Metadata = {
  description:
    "Enhancify designs and ships company websites, product sites, rebuilds, and web applications — clear, fast, and easy to act on.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden px-5 pb-16 pt-16 sm:px-6 sm:pt-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_circle_at_85%_-20%,rgba(76,70,232,0.14),transparent_55%)]" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <h1 className="max-w-xl text-4xl font-semibold tracking-[-0.045em] text-balance sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
              We build websites and applications that make the next step obvious.
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-8 text-muted">
              Enhancify designs sites and software for people who create and
              grow in public. Less vanity reporting. More of a next step you can
              actually take.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact">Talk to us</ButtonLink>
              <ButtonLink href="#offer" variant="secondary">
                What we offer
              </ButtonLink>
            </div>
          </div>
          <div className="hidden lg:block">
            <HeroPanel />
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-paper px-5 py-20 sm:px-6 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-balance">
            How we decide what to build.
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {pillars.map((item) => (
              <article key={item.title} className="border-t border-line pt-6">
                <h3 className="text-lg font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="offer" className="scroll-mt-24 bg-fog px-5 py-20 sm:px-6 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-balance">
            What we offer
          </h2>
          <p className="mt-4 max-w-xl text-muted leading-7">
            Websites and applications. Company sites, product pages, rebuilds,
            and custom software. Website projects include contact, SEO,
            analytics, and care after launch.
          </p>
          <OfferCards />
        </div>
      </section>

      <section className="px-5 py-20 sm:px-6 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold tracking-tight">The company, plainly</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {practices.map((item) => (
              <article key={item.title} className="rounded-2xl bg-paper p-6 ring-1 ring-line">
                <h3 className="font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-6">
        <div className="mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">Write to Enhancify</h2>
            <p className="mt-4 text-muted">
              Website work, application work, partnerships, or a question. Sales
              and support both read this inbox.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
