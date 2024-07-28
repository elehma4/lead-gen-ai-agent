import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Dashboard from "./dashboard/page";

export default function Home() {
  return (
    <>
      <div
        id="page-container"
        className="mx-auto flex min-h-dvh w-full min-w-[320px] flex-col bg-gray-100 dark:bg-gray-900 dark:text-gray-100"
      >
        <Header />
        <main id="page-content" className="flex max-w-full flex-auto flex-col">
          <div className="container mx-auto p-4 lg:p-8 xl:max-w-7xl mt-20">
            <span className="font-semibold">
              Hello, welcome to the future of lead generation and research.
            </span>
            <div className="flex items-center justify-center rounded-xl border-2 border-gray-200 bg-gray-50 p-8 text-gray-400 dark:border-gray-700 dark:bg-gray-800">
              <Dashboard />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
