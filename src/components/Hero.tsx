// file: src/components/Hero.tsx
"use client";

import { MoveRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-[100dvh] min-h-[600px] w-full overflow-hidden" aria-label="메인 소개">
      {/* Background - Real high-res photo (4K), NOT AI generated */}
      <div className="absolute inset-0">
        <img
          src="/images/hero.jpeg"
          alt="아뮤즈 스튜디오 - 폴댄스 & 에어리얼 요가"
          className="h-full w-full object-cover object-[15%_center] lg:object-center"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Logo */}
      <div className="absolute inset-0 flex flex-col items-center justify-center -mt-10 md:mt-0 px-4">
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
