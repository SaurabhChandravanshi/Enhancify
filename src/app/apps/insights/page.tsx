import type { Metadata } from "next";
import Link from "next/link";
import { HeroPhoneCarousel } from "@/components/hero-phone-carousel";
import { PhoneFrame } from "@/components/phone-frame";
import { site } from "@/lib/site";

/**
 * Public marketing landing page for the Insights mobile app.
 *
 * Audience:
 *   * People arriving from a Google search / social share who haven't
 *     installed the app yet — needs to sell the value quickly.
 *   * People arriving from Play Console's "Website" field — needs to
 *     look like a legitimate developer site, not a link farm.
 *   * Existing users following the "Get the app" CTA back to Play.
 *
 * Structure:
 *   1. Hero — brand mark, headline, sub-copy, primary CTA to Play,
 *      supporting phone-frame visual.
 *   2. Feature grid — 4 tiles covering the pillars ("personalised",
 *      "bilingual", "clean UI", "made in India").
 *   3. Screenshots strip — three side-by-side phone frames (real
 *      screenshots pulled from device, stored in
 *      `/public/apps/insights/screenshots/`), each auto-cycling
 *      through a small "core screen → related onboarding" story.
 *   4. Final CTA — repeat the Play button once more.
 *
 * Screenshots:
 *   Populated by `scripts/capture-play-screenshots.sh` in the Insights
 *   repo (or manually via `adb exec-out screencap -p > <file>`).
 *   Missing files fall back to the shared `PhoneShell` matte so the
 *   page never renders a broken image icon.
 */

const app = site.apps.insights;
const PLAY_STORE_URL = `https://play.google.com/store/apps/details?id=${app.androidPackage}`;

export const metadata: Metadata = {
  title: `${app.name}: ${app.tagline}`,
  // Search-result copy: leads with the category ("short-news app") and
  // the concrete benefit ("summarised into quick reads"). Avoids
  // "bilingual", "personalised feeds", "AI-generated" — implementation
  // words that don't help someone deciding whether to install.
  description: `${app.name} is a short-news app for India. The day's important stories summarised into quick reads. Free on Google Play.`,
  alternates: { canonical: "/apps/insights" },
  robots: { index: true, follow: true },
};

export default function InsightsLandingPage() {
  return (
    <>
      <Hero />
      <FeatureGrid />
      <ScreenshotsStrip />
      <FinalCTA />
    </>
  );
}

/* ─── Hero ────────────────────────────────────────────────────────── */

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Soft radial-ish indigo wash behind the hero — sits under both
          columns so the eye reads the whole hero as one unit. Uses
          arbitrary Tailwind values because the section-scoped gradient
          isn't reused elsewhere. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 55% at 15% 20%, rgba(99,102,241,0.14), transparent 70%), radial-gradient(50% 55% at 90% 20%, rgba(129,140,248,0.10), transparent 70%)",
        }}
      />

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-5 pt-14 pb-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:pt-24 lg:pb-24">
        <div className="flex flex-col justify-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-600">
            {app.name} · News app for India
          </p>
          <h1 className="mt-3 text-4xl font-semibold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl md:text-[56px]">
            {app.tagline}.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            The day&rsquo;s important stories, summed up into quick
            reads. Catch up in minutes, one story at a time.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
            >
              <PlayStoreIcon />
              Get it on Google Play
            </a>
            <Link
              href={app.helpPath}
              className="text-sm font-medium text-slate-700 underline underline-offset-4 hover:text-slate-900"
            >
              How it works
            </Link>
          </div>

          <p className="mt-5 text-xs text-slate-500">
            Free · Android · English &amp; Hindi
          </p>
        </div>

        {/* Hero visual — an oversized brand mark with two phone-frame
            silhouettes floating behind. Keeps the LCP light (single
            static image + CSS) while still selling that this is a
            *mobile* app. */}
        <div className="relative flex items-center justify-center lg:justify-end">
          <div className="relative">
            {/* Cycles through the four onboarding screens (News →
                Context → Briefings → Language) and then the three core
                app screens (Feed → Explore → Account), so the hero
                itself doubles as a full product-tour preview. See
                `components/hero-phone-carousel.tsx` for the fade/motion
                and accessibility contract. */}
            <HeroPhoneCarousel
              slides={[
                {
                  src: "/apps/insights/screenshots/hero-01-news.png",
                  alt: `${app.name} onboarding: News in seconds`,
                },
                {
                  src: "/apps/insights/screenshots/hero-02-context.png",
                  alt: `${app.name} onboarding: Context, not clutter`,
                },
                {
                  src: "/apps/insights/screenshots/hero-03-briefings.png",
                  alt: `${app.name} onboarding: Briefings made for you`,
                },
                {
                  src: "/apps/insights/screenshots/hero-04-language.png",
                  alt: `${app.name} onboarding: Choose a language`,
                },
                {
                  src: "/apps/insights/screenshots/01-feed.png",
                  alt: `${app.name} feed view`,
                },
                {
                  src: "/apps/insights/screenshots/02-explore.png",
                  alt: `${app.name} explore topics`,
                },
                {
                  src: "/apps/insights/screenshots/03-account.png",
                  alt: `${app.name} account and preferences`,
                },
              ]}
            />
            {/* Subtle behind-phone accent */}
            <div
              aria-hidden="true"
              className="absolute -right-8 -top-8 h-56 w-56 rounded-full bg-indigo-200/40 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-10 -left-10 h-52 w-52 rounded-full bg-indigo-100/50 blur-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Features ───────────────────────────────────────────────────── */

