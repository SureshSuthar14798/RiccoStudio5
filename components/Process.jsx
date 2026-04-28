"use client";
import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "리서치", desc: "시장 분석과 사용자 리서치를 통해 프로젝트의 핵심 본질을 발굴합니다." },
  { num: "02", title: "디자인", desc: "심미적 가치와 사용성을 동시에 충족하는 최상위 디자인을 설계합니다." },
  { num: "03", title: "개발", desc: "견고한 기술력을 바탕으로 고성능 디지털 환경을 완벽하게 구현합니다." },
  { num: "04", title: "런칭", desc: "철저한 검증을 거쳐 최상의 퀄리티로 세상에 선보입니다." },
];

export default function Process() {
  return (
    <section id="process" className="section-pad bg-[#fafafa] overflow-hidden">
      <div className="container-main">
        {/* Header */}
        <div className="mb-32">
          <motion.h2
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 leading-[0.85] tracking-tighter text-right"
          >
            작업 <span className="gradient-text italic">과정</span>
          </motion.h2>
        </div>

        {/* Big Numbers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="relative group pt-16 border-t border-gray-200"
            >
              <span className="absolute top-0 left-0 text-[5rem] font-black text-gray-900/5 group-hover:text-indigo-500/10 transition-colors duration-700 leading-none -translate-y-1/2">
                {s.num}
              </span>
              
              <h3 className="text-2xl font-black text-gray-900 mb-6 tracking-tighter group-hover:text-indigo-600 transition-colors duration-500">
                {s.title}
              </h3>
              
              <p className="text-gray-500 font-medium leading-relaxed">
                {s.desc}
              </p>
              
              <div className="mt-10 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                <div className="h-[1px] w-0 group-hover:w-full bg-gray-200 transition-all duration-1000" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
