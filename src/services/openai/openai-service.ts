// src/services/openai/openai-service.ts

import OpenAI from "openai";
import axios from "axios";
import axiosRetry from "axios-retry";
import chunk from "lodash.chunk";
import { v4 as uuidv4 } from 'uuid';
import { config } from "@/config/config";
import { delay, saveDataToFile } from "@/utils";

const openai = new OpenAI({
  apiKey: config.openaiApiKey,
});

axiosRetry(axios, {
  retries: 3,
  retryCondition: (error) => error.response?.status === 429,
  retryDelay: axiosRetry.exponentialDelay,
});

export const runAgentAnalysis = async (data: string[], fileType: string = 'md') => {
  const processRunId = uuidv4();
  try {
    const dataChunks = chunk(data, 1);

    let summaries: string[] = [];

    for (const dataChunk of dataChunks) {
      await delay(2000);

      const response = await openai.chat.completions.create({
        messages: [
          {
            role: 'system',
            content: 'You are a helpful assistant that specializes in summarizing information about token launches and funding announcements. Your goal is to extract key details such as company names, token names, launch dates, descriptions, websites, whitepapers, and any contact information relevant to new token launches, recently launched tokens, upcoming ICOs/presales, and newly funded blockchain companies. Please format your response in markdown.'
          },
          {
            role: 'user',
            content: `Please analyze the following information and provide a concise summary in markdown format, highlighting important people or companies to contact as well as including all relevant details about new token launches or recently funded blockchain companies: ${dataChunk.join('\n\n')}`
          }
        ],
        model: 'gpt-4-turbo',
        temperature: 0.7,
        max_tokens: 3000,
        top_p: 1.0,
        frequency_penalty: 0.5,
        presence_penalty: 0.0,
      });

      if (response && response.choices && response.choices.length > 0) {
        const summary = response.choices[0].message?.content;
        if (summary) {
          summaries.push(summary);
        }
      } else {
        console.error('No valid response received from OpenAI.');
      }
    }

    const finalSummary = summaries.join('\n\n');
    saveDataToFile(finalSummary, fileType, processRunId);

    return finalSummary;

  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Error communicating with OpenAI:', error.message, error.response?.data);
    } else {
      console.error('Unexpected error:', error);
    }
    return null;
  }
};