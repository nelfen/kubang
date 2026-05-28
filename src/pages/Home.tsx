import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/cn";
import { mainBanner1, mainBanner2, item1, item2, item3 } from "@/assets";

const SLIDES = [
  {
    id: 1,
    tag: "색동규방 대표상품",
    title: "전통의 빛을 담은\n호롱 등불",
    desc: "우리 고유의 아름다움을 일상 속에\n정성을 담아 만든 전통 공예품",
    img: mainBanner1,
    theme: "dark" as "light" | "dark",
    link: "/products",
  },
  {
    id: 2,
    tag: "색동규방 추천",
    title: "색동의 아름다움\n규방 공예",
    desc: "오랜 전통 기법으로 만든\n색동규방의 손길이 담긴 작품들",
    img: mainBanner2,
    theme: "dark" as "light" | "dark",
    link: "/kyubang",
  },
];

const CATEGORIES = ["전체", "등불", "공예", "장식", "소품"];

const PRODUCTS = [
  {
    id: 1,
    name: "청사초롱 (태극)",
    price: "35,000원",
    category: "등불",
    img: item1,
  },
  {
    id: 2,
    name: "색동 두루주머니",
    price: "18,000원",
    category: "장식",
    img: item2,
  },
  {
    id: 3,
    name: "전통 반지 & 반지함",
    price: "25,000원",
    category: "소품",
    img: item3,
  },
  { id: 4, name: "한지 조명 갓", price: "48,000원", category: "조명", img: "" },
  {
    id: 5,
    name: "색동 열쇠고리",
    price: "12,000원",
    category: "소품",
    img: "",
  },
  {
    id: 6,
    name: "규방 바느질 세트",
    price: "32,000원",
    category: "공예",
    img: "",
  },
];

export default function Home() {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();
  const slide = SLIDES[current];
  const isLight = slide.theme === "light";
  const [selectedCategory, setSelectedCategory] = useState("전체");

  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo === "products") {
      // 페이지 렌더링 후 스크롤되도록 약간의 딜레이
      setTimeout(() => {
        document
          .getElementById("products")
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location.state]);

  const filteredProducts =
    selectedCategory === "전체"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === selectedCategory);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((c) => (c - 1 + SLIDES.length) % SLIDES.length);
  };
  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((c) => (c + 1) % SLIDES.length);
  };

  return (
    <div className="w-full">
      {/* 히어로 슬라이더 */}
      <section
        className="relative w-full h-[600px] overflow-hidden transition-colors duration-700 cursor-pointer"
        onClick={() => navigate(slide.link)}
      >
        <img
          src={slide.img}
          alt={slide.tag}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="max-w-360 mx-auto px-10 h-full flex items-center">
          {/* 텍스트 */}
          <div className="flex flex-col gap-4 z-10">
            <span
              className={`text-sm font-medium tracking-wider ${
                isLight ? "text-[#C8372A]" : "text-[#e8a090]"
              }`}
            >
              {slide.tag}
            </span>
            <h2
              className={`text-4xl font-bold leading-snug whitespace-pre-line ${
                isLight ? "text-gray-900" : "text-white"
              }`}
            >
              {slide.title}
            </h2>
            <p
              className={`leading-relaxed whitespace-pre-line ${
                isLight ? "text-gray-500" : "text-gray-300"
              }`}
            >
              {slide.desc}
            </p>
          </div>
        </div>

        {/* 좌우 화살표 - 배경 없이 */}
        <button
          onClick={prev}
          className={`absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-2xl transition-opacity hover:opacity-70 ${
            isLight ? "text-gray-600" : "text-white"
          }`}
        >
          ‹
        </button>
        <button
          onClick={next}
          className={`absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-2xl transition-opacity hover:opacity-70 ${
            isLight ? "text-gray-600" : "text-white"
          }`}
        >
          ›
        </button>

        {/* 도트 인디케이터 */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={(e) => {
                e.stopPropagation();
                setCurrent(i);
              }}
              className={`w-2 h-2 rounded-full transition-colors ${
                i === current
                  ? isLight
                    ? "bg-gray-700"
                    : "bg-white"
                  : isLight
                    ? "bg-gray-300"
                    : "bg-gray-500"
              }`}
            />
          ))}
        </div>
      </section>

      {/* 주요 상품 섹션 */}
      <section id="products" className="w-full py-20 scroll-mt-20">
        <div className="max-w-360 mx-auto px-28 xl:px-20 2xl:px-10">
          {/* 타이틀 */}
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900">주요 상품</h2>
            <p className="text-gray-400 mt-2 text-sm">
              색동규방의 정성이 담긴 전통 공예품
            </p>
          </div>

          {/* 카테고리 탭 */}
          <div className="flex mb-4">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={cn(
                  "px-5 py-2 text-sm font-medium border-t border-l last:border-r border-b-0 transition-colors",
                  selectedCategory === cat
                    ? "bg-gray-900 text-white border-gray-900"
                    : "bg-white text-gray-600 border-gray-300 hover:text-gray-900",
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* 상품 그리드 */}
          <div className="grid grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="group cursor-pointer">
                <div className="w-full aspect-square bg-gray-100 mb-4 overflow-hidden">
                  {product.img ? (
                    <img
                      src={product.img}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-300 text-sm">
                      상품 이미지
                    </div>
                  )}
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs text-gray-400">
                    {product.category}
                  </span>
                  <p className="text-gray-800 font-medium">{product.name}</p>
                  <p className="text-gray-900 font-bold">{product.price}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center justify-center px-10 py-3 border border-gray-800 text-gray-800 text-sm font-medium hover:bg-gray-800 hover:text-white transition-colors"
            >
              전체 상품 보기
            </Link>
          </div>
        </div>
      </section>

      {/* 브랜드 소개 띠 */}
      <section className="w-full bg-[#C8372A] py-16">
        <div className="max-w-360 mx-auto px-10 flex items-center justify-between">
          <div className="text-white">
            <p className="text-sm tracking-widest mb-2 opacity-80">
              SAEKDONG GUBANG
            </p>
            <h3 className="text-2xl font-bold">
              전통의 아름다움을 현대에 잇다
            </h3>
            <p className="mt-3 opacity-80 leading-relaxed">
              색동규방은 우리 고유의 전통 공예 기법을 계승하고
              <br />
              일상 속에서 아름다움을 전합니다.
            </p>
          </div>
          <Link
            to="/about"
            className="flex-shrink-0 px-8 py-3 border border-white text-white text-sm hover:bg-white hover:text-[#C8372A] transition-colors"
          >
            회사 소개 보기
          </Link>
        </div>
      </section>
    </div>
  );
}
