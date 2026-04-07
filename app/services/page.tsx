import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "DIY Website Template Services & Pricing | AffordaWeb Solutions",
  description:
    "Flat-rate DIY website templates for small businesses. Starter $29 (1-3 pages), Standard $79 (4-6 pages), Premium $129 (up to 8 pages), Custom projects welcome. No subscriptions.",
  alternates: { canonical: "/services" },
};

const PACKAGES = [
  {
    name: "Starter",
    price: "$29",
    pageRange: "1–3 pages",
    tagline: "Launch your professional presence fast",
    popular: false,
    features: [
      "1–3 custom pages",
      "Hand-coded HTML & CSS",
      "Mobile-responsive layout",
      "SEO meta tags & structure",
      "Contact form included",
      "ZIP file download",
      "Setup guide (PDF)",
      "1 revision round",
    ],
    href: "/generate",
    cta: "Build Starter →",
  },
  {
    name: "Standard",
    price: "$79",
    pageRange: "4–6 pages",
    tagline: "Most popular for service businesses",
    popular: true,
    features: [
      "4–6 custom pages",
      "Everything in Starter",
      "Gallery or blog layout",
      "Social media links",
      "Google Maps embed",
      "Testimonials section",
      "2 revision rounds",
      "Delivery under 1 hour",
    ],
    href: "/generate",
    cta: "Build Standard →",
  },
  {
    name: "Premium",
    price: "$129",
    pageRange: "Up to 8 pages",
    tagline: "For larger sites with more pages and content",
    popular: false,
    features: [
      "Up to 8 custom pages",
      "Everything in Standard",
      "Gallery or blog layout",
      "Testimonials section",
      "Advanced SEO structure",
      "Priority delivery (under 1 hour)",
      "3 revision rounds",
    ],
    href: "/generate",
    cta: "Build Premium →",
  },
  {
    name: "Custom",
    price: "Contact Us",
    pageRange: "Unlimited scope",
    tagline: "Bespoke builds for complex requirements",
    popular: false,
    features: [
      "Unlimited pages",
      "Custom functionality",
      "API & third-party integrations",
      "Dedicated designer",
      "Priority support",
      "Full design handoff",
      "Ongoing retainer available",
    ],
    href: "/contact",
    cta: "Get a Quote →",
  },
];

