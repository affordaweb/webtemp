"use client";

import Link from "next/link";
import { useState } from "react";

function Logo() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="logoGrad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0f0f0f" />
          <stop offset="100%" stopColor="#2e2e2e" />
        </linearGradient>
        <linearGradient id="accentBar" x1="0" y1="0" x2="16" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.5" />
        </linearGradient>
      </defs>
      {/* Card background */}
      <rect width="40" height="40" rx="10" fill="url(#logoGrad)" />
      {/* Top bar */}
      <rect x="0" y="0" width="40" height="13" rx="10" fill="rgba(255,255,255,0.05)" />
      <rect x="0" y="10" width="40" height="3" fill="rgba(255,255,255,0.05)" />
      {/* Traffic light dots */}
      <circle cx="10.5" cy="6.5" r="2" fill="#FF5F57" />
      <circle cx="17" cy="6.5" r="2" fill="#FEBC2E" />
      <circle cx="23.5" cy="6.5" r="2" fill="#27C93F" />
      {/* Divider line */}
      <rect x="7" y="13" width="26" height="1" rx="0.5" fill="rgba(255,255,255,0.1)" />
      {/* Sidebar column */}
      <rect x="7" y="16" width="8" height="17" rx="2" fill="rgba(255,255,255,0.1)" />
      {/* Main content - headline */}
      <rect x="17.5" y="16" width="15" height="4" rx="1.5" fill="url(#accentBar)" />
      {/* Main content - body lines */}
      <rect x="17.5" y="22.5" width="11" height="2.5" rx="1" fill="rgba(255,255,255,0.25)" />
      <rect x="17.5" y="27" width="8" height="2.5" rx="1" fill="rgba(255,255,255,0.15)" />
      {/* Bottom accent strip */}
      <rect x="0" y="36" width="40" height="4" rx="4" fill="rgba(255,255,255,0.06)" />
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backdropFilter: "blur(16px)",
        background: "rgba(255,255,255,0.88)",
        borderBottom: "1.5px solid var(--border)",
      }}
    >
      <div className="container-tight" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "3.75rem" }}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "0.65rem" }}>
          <Logo />
          <span style={{ display: "flex", flexDirection: "column", lineHeight: 1.1, gap: "1px" }}>
            <span style={{ fontSize: "1.05rem", fontWeight: 900, letterSpacing: "-0.04em", color: "#111111" }}>
              Afforda<span style={{ color: "#555555" }}>Web</span>
            </span>
            <span style={{ fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.13em", color: "#999999", textTransform: "uppercase" }}>
              Solutions
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: "1.5rem" }} className="hidden md:flex">
          <NavLink href="/services">Services</NavLink>
          <NavLink href="/#pricing">Pricing</NavLink>
          <NavLink href="/portfolio">Portfolio</NavLink>
          <NavLink href="/faq">FAQ</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/blog">Blog</NavLink>
          <Link href="/generate" className="btn-primary" style={{ fontSize: "0.88rem", padding: "0.6rem 1.4rem" }}>
            Build My Website →
          </Link>
        </nav>

        {/* Hamburger */}
        <button
          className="md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
          style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text)", padding: "0.25rem" }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: "#FFFFFF", borderBottom: "1.5px solid var(--border)", padding: "1rem 1.25rem" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
            <NavLink href="/services" onClick={() => setOpen(false)}>Services</NavLink>
            <NavLink href="/#pricing" onClick={() => setOpen(false)}>Pricing</NavLink>
            <NavLink href="/portfolio" onClick={() => setOpen(false)}>Portfolio</NavLink>
            <NavLink href="/faq" onClick={() => setOpen(false)}>FAQ</NavLink>
            <NavLink href="/about" onClick={() => setOpen(false)}>About</NavLink>
            <NavLink href="/blog" onClick={() => setOpen(false)}>Blog</NavLink>
            <Link href="/generate" className="btn-primary" style={{ textAlign: "center", fontSize: "0.9rem" }} onClick={() => setOpen(false)}>
              Build My Website →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

function NavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      style={{ color: "var(--text-muted)", textDecoration: "none", fontWeight: 600, fontSize: "0.92rem", transition: "color 0.2s" }}
      onMouseEnter={(e) => (e.currentTarget.style.color = "#111111")}
      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
    >
      {children}
    </Link>
  );
}
