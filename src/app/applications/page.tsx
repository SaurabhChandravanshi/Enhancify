import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { ContactForm } from "@/components/contact-form";
import { IncludeList } from "@/components/include-list";
import { applicationOffer, websiteSteps } from "@/lib/content";

export const metadata: Metadata = {
  title: "Web application development",
  description:
    "Custom web applications from Enhancify — flows, build, launch, analytics, and care after launch.",
  alternates: { canonical: "/applications" },
  openGraph: {
    title: "Web application development · Enhancify",
    description:
      "Custom web applications from Enhancify — flows, build, launch, analytics, and care after launch.",
    url: "/applications",
  },
};

export default function ApplicationsPage() {
  return (
    <>
      <section className="px-5 pb-8 pt-16 sm:px-6 sm:pt-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Applications
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-balance sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
            We design and ship applications.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
            Custom software people use: a workspace, a tool, a product. You stay
            in control of what ships. No pricing on this page — write to us and
            we will tell you if we are the right fit.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#enquiry">Start an enquiry</ButtonLink>
            <ButtonLink href="/websites" variant="secondary">
              Website work
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-6 lg:pb-28">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold tracking-tight">What we offer</h2>
          <article
            id={applicationOffer.id}
            className="scroll-mt-24 mt-12 grid gap-8 border-t border-line pt-10 lg:grid-cols-[0.9fr_1.1fr]"
          >
            <div>
              <h3 className="text-2xl font-semibold tracking-tight">
                {applicationOffer.title}
              </h3>
              <p className="mt-3 text-muted leading-7">{applicationOffer.summary}</p>
              <div className="mt-6">
                <ButtonLink href="/contact?need=application" variant="secondary">
                  Talk about this
                </ButtonLink>
              </div>
            </div>
            <div>
              <p className="text-base leading-8 text-muted">{applicationOffer.body}</p>
              <IncludeList items={applicationOffer.includes} />
            </div>
          </article>
        </div>
      </section>

      <section className="border-y border-line bg-paper px-5 py-20 sm:px-6 lg:py-24">
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

      <section id="enquiry" className="scroll-mt-24 px-5 py-20 sm:px-6">
        <div className="mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">
              Tell us the job
            </h2>
            <p className="mt-4 text-muted leading-7">
              What should the application do, and who is it for? Write a few
              lines. A person on the team replies.
            </p>
          </div>
          <ContactForm defaultNeed="application" />
        </div>
      </section>
    </>
  );
}
