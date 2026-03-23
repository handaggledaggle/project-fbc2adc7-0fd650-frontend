"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

type ArtworkCard = {
  id: string;
  title: string;
  artistName: string;
  priceLabel: string;
  img: string;
};

export function ArtworkGridClient() {
  const [count, setCount] = useState(4);
  const [items, setItems] = useState<ArtworkCard[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    setError(null);
    fetch("/api/artworks")
      .then(async (res) => {
        if (!res.ok) throw new Error("작품을 불러올 수 없습니다.");
        const data = await res.json();
        if (!mounted) return;
        const formatted: ArtworkCard[] = data.map((d: any) => ({
          id: d.id,
          title: d.title,
          artistName: d.artist_name ?? d.artistName ?? "작가",
          priceLabel: d.price_label ?? d.priceLabel ?? "-",
          img: d.img ?? "https://via.placeholder.com/320x200",
        }));
        setItems(formatted);
      })
      .catch((err) => setError(String(err.message || err)))
      .finally(() => mounted && setLoading(false));
    return () => {
      mounted = false;
    };
  }, []);

  const visible = useMemo(() => items.slice(0, count), [items, count]);
  const hasMore = count < items.length;

  if (loading) {
    return <section className="w-full border border-cyan-100 bg-white p-[16px] shadow-sm">로딩 중...</section>;
  }

  if (error) {
    return <section className="w-full border border-cyan-100 bg-white p-[16px] shadow-sm">에러: {error}</section>;
  }

  return (
    <section className="w-full border border-cyan-100 bg-white p-[16px] shadow-sm">
      <div className="mb-[16px] flex items-center justify-between">
        <h2 className="text-[18px] text-cyan-900">전체 작품</h2>
        <p className="text-[13px] text-cyan-600">무한 스크롤로 더 많은 작품을 확인하세요</p>
      </div>

      <div className="grid w-full grid-cols-4 gap-[16px]">
        {visible.map((a) => (
          <article
            key={a.id}
            className="border border-cyan-100 bg-cyan-50 p-[12px] shadow-sm"
          >
            <Image
              src={a.img}
              alt="작품 이미지"
              width={320}
              height={200}
              className="h-auto w-full"
            />
            <h3 className="mt-[8px] text-[14px] text-cyan-900">
              {a.artistName} — {a.title}
            </h3>
            <p className="text-[13px] text-cyan-700">{a.priceLabel}</p>

            <div className="mt-[8px] flex items-center gap-[8px]">
              <Button
                variant="outline"
                className="h-[36px] rounded-none border-cyan-100 bg-white px-[10px] text-cyan-800 shadow-sm hover:bg-cyan-50"
                asChild
              >
                <Link href="#">상세보기</Link>
              </Button>
              <Button
                variant="outline"
                className="h-[36px] rounded-none border-cyan-100 bg-white px-[10px] text-cyan-800 shadow-sm hover:bg-cyan-50"
                asChild
              >
                <Link href="/artists/kim-sujin">작가페이지</Link>
              </Button>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-[16px] flex w-full items-center justify-center">
        <Button
          variant="outline"
          className="h-[40px] rounded-none border-cyan-100 bg-white px-[16px] text-cyan-800 shadow-sm hover:bg-cyan-50"
          disabled={!hasMore}
          onClick={() => setCount((v) => Math.min(v + 4, items.length))}
        >
          더 불러오기
        </Button>
      </div>
    </section>
  );
}
