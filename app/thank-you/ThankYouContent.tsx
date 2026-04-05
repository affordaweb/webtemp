"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function ThankYouContent() {
  const params = useSearchParams();
  const id = params.get("id");

  return (
    <div style={{ minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "4rem 0" }}>
      <div className="container-tight" style={{ maxWidth: 560, textAlign: "center" }}>
        <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>🎉</div>
        <h1 className="heading-section" style={{ marginBottom: "1rem" }}>
          Request Received!
        </h1>
        <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", lineHeight: 1.7, marginBottom: "2rem" }}>
          Thanks for submitting your website request. Our Filipino web design team will review it and send you a <strong style={{ color: "var(--text)" }}>PayPal invoice</strong> within 1 business day. Once paid, your affordable website will be built and delivered to your inbox.
        </p>

        {id && (
          <div className="card" style={{ marginBottom: "2rem", padding: "1.25rem" }}>
            <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "0.4rem" }}>Your Request ID</p>
            <p style={{ fontFamily: "monospace", fontSize: "1.05rem", fontWeight: 700, letterSpacing: "0.05em", color: "#111111", wordBreak: "break-all" }}>
              {id}
            </p>
            <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", marginTop: "0.5rem" }}>
              Save this ID — you can use it to check your request status.
            </p>
          </div>
        )}

        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          {id && (
            <Link href={`/request/${id}`} className="btn-primary">
              Track My Request →
            </Link>
          )}
          <Link href="/" className="btn-outline">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
