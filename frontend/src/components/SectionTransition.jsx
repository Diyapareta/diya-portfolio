import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function SectionTransition({
  children,
  theme,
  variant = "default",
}) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Content moves based on scroll position
  const y = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [100, 30, 0, -30, -100],
  );

  // Fade in → stay → fade out
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.3, 0.7, 0.85, 1],
    [0.25, 0.7, 1, 1, 0.7, 0.25],
  );

  // Slight scale effect
  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.8, 1],
    [0.94, 0.98, 1, 0.98, 0.94],
  );

  // Background moves opposite to content
  const backgroundY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [120, 0, -120],
  );

  return (
    <section ref={ref} className="relative overflow-hidden">
      {/* BACKGROUND */}
      <motion.div
        style={{
          y: backgroundY,
          opacity,
        }}
        className="absolute inset-[-15%] pointer-events-none"
      >
        {variant === "purple" && (
          <div
            className={`absolute w-[600px] h-[600px] rounded-full blur-[160px] -left-40 top-20 ${
              theme === "dark" ? "bg-purple-600/15" : "bg-purple-300/25"
            }`}
          />
        )}

        {variant === "cyan" && (
          <div
            className={`absolute w-[600px] h-[600px] rounded-full blur-[160px] -right-40 top-20 ${
              theme === "dark" ? "bg-cyan-500/15" : "bg-cyan-300/25"
            }`}
          />
        )}

        {variant === "blue" && (
          <div
            className={`absolute w-[600px] h-[600px] rounded-full blur-[160px] left-1/2 top-20 -translate-x-1/2 ${
              theme === "dark" ? "bg-blue-600/15" : "bg-blue-300/25"
            }`}
          />
        )}
      </motion.div>

      {/* CONTENT */}
      <motion.div
        style={{
          y,
          scale,
          opacity,
        }}
        className="relative z-10"
      >
        {children}
      </motion.div>
    </section>
  );
}
