import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Navbar from "./components/Navbar";
import Process from "./components/Process";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Stats from "./components/Stats";

function App() {
  return (
    <div className="relative">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-acid focus:px-5 focus:py-3 focus:text-sm focus:font-medium focus:text-ink"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main">
        <Hero />
        <Marquee />
        <Stats />
        <About />
        <Services />
        <Process />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
