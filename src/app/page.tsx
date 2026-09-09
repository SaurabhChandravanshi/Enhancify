import { ButtonLink } from "@/components/button-link";
import { ContactForm } from "@/components/contact-form";
import { tools } from "@/lib/content";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <>
      <section className="px-5 pb-16 pt-20 sm:px-6 sm:pt-28">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            {site.city}, {site.country}
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-balance sm:text-5xl">
            We build EnhanceTube.
          </h1>
          <p className="mt-5 text-lg leading-8 text-muted">
            Enhancify is an Indian software company. Our product,{" "}
            <a
              href={site.productUrl}
              className="font-medium text-ink underline decoration-line underline-offset-4 hover:decoration-ink"
              target="_blank"
              rel="noopener noreferrer"
            >
              EnhanceTube
            </a>
            , is a YouTube workspace for A/B tests, video analysis, keywords, and
            the rest of the creator workflow.
          </p>
          <p className="mt-4 text-base leading-7 text-muted">
            This site is the company. Accounts and the product live on
            EnhanceTube. There is no login here — write to us if you need the
            team.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={site.productUrl}>Open EnhanceTube</ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Contact
            </ButtonLink>
          </div>
          <ul className="mt-12 flex flex-wrap gap-2">
            {tools.map((tool) => (
              <li
                key={tool}
                className="rounded-full bg-paper px-3 py-1.5 text-sm text-ink ring-1 ring-line"
              >
                {tool}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-line px-5 py-16 sm:px-6">
        <div className="mx-auto grid max-w-3xl gap-10 lg:grid-cols-1">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Get in touch</h2>
            <p className="mt-3 text-muted">
              Partnerships, press, or a question about EnhanceTube. We read every
              note.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
