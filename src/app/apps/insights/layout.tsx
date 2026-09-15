import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

/**
 * Layout applied to every route under `/apps/insights/*`.
 *
 * Why a per-app layout:
 *   The Enhancify marketing chrome (agency-brand `SiteHeader`,
 *   `SiteFooter`, `WhatsAppButton`) is hidden here by
 *   `components/site-chrome.tsx`. This layout supplies the replacement:
 *   a compact Insights-branded header + footer that speaks to app
 *   users, not agency clients. Everything under this route (`/help`,
 *   `/account-deletion`, `/policies/*`, and the marketing `page.tsx`
 *   at this route's root) inherits it.
 *
 * Design notes:
 *   * Colors: Insights uses indigo as the primary brand color (matches
 *     the on-device Tailwind `indigo-600` in the RN app). Enhancify's
 *     `--color-accent` is a very close indigo shade, so the two feel
 *     harmonious even though they're technically different tokens.
 *   * Chrome is intentionally lightweight — a single top bar with logo +
 *     "Get the app" CTA, and a slim footer with the legal/support links.
 *     People land here from Play Console or the in-app help link; deep
 *     marketing nav would be noise.
 *   * The header sticks so the "Get the app" CTA remains visible while
 *     users read long-form content (Privacy, Terms).
 */

const app = site.apps.insights;

/**
 * Google Play listing URL — reused in header + footer + landing hero.
 * The `com.` prefix in Play URLs is the Android applicationId; ours is
 * `in.insightsapp` (see app.json → android.package in the mobile repo).
 */
const PLAY_STORE_URL = `https://play.google.com/store/apps/details?id=${app.androidPackage}`;

/**
 * Per-app metadata. `title.template` gives every nested page a
 * "<page> · Insights" suffix without repeating the app name in each
 * page's own metadata export.
 */
export const metadata: Metadata = {
  // Insights lives on its own domain; resolve all relative canonical /
  // Open Graph URLs against it (not the Enhancify metadataBase from the
  // root layout). Nested Insights pages inherit this.
  metadataBase: new URL(app.url),
  title: {
    default: `${app.name}: ${app.tagline}`,
    template: `%s · ${app.name}`,
  },
  // Layout-level description used by nested pages when they don't
  // define their own. Same tone as the landing page's description:
  // states the category and the concrete benefit, skips
  // implementation words.
  description: `${app.name} is a short-news app for India, quick reads of the day's important stories. ${app.tagline}.`,
  applicationName: app.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: app.name,
    url: app.paths.home,
    title: `${app.name}: ${app.tagline}`,
    description: `${app.name} is a short-news app for India, quick reads of the day's important stories.`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${app.name}: ${app.tagline}`,
  },
};

export default function InsightsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // A subtle indigo-tinted background differentiates the Insights
    // sub-site from the neutral Enhancify canvas without going too far
    // — this is still a marketing shell, not the app itself.
    <div className="flex min-h-screen flex-col bg-white text-slate-900">
      <InsightsHeader />
      <div className="flex-1">{children}</div>
      <InsightsFooter />
    </div>
  );
}

function InsightsHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6">
        <Link
          href={app.paths.home}
          aria-label={`${app.name} home`}
          className="flex items-center gap-2.5"
        >
          {/* The layered-squares mark, copied from the mobile app's
              logo-mark.png at build time. See public/apps/insights/. */}
          <Image
            src="/apps/insights/logo-mark.png"
            alt=""
            width={28}
            height={28}
            className="h-7 w-7 rounded-lg shadow-sm ring-1 ring-slate-900/5"
            priority
          />
          <span className="text-[15px] font-semibold tracking-tight text-slate-900">
            {app.name}
          </span>
        </Link>

        <a
          href={PLAY_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-9 items-center gap-1.5 rounded-lg bg-indigo-600 px-3.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
        >
          <span className="hidden sm:inline">Get the app</span>
          <span className="sm:hidden">Get</span>
        </a>
      </div>
    </header>
  );
}

function InsightsFooter() {
  return (
    <footer className="mt-24 border-t border-slate-200 bg-slate-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-10 sm:px-6 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <Link
            href={app.paths.home}
            className="flex items-center gap-2.5"
            aria-label={`${app.name} home`}
          >
            <Image
              src="/apps/insights/logo-mark.png"
              alt=""
              width={28}
              height={28}
              className="h-7 w-7 rounded-lg shadow-sm ring-1 ring-slate-900/5"
            />
            <span className="text-[15px] font-semibold tracking-tight text-slate-900">
              {app.name}
            </span>
          </Link>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            {app.tagline}. A short-read news app for India, built by {" "}
            <a
              className="underline hover:text-slate-900"
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Enhancify
            </a>
            .
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 text-sm sm:grid-cols-3">
          <FooterCol title="App">
            <FooterLink href={PLAY_STORE_URL} external>
              Google Play
            </FooterLink>
            <FooterLink href={app.paths.help}>Help &amp; support</FooterLink>
          </FooterCol>

          <FooterCol title="Legal">
            <FooterLink href={app.paths.privacy}>
              Privacy
            </FooterLink>
            <FooterLink href={app.paths.terms}>Terms</FooterLink>
            <FooterLink href={app.paths.deleteAccount}>
              Delete account
            </FooterLink>
          </FooterCol>

          <FooterCol title="Contact">
            <FooterLink href={`mailto:${app.contactEmail}`} external>
              {app.contactEmail}
            </FooterLink>
          </FooterCol>
        </div>
      </div>
      <div className="border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-5 py-5 text-xs text-slate-500 sm:px-6">
          © {new Date().getFullYear()} Enhancify
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
        {title}
      </p>
      <ul className="mt-3 space-y-2">{children}</ul>
    </div>
  );
}

function FooterLink({
  href,
  external = false,
  children,
}: {
  href: string;
  external?: boolean;
  children: React.ReactNode;
}) {
  if (external) {
    return (
      <li>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-600 transition hover:text-slate-900"
        >
          {children}
        </a>
      </li>
    );
  }
  return (
    <li>
      <Link
        href={href}
        className="text-slate-600 transition hover:text-slate-900"
      >
        {children}
      </Link>
    </li>
  );
}
