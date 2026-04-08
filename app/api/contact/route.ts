import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// ── Turnstile verification ────────────────────────────────────────────────────
async function verifyTurnstile(token: string): Promise<boolean> {
  const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      secret: process.env.TURNSTILE_SECRET_KEY,
      response: token,
    }),
  });
  const data = await res.json() as { success: boolean };
  return data.success === true;
}

// ── Rate limiting ─────────────────────────────────────────────────────────────
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }
  if (entry.count >= RATE_LIMIT_MAX) return true;
  entry.count++;
  return false;
}

// ── Email helpers ─────────────────────────────────────────────────────────────
function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function adminEmailHtml(name: string, email: string, subject: string, message: string) {
  const date = new Date().toLocaleDateString("en-US", {
    weekday: "long", year: "numeric", month: "long", day: "numeric",
  });
  return `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"/></head>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:40px 16px;">
    <tr><td align="center">
      <table width="100%" cellpadding="0" cellspacing="0" style="max-width:580px;">
        <tr><td style="background:#111111;border-radius:16px 16px 0 0;padding:32px 40px;text-align:center;">
          <p style="margin:0 0 4px;font-size:11px;color:rgba(255,255,255,0.6);letter-spacing:0.12em;text-transform:uppercase;">New message from</p>
          <p style="margin:0;font-size:22px;font-weight:700;color:#fff;">AffordaWeb Solutions</p>
          <p style="margin:10px 0 0;display:inline-block;background:rgba(255,255,255,0.12);border:1px solid rgba(255,255,255,0.2);color:rgba(255,255,255,0.85);font-size:11px;padding:4px 14px;border-radius:100px;">Contact Form Submission</p>
        </td></tr>
        <tr><td style="background:#fff;padding:36px 40px;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8f8f8;border-radius:10px;padding:18px 22px;border:1px solid #e5e7eb;margin-bottom:24px;">
            <tr><td>
              <p style="margin:0 0 4px;font-size:11px;color:#9ca3af;text-transform:uppercase;letter-spacing:0.08em;font-weight:600;">From</p>
              <p style="margin:0;font-size:17px;font-weight:700;color:#111111;">${escapeHtml(name)}</p>
              <p style="margin:4px 0 0;font-size:14px;"><a href="mailto:${escapeHtml(email)}" style="color:#111111;text-decoration:none;">${escapeHtml(email)}</a></p>
            </td></tr>
          </table>
          <p style="margin:0 0 6px;font-size:11px;color:#9ca3af;text-transform:uppercase;letter-spacing:0.08em;font-weight:600;">Subject</p>
          <p style="margin:0 0 20px;font-size:15px;font-weight:600;color:#111111;">${escapeHtml(subject || "(no subject)")}</p>
          <p style="margin:0 0 6px;font-size:11px;color:#9ca3af;text-transform:uppercase;letter-spacing:0.08em;font-weight:600;">Message</p>
          <div style="background:#f8f8f8;border-left:3px solid #111111;border-radius:0 8px 8px 0;padding:18px 22px;margin-bottom:28px;">
            <p style="margin:0;font-size:15px;line-height:1.75;color:#374151;white-space:pre-wrap;">${escapeHtml(message)}</p>
          </div>
          <table width="100%" cellpadding="0" cellspacing="0"><tr><td align="center">
            <a href="mailto:${escapeHtml(email)}?subject=Re: ${escapeHtml(subject || "your message")}" style="display:inline-block;background:#111111;color:#fff;text-decoration:none;font-size:14px;font-weight:600;padding:13px 36px;border-radius:100px;">Reply to ${escapeHtml(name)}</a>
          </td></tr></table>
        </td></tr>
        <tr><td style="background:#1a1a1a;border-radius:0 0 16px 16px;padding:20px 40px;text-align:center;">
          <p style="margin:0 0 3px;font-size:13px;color:#fff;font-weight:600;">AffordaWeb Solutions</p>
          <p style="margin:0;font-size:11px;color:#666;">Received on ${date}</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`;
}

function confirmationEmailHtml(name: string) {
  return `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"/></head>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:40px 16px;">
    <tr><td align="center">
      <table width="100%" cellpadding="0" cellspacing="0" style="max-width:540px;">
        <tr><td style="background:#111111;border-radius:16px 16px 0 0;padding:40px;text-align:center;">
          <div style="width:56px;height:56px;background:rgba(255,255,255,0.15);border:2px solid rgba(255,255,255,0.3);border-radius:50%;display:inline-block;line-height:56px;margin-bottom:14px;">
            <span style="color:#fff;font-size:22px;">✓</span>
          </div>
          <h1 style="margin:0 0 6px;font-size:22px;font-weight:700;color:#fff;">Message Received!</h1>
          <p style="margin:0;font-size:14px;color:rgba(255,255,255,0.75);">AffordaWeb Solutions</p>
        </td></tr>
        <tr><td style="background:#fff;padding:36px 40px;">
          <p style="margin:0 0 14px;font-size:16px;font-weight:600;color:#111111;">Hi ${escapeHtml(name)},</p>
          <p style="margin:0 0 14px;font-size:15px;line-height:1.75;color:#4b5563;">Thanks for reaching out! We&rsquo;ve received your message and will get back to you within <strong style="color:#111111;">24–48 hours</strong>.</p>
          <p style="margin:0;font-size:13px;color:#9ca3af;line-height:1.6;">If your matter is urgent, reply directly to this email or use the contact details on our website.</p>
        </td></tr>
        <tr><td style="background:#1a1a1a;border-radius:0 0 16px 16px;padding:20px 40px;text-align:center;">
          <p style="margin:0 0 3px;font-size:13px;color:#fff;font-weight:600;">AffordaWeb Solutions</p>
          <p style="margin:0;font-size:11px;color:#666;">Powered by AffordaWeb</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`;
}

// ── POST handler ──────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please wait before submitting again." },
      { status: 429 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const { name, email, subject, message, _honeypot, turnstileToken } =
    body as Record<string, string>;

  // Honeypot — silent reject
  if (_honeypot) {
    return NextResponse.json({ ok: true });
  }

  // Turnstile verification
  if (process.env.TURNSTILE_SECRET_KEY) {
    if (!turnstileToken) {
      return NextResponse.json({ error: "Missing verification token" }, { status: 400 });
    }
    const valid = await verifyTurnstile(turnstileToken);
    if (!valid) {
      return NextResponse.json({ error: "Verification failed. Please try again." }, { status: 403 });
    }
  }

  // Validate required fields
  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json({ error: "Name, email, and message are required." }, { status: 422 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 422 });
  }

  const toEmail = process.env.TO_EMAIL ?? "support@affordawebsolutions.com";
  const from = process.env.FROM_EMAIL ?? "AffordaWeb Solutions <support@affordawebsolutions.com>";

  const resend = new Resend(process.env.RESEND_API_KEY);

  const [{ error }] = await Promise.all([
    resend.emails.send({
      from,
      to: toEmail,
      replyTo: email,
      subject: `Contact: ${subject || "New message"} — ${name}`,
      html: adminEmailHtml(name, email, subject, message),
    }),
    resend.emails.send({
      from,
      to: email,
      subject: "We received your message — AffordaWeb Solutions",
      html: confirmationEmailHtml(name),
    }),
  ]);

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Failed to send. Please try again." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
