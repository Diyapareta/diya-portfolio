import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

import Hero from "./components/Hero";
import CursorGlow from "./components/CursorGlow";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Certifications from "./components/Certifications";
import Experience from "./components/Experience";
import SectionTransition from "./components/SectionTransition";

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });
  const [showIntro, setShowIntro] = useState(true);

  // Load saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);
  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  // Apply theme
  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
      root.classList.remove("light");
    } else {
      root.classList.add("light");
      root.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      {/* ================= INTRO ================= */}

      <AnimatePresence mode="wait">
        {showIntro && <Intro onComplete={() => setShowIntro(false)} />}
      </AnimatePresence>

      {/* ================= MAIN WEBSITE ================= */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.98,
        }}
        animate={{
          opacity: showIntro ? 0 : 1,
          scale: showIntro ? 0.98 : 1,
        }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={`min-h-screen transition-colors duration-500 ${
          theme === "dark"
            ? "bg-[#020617] text-white"
            : "bg-gradient-to-br from-white via-purple-50 to-white text-gray-900"
        }`}
      >
        {/* ================= THEME TOGGLE ================= */}

        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="fixed top-5 right-5 z-[100] w-16 h-8 flex items-center rounded-full p-1 cursor-pointer bg-gray-300 dark:bg-gray-700 transition"
        >
          <div
            className={`w-6 h-6 rounded-full bg-white shadow-md transform transition duration-300 ${
              theme === "dark" ? "translate-x-8" : ""
            }`}
          />
        </button>

        {/* ================= GLOBAL UI ================= */}

        <CursorGlow />

        <Navbar theme={theme} />

        <Hero theme={theme} isIntroDone={!showIntro} />

        <SectionTransition theme={theme} variant="purple">
          <About theme={theme} />
        </SectionTransition>

        <SectionTransition theme={theme} variant="cyan">
          <Projects theme={theme} />
        </SectionTransition>

        <SectionTransition theme={theme} variant="blue">
          <Experience theme={theme} />
        </SectionTransition>

        <SectionTransition theme={theme} variant="blue">
          <Skills theme={theme} />
        </SectionTransition>

        <SectionTransition theme={theme} variant="purple">
          <Certifications theme={theme} />
        </SectionTransition>

        <SectionTransition theme={theme} variant="cyan">
          <Contact theme={theme} />
        </SectionTransition>
      </motion.div>
    </>
  );
}
