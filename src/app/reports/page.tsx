'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DataTable from "@/components/DataTable";
import { sampleData } from "@/utils/sampleData";

export default function Reports () {
  return (
    <>
      <div
        id="page-container"
        className="mx-auto flex min-h-dvh w-full min-w-[320px] flex-col bg-gray-100 dark:bg-gray-950 dark:text-gray-100"
      >
        <Header />
        <main id="page-content" className="flex max-w-full flex-auto flex-col">
          <div className="container m-auto p-4 lg:p-8 xl:max-w-7xl flex flex-col gap-4">
            <div className="sm:flex sm:items-center">
              <div className="sm:flex-auto">
                <h1 className="text-base font-semibold leading-6 text-gray-200">Reports</h1>
                <p className="mt-2 text-sm text-gray-400">
                  A list of all the research runs including their keywords, date/time, website, and research topic.
                </p>
              </div>
            </div>
            <DataTable data={sampleData} />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}