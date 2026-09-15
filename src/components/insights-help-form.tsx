"use client";

import { useState } from "react";
import { insightsHelpTopics } from "@/lib/content";
import { site } from "@/lib/site";

/**
 * Insights-scoped contact form rendered on `/apps/insights/help`.
 *
 * Why a dedicated form (rather than reusing `<ContactForm />`):
 *   The site contact form under `/contact` targets the sales inbox
 *   (`site.email.sales`) with a `contactNeeds` dropdown biased toward
 *   agency work ("Company website", "Site rebuild", …). Insights users
 *   coming from the mobile app or Play Console need a support surface,
 *   not a sales one — different inbox (`site.apps.insights.contactEmail`),
 *   different topic list (`insightsHelpTopics`), and a distinct email
 *   subject prefix (`[Insights] Support: …`) so the receiving inbox can
 *   route/filter Insights traffic without opening every message.
 *
 * The wire shape, honeypot, submit-state pattern, and Tailwind classes
 * are lifted from `src/components/contact-form.tsx` verbatim to keep
 * the two forms visually indistinguishable. If you need to change field
 * styling, do it in both places at once.
 */

const field =
  "mt-1.5 w-full rounded-lg border border-line bg-paper px-3.5 py-2.5 text-sm text-ink outline-none transition focus:border-accent focus:ring-3 focus:ring-accent/15";

type Status = "idle" | "sending" | "sent";

export function InsightsHelpForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setStatus("sending");

    const body = new FormData(e.currentTarget);
    // Dedicated API route — see src/app/api/apps/insights/help/route.ts
    // for validation, honeypot handling, and Resend dispatch.
    const response = await fetch("/api/apps/insights/help", {
      method: "POST",
      body,
    });

    if (!response.ok) {
      let message = "We could not send that just now. Please try again.";
      try {
        const data = (await response.json()) as { error?: string };
        if (data?.error) message = data.error;
      } catch {
        // Response wasn't JSON — fall back to generic message.
      }
      setStatus("idle");
      setError(message);
      return;
    }

    setStatus("sent");
  }

  const contactEmail = site.apps.insights.contactEmail;

  if (status === "sent") {
    return (
      <div className="rounded-2xl bg-mist p-8 ring-1 ring-line">
        <p className="text-xl font-semibold text-ink">Message received.</p>
        <p className="mt-2 text-sm leading-6 text-muted">
          Thanks for writing in. We usually reply within one business day
          from {contactEmail}. If you don&rsquo;t hear back, check your
          spam folder or email us directly.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-2xl bg-paper p-6 ring-1 ring-line sm:p-8"
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="text-ink">Name</span>
          <input
            className={field}
            name="name"
            type="text"
            required
            autoComplete="name"
            minLength={2}
            maxLength={120}
          />
        </label>
        <label className="block text-sm">
          <span className="text-ink">Email</span>
          <input
            className={field}
            name="email"
            type="email"
            required
            autoComplete="email"
            maxLength={200}
          />
        </label>
      </div>

      <label className="mt-4 block text-sm">
        <span className="text-ink">What can we help with?</span>
        <select className={field} name="topic" defaultValue="general">
          {insightsHelpTopics.map((t) => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </select>
      </label>

      <label className="mt-4 block text-sm">
        <span className="text-ink">Message</span>
        <textarea
          className={field}
          name="message"
          required
          minLength={10}
          maxLength={5000}
          rows={6}
          placeholder="Tell us what happened, and include steps to reproduce if it's a bug."
        />
      </label>

      {/* Honeypot — a real user won't fill a hidden field, but naïve
          spam bots do. If populated, the API route silently 200s
          without sending. Same shape as the site contact form. */}
      <div className="hidden" aria-hidden="true">
        <input name="company_url" tabIndex={-1} autoComplete="off" />
      </div>

      {error ? (
        <p className="mt-4 text-sm text-red-700" role="alert">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 inline-flex h-11 w-full cursor-pointer items-center justify-center rounded-lg bg-ink text-sm font-semibold text-paper hover:bg-ink/90 disabled:cursor-wait disabled:opacity-70"
      >
        {status === "sending" ? "Sending…" : "Send"}
      </button>

      <p className="mt-3 text-center text-xs text-muted">
        Prefer plain email? Write to {" "}
        <a className="text-ink underline" href={`mailto:${contactEmail}`}>
          {contactEmail}
        </a>
        .
      </p>
    </form>
  );
}
