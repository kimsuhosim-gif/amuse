"use client";

// file: src/components/Navbar.tsx
import Link from "next/link";
import { Instagram } from "lucide-react";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const navItems = [
  { label: "PHILOSOPHY", href: "#about" },
  { label: "PROGRAMS", href: "#programs" },
  { label: "STUDIOS", href: "#studios" },
  { label: "INSTRUCTORS", href: "#instructors" },
  { label: "REVIEWS", href: "#reviews" },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    setIsScrolled(latest > 50);
    setIsHidden(latest > previous && latest > 150);
  });

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
              className={`text-[10px] uppercase tracking-[0.2em] transition-colors ${isScrolled ? "text-zinc-500 hover:text-zinc-900" : "text-white/70 hover:text-white"
                }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-5 mr-2">
            <a href="https://www.instagram.com/amuse_aerial_studio/" target="_blank" rel="noopener noreferrer" className={`transition-colors ${isScrolled ? "text-zinc-500 hover:text-zinc-900" : "text-white/70 hover:text-white"}`}>
              <Instagram size={16} strokeWidth={1.5} />
            </a>
            <a href="https://blog.naver.com/amuseofficial" target="_blank" rel="noopener noreferrer" className={`text-[10px] uppercase tracking-[0.15em] transition-colors ${isScrolled ? "text-zinc-500 hover:text-zinc-900" : "text-white/70 hover:text-white"}`}>
              BLOG
            </a>
            <a href="https://pf.kakao.com/_xdGyzxj" target="_blank" rel="noopener noreferrer" className={`text-[10px] uppercase tracking-[0.15em] transition-colors ${isScrolled ? "text-zinc-500 hover:text-zinc-900" : "text-white/70 hover:text-white"}`}>
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
            >
              신림 체험예약
            </a>
          </div>
        </div>
      </nav>
    </motion.header>
  );
}
