// file: src/components/Timetable.tsx
"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { Clock3, ExternalLink, MapPin, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type BranchId = "anyang" | "sinrim";
type DayOfWeek = "MON" | "TUE" | "WED" | "THU" | "FRI" | "SAT";
type ClassItem = { time: string; name: string; level: string; subtitle?: string };

const timetableData: Record<BranchId, Record<DayOfWeek, ClassItem[]>> = {
  anyang: {
    MON: [
      { time: "11:00", name: "플라잉요가", level: "초급" },
      { time: "17:00", name: "폴&플라잉", level: "키즈반" },
      { time: "19:20", name: "폴댄스", level: "입문/초중급" },
      { time: "20:30", name: "문어의 꿈", level: "신체컨디셔닝" },
    ],
    TUE: [
      { time: "11:00", name: "폴댄스", level: "초급" },
      { time: "19:20", name: "플라잉요가", level: "초급" },
      { time: "20:30", name: "폴댄스", level: "초급" },
    ],
    WED: [
      { time: "11:00", name: "플라잉요가", level: "입문" },
      { time: "12:30", name: "폴댄스", level: "입문/중급" },
      { time: "17:00", name: "폴&플라잉", level: "키즈반" },
      { time: "19:20", name: "플라잉요가", level: "입문" },
      { time: "20:30", name: "플라잉요가", level: "초중급/중급" },
    ],
    THU: [
      { time: "11:00", name: "폴댄스", level: "초중급" },
      { time: "20:30", name: "폴댄스", level: "입문/중급" },
    ],
    FRI: [
      { time: "11:00", name: "추가개설예정", level: "" },
      { time: "17:00", name: "폴&플라잉", level: "키즈반" },
      { time: "19:20", name: "플라잉요가", level: "초급" },
      { time: "20:30", name: "폴댄스", level: "입문/중고급" },
    ],
    SAT: [
      { time: "11:00", name: "플라잉요가", level: "입문" },
      { time: "12:30", name: "폴댄스", level: "입문/중급" },
    ],
  },
  sinrim: {
    MON: [
      { time: "17:00", name: "폴&플라잉", level: "키즈반" },
      { time: "19:40", name: "폴댄스", level: "입문/중고급" },
      { time: "20:50", name: "플라잉요가", level: "올레벨" },
    ],
    TUE: [
      { time: "12:00", name: "폴댄스", level: "입문/초중급" },
      { time: "17:00", name: "자격증반", level: "마스터클래스 준비반 (19:40~)" },
    ],
    WED: [
      { time: "17:00", name: "폴&플라잉", level: "키즈반" },
      { time: "20:00", name: "폴댄스", level: "입문/초중급" },
    ],
    THU: [
      { time: "12:00", name: "플라잉요가", level: "올레벨" },
      { time: "19:40", name: "플라잉요가", level: "올레벨" },
      { time: "20:50", name: "폴댄스", level: "초급/중급" },
    ],
    FRI: [
      { time: "17:00", name: "폴&플라잉", level: "키즈반" },
      { time: "20:00", name: "폴댄스", level: "입문/중급" },
    ],
    SAT: [
      { time: "13:00", name: "폴댄스", level: "초급/중급" },
    ],
  }
};

const branchInfo = {
  anyang: {
    label: "Anyang",
    subName: "안양 본점",
    address: "경기 안양시 동안구 관악대로 103 9층 (에비뉴빌딩)",
    access: "비산동 사거리 인근, 무료 주차 가능",
    hours: "평일 10:00 - 23:00 (주말 휴무)",
    phone: "031-464-0101 / 010-5934-0012",
    mapUrl: "https://map.naver.com/p/search/%EC%95%84%EB%AE%A4%EC%A6%88%ED%8F%B4%EB%8C%84%EC%8A%A4%20%EC%95%88%EC%96%91%EC%A0%90",
    image: "/images/anyang.jpg",
  },
  sinrim: {
    label: "Sillim",
    subName: "신림 2호점",
    address: "서울 관악구 신사로 116-1 3층 (한양빌딩)",
    access: "2호선 신대방역 1번 출구 220m 거리",
    hours: "평일 09:00 - 22:00 / 토 09:00 - 15:00",
    phone: "010-5934-0012",
    mapUrl: "https://map.naver.com/p/search/%EC%95%84%EB%AE%A4%EC%A6%88%ED%8F%B4%EB%8C%84%EC%8A%A4%20%EC%8B%A0%EB%A6%BC%EC%A0%90",
    image: "/images/sillim.jpg",
  },
} as const;

