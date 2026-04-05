import Link from "next/link";

const STEPS = [
  {
    num: "01",
    title: "Fill Out the Form",
    desc: "Tell us your business name, industry, pages you need, and the look & feel you want. Takes about 3 minutes.",
  },
  {
    num: "02",
    title: "We Send a PayPal Invoice",
    desc: "After reviewing your request, we send a PayPal invoice. No subscription — one flat payment.",
  },
  {
    num: "03",
    title: "Receive Your Template",
    desc: "Once paid, we build and email you a download link. You get a clean ZIP with all the HTML, CSS, and assets.",
  },
];

const TRUST_ITEMS = [
  "100% Custom Code",
  "No Subscriptions",
  "You Own the Files",
  "Fast Turnaround",
  "Mobile-First Design",
  "SEO-Ready Markup",
  "100% Custom Code",
  "No Subscriptions",
  "You Own the Files",
  "Fast Turnaround",
  "Mobile-First Design",
  "SEO-Ready Markup",
];

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        style={{
          background: "var(--hero-gradient)",
          padding: "6rem 0 5rem",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative blobs */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse 70% 60% at 50% -10%, rgba(86,54,209,0.35) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div className="container-tight" style={{ position: "relative" }}>
          <span className="badge anim-fade-up">Website Templates · Delivered Fast</span>

          <h1
            className="heading-hero anim-fade-up anim-delay-1"
            style={{
              marginTop: "1.5rem",
              color: "#fff",
              maxWidth: 760,
              marginInline: "auto",
            }}
          >
            Your custom website,{" "}
            <span style={{ color: "#E2498A" }}>ready to launch.</span>
          </h1>

          <p
            className="anim-fade-up anim-delay-2"
            style={{
              marginTop: "1.25rem",
              fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
              color: "rgba(255,255,255,0.75)",
              maxWidth: 560,
              marginInline: "auto",
              lineHeight: 1.65,
            }}
          >
            Fill a short form, pay once, and get a professional, hand-coded website template emailed to you. No builders. No subscriptions. You own the code.
          </p>

          <div
            className="anim-fade-up anim-delay-3"
            style={{ marginTop: "2.25rem", display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}
          >
            <Link href="/generate" className="btn-primary anim-pulse" style={{ fontSize: "1.05rem", padding: "0.95rem 2.25rem" }}>
              Get Your Template →
            </Link>
            <Link href="#how-it-works" className="btn-outline">
              See How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* ── Trust marquee ── */}
      <div
        style={{
          background: "var(--surface)",
          borderTop: "1.5px solid var(--border)",
          borderBottom: "1.5px solid var(--border)",
          padding: "0.9rem 0",
          overflow: "hidden",
        }}
      >
        <div className="marquee-track">
          {TRUST_ITEMS.map((item, i) => (
            <span
              key={i}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                paddingInline: "2rem",
                color: "var(--text-muted)",
                fontSize: "0.88rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                whiteSpace: "nowrap",
              }}
            >
              <span style={{ color: "var(--brand-light)", fontSize: "1.1rem" }}>✦</span>
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ── How It Works ── */}
      <section id="how-it-works" style={{ padding: "6rem 0" }}>
        <div className="container-tight">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <span className="badge">Process</span>
            <h2 className="heading-section" style={{ marginTop: "1rem" }}>
              How It Works
            </h2>
            <p style={{ color: "var(--text-muted)", marginTop: "0.75rem", fontSize: "1.05rem", maxWidth: 480, marginInline: "auto" }}>
              Simple, transparent, and fast — from form to template in days.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {STEPS.map((step, i) => (
              <div
                key={i}
                className={`card ${i === 0 ? "card-pastel-purple" : i === 1 ? "card-pastel-pink" : "card-pastel-blue"}`}
                style={{ position: "relative" }}
              >
                <span
                  style={{
                    fontSize: "3rem",
                    fontWeight: 900,
                    letterSpacing: "-0.04em",
                    opacity: 0.15,
                    position: "absolute",
                    top: "1rem",
                    right: "1.25rem",
                    lineHeight: 1,
                    color: "#fff",
                  }}
                >
                  {step.num}
                </span>
                <h3 style={{ fontSize: "1.15rem", fontWeight: 800, marginBottom: "0.65rem" }}>{step.title}</h3>
                <p style={{ color: "var(--text-muted)", lineHeight: 1.65, fontSize: "0.95rem" }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ── What You Get ── */}
      <section style={{ padding: "4rem 0 6rem" }}>
        <div className="container-tight">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <span className="badge">Deliverables</span>
            <h2 className="heading-section" style={{ marginTop: "1rem" }}>
              What You Receive
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {[
              { icon: "📄", label: "Complete HTML/CSS files", sub: "Clean, hand-coded, no dependencies" },
              { icon: "📱", label: "Mobile-responsive layout", sub: "Works perfectly on every device" },
              { icon: "🔍", label: "SEO-optimised structure", sub: "Semantic HTML, proper meta tags" },
              { icon: "📦", label: "ZIP download link", sub: "One click — yours to host anywhere" },
              { icon: "📋", label: "Setup instructions", sub: "Detailed PDF guide included" },
              { icon: "💡", label: "Optional live setup add-on", sub: "We deploy it for you on request" },
            ].map((item) => (
              <div key={item.label} className="card" style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <span style={{ fontSize: "1.75rem", flexShrink: 0 }}>{item.icon}</span>
                <div>
                  <p style={{ fontWeight: 700, fontSize: "0.97rem", marginBottom: "0.2rem" }}>{item.label}</p>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", lineHeight: 1.5 }}>{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ── Pricing ── */}
      <section id="pricing" style={{ padding: "4rem 0 6rem" }}>
        <div className="container-tight" style={{ maxWidth: 720, marginInline: "auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="badge">Pricing</span>
            <h2 className="heading-section" style={{ marginTop: "1rem" }}>
              Simple, One-Time Fee
            </h2>
            <p style={{ color: "var(--text-muted)", marginTop: "0.75rem", fontSize: "1.05rem" }}>
              No hidden costs, no recurring charges. You pay once and own your template forever.
            </p>
          </div>

          <div
            className="card"
            style={{
              textAlign: "center",
              border: "2px solid rgba(86,54,209,0.45)",
              background: "rgba(86,54,209,0.1)",
              padding: "2.5rem 2rem",
            }}
          >
            <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", marginBottom: "0.5rem" }}>Starting from</p>
            <p
              style={{
                fontSize: "clamp(3rem, 8vw, 5rem)",
                fontWeight: 900,
                letterSpacing: "-0.04em",
                lineHeight: 1,
                background: "linear-gradient(135deg, #A78BFA, #E2498A)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              $49
            </p>
            <p style={{ color: "var(--text-muted)", marginBottom: "2rem", fontSize: "0.95rem" }}>per website template</p>

            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: "0 0 2rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.65rem",
                textAlign: "left",
                maxWidth: 340,
                marginInline: "auto",
              }}
            >
              {[
                "Custom-designed to your brand",
                "Up to 6 pages included",
                "Mobile-first, SEO-ready",
                "Delivered within 2–4 business days",
                "PayPal invoice — pay securely",
                "+$25 optional live setup add-on",
              ].map((item) => (
                <li key={item} style={{ display: "flex", gap: "0.65rem", alignItems: "flex-start", color: "var(--text)", fontSize: "0.95rem" }}>
                  <span style={{ color: "#4ADE80", marginTop: "0.1em", flexShrink: 0 }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <Link href="/generate" className="btn-primary" style={{ fontSize: "1.05rem", padding: "0.95rem 2.5rem" }}>
              Order My Template →
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section
        style={{
          background: "var(--hero-gradient)",
          padding: "5rem 0",
          textAlign: "center",
        }}
      >
        <div className="container-tight">
          <h2
            className="heading-section"
            style={{ color: "#fff", marginBottom: "1rem" }}
          >
            Ready to get your website?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "1.1rem", marginBottom: "2rem", maxWidth: 440, marginInline: "auto" }}>
            Fill out the form in minutes and we will take it from there.
          </p>
          <Link href="/generate" className="btn-primary anim-pulse" style={{ fontSize: "1.1rem", padding: "1rem 2.5rem" }}>
            Start Now — It&apos;s Free to Request →
          </Link>
        </div>
      </section>
    </>
  );
}
