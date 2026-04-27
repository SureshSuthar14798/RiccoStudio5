"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    id: "ui-ux",
    title: "UI/UX 디자인",
    desc: "매혹적인 인터페이스와 직관적인 사용자 경험을 설계하여 브랜드의 가치를 시각적으로 극대화합니다.",
    color: "from-indigo-500 to-violet-600",
    size: "lg",
    image: "/services/ui-ux.png"
  },
  {
    id: "web-dev",
    title: "웹/앱 개발",
    desc: "최첨단 기술력을 바탕으로 고성능 웹/앱 환경을 구축합니다.",
    color: "from-cyan-500 to-blue-600",
    size: "sm",
    image: "/services/web-dev.png"
  },
  {
    id: "branding",
    title: "브랜딩",
    desc: "브랜드의 정체성을 정의하고 시장에서 압도적인 존재감을 부여합니다.",
    color: "from-violet-500 to-purple-600",
    size: "sm",
    image: "/services/branding.png"
  },
  {
    id: "strategy",
    title: "전략 수립",
    desc: "데이터 기반의 비즈니스 전략으로 시장 우위를 점유할 수 있는 솔루션을 제안합니다.",
    color: "from-orange-500 to-pink-600",
    size: "md",
    image: "/services/strategy.png"
  },
];

export default function Services() {
  return (
    <section id="services" className="section-pad bg-white overflow-hidden">
      <div className="container-main">
        {/* Header */}
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-5xl md:text-7xl font-black text-gray-900 leading-[0.85] tracking-tight">
              전문적인 <span className="gradient-text italic">전문성.</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="max-w-sm text-gray-400 font-medium leading-relaxed uppercase tracking-widest text-xs"
          >
            우리는 기술과 디자인의 완벽한 융합을 통해 디지털 세상에서의 무한한 가능성을 현실로 구현합니다.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-3 gap-6 auto-rows-[280px]">
          {services.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className={`group relative p-10 rounded-[40px] bg-[#0a0a0a] border border-white/5 flex flex-col justify-between overflow-hidden cursor-pointer ${
                s.size === "lg" ? "md:col-span-2 md:row-span-2" : s.size === "md" ? "md:col-span-2" : ""
              }`}
            >
              {/* Background Glow */}
              <div className={`absolute top-0 right-0 w-80 h-80 bg-gradient-to-br ${s.color} opacity-0 group-hover:opacity-20 transition-opacity duration-700 blur-[100px] -translate-y-1/2 translate-x-1/2`} />

              {/* Service Image Background */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 pointer-events-none"
                />
                {/* Dark Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-500" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 backdrop-blur-[2px] transition-all duration-500" />
              </div>

              <div className="relative z-10">
                <h3 className={`font-black text-white tracking-tighter mb-4 ${s.size === "lg" ? "text-4xl" : "text-2xl"}`}>
                  {s.title}
                </h3>
                <p className="text-gray-300 font-medium leading-relaxed max-w-[320px] opacity-80 group-hover:opacity-100 transition-opacity">
                  {s.desc}
                </p>
              </div>

              {/* Icon / Footer */}
              <div className="flex items-center justify-between relative z-10">
                <div className={`w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white shadow-sm group-hover:bg-white group-hover:text-black transition-all duration-500`}>
                  <svg width="20" height="20" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12l5-5-5-5"/>
                  </svg>
                </div>
                <span className="text-[10px] font-black tracking-[0.3em] text-white/40 uppercase">서비스 0{i+1}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
