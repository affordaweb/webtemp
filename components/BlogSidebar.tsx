import Link from "next/link";

const RECENT_POSTS = [
  {
    slug: "affordable-website-design-for-small-business",
    title: "Affordable Website Design for Small Business: The Complete Guide",
    date: "April 2025",
    category: "Web Design",
  },
  {
    slug: "why-hire-a-filipino-web-designer",
    title: "Why Hire a Filipino Web Designer? Top Reasons in 2025",
    date: "April 2025",
    category: "Hiring",
  },
  {
    slug: "how-much-does-a-website-cost",
    title: "How Much Does a Website Cost? (Honest Breakdown for 2025)",
    date: "April 2025",
    category: "Pricing",
  },
];

const CATEGORIES = [
  { label: "Web Design", count: 1 },
  { label: "Hiring", count: 1 },
  { label: "Pricing", count: 1 },
];

export default function BlogSidebar({ currentSlug }: { currentSlug?: string }) {
  return (
    <aside style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>

      {/* CTA Widget */}
      <div
        style={{
          background: "#111111",
          borderRadius: "1rem",
          padding: "1.75rem 1.5rem",
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>🚀</div>
        <h3 style={{ color: "#ffffff", fontWeight: 800, fontSize: "1.05rem", lineHeight: 1.35, marginBottom: "0.65rem" }}>
          Get Your Website Built Today
        </h3>
        <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.87rem", lineHeight: 1.6, marginBottom: "1.25rem" }}>
          Custom-designed template from $29. Own the files forever, no subscriptions.
        </p>
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
            transition: "opacity 0.15s",
          }}
        >
          Build My Website →
        </Link>
      </div>

      {/* Recent Posts */}
      <div
        style={{
          background: "var(--surface)",
          border: "1.5px solid var(--border)",
          borderRadius: "1rem",
          padding: "1.5rem",
        }}
      >
        <h3 style={{ fontWeight: 800, fontSize: "0.95rem", color: "#111111", marginBottom: "1.1rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
          Recent Posts
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {RECENT_POSTS.filter((p) => p.slug !== currentSlug).map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                <span style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>{post.date}</span>
                <span
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: 700,
                    color: "#111111",
                    lineHeight: 1.4,
                    transition: "opacity 0.15s",
                  }}
                >
                  {post.title}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div
        style={{
          background: "var(--surface)",
          border: "1.5px solid var(--border)",
          borderRadius: "1rem",
          padding: "1.5rem",
        }}
      >
        <h3 style={{ fontWeight: 800, fontSize: "0.95rem", color: "#111111", marginBottom: "1.1rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
          Categories
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          {CATEGORIES.map((cat) => (
            <div
              key={cat.label}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0.55rem 0",
                borderBottom: "1px solid var(--border)",
              }}
            >
              <span style={{ fontSize: "0.9rem", color: "var(--text-muted)", fontWeight: 600 }}>{cat.label}</span>
              <span
                style={{
                  background: "var(--surface-2)",
                  border: "1.5px solid var(--border)",
                  borderRadius: "999px",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: "#111111",
                  padding: "0.15rem 0.6rem",
                  minWidth: "1.6rem",
                  textAlign: "center",
                }}
              >
                {cat.count}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Widget */}
      <div
        style={{
          background: "var(--surface)",
          border: "1.5px solid var(--border)",
          borderRadius: "1rem",
          padding: "1.5rem",
          textAlign: "center",
        }}
      >
        <h3 style={{ fontWeight: 800, fontSize: "0.95rem", color: "#111111", marginBottom: "0.6rem" }}>
          Have a Question?
        </h3>
        <p style={{ fontSize: "0.87rem", color: "var(--text-muted)", lineHeight: 1.6, marginBottom: "1rem" }}>
          Our team responds within 24 hours.
        </p>
        <Link
          href="/contact"
          style={{
            display: "block",
            border: "1.5px solid #111111",
            color: "#111111",
            fontWeight: 700,
            fontSize: "0.88rem",
            padding: "0.65rem 1rem",
            borderRadius: "999px",
            textDecoration: "none",
          }}
        >
          Contact Us
        </Link>
      </div>

    </aside>
  );
}
