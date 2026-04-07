import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "DIY Website Templates for Small Business — Starting at $29 | AffordaWeb Solutions",
  description:
    "Build your own website with a custom-designed template. Tell us your pages, style, and features — we design it, you own it forever. DIY website templates starting at $29. No coding, no subscriptions.",
  alternates: { canonical: "/" },
};

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Tell Us About Your Business",
    desc: "Fill out our smart design form — pages, colours, style, features, and target audience. Takes about 4 minutes.",
  },
  {
    num: "02",
    title: "We Design Your Template",
    desc: "Our designers craft a clean, professional website template custom-built for your brand and goals. No generic themes.",
  },
  {
    num: "03",
    title: "Review, Edit & Chat",
    desc: "Unhappy with a detail? Use the chat-style feedback box to request changes — or rebuild from scratch at no extra cost.",
  },
  {
    num: "04",
    title: "Download & Go Live",
    desc: "Get your complete website files (HTML, CSS, assets) in a ZIP. Host anywhere you like. Yours to keep forever.",
  },
];

const TRUST_ITEMS = [
  "DIY Website Templates",
  "Build Your Own Website",
  "No Subscriptions",
  "You Own the Code",
  "Instant Delivery",
  "Mobile-First Design",
  "SEO-Ready Markup",
  "Starting at $29",
  "DIY Website Templates",
  "Build Your Own Website",
  "No Subscriptions",
  "You Own the Code",
  "Instant Delivery",
  "Mobile-First Design",
  "SEO-Ready Markup",
  "Starting at $29",
];

const PACKAGES = [
  {
    name: "Starter",
    price: "$29",
    pageRange: "Up to 5 pages",
    desc: "Perfect for a simple, professional online presence.",
    features: ["Up to 5 pages", "Mobile-responsive", "SEO meta tags", "Contact form", "ZIP download"],
    cta: "Build Starter →",
    popular: false,
    href: "/generate",
  },
  {
    name: "Growth",
    price: "$99",
    pageRange: "6–10 pages",
    desc: "Ideal for service businesses and content-rich sites.",
    features: ["6–10 pages", "Everything in Starter", "Gallery or blog layout", "Social media links", "Google Maps", "2 revision rounds"],
    cta: "Build Growth →",
    popular: true,
    href: "/generate",
  },
  {
    name: "Ecommerce",
    price: "$149",
    pageRange: "Up to 10 products",
    desc: "Sell products with a clean, conversion-ready store.",
    features: ["Product pages (up to 10)", "Shopping cart layout", "Checkout page", "Everything in Growth", "Priority delivery"],
    cta: "Build My Store →",
    popular: false,
    href: "/generate",
  },
  {
    name: "Custom",
    price: "Let\u2019s Talk",
    pageRange: "Unlimited scope",
    desc: "Complex projects, unique requirements, or bespoke builds.",
    features: ["Unlimited pages", "Custom integrations", "Dedicated designer", "Priority support", "Full handoff"],
    cta: "Contact Us →",
    popular: false,
    href: "/contact",
  },
];

