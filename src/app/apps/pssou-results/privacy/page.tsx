import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "PSSOU Results Privacy Policy",
  description:
    "How the PSSOU Results Android app handles your information. The developer does not collect or store your personal data.",
  alternates: { canonical: "/apps/pssou-results/privacy" },
};

export default function PssouResultsPrivacyPage() {
  return (
    <div className="px-5 py-16 sm:px-6 lg:py-24">
      <article className="mx-auto max-w-3xl text-sm leading-7 text-muted">
        <h1 className="text-4xl font-semibold tracking-tight text-ink">
          PSSOU Results Privacy Policy
        </h1>
        <p className="mt-4 text-xs uppercase tracking-[0.12em]">Last updated October 24, 2026</p>
        <div className="mt-8 space-y-5">
          <p>
            PSSOU Results (“the app”) is an Android app published by its developer. It is an
            independent app and is not an official app of any university or government body.
            Questions about this policy can be sent to{" "}
            <a className="text-ink underline" href={`mailto:${site.email.support}`}>
              {site.email.support}
            </a>
            .
          </p>

          <h2 className="text-lg font-semibold text-ink">Summary</h2>
          <p>
            The app does not ask you to create an account. The developer does not collect your
            personal information through the app, does not run a server that stores personal data
            from the app, and does not sell or share personal data.
          </p>

          <h2 className="text-lg font-semibold text-ink">Information you enter</h2>
          <p>
            The app does not ask for your name, phone number, email address, location, contacts,
            photos or files. Anything you type into the app is used on your device to show you
            what you asked for and is not sent to the developer.
          </p>

          <h2 className="text-lg font-semibold text-ink">Third-party websites and services</h2>
          <p>
            Where the app shows information that comes from other websites or services, those are
            run by other parties. When you open them, they may see technical details that any
            internet request carries, such as your IP address, and they follow their own privacy
            policies. The developer does not control them and does not receive that information.
          </p>

          <h2 className="text-lg font-semibold text-ink">Phone backups</h2>
          <p>
            If you have Android&apos;s automatic backup turned on in your phone settings, Android
            may include the app&apos;s data in your own Google account backup. That is handled by
            your phone and Google under your settings, and the developer does not receive it.
          </p>

          <h2 className="text-lg font-semibold text-ink">Children</h2>
          <p>
            The app does not knowingly collect information from anyone, including children.
          </p>

          <h2 className="text-lg font-semibold text-ink">Your choices</h2>
          <p>
            Because the developer holds no personal data from the app, there is nothing to access
            or erase on the developer&apos;s side. You can remove everything the app stored on
            your phone by clearing its storage or uninstalling it.
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
