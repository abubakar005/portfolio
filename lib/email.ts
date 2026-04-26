import { siteConfig } from "@/lib/site-content";
import nodemailer from "nodemailer";

type EmailServiceConfig = {
  provider: "resend-smtp" | "smtp";
  transporter: nodemailer.Transporter;
  from: string;
  to: string;
};

function getSenderName() {
  return process.env.CONTACT_FROM_NAME || `${siteConfig.name} Portfolio`;
}

function getResendSmtpConfig(): EmailServiceConfig | null {
  const resendApiKey = process.env.RESEND_API_KEY;
  const resendFromEmail = process.env.RESEND_FROM_EMAIL || process.env.CONTACT_FROM_EMAIL;
  const contactToEmail = process.env.CONTACT_TO_EMAIL || siteConfig.email;

  if (!resendApiKey || !resendFromEmail) {
    return null;
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.resend.com",
    port: 465,
    secure: true,
    auth: {
      user: "resend",
      pass: resendApiKey,
    },
  });

  return {
    provider: "resend-smtp",
    transporter,
    from: `${getSenderName()} <${resendFromEmail}>`,
    to: contactToEmail,
  };
}

function getGenericSmtpConfig(): EmailServiceConfig | null {
  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_USER,
    SMTP_PASS,
    CONTACT_TO_EMAIL = siteConfig.email,
    CONTACT_FROM_EMAIL,
  } = process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    return null;
  }

  const port = Number(SMTP_PORT);
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number.isFinite(port) ? port : 587,
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const senderEmail = CONTACT_FROM_EMAIL || CONTACT_TO_EMAIL;

  return {
    provider: "smtp",
    transporter,
    from: `${getSenderName()} <${senderEmail}>`,
    to: CONTACT_TO_EMAIL,
  };
}

export function getEmailServiceConfig() {
  return getResendSmtpConfig() ?? getGenericSmtpConfig();
}
