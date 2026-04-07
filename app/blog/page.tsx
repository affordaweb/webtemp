import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog — Affordable Website Design Tips & Guides",
  description:
    "Practical guides on affordable website design, hiring Filipino web designers, and getting the most from your web presence without overspending.",
  alternates: { canonical: "/blog" },
};

const POSTS = [
  {
    slug: "affordable-website-design-for-small-business",
    title: "Affordable Website Design for Small Business: The Complete Guide",
    excerpt:
      "Everything a small business owner needs to know about getting a professional website without spending thousands of dollars.",
    date: "April 2025",
    readTime: "6 min read",
    category: "Web Design",
  },
  {
    slug: "why-hire-a-filipino-web-designer",
    title: "Why Hire a Filipino Web Designer? Top Reasons in 2025",
    excerpt:
      "Filipino web designers are among the most in-demand professionals on Upwork. Here is why smart businesses choose them.",
    date: "April 2025",
    readTime: "5 min read",
    category: "Hiring",
  },
  {
    slug: "how-much-does-a-website-cost",
    title: "How Much Does a Website Cost? (Honest Breakdown for 2025)",
    excerpt:
      "From $49 templates to $50,000 agency projects — a transparent, no-hype breakdown of what websites actually cost.",
    date: "April 2025",
    readTime: "7 min read",
    category: "Pricing",
  },
];

export default function BlogPage() {
  return (
    <>
      <section
        style={{
          background: "var(--hero-gradient)",
          padding: "75px 0 50px",
          borderBottom: "1.5px solid var(--border)",
          textAlign: "center",
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
        <div className="container-tight" style={{ position: "relative" }}>
          <span className="badge">Blog</span>
          <h1 className="heading-hero" style={{ marginTop: "1.25rem", color: "#111111" }}>
            Affordable Website Design<br />Tips &amp; Guides
          </h1>
          <p style={{ marginTop: "1rem", color: "var(--text-muted)", fontSize: "1.05rem", maxWidth: 520, marginInline: "auto", lineHeight: 1.7 }}>
            Practical advice on getting a great website without overspending, straight from our Filipino web design team.
          </p>
        </div>
      </section>

      <section style={{ padding: "5rem 0 6rem" }}>
        <div className="container-tight">
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {POSTS.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
                <article
                  className="card"
                  style={{ display: "flex", flexDirection: "column", gap: "0.65rem", transition: "border-color 0.2s" }}
                >
                  <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
                    <span className="badge" style={{ fontSize: "0.72rem" }}>{post.category}</span>
                    <span style={{ color: "var(--text-muted)", fontSize: "0.82rem" }}>{post.date} · {post.readTime}</span>
                  </div>
                  <h2 style={{ fontSize: "1.2rem", fontWeight: 800, lineHeight: 1.4, color: "#111111" }}>{post.title}</h2>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.65 }}>{post.excerpt}</p>
                  <span style={{ fontSize: "0.9rem", fontWeight: 700, color: "#111111" }}>Read article →</span>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
