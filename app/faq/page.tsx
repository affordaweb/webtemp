import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Affordable Website Design FAQ — Pricing, Ownership & Process",
  description:
    "Got questions about affordable website design? Find answers on pricing, process, ownership, SEO, turnaround time, hosting, and more. Packages from $49.",
  alternates: { canonical: "/faq" },
};

const FAQ_SECTIONS = [
  {
    title: "Pricing & Cost",
    items: [
      {
        q: "How much does an affordable website cost?",
        a: "Our packages start at $49 for the Starter (1–3 pages), $79 for Standard (4–6 pages), and $129 for Premium (up to 8 pages). No hidden fees — what you see is what you pay.",
      },
      {
        q: "Do you charge monthly fees or subscriptions?",
        a: "No. You make one flat payment and that's it. You own the files forever with no ongoing charges from us.",
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept payment via PayPal invoice. It's secure and comes with PayPal's buyer protection.",
      },
      {
        q: "Are there any extra costs?",
        a: "Only if you choose the optional live setup add-on ($25), where we deploy the site for you. Domain registration and hosting are separate — we recommend Namecheap for both, with affordable options available for under $20/year.",
      },
    ],
  },
  {
    title: "Process & Delivery",
    items: [
      {
        q: "How long does it take to get my website?",
        a: "Templates are delivered instantly once payment is confirmed. You\'ll receive your download link by email right away.",
      },
      {
        q: "What do I need to provide?",
        a: "Your business name, industry, pages needed, color preferences, and any existing copy (text) or logo you have. Our order form will guide you through everything step by step.",
      },
      {
        q: "Can I request revisions?",
        a: "Yes. Starter includes 1 revision round, Standard includes 2, and Premium includes 3. We want you to be happy with the result.",
      },
      {
        q: "How do I receive my website?",
        a: "We send you a download link via email with a ZIP file containing all your HTML, CSS, and assets — plus a PDF setup guide so you can deploy it easily.",
      },
    ],
  },
  {
    title: "Ownership & Hosting",
    items: [
      {
        q: "Do I own the website files?",
        a: "Yes, 100%. Every file is yours. No licensing fees, no ongoing charges. You can modify, redistribute, or deploy the site anywhere without restriction.",
      },
      {
        q: "Where can I host my website?",
        a: "Anywhere you like — Netlify (free tier available), GitHub Pages (free), Hostinger, Namecheap, GoDaddy, and more. We include full deployment instructions in your setup guide.",
      },
      {
        q: "Can you host the website for me?",
        a: "Yes. For a one-time $25 add-on, we will deploy your site on a platform of your choice and configure your domain. Just let us know when you order.",
      },
    ],
  },
  {
    title: "Design & Quality",
    items: [
      {
        q: "Is the website mobile-friendly?",
        a: "Absolutely. Every website we build is designed mobile-first and thoroughly tested across smartphones, tablets, and desktops.",
      },
      {
        q: "Is the website SEO-optimised?",
        a: "Yes. We use semantic HTML5, proper heading structure, optimised meta tags, descriptive alt text, and clean code that search engines love. Fast load times are also built in by default.",
      },
      {
        q: "Can I use a website builder or WordPress instead?",
        a: "You can, but our hand-coded sites are significantly lighter, faster, and cheaper to maintain long-term. There are no monthly platform fees, no plugin updates, and no security vulnerabilities from third-party themes.",
      },
      {
        q: "Is this better than an AI website builder?",
        a: "Significantly. AI website generators like Wix ADI and Framer AI create generic-looking sites on subscription platforms — you never truly own the result. Every AffordaWeb template is designed by a human professional, hand-coded for your specific brand, and delivered as files you own forever.",
      },
      {
        q: "Can AI really create a good website for my business?",
        a: "AI tools can generate something quickly, but the output is typically generic, SEO-weak, and platform-locked. For a real business that needs distinct brand identity and long-term SEO performance, a hand-coded, human-designed website consistently outperforms AI-generated results.",
      },
    ],
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_SECTIONS.flatMap((section) =>
    section.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    }))
  ),
};

