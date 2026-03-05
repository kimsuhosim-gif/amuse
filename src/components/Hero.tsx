// file: src/components/Hero.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";


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
        <div className="absolute inset-0 bg-black/5" />
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
