// src/app/research/page.tsx
'use client';

import { useState } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TagsInput from "@/components/TagsInput";
import Response from "@/components/Response";

export default function Research() {
  const [tags, setTags] = useState<string[]>([]);
  const [responses, setResponses] = useState<string[]>([
    "Hi! 👋 I'm your Lead Gen AI Agent.",
    "Input some keywords into the search bar and I will begin researching for you!",
  ]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const runAnalysis = async (keywords: string[]) => {
    setIsAnalyzing(true);
    setResponses(prev => [...prev, "Starting analysis..."]);

    const MAX_URLS = 10;
    const MAX_TOKENS = 10000;
    let processedUrls: string[] = [];

    for (const keyword of keywords) {
      try {
        setResponses(prev => [...prev, `Searching for keyword: ${keyword}`]);
        const searchResponse = await fetch('/api/search', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ keywords: [keyword] }),
        });

        if (!searchResponse.ok) {
          throw new Error(`Failed to search for keyword: ${keyword}`);
        }

        const { results: urls } = await searchResponse.json();
        setResponses(prev => [...prev, `Found ${urls.length} URLs for keyword: ${keyword}`]);

        for (const url of urls.slice(0, MAX_URLS)) {
          if (processedUrls.includes(url)) {
            continue;
          }

          try {
            setResponses(prev => [...prev, `Scraping content from URL: ${url}`]);
            const scrapeResponse = await fetch('/api/scrape', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ url }),
            });

            if (!scrapeResponse.ok) {
              throw new Error(`Failed to scrape content from URL: ${url}`);
            }

            const { content } = await scrapeResponse.json();
            const tokenCount = content.split(/\s+/).length;

            if (tokenCount <= MAX_TOKENS) {
              setResponses(prev => [...prev, `Analyzing content from URL: ${url}`]);
              const analyzeResponse = await fetch('/api/analyze', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ content }),
              });

              if (!analyzeResponse.ok) {
                throw new Error(`Failed to analyze content from URL: ${url}`);
              }

              const { summary } = await analyzeResponse.json();
              setResponses(prev => [...prev, summary]);
              processedUrls.push(url);
              break;
            }
          } catch (error) {
            console.error(`Error processing URL: ${url}`, error);
            setResponses(prev => [...prev, `Error processing URL: ${url}`]);
          }
        }
      } catch (error) {
        console.error(`Error processing keyword: ${keyword}`, error);
        setResponses(prev => [...prev, `Error processing keyword: ${keyword}`]);
      }
    }

    setResponses(prev => [...prev, "Analysis complete!"]);
    setIsAnalyzing(false);
  };

  const handleSearch = (keywords: string[]) => {
    if (keywords.length > 0 && !isAnalyzing) {
      runAnalysis(keywords);
    }
  }

  return (
    <>
      <div id="page-container" className="mx-auto flex min-h-dvh w-full min-w-[320px] flex-col bg-gray-100 dark:bg-gray-950 dark:text-gray-100">
        <Header />
        <main id="page-content" className="flex max-w-full flex-auto flex-col">
          <div className="container m-auto p-4 lg:p-8 xl:max-w-7xl flex flex-col gap-4">
            <div className="flex items-center justify-center rounded-xl border-2 border-gray-200 bg-gray-50 p-2 text-gray-400 dark:border-gray-700 dark:bg-gray-800">
              <Response responses={responses} />
            </div>
            <div className="flex items-center justify-center rounded-xl border-2 border-gray-200 bg-gray-50 p-2 text-gray-400 dark:border-gray-700 dark:bg-gray-800">
              <TagsInput tags={tags} setTags={setTags} onSearch={handleSearch} isDisabled={isAnalyzing} />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}