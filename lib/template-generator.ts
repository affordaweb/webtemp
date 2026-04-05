import type { TemplateRequest } from './types'

/**
 * Generates a complete HTML/CSS website template zip buffer
 * based on the user's request details.
 */
export function buildTemplateHtml(req: TemplateRequest): string {
  const color = req.primaryColor ?? req.colors ?? 'purple'
  const primary = color === 'blue' ? '#2563EB'
    : color === 'green' ? '#16A34A'
    : color === 'red' ? '#DC2626'
    : color === 'orange' ? '#EA580C'
    : color === 'pink' ? '#E2498A'
    : '#5636D1'

  const navLinks = req.pages.map(p =>
    `<a href="#${p.toLowerCase().replace(/\s/g, '-')}" style="color:#fff;text-decoration:none;font-weight:500;font-size:14px;opacity:0.9">${p}</a>`
  ).join('\n            ')

  const sections = req.pages.map(p => {
    if (p.toLowerCase() === 'home') return ''
    return `
    <!-- ${p} Section -->
    <section id="${p.toLowerCase().replace(/\s/g, '-')}" style="padding:80px 24px;max-width:1100px;margin:0 auto">
      <h2 style="font-size:32px;font-weight:900;color:#0F0F1A;margin:0 0 16px;letter-spacing:-0.03em">${p}</h2>
      <p style="font-size:16px;color:#6B7280;line-height:1.7;max-width:640px">Add your ${p.toLowerCase()} content here. This section is ready to customise with your real content.</p>
    </section>`
  }).join('\n')

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${req.businessName}</title>
  <meta name="description" content="${req.businessName} — Professional website for ${req.industry}." />
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #0F0F1A; background: #fff; }
    a { color: inherit; }
    img { max-width: 100%; }

    /* Nav */
    nav { position: sticky; top: 0; z-index: 100; background: rgba(15,15,26,0.95); backdrop-filter: blur(12px); padding: 0 24px; display: flex; align-items: center; justify-content: space-between; height: 64px; }
    .nav-brand { font-size: 20px; font-weight: 900; color: #fff; letter-spacing: -0.025em; }
    .nav-links { display: flex; gap: 28px; }
    .nav-cta { background: ${primary}; color: #fff; padding: 9px 22px; border-radius: 999px; font-weight: 700; font-size: 14px; text-decoration: none; }

    /* Hero */
    .hero { background: linear-gradient(135deg, #0F0F1A 0%, ${primary} 60%, #E2498A 100%); padding: 100px 24px 80px; text-align: center; position: relative; overflow: hidden; }
    .hero::before { content: ''; position: absolute; top: -100px; right: -100px; width: 400px; height: 400px; border-radius: 50%; background: rgba(255,255,255,0.05); }
    .hero::after  { content: ''; position: absolute; bottom: -80px; left: -80px; width: 320px; height: 320px; border-radius: 50%; background: rgba(255,255,255,0.04); }
    .hero-badge { display: inline-flex; align-items: center; gap: 6px; background: rgba(255,255,255,0.15); color: #fff; padding: 7px 20px; border-radius: 999px; font-size: 13px; font-weight: 600; margin-bottom: 28px; border: 1px solid rgba(255,255,255,0.25); }
    .hero h1 { color: #fff; font-size: clamp(32px, 5vw, 56px); font-weight: 900; letter-spacing: -0.04em; line-height: 1.08; max-width: 700px; margin: 0 auto 20px; }
    .hero p  { color: rgba(255,255,255,0.8); font-size: 18px; max-width: 500px; margin: 0 auto 36px; line-height: 1.65; }
    .btn-primary { background: #fff; color: ${primary}; padding: 16px 40px; border-radius: 999px; font-size: 16px; font-weight: 800; text-decoration: none; display: inline-block; box-shadow: 0 8px 28px rgba(0,0,0,0.25); }
    .btn-secondary { background: rgba(255,255,255,0.12); color: #fff; padding: 16px 40px; border-radius: 999px; font-size: 16px; font-weight: 600; text-decoration: none; display: inline-block; border: 2px solid rgba(255,255,255,0.3); margin-left: 14px; }

    /* Services */
    .services { padding: 80px 24px; background: #F8F7FF; }
    .services-inner { max-width: 1100px; margin: 0 auto; }
    .section-label { font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em; color: ${primary}; margin-bottom: 10px; }
    .section-title { font-size: clamp(24px, 3vw, 36px); font-weight: 900; letter-spacing: -0.03em; margin-bottom: 40px; }
    .cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 24px; }
    .card { background: #fff; border-radius: 20px; padding: 28px; border: 1.5px solid rgba(86,54,209,0.1); box-shadow: 0 4px 20px rgba(0,0,0,0.05); }
    .card-icon { font-size: 32px; margin-bottom: 14px; }
    .card h3 { font-size: 16px; font-weight: 800; margin-bottom: 10px; color: #0F0F1A; }
    .card p  { font-size: 14px; color: #6B7280; line-height: 1.65; }

    /* CTA */
    .cta-section { background: linear-gradient(135deg, #0F0F1A 0%, ${primary} 60%, #E2498A 100%); padding: 80px 24px; text-align: center; }
    .cta-section h2 { color: #fff; font-size: clamp(26px, 4vw, 42px); font-weight: 900; letter-spacing: -0.03em; margin-bottom: 14px; max-width: 560px; margin-left: auto; margin-right: auto; }
    .cta-section p  { color: rgba(255,255,255,0.78); font-size: 16px; max-width: 440px; margin: 0 auto 32px; line-height: 1.65; }

    /* Footer */
    footer { background: #0F172A; padding: 32px 24px; text-align: center; }
    footer p { color: #64748B; font-size: 13px; }

    @media (max-width: 640px) {
      .nav-links { display: none; }
      .btn-secondary { display: block; margin: 14px auto 0; }
    }
  </style>
</head>
<body>

  <!-- Navigation -->
  <nav>
    <div class="nav-brand">${req.businessName}</div>
    <div class="nav-links">
      ${navLinks}
    </div>
    <a href="#contact" class="nav-cta">Get In Touch</a>
  </nav>

  <!-- Hero -->
  <section class="hero">
    <div class="hero-badge">⭐ Trusted by clients across ${req.industry}</div>
    <h1>Professional ${req.industry} Services You Can Trust</h1>
    <p>We deliver high-quality results tailored to your goals. Let us help your business grow and stand out.</p>
    <a href="#contact" class="btn-primary">Get Started Today</a>
    <a href="#services" class="btn-secondary">Learn More</a>
  </section>

  <!-- Services Section -->
  <section class="services">
    <div class="services-inner">
      <p class="section-label">What We Offer</p>
      <h2 class="section-title">Our Services</h2>
      <div class="cards">
        <div class="card"><div class="card-icon">🎯</div><h3>Strategy</h3><p>Smart planning and execution to deliver outcomes that matter for your business.</p></div>
        <div class="card"><div class="card-icon">⭐</div><h3>Quality</h3><p>We maintain the highest standards in everything we do, every single time.</p></div>
        <div class="card"><div class="card-icon">📞</div><h3>Support</h3><p>Always available when you need guidance, updates, or fast turnaround.</p></div>
      </div>
    </div>
  </section>

  ${sections}

  <!-- Contact Section -->
  <section id="contact" style="padding:80px 24px;max-width:700px;margin:0 auto;text-align:center">
    <p class="section-label">Get In Touch</p>
    <h2 style="font-size:clamp(24px,3vw,36px);font-weight:900;letter-spacing:-0.03em;margin-bottom:16px">Ready to Work Together?</h2>
    <p style="color:#6B7280;font-size:16px;margin-bottom:40px;line-height:1.65">Fill out the form below and we'll get back to you within 24 hours.</p>
    <form style="display:flex;flex-direction:column;gap:16px;max-width:480px;margin:0 auto">
      <input type="text" placeholder="Your Name" style="padding:14px 18px;border-radius:12px;border:1.5px solid #E5E7EB;font-size:15px;outline:none" />
      <input type="email" placeholder="Email Address" style="padding:14px 18px;border-radius:12px;border:1.5px solid #E5E7EB;font-size:15px;outline:none" />
      <textarea rows="4" placeholder="Tell us about your project..." style="padding:14px 18px;border-radius:12px;border:1.5px solid #E5E7EB;font-size:15px;resize:vertical;outline:none"></textarea>
      <button type="submit" style="background:${primary};color:#fff;padding:16px;border-radius:999px;font-size:16px;font-weight:800;border:none;cursor:pointer">Send Message</button>
    </form>
  </section>

  <!-- CTA Banner -->
  <div class="cta-section">
    <h2>Let's Build Something Great</h2>
    <p>Contact us today and take the first step toward a better online presence.</p>
    <a href="#contact" class="btn-primary">Get Started</a>
  </div>

  <!-- Footer -->
  <footer>
    <p>© ${new Date().getFullYear()} ${req.businessName}. All rights reserved.</p>
  </footer>

</body>
</html>`
}
