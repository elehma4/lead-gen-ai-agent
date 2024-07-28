import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Dashboard from "./dashboard/page";

export default function Home() {
  return (
    <>
      <div
        id="page-container"
        className="mx-auto flex min-h-dvh w-full min-w-[320px] flex-col bg-gray-100 dark:bg-gray-950 dark:text-gray-100"
      >
        <Header />
        <main id="page-content" className="flex max-w-full flex-auto flex-col">
          <div className="container mx-auto p-4 lg:p-8 xl:max-w-7xl mt-20">
            <div className="font-semibold mb-4 pl-2">
              Welcome to the future of lead generation and research.
            </div>
            <div className="flex items-center justify-center rounded-xl  bg-gray-50 p-8 text-gray-400 dark:bg-gray-800">
              <Dashboard />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
