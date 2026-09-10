import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms for using the Enhancify company website.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <div className="px-5 py-16 sm:px-6 lg:py-24">
      <article className="mx-auto max-w-3xl text-sm leading-7 text-muted">
        <h1 className="text-4xl font-semibold tracking-tight text-ink">Terms of Use</h1>
        <p className="mt-4 text-xs uppercase tracking-[0.12em]">Last updated September 9, 2026</p>
        <div className="mt-8 space-y-5">
          <p>
            By using enhancify.in you agree to these terms. They are governed by
            the laws of India. Courts in India have exclusive jurisdiction,
            subject to applicable law.
          </p>
          <h2 className="text-lg font-semibold text-ink">This website</h2>
          <p>
            This is the company site for {site.legalName}. It is informational.
            Product accounts, billing, and product-specific terms live on each
            product’s own site.
          </p>
          <h2 className="text-lg font-semibold text-ink">Acceptable use</h2>
          <p>
            Do not abuse, scrape, or attempt to disrupt this site, or submit
            false information through the contact form.
          </p>
          <h2 className="text-lg font-semibold text-ink">Liability</h2>
          <p>
            The site is provided “as is.” To the fullest extent allowed by Indian
            law, {site.legalName} is not liable for indirect damages arising from
            use of this website.
          </p>
          <p>
            <Link href="/privacy" className="text-ink underline">
              Privacy Policy
            </Link>
            . Questions:{" "}
            <a className="text-ink underline" href={`mailto:${site.email.sales}`}>
              {site.email.sales}
            </a>{" "}
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
