// src/app/api/analyze/route.ts
import { NextResponse } from "next/server";
import { runAgentAnalysis } from "@/services/openai/openai-service";

export async function POST(req: Request) {
  const { content } = await req.json();
  try {
    const summary = await runAgentAnalysis([content]);
    return NextResponse.json({ summary });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
