import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [isHovering, setIsHovering] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, {
    stiffness: 500,
    damping: 35,
    mass: 0.5,
  });

  const springY = useSpring(mouseY, {
    stiffness: 500,
    damping: 35,
    mass: 0.5,
  });

  useEffect(() => {
    const moveCursor = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleOver = (e) => {
      if (
        e.target.closest("button, a, input, textarea, select, [data-cursor]")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleOver);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Hide normal cursor */}
      <style>{`
        @media (pointer: fine) {
          body {
            cursor: none;
          }

          button,
          a,
          input,
          textarea,
          select {
            cursor: none;
          }
        }
      `}</style>

      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 z-[99999] pointer-events-none rounded-full border border-purple-400/70"
        style={{
          x: springX,
          y: springY,
        }}
        animate={{
          width: isHovering ? 55 : 32,
          height: isHovering ? 55 : 32,
          x: "-50%",
          y: "-50%",
          opacity: isHovering ? 0.8 : 0.55,
        }}
        transition={{
          duration: 0.2,
        }}
      />

      {/* Center dot */}
      <motion.div
        className="fixed top-0 left-0 z-[100000] pointer-events-none rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400"
        style={{
          x: mouseX,
          y: mouseY,
        }}
        animate={{
          width: isHovering ? 8 : 6,
          height: isHovering ? 8 : 6,
          x: "-50%",
          y: "-50%",
        }}
        transition={{
          duration: 0.15,
        }}
      />
    </>
  );
}
