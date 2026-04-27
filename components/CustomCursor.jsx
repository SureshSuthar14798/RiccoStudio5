"use client";
import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  const springX = useSpring(0, { stiffness: 500, damping: 28 });
  const springY = useSpring(0, { stiffness: 500, damping: 28 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      springX.set(e.clientX);
      springY.set(e.clientY);
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    const handleLinkHoverStart = (e) => {
      const target = e.target;
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setLinkHovered(true);
      }
    };

    const handleLinkHoverEnd = () => setLinkHovered(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseover", handleLinkHoverStart);
    window.addEventListener("mouseout", handleLinkHoverEnd);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseover", handleLinkHoverStart);
      window.removeEventListener("mouseout", handleLinkHoverEnd);
    };
  }, [springX, springY]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-indigo-500 pointer-events-none z-[9999] hidden md:block"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          scale: linkHovered ? 2 : clicked ? 0.8 : 1,
          backgroundColor: linkHovered ? "rgba(99, 102, 241, 0.1)" : "transparent",
        }}
        transition={{ scale: { type: "spring", stiffness: 300, damping: 20 } }}
      />
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-indigo-600 rounded-full pointer-events-none z-[9999] hidden md:block"
        style={{
          x: position.x,
          y: position.y,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  );
}
