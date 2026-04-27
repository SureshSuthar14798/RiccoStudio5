"use client";
import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import Image from "next/image";

function MagneticElement({ children, range = 50 }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distX = clientX - centerX;
    const distY = clientY - centerY;
    
    if (Math.abs(distX) < range * 2 && Math.abs(distY) < range * 2) {
      x.set(distX * 0.4);
      y.set(distY * 0.4);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
    >
      {children}
    </motion.div>
  );
}

function TiltCard({ children, className }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Use springs for smooth rotation transitions
  const rotateX = useSpring(useTransform(y, [-100, 100], [10, -10]), { stiffness: 100, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-10, 10]), { stiffness: 100, damping: 30 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = (mouseX / width - 0.5) * 200;
    const yPct = (mouseY / height - 0.5) * 200;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`${className} will-change-transform`}
    >
      {children}
    </motion.div>
  );
}

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const yTranslate = useTransform(scrollY, [0, 800], [0, -200]);
  const scale = useTransform(scrollY, [0, 800], [1, 0.85]);
  const rotate = useTransform(scrollY, [0, 800], [0, 5]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center bg-[#050505] overflow-hidden pt-32 pb-24">
      {/* Amazing Liquid Mesh Background Animation */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Tech Background Image with Parallax */}
        <motion.div 
          style={{ y: useTransform(scrollY, [0, 800], [0, 100]), scale: 1.05 }}
          className="absolute inset-0 z-0 will-change-transform"
        >
          <Image 
            src="/hero-bg.png" 
            alt="Tech Background" 
            fill 
            sizes="100vw"
            className="object-cover opacity-30"
            priority
          />
          {/* Gradient Overlay for Text Contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505] opacity-90" />
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>

        {/* Optimized Animated Blobs - Reduced blur for performance */}
        <motion.div
          animate={{
            x: [0, 80, -40, 0],
            y: [0, -40, 80, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-600/10 blur-[80px] mix-blend-screen will-change-transform"
        />
        <motion.div
          animate={{
            x: [0, -100, 60, 0],
            y: [0, 80, -50, 0],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-violet-600/10 blur-[70px] mix-blend-screen will-change-transform"
        />
        
        {/* Simplified Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
      </div>

      {/* Dynamic Background Overlays */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[120%] h-[120%] opacity-[0.05]"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />
        {/* Subtle Tech Grid */}
        <div 
          className="absolute inset-0 opacity-[0.1]" 
          style={{ 
            backgroundImage: `linear-gradient(to right, #4f46e5 1px, transparent 1px), linear-gradient(to bottom, #4f46e5 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }} 
        />
      </div>

      <div className="container-main relative z-10 w-full grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
        {/* Left Side: Text Content */}
        <div className="flex flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="h-[1px] w-12 bg-indigo-500" />
            <span className="text-[11px] font-black tracking-[0.4em] uppercase text-indigo-400">
              크리에이티브 디지털 에이전시
            </span>
          </motion.div>

          <div className="relative mb-10">
            <motion.h1 
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.85] tracking-[-0.04em]"
            >
              상상을 넘어서는
              <br />
              <span className="gradient-text italic">제작.</span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="max-w-lg text-base md:text-lg text-gray-300 font-medium leading-relaxed mb-12"
          >
            우리는 기술과 예술의 경계를 허물며 브랜드의 본질을 혁신적인 디지털 경험으로 재정의합니다.
          </motion.p>

          <div className="flex items-center gap-8">
            <MagneticElement>
              <button 
                onClick={() => document.querySelector("#portfolio")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-gray-900 text-white px-10 py-5 rounded-full text-xs font-black tracking-[0.2em] uppercase hover:bg-indigo-600 transition-colors shadow-2xl shadow-gray-200"
              >
                포트폴리오 보기
              </button>
            </MagneticElement>
            
            <button 
              onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
              className="group flex items-center gap-3 text-xs font-black tracking-[0.2em] uppercase text-white"
            >
              스튜디오 소개
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12l5-5-5-5"/>
                </svg>
              </div>
            </button>
          </div>
        </div>

        {/* Right Side: Amazing Visual */}
        <motion.div
          style={{ y: yTranslate, scale, rotate }}
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="relative hidden lg:block perspective-1000"
        >
          <TiltCard className="relative aspect-[4/5] rounded-[60px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] bg-gray-900">
            <Image 
              src="/hero-3d.png" 
              alt="프리미엄 3D 비주얼" 
              fill 
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover opacity-80 group-hover:scale-110 transition-transform duration-700" 
              priority 
            />
            
            {/* Visual Glass Overlays */}
            <motion.div 
              style={{ transformStyle: "preserve-3d", translateZ: 50 }}
              whileHover={{ translateZ: 80, scale: 1.05 }}
              className="absolute top-10 left-10 glass px-6 py-4 rounded-3xl float shadow-2xl cursor-pointer group"
            >
              <div className="text-lg font-black text-indigo-600 group-hover:text-indigo-400 transition-colors">8년+</div>
              <div className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">경력</div>
            </motion.div>
            
            <motion.div 
              style={{ transformStyle: "preserve-3d", translateZ: 60 }}
              whileHover={{ translateZ: 90, scale: 1.05 }}
              className="absolute bottom-10 right-10 glass px-6 py-4 rounded-3xl cursor-pointer group" 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            >
              <div className="text-lg font-black text-violet-600 group-hover:text-violet-400 transition-colors">150+</div>
              <div className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">성공 사례</div>
            </motion.div>

            {/* Inner Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </TiltCard>

          {/* Background Decoration */}
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-indigo-500/10 blur-[120px] rounded-full" />
        </motion.div>
      </div>

      {/* Side Label */}
      <div className="absolute left-10 bottom-24 hidden xl:block">
        <div className="flex items-center gap-4 origin-left -rotate-90">
          <div className="w-8 h-[1px] bg-gray-200" />
          <span className="text-[9px] font-black tracking-[0.5em] text-gray-300 uppercase">어워즈 오늘의 사이트 2024</span>
        </div>
      </div>
    </section>
  );
}
