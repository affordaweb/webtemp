import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "AffordaWeb Solutions — DIY Website Templates Starting at $29";
export const size = { width: 1200, height: 628 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          width: "100%",
          height: "100%",
          background: "#0d0d0d",
          padding: "72px 80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Dot grid background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.06) 1.5px, transparent 1.5px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Logo mark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            marginBottom: 48,
            position: "relative",
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              background: "#ffffff",
              borderRadius: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 22,
              fontWeight: 900,
              color: "#0d0d0d",
            }}
          >
            AW
          </div>
          <span
            style={{
              fontSize: 22,
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: "-0.02em",
            }}
          >
            AffordaWeb Solutions
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: 62,
            fontWeight: 900,
            color: "#ffffff",
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            maxWidth: 820,
            position: "relative",
          }}
        >
          DIY Website Templates
          <br />
          <span style={{ color: "#9ca3af" }}>Starting at </span>
          <span style={{ color: "#ffffff" }}>$29</span>
        </div>

        {/* Subline */}
        <div
          style={{
            marginTop: 28,
            fontSize: 24,
            color: "#6b7280",
            lineHeight: 1.5,
            maxWidth: 700,
            position: "relative",
          }}
        >
          Custom-designed templates built to your brand. Own the files forever — no subscriptions.
        </div>

        {/* Pills row */}
        <div
          style={{
            display: "flex",
            gap: 16,
            marginTop: 48,
            position: "relative",
          }}
        >
          {["No Monthly Fees", "You Own the Code", "< 1 hr Delivery"].map(
            (label) => (
              <div
                key={label}
                style={{
                  background: "#1a1a1a",
                  border: "1.5px solid #2a2a2a",
                  borderRadius: 999,
                  padding: "10px 22px",
                  fontSize: 18,
                  fontWeight: 700,
                  color: "#d1d5db",
                }}
              >
                {label}
              </div>
            )
          )}
        </div>

        {/* URL bottom right */}
        <div
          style={{
            position: "absolute",
            bottom: 52,
            right: 80,
            fontSize: 18,
            color: "#4b5563",
            fontWeight: 600,
          }}
        >
          affordawebsolutions.com
        </div>
      </div>
    ),
    { ...size }
  );
}
