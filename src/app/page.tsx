import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 text-center px-6">
      <h1 className="text-5xl font-bold text-[#B22222]"> Ricardo Gonzalez</h1>
      <p className="mt-4 max-w-xl text-gray-700 text-lg">
        Full Stack Engineer focusing on modern Java/C#, React, and Cloud Systems.
      </p>
      <div className="mt-8 flex gap-4">
        <Link
          href="/projects"
          className="rounded-md bg-[#B22222] px-5 py-3 text-white font-medium hover:opacity-90 transition"
        >
          View Projects
        </Link>
        <Link
          href="/about"
          className="rounded-md border border-[#B22222] px-5 py-3 text-[#B22222] font-medium hover:bg-[#B22222] hover:text-white transition"
        >
          About Me
        </Link>
      </div>
    </main>
  );
}
