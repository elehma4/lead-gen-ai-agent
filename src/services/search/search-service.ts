// src/services/search/search-service.ts
import googleIt from 'google-it';

interface SearchResult {
  link: string;
}

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const searchGoogle = async (query: string) => {
  try {
    const searchResults = await googleIt({ query, options: { diagnostics: true } });
    return searchResults;
  } catch (error: any) {
    console.error(`Error searching Google for query "${query}":`, error);
    throw error;
  }
};

export const searchKeywords = async (keywords: string[]): Promise<string[]> => {
  const MAX_RETRIES = 3;
  const BASE_DELAY = 1000;
  let results: string[] = [];

  for (const keyword of keywords) {
    let retries = 0;
    let success = false;

    while (retries < MAX_RETRIES && !success) {
      try {
        console.log(`Searching for keyword: ${keyword}`);
        const searchResults: SearchResult[] = await searchGoogle(keyword);
        results.push(...searchResults.slice(0, 5).map((result: SearchResult) => result.link));
        success = true;
      } catch (error: any) {
        if (error.response?.status === 429) {
          retries += 1;
          const waitTime = BASE_DELAY * 2 ** retries;
          console.error(`Rate limit exceeded. Waiting for ${waitTime} ms before retrying...`);
          await delay(waitTime);
        } else {
          throw error;
        }
      }
    }
  }

  return results;
};