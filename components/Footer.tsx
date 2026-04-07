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
              <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <defs>
                  <linearGradient id="fLogoGrad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#0f0f0f" />
                    <stop offset="100%" stopColor="#2e2e2e" />
                  </linearGradient>
                  <linearGradient id="fAccentBar" x1="0" y1="0" x2="16" y2="0" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#ffffff" stopOpacity="0.5" />
                  </linearGradient>
                </defs>
                <rect width="40" height="40" rx="10" fill="url(#fLogoGrad)" />
                <rect x="0" y="0" width="40" height="13" rx="10" fill="rgba(255,255,255,0.05)" />
                <rect x="0" y="10" width="40" height="3" fill="rgba(255,255,255,0.05)" />
                <circle cx="10.5" cy="6.5" r="2" fill="#FF5F57" />
                <circle cx="17" cy="6.5" r="2" fill="#FEBC2E" />
                <circle cx="23.5" cy="6.5" r="2" fill="#27C93F" />
                <rect x="7" y="13" width="26" height="1" rx="0.5" fill="rgba(255,255,255,0.1)" />
                <rect x="7" y="16" width="8" height="17" rx="2" fill="rgba(255,255,255,0.1)" />
                <rect x="17.5" y="16" width="15" height="4" rx="1.5" fill="url(#fAccentBar)" />
                <rect x="17.5" y="22.5" width="11" height="2.5" rx="1" fill="rgba(255,255,255,0.25)" />
                <rect x="17.5" y="27" width="8" height="2.5" rx="1" fill="rgba(255,255,255,0.15)" />
                <rect x="0" y="36" width="40" height="4" rx="4" fill="rgba(255,255,255,0.06)" />
              </svg>
              <span style={{ fontSize: "1rem", fontWeight: 900, letterSpacing: "-0.03em", color: "#111111" }}>AffordaWeb Solutions</span>
            </Link>
            <p style={{ color: "var(--text-muted)", fontSize: "0.88rem", lineHeight: 1.6, maxWidth: 240 }}>
              DIY website templates built to order. Tell us what you need — we design it, you own it forever. Starting at $29.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 style={{ fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-muted)", marginBottom: "1rem" }}>
              Templates
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              <li><FooterLink href="/generate">Build My Website</FooterLink></li>
              <li><FooterLink href="/services">Services & Pricing</FooterLink></li>
              <li><FooterLink href="/#how-it-works">How It Works</FooterLink></li>
              <li><FooterLink href="/#pricing">Pricing</FooterLink></li>
              <li><FooterLink href="/portfolio">Portfolio</FooterLink></li>
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
              <li><FooterLink href="/faq">FAQ</FooterLink></li>
              <li><FooterLink href="/contact">Contact</FooterLink></li>
              <li><FooterLink href="/privacy">Privacy Policy</FooterLink></li>
              <li><FooterLink href="/terms">Terms of Service</FooterLink></li>
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
          <div style={{ display: "flex", gap: "1.25rem", alignItems: "center", flexWrap: "wrap" }}>
            <Link href="/privacy" style={{ color: "var(--text-muted)", fontSize: "0.83rem", textDecoration: "none" }}>Privacy Policy</Link>
            <Link href="/terms" style={{ color: "var(--text-muted)", fontSize: "0.83rem", textDecoration: "none" }}>Terms of Service</Link>
            <span style={{ color: "var(--text-muted)", fontSize: "0.83rem" }}>DIY website templates · Starting at $29 · You own the files</span>
          </div>
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
