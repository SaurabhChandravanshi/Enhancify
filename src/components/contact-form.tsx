"use client";

import { useState } from "react";
import { contactNeeds } from "@/lib/content";
import { site } from "@/lib/site";

const field =
  "mt-1.5 w-full rounded-lg border border-line bg-paper px-3.5 py-2.5 text-sm text-ink outline-none transition focus:border-accent focus:ring-3 focus:ring-accent/15";

export function ContactForm({ defaultNeed = "" }: { defaultNeed?: string }) {
  const initialNeed = contactNeeds.some((item) => item.value === defaultNeed)
    ? defaultNeed
    : "";
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setStatus("sending");

    const body = new FormData(e.currentTarget);
    const response = await fetch("/api/contact", { method: "POST", body });
    const payload = (await response.json().catch(() => null)) as
      | { error?: string }
      | null;

    if (!response.ok) {
      setStatus("idle");
      setError(
        payload?.error ??
          "We could not send that just now. Please email us directly.",
      );
      return;
    }

    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl bg-mist p-8 ring-1 ring-line">
        <p className="text-xl font-semibold text-ink">Received.</p>
        <p className="mt-2 text-sm leading-6 text-muted">
          We typically reply within one business day at {site.email.sales}.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl bg-paper p-6 ring-1 ring-line sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-medium text-ink">
          Name
          <input name="name" required autoComplete="name" className={field} />
        </label>
        <label className="text-sm font-medium text-ink">
          Email
          <input name="email" type="email" required autoComplete="email" className={field} />
        </label>
        <label className="text-sm font-medium text-ink sm:col-span-2">
          Company
          <input name="company" autoComplete="organization" className={field} />
        </label>
        <div className="hidden" aria-hidden="true">
          <input name="company_url" tabIndex={-1} autoComplete="off" />
        </div>
        <label className="text-sm font-medium text-ink sm:col-span-2">
          What do you need
          <select name="need" defaultValue={initialNeed} className={field}>
            <option value="">Select…</option>
            {contactNeeds.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </label>
        <label className="text-sm font-medium text-ink sm:col-span-2">
          Message
          <textarea name="message" required minLength={10} rows={5} className={field} />
        </label>
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
    </form>
  );
}
