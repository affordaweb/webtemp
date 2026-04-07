"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

const PURCHASES = [
  { name: "Marco T.", location: "Austin, TX", business: "Marco's Auto Detailing", time: "2 min ago" },
  { name: "Sarah K.", location: "Tampa, FL", business: "Bloom Skin Studio", time: "5 min ago" },
  { name: "James R.", location: "Chicago, IL", business: "Riverdale Plumbing Co.", time: "11 min ago" },
  { name: "Priya M.", location: "San Diego, CA", business: "Priya Yoga & Wellness", time: "18 min ago" },
  { name: "Lena H.", location: "Atlanta, GA", business: "Lena's Sweet Cakes", time: "24 min ago" },
  { name: "Carlos V.", location: "Houston, TX", business: "V&C Construction LLC", time: "31 min ago" },
  { name: "Aisha B.", location: "New York, NY", business: "Brooklyn Pet Grooming", time: "38 min ago" },
  { name: "Tom W.", location: "Seattle, WA", business: "Pacific Ridge Landscaping", time: "45 min ago" },
];

export default function FloatingWidgets() {
  const [proofVisible, setProofVisible] = useState(false);
  const [proofClosed, setProofClosed] = useState(false);
  const [ctaClosed, setCtaClosed] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // CTA slides in after 3s
  useEffect(() => {
    const t = setTimeout(() => setCtaVisible(true), 3000);
    return () => clearTimeout(t);
  }, []);

  // Social proof: show for 5s, hide for 3s, cycle
  const showNext = useCallback((index: number) => {
    if (proofClosed) return;
    setCurrentIndex(index % PURCHASES.length);
    setProofVisible(true);

    const hideTimer = setTimeout(() => {
      setProofVisible(false);
      const nextTimer = setTimeout(() => {
        showNext(index + 1);
      }, 3000);
      return () => clearTimeout(nextTimer);
    }, 5000);

    return () => clearTimeout(hideTimer);
  }, [proofClosed]);

  useEffect(() => {
    if (proofClosed) return;
    const initial = setTimeout(() => showNext(0), 1500);
    return () => clearTimeout(initial);
  }, [proofClosed, showNext]);

  const current = PURCHASES[currentIndex];

  return (
    <>
      {/* ── Left: Social Proof Toast ── */}
      {!proofClosed && (
        <div
          className="social-proof-widget"
          style={{
            position: "fixed",
            bottom: "1.5rem",
            left: "1.5rem",
            zIndex: 9999,
            transform: proofVisible ? "translateY(0) scale(1)" : "translateY(120%) scale(0.95)",
            opacity: proofVisible ? 1 : 0,
            transition: "transform 0.45s cubic-bezier(0.34,1.56,0.64,1), opacity 0.35s ease",
            pointerEvents: proofVisible ? "auto" : "none",
            maxWidth: 300,
          }}
        >
          <div
            style={{
              background: "#fff",
              borderRadius: "1rem",
              boxShadow: "0 8px 32px rgba(0,0,0,0.14), 0 2px 8px rgba(0,0,0,0.08)",
              border: "1.5px solid rgba(0,0,0,0.08)",
              padding: "0.9rem 1rem",
              display: "flex",
              gap: "0.75rem",
              alignItems: "flex-start",
              position: "relative",
            }}
          >
            {/* Avatar */}
            <div
              style={{
                width: "2.5rem",
                height: "2.5rem",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #111111 0%, #444444 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontWeight: 900,
                fontSize: "1rem",
                flexShrink: 0,
              }}
            >
              {current.name[0]}
            </div>

            {/* Content */}
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", marginBottom: "0.2rem" }}>
                <span
                  style={{
                    display: "inline-block",
                    width: "0.5rem",
                    height: "0.5rem",
                    borderRadius: "50%",
                    background: "#16a34a",
                    flexShrink: 0,
                  }}
                />
                <span style={{ fontSize: "0.72rem", color: "#16a34a", fontWeight: 700 }}>Just purchased</span>
                <span style={{ fontSize: "0.72rem", color: "#9CA3AF", marginLeft: "auto" }}>{current.time}</span>
              </div>
              <p style={{ margin: 0, fontSize: "0.88rem", fontWeight: 700, color: "#111111", lineHeight: 1.35 }}>
                {current.name} from {current.location}
              </p>
              <p style={{ margin: "0.15rem 0 0", fontSize: "0.82rem", color: "#6B7280", lineHeight: 1.4 }}>
                Generated a website for <strong style={{ color: "#111111" }}>{current.business}</strong>
              </p>
            </div>

            {/* Close */}
            <button
              onClick={() => { setProofClosed(true); setProofVisible(false); }}
              aria-label="Dismiss"
              style={{
                position: "absolute",
                top: "0.5rem",
                right: "0.5rem",
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "#9CA3AF",
                fontSize: "1rem",
                lineHeight: 1,
                padding: "0.1rem 0.3rem",
                borderRadius: "0.25rem",
              }}
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* ── Right: CTA Card ── */}
      {!ctaClosed && (
        <div
          style={{
            position: "fixed",
            bottom: "1.5rem",
            right: "1.5rem",
            zIndex: 9998,
            transform: ctaVisible ? "translateY(0) scale(1)" : "translateY(120%) scale(0.95)",
            opacity: ctaVisible ? 1 : 0,
            transition: "transform 0.5s cubic-bezier(0.34,1.56,0.64,1), opacity 0.4s ease",
            pointerEvents: ctaVisible ? "auto" : "none",
            maxWidth: 280,
          }}
        >
          <div
            style={{
              background: "#111111",
              borderRadius: "1.25rem",
              boxShadow: "0 12px 40px rgba(0,0,0,0.25), 0 4px 12px rgba(0,0,0,0.15)",
              padding: "1.5rem 1.35rem",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Decorative circle bg */}
            <div
              aria-hidden
              style={{
                position: "absolute",
                top: "-2rem",
                right: "-2rem",
                width: "8rem",
                height: "8rem",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.04)",
                pointerEvents: "none",
              }}
            />

            {/* Close */}
            <button
              onClick={() => setCtaClosed(true)}
              aria-label="Dismiss"
              style={{
                position: "absolute",
                top: "0.6rem",
                right: "0.6rem",
                background: "rgba(255,255,255,0.1)",
                border: "none",
                cursor: "pointer",
                color: "rgba(255,255,255,0.6)",
                fontSize: "0.9rem",
                lineHeight: 1,
                padding: "0.2rem 0.45rem",
                borderRadius: "0.35rem",
                transition: "background 0.15s",
              }}
            >
              ×
            </button>

            {/* Icon */}
            <div style={{ fontSize: "1.75rem", marginBottom: "0.75rem" }}>🚀</div>

            {/* Heading */}
            <h3
              style={{
                color: "#ffffff",
                fontWeight: 900,
                fontSize: "1.05rem",
                lineHeight: 1.3,
                margin: "0 0 0.35rem",
              }}
            >
              Your website is 3 minutes away
            </h3>

            {/* Subheading */}
            <p
              style={{
                color: "rgba(255,255,255,0.55)",
                fontSize: "0.78rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                margin: "0 0 0.6rem",
              }}
            >
              Starting at just $29
            </p>

            {/* Body */}
            <p
              style={{
                color: "rgba(255,255,255,0.7)",
                fontSize: "0.87rem",
                lineHeight: 1.6,
                margin: "0 0 1.25rem",
              }}
            >
              Fill out a short form and we hand-code a custom website for your business. No subscriptions. Files you own forever.
            </p>

            {/* CTA Button */}
            <Link
              href="/generate"
              style={{
                display: "block",
                background: "#ffffff",
                color: "#111111",
                fontWeight: 800,
                fontSize: "0.88rem",
                padding: "0.7rem 1rem",
                borderRadius: "999px",
                textDecoration: "none",
                textAlign: "center",
                transition: "opacity 0.15s",
              }}
            >
              Build My Website →
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
