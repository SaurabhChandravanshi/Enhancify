"use client";

import { useState } from "react";
import { site } from "@/lib/site";

const field =
  "mt-1.5 w-full rounded-lg border border-line bg-paper px-3.5 py-2.5 text-sm text-ink outline-none transition focus:border-accent focus:ring-3 focus:ring-accent/15";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 700));
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl bg-mist p-8 ring-1 ring-line">
        <p className="text-xl font-semibold text-ink">Received.</p>
        <p className="mt-2 text-sm leading-6 text-muted">
          <p className="mt-2 text-sm leading-6 text-muted">
            We typically reply within one business day at {site.email.support} or{" "}
            {site.email.sales}.
          </p>
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
          Channel or company
          <input name="company" autoComplete="organization" className={field} />
        </label>
        <label className="text-sm font-medium text-ink sm:col-span-2">
          Message
          <textarea name="message" required rows={5} className={field} />
        </label>
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 inline-flex h-11 w-full items-center justify-center rounded-lg bg-ink text-sm font-semibold text-paper hover:bg-ink/90 disabled:opacity-70"
      >
        {status === "sending" ? "Sending…" : "Send"}
      </button>
    </form>
  );
}
