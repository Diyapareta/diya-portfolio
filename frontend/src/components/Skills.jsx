import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaAws, FaPython, FaGithub } from "react-icons/fa";
import {
  SiMongodb,
  SiTensorflow,
  SiOpencv,
  SiJavascript,
  SiPostgresql,
  SiExpress,
} from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "TensorFlow", icon: <SiTensorflow /> },
  { name: "OpenCV", icon: <SiOpencv /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "Python", icon: <FaPython /> },
  { name: "AWS", icon: <FaAws /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "Auth.js", icon: "🔐" }, // simple icon (no official one)
];

export default function Skills({ theme }) {
  return (
    <section
      id="skills"
      className="py-24 px-6 text-center relative overflow-hidden"
    >
      {/* Background */}
      <div
        className={`absolute inset-0 ${
          theme === "dark"
            ? "bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#020617]"
            : "bg-gradient-to-br from-white via-purple-50 to-white"
        }`}
      />

      {/* Glow */}
      <div
        className={`absolute w-[400px] h-[400px] blur-[150px] top-0 left-0 rounded-full ${
          theme === "dark" ? "bg-purple-500/20" : "bg-purple-300/30"
        }`}
      />
      <div
        className={`absolute w-[400px] h-[400px] blur-[150px] bottom-0 right-0 rounded-full ${
          theme === "dark" ? "bg-blue-500/20" : "bg-blue-300/30"
        }`}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-bold gradient-text"
        >
          Tech Stack
        </motion.h2>

        <p
          className={`text-sm mt-3 mb-12 ${
            theme === "dark" ? "text-gray-400" : "text-gray-600"
          }`}
        >
          technologies i work with
        </p>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -6, scale: 1.05 }}
              className={`p-5 rounded-2xl backdrop-blur-xl flex flex-col items-center justify-center gap-3 transition ${
                theme === "dark"
                  ? "bg-white/5 border border-white/10 hover:shadow-purple-500/20 hover:shadow-xl"
                  : "bg-white border border-gray-200 shadow-md hover:shadow-xl"
              }`}
            >
              {/* Icon */}
              <div
                className={`text-3xl ${
                  theme === "dark" ? "text-white" : "text-purple-600"
                }`}
              >
                {skill.icon}
              </div>

              {/* Name */}
              <p
                className={`text-sm ${
                  theme === "dark" ? "text-white/90" : "text-gray-700"
                }`}
              >
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Extra line */}
        <p className="mt-12 text-sm opacity-70">
          Always learning and exploring new technologies 🚀
        </p>
      </div>
    </section>
  );
}
