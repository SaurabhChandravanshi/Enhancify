import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { contactNeeds } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a website or application enquiry with Enhancify. A person on the team replies.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact · Enhancify",
    description:
      "Start a website or application enquiry with Enhancify. A person on the team replies.",
    url: "/contact",
  },
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ need?: string | string[] }>;
}) {
  const params = await searchParams;
  const raw = params.need;
  const need = Array.isArray(raw) ? raw[0] : raw;
  const defaultNeed: string =
    typeof need === "string" && contactNeeds.some((item) => item.value === need)
      ? need
      : "";

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
            Website work, application work, partnerships, or a question. There
            is no account on this site. Use the form or email. A person replies.
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
          </dl>
        </div>
        <ContactForm defaultNeed={defaultNeed} />
      </div>
    </div>
  );
}
