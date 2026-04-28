"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";

const categories = ["전체", "웹", "모바일", "브랜딩"];

const projects = [
  {
    id: 1,
    title: "루나 커머스",
    category: "웹",
    year: "2026",
    tags: ["넥스트 JS", "이커머스"],
    image: "/projects/luna.png",
    accent: "#6366f1",
  },
  {
    id: 2,
    title: "제로 앱",
    category: "모바일",
    year: "2026",
    tags: ["리액트 네이티브", "핀테크"],
    image: "/projects/zero.png",
    accent: "#06b6d4",
  },
  {
    id: 3,
    title: "아크 브랜딩",
    category: "브랜딩",
    year: "2023",
    tags: ["브랜드 아이덴티티", "로고"],
    image: "/projects/arc.png",
    accent: "#8b5cf6",
  },
  {
    id: 4,
    title: "넥서스 플랫폼",
    category: "웹",
    year: "2023",
    tags: ["리액트", "SaaS"],
    image: "/projects/nexus.png",
    accent: "#10b981",
  },
  {
    id: 5,
    title: "펄스 모바일",
    category: "모바일",
    year: "2023",
    tags: ["스위프트", "헬스"],
    image: "/projects/pulse.png",
    accent: "#f97316",
  },
  {
    id: 6,
    title: "노바 아이덴티티",
    category: "브랜딩",
    year: "2022",
    tags: ["브랜딩", "전략"],
    image: "/projects/nova.png",
    accent: "#f43f5e",
  },
];

function ProjectCard({ p, i }) {
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;

    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      layout
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 30 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.05 }}
      className="group relative rounded-3xl overflow-hidden cursor-pointer aspect-[4/3] bg-gray-100 shadow-lg shadow-gray-200/50"
      id={`portfolio-item-${p.id}`}
    >
      {/* Project Image */}
      <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
        <Image
          src={p.image}
          alt={p.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Glass Overlay on Hover */}
      <div 
        className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ transform: "translateZ(20px)" }}
      />

      {/* Content */}
      <div 
        className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent"
        style={{ transform: "translateZ(40px)" }}
      >
        <div className="flex gap-2 mb-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-75">
          {p.tags.map((t) => (
            <span key={t} className="text-[10px] px-3 py-1 rounded-full bg-white/10 text-white font-semibold backdrop-blur-md border border-white/10 uppercase tracking-wider">
              {t}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-black text-white mb-1 tracking-tight">{p.title}</h3>
        <div className="flex items-center justify-between">
          <p className="text-white/60 text-sm font-medium">{p.year}</p>
          
          <motion.div
            className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20 opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-500"
          >
            <svg width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 13L13 3M13 3H6M13 3v7"/>
            </svg>
          </motion.div>
        </div>
      </div>

      {/* Glossy Reflection */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none bg-gradient-to-tr from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full" style={{ transitionDuration: '1.2s' }} />
    </motion.div>
  );
}

export default function Portfolio() {
  const [active, setActive] = useState("전체");

  const filtered = active === "전체" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="section-pad bg-white relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[300px] h-[600px] bg-indigo-50/50 blur-3xl -translate-y-1/2 translate-x-2/3 pointer-events-none" />

      <div className="container-main">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-4"
        >
          <span className="section-label">포트폴리오</span>
        </motion.div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-8 md:mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-[0.9] lg:leading-[0.85] tracking-tight"
          >
            엄선된 <br className="md:hidden" /> <span className="gradient-text italic">작업</span>
          </motion.h2>

          {/* Filter tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="flex items-center gap-2 overflow-x-auto pb-4 md:pb-0 scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-6 py-2.5 rounded-full text-[10px] md:text-xs font-black whitespace-nowrap uppercase tracking-widest transition-all duration-300 ${
                  active === cat
                    ? "bg-gray-900 text-white shadow-xl shadow-gray-200"
                    : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <ProjectCard key={p.id} p={p} i={i} />
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mt-14"
        >
          <button className="btn-secondary" id="portfolio-all-btn">
            모든 작업 보기
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 7h10M8 3l4 4-4 4"/>
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
