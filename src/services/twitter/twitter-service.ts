// src/services/twitter/twitter-service.ts

import { TwitterApi, TweetV2, TweetSearchRecentV2Paginator } from 'twitter-api-v2';
import { config } from "@/config/config";

const twitterApiKey = config.twitterApiKey;
const twitterApiSecret = config.twitterApiKey;
const twitterApiAccessToken = config.twitterApiAccessToken;
const twitterApiAccessSecret = config.twitterApiAccessSecret;

const client = new TwitterApi({
  appKey: twitterApiKey,
  appSecret: twitterApiSecret,
  accessToken: twitterApiAccessToken,
  accessSecret: twitterApiAccessSecret,
});

const twitterClient = client.readOnly;

export const searchTweets = async (keywords: string[], maxResults: number = 10) => {
  const results: { keyword: string, tweet: string, user: string, date: string }[] = [];

  maxResults = Math.max(10, Math.min(maxResults, 100));

  for (const keyword of keywords) {
    console.log(`Searching for tweets with keyword: ${keyword}`);
    try {
      const searchResult: TweetSearchRecentV2Paginator = await twitterClient.v2.search(keyword, {
        max_results: maxResults,
        'tweet.fields': ['author_id', 'created_at', 'text'],
      });

      if (searchResult && searchResult.tweets && searchResult.tweets.length > 0) {
        searchResult.tweets.forEach((tweet: TweetV2) => {
          if (tweet.author_id && tweet.text && tweet.created_at) {
            results.push({
              keyword,
              tweet: tweet.text,
              user: tweet.author_id,
              date: tweet.created_at,
            });
          }
        });
      } else {
        console.log(`No tweets found for keyword: ${keyword}`);
      }
    } catch (error) {
      console.error(`Error fetching tweets for keyword ${keyword}:`, error);
    }
  }

  return results;
};