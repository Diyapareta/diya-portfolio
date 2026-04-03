import { useEffect, useState } from "react";

export default function TypingText() {
  const text = "hi, i’m diya pareta";
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 60); // 👈 speed (lower = faster)

      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <h1 className="text-5xl md:text-7xl font-bold gradient-text">
      {displayText}
      <span className="animate-pulse">|</span>
    </h1>
  );
}
