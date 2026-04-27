"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const values = [
  { icon: "✦", title: "혁신", desc: "우리는 경계를 넘는 창의적 접근으로 새로운 가능성을 발견합니다." },
  { icon: "◈", title: "탁월함", desc: "세부 사항 하나하나에 집중해 최고의 결과물을 만들어냅니다." },
  { icon: "⬡", title: "파트너십", desc: "장기적 파트너십으로 함께 성장하는 미래를 만듭니다." },
];

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section ref={containerRef} id="about" className="section-pad bg-white overflow-hidden">
      <div className="container-main">
        {/* Large Aesthetic Header */}
        <div className="mb-32 relative">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 leading-[0.85] tracking-tighter mb-12">
              한계를 <span className="gradient-text italic">넘어서.</span>
            </h2>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex flex-col md:flex-row gap-12 items-start justify-between"
          >
            <p className="max-w-2xl text-lg md:text-xl text-gray-500 font-medium leading-relaxed">
              리코 스튜디오는 단순한 디자인을 넘어 가치를 설계합니다. 우리는 기술과 예술의 경계에서 브랜드의 고유한 이야기를 발굴하고, 이를 혁신적인 디지털 솔루션으로 구현합니다.
            </p>
            <div className="flex flex-col items-end">
              <span className="text-[10px] font-black tracking-[0.4em] uppercase text-indigo-500 mb-2">우리의 철학</span>
              <div className="h-[1px] w-24 bg-indigo-500" />
            </div>
          </motion.div>
        </div>

        {/* Visual Split */}
        <div className="grid lg:grid-cols-2 gap-24 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative rounded-[60px] overflow-hidden aspect-[4/5] bg-gray-50 shadow-2xl">
              <Image 
                src="/about-img.png" 
                alt="스튜디오 비전" 
                fill 
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-transparent" />
              </div>
            {/* Decorative Label */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full bg-[#fafafa] border border-gray-100 flex items-center justify-center p-8 text-center shadow-xl">
              <span className="text-[9px] font-black tracking-widest text-gray-400 uppercase leading-relaxed">
                서울 기반 크리에이티브 스튜디오 · 2016년부터
              </span>
            </div>
          </motion.div>

          <div className="flex flex-col gap-16">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
                className="group flex gap-8 items-start"
            >
                <div className="text-4xl text-indigo-500 font-light mt-1 group-hover:scale-125 transition-transform duration-500">{v.icon}</div>
                <div>
              <h3 className="text-2xl font-black text-gray-900 mb-4 tracking-tight uppercase">
                {v.title}
              </h3>
                  <p className="text-gray-500 text-lg leading-relaxed max-w-sm">
                {v.desc}
              </p>
                </div>
            </motion.div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}
