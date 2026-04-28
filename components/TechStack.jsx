"use client";
import { motion } from "framer-motion";
import { 
  SiNextdotjs, 
  SiTailwindcss, 
  SiFramer, 
  SiJavascript, 
  SiTypescript, 
  SiPostgresql, 
  SiPrisma,
  SiFigma
} from "react-icons/si";
import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";

const techLogos = [
  { icon: SiNextdotjs, name: "Next.js", color: "#000000" },
  { icon: FaReact, name: "React", color: "#61DAFB" },
  { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" },
  { icon: SiFramer, name: "Framer", color: "#0055FF" },
  { icon: FaNodeJs, name: "Node.js", color: "#339933" },
  { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
  { icon: SiPostgresql, name: "PostgreSQL", color: "#4169E1" },
  { icon: SiPrisma, name: "Prisma", color: "#2D3748" },
  { icon: SiFigma, name: "Figma", color: "#F24E1E" },
  { icon: FaPython, name: "Python", color: "#3776AB" },
];

export default function TechStack() {
  return (
    <section className="lg:py-24 py-12 bg-white overflow-hidden border-t border-gray-100">
      <div className="container-main mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
          <span className="text-[10px] font-black tracking-widest text-indigo-600 uppercase">기술 스택</span>
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl mb-8 font-black text-gray-900 tracking-tighter"
        >
          우리가 사용하는 <span className="gradient-text">핵심 기술</span>
        </motion.h2>
      </div>

      {/* Infinite Marquee */}
      <div className="relative flex overflow-hidden">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap gap-8 md:gap-12 items-center py-4"
        >
          {[...techLogos, ...techLogos].map((tech, i) => (
            <div 
              key={i} 
              className="flex items-center gap-3 md:gap-4 group cursor-pointer px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl hover:bg-gray-50 transition-colors"
            >
              <tech.icon 
                className="text-3xl md:text-5xl transition-all duration-500 filter grayscale group-hover:grayscale-0" 
                style={{ color: tech.color }}
              />
              <span className="text-lg md:text-2xl font-black text-gray-300 group-hover:text-gray-900 transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
