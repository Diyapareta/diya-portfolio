import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGithub,
  FaBootstrap,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiFramer,
  SiSass,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiJavascript,
  SiTypescript,
  SiDocker,
  SiGit,
  SiSupabase,
  SiVercel,
} from "react-icons/si";

const frontendSkills = [
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "React", icon: <FaReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Redux", icon: <SiRedux /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Framer Motion", icon: <SiFramer /> },
  { name: "Sass", icon: <SiSass /> },
  { name: "Bootstrap", icon: <FaBootstrap /> },
];

const backendSkills = [
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "Python", icon: <FaPython /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "MySQL", icon: <SiMysql /> },
];

const toolsSkills = [
  { name: "Git", icon: <SiGit /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "Docker", icon: <SiDocker /> },
  { name: "Supabase", icon: <SiSupabase /> },
  { name: "Vercel", icon: <SiVercel /> },
];

function SkillItem({ skill, theme, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.45,
        delay: index * 0.05,
      }}
      whileHover={{ y: -4 }}
      className="group flex items-center gap-3 md:gap-4"
    >
      {/* Icon */}
      <div
        className={`w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center text-xl md:text-2xl transition-all duration-300 group-hover:scale-110 ${
          theme === "dark"
            ? "bg-white/[0.06] border border-white/10 group-hover:border-purple-400/40"
            : "bg-white border border-purple-100 shadow-sm group-hover:border-purple-300"
        }`}
      >
        <span className="gradient-text">{skill.icon}</span>
      </div>

      {/* Name */}
      <span
        className={`text-base md:text-lg font-medium transition-colors duration-300 ${
          theme === "dark"
            ? "text-gray-300 group-hover:text-white"
            : "text-gray-700 group-hover:text-purple-600"
        }`}
      >
        {skill.name}
      </span>
    </motion.div>
  );
}

function SkillCategory({ title, skills, theme, number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className={`relative py-12 md:py-16 border-t ${
        theme === "dark" ? "border-white/10" : "border-purple-200"
      }`}
    >
      <div className="grid grid-cols-1 md:grid-cols-[35%_65%] gap-10 md:gap-8">
        {/* Category title */}
        <div>
          <div className="flex items-center gap-4 mb-5">
            <span
              className={`text-xs tracking-[0.3em] font-mono ${
                theme === "dark" ? "text-gray-600" : "text-gray-400"
              }`}
            >
              {number}
            </span>

            <div
              className={`h-px w-10 ${
                theme === "dark" ? "bg-white/20" : "bg-purple-300"
              }`}
            />
          </div>

          <h3
            className={`font-black tracking-tighter leading-[0.9] text-5xl sm:text-6xl md:text-7xl ${
              theme === "dark" ? "text-white" : "text-gray-950"
            }`}
          >
            {title}
          </h3>
        </div>

        {/* Skills */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-7 content-start">
          {skills.map((skill, index) => (
            <SkillItem
              key={skill.name}
              skill={skill}
              theme={theme}
              index={index}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Skills({ theme }) {
  return (
    <section
      id="skills"
      className={`relative overflow-hidden px-6 sm:px-10 md:px-16 lg:px-20 py-24 md:py-32 ${
        theme === "dark"
          ? "bg-[#020617] text-white"
          : "bg-gradient-to-br from-white via-purple-50 to-white text-gray-900"
      }`}
    >
      {/* Background glow */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-purple-500/10 blur-[150px] pointer-events-none" />

      <div className="absolute bottom-0 -right-40 w-[500px] h-[500px] rounded-full bg-cyan-400/10 blur-[150px] pointer-events-none" />

      {/* Background text */}
      <div
        className={`absolute top-24 right-[-5%] text-[20vw] font-black tracking-tighter pointer-events-none select-none ${
          theme === "dark" ? "text-white/[0.025]" : "text-purple-900/[0.035]"
        }`}
      >
        STACK
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-10 md:mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="text-2xl gradient-text">✱</span>

            <span
              className={`text-sm md:text-base tracking-[0.15em] uppercase font-medium ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              <motion.div
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`absolute top-24 right-[-5%] text-[20vw] font-black tracking-tighter pointer-events-none select-none ${
                  theme === "dark"
                    ? "text-white/[0.025]"
                    : "text-purple-900/[0.035]"
                }`}
              >
                STACK
              </motion.div>
            </span>
          </div>

          <h2
            className={`font-black tracking-tighter leading-[0.85] text-[15vw] sm:text-[11vw] md:text-[9vw] ${
              theme === "dark" ? "text-white" : "text-gray-950"
            }`}
          >
            TECH
            <br />
            <span className="gradient-text">STACK</span>
          </h2>

          <p
            className={`mt-8 max-w-lg text-sm md:text-base leading-relaxed ${
              theme === "dark" ? "text-gray-500" : "text-gray-600"
            }`}
          >
            Tools and technologies I use to turn ideas into functional, scalable
            and interactive products.
          </p>
        </motion.div>

        {/* Frontend */}
        <SkillCategory
          number="01"
          title="FRONTEND"
          skills={frontendSkills}
          theme={theme}
        />

        {/* Backend */}
        <SkillCategory
          number="02"
          title="BACKEND"
          skills={backendSkills}
          theme={theme}
        />

        {/* Tools */}
        <SkillCategory
          number="03"
          title="TOOLS"
          skills={toolsSkills}
          theme={theme}
        />

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="pt-10 flex items-center gap-4"
        >
          <div className="h-px flex-1 bg-gradient-to-r from-purple-500/40 to-cyan-400/20" />

          <span
            className={`text-[10px] md:text-xs tracking-[0.25em] uppercase ${
              theme === "dark" ? "text-gray-600" : "text-gray-400"
            }`}
          >
            Always learning
          </span>

          <div className="h-px flex-1 bg-gradient-to-l from-cyan-400/40 to-purple-500/20" />
        </motion.div>
      </div>
    </section>
  );
}
