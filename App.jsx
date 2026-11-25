import React, { useEffect } from "react";

import Sidebar from "./Components/Layout/Sidebar";
import ScrollExtras from "./Components/Layout/ScrollExtras";
import Hero from "./Components/Sections/Hero";
import About from "./Components/Sections/About";
import Experience from "./Components/Sections/Experience";
import Projects from "./Components/Sections/Projects";
import Skills from "./Components/Sections/Skills";
import Education from "./Components/Sections/Education";
import Contact from "./Components/Sections/Contact";
import { profile } from "./Components/data/portfolio";

function App() {
  // Sections render after the browser first looks for a #hash, so scroll to it here
  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (!id) return;
    const jump = () => document.getElementById(id)?.scrollIntoView({ behavior: "instant" });
    jump();
    // Web fonts change text height, so line up again once they have loaded
    document.fonts?.ready.then(jump);
  }, []);

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[60] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:font-semibold focus:text-ink">
        Skip to content
      </a>
      <ScrollExtras />
      <Sidebar />
      <div className="lg:pl-64">
        <main id="main">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Contact />
        </main>
        <footer className="border-t border-white/5 py-8 text-center text-sm text-zinc-500">
          <p className="container-page">
            © {new Date().getFullYear()} {profile.name}. {profile.tagline}
          </p>
        </footer>
      </div>
    </>
  );
}

export default App;
