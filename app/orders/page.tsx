import Image from "next/image";
import Link from "next/link";

export default function OrdersPage() {
  return (
    <div className="flex w-full flex-col">
      <header className="w-full border-b border-cyan-100 bg-white px-[32px] py-[24px] backdrop-blur-sm">
        <div className="flex w-full items-center justify-between">
          <div className="flex flex-col">
            <h1 className="text-[20px] text-cyan-900">printtie</h1>
            <p className="text-[12px] text-cyan-700">작가와 팬을 잇는, 작품 발견에서 배송까지</p>
          </div>
          <div className="flex items-center gap-[12px]">
            <button className="h-[40px] border border-cyan-100 bg-white px-[16px] text-[14px] text-cyan-700 shadow-sm">
              계정
            </button>
            <button className="h-[40px] border border-cyan-100 bg-white px-[16px] text-[14px] text-cyan-700 shadow-sm">
              고객센터
            </button>
          </div>
        </div>
      </header>

      <main className="flex w-full gap-[24px] bg-cyan-50 px-[32px] py-[32px]">
        {/* List */}
        <section className="flex w-[520px] flex-col gap-[16px] border border-cyan-100 bg-white p-[16px] shadow-sm">
          <header className="flex flex-col">
            <h2 className="mb-[16px] text-[18px] text-cyan-900">주문 목록</h2>
            <div className="mb-[12px] flex gap-[12px]">
              <button className="h-[40px] border border-cyan-100 bg-white px-[12px] text-[14px] text-cyan-700 hover:bg-cyan-50">
                전체
              </button>
              <button className="h-[40px] border border-cyan-100 bg-white px-[12px] text-[14px] text-cyan-700 hover:bg-cyan-50">
                배송중
              </button>
              <button className="h-[40px] border border-cyan-100 bg-white px-[12px] text-[14px] text-cyan-700 hover:bg-cyan-50">
                배송완료
              </button>
              <button className="h-[40px] border border-cyan-100 bg-white px-[12px] text-[14px] text-cyan-700 hover:bg-cyan-50">
                반품/교환
              </button>
            </div>
            <div className="flex items-center gap-[8px]">
              <input
                className="h-[40px] w-full border border-cyan-100 bg-white px-[10px] text-[14px] text-cyan-700"
                placeholder="주문번호 또는 작품명 검색"
              />
              <select className="h-[40px] border border-cyan-100 bg-white px-[10px] text-[14px] text-cyan-700">
                <option>전체 기간</option>
                <option>지난 30일</option>
                <option>지난 90일</option>
              </select>
            </div>
          </header>

          <div className="flex flex-col gap-[12px] overflow-y-auto" style={{ maxHeight: 560 }}>
            <article className="flex flex-col gap-[8px] border border-cyan-100 bg-white p-[12px] shadow-sm">
              <div className="flex items-start justify-between">
                <div className="flex flex-col">
                  <p className="text-[14px] text-cyan-700">
                    주문번호 <span className="text-cyan-400">#20260317-0012</span>
                  </p>
                  <p className="text-[12px] text-cyan-400">주문일 2026-03-15 · 결제완료</p>
                </div>
                <div className="text-[14px] text-cyan-700">배송중</div>
              </div>
              <div className="flex items-center gap-[8px]">
                <Image
                  src="https://via.placeholder.com/56x56"
                  alt="작품 썸네일"
                  width={56}
                  height={56}
                  className="h-[56px] w-[56px] bg-cyan-50"
                />
                <div className="flex flex-col">
                  <p className="text-[14px] text-cyan-900">작품명: 꽃의 연대기</p>
                  <p className="text-[12px] text-cyan-700">옵션: A4 · 무광액자</p>
                </div>
                <div className="ml-auto text-[14px] text-cyan-700">₩45,000</div>
              </div>
              <div className="flex gap-[8px]">
                <Link
                  href="/orders/20260317-0012"
                  className="h-[40px] border border-cyan-100 bg-white px-[12px] text-[14px] text-cyan-700"
                >
                  상세보기
                </Link>
                <button className="h-[40px] border border-cyan-100 bg-white px-[12px] text-[14px] text-cyan-700">
                  배송조회
                </button>
              </div>
            </article>

            <article className="flex flex-col gap-[8px] border border-cyan-100 bg-white p-[12px] shadow-sm">
              <div className="flex items-start justify-between">
                <div className="flex flex-col">
                  <p className="text-[14px] text-cyan-700">
                    주문번호 <span className="text-cyan-400">#20260310-0098</span>
                  </p>
                  <p className="text-[12px] text-cyan-400">주문일 2026-03-10 · 결제완료</p>
                </div>
                <div className="text-[14px] text-cyan-700">배송완료</div>
              </div>
              <div className="flex items-center gap-[8px]">
                <Image
                  src="https://via.placeholder.com/56x56"
                  alt="작품 썸네일"
                  width={56}
                  height={56}
                  className="h-[56px] w-[56px] bg-cyan-50"
                />
                <div className="flex flex-col">
                  <p className="text-[14px] text-cyan-900">작품명: 도시의 오후</p>
                  <p className="text-[12px] text-cyan-700">옵션: A3 · 유광</p>
                </div>
                <div className="ml-auto text-[14px] text-cyan-700">₩68,000</div>
              </div>
              <div className="flex gap-[8px]">
                <button className="h-[40px] border border-cyan-100 bg-white px-[12px] text-[14px] text-cyan-700">
                  영수증
                </button>
                <button className="h-[40px] border border-cyan-100 bg-white px-[12px] text-[14px] text-cyan-700">
                  반품요청
                </button>
              </div>
            </article>
          </div>
        </section>

        {/* Detail (preview) */}
        <section className="flex flex-1 flex-col gap-[24px]">
          <div className="border border-cyan-100 bg-white p-[20px] shadow-sm">
            <div className="flex items-start justify-between">
              <div className="flex flex-col">
                <p className="text-[14px] text-cyan-700">주문번호</p>
                <h2 className="mb-[12px] text-[18px] text-cyan-900">#20260317-0012</h2>
                <p className="text-[12px] text-cyan-400">주문일 2026-03-15 · 결제수단: 신용카드</p>
              </div>
              <div className="flex flex-col items-end">
                <p className="text-[14px] text-cyan-700">주문 상태</p>
                <p className="text-[16px] text-cyan-900">배송중</p>
              </div>
            </div>
          </div>

          <section className="border border-cyan-100 bg-white p-[20px] shadow-sm">
            <h3 className="mb-[16px] text-[16px] text-cyan-900">주문 항목</h3>
            <article className="flex items-start gap-[12px] border border-cyan-100 p-[12px]">
              <Image
                src="https://via.placeholder.com/96x96"
                alt="작품 썸네일"
                width={96}
                height={96}
                className="h-[96px] w-[96px] bg-cyan-50"
              />
              <div className="flex flex-col">
                <p className="text-[14px] text-cyan-900">꽃의 연대기</p>
                <p className="text-[12px] text-cyan-700">옵션: A4 · 무광액자</p>
                <p className="text-[12px] text-cyan-700">작가: 이민호</p>
                <p className="text-[12px] text-cyan-400">수량 1</p>
              </div>
              <div className="ml-auto flex flex-col items-end">
                <p className="text-[14px] text-cyan-700">₩45,000</p>
                <p className="text-[12px] text-cyan-400">배송비: ₩3,000</p>
              </div>
            </article>

            <div className="mt-[12px] flex flex-col gap-[8px] border-t border-cyan-100 pt-[12px] text-[14px]">
              <div className="flex justify-between">
                <span className="text-cyan-700">상품합계</span>
                <span className="text-cyan-900">₩45,000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-cyan-700">배송비</span>
                <span className="text-cyan-900">₩3,000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-cyan-700">할인</span>
                <span className="text-cyan-900">₩0</span>
              </div>
              <div className="flex justify-between">
                <span className="text-cyan-700">결제금액</span>
                <span className="text-cyan-900">₩48,000</span>
              </div>
            </div>
          </section>

          <section className="border border-cyan-100 bg-white p-[20px] shadow-sm">
            <h3 className="mb-[12px] text-[16px] text-cyan-900">배송 정보</h3>
            <div className="mb-[12px] flex items-center gap-[16px]">
              <div className="flex flex-col">
                <p className="text-[14px] text-cyan-700">택배사</p>
                <p className="text-[14px] text-cyan-900">한빛택배</p>
              </div>
              <div className="flex flex-col">
                <p className="text-[14px] text-cyan-700">운송장 번호</p>
                <p className="text-[14px] text-cyan-900">HB123456789KR</p>
              </div>
              <div className="ml-auto">
                <button className="h-[40px] border border-cyan-100 bg-white px-[12px] text-[14px] text-cyan-700">
                  택배사 사이트에서 보기
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-[12px]">
              <div className="flex items-start gap-[12px]">
                <div className="mt-[6px] h-[8px] w-[8px] rounded-full bg-green-600" />
                <div className="flex flex-col">
                  <p className="text-[13px] text-cyan-700">2026-03-16 10:12 · 집하완료</p>
                  <p className="text-[12px] text-cyan-400">서울 강남구 → 출발지</p>
                </div>
              </div>
              <div className="flex items-start gap-[12px]">
                <div className="mt-[6px] h-[8px] w-[8px] rounded-full bg-cyan-600" />
                <div className="flex flex-col">
                  <p className="text-[13px] text-cyan-700">2026-03-17 08:45 · 배송중</p>
                  <p className="text-[12px] text-cyan-400">배송기사 배차 완료</p>
                </div>
              </div>
              <div className="flex items-start gap-[12px]">
                <div className="mt-[6px] h-[8px] w-[8px] rounded-full bg-cyan-200" />
                <div className="flex flex-col">
                  <p className="text-[13px] text-cyan-700">예정 · 배송완료</p>
                  <p className="text-[12px] text-cyan-400">도착 후 배송완료로 업데이트</p>
                </div>
              </div>
            </div>
          </section>
        </section>

        {/* Side info */}
        <aside className="flex w-[320px] flex-col gap-[24px]">
          <div className="border border-cyan-100 bg-white p-[16px] shadow-sm">
            <h4 className="mb-[8px] text-[14px] text-cyan-900">배송지</h4>
            <p className="text-[13px] text-cyan-700">홍길동 · 010-1234-5678</p>
            <p className="text-[12px] text-cyan-400">서울특별시 강남구 강남대로 123, 5층 (역삼동)</p>
            <div className="mt-[12px] flex gap-[8px]">
              <button className="h-[40px] border border-cyan-100 bg-white px-[12px] text-[14px] text-cyan-700">
                편집
              </button>
              <button className="h-[40px] border border-cyan-100 bg-white px-[12px] text-[14px] text-cyan-700">
                기본배송지로 설정
              </button>
            </div>
          </div>

          <div className="border border-cyan-100 bg-white p-[16px] shadow-sm">
            <h4 className="mb-[8px] text-[14px] text-cyan-900">배송 관련 문의</h4>
            <p className="text-[13px] text-cyan-700">배송 지연이나 분실 시 고객센터에 문의하세요.</p>
            <div className="mt-[12px] flex gap-[8px]">
              <button className="h-[40px] border border-cyan-100 bg-white px-[12px] text-[14px] text-cyan-700">
                CS 문의하기
              </button>
              <button className="h-[40px] border border-cyan-100 bg-white px-[12px] text-[14px] text-cyan-700">
                운송장 재조회
              </button>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}
