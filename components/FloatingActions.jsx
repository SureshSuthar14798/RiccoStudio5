"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const actions = [
    {
      id: "telegram",
      label: "텔레그램",
      color: "bg-[#0088cc]",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.11.02-1.93 1.23-5.46 3.62-.51.35-.98.52-1.4.51-.46-.01-1.35-.26-2.01-.48-.81-.27-1.45-.42-1.39-.89.03-.24.37-.48 1.02-.73 4-1.74 6.67-2.88 8-3.43 3.81-1.58 4.6-1.85 5.11-1.86.11 0 .37.03.53.17.14.11.18.26.2.37.02.08.02.24.01.32z"/>
        </svg>
      ),
      href: "https://t.me/yourusername",
    },
    {
      id: "cs",
      label: "고객센터",
      color: "bg-indigo-600",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
      ),
      href: "#cta",
    },
  ];

  return (
    <div className="fixed bottom-10 right-10 z-[45] flex flex-col gap-4">
      <AnimatePresence>
        {actions.map((action, i) => (
          <motion.a
            key={action.id}
            href={action.href}
            target={action.href.startsWith("http") ? "_blank" : "_self"}
            initial={{ opacity: 0, x: 20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            className={`w-12 h-12 rounded-full ${action.color} text-white flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/20 backdrop-blur-md relative group`}
          >
            {action.icon}
            <span className="absolute right-full mr-4 px-3 py-1 rounded-full bg-gray-900/80 backdrop-blur-md text-white text-[9px] font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none uppercase tracking-[0.2em] translate-x-2 group-hover:translate-x-0">
              {action.label}
            </span>
          </motion.a>
        ))}

        {showTop && (
          <motion.button
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-md text-gray-900 flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/40 group relative"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 15l-6-6-6 6"/>
            </svg>
            <span className="absolute right-full mr-4 px-3 py-1 rounded-full bg-gray-900/80 backdrop-blur-md text-white text-[9px] font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none uppercase tracking-[0.2em] translate-x-2 group-hover:translate-x-0">
              맨 위로
            </span>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
