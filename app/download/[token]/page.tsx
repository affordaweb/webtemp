import { kvGet } from "@/lib/kv";
import { TemplateRequest } from "@/lib/types";
import Link from "next/link";

export default async function DownloadPage({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;

  // Find request by token
  const keys = await kvGet<string[]>("__token_index__") ?? [];
  const id = keys.find(async (k) => {
    const r = await kvGet<TemplateRequest>(`request:${k}`);
    return r?.downloadToken === token;
  });

  // We look up by token directly
  const requestId = await kvGet<string>(`token:${token}`);
  const req = requestId ? await kvGet<TemplateRequest>(`request:${requestId}`) : null;

  if (!req) {
    return (
      <div style={{ minHeight: "70vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "4rem 0" }}>
        <div className="container-tight" style={{ maxWidth: 480, textAlign: "center" }}>
          <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🔒</div>
          <h1 className="heading-section" style={{ marginBottom: "1rem" }}>Invalid Link</h1>
          <p style={{ color: "var(--text-muted)", marginBottom: "2rem" }}>
            This download link is invalid or has expired. Please contact us if you believe this is an error.
          </p>
          <Link href="/" className="btn-primary">Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "80vh", padding: "4rem 0 6rem" }}>
      <div className="container-tight" style={{ maxWidth: 600 }}>
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <div style={{ fontSize: "3.5rem", marginBottom: "1rem" }}>📦</div>
          <h1 className="heading-section" style={{ marginBottom: "0.75rem" }}>
            Your Template is Ready!
          </h1>
          <p style={{ color: "var(--text-muted)", fontSize: "1.05rem" }}>
            Thanks for your payment, {req.name}. Download your <strong style={{ color: "var(--text)" }}>{req.businessName}</strong> website template below.
          </p>
        </div>

        {/* Download button */}
        <div className="card card-pastel-purple" style={{ textAlign: "center", padding: "2.5rem", marginBottom: "2rem" }}>
          <p style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem" }}>{req.businessName} — Website Template</p>
          <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginBottom: "1.75rem" }}>
            {req.pages.length} pages · {req.style} style · {req.primaryColor} theme
          </p>
          <a
            href={`/api/download/${token}`}
            className="btn-primary"
            style={{ fontSize: "1.05rem", padding: "1rem 2.5rem" }}
            download
          >
            ⬇ Download ZIP
          </a>
        </div>

        {/* Setup instructions */}
        <div className="card" style={{ marginBottom: "1.5rem" }}>
          <h2 style={{ fontSize: "1rem", fontWeight: 800, marginBottom: "1.25rem" }}>📋 How to Use Your Template</h2>
          <ol style={{ paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.75rem", color: "var(--text-muted)", fontSize: "0.93rem", lineHeight: 1.65 }}>
            <li><strong style={{ color: "var(--text)" }}>Extract the ZIP</strong> — Unzip the file to a folder on your computer.</li>
            <li><strong style={{ color: "var(--text)" }}>Open in a text editor</strong> — Use VS Code or any HTML editor to customise text, images, and links.</li>
            <li><strong style={{ color: "var(--text)" }}>Replace placeholder content</strong> — Update the business name, phone, email, and images in <code style={{ background: "var(--surface-2)", padding: "0.1em 0.35em", borderRadius: "0.25rem", fontSize: "0.88em" }}>index.html</code>.</li>
            <li><strong style={{ color: "var(--text)" }}>Upload to your host</strong> — Copy all files to your web hosting via FTP or your provider's file manager.</li>
            <li><strong style={{ color: "var(--text)" }}>Point your domain</strong> — Update your domain's DNS to point to your hosting server.</li>
          </ol>
        </div>

        {req.requestedLiveSetup && (
          <div className="card card-pastel-blue">
            <h2 style={{ fontSize: "1rem", fontWeight: 800, marginBottom: "0.75rem" }}>💡 Live Setup Add-on</h2>
            <p style={{ color: "var(--text-muted)", fontSize: "0.92rem", lineHeight: 1.65 }}>
              You requested our live setup service. We will contact you at <strong style={{ color: "var(--text)" }}>{req.email}</strong> shortly to arrange deployment.
            </p>
          </div>
        )}

        <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
          <p style={{ color: "var(--text-muted)", fontSize: "0.88rem" }}>
            Questions? Email us at{" "}
            <a href="mailto:hello@webtemp.dev" style={{ color: "var(--brand-light)" }}>hello@webtemp.dev</a>
          </p>
        </div>
      </div>
    </div>
  );
}
