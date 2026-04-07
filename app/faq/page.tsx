import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Affordable Website Design FAQ — Pricing, Ownership & Process",
  description:
    "Got questions about affordable website design? Find answers on pricing, process, ownership, SEO, turnaround time, hosting, and more. Packages from $29.",
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
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
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
