import Hero from "@/components/sections/Hero";
import ImpactMetrics from "@/components/sections/ImpactMetrics";
import About from "@/components/sections/About";
import TechnologyStack from "@/components/sections/TechnologyStack";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Hero />

      <ImpactMetrics />

      <About />

      <TechnologyStack />

      <Experience />

      <Projects />

      <Certifications />

      <Contact />

      <Footer />
    </main>
  );
}