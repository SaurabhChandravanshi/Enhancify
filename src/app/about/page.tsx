import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: "Enhancify Private Limited is the Indian company behind EnhanceTube.",
};

export default function AboutPage() {
  return (
    <div className="px-5 py-16 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          About
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          The company behind EnhanceTube.
        </h1>
        <div className="mt-8 space-y-5 text-base leading-8 text-muted">
          <p>
            {site.legalName} is a software company in {site.city}, {site.country}.
            We make one product: EnhanceTube, a workspace that helps YouTube
            creators test thumbnails and titles, analyse videos, find keywords,
            and plan uploads.
          </p>
          <p>
            enhancify.in is our company site. The product — including accounts —
            is at{" "}
            <a
              href={site.productUrl}
              className="font-medium text-ink underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              enhancetube.com
            </a>
            .
          </p>
          <p>
            Sales:{" "}
            <a className="font-medium text-ink underline" href={`mailto:${site.email.sales}`}>
              {site.email.sales}
            </a>
            . Support:{" "}
            <a className="font-medium text-ink underline" href={`mailto:${site.email.support}`}>
              {site.email.support}
            </a>
            .
          </p>
        </div>
        <div className="mt-10">
          <ButtonLink href={site.productUrl}>Open EnhanceTube</ButtonLink>
        </div>
      </div>
    </div>
  );
}
