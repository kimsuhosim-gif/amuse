"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";

const branchCards = [
  {
    id: "anyang",
    name: "안양 본점",
    desc: "중심상권 접근성 · 탄탄한 입문 커리큘럼",
    href: "#studios-anyang",
  },
  {
    id: "sinrim",
    name: "신림 2호점",
    desc: "역세권 접근성 · 직장인 저녁/주말 추천",
    href: "#studios-sinrim",
  },
] as const;

export default function BranchQuickEntry() {
  return (
    <section className="bg-[#f7f3ef] py-8 md:py-12" aria-label="지점 빠른 선택">
      <div className="mx-auto w-full max-w-[85rem] px-6 lg:px-12">
        <div className="mb-4 flex items-center justify-between">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#a68377]">Branch Quick Select</p>
          <p className="text-[11px] text-zinc-500">관심 지점을 먼저 선택해보세요</p>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {branchCards.map((branch, index) => (
            <motion.a
              key={branch.id}
              href={branch.href}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="group rounded-2xl border border-[#e1d5cb] bg-white p-5 shadow-[0_14px_28px_-24px_rgba(62,46,31,0.45)] transition-all duration-300 hover:-translate-y-[1px] hover:border-[#c8afa0]"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f4ebe4] text-[#9f7d69]">
                    <MapPin size={14} />
                  </span>
                  <h3 className="font-sans text-[1.06rem] font-bold text-zinc-900">{branch.name}</h3>
                </div>
                <ArrowRight size={16} className="text-zinc-400 transition-colors group-hover:text-[#9f7d69]" />
              </div>
              <p className="mt-3 text-[13px] text-zinc-600">{branch.desc}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
