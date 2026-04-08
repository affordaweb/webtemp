import type { Metadata } from "next";
import Link from "next/link";
import BlogSidebar from "@/components/BlogSidebar";

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.affordawebsolutions.net").trim();
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "What Is a Hand-Coded Website? (And Why It Matters for Your Business)",
  datePublished: "2026-04-06",
  dateModified: "2026-04-06",
  author: { "@type": "Organization", name: "AffordaWeb Solutions", url: SITE_URL },
  publisher: { "@type": "Organization", name: "AffordaWeb Solutions", url: SITE_URL },
  url: `${SITE_URL}/blog/what-is-a-hand-coded-website`,
};
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
    { "@type": "ListItem", position: 3, name: "What Is a Hand-Coded Website?", item: `${SITE_URL}/blog/what-is-a-hand-coded-website` },
  ],
};

export const metadata: Metadata = {
  title: "What Is a Hand-Coded Website? (And Why It Matters for Your Business)",
  description:
    "A hand-coded website is built from scratch using HTML and CSS — no page builders, no drag-and-drop. Learn why hand-coded sites are faster, cleaner, and better for SEO.",
  keywords: [
    "hand-coded website",
    "what is a hand-coded website",
    "hand coded HTML CSS",
    "custom coded website",
    "hand-coded vs website builder",
    "hand coded website benefits",
    "custom HTML website",
    "website built from scratch",
    "coded website vs website builder",
  ],
  alternates: { canonical: "/blog/what-is-a-hand-coded-website" },
  openGraph: {
    title: "What Is a Hand-Coded Website? (And Why It Matters for Your Business)",
    description:
      "Built from scratch with HTML and CSS — no bloat, no builder lock-in. Understand what a hand-coded website is and why it outperforms website builders.",
    url: "/blog/what-is-a-hand-coded-website",
    type: "article",
  },
};

export default function WhatIsHandCodedWebsitePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="blog-layout" style={{ maxWidth: "1180px", margin: "0 auto", padding: "3.5rem 1.25rem 5rem" }}>
      <article>
        {/* Header */}
        <div style={{ marginBottom: "2.5rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1rem" }}>
            <span
              style={{
                background: "#111",
                color: "#fff",
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                padding: "0.3rem 0.75rem",
                borderRadius: "999px",
              }}
            >
              Web Design
            </span>
            <span style={{ color: "var(--text-muted)", fontSize: "0.82rem" }}>April 2026 · 6 min read</span>
          </div>
          <h1
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.6rem)",
              fontWeight: 900,
              lineHeight: 1.2,
              color: "#111",
              marginBottom: "1rem",
            }}
          >
            What Is a Hand-Coded Website? (And Why It Matters for Your Business)
          </h1>
          <p
            style={{
              fontSize: "1.1rem",
              color: "var(--text-muted)",
              lineHeight: 1.7,
              maxWidth: "720px",
            }}
          >
            Most websites today are built with drag-and-drop page builders. A hand-coded website is different — it is
            written directly in HTML and CSS by a human developer, without relying on any builder platform, WordPress
            plugin, or AI generator.
          </p>
        </div>

        {/* Definition */}
        <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#111", marginBottom: "0.75rem" }}>
          The Simple Definition
        </h2>
        <p style={{ lineHeight: 1.8, color: "#333", marginBottom: "1rem" }}>
          A <strong>hand-coded website</strong> is built by writing the actual HTML (HyperText Markup Language) and CSS
          (Cascading Style Sheets) code manually — line by line. Instead of clicking and dragging boxes on a canvas, a
          developer types the exact code that controls every element on the page.
        </p>
        <div
          style={{
            background: "#111",
            borderRadius: "0.875rem",
            padding: "1.25rem 1.5rem",
            marginBottom: "1.5rem",
            fontFamily: "monospace",
            fontSize: "0.88rem",
            color: "#a5f3fc",
            lineHeight: 1.7,
            overflowX: "auto",
          }}
        >
          <span style={{ color: "#94a3b8" }}>{`<!-- A simple hand-coded section -->`}</span>
          <br />
          <span style={{ color: "#f8fafc" }}>{`<section class="hero">`}</span>
          <br />
          <span style={{ color: "#f8fafc" }}>{`  <h1>Welcome to My Business</h1>`}</span>
          <br />
          <span style={{ color: "#f8fafc" }}>{`  <p>We serve Houston, TX and surrounding areas.</p>`}</span>
          <br />
          <span style={{ color: "#f8fafc" }}>{`  <a href="/contact" class="btn">Get a Free Quote</a>`}</span>
          <br />
          <span style={{ color: "#f8fafc" }}>{`</section>`}</span>
        </div>
        <p style={{ lineHeight: 1.8, color: "#333", marginBottom: "2rem" }}>
          Compare that to a Wix or Squarespace site — where the visual builder generates hundreds of lines of
          auto-generated, often messy code behind the scenes. The hand-coded version is intentional, precise, and lean.
        </p>

        {/* Benefits */}
        <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#111", marginBottom: "0.75rem" }}>
          Why Hand-Coded Websites Perform Better
        </h2>
        <p style={{ lineHeight: 1.8, color: "#333", marginBottom: "1.25rem" }}>
          There are measurable, real-world advantages to hand-coded websites over builder-generated ones. Here is what
          matters most for a small business:
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }}>
          {[
            {
              icon: "⚡",
              title: "Faster load times",
              body: "Builder platforms add layers of JavaScript, tracking scripts, and CSS frameworks that slow pages down. A hand-coded site only loads what it needs — often scoring 90+ on Google PageSpeed.",
            },
            {
              icon: "🔍",
              title: "Cleaner SEO",
              body: "Search engines read your HTML directly. Clean, semantic markup (proper H1/H2 structure, descriptive alt text, fast loading) gives hand-coded sites a natural SEO edge. There is no builder overhead hiding your content.",
            },
            {
              icon: "🔒",
              title: "Better security",
              body: "WordPress sites with plugins are hacked routinely because each plugin is an attack surface. A static HTML/CSS site has no database, no login page, and no server-side code to exploit — making it far more secure.",
            },
            {
              icon: "💼",
              title: "You own the code",
              body: "When a developer hands you the HTML/CSS files, they are yours. You can host them anywhere — GitHub Pages, Netlify, Vercel, any web host. You are never locked into a platform that can raise prices or shut down.",
            },
            {
              icon: "🛠️",
              title: "Precise design control",
              body: "Every pixel is intentional. A hand-coder can match your brand colors exactly, space elements precisely, and create interactions impossible in drag-and-drop editors.",
            },
          ].map(({ icon, title, body }, i) => (
            <div
              key={i}
              style={{
                background: "var(--surface)",
                border: "1.5px solid var(--border)",
                borderRadius: "0.875rem",
                padding: "1.1rem 1.3rem",
                display: "flex",
                gap: "0.875rem",
                alignItems: "flex-start",
              }}
            >
              <span style={{ fontSize: "1.4rem", flexShrink: 0, marginTop: "2px" }}>{icon}</span>
              <div>
                <p style={{ fontWeight: 700, color: "#111", marginBottom: "0.25rem" }}>{title}</p>
                <p style={{ color: "#555", lineHeight: 1.7, margin: 0, fontSize: "0.92rem" }}>{body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Hand-coded vs builder comparison */}
        <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#111", marginBottom: "1rem" }}>
          Hand-Coded vs. Website Builder: Key Differences
        </h2>
        <div style={{ overflowX: "auto", marginBottom: "2rem" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              fontSize: "0.88rem",
              background: "var(--surface)",
              borderRadius: "0.75rem",
              overflow: "hidden",
            }}
          >
            <thead>
              <tr style={{ background: "#111", color: "#fff" }}>
                <th style={{ padding: "0.75rem 1rem", textAlign: "left", fontWeight: 700 }}>Feature</th>
                <th style={{ padding: "0.75rem 1rem", textAlign: "left", fontWeight: 700 }}>Hand-Coded</th>
                <th style={{ padding: "0.75rem 1rem", textAlign: "left", fontWeight: 700 }}>Website Builder</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Page Speed", "⚡ Typically 90–100/100", "🐢 Often 50–75/100"],
                ["SEO Control", "✅ Full HTML control", "🟡 Limited, platform dependent"],
                ["Security", "✅ No database, no CMS", "⚠️ Plugins create attack surface"],
                ["Ownership", "✅ You own the files", "❌ Platform owns your site"],
                ["Monthly Cost", "✅ Just hosting (~$5–15/mo)", "❌ $17–$49+/month"],
                ["Design Precision", "✅ Pixel-perfect", "🟡 Constrained by builder"],
                ["Editing Yourself", "⚠️ Requires basic HTML", "✅ No technical skill"],
              ].map(([feature, coded, builder], i) => (
                <tr
                  key={i}
                  style={{ borderBottom: "1px solid var(--border)", background: i % 2 === 0 ? "#fff" : "var(--surface)" }}
                >
                  <td style={{ padding: "0.7rem 1rem", fontWeight: 600, color: "#111" }}>{feature}</td>
                  <td style={{ padding: "0.7rem 1rem", color: "#333" }}>{coded}</td>
                  <td style={{ padding: "0.7rem 1rem", color: "#555" }}>{builder}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Who is it for? */}
        <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#111", marginBottom: "0.75rem" }}>
          Is a Hand-Coded Website Right for Your Business?
        </h2>
        <p style={{ lineHeight: 1.8, color: "#333", marginBottom: "1rem" }}>
          A hand-coded website makes the most sense if:
        </p>
        <ul
          style={{
            paddingLeft: "1.4rem",
            lineHeight: 1.9,
            color: "#333",
            marginBottom: "1.5rem",
            fontSize: "0.95rem",
          }}
        >
          <li>You want a fast, SEO-optimized site that performs well on Google</li>
          <li>You want to own the files outright with no ongoing platform fees</li>
          <li>Your business looks different from your competitors (custom branding matters)</li>
          <li>You are tired of paying $25–$50/month for a website you don&apos;t own</li>
          <li>You want a secure site that won&apos;t get hacked through outdated plugins</li>
        </ul>
        <p style={{ lineHeight: 1.8, color: "#333", marginBottom: "2rem" }}>
          It is less ideal if you need a complex online store with hundreds of SKUs or a blog you want to update
          daily without touching code. For most local service businesses, restaurants, coaches, and consultants — a
          hand-coded site is the <em>best</em> choice.
        </p>

        {/* Internal section */}
        <div
          style={{
            background: "var(--surface)",
            border: "1.5px solid var(--border)",
            borderRadius: "1rem",
            padding: "1.5rem 1.75rem",
            marginBottom: "2rem",
          }}
        >
          <p style={{ fontWeight: 700, color: "#111", marginBottom: "0.75rem" }}>📚 Related reading</p>
          <ul style={{ margin: 0, paddingLeft: "1.2rem", lineHeight: 2, fontSize: "0.92rem" }}>
            <li>
              <Link
                href="/blog/affordable-website-design-for-small-business"
                style={{ color: "#111", fontWeight: 600, textDecoration: "underline" }}
              >
                Affordable Website Design for Small Business: The Complete Guide
              </Link>
            </li>
            <li>
              <Link
                href="/blog/how-much-does-a-website-cost"
                style={{ color: "#111", fontWeight: 600, textDecoration: "underline" }}
              >
                How Much Does a Website Cost? (Honest 2025 Breakdown)
              </Link>
            </li>
            <li>
              <Link
                href="/blog/website-design-without-a-developer"
                style={{ color: "#111", fontWeight: 600, textDecoration: "underline" }}
              >
                Website Design Without a Developer: Your 2026 Options
              </Link>
            </li>
          </ul>
        </div>

        {/* CTA */}
        <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#111", marginBottom: "0.75rem" }}>
          Get a Hand-Coded Website for Your Business — Starting at $29
        </h2>
        <p style={{ lineHeight: 1.8, color: "#333", marginBottom: "1.5rem" }}>
          AffordaWeb Solutions builds hand-coded, custom HTML/CSS websites designed specifically for your business. No
          page builders, no bloat. Fill out a short form and get a site built fast — you keep the files forever.
        </p>
        <div style={{ marginBottom: "3rem" }}>
          <Link
            href="/generate"
            style={{
              display: "inline-block",
              background: "#111",
              color: "#fff",
              fontWeight: 700,
              fontSize: "0.95rem",
              padding: "0.85rem 2rem",
              borderRadius: "0.6rem",
              textDecoration: "none",
              marginRight: "1rem",
            }}
          >
            Start My Website →
          </Link>
          <Link
            href="/services"
            style={{
              display: "inline-block",
              color: "#111",
              fontWeight: 600,
              fontSize: "0.92rem",
              textDecoration: "underline",
            }}
          >
            See what's included
          </Link>
        </div>

        {/* FAQ */}
        <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#111", marginBottom: "1rem" }}>
          Frequently Asked Questions
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "2rem" }}>
          {[
            {
              q: "Does a hand-coded website need to be updated differently than a WordPress site?",
              a: "For content changes, yes — you edit the HTML file directly or hire a developer to do so. But unlike WordPress, there are no plugins, CMS updates, or security patches to manage. It's a much lower maintenance burden overall.",
            },
            {
              q: "Is a hand-coded website better for Google SEO?",
              a: "Generally yes. Clean, semantic HTML with no builder overhead loads faster and gives Google clearer signals about your page content. Page speed is a confirmed ranking factor, and hand-coded sites consistently outperform builders on speed tests.",
            },
            {
              q: "Can I host a hand-coded website for free?",
              a: "Yes. Platforms like GitHub Pages, Netlify, and Vercel offer free hosting for static HTML/CSS websites. You can host your hand-coded site for $0/month — compared to $17–$49/month on a website builder.",
            },
            {
              q: "What's the difference between hand-coded and AI-generated websites?",
              a: "AI website generators like Wix ADI or Framer AI still produce bloated code and lock you into their platforms. A hand-coded website written by a human designer has intentional, clean code that is fully owned by you.",
            },
          ].map(({ q, a }, i) => (
            <div
              key={i}
              style={{
                background: "var(--surface)",
                border: "1.5px solid var(--border)",
                borderRadius: "0.875rem",
                padding: "1.1rem 1.3rem",
              }}
            >
              <p style={{ fontWeight: 700, color: "#111", marginBottom: "0.4rem" }}>{q}</p>
              <p style={{ color: "#555", lineHeight: 1.7, margin: 0, fontSize: "0.92rem" }}>{a}</p>
            </div>
          ))}
        </div>
      </article>

      <BlogSidebar currentSlug="what-is-a-hand-coded-website" />
    </div>
    </>
  );
}
