import { kvGet } from "@/lib/kv";
import { TemplateRequest } from "@/lib/types";
import Link from "next/link";

export default async function RequestStatusPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const req = await kvGet<TemplateRequest>(`request:${id}`);

  if (!req) {
    return (
      <div style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "4rem 0" }}>
        <div className="container-tight" style={{ maxWidth: 480, textAlign: "center" }}>
          <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🔍</div>
          <h1 className="heading-section" style={{ marginBottom: "1rem" }}>Request Not Found</h1>
          <p style={{ color: "var(--text-muted)", marginBottom: "2rem" }}>
            We could not find a request with that ID. Double-check the ID from your confirmation page.
          </p>
          <Link href="/" className="btn-primary">Back to Home</Link>
        </div>
      </div>
    );
  }

  const statusInfo = {
    pending: { label: "Pending Review", chip: "status-pending", icon: "⏳", desc: "We have received your request and will send a PayPal invoice within 1 business day." },
    paid: { label: "Payment Confirmed", chip: "status-paid", icon: "✅", desc: "Payment received! We are now building your template. Delivery within 1 hour." },
    delivered: { label: "Template Delivered", chip: "status-delivered", icon: "📦", desc: "Your template has been delivered. Check your inbox for the download link." },
  }[req.status];

  return (
    <div style={{ minHeight: "80vh", padding: "4rem 0 6rem" }}>
      <div className="container-tight" style={{ maxWidth: 560 }}>
        <div style={{ marginBottom: "2rem" }}>
          <Link href="/" style={{ color: "var(--text-muted)", fontSize: "0.88rem", textDecoration: "none" }}>
            ← Back to Home
          </Link>
        </div>

        <span className="badge" style={{ marginBottom: "1rem", display: "inline-block" }}>Request Status</span>
        <h1 className="heading-section" style={{ marginBottom: "1.5rem" }}>
          {req.businessName}
        </h1>

        {/* Status card */}
        <div className="card" style={{ marginBottom: "1.5rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.75rem" }}>
            <span style={{ fontSize: "2rem" }}>{statusInfo.icon}</span>
            <div>
              <span
                className={`badge ${statusInfo.chip}`}
                style={{ fontSize: "0.8rem" }}
              >
                {statusInfo.label}
              </span>
            </div>
          </div>
          <p style={{ color: "var(--text-muted)", lineHeight: 1.65 }}>{statusInfo.desc}</p>
        </div>

        {/* Details */}
        <div className="card">
          <h2 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "1.25rem" }}>Request Details</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <DetailRow label="ID" value={req.id} mono />
            <DetailRow label="Industry" value={req.industry} />
            <DetailRow label="Pages" value={req.pages.join(", ")} />
            <DetailRow label="Style" value={req.style} />
            <DetailRow label="Live Setup Add-on" value={req.requestedLiveSetup ? "Requested (+$25)" : "Not requested"} />
          </div>
        </div>

        {req.status === "delivered" && req.downloadToken && (
          <div style={{ marginTop: "1.5rem" }}>
            <Link href={`/download/${req.downloadToken}`} className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
              📦 Download Your Template
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

function DetailRow({ label, value, mono }: { label: string; value: string; mono?: boolean }) {
  return (
    <div style={{ display: "flex", gap: "1rem", justifyContent: "space-between", borderBottom: "1px solid var(--border)", paddingBottom: "0.6rem" }}>
      <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--text-muted)", flexShrink: 0 }}>{label}</span>
      <span style={{ fontSize: "0.88rem", textAlign: "right", color: "var(--text)", fontFamily: mono ? "monospace" : undefined, wordBreak: "break-all" }}>{value}</span>
    </div>
  );
}
