"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type CartItem = {
  id: string;
  title: string;
  artist: string;
  type: string;
  price: number;
  qty: number;
  options: string[];
  img: string;
};

function formatKRW(v: number) {
  return `₩${v.toLocaleString("ko-KR")}`;
}

export function CartClient() {
  const [items, setItems] = useState<CartItem[]>([
    {
      id: "c1",
      title: "작품 제목",
      artist: "작가명",
      type: "한정판 리프린트",
      price: 120000,
      qty: 1,
      options: ["사이즈: M", "액자: 없음"],
      img: "https://via.placeholder.com/96x96",
    },
    {
      id: "c2",
      title: "포스터 컬렉션",
      artist: "작가B",
      type: "리프린트",
      price: 45000,
      qty: 2,
      options: ["사이즈: A2", "액자: 블랙"],
      img: "https://via.placeholder.com/96x96",
    },
    {
      id: "c3",
      title: "원화 소품",
      artist: "작가C",
      type: "원작",
      price: 420000,
      qty: 1,
      options: ["사이즈: 원본", "배송: 특송"],
      img: "https://via.placeholder.com/96x96",
    },
  ]);

  const [editingId, setEditingId] = useState<string | null>(null);

  const editingItem = useMemo(
    () => items.find((i) => i.id === editingId) ?? null,
    [items, editingId],
  );

  const totals = useMemo(() => {
    const itemAmount = items.reduce((sum, i) => sum + i.price * i.qty, 0);
    const shipping = items.length ? 12000 : 0;
    const tax = Math.round(itemAmount * 0.1);
    const total = itemAmount + shipping + tax;
    return { itemAmount, shipping, tax, total };
  }, [items]);

  return (
    <div className="flex w-full flex-col">
      <header className="w-full bg-white px-[32px] py-[24px] shadow-sm">
        <div className="flex w-full items-center justify-between">
          <div className="flex flex-col">
            <h1 className="text-[20px] text-cyan-900">printtie</h1>
            <p className="text-[12px] text-cyan-700">
              작가와 팬을 잇는, 작품 발견에서 배송까지
            </p>
          </div>
          <div className="flex items-center gap-[12px]">
            <button className="h-[44px] border border-cyan-100 bg-white px-[16px] text-[14px] text-cyan-700 shadow-sm">
              계속 쇼핑
            </button>
            <button className="h-[44px] border border-cyan-100 bg-white px-[16px] text-[14px] text-cyan-700 shadow-sm">
              내 계정
            </button>
          </div>
        </div>
      </header>

      <main className="flex w-full gap-[32px] bg-cyan-50/60 px-[32px] py-[32px]">
        {/* Left */}
        <section className="flex w-[880px] flex-col rounded-md border border-cyan-100 bg-white p-[20px] shadow-sm">
          <header className="mb-[20px]">
            <h2 className="mb-[12px] text-[18px] text-cyan-900">
              장바구니 ({items.length})
            </h2>
            <p className="text-[14px] text-cyan-700">
              옵션을 확인하고 필요한 경우 수정하세요. 작가별 묶음 배송이 적용됩니다.
            </p>
          </header>

          {items.length > 0 ? (
            <div className="flex w-full flex-col gap-[12px]">
              {items.map((it, idx) => (
                <article
                  key={it.id}
                  className={
                    "flex w-full items-start gap-[12px] " +
                    (idx !== items.length - 1
                      ? "border-b border-cyan-100 pb-[12px]"
                      : "")
                  }
                >
                  <Image
                    src={it.img}
                    alt="작품 썸네일"
                    width={96}
                    height={96}
                    className="h-[96px] w-[96px] rounded-sm bg-cyan-50"
                  />
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-[16px] text-cyan-900">
                          {it.title} — {it.artist}
                        </h3>
                        <p className="mt-[6px] text-[13px] text-cyan-700">{it.type}</p>
                      </div>
                      <div className="text-[16px] text-cyan-900">{formatKRW(it.price)}</div>
                    </div>

                    <div className="mt-[10px] flex items-center gap-[12px]">
                      <div className="flex items-center gap-[8px]">
                        <span className="text-[13px] text-cyan-500">옵션:</span>
                        {it.options.map((opt) => (
                          <span
                            key={opt}
                            className="text-[13px] text-cyan-700"
                          >
                            {opt}
                          </span>
                        ))}
                      </div>

                      <div className="ml-auto flex items-center gap-[8px]">
                        <button
                          className="h-[32px] rounded border border-cyan-100 bg-white/70 px-[8px] text-cyan-700"
                          onClick={() =>
                            setItems((prev) =>
                              prev.map((p) =>
                                p.id === it.id
                                  ? { ...p, qty: Math.max(1, p.qty - 1) }
                                  : p,
                              ),
                            )
                          }
                        >
                          -
                        </button>
                        <Input
                          readOnly
                          value={String(it.qty)}
                          className="h-[32px] w-[48px] rounded border-cyan-100 bg-white text-center text-cyan-700"
                        />
                        <button
                          className="h-[32px] rounded border border-cyan-100 bg-white/70 px-[8px] text-cyan-700"
                          onClick={() =>
                            setItems((prev) =>
                              prev.map((p) =>
                                p.id === it.id ? { ...p, qty: p.qty + 1 } : p,
                              ),
                            )
                          }
                        >
                          +
                        </button>

                        <button
                          className="h-[32px] rounded border border-cyan-100 bg-white/70 px-[12px] text-cyan-700"
                          onClick={() => setEditingId(it.id)}
                        >
                          옵션수정
                        </button>
                        <button
                          className="h-[32px] rounded border border-cyan-100 bg-white/70 px-[12px] text-red-600"
                          onClick={() => setItems((prev) => prev.filter((p) => p.id !== it.id))}
                        >
                          삭제
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="border border-cyan-100 bg-white p-[16px] text-[14px] text-cyan-700">
              장바구니가 비어 있습니다.
            </div>
          )}

          <aside className="mt-[20px] flex w-full items-center justify-between">
            <div className="text-[13px] text-cyan-700">
              <p>
                총 작가 수: <span className="text-cyan-900">3</span>
              </p>
              <p className="mt-[6px]">배송 그룹별 합산이 적용됩니다.</p>
            </div>
            <div className="flex items-center gap-[12px]">
              <button className="h-[44px] rounded border border-cyan-100 bg-white/80 px-[16px] text-cyan-700">
                장바구니 저장
              </button>
              <button className="h-[44px] rounded border border-cyan-100 bg-white/80 px-[16px] text-cyan-700">
                선택 품목 저장
              </button>
            </div>
          </aside>
        </section>

        {/* Right */}
        <aside className="flex w-[400px] flex-col gap-[20px]">
          <section className="w-full rounded-md border border-cyan-100 bg-white p-[20px] shadow-sm">
            <h3 className="mb-[12px] text-[16px] text-cyan-900">주문 요약</h3>
            <div className="flex w-full flex-col gap-[8px]">
              <div className="flex justify-between text-cyan-700">
                <span>상품 합계</span>
                <span className="text-cyan-900">{formatKRW(totals.itemAmount)}</span>
              </div>
              <div className="flex justify-between text-cyan-700">
                <span>배송비</span>
                <span className="text-cyan-700">{formatKRW(totals.shipping)}</span>
              </div>
              <div className="flex justify-between text-cyan-700">
                <span>세금</span>
                <span className="text-cyan-700">{formatKRW(totals.tax)}</span>
              </div>
              <div className="mt-[12px] flex items-center justify-between border-t border-cyan-100 pt-[12px]">
                <span className="text-[16px] text-cyan-900">총액</span>
                <span className="text-[18px] text-cyan-900">{formatKRW(totals.total)}</span>
              </div>
            </div>

            <div className="mt-[16px] text-[13px] text-cyan-700">
              <p className="mb-[8px]">
                할인 코드 적용 또는 배송 옵션 변경은 결제 단계에서 확인할 수 있습니다.
              </p>
              <Button className="h-[44px] w-full rounded bg-cyan-600 text-white shadow-md hover:bg-cyan-700">
                결제 진행하기
              </Button>
            </div>
          </section>

          <section className="w-full rounded-md border border-cyan-100 bg-white p-[20px] shadow-sm">
            <h4 className="mb-[12px] text-[15px] text-cyan-900">다음 단계</h4>
            <div className="flex w-full flex-col gap-[12px]">
              <Button className="h-[44px] w-full rounded bg-green-600 text-white shadow-md hover:bg-green-700">
                체크아웃(결제로 이동)
              </Button>
              <div className="flex gap-[12px]">
                <button className="h-[44px] flex-1 rounded border border-cyan-100 bg-white text-cyan-700">
                  계속 쇼핑
                </button>
                <button className="h-[44px] flex-1 rounded border border-cyan-100 bg-white text-cyan-700">
                  장바구니 저장
                </button>
              </div>
            </div>
          </section>

          <section className="w-full rounded-md border border-cyan-100 bg-white p-[20px] shadow-sm">
            <h4 className="mb-[12px] text-[15px] text-cyan-900">이런 작품도 관심 있어할 수 있어요</h4>
            <ul className="flex w-full flex-col gap-[12px]">
              <li className="flex items-center gap-[12px]">
                <Image
                  src="https://via.placeholder.com/56x56"
                  alt="추천작"
                  width={56}
                  height={56}
                  className="h-[56px] w-[56px] rounded-sm bg-cyan-50"
                />
                <div className="flex-1">
                  <p className="text-[13px] text-cyan-900">한정판 드로잉 — 작가D</p>
                  <p className="text-[12px] text-cyan-700">사이즈: A3 · ₩80,000</p>
                </div>
                <button className="h-[32px] rounded border border-cyan-100 bg-white/80 px-[8px] text-cyan-700">
                  추가
                </button>
              </li>
              <li className="flex items-center gap-[12px]">
                <Image
                  src="https://via.placeholder.com/56x56"
                  alt="추천작"
                  width={56}
                  height={56}
                  className="h-[56px] w-[56px] rounded-sm bg-cyan-50"
                />
                <div className="flex-1">
                  <p className="text-[13px] text-cyan-900">프린트 시리즈 — 작가E</p>
                  <p className="text-[12px] text-cyan-700">사이즈: A2 · ₩34,000</p>
                </div>
                <button className="h-[32px] rounded border border-cyan-100 bg-white/80 px-[8px] text-cyan-700">
                  추가
                </button>
              </li>
            </ul>
          </section>
        </aside>
      </main>

      {/* Option Editor Modal */}
      <Dialog open={!!editingId} onOpenChange={(o) => !o && setEditingId(null)}>
        <DialogContent className="max-w-[560px] border-cyan-100">
          <DialogHeader>
            <DialogTitle className="text-cyan-900">옵션 수정</DialogTitle>
            <DialogDescription className="text-cyan-700">
              사이즈, 액자, 원작/리프린트 여부를 선택하세요.
            </DialogDescription>
          </DialogHeader>

          <div className="mt-[8px] flex flex-col gap-[12px]">
            <div className="text-[13px] text-cyan-700">
              대상: <span className="text-cyan-900">{editingItem?.title ?? "-"}</span>
            </div>

            <div className="flex flex-col gap-[8px]">
              <label className="text-[13px] text-cyan-700">사이즈</label>
              <select className="h-[40px] rounded border border-cyan-100 bg-white px-3 text-[14px] text-cyan-700">
                <option>선택하세요</option>
                <option>A3</option>
                <option>A2</option>
                <option>M</option>
                <option>원본</option>
              </select>
            </div>

            <div className="flex flex-col gap-[8px]">
              <label className="text-[13px] text-cyan-700">액자</label>
              <select className="h-[40px] rounded border border-cyan-100 bg-white px-3 text-[14px] text-cyan-700">
                <option>없음</option>
                <option>심플 화이트</option>
                <option>심플 블랙</option>
                <option>우드</option>
              </select>
            </div>

            <div className="flex flex-col gap-[8px]">
              <label className="text-[13px] text-cyan-700">원작 / 리프린트</label>
              <select className="h-[40px] rounded border border-cyan-100 bg-white px-3 text-[14px] text-cyan-700">
                <option>리프린트</option>
                <option>원작</option>
              </select>
            </div>

            <div className="mt-[8px] flex gap-[12px]">
              <Button
                variant="outline"
                className="h-[44px] flex-1 border-cyan-100 text-cyan-700"
                onClick={() => setEditingId(null)}
              >
                취소
              </Button>
              <Button
                variant="outline"
                className="h-[44px] flex-1 border-cyan-100 text-cyan-900 shadow-sm"
                onClick={() => setEditingId(null)}
              >
                변경 적용
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
