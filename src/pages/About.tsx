import { useState, useEffect, useRef } from "react";

type Tab = "인삿말" | "사회적기업" | "연혁" | "조직도" | "찾아오시는길";

const TABS: Tab[] = ["인삿말", "사회적기업", "연혁", "조직도", "찾아오시는길"];

const HISTORY = [
  { year: "2010", items: ["색동규방 설립", "전통 규방공예 사업 시작"] },
  { year: "2013", items: ["사회적기업 인증"] },
  { year: "2014", items: ["대구광역시 우수 사회적기업 선정"] },
  { year: "2015", items: ["전통공예 전시회 개최", "온라인 쇼핑몰 오픈"] },
  { year: "2016", items: ["문화기획 사업 확장", "3자 물류 서비스 시작"] },
];

declare global {
  interface Window {
    kakao: any;
  }
}

export default function About() {
  const [activeTab, setActiveTab] = useState<Tab>("인삿말");

  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (activeTab !== "찾아오시는길") return;

    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=" +
      import.meta.env.VITE_KAKAO_MAP_KEY +
      "&autoload=false";
    script.async = true;
    script.onload = () => {
      window.kakao.maps.load(() => {
        if (!mapRef.current) return;
        const coords = new window.kakao.maps.LatLng(35.872039, 128.604153);
        const map = new window.kakao.maps.Map(mapRef.current, {
          center: coords,
          level: 3,
        });
        new window.kakao.maps.Marker({ position: coords }).setMap(map);
      });
    };
    document.head.appendChild(script);
  }, []);

  return (
    <div className="w-full">
      {/* 히어로 배너 */}
      <div className="relative w-full h-60 bg-gray-300 overflow-hidden">
        {/* 배너 이미지 자리 */}
        <div className="absolute inset-0 bg-gray-400 flex items-center justify-center text-gray-500">
          배너 이미지 (1920 x 240px)
        </div>
        {/* 어두운 오버레이 */}
        <div className="absolute inset-0 bg-black/40" />
        {/* 타이틀 */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white tracking-widest">
            회사소개
          </h1>
        </div>
      </div>

      {/* 탭 네비게이션 */}
      <div className="w-full bg-[#5c4033]">
        <div className="max-w-360 mx-auto px-28 xl:px-20 2xl:px-10">
          <div className="flex items-center">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-4 text-sm font-medium transition-colors ${
                  activeTab === tab
                    ? "bg-white text-[#5c4033]"
                    : "text-white hover:bg-white/10"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 탭 콘텐츠 */}
      <div className="max-w-360 mx-auto px-28 xl:px-20 2xl:px-10 py-20">
        {/* 인삿말 */}
        {activeTab === "인삿말" && (
          <div className="flex gap-16 items-start">
            {/* 대표 사진 */}
            <div className="shrink-0 w-72 h-96 bg-gray-200 flex items-center justify-center text-gray-400 text-sm">
              대표님 사진
            </div>
            {/* 인사말 텍스트 */}
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-sm text-[#C8372A] font-medium mb-2">
                  CEO 인삿말
                </p>
                <h2 className="text-2xl font-bold text-gray-900 leading-snug">
                  전통의 아름다움을 현대와 잇겠습니다
                </h2>
              </div>
              <div className="w-12 h-0.5 bg-[#C8372A]" />
              <p className="text-gray-600 leading-relaxed">
                안녕하십니까, 색동규방 대표 000입니다.
                <br />
                <br />
                저희 색동규방은 우리 고유의 전통 규방공예 기법을 계승하고
                발전시켜 일상 속에서 전통의 아름다움을 만날 수 있도록 노력하고
                있습니다.
                <br />
                <br />
                앞으로도 전통과 현대를 잇는 가교 역할을 다하겠습니다.
                감사합니다.
              </p>
              <p className="text-gray-500 font-medium">
                (주)웰컴즈 · 색동규방 대표{" "}
                <span className="text-gray-900">000</span>
              </p>
            </div>
          </div>
        )}

        {/* 사회적기업 */}
        {activeTab === "사회적기업" && (
          <div className="flex flex-col gap-12">
            <div className="text-center">
              <p className="text-sm text-[#C8372A] font-medium mb-2">
                사회적기업
              </p>
              <h2 className="text-2xl font-bold text-gray-900">
                함께 성장하는 기업
              </h2>
            </div>
            <div className="flex gap-8 justify-center">
              {[
                {
                  title: "사회적 가치",
                  desc: "지역 공동체와 함께 성장하며\n사회적 가치를 실현합니다",
                },
                {
                  title: "일자리 창출",
                  desc: "취약계층에게 안정적인\n일자리를 제공합니다",
                },
                {
                  title: "전통 계승",
                  desc: "우리 고유의 전통 기법을\n다음 세대에 전합니다",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex-1 border border-gray-200 p-8 text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-[#C8372A]/10 flex items-center justify-center mx-auto mb-4">
                    <div className="w-4 h-4 rounded-full bg-[#C8372A]" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed whitespace-pre-line">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 연혁 */}
        {activeTab === "연혁" && (
          <div className="flex flex-col gap-4">
            <div className="text-center mb-8">
              <p className="text-sm text-[#C8372A] font-medium mb-2">연혁</p>
              <h2 className="text-2xl font-bold text-gray-900">
                색동규방의 발자취
              </h2>
            </div>
            <div className="relative">
              {/* 세로선 */}
              <div className="absolute left-24 top-0 bottom-0 w-px bg-gray-200" />
              <div className="flex flex-col gap-8">
                {HISTORY.map((h) => (
                  <div key={h.year} className="flex gap-8 items-start">
                    <div className="w-24 shrink-0 text-right">
                      <span className="text-lg font-bold text-[#C8372A]">
                        {h.year}
                      </span>
                    </div>
                    <div className="relative pl-8">
                      {/* 점 */}
                      <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-[#C8372A] -translate-x-1/2" />
                      <div className="flex flex-col gap-1">
                        {h.items.map((item, i) => (
                          <p key={i} className="text-gray-600">
                            {item}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 조직도 */}
        {activeTab === "조직도" && (
          <div className="flex flex-col items-center gap-8">
            <div className="text-center">
              <p className="text-sm text-[#C8372A] font-medium mb-2">조직도</p>
              <h2 className="text-2xl font-bold text-gray-900">
                색동규방 조직
              </h2>
            </div>
            <div className="flex flex-col items-center gap-6 w-full">
              {/* 대표 */}
              <div className="px-10 py-3 bg-[#C8372A] text-white font-bold rounded">
                대표이사
              </div>
              <div className="w-px h-8 bg-gray-300" />
              {/* 부서 */}
              <div className="flex gap-16 items-start">
                {["규방공예팀", "문화기획팀", "물류팀", "경영지원팀"].map(
                  (dept) => (
                    <div
                      key={dept}
                      className="flex flex-col items-center gap-2"
                    >
                      <div className="px-6 py-3 border-2 border-[#C8372A] text-[#C8372A] font-medium rounded">
                        {dept}
                      </div>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        )}

        {/* 찾아오시는길 */}
        {activeTab === "찾아오시는길" && (
          <div className="flex flex-col gap-10">
            <div className="text-center">
              <p className="text-sm text-[#C8372A] font-medium mb-2">
                찾아오시는길
              </p>
              <h2 className="text-2xl font-bold text-gray-900">오시는 방법</h2>
            </div>

            {/* 지도 */}
            <div ref={mapRef} className="w-full h-80 border border-gray-200" />
            {/* 주소 정보 */}
            <div className="grid grid-cols-2 gap-8">
              <div className="flex flex-col gap-3">
                <h3 className="font-bold text-gray-900 border-b border-gray-200 pb-2">
                  주소
                </h3>
                <p className="text-gray-600 text-sm">대구광역시 000</p>
                <p className="text-gray-600 text-sm">전화 : 053-965-7730</p>
                <p className="text-gray-600 text-sm">이메일 : 000@000.com</p>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="font-bold text-gray-900 border-b border-gray-200 pb-2">
                  교통편
                </h3>
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-1">버스</p>
                  <p className="text-gray-600 text-sm">
                    000번, 000번 승차 후 000 정류장 하차
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-1">
                    지하철
                  </p>
                  <p className="text-gray-600 text-sm">
                    000역 000번 출구 도보 000분
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
