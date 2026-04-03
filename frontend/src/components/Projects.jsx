import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    title: "SplitSmart",
    desc: "Smart expense tracking app with real-time balance settlement for groups.",
    fullDesc:
      "SplitSmart is a full-stack expense management application that helps groups track shared expenses and settle balances efficiently. It minimizes transactions using smart settlement logic and provides a clean UI with real-time updates.",
    image: "/projects/splitsmart.png",
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/Diyapareta/splitsmart",
    live: "https://splitsmart-three-psi.vercel.app/login",
  },
  {
    title: "Employee Management",
    desc: "Web app for managing employees, roles, and tasks.",
    fullDesc:
      "Employee Management System is a web application designed to streamline employee data and task management with role-based dashboards, enabling efficient workflow organization.",
    image: "/projects/login.png",
    tech: ["React", "Express", "MongoDB"],
    github: "https://github.com/Diyapareta/employee-management-system",
    live: "#",
  },
  {
    title: "NeuroSpeak",
    desc: "AI-powered gesture recognition system for non-verbal communication.",
    fullDesc:
      "NeuroSpeak is an AI-based system that uses computer vision to recognize hand gestures and convert them into meaningful output. It enables real-time communication for non-verbal individuals.",
    image: "/projects/neuro.jpg",
    tech: ["Python", "OpenCV", "TensorFlow"],
    github: "#",
    live: "#",
  },
];

export default function Projects({ theme }) {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section
      id="projects"
      className="py-24 px-6 relative text-center overflow-hidden"
    >
      {/* Background */}
      <div
        className={`absolute inset-0 ${
          theme === "dark"
            ? "bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#020617]"
            : "bg-gradient-to-br from-white via-purple-50 to-white"
        }`}
      />

      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-bold mb-16 gradient-text relative z-10">
        My Projects
      </h2>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            onClick={() => setActiveProject(p)}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            whileHover={{ y: -6, scale: 1.02 }}
            className={`group rounded-xl overflow-hidden transition cursor-pointer ${
              theme === "dark"
                ? "bg-[#0f172a] border border-white/10 hover:shadow-purple-500/20 hover:shadow-xl"
                : "bg-white border border-gray-200 shadow-md hover:shadow-xl"
            }`}
          >
            {/* Image */}
            <div className="h-44 overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="p-5 text-left">
              <h3 className="text-lg font-semibold">{p.title}</h3>

              <p
                className={`text-sm mt-2 ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {p.desc}
              </p>

              {/* Tech */}
              <div className="flex flex-wrap gap-2 mt-4">
                {p.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className={`text-xs px-2 py-1 rounded-full ${
                      theme === "dark"
                        ? "bg-purple-500/10 text-purple-300"
                        : "bg-purple-100 text-purple-600"
                    }`}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-3 mt-5">
                <a
                  href={p.live}
                  target="_blank"
                  onClick={(e) => e.stopPropagation()}
                  className="text-xs px-3 py-1 rounded-md bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90"
                >
                  Live Demo
                </a>

                <a
                  href={p.github}
                  target="_blank"
                  onClick={(e) => e.stopPropagation()}
                  className={`text-xs px-3 py-1 rounded-md border ${
                    theme === "dark"
                      ? "border-purple-400 text-purple-300 hover:bg-purple-500/10"
                      : "border-purple-500 text-purple-600 hover:bg-purple-50"
                  }`}
                >
                  GitHub
                </a>
              </div>

              <p className="mt-3 text-xs text-purple-400 opacity-80">
                Click for details →
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* MODAL */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div
            className={`relative max-w-lg w-full p-6 rounded-2xl ${
              theme === "dark"
                ? "bg-[#0f172a] border border-white/10"
                : "bg-white shadow-xl"
            }`}
          >
            {/* Close */}
            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white"
            >
              ✕
            </button>

            {/* Title */}
            <h3 className="text-2xl font-semibold gradient-text">
              {activeProject.title}
            </h3>

            {/* Description */}
            <p
              className={`mt-4 text-sm ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {activeProject.fullDesc}
            </p>

            {/* Tech */}
            <div className="flex flex-wrap gap-2 mt-4">
              {activeProject.tech.map((t, i) => (
                <span
                  key={i}
                  className="text-xs px-2 py-1 rounded-full bg-purple-500/10 text-purple-300"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-6">
              <a
                href={activeProject.live}
                target="_blank"
                className="px-4 py-2 rounded-md bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm"
              >
                Live Demo
              </a>

              <a
                href={activeProject.github}
                target="_blank"
                className="px-4 py-2 rounded-md border border-purple-400 text-purple-300 text-sm"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
