import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const projects = [
  {
    title: "SplitSmart",
    category: "FULL-STACK · EXPENSE MANAGEMENT",
    desc: "Smart expense tracking with automatic balance settlement for groups.",
    fullDesc:
      "SplitSmart is a full-stack expense management application that helps groups track shared expenses and settle balances efficiently. It provides real-time updates and simplifies group expense management by minimizing unnecessary transactions.",
    image: "/projects/splitsmart.png",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/Diyapareta/splitsmart",
    live: "https://splitsmart-three-psi.vercel.app/",
  },

  {
    title: "Paradise Nursery",
    category: "REACT · E-COMMERCE",
    desc: "Modern plant e-commerce platform with cart, authentication and checkout.",
    fullDesc:
      "Paradise Nursery is a responsive plant e-commerce application where users can explore plants, search and filter products, manage their shopping cart, authenticate through Supabase, save delivery addresses and complete the checkout process.",
    image: "/projects/paradise.png",
    tech: ["React", "Redux Toolkit", "Supabase", "Vite"],
    github: "https://github.com/Diyapareta/paradise-nursery",
    live: "https://paradise-nursery-pink.vercel.app/",
  },

  {
    title: "Employee Management",
    category: "FULL-STACK · MANAGEMENT SYSTEM",
    desc: "Employee and task management platform with organized role-based workflows.",
    fullDesc:
      "Employee Management System is a full-stack web application designed to streamline employee data and task management. It provides role-based dashboards and organized workflows to make managing employees and tasks easier.",
    image: "/projects/login.png",
    tech: ["React", "Express", "MongoDB"],
    github: "https://github.com/Diyapareta/employee-management-system",
  },

  {
    title: "NeuroSpeak",
    category: "AI · COMPUTER VISION",
    desc: "AI-powered gesture recognition system for non-verbal communication.",
    fullDesc:
      "NeuroSpeak is an AI-based computer vision system that recognizes hand gestures and converts them into meaningful output in real time. The project focuses on making communication more accessible for non-verbal individuals.",
    image: "/projects/neuro.jpg",
    tech: ["Python", "OpenCV", "TensorFlow"],
  },
];

