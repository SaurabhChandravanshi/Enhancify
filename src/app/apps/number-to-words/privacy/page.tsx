import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Number to Words Privacy Policy",
  description:
    "How the Number to Words Android app handles your information. It collects no personal data and works offline.",
  alternates: { canonical: "/apps/number-to-words/privacy" },
};

export default function NumberToWordsPrivacyPage() {
  return (
    <div className="px-5 py-16 sm:px-6 lg:py-24">
      <article className="mx-auto max-w-3xl text-sm leading-7 text-muted">
        <h1 className="text-4xl font-semibold tracking-tight text-ink">
          Number to Words Privacy Policy
        </h1>
        <p className="mt-4 text-xs uppercase tracking-[0.12em]">Last updated October 24, 2026</p>
        <div className="mt-8 space-y-5">
          <p>
            Number to Words (“the app”) is an Android app that writes numbers and amounts in
            words. It is published by its developer. Questions about this policy can be sent to{" "}
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
            The numbers you recently converted, so you can open them again, and your settings such
            as number system, currency, letter case and theme. You can clear recent numbers inside
            the app. Uninstalling the app removes all of it from your phone.
          </p>

          <h2 className="text-lg font-semibold text-ink">Copying and sharing</h2>
          <p>
            When you tap Copy, the result is placed on your phone&apos;s clipboard. When you tap
            Share, the result text is handed to the app you choose in your phone&apos;s share
            sheet. The “Share this app” option shares a link to the app and nothing from your
            recent numbers.
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
