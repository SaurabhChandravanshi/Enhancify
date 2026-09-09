import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Sales and support for Enhancify Private Limited.",
};

export default function ContactPage() {
  return (
    <div className="px-5 py-16 sm:px-6 lg:py-24">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Contact
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Talk to the company.
          </h1>
          <p className="mt-5 text-lg leading-8 text-muted">
            There is no account on this site. Use the form or email. A person
            replies.
          </p>
          <dl className="mt-10 space-y-4 text-sm">
            <div>
              <dt className="font-semibold text-ink">Sales</dt>
              <dd>
                <a href={`mailto:${site.email.sales}`} className="text-muted hover:text-ink">
                  {site.email.sales}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-ink">Support</dt>
              <dd>
                <a href={`mailto:${site.email.support}`} className="text-muted hover:text-ink">
                  {site.email.support}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-ink">Location</dt>
              <dd className="text-muted">{site.country}</dd>
            </div>
          </dl>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
