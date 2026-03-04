"use client";

import { motion } from "framer-motion";

export default function Marquee() {
    return (
        <div className="relative flex overflow-hidden border-y border-zinc-200 bg-[#1a1918] py-8 md:py-10 mt-12 mb-20 md:mt-24 md:mb-32 w-full z-20">
            <motion.div
                className="flex whitespace-nowrap"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 25,
                }}
            >
                {/* We duplicate the text twice to ensure seamless looping */}
                {[...Array(2)].map((_, index) => (
                    <div key={index} className="flex gap-12 md:gap-24 px-6 md:px-12 items-center">
                        <span className="font-display text-4xl md:text-6xl text-transparent [-webkit-text-stroke:1.5px_#ab9885] uppercase tracking-wider opacity-80 truncate">Amuse Aerial Studio</span>
                        <span className="text-xl md:text-2xl text-white opacity-50">✦</span>
                        <span className="font-display text-4xl md:text-6xl text-transparent [-webkit-text-stroke:1.5px_#ab9885] uppercase tracking-wider opacity-80">Pole Dance</span>
                        <span className="text-xl md:text-2xl text-white opacity-50">✦</span>
                        <span className="font-display text-4xl md:text-6xl text-transparent [-webkit-text-stroke:1.5px_#ab9885] uppercase tracking-wider opacity-80">Flying Yoga</span>
                        <span className="text-xl md:text-2xl text-white opacity-50">✦</span>
                        <span className="font-display text-4xl md:text-6xl text-transparent [-webkit-text-stroke:1.5px_#ab9885] uppercase tracking-wider opacity-80">Premium Space</span>
                        <span className="text-xl md:text-2xl text-white opacity-50">✦</span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
