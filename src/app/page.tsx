import Link from "next/link";

export default function Home() {
  return (
    <main className=" h-screen overflow-y-scroll scroll smooth">
      {/* Here is our hero area!*/}
      <section
        id="hero"
        className="flex h-screen flex-col items-center justify-center bg-gray-50 text-center px-6"
      >        <h1 className="text-6xl font-bold text-[#B22222]"> Ricardo Gonzalez</h1>
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
      </section>
      {/* Experience Section Mini */}
      <div id="experience-mini" className="flex h-screen flex-col items-center justify-center bg-white text-center px6">
        <h2 className="text-4xl font-demibold text-[#B22222] mb-4">
          Experience
        </h2>
        <p className="max-w-2xl text-lg text-gray-700 leading-relaxed">
          For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have
          eternal life. For I know the plans I have for you,” declares the LORD, “plans to prosper you and not to harm you,
          plans to give you hope and a future. And we know that in all things God works for the good of those who love him,
          who have been called according to his purpose. I can do everything through him who gives me strength. In the beginning
          God created the heavens and the earth.
        </p>
        <Link href="/experience" className="mt-6 inline-block text-[#B22222] hover:underline font-medium">
          Explore Experience
        </Link>
      </div>

    </main>
  );
}
