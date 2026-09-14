import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

/**
 * Product-scoped privacy policy for the Insights Android/iOS app.
 *
 * Kept deliberately separate from the site-wide `/privacy` page because
 * Google Play requires the privacy policy URL you submit for an app to
 * describe THAT app's data collection specifically — a company-wide
 * policy is grounds for rejection at store review.
 *
 * Wording rules for this file:
 *   • Plain language a non-technical user can read (DPDP Act 2023 + Play
 *     Data Safety guidance both require this).
 *   • NO implementation trivia — no Firestore paths, no `AsyncStorage`,
 *     no code identifiers, no security-rule language. Those go in the
 *     Play Console Data Safety questionnaire (a separate, structured
 *     form) and in engineering docs, not in a user-facing policy.
 *   • Do describe: what CATEGORIES of data are collected, why, who
 *     processes them, how long we keep them, and how a user can request
 *     access/deletion.
 *
 * Update whenever the app starts (or stops) collecting a new category of
 * data, or when a new third-party processor is added.
 */

const app = site.apps.insights;

export const metadata: Metadata = {
  title: `Privacy Policy · ${app.name}`,
  description: `How the ${app.name} mobile app collects, uses, and protects your information.`,
  alternates: { canonical: "/apps/insights/policies/privacy" },
  robots: { index: true, follow: true },
};

