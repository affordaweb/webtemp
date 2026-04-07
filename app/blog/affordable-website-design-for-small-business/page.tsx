import type { Metadata } from "next";
import Link from "next/link";
import BlogSidebar from "@/components/BlogSidebar";

export const metadata: Metadata = {
  title: "Affordable Website Design for Small Business: The Complete Guide",
  description:
    "Everything a small business owner needs to know about affordable website design — what it actually costs, what to look for, and how to get the best value for your money.",
  alternates: { canonical: "/blog/affordable-website-design-for-small-business" },
};

export default function Post() {
  return (
    <div style={{ padding: "5rem 0 6rem" }}>
      <div className="container-tight">
        <div className="blog-layout" style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: "2.5rem", alignItems: "start" }}>
          {/* Article */}
          <article>
        <Link href="/blog" style={{ color: "var(--text-muted)", textDecoration: "none", fontSize: "0.9rem", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: "0.35rem", marginBottom: "2rem" }}>
          ← Back to Blog
        </Link>

        <div style={{ marginBottom: "2rem" }}>
          <span className="badge">Web Design</span>
          <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", marginTop: "0.75rem" }}>April 2025 · 6 min read</p>
        </div>

        <h1 className="heading-section" style={{ marginBottom: "1.5rem", lineHeight: 1.2 }}>
          Affordable Website Design for Small Business: The Complete Guide
        </h1>

        <div style={{ color: "var(--text-muted)", fontSize: "1.05rem", lineHeight: 1.8, display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          <p>
            If you own a small business, you already know the frustration: you need a professional website, but every quote you get is either way out of budget or hides a monthly subscription fee that never ends. The good news? <strong style={{ color: "#111111" }}>Affordable website design for small business</strong> is absolutely possible — if you know where to look and what to ask for.
          </p>

          <h2 style={{ color: "#111111", fontWeight: 800, fontSize: "1.35rem", marginTop: "0.5rem" }}>What Does "Affordable" Actually Mean?</h2>
          <p>
            The word "affordable" gets thrown around a lot in web design. To be clear about what we mean: an affordable website is one where you pay a single, reasonable fee for a professionally built product, with no ongoing platform costs. Compare that to:
          </p>
          <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {[
              "Wix or Squarespace — $16–$49/month forever, with limited customisation",
              "Typical freelancer or agency — $1,500–$10,000+ upfront",
              "WordPress with hosting — $100–$500/year plus ongoing maintenance",
            ].map((item) => (
              <li key={item} style={{ display: "flex", gap: "0.65rem", paddingLeft: "0.5rem" }}>
                <span style={{ color: "#111111", fontWeight: 900, flexShrink: 0 }}>→</span>
                {item}
              </li>
            ))}
          </ul>
          <p>
            At AffordaWeb Solutions, a complete, custom-designed small business website starts at <strong style={{ color: "#111111" }}>$49</strong>. That is not a template you customise yourself — it is a{" "}
            <Link href="/blog/what-is-a-hand-coded-website" style={{ color: "#111111", fontWeight: 600, textDecoration: "underline" }}>
              hand-coded website
            </Link>{" "}
            built to your specifications, delivered as files you own and can host anywhere. Curious about the full cost comparison?{" "}
            <Link href="/blog/how-much-does-a-website-cost" style={{ color: "#111111", fontWeight: 600, textDecoration: "underline" }}>
              See our website cost breakdown →
            </Link>
          </p>

          <h2 style={{ color: "#111111", fontWeight: 800, fontSize: "1.35rem", marginTop: "0.5rem" }}>What Should an Affordable Small Business Website Include?</h2>
          <p>Before hiring a designer or purchasing any service, make sure your affordable website includes:</p>
          <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {[
              "Mobile-responsive design — over 60% of web traffic is mobile",
              "Fast load times — Google factors page speed into rankings",
              "Semantic HTML structure — essential for search engine optimisation",
              "Clear calls to action on every page",
              "Contact information that is easy to find",
              "Files you own outright — never be held hostage by a platform",
            ].map((item) => (
              <li key={item} style={{ display: "flex", gap: "0.65rem" }}>
                <span style={{ color: "#111111", fontWeight: 900, flexShrink: 0 }}>✓</span>
                {item}
              </li>
            ))}
          </ul>

          <h2 style={{ color: "#111111", fontWeight: 800, fontSize: "1.35rem", marginTop: "0.5rem" }}>Why Filipino Web Designers Offer Outstanding Value</h2>
          <p>
            One of the best-kept secrets in affordable website design is hiring from the Philippines.{" "}
            <Link href="/blog/why-hire-a-filipino-web-designer" style={{ color: "#111111", fontWeight: 600, textDecoration: "underline" }}>
              Filipino web designers
            </Link>{" "}
            are fluent in English, highly trained, and have built a strong reputation on global platforms like{" "}
            <a href="https://www.upwork.com" target="_blank" rel="noopener noreferrer" style={{ color: "#111111", textDecoration: "underline" }}>
              Upwork
            </a>{" "}
            for delivering excellent quality at competitive prices. This is not about cutting corners — it is about smart economics.
          </p>
          <p>
            Our team at AffordaWeb Solutions holds Top Rated status on Upwork — a recognition given only to the top tier of freelancers based on verified client satisfaction. You get agency-level quality at a fraction of agency prices.
          </p>

          <h2 style={{ color: "#111111", fontWeight: 800, fontSize: "1.35rem", marginTop: "0.5rem" }}>How to Get Your Affordable Website Today</h2>
          <p>
            The process is straightforward. Fill out our short form (3 minutes), and we review your request and send a PayPal invoice. Once confirmed, we build your custom website and deliver it to your inbox within 2–4 business days.
          </p>
          <p>
            No back-and-forth meetings. No inflated agency fees. Just a professional, affordable website ready to launch.
          </p>

          <div style={{ marginTop: "1rem", padding: "2rem", background: "var(--surface)", borderRadius: "1rem", border: "1.5px solid var(--border)", textAlign: "center" }}>
            <p style={{ fontWeight: 800, fontSize: "1.1rem", color: "#111111", marginBottom: "0.85rem" }}>Ready to get your affordable website?</p>
            <Link href="/generate" className="btn-primary">Order Your Website — from $49 →</Link>
          </div>
        </div>
      </article>

          {/* Sidebar */}
          <BlogSidebar currentSlug="affordable-website-design-for-small-business" />
        </div>
      </div>
    </div>
  );
}
