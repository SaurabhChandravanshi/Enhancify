import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Age & Date Calculator Privacy Policy",
  description:
    "How the Age & Date Calculator Android app handles your information. It collects no personal data and works offline.",
  alternates: { canonical: "/apps/age-date-calculator/privacy" },
};

export default function AgeDateCalculatorPrivacyPage() {
  return (
    <div className="px-5 py-16 sm:px-6 lg:py-24">
      <article className="mx-auto max-w-3xl text-sm leading-7 text-muted">
        <h1 className="text-4xl font-semibold tracking-tight text-ink">
          Age &amp; Date Calculator Privacy Policy
        </h1>
        <p className="mt-4 text-xs uppercase tracking-[0.12em]">Last updated October 24, 2026</p>
        <div className="mt-8 space-y-5">
          <p>
            Age &amp; Date Calculator (“the app”) is an Android app that works out ages and date
            differences. It is published by its developer. Questions about this policy can be sent
            to{" "}
            <a className="text-ink underline" href={`mailto:${site.email.support}`}>
              {site.email.support}
            </a>
            .
          </p>

          <h2 className="text-lg font-semibold text-ink">Summary</h2>
          <p>
            The app has no accounts, no advertising and no analytics. It does not connect to the
            internet and does not collect, send or share personal data. The app asks for no
            permissions. Everything stays on your phone.
          </p>

          <h2 className="text-lg font-semibold text-ink">What is stored on your device</h2>
          <p>
            The names and dates of birth you choose to save as birthdays, and your theme setting.
            The dates you type to calculate an age or a date are used on screen and are not saved
            unless you save a birthday. You can delete any saved birthday inside the app.
            Uninstalling the app removes all of it from your phone.
          </p>

          <h2 className="text-lg font-semibold text-ink">Sharing</h2>
          <p>
            The “Share this app” option shares a link to the app and nothing from your saved
            birthdays.
          </p>

          <h2 className="text-lg font-semibold text-ink">Phone backups</h2>
          <p>
            If you have Android&apos;s automatic backup turned on in your phone settings, Android
            may include the app&apos;s data in your own Google account backup. That is handled by
            your phone and Google under your settings, and we do not receive it.
          </p>

          <h2 className="text-lg font-semibold text-ink">Children</h2>
          <p>
            The app is a general utility. It does not knowingly collect information from anyone,
            including children.
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
