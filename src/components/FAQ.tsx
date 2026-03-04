// file: src/components/FAQ.tsx
"use client";

import { useState } from "react";
import { Plus, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqItems = [
  {
    question: "정말 초보자도 가능한가요?",
    answer:
      "물론입니다. 저희 스튜디오를 찾으시는 대부분의 회원님들이 운동이 처음이시거나 초보자입니다. 안전 매트 위에서 기초 자세부터 다치지 않게 꼼꼼히 지도해 드립니다.",
  },
  {
    question: "체험 수업 준비물은 무엇인가요?",
    answer:
      "반팔이나 민소매, 반바지 등 편안한 운동복을 준비해 주세요. 맨몸 운동이므로 실내용 운동화는 필요하지 않습니다. 기타 필요한 안내는 예약 시 상세히 전달해 드립니다.",
  },
  {
    question: "어느 지점을 선택해야 할까요?",
    answer:
      "회원님의 거주지나 주 생활 반경에 맞춰 방문하기 편한 곳(안양 본점 또는 신림 2호점)을 선택해 주세요. 지점별 강사님과 커리큘럼은 동일하게 프리미엄으로 유지됩니다.",
  },
  {
    question: "커플/키즈/전문가 과정도 가능한가요?",
    answer:
      "네, 가능합니다. 프라이빗 레슨(1:1, 2:1)부터 키즈반, 그리고 전문 강사 배출을 위한 자격증반까지 체계적으로 운영하고 있으니 카카오톡 상담을 통해 문의해 주세요.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-32 md:py-48 relative overflow-hidden" aria-label="자주 묻는 질문">
      {/* Background Decor */}
      <div className="absolute left-0 bottom-0 w-[600px] h-[600px] bg-[#ab9885]/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="mx-auto w-full max-w-[85rem] px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="lg:w-[40%] flex flex-col"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-[1px] bg-[#ab9885]"></div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#ab9885]">FAQ</p>
            </div>

            <h2 className="font-display text-4xl leading-[1.15] text-zinc-900 md:text-5xl lg:text-6xl mb-8">
              Before your<br /> <span className="text-[#ab9885] italic font-light">first flight</span>
            </h2>

            <p className="text-[15px] font-light leading-[1.8] text-zinc-500 mb-12 max-w-md">
              처음 시작하시는 분들이 가장 많이 궁금해하시는 질문들을 모았습니다. 다른 궁금한 점이 있으시다면 언제든 편하게 문의해 주세요.
            </p>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-4">
              <a href="http://pf.kakao.com/_xnxnxn" target="_blank" rel="noopener noreferrer" className="group relative flex items-center justify-between px-6 py-4 bg-[#faf9f7] rounded-2xl border border-zinc-100 overflow-hidden transition-all duration-500 hover:border-[#ab9885]/30 hover:shadow-md hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer" style={{ backgroundSize: '200% 100%' }}></div>
                <span className="relative z-10 text-[13px] font-bold tracking-wider text-zinc-800">카카오톡 1:1 상담</span>
                <div className="relative z-10 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:bg-[#ab9885] transition-colors duration-500">
                  <ArrowRight size={14} className="text-zinc-400 group-hover:text-white transition-colors duration-500" />
                </div>
              </a>

              <a href="https://booking.naver.com" target="_blank" rel="noopener noreferrer" className="group relative flex items-center justify-between px-6 py-4 bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden transition-all duration-500 hover:shadow-lg hover:-translate-y-1">
                <span className="relative z-10 text-[13px] font-bold tracking-wider text-white">체험 수업 예약하기</span>
                <div className="relative z-10 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white transition-colors duration-500">
                  <ArrowRight size={14} className="text-white group-hover:text-zinc-900 transition-colors duration-500" />
                </div>
              </a>
            </div>
          </motion.div>

          {/* Accordion List */}
          <div className="lg:w-[60%]">
            <div className="flex flex-col gap-4">
              {faqItems.map((item, index) => {
                const isOpen = index === openIndex;
                return (
                  <motion.article
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`rounded-2xl border transition-all duration-500 overflow-hidden ${isOpen ? "bg-white border-[#ab9885]/20 shadow-[0_10px_40px_-15px_rgba(171,152,133,0.15)]" : "bg-transparent border-zinc-100 hover:border-[#ab9885]/20 hover:bg-[#faf9f7]"
                      }`}
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="flex w-full items-center justify-between p-6 md:p-8 text-left focus:outline-none group"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-center gap-6">
                        <span className={`text-[11px] font-bold tracking-widest transition-colors duration-500 ${isOpen ? "text-[#ab9885]" : "text-zinc-300"}`}>
                          0{index + 1}
                        </span>
                        <span className={`font-sans font-semibold text-lg md:text-xl transition-colors duration-500 ${isOpen ? "text-zinc-900" : "text-zinc-600 group-hover:text-zinc-900"}`}>
                          {item.question}
                        </span>
                      </div>
                      <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${isOpen ? "bg-[#ab9885]/10 text-[#ab9885] rotate-45" : "bg-zinc-100/50 text-zinc-400 group-hover:bg-zinc-200"}`}>
                        <Plus size={18} strokeWidth={2} />
                      </div>
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: "easeOut" }}
                        >
                          <div className="px-6 pb-8 md:px-8 md:pl-[4.5rem] md:pb-10">
                            <div className="w-12 h-[1px] bg-zinc-100 mb-6"></div>
                            <p className="text-[15px] font-light leading-[1.8] text-zinc-600">
                              {item.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
