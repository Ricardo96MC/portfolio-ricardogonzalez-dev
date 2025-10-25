import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="bg-transparent min-h-screen">
      <Hero />
      <Experience />
      <Footer />
    </main>
  );
}
