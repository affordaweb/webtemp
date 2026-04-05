import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us — Top-Rated Filipino Web Designers",
  description:
    "Meet the team behind AffordaWeb Solutions — top-rated Filipino web designers on Upwork. We build affordable, professional websites for small businesses worldwide.",
  alternates: { canonical: "/about" },
};

const TEAM_HIGHLIGHTS = [
  {
    icon: "star",
    title: "Top Rated on Upwork",
    desc: "We hold Top Rated status on Upwork — earned through consistent 5-star reviews and successful projects across dozens of industries.",
  },
  {
    icon: "globe",
    title: "Clients Worldwide",
    desc: "We have worked with small businesses, startups, and entrepreneurs across the US, UK, Australia, Canada, and beyond.",
  },
  {
    icon: "code",
    title: "100% Hand-Coded",
    desc: "No Wix. No WordPress. Every website we build is written by hand — fast, clean, and owned entirely by you.",
  },
  {
    icon: "heart",
    title: "Filipino Craftsmanship",
    desc: "Coming from the Philippines, we combine a strong work ethic with world-class design skills — and pass the savings on to you.",
  },
];

function Icon({ name }: { name: string }) {
  const paths: Record<string, string> = {
    star: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
    globe: "M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zM2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z",
    code: "M16 18l6-6-6-6M8 6l-6 6 6 6",
    heart: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z",
    upwork: "M18 8a6 6 0 0 1-6 6 6 6 0 0 1-6-6 6 6 0 0 1 6-6 6 6 0 0 1 6 6zM6 20h12",
  };
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={paths[name]} />
    </svg>
  );
}

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        style={{
          background: "var(--hero-gradient)",
          padding: "5rem 0 4rem",
          textAlign: "center",
          borderBottom: "1.5px solid var(--border)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.04) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            pointerEvents: "none",
          }}
        />
        <div className="container-tight" style={{ position: "relative", maxWidth: 720, marginInline: "auto" }}>
          <span className="badge">Our Story</span>
          <h1 className="heading-hero" style={{ marginTop: "1.25rem", color: "#111111" }}>
            Affordable Website Design,<br />Built by Filipinos.
          </h1>
          <p
            style={{
              marginTop: "1.25rem",
              color: "var(--text-muted)",
              fontSize: "clamp(1rem, 2.5vw, 1.15rem)",
              lineHeight: 1.7,
              maxWidth: 580,
              marginInline: "auto",
            }}
          >
            We are top-rated Filipino web designers on Upwork, delivering professional websites at prices every small business can afford.
          </p>
        </div>
      </section>

      {/* ── Our story ── */}
      <section style={{ padding: "5rem 0" }}>
        <div className="container-tight" style={{ maxWidth: 760, marginInline: "auto" }}>
          <div style={{ marginBottom: "3rem" }}>
            <span className="badge">Who We Are</span>
            <h2 className="heading-section" style={{ marginTop: "1rem", marginBottom: "1.5rem" }}>
              Filipino Web Designers, Globally Trusted
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
              AffordaWeb Solutions was founded by a team of Filipino web designers who saw a real problem: small businesses were being priced out of professional web design. Agency quotes often start at $2,000 or more — and still leave business owners locked into subscriptions, page builders they can&apos;t customise, or code they don&apos;t own.
            </p>
            <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
              We are proud Filipinos with a deep tradition of craftsmanship and dedication to client satisfaction. The Philippines has long been recognised as one of the top sources of world-class digital talent, and we bring that reputation to every project.
            </p>
            <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", lineHeight: 1.8 }}>
              On Upwork, we have earned <strong style={{ color: "#111111" }}>Top Rated</strong> status — a distinction awarded to the top freelancers on the platform based on job success scores, client reviews, and consistent quality. That means when you work with us, you are working with professionals who have been independently verified.
            </p>
          </div>

          {/* Stats */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
              gap: "1px",
              background: "var(--border)",
              border: "1.5px solid var(--border)",
              borderRadius: "1rem",
              overflow: "hidden",
              marginBottom: "3rem",
            }}
          >
            {[
              { value: "Top Rated", label: "on Upwork" },
              { value: "100+", label: "Websites Delivered" },
              { value: "$49", label: "Starting Price" },
              { value: "2–4 days", label: "Average Delivery" },
            ].map((s) => (
              <div key={s.label} style={{ background: "var(--bg)", padding: "1.75rem 1.25rem", textAlign: "center" }}>
                <div style={{ fontSize: "1.6rem", fontWeight: 900, letterSpacing: "-0.03em", color: "#111111", marginBottom: "0.25rem" }}>{s.value}</div>
                <div style={{ fontSize: "0.82rem", color: "var(--text-muted)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ── Why Filipino designers ── */}
      <section style={{ padding: "4rem 0 6rem" }}>
        <div className="container-tight">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="badge">Why Choose Us</span>
            <h2 className="heading-section" style={{ marginTop: "1rem" }}>
              The AffordaWeb Difference
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem" }}>
            {TEAM_HIGHLIGHTS.map((item) => (
              <div key={item.title} className="card">
                <div style={{ color: "#111111", marginBottom: "0.85rem" }}>
                  <Icon name={item.icon} />
                </div>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 800, marginBottom: "0.5rem" }}>{item.title}</h3>
                <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.65 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ── Our approach ── */}
      <section style={{ padding: "4rem 0 6rem", background: "var(--surface)" }}>
        <div className="container-tight" style={{ maxWidth: 760, marginInline: "auto" }}>
          <span className="badge">Our Approach</span>
          <h2 className="heading-section" style={{ marginTop: "1rem", marginBottom: "1.5rem" }}>
            Affordable Doesn&apos;t Mean Cheap
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            When we say affordable website design, we mean it — but affordable never means cutting corners. Every website we deliver is:
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.5rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {[
              "Hand-coded in clean HTML and CSS — no bloated frameworks",
              "Mobile-first and tested across devices",
              "Optimised for search engines from the ground up",
              "Delivered as files you own forever — no monthly platform fees",
              "Accompanied by clear setup instructions",
            ].map((item) => (
              <li key={item} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start", color: "var(--text)", fontSize: "1rem" }}>
                <span style={{ fontWeight: 900, color: "#111111", flexShrink: 0, marginTop: "0.1em" }}>✓</span>
                {item}
              </li>
            ))}
          </ul>
          <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", lineHeight: 1.8 }}>
            We are proud of where we come from. Filipino web designers are known worldwide for strong English communication skills, a collaborative work style, and an eye for detail. We bring all of that to every project — at a price that respects your budget.
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: "#111111", padding: "5rem 0", textAlign: "center" }}>
        <div className="container-tight">
          <h2 className="heading-section" style={{ color: "#FFFFFF", marginBottom: "1rem" }}>
            Ready to work with us?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.05rem", marginBottom: "2rem", maxWidth: 440, marginInline: "auto" }}>
            Fill out our short form and get a professionally designed website delivered to your inbox.
          </p>
          <Link href="/generate" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "#FFFFFF", color: "#111111", fontWeight: 700, fontSize: "1.05rem", padding: "0.95rem 2.25rem", borderRadius: "999px", textDecoration: "none" }}>
            Get Your Affordable Website →
          </Link>
        </div>
      </section>
    </>
  );
}
