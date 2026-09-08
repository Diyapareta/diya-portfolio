import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import emailjs from "emailjs-com";

export default function Contact({ theme }) {
  const ref = useRef(null);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  /* ================= SCROLL ANIMATION ================= */

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const contentY = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [60, 20, 0, -20, -60],
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.35, 0.65, 0.8, 1],
    [0.35, 0.8, 1, 1, 0.8, 0.35],
  );

  const scale = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [0.97, 0.99, 1, 0.99, 0.97],
  );

  const glowY = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -100]);

  const formScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.98, 1, 0.98]);

  /* ================= FORM ================= */

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);

    try {
      const result = await emailjs.send(
        "service_213bbu6",
        "template_vthjwdh",
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        "qlT30LVow2EioD1A0",
      );

      console.log("EmailJS SUCCESS:", result);

      setSuccess(true);

      setForm({
        name: "",
        email: "",
        message: "",
      });

      setTimeout(() => {
        setSuccess(false);
      }, 4000);
    } catch (error) {
      console.error("EmailJS ERROR:", error);
      console.error("Status:", error?.status);
      console.error("Text:", error?.text);

      alert(`Email failed: ${error?.text || "Unknown EmailJS error"}`);
    } finally {
      setLoading(false);
    }
  };
  return (
    <section
      ref={ref}
      id="contact"
      className={`relative overflow-hidden pt-10 pb-20 px-6 ${
        theme === "dark" ? "bg-[#020617]" : "bg-white"
      }`}
    >
      {/* ================= BACKGROUND ================= */}

      <div
        className={`absolute inset-0 pointer-events-none ${
          theme === "dark"
            ? "bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#020617]"
            : "bg-gradient-to-br from-white via-purple-50/60 to-white"
        }`}
      />

      {/* ================= PURPLE GLOW ================= */}

      <motion.div
        style={{
          y: glowY,
          opacity,
        }}
        className={`absolute w-[450px] h-[450px] blur-[150px] -left-40 top-0 rounded-full pointer-events-none ${
          theme === "dark" ? "bg-purple-500/15" : "bg-purple-300/20"
        }`}
      />

      {/* ================= CYAN GLOW ================= */}

      <motion.div
        style={{
          y: glowY,
        }}
        className={`absolute w-[400px] h-[400px] blur-[150px] right-[-180px] bottom-0 rounded-full pointer-events-none ${
          theme === "dark" ? "bg-cyan-500/10" : "bg-cyan-300/15"
        }`}
      />

      {/* ================= CONTENT ================= */}

      <motion.div
        style={{
          y: contentY,
          scale,
          opacity,
        }}
        className="relative z-10 max-w-6xl mx-auto w-full"
      >
        {/* ================= SECTION LABEL ================= */}

        <div className="mb-10">
          <div className="flex items-center gap-4 mb-5">
            <span
              className={`h-px w-10 ${
                theme === "dark" ? "bg-white/30" : "bg-gray-300"
              }`}
            />

            <span
              className={`text-xs tracking-[0.35em] uppercase ${
                theme === "dark" ? "text-white/40" : "text-gray-400"
              }`}
            >
              Contact / 04
            </span>
          </div>

          <h2
            className={`font-serif text-4xl md:text-5xl lg:text-6xl tracking-[-0.04em] ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Let's connect
            <span className="gradient-text">.</span>
          </h2>
        </div>

        {/* ================= MAIN GRID ================= */}

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* ================= LEFT ================= */}

          <div>
            <h3
              className={`text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.9] tracking-[-0.04em] ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Let's build
              <br />
              something <span className="gradient-text">epic.</span>
            </h3>

            <p
              className={`mt-6 max-w-md text-lg leading-relaxed ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Have an idea? Let's connect and make it real.
            </p>

            {/* EMAIL */}

            <a
              href="mailto:diyapareta23@gmail.com"
              className={`inline-block mt-7 text-lg transition-opacity duration-300 hover:opacity-60 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              📩 diyapareta23@gmail.com
            </a>

            {/* SOCIALS */}

            <div className="flex gap-5 mt-7 text-2xl">
              <a
                href="https://github.com/Diyapareta"
                target="_blank"
                rel="noreferrer"
                data-cursor="GITHUB"
                className={`transition-all duration-300 hover:-translate-y-1 ${
                  theme === "dark"
                    ? "text-white/60 hover:text-white"
                    : "text-gray-600 hover:text-gray-950"
                }`}
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/diya-pareta/"
                target="_blank"
                rel="noreferrer"
                data-cursor="LINKEDIN"
                className={`transition-all duration-300 hover:-translate-y-1 ${
                  theme === "dark"
                    ? "text-white/60 hover:text-white"
                    : "text-gray-600 hover:text-gray-950"
                }`}
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:diyapareta23@gmail.com"
                data-cursor="EMAIL"
                className={`transition-all duration-300 hover:-translate-y-1 ${
                  theme === "dark"
                    ? "text-white/60 hover:text-white"
                    : "text-gray-600 hover:text-gray-950"
                }`}
              >
                <HiOutlineMail />
              </a>
            </div>

            {/* AVAILABILITY */}

            <p
              className={`mt-10 text-xs tracking-[0.3em] ${
                theme === "dark" ? "text-white/25" : "text-gray-400"
              }`}
            >
              AVAILABLE FOR OPPORTUNITIES
            </p>
          </div>

          {/* ================= FORM ================= */}

          <motion.form
            onSubmit={handleSubmit}
            style={{
              scale: formScale,
            }}
            className={`p-7 md:p-9 rounded-[28px] backdrop-blur-xl border ${
              theme === "dark"
                ? "bg-white/5 border-white/10"
                : "bg-white/90 border-gray-200 shadow-xl"
            }`}
          >
            {/* NAME */}

            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className={`w-full mb-5 p-3 bg-transparent border-b outline-none transition-colors ${
                theme === "dark"
                  ? "border-white/20 text-white placeholder:text-white/40 focus:border-purple-400"
                  : "border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-purple-400"
              }`}
            />

            {/* EMAIL */}

            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className={`w-full mb-5 p-3 bg-transparent border-b outline-none transition-colors ${
                theme === "dark"
                  ? "border-white/20 text-white placeholder:text-white/40 focus:border-purple-400"
                  : "border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-purple-400"
              }`}
            />

            {/* MESSAGE */}

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Message"
              rows="3"
              required
              className={`w-full mb-6 p-3 bg-transparent border-b outline-none resize-none transition-colors ${
                theme === "dark"
                  ? "border-white/20 text-white placeholder:text-white/40 focus:border-purple-400"
                  : "border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-purple-400"
              }`}
            />

            {/* SEND BUTTON */}

            <button
              type="submit"
              disabled={loading}
              data-cursor="SEND"
              className="w-full py-3.5 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 text-white font-medium transition-transform duration-200 hover:scale-[1.02] disabled:opacity-60 disabled:hover:scale-100"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {/* SUCCESS MESSAGE */}

            {success && (
              <motion.p
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                className="text-green-500 mt-4 text-center text-sm"
              >
                Message sent successfully 🚀
              </motion.p>
            )}
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
}
