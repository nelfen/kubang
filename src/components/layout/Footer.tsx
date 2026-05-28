export default function Footer() {
  return (
    <footer className="w-full bg-gray-800 text-gray-300 mt-auto">
      <div className="max-w-360 mx-auto px-10 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <p className="text-white font-bold mb-1">색동규방</p>
            <p className="text-xs text-gray-400">(주)웰컴즈 · 대표 : 김재현</p>
          </div>
          <div className="text-xs text-gray-400 text-right leading-relaxed">
            <p>
              대구광역시 중구 동인4가 418 장군빌딩 402호 · 053-965-7730 ·
              000@000.com
            </p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-4 pt-4 text-xs text-gray-500 text-center">
          © 2024 색동규방 (주)웰컴즈. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
