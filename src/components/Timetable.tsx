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

  // When branch changes, we keep the active day if possible
  const handleBranchChange = (branch: BranchId) => {
    setActiveBranch(branch);
  };

  return (
    <section id="studios" className="bg-[#191919] py-32 md:py-48 text-zinc-300" aria-label="스튜디오 안내">
      <div className="mx-auto w-full max-w-[85rem] px-6 lg:px-12">
        {/* Header & Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#ab9885] mb-6">Studios & Schedule</p>
            <h2 className="font-display text-4xl leading-[1.2] text-white md:text-5xl lg:text-6xl">
              Sanctuaries of<br className="hidden md:block" /> elegance
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex gap-1 border-b border-zinc-800 pb-2"
          >
            {(Object.keys(branchInfo) as BranchId[]).map((branch) => (
              <button
                key={branch}
                onClick={() => handleBranchChange(branch)}
                className={`relative px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] transition-colors focus:outline-none ${activeBranch === branch ? "text-white" : "text-zinc-600 hover:text-zinc-400"
                  }`}
              >
                {branchInfo[branch].label}
                {activeBranch === branch && (
                  <motion.div
                    layoutId="studioTabIndicator"
                    className="absolute -bottom-[3px] left-0 h-[1px] w-full bg-white"
                  />
                )}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Content Area */}
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1fr_1.2fr]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeBranch + "-image"}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-[3/4] lg:aspect-auto lg:h-[650px] w-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-700"
            >
              <Image
                src={info.image}
                alt={`${info.label} branch interior`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
              <div className="absolute inset-0 border border-zinc-800 pointer-events-none" />
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="popLayout">
            <motion.div
              key={activeBranch + "-info"}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col justify-center"
            >
              <h3 className="font-display text-4xl text-white mb-2">{info.label} Studio</h3>
              <p className="text-zinc-500 mb-12 uppercase tracking-widest">{info.subName}</p>

              <div className="flex flex-col gap-10">
                <article>
                  <p className="text-[10px] uppercase tracking-widest text-[#ab9885] mb-4">Location</p>
                  <p className="text-sm text-zinc-300 leading-relaxed mb-1 flex items-center gap-3">
                    <MapPin strokeWidth={1.5} size={16} className="text-zinc-500" /> {info.address}
                  </p>
                  <p className="text-sm text-zinc-500 leading-relaxed pl-7">{info.access}</p>
                </article>

                <article>
                  <p className="text-[10px] uppercase tracking-widest text-[#ab9885] mb-4">Information</p>
                  <p className="text-sm text-zinc-300 leading-relaxed mb-4 flex items-center gap-3">
                    <Clock3 strokeWidth={1.5} size={16} className="text-zinc-500" /> {info.hours}
                  </p>
                  <p className="text-sm text-zinc-300 leading-relaxed flex items-center gap-3">
                    <Phone strokeWidth={1.5} size={16} className="text-zinc-500" /> {info.phone}
                  </p>
                </article>
              </div>

              <div className="mt-16 pt-8 border-t border-zinc-800">
                <a href={info.mapUrl} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-xs uppercase tracking-widest text-white transition-colors hover:text-[#ab9885]">
                  <span className="border-b border-white/30 pb-1 group-hover:border-[#ab9885] transition-colors">View on Naver Map</span>
                  <ExternalLink strokeWidth={1.5} size={14} className="mb-1" />
                </a>
              </div>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="popLayout">
            <motion.div
              key={activeBranch + "-schedule-container"}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col justify-center lg:pl-8 border-l border-zinc-800/50"
            >
              <div className="flex items-center justify-between mb-8">
                <p className="text-[10px] uppercase tracking-widest text-[#ab9885]">Class Schedule</p>
                <span className="text-[10px] uppercase text-zinc-600 bg-zinc-900 px-2 py-1">2026. 02</span>
              </div>

              <div className="flex gap-2 overflow-x-auto pb-4 mb-4 scrollbar-hide">
                {DAYS.map((day) => (
                  <button
                    key={day}
                    onClick={() => setActiveDay(day)}
                    className={`flex-1 shrink-0 px-3 py-2 text-[10px] font-semibold transition-all duration-300 focus:outline-none ${activeDay === day
                        ? "bg-white text-zinc-900"
                        : "bg-zinc-900/50 text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800"
                      }`}
                  >
                    {day}
                  </button>
                ))}
              </div>

              <div className="flex flex-col border-t border-zinc-800 min-h-[300px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeBranch + activeDay}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col"
                  >
                    {activeSchedule?.length > 0 ? (
                      activeSchedule.map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between border-b border-zinc-800 py-5 group hover:bg-zinc-900/50 transition-colors">
                          <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 px-4">
                            <span className="font-display text-xl text-zinc-500 group-hover:text-white transition-colors">{item.time}</span>
                            <span className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors">{item.name}</span>
                          </div>
                          {item.level && (
                            <span className="text-[10px] px-2 py-1 bg-zinc-900 text-zinc-400 group-hover:bg-[#ab9885] group-hover:text-white transition-colors mr-2">
                              {item.level}
                            </span>
                          )}
                        </div>
                      ))
                    ) : (
                      <div className="flex items-center justify-center py-20 text-sm text-zinc-600">
                        해당 요일은 수업이 없습니다.
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
              <p className="mt-8 text-[11px] font-light text-zinc-500 leading-relaxed">
                * 난이도는 개별 맞춤형으로 진행되며 모든 수업은 60분 진행, 사전 예약제로 진행됩니다. (고급반, 자격증반 제외)
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
