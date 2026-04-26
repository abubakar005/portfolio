import { getEmailServiceConfig } from "@/lib/email";

export const runtime = "nodejs";

type ContactPayload = {
  name: string;
  email: string;
  company?: string;
  topic?: string;
  message: string;
  website?: string;
};

const MIN_MESSAGE_LENGTH = 20;
const MAX_MESSAGE_LENGTH = 2500;

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function sanitize(value: string) {
  return value.replace(/[\r\n]+/g, " ").trim();
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(req: Request) {
  let payload: ContactPayload;
  try {
    payload = (await req.json()) as ContactPayload;
  } catch {
    return Response.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  if (payload.website?.trim()) {
    return Response.json({ ok: true });
  }

  const name = sanitize(payload.name ?? "");
  const email = sanitize(payload.email ?? "");
  const company = sanitize(payload.company ?? "");
  const topic = sanitize(payload.topic ?? "General inquiry");
  const message = (payload.message ?? "").trim();

  if (!name || !email || !message) {
    return Response.json(
      { ok: false, error: "Please complete the required fields." },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return Response.json(
      { ok: false, error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  if (name.length > 120 || company.length > 120 || topic.length > 120) {
    return Response.json(
      { ok: false, error: "One of the fields is longer than expected." },
      { status: 400 },
    );
  }

  if (message.length < MIN_MESSAGE_LENGTH || message.length > MAX_MESSAGE_LENGTH) {
    return Response.json(
      {
        ok: false,
        error: `Please keep the message between ${MIN_MESSAGE_LENGTH} and ${MAX_MESSAGE_LENGTH} characters.`,
      },
      { status: 400 },
    );
  }

  const emailService = getEmailServiceConfig();

  if (!emailService) {
    return Response.json(
      { ok: false, error: "Email service is not configured yet." },
      { status: 500 },
    );
  }

  const subject = `Portfolio contact - ${topic} - ${name}`;

  try {
    await emailService.transporter.sendMail({
      from: emailService.from,
      to: emailService.to,
      replyTo: `${name} <${email}>`,
      subject,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company || "Not provided"}`,
        `Topic: ${topic}`,
        "",
        message,
        "",
        "- Sent from the portfolio contact form",
      ].join("\n"),
      html: `
        <div style="font-family: Arial, Helvetica, sans-serif; color: #0f172a; line-height: 1.6;">
          <h2 style="margin: 0 0 16px;">Portfolio contact message</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Company:</strong> ${escapeHtml(company || "Not provided")}</p>
          <p><strong>Topic:</strong> ${escapeHtml(topic)}</p>
          <hr style="margin: 20px 0; border: 0; border-top: 1px solid #e2e8f0;" />
          <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
        </div>
      `,
    });
  } catch {
    return Response.json(
      { ok: false, error: "The email could not be sent right now." },
      { status: 500 },
    );
  }

  return Response.json({ ok: true });
}
