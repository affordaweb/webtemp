import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.affordawebsolutions.net").trim();

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Custom Website Template Design",
  description:
    "Custom-designed website templates starting at $29. Fill out a form, we design it, you own the code forever. No subscriptions.",
  provider: {
    "@type": "Organization",
    name: "AffordaWeb Solutions",
    url: SITE_URL,
  },
  offers: [
    {
      "@type": "Offer",
      name: "Starter",
      price: "29",
      priceCurrency: "USD",
      description: "1–3 pages, mobile-responsive, SEO meta tags, contact form, ZIP download, 1 revision round",
      url: `${SITE_URL}/generate`,
    },
    {
      "@type": "Offer",
      name: "Standard",
      price: "79",
      priceCurrency: "USD",
      description: "4–6 pages, everything in Starter, gallery or blog layout, social media links, Google Maps, 2 revision rounds",
      url: `${SITE_URL}/generate`,
    },
    {
      "@type": "Offer",
      name: "Premium",
      price: "129",
      priceCurrency: "USD",
      description: "Up to 8 pages, everything in Standard, testimonials section, priority delivery, 3 revision rounds",
      url: `${SITE_URL}/generate`,
    },
  ],
};

const TESTIMONIALS = [
  {
    name: "Maria L.",
    role: "Freelance Photographer",
    body: "I had my website live in less than 24 hours. The design was exactly what I described — clean, fast, and actually mine. No Wix watermark, no monthly bill.",
  },
  {
    name: "James T.",
    role: "Personal Trainer",
    body: "I was quoted $2,000 by a local agency. AffordaWeb built me something just as professional for $79. I host it on Netlify for free. Game changer.",
  },
  {
    name: "Sofia R.",
    role: "Bakery Owner",
    body: "The form was really easy to fill out. They got the colors and vibe of my brand perfectly. I requested one small change and it was done same day.",
  },
  {
    name: "Daniel K.",
    role: "IT Consultant",
    body: "SEO-ready, mobile-first, and genuinely well-coded. I run too many websites to keep paying platform fees. This model just makes sense.",
  },
  {
    name: "Aisha M.",
    role: "Virtual Assistant",
    body: "Honestly surprised at the quality for $29. I was expecting something basic but it looks like I spent way more. Will use again for a client site.",
  },
  {
    name: "Carlos V.",
    role: "Restaurant Owner",
    body: "I needed something quick before a local event. Submitted the form, paid, and had my site ready to publish the next morning. Exactly what I needed.",
  },
];

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
    pageRange: "1–3 pages",
    desc: "Perfect for a simple, professional online presence.",
    features: ["1–3 pages", "Mobile-responsive", "SEO meta tags", "Contact form", "ZIP download"],
    cta: "Build Starter →",
    popular: false,
    href: "/generate",
  },
  {
    name: "Standard",
    price: "$79",
    pageRange: "4–6 pages",
    desc: "Ideal for service businesses and content-rich sites.",
    features: ["4–6 pages", "Everything in Starter", "Gallery or blog layout", "Social media links", "Google Maps", "2 revision rounds"],
    cta: "Build Standard →",
    popular: true,
    href: "/generate",
  },
  {
    name: "Premium",
    price: "$129",
    pageRange: "Up to 8 pages",
    desc: "Ideal for larger sites with more pages and content.",
    features: ["Up to 8 pages", "Everything in Standard", "Gallery or blog layout", "Testimonials section", "Priority delivery"],
    cta: "Build Premium →",
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
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
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
              Tell us your pages, style, colours, and features. We design a clean,{" "}
              <Link href="/services" style={{ color: "#111111", fontWeight: 600 }}>
                professional website template
              </Link>{" "}
              — custom to your brand. Download the files, host anywhere on platforms like{" "}
              <a href="https://www.netlify.com" target="_blank" rel="noopener noreferrer" style={{ color: "#111111", textDecoration: "underline" }}>Netlify</a>
              , own it forever.
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
                { label: "Starting price", value: "$29" },
                { label: "Avg. delivery", value: "< 48 hrs" },
                { label: "Monthly fees", value: "$0" },
              ].map((s) => (
                <div key={s.label}>
                  <div style={{ fontSize: "1.5rem", fontWeight: 900, letterSpacing: "-0.03em", color: "#111111" }}>{s.value}</div>
                  <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: hero illustration */}
          <div className="hero-svg-col anim-fade-up anim-delay-2" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <svg
              width="100%"
              viewBox="0 0 480 360"
              xmlns="http://www.w3.org/2000/svg"
              style={{ maxWidth: 460 }}
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="bgGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#141414" />
                  <stop offset="100%" stopColor="#1e1e1e" />
                </linearGradient>
                <linearGradient id="heroBarGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#f5f5f5" />
                  <stop offset="100%" stopColor="#d4d4d4" />
                </linearGradient>
                <linearGradient id="btnGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#3d3d3d" />
                  <stop offset="100%" stopColor="#2a2a2a" />
                </linearGradient>
                <filter id="shadow" x="-10%" y="-10%" width="120%" height="130%">
                  <feDropShadow dx="0" dy="8" stdDeviation="18" floodColor="#000000" floodOpacity="0.22" />
                </filter>
                <clipPath id="browserClip">
                  <rect x="40" y="30" width="400" height="300" rx="16" />
                </clipPath>
              </defs>

              {/* Browser shell */}
              <rect x="40" y="30" width="400" height="300" rx="16" fill="url(#bgGrad)" filter="url(#shadow)" />

              {/* Title bar */}
              <rect x="40" y="30" width="400" height="42" rx="16" fill="#1a1a1a" />
              <rect x="40" y="56" width="400" height="16" fill="#1a1a1a" />

              {/* Traffic lights */}
              <circle cx="68" cy="51" r="5.5" fill="#FF5F57" />
              <circle cx="84" cy="51" r="5.5" fill="#FEBC2E" />
              <circle cx="100" cy="51" r="5.5" fill="#27C93F" />

              {/* URL bar */}
              <rect x="120" y="41" width="260" height="20" rx="6" fill="#2a2a2a" />
              <rect x="130" y="47.5" width="12" height="7" rx="2" fill="#4a4a4a" />
              <rect x="147" y="50.5" width="80" height="3" rx="1.5" fill="#555555" />

              {/* Page background inside browser */}
              <rect x="40" y="72" width="400" height="258" fill="#ffffff" clipPath="url(#browserClip)" />

              {/* Nav bar inside page */}
              <rect x="40" y="72" width="400" height="32" fill="#f9f9f9" />
              <rect x="56" y="82" width="32" height="10" rx="3" fill="#cccccc" />
              <rect x="98" y="85" width="22" height="4" rx="2" fill="#d1d5db" />
              <rect x="128" y="85" width="22" height="4" rx="2" fill="#d1d5db" />
              <rect x="158" y="85" width="22" height="4" rx="2" fill="#d1d5db" />
              <rect x="358" y="81" width="68" height="14" rx="7" fill="#111111" />
              <rect x="368" y="86.5" width="48" height="3" rx="1.5" fill="#ffffff" opacity="0.7" />

              {/* Hero section inside page */}
              <rect x="40" y="104" width="400" height="100" fill="#111111" />
              {/* hero headline bar — animated width */}
              <rect x="80" y="122" width="200" height="12" rx="4" fill="url(#heroBarGrad)">
                <animate attributeName="width" values="200;210;200" dur="3s" repeatCount="indefinite" />
              </rect>
              <rect x="80" y="140" width="155" height="7" rx="3" fill="#9ca3af" />
              <rect x="80" y="153" width="120" height="7" rx="3" fill="#6b7280" />
              {/* CTA button */}
              <rect x="80" y="168" width="90" height="22" rx="11" fill="#ffffff" />
              <rect x="91" y="174.5" width="68" height="3" rx="1.5" fill="#111111" />
              <rect x="178" y="168" width="72" height="22" rx="11" fill="url(#btnGrad)" />
              <rect x="186" y="174.5" width="56" height="3" rx="1.5" fill="#9ca3af" />

              {/* Three feature cards row */}
              <rect x="56" y="220" width="112" height="80" rx="10" fill="#f8f8f8" stroke="#e5e7eb" strokeWidth="1.5" />
              <rect x="184" y="220" width="112" height="80" rx="10" fill="#f8f8f8" stroke="#e5e7eb" strokeWidth="1.5">
                <animate attributeName="y" values="220;215;220" dur="2.4s" repeatCount="indefinite" />
              </rect>
              <rect x="312" y="220" width="112" height="80" rx="10" fill="#f8f8f8" stroke="#e5e7eb" strokeWidth="1.5" />

              {/* Card content — col 1 */}
              <circle cx="88" cy="244" r="10" fill="#e5e7eb" />
              <rect x="68" y="260" width="68" height="5" rx="2.5" fill="#d1d5db" />
              <rect x="68" y="271" width="52" height="4" rx="2" fill="#e5e7eb" />
              <rect x="68" y="281" width="40" height="12" rx="6" fill="#111111" />

              {/* Card content — col 2 */}
              <circle cx="216" cy="244" r="10" fill="#e5e7eb" />
              <rect x="196" y="260" width="68" height="5" rx="2.5" fill="#d1d5db" />
              <rect x="196" y="271" width="52" height="4" rx="2" fill="#e5e7eb" />
              <rect x="196" y="281" width="40" height="12" rx="6" fill="#111111" />

              {/* Card content — col 3 */}
              <circle cx="344" cy="244" r="10" fill="#e5e7eb" />
              <rect x="324" y="260" width="68" height="5" rx="2.5" fill="#d1d5db" />
              <rect x="324" y="271" width="52" height="4" rx="2" fill="#e5e7eb" />
              <rect x="324" y="281" width="40" height="12" rx="6" fill="#111111" />

              {/* Floating badge — animated */}
              <g>
                <animateTransform attributeName="transform" type="translate" values="0,0;0,-6;0,0" dur="3s" repeatCount="indefinite" />
                <rect x="310" y="46" width="110" height="40" rx="12" fill="#ffffff" filter="url(#shadow)" />
                <circle cx="330" cy="66" r="10" fill="#111111" />
                <text x="330" y="70" textAnchor="middle" fontSize="9" fontWeight="900" fill="#ffffff">$29</text>
                <rect x="347" y="59" width="58" height="5" rx="2.5" fill="#111111" />
                <rect x="347" y="68" width="43" height="4" rx="2" fill="#9ca3af" />
              </g>
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
              You fill out the form. We handle the design. You walk away with a professional website you own.{" "}
              <Link href="/blog/how-to-build-your-own-website-without-coding" style={{ color: "#111111", fontWeight: 600 }}>
                See the step-by-step guide →
              </Link>
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
              One flat payment. No monthly fees, no renewals, no hidden costs. Pick your tier and get your custom template.{" "}
              <Link href="/blog/how-much-does-a-website-cost" style={{ color: "#111111", fontWeight: 600 }}>
                Full website cost breakdown →
              </Link>
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: "1.25rem", alignItems: "stretch" }}>
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
                  style={{ display: "block", textAlign: "center", fontSize: "0.9rem", marginTop: "auto" }}
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
              Skip overpriced subscriptions and generic templates. Get a custom website you actually own.{" "}
              <Link href="/blog/website-design-without-a-developer" style={{ color: "#111111", fontWeight: 600 }}>
                Compare all your options →
              </Link>
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

      {/* Testimonials */}
      <section style={{ padding: "6rem 0", background: "var(--surface)" }}>
        <div className="container-tight">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <span className="badge">What Clients Say</span>
            <h2 className="heading-section" style={{ marginTop: "1rem" }}>
              Real results from real clients
            </h2>
            <p style={{ color: "var(--text-muted)", marginTop: "0.75rem", fontSize: "1.05rem", maxWidth: 500, marginInline: "auto" }}>
              Hundreds of small business owners have launched with AffordaWeb — here&apos;s what they say.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="card" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <p style={{ color: "var(--text-muted)", lineHeight: 1.7, fontSize: "0.93rem", flex: 1 }}>
                  &ldquo;{t.body}&rdquo;
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", paddingTop: "0.75rem", borderTop: "1.5px solid var(--border)" }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#111111", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: "0.85rem", fontWeight: 800, flexShrink: 0 }}>
                    {t.name[0]}
                  </div>
                  <div>
                    <div style={{ fontSize: "0.88rem", fontWeight: 800, color: "#111111" }}>{t.name}</div>
                    <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", fontWeight: 600 }}>{t.role}</div>
                  </div>
                  <div style={{ marginLeft: "auto", color: "#f59e0b", fontSize: "0.75rem", letterSpacing: 1 }}>★★★★★</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog preview */}
      <section style={{ padding: "3rem 0 6rem" }}>
        <div className="container-tight">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="badge">Blog</span>
            <h2 className="heading-section" style={{ marginTop: "1rem" }}>
              DIY Website Tips &amp; Guides
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
            {[
              { slug: "what-is-a-hand-coded-website", title: "What Is a Hand-Coded Website? Why It Outperforms Any Website Builder", date: "April 2026" },
              { slug: "how-to-build-your-own-website-without-coding", title: "How to Build Your Own Website Without Coding (2026 Guide)", date: "April 2026" },
              { slug: "best-website-templates-for-small-business", title: "Best Website Templates for Small Business in 2026", date: "April 2026" },
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
