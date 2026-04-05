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
  pages: string[]
  colors?: string
  primaryColor: string
  style: string
  notes?: string
  // Delivery
  downloadToken?: string
  downloadReadyAt?: string
  // Upsell
  requestedLiveSetup?: boolean
}
