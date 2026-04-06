import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Affordable Website Design Services | AffordaWeb Solutions",
  description:
    "Explore our affordable website design services for small businesses. Hand-coded, SEO-ready, mobile-first websites starting from $49. No subscriptions — you own the code.",
  alternates: { canonical: "/services" },
};

const PACKAGES = [
  {
    name: "Starter",
    price: "$49",
    tagline: "Perfect for getting online fast",
    popular: false,
    features: [
      "1–3 pages",
      "Hand-coded HTML & CSS",
      "Mobile-responsive",
      "Basic SEO meta tags",
      "ZIP file download",
      "PDF setup guide",
      "1 revision round",
    ],
  },
  {
    name: "Standard",
    price: "$79",
    tagline: "Most popular for small businesses",
    popular: true,
    features: [
      "4–6 pages",
      "Everything in Starter",
      "Contact form",
      "Social media links",
      "2 revision rounds",
      "Faster delivery (2–3 days)",
    ],
  },
  {
    name: "Premium",
    price: "$129",
    tagline: "Maximum value, maximum quality",
    popular: false,
    features: [
      "Up to 8 pages",
      "Everything in Standard",
      "Blog layout",
      "Custom animations",
      "Priority delivery (1–2 days)",
      "3 revision rounds",
      "Optional live setup add-on (+$25)",
    ],
  },
];

const INCLUDED = [
  { icon: "✦", title: "100% Hand-Coded", desc: "No page builders. Clean, semantic HTML and CSS written by hand." },
  { icon: "✦", title: "Mobile-First Design", desc: "Every site is designed and tested on mobile, tablet, and desktop." },
  { icon: "✦", title: "SEO-Optimised", desc: "Proper meta tags, semantic structure, and fast load times built in." },
  { icon: "✦", title: "You Own the Files", desc: "No licensing. No subscriptions. The code is yours forever." },
  { icon: "✦", title: "Fast Delivery", desc: "Most projects delivered within 2–4 business days." },
  { icon: "✦", title: "Setup Guide Included", desc: "PDF instructions to deploy your site anywhere, no tech skills needed." },
];

const INDUSTRIES = [
  "Restaurants & Cafes",
  "E-commerce Shops",
  "Service Businesses",
  "Freelancers & Creatives",
  "Real Estate",
  "Healthcare & Wellness",
  "Law & Consulting",
  "Non-profits",
];

