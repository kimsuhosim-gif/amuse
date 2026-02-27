import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Programs from "@/components/Programs";
import Studios from "@/components/Timetable";
import Instructors from "@/components/Instructors";
import Review from "@/components/Review";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent">
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Studios />
      <Instructors />
      <Review />
      <FAQ />
      <Footer />

      {/* Mobile CTA Bar */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/20 bg-zinc-900/90 px-4 py-3 backdrop-blur-md md:hidden">
        <div className="mx-auto flex max-w-md gap-2">
          <a
            href="https://map.naver.com/p/search/%EC%95%84%EB%AE%A4%EC%A6%88%ED%8F%B4%EB%8C%84%EC%8A%A4/place/1785101854?placePath=/ticket"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="안양점 예약"
            className="flex flex-1 items-center justify-center rounded-sm bg-white px-2 py-3 text-[11px] font-semibold tracking-widest text-zinc-900 transition-colors active:bg-zinc-200"
          >
            안양 예약
          </a>
          <a
            href="https://map.naver.com/p/search/%EC%95%84%EB%AE%A4%EC%A6%88%ED%8F%B4%EB%8C%84%EC%8A%A4/place/1242872971?placePath=/ticket"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="신림점 예약"
            className="flex flex-1 items-center justify-center rounded-sm bg-white px-2 py-3 text-[11px] font-semibold tracking-widest text-zinc-900 transition-colors active:bg-zinc-200"
          >
            신림 예약
          </a>
          <a
            href="https://pf.kakao.com/_xdGyzxj"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="카카오톡 상담으로 이동"
            className="flex flex-2 items-center justify-center rounded-sm border border-white/30 px-3 py-3 text-[11px] font-semibold tracking-widest text-white transition-colors active:bg-white/10"
          >
            카톡 문의
          </a>
        </div>
      </div>
    </main>
  );
}
