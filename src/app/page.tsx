import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Project from "@/components/Project";
import { loadProjects } from "@/lib/loadProjects";

const projects = await loadProjects();

export default function Home() {
  return (
    <main className="bg-transparent min-h-screen">
      <Hero />
      <Experience />
      <Project projects={projects} />
      <Footer />
    </main>
  );
}
