"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const INDUSTRIES = [
  "Restaurant / Food & Beverage",
  "Retail / E-commerce",
  "Health & Wellness",
  "Real Estate",
  "Photography / Videography",
  "Construction / Trades",
  "Legal / Finance",
  "Non-profit / Charity",
  "Tech / SaaS",
  "Beauty & Salon",
  "Fitness & Personal Training",
  "Education / Coaching",
  "Event Planning",
  "Automotive",
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
  { label: "Midnight Black", value: "black", hex: "#111111" },
  { label: "Royal Blue", value: "blue", hex: "#2563EB" },
  { label: "Teal", value: "teal", hex: "#0D9488" },
  { label: "Emerald", value: "green", hex: "#16A34A" },
  { label: "Violet", value: "purple", hex: "#7C3AED" },
  { label: "Rose", value: "pink", hex: "#E2498A" },
  { label: "Burnt Orange", value: "orange", hex: "#EA580C" },
  { label: "Crimson", value: "red", hex: "#DC2626" },
  { label: "Champagne Gold", value: "gold", hex: "#C9A84C" },
];

const STYLES = [
  { label: "Modern & Minimal", value: "modern", desc: "Clean whitespace, sharp typography" },
  { label: "Bold & Colorful", value: "bold", desc: "High contrast, expressive colors" },
  { label: "Professional & Corporate", value: "corporate", desc: "Trustworthy, structured layouts" },
  { label: "Creative & Artistic", value: "creative", desc: "Asymmetric, editorial, expressive" },
  { label: "Elegant & Luxury", value: "elegant", desc: "Premium feel, refined details" },
];

const FONT_STYLES = [
  { label: "Clean Sans", value: "sans", desc: "Modern, easy to read (Inter, DM Sans)" },
  { label: "Classic Serif", value: "serif", desc: "Timeless, editorial (Playfair, Georgia)" },
  { label: "Display / Mixed", value: "display", desc: "Bold headlines + clean body text" },
];

const FEATURES_OPTIONS = [
  "Contact Form",
  "Image Gallery",
  "Testimonials",
  "FAQ Section",
  "Blog Layout",
  "Google Maps",
  "Booking / Calendar",
  "Newsletter Signup",
  "Team Section",
  "E-commerce (up to 10 products)",
  "Live Chat Widget",
  "Social Media Feed",
];

type FormData = {
  name: string;
  email: string;
  businessName: string;
  industry: string;
  tagline: string;
  targetAudience: string;
  // SEO fields
  focusKeyword: string;
  targetCity: string;
  businessPhone: string;
  businessAddress: string;
  pages: string[];
  primaryColor: string;
  style: string;
  fontStyle: string;
  features: string[];
  inspirationUrl: string;
  socialFacebook: string;
  socialInstagram: string;
  socialOther: string;
  notes: string;
  designFeedback: string;
  requestedLiveSetup: boolean;
};

const INITIAL: FormData = {
  name: "",
  email: "",
  businessName: "",
  industry: "",
  tagline: "",
  targetAudience: "",
  focusKeyword: "",
  targetCity: "",
  businessPhone: "",
  businessAddress: "",
  pages: ["Home", "About", "Services", "Contact"],
  primaryColor: "black",
  style: "modern",
  fontStyle: "sans",
  features: ["Contact Form"],
  inspirationUrl: "",
  socialFacebook: "",
  socialInstagram: "",
  socialOther: "",
  notes: "",
  designFeedback: "",
  requestedLiveSetup: false,
};

const STEPS = ["Your Business", "Site Pages", "Design", "Features", "Preview & Confirm"];

