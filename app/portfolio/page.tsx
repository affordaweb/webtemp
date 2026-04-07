import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Web Design Portfolio | AffordaWeb Solutions",
  description:
    "Browse our portfolio of affordable website designs for small businesses. See real examples of hand-coded, mobile-responsive, SEO-optimised websites we've built.",
  alternates: { canonical: "/portfolio" },
};

const PROJECTS = [
  {
    name: "Bloom & Co. Bakery",
    industry: "Café & Restaurant",
    desc: "A warm, inviting site for a local bakery with menu, gallery, and contact sections.",
    tags: ["5 pages", "Mobile-first", "SEO-ready"],
    color: "#FFF7ED",
    label: "🥐 Bakery & Café",
  },
  {
    name: "Summit Legal Group",
    industry: "Law & Consulting",
    desc: "Clean, professional legal services site with practice areas and consultation booking.",
    tags: ["6 pages", "Contact form", "SEO-ready"],
    color: "#F0F4FF",
    label: "⚖️ Law Firm",
  },
  {
    name: "FreshCuts Barbershop",
    industry: "Local Service",
    desc: "Bold, modern barbershop site with services, pricing, and booking info.",
    tags: ["4 pages", "Mobile-first", "Fast load"],
    color: "#F0FFF4",
    label: "✂️ Barbershop",
  },
  {
    name: "Verde Landscape Co.",
    industry: "Home Services",
    desc: "Outdoor services company with portfolio, services, and quote request.",
    tags: ["5 pages", "Gallery", "Contact form"],
    color: "#F0FFF4",
    label: "🌿 Landscaping",
  },
  {
    name: "Mila & Co. Photography",
    industry: "Freelancer / Creative",
    desc: "Portfolio-style photography site with gallery, about, and contact.",
    tags: ["4 pages", "Gallery layout", "Mobile-first"],
    color: "#FFF0F3",
    label: "📷 Photography",
  },
  {
    name: "Pacific Dental Clinic",
    industry: "Healthcare & Wellness",
    desc: "Clean, trustworthy dental clinic site with services and appointment info.",
    tags: ["6 pages", "Appointment CTA", "SEO-ready"],
    color: "#F0F8FF",
    label: "🦷 Dental Clinic",
  },
];

const STEPS = [
  {
    step: "01",
    title: "You Fill the Form",
    desc: "Tell us your business name, industry, pages, colors, and any content you have.",
  },
  {
    step: "02",
    title: "We Build It",
    desc: "Our Filipino web designers hand-code your site in 2–4 business days.",
  },
  {
    step: "03",
    title: "You Own It",
    desc: "Receive your ZIP file with all files + a setup guide. Deploy anywhere.",
  },
];

export default function PortfolioPage() {
  return (
    <>
      {/* ── Hero ── */}
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
          <span className="badge">Our Work</span>
          <h1 className="heading-hero" style={{ marginTop: "1.25rem", color: "#111111" }}>
            Affordable Website Design —<br />See Our Work
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
            Real examples of hand-coded, mobile-responsive, SEO-optimised websites built for businesses across industries.
          </p>
        </div>
      </section>

      {/* ── Note ── */}
      <section style={{ padding: "2rem 0 0" }}>
        <div className="container-tight">
          <div
            style={{
              background: "var(--surface)",
              border: "1.5px solid var(--border)",
              borderRadius: "0.75rem",
              padding: "1rem 1.5rem",
              fontSize: "0.88rem",
              color: "var(--text-muted)",
            }}
          >
            <strong style={{ color: "var(--text)" }}>Note:</strong> The examples below are representative designs that showcase our style, quality, and capabilities across various industries.
          </div>
        </div>
      </section>

      {/* ── Portfolio Grid ── */}
      <section style={{ padding: "3rem 0 5rem" }}>
        <div className="container-tight">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
            {PROJECTS.map((project) => (
              <div key={project.name} className="card" style={{ padding: 0, overflow: "hidden" }}>
                {/* Screenshot placeholder */}
                <div
                  style={{
                    height: 200,
                    background: project.color,
                    border: "none",
                    borderBottom: "1.5px dashed var(--border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    gap: "0.5rem",
                  }}
                >
                  <span style={{ fontSize: "2rem" }}>{project.label.split(" ")[0]}</span>
                  <span style={{ fontSize: "0.8rem", color: "var(--text-muted)", fontWeight: 600 }}>{project.label.split(" ").slice(1).join(" ")}</span>
                </div>
                <div style={{ padding: "1.5rem" }}>
                  <span className="badge" style={{ marginBottom: "0.65rem", display: "inline-block" }}>{project.industry}</span>
                  <h3 style={{ fontSize: "1.05rem", fontWeight: 800, marginBottom: "0.5rem", color: "#111111" }}>{project.name}</h3>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.88rem", lineHeight: 1.6, marginBottom: "1rem" }}>{project.desc}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          background: "var(--surface)",
                          border: "1.5px solid var(--border)",
                          borderRadius: "999px",
                          padding: "0.2rem 0.75rem",
                          fontSize: "0.75rem",
                          fontWeight: 600,
                          color: "var(--text-muted)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ── Process ── */}
      <section style={{ padding: "5rem 0", background: "var(--surface)" }}>
        <div className="container-tight">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="badge">Our Process</span>
            <h2 className="heading-section" style={{ marginTop: "1rem" }}>
              How We Build Your Site
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.5rem" }}>
            {STEPS.map((step) => (
              <div key={step.step} className="card" style={{ textAlign: "center" }}>
                <div
                  style={{
                    width: "3rem",
                    height: "3rem",
                    background: "#111111",
                    color: "#FFFFFF",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.85rem",
                    fontWeight: 900,
                    marginInline: "auto",
                    marginBottom: "1rem",
                  }}
                >
                  {step.step}
                </div>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 800, marginBottom: "0.5rem" }}>{step.title}</h3>
                <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.65, margin: 0 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: "#111111", padding: "5rem 0", textAlign: "center" }}>
        <div className="container-tight">
          <h2 className="heading-section" style={{ color: "#FFFFFF", marginBottom: "1rem" }}>
            Want a website like these?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.05rem", marginBottom: "2rem", maxWidth: 440, marginInline: "auto" }}>
            Get your own professionally designed, hand-coded website starting from just $49.
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
