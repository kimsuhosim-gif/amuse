// file: src/components/Programs.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const programs = [
    {
        id: "pole",
        title: "Pole Dance",
        kicker: "01",
        desc: "코어 근력과 유연성을 동시에 기르며 하나의 아름다운 작품을 만들어내는 에어리얼 아트.",
        img: "/images/pole.jpg"
    },
    {
        id: "flying",
        title: "Flying Yoga",
        kicker: "02",
        desc: "부드러운 해먹에 몸을 맡겨 신체의 정렬을 맞추고 깊은 이완과 근력 강화를 동시에 이룹니다.",
        img: "/images/flying.jpg"
    }
];

export default function Programs() {
    return (
        <section id="programs" className="bg-white py-20 md:py-40">
            <div className="mx-auto w-full max-w-[85rem] px-6 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-12 md:mb-32 flex flex-col items-center text-center"
                >
                    <p className="section-eyebrow mb-5">Programs</p>
                    <h2 className="section-title">
                        나에게 맞는 방식으로
                        <br className="hidden md:block" />
                        시작하는 에어리얼 클래스
                    </h2>
                </motion.div>

                {/* Changed md:grid-cols-3 to md:grid-cols-2 and centered taking max width */}
                <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2 md:gap-16">
                    {programs.map((prog, i) => (
                        <motion.div
                            key={prog.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, delay: i * 0.2 }}
                            className="group cursor-pointer flex flex-col"
                        >
                            <div className="relative aspect-[4/5] w-full overflow-hidden mb-8 rounded-[2rem] border border-zinc-100/50 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)]">
                                <Image
                                    src={prog.img}
                                    alt={prog.title}
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-transparent" />
                            </div>
                            <div className="flex items-baseline gap-4 mb-4">
                                <span className="text-[10px] uppercase tracking-widest text-zinc-400">{prog.kicker}</span>
                                <h3 className="font-display text-3xl text-zinc-900">{prog.title}</h3>
                            </div>
                            <p className="text-sm font-light leading-relaxed text-zinc-500 mb-6 flex-1">
                                {prog.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
                <div className="mt-12 flex justify-center">
                    <a
                        href="#studios"
                        className="inline-flex items-center gap-2 rounded-xl border border-[#d8c8bc] bg-[#fbf7f4] px-6 py-3 text-[12px] font-semibold tracking-[0.08em] text-[#8d6f5f] transition hover:border-[#b79683] hover:bg-white hover:text-zinc-900"
                    >
                        전체 시간표 보기
                        <span>&rarr;</span>
                    </a>
                </div>
            </div>
        </section >
    );
}
