// file: src/components/About.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const philosophyItems = [
  {
    title: "The Safest Environment",
    subtitle: "프리미엄 안전 시공",
    description: "국내 유일하게 정품 안전 매트를 전면 사용하며 유러피안 루핏폴을 설치하여 체력에 온전히 집중할 수 있는 안전한 환경을 제공합니다.",
  },
  {
    title: "Dedicated to You",
    subtitle: "소수 정예 클래스",
    description: "획일화된 수업이 아닌 1:1, 2:1, 9:1 그룹 레슨 등 당신의 호흡과 자세, 성장에만 온전히 맞춘 프라이빗 레슨 경험을 선사합니다.",
  },
  {
    title: "Find Your Smile",
    subtitle: "즐거움의 공간",
    description: "2022년부터 지켜온 아뮤즈만의 철학. 단순한 운동을 넘어 당신의 일상 속 마음까지 미소 짓게 하는 영감의 공간이 되겠습니다.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative bg-[#faf9f7] py-32 md:py-48" aria-label="필로소피">
      <div className="mx-auto w-full max-w-[85rem] px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="md:max-w-2xl"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#ab9885] mb-6">Philosophy</p>
            <h2 className="font-display text-4xl leading-[1.2] text-zinc-900 md:text-6xl lg:text-[4.5rem]">
              Aspace where<br className="hidden md:block" /> body and mind smile
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="max-w-md text-sm font-light leading-relaxed text-zinc-600 md:text-base"
          >
            아뮤즈 에어리얼 스튜디오는 완벽한 자세를 강요하기보다, 당신만의 호흡과 속도로 나아갈 수 있는 가장 안전하고 아름다운 안식처를 제공합니다.
          </motion.p>
        </div>

        {/* Philosophy Grid */}
        <div className="grid gap-x-8 gap-y-16 mt-20 md:grid-cols-3">
          {philosophyItems.map((item, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.15 + 0.2 }}
              className="group flex flex-col items-start"
            >
              <div className="h-[1px] w-full bg-zinc-200 mb-8 transition-colors duration-500 group-hover:bg-[#ab9885] scale-x-0 group-hover:scale-x-100 origin-left" style={{ transform: "scaleX(1)" }} />
              <h3 className="font-display text-2xl text-zinc-900 mb-2">{item.title}</h3>
              <p className="text-[12px] font-medium tracking-wide text-zinc-500 mb-6">{item.subtitle}</p>
              <p className="text-sm font-light leading-relaxed text-zinc-600">
                {item.description}
              </p>
            </motion.article>
          ))}
        </div>

        {/* Large Decorative Image Area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mt-32 relative aspect-[21/9] w-full overflow-hidden"
        >
          <Image
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2000&auto=format&fit=crop"
            alt="Amuse detail"
            fill
            className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
            sizes="100vw"
          />
        </motion.div>
      </div>
    </section>
  );
}
