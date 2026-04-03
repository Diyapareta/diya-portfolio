import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function About({ theme }) {
  return (
    <section
      id="about"
      className="py-32 px-6 relative overflow-hidden transition-colors duration-500"
    >
      {/* Background */}
      <div
        className={`absolute inset-0 ${
          theme === "dark"
            ? "bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#020617]"
            : "bg-gradient-to-br from-white via-purple-50 to-pink-50"
        }`}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT */}
        <div>
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold gradient-text mb-6"
          >
            About Me
          </motion.h2>

          {/* Main text */}
          <p
            className={`text-xl leading-relaxed ${
              theme === "dark" ? "text-white" : "text-gray-700"
            }`}
          >
            I’m <span className="gradient-text font-semibold">Diya Pareta</span>
            , a 3rd-year B.Tech student at IIITDM Jabalpur who enjoys building{" "}
            <span className="gradient-text">intelligent systems</span> and
            modern web applications.
          </p>

          {/* Secondary text */}
          <p
            className={`mt-5 text-base leading-relaxed ${
              theme === "dark" ? "text-white/80" : "text-gray-600"
            }`}
          >
            I’ve worked on projects involving AI, computer vision, and
            full-stack development, and I’m currently contributing to C4GT where
            I build real-world solutions. Outside of tech, I enjoy gaming 🎮 and
            exploring new ideas.
          </p>

          {/* Highlights */}
          <div
            className={`mt-8 space-y-2 text-base ${
              theme === "dark" ? "text-white/90" : "text-gray-700"
            }`}
          >
            <p>🧠 AI & Computer Vision</p>
            <p>⚡ Full Stack Development</p>
            <p>🚀 Problem Solving</p>
          </div>

          {/* 🔗 SOCIAL ICONS */}
          <div className="mt-8 flex gap-6 text-2xl">
            <a
              href="https://github.com/Diyapareta"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition ${
                theme === "dark"
                  ? "text-white hover:text-purple-400"
                  : "text-gray-700 hover:text-purple-500"
              } hover:scale-125`}
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/diya-pareta"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition ${
                theme === "dark"
                  ? "text-white hover:text-purple-400"
                  : "text-gray-700 hover:text-purple-500"
              } hover:scale-125`}
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:pdiyaaa@gmail.com"
              className={`transition ${
                theme === "dark"
                  ? "text-white hover:text-purple-400"
                  : "text-gray-700 hover:text-purple-500"
              } hover:scale-125`}
            >
              <HiOutlineMail />
            </a>
          </div>
        </div>

        {/* RIGHT CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className={`p-8 rounded-3xl backdrop-blur-xl ${
            theme === "dark"
              ? "bg-white/5 border border-white/10"
              : "bg-white/80 border border-gray-200 shadow-xl"
          }`}
        >
          <h3 className="text-xl font-semibold gradient-text mb-4">
            What I Build
          </h3>

          <ul
            className={`space-y-3 text-base ${
              theme === "dark" ? "text-white/80" : "text-gray-600"
            }`}
          >
            <li>✔ AI-based applications</li>
            <li>✔ Full-stack web apps</li>
            <li>✔ Backend systems & APIs</li>
            <li>✔ Practical real-world solutions</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