const FEATURES: {
  title: string;
  body: string;
  icon: React.ReactNode;
}[] = [
  {
    title: "Personalised, not intrusive",
    body: "Follow the topics you care about and skip the rest. Your feed learns from what you read.",
    icon: <SparkleIcon />,
  },
  {
    title: "Read in your language",
    body: "Every story is available in multiple languages. Switch anytime in Settings; your saves and follows stay with you.",
    icon: <TranslateIcon />,
  },
  {
    title: "One story at a time",
    body: "A vertical, swipe-through reader. No bottomless scroll, no autoplay, no doomscroll loop. Read what you came for and move on.",
    icon: <LayersIcon />,
  },
  {
    title: "Made in India",
    body: "Built in India for how India reads: the stories, languages, and topics that actually matter here.",
    icon: <FlagIcon />,
  },
];

function FeatureGrid() {
  return (
    <section className="border-t border-slate-100 bg-slate-50/60">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-600">
            What&rsquo;s inside
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Built for people who want the news to feel calm again.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-indigo-200 hover:shadow-sm"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                {f.icon}
              </div>
              <h3 className="mt-5 text-base font-semibold text-slate-900">
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Screenshots strip ──────────────────────────────────────────── */

function ScreenshotsStrip() {
  const shots = [
    { src: "/apps/insights/screenshots/01-feed.png", alt: "Feed view" },
    {
      src: "/apps/insights/screenshots/02-explore.png",
      alt: "Explore topics",
    },
    {
      src: "/apps/insights/screenshots/03-account.png",
      alt: "Account and preferences",
    },
  ];
  return (
    <section className="border-t border-slate-100 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-600">
            A quick tour
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Focused, uncluttered, and yours.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {shots.map((s) => (
            <div key={s.src} className="flex justify-center">
              <PhoneFrame src={s.src} alt={s.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Final CTA ──────────────────────────────────────────────────── */

function FinalCTA() {
  return (
    <section className="relative overflow-hidden border-t border-slate-100">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 100%, rgba(99,102,241,0.12), transparent 70%)",
        }}
      />
      <div className="mx-auto max-w-4xl px-5 py-20 text-center sm:px-6">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Start reading today.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-slate-600">
          {app.name} is free to install and use. No sign-up required to
          start reading.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
          >
            <PlayStoreIcon />
            Get it on Google Play
          </a>
          <Link
            href={app.helpPath}
            className="text-sm font-medium text-slate-700 underline underline-offset-4 hover:text-slate-900"
          >
            Read the FAQ first
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── Icons (small inline SVGs, no dependency) ───────────────────── */

// Google's own "Get it on Google Play" trademark badge would be ideal
// long-term (download the SVG from https://play.google.com/intl/en_us/badges/),
// but this abstract triangle communicates "install" without any brand-usage
// approval process while we're still in closed testing.
function PlayStoreIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M6.5 3.5v17l14-8.5-14-8.5z" />
    </svg>
  );
}

function SparkleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8" />
    </svg>
  );
}
function TranslateIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 5h9M8.5 5v2M5 12s2-6 3.5-6 3.5 6 3.5 6M6.5 10h4M12 20l5-11 5 11M13.4 17h7.2" />
    </svg>
  );
}
function LayersIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3l9 5-9 5-9-5 9-5z" />
      <path d="M3 13l9 5 9-5" />
      <path d="M3 17l9 5 9-5" />
    </svg>
  );
}
function FlagIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 21V4M4 4h13l-2.5 4L17 12H4" />
    </svg>
  );
}
