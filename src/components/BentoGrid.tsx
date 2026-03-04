"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, MapPin, ShieldCheck, Heart, ArrowUpRight } from "lucide-react";

export default function BentoGrid() {
    return (
        <section id="programs" className="bg-[#f4f1ed] py-24 md:py-32">
            <div className="mx-auto max-w-[85rem] px-6 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1 }}
                    className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8"
                >
                    <div className="md:max-w-2xl">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#ab9885] mb-4">Highlights</p>
                        <h2 className="font-display text-4xl leading-[1.1] text-zinc-900 md:text-5xl lg:text-6xl">
                            Everything you need<br />to fly and shine
                        </h2>
                    </div>
                    <p className="max-w-xs text-sm font-light leading-relaxed text-zinc-600">
                        가장 안전하고 세련된 공간에서 당신만의 아름다운 선을 만들어보세요.
                    </p>
                </motion.div>

                {/* Bento Grid layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 auto-rows-[250px] md:auto-rows-[280px]">

                    {/* 1. Large Main Action - Pole Dance (2x2) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="relative overflow-hidden rounded-[2rem] bg-zinc-900 col-span-1 md:col-span-2 lg:col-span-2 md:row-span-2 group cursor-pointer"
                    >
                        <Image src="/images/pole.jpg" alt="Pole Dance" fill className="object-cover opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" sizes="(max-width: 768px) 100vw, 50vw" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                        <div className="absolute bottom-8 left-8 right-8">
                            <div className="flex justify-between items-end">
                                <div>
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-[10px] font-bold tracking-widest uppercase mb-4 backdrop-blur-md">
                                        Signature
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-display text-white mb-2">Pole Dance</h3>
                                    <p className="text-white/70 text-sm font-light max-w-xs">코어 근력과 유연성을 동시에 기르며 하나의 아름다운 작품을 완성합니다.</p>
                                </div>
                                <a href="#studios" className="hidden md:flex w-12 h-12 rounded-full bg-white/20 backdrop-blur-md items-center justify-center text-white group-hover:bg-white group-hover:text-zinc-900 transition-colors">
                                    <ArrowUpRight size={20} />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* 2. Stat Badge - Small Group (1x1) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative overflow-hidden rounded-[2rem] bg-[#ab9885] p-6 lg:p-8 flex flex-col justify-between col-span-1 row-span-1 text-white group"
                    >
                        <div className="absolute -right-4 -top-4 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-colors duration-500" />
                        <div className="bg-white/20 w-10 h-10 rounded-2xl flex items-center justify-center backdrop-blur-sm shadow-sm relative z-10">
                            <Star size={18} className="text-white" />
                        </div>
                        <div className="relative z-10 mt-auto">
                            <h4 className="text-4xl md:text-5xl font-display mb-2">1:1</h4>
                            <p className="text-[11px] font-semibold uppercase tracking-widest text-white/80">Private & Small</p>
                            <p className="text-xs text-white/60 mt-1 font-light">1:1, 2:1, 9:1 맞춤형 레슨</p>
                        </div>
                    </motion.div>

                    {/* 3. Tall Feature - Flying Yoga (1x2) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="relative overflow-hidden rounded-[2rem] bg-zinc-200 col-span-1 md:col-span-1 lg:col-span-1 md:row-span-2 row-span-2 group"
                    >
                        <Image src="/images/flying.jpg" alt="Flying Yoga" fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 25vw" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />
                        <div className="absolute bottom-8 left-6 right-6">
                            <h3 className="text-2xl md:text-3xl font-display text-white mb-2">Flying Yoga</h3>
                            <p className="text-white/80 text-xs font-light leading-relaxed">부드러운 해먹에 몸을 맡겨 깊은 이완과 근력 강화를 동시에 이룹니다.</p>
                        </div>
                    </motion.div>

                    {/* 4. Feature Box - Safety (1x1) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="relative overflow-hidden rounded-[2rem] bg-white p-6 lg:p-8 col-span-1 row-span-1 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] border border-black/[0.02] flex flex-col justify-between group"
                    >
                        <div className="p-3 bg-zinc-50 rounded-2xl w-fit group-hover:bg-[#f4f1ed] transition-colors">
                            <ShieldCheck size={22} className="text-[#ab9885]" />
                        </div>
                        <div className="mt-auto">
                            <h4 className="text-lg font-semibold text-zinc-900 mb-2">안전 시공</h4>
                            <p className="text-xs text-zinc-500 font-light leading-relaxed">정품 안전 매트 및 유러피안 루핏폴 설치.</p>
                        </div>
                    </motion.div>

                    {/* 5. Wide Feature Box (2x1) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="relative overflow-hidden rounded-[2rem] bg-zinc-900 p-8 col-span-1 md:col-span-2 lg:col-span-3 row-span-1 shadow-sm flex items-center group cursor-pointer"
                    >
                        <div className="absolute inset-0 z-0 opacity-40 group-hover:opacity-60 transition-opacity duration-700">
                            <Image src="/images/design-image.jpeg" fill className="object-cover" alt="Interior Details" sizes="100vw" />
                            <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/90 to-transparent" />
                        </div>
                        <div className="z-10 w-full relative">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/90 text-[10px] font-bold tracking-widest uppercase mb-4 backdrop-blur-md">
                                <Heart size={10} className="text-[#ab9885]" fill="#ab9885" /> Philosophy
                            </div>
                            <h4 className="text-2xl font-display text-white mb-2">마음까지 미소 짓게 하는 공간</h4>
                            <p className="text-sm font-light text-zinc-400 max-w-sm">단순한 운동을 넘어, 당신의 일상 속 영감의 공간이 되겠습니다.</p>
                        </div>
                    </motion.div>

                    {/* 6. Location Box (1x1) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="relative overflow-hidden rounded-[2rem] bg-white p-6 lg:p-8 col-span-1 row-span-1 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] border border-black/[0.02] flex flex-col justify-between group cursor-pointer"
                    >
                        <div className="p-3 bg-zinc-50 rounded-2xl w-fit group-hover:bg-[#f4f1ed] transition-colors">
                            <MapPin size={22} className="text-zinc-900" />
                        </div>
                        <div className="mt-auto">
                            <h4 className="text-lg font-semibold text-zinc-900 mb-2">안양 & 신림</h4>
                            <p className="text-xs text-zinc-500 font-light leading-relaxed">프리미엄 지점 체험을 예약하세요.</p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
