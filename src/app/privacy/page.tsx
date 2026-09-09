import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Enhancify collects and uses information.",
};

export default function PrivacyPage() {
  return (
    <div className="px-5 py-16 sm:px-6 lg:py-24">
      <article className="mx-auto max-w-3xl text-sm leading-7 text-muted">
        <h1 className="text-4xl font-semibold tracking-tight text-ink">Privacy Policy</h1>
        <p className="mt-4 text-xs uppercase tracking-[0.12em]">Last updated September 9, 2026</p>
        <div className="mt-8 space-y-5">
          <p>
            {site.legalName} (“Enhancify”) is an Indian company. We operate
            enhancify.in, this website, and the Enhancify application. This
            policy covers the marketing site and customer workspaces. We process
            personal data in line with the Digital Personal Data Protection Act,
            2023.
          </p>
          <h2 className="text-lg font-semibold text-ink">What we collect</h2>
          <p>
            Account data (name, work email, company), billing details processed
            by our payment provider (including GST invoicing for Indian
            businesses), product telemetry you send through the SDK or snippet,
            and standard website logs (pages, device, approximate location).
          </p>
          <h2 className="text-lg font-semibold text-ink">How we use it</h2>
          <p>
            To provide the service, bill plans, improve the product, and send
            transactional mail. Marketing mail is opt-in. We do not sell personal
            data.
          </p>
          <h2 className="text-lg font-semibold text-ink">Product sessions</h2>
          <p>
            Session data from your users is processed on your behalf as a data
            processor. You control sampling, redaction, and retention in the
            workspace. A data processing agreement is available on request.
            Enterprise plans can keep data in India.
          </p>
          <h2 className="text-lg font-semibold text-ink">Your rights</h2>
          <p>
            You may request access, correction, or erasure of personal data, and
            withdraw consent, as provided under Indian law. Email{" "}
            <a className="text-ink underline" href={`mailto:${site.email.support}`}>
              {site.email.support}
            </a>
            . Grievances can be raised at the same address.
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
