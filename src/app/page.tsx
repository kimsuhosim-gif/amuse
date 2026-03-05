import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Programs from "@/components/Programs";
import Studios from "@/components/Timetable";
import Instructors from "@/components/Instructors";
import Review from "@/components/Review";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";
import PremiumEffects from "@/components/PremiumEffects";
import Script from "next/script";

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SportsActivityLocation",
      "@id": "https://amuse-aerial.vercel.app/#anyang",
      "name": "아뮤즈 에어리얼 스튜디오 안양점",
      "image": "https://amuse-aerial.vercel.app/images/anyang.jpg",
      "telephone": "031-464-0101",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "경기도 안양시 동안구",
        "streetAddress": "관악대로 103 9층",
        "addressCountry": "KR"
      }
    },
    {
      "@type": "SportsActivityLocation",
      "@id": "https://amuse-aerial.vercel.app/#sillim",
      "name": "아뮤즈 에어리얼 스튜디오 신림점",
      "image": "https://amuse-aerial.vercel.app/images/sillim.jpg",
      "telephone": "010-5934-0012",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "서울 관악구",
        "streetAddress": "신사로 116-1 3층",
        "addressCountry": "KR"
      }
    }
  ]
};

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent">
      <Script
        id="amuse-localbusiness-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <Navbar />
      <Hero />
      <div className="defer-section">
        <Marquee />
      </div>
      <div className="defer-section">
        <About />
      </div>
      <div className="defer-section">
        <Programs />
      </div>
      <div className="defer-section">
        <Studios />
      </div>
      <div className="defer-section">
        <Instructors />
      </div>
      <div className="defer-section">
        <Review />
      </div>
      <div className="defer-section">
        <FAQ />
      </div>
      <div className="defer-section">
        <Footer />
      </div>
      <MobileCTA />
      <PremiumEffects />
    </main>
  );
}


