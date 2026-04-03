import { motion } from "framer-motion";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";

export default function Hero({ theme }) {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleAsk = (e) => {
    if (e.key === "Enter") {
      if (!query.trim()) return;

      setLoading(true);
      setResponse("");

      setTimeout(() => {
        const q = query.toLowerCase();

        if (q.includes("project")) {
          setResponse("🚀 Taking you to my projects...");
          document
            .getElementById("projects")
            ?.scrollIntoView({ behavior: "smooth" });
        } else if (q.includes("about")) {
          setResponse("👀 Here's a bit about me...");
          document
            .getElementById("about")
            ?.scrollIntoView({ behavior: "smooth" });
        } else if (q.includes("neurospeak")) {
          setResponse(
            "🧠 NeuroSpeak is a gesture-based AI communication system.",
          );
        } else {
          setResponse("Try: projects, about, neurospeak 👀");
        }

        setLoading(false);
        setQuery("");
      }, 800);
    }
  };
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const suggestions = ["Projects", "About", "NeuroSpeak"];

  return (
    <section
      className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden transition-colors duration-500"
      id="home"
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
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-gradient-to-b from-purple-500/40 via-blue-500/20 to-transparent blur-[120px] rounded-full" />

      {/* Content */}
      <div className="z-10 max-w-4xl text-center flex flex-col items-center justify-center">
        {/* Typing Heading */}
        <TypeAnimation
          sequence={[
            "Hello, I'm Diya Pareta 👋",
            2000,
            "I build intelligent systems 🤖",
            2000,
            "Full Stack Developer 🚀",
            2000,
          ]}
          wrapper="h1"
          speed={50}
          repeat={Infinity}
          className="text-5xl md:text-7xl font-bold leading-[1.1] gradient-text"
        />

        <p className="mt-6 text-lg font-medium">
          <span className="opacity-60">— </span>
          <span className="gradient-text">Diya Pareta</span>
        </p>

        <p className="text-sm opacity-70 mt-3">
          Frontend • Backend • Full Stack • DSA
        </p>

        {/* Buttons */}
        <div className="mt-12 flex gap-6">
          <button
            onClick={() => scrollToSection("projects")}
            className="btn-primary shadow-lg shadow-purple-300/30 hover:scale-110 transition"
          >
            🚀 Explore Work
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className={`px-6 py-3 rounded-full border transition ${
              theme === "dark"
                ? "border-white/20 text-white hover:bg-white/10"
                : "border-gray-400 text-gray-700 hover:bg-gray-100 shadow-sm"
            }`}
          >
            💬 Let’s Talk
          </button>
        </div>
      </div>

      {/* 🤖 FLOATING BUTTON */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-2xl shadow-lg hover:scale-110 transition z-[60]"
        >
          🤖
        </button>
      )}

      {/* 💬 CHAT BOX */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className={`fixed bottom-6 right-6 w-[350px] h-[450px] rounded-2xl flex flex-col z-[60] backdrop-blur-xl transition ${
            theme === "dark"
              ? "bg-white/10 border border-white/20"
              : "bg-white border border-gray-200 shadow-xl"
          }`}
        >
          {/* Header */}
          <div className="flex justify-between items-center p-3 border-b border-white/20">
            <p className="text-sm">🤖 Ask Diya AI</p>
            <button onClick={() => setIsOpen(false)}>❌</button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 overflow-y-auto text-sm">
            <p className="opacity-70">
              Ask me about projects, skills, Neurospeak...
            </p>

            {/* Suggestions */}
            <div className="flex gap-2 flex-wrap mt-3">
              {suggestions.map((item) => (
                <button
                  key={item}
                  onClick={() => setQuery(item)}
                  className={`text-xs px-3 py-1 rounded-full transition ${
                    theme === "dark"
                      ? "bg-white/10 hover:bg-white/20"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {loading && (
              <p className="mt-4 text-sm animate-pulse">thinking...</p>
            )}

            {response && (
              <p className="mt-4 text-sm text-purple-400">{response}</p>
            )}
          </div>

          {/* Input */}
          <div className="p-3 border-t border-white/20">
            <input
              type="text"
              placeholder="Type your question..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleAsk}
              className={`w-full p-2 rounded-lg outline-none text-sm ${
                theme === "dark"
                  ? "bg-white/10 text-white placeholder-gray-400"
                  : "bg-gray-100 text-gray-800 placeholder-gray-500"
              }`}
            />
          </div>
        </motion.div>
      )}
    </section>
  );
}
