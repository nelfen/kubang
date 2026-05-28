import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { kyubangBanner } from "@/assets";

type Tab = "규방소개" | "문화기획" | "3자물류";

const TABS: Tab[] = ["규방소개", "문화기획", "3자물류"];

export default function Kyubang() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<Tab>(
    (location.state?.tab as Tab) ?? "규방소개",
  );

  useEffect(() => {
    if (location.state?.tab) {
      setActiveTab(location.state.tab as Tab);
    }
  }, [location.state]);

  return (
    <div className="w-full">
      {/* 히어로 배너 + 탭 네비게이션 */}
      <div className="max-w-360 mx-auto px-50 xl:px-40 2xl:px-10">
        <div className="relative w-full h-64 overflow-hidden">
          <img
            src={kyubangBanner}
            alt="규방 배너"
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

      {/* 탭 콘텐츠 */}
      <div className="max-w-360 mx-auto px-50 xl:px-40 2xl:px-10 py-20">
        {/* 규방소개 */}
        {activeTab === "규방소개" && (
          <div className="flex flex-col gap-12">
            <div className="flex gap-16 items-start justify-center">
              {/* 이미지 - 크게 */}
              <div className="shrink-0 w-80 h-[320px] bg-gray-200 flex items-center justify-center text-gray-400 text-sm">
                규방 소개 이미지
              </div>
              {/* 텍스트 */}
              <div className="flex flex-col gap-6 max-w-lg">
                <div>
                  <p className="text-sm text-[#C8372A] font-medium mb-2">
                    규방소개
                  </p>
                  <h2 className="text-2xl font-bold text-gray-900 leading-snug">
                    전통 규방공예의
                    <br />
                    아름다움을 전합니다
                  </h2>
                </div>
                <div className="w-12 h-0.5 bg-[#C8372A]" />
                <p className="text-gray-600 leading-relaxed">
                  규방공예는 조선시대부터 내려온 역사 깊은 우리의 전통
                  공예입니다.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  색동규방은 이 아름다운 전통을 계승하여 현대적 감각으로
                  재해석한 작품들을 선보이고 있습니다.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  색실, 한지, 천 등 전통 재료를 사용하여 하나하나 정성껏 만든
                  작품들을 만나보세요.
                </p>
              </div>
            </div>

            {/* 하단 이미지 갤러리 */}
            <div className="grid grid-cols-3 gap-4 max-w-[56rem] w-full mx-auto">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="aspect-square bg-gray-100 flex items-center justify-center text-gray-300 text-sm"
                >
                  갤러리 이미지 {i}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 문화기획 */}
        {activeTab === "문화기획" && (
          <div className="flex flex-col gap-12">
            <div className="text-center">
              <p className="text-sm text-[#C8372A] font-medium mb-2">
                문화기획
              </p>
              <h2 className="text-2xl font-bold text-gray-900">
                전통문화 행사 및 기획
              </h2>
              <p className="text-gray-400 mt-2 text-sm">
                색동규방이 기획하는 다양한 전통문화 행사를 소개합니다
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              {[
                {
                  title: "전통공예 전시회",
                  desc: "색동규방의 작품들을 한자리에서 만날 수 있는\n연례 전시회를 개최합니다.",
                  tag: "전시",
                },
                {
                  title: "규방공예 체험 프로그램",
                  desc: "직접 체험해보는 전통 규방공예 워크숍을\n정기적으로 운영합니다.",
                  tag: "체험",
                },
                {
                  title: "전통문화 교육",
                  desc: "지역 주민과 함께하는 전통문화 교육 프로그램을\n진행합니다.",
                  tag: "교육",
                },
                {
                  title: "지역 행사 참여",
                  desc: "지역 축제 및 문화행사에 참여하여\n전통문화를 알립니다.",
                  tag: "행사",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="border border-gray-200 p-8 flex flex-col gap-4"
                >
                  <div className="flex items-center gap-3">
                    <span className="px-2 py-1 bg-[#C8372A]/10 text-[#C8372A] text-xs font-medium">
                      {item.tag}
                    </span>
                    <h3 className="font-bold text-gray-900">{item.title}</h3>
                  </div>
                  <div className="w-full h-40 bg-gray-100 flex items-center justify-center text-gray-300 text-sm">
                    행사 이미지
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed whitespace-pre-line">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 3자물류 */}
        {activeTab === "3자물류" && (
          <div className="flex flex-col gap-12">
            {/* 상단 서비스 카드 3개 */}
            <div className="grid grid-cols-3 gap-6">
              {[
                {
                  title: "운/수송 대행",
                  desc: "시니어 드라이버와 함께하는\n안전하고 신뢰할 수 있는\n운수송 대행 서비스입니다",
                },
                {
                  title: "납품/배송 대행",
                  desc: "기업 간 납품부터 개인 배송까지\n정확하고 신속하게\n처리해 드립니다",
                },
                {
                  title: "물류 아웃소싱",
                  desc: "물류 전 과정을 위탁 운영하여\n고객사의 운영 효율을\n높여드립니다",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="border border-gray-200 p-6 text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-[#C8372A]/10 flex items-center justify-center mx-auto mb-4">
                    <div className="w-4 h-4 rounded-full bg-[#C8372A]" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed whitespace-pre-line">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* 하단 이미지 + 텍스트 */}
            <div className="flex flex-col gap-6">
              {/* 가로 풀너비 이미지 */}
              <div className="w-full h-64 bg-gray-200 flex items-center justify-center text-gray-400 text-sm">
                물류 창고 이미지
              </div>
              {/* 설명 텍스트 */}
              <div className="flex flex-col gap-4">
                <div>
                  <p className="text-sm text-[#C8372A] font-medium mb-2">
                    3자물류
                  </p>
                  <h2 className="text-2xl font-bold text-gray-900 leading-snug">
                    믿을 수 있는 물류 서비스
                  </h2>
                </div>
                <div className="w-12 h-0.5 bg-[#C8372A]" />
                <p className="text-gray-600 leading-relaxed">
                  웰컴즈는 시니어 인력과 함께하는 3자 물류 서비스를 운영하고
                  있습니다.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  단순한 배송을 넘어 운수송 대행, 납품 대행, 물류 아웃소싱까지
                  기업과 지역 사회를 잇는 물류 파트너로 함께하겠습니다.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  시니어의 풍부한 경험과 책임감으로 고객님의 소중한 물류를
                  안전하게 처리합니다.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