export default function ServicesPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        style={{
          background: "var(--hero-gradient)",
          padding: "5rem 0 4rem",
          textAlign: "center",
          borderBottom: "1.5px solid var(--border)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.04) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            pointerEvents: "none",
          }}
        />
        <div className="container-tight" style={{ position: "relative", maxWidth: 720, marginInline: "auto" }}>
          <span className="badge">Our Services</span>
          <h1 className="heading-hero" style={{ marginTop: "1.25rem", color: "#111111" }}>
            Affordable Website Design Services<br />for Every Business
          </h1>
          <p
            style={{
              marginTop: "1.25rem",
              color: "var(--text-muted)",
              fontSize: "clamp(1rem, 2.5vw, 1.15rem)",
              lineHeight: 1.7,
              maxWidth: 580,
              marginInline: "auto",
            }}
          >
            Professional, hand-coded websites at prices every small business can afford. No subscriptions, no hidden fees — just a clean, fast site you own forever.
          </p>
        </div>
      </section>

      {/* ── Packages ── */}
      <section style={{ padding: "5rem 0" }}>
        <div className="container-tight">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="badge">Pricing Packages</span>
            <h2 className="heading-section" style={{ marginTop: "1rem" }}>
              Simple, Flat-Rate Pricing
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: "1rem", maxWidth: 500, marginInline: "auto", marginTop: "0.75rem" }}>
              One payment. No monthly fees. Pick the package that fits your needs.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem", alignItems: "start" }}>
            {PACKAGES.map((pkg) => (
              <div
                key={pkg.name}
                className="card"
                style={{
                  position: "relative",
                  border: pkg.popular ? "2px solid #111111" : undefined,
                  paddingTop: pkg.popular ? "2.5rem" : undefined,
                }}
              >
                {pkg.popular && (
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: "50%",
                      transform: "translateX(-50%) translateY(-50%)",
                      background: "#111111",
                      color: "#FFFFFF",
                      fontSize: "0.72rem",
                      fontWeight: 800,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      padding: "0.3rem 1rem",
                      borderRadius: "999px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Most Popular
                  </div>
                )}
                <div style={{ marginBottom: "0.5rem" }}>
                  <span style={{ fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-muted)" }}>
                    {pkg.name}
                  </span>
                </div>
                <div style={{ fontSize: "2.5rem", fontWeight: 900, letterSpacing: "-0.04em", color: "#111111", marginBottom: "0.25rem" }}>
                  {pkg.price}
                </div>
                <p style={{ color: "var(--text-muted)", fontSize: "0.88rem", marginBottom: "1.5rem" }}>{pkg.tagline}</p>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 2rem", display: "flex", flexDirection: "column", gap: "0.65rem" }}>
                  {pkg.features.map((f) => (
                    <li key={f} style={{ display: "flex", gap: "0.65rem", alignItems: "flex-start", fontSize: "0.92rem", color: "var(--text)" }}>
                      <span style={{ color: "#111111", fontWeight: 900, flexShrink: 0 }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/generate"
                  className="btn-primary"
                  style={{ display: "block", textAlign: "center", background: pkg.popular ? "#111111" : undefined }}
                >
                  Order {pkg.name} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ── What's Included ── */}
      <section style={{ padding: "5rem 0" }}>
        <div className="container-tight">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="badge">Always Included</span>
            <h2 className="heading-section" style={{ marginTop: "1rem" }}>
              What&apos;s in Every Package
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem" }}>
            {INCLUDED.map((item) => (
              <div key={item.title} className="card">
                <div style={{ fontSize: "1.1rem", fontWeight: 900, color: "#111111", marginBottom: "0.65rem" }}>{item.icon} {item.title}</div>
                <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ── Industries ── */}
      <section style={{ padding: "5rem 0", background: "var(--surface)" }}>
        <div className="container-tight">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="badge">Industries We Serve</span>
            <h2 className="heading-section" style={{ marginTop: "1rem" }}>
              We Build Websites for Every Industry
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: "1rem", maxWidth: 500, marginInline: "auto", marginTop: "0.75rem" }}>
              Whether you&apos;re a local restaurant or a growing consultancy, we have the experience to build the right site for your business.
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "1px",
              background: "var(--border)",
              border: "1.5px solid var(--border)",
              borderRadius: "1rem",
              overflow: "hidden",
            }}
          >
            {INDUSTRIES.map((industry) => (
              <div
                key={industry}
                style={{
                  background: "var(--bg)",
                  padding: "1.5rem 1.25rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.65rem",
                  fontSize: "0.92rem",
                  fontWeight: 600,
                  color: "var(--text)",
                }}
              >
                <span style={{ color: "#111111", fontWeight: 900 }}>→</span>
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: "#111111", padding: "5rem 0", textAlign: "center" }}>
        <div className="container-tight">
          <h2 className="heading-section" style={{ color: "#FFFFFF", marginBottom: "1rem" }}>
            Ready to get your website?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.05rem", marginBottom: "2rem", maxWidth: 440, marginInline: "auto" }}>
            Fill out our short order form and get a professionally designed website delivered to your inbox in days.
          </p>
          <Link
            href="/generate"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "#FFFFFF",
              color: "#111111",
              fontWeight: 700,
              fontSize: "1.05rem",
              padding: "0.95rem 2.25rem",
              borderRadius: "999px",
              textDecoration: "none",
            }}
          >
            Order Your Website →
          </Link>
        </div>
      </section>
    </>
  );
}
