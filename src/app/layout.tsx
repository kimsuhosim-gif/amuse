import type { Metadata } from "next";
import { Playfair_Display, Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const display = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const sans = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-sans-kr",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://amuse-aerial-studio.vercel.app"),
  title: "아뮤즈 에어리얼 스튜디오 | 신림·안양 폴댄스 & 플라잉요가",
  description:
    "자연광 화이트톤 프리미엄 공간에서 시작하는 폴댄스·플라잉요가. 아뮤즈 에어리얼 스튜디오 신림점/안양점 체험 예약 안내.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${display.variable} ${sans.variable}`}>
      <body className="bg-white text-zinc-900 antialiased">{children}</body>
    </html>
  );
}
