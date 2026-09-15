import { Resend } from "resend";
import { insightsHelpTopics } from "@/lib/content";
import { site } from "@/lib/site";

/**
 * POST /api/apps/insights/help
 *
 * Insights-scoped support inbox. Structurally identical to
 * `/api/contact` (validation shape, honeypot, Resend dispatch) but:
 *   - Recipient: `site.apps.insights.contactEmail` — the support inbox
 *     for the Insights mobile app — instead of `site.email.sales`. Keeps
 *     product support out of the sales queue and makes it easy to
 *     forward `[Insights]`-prefixed threads to a dedicated triage
 *     assignee later.
 *   - Subject prefix: `[Insights] Support:` so filters on the receiving
 *     side (Gmail label, Fastmail rule, Slack forwarder, …) can key on
 *     "[Insights]" without opening the message. The subject also
 *     includes the resolved topic label for at-a-glance triage.
 *   - Body prefixed with `App: Insights` so people reading the plain
 *     text (e.g. on mobile) see the app name without relying on the
 *     subject prefix.
 *
 * Anti-spam: honeypot only (matching the site contact route). If we
 * start receiving noise, add hCaptcha or a per-IP rate limit here —
 * do not weaken validation.
 */
export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL ?? "sales@mails.enhancify.in";

  if (!apiKey) {
    return Response.json(
      { error: "Email is not configured yet." },
      { status: 503 },
    );
  }

  const form = await request.formData();

  // Honeypot: any bot that dumb-fills every input trips this. Real
  // browsers won't fill `display:none` fields. Respond 200 so bots
  // don't learn we detected them.
  if (String(form.get("company_url") ?? "").trim()) {
    return Response.json({ ok: true });
  }

  const name = String(form.get("name") ?? "").trim();
  const email = String(form.get("email") ?? "").trim();
  const topicValue = String(form.get("topic") ?? "").trim();
  const message = String(form.get("message") ?? "").trim();

  if (name.length < 2 || name.length > 120) {
    return Response.json({ error: "Please enter your name." }, { status: 400 });
  }

  // Same permissive regex as /api/contact — validates shape not
  // deliverability. Resend will refuse hard bounces at send time.
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 200) {
    return Response.json(
      { error: "Please enter a valid email." },
      { status: 400 },
    );
  }

  if (message.length < 10 || message.length > 5000) {
    return Response.json(
      {
        error:
          "Please write a short message so we can help (at least 10 characters).",
      },
      { status: 400 },
    );
  }

  // Resolve label from the enum-ish list; fall back to raw value only
  // if a client sent an off-list string (older cached bundle, tampered
  // form). Never trust the label the browser might have sent.
  const topic =
    insightsHelpTopics.find((t) => t.value === topicValue) ??
    insightsHelpTopics[0];

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: `${site.apps.insights.name} Support <${from}>`,
    replyTo: `${name} <${email}>`,
    to: site.apps.insights.contactEmail,
    subject: `[${site.apps.insights.name}] Support: ${topic.label} — ${name}`,
    text: [
      `App: ${site.apps.insights.name}`,
      `Topic: ${topic.label} (${topic.value})`,
      `Name: ${name}`,
      `Email: ${email}`,
      "",
      message,
    ].join("\n"),
  });

  if (error) {
    return Response.json(
      {
        error:
          "We could not send that just now. Please email us directly at " +
          site.apps.insights.contactEmail +
          ".",
      },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
