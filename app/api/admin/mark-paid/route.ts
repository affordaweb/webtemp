import { NextRequest, NextResponse } from "next/server";
import { kvGet, kvSet } from "@/lib/kv";
import { TemplateRequest } from "@/lib/types";
import { sendDownloadReady } from "@/lib/email";
import { v4 as uuidv4 } from "uuid";

function isAuthorised(req: NextRequest): boolean {
  const secret = req.headers.get("x-admin-secret");
  return secret === process.env.ADMIN_SECRET;
}

export async function POST(req: NextRequest) {
  if (!isAuthorised(req)) {
    return NextResponse.json({ error: "Unauthorised" }, { status: 401 });
  }

  const { id } = await req.json();
  if (!id) {
    return NextResponse.json({ error: "Missing id" }, { status: 400 });
  }

  const request = await kvGet<TemplateRequest>(`request:${id}`);
  if (!request) {
    return NextResponse.json({ error: "Request not found" }, { status: 404 });
  }

  if (request.status === "delivered") {
    return NextResponse.json({ error: "Already delivered" }, { status: 409 });
  }

  const downloadToken = uuidv4();
  const updated: TemplateRequest = {
    ...request,
    status: "delivered",
    downloadToken,
  };

  // Store updated request and token→id mapping
  await kvSet(`request:${id}`, updated);
  await kvSet(`token:${downloadToken}`, id);

  // Notify customer (fire and forget)
  sendDownloadReady(updated).catch(() => {});

  return NextResponse.json({ downloadToken });
}
