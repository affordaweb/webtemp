"use client";

import { useState } from "react";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const body = `Name: ${form.name}%0D%0AEmail: ${form.email}%0D%0ASubject: ${form.subject}%0D%0A%0D%0A${form.message}`;
    window.location.href = `mailto:hello@affordawebsolutions.com?subject=${encodeURIComponent(form.subject || "Website Enquiry")}&body=${body}`;
    setSubmitted(true);
  }

  if (submitted) {
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
          Your email client should have opened. If not, email us directly at{" "}
          <a href="mailto:hello@affordawebsolutions.com" style={{ color: "#111111", fontWeight: 600 }}>
            hello@affordawebsolutions.com
          </a>
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

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
      <div>
        <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, marginBottom: "0.4rem", color: "var(--text)" }}>
          Your Name *
        </label>
        <input
          type="text"
          name="name"
          required
          placeholder="Jane Smith"
          value={form.name}
          onChange={handleChange}
          style={inputStyle}
        />
      </div>
      <div>
        <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, marginBottom: "0.4rem", color: "var(--text)" }}>
          Email Address *
        </label>
        <input
          type="email"
          name="email"
          required
          placeholder="jane@example.com"
          value={form.email}
          onChange={handleChange}
          style={inputStyle}
        />
      </div>
      <div>
        <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, marginBottom: "0.4rem", color: "var(--text)" }}>
          Subject
        </label>
        <input
          type="text"
          name="subject"
          placeholder="Website enquiry"
          value={form.subject}
          onChange={handleChange}
          style={inputStyle}
        />
      </div>
      <div>
        <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, marginBottom: "0.4rem", color: "var(--text)" }}>
          Message *
        </label>
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
      <button
        type="submit"
        className="btn-primary"
        style={{ alignSelf: "flex-start", cursor: "pointer", border: "none" }}
      >
        Send Message →
      </button>
    </form>
  );
}
