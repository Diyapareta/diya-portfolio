import { motion } from "framer-motion";

const certifications = [
  {
    title: "SheCodes Full Stack Workshop 2026",
    issuer: "Code for GovTech · IIIT-H",
    description:
      "Successfully contributed to live open-source projects as part of the SheCodes Full Stack Workshop 2026, gaining hands-on experience with collaborative software development.",
    image: "/certificates/shecodes.png",
    year: "2026",
  },
  {
    title: "Developing Front-End Apps with React",
    issuer: "Coursera",
    description:
      "Completed hands-on training in React development, component-based architecture, state management, routing and building responsive front-end applications.",
    image: "/certificates/coursera-react.png",
    year: "2026",
  },

  {
    title: "Adobe University Hackathon",
    issuer: "Adobe",
    description:
      "Participated in the Adobe University Hackathon, working on a technical solution while applying problem-solving, development and rapid prototyping skills.",
    image: "/certificates/adobe.png",
    year: "2026",
  },

  {
    title: "Deloitte Technology Job Simulation",
    issuer: "Deloitte",
    description:
      "Completed a technology job simulation involving practical problem-solving, data analysis and industry-style technical tasks.",
    image: "/certificates/deloitte.png",
    year: "2026",
  },

  {
    title: "Social Summer of Code — Season 5",
    issuer: "SSoC",
    description:
      "Selected as an open-source contributor and gained hands-on experience contributing to collaborative software projects using Git and GitHub.",
    image: "/certificates/ssoc.png",
    year: "2026",
  },

  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    description:
      "Successfully completed the Responsive Web Design Developer Certification, representing approximately 300 hours of coursework and projects.",
    image: "/certificates/freecodecamp.png",
    year: "2026",
  },

  {
    title: "AWS Foundations: Getting Started with the AWS Cloud Essentials",
    issuer: "Amazon Web Services (AWS)",
    description:
      "Completed AWS Foundations training covering fundamental AWS Cloud concepts and essential cloud services.",
    image: "/certificates/awscloud.png",
    year: "2026",
  },

  {
    title: "Pandas",
    issuer: "Kaggle",
    description:
      "Successfully completed the Pandas course, developing practical knowledge of data manipulation and analysis using Python and Pandas.",
    image: "/certificates/pandas.png",
    year: "2026",
  },
];

