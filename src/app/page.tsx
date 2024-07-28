import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <div
        id="page-container"
        className="mx-auto flex min-h-dvh w-full min-w-[320px] flex-col bg-gray-100 dark:bg-gray-900 dark:text-gray-100"
      >
        <Header />
        <main id="page-content" className="flex max-w-full flex-auto flex-col">
          <div className="container mx-auto p-4 lg:p-8 xl:max-w-7xl">
            <div className="flex items-center justify-center rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 py-32 text-gray-400 dark:border-gray-700 dark:bg-gray-800">
              Content goes here
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
