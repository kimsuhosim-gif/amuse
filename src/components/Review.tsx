// file: src/components/Review.tsx
"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

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
    text: "리뷰가 굉장히 만족한다는 느낌이 들었고 사진 속 사람들도 멋져 보여 체험했습니다. 결과는 대만족!! 강사님이 너무너무 친절하고 기분 좋게 잘 알려주셔서 힘들지 않고 재밌게 수업했습니다. 체험 후 고민 없이 바로 3개월 등록했어요!! 사진도 열정적으로 찍어주셔서 인생샷 남겼습니다.",
  },
  {
    author: "2년 다닌 수강생님",
    text: "아뮤즈에서 2년 정도 플라잉 요가 배우고 잠시 쉬다가 폴댄스도 벌써 반년이 됐네요! 처음엔 봉에 매달리기도 힘들어했는데 이제 뒤집기도 하고 정~말 많은 발전이 있었어요. 이게 다 잘 가르쳐주시는 쌤들이 있었기에 가능합니다.",
  },
  {
    author: "폴과 플라잉 병행 회원님",
    text: "폴도 재밌지만 플라잉 요가도 너무 재밌으니 꼭 체험해 보길 추천드립니다! 특히 어깨, 목 통증 있는 분들은 플라잉 요가가 강추입니다!! 매달 플라잉과 폴 특강이 한 번씩 있어서 지루하지 않게 너무 재밌게 할 수 있답니다 ^^",
  },
];

export default function Review() {
  return (
    <section id="reviews" className="bg-[#efece7] py-32 md:py-48" aria-label="회원 리뷰">
      <div className="mx-auto w-full max-w-[85rem] px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#ab9885] mb-6">Real Stories</p>
            <h2 className="font-display text-4xl leading-[1.2] text-zinc-900 md:text-5xl lg:text-6xl">
              Voices from our<br className="hidden md:block" /> members
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex flex-col gap-4 text-sm font-light text-zinc-600"
          >
            {reviewStats.map((stat) => (
              <p key={stat.branch} className="border-b border-zinc-300 pb-2">
                <span className="font-semibold text-zinc-800 pr-4">{stat.branch}</span> {stat.info}
              </p>
            ))}
          </motion.div>
        </div>

        {/* Keywords */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex flex-wrap gap-3 mb-16"
        >
          {reviewKeywords.map((kw, i) => (
            <span key={i} className="rounded-full border border-zinc-300 px-5 py-2 text-xs text-zinc-600">
              {kw}
            </span>
          ))}
        </motion.div>

        {/* Review Cards */}
        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {reviews.map((review, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.15 + 0.2 }}
              className="group flex flex-col justify-between bg-white p-10 shadow-sm transition-shadow hover:shadow-xl hover:shadow-black/5"
            >
              <div>
                <Quote size={24} strokeWidth={1} className="text-[#ab9885] mb-8 opacity-50 transition-opacity group-hover:opacity-100" />
                <p className="text-sm font-light leading-relaxed text-zinc-600 mb-12">
                  &quot;{review.text}&quot;
                </p>
              </div>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-zinc-900">{review.author}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
