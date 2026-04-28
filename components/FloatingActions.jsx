"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTelegramPlane, FaRegCommentDots } from "react-icons/fa";
import { HiOutlineArrowNarrowUp } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);

    // Monitor body class for nav-open
    const observer = new MutationObserver(() => {
      setIsNavOpen(document.body.classList.contains("nav-open"));
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <AnimatePresence>
        {!isNavOpen && (
          <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100] flex flex-col gap-3 md:gap-4">
            <AnimatePresence>
              {/* CS Center Toggle */}
              <motion.button
                key="cs"
                onClick={() => setIsModalOpen(true)}
                initial={{ opacity: 0, x: 20, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="w-11 h-11 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow-2xl shadow-indigo-500/20 border border-white/20 backdrop-blur-md relative group"
              >
                <FaRegCommentDots className="text-xl md:text-2xl" />
                <span className="absolute right-full mr-4 px-4 py-2 rounded-xl bg-gray-900/90 backdrop-blur-xl text-white text-[10px] font-black whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none uppercase tracking-[0.2em] translate-x-2 group-hover:translate-x-0">
                  CS Center
                </span>
                {/* <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 border-2 border-[#050505] rounded-full animate-pulse" /> */}
              </motion.button>

              {/* Scroll To Top */}
              {showTop && (
                <motion.button
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 20, scale: 0.8 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={scrollToTop}
                  className="w-11 h-11 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-white text-gray-900 flex items-center justify-center shadow-2xl shadow-black/5 border border-gray-100 group relative"
                >
                  <HiOutlineArrowNarrowUp className="text-xl md:text-2xl" />
                  <span className="absolute right-full mr-4 px-4 py-2 rounded-xl bg-gray-900/90 backdrop-blur-xl text-white text-[10px] font-black whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none uppercase tracking-[0.2em] translate-x-2 group-hover:translate-x-0">
                    Back to Top
                  </span>
                </motion.button>
              )}
            </AnimatePresence>
          </div>
        )}
      </AnimatePresence>

      {/* CS Center Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="fixed inset-0 z-[110] bg-black/40 backdrop-blur-sm"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed inset-0 md:inset-auto md:right-10 md:bottom-32 z-[120] flex items-center justify-center pointer-events-none"
            >
              <div className="w-full h-full md:h-auto md:w-[400px] bg-white md:rounded-[40px] shadow-2xl pointer-events-auto overflow-hidden flex flex-col">
                {/* Header */}
                <div className="p-8 bg-gray-900 text-white relative">
                  <button 
                    onClick={() => setIsModalOpen(false)}
                    className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center"
                  >
                    <IoCloseOutline className="text-2xl" />
                  </button>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-500 flex items-center justify-center text-2xl">
                      💬
                    </div>
                    <div>
                      <h3 className="text-xl font-black tracking-tighter uppercase">CS Center</h3>
                      <p className="text-[10px] font-bold tracking-widest text-indigo-400 uppercase">상담 센터</p>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm font-medium leading-relaxed">
                    리코 스튜디오의 전문가들이 귀하의 비즈니스를 위한 최적의 디지털 솔루션을 안내해 드립니다.
                  </p>
                </div>

                {/* Content */}
                <div className="p-8 space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <a 
                      href="https://t.me/your_telegram_id" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-3 p-6 rounded-3xl bg-gray-50 hover:bg-indigo-50 transition-colors group"
                    >
                      <FaTelegramPlane className="text-3xl text-blue-500 group-hover:scale-110 transition-transform" />
                      <span className="text-xs font-black text-gray-900">실시간 상담</span>
                    </a>
                    <a 
                      href="mailto:contact@riccostudio.com"
                      className="flex flex-col items-center gap-3 p-6 rounded-3xl bg-gray-50 hover:bg-indigo-50 transition-colors group"
                    >
                      <div className="text-3xl group-hover:scale-110 transition-transform">📧</div>
                      <span className="text-xs font-black text-gray-900">메일 문의</span>
                    </a>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-[10px] font-black tracking-widest text-gray-400 uppercase">자주 묻는 질문</h4>
                    <div className="space-y-2">
                      {["프로젝트 진행 기간", "개발 단가 및 견적", "유지보수 서비스"].map((q) => (
                        <button key={q} className="w-full text-left p-4 rounded-2xl border border-gray-100 hover:border-indigo-200 hover:bg-indigo-50/50 transition-all flex items-center justify-between group">
                          <span className="text-sm font-bold text-gray-700">{q}</span>
                          <span className="text-gray-400 group-hover:translate-x-1 transition-transform">→</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="p-8 pt-0 mt-auto">
                  <button 
                    onClick={() => { setIsModalOpen(false); document.querySelector("#cta")?.scrollIntoView({ behavior: "smooth" }); }}
                    className="w-full bg-gray-900 text-white py-5 rounded-2xl text-xs font-black uppercase tracking-[0.2em] hover:bg-indigo-600 transition-colors shadow-xl shadow-gray-200"
                  >
                    문의 신청하기
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
