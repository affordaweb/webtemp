import { NextRequest, NextResponse } from "next/server";
import { kvGet } from "@/lib/kv";
import { TemplateRequest } from "@/lib/types";

function isAuthorised(req: NextRequest): boolean {
  const secret = req.headers.get("x-admin-secret");
  return secret === process.env.ADMIN_SECRET;
}

export async function GET(req: NextRequest) {
  if (!isAuthorised(req)) {
    return NextResponse.json({ error: "Unauthorised" }, { status: 401 });
  }

  const ids = await kvGet<string[]>("__request_ids__") ?? [];
  const requests: TemplateRequest[] = [];

  for (const id of ids) {
    const r = await kvGet<TemplateRequest>(`request:${id}`);
    if (r) requests.push(r);
  }

  return NextResponse.json(requests);
}