export default function InsightsPrivacyPage() {
  return (
    <div className="px-5 py-16 sm:px-6 lg:py-24">
      <article className="mx-auto max-w-3xl text-sm leading-7 text-muted">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          {app.name}
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-ink">
          Privacy Policy
        </h1>
        <p className="mt-4 text-xs uppercase tracking-[0.12em]">
          Last updated {app.policiesLastUpdated}
        </p>

        <div className="mt-8 space-y-5">
          <p>
            This policy explains how the <strong>{app.name}</strong> mobile
            app collects and uses your information. The app is published by
            {" "}<strong>Enhancify</strong> (&ldquo;we&rdquo;,
            &ldquo;us&rdquo;), based in {site.country}. Questions or
            requests: {" "}
            <a className="text-ink underline" href={`mailto:${app.contactEmail}`}>
              {app.contactEmail}
            </a>
            .
          </p>

          <h2 className="text-lg font-semibold text-ink">The short version</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>We show no ads.</li>
            <li>We use no analytics or tracking services.</li>
            <li>We never sell or rent your personal data.</li>
            <li>
              You can browse without an account. Signing in only exists so
              your topics and reading history sync across devices.
            </li>
            <li>
              You can delete your account and everything tied to it at any
              time from within the app.
            </li>
          </ul>

          <h2 className="text-lg font-semibold text-ink">What we collect</h2>

          <p>
            <strong>If you use the app without signing in:</strong> we do not
            know who you are. The app creates an anonymous identifier so it
            can remember your preferences on this device, but no personal
            information is associated with it.
          </p>

          <p>
            <strong>If you sign in</strong> (with Google or with an
            email/password), we store your email address and, if you
            provided one, your display name. If you used Sign in with
            Google, your name and profile picture may also be shared with
            us by Google.
          </p>

          <p>
            <strong>While you use the app, we save:</strong>
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Your preferred content language (English or Hindi).</li>
            <li>The topics you follow.</li>
            <li>The stories you have read or saved.</li>
            <li>
              If you allow notifications, a token that lets us send push
              alerts to your device. The token identifies your specific
              install; it does not directly identify you.
            </li>
          </ul>

          <p>
            <strong>We also collect basic technical information</strong> —
            error reports and request timestamps — which we use to keep the
            app running reliably. These are not linked to advertising and
            are not shared with third parties for marketing.
          </p>

          <p>
            <strong>We do not collect</strong> your contacts, your photos,
            your microphone or camera input, your precise location (GPS),
            your web browsing history outside the app, your SMS or call
            history, or any biometric information.
          </p>

          <h2 className="text-lg font-semibold text-ink">How we use it</h2>
          <p>The information above is used only to:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Sign you in and keep you signed in.</li>
            <li>Show you a feed in your language and topics.</li>
            <li>Remember what you have read or saved.</li>
            <li>
              Send occasional push notifications about stories relevant to
              you (with a per-user daily cap).
            </li>
            <li>Diagnose problems and improve reliability.</li>
          </ul>
          <p>
            We do not build advertising profiles. We do not make automated
            decisions with legal or similarly significant effects about you.
          </p>

          <h2 className="text-lg font-semibold text-ink">News content and AI</h2>
          <p>
            The stories shown in {app.name} come from public news sources.
            To produce a short 60-word summary and, for some stories, an
            illustrative image, we send the article&rsquo;s title and short
            description to an AI provider. <strong>We do not send any of
            your personal information to the AI provider or to news
            sources</strong> — only the news content itself.
          </p>

          <h2 className="text-lg font-semibold text-ink">Who else handles your data</h2>
          <p>
            To run the service, we rely on a few well-known providers who
            process data on our behalf:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>Google Firebase</strong> — for sign-in, storing your
              profile, saving generated images, and delivering push
              notifications.
            </li>
            <li>
              <strong>Google Sign-in</strong> — only if you choose it as a
              sign-in method.
            </li>
            <li>
              <strong>OpenAI</strong> — for summarising and illustrating
              news articles. Personal information is not sent to OpenAI.
            </li>
            <li>
              <strong>News providers</strong> — the app fetches article
              headlines and summaries from public news feeds. These
              providers do not receive any of your personal information.
            </li>
          </ul>
          <p>
            Each of these providers has its own privacy policy and is
            bound by its own terms.
          </p>

          <h2 className="text-lg font-semibold text-ink">How long we keep your data</h2>
          <p>
            We keep your account and everything associated with it until
            you delete it. When you delete your account, we remove your
            profile, saved items, reading history, and push notification
            token within 30 days. Basic error logs age out on their own
            after a short retention period.
          </p>

          <h2 className="text-lg font-semibold text-ink">Your rights</h2>
          <p>
            You may ask us to show you the personal information we hold
            about you, correct it, or delete it. You may withdraw consent
            for optional processing at any time. Send requests to {" "}
            <a className="text-ink underline" href={`mailto:${app.contactEmail}`}>
              {app.contactEmail}
            </a>{" "}
            and we will reply within 30 days. These rights are provided
            under India&rsquo;s Digital Personal Data Protection Act,
            2023. If you are in the European Economic Area, you may also
            lodge a complaint with your local data protection authority.
          </p>

          <h2 className="text-lg font-semibold text-ink">Children</h2>
          <p>
            {app.name} is not directed to children under 13. We do not
            knowingly collect personal information from children under
            13. If you believe a child has provided us data, write to us
            and we will remove it.
          </p>

          <h2 className="text-lg font-semibold text-ink">Security</h2>
          <p>
            All traffic between the app and our servers is encrypted in
            transit. Passwords are never visible to us. No system is
            perfectly secure, but we do what a small, careful team can.
          </p>

          <h2 className="text-lg font-semibold text-ink">Changes to this policy</h2>
          <p>
            If we make material changes, we&rsquo;ll update the
            &ldquo;Last updated&rdquo; date above and, where required,
            notify you inside the app before the change takes effect.
          </p>

          <h2 className="text-lg font-semibold text-ink">Contact</h2>
          <p>
            {app.name}, published by Enhancify
            <br />
            Email: {" "}
            <a className="text-ink underline" href={`mailto:${app.contactEmail}`}>
              {app.contactEmail}
            </a>
            <br />
            Website: {" "}
            <a className="text-ink underline" href={site.url}>
              {site.url.replace(/^https?:\/\//, "")}
            </a>
            <br />
            Country: {site.country}
          </p>

          <p>
            See also {" "}
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
