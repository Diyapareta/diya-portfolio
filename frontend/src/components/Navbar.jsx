import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function Navbar({ theme }) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Work", id: "projects" },
    { name: "Certifications", id: "certifications" },
  ];
  const handleNavigate = (id) => {
    setIsOpen(false);

    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
      });
    }, 300);
  };

  return (
    <>
      {/* ================= HAMBURGER ================= */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed top-5 left-5 sm:top-8 sm:left-8 z-[2000] w-12 h-12 flex flex-col justify-center gap-[6px] group"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        aria-label="Open navigation"
      >
        <span
          className={`block w-8 h-[2px] transition-all duration-300 ${
            theme === "dark" ? "bg-white" : "bg-gray-900"
          } group-hover:w-10`}
        />

        <span
          className={`block w-6 h-[2px] transition-all duration-300 ${
            theme === "dark" ? "bg-white" : "bg-gray-900"
          } group-hover:w-10`}
        />

        <span
          className={`block w-8 h-[2px] transition-all duration-300 ${
            theme === "dark" ? "bg-white" : "bg-gray-900"
          } group-hover:w-10`}
        />
      </motion.button>

      {/* ================= MENU ================= */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={`fixed inset-0 z-[3000] overflow-hidden ${
              theme === "dark"
                ? "bg-[#080808] text-white"
                : "bg-[#f8f7ff] text-gray-900"
            }`}
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{
              duration: 0.7,
              ease: [0.76, 0, 0.24, 1],
            }}
          >
            {/* LEFT VERTICAL LINE */}
            <div
              className={`absolute left-7 top-0 bottom-0 w-px ${
                theme === "dark" ? "bg-white/10" : "bg-gray-900/10"
              }`}
            />

            {/* CLOSE */}
            <motion.button
              onClick={() => setIsOpen(false)}
              className="absolute top-5 left-5 sm:top-8 sm:left-8 w-10 h-10 z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span
                className={`absolute left-1/2 top-1/2 w-7 h-px rotate-45 ${
                  theme === "dark" ? "bg-white" : "bg-gray-900"
                }`}
              />
              <span
                className={`absolute left-1/2 top-1/2 w-7 h-px -rotate-45 ${
                  theme === "dark" ? "bg-white" : "bg-gray-900"
                }`}
              />
            </motion.button>

            {/* CONTENT */}
            <div className="h-full flex items-start md:items-center pt-24 pb-20 md:pt-2 overflow-y-auto">
              <div className="w-full max-w-7xl mx-auto px-16 sm:px-20 md:px-32 grid md:grid-cols-[1fr_300px] gap-20">
                {/* NAVIGATION */}
                <div>
                  <motion.p
                    className={`text-xs tracking-[0.3em] mb-10 ${
                      theme === "dark" ? "text-white/40" : "text-gray-900/40"
                    }`}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.45 }}
                  >
                    NAVIGATION
                  </motion.p>

                  <div className="flex flex-col">
                    {navItems.map((item, index) => (
                      <motion.button
                        key={item.id}
                        onClick={() => handleNavigate(item.id)}
                        className="group relative text-left w-fit"
                        initial={{ opacity: 0, x: -80 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: 0.45 + index * 0.12,
                          duration: 0.7,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      >
                        <span
                          className={`block font-serif text-4xl sm:text-5xl md:text-7xl lg:text-[6.2rem] leading-[0.9] tracking-[-0.04em] transition-all duration-300 group-hover:translate-x-4 ${
                            theme === "dark"
                              ? "text-white group-hover:text-white/50"
                              : "text-gray-900 group-hover:text-gray-900/50"
                          }`}
                        >
                          {item.name}
                        </span>

                        <span
                          className={`absolute left-0 bottom-[-5px] h-px w-0 transition-all duration-500 group-hover:w-full ${
                            theme === "dark" ? "bg-white" : "bg-gray-900"
                          }`}
                        />
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* SOCIALS */}
                <motion.div
                  className="hidden md:block self-center"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7, duration: 0.7 }}
                >
                  <p
                    className={`text-xs tracking-[0.25em] mb-7 ${
                      theme === "dark" ? "text-white/40" : "text-gray-900/40"
                    }`}
                  >
                    FIND ME ELSEWHERE
                  </p>

                  <div className="flex flex-col gap-1 text-xl">
                    {/* LINKEDIN */}
                    <a
                      href="https://www.linkedin.com"
                      target="_blank"
                      rel="noreferrer"
                      className={`transition-colors ${
                        theme === "dark"
                          ? "text-white/70 hover:text-white"
                          : "text-gray-900/70 hover:text-gray-900"
                      }`}
                    >
                      LinkedIn
                    </a>

                    {/* GITHUB */}
                    <a
                      href="https://github.com/Diyapareta"
                      target="_blank"
                      rel="noreferrer"
                      className={`transition-colors ${
                        theme === "dark"
                          ? "text-white/70 hover:text-white"
                          : "text-gray-900/70 hover:text-gray-900"
                      }`}
                    >
                      GitHub
                    </a>

                    {/* LEETCODE */}
                    <a
                      href="https://leetcode.com/u/X3eDUXuyeA/"
                      target="_blank"
                      rel="noreferrer"
                      className={`transition-colors ${
                        theme === "dark"
                          ? "text-white/70 hover:text-white"
                          : "text-gray-900/70 hover:text-gray-900"
                      }`}
                    >
                      LeetCode
                    </a>
                  </div>

                  {/* CONTACT */}
                  <div className="mt-16">
                    <p
                      className={`text-xs tracking-[0.2em] mb-3 ${
                        theme === "dark" ? "text-white/30" : "text-gray-900/30"
                      }`}
                    >
                      CONTACT
                    </p>

                    <p
                      className={
                        theme === "dark"
                          ? "text-sm text-white/50"
                          : "text-sm text-gray-900/50"
                      }
                    >
                      diyapareta23@gmail.com
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* BOTTOM */}
            <motion.div
              className={`absolute bottom-8 left-24 md:left-32 right-10 flex justify-between text-xs tracking-wider ${
                theme === "dark" ? "text-white/30" : "text-gray-900/30"
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <span>DIYA PARETA</span>
              <span>SOFTWARE ENGINEER / 2026</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
