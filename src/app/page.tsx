import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import VampShowcase from "./components/VampShowcase";
import TrailixShowcase from "./components/TrailixShowcase";
import ValvrareShowcase from "./components/ValvrareShowcase";
import MonkeyShowcase from "./components/MonkeyShowcase";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <VampShowcase />
      <TrailixShowcase />
      <ValvrareShowcase />
      <MonkeyShowcase />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </main>
  );
}
