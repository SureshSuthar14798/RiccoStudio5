"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "소개", href: "#about" },
  { label: "서비스", href: "#services" },
  { label: "포트폴리오", href: "#portfolio" },
  { label: "과정", href: "#process" },
  { label: "문의", href: "#cta" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      document.body.classList.add("nav-open");
    } else {
      document.body.style.overflow = "unset";
      document.body.classList.remove("nav-open");
    }
    return () => { 
      document.body.style.overflow = "unset"; 
      document.body.classList.remove("nav-open");
    };
  }, [menuOpen]);

  const handleNav = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 pointer-events-none flex justify-center py-4 md:py-6 px-4 md:px-6`}
      >
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className={`pointer-events-auto flex items-center justify-between px-5 md:px-6 py-2.5 rounded-full transition-all duration-700 ${
            scrolled 
              ? "bg-white/80 backdrop-blur-xl border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.04)] w-full max-w-[1100px]" 
              : "bg-transparent w-full max-w-[1320px]"
          }`}
        >
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="flex items-center gap-2 group relative z-10"
          >
            <div className={`text-lg md:text-xl font-black tracking-tighter flex items-center transition-colors duration-500 ${scrolled || menuOpen ? "text-gray-900" : "text-white"}`}>
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mr-2" />
              리코 스튜디오
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className={`px-5 py-2 text-[11px] font-black tracking-[0.2em] uppercase transition-all duration-300 relative group ${
                  scrolled ? "text-gray-500 hover:text-indigo-600" : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
                <span className="absolute bottom-1 left-5 right-5 h-[1.5px] bg-indigo-600 origin-right scale-x-0 group-hover:scale-x-100 group-hover:origin-left transition-transform duration-500" />
              </button>
            ))}
          </div>

          {/* Action Button */}
          <div className="hidden md:block">
            <button
              onClick={() => handleNav("#cta")}
              className={`px-6 py-2 rounded-full text-[11px] font-black tracking-[0.2em] uppercase transition-all duration-500 ${
                scrolled 
                  ? "bg-gray-900 text-white hover:bg-indigo-600" 
                  : "bg-white text-gray-900 hover:shadow-xl shadow-gray-200"
              }`}
            >
              시작하기
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            className="md:hidden flex flex-col items-end gap-1.5 p-2 relative z-50"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className={`w-6 h-0.5 transition-all duration-500 ${scrolled || menuOpen ? "bg-gray-900" : "bg-white"} ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <div className={`w-4 h-0.5 transition-all duration-500 ${scrolled || menuOpen ? "bg-gray-900" : "bg-white"} ${menuOpen ? "opacity-0" : ""}`} />
            <div className={`w-6 h-0.5 transition-all duration-500 ${scrolled || menuOpen ? "bg-gray-900" : "bg-white"} ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </motion.nav>
      </header>

      {/* Modern Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-white flex flex-col p-8 pt-32"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  onClick={() => handleNav(link.href)}
                  className="text-xl font-black text-gray-900 hover:text-indigo-600 transition-colors tracking-tighter text-left"
                >
                  {link.label}
                </motion.button>
              ))}
            </div>

            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-auto"
            >
              <button 
                onClick={() => handleNav("#cta")}
                className="w-full bg-gray-900 text-white py-3 rounded-2xl text-lg font-black uppercase tracking-widest"
              >
                무료 상담 시작하기
              </button>
              <p className="text-center text-gray-400 mt-8 text-xs font-bold tracking-widest uppercase">
                Seoul, Korea · Ricco Studio
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
