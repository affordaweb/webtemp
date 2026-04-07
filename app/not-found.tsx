import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found | AffordaWeb Solutions",
  description: "The page you were looking for doesn't exist. Browse our DIY website packages starting at $29.",
};

export default function NotFound() {
  return (
    <section
      style={{
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "6rem 1.25rem",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: 520 }}>
        <div
          style={{
            fontSize: "6rem",
            fontWeight: 900,
            letterSpacing: "-0.06em",
            color: "#111111",
            lineHeight: 1,
            marginBottom: "1.5rem",
          }}
        >
          404
        </div>
        <h1
          style={{
            fontSize: "clamp(1.5rem, 4vw, 2rem)",
            fontWeight: 800,
            color: "#111111",
            marginBottom: "1rem",
          }}
        >
          Page Not Found
        </h1>
        <p
          style={{
            color: "var(--text-muted)",
            fontSize: "1.05rem",
            lineHeight: 1.7,
            marginBottom: "2.5rem",
          }}
        >
          We couldn&apos;t find what you were looking for. It may have moved or never existed.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/" className="btn-primary">
            Back to Home
          </Link>
          <Link href="/generate" className="btn-outline">
            Build My Website →
          </Link>
        </div>
        <div style={{ marginTop: "3rem", display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap" }}>
          {[
            { href: "/services", label: "Services" },
            { href: "/portfolio", label: "Portfolio" },
            { href: "/faq", label: "FAQ" },
            { href: "/blog", label: "Blog" },
            { href: "/contact", label: "Contact" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{ color: "var(--text-muted)", fontSize: "0.9rem", fontWeight: 600, textDecoration: "none" }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
