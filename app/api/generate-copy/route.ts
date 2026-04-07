import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "AI not configured" }, { status: 503 });
  }

  const body = await req.json().catch(() => null);
  if (!body?.businessName || !body?.industry) {
    return NextResponse.json({ error: "businessName and industry are required" }, { status: 400 });
  }

  const { businessName, industry, targetCity, focusKeyword, targetAudience } = body;

  const prompt = `You are a professional web copywriter. Generate website copy for a small business.

Business details:
- Name: ${businessName}
- Industry: ${industry}${targetCity ? `\n- Location: ${targetCity}` : ""}${focusKeyword ? `\n- Main keyword: ${focusKeyword}` : ""}${targetAudience ? `\n- Target audience: ${targetAudience}` : ""}

Return ONLY a valid JSON object with these exact keys (no markdown, no explanation):
{
  "tagline": "A punchy 6-10 word slogan that captures what makes this business special",
  "targetAudience": "1-2 sentences describing the ideal customer for this business",
  "heroHeadline": "A compelling h1 headline for the homepage hero section (max 10 words)",
  "heroSubline": "A supporting sentence under the headline, max 20 words",
  "aboutBlurb": "2-3 sentences describing the business, its values, and why customers choose them",
  "service1": "Name and 1-sentence description of their most likely offered service",
  "service2": "Name and 1-sentence description of a second relevant service",
  "service3": "Name and 1-sentence description of a third relevant service",
  "metaDescription": "SEO meta description for the homepage, 140-160 characters, includes business name and location if provided",
  "notes": "3 specific design/content suggestions for this business type (comma-separated)"
}`;

  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: { temperature: 0.7, maxOutputTokens: 1024 },
      }),
    }
  );

  if (!res.ok) {
    const err = await res.text();
    console.error("Gemini error:", err);
    return NextResponse.json({ error: "AI generation failed" }, { status: 502 });
  }

  const data = await res.json();
  const raw = data?.candidates?.[0]?.content?.parts?.[0]?.text ?? "";

  // Strip any markdown code fences if Gemini wraps it
  const cleaned = raw.replace(/^```(?:json)?\n?/i, "").replace(/\n?```$/i, "").trim();

  try {
    const parsed = JSON.parse(cleaned);
    return NextResponse.json(parsed);
  } catch {
    return NextResponse.json({ error: "Failed to parse AI response" }, { status: 500 });
  }
}
