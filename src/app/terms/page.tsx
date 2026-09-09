import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms for using the Enhancify website and application.",
};

export default function TermsPage() {
  return (
    <div className="px-5 py-16 sm:px-6 lg:py-24">
      <article className="mx-auto max-w-3xl text-sm leading-7 text-muted">
        <h1 className="text-4xl font-semibold tracking-tight text-ink">Terms of Use</h1>
        <p className="mt-4 text-xs uppercase tracking-[0.12em]">Last updated September 9, 2026</p>
        <div className="mt-8 space-y-5">
          <p>
            By using Enhancify you agree to these terms. If you are using the
            product for a company, you represent that you can bind that company.
            These terms are governed by the laws of India. Courts in{" "}
            {site.city} have exclusive jurisdiction, subject to applicable law.
          </p>
          <h2 className="text-lg font-semibold text-ink">The service</h2>
          <p>
            Enhancify is software: a workspace, APIs, and an SDK that help you
            find product friction and run experiments. We do not guarantee
            specific business results. You remain responsible for what you ship
            to your users.
          </p>
          <h2 className="text-lg font-semibold text-ink">Accounts and plans</h2>
          <p>
            You must provide accurate information and keep credentials safe.
            Paid plans renew until cancelled. Fees are listed in Indian rupees
            and exclusive of GST, which is added on Indian invoices. Fees are
            non-refundable except where the law requires. We may suspend
            accounts that abuse the service or our infrastructure.
          </p>
          <h2 className="text-lg font-semibold text-ink">Your data</h2>
          <p>
            You own your workspace content and session data. You grant us a
            licence to process it solely to provide and improve Enhancify. You
            must have a lawful basis to send us data about your end users under
            the Digital Personal Data Protection Act, 2023 and other applicable
            law.
          </p>
          <h2 className="text-lg font-semibold text-ink">Liability</h2>
          <p>
            The service is provided “as is.” To the fullest extent allowed by
            Indian law, {site.legalName} is not liable for indirect damages or
            lost profits. Our total liability is limited to fees you paid in the
            twelve months before the claim.
          </p>
          <p>
            <Link href="/privacy" className="text-ink underline">
              Privacy Policy
            </Link>
            . Questions:{" "}
            <a className="text-ink underline" href={`mailto:${site.email.sales}`}>
              {site.email.sales}
            </a>
            {" "}
            or{" "}
            <a className="text-ink underline" href={`mailto:${site.email.support}`}>
              {site.email.support}
            </a>
            .
          </p>
        </div>
      </article>
    </div>
  );
}
