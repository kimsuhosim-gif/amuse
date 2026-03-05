// file: src/components/PremiumEffects.tsx
"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function PremiumEffects() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const { scrollYProgress } = useScroll();

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });

            const target = e.target as HTMLElement;
            setIsHovering(
                target.tagName === "BUTTON" ||
                target.tagName === "A" ||
                target.closest("button") !== null ||
                target.closest("a") !== null
            );
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <>
            {/* Scroll Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-[2px] bg-[#bea396] origin-left z-[100]"
                style={{ scaleX }}
            />

            {/* Film Grain Texture Overlay */}
            <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.035] mix-blend-multiply overflow-hidden">
                <div className="absolute inset-[-200%] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat animate-grain" />
            </div>

            {/* Custom Cursor (Hidden on Touch devices) */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 rounded-full border border-[#bea396]/40 pointer-events-none z-[99999] hidden lg:block"
                animate={{
                    x: mousePosition.x - 16,
                    y: mousePosition.y - 16,
                    scale: isHovering ? 2.5 : 1,
                    backgroundColor: isHovering ? "rgba(190, 163, 150, 0.1)" : "rgba(190, 163, 150, 0)",
                }}
                transition={{
                    type: "spring",
                    damping: 30,
                    stiffness: 500,
                    mass: 0.5,
                }}
            />

            <motion.div
                className="fixed top-0 left-0 w-2 h-2 bg-[#bea396] rounded-full pointer-events-none z-[99999] hidden lg:block"
                animate={{
                    x: mousePosition.x - 4,
                    y: mousePosition.y - 4,
                }}
                transition={{
                    type: "spring",
                    damping: 20,
                    stiffness: 1000,
                    mass: 0.1,
                }}
            />

            <style jsx global>{`
                @keyframes grain {
                    0%, 100% { transform: translate(0, 0); }
                    10% { transform: translate(-5%, -10%); }
                    20% { transform: translate(-15%, 5%); }
                    30% { transform: translate(7%, -25%); }
                    40% { transform: translate(-5%, 25%); }
                    50% { transform: translate(-15%, 10%); }
                    60% { transform: translate(15%, 0%); }
                    70% { transform: translate(0%, 15%); }
                    80% { transform: translate(3%, 35%); }
                    90% { transform: translate(-10%, 10%); }
                }
                .animate-grain {
                    animation: grain 8s steps(10) infinite;
                }
                
                /* Global Smooth Reveal Utility */
                .reveal-text {
                    mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
                    mask-size: 100% 200%;
                    mask-position: 0 100%;
                    transition: mask-position 1.2s cubic-bezier(0.16, 1, 0.3, 1);
                }
                .reveal-text.visible {
                    mask-position: 0 0;
                }
            `}</style>
        </>
    );
}
