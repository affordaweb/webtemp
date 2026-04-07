import { NextRequest, NextResponse } from "next/server";
import { kvSet, kvGet } from "@/lib/kv";
import { TemplateRequest } from "@/lib/types";
import { sendAdminNotification } from "@/lib/email";
import { v4 as uuidv4 } from "uuid";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { name, email, businessName, industry, tagline, targetAudience, pages, primaryColor, style, fontStyle, features, inspirationUrl, socialFacebook, socialInstagram, socialOther, notes, designFeedback, requestedLiveSetup, focusKeyword, targetCity, businessPhone, businessAddress } = body;

    // Basic validation
    if (!name || !email || !businessName || !industry || !Array.isArray(pages) || pages.length === 0) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Simple email format check
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    const id = uuidv4();
    const request: TemplateRequest = {
      id,
      name: String(name).slice(0, 120),
      email: String(email).slice(0, 254),
      businessName: String(businessName).slice(0, 200),
      industry: String(industry).slice(0, 100),
      tagline: tagline ? String(tagline).slice(0, 200) : undefined,
      targetAudience: targetAudience ? String(targetAudience).slice(0, 300) : undefined,
      pages: pages.slice(0, 10).map((p: unknown) => String(p).slice(0, 60)),
      primaryColor: String(primaryColor ?? "black").slice(0, 30),
      style: String(style ?? "modern").slice(0, 60),
      fontStyle: fontStyle ? String(fontStyle).slice(0, 30) : undefined,
      features: Array.isArray(features) ? features.slice(0, 20).map((f: unknown) => String(f).slice(0, 80)) : undefined,
      inspirationUrl: inspirationUrl ? String(inspirationUrl).slice(0, 500) : undefined,
      socialFacebook: socialFacebook ? String(socialFacebook).slice(0, 300) : undefined,
      socialInstagram: socialInstagram ? String(socialInstagram).slice(0, 300) : undefined,
      socialOther: socialOther ? String(socialOther).slice(0, 300) : undefined,
      notes: String(notes ?? "").slice(0, 1000),
      designFeedback: designFeedback ? String(designFeedback).slice(0, 1000) : undefined,
      focusKeyword: focusKeyword ? String(focusKeyword).slice(0, 200) : undefined,
      targetCity: targetCity ? String(targetCity).slice(0, 100) : undefined,
      businessPhone: businessPhone ? String(businessPhone).slice(0, 30) : undefined,
      businessAddress: businessAddress ? String(businessAddress).slice(0, 300) : undefined,
      requestedLiveSetup: Boolean(requestedLiveSetup),
      status: "pending",
      createdAt: new Date().toISOString(),
    };

    await kvSet(`request:${id}`, request);

    // Add to index (fire and forget — don't fail if this fails)
    kvGet<string[]>("__request_ids__")
      .then((ids) => kvSet("__request_ids__", [...(ids ?? []), id]))
      .catch(() => {});

    // Send admin notification (fire and forget)
    sendAdminNotification(request).catch(() => {});

    return NextResponse.json({ id }, { status: 201 });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Internal server error";
    console.error("[submit-request]", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
