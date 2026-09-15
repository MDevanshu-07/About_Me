
import React, { useEffect, useState } from "react";
import Lenis from "lenis";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./components/Projects";
import Footer from "./pages/Footer";

const App = () => {
  const [repo, setRepo] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/MDevanshu-07/repos")
      .then((response) => response.json())
      .then((data) => setRepo(data))
      .catch((error) => console.error("Error fetching repos:", error));
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      lerp: 0.08,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Smooth scrolling for navbar links
    const handleClick = (e) => {
      const link = e.target.closest("a");

      if (!link) return;

      const href = link.getAttribute("href");

      if (!href || !href.startsWith("#")) return;

      const target = document.querySelector(href);

      if (!target) return;

      e.preventDefault();

      lenis.scrollTo(target, {
        duration: 1.5,
        easing: (t) => 1 - Math.pow(1 - t, 4),
      });
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-black text-white flex flex-col">

      <section id="home" className="scroll-mt-20">
        <Home />
      </section>

      <section id="projects" className="scroll-mt-20">
        <Projects repo={repo} />
      </section>

      <section id="about" className="scroll-mt-20">
        <About />
      </section>

      <section id="contact" className="scroll-mt-20">
        <Footer />
      </section>

    </div>
  );
};

export default App;
