import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { cn } from "@/lib/cn";

const NAV_ITEMS = [
  {
    label: "회사소개",
    path: "/about",
    sub: ["인삿말", "사회적기업", "연혁", "조직도", "찾아오시는길"],
  },
  { label: "규방", path: "/kubang", sub: ["규방소개", "문화기획"] },
  { label: "주요상품", path: "/products", sub: [] },
  { label: "커뮤니티", path: "/community", sub: [] },
];

export default function Header() {
  const { pathname } = useLocation();
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);

  return (
    <header className="w-full shadow-sm bg-white sticky top-0 z-50">
      {/* 상단 빨간 바 */}
      <div className="w-full h-1.5 bg-[#C8372A]" />

      <div className="max-w-360 mx-auto px-10 h-20 flex items-center justify-between">
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

              {/* 드롭다운 */}
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
