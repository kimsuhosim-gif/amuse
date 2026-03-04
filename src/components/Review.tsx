// file: src/components/Review.tsx
"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const reviewStats = [
  { branch: "안양 본점", info: "방문자 리뷰 373건 · 블로그 리뷰 102건" },
  { branch: "신림 2호점", info: "방문자 리뷰 39건 · 블로그 리뷰 35건" },
];

const reviewKeywords = [
  "자세를 꼼꼼히 봐주세요",
  "수업이 체계적이에요",
  "선생님 실력이 좋아요",
  "시설이 깔끔해요",
  "맞춤 케어를 잘해줘요",
  "친절해요",
  "분위기가 편안해요",
  "상담이 자세해요",
];

const reviews = [
  {
    author: "플라잉 요가 체험 방문자님",
    rating: 5,
    text: "리뷰가 굉장히 만족한다는 느낌이 들었고 사진 속 사람들도 멋져 보여 체험했습니다. 결과는 대만족!! 강사님이 너무너무 친절하고 기분 좋게 잘 알려주셔서 힘들지 않고 재밌게 수업했습니다. 체험 후 고민 없이 바로 3개월 등록했어요!! 사진도 열정적으로 찍어주셔서 인생샷 남겼습니다.",
  },
  {
    author: "2년 다닌 수강생님",
    rating: 5,
    text: "아뮤즈에서 2년 정도 플라잉 요가 배우고 잠시 쉬다가 폴댄스도 벌써 반년이 됐네요! 처음엔 봉에 매달리기도 힘들어했는데 이제 뒤집기도 하고 정~말 많은 발전이 있었어요. 이게 다 잘 가르쳐주시는 쌤들이 있었기에 가능합니다.",
  },
  {
    author: "폴과 플라잉 병행 회원님",
    rating: 5,
    text: "폴도 재밌지만 플라잉 요가도 너무 재밌으니 꼭 체험해 보길 추천드립니다! 특히 어깨, 목 통증 있는 분들은 플라잉 요가가 강추입니다!! 매달 플라잉과 폴 특강이 한 번씩 있어서 지루하지 않게 너무 재밌게 할 수 있답니다 ^^",
  },
];

export default function Review() {
  return (
    <section id="reviews" className="bg-[#f6f4f1] py-32 md:py-48 relative overflow-hidden" aria-label="회원 리뷰">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#ab9885]/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

      <div className="mx-auto w-full max-w-[85rem] px-6 lg:px-12 relative z-10">

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="flex-1"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-[#ab9885]"></div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#ab9885]">Real Stories</p>
            </div>
            <h2 className="font-display text-4xl leading-[1.15] text-zinc-900 md:text-5xl lg:text-7xl">
              Voices from our<br /> <span className="text-[#ab9885] italic font-light">members</span>
            </h2>
          </motion.div>

          {/* Stats area stylized */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex w-full lg:w-auto flex-col gap-5 sm:flex-row lg:flex-col lg:items-end"
          >
            {reviewStats.map((stat) => (
              <div key={stat.branch} className="flex flex-col bg-white/60 backdrop-blur-md px-7 py-5 rounded-2xl border border-white shadow-sm w-full sm:w-1/2 lg:w-[320px]">
                <span className="font-sans font-extrabold text-xl text-zinc-800 mb-1.5 tracking-tight">{stat.branch}</span>
                <span className="text-[13px] font-medium text-zinc-500">{stat.info}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Refined Keywords */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap gap-3 mb-16 md:mb-24"
        >
          {reviewKeywords.map((kw, i) => (
            <span
              key={i}
              className="rounded-xl px-5 py-2.5 text-[13px] font-semibold tracking-wide transition-all duration-300 border border-zinc-200/80 bg-white/80 text-zinc-600 hover:border-[#ab9885]/50 hover:bg-[#ab9885]/5 hover:text-zinc-900 cursor-default shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              <span className="text-[#ab9885] font-light mr-1">#</span> {kw}
            </span>
          ))}
        </motion.div>

        {/* Premium Review Cards */}
        <div className="grid gap-6 md:grid-cols-3 lg:gap-10">
          {reviews.map((review, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.15 + 0.2 }}
              className="group relative flex flex-col justify-between bg-white rounded-[2rem] p-8 md:p-10 border border-zinc-100 shadow-[0_8px_30px_-15px_rgba(0,0,0,0.04)] transition-all duration-500 hover:shadow-[0_20px_40px_-20px_rgba(171,152,133,0.3)] hover:-translate-y-2 overflow-hidden"
            >
              {/* Subtle top gradient line */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-[#ab9885]/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-8">
                  <div className="flex gap-1 bg-[#faf9f7] px-3 py-1.5 rounded-full border border-zinc-100">
                    {[...Array(review.rating)].map((_, idx) => (
                      <Star key={idx} size={12} className="fill-[#ab9885] text-[#ab9885]" />
                    ))}
                  </div>
                  <Quote size={40} strokeWidth={1} className="text-[#f0eae3] -mt-2 -mr-2 transition-all duration-500 group-hover:text-[#ab9885]/20 group-hover:scale-110" />
                </div>

                <p className="text-[15px] font-light leading-[1.8] text-zinc-700 mb-12 relative">
                  {review.text}
                </p>
              </div>

              <div className="relative z-10 mt-auto pt-6 border-t border-zinc-100 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#f6f4f1] to-white border border-zinc-200 flex items-center justify-center shadow-inner">
                  <span className="text-[#ab9885] text-lg font-display">{review.author.slice(0, 1)}</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-zinc-900">{review.author}</p>
                  <p className="text-[10px] text-zinc-400 mt-0.5 uppercase tracking-widest font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ab9885]/60 inline-block animate-pulse"></span>
                    Verified Member
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
