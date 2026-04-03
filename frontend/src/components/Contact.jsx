import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { supabase } from "../supabase";
import { useEffect } from "react";

export default function Contact({ theme }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("guestbook")) || [];
    setMessages(saved);
  }, []);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);
    setSuccess(false);

    try {
      const res = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setSuccess(true);
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setSuccess(false), 3000);
      }
    } catch (err) {
      console.log(err);
    }

    setLoading(false);
  };

  const [userId] = useState(() => {
    let id = localStorage.getItem("guestUserId");
    if (!id) {
      id = "user_" + Math.random().toString(36).substring(2, 9);
      localStorage.setItem("guestUserId", id);
    }
    return id;
  });
  const [messages, setMessages] = useState([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  useEffect(() => {
    const fetchMessages = async () => {
      const { data, error } = await supabase
        .from("messages")
        .select("*")
        .order("created_at", { ascending: false });

      if (!error) setMessages(data);
    };

    fetchMessages();
  }, []);
  useEffect(() => {
    const channel = supabase
      .channel("messages-realtime")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "messages",
        },
        (payload) => {
          console.log("Realtime update:", payload);

          if (payload.eventType === "INSERT") {
            setMessages((prev) => [payload.new, ...prev]);
          }

          if (payload.eventType === "DELETE") {
            setMessages((prev) =>
              prev.filter((msg) => msg.id !== payload.old.id),
            );
          }
        },
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const addMessage = async () => {
    if (!name || !text) return;

    const newMsg = {
      name,
      text,
      ownerid: userId, // ✅ FIXED
      x: Math.random() * 80,
      y: Math.random() * 80,
    };

    const { data, error } = await supabase
      .from("messages")
      .insert([newMsg])
      .select();

    if (!error) {
      setName("");
      setText("");
    }

    setName("");
    setText("");
  };
  const handleDelete = async (id) => {
    await supabase.from("messages").delete().eq("id", id);

    setMessages((prev) => prev.filter((msg) => msg.id !== id));
  };

  return (
    <section className="py-24 px-6 relative overflow-hidden" id="contact">
      {/* BACKGROUND */}
      <div
        className={`absolute inset-0 ${
          theme === "dark"
            ? "bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#020617]"
            : "bg-gradient-to-br from-white via-purple-50 to-white"
        }`}
      />

      {/* GLOW */}
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

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* CONTACT SECTION */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT */}
          <div>
            <h1 className="text-5xl font-bold leading-tight">
              Let’s build something <br />
              <span className="gradient-text">epic.</span>
            </h1>

            <p
              className={`mt-4 ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Have an idea? Let’s connect and make it real.
            </p>

            <p className="mt-6 text-lg">📩 pdiyaaa@gmail.com</p>

            <p className="text-green-500 mt-2">
              ● Available for internships & collaborations
            </p>
            <div className="flex gap-4 mt-6 text-xl">
              {/* GitHub */}
              <a
                href="https://github.com/Diyapareta"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 rounded-full flex items-center justify-center transition ${
                  theme === "dark"
                    ? "bg-white/10 text-white hover:bg-purple-500/20 hover:shadow-purple-500/30 hover:shadow-lg"
                    : "bg-white shadow-md border border-gray-200 text-gray-700 hover:text-purple-500"
                } hover:scale-110`}
              >
                <FaGithub />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/diya-pareta"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 rounded-full flex items-center justify-center transition ${
                  theme === "dark"
                    ? "bg-white/10 text-white hover:bg-purple-500/20 hover:shadow-purple-500/30 hover:shadow-lg"
                    : "bg-white shadow-md border border-gray-200 text-gray-700 hover:text-purple-500"
                } hover:scale-110`}
              >
                <FaLinkedin />
              </a>

              {/* Email */}
              <a
                href="mailto:pdiyaaa@gmail.com"
                className={`w-10 h-10 rounded-full flex items-center justify-center transition ${
                  theme === "dark"
                    ? "bg-white/10 text-white hover:bg-purple-500/20 hover:shadow-purple-500/30 hover:shadow-lg"
                    : "bg-white shadow-md border border-gray-200 text-gray-700 hover:text-purple-500"
                } hover:scale-110`}
              >
                <HiOutlineMail />
              </a>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div
            className={`p-8 rounded-3xl backdrop-blur-xl border ${
              theme === "dark"
                ? "bg-white/5 border-white/10"
                : "bg-white border-gray-200 shadow-xl"
            }`}
          >
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full mb-4 p-3 bg-transparent border-b border-white/20"
            />
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full mb-4 p-3 bg-transparent border-b border-white/20"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Message"
              className="w-full mb-4 p-3 bg-transparent border-b border-white/20"
            />

            <button
              onClick={handleSubmit}
              className="w-full py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {success && (
              <p className="text-green-400 mt-3">Message sent successfully!</p>
            )}
          </div>
        </div>

        {/* 💬 DEV WALL */}

        {/* 💬 DEV WALL */}
        <div className="mt-20 max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold mb-3 flex items-center gap-2">
            💬 Dev Wall
          </h2>

          {/* GRID */}
          <div className="grid md:grid-cols-2 gap-10 items-start mt-10">
            {/* 🔹 LEFT INPUT */}
            <div
              className={`p-6 rounded-2xl backdrop-blur-xl border ${
                theme === "dark"
                  ? "bg-white/5 border-white/10"
                  : "bg-white border-gray-200 shadow-md"
              }`}
            >
              <input
                type="text"
                placeholder="Your Name"
                className={`w-full bg-transparent border-b py-2 mb-4 outline-none ${
                  theme === "dark"
                    ? "border-white/30 text-white placeholder-gray-400"
                    : "border-gray-300 text-black placeholder-gray-500"
                }`}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <textarea
                placeholder="Say something cool..."
                className={`w-full bg-transparent border-b py-2 mb-4 outline-none ${
                  theme === "dark"
                    ? "border-white/30 text-white placeholder-gray-400"
                    : "border-gray-300 text-black placeholder-gray-500"
                }`}
                value={text}
                onChange={(e) => setText(e.target.value)}
              />

              <button
                onClick={addMessage}
                className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:scale-105 transition"
              >
                Post 🚀
              </button>

              {/* 🟣 LEFT HELPER TEXT */}
              <p
                className={`mt-4 text-sm leading-relaxed ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Share your thoughts, feedback, or just say hi 👋 Your message
                will float on the wall ✨
              </p>
            </div>

            {/* 🔹 RIGHT FLOATING AREA */}
            <div>
              <div
                className={`relative h-[300px] overflow-hidden rounded-2xl border ${
                  theme === "dark"
                    ? "border-white/10 bg-white/[0.02]"
                    : "border-gray-200 bg-white"
                }`}
              >
                {/* Empty state */}
                {messages.length === 0 && (
                  <p
                    className={`absolute inset-0 flex items-center justify-center text-sm ${
                      theme === "dark" ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    No messages yet 👀 Be the first to say something!
                  </p>
                )}

                {/* Floating Messages */}
                {messages.map((msg, i) => {
                  const handleDelete = () => {
                    setMessages((prev) =>
                      prev.filter((_, index) => index !== i),
                    );
                  };

                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                      style={{
                        position: "absolute",
                        left: `${msg.x}%`,
                        top: `${msg.y}%`,
                      }}
                      whileHover={{ scale: 1.1 }}
                      className={`group px-4 py-3 rounded-xl text-sm max-w-[200px] backdrop-blur-xl border transition ${
                        theme === "dark"
                          ? "bg-white/10 border-white/20 text-white shadow-lg shadow-purple-500/10"
                          : "bg-white border-gray-200 text-black shadow-md"
                      }`}
                    >
                      {/* ❌ DELETE BUTTON */}
                      {msg.ownerid === userId && (
                        <button
                          onClick={() => handleDelete(msg.id)}
                          className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 rounded-full opacity-0 group-hover:opacity-100 transition"
                        >
                          ✕
                        </button>
                      )}

                      <p>{msg.text}</p>
                      <p className="text-xs mt-1 opacity-70">— {msg.name}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* 🚀 CTA */}
        <div className="mt-28 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let’s build something amazing 🚀
          </h2>

          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:scale-105 transition"
          >
            Contact Me
          </button>
        </div>

        {/* FOOTER */}
        <div className="mt-10 text-center pb-10">
          <p
            className={`text-sm ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Made with ❤️ by Diya
          </p>

          <p className="text-xs mt-2 text-gray-500">
            © 2026 All rights reserved
          </p>
        </div>
      </div>
    </section>
  );
}
