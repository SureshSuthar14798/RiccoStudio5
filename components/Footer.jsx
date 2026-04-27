"use client";
import { motion } from "framer-motion";

const socials = [
  {
    name: "깃허브",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
      </svg>
    ),
  },
  {
    name: "트위터",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    name: "링크드인",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    name: "드리블",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.816zm-11.62-2.073c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12a28.574 28.574 0 0 0-.663-1.474c-5.155 1.545-10.152 1.48-10.604 1.476a10.08 10.08 0 0 0 2.53 6.883zM2.1 9.47c.462.005 4.778.023 9.61-1.24A68.714 68.714 0 0 0 8.86 3.29c-2.777 1.3-4.88 3.705-5.76 6.18zM10.25 2.53c.52 1.008 2.01 3.99 3.086 7.092 2.94-1.1 4.186-2.77 4.33-2.98A9.967 9.967 0 0 0 10.25 2.53zm6.396 4.91c-.165.23-1.557 2.023-4.6 3.3.186.61.352 1.224.5 1.838.054.226.107.45.157.672 3.376-.424 6.728.257 7.067.334a9.98 9.98 0 0 0-3.124-6.144z"/>
      </svg>
    ),
  },
];

const footerLinks = [
  {
    group: "서비스",
    links: [
      { label: "UI/UX 디자인", href: "#services" },
      { label: "웹 개발", href: "#services" },
      { label: "브랜딩", href: "#services" },
      { label: "모바일 앱", href: "#services" },
    ],
  },
  {
    group: "회사",
    links: [
      { label: "소개", href: "#about" },
      { label: "포트폴리오", href: "#portfolio" },
      { label: "프로세스", href: "#process" },
      { label: "문의", href: "#cta" },
    ],
  },
  {
    group: "법적 고지",
    links: [
      { label: "개인정보처리방침", href: "#" },
      { label: "이용약관", href: "#" },
      { label: "쿠키 정책", href: "#" },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (href) => {
    if (href === "#") return;
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-950 text-white relative overflow-hidden">
      {/* Top gradient line */}
      <div className="h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />

      {/* Background orb */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="container-main relative">
        {/* Main footer grid */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2"
          >
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className="flex items-center gap-2.5 mb-5 group"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-lg shadow-indigo-900/50 group-hover:shadow-indigo-500/40 transition-shadow duration-300">
                <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                  <path d="M3 3L8 1L13 3V8C13 11.3 10.5 13.7 8 15C5.5 13.7 3 11.3 3 8V3Z" fill="white" opacity="0.9"/>
                  <path d="M6 7.5L7.5 9L10 6.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="font-bold text-base tracking-tight">
                리코<span className="gradient-text">스튜디오</span>
              </span>
            </a>

            <p className="text-gray-400 text-xs leading-relaxed mb-6 max-w-xs">
              디지털 혁신을 이끄는 프리미엄 IT 스튜디오. 최고의 경험을 만듭니다.
            </p>

            {/* Socials */}
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-indigo-600/30 hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-0.5"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Links */}
          {footerLinks.map((group, gi) => (
            <motion.div
              key={group.group}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 + gi * 0.1 }}
            >
              <h4 className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-5">
                {group.group}
              </h4>
              <ul className="flex flex-col gap-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollTo(link.href)}
                      className="text-sm text-gray-400 hover:text-white transition-colors duration-300 link-hover text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-gray-600 text-xs"
          >
            © {year} 리코 스튜디오. 모든 권리 보유.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-2 text-xs text-gray-600"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" style={{ boxShadow: "0 0 6px #10b981" }} />
            모든 시스템 정상 운영 중
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
