import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { introBanner } from "@/assets";

type Tab = "인사말" | "사회적기업" | "연혁" | "조직도" | "찾아오시는길";

const TABS: Tab[] = ["인사말", "사회적기업", "연혁", "조직도", "찾아오시는길"];

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
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<Tab>(
    (location.state?.tab as Tab) ?? "인사말",
  );

  useEffect(() => {
    if (location.state?.tab) {
      setActiveTab(location.state.tab as Tab);
    }
  }, [location.state]);

  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (activeTab !== "찾아오시는길") return;

    const initMap = () => {
      if (!mapRef.current) return;
      window.kakao.maps.load(() => {
        if (!mapRef.current) return;
        const geocoder = new window.kakao.maps.services.Geocoder();
        geocoder.addressSearch(
          "대구 중구 동인동4가 418-2",
          (result: any, status: any) => {
            if (status === window.kakao.maps.services.Status.OK) {
              const coords = new window.kakao.maps.LatLng(
                result[0].y,
                result[0].x,
              );
              const map = new window.kakao.maps.Map(mapRef.current!, {
                center: coords,
                level: 3,
              });
              new window.kakao.maps.Marker({ position: coords }).setMap(map);
            }
          },
        );
      });
    };

    // 이미 SDK가 로드된 경우
    if (window.kakao && window.kakao.maps) {
      initMap();
      return;
    }

    // 아직 로드 안 된 경우
    const script = document.createElement("script");
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${import.meta.env.VITE_KAKAO_MAP_KEY}&autoload=false&libraries=services`;
    script.async = true;
    script.onload = initMap;
    document.head.appendChild(script);
  }, [activeTab]);

  return (
    <div className="w-full">
      {/* 히어로 배너 + 탭 네비게이션 */}
      <div className="max-w-360 mx-auto px-50 xl:px-40 2xl:px-10">
        <div className="relative w-full h-64 overflow-hidden">
          <img
            src={introBanner}
            alt="회사소개 배너"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/30" />

          {/* 탭을 배너 하단에 absolute로 배치 */}
          <div className="absolute bottom-0 left-0 right-0 bg-[#998983]/10 backdrop-blur-sm flex items-center">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-4 text-sm font-medium transition-colors ${
                  activeTab === tab
                    ? "bg-white/40 text-[#5c4033]"
                    : "text-white hover:bg-white/10"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 기존 탭 네비게이션 div는 삭제 */}

      {/* 탭 콘텐츠 */}
      <div className="max-w-360 mx-auto px-50 xl:px-40 2xl:px-10 py-20">
        {/* 인사말 */}
        {activeTab === "인사말" && (
          <div className="flex gap-16 items-start justify-center">
            {/* 대표 사진 - 크게 키움 */}
            <div className="shrink-0 w-100 h-[480px] bg-gray-200 flex items-center justify-center text-gray-400 text-sm">
              대표님 사진
            </div>
            {/* 인사말 텍스트 */}
            <div className="flex flex-col gap-6 max-w-lg">
              <div>
                <p className="text-sm text-[#C8372A] font-medium mb-2">
                  CEO 인사말
                </p>
                <h2 className="text-xl font-bold text-gray-900 leading-snug">
                  고객과 파트너가 가장 선호하는 기업 <br />
                  웰컴즈가 고객님과 든든한 파트너로 함께 가겠습니다.
                </h2>
              </div>
              <div className="w-12 h-0.5 bg-[#C8372A]" />
              <p className="text-gray-600 leading-relaxed">
                안녕하십니까, 웰컴즈 대표 김재현입니다.
              </p>
              <p className="text-gray-600 leading-relaxed">
                웰컴즈는 풍부한 삶의 경험을 가진 시니어분들과 함께 만들어가는
                사회적 기업입니다. 단순한 일자리 제공을 넘어, 남녀노소 누구든
                사회의 당당한 구성원으로서 활력 있는 삶을 이어갈 수 있도록
                노력하고 있습니다.
              </p>
              <p className="text-gray-600 leading-relaxed">
                사회적기업으로서 지역 공동체와 함께 성장 할 수 있도록
                하겠습니다.
              </p>
              <p className="text-gray-600 leading-relaxed">
                저희 웰컴즈 홈페이지를 방문해주셔서 감사합니다.
              </p>
              <p className="text-gray-500 font-medium mt-4">
                (주)웰컴즈 대표 <span className="text-gray-900">김재현</span>
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
                <p className="text-gray-600 text-sm">
                  대구시 중구 동인4가 418 장군빌딩 402호
                </p>
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
                    동구1번, 가창2번 버스 승차 후 동인초등학교앞 정류장 하차
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-1">
                    지하철
                  </p>
                  <p className="text-gray-600 text-sm">
                    경대병원역 4번 출구 도보 10분
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
