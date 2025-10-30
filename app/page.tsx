import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center py-20 px-8 bg-white dark:bg-zinc-900 text-center">
        <h1 className="text-5xl font-bold text-black dark:text-white mb-6">
          Welcome to <span className="text-blue-600">NIVET</span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-md mb-10">
          We build powerful digital products that connect businesses to the
          future.
        </p>
        <a
          href="#services"
          className="rounded-full bg-blue-600 text-white px-6 py-3 font-medium hover:bg-blue-700 transition"
        >
          Explore Our Work
        </a>
      </main>
    </div>
  );
}
