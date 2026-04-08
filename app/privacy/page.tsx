import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Privacy Policy | AffordaWeb Solutions" },
  description: "Privacy Policy for AffordaWeb Solutions — how we collect, use, and protect your information.",
  alternates: { canonical: "/privacy" },
};

const LAST_UPDATED = "April 6, 2026";
const CONTACT_EMAIL = "support@affordawebsolutions.com";
const SITE_URL = "https://www.affordawebsolutions.com";

export default function PrivacyPage() {
  return (
    <div style={{ padding: "5rem 0 6rem" }}>
      <div className="container-tight" style={{ maxWidth: 780 }}>
        <h1
          style={{
            fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
            fontWeight: 900,
            color: "#111111",
            marginBottom: "0.5rem",
          }}
        >
          Privacy Policy
        </h1>
        <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginBottom: "3rem" }}>
          Last updated: {LAST_UPDATED}
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "2rem", color: "var(--text-muted)", lineHeight: 1.8, fontSize: "0.97rem" }}>
          <section>
            <h2 style={{ color: "#111111", fontWeight: 800, fontSize: "1.15rem", marginBottom: "0.6rem" }}>1. Who We Are</h2>
            <p>
              AffordaWeb Solutions operates the website at <a href={SITE_URL} style={{ color: "#111111" }}>{SITE_URL}</a>. We provide custom website template design services. This policy explains what personal data we collect, why we collect it, and how we use it.
            </p>
          </section>

          <section>
            <h2 style={{ color: "#111111", fontWeight: 800, fontSize: "1.15rem", marginBottom: "0.6rem" }}>2. Information We Collect</h2>
            <p>We collect information you provide directly:</p>
            <ul style={{ margin: "0.75rem 0 0 1.25rem" }}>
              <li><strong style={{ color: "#111111" }}>Order form submissions</strong> — your name, email, business name, and project details when you use the Build My Website form.</li>
              <li><strong style={{ color: "#111111" }}>Contact form submissions</strong> — your name, email, and message when you contact us.</li>
              <li><strong style={{ color: "#111111" }}>Payment information</strong> — processed securely by PayPal. We never store card details.</li>
            </ul>
            <p style={{ marginTop: "0.75rem" }}>
              We also collect anonymised analytics data (page views, device type, referral source) via Google Analytics to understand how our site is used. No personally identifiable information is shared with Google Analytics.
            </p>
          </section>

          <section>
            <h2 style={{ color: "#111111", fontWeight: 800, fontSize: "1.15rem", marginBottom: "0.6rem" }}>3. How We Use Your Information</h2>
            <ul style={{ margin: "0 0 0 1.25rem" }}>
              <li>To process your website design order and deliver your files.</li>
              <li>To respond to your enquiries and provide customer support.</li>
              <li>To send a one-time order confirmation and download link by email.</li>
              <li>To improve our website and services via aggregated analytics.</li>
            </ul>
            <p style={{ marginTop: "0.75rem" }}>We do not sell, rent, or share your personal data with third parties for marketing purposes.</p>
          </section>

          <section>
            <h2 style={{ color: "#111111", fontWeight: 800, fontSize: "1.15rem", marginBottom: "0.6rem" }}>4. Cookies</h2>
            <p>
              Our site uses cookies for Google Analytics (anonymised) and Cloudflare Turnstile (bot protection on forms). No tracking cookies are set for advertising. You can disable cookies in your browser settings, though some features may not work correctly.
            </p>
          </section>

          <section>
            <h2 style={{ color: "#111111", fontWeight: 800, fontSize: "1.15rem", marginBottom: "0.6rem" }}>5. Data Retention</h2>
            <p>
              Order and contact form submissions are retained for up to 12 months for support purposes and then securely deleted. You may request deletion at any time by emailing us.
            </p>
          </section>

          <section>
            <h2 style={{ color: "#111111", fontWeight: 800, fontSize: "1.15rem", marginBottom: "0.6rem" }}>6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul style={{ margin: "0.75rem 0 0 1.25rem" }}>
              <li>Access the personal data we hold about you.</li>
              <li>Request correction of inaccurate data.</li>
              <li>Request deletion of your data.</li>
              <li>Withdraw consent where processing is based on consent.</li>
            </ul>
            <p style={{ marginTop: "0.75rem" }}>To exercise any of these rights, email us at <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: "#111111" }}>{CONTACT_EMAIL}</a>.</p>
          </section>

          <section>
            <h2 style={{ color: "#111111", fontWeight: 800, fontSize: "1.15rem", marginBottom: "0.6rem" }}>7. Third-Party Services</h2>
            <p>We use the following third-party services that have their own privacy policies:</p>
            <ul style={{ margin: "0.75rem 0 0 1.25rem" }}>
              <li><strong style={{ color: "#111111" }}>PayPal</strong> — payment processing</li>
              <li><strong style={{ color: "#111111" }}>Google Analytics</strong> — aggregated site analytics</li>
              <li><strong style={{ color: "#111111" }}>Google Tag Manager</strong> — analytics tag management</li>
              <li><strong style={{ color: "#111111" }}>Cloudflare Turnstile</strong> — bot protection on forms</li>
              <li><strong style={{ color: "#111111" }}>Vercel</strong> — website hosting and infrastructure</li>
            </ul>
          </section>

          <section>
            <h2 style={{ color: "#111111", fontWeight: 800, fontSize: "1.15rem", marginBottom: "0.6rem" }}>8. Security</h2>
            <p>
              Your data is transmitted over HTTPS. We take reasonable technical measures to protect your information, but no method of internet transmission is 100% secure.
            </p>
          </section>

          <section>
            <h2 style={{ color: "#111111", fontWeight: 800, fontSize: "1.15rem", marginBottom: "0.6rem" }}>9. Changes to This Policy</h2>
            <p>
              We may update this policy from time to time. The &quot;Last updated&quot; date at the top of this page will reflect any changes. Continued use of the site after changes constitutes acceptance.
            </p>
          </section>

          <section>
            <h2 style={{ color: "#111111", fontWeight: 800, fontSize: "1.15rem", marginBottom: "0.6rem" }}>10. Contact</h2>
            <p>
              Questions about this Privacy Policy? Email us at{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: "#111111" }}>{CONTACT_EMAIL}</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
