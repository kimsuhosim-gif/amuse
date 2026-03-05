// file: src/components/Hero.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MoveRight } from "lucide-react";


export default function Hero() {
  return (
    <section className="relative h-[100dvh] min-h-[600px] w-full overflow-hidden" aria-label="메인 소개">
      {/* Background - Real high-res photo (4K), NOT AI generated */}
      <div className="absolute inset-0">
        {/* Desktop Image */}
        <div className="hidden md:block absolute inset-0">
          <Image
            src="/images/hero-final-v1.png"
            alt="Amuse Aerial Studio Hero"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
        {/* Mobile Image */}
        <div className="md:hidden absolute inset-0">
          <Image
            src="/images/hero-mobile-final-v1.png"
            alt="Amuse Aerial Studio Hero Mobile"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Hero Content Overlay */}
      <div className="relative z-20 flex h-full flex-col justify-end px-6 pb-24 md:px-12 md:pb-32">
        <div className="mx-auto w-full max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-start gap-6 md:gap-8"
          >
            <div className="flex flex-col gap-2 md:gap-4">
              <span className="text-[11px] font-semibold uppercase tracking-[0.4em] text-[#bea396]/90">
                Premium Aerial & Pole Studio
              </span>
              <h1 className="font-display text-5xl leading-[1.1] text-white sm:text-7xl lg:text-8xl">
                Elevate your <br />
                <span className="italic font-light text-[#bea396]">everyday flow</span>
              </h1>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#studios"
                className="group flex items-center justify-center gap-3 rounded-full bg-[#bea396] px-8 py-4 text-[13px] font-bold uppercase tracking-widest text-zinc-900 transition-all hover:bg-white"
              >
                <span>시작하기</span>
                <MoveRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#about"
                className="flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-4 text-[13px] font-bold uppercase tracking-widest text-white backdrop-blur-md transition-all hover:bg-white/10"
              >
                철학 확인
              </a>
            </motion.div>
          </motion.div>
        </div>
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
