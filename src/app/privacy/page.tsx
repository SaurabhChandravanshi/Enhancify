import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Enhancify collects and uses information on this site.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="px-5 py-16 sm:px-6 lg:py-24">
      <article className="mx-auto max-w-3xl text-sm leading-7 text-muted">
        <h1 className="text-4xl font-semibold tracking-tight text-ink">Privacy Policy</h1>
        <p className="mt-4 text-xs uppercase tracking-[0.12em]">Last updated September 9, 2026</p>
        <div className="mt-8 space-y-5">
          <p>
            {site.legalName} (“Enhancify”) is an Indian company. This policy
            covers enhancify.in — our company website and the contact form. Our
            products have their own terms where you create an account.
          </p>
          <h2 className="text-lg font-semibold text-ink">What we collect</h2>
          <p>
            If you write to us: name, email, company, what you need, and your
            message. That enquiry is emailed to {site.email.sales}. We do not
            keep a separate database of form submissions on this site. We also
            collect standard website logs (pages, device, approximate location).
          </p>
          <h2 className="text-lg font-semibold text-ink">How we use it</h2>
          <p>
            To reply, to run this site, and to improve it. Marketing mail is
            opt-in. We do not sell personal data. We process data in line with
            the Digital Personal Data Protection Act, 2023.
          </p>
          <h2 className="text-lg font-semibold text-ink">Your rights</h2>
          <p>
            You may request access, correction, or erasure, and withdraw consent,
            as provided under Indian law. Email{" "}
            <a className="text-ink underline" href={`mailto:${site.email.support}`}>
              {site.email.support}
            </a>
            .
          </p>
          <p>
            See also{" "}
            <Link href="/terms" className="text-ink underline">
              Terms of Use
            </Link>
            .
          </p>
        </div>
      </article>
    </div>
  );
}
