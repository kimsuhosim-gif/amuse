"use client";

import { Instagram, PhoneCall, SquarePen } from "lucide-react";

const quickLinks = [
  {
    label: "인스타",
    href: "https://www.instagram.com/amuse_aerial_studio/",
    icon: Instagram,
    bg: "bg-gradient-to-br from-pink-500 via-orange-400 to-purple-500",
  },
  {
    label: "블로그",
    href: "https://blog.naver.com/amuseofficial",
    icon: SquarePen,
    bg: "bg-[#21c531]",
  },
  {
    label: "전화",
    href: "tel:031-464-0101",
    icon: PhoneCall,
    bg: "bg-zinc-900",
  },
] as const;

export default function FixedQuickActions() {
  return (
    <div className="fixed right-3 bottom-24 z-[45] md:right-6 md:bottom-8">
      <div className="rounded-2xl border border-white/70 bg-white/85 p-2 shadow-[0_18px_35px_-18px_rgba(30,22,18,0.35)] backdrop-blur-md">
        <div className="flex flex-col gap-2">
          {quickLinks.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={`${item.label} 바로가기`}
                className="group flex items-center gap-2 rounded-xl px-2 py-2 transition-colors hover:bg-zinc-100/80"
              >
                <span
                  className={`flex h-8 w-8 items-center justify-center rounded-lg text-white shadow-sm ${item.bg}`}
                >
                  <Icon size={16} strokeWidth={2} />
                </span>
                <span className="pr-1 text-[11px] font-semibold tracking-[0.02em] text-zinc-700 group-hover:text-zinc-900">
                  {item.label}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
