import type { Metadata } from "next";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { site } from "@/lib/site";

/**
 * `insightsapp.in/get` — the "get the app" shortlink.
 *
 * Goal: a real person tapping the link still lands straight on the Play
 * Store, but when the link is *shared* (WhatsApp, Telegram, Slack, X, …)
 * the crawler that unfurls it gets a branded Insights preview card
 * instead of the Play Store's generic listing image.
 *
 * How:
 *   • A plain HTTP redirect (what `proxy.ts` used to do) never carries
 *     Open Graph tags, so crawlers only ever saw the Play Store preview.
 *   • Instead we serve this page. Social crawlers get the rendered
 *     `<head>` — including the OG/Twitter image from
 *     `opengraph-image.tsx` in this folder — and stop there.
 *   • Real browsers are detected by User-Agent and issued a server-side
 *     307 redirect to the Play Store, so the human experience is
 *     unchanged (they never see this page).
 *
 * UA sniffing is best-effort: an unknown crawler that isn't matched just
 * gets redirected to the Play Store (the old behaviour — safe), and a
 * human on a bot-like UA sees the fallback page with a manual button.
 */

const app = site.apps.insights;

const PLAY_STORE_URL = `https://play.google.com/store/apps/details?id=${app.androidPackage}`;

// Social/link-preview crawlers and search bots that should receive the
// OG card rather than being redirected. Kept broad on purpose.
const CRAWLER_UA =
  /bot|crawl|spider|slurp|facebookexternalhit|facebot|whatsapp|telegram|twitterbot|slackbot|slack-imgproxy|discord|linkedinbot|pinterest|redditbot|embedly|quora link preview|showyoubot|outbrain|vkshare|w3c_validator|applebot|bingpreview|skypeuripreview|google-inspectiontool|googlebot|bingbot|duckduckbot|baiduspider|yandex|iframely|nuzzel|flipboard|tumblr|bitlybot|snapchat|line-poker|preview/i;

function isCrawler(userAgent: string): boolean {
  return CRAWLER_UA.test(userAgent);
}

export const metadata: Metadata = {
  title: `Get ${app.name}`,
  description:
    `Download ${app.name} on Google Play — quick reads of the day's important stories, made for India.`,
  alternates: { canonical: "/get" },
  openGraph: {
    type: "website",
    siteName: app.name,
    url: "/get",
    title: `${app.name}: ${app.tagline}`,
    description:
      "Quick reads of the day's important stories, made for India. Get the app on Google Play.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${app.name}: ${app.tagline}`,
    description:
      "Quick reads of the day's important stories, made for India. Get the app on Google Play.",
  },
};

export default async function GetAppPage() {
  const userAgent = (await headers()).get("user-agent") ?? "";

  // Humans → straight to the Play Store (unchanged shortlink behaviour).
  // Crawlers fall through and render the OG-tagged page below.
  if (!isCrawler(userAgent)) {
    redirect(PLAY_STORE_URL);
  }

  return (
    <main className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center gap-6 px-6 py-24 text-center">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900">
        {app.name}: {app.tagline}
      </h1>
      <p className="max-w-md text-base leading-7 text-slate-600">
        Quick reads of the day&apos;s important stories, made for India.
      </p>
      <a
        href={PLAY_STORE_URL}
        className="inline-flex h-11 items-center rounded-xl bg-indigo-600 px-6 text-sm font-semibold text-white transition hover:bg-indigo-700"
      >
        Get it on Google Play
      </a>
    </main>
  );
}