const WHY_US = [
  {
    title: "Cheaper than any builder subscription",
    desc: "Wix, Squarespace, and Shopify cost $16–$40/month. Pay once with us — $29 flat, forever.",
  },
  {
    title: "Professional quality, not a generic theme",
    desc: "Every template is designed to your brand, audience, and goals — not a drag-and-drop template anyone can duplicate.",
  },
  {
    title: "You own every file",
    desc: "No lock-in, no licensing, no monthly platform fees. Host wherever you like — we hand you the keys.",
  },
  {
    title: "Instant Delivery",
    desc: "Templates are delivered instantly after payment is confirmed. No waiting, no delays.",
  },
  {
    title: "Rebuild until you love it",
    desc: "Not happy with the first draft? Describe your changes in plain language. We fine-tune or rebuild at no extra charge.",
  },
  {
    title: "SEO-ready from day one",
    desc: "Semantic HTML, fast load times, proper meta tags, and mobile-first structure — built in by default on every template.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          background: "var(--hero-gradient)",
          padding: "5rem 0 4.5rem",
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
        <div
          className="container-tight hero-two-col"
          style={{ position: "relative" }}
        >
          {/* Left: text + buttons */}
          <div className="anim-fade-up">
            <span className="badge">DIY Website Templates · Starting at $29 · You Own It Forever</span>

            <h1
              className="heading-hero anim-fade-up anim-delay-1"
              style={{ marginTop: "1.5rem", color: "#111111" }}
            >
              Build Your Website —{" "}
              <span style={{ color: "#555555", fontStyle: "italic" }}>without the subscription.</span>
            </h1>

            <p
              className="anim-fade-up anim-delay-2"
              style={{
                marginTop: "1.25rem",
                fontSize: "clamp(1rem, 2vw, 1.15rem)",
                color: "var(--text-muted)",
                lineHeight: 1.7,
                maxWidth: 520,
              }}
            >
              Tell us your pages, style, colours, and features. We design a clean, professional website template — custom to your brand. Download the files, host anywhere, own it forever.
            </p>

            <div className="anim-fade-up anim-delay-3" style={{ marginTop: "2.25rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="/generate" className="btn-primary" style={{ fontSize: "1.05rem", padding: "0.95rem 2.25rem" }}>
                Build My Website →
              </Link>
              <Link href="#pricing" className="btn-outline">
                See Pricing
              </Link>
            </div>

            <div className="anim-fade-up anim-delay-3" style={{ marginTop: "2.5rem", display: "flex", gap: "2rem", flexWrap: "wrap" }}>
              {[
                { label: "Starting at", value: "$29" },
                { label: "Delivered in", value: "Instant" },
                { label: "No monthly", value: "Fees. Ever." },
              ].map((s) => (
                <div key={s.label}>
                  <div style={{ fontSize: "1.5rem", fontWeight: 900, letterSpacing: "-0.03em", color: "#111111" }}>{s.value}</div>
                  <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: animated SVG illustration */}
          <div className="hero-svg-col anim-fade-up anim-delay-2" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <svg
              width="100%"
              viewBox="0 0 600 400"
              xmlns="http://www.w3.org/2000/svg"
              style={{ maxWidth: 520, background: "transparent" }}
              aria-hidden="true"
            >
              {/* Affordable ($29) - coin */}
              <circle cx="100" cy="100" r="40" fill="#111111">
                <animate attributeName="r" values="40;45;40" dur="2s" repeatCount="indefinite"/>
              </circle>
              <circle cx="100" cy="100" r="30" fill="white"/>
              <circle cx="100" cy="100" r="20" fill="#e5e7eb"/>
              <text x="100" y="106" textAnchor="middle" fontSize="11" fontWeight="900" fill="#111111">$29</text>
              <text x="100" y="158" textAnchor="middle" fontSize="11" fontWeight="700" fill="#6b7280">Flat Price</text>

              {/* Fast Turnaround - arrow */}
              <polygon points="250,90 250,110 300,100" fill="#111111">
                <animateTransform attributeName="transform" type="translate" values="0,0;20,0;0,0" dur="1.5s" repeatCount="indefinite"/>
              </polygon>
              <text x="275" y="158" textAnchor="middle" fontSize="11" fontWeight="700" fill="#6b7280">instant Delivery</text>

              {/* Ownership - file icon */}
              <rect x="400" y="60" width="60" height="80" rx="4" fill="#111111"/>
              <rect x="405" y="65" width="50" height="70" rx="3" fill="white"/>
              <rect x="413" y="80" width="34" height="3" rx="1" fill="#e5e7eb"/>
              <rect x="413" y="88" width="28" height="3" rx="1" fill="#e5e7eb"/>
              <rect x="413" y="96" width="32" height="3" rx="1" fill="#e5e7eb"/>
              <rect x="405" y="65" width="50" height="70" rx="3" fill="#111111" opacity="0">
                <animate attributeName="opacity" values="0;0.08;0" dur="2s" repeatCount="indefinite"/>
              </rect>
              <text x="430" y="158" textAnchor="middle" fontSize="11" fontWeight="700" fill="#6b7280">You Own It</text>

              {/* Top-Rated - star */}
              <g transform="translate(100,250)">
                <polygon
                  points="0,-35 9.5,-13 35,-13 13,5 22,30 0,15 -22,30 -13,5 -35,-13 -9.5,-13"
                  fill="#111111"
                >
                  <animateTransform attributeName="transform" type="scale" values="1;1.15;1" dur="2s" repeatCount="indefinite" additive="sum"/>
                </polygon>
                <text y="55" textAnchor="middle" fontSize="11" fontWeight="700" fill="#6b7280">Top-Rated</text>
              </g>

              {/* Mobile-First - phone */}
              <rect x="255" y="225" width="50" height="90" rx="8" fill="#111111"/>
              <rect x="260" y="231" width="40" height="78" rx="5" fill="white"/>
              <circle cx="280" cy="311" r="4" fill="#e5e7eb"/>
              <rect x="265" y="237" width="30" height="2" rx="1" fill="#e5e7eb"/>
              <text x="280" y="330" textAnchor="middle" fontSize="11" fontWeight="700" fill="#6b7280">Mobile-First</text>

              {/* SEO-Ready - magnifying glass */}
              <circle cx="420" cy="265" r="25" stroke="#111111" strokeWidth="4" fill="none"/>
              <line x1="439" y1="284" x2="458" y2="303" stroke="#111111" strokeWidth="4" strokeLinecap="round">
                <animateTransform attributeName="transform" type="rotate" values="0 439 284;15 439 284;0 439 284" dur="3s" repeatCount="indefinite"/>
              </line>
              <text x="420" y="330" textAnchor="middle" fontSize="11" fontWeight="700" fill="#6b7280">SEO-Ready</text>
            </svg>
          </div>
        </div>

      </section>

      {/* Trust marquee */}
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

      {/* How It Works */}
      <section id="how-it-works" style={{ padding: "6rem 0" }}>
        <div className="container-tight">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <span className="badge">The Process</span>
            <h2 className="heading-section" style={{ marginTop: "1rem" }}>
              How DIY Website Building Works
            </h2>
            <p style={{ color: "var(--text-muted)", marginTop: "0.75rem", fontSize: "1.05rem", maxWidth: 520, marginInline: "auto" }}>
              You fill out the form. We handle the design. You walk away with a professional website you own.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
            {PROCESS_STEPS.map((step, i) => (
              <div key={i} className="card" style={{ position: "relative" }}>
                <span style={{ fontSize: "3rem", fontWeight: 900, letterSpacing: "-0.04em", opacity: 0.07, position: "absolute", top: "1rem", right: "1.25rem", lineHeight: 1, color: "#111111" }}>
                  {step.num}
                </span>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 800, marginBottom: "0.65rem" }}>{step.title}</h3>
                <p style={{ color: "var(--text-muted)", lineHeight: 1.65, fontSize: "0.93rem" }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* Pricing */}
      <section id="pricing" style={{ padding: "6rem 0" }}>
        <div className="container-tight">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="badge">Flat-Rate Pricing</span>
            <h2 className="heading-section" style={{ marginTop: "1rem" }}>
              Simple Pricing. No Surprises.
            </h2>
            <p style={{ color: "var(--text-muted)", marginTop: "0.75rem", fontSize: "1.05rem", maxWidth: 520, marginInline: "auto" }}>
              One flat payment. No monthly fees, no renewals, no hidden costs. Pick your tier and get your custom template.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: "1.25rem", alignItems: "start" }}>
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
                  <div style={{
                    position: "absolute",
                    top: 0,
                    left: "50%",
                    transform: "translateX(-50%) translateY(-50%)",
                    background: "#111111",
                    color: "#fff",
                    fontSize: "0.7rem",
                    fontWeight: 800,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    padding: "0.3rem 1rem",
                    borderRadius: "999px",
                    whiteSpace: "nowrap",
                  }}>
                    Most Popular
                  </div>
                )}
                <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-muted)", marginBottom: "0.35rem" }}>
                  {pkg.name}
                </div>
                <div style={{ fontSize: "2.25rem", fontWeight: 900, letterSpacing: "-0.04em", color: "#111111", marginBottom: "0.15rem" }}>
                  {pkg.price}
                </div>
                <div style={{ fontSize: "0.78rem", fontWeight: 700, color: "var(--text-muted)", marginBottom: "0.5rem" }}>{pkg.pageRange}</div>
                <p style={{ color: "var(--text-muted)", fontSize: "0.87rem", marginBottom: "1.25rem", lineHeight: 1.55 }}>{pkg.desc}</p>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.75rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {pkg.features.map((f) => (
                    <li key={f} style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start", fontSize: "0.88rem", color: "var(--text)" }}>
                      <span style={{ fontWeight: 900, flexShrink: 0 }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={pkg.href}
                  className="btn-primary"
                  style={{ display: "block", textAlign: "center", fontSize: "0.9rem" }}
                >
                  {pkg.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* Why DIY with Us */}
      <section style={{ padding: "5rem 0 6rem" }}>
        <div className="container-tight">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <span className="badge">Why Choose Us</span>
            <h2 className="heading-section" style={{ marginTop: "1rem" }}>
              The smarter way to build your website
            </h2>
            <p style={{ color: "var(--text-muted)", marginTop: "0.75rem", fontSize: "1.05rem", maxWidth: 520, marginInline: "auto" }}>
              Skip overpriced subscriptions and generic templates. Get a custom website you actually own.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
            {WHY_US.map((item, i) => (
              <div key={i} className="card">
                <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                  <span style={{ fontSize: "1rem", flexShrink: 0, marginTop: "0.15rem", color: "#111111" }}>✦</span>
                  <div>
                    <h3 style={{ fontSize: "1rem", fontWeight: 800, marginBottom: "0.5rem" }}>{item.title}</h3>
                    <p style={{ color: "var(--text-muted)", lineHeight: 1.65, fontSize: "0.92rem" }}>{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog preview */}
      <section style={{ padding: "3rem 0 6rem", background: "var(--surface)" }}>
        <div className="container-tight">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="badge">Blog</span>
            <h2 className="heading-section" style={{ marginTop: "1rem" }}>
              DIY Website Tips &amp; Guides
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
            {[
              { slug: "diy-website-builder-vs-custom-template", title: "DIY Website Builder vs Custom Template: Which is Better in 2026?", date: "April 2026" },
              { slug: "how-to-build-your-own-website-without-coding", title: "How to Build Your Own Website Without Coding (Step-by-Step Guide)", date: "April 2026" },
              { slug: "cheap-website-templates-for-small-business", title: "Best Cheap Website Templates for Small Businesses — $29 Flat", date: "April 2026" },
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

      {/* CTA Banner */}
      <section style={{ background: "#111111", padding: "5rem 0", textAlign: "center" }}>
        <div className="container-tight">
          <h2 className="heading-section" style={{ color: "#FFFFFF", marginBottom: "1rem" }}>
            Ready to build your website?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.1rem", marginBottom: "2rem", maxWidth: 500, marginInline: "auto" }}>
            Fill out our 4-minute design form and get a professional, custom website template delivered to your inbox — starting at just $29.
          </p>
          <Link href="/generate" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "#FFFFFF", color: "#111111", fontWeight: 700, fontSize: "1.1rem", padding: "1rem 2.5rem", borderRadius: "999px", textDecoration: "none" }}>
            Build My Website — Starting at $29 →
          </Link>
        </div>
      </section>
    </>
  );
}
