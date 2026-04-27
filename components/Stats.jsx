"use client";
import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";

function RollingDigit({ value }) {
  return (
    <div className="relative inline-block overflow-hidden h-[1.1em] leading-none">
      <AnimatePresence mode="popLayout">
        <motion.span
          key={value}
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="inline-block"
        >
          {value}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

function RollingCounter({ value, suffix = "" }) {
  const digits = value.toString().split("");
  
  return (
    <div className="flex items-baseline overflow-hidden">
      {digits.map((digit, i) => (
        <RollingDigit key={`${i}-${digit}`} value={digit} />
      ))}
      <span className="ml-1">{suffix}</span>
    </div>
  );
}

const initialStats = [
  { label: "성공적인 프로젝트", value: 250, suffix: "+", desc: "국내외 유수의 기업들과 함께한 혁신적 결과물" },
  { label: "전문가 팀원", value: 45, suffix: "명", desc: "디자인, 개발, 기획 분야의 최고 수준 전문가들" },
  { label: "고객 만족도", value: 98, suffix: "%", desc: "협업 파트너들의 지속적인 신뢰와 높은 평가" },
  { label: "어워즈 수상", value: 12, suffix: "+", desc: "글로벌 디자인 어워즈에서의 전문성 입증" },
];

export default function Stats() {
  const [statsData, setStatsData] = useState(initialStats);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  // Auto update one stat every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setStatsData(prev => {
        const randomIndex = Math.floor(Math.random() * prev.length);
        const newData = [...prev];
        // Only increment projects or awards slightly for realism
        if (randomIndex === 0 || randomIndex === 3) {
          newData[randomIndex] = { ...newData[randomIndex], value: newData[randomIndex].value + 1 };
        } else if (randomIndex === 1 && Math.random() > 0.7) {
          newData[randomIndex] = { ...newData[randomIndex], value: newData[randomIndex].value + 1 };
        }
        return newData;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={containerRef} className="relative py-32 bg-[#050505] overflow-hidden">
      {/* Background Tech Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full" style={{ 
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)`,
          backgroundSize: '40px 40px' 
        }} />
      </div>

      <div className="container-main relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {statsData.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="group relative flex flex-col items-center md:items-start text-center md:text-left"
            >
              {/* Animated Line */}
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                className="h-[1px] bg-gradient-to-r from-indigo-500 to-transparent mb-8 w-full" 
              />

              <div className="flex items-baseline gap-1 mb-4">
                <div className="text-6xl md:text-7xl font-black text-white tracking-tighter">
                  <RollingCounter value={stat.value} suffix={stat.suffix} />
                </div>
              </div>
              
              <h3 className="text-sm font-black tracking-[0.3em] uppercase text-indigo-400 mb-4">
                {stat.label}
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed max-w-[200px]">
                {stat.desc}
              </p>

              {/* Hover Glow */}
              <div className="absolute -inset-4 bg-indigo-500/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl -z-10" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Parallax Floating Text */}
      <motion.div 
        style={{ y, opacity: 0.03 }}
        className="absolute top-0 right-0 text-[20vw] font-black text-white pointer-events-none select-none leading-none whitespace-nowrap"
      >
        DATA DRIVEN
      </motion.div>
    </section>
  );
}

