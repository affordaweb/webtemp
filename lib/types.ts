export type RequestStatus = 'pending' | 'paid' | 'delivered'

export interface TemplateRequest {
  id: string
  createdAt: string
  status: RequestStatus
  // User details
  name: string
  email: string
  phone?: string
  // Business details
  businessName: string
  industry: string
  tagline?: string
  targetAudience?: string
  // Design
  pages: string[]
  primaryColor: string
  style: string
  fontStyle?: string
  // Features & content
  features?: string[]
  inspirationUrl?: string
  socialFacebook?: string
  socialInstagram?: string
  socialOther?: string
  // Notes & feedback
  notes?: string
  designFeedback?: string
  // Legacy
  colors?: string
  // Delivery
  downloadToken?: string
  downloadReadyAt?: string
  // Upsell
  requestedLiveSetup?: boolean
}
