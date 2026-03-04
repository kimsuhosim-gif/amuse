"use client";

import { motion } from "framer-motion";

export default function Marquee() {
    return (
        <div className="relative flex overflow-hidden border-y border-zinc-100 bg-white py-6 md:py-8 mt-12 mb-20 md:mt-24 md:mb-32 w-full mix-blend-difference z-20">
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
                        <span className="font-display text-4xl md:text-6xl text-zinc-100 uppercase tracking-wide opacity-50 [-webkit-text-stroke:1px_#dbd5ce] truncate">Amuse Aerial Studio</span>
                        <span className="text-xl md:text-2xl text-[#ab9885]">✦</span>
                        <span className="font-display text-4xl md:text-6xl text-zinc-100 uppercase tracking-wide opacity-50 [-webkit-text-stroke:1px_#dbd5ce]">Pole Dance</span>
                        <span className="text-xl md:text-2xl text-[#ab9885]">✦</span>
                        <span className="font-display text-4xl md:text-6xl text-zinc-100 uppercase tracking-wide opacity-50 [-webkit-text-stroke:1px_#dbd5ce]">Flying Yoga</span>
                        <span className="text-xl md:text-2xl text-[#ab9885]">✦</span>
                        <span className="font-display text-4xl md:text-6xl text-zinc-100 uppercase tracking-wide opacity-50 [-webkit-text-stroke:1px_#dbd5ce]">Premium Space</span>
                        <span className="text-xl md:text-2xl text-[#ab9885]">✦</span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
