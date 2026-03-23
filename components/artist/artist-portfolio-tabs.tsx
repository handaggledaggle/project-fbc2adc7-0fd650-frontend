"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type TabKey = "판매중" | "전체" | "종료";

type Artwork = {
  id: string;
  title: string;
  meta: string;
  price: string;
  actionLabel: string;
  img: string;
};

const DATA: Record<TabKey, Artwork[]> = {
  판매중: [
    {
      id: "a1",
      title: "물의 표면 #1",
      meta: "한정판 프린트 · 30부 · 30x40cm",
      price: "₩180,000",
      actionLabel: "장바구니",
      img: "https://via.placeholder.com/420x200",
    },
    {
      id: "a2",
      title: "드로잉 시리즈 #3",
      meta: "오리지널 드로잉 · 21x29cm",
      price: "₩65,000",
      actionLabel: "상세보기",
      img: "https://via.placeholder.com/420x200",
    },
    {
      id: "a3",
      title: "판화 #7",
      meta: "한정판 · 15부 · 25x35cm",
      price: "₩220,000",
      actionLabel: "장바구니",
      img: "https://via.placeholder.com/420x200",
    },
  ],
  전체: [
    {
      id: "b1",
      title: "드로잉 시리즈 #1",
      meta: "드로잉 · 21x29cm",
      price: "₩45,000",
      actionLabel: "상세보기",
      img: "https://via.placeholder.com/420x200",
    },
    {
      id: "b2",
      title: "에디션 프린트 #2",
      meta: "한정판 프린트 · 30부",
      price: "₩120,000",
      actionLabel: "장바구니",
      img: "https://via.placeholder.com/420x200",
    },
    {
      id: "b3",
      title: "판화 #3",
      meta: "한정판 · 15부",
      price: "₩210,000",
      actionLabel: "장바구니",
      img: "https://via.placeholder.com/420x200",
    },
  ],
  종료: [
    {
      id: "c1",
      title: "Sold-out 작품 #1",
      meta: "종료된 작품",
      price: "판매완료",
      actionLabel: "상세보기",
      img: "https://via.placeholder.com/420x200",
    },
  ],
};

export function ArtistPortfolioTabs() {
  const [tab, setTab] = useState<TabKey>("판매중");

  const items = useMemo(() => DATA[tab], [tab]);

  return (
    <div className="w-full">
      <div className="mb-[20px] flex items-center justify-between">
        <h2 className="text-[18px] text-cyan-900">포트폴리오</h2>
        <div className="flex gap-[12px]">
          {(["판매중", "전체", "종료"] as const).map((k) => {
            const active = tab === k;
            return (
              <button
                key={k}
                type="button"
                className={cn(
                  "h-[40px] border border-cyan-100 bg-white px-[16px] text-[14px] shadow-sm",
                  active ? "text-cyan-900" : "text-cyan-700",
                )}
                onClick={() => setTab(k)}
              >
                {k}
              </button>
            );
          })}
        </div>
      </div>

      <div className="w-full border border-cyan-100 bg-white p-[16px] shadow-sm">
        <div className="mb-[12px] flex items-center justify-between">
          <div className="text-[14px] text-cyan-700">필터 · 정렬</div>
          <div className="text-[13px] text-cyan-500">총 48개 작품</div>
        </div>

        <div className="grid w-full grid-cols-3 gap-[16px]">
          {items.map((a) => (
            <article
              key={a.id}
              className="border border-cyan-100 bg-white p-[12px] shadow-sm"
            >
              <Image
                src={a.img}
                alt={a.title}
                width={420}
                height={200}
                className="mb-[12px] h-[200px] w-full object-cover"
              />
              <h4 className="mb-[8px] text-[14px] text-cyan-900">{a.title}</h4>
              <p className="mb-[8px] text-[13px] text-cyan-700">{a.meta}</p>
              <div className="flex items-center justify-between">
                <span className="text-[14px] text-cyan-900">{a.price}</span>
                {a.actionLabel === "장바구니" ? (
                  <Button className="h-[36px] rounded-none bg-cyan-600 px-[12px] text-white shadow hover:bg-cyan-700">
                    장바구니
                  </Button>
                ) : (
                  <Button
                    variant="outline"
                    className="h-[36px] rounded-none border-cyan-100 bg-white px-[12px] text-cyan-700 shadow-sm hover:bg-cyan-50"
                  >
                    상세보기
                  </Button>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-[20px] flex w-full items-center justify-center">
          <Button
            variant="outline"
            className="h-[40px] rounded-none border-cyan-100 bg-white px-[20px] text-cyan-700 shadow-sm hover:bg-cyan-50"
          >
            더 보기
          </Button>
        </div>
      </div>
    </div>
  );
}
