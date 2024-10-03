import { motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: globalThis.MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  return (
    <motion.div
      style={{
        scale: 1.5,
        borderWidth: 2,
        position: "fixed",
        width: "20px",
        height: "20px",
        borderRadius: "50%",
        left: `${position.x + 20}px`,
        top: `${position.y + 20}px`,
        mixBlendMode: "soft-light",
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
    />
  );
}