const FAQ_ENHANCED: Record<string, ReactNode> = {
  "How much does an affordable website cost?": (
    <>
      Our packages start at $49 (Starter, 1–3 pages), $79 (Standard, 4–6 pages), and $129 (Premium, up to 8 pages).{" "}
      No hidden fees.{" "}
      <Link href="/blog/how-much-does-a-website-cost" style={{ color: "#111111", fontWeight: 600 }}>
        Read our full honest website cost breakdown →
      </Link>
    </>
  ),
  "Where can I host my website?": (
    <>
      Anywhere you like —{" "}
      <a href="https://www.netlify.com" target="_blank" rel="noopener noreferrer" style={{ color: "#111111", textDecoration: "underline" }}>Netlify</a>{" "}
      (free tier),{" "}
      <a href="https://pages.github.com" target="_blank" rel="noopener noreferrer" style={{ color: "#111111", textDecoration: "underline" }}>GitHub Pages</a>{" "}
      (free),{" "}
      <a href="https://www.namecheap.com" target="_blank" rel="noopener noreferrer" style={{ color: "#111111", textDecoration: "underline" }}>Namecheap</a>
      , GoDaddy, and more. We include full deployment instructions in your setup guide.
    </>
  ),
  "Can I use a website builder or WordPress instead?": (
    <>
      You can, but our{" "}
      <Link href="/blog/what-is-a-hand-coded-website" style={{ color: "#111111", fontWeight: 600 }}>hand-coded sites</Link>{" "}
      are significantly lighter, faster, and cheaper to maintain long-term. No monthly fees, no plugin updates, no security vulnerabilities.{" "}
      <Link href="/blog/website-design-without-a-developer" style={{ color: "#111111", fontWeight: 600 }}>Compare all your website options →</Link>
    </>
  ),
  "Is this better than an AI website builder?": (
    <>
      Significantly. AI tools like{" "}
      <a href="https://www.wix.com/website/templates" target="_blank" rel="noopener noreferrer" style={{ color: "#111111", textDecoration: "underline" }}>Wix ADI</a>{" "}
      and{" "}
      <a href="https://www.framer.com" target="_blank" rel="noopener noreferrer" style={{ color: "#111111", textDecoration: "underline" }}>Framer AI</a>{" "}
      generate generic sites on subscription platforms — you never truly own the result. Every AffordaWeb template is{" "}
      <Link href="/blog/what-is-a-hand-coded-website" style={{ color: "#111111", fontWeight: 600 }}>hand-coded by a human professional</Link>{" "}
      for your specific brand, delivered as files you own forever.
    </>
  ),
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
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
          <span className="badge">FAQ</span>
          <h1 className="heading-hero" style={{ marginTop: "1.25rem", color: "#111111" }}>
            Frequently Asked Questions About<br />Affordable Website Design
          </h1>
          <p
            style={{
              marginTop: "1.25rem",
              color: "var(--text-muted)",
              fontSize: "clamp(1rem, 2.5vw, 1.15rem)",
              lineHeight: 1.7,
              maxWidth: 560,
              marginInline: "auto",
            }}
          >
            Everything you need to know about our pricing, process, ownership, and quality. Can&apos;t find your answer? Reach out directly.
          </p>
        </div>
      </section>

      {/* ── FAQ Content ── */}
      <section style={{ padding: "5rem 0" }}>
        <div className="container-tight">
          {FAQ_SECTIONS.map((section, si) => (
            <div key={section.title} style={{ marginBottom: si < FAQ_SECTIONS.length - 1 ? "4rem" : 0 }}>
              <h2 className="heading-section" style={{ marginBottom: "2rem", fontSize: "1.4rem" }}>
                {section.title}
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {section.items.map((item) => (
                  <div
                    key={item.q}
                    style={{
                      borderBottom: "1.5px solid var(--border)",
                      paddingBottom: "1.5rem",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "1rem",
                        fontWeight: 800,
                        color: "#111111",
                        marginBottom: "0.65rem",
                        lineHeight: 1.4,
                      }}
                    >
                      {item.q}
                    </h3>
                    <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.7, margin: 0 }}>
                      {FAQ_ENHANCED[item.q] ?? item.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Related Reading ── */}
      <section style={{ padding: "2.5rem 0", borderTop: "1.5px solid var(--border)" }}>
        <div className="container-tight">
          <p style={{ fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-muted)", marginBottom: "1rem" }}>
            Related Guides
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.65rem" }}>
            {[
              { href: "/blog/how-much-does-a-website-cost", label: "How Much Does a Website Cost?" },
              { href: "/blog/what-is-a-hand-coded-website", label: "What Is a Hand-Coded Website?" },
              { href: "/blog/website-design-without-a-developer", label: "Website Design Without a Developer" },
              { href: "/blog/affordable-website-design-for-small-business", label: "Affordable Website Design Guide" },
              { href: "/blog/why-hire-a-filipino-web-designer", label: "Why Hire a Filipino Web Designer?" },
              { href: "/blog/how-to-build-your-own-website-without-coding", label: "Build a Website Without Coding" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.35rem",
                  padding: "0.45rem 1rem",
                  background: "var(--surface)",
                  border: "1.5px solid var(--border)",
                  borderRadius: "999px",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  color: "#111111",
                  textDecoration: "none",
                }}
              >
                → {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Still have questions ── */}
      <section style={{ padding: "4rem 0 5rem", background: "var(--surface)", borderTop: "1.5px solid var(--border)" }}>
        <div className="container-tight" style={{ textAlign: "center" }}>
          <span className="badge">Still Have Questions?</span>
          <h2 className="heading-section" style={{ marginTop: "1rem", marginBottom: "1rem" }}>
            We&apos;re Happy to Help
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "1rem", marginBottom: "2rem", lineHeight: 1.7 }}>
            Reach out to us directly and we&apos;ll get back to you within 24 hours. Or, if you&apos;re ready, jump straight to the order form.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-primary">
              Contact Us →
            </Link>
            <Link
              href="/generate"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "transparent",
                color: "#111111",
                fontWeight: 700,
                fontSize: "0.95rem",
                padding: "0.75rem 1.75rem",
                borderRadius: "999px",
                textDecoration: "none",
                border: "2px solid #111111",
              }}
            >
              Order a Website →
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: "#111111", padding: "5rem 0", textAlign: "center" }}>
        <div className="container-tight">
          <h2 className="heading-section" style={{ color: "#FFFFFF", marginBottom: "1rem" }}>
            Ready to get started?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.05rem", marginBottom: "2rem", maxWidth: 440, marginInline: "auto" }}>
            Get a professionally hand-coded website starting from $49 with no subscriptions.
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
