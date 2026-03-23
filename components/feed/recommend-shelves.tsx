"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type Shelf = {
  id: number;
  kind: string;
  title: string;
  subtitle: string | null;
  img: string | null;
  created_at?: string;
};

const fallbackShelves: Shelf[] = [
  {
    id: 1,
    kind: "spotlight",
    title: "오늘의 추천",
    subtitle: "지금 반응 좋은 작품을 모아봤어요",
    img: "https://via.placeholder.com/800x480?text=Spotlight",
  },
  {
    id: 2,
    kind: "new",
    title: "새로 들어온 작품",
    subtitle: "방금 등록된 신작",
    img: "https://via.placeholder.com/800x480?text=New",
  },
  {
    id: 3,
    kind: "under50k",
    title: "5만원 이하",
    subtitle: "가볍게 시작하는 아트 컬렉션",
    img: "https://via.placeholder.com/800x480?text=Under+50k",
  },
];

function ShelfCard({ shelf }: { shelf: Shelf }) {
  return (
    <article className="flex w-[360px] shrink-0 flex-col border border-cyan-100 bg-white shadow-sm">
      <div className="relative h-[180px] w-full overflow-hidden bg-cyan-50">
        <Image
          src={shelf.img ?? "https://via.placeholder.com/800x480?text=Shelf"}
          alt={shelf.title}
          fill
          className="object-cover"
          sizes="360px"
        />
      </div>
      <div className="p-[12px]">
        <h3 className="text-[14px] font-medium text-cyan-900">{shelf.title}</h3>
        {shelf.subtitle ? (
          <p className="mt-[4px] text-[13px] text-cyan-700">{shelf.subtitle}</p>
        ) : null}
      </div>
    </article>
  );
}

export function RecommendShelves() {
  const [shelves, setShelves] = useState<Shelf[] | null>(null);

  useEffect(() => {
    let mounted = true;

    async function load() {
      try {
        const res = await fetch("/api/shelves", { cache: "no-store" });
        if (!res.ok) throw new Error("Failed to load shelves");
        const data = (await res.json()) as Shelf[];
        if (mounted) setShelves(data);
      } catch {
        // API가 아직 준비되지 않았거나 DB 연결이 없는 환경에서도 UI가 깨지지 않도록 fallback 제공
        if (mounted) setShelves(fallbackShelves);
      }
    }

    load();

    return () => {
      mounted = false;
    };
  }, []);

  const grouped = useMemo(() => {
    const list = shelves ?? [];
    const byKind = new Map<string, Shelf[]>();
    for (const s of list) {
      const arr = byKind.get(s.kind) ?? [];
      arr.push(s);
      byKind.set(s.kind, arr);
    }
    return byKind;
  }, [shelves]);

  const kinds = useMemo(() => Array.from(grouped.keys()), [grouped]);

  return (
    <section className="w-full">
      <div className="mb-[12px] flex items-center justify-between">
        <h2 className="text-[16px] text-cyan-900">추천 큐레이션</h2>
        <p className="text-[13px] text-cyan-600">당신을 위한 선반</p>
      </div>

      {kinds.length === 0 ? (
        <div className="w-full border border-cyan-100 bg-white p-[16px] text-[13px] text-cyan-700 shadow-sm">
          추천 선반을 불러오는 중입니다...
        </div>
      ) : (
        <div className="flex flex-col gap-[16px]">
          {kinds.map((kind) => (
            <div key={kind} className="w-full border border-cyan-100 bg-white p-[16px] shadow-sm">
              <div className="mb-[10px] flex items-end justify-between">
                <div>
                  <div className="text-[14px] font-medium text-cyan-900">{kind}</div>
                  <div className="text-[12px] text-cyan-600">큐레이션</div>
                </div>
              </div>

              <div className="flex gap-[12px] overflow-x-auto pb-[4px]">
                {(grouped.get(kind) ?? []).map((shelf) => (
                  <ShelfCard key={shelf.id} shelf={shelf} />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
