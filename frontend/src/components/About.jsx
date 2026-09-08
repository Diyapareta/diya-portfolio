import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";

export default function About({ theme }) {
  const isDark = theme === "dark";

  return (
    <section
      id="about"
      className={`relative min-h-screen px-6 py-28 transition-colors duration-500 ${
        isDark
          ? "bg-[#020617] text-white"
          : "bg-gradient-to-br from-white via-purple-50 to-cyan-50 text-gray-900"
      }`}
    >
      {/* Background glow */}
      <div
        className={`absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[140px] ${
          isDark ? "bg-purple-600/10" : "bg-purple-300/20"
        }`}
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* =========================
            HEADING
        ========================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20 text-center"
        >
          <p
            className={`mb-3 text-xs font-medium uppercase tracking-[0.35em] ${
              isDark ? "text-white/40" : "text-gray-400"
            }`}
          >
            Get to know me
          </p>

          <h2 className="text-5xl font-bold md:text-6xl">
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              About
            </span>{" "}
            <span className={isDark ? "text-white" : "text-gray-900"}>Me</span>
          </h2>
        </motion.div>

        {/* =========================
            MAIN CONTENT
        ========================= */}

        <div className="grid items-center gap-14 md:grid-cols-2">
          {/* =========================
              PHOTO
          ========================= */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div
              className={`relative h-[350px] w-[280px] overflow-hidden rounded-3xl ${
                isDark
                  ? "border border-white/10"
                  : "border border-purple-200 shadow-xl shadow-purple-200/20"
              }`}
            >
              <img
                src="/diya.jpeg"
                alt="Diya Pareta"
                className="h-full w-full object-cover object-[center_30%] transition duration-700 hover:scale-105"
              />

              {/* subtle gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-blue-400/10" />
            </div>
          </motion.div>

          {/* =========================
              TEXT
          ========================= */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p
              className={`text-xl font-semibold leading-relaxed md:text-2xl ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              I'm{" "}
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                Diya Pareta
              </span>
              , a Final year B.Tech student at IIITDM Jabalpur.
            </p>

            <p
              className={`mt-6 text-base leading-7 ${
                isDark ? "text-white/65" : "text-gray-600"
              }`}
            >
              I enjoy building intelligent systems, full-stack web applications,
              and turning ideas into products that are actually useful.
            </p>

            <p
              className={`mt-4 text-base leading-7 ${
                isDark ? "text-white/65" : "text-gray-600"
              }`}
            >
              I like exploring new technologies, solving problems, and learning
              by building things. From AI experiments to full-stack
              applications, I'm always working on something new.
            </p>

            {/* =========================
                STATS
            ========================= */}

            <div className="mt-10 grid grid-cols-3 gap-5">
              <div>
                <h3 className="text-3xl font-bold">
                  <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                    5+
                  </span>
                </h3>

                <p
                  className={`mt-1 text-xs ${
                    isDark ? "text-white/50" : "text-gray-500"
                  }`}
                >
                  Projects
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">
                  <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                    300+
                  </span>
                </h3>

                <p
                  className={`mt-1 text-xs ${
                    isDark ? "text-white/50" : "text-gray-500"
                  }`}
                >
                  DSA Problems
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">
                  <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                    3+
                  </span>
                </h3>

                <p
                  className={`mt-1 text-xs ${
                    isDark ? "text-white/50" : "text-gray-500"
                  }`}
                >
                  Years Learning
                </p>
              </div>
            </div>

            {/* =========================
                BUTTONS
            ========================= */}

            <div className="mt-10 flex flex-wrap items-center gap-4">
              {/* Resume */}
              <a
                href="/resume.pdf"
                download
                className="flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-300/20 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                Download Resume
                <FaDownload className="text-xs" />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Diyapareta"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className={`flex h-11 w-11 items-center justify-center rounded-full border transition duration-300 hover:-translate-y-1 hover:text-purple-500 ${
                  isDark
                    ? "border-white/15 text-white/70 hover:bg-white/5"
                    : "border-gray-300 text-gray-600 hover:bg-white"
                }`}
              >
                <FaGithub />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/diya-pareta"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className={`flex h-11 w-11 items-center justify-center rounded-full border transition duration-300 hover:-translate-y-1 hover:text-purple-500 ${
                  isDark
                    ? "border-white/15 text-white/70 hover:bg-white/5"
                    : "border-gray-300 text-gray-600 hover:bg-white"
                }`}
              >
                <FaLinkedin />
              </a>

              {/* Email */}
              <a
                href="mailto:diya.pareta.dev@gmail.com"
                aria-label="Email"
                className={`flex h-11 w-11 items-center justify-center rounded-full border transition duration-300 hover:-translate-y-1 hover:text-purple-500 ${
                  isDark
                    ? "border-white/15 text-white/70 hover:bg-white/5"
                    : "border-gray-300 text-gray-600 hover:bg-white"
                }`}
              >
                <FaEnvelope />
              </a>
            </div>
          </motion.div>
        </div>

        {/* =========================
            BOTTOM LINE
        ========================= */}

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={`mt-24 h-px origin-left ${
            isDark ? "bg-white/10" : "bg-gray-200"
          }`}
        />

        <div className="mt-5 flex items-center justify-between">
          <span
            className={`text-[10px] uppercase tracking-[0.3em] ${
              isDark ? "text-white/30" : "text-gray-400"
            }`}
          >
            AI · Full Stack · DSA
          </span>

          <span
            className={`text-[10px] ${
              isDark ? "text-white/30" : "text-gray-400"
            }`}
          >
            2026
          </span>
        </div>
      </div>
    </section>
  );
}
