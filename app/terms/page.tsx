import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | AffordaWeb Solutions",
  description: "Terms of Service for AffordaWeb Solutions — what you agree to when using our website design services.",
  alternates: { canonical: "/terms" },
};

const LAST_UPDATED = "April 6, 2026";
const CONTACT_EMAIL = "support@affordawebsolutions.net";

export default function TermsPage() {
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
          Terms of Service
        </h1>
        <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginBottom: "3rem" }}>
          Last updated: {LAST_UPDATED}
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "2rem", color: "var(--text-muted)", lineHeight: 1.8, fontSize: "0.97rem" }}>
          <section>
            <h2 style={{ color: "#111111", fontWeight: 800, fontSize: "1.15rem", marginBottom: "0.6rem" }}>1. Agreement</h2>
            <p>
              By placing an order with AffordaWeb Solutions (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) or using this website, you agree to these Terms of Service. If you do not agree, do not use our services.
            </p>
          </section>

          <section>
            <h2 style={{ color: "#111111", fontWeight: 800, fontSize: "1.15rem", marginBottom: "0.6rem" }}>2. Services</h2>
            <p>
              We provide custom website template design services. The deliverable is a ZIP file containing HTML, CSS, and associated assets based on the information you provide in our order form. Packages are:
            </p>
            <ul style={{ margin: "0.75rem 0 0 1.25rem" }}>
              <li><strong style={{ color: "#111111" }}>Starter ($29)</strong> — 1–3 pages, 1 revision round</li>
              <li><strong style={{ color: "#111111" }}>Standard ($79)</strong> — 4–6 pages, 2 revision rounds</li>
              <li><strong style={{ color: "#111111" }}>Premium ($129)</strong> — up to 8 pages, 3 revision rounds</li>
            </ul>
          </section>

          <section>
            <h2 style={{ color: "#111111", fontWeight: 800, fontSize: "1.15rem", marginBottom: "0.6rem" }}>3. Payment</h2>
            <p>
              All payments are processed securely via PayPal invoice. Payment is due before work begins. Prices are listed in USD. By paying, you confirm you are authorised to use the payment method provided.
            </p>
          </section>

          <section>
            <h2 style={{ color: "#111111", fontWeight: 800, fontSize: "1.15rem", marginBottom: "0.6rem" }}>4. Ownership & Licence</h2>
            <p>
              Upon receipt of full payment, you receive full ownership of the delivered website files. You may modify, host, resell, or redistribute the files without restriction. We retain no rights to the final deliverable.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              We may use non-identifying aspects of your project (such as design style) as portfolio examples unless you notify us otherwise in writing.
            </p>
          </section>

          <section>
            <h2 style={{ color: "#111111", fontWeight: 800, fontSize: "1.15rem", marginBottom: "0.6rem" }}>5. Revisions</h2>
            <p>
              Revision rounds are included per the package tier. A revision is a set of changes submitted in a single feedback message. Additional revision rounds beyond your package allowance may be purchased for $15 each.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              If you are not satisfied with the initial design, you may request a full rebuild from scratch at no additional cost — this counts as one revision round.
            </p>
          </section>

          <section>
            <h2 style={{ color: "#111111", fontWeight: 800, fontSize: "1.15rem", marginBottom: "0.6rem" }}>6. Delivery</h2>
            <p>
              Designs are typically delivered within 1 hour of receiving your completed order form and payment confirmation. Delivery time may extend during high-demand periods. We are not liable for delays caused by incomplete or unclear order form submissions.
            </p>
          </section>

          <section>
            <h2 style={{ color: "#111111", fontWeight: 800, fontSize: "1.15rem", marginBottom: "0.6rem" }}>7. Refunds</h2>
            <p>
              Due to the custom nature of our work, refunds are not available once design work has begun. If you cancel before work starts, you will receive a full refund. If you are unsatisfied after the included revision rounds have been used, contact us — we will work to find a fair resolution.
            </p>
          </section>

          <section>
            <h2 style={{ color: "#111111", fontWeight: 800, fontSize: "1.15rem", marginBottom: "0.6rem" }}>8. Your Responsibilities</h2>
            <p>You agree to:</p>
            <ul style={{ margin: "0.75rem 0 0 1.25rem" }}>
              <li>Provide accurate information in the order form.</li>
              <li>Only submit content (text, images, logos) that you own or have rights to use.</li>
              <li>Not use our services for unlawful, harmful, or deceptive purposes.</li>
            </ul>
          </section>

          <section>
            <h2 style={{ color: "#111111", fontWeight: 800, fontSize: "1.15rem", marginBottom: "0.6rem" }}>9. Limitation of Liability</h2>
            <p>
              AffordaWeb Solutions is not liable for any indirect, incidental, or consequential damages arising from your use of our services or the delivered files. Our maximum liability in any case is limited to the amount you paid for your order.
            </p>
          </section>

          <section>
            <h2 style={{ color: "#111111", fontWeight: 800, fontSize: "1.15rem", marginBottom: "0.6rem" }}>10. Governing Law</h2>
            <p>
              These terms are governed by applicable law. Any disputes will be handled through good-faith negotiation before any formal proceedings.
            </p>
          </section>

          <section>
            <h2 style={{ color: "#111111", fontWeight: 800, fontSize: "1.15rem", marginBottom: "0.6rem" }}>11. Changes</h2>
            <p>
              We may update these terms from time to time. Changes take effect when posted. Continued use of our services after changes constitutes acceptance.
            </p>
          </section>

          <section>
            <h2 style={{ color: "#111111", fontWeight: 800, fontSize: "1.15rem", marginBottom: "0.6rem" }}>12. Contact</h2>
            <p>
              Questions? Email{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: "#111111" }}>{CONTACT_EMAIL}</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
