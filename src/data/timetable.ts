export type BranchId = "anyang" | "sinrim";
export type DayOfWeek = "MON" | "TUE" | "WED" | "THU" | "FRI" | "SAT";
export type ClassItem = {
  time: string;
  name: string;
  level: string;
  subtitle?: string;
};

export const timetableData: Record<BranchId, Record<DayOfWeek, ClassItem[]>> = {
  anyang: {
    MON: [
      { time: "11:00", name: "플라잉요가", level: "초급" },
      { time: "17:00", name: "폴&플라잉", level: "키즈반" },
      { time: "19:20", name: "폴댄스", level: "입문/초중급" },
      { time: "20:30", name: "문어의 꿈", level: "신체컨디셔닝" },
    ],
    TUE: [
      { time: "11:00", name: "폴댄스", level: "초급" },
      { time: "19:20", name: "플라잉요가", level: "초급" },
      { time: "20:30", name: "폴댄스", level: "초급" },
    ],
    WED: [
      { time: "11:00", name: "플라잉요가", level: "입문" },
      { time: "12:30", name: "폴댄스", level: "입문/중급" },
      { time: "17:00", name: "폴&플라잉", level: "키즈반" },
      { time: "19:20", name: "플라잉요가", level: "입문" },
      { time: "20:30", name: "플라잉요가", level: "초중급/중급" },
    ],
    THU: [
      { time: "11:00", name: "폴댄스", level: "초중급" },
      { time: "20:30", name: "폴댄스", level: "입문/중급" },
    ],
    FRI: [
      { time: "11:00", name: "추가개설예정", level: "" },
      { time: "17:00", name: "폴&플라잉", level: "키즈반" },
      { time: "19:20", name: "플라잉요가", level: "초급" },
      { time: "20:30", name: "폴댄스", level: "입문/중고급" },
    ],
    SAT: [
      { time: "11:00", name: "플라잉요가", level: "입문" },
      { time: "12:30", name: "폴댄스", level: "입문/중급" },
    ],
  },
  sinrim: {
    MON: [
      { time: "17:00", name: "폴&플라잉", level: "키즈반" },
      { time: "19:40", name: "폴댄스", level: "입문/중고급" },
      { time: "20:50", name: "플라잉요가", level: "올레벨" },
    ],
    TUE: [
      { time: "12:00", name: "폴댄스", level: "입문/초중급" },
      { time: "17:00", name: "자격증반", level: "마스터클래스 준비반 (19:40~)" },
    ],
    WED: [
      { time: "17:00", name: "폴&플라잉", level: "키즈반" },
      { time: "20:00", name: "폴댄스", level: "입문/초중급" },
    ],
    THU: [
      { time: "12:00", name: "플라잉요가", level: "올레벨" },
      { time: "19:40", name: "플라잉요가", level: "올레벨" },
      { time: "20:50", name: "폴댄스", level: "초급/중급" },
    ],
    FRI: [
      { time: "17:00", name: "폴&플라잉", level: "키즈반" },
      { time: "20:00", name: "폴댄스", level: "입문/중급" },
    ],
    SAT: [{ time: "13:00", name: "폴댄스", level: "초급/중급" }],
  },
};

export const branchInfo = {
  anyang: {
    label: "Anyang",
    subName: "안양 본점",
    address: "경기 안양시 동안구 관악대로 103 9층 (에비뉴빌딩)",
    access: "비산동 사거리 인근, 무료 주차 가능",
    hours: "평일 10:00 - 23:00 (주말 휴무)",
    phone: "031-464-0101 / 010-5934-0012",
    mapUrl:
      "https://map.naver.com/p/search/%EC%95%84%EB%AE%A4%EC%A6%88%ED%8F%B4%EB%8C%84%EC%8A%A4%20%EC%95%88%EC%96%91%EC%A0%90",
    image: "/images/anyang.jpg",
  },
  sinrim: {
    label: "Sillim",
    subName: "신림 2호점",
    address: "서울 관악구 신사로 116-1 3층 (한양빌딩)",
    access: "2호선 신대방역 1번 출구 220m 거리",
    hours: "평일 09:00 - 22:00 / 토 09:00 - 15:00",
    phone: "010-5934-0012",
    mapUrl:
      "https://map.naver.com/p/search/%EC%95%84%EB%AE%A4%EC%A6%88%ED%8F%B4%EB%8C%84%EC%8A%A4%20%EC%8B%A0%EB%A6%BC%EC%A0%90",
    image: "/images/sillim.jpg",
  },
} as const;

export const DAYS: DayOfWeek[] = ["MON", "TUE", "WED", "THU", "FRI", "SAT"];
