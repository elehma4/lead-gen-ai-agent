// src/services/search/search-service.ts

import googleIt from 'google-it';

interface SearchResult {
  link: string;
}

export const searchKeywords = async (keywords: string[]): Promise<string[]> => {
  let results: string[] = [];
  for (const keyword of keywords) {
      const searchResults: SearchResult[] = await googleIt({ query: keyword });
      results.push(...searchResults.slice(0, 5).map((result: SearchResult) => result.link));
  }
  return results;
};