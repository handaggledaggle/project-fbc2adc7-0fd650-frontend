import Link from "next/link";

type Params = { orderId: string };

export default async function OrderCompletePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { orderId } = await params;

  return (
    <div className="flex w-full flex-col">
      <header className="w-full border-b border-cyan-100 bg-white px-[32px] py-[24px]">
        <div className="flex w-full items-center justify-between">
          <div className="flex flex-col">
            <h1 className="text-[20px] text-cyan-900">printtie</h1>
            <p className="text-[12px] text-cyan-700">작가와 팬을 잇는, 작품 발견에서 배송까지</p>
          </div>
          <Link
            href="/orders"
            className="h-[40px] border border-cyan-100 bg-white px-[16px] text-[14px] text-cyan-700 shadow-sm"
          >
            주문조회
          </Link>
        </div>
      </header>

      <main className="w-full bg-cyan-50 px-[32px] py-[32px]">
        <section className="w-full border border-cyan-100 bg-white p-[24px] shadow-sm">
          <h2 className="text-[18px] text-cyan-900">주문이 완료되었습니다</h2>
          <p className="mt-[8px] text-[14px] text-cyan-700">
            주문번호 <span className="text-cyan-900">#{orderId}</span> · 결제금액 ₩125,000
          </p>

          <div className="mt-[16px] grid grid-cols-2 gap-[16px]">
            <div className="border border-cyan-100 bg-cyan-50 p-[16px]">
              <div className="text-[13px] text-cyan-600">배송지</div>
              <div className="mt-[6px] text-[14px] text-cyan-900">홍길동 · 010-1234-5678</div>
              <div className="mt-[4px] text-[13px] text-cyan-700">서울특별시 강남구 테헤란로 12, 3층</div>
            </div>
            <div className="border border-cyan-100 bg-cyan-50 p-[16px]">
              <div className="text-[13px] text-cyan-600">예상 배송</div>
              <div className="mt-[6px] text-[14px] text-cyan-900">결제 후 3~5영업일</div>
              <div className="mt-[4px] text-[13px] text-cyan-700">송장 등록 시 알림으로 안내됩니다.</div>
            </div>
          </div>

          <div className="mt-[20px] flex gap-[12px]">
            <Link
              href="/orders"
              className="h-[44px] rounded border border-cyan-100 bg-white px-[16px] text-[14px] text-cyan-700 shadow-sm"
            >
              주문조회로 이동
            </Link>
            <Link
              href="/feed"
              className="h-[44px] rounded border border-cyan-100 bg-white px-[16px] text-[14px] text-cyan-700 shadow-sm"
            >
              계속 쇼핑
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
