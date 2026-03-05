"use client";

// file: src/components/Instructors.tsx
import { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Instagram, User2, X } from "lucide-react";
import Image from "next/image";

type Instructor = {
  name: string;
  role: string;
  image?: string;
  gallery?: string[];
  quote: string;
  history: string[];
  tags: string;
  insta: string;
};

const instructors: Record<"anyang" | "sillim", Instructor[]> = {
  anyang: [
    {
      name: "김서아 (SEO_A)",
      role: "대표 / 안양점 원장",
      image: "/images/instructors/seo_a.jpg",
      gallery: [
        "/images/instructors/seo_a.jpg",
        "/images/instructors/seo_a_1.jpg",
        "/images/instructors/seo_a_2.jpg",
        "/images/instructors/seo_a_3.jpg",
      ],
      quote: "건강하고 행복한 스튜디오로\n운영하겠습니다",
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
        "2023 현 아뮤즈 폴댄스 & 플라잉요가 대표",
      ],
      tags: "#ISFP #원장쌤 #칭찬감옥",
      insta: "@SSEOAKIMN",
    },
    {
      name: "이미연 (YONI)",
      role: "안양점 강사",
      image: "/images/instructors/yoni.jpg",
      gallery: ["/images/instructors/yoni.jpg", "/images/instructors/yoni_2.jpg"],
      quote: "친절하고 명확한 리더쉽으로\n에너지를 전하는 강사입니다",
      history: [
        "2021 폴댄스 전문가 3급 + 2급",
        "2021 폴댄스 지도자 수료",
        "2024 필라테스 지도자 수료",
        "2021 온폴댄스 잠실새내점 강사",
        "2023 현 아뮤즈 폴댄스 & 플라잉요가 스튜디오 강사",
      ],
      tags: "#INFJ #요니T #친절퀸",
      insta: "@AMUSE_MIYEON",
    },
    {
      name: "최유현 (YU HYUN)",
      role: "안양점 강사",
      quote: "유연한 몸, 평온한 마음.\n기분 좋은 변화를 선물하는 강사입니다",
      history: [
        "2018 요가 지도자 수료",
        "2022 폴댄스 2급 수료",
        "2023 폴댄스 지도자 수료",
        "2024 타라폴댄스 강사",
        "2025 현 아뮤즈 폴댄스 & 플라잉요가 강사",
      ],
      tags: "#ISFP #유현T #아뮤즈힘문어",
      insta: "@POLE_YUHYUN",
    },
    {
      name: "강미현 (MI HYUN)",
      role: "안양점 강사",
      image: "/images/instructors/mihyun.jpg",
      gallery: ["/images/instructors/mihyun.jpg", "/images/instructors/mihyun_2.jpg"],
      quote: "폴 위에서 아름다운 나를 만나는\n순간을 함께합니다",
      history: [
        "2022 KBPF 전문가 2급 수료",
        "2023 KBPF 전문가 1급 수료",
        "2023 현 오하운 폴댄스 보라매점 강사",
        "2026 더올바른필라테스 자격증 취득",
        "2026 대한운동중재전문가협회 키즈필라테스/측만체형 기능운동 지도사 자격 취득",
      ],
      tags: "#INFP #미현T #물흐르듯",
      insta: "@HYUNI__KKANG",
    },
  ],
  sillim: [
    {
      name: "김서안 (SEOAN)",
      role: "신림점 원장",
      image: "/images/instructors/seo_an.jpg",
      gallery: [
        "/images/instructors/seo_an.jpg",
        "/images/instructors/seo_an_1.jpg",
        "/images/instructors/seo_an_2.jpg",
        "/images/instructors/seo_an_3.jpg",
      ],
      quote: "당신의 폴댄스가 예술이 될 수 있게,\n섬세하게 디테일을 지도합니다",
      history: [
        "2022 KBPF 전문가 2급 수료",
        "2023 KBPF 전문가 1급 수료",
        "2024 현 오하운 폴댄스 강남점 강사",
        "2025 현 아뮤즈 폴댄스 & 플라잉요가 안양점 신림점 강사",
      ],
      tags: "#ENFJ #서안T #디테일 #우아함 #폴아트",
      insta: "@SEOAN_POLE",
    },
  ],
};

