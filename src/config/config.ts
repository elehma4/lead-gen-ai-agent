// src/config/config.ts

import 'dotenv/config';

const getEnvVariable = (key: string, defaultValue?: string): string => {
  const value = process.env[key] || defaultValue;
  if (!value) {
    throw new Error(`Missing environment variable: ${key}`);
  }
  return value;
};

export const config = {
  openaiApiKey: getEnvVariable('NEXT_PUBLIC_OPENAI_API_KEY'),
  twitterApiKey: getEnvVariable('NEXT_PUBLIC_TWITTER_API_KEY'),
  twitterApiSecret: getEnvVariable('NEXT_PUBLIC_TWITTER_API_SECRET'),
  twitterApiAccessToken: getEnvVariable('NEXT_PUBLIC_TWITTER_ACCESS_TOKEN'),
  twitterApiAccessSecret: getEnvVariable('NEXT_PUBLIC_TWITTER_ACCESS_SECRET'),
}