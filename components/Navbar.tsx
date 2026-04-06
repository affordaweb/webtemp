"use client";

import Link from "next/link";
import { useState } from "react";

function Logo() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="32" height="32" rx="8" fill="#111111"/>
      <text x="16" y="22" textAnchor="middle" fontFamily="system-ui, -apple-system, sans-serif" fontSize="13" fontWeight="900" fill="#FFFFFF" letterSpacing="-1">AW</text>
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
          <span style={{ fontSize: "1.05rem", fontWeight: 900, letterSpacing: "-0.03em", color: "#111111" }}>
            AffordaWeb Solutions
          </span>
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: "1.5rem" }} className="hidden md:flex">
          <NavLink href="/services">Services</NavLink>
          <NavLink href="/portfolio">Portfolio</NavLink>
          <NavLink href="/faq">FAQ</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/blog">Blog</NavLink>
          <Link href="/generate" className="btn-primary" style={{ fontSize: "0.88rem", padding: "0.6rem 1.4rem" }}>
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
            <NavLink href="/services" onClick={() => setOpen(false)}>Services</NavLink>
            <NavLink href="/portfolio" onClick={() => setOpen(false)}>Portfolio</NavLink>
            <NavLink href="/faq" onClick={() => setOpen(false)}>FAQ</NavLink>
            <NavLink href="/about" onClick={() => setOpen(false)}>About</NavLink>
            <NavLink href="/blog" onClick={() => setOpen(false)}>Blog</NavLink>
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
