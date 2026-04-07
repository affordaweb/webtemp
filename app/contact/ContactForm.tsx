"use client";

import { useRef, useState } from "react";
import { Turnstile } from "@marsidev/react-turnstile";

const SITE_KEY = "0x4AAAAAAC1lSHlu20YXRijk";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const turnstileRef = useRef<{ reset: () => void }>(null);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!turnstileToken) {
      setErrorMsg("Please complete the verification.");
      return;
    }
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, turnstileToken, _honeypot: "" }),
      });
      const data = await res.json() as { ok?: boolean; error?: string };
      if (res.ok && data.ok) {
        setStatus("success");
      } else {
        setErrorMsg(data.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        turnstileRef.current?.reset();
        setTurnstileToken(null);
      }
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
      turnstileRef.current?.reset();
      setTurnstileToken(null);
    }
  }

  if (status === "success") {
    return (
      <div
        style={{
          background: "var(--surface)",
          border: "1.5px solid var(--border)",
          borderRadius: "1rem",
          padding: "3rem 2rem",
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>✓</div>
        <h3 style={{ fontSize: "1.2rem", fontWeight: 800, marginBottom: "0.5rem" }}>Message Sent!</h3>
        <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.6 }}>
          We&apos;ll get back to you within 24–48 hours. Check your inbox for a confirmation.
        </p>
      </div>
    );
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "0.75rem 1rem",
    border: "1.5px solid var(--border)",
    borderRadius: "0.5rem",
    fontSize: "0.95rem",
    background: "var(--bg)",
    color: "var(--text)",
    outline: "none",
    boxSizing: "border-box",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "0.85rem",
    fontWeight: 700,
    marginBottom: "0.4rem",
    color: "var(--text)",
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
      {/* Honeypot — hidden from real users */}
      <input type="text" name="_honeypot" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

      <div>
        <label style={labelStyle}>Your Name *</label>
        <input type="text" name="name" required placeholder="Jane Smith" value={form.name} onChange={handleChange} style={inputStyle} />
      </div>
      <div>
        <label style={labelStyle}>Email Address *</label>
        <input type="email" name="email" required placeholder="jane@example.com" value={form.email} onChange={handleChange} style={inputStyle} />
      </div>
      <div>
        <label style={labelStyle}>Subject</label>
        <input type="text" name="subject" placeholder="Website enquiry" value={form.subject} onChange={handleChange} style={inputStyle} />
      </div>
      <div>
        <label style={labelStyle}>Message *</label>
        <textarea
          name="message"
          required
          placeholder="Tell us about your project or question..."
          value={form.message}
          onChange={handleChange}
          rows={6}
          style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
        />
      </div>

      {/* Cloudflare Turnstile */}
      <Turnstile
        ref={turnstileRef}
        siteKey={SITE_KEY}
        onSuccess={(token) => setTurnstileToken(token)}
        onError={() => { setTurnstileToken(null); }}
        onExpire={() => { setTurnstileToken(null); }}
      />

      {errorMsg && (
        <p style={{ color: "#dc2626", fontSize: "0.88rem", margin: 0 }}>{errorMsg}</p>
      )}

      <button
        type="submit"
        className="btn-primary"
        disabled={status === "loading" || !turnstileToken}
        style={{ alignSelf: "flex-start", cursor: status === "loading" ? "wait" : "pointer", border: "none", opacity: !turnstileToken ? 0.6 : 1 }}
      >
        {status === "loading" ? "Sending…" : "Send Message →"}
      </button>
    </form>
  );
}
