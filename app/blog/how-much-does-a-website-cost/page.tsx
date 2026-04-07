import type { Metadata } from "next";
import Link from "next/link";
import BlogSidebar from "@/components/BlogSidebar";

export const metadata: Metadata = {
  title: "How Much Does a Website Cost? (Honest Breakdown for 2025)",
  description:
    "A transparent, no-nonsense breakdown of website costs in 2025 — from $49 templates to $50,000 agency projects. Find out what you actually need and what you can skip.",
  alternates: { canonical: "/blog/how-much-does-a-website-cost" },
};

const TIERS = [
  {
    label: "DIY Website Builders",
    range: "$16–$49/month",
    pros: ["Low upfront cost", "No technical skill needed"],
    cons: ["Ongoing monthly fees forever", "Limited customisation", "You don't own your design", "Slower, heavier sites"],
    best: "Testing an idea with no budget",
  },
  {
    label: "WordPress + Hosting",
    range: "$100–$500/year",
    pros: ["Flexible", "Large plugin library"],
    cons: ["Ongoing maintenance required", "Security vulnerabilities", "Needs plugins for basic features", "Can become slow and bloated"],
    best: "Bloggers and content-heavy sites",
  },
  {
    label: "Custom Hand-Coded Website",
    range: "$49–$500 (one-time)",
    pros: ["You own every file", "Fast, clean, no bloat", "No monthly costs", "Better SEO baseline"],
    cons: ["Needs a designer to update content"],
    best: "Small businesses wanting a professional presence",
    highlight: true,
  },
  {
    label: "Freelance Designer",
    range: "$300–$3,000+",
    pros: ["Full custom design", "Direct communication"],
    cons: ["Wide quality variation", "Can take weeks", "Higher cost"],
    best: "Businesses with specific design requirements",
  },
  {
    label: "Web Design Agency",
    range: "$2,000–$50,000+",
    pros: ["Dedicated team", "Scalable", "Full project management"],
    cons: ["Very expensive", "Long timelines", "Often over-engineered for small businesses"],
    best: "Enterprise or complex web applications",
  },
];

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
          <span className="badge">Pricing</span>
          <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", marginTop: "0.75rem" }}>April 2025 · 7 min read</p>
        </div>

        <h1 className="heading-section" style={{ marginBottom: "1.5rem", lineHeight: 1.2 }}>
          How Much Does a Website Cost? (Honest Breakdown for 2025)
        </h1>

        <div style={{ color: "var(--text-muted)", fontSize: "1.05rem", lineHeight: 1.8, display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          <p>
            "How much does a website cost?" is one of the most-searched questions in web design — and the answer varies wildly from $0 to over $50,000 depending on who you ask. We want to give you an honest, practical breakdown so you can make the right decision for your business.
          </p>

          <h2 style={{ color: "#111111", fontWeight: 800, fontSize: "1.35rem", marginTop: "0.5rem" }}>The Main Options in 2025</h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {TIERS.map((tier) => (
              <div
                key={tier.label}
                style={{
                  border: tier.highlight ? "2px solid #111111" : "1.5px solid var(--border)",
                  borderRadius: "1rem",
                  padding: "1.5rem",
                  background: tier.highlight ? "#FAFAFA" : "var(--surface)",
                  position: "relative",
                }}
              >
                {tier.highlight && (
                  <span className="badge" style={{ position: "absolute", top: "-0.75rem", left: "1.25rem" }}>Best for Small Business</span>
                )}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.85rem" }}>
                  <h3 style={{ color: "#111111", fontWeight: 800, fontSize: "1.05rem" }}>{tier.label}</h3>
                  <span style={{ fontWeight: 900, color: "#111111", fontSize: "1rem" }}>{tier.range}</span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem", marginBottom: "0.75rem" }}>
                  <div>
                    <p style={{ fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", color: "#111111", marginBottom: "0.4rem" }}>Pros</p>
                    {tier.pros.map((p) => <p key={p} style={{ fontSize: "0.88rem", margin: "0.2rem 0" }}>+ {p}</p>)}
                  </div>
                  <div>
                    <p style={{ fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", color: "#555555", marginBottom: "0.4rem" }}>Cons</p>
                    {tier.cons.map((c) => <p key={c} style={{ fontSize: "0.88rem", margin: "0.2rem 0" }}>− {c}</p>)}
                  </div>
                </div>
                <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}><strong style={{ color: "#111111" }}>Best for:</strong> {tier.best}</p>
              </div>
            ))}
          </div>

          <h2 style={{ color: "#111111", fontWeight: 800, fontSize: "1.35rem", marginTop: "0.5rem" }}>The Hidden Cost of "Free" or Cheap Builders</h2>
          <p>
            A $16/month website builder seems cheap — until you do the maths. Over 5 years that is $960 minimum, and
            you still don&apos;t own the design. If you ever want to move platforms, you start from scratch. By contrast, a
            one-time $49{" "}
            <Link href="/blog/what-is-a-hand-coded-website" style={{ color: "#111111", fontWeight: 600, textDecoration: "underline" }}>
              custom hand-coded website
            </Link>{" "}
            costs you nothing ongoing and is yours forever.{" "}
            <a
              href="https://www.wix.com/upgrade/website"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#111111", textDecoration: "underline" }}
            >
              Compare Wix&apos;s current pricing
            </a>
            {" "}and you&apos;ll see the ongoing cost quickly adds up.
          </p>

          <h2 style={{ color: "#111111", fontWeight: 800, fontSize: "1.35rem", marginTop: "0.5rem" }}>What Our $49 Website Includes</h2>
          <p>
            At AffordaWeb Solutions, a custom website starting from $49 includes up to 6 pages, mobile-first responsive design, SEO-optimised HTML structure, and a complete ZIP file you own and can host anywhere. It is built by hand by our Top Rated Filipino web design team — not generated by AI or assembled from drag-and-drop blocks.
          </p>
          <p>
            Optional: add our live hosting setup service for +$25 and we will get your site online for you.
          </p>

          <h2 style={{ color: "#111111", fontWeight: 800, fontSize: "1.35rem", marginTop: "0.5rem" }}>What Should I Actually Pay for a Small Business Website?</h2>
          <p>
            For most small businesses — a local shop, a service provider, a restaurant, a photographer — a{" "}
            <Link href="/blog/affordable-website-design-for-small-business" style={{ color: "#111111", fontWeight: 600, textDecoration: "underline" }}>
              custom hand-coded website
            </Link>{" "}
            in the $49–$299 range is more than sufficient and outperforms builder sites on speed and SEO. You do not
            need to pay thousands for a great result. Want to explore your options further?{" "}
            <Link href="/blog/website-design-without-a-developer" style={{ color: "#111111", fontWeight: 600, textDecoration: "underline" }}>
              See all your website options compared →
            </Link>
          </p>

          <div style={{ marginTop: "1rem", padding: "2rem", background: "var(--surface)", borderRadius: "1rem", border: "1.5px solid var(--border)", textAlign: "center" }}>
            <p style={{ fontWeight: 800, fontSize: "1.1rem", color: "#111111", marginBottom: "0.85rem" }}>Get a professional website from $49</p>
            <p style={{ fontSize: "0.92rem", marginBottom: "1.25rem" }}>No subscriptions. No builders. Hand-coded by our Filipino web design team.</p>
            <Link href="/generate" className="btn-primary">Order My Website →</Link>
          </div>
        </div>
      </article>

          {/* Sidebar */}
          <BlogSidebar currentSlug="how-much-does-a-website-cost" />
        </div>
      </div>
    </div>
  );
}
