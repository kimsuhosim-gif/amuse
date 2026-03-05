"use client";

// file: src/components/Navbar.tsx
import Link from "next/link";
import { ArrowUpRight, Instagram } from "lucide-react";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "브랜드 철학", href: "#about", sub: "아뮤즈가 지향하는 가치" },
  { label: "프로그램", href: "#programs", sub: "폴댄스 · 플라잉요가 안내" },
  { label: "지점 안내", href: "#studios", sub: "안양/신림 위치와 시간표" },
  { label: "강사진", href: "#instructors", sub: "전문 강사진 프로필" },
  { label: "후기", href: "#reviews", sub: "회원님들의 실제 수강 후기" },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    setIsScrolled(latest > 50);
    setIsHidden(latest > previous && latest > 150 && !isMenuOpen);
  });

  // Lock scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMenuOpen]);

  return (
    <motion.header
      variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
      animate={isHidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed inset-x-0 top-0 z-50 flex justify-center py-3 transition-all duration-500 ${isScrolled
        ? "bg-white/90 shadow-[0_4px_24px_-10px_rgba(0,0,0,0.06)] backdrop-blur-xl"
        : "bg-transparent"
        }`}
    >
      <nav className="flex w-full max-w-7xl items-center justify-between px-6 md:px-12">
        {/* Logo Text */}
        <Link href="/" className="relative block">
          <span className={`font-display text-2xl tracking-[0.15em] transition-colors duration-500 ${isScrolled ? "text-zinc-900" : "text-white"}`}>
            AMUSE
          </span>
        </Link>

        <div className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-[12px] font-medium tracking-[0.02em] transition-colors ${isScrolled ? "text-zinc-500 hover:text-zinc-900" : "text-white/70 hover:text-white"
                }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-5 mr-2">
            <a aria-label="아뮤즈 인스타그램 열기" href="https://www.instagram.com/amuse_aerial_studio/" target="_blank" rel="noopener noreferrer" className={`transition-colors ${isScrolled ? "text-zinc-500 hover:text-zinc-900" : "text-white/70 hover:text-white"}`}>
              <Instagram size={16} strokeWidth={1.5} />
            </a>
            <a aria-label="아뮤즈 네이버 블로그 열기" href="https://blog.naver.com/amuseofficial" target="_blank" rel="noopener noreferrer" className={`text-[10px] uppercase tracking-[0.15em] transition-colors ${isScrolled ? "text-zinc-500 hover:text-zinc-900" : "text-white/70 hover:text-white"}`}>
              BLOG
            </a>
            <a aria-label="아뮤즈 카카오 채널 열기" href="https://pf.kakao.com/_xdGyzxj" target="_blank" rel="noopener noreferrer" className={`text-[10px] uppercase tracking-[0.15em] transition-colors ${isScrolled ? "text-zinc-500 hover:text-zinc-900" : "text-white/70 hover:text-white"}`}>
              KAKAO
            </a>
          </div>
          <div className="hidden md:flex gap-2">
            <a
              href="https://map.naver.com/p/search/%EC%95%84%EB%AE%A4%EC%A6%88%ED%8F%B4%EB%8C%84%EC%8A%A4/place/1785101854?placePath=/ticket?abtExp=PLACE-AD-REVIEWIMG:4&bk_query=%EC%95%84%EB%AE%A4%EC%A6%88%ED%8F%B4%EB%8C%84%EC%8A%A4&entry=pll&from=nx&fromNxList=true&from=map&fromPanelNum=2&timestamp=202602271037&locale=ko&svcName=map_pcv5&searchText=%EC%95%84%EB%AE%A4%EC%A6%88%ED%8F%B4%EB%8C%84%EC%8A%A4&bk_query=%EC%95%84%EB%AE%A4%EC%A6%88%ED%8F%B4%EB%8C%84%EC%8A%A4&entry=pll&from=nx&fromNxList=true&fromPanelNum=2&timestamp=202602271037&locale=ko&svcName=map_pcv5&searchText=%EC%95%84%EB%AE%A4%EC%A6%88%ED%8F%B4%EB%8C%84%EC%8A%A4&searchType=place&c=15.00,0,0,0,dh"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center rounded-none border px-3 sm:px-4 py-2 sm:py-2.5 text-[10px] font-medium transition-all duration-500 ${isScrolled
                ? "border-zinc-900 text-zinc-900 hover:bg-zinc-900 hover:text-white"
                : "border-white/40 text-white hover:bg-white hover:text-black"
                }`}
              aria-label="안양점 체험예약 페이지 열기"
            >
              안양 체험예약
            </a>
            <a
              href="https://map.naver.com/p/search/%EC%95%84%EB%AE%A4%EC%A6%88%ED%8F%B4%EB%8C%84%EC%8A%A4/place/1242872971?c=15.00,0,0,0,dh&placePath=/ticket?bk_query=%EC%95%84%EB%AE%A4%EC%A6%88%ED%8F%B4%EB%8C%84%EC%8A%A4&entry=bmp&from=map&fromPanelNum=2&timestamp=202602271047&locale=ko&svcName=map_pcv5&searchText=%EC%95%84%EB%AE%A4%EC%A6%88%ED%8F%B4%EB%8C%84%EC%8A%A4"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center rounded-none border px-3 sm:px-4 py-2 sm:py-2.5 text-[10px] font-medium transition-all duration-500 ${isScrolled
                ? "border-zinc-900 text-zinc-900 hover:bg-zinc-900 hover:text-white"
                : "border-white/40 text-white hover:bg-white hover:text-black"
                }`}
              aria-label="신림점 체험예약 페이지 열기"
            >
              신림 체험예약
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 transition-colors ${isScrolled ? "text-zinc-900" : "text-white"}`}
            aria-label={isMenuOpen ? "모바일 메뉴 닫기" : "모바일 메뉴 열기"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu-panel"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}
            className="fixed inset-0 top-[60px] z-40 h-[calc(100dvh-60px)] w-full bg-white px-6 py-12 md:hidden"
            id="mobile-menu-panel"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_8%,rgba(190,163,150,0.2),transparent_36%),radial-gradient(circle_at_88%_88%,rgba(190,163,150,0.14),transparent_34%),linear-gradient(180deg,#fcf8f4_0%,#f7f3ef_100%)]" />
            <div className="relative z-10 flex h-full flex-col">
              <div className="mb-8 rounded-2xl border border-[#dfd4cc] bg-white/75 px-5 py-4 backdrop-blur-sm shadow-[0_18px_35px_-28px_rgba(54,41,28,0.35)]">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#a68377]">Quick Menu</p>
                <p className="mt-1 text-sm text-zinc-600">원하는 섹션으로 바로 이동하세요.</p>
              </div>

              <div className="flex flex-col gap-3">
              {navItems.map((item, idx) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="group"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-center justify-between rounded-2xl border border-[#e5dbd3] bg-white/80 px-4 py-4 shadow-[0_12px_30px_-24px_rgba(44,34,25,0.38)] transition-all duration-300 group-hover:-translate-y-[1px] group-hover:border-[#cab6a7] group-hover:bg-white"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-[11px] font-bold tracking-[0.08em] text-[#b39d90]">0{idx + 1}</span>
                      <div className="flex flex-col">
                        <span className="font-sans text-[1.9rem] font-extrabold leading-[1.06] tracking-[-0.02em] text-zinc-900">{item.label}</span>
                        <span className="mt-1 text-[11px] text-zinc-500">{item.sub}</span>
                      </div>
                    </div>
                    <ArrowUpRight size={18} className="text-zinc-400 transition-colors group-hover:text-[#a68377]" />
                  </motion.div>
                </Link>
              ))}

              </div>

              <div className="mt-auto flex items-center justify-between border-t border-[#ddd3cb] pt-5 text-[11px] text-zinc-500">
                <span className="tracking-[0.12em] uppercase">AMUSE AERIAL STUDIO</span>
                <span className="text-[#9f8677]">Premium Class</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
