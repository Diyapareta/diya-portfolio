import { motion } from "framer-motion";

const experiences = [
  {
    number: "01",
    role: "Open Source Contributor",
    organization: "Code for GovTech (C4GT)",
    period: "2026",
    description:
      "Contributed to an open-source project focused on building practical technology solutions for public and social impact. Collaborated with developers, worked with Git and GitHub, and contributed through a structured open-source workflow.",
    skills: ["Open Source", "Git", "GitHub", "Collaboration"],
  },

  {
    number: "02",
    role: "Open Source Contributor",
    organization: "GirlScript Summer of Code (GSSoC)",
    period: "2026",
    description:
      "Selected as an open-source contributor and worked on collaborative software projects. Gained experience with Git-based workflows, issue resolution, pull requests and contributing to real-world codebases.",
    skills: ["Open Source", "Git", "GitHub", "Pull Requests"],
  },
];

export default function Experience({ theme }) {
  return (
    <section
      id="experience"
      className={`relative overflow-hidden px-6 sm:px-10 md:px-16 lg:px-20 py-24 md:py-32 ${
        theme === "dark"
          ? "bg-[#020617] text-white"
          : "bg-gradient-to-br from-white via-purple-50 to-white text-gray-900"
      }`}
    >
      {/* ================= BACKGROUND ================= */}

      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-purple-500/10 blur-[150px] pointer-events-none" />

      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-cyan-400/10 blur-[150px] pointer-events-none" />

      {/* Huge background text */}
      <div
        className={`absolute top-24 right-[-8%] text-[20vw] md:text-[17vw] font-black tracking-tighter whitespace-nowrap pointer-events-none select-none ${
          theme === "dark" ? "text-white/[0.025]" : "text-purple-900/[0.035]"
        }`}
      >
        JOURNEY
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 md:mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="text-2xl gradient-text">✱</span>

            <span
              className={`text-xs md:text-sm tracking-[0.3em] uppercase ${
                theme === "dark" ? "text-gray-400" : "text-gray-500"
              }`}
            >
              What I've Been Up To
            </span>
          </div>

          <h2
            className={`font-black tracking-[-0.06em] leading-[0.82] text-[14vw] sm:text-[10vw] md:text-[8vw] lg:text-[7vw] ${
              theme === "dark" ? "text-white" : "text-gray-950"
            }`}
          >
            EXPERIENCE
          </h2>

          <h2 className="font-black tracking-[-0.06em] leading-[0.82] text-[14vw] sm:text-[10vw] md:text-[8vw] lg:text-[7vw] gradient-text">
            & CONTRIBUTIONS
          </h2>

          <p
            className={`mt-8 max-w-xl text-sm md:text-base leading-relaxed ${
              theme === "dark" ? "text-gray-500" : "text-gray-600"
            }`}
          >
            A look at the communities, projects and open-source initiatives I've
            contributed to along the way.
          </p>
        </motion.div>

        {/* ================= EXPERIENCE LIST ================= */}

        <div
          className={`border-t ${
            theme === "dark" ? "border-white/10" : "border-purple-200"
          }`}
        >
          {experiences.map((experience, index) => (
            <motion.article
              key={experience.organization}
              initial={{ opacity: 0, x: index % 2 === 0 ? -35 : 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.65,
                delay: index * 0.08,
              }}
              className={`group relative py-10 md:py-14 border-b transition-all duration-500 ${
                theme === "dark"
                  ? "border-white/10 hover:bg-white/[0.025]"
                  : "border-purple-100 hover:bg-purple-50/40"
              }`}
            >
              <div className="grid grid-cols-1 md:grid-cols-[8%_37%_1fr_12%] gap-5 md:gap-8 items-start px-2">
                {/* Number */}
                <div
                  className={`text-xs font-mono pt-1 ${
                    theme === "dark" ? "text-gray-600" : "text-gray-400"
                  }`}
                >
                  {experience.number}
                </div>

                {/* Role */}
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase gradient-text font-semibold mb-3">
                    {experience.organization}
                  </p>

                  <h3
                    className={`text-2xl md:text-3xl font-bold tracking-tight ${
                      theme === "dark" ? "text-white" : "text-gray-950"
                    }`}
                  >
                    {experience.role}
                  </h3>
                </div>

                {/* Description */}
                <div>
                  <p
                    className={`text-sm leading-6 max-w-xl ${
                      theme === "dark" ? "text-gray-500" : "text-gray-600"
                    }`}
                  >
                    {experience.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mt-5">
                    {experience.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`px-2.5 py-1 rounded-full text-[9px] border ${
                          theme === "dark"
                            ? "border-white/10 bg-white/5 text-gray-500"
                            : "border-purple-100 bg-white text-purple-600"
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Year */}
                <div
                  className={`text-xs md:text-sm md:text-right font-mono ${
                    theme === "dark" ? "text-gray-500" : "text-gray-400"
                  }`}
                >
                  {experience.period}
                </div>
              </div>

              {/* Hover line */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 group-hover:w-full transition-all duration-700" />
            </motion.article>
          ))}
        </div>

        {/* ================= BOTTOM ================= */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-12 flex items-center gap-4"
        >
          <div className="h-px flex-1 bg-gradient-to-r from-purple-500/40 to-transparent" />

          <span
            className={`text-[9px] tracking-[0.3em] uppercase ${
              theme === "dark" ? "text-gray-600" : "text-gray-400"
            }`}
          >
            Building · Learning · Contributing
          </span>

          <div className="h-px flex-1 bg-gradient-to-l from-cyan-400/40 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
