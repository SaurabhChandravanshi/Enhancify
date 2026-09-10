import { Resend } from "resend";
import { contactNeeds } from "@/lib/content";
import { site } from "@/lib/site";

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

  if (String(form.get("company_url") ?? "").trim()) {
    return Response.json({ ok: true });
  }

  const name = String(form.get("name") ?? "").trim();
  const email = String(form.get("email") ?? "").trim();
  const company = String(form.get("company") ?? "").trim();
  const need = String(form.get("need") ?? "").trim();
  const message = String(form.get("message") ?? "").trim();

  if (name.length < 2 || name.length > 120) {
    return Response.json({ error: "Please enter your name." }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 200) {
    return Response.json({ error: "Please enter a valid email." }, { status: 400 });
  }

  if (company.length > 160) {
    return Response.json({ error: "Company name is too long." }, { status: 400 });
  }

  if (message.length < 10 || message.length > 5000) {
    return Response.json(
      { error: "Please write a short message about the job." },
      { status: 400 },
    );
  }

  const needLabel =
    contactNeeds.find((item) => item.value === need)?.label ??
    (need ? need : "Not specified");

  const resend = new Resend(apiKey);
  const payload = {
    from: `${site.name} <${from}>`,
    replyTo: `${name} <${email}>`,
    subject: `Enquiry from ${name} — ${needLabel}`,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company || "—"}`,
      `Need: ${needLabel}`,
      "",
      message,
    ].join("\n"),
  };

  const { error } = await resend.emails.send({
    ...payload,
    to: site.email.sales,
  });

  if (error) {
    return Response.json(
      { error: "We could not send that just now. Please email us directly." },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
