"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const INDUSTRIES = [
  "Restaurant / Food",
  "Retail / E-commerce",
  "Health & Wellness",
  "Real Estate",
  "Photography",
  "Construction / Trades",
  "Legal / Finance",
  "Non-profit",
  "Tech / SaaS",
  "Other",
];

const PAGES_OPTIONS = [
  "Home",
  "About",
  "Services",
  "Portfolio / Gallery",
  "Blog",
  "Contact",
  "Pricing",
  "FAQ",
  "Team",
  "Testimonials",
];

const COLORS = [
  { label: "Purple", value: "purple", hex: "#5636D1" },
  { label: "Blue", value: "blue", hex: "#2563EB" },
  { label: "Green", value: "green", hex: "#16A34A" },
  { label: "Red", value: "red", hex: "#DC2626" },
  { label: "Orange", value: "orange", hex: "#EA580C" },
  { label: "Pink", value: "pink", hex: "#E2498A" },
];

const STYLES = [
  { label: "Modern & Minimal", value: "modern" },
  { label: "Bold & Colorful", value: "bold" },
  { label: "Professional & Corporate", value: "corporate" },
  { label: "Creative & Artistic", value: "creative" },
  { label: "Elegant & Luxury", value: "elegant" },
];

type FormData = {
  name: string;
  email: string;
  businessName: string;
  industry: string;
  pages: string[];
  primaryColor: string;
  style: string;
  notes: string;
  requestedLiveSetup: boolean;
};

const INITIAL: FormData = {
  name: "",
  email: "",
  businessName: "",
  industry: "",
  pages: ["Home", "About", "Services", "Contact"],
  primaryColor: "purple",
  style: "modern",
  notes: "",
  requestedLiveSetup: false,
};

const STEPS = ["Your Info", "Site Pages", "Style", "Review"];

