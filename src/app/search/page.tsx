'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TagsInput from "@/components/TagsInput";
import Response from "@/components/Response";
import mockData from "../../utils/mockData.md";
import { useState } from 'react';

export default function Search () {
  const [responses, setResponses] = useState<string[]>([
    "Hi! 👋 I'm your Lead Gen AI Agent.",
    "Input some keywords into the search bar and I will begin researching for you!",
    // mockData
  ]);

  return (
    <>
      <div
        id="page-container"
        className="mx-auto flex min-h-dvh w-full min-w-[320px] flex-col bg-gray-100 dark:bg-gray-950 dark:text-gray-100"
      >
        <Header />
        <main id="page-content" className="flex max-w-full flex-auto flex-col">
          <div className="container m-auto p-4 lg:p-8 xl:max-w-7xl flex flex-col gap-4">
            <div className="flex items-center justify-center rounded-xl border-2 border-gray-200 bg-gray-50 p-8 text-gray-400 dark:border-gray-700 dark:bg-gray-800">
              <Response responses={responses} />
            </div>
            <div className="flex items-center justify-center rounded-xl border-2 border-gray-200 bg-gray-50 p-8 text-gray-400 dark:border-gray-700 dark:bg-gray-800">
              <TagsInput />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}