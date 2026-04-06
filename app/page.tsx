import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AffordaWeb Solutions — Affordable Website Design for Small Business",
  description:
    "Affordable website design by top-rated Filipino web designers. Get a professional, hand-coded, mobile-ready website delivered to your inbox. Starting from $49. No subscriptions.",
  alternates: { canonical: "/" },
};

const STEPS = [
  {
    num: "01",
    title: "Fill Out the Form",
    desc: "Tell us your business name, industry, pages you need, and your preferred look and feel. Takes about 3 minutes.",
  },
  {
    num: "02",
    title: "We Send a PayPal Invoice",
    desc: "After reviewing your request, we send a PayPal invoice. One flat payment — no subscription, no surprises.",
  },
  {
    num: "03",
    title: "Receive Your Website",
    desc: "Once paid, we build and email you a download link within 2–4 business days. Clean HTML, CSS, and assets — yours to keep.",
  },
];

const TRUST_ITEMS = [
  "Affordable Website Design",
  "No Subscriptions",
  "You Own the Code",
  "Fast Turnaround",
  "Mobile-First Design",
  "SEO-Ready Markup",
  "Top-Rated on Upwork",
  "Filipino Web Designers",
  "Affordable Website Design",
  "No Subscriptions",
  "You Own the Code",
  "Fast Turnaround",
  "Mobile-First Design",
  "SEO-Ready Markup",
  "Top-Rated on Upwork",
  "Filipino Web Designers",
];

const DELIVERABLES = [
  { icon: "file", label: "Complete HTML/CSS files", sub: "Clean, hand-coded, no dependencies" },
  { icon: "phone", label: "Mobile-responsive layout", sub: "Looks great on every device" },
  { icon: "search", label: "SEO-optimised structure", sub: "Semantic HTML, proper meta tags" },
  { icon: "download", label: "ZIP download link", sub: "One click — host anywhere you like" },
  { icon: "book", label: "Setup instructions", sub: "Step-by-step guide included" },
  { icon: "rocket", label: "Optional live setup add-on", sub: "We deploy it for you on request" },
];