const INCLUDED = [
  { icon: "✦", title: "100% Custom-Designed", desc: "No drag-and-drop builders. Every template is designed from scratch around your brand." },
  { icon: "✦", title: "Mobile-First Always", desc: "Every template is tested on mobile, tablet, and desktop before delivery." },
  { icon: "✦", title: "SEO-Optimised Structure", desc: "Semantic HTML, meta tags, fast load times, and clean markup built into every template." },
  { icon: "✦", title: "You Own the Files", desc: "No licensing, no subscriptions. The HTML, CSS, and assets are yours to host anywhere." },
  { icon: "✦", title: "Fast Delivery — Under 1 Hour", desc: "Most templates are delivered within 1 hour of payment confirmation. No waiting, no delays." },
  { icon: "✦", title: "Rebuild Until You Love It", desc: "Not happy? Use our chat-style feedback to request changes — or rebuild from scratch free." },
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
  "Beauty & Salons",
  "Fitness & Coaching",
  "Photography",
  "Construction & Trades",
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          background: "var(--hero-gradient)",
          padding: "75px 0 50px",
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
        <div className="container-tight" style={{ position: "relative" }}>
          <span className="badge">DIY Website Templates</span>
          <h1 className="heading-hero" style={{ marginTop: "1.25rem", color: "#111111" }}>
            Custom Website Templates<br />Built Around Your Brand
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
            Tell us what you need in 4 minutes. We design your template. You get clean, professional website files you own forever — starting at $29. No subscriptions, no coding required.
          </p>
          <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/generate" className="btn-primary">Build My Website →</Link>
            <Link href="#packages" className="btn-outline">View Packages</Link>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" style={{ padding: "6rem 0" }}>
        <div className="container-tight">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="badge">Pricing</span>
            <h2 className="heading-section" style={{ marginTop: "1rem" }}>
              Flat-Rate Packages. No Hidden Fees.
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: "1rem", maxWidth: 520, marginInline: "auto", marginTop: "0.75rem" }}>
              One payment. No monthly fees. No renewals. Pick the package that fits your needs.{" "}
              <Link href="/blog/how-much-does-a-website-cost" style={{ color: "#111111", fontWeight: 600 }}>
                See the full website cost breakdown →
              </Link>
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.5rem", alignItems: "stretch" }}>
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
                      fontSize: "0.7rem",
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
                <div style={{ marginBottom: "0.35rem" }}>
                  <span style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-muted)" }}>
                    {pkg.name}
                  </span>
                </div>
                <div style={{ fontSize: "2.4rem", fontWeight: 900, letterSpacing: "-0.04em", color: "#111111", marginBottom: "0.15rem" }}>
                  {pkg.price}
                </div>
                <div style={{ fontSize: "0.78rem", fontWeight: 700, color: "var(--text-muted)", marginBottom: "0.4rem" }}>{pkg.pageRange}</div>
                <p style={{ color: "var(--text-muted)", fontSize: "0.87rem", marginBottom: "1.5rem" }}>{pkg.tagline}</p>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 2rem", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                  {pkg.features.map((f) => (
                    <li key={f} style={{ display: "flex", gap: "0.65rem", alignItems: "flex-start", fontSize: "0.9rem", color: "var(--text)" }}>
                      <span style={{ fontWeight: 900, flexShrink: 0 }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={pkg.href}
                  className="btn-primary"
                  style={{ display: "block", textAlign: "center", marginTop: "auto" }}
                >
                  {pkg.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* What is included */}
      <section style={{ padding: "5rem 0" }}>
        <div className="container-tight">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="badge">Every Template Includes</span>
            <h2 className="heading-section" style={{ marginTop: "1rem" }}>
              What You Get With Every DIY Template
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: "1rem", maxWidth: 480, marginInline: "auto", marginTop: "0.75rem" }}>
              Every package comes with the same core quality — no cutting corners on the basics.{" "}
              <Link href="/blog/what-is-a-hand-coded-website" style={{ color: "#111111", fontWeight: 600 }}>
                What does hand-coded mean? →
              </Link>
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
            {INCLUDED.map((item, i) => (
              <div key={i} className="card">
                <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                  <span style={{ fontSize: "1rem", flexShrink: 0, marginTop: "0.1rem" }}>{item.icon}</span>
                  <div>
                    <h3 style={{ fontSize: "1rem", fontWeight: 800, marginBottom: "0.45rem" }}>{item.title}</h3>
                    <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.65 }}>{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* Industries */}
      <section style={{ padding: "5rem 0 6rem" }}>
        <div className="container-tight">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="badge">Industries We Serve</span>
            <h2 className="heading-section" style={{ marginTop: "1rem" }}>
              We Build Templates for Every Industry
            </h2>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", justifyContent: "center" }}>
            {INDUSTRIES.map((ind) => (
              <span
                key={ind}
                style={{
                  padding: "0.55rem 1.25rem",
                  borderRadius: "999px",
                  background: "var(--surface-2)",
                  border: "1.5px solid var(--border)",
                  fontSize: "0.88rem",
                  fontWeight: 600,
                  color: "var(--text-muted)",
                }}
              >
                {ind}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#111111", padding: "5rem 0", textAlign: "center" }}>
        <div className="container-tight">
          <h2 className="heading-section" style={{ color: "#FFFFFF", marginBottom: "1rem" }}>
            Ready to build your custom website?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.1rem", marginBottom: "2rem", maxWidth: 480, marginInline: "auto" }}>
            Fill out our 4-minute form and get a clean, professional website template starting at $29. No subscriptions, no coding.
          </p>
          <Link href="/generate" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "#FFFFFF", color: "#111111", fontWeight: 700, fontSize: "1.1rem", padding: "1rem 2.5rem", borderRadius: "999px", textDecoration: "none" }}>
            Build My Website — Starting at $29 →
          </Link>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.85rem", marginTop: "1.75rem" }}>
            Not sure yet? Compare{" "}
            <Link href="/blog/website-design-without-a-developer" style={{ color: "rgba(255,255,255,0.75)", textDecoration: "underline" }}>website design options</Link>
            {" "}&mdash; builders, AI tools, freelancers, and templates side by side.
          </p>
        </div>
      </section>
    </>
  );
}
