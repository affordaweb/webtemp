"use client";

import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      style={{
        background: "var(--surface)",
        borderTop: "1.5px solid var(--border)",
        padding: "3rem 0 2rem",
      }}
    >
      <div className="container-tight">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "2.5rem",
            marginBottom: "2.5rem",
          }}
        >
          {/* Brand */}
          <div>
            <Link href="/" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
              <svg width="22" height="18" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M1 2L7.5 20L13 10L18.5 20L25 2" stroke="#111111" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span style={{ fontSize: "1rem", fontWeight: 900, letterSpacing: "-0.03em", color: "#111111" }}>AffordaWeb Solutions</span>
            </Link>
            <p style={{ color: "var(--text-muted)", fontSize: "0.88rem", lineHeight: 1.6, maxWidth: 240 }}>
              Affordable website design by top-rated Filipino web designers. Professional quality, prices that make sense.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 style={{ fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-muted)", marginBottom: "1rem" }}>
              Services
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              <li><FooterLink href="/#how-it-works">How It Works</FooterLink></li>
              <li><FooterLink href="/#pricing">Pricing</FooterLink></li>
              <li><FooterLink href="/generate">Order a Website</FooterLink></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 style={{ fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-muted)", marginBottom: "1rem" }}>
              Company
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              <li><FooterLink href="/about">About Us</FooterLink></li>
              <li><FooterLink href="/blog">Blog</FooterLink></li>
              <li><FooterLink href="mailto:hello@affordawebsolutions.com">Contact</FooterLink></li>
            </ul>
          </div>
        </div>

        <div
          style={{
            borderTop: "1.5px solid var(--border)",
            paddingTop: "1.5rem",
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <p style={{ color: "var(--text-muted)", fontSize: "0.83rem", margin: 0 }}>
            © {year} AffordaWeb Solutions. All rights reserved.
          </p>
          <p style={{ color: "var(--text-muted)", fontSize: "0.83rem", margin: 0 }}>
            Affordable website design · Based in the Philippines
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      style={{ color: "var(--text-muted)", textDecoration: "none", fontSize: "0.9rem", transition: "color 0.2s" }}
      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
    >
      {children}
    </Link>
  );
}


export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      style={{
        background: "var(--surface)",
        borderTop: "1.5px solid var(--border)",
        padding: "3rem 0 2rem",
      }}
    >
      <div className="container-tight">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "2.5rem",
            marginBottom: "2.5rem",
          }}
        >
          {/* Brand */}
          <div>
            <Link href="/" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
              <svg width="22" height="18" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M1 2L7.5 20L13 10L18.5 20L25 2" stroke="#111111" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span style={{ fontSize: "1.1rem", fontWeight: 900, letterSpacing: "-0.04em", color: "#111111" }}>WebTemp</span>
            </Link>
            <p style={{ color: "var(--text-muted)", fontSize: "0.88rem", lineHeight: 1.6, maxWidth: 220 }}>
              Custom website templates delivered to your inbox. You own the code — no subscriptions.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 style={{ fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-muted)", marginBottom: "1rem" }}>
              Product
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              <li><FooterLink href="/#how-it-works">How It Works</FooterLink></li>
              <li><FooterLink href="/#pricing">Pricing</FooterLink></li>
              <li><FooterLink href="/generate">Get Started</FooterLink></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 style={{ fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-muted)", marginBottom: "1rem" }}>
              Support
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              <li><FooterLink href="mailto:hello@webtemp.dev">Contact Us</FooterLink></li>
            </ul>
          </div>
        </div>

        <div
          style={{
            borderTop: "1.5px solid var(--border)",
            paddingTop: "1.5rem",
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <p style={{ color: "var(--text-muted)", fontSize: "0.83rem", margin: 0 }}>
            © {year} WebTemp. All rights reserved.
          </p>
          <p style={{ color: "var(--text-muted)", fontSize: "0.83rem", margin: 0 }}>
            Powered by{" "}
            <a href="https://affordawebsolutions.net" target="_blank" rel="noopener noreferrer" style={{ color: "#111111", textDecoration: "none", fontWeight: 600 }}>
              AffordaWeb Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      style={{ color: "var(--text-muted)", textDecoration: "none", fontSize: "0.9rem", transition: "color 0.2s" }}
      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
    >
      {children}
    </Link>
  );
}