export default function Certifications({ theme }) {
  return (
    <section
      id="certifications"
      className={`relative overflow-hidden px-6 sm:px-10 md:px-16 lg:px-20 pt-20 md:pt-24 pb-8 md:pb-10 ${
        theme === "dark"
          ? "bg-[#020617] text-white"
          : "bg-gradient-to-br from-white via-purple-50 to-white text-gray-900"
      }`}
    >
      {/* ================= BACKGROUND GLOW ================= */}

      <div className="absolute top-0 left-[-150px] w-[450px] h-[450px] rounded-full bg-purple-500/10 blur-[150px] pointer-events-none" />

      <div className="absolute bottom-0 right-[-150px] w-[450px] h-[450px] rounded-full bg-cyan-400/10 blur-[150px] pointer-events-none" />

      {/* ================= HUGE BACKGROUND TEXT ================= */}

      <div
        className={`absolute top-16 left-1/2 -translate-x-1/2 text-[18vw] md:text-[15vw] font-black tracking-tighter whitespace-nowrap pointer-events-none select-none ${
          theme === "dark" ? "text-white/[0.025]" : "text-purple-900/[0.035]"
        }`}
      >
        LEARN
      </div>

      {/* ================= MAIN ================= */}

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* ================= HEADING ================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-10 md:mb-12"
        >
          <div className="flex items-center gap-4 mb-5">
            <span className="text-2xl gradient-text">✱</span>

            <span
              className={`text-xs md:text-sm tracking-[0.3em] uppercase ${
                theme === "dark" ? "text-gray-400" : "text-gray-500"
              }`}
            >
              Learning Milestones
            </span>
          </div>

          <h2
            className={`font-black tracking-tighter leading-[0.88] text-[11vw] sm:text-[8vw] md:text-[6.5vw] ${
              theme === "dark" ? "text-white" : "text-gray-950"
            }`}
          >
            CERTIFICATIONS
            <br />
            <span className="gradient-text">& MILESTONES</span>
          </h2>

          <p
            className={`mt-6 max-w-xl text-sm md:text-base leading-relaxed ${
              theme === "dark" ? "text-gray-500" : "text-gray-600"
            }`}
          >
            A few certifications, hackathons and learning milestones that have
            shaped my journey as a developer.
          </p>
        </motion.div>

        {/* ================= CERTIFICATION CARDS ================= */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.article
              key={cert.title}
              initial={{
                opacity: 0,
                scale: 0.97,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: false,
                amount: 0.2,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
              }}
              whileHover={{
                scale: 1.035,
                y: -6,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                },
              }}
              className={`group rounded-2xl overflow-hidden border transition-[background-color,border-color,box-shadow] duration-300 ${
                theme === "dark"
                  ? "bg-white/[0.035] border-white/10 hover:border-purple-400/40"
                  : "bg-white border-purple-100 shadow-sm hover:shadow-xl hover:border-purple-300"
              }`}
            >
              {/* ================= IMAGE ================= */}

              <div
                className={`relative h-[210px] md:h-[230px] overflow-hidden ${
                  theme === "dark" ? "bg-white/[0.03]" : "bg-gray-50"
                }`}
              >
                <img
                  src={cert.image}
                  alt={`${cert.title} certificate`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-40" />

                {/* Year */}

                <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-white text-[10px] tracking-widest">
                  {cert.year}
                </span>
              </div>

              {/* ================= CONTENT ================= */}

              <div className="p-6">
                <p className="text-xs tracking-[0.2em] uppercase gradient-text font-semibold mb-3">
                  {cert.issuer}
                </p>

                <h3
                  className={`text-xl md:text-2xl font-bold leading-tight mb-4 ${
                    theme === "dark" ? "text-white" : "text-gray-950"
                  }`}
                >
                  {cert.title}
                </h3>

                <p
                  className={`text-sm leading-6 ${
                    theme === "dark" ? "text-gray-500" : "text-gray-600"
                  }`}
                >
                  {cert.description}
                </p>

                {/* ================= BOTTOM ================= */}

                <div
                  className={`flex items-center justify-between mt-6 pt-4 border-t ${
                    theme === "dark" ? "border-white/10" : "border-gray-100"
                  }`}
                >
                  <span
                    className={`text-[10px] tracking-[0.2em] uppercase ${
                      theme === "dark" ? "text-gray-600" : "text-gray-400"
                    }`}
                  >
                    Certificate
                  </span>

                  <span
                    className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-300 group-hover:rotate-45 ${
                      theme === "dark"
                        ? "border-white/10 text-gray-400 group-hover:border-purple-400 group-hover:text-purple-300"
                        : "border-gray-200 text-gray-400 group-hover:border-purple-400 group-hover:text-purple-600"
                    }`}
                  >
                    ↗
                  </span>
                </div>
              </div>

              {/* ================= HOVER LINE ================= */}

              <div className="h-[2px] bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
            </motion.article>
          ))}
        </div>

        {/* ================= BOTTOM DIVIDER ================= */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7 }}
          className="mt-7 md:mt-8 flex items-center gap-4"
        >
          <div className="h-px flex-1 bg-gradient-to-r from-purple-500/40 to-transparent" />

          <span
            className={`text-[10px] tracking-[0.3em] uppercase ${
              theme === "dark" ? "text-gray-600" : "text-gray-400"
            }`}
          >
            Keep learning
          </span>

          <div className="h-px flex-1 bg-gradient-to-l from-cyan-400/40 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
