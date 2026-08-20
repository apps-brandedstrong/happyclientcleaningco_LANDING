import { useState } from "react";
import { FaCheckCircle, FaPhone } from "react-icons/fa";
import { SITE_CONFIG } from "@/data/siteConfig";
import { SERVICES } from "@/data/services";

export interface LeadPayload {
  name: string;
  phone: string;
  email: string;
  service: string;
  city: string;
  message: string;
  /** Honeypot anti-spam: los bots lo completan, las personas no. */
  company: string;
  source: string;
}

type Status = "idle" | "submitting" | "success" | "error";

interface LeadFormProps {
  /** "light" = sobre fondo claro (hero). "dark" = sobre fondo navy (footer). */
  tone?: "light" | "dark";
  /** Identifica de qué formulario vino el lead en el email. */
  source: string;
  submitLabel?: string;
  compact?: boolean;
}

export default function LeadForm({
  tone = "light",
  source,
  submitLabel = "Get My Free Estimate →",
  compact = false,
}: LeadFormProps) {
  const [status, setStatus] = useState<Status>("idle");

  const isDark = tone === "dark";

  const fieldClass = isDark
    ? "w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan"
    : "w-full px-4 py-3 rounded-xl border border-line bg-white text-ink placeholder-muted/60 focus:outline-none focus:ring-2 focus:ring-cta";

  const labelClass = isDark
    ? "block text-sm font-medium text-white/80 mb-1"
    : "block text-sm font-medium text-navy mb-1";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const get = (n: string) =>
      (form.elements.namedItem(n) as HTMLInputElement | null)?.value ?? "";

    const payload: LeadPayload = {
      name: get("name"),
      phone: get("phone"),
      email: get("email"),
      service: get("service"),
      city: get("city"),
      message: get("message"),
      company: get("company"),
      source,
    };

    try {
      // The public /landing URL is proxied by the main website. Submit through
      // its verified email endpoint so leads share one reliable delivery path.
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: payload.name,
          phone: payload.phone,
          email: payload.email,
          message: [
            "Landing page lead",
            `Service: ${payload.service || "Not specified"}`,
            `City: ${payload.city || "Not specified"}`,
            `Form: ${payload.source}`,
            payload.message ? `Message: ${payload.message}` : "",
          ]
            .filter(Boolean)
            .join("\n"),
        }),
      });
      setStatus(res.ok ? "success" : "error");
      if (res.ok) form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        className={`text-center p-8 rounded-2xl border ${
          isDark
            ? "bg-white/5 border-white/20"
            : "bg-cyan/10 border-cyan/40"
        }`}
      >
        <FaCheckCircle
          className={`text-5xl mx-auto mb-4 ${isDark ? "text-cyan" : "text-cta"}`}
        />
        <h3
          className={`text-xl font-bold mb-2 ${isDark ? "text-white" : "text-navy"}`}
        >
          Got it — we'll call you back shortly!
        </h3>
        <p className={isDark ? "text-white/70" : "text-muted"}>
          Thanks for reaching out. A member of our team will contact you with
          your free estimate and confirm the {SITE_CONFIG.promo.price} three-room
          special.
        </p>
        <a
          href={SITE_CONFIG.phoneHref}
          className={`inline-flex items-center gap-2 mt-5 font-bold ${
            isDark ? "text-cyan" : "text-cta"
          }`}
        >
          <FaPhone /> Need it sooner? Call {SITE_CONFIG.phone}
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {/* Honeypot — oculto para personas, visible para bots */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor={`${source}-name`} className={labelClass}>
            Full Name *
          </label>
          <input
            id={`${source}-name`}
            type="text"
            name="name"
            required
            placeholder="Jane Smith"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor={`${source}-phone`} className={labelClass}>
            Phone Number *
          </label>
          <input
            id={`${source}-phone`}
            type="tel"
            name="phone"
            required
            placeholder="(970) 000-0000"
            className={fieldClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor={`${source}-email`} className={labelClass}>
            Email *
          </label>
          <input
            id={`${source}-email`}
            type="email"
            name="email"
            required
            placeholder="you@email.com"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor={`${source}-city`} className={labelClass}>
            City
          </label>
          <select id={`${source}-city`} name="city" className={fieldClass}>
            <option value="">Select your city...</option>
            {SITE_CONFIG.cities.map((c) => (
              <option key={c} value={c} className="text-ink">
                {c}
              </option>
            ))}
            <option value="Other" className="text-ink">
              Other / Nearby
            </option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor={`${source}-service`} className={labelClass}>
          Service Needed
        </label>
        <select
          id={`${source}-service`}
          name="service"
          defaultValue="Carpet Cleaning"
          className={fieldClass}
        >
          {SERVICES.map((s) => (
            <option key={s.id} value={s.title} className="text-ink">
              {s.title}
            </option>
          ))}
          <option value="Other" className="text-ink">
            Something else
          </option>
        </select>
      </div>

      {!compact && (
        <div>
          <label htmlFor={`${source}-message`} className={labelClass}>
            Tell us about your cleaning needs (optional)
          </label>
          <textarea
            id={`${source}-message`}
            name="message"
            rows={3}
            placeholder="How many rooms? Any pet stains or spots we should know about?"
            className={`${fieldClass} resize-none`}
          />
        </div>
      )}

      {status === "error" && (
        <p
          className={`text-sm text-center ${
            isDark ? "text-red-300" : "text-red-600"
          }`}
        >
          Something went wrong. Please call us at{" "}
          <a href={SITE_CONFIG.phoneHref} className="underline font-semibold">
            {SITE_CONFIG.phone}
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full bg-cta text-white font-bold py-4 rounded-full text-lg hover:bg-navy-2 transition-colors shadow-lg cursor-pointer disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : submitLabel}
      </button>

      <p
        className={`text-center text-xs ${isDark ? "text-white/50" : "text-muted"}`}
      >
        No obligation · Free estimate · {SITE_CONFIG.promo.price} first three
        rooms
      </p>
    </form>
  );
}
