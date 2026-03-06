import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const display = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://amuse-aerial.vercel.app"),
  title: {
    default: "아뮤즈 에어리얼 스튜디오 | 신림·안양 폴댄스 & 플라잉요가",
    template: "%s | AMUSE Aerial Studio",
  },
  description:
    "자연광 화이트톤 프리미엄 공간에서 시작하는 폴댄스·플라잉요가. 아뮤즈 에어리얼 스튜디오 신림점/안양점 체험 예약 안내.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://amuse-aerial.vercel.app",
    siteName: "AMUSE Aerial Studio",
    title: "아뮤즈 에어리얼 스튜디오 | 신림·안양 폴댄스 & 플라잉요가",
    description:
      "자연광 화이트톤 프리미엄 공간에서 시작하는 폴댄스·플라잉요가. 신림점/안양점 체험 예약 안내.",
    images: [
      {
        url: "/images/hero-final-v1.png",
        width: 1920,
        height: 1080,
        alt: "AMUSE Aerial Studio Hero",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "아뮤즈 에어리얼 스튜디오 | 신림·안양 폴댄스 & 플라잉요가",
    description:
      "자연광 화이트톤 프리미엄 공간에서 시작하는 폴댄스·플라잉요가. 신림점/안양점 체험 예약 안내.",
    images: ["/images/hero-final-v1.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${display.variable}`}>
      <body className="bg-white text-zinc-900 antialiased">{children}</body>
    </html>
  );
}
