"use client";

// file: src/components/Instructors.tsx
import { motion } from "framer-motion";
import { User2, MoveRight } from "lucide-react";
import Image from "next/image";

const instructors = {
    anyang: [
        {
            name: "源?쒖븘 (SEOA)",
            role: "???/ ?덉뼇???먯옣",
            image: "/images/instructors/seo_a.jpg",
            quote: "嫄닿컯怨??됰났???꾪븳 ?ㅽ뒠?붿삤濡?n?댁쁺?섍쿋?듬땲??,
            history: [
                "2010 RELAX YOGA, HOT YOGA",
                "2010 VINYASA YOGA, AERIAL YOGA",
                "2011 ?앺솢泥댁쑁吏?꾩옄 2湲?蹂대뵒鍮뚮뵫",
                "2012 ?쇱뒪?먰듃?덉씠??TTC ?섎즺",
                "2013 BASTM ?곕?議곗쭅 ?뚮씪???섎즺",
                "2013~15 ?섎컮肄붾━??諛?媛곸쥌 ?쇳듃?덉뒪????낆긽",
                "2014 ?ㅼ씠?댄듃 ?꾩떆???띾낫紐⑤뜽",
                "2014 PEAK PILATES (?대옒???꾨씪?뚯뒪)",
                "2015 ?곗쟾 ?고썑 ?꾩궛遺 ?꾨씪?뚯뒪 援먯쑁媛뺤궗",
                "2015 紐⑤뜕?꾨씪?뚯뒪 援먯쑁媛뺤궗",
                "2019 ?대똾??2湲?+ 1湲?,
                "2023 ???꾨?利??대똾???뚮씪?됱슂媛 ???,
            ],
            tags: "#ISFP #?먯옣??#移?갔媛먯삦",
            insta: "@SSEOAKIMN",
        },
        {
            name: "?대???(YONI)",
            role: "?덉뼇??媛뺤궗",
            image: "/images/instructors/yoni.jpg",
            quote: "移쒖젅?섍퀬 紐낇솗??由щ뜑?쎌쑝濡?n?먮꼫吏瑜??꾪븯??媛뺤궗?낅땲??,
            history: [
                "2021 ?대똾???꾨Ц媛 3湲?+ 2湲?,
                "2021 ?대똾??吏?꾩옄 ?섎즺",
                "2024 ?꾨씪?뚯뒪 吏?꾩옄 ?섎즺",
                "2021 ?⑦뤃?꾩뒪 ?좎떎?덈궡??媛뺤궗",
                "2023 ???꾨?利??대똾???뚮씪?됱슂媛 ?ㅽ뒠?붿삤 媛뺤궗",
            ],
            tags: "#INFJ #?붾땲T #移쒖젅??,
            insta: "@POLLERINA_YONI",
        },
        {
            name: "理쒖쑀??(YU HYUN)",
            role: "?덉뼇??媛뺤궗",
            quote: "?좎뿰??紐? ?몄븞??留덉쓬.\n湲곕텇 醫뗭? 蹂?붾? ?좊Ъ?섎뒗 媛뺤궗?낅땲??,
            history: [
                "2018 ?붽? 吏?꾩옄 ?섎즺",
                "2022 ?대똾??2湲??섎즺",
                "2023 ?대똾??吏?꾩옄 ?섎즺",
                "2024 ??쇳뤃?꾩뒪 媛뺤궗",
                "2025 ???꾨?利??대똾???뚮씪?됱슂媛 媛뺤궗",
            ],
            tags: "#ISFP #?좏쁽T #?꾨?利덊옒臾몄뼱",
            insta: "@POLE_YUHYUN",
        },
    ],
    sillim: [
        {
            name: "源?쒖븞 (SEOAN)",
            role: "?좊┝???먯옣",
            image: "/images/instructors/seo_an.jpg",
            quote: "?뱀떊???대똾?ㅺ? ?덉닠???????덇쾶,\n?ъ꽭?섍쾶 ?뷀뀒?쇱쓣 吏?꾪빀?덈떎",
            history: [
                "2022 KBPF ?꾨Ц媛 2湲??섎즺",
                "2023 KBPF ?꾨Ц媛 1湲??섎즺",
                "2024 ???ㅽ븯???대똾??媛뺣궓??媛뺤궗",
                "2025 ???꾨?利??대똾???뚮씪?됱슂媛 ?덉뼇???좊┝??媛뺤궗",
            ],
            tags: "#ENFJ #?쒖븞T #?뷀뀒??#?댁븘??,
            insta: "@SEOAN_POLE",
        },
    ],
};

