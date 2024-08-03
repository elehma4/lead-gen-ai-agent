// src/types/env.d.ts

declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_OPENAI_API_KEY: string;
    NEXT_PUBLIC_TWITTER_API_KEY: string;
    NEXT_PUBLIC_TWITTER_API_SECRET: string;
    NEXT_PUBLIC_TWITTER_ACCESS_TOKEN: string;
    NEXT_PUBLIC_TWITTER_ACCESS_SECRET: string;
  }
}