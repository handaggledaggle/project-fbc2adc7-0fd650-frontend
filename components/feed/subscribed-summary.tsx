import Link from "next/link";
import { Button } from "@/components/ui/button";

export function SubscribedSummary() {
  return (
    <section className="w-full border border-cyan-100 bg-gradient-to-r from-green-50 to-white p-[16px]">
      <div className="mb-[12px] flex items-center justify-between">
        <h2 className="text-[16px] text-cyan-900">구독한 작가의 새 소식</h2>
        <Link href="/my/subscriptions" className="text-[13px] text-cyan-600">
          구독 관리
        </Link>
      </div>

      <div className="flex w-full gap-[12px]">
        <article className="w-[300px] border border-cyan-100 bg-white p-[12px] shadow-sm">
          <h3 className="text-[14px] text-cyan-900">작가 J</h3>
          <p className="mb-[8px] text-[13px] text-cyan-700">
            새 작품 2건 — 신작: "밤의 풍경"
          </p>
          <div className="flex gap-[8px]">
            <Button
              variant="outline"
              className="h-[36px] rounded-none border-cyan-100 bg-white px-[10px] text-cyan-800 shadow-sm hover:bg-cyan-50"
            >
              전체보기
            </Button>
            <Button
              variant="outline"
              className="h-[36px] rounded-none border-cyan-100 bg-white px-[10px] text-cyan-800 shadow-sm hover:bg-cyan-50"
            >
              알림 설정
            </Button>
          </div>
        </article>

        <article className="w-[300px] border border-cyan-100 bg-white p-[12px] shadow-sm">
          <h3 className="text-[14px] text-cyan-900">작가 K</h3>
          <p className="mb-[8px] text-[13px] text-cyan-700">
            한정판 출시 예정 — 예약 가능
          </p>
          <div className="flex gap-[8px]">
            <Button
              variant="outline"
              className="h-[36px] rounded-none border-cyan-100 bg-white px-[10px] text-cyan-800 shadow-sm hover:bg-cyan-50"
            >
              전체보기
            </Button>
            <Button
              variant="outline"
              className="h-[36px] rounded-none border-cyan-100 bg-white px-[10px] text-cyan-800 shadow-sm hover:bg-cyan-50"
            >
              알림 설정
            </Button>
          </div>
        </article>
      </div>
    </section>
  );
}
