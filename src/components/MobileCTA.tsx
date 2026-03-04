"use client";

import { useState } from "react";
import { X, CalendarCheck, MessageCircle, MoveRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function MobileCTA() {
    const [modalType, setModalType] = useState<"book" | "inquiry" | null>(null);

    const links = {
        anyang: {
            book: "https://map.naver.com/p/search/%EC%95%84%EB%AE%A4%EC%A6%88%ED%8F%B4%EB%8C%84%EC%8A%A4/place/1785101854?placePath=/ticket",
            inquiry: "https://pf.kakao.com/_xdGyzxj"
        },
        sillim: {
            book: "https://map.naver.com/p/search/%EC%95%84%EB%AE%A4%EC%A6%88%ED%8F%B4%EB%8C%84%EC%8A%A4/place/1242872971?placePath=/ticket",
            inquiry: "https://pf.kakao.com/_ukNrG"
        }
    };

    return (
        <>
            <div className="fixed inset-x-0 bottom-0 z-40 bg-zinc-900/90 backdrop-blur-xl pb-safe md:hidden shadow-[0_-10px_40px_rgba(0,0,0,0.3)] border-t border-white/10">
                <div className="mx-auto flex max-w-md gap-3 px-4 py-4 md:py-5">
                    <button
                        onClick={() => setModalType("book")}
                        className="flex flex-1 items-center justify-center gap-2 rounded-[14px] bg-white px-4 py-3.5 text-[14px] font-[800] tracking-wide text-zinc-900 shadow-[0_4px_15px_rgba(255,255,255,0.15)] transition-transform active:scale-[0.97]"
                    >
                        <CalendarCheck size={18} strokeWidth={2.5} />
                        <span>예약하기</span>
                    </button>
                    <button
                        onClick={() => setModalType("inquiry")}
                        className="flex flex-1 items-center justify-center gap-2 rounded-[14px] bg-[#fae100] px-4 py-3.5 text-[14px] font-[900] tracking-wide text-[#371d1e] shadow-[0_4px_15px_rgba(250,225,0,0.2)] transition-transform active:scale-[0.97]"
                    >
                        <MessageCircle size={18} strokeWidth={2.5} />
                        <span>카톡상담</span>
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {modalType && (
                    <div className="fixed inset-0 z-50 flex flex-col justify-end md:hidden">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setModalType(null)}
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "100%" }}
                            transition={{ type: "spring", damping: 28, stiffness: 240 }}
                            className="relative rounded-t-[32px] bg-white px-6 pb-12 pt-8 shadow-2xl"
                        >
                            <button
                                onClick={() => setModalType(null)}
                                className="absolute right-5 top-5 p-2 text-zinc-400 hover:text-zinc-600 bg-zinc-100 rounded-full transition-colors"
                                aria-label="닫기"
                            >
                                <X size={20} />
                            </button>

                            <div className="mb-8 pl-2 w-full flex flex-col items-center">
                                <span className="h-1 w-12 bg-zinc-200 rounded-full mb-6"></span>
                                <h3 className="font-display font-[800] text-2xl md:text-3xl text-zinc-900 tracking-tight text-center">
                                    어느 지점으로
                                    <br />
                                    {modalType === "book" ? "예약하실까요?" : "문의하실까요?"}
                                </h3>
                            </div>

                            <div className="flex flex-col gap-3">
                                <a
                                    href={links.anyang[modalType]}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex flex-row items-center justify-between rounded-2xl bg-[#fdfbf9] border border-zinc-100 p-6 transition-all duration-300 active:bg-zinc-100"
                                    onClick={() => setModalType(null)}
                                >
                                    <div className="flex flex-col">
                                        <span className="text-[17px] font-[800] text-zinc-900 mb-1">안양 본점</span>
                                        <span className="text-[12px] font-medium text-zinc-500">동안구 관평로 103, 9층</span>
                                    </div>
                                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-zinc-400 group-hover:text-zinc-900 group-active:text-zinc-900 transition-colors">
                                        <MoveRight size={18} strokeWidth={2} />
                                    </div>
                                </a>
                                <a
                                    href={links.sillim[modalType]}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex flex-row items-center justify-between rounded-2xl bg-[#fdfbf9] border border-zinc-100 p-6 transition-all duration-300 active:bg-zinc-100"
                                    onClick={() => setModalType(null)}
                                >
                                    <div className="flex flex-col">
                                        <span className="text-[17px] font-[800] text-zinc-900 mb-1">신림 2호점</span>
                                        <span className="text-[12px] font-medium text-zinc-500">관악구 신사로 116-1, 3층</span>
                                    </div>
                                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-zinc-400 group-hover:text-zinc-900 group-active:text-zinc-900 transition-colors">
                                        <MoveRight size={18} strokeWidth={2} />
                                    </div>
                                </a>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}
