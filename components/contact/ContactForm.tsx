"use client";

import { useState, type FormEvent } from "react";
import { z } from "zod";
import { cn } from "@/lib/cn";

const schema = z.object({
  name: z.string().trim().min(2, "Your name, please."),
  email: z.string().trim().email("Enter a valid email."),
  phone: z.string().trim().optional(),
  location: z.enum(["prospect-heights", "williamsburg", "either"]),
  message: z.string().trim().min(10, "A little more detail, please."),
});

type Values = z.infer<typeof schema>;
type Errors = Partial<Record<keyof Values, string>>;
type Status = "idle" | "submitting" | "success" | "error";

const fieldLabel =
  "text-[0.625rem] uppercase tracking-[0.25em] text-[color:var(--color-ink-muted)]";
const fieldInput =
  "mt-3 w-full border-0 border-b border-[color:var(--color-line)] bg-transparent py-3 text-base text-[color:var(--color-ink)] placeholder:text-[color:var(--color-ink-muted)]/60 focus:border-[color:var(--color-accent-saffron)] focus:outline-none focus:ring-0";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [serverError, setServerError] = useState<string | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrors({});
    setServerError(null);

    const form = event.currentTarget;
    const data = new FormData(form);
    const values = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? ""),
      location: String(data.get("location") ?? ""),
      message: String(data.get("message") ?? ""),
      website: String(data.get("website") ?? ""),
    };

    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const fieldErrors: Errors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof Errors | undefined;
        if (key && !fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const json = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
      };
      if (!res.ok || !json.ok) {
        setStatus("error");
        setServerError(
          json.error ?? "Something went wrong. Please try again.",
        );
        return;
      }
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setServerError("Network issue. Please try again in a moment.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-3xl border border-[color:var(--color-line)] bg-[color:var(--color-surface-elevated)] p-10 sm:p-14">
        <p className="text-[0.625rem] uppercase tracking-[0.35em] text-[color:var(--color-accent-saffron)]">
          Thanks
        </p>
        <h2 className="font-display mt-6 text-3xl leading-tight tracking-tight sm:text-4xl">
          Your message is with us.
        </h2>
        <p className="mt-4 max-w-md text-[color:var(--color-ink-muted)]">
          We read every note. Expect a reply within a day or two — sooner if
          it&rsquo;s about a reservation or a pickup tonight.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-8 text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--color-ink)] underline decoration-[color:var(--color-accent-saffron)] decoration-1 underline-offset-[6px] hover:text-[color:var(--color-accent-saffron)]"
        >
          Send another &rarr;
        </button>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={onSubmit} className="grid gap-8">
      <div
        aria-hidden
        className="absolute -left-[9999px] h-0 w-0 overflow-hidden"
      >
        <label>
          Website
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </div>

      <div className="grid gap-8 sm:grid-cols-2">
        <label className="block">
          <span className={fieldLabel}>Name</span>
          <input
            type="text"
            name="name"
            autoComplete="name"
            required
            className={fieldInput}
            aria-invalid={errors.name ? "true" : undefined}
          />
          {errors.name ? (
            <span className="mt-2 block text-xs text-red-700">
              {errors.name}
            </span>
          ) : null}
        </label>
        <label className="block">
          <span className={fieldLabel}>Email</span>
          <input
            type="email"
            name="email"
            autoComplete="email"
            required
            className={fieldInput}
            aria-invalid={errors.email ? "true" : undefined}
          />
          {errors.email ? (
            <span className="mt-2 block text-xs text-red-700">
              {errors.email}
            </span>
          ) : null}
        </label>
      </div>

      <div className="grid gap-8 sm:grid-cols-2">
        <label className="block">
          <span className={fieldLabel}>Phone · optional</span>
          <input
            type="tel"
            name="phone"
            autoComplete="tel"
            className={fieldInput}
          />
        </label>
        <label className="block">
          <span className={fieldLabel}>Location</span>
          <select
            name="location"
            required
            defaultValue=""
            className={cn(fieldInput, "appearance-none bg-transparent")}
            aria-invalid={errors.location ? "true" : undefined}
          >
            <option value="" disabled>
              Which one?
            </option>
            <option value="prospect-heights">Prospect Heights</option>
            <option value="williamsburg">Williamsburg</option>
            <option value="either">Either / both</option>
          </select>
        </label>
      </div>

      <label className="block">
        <span className={fieldLabel}>Message</span>
        <textarea
          name="message"
          rows={6}
          required
          className={cn(fieldInput, "resize-y")}
          aria-invalid={errors.message ? "true" : undefined}
        />
        {errors.message ? (
          <span className="mt-2 block text-xs text-red-700">
            {errors.message}
          </span>
        ) : null}
      </label>

      {serverError ? (
        <p className="text-sm text-red-700" role="alert">
          {serverError}
        </p>
      ) : null}

      <div className="flex flex-wrap items-center gap-6">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[color:var(--color-accent-saffron)] px-8 text-sm font-medium tracking-wide text-[color:var(--color-surface-elevated)] transition-colors duration-200 hover:bg-[color:var(--color-accent-saffron-deep)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-accent-saffron)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-surface)] disabled:opacity-60"
        >
          {status === "submitting" ? "Sending…" : "Send message"}
          <span aria-hidden>&rarr;</span>
        </button>
        <p className="text-xs text-[color:var(--color-ink-muted)]">
          We read every note. No newsletter, no list — just a reply.
        </p>
      </div>
    </form>
  );
}
