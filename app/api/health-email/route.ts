import { getEmailServiceConfig } from "@/lib/email";

export const runtime = "nodejs";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const token = searchParams.get("token");

  if (!token || token !== process.env.HEALTHCHECK_TOKEN) {
    return Response.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  const emailService = getEmailServiceConfig();

  if (!emailService) {
    return Response.json(
      { ok: false, error: "Email service not configured" },
      { status: 500 },
    );
  }

  try {
    await emailService.transporter.sendMail({
      from: emailService.from,
      to: emailService.to,
      subject: "Portfolio Email Health Check",
      text: `Health check successful at ${new Date().toISOString()}`,
    });
  } catch {
    return Response.json(
      { ok: false, error: "Failed to send health email" },
      { status: 500 },
    );
  }

  return Response.json({ ok: true, message: "Health email sent." });
}
