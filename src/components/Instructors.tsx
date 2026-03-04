"use client";

// file: src/components/Instructors.tsx
import { motion } from "framer-motion";
import { User2, MoveRight } from "lucide-react";
import Image from "next/image";

const instructors = {
    anyang: [
        {
            name: "김서아 (SEOA)",
            role: "대표 / 안양점 원장",
            image: "/images/instructors/seo_a.jpg",
            quote: "건강과 행복을 위한 스튜디오로\n운영하겠습니다",
            history: [
                "2010 RELAX YOGA, HOT YOGA",
                "2010 VINYASA YOGA, AERIAL YOGA",
                "2011 생활체육지도자 2급 보디빌딩",
                "2012 퍼스널트레이너 TTC 수료",
                "2013 BASTM 연부조직 테라피 수료",
                "2013~15 나바코리아 및 각종 피트니스대회 입상",
                "2014 다이어트 도시락 홍보모델",
                "2014 PEAK PILATES (클래식 필라테스)",
                "2015 산전 산후 임산부 필라테스 교육강사",
                "2015 모던필라테스 교육강사",
                "2019 폴댄스 2급 + 1급",
                "2023 현 아뮤즈 폴댄스 플라잉요가 대표",
            ],
            tags: "#ISFP #원장쌤 #칭찬감옥",
            insta: "@SSEOAKIMN",
        },
        {
            name: "이미연 (YONI)",
            role: "안양점 강사",
            image: "/images/instructors/yoni.jpg",
            quote: "친절하고 명확한 리더쉽으로\n에너지를 전하는 강사입니다",
            history: [
                "2021 폴댄스 전문가 3급 + 2급",
                "2021 폴댄스 지도자 수료",
                "2024 필라테스 지도자 수료",
                "2021 온폴댄스 잠실새내점 강사",
                "2023 현 아뮤즈 폴댄스 플라잉요가 스튜디오 강사",
            ],
            tags: "#INFJ #요니T #친절퀸",
            insta: "@POLLERINA_YONI",
        },
        {
            name: "최유현 (YU HYUN)",
            role: "안양점 강사",
            quote: "유연한 몸, 편안한 마음.\n기분 좋은 변화를 선물하는 강사입니다",
            history: [
                "2018 요가 지도자 수료",
                "2022 폴댄스 2급 수료",
                "2023 폴댄스 지도자 수료",
                "2024 타라폴댄스 강사",
                "2025 현 아뮤즈 폴댄스&플라잉요가 강사",
            ],
            tags: "#ISFP #유현T #아뮤즈힘문어",
            insta: "@POLE_YUHYUN",
        },
    ],
    sillim: [
        {
            name: "김서안 (SEOAN)",
            role: "안양점/신림점 강사",
            image: "/images/instructors/seo_an.jpg",
            quote: "당신의 폴댄스가 예술이 될 수 있게,\n섬세하게 디테일을 지도합니다",
            history: [
                "2022 KBPF 전문가 2급 수료",
                "2023 KBPF 전문가 1급 수료",
                "2024 현 오하운 폴댄스 강남점 강사",
                "2025 현 아뮤즈 폴댄스 플라잉요가 안양점/신림점 강사",
            ],
            tags: "#ENFJ #서안T #디테일 #폴아트",
            insta: "@SEOAN_POLE",
        },
    ],
};

