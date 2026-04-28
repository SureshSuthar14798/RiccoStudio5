"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.random() * 15;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsLoading(false), 800);
          return 100;
        }
        return next;
      });
    }, 120);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ 
            y: "-100%",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#050505] text-white"
        >
          <div className="flex flex-col items-center px-6">
             <motion.div 
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
               className="mb-6"
             >
                <span className="text-xl md:text-4xl font-black tracking-[0.2em] uppercase">
                  Ricco<span className="gradient-text italic">Studio</span>
                </span>
             </motion.div>
             
             <div className="relative w-48 md:w-80 h-[2px] bg-white/10">
                <motion.div 
                  className="absolute inset-y-0 left-0 w-full bg-indigo-500"
                  style={{ transformOrigin: "left" }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: progress / 100 }}
                  transition={{ duration: 0.1, ease: "linear" }}
                />
             </div>
             
             <div className="mt-4 flex justify-between w-48 md:w-64 text-[9px] font-black tracking-[0.3em] text-gray-500 uppercase">
                <span>Loading</span>
                <span>{Math.round(progress)}%</span>
             </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
