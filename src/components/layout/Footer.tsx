export default function Footer() {
  return (
    <footer className="w-full bg-gray-800 text-gray-300 mt-auto">
      <div className="max-w-360 mx-auto px-10 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <p className="text-white text-lg font-bold mb-3">색동규방</p>
            <p className="text-sm leading-relaxed">
              (주)웰컴즈
              <br />
              대표 : 000 | 사업자등록번호 : 000-00-00000
            </p>
          </div>
          <div className="text-sm leading-relaxed">
            <p>주소 : 대구광역시 000</p>
            <p className="mt-1">전화 : 053-965-7730</p>
            <p className="mt-1">이메일 : 000@000.com</p>
          </div>
        </div>
        <div className="border-t border-gray-600 mt-8 pt-6 text-xs text-gray-500">
          © 2024 색동규방 (주)웰컴즈. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
