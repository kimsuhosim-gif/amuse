// file: src/components/Hero.tsx
"use client";

import { MoveRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden" aria-label="메인 소개">
      {/* Background - Real high-res photo (4K), NOT AI generated */}
      <div className="absolute inset-0">
        <img
          src="/images/hero.jpeg"
          alt="아뮤즈 스튜디오 - 폴댄스 & 에어리얼 요가"
          className="h-full w-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Logo */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative w-[200px] h-[200px] md:w-[280px] md:h-[280px]"
            style={{ mixBlendMode: "screen" }}>
            <img
              src="/images/logo.jpg"
              alt="AMUSE Studio Logo"
              className="w-full h-full object-contain invert"
            />
          </div>
        </motion.div>
      </div>

      {/* CTA Button */}
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-24 md:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-8"
        >
          <a
            href="https://booking.naver.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-4 overflow-hidden rounded-full bg-white/10 backdrop-blur-md px-10 py-5 text-xs font-light tracking-[0.25em] text-white border border-white/20 transition-all duration-500 hover:bg-white hover:text-black"
            aria-label="네이버 예약"
          >
            <span className="relative flex items-center uppercase">Experience Premium Class</span>
            <MoveRight strokeWidth={1.5} size={18} className="relative transition-transform duration-500 group-hover:translate-x-2" />
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1.5 }}
        className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] text-white/50">Scroll to discover</span>
        <div className="h-14 w-[1px] bg-white/20 overflow-hidden">
          <motion.div
            animate={{ y: ["-100%", "200%"] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="h-1/2 w-full bg-white/80"
          />
        </div>
      </motion.div>
    </section>
  );
}
