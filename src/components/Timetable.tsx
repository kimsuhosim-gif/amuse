// file: src/components/Timetable.tsx
"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { Clock3, ExternalLink, MapPin, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  branchInfo,
  DAYS,
  timetableData,
  type BranchId,
  type DayOfWeek,
} from "@/data/timetable";

export default function Studios() {
  const [activeBranch, setActiveBranch] = useState<BranchId>("anyang");
  const [activeDay, setActiveDay] = useState<DayOfWeek>("MON");
  const [scheduleView, setScheduleView] = useState<"interactive" | "image">("interactive");
  const [scheduleImageError, setScheduleImageError] = useState(false);

  const activeSchedule = useMemo(() => timetableData[activeBranch][activeDay], [activeBranch, activeDay]);
  const info = branchInfo[activeBranch];

  const handleBranchChange = (branch: BranchId) => {
    setActiveBranch(branch);
  };

  useEffect(() => {
    const syncBranchFromHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes("sinrim") || hash.includes("sillim")) {
        setActiveBranch("sinrim");
      } else if (hash.includes("anyang")) {
        setActiveBranch("anyang");
      }
    };

    syncBranchFromHash();
    window.addEventListener("hashchange", syncBranchFromHash);
    return () => window.removeEventListener("hashchange", syncBranchFromHash);
  }, []);

  return (
    <section id="studios" className="bg-[#111111] py-16 md:py-48 text-zinc-300 relative overflow-hidden" aria-label="스튜디오 안내">
      <div id="studios-anyang" className="sr-only" />
      <div id="studios-sinrim" className="sr-only" />
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
                <div className="mb-6 flex items-center justify-between">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-zinc-400">Class Schedule</p>
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-[#bea396] bg-[#bea396]/10 px-3 py-1.5 rounded-full">2026. 02</span>
                </div>
                <div className="mb-6 flex gap-2 rounded-xl border border-zinc-800 bg-zinc-900/40 p-1">
                  <button
                    type="button"
                    onClick={() => setScheduleView("interactive")}
                    className={`flex-1 rounded-lg px-3 py-2 text-[11px] font-semibold tracking-[0.06em] transition-colors ${scheduleView === "interactive" ? "bg-white text-zinc-900" : "text-zinc-400 hover:text-zinc-200"}`}
                  >
                    인터랙티브 보기
                  </button>
                  <button
                    type="button"
                    onClick={() => setScheduleView("image")}
                    className={`flex-1 rounded-lg px-3 py-2 text-[11px] font-semibold tracking-[0.06em] transition-colors ${scheduleView === "image" ? "bg-white text-zinc-900" : "text-zinc-400 hover:text-zinc-200"}`}
                  >
                    이미지로 보기
                  </button>
                </div>

                {scheduleView === "interactive" ? (
                  <>
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
                  </>
                ) : (
                  <div className="rounded-2xl border border-zinc-800/70 bg-zinc-900/30 p-3">
                    {!scheduleImageError ? (
                      <div className="relative overflow-hidden rounded-xl border border-zinc-700/70">
                        <Image
                          src="/images/schedule-board.jpg"
                          alt="안양점과 신림점 통합 시간표 이미지"
                          width={1200}
                          height={1600}
                          className="h-auto w-full object-contain"
                          onError={() => setScheduleImageError(true)}
                        />
                      </div>
                    ) : (
                      <div className="rounded-xl border border-dashed border-zinc-700 bg-zinc-900/35 px-4 py-10 text-center">
                        <p className="text-sm text-zinc-300">시간표 이미지 파일을 찾지 못했습니다.</p>
                        <p className="mt-2 text-xs text-zinc-500">
                          `/public/images/schedule-board.jpg` 파일을 추가하면 이 영역에 바로 표시됩니다.
                        </p>
                      </div>
                    )}
                  </div>
                )}

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
