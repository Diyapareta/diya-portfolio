import { useState } from "react";

function MagneticButton({ children }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPos({
      x: (e.clientX - rect.left - rect.width / 2) * 0.2,
      y: (e.clientY - rect.top - rect.height / 2) * 0.2,
    });
  };

  const reset = () => setPos({ x: 0, y: 0 });

  return (
    <button
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
      className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 text-white transition"
    >
      {children}
    </button>
  );
}
