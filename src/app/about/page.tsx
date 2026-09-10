import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { BrandMark } from "@/components/brand-mark";
import { OfferCards } from "@/components/offer-cards";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Enhancify is an Indian software company. We design and ship websites and applications that make the next step obvious.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About · Enhancify",
    description:
      "Enhancify is an Indian software company. We design and ship websites and applications that make the next step obvious.",
    url: "/about",
  },
};

const values = [
  {
    title: "Clarity",
    body: "If a screen does not help someone decide, it does not ship. We would rather show one true signal than a wall of charts.",
  },
  {
    title: "Care",
    body: "The people who use our software put their name on public work. We treat that with respect — including what we automate and what we leave in their hands.",
  },
  {
    title: "Focus",
    body: "We do a few things well. We pick them carefully and stay with them long enough to get them right.",
  },
  {
    title: "Pace",
    body: "We ship, we look at what happened, we sharpen. Quiet improvement beats a loud launch that never gets better.",
  },
] as const;

export default function AboutPage() {
  return (
    <>
      <section className="px-5 pb-8 pt-16 sm:px-6 sm:pt-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            About
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-balance sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
            We exist to make the next step obvious.
          </h1>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-6 lg:pb-28">
        <div className="mx-auto grid max-w-6xl items-start gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-5 text-base leading-8 text-muted">
            <p>
              Enhancify is a software company from {site.country}. We design
              websites and applications for people who create in public — and
              who are tired of being told everything except what to do next.
            </p>
            <p>
              Numbers arrive late. Advice is cheap. The useful thing is a clear
              read: what moved, what is noise, and which change is worth trying.
              That is the problem we keep coming back to, across everything we
              build.
            </p>
            <p>
              We like finished work more than a long list of features. We
              design and ship company websites, product and marketing sites,
              rebuilds, and applications. Website projects include contact, SEO,
              analytics, and care after launch. When you write to us, you reach
              the people who actually make the work.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm lg:mx-0">
            <BrandMark className="h-auto w-full overflow-hidden rounded-[1.75rem]" />
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-paper px-5 py-20 sm:px-6 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold tracking-tight">What we offer</h2>
          <p className="mt-3 max-w-2xl text-muted">
            Websites and applications. Company sites, product pages, rebuilds,
            and custom software.
          </p>
          <OfferCards variant="rule" />
        </div>
      </section>

      <section className="px-5 py-20 sm:px-6 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold tracking-tight">What we hold to</h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {values.map((item) => (
              <article key={item.title} className="border-t border-line pt-6">
                <h3 className="text-lg font-semibold tracking-tight text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">
              Say hello
            </h2>
            <p className="mt-2 max-w-md text-muted">
              Partnerships, press, or a question. Sales and support are both
              real inboxes.
            </p>
          </div>
          <ButtonLink href="/contact">Contact</ButtonLink>
        </div>
      </section>
    </>
  );
}
