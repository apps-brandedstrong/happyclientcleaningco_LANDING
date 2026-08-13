import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

/**
 * Destinatarios de cada lead.
 * Se pueden sobreescribir con la env var LEAD_RECIPIENTS (separados por coma).
 */
const DEFAULT_RECIPIENTS = [
  "happyclientcleaning@gmail.com", // cliente
  "info@happyclientcleaningco.com", // corporativo
  "dalila@latinbranding.com", // Latin Branding
];

function getRecipients(): string[] {
  const fromEnv = process.env.LEAD_RECIPIENTS;
  if (!fromEnv) return DEFAULT_RECIPIENTS;
  return fromEnv
    .split(",")
    .map((e) => e.trim())
    .filter(Boolean);
}

/** Escapa HTML para que el contenido del lead no rompa ni inyecte el email. */
function esc(value: unknown): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** Quita saltos de línea para campos que van en el asunto. */
function oneLine(value: unknown, max = 120): string {
  return String(value ?? "")
    .replace(/[\r\n]+/g, " ")
    .trim()
    .slice(0, max);
}

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return res.status(500).json({ error: "Email service not configured" });
  }

  const body = (typeof req.body === "string" ? JSON.parse(req.body) : req.body) ?? {};
  const {
    name = "",
    phone = "",
    email = "",
    service = "",
    city = "",
    message = "",
    company = "",
    source = "unknown",
  } = body as Record<string, string>;

  // Honeypot: si viene relleno es un bot. Respondemos 200 para no darle pistas.
  if (company.trim()) {
    return res.status(200).json({ ok: true });
  }

  if (!name.trim() || !phone.trim()) {
    return res.status(400).json({ error: "Name and phone are required" });
  }

  const leadEmail = email.trim();
  const submittedAt = new Date().toLocaleString("en-US", {
    timeZone: "America/Denver",
    dateStyle: "full",
    timeStyle: "short",
  });

  const rows: [string, string][] = [
    ["Name", name],
    ["Phone", phone],
    ["Email", leadEmail || "—"],
    ["City", city || "—"],
    ["Service", service || "—"],
    ["Message", message || "—"],
    ["Form", source],
    ["Submitted", submittedAt],
  ];

  const html = `
  <div style="font-family:Montserrat,Arial,Helvetica,sans-serif;background:#f2f8fc;padding:24px">
    <div style="max-width:600px;margin:0 auto;background:#fff;border-radius:16px;overflow:hidden;border:1px solid #dbe7f2">
      <div style="background:#16305f;padding:24px">
        <p style="margin:0;color:#06c2e2;font-size:12px;letter-spacing:.18em;text-transform:uppercase;font-weight:700">
          New lead — Landing Page
        </p>
        <h1 style="margin:8px 0 0;color:#fff;font-size:22px">Happy Client Cleaning</h1>
      </div>
      <table style="width:100%;border-collapse:collapse">
        ${rows
          .map(
            ([label, value], i) => `
          <tr style="background:${i % 2 ? "#f2f8fc" : "#ffffff"}">
            <td style="padding:12px 16px;font-size:13px;color:#5c6a7a;width:130px;vertical-align:top;border-bottom:1px solid #dbe7f2">${esc(
              label
            )}</td>
            <td style="padding:12px 16px;font-size:14px;color:#16202c;font-weight:600;border-bottom:1px solid #dbe7f2">${esc(
              value
            ).replace(/\n/g, "<br>")}</td>
          </tr>`
          )
          .join("")}
      </table>
      <div style="padding:20px 16px;background:#ffffff">
        <a href="tel:${esc(phone.replace(/[^\d+]/g, ""))}"
           style="display:inline-block;background:#1c6fd0;color:#fff;text-decoration:none;font-weight:700;padding:12px 22px;border-radius:999px">
          Call ${esc(name)} back
        </a>
      </div>
      <div style="padding:14px 16px;background:#f2f8fc;border-top:1px solid #dbe7f2">
        <p style="margin:0;font-size:11px;color:#5c6a7a">
          Sent automatically from the Happy Client Cleaning ads landing page.
        </p>
      </div>
    </div>
  </div>`;

  const text = rows.map(([l, v]) => `${l}: ${v}`).join("\n");

  try {
    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({
      from:
        process.env.RESEND_FROM ||
        "Happy Client Landing <onboarding@resend.dev>",
      to: getRecipients(),
      replyTo: isEmail(leadEmail) ? leadEmail : undefined,
      subject: `New lead — ${oneLine(name, 60)} · ${oneLine(
        service || "Cleaning",
        40
      )}${city ? ` · ${oneLine(city, 30)}` : ""}`,
      html,
      text,
    });

    if (error) {
      console.error("Resend error:", error);
      return res.status(502).json({ error: "Could not send the email" });
    }

    return res.status(200).json({ ok: true, id: data?.id });
  } catch (err) {
    console.error("Unexpected error sending lead:", err);
    return res.status(500).json({ error: "Unexpected error" });
  }
}
