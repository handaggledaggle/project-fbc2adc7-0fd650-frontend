"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const quickFilters = ["인기", "신작", "한정판", "무료배송"] as const;

export function FeedSearchHero() {
  const [selected, setSelected] = useState<(typeof quickFilters)[number] | null>(
    null,
  );

  const hint = useMemo(() => {
    if (!selected) return "빠른필터:";
    return `빠른필터: ${selected}`;
  }, [selected]);

  return (
    <section className="flex w-full items-start gap-[24px] rounded-[8px] bg-gradient-to-r from-cyan-50 to-green-50 p-[24px] shadow-md">
      <div className="flex w-full flex-col gap-[16px]">
        <h1 className="text-[24px] text-cyan-900">작품 탐색</h1>
        <p className="mb-[12px] text-[14px] text-cyan-700">
          검색, 필터, 추천으로 원하는 작품을 빠르게 찾고 상세로 이동하세요.
        </p>

        <form
          className="flex w-full items-center gap-[12px]"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="relative w-full">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-cyan-400" />
            <Input
              className="h-[44px] w-full border-cyan-100 bg-white pl-9 text-cyan-800 shadow-sm placeholder:text-cyan-400"
              placeholder="작가명, 작품명, 키워드로 검색"
            />
          </div>

          <select className="h-[44px] w-[170px] border border-cyan-100 bg-white px-[12px] text-[14px] text-cyan-800">
            <option>전체 카테고리</option>
            <option>회화</option>
            <option>판화</option>
            <option>사진</option>
          </select>

          <Button
            type="submit"
            className="h-[44px] rounded-md bg-cyan-600 px-[16px] text-white shadow-sm hover:bg-cyan-700"
          >
            검색
          </Button>
        </form>

        <div className="flex w-full items-center gap-[8px]">
          <div className="flex items-center gap-[8px]">
            <span className="text-[13px] text-cyan-600">{hint}</span>
            {quickFilters.map((label) => {
              const isOn = selected === label;
              return (
                <button
                  key={label}
                  type="button"
                  className={cn(
                    "h-[32px] border border-cyan-100 bg-white px-[10px] text-[13px] text-cyan-800 shadow-sm",
                    isOn && "bg-cyan-50 ring-1 ring-cyan-200",
                  )}
                  onClick={() => setSelected(isOn ? null : label)}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <aside className="w-[300px] border border-cyan-100 bg-white p-[12px] shadow-sm">
        <div className="mb-[8px] text-[13px] text-cyan-700">주요 지표</div>
        <div className="flex flex-col gap-[8px]">
          <div className="flex items-center justify-between text-cyan-900">
            <span className="text-[14px]">이번주 인기 작품</span>
            <span className="text-[14px]">124</span>
          </div>
          <div className="flex items-center justify-between text-cyan-900">
            <span className="text-[14px]">구독자 새 소식</span>
            <span className="text-[14px]">46명</span>
          </div>
        </div>
      </aside>
    </section>
  );
}
