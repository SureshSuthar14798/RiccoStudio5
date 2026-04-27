"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSent(true);
      setEmail("");
      setTimeout(() => setSent(false), 4000);
    }
  };

  return (
    <section id="cta" className="relative py-10 lg:py-20 overflow-hidden bg-gray-900">
      {/* Massive Background Text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none">
        <span className="text-[20vw] font-black text-white leading-none tracking-tighter">
          프로젝트
        </span>
      </div>

      {/* Modern Glows */}
      <div className="absolute top-1/4 right-0 w-[40vw] h-[40vw] bg-indigo-500/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[30vw] h-[30vw] bg-violet-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-main relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mb-12"
          >
            <span className="text-[10px] font-black tracking-[0.4em] uppercase text-indigo-400">
              혁신할 준비가 되셨나요?
            </span>
            <div className="h-[1px] w-12 bg-indigo-500 mx-auto mt-4" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-white leading-[0.85] tracking-tighter mb-16"
          >
            꿈을 현실로
            <br />
            <span className="gradient-text italic">실현하세요.</span>
          </motion.h2>

          {/* Minimalist Contact Form */}
          <motion.form
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            onSubmit={handleSubmit}
            className="w-full max-w-2xl relative"
          >
            <div className="relative group">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="이메일 주소를 입력하세요"
                className="w-full bg-transparent border-b border-gray-800 py-6 text-xl md:text-3xl font-black text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-all duration-500 uppercase tracking-tighter"
                required
              />
              <button
                type="submit"
                className="absolute right-0 bottom-6 p-4 rounded-full bg-white text-gray-900 hover:bg-indigo-500 hover:text-white transition-all duration-500 hover:scale-110 active:scale-95"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
            
            {sent && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute left-0 top-full mt-6 text-indigo-400 font-bold tracking-widest text-xs uppercase"
              >
                ✓ 메시지가 전송되었습니다. 곧 연락드리겠습니다.
              </motion.div>
            )}
          </motion.form>

          {/* Footer Subtext */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-10 lg:mt-32 flex gap-12 text-[10px] font-black tracking-[0.2em] text-gray-600 uppercase"
          >
            <span>서울, 대한민국</span>
            <span>2016년 설립</span>
            <span>어워즈 오늘의 사이트</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
