// src/app/api/scrape/route.ts
import { NextResponse } from 'next/server';
import { scrapePage } from '@/services/scraping/scraping-service';

export async function POST(req: Request) {
  const { url } = await req.json();
  try {
    console.log(`Received scrape request for URL: ${url}`);
    const content = await scrapePage(url);
    if (content === null) {
      console.log(`Failed to scrape content from ${url}`);
      return NextResponse.json({ error: "Unable to scrape content" }, { status: 400 });
    }
    console.log(`Successfully scraped content from ${url}`);
    return NextResponse.json({ content });
  } catch (error: any) {
    console.error(`Error in scrape route: ${error.message}`);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}