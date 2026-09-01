import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
import ParticleField from "@/components/ParticleField";

export default function Home() {
  return (
    <>
      <ParticleField />
      <Nav />
      <main className="relative z-10 flex-1">
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
      </main>
      <Footer />
    </>
  );
}
