import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";

export default function About({ theme }) {
  const isDark = theme === "dark";

  return (
    <section
      id="about"
      className={`relative overflow-hidden px-6 py-32 transition-colors duration-500 ${
        isDark
          ? "bg-[#020617] text-white"
          : "bg-gradient-to-br from-white via-purple-50 to-cyan-50 text-gray-900"
      }`}
    >
      {/* Background glow */}
      <div
        className={`pointer-events-none absolute left-1/4 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full blur-[160px] ${
          isDark ? "bg-purple-600/10" : "bg-purple-300/20"
        }`}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* ================= HEADING ================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-24"
        >
          <p
            className={`mb-4 text-xs uppercase tracking-[0.4em] ${
              isDark ? "text-white/40" : "text-gray-400"
            }`}
          >
            Get to know me
          </p>

          <div className="flex items-end justify-between gap-8">
            <h2 className="text-6xl font-bold tracking-tight md:text-8xl">
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                ABOUT
              </span>{" "}
              <span className={isDark ? "text-white" : "text-gray-900"}>
                ME
              </span>
            </h2>

            <span
              className={`hidden pb-3 text-xs uppercase tracking-[0.3em] md:block ${
                isDark ? "text-white/30" : "text-gray-400"
              }`}
            >
              01 / About
            </span>
          </div>

          <div
            className={`mt-8 h-px w-full ${
              isDark ? "bg-white/10" : "bg-gray-200"
            }`}
          />
        </motion.div>

        {/* ================= MAIN GRID ================= */}

        <div className="grid items-start gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          {/* ================= PHOTO ================= */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-32"
          >
            <div
              className={`relative mx-auto aspect-[4/5] w-full max-w-[390px] overflow-hidden rounded-[2rem] ${
                isDark
                  ? "border border-white/10"
                  : "border border-purple-200 shadow-2xl shadow-purple-200/20"
              }`}
            >
              <img
                src="/diya.jpeg"
                alt="Diya Pareta"
                className="h-full w-full object-cover object-[center_30%] transition duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-purple-950/30 via-transparent to-blue-400/10" />
            </div>

            {/* Small photo caption */}
            <div className="mt-5 flex max-w-[390px] items-center justify-between">
              <span
                className={`text-[10px] uppercase tracking-[0.3em] ${
                  isDark ? "text-white/30" : "text-gray-400"
                }`}
              >
                Computer Engineering
              </span>

              <span
                className={`text-[10px] ${
                  isDark ? "text-white/30" : "text-gray-400"
                }`}
              >
                IIITDM Jabalpur
              </span>
            </div>
          </motion.div>

          {/* ================= CONTENT ================= */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Intro */}
            <p
              className={`max-w-3xl text-2xl font-semibold leading-relaxed md:text-3xl ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              I'm{" "}
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                Diya Pareta
              </span>
              , a Computer Engineering student at IIITDM Jabalpur.
            </p>

            <p
              className={`mt-7 max-w-2xl text-base leading-8 ${
                isDark ? "text-white/60" : "text-gray-600"
              }`}
            >
              I enjoy building intelligent systems, full-stack web applications,
              and turning ideas into products that are actually useful.
            </p>

            <p
              className={`mt-4 max-w-2xl text-base leading-8 ${
                isDark ? "text-white/60" : "text-gray-600"
              }`}
            >
              I like exploring new technologies, solving problems, and learning
              by building things. From AI experiments to full-stack
              applications, I'm always working on something new.
            </p>

            {/* ================= STATS ================= */}

            <div
              className={`mt-12 grid grid-cols-3 border-y py-7 ${
                isDark ? "border-white/10" : "border-gray-200"
              }`}
            >
              <div>
                <h3 className="text-3xl font-bold">
                  <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                    5+
                  </span>
                </h3>

                <p
                  className={`mt-1 text-xs ${
                    isDark ? "text-white/40" : "text-gray-500"
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
                    isDark ? "text-white/40" : "text-gray-500"
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
                    isDark ? "text-white/40" : "text-gray-500"
                  }`}
                >
                  Years Learning
                </p>
              </div>
            </div>

            {/* ================= EDUCATION ================= */}

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`mt-10 border-l-2 pl-5 ${
                isDark ? "border-purple-500/60" : "border-purple-400"
              }`}
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p
                    className={`text-[10px] uppercase tracking-[0.35em] ${
                      isDark ? "text-white/35" : "text-gray-400"
                    }`}
                  >
                    Education
                  </p>

                  <h3
                    className={`mt-2 text-xl font-semibold ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    B.Tech · Computer Engineering
                  </h3>

                  <p
                    className={`mt-1 text-sm ${
                      isDark ? "text-white/50" : "text-gray-600"
                    }`}
                  >
                    IIITDM Jabalpur
                  </p>
                </div>

                <span
                  className={`text-xs ${
                    isDark ? "text-white/35" : "text-gray-400"
                  }`}
                >
                  2023 — 2027
                </span>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <span
                  className={`rounded-full px-3 py-1.5 text-xs ${
                    isDark
                      ? "bg-white/5 text-white/55"
                      : "bg-purple-50 text-purple-600"
                  }`}
                >
                  Minor · Smart Manufacturing
                </span>
              </div>
            </motion.div>

            {/* ================= ACTIONS ================= */}

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="/resume.pdf"
                download
                className="flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/20 transition duration-300 hover:-translate-y-1"
              >
                Download Resume
                <FaDownload className="text-xs" />
              </a>

              <a
                href="https://github.com/Diyapareta"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex h-11 w-11 items-center justify-center rounded-full border transition hover:-translate-y-1 ${
                  isDark
                    ? "border-white/15 text-white/60 hover:bg-white/5 hover:text-white"
                    : "border-gray-300 text-gray-600 hover:bg-white"
                }`}
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/diya-pareta"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex h-11 w-11 items-center justify-center rounded-full border transition hover:-translate-y-1 ${
                  isDark
                    ? "border-white/15 text-white/60 hover:bg-white/5 hover:text-white"
                    : "border-gray-300 text-gray-600 hover:bg-white"
                }`}
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:diya.pareta.dev@gmail.com"
                className={`flex h-11 w-11 items-center justify-center rounded-full border transition hover:-translate-y-1 ${
                  isDark
                    ? "border-white/15 text-white/60 hover:bg-white/5 hover:text-white"
                    : "border-gray-300 text-gray-600 hover:bg-white"
                }`}
              >
                <FaEnvelope />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
