"use client";

import { contactTopics, siteConfig, siteContent } from "@/lib/site-content";
import Link from "next/link";
import type { FormEvent } from "react";
import { useMemo, useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

type FormValues = {
  name: string;
  email: string;
  company: string;
  topic: string;
  message: string;
  website: string;
};

const MIN_MESSAGE_LENGTH = 20;
const MAX_MESSAGE_LENGTH = 2500;

const initialValues: FormValues = {
  name: "",
  email: "",
  company: "",
  topic: contactTopics[0],
  message: "",
  website: "",
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [values, setValues] = useState<FormValues>(initialValues);
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);

  const validation = useMemo(() => {
    const issues: Partial<Record<keyof FormValues, string>> = {};
    const trimmedName = values.name.trim();
    const trimmedEmail = values.email.trim();
    const trimmedMessage = values.message.trim();

    if (!trimmedName) {
      issues.name = siteContent.contact.form.validation.nameRequired;
    } else if (trimmedName.length < 2) {
      issues.name = siteContent.contact.form.validation.nameShort;
    }

    if (!trimmedEmail) {
      issues.email = siteContent.contact.form.validation.emailRequired;
    } else if (!isValidEmail(trimmedEmail)) {
      issues.email = siteContent.contact.form.validation.emailInvalid;
    }

    if (!trimmedMessage) {
      issues.message = siteContent.contact.form.validation.messageRequired;
    } else if (trimmedMessage.length < MIN_MESSAGE_LENGTH) {
      issues.message = siteContent.contact.form.validation.messageShort;
    } else if (trimmedMessage.length > MAX_MESSAGE_LENGTH) {
      issues.message = siteContent.contact.form.validation.messageLong.replace(
        "{count}",
        String(MAX_MESSAGE_LENGTH),
      );
    }

    return issues;
  }, [values]);

  const visibleValidation = attemptedSubmit ? validation : {};
  const messageLength = values.message.trim().length;

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") {
      return;
    }

    setAttemptedSubmit(true);

    if (values.website.trim()) {
      setStatus("success");
      setError(null);
      setAttemptedSubmit(false);
      setValues(initialValues);
      return;
    }

    if (Object.keys(validation).length > 0) {
      setStatus("error");
      setError(siteContent.contact.form.validation.fixFields);
      return;
    }

    setStatus("submitting");
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = (await response.json().catch(() => null)) as
        | { ok: boolean; error?: string }
        | null;

      if (!response.ok || !data?.ok) {
        setStatus("error");
        setError(data?.error || siteContent.contact.form.errorFallback);
        return;
      }

      setStatus("success");
      setAttemptedSubmit(false);
      setValues(initialValues);
    } catch {
      setStatus("error");
      setError(siteContent.contact.form.errorFallback);
    }
  }

  function update<K extends keyof FormValues>(key: K, value: FormValues[K]) {
    setValues((current) => ({ ...current, [key]: value }));
    if (status !== "idle") {
      setStatus("idle");
      setError(null);
    }
  }

  return (
    <form className="space-y-5" onSubmit={onSubmit} noValidate>
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-[color:var(--foreground)]"
          >
            {siteContent.contact.form.labels.name}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder={siteContent.contact.form.placeholders.name}
            value={values.name}
            onChange={(event) => update("name", event.target.value)}
            aria-invalid={attemptedSubmit && Boolean(visibleValidation.name)}
            aria-describedby={visibleValidation.name ? "name-error" : undefined}
            className="w-full rounded-2xl border border-[color:var(--border)] bg-white/90 px-4 py-3 text-[color:var(--foreground)] outline-none transition-all duration-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 dark:bg-slate-950/70"
          />
          {visibleValidation.name ? (
            <p id="name-error" className="mt-2 text-sm text-rose-600 dark:text-rose-300">
              {visibleValidation.name}
            </p>
          ) : null}
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-[color:var(--foreground)]"
          >
            {siteContent.contact.form.labels.email}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder={siteContent.contact.form.placeholders.email}
            value={values.email}
            onChange={(event) => update("email", event.target.value)}
            aria-invalid={attemptedSubmit && Boolean(visibleValidation.email)}
            aria-describedby={visibleValidation.email ? "email-error" : undefined}
            className="w-full rounded-2xl border border-[color:var(--border)] bg-white/90 px-4 py-3 text-[color:var(--foreground)] outline-none transition-all duration-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 dark:bg-slate-950/70"
          />
          {visibleValidation.email ? (
            <p id="email-error" className="mt-2 text-sm text-rose-600 dark:text-rose-300">
              {visibleValidation.email}
            </p>
          ) : null}
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-[1fr_0.9fr]">
        <div>
          <label
            htmlFor="company"
            className="mb-2 block text-sm font-medium text-[color:var(--foreground)]"
          >
            {siteContent.contact.form.labels.company}{" "}
            <span className="text-[color:var(--muted)]">{siteContent.contact.form.optionalLabel}</span>
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            placeholder={siteContent.contact.form.placeholders.company}
            value={values.company}
            onChange={(event) => update("company", event.target.value)}
            className="w-full rounded-2xl border border-[color:var(--border)] bg-white/90 px-4 py-3 text-[color:var(--foreground)] outline-none transition-all duration-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 dark:bg-slate-950/70"
          />
        </div>

        <div>
          <label
            htmlFor="topic"
            className="mb-2 block text-sm font-medium text-[color:var(--foreground)]"
          >
            {siteContent.contact.form.labels.topic}
          </label>
          <select
            id="topic"
            name="topic"
            value={values.topic}
            onChange={(event) => update("topic", event.target.value)}
            className="w-full rounded-2xl border border-[color:var(--border)] bg-white/90 px-4 py-3 text-[color:var(--foreground)] outline-none transition-all duration-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 dark:bg-slate-950/70"
          >
            {contactTopics.map((topic) => (
              <option key={topic}>{topic}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          autoComplete="off"
          tabIndex={-1}
          value={values.website}
          onChange={(event) => update("website", event.target.value)}
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-[color:var(--foreground)]"
        >
          {siteContent.contact.form.labels.message}
        </label>
        <textarea
          id="message"
          name="message"
          placeholder={siteContent.contact.form.placeholders.message}
          rows={7}
          maxLength={MAX_MESSAGE_LENGTH}
          value={values.message}
          onChange={(event) => update("message", event.target.value)}
          aria-invalid={attemptedSubmit && Boolean(visibleValidation.message)}
          aria-describedby={visibleValidation.message ? "message-error" : "message-help"}
          className="w-full rounded-3xl border border-[color:var(--border)] bg-white/90 px-4 py-3 text-[color:var(--foreground)] outline-none transition-all duration-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 dark:bg-slate-950/70"
        />
        <div className="mt-2 flex flex-wrap items-center justify-between gap-2 text-sm text-[color:var(--muted)]">
          <p id="message-help">{siteContent.contact.form.helpText}</p>
          <span>
            {messageLength} / {MAX_MESSAGE_LENGTH}
          </span>
        </div>
        {visibleValidation.message ? (
          <p id="message-error" className="mt-2 text-sm text-rose-600 dark:text-rose-300">
            {visibleValidation.message}
          </p>
        ) : null}
      </div>

      {status === "success" ? (
        <div
          className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800 dark:border-emerald-900/40 dark:bg-emerald-950/40 dark:text-emerald-200"
          role="status"
          aria-live="polite"
        >
          {siteContent.contact.form.successMessage}
        </div>
      ) : null}

      {status === "error" && error ? (
        <div
          className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-800 dark:border-rose-900/40 dark:bg-rose-950/40 dark:text-rose-200"
          role="alert"
        >
          {error} {siteContent.ui.buttons.emailFallbackPrefix}{" "}
          <Link href={`mailto:${siteConfig.email}`} className="font-semibold underline">
            {siteConfig.email}
          </Link>
          .
        </div>
      ) : null}

      <div className="flex flex-wrap items-center gap-4">
        <button type="submit" disabled={status === "submitting"} className="button-primary inline-flex">
          {status === "submitting"
            ? siteContent.ui.buttons.sendingMessage
            : siteContent.ui.buttons.sendMessage}
        </button>
        <p className="text-sm text-[color:var(--muted)]">
          {siteContent.ui.buttons.emailFallbackPrefix}{" "}
          <Link
            href={`mailto:${siteConfig.email}`}
            className="font-semibold text-[color:var(--foreground)] underline-offset-4 hover:underline"
          >
            {siteConfig.email}
          </Link>
          .
        </p>
      </div>
    </form>
  );
}
