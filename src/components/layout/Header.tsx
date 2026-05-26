import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { cn } from "@/lib/cn";

const NAV_ITEMS = [
  {
    label: "회사소개",
    path: "/about",
    sub: ["인삿말", "사회적기업", "연혁", "조직도", "찾아오시는길"],
  },
  { label: "규방", path: "/kyubang", sub: ["규방소개", "문화기획"] },
  { label: "주요상품", path: "/products", sub: [] },
  { label: "커뮤니티", path: "/community", sub: [] },
];

const NOTICES = [
  "색동규방 전통공예 전시회 6월 개최 예정",
  "노리개 품목 카카오페이 결제 시 50% 할인",
  "색동규방 온라인 쇼핑몰 오픈 기념 이벤트 진행 중",
];

export default function Header() {
  const { pathname } = useLocation();
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [noticeIndex] = useState(0);
  const navigate = useNavigate();

  const handleProductsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (pathname === "/") {
      document
        .getElementById("products")
        ?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/#products");
    }
  };

  return (
    <header className="w-full shadow-sm bg-white sticky top-0 z-50">
      {/* 상단 공지 바 */}
      <div className="w-full h-6 bg-[#da4537] flex items-center relative">
        {/* 공지 텍스트 - 절대 위치로 완전 가운데 */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs text-white">{NOTICES[noticeIndex]}</span>
        </div>
        {/* 로그인 / 회원가입 - 우측 고정 */}
        <div className="max-w-360 mx-auto px-10 w-full flex items-center justify-end relative z-10">
          <div className="flex items-center gap-1">
            <Link
              to="/login"
              className="text-xs text-white hover:text-white/70 transition-colors px-2"
            >
              로그인
            </Link>
            <span className="text-white/50 text-xs">|</span>
            <Link
              to="/signup"
              className="text-xs text-white hover:text-white/70 transition-colors px-2"
            >
              회원가입
            </Link>
          </div>
        </div>
      </div>
      {/* 메인 헤더 */}
      <div className="max-w-360 mx-auto px-10 h-14 flex items-center justify-between">
        {/* 로고 */}
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-[#C8372A]">색동규방</span>
          <span className="text-sm text-gray-500 mt-1">(주)웰컴즈</span>
        </Link>

        {/* 네비게이션 */}
        <nav className="flex items-center gap-10">
          {NAV_ITEMS.map((item) => (
            <div
              key={item.path}
              className="relative"
              onMouseEnter={() => setHoveredNav(item.path)}
              onMouseLeave={() => setHoveredNav(null)}
            >
              {item.label === "주요상품" ? (
                <a
                  href="/#products"
                  onClick={handleProductsClick}
                  className="text-base font-medium transition-colors hover:text-[#C8372A] text-gray-700 cursor-pointer"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  to={item.path}
                  className={cn(
                    "text-base font-medium transition-colors hover:text-[#C8372A]",
                    pathname.startsWith(item.path)
                      ? "text-[#C8372A]"
                      : "text-gray-700",
                  )}
                >
                  {item.label}
                </Link>
              )}

              {item.sub.length > 0 && hoveredNav === item.path && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white border border-gray-100 shadow-lg rounded-sm py-2 min-w-30 z-50">
                  {item.sub.map((sub) => (
                    <button
                      key={sub}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-red-50 hover:text-[#C8372A] transition-colors"
                    >
                      {sub}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
}
