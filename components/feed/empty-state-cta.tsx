import { Button } from "@/components/ui/button";

export function EmptyStateCta() {
  return (
    <section className="w-full border border-cyan-100 bg-white p-[24px] shadow-sm">
      <div className="flex items-start gap-[16px]">
        <div className="w-full">
          <h2 className="mb-[8px] text-[16px] text-cyan-900">검색 결과가 없습니다</h2>
          <p className="mb-[12px] text-[14px] text-cyan-700">
            일치하는 작품을 찾을 수 없습니다. 다른 키워드나 필터를 시도해 보세요.
          </p>

          <div className="flex items-center gap-[12px]">
            <Button
              variant="outline"
              className="h-[40px] rounded-none border-cyan-100 bg-white px-[14px] text-cyan-800 shadow-sm hover:bg-cyan-50"
            >
              추천 작가 보기
            </Button>
            <Button
              variant="outline"
              className="h-[40px] rounded-none border-cyan-100 bg-white px-[14px] text-cyan-800 shadow-sm hover:bg-cyan-50"
            >
              추천 토픽 탐색
            </Button>
            <Button
              variant="outline"
              className="h-[40px] rounded-none border-cyan-100 bg-white px-[14px] text-cyan-800 shadow-sm hover:bg-cyan-50"
            >
              전체 목록으로 돌아가기
            </Button>
          </div>
        </div>

        <aside className="w-[300px] border border-cyan-100 bg-green-50 p-[12px] shadow-sm">
          <h3 className="mb-[8px] text-[14px] text-cyan-900">검색 팁</h3>
          <ul className="text-[13px] text-cyan-700">
            <li>- 작가명 또는 작품명으로 검색해 보세요</li>
            <li>- 필터를 초기화하고 다시 시도하세요</li>
            <li>- 카테고리별 추천을 확인하세요</li>
          </ul>
        </aside>
      </div>
    </section>
  );
}
