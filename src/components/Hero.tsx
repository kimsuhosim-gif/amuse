// file: src/components/Hero.tsx
"use client";

import { MoveRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-[100dvh] min-h-[600px] w-full overflow-hidden" aria-label="메인 소개">
      {/* Background - Real high-res photo (4K), NOT AI generated */}
      <div className="absolute inset-0">
        {/* Mobile Background */}
        <img
          src="/images/hero_mobile.png"
          alt="아뮤즈 스튜디오 - 폴댄스 & 에어리얼 요가 (모바일)"
          className="block h-full w-full object-cover object-center md:hidden"
          loading="eager"
          fetchPriority="high"
        />
        {/* Desktop Background */}
        <img
          src="/images/hero.jpeg"
          alt="아뮤즈 스튜디오 - 폴댄스 & 에어리얼 요가"
          className="hidden h-full w-full object-cover object-center lg:object-center md:block" // Removed object-[15%_center] as now mobile has its own image and desktop should center normally.
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Logo (Hidden on mobile since hero_mobile.png has logo built-in) */}
      <div className="absolute inset-0 hidden md:flex flex-col items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative w-[220px] h-[220px] md:w-[280px] md:h-[280px]"
            style={{ mixBlendMode: "screen" }}>
            <img
              src="/images/logo.jpg"
              alt="AMUSE Studio Logo"
              className="w-full h-full object-contain invert"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1.5 }}
        className="absolute bottom-[70px] md:bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3"
      >
        <span className="text-[10px] md:text-[9px] uppercase tracking-[0.3em] text-white/70 whitespace-nowrap">Scroll to discover</span>
        <div className="h-10 md:h-14 w-[1px] bg-white/20 overflow-hidden">
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
