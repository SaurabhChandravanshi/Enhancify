import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { ContactForm } from "@/components/contact-form";
import { IncludeList } from "@/components/include-list";
import {
  includesForOffer,
  websiteAlwaysIncluded,
  websiteOffers,
  websiteSteps,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Websites",
  description:
    "Company websites, product sites, and rebuilds — with contact, SEO, analytics, and care after launch.",
};

export default function WebsitesPage() {
  return (
    <>
      <section className="px-5 pb-8 pt-16 sm:px-6 sm:pt-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Websites
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-balance sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
            We design and ship websites.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
            Company sites, product pages, and rebuilds. Every project includes
            contact, SEO, analytics, and care after launch. No pricing on this
            page — write to us and we will tell you if we are the right fit.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#enquiry">Start an enquiry</ButtonLink>
            <ButtonLink href="/applications" variant="secondary">
              Application work
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-6 lg:pb-28">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold tracking-tight">What we offer</h2>
          <div className="mt-12 space-y-16">
            {websiteOffers.map((offer) => (
              <article
                key={offer.id}
                id={offer.id}
                className="scroll-mt-24 grid gap-8 border-t border-line pt-10 lg:grid-cols-[0.9fr_1.1fr]"
              >
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight">
                    {offer.title}
                  </h3>
                  <p className="mt-3 text-muted leading-7">{offer.summary}</p>
                  <div className="mt-6">
                    <ButtonLink
                      href={`/contact?need=${offer.id}`}
                      variant="secondary"
                    >
                      Talk about this
                    </ButtonLink>
                  </div>
                </div>
                <div>
                  <p className="text-base leading-8 text-muted">{offer.body}</p>
                  <IncludeList items={includesForOffer(offer)} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-paper px-5 py-20 sm:px-6 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold tracking-tight">
            With every project
          </h2>
          <p className="mt-3 max-w-2xl text-muted">
            These sit on company sites, product sites, and rebuilds — not as a
            separate shop.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {websiteAlwaysIncluded.map((item) => (
              <article key={item.title} className="border-t border-line pt-6">
                <h3 className="text-lg font-semibold tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-6 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold tracking-tight">How a project runs</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {websiteSteps.map((item, index) => (
              <article key={item.title} className="border-t border-line pt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-lg font-semibold tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-fog px-5 py-20 sm:px-6 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">A good fit</h2>
            <p className="mt-4 text-muted leading-8">
              Founders, consultants, and small product teams who need a serious
              public site — not a template farm, and not a forty-page agency
              process. If you already know the job (a company site, a product
              page, or a rebuild), we can start.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">Not a fit</h2>
            <p className="mt-4 text-muted leading-8">
              We do not sell logo packages, ad retainers, or “we do WordPress
              and everything else.” If the brief is a full marketplace, an ERP,
              or ongoing ads, we will say so and point you elsewhere.
            </p>
          </div>
        </div>
      </section>

      <section id="enquiry" className="scroll-mt-24 px-5 py-20 sm:px-6">
        <div className="mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">
              Tell us the job
            </h2>
            <p className="mt-4 text-muted leading-7">
              Company site, product page, or rebuild — each includes contact,
              SEO, analytics, and care after launch. Pick what you need and
              write a few lines. A person on the team replies.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
