import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

/**
 * Account deletion request page for the Insights mobile app.
 *
 * Why this file exists:
 *   Google Play requires a dedicated, publicly reachable URL for "Data
 *   safety → Account deletion" for every app that lets users create
 *   accounts. The URL must be reachable WITHOUT signing in, must speak
 *   specifically about the app (name + developer), and must describe
 *   what will be deleted, what may be retained, and the timeline.
 *
 *   The path here (`/apps/insights/policies/delete-account`) is
 *   referenced from `site.ts` so the privacy policy and Play Console
 *   listing share a single source of truth.
 *
 * Current mechanism:
 *   Insights does not (yet) expose an in-app "Delete account" button.
 *   Users request deletion by emailing us — we act on the request
 *   within 30 days. When we add an in-app self-service delete, update
 *   the "How to request deletion" section below and mark it as the
 *   preferred path.
 */

const app = site.apps.insights;

export const metadata: Metadata = {
  title: `Delete your account · ${app.name}`,
  description: `How to request deletion of your ${app.name} account and all associated data.`,
  alternates: { canonical: app.accountDeletionPath },
  robots: { index: true, follow: true },
};

export default function InsightsDeleteAccountPage() {
  return (
    <div className="px-5 py-16 sm:px-6 lg:py-24">
      <article className="mx-auto max-w-3xl text-sm leading-7 text-muted">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          {app.name}
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-ink">
          Delete your account
        </h1>
        <p className="mt-4 text-xs uppercase tracking-[0.12em]">
          Last updated {app.policiesLastUpdated}
        </p>

        <div className="mt-8 space-y-5">
          <p>
            This page explains how to permanently delete your
            {" "}<strong>{app.name}</strong> account and the data associated
            with it. {app.name} is published by <strong>Enhancify</strong>.
          </p>

          <h2 className="text-lg font-semibold text-ink">How to request deletion</h2>
          <p>
            Write to {" "}
            <a
              className="text-ink underline"
              href={`mailto:${app.contactEmail}`}
            >
              {app.contactEmail}
            </a>
            {" "}from the address you used to sign in to {app.name}, with
            the subject line{" "}
            <em>&ldquo;[{app.name}] Account deletion request&rdquo;</em>{" "}
            and include the email address on your account. We reply from
            the same address once the deletion is complete.
          </p>

          <h2 className="text-lg font-semibold text-ink">What gets deleted</h2>
          <p>When we process your request we permanently delete:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Your {app.name} account (the sign-in record and profile).
            </li>
            <li>
              Your preferences: content language, followed topics, saved
              stories, and reading history.
            </li>
            <li>
              Any push notification tokens registered to your account so
              you no longer receive push alerts.
            </li>
          </ul>

          <h2 className="text-lg font-semibold text-ink">What we keep, and for how long</h2>
          <p>
            We may retain a limited amount of information for a short time
            after deletion when we are required to by law or for the
            following purposes:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Basic technical logs (request timestamps, error stack
              traces) — retained for the default period set by our hosting
              provider (currently 30 days), then rotated out automatically.
              These logs are not linked to advertising and are not shared
              for marketing.
            </li>
            <li>
              Records of your deletion request itself, kept for up to
              12 months as proof that we honoured it, in case there is a
              later question about the request.
            </li>
          </ul>
          <p>
            News articles displayed in the app are not personal to you and
            are unaffected by account deletion.
          </p>

          <h2 className="text-lg font-semibold text-ink">Timeline</h2>
          <p>
            We complete deletion requests within <strong>30 days</strong>
            {" "}of receiving them, usually much faster. We&rsquo;ll email
            you once your request has been actioned.
          </p>

          <h2 className="text-lg font-semibold text-ink">Before you delete</h2>
          <p>
            Deletion is <strong>permanent</strong>. Once your account is
            deleted, we cannot recover it, and you will need to create a
            new account to use {app.name} again.
          </p>
          <p>
            If you only want to stop receiving push notifications, you can
            do that from your device&rsquo;s notification settings without
            deleting your account.
          </p>

          <h2 className="text-lg font-semibold text-ink">More information</h2>
          <p>
            See our {" "}
            <Link
              href="/apps/insights/policies/privacy"
              className="text-ink underline"
            >
              Privacy Policy
            </Link>
            {" "}and {" "}
            <Link
              href="/apps/insights/policies/terms"
              className="text-ink underline"
            >
              Terms of Use
            </Link>
            .
          </p>
        </div>
      </article>
    </div>
  );
}
