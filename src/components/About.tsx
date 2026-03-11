// file: src/components/About.tsx
"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const philosophyItems = [
  {
    title: "가장 안전한 환경",
    subtitle: "프리미엄 안전 시공",
    description: "정품 안전 매트를 전면 사용하며 유러피안 루핏폴을 설치하여 체력에 온전히 집중할 수 있는 안전한 환경을 제공합니다.",
  },
  {
    title: "당신에게 집중하는 수업",
    subtitle: "소수 정예 클래스",
    description: "획일화된 수업이 아닌 1:1, 2:1, 9:1 그룹 레슨 등 당신의 호흡과 자세, 성장에만 온전히 맞춘 프라이빗 레슨 경험을 선사합니다.",
  },
  {
    title: "움직임 속 즐거움",
    subtitle: "즐거움의 공간",
    description: "2022년부터 지켜온 아뮤즈만의 철학. 단순한 운동을 넘어 당신의 일상 속 마음까지 미소 짓게 하는 영감의 공간이 되겠습니다.",
  },
];

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Create a parallax effect by moving the image slightly as user scrolls
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section id="about" className="bg-tier-1 relative py-20 md:py-40" aria-label="필로소피">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_12%,rgba(190,163,150,0.11),transparent_35%),radial-gradient(circle_at_86%_20%,rgba(190,163,150,0.08),transparent_28%)]" />
      <div className="mx-auto w-full max-w-[85rem] px-6 lg:px-12">
        {/* Section Header */}
        <div className="relative z-10 mb-14 flex flex-col justify-between gap-8 md:mb-24 md:flex-row md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="md:max-w-3xl"
          >
            <p className="section-eyebrow mb-5">Philosophy</p>
            <h2 className="section-title">
              몸과 마음이 편안해지는 아뮤즈의 클래스
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="section-lead panel max-w-md rounded-2xl px-5 py-5"
          >
            아뮤즈 폴댄스&플라잉요가는 완벽한 자세를 강요하기보다, 당신만의 호흡과 속도로 나아갈 수 있는 가장 안전하고 아름다운 안식처를 제공합니다.
          </motion.p>
        </div>

        {/* Philosophy Grid */}
        <div className="relative z-10 mt-10 grid gap-5 md:grid-cols-3 md:gap-7">
          {philosophyItems.map((item, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.15 + 0.2 }}
              className="panel group flex flex-col rounded-3xl p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#ceb7a8] hover:shadow-[var(--elev-2)] md:p-8"
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="text-[11px] font-semibold tracking-[0.15em] text-[#b29384]">0{i + 1}</span>
                <span className="h-[1px] w-16 bg-[#d9c7ba] transition-all duration-500 group-hover:w-24" />
              </div>
              <h3 className="mb-2 font-display text-[1.54rem] leading-[1.25] text-zinc-900">{item.title}</h3>
              <p className="mb-5 text-[11px] font-semibold tracking-[0.08em] text-[#8f7e73]">{item.subtitle}</p>
              <p className="text-[0.95rem] leading-[1.78] font-light text-zinc-600">
                {item.description}
              </p>
            </motion.article>
          ))}
        </div>

        {/* Large Decorative Image Area */}
        <div ref={containerRef} className="relative z-10 mt-20 w-full overflow-hidden rounded-[2.2rem] aspect-[16/9] md:mt-24 md:aspect-[21/9]">
          <motion.div
            style={{ y }}
            className="absolute inset-x-0 -inset-y-[15%] w-full h-[130%]"
          >
            <Image
              src="/images/design-image.jpeg"
              alt="Amuse detail"
              fill
              className="object-cover object-center"
              sizes="100vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