function InstructorCard({
  info,
  index,
  onOpenGallery,
}: {
  info: Instructor;
  index: number;
  onOpenGallery: (info: Instructor) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative flex flex-col gap-5 overflow-hidden rounded-2xl border border-zinc-100 bg-white p-6 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_15px_30px_-15px_rgba(171,152,133,0.3)] md:p-8"
    >
      <div className="absolute top-0 right-0 -mt-16 -mr-16 h-32 w-32 rounded-full bg-[#bea396]/10 opacity-0 blur-2xl transition-all duration-700 group-hover:scale-150 group-hover:opacity-100" />

      <div className="flex items-center gap-5">
        <button
          type="button"
          onClick={() => onOpenGallery(info)}
          disabled={!info.gallery?.length}
          aria-label={`${info.name} 사진 크게 보기`}
          className="relative flex h-14 w-14 flex-shrink-0 items-center justify-center overflow-hidden rounded-full bg-zinc-50 transition-colors duration-500 group-hover:bg-[#bea396]/10 disabled:cursor-default md:h-16 md:w-16"
        >
          {info.image ? (
            <Image src={info.image} alt={info.name} fill className="object-cover" />
          ) : (
            <User2 className="h-6 w-6 text-zinc-300 transition-colors duration-500 group-hover:text-[#bea396] md:h-8 md:w-8" />
          )}
        </button>
        <div className="z-10 flex flex-col justify-center pr-6">
          <h4 className="whitespace-nowrap font-display text-lg text-zinc-900 transition-colors duration-500 group-hover:text-[#a08b76] md:text-xl">
            {info.name}
          </h4>
          <p className="text-[11px] font-semibold text-[#a68377]">{info.role}</p>
        </div>
      </div>

      <div className="z-10 flex flex-1 flex-col rounded-xl border border-zinc-100 bg-[#fdfbf9] p-5 transition-colors duration-500 group-hover:border-[#bea396]/20 group-hover:bg-white">
        <p className="mb-5 whitespace-pre-wrap text-[13px] italic leading-relaxed font-medium text-zinc-800 md:text-sm">
          &ldquo;{info.quote}&rdquo;
        </p>
        <ul className="mb-6 flex-1 space-y-2 text-[11px] font-light text-zinc-500 opacity-90 transition-opacity duration-500 group-hover:opacity-100 md:text-xs">
          {info.history.map((item, i) => (
            <li key={i} className="flex gap-2.5">
              <span className="mt-[1px] text-[#bea396]">•</span>
              <span className="tracking-wide">{item}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-col justify-between gap-3 border-t border-zinc-200/80 pt-4 sm:flex-row sm:items-center">
          <p className="text-[11px] font-semibold tracking-wide text-[#a68377]">{info.tags}</p>
          <a
            href={`https://instagram.com/${info.insta.replace("@", "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group/insta flex items-center gap-1.5 text-[10px] font-medium text-zinc-400 transition-all duration-300 hover:text-[#bea396] md:text-[11px]"
          >
            <Instagram size={13} className="transition-transform duration-300 group-hover/insta:scale-110" />
            <span className="hover:underline">{info.insta}</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Instructors() {
  const [selectedInstructor, setSelectedInstructor] = useState<Instructor | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const gallery = useMemo(() => selectedInstructor?.gallery ?? [], [selectedInstructor]);

  const openGallery = useCallback((info: Instructor) => {
    if (!info.gallery?.length) return;
    setSelectedInstructor(info);
    setSelectedImageIndex(0);
  }, []);

  const closeGallery = useCallback(() => {
    setSelectedInstructor(null);
    setSelectedImageIndex(0);
  }, []);

  const goPrev = useCallback(() => {
    if (!gallery.length) return;
    setSelectedImageIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
  }, [gallery.length]);

  const goNext = useCallback(() => {
    if (!gallery.length) return;
    setSelectedImageIndex((prev) => (prev + 1) % gallery.length);
  }, [gallery.length]);

  useEffect(() => {
    if (!selectedInstructor) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeGallery();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [closeGallery, goNext, goPrev, selectedInstructor]);

  return (
    <>
      <section id="instructors" className="bg-[#fdfbf9] py-16 md:py-32">
        <div className="mx-auto w-full max-w-[85rem] px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-10 text-center md:mb-24"
          >
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#bea396]">INSTRUCTORS</p>
            <h2 className="font-display text-3xl leading-tight text-zinc-900 md:text-5xl">Our Professionals</h2>
            <p className="mx-auto mt-6 max-w-2xl text-sm font-light text-zinc-500">
              당신의 안전과 성장을 위해 아뮤즈 스튜디오가 자랑하는 최고의 강사진을 소개합니다.
              <br className="hidden md:block" />
              개인이 가진 체형과 쉐이프에 맞춘 디테일한 코칭을 경험해 보세요.
            </p>
          </motion.div>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <div className="mb-8 flex items-center gap-4">
                <h3 className="font-sans text-2xl font-extrabold tracking-tight text-zinc-800">안양 본점</h3>
                <div className="h-[1px] flex-1 bg-zinc-200" />
              </div>
              <div className="flex flex-col gap-6">
                {instructors.anyang.map((instructor, index) => (
                  <InstructorCard key={`anyang-${index}`} info={instructor} index={index} onOpenGallery={openGallery} />
                ))}
              </div>
            </div>

            <div>
              <div className="mb-8 flex items-center gap-4">
                <h3 className="font-sans text-2xl font-extrabold tracking-tight text-zinc-800">신림 2호점</h3>
                <div className="h-[1px] flex-1 bg-zinc-200" />
              </div>
              <div className="flex flex-col gap-6">
                {instructors.sillim.map((instructor, index) => (
                  <InstructorCard key={`sillim-${index}`} info={instructor} index={index} onOpenGallery={openGallery} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedInstructor && gallery.length > 0 && (
          <motion.div
            className="fixed inset-0 z-[200] bg-black/85 p-4 md:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeGallery}
          >
            <div className="mx-auto flex h-full w-full max-w-6xl flex-col gap-4" onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center justify-between text-white">
                <p className="text-sm font-medium md:text-base">{selectedInstructor.name}</p>
                <button
                  type="button"
                  onClick={closeGallery}
                  aria-label="강사 사진 닫기"
                  className="rounded-full p-2 transition-colors hover:bg-white/10"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="relative flex-1 overflow-hidden rounded-2xl border border-white/15 bg-black/40">
                <Image
                  src={gallery[selectedImageIndex]}
                  alt={`${selectedInstructor.name} 사진 ${selectedImageIndex + 1}`}
                  fill
                  className="object-contain"
                  sizes="100vw"
                />

                {gallery.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={goPrev}
                      aria-label="이전 사진"
                      className="absolute top-1/2 left-3 -translate-y-1/2 rounded-full bg-black/55 p-2 text-white transition-colors hover:bg-black/75"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <button
                      type="button"
                      onClick={goNext}
                      aria-label="다음 사진"
                      className="absolute top-1/2 right-3 -translate-y-1/2 rounded-full bg-black/55 p-2 text-white transition-colors hover:bg-black/75"
                    >
                      <ChevronRight size={18} />
                    </button>
                  </>
                )}
              </div>

              {gallery.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {gallery.map((src, idx) => (
                    <button
                      key={src}
                      type="button"
                      onClick={() => setSelectedImageIndex(idx)}
                      className={`relative h-16 w-16 shrink-0 overflow-hidden rounded-lg border ${selectedImageIndex === idx ? "border-[#bea396]" : "border-white/20"}`}
                      aria-label={`${idx + 1}번 사진 보기`}
                    >
                      <Image src={src} alt={`${selectedInstructor.name} 썸네일 ${idx + 1}`} fill className="object-cover" sizes="64px" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
