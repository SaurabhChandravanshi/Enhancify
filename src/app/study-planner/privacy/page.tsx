import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Study Planner Privacy Policy",
  description:
    "How the Study Planner Android app handles your information. It collects no personal data and keeps your plan on your device.",
  alternates: { canonical: "/study-planner/privacy" },
};

export default function StudyPlannerPrivacyPage() {
  return (
    <div className="px-5 py-16 sm:px-6 lg:py-24">
      <article className="mx-auto max-w-3xl text-sm leading-7 text-muted">
        <h1 className="text-4xl font-semibold tracking-tight text-ink">
          Study Planner Privacy Policy
        </h1>
        <p className="mt-4 text-xs uppercase tracking-[0.12em]">Last updated October 21, 2026</p>
        <div className="mt-8 space-y-5">
          <p>
            Study Planner (“the app”) is an Android app for planning exam preparation. It is
            published by its developer. Questions about this policy can be sent to{" "}
            <a className="text-ink underline" href={`mailto:${site.email.support}`}>
              {site.email.support}
            </a>
            .
          </p>

          <h2 className="text-lg font-semibold text-ink">Summary</h2>
          <p>
            The app has no accounts, no advertising and no analytics. It does not connect to the
            internet and does not collect, send or share personal data. Everything you add stays
            on your phone.
          </p>

          <h2 className="text-lg font-semibold text-ink">What is stored on your device</h2>
          <p>
            The exams, subjects, topics, notes, tasks, mock test scores, study time blocks and
            study sessions you enter, your settings, and any files you choose to add to the
            Library. Files are copied into the app&apos;s private storage and can be removed from
            inside the app. Uninstalling the app removes all of this data from your phone.
          </p>

          <h2 className="text-lg font-semibold text-ink">Permissions</h2>
          <p>
            <strong className="text-ink">Notifications</strong> are used only to tell you when a
            focus timer or break ends, when a study block starts or ends, to give a daily reminder
            and to say how many topics are due for revision. You can turn them off at any time.
            The app also asks Android to restore your reminder schedule after the phone restarts.
            It does not ask for access to your contacts, location, camera, microphone or storage.
          </p>

          <h2 className="text-lg font-semibold text-ink">Files and sharing</h2>
          <p>
            When you pick a file or share one to Study Planner from another app, the app copies
            only that file. When you open one of your files, the app lets the viewer you choose
            read that file. The “Share this app” option shares a link to the app and nothing from
            your plan or Library.
          </p>

          <h2 className="text-lg font-semibold text-ink">Phone backups</h2>
          <p>
            If you have Android&apos;s automatic backup turned on in your phone settings, Android
            may include the app&apos;s data in your own Google account backup. That is handled by
            your phone and Google under your settings, and we do not receive it.
          </p>

          <h2 className="text-lg font-semibold text-ink">Children</h2>
          <p>
            The app is intended for people aged 18 and over and does not knowingly collect
            information from anyone.
          </p>

          <h2 className="text-lg font-semibold text-ink">Your choices</h2>
          <p>
            You control all data in the app. You can edit or delete any item inside it, or remove
            everything by clearing the app&apos;s storage or uninstalling it. Because we hold no
            copy of your data, there is nothing for us to access or erase on our side.
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
