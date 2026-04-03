import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Navbar({ theme }) {
  const navItems = ["Home", "About", "Projects", "Skills", "Contact"];
  const [active, setActive] = useState("");

  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  // 🔥 Active section tracking
  useEffect(() => {
    const sections = ["home", "about", "projects", "skills", "contact"];

    const observer = new IntersectionObserver(
      (entries) => {
        // get visible sections
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections.length > 0) {
          setActive(visibleSections[0].target.id);
        }
      },
      {
        root: null,
        threshold: [0.3, 0.5, 0.7], // 🔥 better accuracy
      },
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-6 left-0 w-full flex justify-center z-50"
    >
      <div
        className={`w-[90%] max-w-4xl flex items-center justify-between px-6 py-3 rounded-full backdrop-blur-xl transition-all duration-500 ${
          theme === "dark"
            ? "bg-white/10 border border-white/20"
            : "bg-white/80 border border-gray-200 shadow"
        }`}
      >
        {/* Logo → Scroll to Home */}
        <h1
          onClick={() => handleScroll("home")}
          className="text-sm font-semibold gradient-text cursor-pointer"
        >
          Hellow
        </h1>

        {/* Nav Items */}
        <div
          className={`flex gap-6 text-sm ${
            theme === "dark" ? "text-white" : "text-gray-800"
          }`}
        >
          {navItems.map((item) => {
            const id = item.toLowerCase();
            const isActive = active === id;

            return (
              <button
                key={item}
                onClick={() => handleScroll(id)}
                className={`relative group transition ${
                  isActive ? "text-purple-400" : "opacity-80 hover:opacity-100"
                }`}
              >
                {item}

                {/* underline animation FIXED */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-purple-400 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* CTA Button */}
        <button
          onClick={() => handleScroll("contact")}
          className={`text-xs px-4 py-1 rounded-full transition ${
            theme === "dark"
              ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white"
              : "bg-purple-100 text-purple-700 hover:bg-purple-200"
          }`}
        >
          Resume
        </button>
      </div>
    </motion.nav>
  );
}
