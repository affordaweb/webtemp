import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | AffordaWeb Solutions",
  description:
    "Get in touch with AffordaWeb Solutions. Reach our team of affordable website designers for questions, quotes, and support. We typically respond within 24 hours.",
  alternates: { canonical: "/contact" },
};

const CONTACT_INFO = [
  {
    icon: "✉",
    title: "Email Us",
    value: "hello@affordawebsolutions.com",
    href: "mailto:hello@affordawebsolutions.com",
  },
  {
    icon: "⏱",
    title: "Response Time",
    value: "Within 24 hours",
    href: null,
  },
  {
    icon: "🕐",
    title: "Working Hours",
    value: "Mon–Fri, 8am–6pm PHT",
    href: null,
  },
];

export default function ContactPage() {
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
        <div className="container-tight" style={{ position: "relative" }}>
          <span className="badge">Contact Us</span>
          <h1 className="heading-hero" style={{ marginTop: "1.25rem", color: "#111111" }}>
            Get in Touch —<br />We&apos;d Love to Help
          </h1>
          <p
            style={{
              marginTop: "1.25rem",
              color: "var(--text-muted)",
              fontSize: "clamp(1rem, 2.5vw, 1.15rem)",
              lineHeight: 1.7,
              maxWidth: 520,
              marginInline: "auto",
            }}
          >
            Have a question about our services, pricing, or process? We&apos;re here to help and typically respond within 24 hours.
          </p>
        </div>
      </section>

      {/* ── Two-column layout ── */}
      <section style={{ padding: "5rem 0" }}>
        <div className="container-tight">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "3rem",
              alignItems: "start",
            }}
          >
            {/* Left: Contact info */}
            <div>
              <h2 className="heading-section" style={{ marginBottom: "2rem" }}>
                Contact Information
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {CONTACT_INFO.map((info) => (
                  <div
                    key={info.title}
                    className="card"
                    style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}
                  >
                    <div
                      style={{
                        width: "2.5rem",
                        height: "2.5rem",
                        background: "var(--surface)",
                        border: "1.5px solid var(--border)",
                        borderRadius: "0.5rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.1rem",
                        flexShrink: 0,
                      }}
                    >
                      {info.icon}
                    </div>
                    <div>
                      <div style={{ fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--text-muted)", marginBottom: "0.25rem" }}>
                        {info.title}
                      </div>
                      {info.href ? (
                        <a
                          href={info.href}
                          style={{ fontSize: "0.95rem", fontWeight: 600, color: "#111111", textDecoration: "none" }}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div style={{ fontSize: "0.95rem", fontWeight: 600, color: "#111111" }}>{info.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Order CTA */}
              <div
                style={{
                  marginTop: "2rem",
                  background: "#111111",
                  borderRadius: "1rem",
                  padding: "1.75rem",
                  color: "#FFFFFF",
                }}
              >
                <div style={{ fontWeight: 800, fontSize: "1rem", marginBottom: "0.5rem" }}>Ready to order?</div>
                <p style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.7)", marginBottom: "1.25rem", lineHeight: 1.6 }}>
                  Skip the back-and-forth and use our quick order form to get your website.
                </p>
                <Link
                  href="/generate"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    background: "#FFFFFF",
                    color: "#111111",
                    fontWeight: 700,
                    fontSize: "0.9rem",
                    padding: "0.65rem 1.5rem",
                    borderRadius: "999px",
                    textDecoration: "none",
                  }}
                >
                  Order a Website →
                </Link>
              </div>
            </div>

            {/* Right: Contact form */}
            <div>
              <h2 className="heading-section" style={{ marginBottom: "2rem" }}>
                Send Us a Message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: "#111111", padding: "5rem 0", textAlign: "center" }}>
        <div className="container-tight">
          <h2 className="heading-section" style={{ color: "#FFFFFF", marginBottom: "1rem" }}>
            Not sure where to start?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.05rem", marginBottom: "2rem", maxWidth: 440, marginInline: "auto" }}>
            Browse our services page or check out our FAQ for quick answers.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="/services"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "#FFFFFF",
                color: "#111111",
                fontWeight: 700,
                fontSize: "1rem",
                padding: "0.9rem 2rem",
                borderRadius: "999px",
                textDecoration: "none",
              }}
            >
              View Services →
            </Link>
            <Link
              href="/faq"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "transparent",
                color: "#FFFFFF",
                fontWeight: 700,
                fontSize: "1rem",
                padding: "0.9rem 2rem",
                borderRadius: "999px",
                textDecoration: "none",
                border: "2px solid rgba(255,255,255,0.4)",
              }}
            >
              Read FAQ →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