function MinimalIcon({ name }: { name: string }) {
  const paths: Record<string, string> = {
    file: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M16 13H8M16 17H8M10 9H8",
    phone: "M12 18h.01M8 21h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2z",
    search: "M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z",
    download: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3",
    book: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 19.5A2.5 2.5 0 0 0 6.5 22H20V2H6.5A2.5 2.5 0 0 0 4 4.5v15z",
    rocket: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09zM12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2zM9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M15 12v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",
  };
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={paths[name]} />
    </svg>
  );
}

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
          borderBottom: "1.5px solid var(--border)",
        }}
      >
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.05) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            pointerEvents: "none",
          }}
        />
        <div className="container-tight" style={{ position: "relative" }}>
          <span className="badge anim-fade-up">Top-Rated Filipino Web Designers · Starting at $49</span>

          <h1
            className="heading-hero anim-fade-up anim-delay-1"
            style={{ marginTop: "1.5rem", color: "#111111", maxWidth: 800, marginInline: "auto" }}
          >
            Affordable Website Design{" "}
            <span style={{ color: "#555555", fontStyle: "italic" }}>for your business.</span>
          </h1>

          <p
            className="anim-fade-up anim-delay-2"
            style={{
              marginTop: "1.25rem",
              fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
              color: "var(--text-muted)",
              maxWidth: 580,
              marginInline: "auto",
              lineHeight: 1.7,
            }}
          >
            Professional, hand-coded websites at prices small businesses can actually afford. No page builders, no subscriptions. You own every file.
          </p>

          <div className="anim-fade-up anim-delay-3" style={{ marginTop: "2.25rem", display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/generate" className="btn-primary" style={{ fontSize: "1.05rem", padding: "0.95rem 2.25rem" }}>
              Get Your Website →
            </Link>
            <Link href="#how-it-works" className="btn-outline">
              How It Works
            </Link>
          </div>

          {/* Social proof */}
          <div className="anim-fade-up anim-delay-3" style={{ marginTop: "2.5rem", display: "flex", gap: "2rem", justifyContent: "center", flexWrap: "wrap" }}>
            {[
              { label: "Starting at", value: "$49" },
              { label: "Delivered in", value: "2–4 days" },
              { label: "Rated", value: "Top on Upwork" },
            ].map((s) => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <div style={{ fontSize: "1.5rem", fontWeight: 900, letterSpacing: "-0.03em", color: "#111111" }}>{s.value}</div>
                <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trust marquee ── */}
      <div style={{ background: "var(--surface-2)", borderTop: "1.5px solid var(--border)", borderBottom: "1.5px solid var(--border)", padding: "0.9rem 0", overflow: "hidden" }}>
        <div className="marquee-track">
          {TRUST_ITEMS.map((item, i) => (
            <span
              key={i}
              style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", paddingInline: "2rem", color: "#888888", fontSize: "0.88rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", whiteSpace: "nowrap" }}
            >
              <span style={{ color: "#111111", fontSize: "0.7rem" }}>◆</span>
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ── How It Works ── */}
      <section id="how-it-works" style={{ padding: "6rem 0" }}>
        <div className="container-tight">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <span className="badge">Simple Process</span>
            <h2 className="heading-section" style={{ marginTop: "1rem" }}>
              How Affordable Website Design Works
            </h2>
            <p style={{ color: "var(--text-muted)", marginTop: "0.75rem", fontSize: "1.05rem", maxWidth: 500, marginInline: "auto" }}>
              From form to finished website in days — no back-and-forth, no confusion.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {STEPS.map((step, i) => (
              <div key={i} className="card" style={{ position: "relative" }}>
                <span style={{ fontSize: "3rem", fontWeight: 900, letterSpacing: "-0.04em", opacity: 0.08, position: "absolute", top: "1rem", right: "1.25rem", lineHeight: 1, color: "#111111" }}>
                  {step.num}
                </span>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 800, marginBottom: "0.65rem" }}>{step.title}</h3>
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
              What Your Affordable Website Includes
            </h2>
            <p style={{ color: "var(--text-muted)", marginTop: "0.75rem", fontSize: "1.05rem", maxWidth: 480, marginInline: "auto" }}>
              Everything you need to go live — no extra purchases required.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.25rem" }}>
            {DELIVERABLES.map((item) => (
              <div key={item.label} className="card" style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <span style={{ flexShrink: 0, color: "#111111", marginTop: "0.1rem" }}>
                  <MinimalIcon name={item.icon} />
                </span>
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

      {/* ── Why Us ── */}
      <section style={{ padding: "4rem 0 6rem", background: "var(--surface)" }}>
        <div className="container-tight">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <span className="badge">Why AffordaWeb</span>
            <h2 className="heading-section" style={{ marginTop: "1rem" }}>
              Real Designers. Real Affordable Prices.
            </h2>
            <p style={{ color: "var(--text-muted)", marginTop: "0.75rem", fontSize: "1.05rem", maxWidth: 520, marginInline: "auto" }}>
              We are Filipino web design professionals rated among the top freelancers on Upwork — bringing world-class quality at a fraction of typical agency prices.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.25rem" }}>
            {[
              { title: "Top-Rated on Upwork", desc: "Verified track record. Hundreds of satisfied clients across industries." },
              { title: "Hand-Coded Quality", desc: "Every website is written by hand — no page builders, no bloated templates." },
              { title: "Affordable for Everyone", desc: "We believe every small business deserves a great website, not just big brands." },
              { title: "Fast Turnaround", desc: "Most projects are delivered in 2–4 business days from payment confirmation." },
            ].map((item) => (
              <div key={item.title} className="card">
                <h3 style={{ fontSize: "1.05rem", fontWeight: 800, marginBottom: "0.5rem" }}>{item.title}</h3>
                <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <Link href="/about" className="btn-outline">Meet the Team →</Link>
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
              Transparent, Affordable Pricing
            </h2>
            <p style={{ color: "var(--text-muted)", marginTop: "0.75rem", fontSize: "1.05rem" }}>
              One flat fee. No hidden costs, no recurring charges. Pay once and own your website forever.
            </p>
          </div>

          <div className="card" style={{ textAlign: "center", border: "2px solid #111111", background: "#FAFAFA", padding: "2.5rem 2rem" }}>
            <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", marginBottom: "0.5rem" }}>Starting from</p>
            <p style={{ fontSize: "clamp(3rem, 8vw, 5rem)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1, color: "#111111" }}>
              $49
            </p>
            <p style={{ color: "var(--text-muted)", marginBottom: "2rem", fontSize: "0.95rem" }}>per website — one-time payment</p>

            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 2rem", display: "flex", flexDirection: "column", gap: "0.65rem", textAlign: "left", maxWidth: 340, marginInline: "auto" }}>
              {[
                "Custom-designed to match your brand",
                "Up to 6 pages included",
                "Mobile-first & SEO-optimised",
                "Delivered within 2–4 business days",
                "Pay securely via PayPal invoice",
                "+$25 optional live hosting setup",
              ].map((item) => (
                <li key={item} style={{ display: "flex", gap: "0.65rem", alignItems: "flex-start", color: "var(--text)", fontSize: "0.95rem" }}>
                  <span style={{ color: "#111111", marginTop: "0.1em", flexShrink: 0, fontWeight: 900 }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <Link href="/generate" className="btn-primary" style={{ fontSize: "1.05rem", padding: "0.95rem 2.5rem" }}>
              Order My Website →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Blog teaser ── */}
      <section style={{ padding: "4rem 0 6rem", background: "var(--surface)" }}>
        <div className="container-tight">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="badge">Blog</span>
            <h2 className="heading-section" style={{ marginTop: "1rem" }}>
              Web Design Tips & Guides
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
            {[
              { slug: "affordable-website-design-for-small-business", title: "Affordable Website Design for Small Business: The Complete Guide", date: "April 2025" },
              { slug: "why-hire-a-filipino-web-designer", title: "Why Hire a Filipino Web Designer? Top Reasons in 2025", date: "April 2025" },
              { slug: "how-much-does-a-website-cost", title: "How Much Does a Website Cost? (Honest Breakdown)", date: "April 2025" },
            ].map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
                <div className="card" style={{ height: "100%", transition: "border-color 0.2s" }}>
                  <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.6rem" }}>{post.date}</p>
                  <h3 style={{ fontSize: "1rem", fontWeight: 800, lineHeight: 1.45, marginBottom: "0.75rem" }}>{post.title}</h3>
                  <span style={{ fontSize: "0.88rem", fontWeight: 700, color: "#111111" }}>Read more →</span>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <Link href="/blog" className="btn-outline">View All Articles →</Link>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section style={{ background: "#111111", padding: "5rem 0", textAlign: "center" }}>
        <div className="container-tight">
          <h2 className="heading-section" style={{ color: "#FFFFFF", marginBottom: "1rem" }}>
            Ready for an affordable website?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.1rem", marginBottom: "2rem", maxWidth: 480, marginInline: "auto" }}>
            Fill out our short form in minutes and get a professional website delivered to your inbox.
          </p>
          <Link href="/generate" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "#FFFFFF", color: "#111111", fontWeight: 700, fontSize: "1.1rem", padding: "1rem 2.5rem", borderRadius: "999px", textDecoration: "none" }}>
            Start Now — It&apos;s Free to Request →
          </Link>
        </div>
      </section>
    </>
  );
}