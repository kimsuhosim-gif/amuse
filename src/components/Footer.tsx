// file: src/components/Footer.tsx
import { Instagram, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#121212] pt-32 pb-16 text-zinc-400">
      <div className="mx-auto w-full max-w-[85rem] px-6 lg:px-12">
        <div className="grid gap-16 md:grid-cols-[1.5fr_1fr_1fr_1fr] border-b border-zinc-800 pb-20">

          {/* Brand */}
          <div className="flex flex-col gap-6">
            <h2 className="font-display text-4xl text-white">AMUSE.</h2>
            <p className="text-sm font-light leading-relaxed text-zinc-500 max-w-xs">
              A space where body and mind smile.<br />
              아뮤즈 폴댄스 & 플라잉요가 스튜디오.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a href="https://www.instagram.com/amuse_aerial_studio/" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors">
                <Instagram size={20} strokeWidth={1.5} />
              </a>
              <a href="https://blog.naver.com/amuseofficial" target="_blank" rel="noopener noreferrer" className="text-xs font-semibold tracking-widest uppercase text-zinc-500 hover:text-white transition-colors">
                Blog
              </a>
            </div>
          </div>

          {/* Anyang Branch */}
          <div className="flex flex-col">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#bea396] mb-6">Anyang Studio</h3>
            <ul className="flex flex-col gap-4 text-sm font-light">
              <li className="flex gap-3">
                <MapPin size={16} strokeWidth={1.5} className="shrink-0 text-zinc-600 mt-0.5" />
                <span>경기 안양시 동안구<br />관악대로 103 9층 (에비뉴빌딩)</span>
              </li>
              <li className="flex gap-3">
                <Phone size={16} strokeWidth={1.5} className="shrink-0 text-zinc-600" />
                <span>031-464-0101</span>
              </li>
              <li>
                <a href="https://pf.kakao.com/_xdGyzxj" target="_blank" rel="noopener noreferrer" className="text-xs font-medium tracking-widest uppercase text-[#bea396] hover:text-white transition-colors">
                  Kakao 상담 (안양)
                </a>
              </li>
            </ul>
          </div>

          {/* Sillim Branch */}
          <div className="flex flex-col">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#bea396] mb-6">Sillim Studio</h3>
            <ul className="flex flex-col gap-4 text-sm font-light">
              <li className="flex gap-3">
                <MapPin size={16} strokeWidth={1.5} className="shrink-0 text-zinc-600 mt-0.5" />
                <span>서울 관악구 신사로 116-1<br />3층 (한양빌딩)</span>
              </li>
              <li className="flex gap-3">
                <Phone size={16} strokeWidth={1.5} className="shrink-0 text-zinc-600" />
                <span>010-5934-0012</span>
              </li>
              <li>
                <a href="https://pf.kakao.com/_ukNrG" target="_blank" rel="noopener noreferrer" className="text-xs font-medium tracking-widest uppercase text-[#bea396] hover:text-white transition-colors">
                  Kakao 상담 (신림)
                </a>
              </li>
            </ul>
          </div>

          {/* Nav Links */}
          <div className="flex flex-col">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#bea396] mb-6">Explore</h3>
            <ul className="flex flex-col gap-3 text-sm font-light">
              <li><a href="#about" className="hover:text-white transition-colors">Philosophy</a></li>
              <li><a href="#programs" className="hover:text-white transition-colors">Programs</a></li>
              <li><a href="#studios" className="hover:text-white transition-colors">Studios</a></li>
              <li><a href="#instructors" className="hover:text-white transition-colors">Instructors</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">Reviews</a></li>
            </ul>
          </div>

        </div>

        <div className="mt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs font-light text-zinc-600">
          <div className="flex flex-col gap-1">
            <p>상호: 아뮤즈폴댄스&플라잉요가 | 대표자: 김서아</p>
            <p>신림점: 서울특별시 관악구 신사로 116-1, 3층 (신림동)</p>
            <p>안양점: 경기도 안양시 동안구 관악대로 103, 9층 907호 (비산동, 103에비뉴)</p>
            <p className="mt-2 text-zinc-500">&copy; {new Date().getFullYear()} AMUSE Studio. All rights reserved.</p>
          </div>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
