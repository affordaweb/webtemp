"use client";

import Link from "next/link";
import { useState } from "react";

function Logo() {
  return (
    <svg width="26" height="22" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M1 2L7.5 20L13 10L18.5 20L25 2" stroke="#111111" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
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
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "0.55rem" }}>
          <Logo />
          <span style={{ fontSize: "1.2rem", fontWeight: 900, letterSpacing: "-0.04em", color: "#111111" }}>
            WebTemp
          </span>
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: "1.5rem" }} className="hidden md:flex">
          <NavLink href="/#how-it-works">How It Works</NavLink>
          <NavLink href="/#pricing">Pricing</NavLink>
          <Link href="/generate" className="btn-primary" style={{ fontSize: "0.9rem", padding: "0.6rem 1.4rem" }}>
            Get Started →
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
            <NavLink href="/#how-it-works" onClick={() => setOpen(false)}>How It Works</NavLink>
            <NavLink href="/#pricing" onClick={() => setOpen(false)}>Pricing</NavLink>
            <Link href="/generate" className="btn-primary" style={{ textAlign: "center", fontSize: "0.9rem" }} onClick={() => setOpen(false)}>
              Get Started →
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
