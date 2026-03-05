// file: src/components/PremiumEffects.tsx
"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

export default function PremiumEffects() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const prefersReducedMotion = useReducedMotion();
  const [useFinePointer, setUseFinePointer] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const dotX = useSpring(cursorX, { stiffness: 900, damping: 38, mass: 0.12 });
  const dotY = useSpring(cursorY, { stiffness: 900, damping: 38, mass: 0.12 });
  const ringX = useSpring(cursorX, { stiffness: 460, damping: 34, mass: 0.5 });
  const ringY = useSpring(cursorY, { stiffness: 460, damping: 34, mass: 0.5 });

  const hoverScale = useMotionValue(1);
  const hoverBgAlpha = useMotionValue(0);
  const ringScale = useSpring(hoverScale, { stiffness: 420, damping: 28, mass: 0.45 });
  const ringBg = useTransform(hoverBgAlpha, (v) => `rgba(190, 163, 150, ${v})`);

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine)");

    const syncPointerMode = () => {
      setUseFinePointer(media.matches && !prefersReducedMotion);
    };

    syncPointerMode();
    media.addEventListener("change", syncPointerMode);
    return () => media.removeEventListener("change", syncPointerMode);
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (!useFinePointer) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      const target = e.target as HTMLElement | null;
      const hoveringInteractive = !!target?.closest("a,button,[role='button']");
      hoverScale.set(hoveringInteractive ? 2.2 : 1);
      hoverBgAlpha.set(hoveringInteractive ? 0.1 : 0);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [cursorX, cursorY, hoverBgAlpha, hoverScale, useFinePointer]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-[#bea396] origin-left z-[100]"
        style={{ scaleX }}
      />

      {!prefersReducedMotion && (
        <div className="pointer-events-none fixed inset-0 z-[45] hidden lg:block" aria-hidden="true">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(190,163,150,0.08),transparent_38%),radial-gradient(circle_at_82%_70%,rgba(190,163,150,0.07),transparent_35%)]" />
        </div>
      )}

      {useFinePointer && (
        <>
          <motion.div
            className="pointer-events-none fixed top-0 left-0 z-[99999] hidden h-8 w-8 rounded-full border border-[#bea396]/40 lg:block"
            style={{
              x: ringX,
              y: ringY,
              scale: ringScale,
              backgroundColor: ringBg,
              translateX: "-50%",
              translateY: "-50%",
            }}
            transition={{ type: "spring", damping: 30, stiffness: 500, mass: 0.5 }}
          />

          <motion.div
            className="pointer-events-none fixed top-0 left-0 z-[99999] hidden h-2 w-2 rounded-full bg-[#bea396] lg:block"
            style={{
              x: dotX,
              y: dotY,
              translateX: "-50%",
              translateY: "-50%",
            }}
          />
        </>
      )}

      <style jsx global>{`
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

