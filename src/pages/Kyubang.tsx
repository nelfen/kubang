import { useState } from "react";

type Tab = "규방소개" | "문화기획" | "3자물류";

const TABS: Tab[] = ["규방소개", "문화기획", "3자물류"];

export default function Kyubang() {
  const [activeTab, setActiveTab] = useState<Tab>("규방소개");

  return (
    <div className="w-full">
      {/* 히어로 배너 */}
      <div className="relative w-full h-60 bg-gray-300 overflow-hidden">
        <div className="absolute inset-0 bg-gray-400 flex items-center justify-center text-gray-500">
          배너 이미지 (1920 x 240px)
        </div>
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white tracking-widest">
            규방
          </h1>
        </div>
      </div>

      {/* 탭 네비게이션 */}
      <div className="w-full bg-[#5c4033]">
        <div className="max-w-360 mx-auto px-10">
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
      <div className="max-w-360 mx-auto px-10 py-20">
        {/* 규방소개 */}
        {activeTab === "규방소개" && (
          <div className="flex flex-col gap-12">
            <div className="flex gap-16 items-start">
              {/* 이미지 */}
              <div className="shrink-0 w-96 h-64 bg-gray-200 flex items-center justify-center text-gray-400 text-sm">
                규방 소개 이미지
              </div>
              {/* 텍스트 */}
              <div className="flex flex-col gap-6">
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
                  규방공예는 조선시대 여인들이 안방에서 만들어낸 전통 공예예요.
                  색동규방은 이 아름다운 전통을 계승하여 현대적 감각으로
                  재해석한 작품들을 선보이고 있습니다.
                  <br />
                  <br />
                  색실, 한지, 천 등 전통 재료를 사용하여 하나하나 정성껏 만든
                  작품들을 만나보세요.
                </p>
              </div>
            </div>

            {/* 하단 이미지 갤러리 */}
            <div className="grid grid-cols-3 gap-4">
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
            <div className="flex gap-16 items-start">
              {/* 이미지 */}
              <div className="shrink-0 w-96 h-64 bg-gray-200 flex items-center justify-center text-gray-400 text-sm">
                물류 창고 이미지
              </div>
              {/* 텍스트 */}
              <div className="flex flex-col gap-6">
                <div>
                  <p className="text-sm text-[#C8372A] font-medium mb-2">
                    3자물류
                  </p>
                  <h2 className="text-2xl font-bold text-gray-900 leading-snug">
                    믿을 수 있는
                    <br />
                    물류 서비스
                  </h2>
                </div>
                <div className="w-12 h-0.5 bg-[#C8372A]" />
                <p className="text-gray-600 leading-relaxed">
                  색동규방은 전통공예품의 안전한 보관과 배송을 위한 3자 물류
                  서비스를 운영하고 있습니다.
                  <br />
                  <br />
                  체계적인 재고 관리 시스템과 전문 물류 인력을 통해 고객님의
                  소중한 상품을 안전하게 전달합니다.
                </p>
              </div>
            </div>

            {/* 서비스 항목 */}
            <div className="grid grid-cols-3 gap-6">
              {[
                {
                  title: "공수용품 보관",
                  desc: "체계적인 창고 관리 시스템으로\n안전하게 보관합니다",
                },
                {
                  title: "보관관리",
                  desc: "전문 인력이 상품 상태를\n지속적으로 관리합니다",
                },
                {
                  title: "배송 서비스",
                  desc: "전국 어디서나 빠르고\n안전하게 배송합니다",
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
          </div>
        )}
      </div>
    </div>
  );
}