export default function Projects({ theme }) {
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    if (!activeProject) return;

    const startScrollY = window.scrollY;

    const handleScroll = () => {
      const distance = Math.abs(window.scrollY - startScrollY);

      if (distance > 180) {
        setActiveProject(null);
      }
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeProject]);

  return (
    <section
      id="projects"
      className={`relative min-h-screen px-5 sm:px-8 md:px-12 lg:px-20 py-24 md:py-32 overflow-hidden ${
        theme === "dark"
          ? "bg-[#020617] text-white"
          : "bg-gradient-to-br from-white via-purple-50 to-white text-gray-900"
      }`}
    >
      {/* ================= BACKGROUND GLOW ================= */}

      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-purple-500/10 blur-[140px] pointer-events-none" />

      <div className="absolute bottom-0 -right-40 w-[500px] h-[500px] rounded-full bg-cyan-400/10 blur-[140px] pointer-events-none" />

      {/* ================= HUGE BACKGROUND TEXT ================= */}

      <motion.div
        initial={{ x: 0 }}
        whileInView={{ x: 0 }}
        className={`absolute top-20 left-1/2 -translate-x-1/2 text-[20vw] md:text-[17vw] font-black tracking-tighter whitespace-nowrap pointer-events-none select-none ${
          theme === "dark" ? "text-white/[0.025]" : "text-purple-900/[0.035]"
        }`}
      >
        WORK
      </motion.div>

      {/* ================= MAIN ================= */}

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* ================= SECTION HEADING ================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-14 md:mb-20"
        >
          <p className="text-xs md:text-sm tracking-[0.35em] uppercase gradient-text font-semibold mb-4">
            Selected Work
          </p>

          <h2
            className={`font-black tracking-tighter leading-[0.85] text-[16vw] sm:text-[12vw] md:text-[9vw] ${
              theme === "dark" ? "text-white" : "text-gray-950"
            }`}
          >
            RECENT
            <br />
            <span className="gradient-text">PROJECTS</span>
          </h2>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mt-8">
            <p
              className={`max-w-md text-sm md:text-base leading-relaxed ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              A collection of things I've built while exploring full-stack
              development, AI, computer vision and everything in between.
            </p>

            <span
              className={`text-xs tracking-[0.25em] uppercase ${
                theme === "dark" ? "text-gray-500" : "text-gray-400"
              }`}
            >
              04 — Projects
            </span>
          </div>
        </motion.div>

        {/* ================= PROJECT LIST ================= */}

        <div className="space-y-4">
          {projects.map((project, index) => (
            <motion.button
              key={project.title}
              type="button"
              onClick={() => setActiveProject(project)}
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: false,
                margin: "-80px",
              }}
              transition={{
                duration: 0.35,
              }}
              whileHover={{
                scale: 1.035,
                y: -5,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                },
              }}
              className={`group relative w-full min-h-[145px] md:min-h-[165px] rounded-2xl overflow-hidden text-left border transition-[background-color,border-color,box-shadow] duration-300 ${
                theme === "dark"
                  ? "bg-white/[0.035] border-white/10 hover:bg-white/[0.07] hover:border-purple-400/40"
                  : "bg-white/70 border-purple-100 hover:bg-white hover:border-purple-300 shadow-sm hover:shadow-xl"
              }`}
            >
              {/* Gradient hover background */}

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-purple-500/[0.07] via-blue-500/[0.04] to-cyan-400/[0.07]" />

              <div className="relative z-10 flex items-center gap-5 md:gap-8 p-4 md:p-5">
                {/* Number */}

                <div
                  className={`hidden sm:block w-8 md:w-10 text-xs font-mono ${
                    theme === "dark" ? "text-gray-600" : "text-gray-400"
                  }`}
                >
                  0{index + 1}
                </div>

                {/* Image */}

                <div className="relative shrink-0 h-[105px] w-[105px] md:h-[125px] md:w-[180px] rounded-xl overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-transparent to-cyan-400/20 opacity-60 group-hover:opacity-30 transition-opacity" />
                </div>

                {/* Project information */}

                <div className="flex-1 min-w-0 py-1">
                  <p
                    className={`text-[9px] md:text-[10px] tracking-[0.2em] uppercase font-semibold mb-2 ${
                      theme === "dark" ? "text-purple-300" : "text-purple-600"
                    }`}
                  >
                    {project.category}
                  </p>

                  <h3
                    className={`text-xl md:text-3xl font-bold tracking-tight mb-2 truncate ${
                      theme === "dark" ? "text-white" : "text-gray-950"
                    }`}
                  >
                    {project.title}
                  </h3>

                  <p
                    className={`text-xs md:text-sm leading-relaxed max-w-xl line-clamp-2 ${
                      theme === "dark" ? "!text-white/50" : "!text-gray-600"
                    }`}
                  >
                    {project.desc}
                  </p>

                  {/* Tech */}

                  <div className="hidden md:flex gap-2 mt-3 flex-wrap">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className={`px-2.5 py-1 rounded-full text-[9px] border ${
                          theme === "dark"
                            ? "border-white/10 bg-white/5 text-gray-400"
                            : "border-purple-100 bg-purple-50 text-purple-600"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Arrow */}

                <div
                  className={`shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full border flex items-center justify-center transition-all duration-300 group-hover:rotate-45 group-hover:scale-110 ${
                    theme === "dark"
                      ? "border-white/15 text-gray-400 group-hover:border-purple-400 group-hover:text-purple-300"
                      : "border-gray-200 text-gray-500 group-hover:border-purple-400 group-hover:text-purple-600"
                  }`}
                >
                  <span className="text-lg md:text-xl">↗</span>
                </div>
              </div>

              {/* Bottom gradient line */}

              <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
            </motion.button>
          ))}
        </div>

        {/* ================= BOTTOM TEXT ================= */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.4 }}
          className="flex items-center gap-4 mt-10"
        >
          <div className="h-px flex-1 bg-gradient-to-r from-purple-500/40 to-transparent" />

          <span
            className={`text-[10px] tracking-[0.3em] uppercase ${
              theme === "dark" ? "text-gray-600" : "text-gray-400"
            }`}
          >
            Click a project to explore
          </span>

          <div className="h-px flex-1 bg-gradient-to-l from-cyan-400/40 to-transparent" />
        </motion.div>
      </div>

      {/* ================= PROJECT MODAL ================= */}

      {createPortal(
        <AnimatePresence>
          {activeProject && (
            <motion.div
              className="fixed inset-0 z-[99999] flex items-center justify-center p-5 md:p-8 bg-black/70 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProject(null)}
            >
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.92,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.92,
                  y: 30,
                }}
                transition={{ duration: 0.35 }}
                onClick={(e) => e.stopPropagation()}
                className={`relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border ${
                  theme === "dark"
                    ? "bg-[#07101f] border-white/10 text-white"
                    : "bg-white border-purple-100 text-gray-900"
                }`}
              >
                {/* CLOSE */}

                <button
                  onClick={() => setActiveProject(null)}
                  className={`absolute top-4 right-4 z-20 w-10 h-10 rounded-full flex items-center justify-center border backdrop-blur-md transition ${
                    theme === "dark"
                      ? "bg-black/30 border-white/10 text-gray-300 hover:text-white"
                      : "bg-white/70 border-gray-200 text-gray-500 hover:text-gray-900"
                  }`}
                >
                  ✕
                </button>

                {/* IMAGE */}

                <div className="h-[220px] md:h-[300px] overflow-hidden">
                  <img
                    src={activeProject.image}
                    alt={activeProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* CONTENT */}

                <div className="p-6 md:p-8">
                  <p className="text-xs tracking-[0.25em] uppercase gradient-text font-semibold mb-3">
                    {activeProject.category}
                  </p>

                  <h3 className="text-3xl md:text-5xl font-black tracking-tight mb-5">
                    {activeProject.title}
                  </h3>

                  <p
                    className={`text-sm md:text-base leading-7 ${
                      theme === "dark" ? "!text-white/70" : "!text-gray-600"
                    }`}
                  >
                    {activeProject.fullDesc}
                  </p>

                  {/* TECHNOLOGIES */}

                  <div className="flex flex-wrap gap-2 mt-6">
                    {activeProject.tech.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1.5 rounded-full text-xs border ${
                          theme === "dark"
                            ? "bg-white/5 border-white/10 text-gray-300"
                            : "bg-purple-50 border-purple-100 text-purple-600"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* LINKS */}

                  <div className="flex flex-wrap gap-3 mt-8">
                    {activeProject.live && (
                      <a
                        href={activeProject.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="px-5 py-2.5 rounded-full text-sm font-medium text-white bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 hover:scale-105 transition-transform"
                      >
                        Live Demo ↗
                      </a>
                    )}

                    {activeProject.github && (
                      <a
                        href={activeProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className={`px-5 py-2.5 rounded-full text-sm font-medium border transition ${
                          theme === "dark"
                            ? "border-white/15 hover:bg-white/10"
                            : "border-gray-200 hover:bg-gray-50"
                        }`}
                      >
                        GitHub ↗
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body,
      )}
    </section>
  );
}