function getEstimate(pages: string[], features: string[]): { price: string; label: string } {
  if (features.includes("E-commerce (up to 10 products)")) return { price: "$129", label: "Premium tier" };
  if (pages.length > 3) return { price: "$79", label: "Standard tier (4–6 pages)" };
  return { price: "$29", label: "Starter tier (1–3 pages)" };
}

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
        : prev.pages.length < 10
        ? [...prev.pages, page]
        : prev.pages,
    }));
  }

  function toggleFeature(feat: string) {
    setForm((prev) => ({
      ...prev,
      features: prev.features.includes(feat)
        ? prev.features.filter((f) => f !== feat)
        : [...prev.features, feat],
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

  function handleRebuild() {
    setForm(INITIAL);
    setStep(0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function canNext() {
    if (step === 0) return !!(form.name && form.email && form.businessName && form.industry);
    if (step === 1) return form.pages.length > 0;
    if (step === 2) return !!(form.primaryColor && form.style && form.fontStyle);
    return true;
  }

  const estimate = getEstimate(form.pages, form.features);
  const selectedColor = COLORS.find((c) => c.value === form.primaryColor);

  return (
    <div style={{ minHeight: "100vh", padding: "3rem 0 6rem" }}>
      <div className="container-tight">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <span className="badge">Step {step + 1} of {STEPS.length}</span>
          <h1 className="heading-section" style={{ marginTop: "1rem" }}>
            {STEPS[step]}
          </h1>
          <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", marginTop: "0.5rem" }}>
            Build your DIY website template — clean, fast, professional
          </p>
        </div>

        {/* Step indicators */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.4rem", marginBottom: "2.5rem", flexWrap: "wrap" }}>
          {STEPS.map((s, i) => (
            <div key={s} style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
              <div className={`step-dot ${i < step ? "step-dot-done" : i === step ? "step-dot-active" : "step-dot-inactive"}`}>
                {i < step ? "✓" : i + 1}
              </div>
              {i < STEPS.length - 1 && (
                <div style={{ width: "2rem", height: "2px", background: i < step ? "#111111" : "var(--border)" }} />
              )}
            </div>
          ))}
        </div>

        {/* Form card */}
        <div className="card" style={{ padding: "2.25rem" }}>

          {/* Step 0: Your Business */}
          {step === 0 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <div>
                  <label className="form-label">Your Name *</label>
                  <input className="form-input" placeholder="Jane Smith" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                </div>
                <div>
                  <label className="form-label">Email Address *</label>
                  <input className="form-input" type="email" placeholder="jane@example.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                </div>
              </div>
              <div>
                <label className="form-label">Business Name *</label>
                <input className="form-input" placeholder="Acme Corp" value={form.businessName} onChange={(e) => setForm({ ...form, businessName: e.target.value })} />
              </div>
              <div>
                <label className="form-label">Industry *</label>
                <select className="form-input" value={form.industry} onChange={(e) => setForm({ ...form, industry: e.target.value })}>
                  <option value="">Select your industry…</option>
                  {INDUSTRIES.map((ind) => (
                    <option key={ind} value={ind}>{ind}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="form-label">Tagline or Slogan <span style={{ color: "var(--text-muted)", fontWeight: 400 }}>(optional)</span></label>
                <input className="form-input" placeholder='e.g. "Where great food meets great company"' value={form.tagline} onChange={(e) => setForm({ ...form, tagline: e.target.value })} />
              </div>
              <div>
                <label className="form-label">Who is your ideal customer? <span style={{ color: "var(--text-muted)", fontWeight: 400 }}>(optional)</span></label>
                <input className="form-input" placeholder='e.g. "Local homeowners aged 35–55 looking for reliable trades"' value={form.targetAudience} onChange={(e) => setForm({ ...form, targetAudience: e.target.value })} />
              </div>

              {/* SEO block */}
              <div style={{ borderTop: "1.5px solid var(--border)", paddingTop: "1.25rem" }}>
                <p style={{ fontWeight: 700, fontSize: "0.88rem", color: "var(--text)", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.4rem" }}>
                  <span>🔍</span> SEO Information <span style={{ fontWeight: 400, color: "var(--text-muted)", fontSize: "0.82rem" }}>— helps us optimise your site for Google</span>
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                    <div>
                      <label className="form-label">Main Service Keyword <span style={{ color: "var(--text-muted)", fontWeight: 400 }}>(optional)</span></label>
                      <input className="form-input" placeholder='e.g. "plumber in Dallas"' value={form.focusKeyword} onChange={(e) => setForm({ ...form, focusKeyword: e.target.value })} />
                    </div>
                    <div>
                      <label className="form-label">Target City / Region <span style={{ color: "var(--text-muted)", fontWeight: 400 }}>(optional)</span></label>
                      <input className="form-input" placeholder='e.g. "Tampa, FL"' value={form.targetCity} onChange={(e) => setForm({ ...form, targetCity: e.target.value })} />
                    </div>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                    <div>
                      <label className="form-label">Business Phone <span style={{ color: "var(--text-muted)", fontWeight: 400 }}>(optional)</span></label>
                      <input className="form-input" type="tel" placeholder='e.g. "(813) 555-0100"' value={form.businessPhone} onChange={(e) => setForm({ ...form, businessPhone: e.target.value })} />
                    </div>
                    <div>
                      <label className="form-label">Business Address <span style={{ color: "var(--text-muted)", fontWeight: 400 }}>(optional)</span></label>
                      <input className="form-input" placeholder='e.g. "123 Main St, Tampa FL 33601"' value={form.businessAddress} onChange={(e) => setForm({ ...form, businessAddress: e.target.value })} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 1: Site Pages */}
          {step === 1 && (
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                <p style={{ color: "var(--text-muted)", fontSize: "0.92rem" }}>
                  Select up to <strong style={{ color: "var(--text)" }}>10 pages</strong>. ({form.pages.length} selected)
                </p>
                <div style={{ padding: "0.35rem 1rem", borderRadius: "999px", background: "#111111", color: "#fff", fontSize: "0.8rem", fontWeight: 800 }}>
                  Est: {estimate.price}
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "0.65rem", marginBottom: "1.25rem" }}>
                {PAGES_OPTIONS.map((page) => {
                  const active = form.pages.includes(page);
                  return (
                    <button
                      key={page}
                      type="button"
                      onClick={() => togglePage(page)}
                      style={{
                        padding: "0.8rem 1rem",
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
                      <span style={{ color: active ? "#fff" : "transparent", fontWeight: 900 }}>✓</span>
                      {page}
                    </button>
                  );
                })}
              </div>
              <div style={{ padding: "0.9rem 1.1rem", borderRadius: "0.65rem", background: "var(--surface-2)", border: "1.5px solid var(--border)", fontSize: "0.83rem" }}>
                <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
                  <span style={{ color: "var(--text-muted)" }}>📄 <strong style={{ color: "var(--text)" }}>1–3 pages</strong> → $29</span>
                  <span style={{ color: "var(--text-muted)" }}>📄 <strong style={{ color: "var(--text)" }}>4–6 pages</strong> → $79</span>
                  <span style={{ color: "var(--text-muted)" }}>📄 <strong style={{ color: "var(--text)" }}>7–8 pages</strong> → $129</span>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Design */}
          {step === 2 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              <div>
                <label className="form-label" style={{ marginBottom: "0.85rem" }}>Brand Color</label>
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
                        transform: form.primaryColor === c.value ? "scale(1.2)" : "scale(1)",
                      }}
                    />
                  ))}
                </div>
                <p style={{ color: "var(--text-muted)", fontSize: "0.82rem", marginTop: "0.6rem" }}>
                  Selected: <strong style={{ color: selectedColor?.hex }}>{selectedColor?.label}</strong>
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
                        padding: "0.85rem 1.1rem",
                        borderRadius: "0.65rem",
                        border: form.style === s.value ? "2px solid #111111" : "1.5px solid var(--border)",
                        background: form.style === s.value ? "#111111" : "var(--surface-2)",
                        color: form.style === s.value ? "#fff" : "var(--text-muted)",
                        fontWeight: 600,
                        fontSize: "0.9rem",
                        cursor: "pointer",
                        textAlign: "left",
                        transition: "all 0.15s",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <span>{s.label}</span>
                      <span style={{ fontSize: "0.77rem", opacity: 0.7, fontWeight: 400 }}>{s.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="form-label" style={{ marginBottom: "0.75rem" }}>Typography / Font Preference</label>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.55rem" }}>
                  {FONT_STYLES.map((f) => (
                    <button
                      key={f.value}
                      type="button"
                      onClick={() => setForm({ ...form, fontStyle: f.value })}
                      style={{
                        padding: "0.85rem 1.1rem",
                        borderRadius: "0.65rem",
                        border: form.fontStyle === f.value ? "2px solid #111111" : "1.5px solid var(--border)",
                        background: form.fontStyle === f.value ? "#111111" : "var(--surface-2)",
                        color: form.fontStyle === f.value ? "#fff" : "var(--text-muted)",
                        fontWeight: 600,
                        fontSize: "0.9rem",
                        cursor: "pointer",
                        textAlign: "left",
                        transition: "all 0.15s",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <span>{f.label}</span>
                      <span style={{ fontSize: "0.77rem", opacity: 0.7, fontWeight: 400 }}>{f.desc}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Features */}
          {step === 3 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
              <div>
                <label className="form-label" style={{ marginBottom: "0.75rem" }}>
                  Site Features <span style={{ color: "var(--text-muted)", fontWeight: 400 }}>— select all that apply</span>
                </label>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "0.6rem" }}>
                  {FEATURES_OPTIONS.map((feat) => {
                    const active = form.features.includes(feat);
                    return (
                      <button
                        key={feat}
                        type="button"
                        onClick={() => toggleFeature(feat)}
                        style={{
                          padding: "0.7rem 0.85rem",
                          borderRadius: "0.65rem",
                          border: active ? "2px solid #111111" : "1.5px solid var(--border)",
                          background: active ? "#111111" : "var(--surface-2)",
                          color: active ? "#fff" : "var(--text-muted)",
                          fontWeight: 600,
                          fontSize: "0.83rem",
                          cursor: "pointer",
                          textAlign: "left",
                          transition: "all 0.15s",
                          display: "flex",
                          alignItems: "center",
                          gap: "0.45rem",
                        }}
                      >
                        <span style={{ color: active ? "#fff" : "transparent", fontWeight: 900 }}>✓</span>
                        {feat}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="form-label">Inspiration Website <span style={{ color: "var(--text-muted)", fontWeight: 400 }}>(optional)</span></label>
                <input
                  className="form-input"
                  placeholder="https://example.com — a site you love the look of"
                  value={form.inspirationUrl}
                  onChange={(e) => setForm({ ...form, inspirationUrl: e.target.value })}
                />
              </div>

              <div>
                <label className="form-label" style={{ marginBottom: "0.75rem" }}>
                  Social Media Links <span style={{ color: "var(--text-muted)", fontWeight: 400 }}>(add what you have)</span>
                </label>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
                  <input className="form-input" placeholder="Facebook URL" value={form.socialFacebook} onChange={(e) => setForm({ ...form, socialFacebook: e.target.value })} />
                  <input className="form-input" placeholder="Instagram URL" value={form.socialInstagram} onChange={(e) => setForm({ ...form, socialInstagram: e.target.value })} />
                  <input className="form-input" placeholder="Other (Twitter, TikTok, LinkedIn…)" value={form.socialOther} onChange={(e) => setForm({ ...form, socialOther: e.target.value })} />
                </div>
              </div>

              <div>
                <label className="form-label">Additional Notes <span style={{ color: "var(--text-muted)", fontWeight: 400 }}>(optional)</span></label>
                <textarea
                  className="form-input"
                  rows={3}
                  placeholder="Anything else — brand guidelines, special requirements, must-haves…"
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  style={{ resize: "vertical" }}
                />
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
                  Add live deployment (+$25) — we host it for you
                </label>
              </div>
            </div>
          )}

          {/* Step 4: Preview & Confirm */}
          {step === 4 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>

              {/* Visual mockup preview */}
              <div style={{ borderRadius: "0.85rem", border: `2px solid ${selectedColor?.hex ?? "#111111"}`, overflow: "hidden" }}>
                {/* Mock header */}
                <div style={{ background: selectedColor?.hex ?? "#111111", padding: "0.75rem 1.25rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <div style={{ width: "30px", height: "30px", borderRadius: "6px", background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ color: "#fff", fontSize: "0.65rem", fontWeight: 900 }}>LOGO</span>
                  </div>
                  <span style={{ color: "#fff", fontWeight: 800, fontSize: "0.95rem", flex: 1 }}>{form.businessName || "Your Business"}</span>
                  <div style={{ display: "flex", gap: "0.75rem" }}>
                    {form.pages.slice(0, 4).map((p) => (
                      <span key={p} style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.7rem", fontWeight: 600 }}>{p}</span>
                    ))}
                  </div>
                </div>
                {/* Mock hero */}
                <div style={{ padding: "2rem 1.5rem", background: `linear-gradient(135deg, ${selectedColor?.hex}15 0%, #ffffff 100%)`, borderBottom: "1.5px solid var(--border)" }}>
                  <div style={{ fontSize: "0.68rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: selectedColor?.hex, marginBottom: "0.5rem" }}>
                    {STYLES.find((s) => s.value === form.style)?.label ?? "Modern & Minimal"}
                    {" · "}
                    {FONT_STYLES.find((f) => f.value === form.fontStyle)?.label ?? "Clean Sans"}
                  </div>
                  <div
                    style={{
                      fontSize: "1.3rem",
                      fontWeight: 900,
                      color: "#111111",
                      marginBottom: "0.4rem",
                      fontFamily: form.fontStyle === "serif" ? "Georgia, serif" : "inherit",
                    }}
                  >
                    {form.tagline || `Welcome to ${form.businessName || "Your Business"}`}
                  </div>
                  <div style={{ fontSize: "0.83rem", color: "var(--text-muted)" }}>
                    {form.targetAudience ? `Built for: ${form.targetAudience}` : "Professional website template"}
                  </div>
                </div>
                {/* Stats bar */}
                <div style={{ padding: "0.75rem 1.25rem", background: "var(--surface-2)", display: "flex", gap: "1.5rem", flexWrap: "wrap", alignItems: "center" }}>
                  <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>📄 <strong style={{ color: "var(--text)" }}>{form.pages.length} pages</strong></span>
                  <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>🎨 <strong style={{ color: selectedColor?.hex }}>{selectedColor?.label}</strong></span>
                  <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>✦ <strong style={{ color: "var(--text)" }}>{form.features.length} features</strong></span>
                  <span style={{ fontSize: "0.8rem", fontWeight: 900, color: selectedColor?.hex, marginLeft: "auto" }}>{estimate.price} — {estimate.label}</span>
                </div>
              </div>

              {/* Review rows */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.55rem" }}>
                <ReviewRow label="Name" value={form.name} />
                <ReviewRow label="Email" value={form.email} />
                <ReviewRow label="Business" value={form.businessName} />
                <ReviewRow label="Industry" value={form.industry} />
                {form.tagline && <ReviewRow label="Tagline" value={form.tagline} />}
                {form.targetAudience && <ReviewRow label="Audience" value={form.targetAudience} />}
                <ReviewRow label="Pages" value={form.pages.join(", ")} />
                <ReviewRow label="Color" value={selectedColor?.label ?? form.primaryColor} />
                <ReviewRow label="Style" value={STYLES.find((s) => s.value === form.style)?.label ?? form.style} />
                <ReviewRow label="Fonts" value={FONT_STYLES.find((f) => f.value === form.fontStyle)?.label ?? form.fontStyle} />
                {form.features.length > 0 && <ReviewRow label="Features" value={form.features.join(", ")} />}
                {form.inspirationUrl && <ReviewRow label="Inspiration" value={form.inspirationUrl} />}
                {form.notes && <ReviewRow label="Notes" value={form.notes} />}
                <ReviewRow label="Estimated Price" value={`${estimate.price} (${estimate.label})`} />
              </div>

              {/* Chat-style feedback */}
              <div>
                <label className="form-label" style={{ marginBottom: "0.5rem" }}>
                  💬 Request Design Changes <span style={{ color: "var(--text-muted)", fontWeight: 400 }}>(optional)</span>
                </label>
                <textarea
                  className="form-input"
                  rows={3}
                  placeholder='Not happy with something? Describe any changes — "make it more minimalist", "use a darker header", "add a bold hero image"…'
                  value={form.designFeedback}
                  onChange={(e) => setForm({ ...form, designFeedback: e.target.value })}
                  style={{ resize: "vertical" }}
                />
              </div>

              <div style={{
                padding: "1rem",
                borderRadius: "0.65rem",
                background: "var(--surface)",
                border: "1.5px solid var(--border)",
                fontSize: "0.88rem",
                color: "var(--text-muted)",
                lineHeight: 1.65,
              }}>
                After submitting, we review your brief and send a <strong style={{ color: "var(--text)" }}>PayPal invoice</strong> within 1 business day. Your template is delivered once payment is confirmed.
              </div>

              {error && (
                <p style={{ color: "#DC2626", fontSize: "0.9rem", padding: "0.75rem", background: "rgba(220,38,38,0.08)", borderRadius: "0.5rem" }}>
                  {error}
                </p>
              )}

              {/* Rebuild + Submit */}
              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                <button
                  type="button"
                  className="btn-outline"
                  onClick={handleRebuild}
                  style={{ flex: "0 0 auto" }}
                >
                  ↺ Rebuild from Scratch
                </button>
                <button
                  className="btn-primary"
                  onClick={handleSubmit}
                  disabled={loading}
                  style={{ flex: 1, justifyContent: "center", opacity: loading ? 0.7 : 1 }}
                >
                  {loading ? "Submitting…" : "Submit My Request →"}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Navigation buttons (steps 0–3) */}
        {step < 4 && (
          <div style={{ display: "flex", gap: "1rem", marginTop: "1.5rem", justifyContent: "space-between" }}>
            {step > 0 ? (
              <button className="btn-outline" onClick={() => setStep(step - 1)} style={{ minWidth: 100 }}>
                ← Back
              </button>
            ) : (
              <div />
            )}
            <button
              className="btn-primary"
              onClick={() => setStep(step + 1)}
              disabled={!canNext()}
              style={{ minWidth: 130, opacity: canNext() ? 1 : 0.45, cursor: canNext() ? "pointer" : "not-allowed" }}
            >
              Next →
            </button>
          </div>
        )}

        {/* Back button on preview step */}
        {step === 4 && (
          <div style={{ marginTop: "1rem" }}>
            <button
              className="btn-outline"
              onClick={() => setStep(3)}
              style={{ width: "100%", justifyContent: "center" }}
            >
              ← Edit My Selection
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function ReviewRow({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ display: "flex", gap: "1rem", justifyContent: "space-between", alignItems: "flex-start", borderBottom: "1px solid var(--border)", paddingBottom: "0.55rem" }}>
      <span style={{ fontSize: "0.83rem", fontWeight: 700, color: "var(--text-muted)", flexShrink: 0 }}>{label}</span>
      <span style={{ fontSize: "0.88rem", textAlign: "right", color: "var(--text)" }}>{value}</span>
    </div>
  );
}