export default function GeneratePage() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormData>(INITIAL);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function togglePage(page: string) {
    setForm((prev) => ({
      ...prev,
      pages: prev.pages.includes(page)
        ? prev.pages.filter((p) => p !== page)
        : [...prev.pages, page],
    }));
  }

  async function handleSubmit() {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/submit-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Submission failed");
      }
      const { id } = await res.json();
      router.push(`/thank-you?id=${id}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      setLoading(false);
    }
  }

  function canNext() {
    if (step === 0) return form.name && form.email && form.businessName && form.industry;
    if (step === 1) return form.pages.length > 0;
    if (step === 2) return form.primaryColor && form.style;
    return true;
  }

  return (
    <div style={{ minHeight: "100vh", padding: "3rem 0 6rem" }}>
      <div className="container-tight" style={{ maxWidth: 640, marginInline: "auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <span className="badge">Step {step + 1} of {STEPS.length}</span>
          <h1 className="heading-section" style={{ marginTop: "1rem" }}>
            {STEPS[step]}
          </h1>
          <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", marginTop: "0.5rem" }}>AffordaWeb Solutions — Affordable Website Design</p>
        </div>

        {/* Step indicators */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", marginBottom: "2.5rem" }}>
          {STEPS.map((s, i) => (
            <div key={s} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <div className={`step-dot ${i < step ? "step-dot-done" : i === step ? "step-dot-active" : "step-dot-inactive"}`}>
                {i < step ? "✓" : i + 1}
              </div>
              {i < STEPS.length - 1 && (
                <div style={{ width: "3rem", height: "2px", background: i < step ? "#111111" : "var(--border)" }} />
              )}
            </div>
          ))}
        </div>

        {/* Form card */}
        <div className="card" style={{ padding: "2rem" }}>
          {step === 0 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <div>
                <label className="form-label">Your Name *</label>
                <input className="form-input" placeholder="Jane Smith" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
              </div>
              <div>
                <label className="form-label">Email Address *</label>
                <input className="form-input" type="email" placeholder="jane@example.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
              </div>
              <div>
                <label className="form-label">Business Name *</label>
                <input className="form-input" placeholder="Acme Corp" value={form.businessName} onChange={(e) => setForm({ ...form, businessName: e.target.value })} />
              </div>
              <div>
                <label className="form-label">Industry *</label>
                <select className="form-input" value={form.industry} onChange={(e) => setForm({ ...form, industry: e.target.value })}>
                  <option value="">Select an industry…</option>
                  {INDUSTRIES.map((ind) => (
                    <option key={ind} value={ind}>{ind}</option>
                  ))}
                </select>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <input
                  id="live-setup"
                  type="checkbox"
                  checked={form.requestedLiveSetup}
                  onChange={(e) => setForm({ ...form, requestedLiveSetup: e.target.checked })}
                  style={{ width: "1.1rem", height: "1.1rem", accentColor: "var(--brand)", cursor: "pointer" }}
                />
                <label htmlFor="live-setup" style={{ fontSize: "0.92rem", color: "var(--text-muted)", cursor: "pointer" }}>
                  Add live setup (+$25) — we deploy it for you
                </label>
              </div>
            </div>
          )}

          {step === 1 && (
            <div>
              <p style={{ color: "var(--text-muted)", fontSize: "0.92rem", marginBottom: "1.25rem" }}>
                Select the pages you need. ({form.pages.length} selected)
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "0.65rem" }}>
                {PAGES_OPTIONS.map((page) => {
                  const active = form.pages.includes(page);
                  return (
                    <button
                      key={page}
                      type="button"
                      onClick={() => togglePage(page)}
                      style={{
                        padding: "0.7rem 1rem",
                        borderRadius: "0.65rem",
                        border: active ? "2px solid #111111" : "1.5px solid var(--border)",
                        background: active ? "#111111" : "var(--surface-2)",
                        color: active ? "#fff" : "var(--text-muted)",
                        fontWeight: 600,
                        fontSize: "0.9rem",
                        cursor: "pointer",
                        textAlign: "left",
                        transition: "all 0.15s",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                      }}
                    >
                      <span style={{ color: active ? "#ffffff" : "transparent" }}>✓</span>
                      {page}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {step === 2 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
              <div>
                <label className="form-label" style={{ marginBottom: "0.75rem" }}>Primary Colour</label>
                <div style={{ display: "flex", gap: "0.65rem", flexWrap: "wrap" }}>
                  {COLORS.map((c) => (
                    <button
                      key={c.value}
                      type="button"
                      title={c.label}
                      onClick={() => setForm({ ...form, primaryColor: c.value })}
                      style={{
                        width: "2.75rem",
                        height: "2.75rem",
                        borderRadius: "50%",
                        background: c.hex,
                        border: form.primaryColor === c.value ? "3px solid #fff" : "3px solid transparent",
                        outline: form.primaryColor === c.value ? `3px solid ${c.hex}` : "none",
                        cursor: "pointer",
                        transition: "transform 0.15s",
                        transform: form.primaryColor === c.value ? "scale(1.15)" : "scale(1)",
                      }}
                    />
                  ))}
                </div>
                <p style={{ color: "var(--text-muted)", fontSize: "0.82rem", marginTop: "0.5rem" }}>
                  Selected: {COLORS.find((c) => c.value === form.primaryColor)?.label}
                </p>
              </div>

              <div>
                <label className="form-label" style={{ marginBottom: "0.75rem" }}>Website Style</label>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.55rem" }}>
                  {STYLES.map((s) => (
                    <button
                      key={s.value}
                      type="button"
                      onClick={() => setForm({ ...form, style: s.value })}
                      style={{
                        padding: "0.75rem 1rem",
                        borderRadius: "0.65rem",
                        border: form.style === s.value ? "2px solid #111111" : "1.5px solid var(--border)",
                        background: form.style === s.value ? "#111111" : "var(--surface-2)",
                        color: form.style === s.value ? "#fff" : "var(--text-muted)",
                        fontWeight: 600,
                        fontSize: "0.92rem",
                        cursor: "pointer",
                        textAlign: "left",
                        transition: "all 0.15s",
                      }}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="form-label">Additional Notes (optional)</label>
                <textarea
                  className="form-input"
                  rows={3}
                  placeholder="Anything specific you'd like — tone, competitors, must-have features…"
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  style={{ resize: "vertical" }}
                />
              </div>
            </div>
          )}

          {step === 3 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <ReviewRow label="Name" value={form.name} />
              <ReviewRow label="Email" value={form.email} />
              <ReviewRow label="Business" value={form.businessName} />
              <ReviewRow label="Industry" value={form.industry} />
              <ReviewRow label="Pages" value={form.pages.join(", ")} />
              <ReviewRow label="Colour" value={COLORS.find((c) => c.value === form.primaryColor)?.label ?? form.primaryColor} />
              <ReviewRow label="Style" value={STYLES.find((s) => s.value === form.style)?.label ?? form.style} />
              {form.notes && <ReviewRow label="Notes" value={form.notes} />}
              <ReviewRow label="Live Setup Add-on" value={form.requestedLiveSetup ? "Yes (+$25)" : "No"} />

              <div
                style={{
                  marginTop: "0.5rem",
                  padding: "1rem",
                  borderRadius: "0.65rem",
                  background: "var(--surface)",
                  border: "1.5px solid var(--border)",
                  fontSize: "0.88rem",
                  color: "var(--text-muted)",
                  lineHeight: 1.65,
                }}
              >
                After submitting, we will review your request and send a <strong style={{ color: "var(--text)" }}>PayPal invoice</strong> within 1 business day. Your template will be delivered once payment is confirmed.
              </div>

              {error && (
                <p style={{ color: "#DC2626", fontSize: "0.9rem", padding: "0.75rem", background: "rgba(220,38,38,0.08)", borderRadius: "0.5rem" }}>
                  {error}
                </p>
              )}
            </div>
          )}
        </div>

        {/* Navigation */}
        <div style={{ display: "flex", gap: "1rem", marginTop: "1.5rem", justifyContent: "space-between" }}>
          {step > 0 ? (
            <button className="btn-outline" onClick={() => setStep(step - 1)} style={{ minWidth: 100 }}>
              ← Back
            </button>
          ) : (
            <div />
          )}

          {step < STEPS.length - 1 ? (
            <button
              className="btn-primary"
              onClick={() => setStep(step + 1)}
              disabled={!canNext()}
              style={{ minWidth: 130, opacity: canNext() ? 1 : 0.45, cursor: canNext() ? "pointer" : "not-allowed" }}
            >
              Next →
            </button>
          ) : (
            <button
              className="btn-primary"
              onClick={handleSubmit}
              disabled={loading}
              style={{ minWidth: 160, opacity: loading ? 0.7 : 1 }}
            >
              {loading ? "Submitting…" : "Submit Request →"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function ReviewRow({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ display: "flex", gap: "1rem", justifyContent: "space-between", alignItems: "flex-start", borderBottom: "1px solid var(--border)", paddingBottom: "0.6rem" }}>
      <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--text-muted)", flexShrink: 0 }}>{label}</span>
      <span style={{ fontSize: "0.9rem", textAlign: "right", color: "var(--text)" }}>{value}</span>
    </div>
  );
}
