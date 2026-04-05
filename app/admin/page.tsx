"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";

type Request = {
  id: string;
  name: string;
  email: string;
  businessName: string;
  industry: string;
  pages: string[];
  style: string;
  primaryColor: string;
  notes: string;
  status: "pending" | "paid" | "delivered";
  downloadToken?: string;
  requestedLiveSetup: boolean;
  createdAt?: string;
};

export default function AdminPage() {
  const router = useRouter();
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");
  const [requests, setRequests] = useState<Request[]>([]);
  const [loading, setLoading] = useState(false);
  const [actionLoading, setActionLoading] = useState<string | null>(null);
  const [selected, setSelected] = useState<Request | null>(null);

  const fetchRequests = useCallback(async (secret: string) => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/requests", {
        headers: { "x-admin-secret": secret },
      });
      if (!res.ok) throw new Error("Unauthorised");
      const data = await res.json();
      setRequests(data);
    } catch {
      setAuthed(false);
      localStorage.removeItem("wt_admin");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem("wt_admin");
    if (saved) {
      setAuthed(true);
      setPassword(saved);
      fetchRequests(saved);
    }
  }, [fetchRequests]);

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setAuthError("");
    // We'll attempt to fetch — if 401 the server rejects
    fetch("/api/admin/requests", { headers: { "x-admin-secret": password } }).then(
      async (res) => {
        if (res.ok) {
          setAuthed(true);
          localStorage.setItem("wt_admin", password);
          const data = await res.json();
          setRequests(data);
        } else {
          setAuthError("Invalid password.");
        }
      }
    );
  }

  async function markPaid(req: Request) {
    setActionLoading(req.id);
    const res = await fetch("/api/admin/mark-paid", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-admin-secret": password,
      },
      body: JSON.stringify({ id: req.id }),
    });
    setActionLoading(null);
    if (res.ok) {
      await fetchRequests(password);
      setSelected(null);
    }
  }

  if (!authed) {
    return (
      <div style={{ minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "4rem 0" }}>
        <div className="container-tight" style={{ maxWidth: 400 }}>
          <div className="card" style={{ padding: "2.5rem" }}>
            <h1 className="heading-section" style={{ marginBottom: "1.5rem", fontSize: "1.75rem" }}>
              Admin Login
            </h1>
            <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <div>
                <label className="form-label">Admin Password</label>
                <input
                  className="form-input"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter admin secret"
                  autoFocus
                />
              </div>
              {authError && <p style={{ color: "#F87171", fontSize: "0.9rem" }}>{authError}</p>}
              <button type="submit" className="btn-primary" style={{ justifyContent: "center" }}>
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  const pending = requests.filter((r) => r.status === "pending");
  const paid = requests.filter((r) => r.status === "paid");
  const delivered = requests.filter((r) => r.status === "delivered");

  return (
    <div style={{ padding: "3rem 0 6rem" }}>
      <div className="container-tight">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "2.5rem", flexWrap: "wrap", gap: "1rem" }}>
          <div>
            <span className="badge" style={{ marginBottom: "0.5rem", display: "inline-block" }}>Admin</span>
            <h1 style={{ fontSize: "1.75rem", fontWeight: 900, letterSpacing: "-0.03em" }}>Dashboard</h1>
          </div>
          <div style={{ display: "flex", gap: "0.75rem" }}>
            <button className="btn-outline" onClick={() => fetchRequests(password)} style={{ fontSize: "0.88rem" }}>
              ↻ Refresh
            </button>
            <button className="btn-outline" onClick={() => { setAuthed(false); localStorage.removeItem("wt_admin"); }} style={{ fontSize: "0.88rem" }}>
              Logout
            </button>
          </div>
        </div>

        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem", marginBottom: "2.5rem" }}>
          <StatCard label="Pending" count={pending.length} color="var(--brand)" />
          <StatCard label="Paid" count={paid.length} color="#16A34A" />
          <StatCard label="Delivered" count={delivered.length} color="#A78BFA" />
        </div>

        {loading ? (
          <p style={{ color: "var(--text-muted)" }}>Loading requests…</p>
        ) : requests.length === 0 ? (
          <div className="card" style={{ textAlign: "center", padding: "3rem" }}>
            <p style={{ color: "var(--text-muted)" }}>No requests yet.</p>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {requests
              .sort((a, b) => (a.createdAt && b.createdAt ? b.createdAt.localeCompare(a.createdAt) : 0))
              .map((req) => (
                <div
                  key={req.id}
                  className="card"
                  style={{ cursor: "pointer", transition: "border-color 0.15s", borderColor: selected?.id === req.id ? "rgba(86,54,209,0.5)" : undefined }}
                  onClick={() => setSelected(selected?.id === req.id ? null : req)}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
                    <span className={`badge ${
                      req.status === "pending" ? "status-pending" : req.status === "paid" ? "status-paid" : "status-delivered"
                    }`} style={{ fontSize: "0.75rem" }}>
                      {req.status}
                    </span>
                    <div style={{ flex: 1 }}>
                      <p style={{ fontWeight: 700, fontSize: "0.97rem" }}>{req.businessName}</p>
                      <p style={{ color: "var(--text-muted)", fontSize: "0.83rem" }}>{req.name} · {req.email}</p>
                    </div>
                    {req.requestedLiveSetup && (
                      <span className="badge" style={{ fontSize: "0.72rem" }}>+Setup</span>
                    )}
                    {req.createdAt && (
                      <span style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>
                        {new Date(req.createdAt).toLocaleDateString()}
                      </span>
                    )}
                  </div>

                  {selected?.id === req.id && (
                    <div
                      style={{ marginTop: "1.25rem", borderTop: "1.5px solid var(--border)", paddingTop: "1.25rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "0.5rem", fontSize: "0.85rem" }}>
                        <Info label="Industry" value={req.industry} />
                        <Info label="Pages" value={req.pages.join(", ")} />
                        <Info label="Colour" value={req.primaryColor} />
                        <Info label="Style" value={req.style} />
                        {req.notes && <Info label="Notes" value={req.notes} />}
                        {req.downloadToken && <Info label="Token" value={req.downloadToken} mono />}
                      </div>

                      <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginTop: "0.5rem" }}>
                        {req.status === "pending" && (
                          <button
                            className="btn-primary"
                            style={{ fontSize: "0.88rem", padding: "0.6rem 1.25rem", opacity: actionLoading === req.id ? 0.7 : 1 }}
                            onClick={() => markPaid(req)}
                            disabled={actionLoading === req.id}
                          >
                            {actionLoading === req.id ? "Processing…" : "✓ Mark as Paid & Send Download Link"}
                          </button>
                        )}
                        {req.status !== "pending" && (
                          <a
                            href={`/request/${req.id}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-outline"
                            style={{ fontSize: "0.88rem", padding: "0.6rem 1.25rem" }}
                          >
                            View Status Page ↗
                          </a>
                        )}
                        {req.downloadToken && (
                          <a
                            href={`/download/${req.downloadToken}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-outline"
                            style={{ fontSize: "0.88rem", padding: "0.6rem 1.25rem" }}
                          >
                            Download Link ↗
                          </a>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}

function StatCard({ label, count, color }: { label: string; count: number; color: string }) {
  return (
    <div className="card" style={{ textAlign: "center", padding: "1.25rem" }}>
      <p style={{ fontSize: "2rem", fontWeight: 900, color, lineHeight: 1 }}>{count}</p>
      <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", marginTop: "0.25rem" }}>{label}</p>
    </div>
  );
}

function Info({ label, value, mono }: { label: string; value: string; mono?: boolean }) {
  return (
    <div>
      <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em" }}>{label}</p>
      <p style={{ fontSize: "0.88rem", color: "var(--text)", fontFamily: mono ? "monospace" : undefined, wordBreak: "break-all" }}>{value}</p>
    </div>
  );
}
