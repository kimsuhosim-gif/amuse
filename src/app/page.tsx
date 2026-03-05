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

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent">
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Programs />
      <Studios />
      <Instructors />
      <Review />
      <FAQ />
      <Footer />
      <MobileCTA />
      <PremiumEffects />
    </main>
  );
}
