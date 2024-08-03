// src/app/api/search/route.ts
import { NextResponse } from 'next/server';
import { searchKeywords } from '@/services/search/search-service';

export async function POST(req: Request) {
  const { keywords } = await req.json();
  try {
    const results = await searchKeywords(keywords);
    return NextResponse.json({ results });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
