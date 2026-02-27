"use client";

// file: src/components/Instructors.tsx
import { motion } from "framer-motion";
import { User2 } from "lucide-react";

const instructors = {
    anyang: [
        {
            name: "서아 (Seo-a)",
            role: "원장 / 안양 본점 메인 강사",
            profile: "에어리얼 요가 & 폴댄스 전문가 과정 마스터\n프리미엄 체형교정 수료",
        },
        {
            name: "지유 (Ji-yu)",
            role: "안양 본점 전임 강사",
            profile: "에어리얼 아트 퍼포먼스 전문\n입문자 맞춤형 티칭 세미나 수료",
        },
    ],
    sillim: [
        {
            name: "민서 (Min-seo)",
            role: "신림 2호점 전임 강사",
            profile: "안전 최우선 폴댄스 지도자 과정 수료\n어드밴스드 코어 강화 전문",
        },
        {
            name: "수아 (Su-a)",
            role: "신림 2호점 전임 강사",
            profile: "플라잉 요가 인스트럭터\n유연성 및 밸런스 향상 전문",
        },
    ],
};

const InstructorCard = ({ info, index }: { info: any, index: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="group flex gap-5 bg-white p-6 md:p-8 rounded-xl border border-zinc-100 shadow-sm transition-all hover:shadow-md"
    >
        <div className="flex-shrink-0 relative overflow-hidden bg-zinc-100 rounded-full w-14 h-14 md:w-20 md:h-20 flex items-center justify-center">
            <User2 className="text-zinc-300 w-6 h-6 md:w-8 md:h-8" />
        </div>
        <div className="flex flex-col justify-center">
            <h4 className="font-display text-lg md:text-xl text-zinc-900 group-hover:text-[#ab9885] transition-colors">{info.name}</h4>
            <p className="text-[11px] font-semibold text-[#ab9885] mb-3">{info.role}</p>
            <p className="text-xs font-light text-zinc-500 whitespace-pre-wrap leading-relaxed">{info.profile}</p>
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
