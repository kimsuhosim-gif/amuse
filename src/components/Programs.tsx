// file: src/components/Programs.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const programs = [
    {
        id: "pole",
        title: "Pole Dance",
        kicker: "01",
        desc: "肄붿뼱 洹쇰젰怨??좎뿰?깆쓣 ?숈떆??湲곕Ⅴ硫??섎굹???꾨쫫?ㅼ슫 ?묓뭹??留뚮뱾?대궡???먯뼱由ъ뼹 ?꾪듃.",
        img: "/images/pole.jpg"
    },
    {
        id: "flying",
        title: "Flying Yoga",
        kicker: "02",
        desc: "遺?쒕윭???대㉨??紐몄쓣 留↔꺼 ?좎껜???뺣젹???뺢퀬 源딆? ?댁셿怨?洹쇰젰 媛뺥솕瑜??숈떆???대９?덈떎.",
        img: "/images/flying.jpg"
    }
];

export default function Programs() {
    return (
        <section id="programs" className="bg-white py-32 md:py-48">
            <div className="mx-auto w-full max-w-[85rem] px-6 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1 }}
                    className="mb-20 md:mb-32 flex flex-col items-center text-center"
                >
                    <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#bea396] mb-6">Programs</p>
                    <h2 className="font-display text-4xl leading-[1.2] text-zinc-900 md:text-5xl lg:text-6xl">
                        Awaken your<br />hidden elegance
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
                            <div className="relative aspect-[3/4] w-full overflow-hidden mb-8 rounded-[2rem] border border-zinc-100/50 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)]">
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
                            <a href="#studios" className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#a68377] group-hover:text-zinc-900 transition-colors duration-500 w-fit">
                                <span>愿???쒓컙??蹂닿린</span>
                                <span className="transform transition-transform duration-500 group-hover:translate-x-1">??/span>
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