const InstructorCard = ({ info, index }: { info: any, index: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="group relative flex flex-col gap-5 bg-white p-6 md:p-8 rounded-2xl border border-zinc-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] transition-all duration-500 hover:shadow-[0_15px_30px_-15px_rgba(171,152,133,0.3)] hover:-translate-y-1 overflow-hidden"
    >
        {/* Decorative background glow on hover */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 rounded-full bg-[#bea396]/10 blur-2xl transition-all duration-700 opacity-0 group-hover:opacity-100 group-hover:scale-150"></div>

        <div className="flex gap-5 items-center">
            <div className="flex-shrink-0 relative overflow-hidden bg-zinc-50 group-hover:bg-[#bea396]/10 transition-colors duration-500 rounded-full w-14 h-14 md:w-16 md:h-16 flex items-center justify-center">
                {info.image ? (
                    <Image src={info.image} alt={info.name} fill className="object-cover" />
                ) : (
                    <User2 className="text-zinc-300 group-hover:text-[#bea396] transition-colors duration-500 w-6 h-6 md:w-8 md:h-8" />
                )}
            </div>
            <div className="flex flex-col justify-center z-10 pr-6">
                <h4 className="font-display text-lg md:text-xl text-zinc-900 group-hover:text-[#a08b76] transition-colors duration-500 whitespace-nowrap">{info.name}</h4>
                <p className="text-[11px] font-semibold text-[#a68377]">{info.role}</p>
            </div>
        </div>

        <div className="z-10 bg-[#fdfbf9] rounded-xl p-5 border border-zinc-100 flex-1 flex flex-col transition-colors duration-500 group-hover:bg-white group-hover:border-[#bea396]/20">
            <p className="text-[13px] md:text-sm font-medium text-zinc-800 whitespace-pre-wrap leading-relaxed italic mb-5">
                '{info.quote}'
            </p>
            <ul className="text-[11px] md:text-xs font-light text-zinc-500 space-y-2 mb-6 opacity-90 group-hover:opacity-100 transition-opacity duration-500 flex-1">
                {info.history.map((item: string, i: number) => (
                    <li key={i} className="flex gap-2.5">
                        <span className="text-[#bea396] mt-[1px]">??/span> <span className="tracking-wide">{item}</span>
                    </li>
                ))}
            </ul>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-4 border-t border-zinc-200/80">
                <p className="text-[11px] font-semibold text-[#a68377] tracking-wide">{info.tags}</p>
                <a
                    href={`https://instagram.com/${info.insta.replace('@', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] md:text-[11px] font-medium text-zinc-400 group-hover:text-[#bea396] transition-colors hover:underline"
                >
                    {info.insta}
                </a>
            </div>
        </div>
    </motion.div>
);

export default function Instructors() {
    return (
        <section id="instructors" className="bg-[#fdfbf9] py-24 md:py-32">
            <div className="mx-auto w-full max-w-[85rem] px-6 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 md:mb-24 text-center"
                >
                    <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#bea396] mb-4">INSTRUCTORS</p>
                    <h2 className="font-display text-3xl md:text-5xl text-zinc-900 leading-tight">
                        Our Professionals
                    </h2>
                    <p className="mt-6 text-sm font-light text-zinc-500 max-w-2xl mx-auto">
                        ?뱀떊???덉쟾怨??깆옣???꾪빐 ?꾨?利??ㅽ뒠?붿삤媛 ?먮옉?섎뒗 理쒓퀬??媛뺤궗吏꾩쓣 ?뚭컻?⑸땲??<br className="hidden md:block" />
                        媛쒖씤??媛吏?泥댄삎怨??쒖씠?꾩뿉 留욎텣 ?뷀뀒?쇳븳 ?곗묶??寃쏀뿕??蹂댁꽭??
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
                    <div>
                        <div className="mb-8 flex items-center gap-4">
                            <h3 className="font-sans font-extrabold text-2xl text-zinc-800 tracking-tight">?덉뼇??/h3>
                            <div className="h-[1px] flex-1 bg-zinc-200"></div>
                        </div>
                        <div className="flex flex-col gap-6">
                            {instructors.anyang.map((instructor, index) => (
                                <InstructorCard key={`anyang-${index}`} info={instructor} index={index} />
                            ))}
                        </div>
                    </div>

                    <div>
                        <div className="mb-8 flex items-center gap-4">
                            <h3 className="font-sans font-extrabold text-2xl text-zinc-800 tracking-tight">?좊┝??/h3>
                            <div className="h-[1px] flex-1 bg-zinc-200"></div>
                        </div>
                        <div className="flex flex-col gap-6">
                            {instructors.sillim.map((instructor, index) => (
                                <InstructorCard key={`sillim-${index}`} info={instructor} index={index} />
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
