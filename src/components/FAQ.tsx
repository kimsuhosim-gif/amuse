// file: src/components/FAQ.tsx
"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
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
    <section id="faq" className="bg-white py-32 md:py-48" aria-label="자주 묻는 질문">
      <div className="mx-auto w-full max-w-[85rem] px-6 lg:px-12">
        <div className="flex flex-col md:flex-row gap-16 lg:gap-32">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="md:w-1/3 flex flex-col"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#ab9885] mb-6">FAQ</p>
            <h2 className="font-display text-4xl leading-[1.2] text-zinc-900 md:text-5xl mb-8">
              Before your<br />first flight
            </h2>
            <p className="text-sm font-light leading-relaxed text-zinc-500 mb-12">
              처음 시작하시는 분들이 가장 많이 궁금해하시는 질문들을 모았습니다. 다른 궁금한 점이 있으시다면 언제든 편하게 문의해 주세요.
            </p>
            <div className="flex flex-col gap-4">
              <a href="http://pf.kakao.com/_xnxnxn" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between border-b border-zinc-200 pb-4 text-xs font-semibold uppercase tracking-widest text-[#ab9885] transition-colors hover:border-[#ab9885]">
                <span>Kakao Consultation</span>
                <Plus size={14} className="transition-transform group-hover:rotate-45" />
              </a>
              <a href="https://booking.naver.com" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between border-b border-zinc-200 pb-4 text-xs font-semibold uppercase tracking-widest text-zinc-900 transition-colors hover:border-zinc-900">
                <span>Book a Class</span>
                <Plus size={14} className="transition-transform group-hover:rotate-45" />
              </a>
            </div>
          </motion.div>

          {/* Accordion List */}
          <div className="md:w-2/3">
            {faqItems.map((item, index) => {
              const isOpen = index === openIndex;
              return (
                <article key={index} className="border-b border-zinc-200 last:border-0">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between py-8 text-left transition-colors hover:text-[#ab9885] focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-2xl text-zinc-900">{item.question}</span>
                    <span className={`ml-4 transition-transform duration-500 ${isOpen ? "rotate-45 text-[#ab9885]" : "rotate-0 text-zinc-300"}`}>
                      <Plus size={24} strokeWidth={1} />
                    </span>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <p className="pb-8 text-base font-light leading-relaxed text-zinc-600 w-11/12">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