const DAYS: DayOfWeek[] = ["MON", "TUE", "WED", "THU", "FRI", "SAT"];

export default function Studios() {
  const [activeBranch, setActiveBranch] = useState<BranchId>("anyang");
  const [activeDay, setActiveDay] = useState<DayOfWeek>("MON");

  const activeSchedule = useMemo(() => timetableData[activeBranch][activeDay], [activeBranch, activeDay]);
  const info = branchInfo[activeBranch];

  const handleBranchChange = (branch: BranchId) => {
    setActiveBranch(branch);
  };

  return (
    <section id="studios" className="bg-[#111111] py-16 md:py-48 text-zinc-300 relative overflow-hidden" aria-label="스튜디오 안내">
      {/* Subtle Background Elements */}
      <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-[#bea396]/10 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>

      <div className="mx-auto w-full max-w-[85rem] px-4 md:px-6 lg:px-12 relative z-10 w-full overflow-hidden">
        {/* Header & Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-12 mb-8 md:mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-[1px] bg-[#bea396]/80"></div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#bea396]">Studios & Schedule</p>
            </div>
            <h2 className="font-display text-4xl leading-[1.15] text-white md:text-5xl lg:text-7xl">
              Sanctuaries of<br /> <span className="text-[#bea396] italic font-light">elegance</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex gap-2 p-1.5 bg-[#1a1a1a] rounded-full border border-zinc-800/80 shadow-lg"
          >
            {(Object.keys(branchInfo) as BranchId[]).map((branch) => (
              <button
                key={branch}
                onClick={() => handleBranchChange(branch)}
                className={`relative px-6 py-2.5 text-[12px] font-bold uppercase tracking-[0.15em] transition-all duration-300 rounded-full focus:outline-none ${activeBranch === branch ? "text-white" : "text-zinc-500 hover:text-zinc-300"
                  }`}
              >
                {branchInfo[branch].label}
                {activeBranch === branch && (
                  <motion.div
                    layoutId="studioTabIndicator"
                    className="absolute inset-0 bg-[#333333]/80 rounded-full border border-zinc-700/50"
                    style={{ zIndex: -1 }}
                  />
                )}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Content Area */}
        <div className="flex flex-col lg:grid lg:gap-16 lg:grid-cols-[0.8fr_1fr_1.2fr] gap-8">
          {/* Image */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeBranch + "-image"}
              initial={{ opacity: 0, filter: "blur(10px)", scale: 0.95 }}
              animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
              exit={{ opacity: 0, filter: "blur(10px)", scale: 1.05 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="relative aspect-[2/1] sm:aspect-[4/3] lg:aspect-auto lg:h-[650px] w-full overflow-hidden rounded-3xl border border-zinc-800/80 shadow-[0_0_50px_rgba(0,0,0,0.5)] group order-1 lg:order-none"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 pointer-events-none opacity-50 transition-opacity duration-700 group-hover:opacity-0" />
              <Image
                src={info.image}
                alt={`${info.label} branch interior`}
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </motion.div>
          </AnimatePresence>

          {/* Info */}
          <AnimatePresence mode="popLayout">
            <motion.div
              key={activeBranch + "-info"}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col justify-center order-2 lg:order-none"
            >
              <h3 className="font-sans font-extrabold text-3xl text-white mb-2 tracking-tight">{info.label} Studio</h3>
              <p className="text-[13px] font-semibold text-[#bea396] mb-8 lg:mb-12">{info.subName}</p>

              <div className="flex flex-col gap-6 sm:gap-10">
                <article className="group">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-8 h-[1px] bg-zinc-800 transition-colors group-hover:bg-zinc-600"></div>
                    <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-500">Location</p>
                  </div>
                  <p className="text-[15px] font-light text-zinc-300 leading-relaxed mb-1 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                    <span className="flex items-center gap-2"><MapPin strokeWidth={1} size={16} className="text-[#bea396]" /> {info.address}</span>
                  </p>
                  <p className="text-[13px] text-zinc-500 leading-relaxed pl-6 mt-2">{info.access}</p>
                </article>

                <article className="group">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-8 h-[1px] bg-zinc-800 transition-colors group-hover:bg-zinc-600"></div>
                    <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-500">Information</p>
                  </div>
                  <p className="text-[15px] font-light text-zinc-300 leading-relaxed mb-4 flex items-center gap-3">
                    <Clock3 strokeWidth={1} size={16} className="text-[#bea396]" /> {info.hours}
                  </p>
                  <p className="text-[15px] font-light text-zinc-300 leading-relaxed flex items-center gap-3 min-w-max">
                    <Phone strokeWidth={1} size={16} className="text-[#bea396] shrink-0" /> {info.phone}
                  </p>
                </article>
              </div>

              <div className="mt-12 lg:mt-16 pt-8 border-t border-zinc-900 leading-none">
                <a href={info.mapUrl} target="_blank" rel="noopener noreferrer" className="inline-flex w-full sm:w-auto items-center justify-center gap-3 px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-widest text-white transition-all duration-300 hover:bg-white hover:text-black group">
                  <span>View on Naver Map</span>
                  <ExternalLink strokeWidth={2} size={14} className="opacity-50 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Schedule */}
          <AnimatePresence mode="popLayout">
            <motion.div
              key={activeBranch + "-schedule-container"}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col justify-center lg:pl-10 order-3 lg:order-none"
            >
              <div className="bg-[#1a1a1a]/50 border border-zinc-800/80 rounded-3xl p-4 sm:p-8 backdrop-blur-sm w-full">
                <div className="flex items-center justify-between mb-8">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-zinc-400">Class Schedule</p>
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-[#bea396] bg-[#bea396]/10 px-3 py-1.5 rounded-full">2026. 02</span>
                </div>

                <div className="flex gap-2 overflow-x-auto pb-6 mb-2 scrollbar-hide snap-x">
                  {DAYS.map((day) => (
                    <button
                      key={day}
                      onClick={() => setActiveDay(day)}
                      className={`snap-center flex-1 shrink-0 px-4 py-3 text-[11px] font-bold tracking-widest transition-all duration-300 rounded-xl focus:outline-none ${activeDay === day
                        ? "bg-white text-zinc-900 shadow-[0_0_20px_rgba(255,255,255,0.15)]"
                        : "bg-zinc-800/30 text-zinc-500 border border-zinc-800 hover:text-zinc-300 hover:border-zinc-700"
                        }`}
                    >
                      {day}
                    </button>
                  ))}
                </div>

                <div className="flex flex-col min-h-[300px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeBranch + activeDay}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.4 }}
                      className="flex flex-col gap-3"
                    >
                      {activeSchedule?.length > 0 ? (
                        activeSchedule.map((item, idx) => (
                          <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between bg-zinc-900/40 border border-zinc-800/50 rounded-2xl p-4 sm:p-5 group hover:bg-zinc-800/60 hover:border-zinc-700 transition-all duration-400 gap-y-3 sm:gap-y-0 w-full">
                            <div className="flex items-center gap-3 sm:gap-6">
                              <span className="font-display text-xl sm:text-2xl text-[#bea396]/80 group-hover:text-[#bea396] transition-colors">{item.time}</span>
                              <div className="w-[1px] h-6 sm:h-8 bg-zinc-800 hidden sm:block"></div>
                              <span className="text-[14px] sm:text-[15px] font-bold text-zinc-300 group-hover:text-white transition-colors break-words max-w-[200px] sm:max-w-none line-clamp-2">{item.name}</span>
                            </div>
                            {item.level && (
                              <span className="self-start sm:self-auto text-[10px] sm:text-[11px] font-semibold px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-zinc-800/50 text-zinc-400 group-hover:bg-[#bea396]/10 group-hover:text-[#bea396] border border-zinc-800/50 transition-colors block text-center break-words max-w-[150px] sm:max-w-[200px]">
                                {item.level}
                              </span>
                            )}
                          </div>
                        ))
                      ) : (
                        <div className="flex items-center justify-center py-24 text-sm font-light text-zinc-600 bg-zinc-900/20 rounded-2xl border border-zinc-800/30 border-dashed">
                          해당 요일은 대관 및 휴무입니다.
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>

                <p className="mt-8 text-[11px] font-light text-zinc-500 leading-relaxed bg-zinc-900/30 p-4 rounded-xl border border-zinc-800/30">
                  <strong className="font-semibold text-zinc-400">안내사항</strong><br />
                  난이도는 개별 맞춤형으로 진행되며 모든 수업은 60분 진행, 사전 예약제로 진행됩니다. (고급반, 자격증반 제외)
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
