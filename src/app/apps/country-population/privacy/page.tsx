import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Country Population Privacy Policy",
  description:
    "How the Country Population Android app handles your information. It collects no personal data.",
  alternates: { canonical: "/apps/country-population/privacy" },
};

export default function CountryPopulationPrivacyPage() {
  return (
    <div className="px-5 py-16 sm:px-6 lg:py-24">
      <article className="mx-auto max-w-3xl text-sm leading-7 text-muted">
        <h1 className="text-4xl font-semibold tracking-tight text-ink">
          Country Population Privacy Policy
        </h1>
        <p className="mt-4 text-xs uppercase tracking-[0.12em]">Last updated October 21, 2026</p>
        <div className="mt-8 space-y-5">
          <p>
            Country Population (“the app”) is an Android reference app for looking up, ranking and
            comparing the population of countries and territories. It is published by its
            developer. Questions about this policy can be sent to{" "}
            <a className="text-ink underline" href={`mailto:${site.email.support}`}>
              {site.email.support}
            </a>
            .
          </p>

          <h2 className="text-lg font-semibold text-ink">Summary</h2>
          <p>
            The app has no accounts, no advertising and no analytics. It does not collect, store
            on a server or share personal data.
          </p>

          <h2 className="text-lg font-semibold text-ink">What is stored on your device</h2>
          <p>
            The population figures that come with the app, any newer figures you download with the
            Refresh button, and your list of favourite countries. This stays on your phone, and we
            never receive it. Uninstalling the app removes it.
          </p>

          <h2 className="text-lg font-semibold text-ink">Network requests</h2>
          <p>
            The app has an optional <strong className="text-ink">Refresh</strong> button. When you
            tap it, the app requests the latest figures from the World Bank&apos;s public data
            service (api.worldbank.org) over HTTPS. The request contains no information about you
            or your phone beyond what any internet request carries. As with any internet request,
            the World Bank&apos;s server can see your device&apos;s IP address; the app does not
            read, store or share it. The World Bank&apos;s own terms and privacy notice apply to
            that service.
          </p>

          <h2 className="text-lg font-semibold text-ink">Data sources</h2>
          <p>
            Population figures and land area come from World Bank Open Data (indicators
            SP.POP.TOTL and AG.LND.TOTL.K2), licensed under{" "}
            <a
              className="text-ink underline"
              href="https://creativecommons.org/licenses/by/4.0/"
              rel="noopener noreferrer"
            >
              CC BY 4.0
            </a>
            . The app is not affiliated with or endorsed by the World Bank. Figures are annual
            estimates, not live counts.
          </p>

          <h2 className="text-lg font-semibold text-ink">Phone backups</h2>
          <p>
            If you have Android&apos;s automatic backup turned on in your phone settings, Android
            may include the app&apos;s data in your own Google account backup. That is handled by
            your phone and Google under your settings, and we do not receive it.
          </p>

          <h2 className="text-lg font-semibold text-ink">Children</h2>
          <p>
            The app is a general reference tool and does not knowingly collect information from
            anyone, including children.
          </p>

          <h2 className="text-lg font-semibold text-ink">Changes</h2>
          <p>
            If this policy changes, the new version and its date will be posted on this page.
          </p>

          <p>
            Our website&apos;s own privacy practices are described in the{" "}
            <Link href="/privacy" className="text-ink underline">
              Enhancify Privacy Policy
            </Link>
            .
          </p>
        </div>
      </article>
    </div>
  );
}
