"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { HiArrowRight } from "react-icons/hi2";

const services = [
  {
    id: "01",
    title: "UI/UX 엔지니어링",
    subtitle: "사용자 중심의 테크니컬 인터페이스 설계",
    desc: "모던 IT 오피스 환경에서 최신 설계 도구를 사용하여 복잡한 소프트웨어 아키텍처를 직관적인 사용자 경험으로 변환합니다.",
    image: "/services/ui-ux.png",
    color: "#6366f1",
  },
  {
    id: "02",
    title: "풀스택 소프트웨어 개발",
    subtitle: "고성능 시스템 및 애플리케이션 구축",
    desc: "React, Next.js, 그리고 최신 프로그래밍 언어를 사용하여 확장 가능하고 견고한 엔터프라이즈급 소프트웨어 솔루션을 개발합니다.",
    image: "/services/web-dev.png",
    color: "#06b6d4",
  },
  {
    id: "03",
    title: "클라우드 인프라",
    subtitle: "효율적인 시스템 아키텍처 설계",
    desc: "데이터를 안정적으로 관리하고 확장할 수 있는 현대적인 클라우드 환경과 시스템 인프라를 구축합니다.",
    image: "/services/strategy.png",
    color: "#8b5cf6",
  },
  {
    id: "04",
    title: "테크니컬 브랜딩",
    subtitle: "기술 기업을 위한 고유한 정체성",
    desc: "기술적 전문성과 혁신이 돋보이는 브랜드 아이덴티티를 구축하여 시장에서 차별화된 테크 이미지를 완성합니다.",
    image: "/services/branding.png",
    color: "#f43f5e",
  },
];

function ServiceCard({ s, index }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="group relative border-b border-gray-100 py-5 md:py-20 cursor-pointer overflow-hidden"
    >
      <div className="container-main relative z-10 grid lg:grid-cols-[0.5fr_1.5fr_0.5fr] items-center gap-6 md:gap-12">
        {/* Number & Arrow for Mobile Row */}
        <div className="flex items-center justify-between lg:block">
          <span className="text-sm md:text-xl font-black text-gray-200 group-hover:text-indigo-500 transition-colors duration-500">
            {s.id}
          </span>
          {/* Arrow for Mobile only */}
          <div className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center lg:hidden">
            <HiArrowRight className="text-lg -rotate-45" />
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-2 md:gap-4">
          <h3 className="text-2xl md:text-6xl font-black text-gray-900 tracking-tighter group-hover:translate-x-4 transition-transform duration-700 ease-out">
            {s.title}
          </h3>
          <p className="text-gray-400 text-[10px] md:text-lg font-medium tracking-tight max-w-xl group-hover:text-gray-600 transition-colors duration-500">
            {s.subtitle}
          </p>
        </div>

        {/* Arrow for Desktop */}
        <div className="hidden lg:flex justify-end">
          <div className="w-16 h-16 rounded-full border border-gray-100 flex items-center justify-center group-hover:bg-gray-900 group-hover:text-white group-hover:border-gray-900 transition-all duration-500">
            <HiArrowRight className="text-2xl -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
          </div>
        </div>
      </div>

      {/* Hover Image Reveal */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: "20%", rotate: 5 }}
            animate={{ opacity: 1, scale: 1, x: "0%", rotate: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: "20%", rotate: 5 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute right-[15%] top-1/2 -translate-y-1/2 w-[300px] md:w-[450px] aspect-video rounded-3xl overflow-hidden shadow-2xl pointer-events-none hidden lg:block z-20"
          >
            <Image 
              src={s.image} 
              alt={s.title} 
              fill 
              className="object-cover"
              sizes="450px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Accent */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-[0.02] transition-opacity duration-700 -z-10" 
        style={{ backgroundColor: s.color }}
      />
    </motion.div>
  );
}

export default function Services() {
  const containerRef = useRef(null);

  return (
    <section id="services" ref={containerRef} className="pb-0 py-20 md:py-32 bg-white overflow-hidden">
      <div className="container-main mb-12 md:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-12"
        >
          <div className="max-w-2xl">
            <span className="text-[10px] font-black tracking-[0.4em] uppercase text-indigo-500 mb-4 md:mb-6 block">Our Expertise</span>
            <h2 className="text-4xl md:text-8xl font-black text-gray-900 leading-[0.9] md:leading-[0.85] tracking-tighter">
              세상을 변화시키는 <br />
              <span className="gradient-text italic">디지털 전문성.</span>
            </h2>
          </div>
          <p className="max-w-sm text-gray-400 text-xs md:text-sm font-medium leading-relaxed">
            우리는 혁신적인 기술과 창의적인 디자인의 경계에서 브랜드의 무한한 가능성을 현실로 구현합니다.
          </p>
        </motion.div>
      </div>

      <div className="border-t border-gray-100">
        {services.map((s, i) => (
          <ServiceCard key={s.id} s={s} index={i} />
        ))}
      </div>
    </section>
  );
}
