import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import Hero from "./components/Hero";
import CursorGlow from "./components/CursorGlow";
import Projects from "./components/Projects";
import SoundToggle from "./components/SoundToggle";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

export default function App() {
  const [theme, setTheme] = useState("dark");

  // Load saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setTheme(savedTheme);
  }, []);

  // Apply theme correctly
  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className={`min-h-screen transition-colors duration-500 ${
        theme === "dark"
          ? "bg-[#020617] text-white"
          : "bg-gradient-to-br from-white via-purple-50 to-white text-gray-900"
      }`}
    >
      {/* 🔘 THEME TOGGLE */}
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="fixed top-5 right-5 z-[100] w-16 h-8 flex items-center rounded-full p-1 cursor-pointer
        bg-gray-300 dark:bg-gray-700 transition"
      >
        <div
          className={`w-6 h-6 rounded-full bg-white shadow-md transform transition duration-300 ${
            theme === "dark" ? "translate-x-8" : ""
          }`}
        />
      </button>

      {/* COMPONENTS */}
      <CursorGlow />
      <Navbar theme={theme} />
      <Hero theme={theme} />
      {/* <SoundToggle /> */}
      <About theme={theme} />
      <Projects theme={theme} />
      <Skills theme={theme} />
      <Contact theme={theme} />
    </motion.div>
  );
}
