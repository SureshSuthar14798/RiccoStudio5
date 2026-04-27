"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "김민준",
    title: "루나텍 대표",
    quote: "리코 스튜디오와 함께한 프로젝트는 우리 회사의 디지털 전환을 완전히 바꿔놓았습니다. 전문성과 창의성이 완벽하게 조화를 이루고 있습니다.",
  },
  {
    id: 2,
    name: "이서연",
    title: "넥서스 코리아 마케팅 이사",
    quote: "기대 이상의 결과물을 제공했습니다. 세부적인 디테일에 대한 집중력과 타임라인 준수가 인상적이었습니다. 강력히 추천합니다.",
  },
  {
    id: 3,
    name: "박준호",
    title: "아크 스튜디오 설립자",
    quote: "리코 스튜디오는 단순한 개발사가 아닙니다. 진정한 파트너입니다. 우리의 비전을 완벽하게 이해하고 실현시켜 주었습니다.",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="section-pad bg-white overflow-hidden">
      <div className="container-main">
        {/* Aggressive Header */}
        <div className="mb-6 lg:mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 leading-[0.85] tracking-tighter"
          >
            고객의 <span className="gradient-text italic">목소리.</span>
          </motion.h2>
        </div>

        {/* Large Scale Reveal */}
        <div className="relative lg:min-h-[400px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-4xl"
            >
              <div className="text-indigo-500 text-4xl lg:mb-12 font-serif italic">"</div>
              <blockquote className="text-2xl md:text-4xl font-black text-gray-900 leading-[1.2] tracking-tight mb-12">
                {testimonials[current].quote}
              </blockquote>
              
              <div className="flex items-center gap-6">
                <div className="h-[1px] w-12 bg-gray-900" />
                <div>
                  <div className="text-xl font-black text-gray-900 uppercase tracking-tighter">
                    {testimonials[current].name}
                  </div>
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mt-1">
                    {testimonials[current].title}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Indicator */}
          <div className="absolute right-0 bottom-0 flex gap-4">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1 transition-all duration-700 ${
                  i === current ? "w-16 bg-indigo-600" : "w-8 bg-gray-100 hover:bg-gray-200"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
