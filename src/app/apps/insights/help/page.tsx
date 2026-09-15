import type { Metadata } from "next";
import Link from "next/link";
import { InsightsHelpForm } from "@/components/insights-help-form";
import { site } from "@/lib/site";

/**
 * Public help page for the Insights mobile app.
 *
 * Why this page exists:
 *   - The mobile app's Account → Help & Support screen surfaces
 *     "Help center" as an external link (see `HELP_CENTER_URL` in
 *     Insights `app/help.tsx`). That link needs a real destination.
 *   - Play Console's app listing has a "Support URL" field; pointing it
 *     at a company-wide `/contact` is fine but loses the Insights
 *     context. A dedicated `/apps/insights/help` page gives users a
 *     branded landing that's clearly about the app, and routes the
 *     form to the Insights support inbox rather than sales.
 *   - Repeating the app's FAQ here means users can self-serve without
 *     opening the app (handy when the app is broken).
 *
 * Structure mirrors the Insights policy pages (single-column article
 * shell) but with a visible contact form at the bottom instead of a
 * `mailto:` link. Form styling and wiring live in
 * `src/components/insights-help-form.tsx`.
 *
 * If we ever add substantial app-specific troubleshooting (screenshots,
 * device matrix, step-by-step recovery for stuck sign-in, etc.) this
 * is the right place to expand — keep answers user-facing and don't
 * leak implementation trivia (Firestore, Firebase Auth, etc.).
 */

const app = site.apps.insights;

/**
 * FAQ mirrored from the mobile app's `app/help.tsx` `FAQS` array. Kept
 * intentionally in sync so users see the same answers on web as in the
 * app; whenever you edit one, edit the other. (This is a small enough
 * list — a dozen items — that the duplication is cheaper than shipping
 * the mobile bundle a network call to load them.)
 */
const faqs: { q: string; a: string }[] = [
  {
    q: "What goes into my feed?",
    a: "For you blends the latest stories with items that match topics you follow (Explore). If there are not enough matches yet, we fill in with recent stories so the feed stays fresh.",
  },
  {
    q: "How do I save an article?",
    a: "Tap the bookmark icon on a story. Open Account, then Saved stories to read them again. You need an active session (guest or signed in) so saves can sync.",
  },
  {
    q: "Can I change which languages appear in my feed?",
    a: "Yes. Go to Account, open Feed language under Preferences, and pick a language for stories.",
  },
  {
    q: "How do I unfollow a topic?",
    a: "On Explore, tap Following on a topic to turn it off. You can also open Account, Followed topics, and manage the list there.",
  },
  {
    q: "What is guest mode versus signing in?",
    a: "Guest mode gives you a lightweight account so bookmarks and follows can work on this device. Signing in with email or Google adds your profile and makes it easier to use Insights across devices. Use Continue without an account on the sign-in screen if you want guest mode.",
  },
  {
    q: "What happens when I sign out?",
    a: "You leave your signed-in session completely until you open sign-in again. You are not silently switched back to guest browsing. To use the app as a guest again, open sign-in and pick Continue without an account.",
  },
  {
    q: "How do notifications work?",
    a: "Open Account, then Notifications. You can turn categories on or off. On some phones you also need to allow Insights in system Settings under Notifications.",
  },
  {
    q: "Is my data private?",
    a: "We store what we need on our servers so bookmarks, follows, and preferences stay in sync. We do not sell your personal data.",
  },
  {
    q: "Stories look empty or nothing updates. What should I try?",
    a: "Check your internet connection, wait a few seconds, switch tabs or leave and reopen the Feed. Make sure you did not stay fully logged out after sign out if you expect personalized lists. Install app updates from your store when available.",
  },
  {
    q: "How do I delete my account?",
    a: `Use the Delete account page linked below, or write to ${app.contactEmail} from the address on your ${app.name} account. We remove your profile, saved items, reading history, and push token within 30 days.`,
  },
];

export const metadata: Metadata = {
  title: `Help & support · ${app.name}`,
  description: `Frequently asked questions and support for the ${app.name} mobile app. Contact us directly if you can't find an answer.`,
  alternates: { canonical: app.helpPath },
  robots: { index: true, follow: true },
};

export default function InsightsHelpPage() {
  return (
    <div className="px-5 py-16 sm:px-6 lg:py-24">
      <article className="mx-auto max-w-3xl text-sm leading-7 text-muted">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          {app.name}
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-ink">
          Help &amp; support
        </h1>
        <p className="mt-4 text-base leading-7">
          Answers to common questions about the {app.name} mobile app.
          If you don&rsquo;t see what you need, use the form at the
          bottom of this page or email {" "}
          <a className="text-ink underline" href={`mailto:${app.contactEmail}`}>
            {app.contactEmail}
          </a>
          .
        </p>

        <section className="mt-10 space-y-6">
          <h2 className="text-lg font-semibold text-ink">
            Frequently asked
          </h2>
          <div className="divide-y divide-line rounded-2xl bg-paper ring-1 ring-line">
            {faqs.map((f) => (
              // Using native <details> means no client JS is needed for
              // expand/collapse — the page stays a Server Component and
              // ships zero bundle for the FAQ section.
              <details key={f.q} className="group px-5 py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-medium text-ink [&::-webkit-details-marker]:hidden">
                  <span>{f.q}</span>
                  <span
                    aria-hidden="true"
                    className="text-lg leading-none text-muted transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-6 text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-12 space-y-4">
          <h2 className="text-lg font-semibold text-ink">Related pages</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <Link
                href={app.accountDeletionPath}
                className="text-ink underline"
              >
                Delete your {app.name} account
              </Link>
            </li>
            <li>
              <Link
                href="/apps/insights/policies/privacy"
                className="text-ink underline"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/apps/insights/policies/terms"
                className="text-ink underline"
              >
                Terms of Use
              </Link>
            </li>
          </ul>
        </section>

        <section id="contact" className="mt-14">
          <h2 className="text-lg font-semibold text-ink">Contact us</h2>
          <p className="mt-2">
            We usually reply within one business day. For account
            deletion requests, please use the {" "}
            <Link
              href={app.accountDeletionPath}
              className="text-ink underline"
            >
              account deletion
            </Link>
            {" "}page for the fastest turnaround.
          </p>

          <div className="mt-6">
            <InsightsHelpForm />
          </div>
        </section>
      </article>
    </div>
  );
}
