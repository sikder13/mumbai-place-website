import { Resend } from "resend";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(200),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  location: z.enum(["prospect-heights", "williamsburg", "either"]),
  message: z.string().trim().min(10).max(4000),
  website: z.string().max(0).optional().or(z.literal("")),
});

const locationLabel = {
  "prospect-heights": "Prospect Heights",
  williamsburg: "Williamsburg",
  either: "No preference",
} as const;

export async function POST(request: Request) {
  const to = process.env.CONTACT_TO;
  const apiKey = process.env.RESEND_API_KEY;
  const from =
    process.env.CONTACT_FROM ??
    "Mumbai Place Website <onboarding@resend.dev>";

  if (!to || !apiKey) {
    return Response.json(
      { ok: false, error: "Contact form is not configured yet." },
      { status: 503 },
    );
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return Response.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 },
    );
  }

  const parsed = schema.safeParse(payload);
  if (!parsed.success) {
    return Response.json(
      { ok: false, error: "Please check the form and try again." },
      { status: 400 },
    );
  }

  const data = parsed.data;

  if (data.website) {
    return Response.json({ ok: true });
  }

  const subject = `New message from ${data.name} — ${locationLabel[data.location]}`;
  const phoneRow = data.phone
    ? `<tr><td style="padding:8px 0;color:#5e574f;width:120px;">Phone</td><td style="padding:8px 0;">${escapeHtml(data.phone)}</td></tr>`
    : "";

  const html = `<!DOCTYPE html>
<html>
  <body style="margin:0;padding:24px;background:#f6f4ef;font-family:-apple-system,Segoe UI,sans-serif;color:#1a1714;">
    <div style="max-width:560px;margin:0 auto;background:#fffdf8;border:1px solid rgba(26,23,20,0.08);border-radius:12px;padding:32px;">
      <p style="margin:0;font-size:11px;letter-spacing:0.25em;text-transform:uppercase;color:#c4a875;">Mumbai Place — Contact Form</p>
      <h2 style="margin:16px 0 24px;font-size:22px;line-height:1.2;">New message from the website</h2>
      <table style="width:100%;border-collapse:collapse;font-size:14px;">
        <tr><td style="padding:8px 0;color:#5e574f;width:120px;">Name</td><td style="padding:8px 0;">${escapeHtml(data.name)}</td></tr>
        <tr><td style="padding:8px 0;color:#5e574f;">Email</td><td style="padding:8px 0;"><a style="color:#c4a875;" href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></td></tr>
        ${phoneRow}
        <tr><td style="padding:8px 0;color:#5e574f;">Location</td><td style="padding:8px 0;">${escapeHtml(locationLabel[data.location])}</td></tr>
      </table>
      <div style="margin-top:24px;padding-top:20px;border-top:1px solid rgba(26,23,20,0.08);">
        <p style="margin:0 0 8px;font-size:11px;letter-spacing:0.25em;text-transform:uppercase;color:#5e574f;">Message</p>
        <p style="margin:0;white-space:pre-wrap;line-height:1.65;font-size:15px;">${escapeHtml(data.message)}</p>
      </div>
      <p style="margin-top:28px;font-size:12px;color:#5e574f;">Reply directly to this email to reach ${escapeHtml(data.name)}.</p>
    </div>
  </body>
</html>`;

  const resend = new Resend(apiKey);
  try {
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: data.email,
      subject,
      html,
    });
    if (error) {
      console.error("Resend send error", error);
      return Response.json(
        { ok: false, error: "Couldn't send right now. Please try again." },
        { status: 502 },
      );
    }
  } catch (error) {
    console.error("Resend exception", error);
    return Response.json(
      { ok: false, error: "Couldn't send right now. Please try again." },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}

function escapeHtml(input: string): string {
  return input.replace(/[&<>"']/g, (c) => {
    switch (c) {
      case "&":
        return "&amp;";
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case '"':
        return "&quot;";
      case "'":
        return "&#39;";
      default:
        return c;
    }
  });
}
