import { useState } from "react";
import { motion } from "framer-motion";

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { text: "hey 👋 ask me anything about my work", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = { text: input, sender: "user" };

    let botReply = "hmm... try asking about projects or about me 👀";

    const q = input.toLowerCase();

    if (q.includes("project")) {
      botReply = "showing my projects 🚀";
      document
        .getElementById("projects")
        ?.scrollIntoView({ behavior: "smooth" });
    } else if (q.includes("about")) {
      botReply = "here’s a bit about me 👀";
      document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
    } else if (q.includes("neurospeak")) {
      botReply =
        "NeuroSpeak is a gesture-based communication system using AI 🤖";
    }

    const botMsg = { text: botReply, sender: "bot" };

    setMessages([...messages, userMsg, botMsg]);
    setInput("");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2 }}
      className="mt-12 w-full max-w-md mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4"
    >
      {/* Chat messages */}
      <div className="h-32 overflow-y-auto flex flex-col gap-3 mb-4">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`text-sm px-3 py-2 rounded-lg max-w-[80%] ${
              msg.sender === "user"
                ? "bg-blue-500/20 self-end"
                : "bg-white/10 self-start"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="ask something..."
          className="flex-1 bg-transparent border-b border-white/10 outline-none text-white placeholder-gray-500"
        />

        <button onClick={handleSend} className="text-blue-400">
          ➤
        </button>
      </div>
    </motion.div>
  );
}
