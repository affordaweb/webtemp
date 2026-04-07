import { Resend } from 'resend'
import type { TemplateRequest } from './types'

let resend: Resend | null = null

function getResend(): Resend {
  if (!resend) {
    if (!process.env.RESEND_API_KEY) throw new Error('RESEND_API_KEY not set')
    resend = new Resend(process.env.RESEND_API_KEY)
  }
  return resend
}

export async function sendAdminNotification(req: TemplateRequest): Promise<void> {
  const adminEmail = process.env.ADMIN_EMAIL
  if (!adminEmail) return
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://webtemp.vercel.app'

  const from = process.env.FROM_EMAIL ?? 'AffordaWeb Solutions <support@affordawebsolutions.net>'
  await getResend().emails.send({
    from,
    to: adminEmail,
    subject: `New Website Request — ${req.businessName}`,
    replyTo: req.email,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
        <h2 style="color:#111111">New Website Request</h2>
        <table style="width:100%;border-collapse:collapse">
          <tr><td style="padding:8px 0;color:#6b7280;font-size:14px">ID</td><td style="padding:8px 0;font-weight:600">${req.id}</td></tr>
          <tr><td style="padding:8px 0;color:#6b7280;font-size:14px">Name</td><td style="padding:8px 0;font-weight:600">${req.name}</td></tr>
          <tr><td style="padding:8px 0;color:#6b7280;font-size:14px">Email</td><td style="padding:8px 0;font-weight:600">${req.email}</td></tr>
          <tr><td style="padding:8px 0;color:#6b7280;font-size:14px">Business</td><td style="padding:8px 0;font-weight:600">${req.businessName}</td></tr>
          <tr><td style="padding:8px 0;color:#6b7280;font-size:14px">Industry</td><td style="padding:8px 0;font-weight:600">${req.industry}</td></tr>
          <tr><td style="padding:8px 0;color:#6b7280;font-size:14px">Pages</td><td style="padding:8px 0;font-weight:600">${req.pages.join(', ')}</td></tr>
          <tr><td style="padding:8px 0;color:#6b7280;font-size:14px">Style</td><td style="padding:8px 0;font-weight:600">${req.style}</td></tr>
          <tr><td style="padding:8px 0;color:#6b7280;font-size:14px">Color</td><td style="padding:8px 0;font-weight:600">${req.primaryColor ?? req.colors}</td></tr>
          ${req.phone ? `<tr><td style="padding:8px 0;color:#6b7280;font-size:14px">Phone</td><td style="padding:8px 0;font-weight:600">${req.phone}</td></tr>` : ''}
        </table>
        <a href="${siteUrl}/admin" style="display:inline-block;margin-top:24px;background:#111111;color:#fff;padding:12px 28px;border-radius:999px;font-weight:700;text-decoration:none">View in Admin</a>
      </div>
    `,
  })
}

export async function sendDownloadReady(req: TemplateRequest): Promise<void> {
  if (!req.downloadToken) return
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://webtemp.vercel.app'
  const downloadUrl = `${siteUrl}/download/${req.downloadToken}`

  const from = process.env.FROM_EMAIL ?? 'AffordaWeb Solutions <support@affordawebsolutions.net>'
  await getResend().emails.send({
    from,
    to: req.email,
    subject: `Your Website is Ready — ${req.businessName}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
        <div style="background:#111111;padding:40px 32px;border-radius:16px;text-align:center;margin-bottom:32px">
          <h1 style="color:#fff;margin:0 0 8px;font-size:26px;font-weight:900">Your Website is Ready!</h1>
          <p style="color:rgba(255,255,255,0.75);margin:0;font-size:15px">Payment confirmed — your affordable website is waiting for you.</p>
        </div>
        <p style="color:#374151;font-size:15px">Hi ${req.name},</p>
        <p style="color:#374151;font-size:15px">Your website for <strong>${req.businessName}</strong> has been built and is ready to download. The link below is unique to your request and expires after 7 days.</p>
        <div style="text-align:center;margin:32px 0">
          <a href="${downloadUrl}" style="display:inline-block;background:#111111;color:#fff;padding:16px 40px;border-radius:999px;font-weight:800;text-decoration:none;font-size:16px">Download Your Website</a>
        </div>
        <p style="color:#6b7280;font-size:13px">Inside the zip you will find your website files plus a step-by-step guide to get your site live. If you need any help, reply to this email.</p>
        <p style="color:#6b7280;font-size:13px;margin-top:24px">— The AffordaWeb Solutions Team</p>
      </div>
    `,
  })
}