const InstructorCard = ({ info, index }: { info: any, index: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="group relative flex flex-col gap-5 bg-white p-6 md:p-8 rounded-2xl border border-zinc-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] transition-all duration-500 hover:shadow-[0_15px_30px_-15px_rgba(171,152,133,0.3)] hover:-translate-y-1 overflow-hidden"
    >
        {/* Decorative background glow on hover */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 rounded-full bg-[#ab9885]/10 blur-2xl transition-all duration-700 opacity-0 group-hover:opacity-100 group-hover:scale-150"></div>

        <div className="flex gap-5 items-center">
            <div className="flex-shrink-0 relative overflow-hidden bg-zinc-50 group-hover:bg-[#ab9885]/10 transition-colors duration-500 rounded-full w-14 h-14 md:w-16 md:h-16 flex items-center justify-center">
                {info.image ? (
                    <Image src={info.image} alt={info.name} fill className="object-cover" />
                ) : (
                    <User2 className="text-zinc-300 group-hover:text-[#ab9885] transition-colors duration-500 w-6 h-6 md:w-8 md:h-8" />
                )}
            </div>
            <div className="flex flex-col justify-center z-10 pr-6">
                <h4 className="font-display text-lg md:text-xl text-zinc-900 group-hover:text-[#a08b76] transition-colors duration-500 whitespace-nowrap">{info.name}</h4>
                <p className="text-[11px] font-semibold text-[#8f775f]">{info.role}</p>
            </div>
        </div>

        <div className="z-10 bg-[#faf9f7] rounded-xl p-5 border border-zinc-100 flex-1 flex flex-col transition-colors duration-500 group-hover:bg-white group-hover:border-[#ab9885]/20">
            <p className="text-[13px] md:text-sm font-medium text-zinc-800 whitespace-pre-wrap leading-relaxed italic mb-5">
                '{info.quote}'
            </p>
            <ul className="text-[11px] md:text-xs font-light text-zinc-500 space-y-2 mb-6 opacity-90 group-hover:opacity-100 transition-opacity duration-500 flex-1">
                {info.history.map((item: string, i: number) => (
                    <li key={i} className="flex gap-2.5">
                        <span className="text-[#ab9885] mt-[1px]">•</span> <span className="tracking-wide">{item}</span>
                    </li>
                ))}
            </ul>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-4 border-t border-zinc-200/80">
                <p className="text-[11px] font-semibold text-[#8f775f] tracking-wide">{info.tags}</p>
                <a
                    href={`https://instagram.com/${info.insta.replace('@', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] md:text-[11px] font-medium text-zinc-400 group-hover:text-[#ab9885] transition-colors hover:underline"
                >
                    {info.insta}
                </a>
            </div>
        </div>
    </motion.div>
);

export default function Instructors() {
    return (
        <section id="instructors" className="bg-[#faf9f7] py-24 md:py-32">
            <div className="mx-auto w-full max-w-[85rem] px-6 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 md:mb-24 text-center"
                >
                    <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#ab9885] mb-4">INSTRUCTORS</p>
                    <h2 className="font-display text-3xl md:text-5xl text-zinc-900 leading-tight">
                        Our Professionals
                    </h2>
                    <p className="mt-6 text-sm font-light text-zinc-500 max-w-2xl mx-auto">
                        당신의 안전과 성장을 위해 아뮤즈 스튜디오가 자랑하는 최고의 강사진을 소개합니다.<br className="hidden md:block" />
                        개인이 가진 체형과 난이도에 맞춘 디테일한 티칭을 경험해 보세요.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
                    <div>
                        <div className="mb-8 flex items-center gap-4">
                            <h3 className="font-display text-2xl text-zinc-800">Anyang Studio</h3>
                            <div className="h-[1px] flex-1 bg-zinc-200"></div>
                        </div>
                        <div className="flex flex-col gap-6">
                            {instructors.anyang.map((instructor, index) => (
                                <InstructorCard key={`anyang-${index}`} info={instructor} index={index} />
                            ))}
                        </div>
                    </div>

                    <div>
                        <div className="mb-8 flex items-center gap-4">
                            <h3 className="font-display text-2xl text-zinc-800">Sillim Studio</h3>
                            <div className="h-[1px] flex-1 bg-zinc-200"></div>
                        </div>
                        <div className="flex flex-col gap-6">
                            {instructors.sillim.map((instructor, index) => (
                                <InstructorCard key={`sillim-${index}`} info={instructor} index={index} />
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
