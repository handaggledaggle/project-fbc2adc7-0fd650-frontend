export default function CheckoutPage() {
  return (
    <div className="flex w-full flex-col">
      <header className="w-full bg-gradient-to-r from-cyan-50 to-cyan-25 px-[32px] py-[24px]">
        <h1 className="text-[20px] text-cyan-900">printtie</h1>
        <p className="text-[14px] text-cyan-700">작가와 팬을 잇는, 작품 발견에서 배송까지</p>
      </header>

      <main className="flex w-full flex-col gap-[40px] px-[32px] py-[40px]">
        {/* Shipping Address */}
        <section className="w-full rounded-[8px] border border-cyan-100 bg-cyan-25 p-[20px] shadow-sm">
          <header className="mb-[20px]">
            <h2 className="mb-[12px] text-[18px] text-cyan-900">배송지</h2>
            <p className="text-[14px] text-cyan-700">
              기존 주소 선택 또는 새 주소를 입력하세요. 서버에서 재고·가격을 준비 단계에서
              검증합니다.
            </p>
          </header>

          <div className="flex w-full gap-[16px]">
            <aside className="w-[420px] rounded-[8px] border border-cyan-100 bg-white p-[16px] shadow-sm">
              <h3 className="mb-[12px] text-[16px] text-cyan-900">저장된 배송지</h3>
              <ul className="flex flex-col gap-[12px]">
                <li className="rounded-[6px] border border-cyan-100 bg-cyan-25 p-[12px]">
                  <div className="text-[14px] text-cyan-900">홍길동 · 010-1234-5678</div>
                  <div className="text-[13px] text-cyan-700">서울특별시 강남구 테헤란로 12, 3층</div>
                  <div className="text-[12px] text-cyan-500">기본 배송지</div>
                </li>
                <li className="rounded-[6px] border border-cyan-100 bg-white p-[12px]">
                  <div className="text-[14px] text-cyan-900">김작가 · 010-9876-5432</div>
                  <div className="text-[13px] text-cyan-700">부산광역시 해운대구 APT 101동 502호</div>
                  <div className="text-[12px] text-cyan-500">최근 사용</div>
                </li>
              </ul>
              <div className="mt-[12px] flex gap-[12px]">
                <button className="h-[44px] rounded-[6px] border border-cyan-200 bg-white px-[16px] text-[14px] text-cyan-700 shadow-sm">
                  기존 주소 사용
                </button>
                <button className="h-[44px] rounded-[6px] border border-cyan-200 bg-white px-[16px] text-[14px] text-cyan-700 shadow-sm">
                  주소 관리
                </button>
              </div>
            </aside>

            <form className="flex-1 rounded-[8px] border border-cyan-100 bg-white p-[16px] shadow-sm">
              <h3 className="mb-[12px] text-[16px] text-cyan-900">새 배송지 입력</h3>
              <div className="flex flex-col gap-[12px]">
                <label className="text-[13px] text-cyan-700">수취인 이름</label>
                <input className="rounded-[6px] border border-cyan-200 p-[8px] text-cyan-900" placeholder="예) 홍길동" />
                <label className="text-[13px] text-cyan-700">연락처</label>
                <input className="rounded-[6px] border border-cyan-200 p-[8px] text-cyan-900" placeholder="예) 010-1234-5678" />
                <label className="text-[13px] text-cyan-700">주소</label>
                <div className="flex gap-[8px]">
                  <input className="flex-1 rounded-[6px] border border-cyan-200 p-[8px] text-cyan-900" placeholder="우편번호 검색" />
                  <button type="button" className="h-[44px] rounded-[6px] border border-cyan-200 bg-white px-[12px] text-[14px] text-cyan-700 shadow-sm">
                    우편번호
                  </button>
                </div>
                <input className="rounded-[6px] border border-cyan-200 p-[8px] text-cyan-900" placeholder="주소 상세 (도로명, 건물명 등)" />
                <label className="text-[13px] text-cyan-700">배송 요청사항</label>
                <input className="rounded-[6px] border border-cyan-200 p-[8px] text-cyan-900" placeholder="예) 현관 앞에 놔주세요" />
              </div>

              <div className="mt-[12px] flex gap-[12px]">
                <button type="button" className="h-[44px] rounded-[6px] border border-transparent bg-gradient-to-r from-green-500 to-cyan-500 px-[16px] text-white shadow">
                  저장 후 선택
                </button>
                <button type="button" className="h-[44px] rounded-[6px] border border-cyan-200 bg-white px-[16px] text-[14px] text-cyan-700 shadow-sm">
                  임시로 사용
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Delivery Instructions */}
        <section className="w-full rounded-[8px] border border-cyan-100 bg-white p-[20px] shadow-sm">
          <header className="mb-[12px]">
            <h2 className="mb-[8px] text-[18px] text-cyan-900">배송 메모 및 옵션</h2>
            <p className="text-[14px] text-cyan-700">배달 시간·포장·수령 방식 등 세부 옵션을 설정하세요.</p>
          </header>

          <div className="flex gap-[16px]">
            <div className="w-[320px] rounded-[8px] border border-cyan-100 bg-cyan-25 p-[12px]">
              <h3 className="mb-[8px] text-[15px] text-cyan-900">배송 시간</h3>
              <ul className="flex flex-col gap-[8px] text-[14px] text-cyan-700">
                <li>배송시 요청: 오전</li>
                <li>배송시 요청: 오후</li>
                <li>배송시 요청: 지정일</li>
              </ul>
            </div>

            <div className="flex-1 rounded-[8px] border border-cyan-100 bg-white p-[12px]">
              <h3 className="mb-[8px] text-[15px] text-cyan-900">상세 메모</h3>
              <textarea
                className="w-full rounded-[6px] border border-cyan-200 p-[8px] text-cyan-900"
                rows={4}
                placeholder="예) 경비실에 맡겨주세요. 작품은 액자가 있어 부피가 큽니다."
              />
              <div className="mt-[12px] flex gap-[16px] text-[13px] text-cyan-700">
                <label className="flex items-center gap-[8px]">
                  <input type="checkbox" /> 포장 강화 요청
                </label>
                <label className="flex items-center gap-[8px]">
                  <input type="checkbox" /> 파손 보험 신청
                </label>
              </div>
            </div>
          </div>
        </section>

        {/* Payment Methods */}
        <section className="w-full rounded-[8px] border border-cyan-100 bg-cyan-25 p-[20px] shadow-sm">
          <header className="mb-[12px]">
            <h2 className="mb-[8px] text-[18px] text-cyan-900">결제 수단</h2>
            <p className="text-[14px] text-cyan-700">
              PG 위젯으로 결제를 진행하거나 카드·간편결제를 선택하세요. 서버 prepare 단계에서
              결제 가능 여부를 확인합니다.
            </p>
          </header>

          <div className="flex gap-[16px]">
            <aside className="w-[420px] rounded-[8px] border border-cyan-100 bg-white p-[12px]">
              <h3 className="mb-[8px] text-[15px] text-cyan-900">PG 위젯</h3>
              <div className="rounded-[6px] border border-cyan-100 bg-cyan-25 p-[12px] text-[14px] text-cyan-700">
                PG 결제 팝업 또는 외부 위젯 연동 영역
              </div>
              <div className="mt-[12px] flex flex-col gap-[8px]">
                <button className="h-[44px] rounded-[6px] border border-transparent bg-gradient-to-r from-green-500 to-cyan-500 px-[16px] text-white shadow">
                  PG 결제 시작
                </button>
                <button className="h-[44px] rounded-[6px] border border-cyan-200 bg-white px-[16px] text-[14px] text-cyan-700 shadow-sm">
                  결제 정보 미리보기
                </button>
              </div>
            </aside>

            <div className="flex-1 rounded-[8px] border border-cyan-100 bg-white p-[12px]">
              <h3 className="mb-[12px] text-[15px] text-cyan-900">결제수단 선택</h3>
              <ul className="flex flex-col gap-[10px]">
                <li className="flex items-center justify-between rounded-[6px] border border-cyan-100 bg-cyan-25 p-[10px]">
                  <div>
                    <div className="text-[14px] text-cyan-900">신용/체크카드</div>
                    <div className="text-[12px] text-cyan-700">VISA · MasterCard · 국내 카드</div>
                  </div>
                  <button className="h-[44px] rounded-[6px] border border-cyan-200 bg-white px-[12px] text-[14px] text-cyan-700">
                    선택
                  </button>
                </li>

                <li className="flex items-center justify-between rounded-[6px] border border-cyan-100 bg-white p-[10px]">
                  <div>
                    <div className="text-[14px] text-cyan-900">간편결제</div>
                    <div className="text-[12px] text-cyan-700">카카오페이 · 네이버페이 등</div>
                  </div>
                  <button className="h-[44px] rounded-[6px] border border-cyan-200 bg-white px-[12px] text-[14px] text-cyan-700">
                    선택
                  </button>
                </li>

                <li className="flex items-center justify-between rounded-[6px] border border-cyan-100 bg-cyan-25 p-[10px]">
                  <div>
                    <div className="text-[14px] text-cyan-900">계좌이체 / 무통장입금</div>
                    <div className="text-[12px] text-cyan-700">입금 확인 후 발송</div>
                  </div>
                  <button className="h-[44px] rounded-[6px] border border-cyan-200 bg-white px-[12px] text-[14px] text-cyan-700">
                    선택
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Support */}
        <section className="w-full rounded-[8px] border border-cyan-100 bg-white p-[20px] shadow-sm">
          <header className="mb-[12px]">
            <h2 className="mb-[8px] text-[18px] text-cyan-900">작가 후원 / 팁</h2>
            <p className="text-[14px] text-cyan-700">
              구매와 함께 작가를 후원할 수 있습니다. 투명한 후원금 내역은 주문서에 포함됩니다.
            </p>
          </header>

          <div className="flex gap-[16px]">
            <div className="w-[300px] rounded-[8px] border border-cyan-100 bg-cyan-25 p-[12px]">
              <h3 className="mb-[8px] text-[15px] text-cyan-900">후원 금액</h3>
              <ul className="flex flex-col gap-[8px] text-[14px] text-cyan-700">
                <li className="flex items-center justify-between">
                  <span>선택 후원: 1,000원</span>
                  <button className="h-[44px] rounded-[6px] border border-cyan-200 bg-white px-[12px] text-[14px] text-cyan-700">
                    선택
                  </button>
                </li>
                <li className="flex items-center justify-between">
                  <span>선택 후원: 5,000원</span>
                  <button className="h-[44px] rounded-[6px] border border-cyan-200 bg-white px-[12px] text-[14px] text-cyan-700">
                    선택
                  </button>
                </li>
                <li className="flex items-center justify-between gap-[8px]">
                  <span className="whitespace-nowrap">직접 입력</span>
                  <input className="w-full rounded-[6px] border border-cyan-200 p-[8px] text-cyan-900" placeholder="원 단위 입력" />
                </li>
              </ul>
            </div>

            <div className="flex-1 rounded-[8px] border border-cyan-100 bg-white p-[12px]">
              <h3 className="mb-[8px] text-[15px] text-cyan-900">후원 안내</h3>
              <p className="mb-[8px] text-[14px] text-cyan-700">
                후원금은 작가에게 전달되며, 주문서와 영수증에 별도 표기됩니다. 후원 취소는 주문
                취소와 동일하게 처리됩니다.
              </p>
              <div className="rounded-[6px] border border-cyan-100 bg-cyan-25 p-[10px] text-[14px] text-cyan-700">
                현재 장바구니의 작가: 이지은 작가 · 작품명: '빛의 초상'
              </div>
            </div>
          </div>
        </section>

        {/* Final summary */}
        <section className="w-full rounded-[8px] border border-cyan-100 bg-cyan-25 p-[20px] shadow-sm">
          <header className="mb-[12px]">
            <h2 className="mb-[8px] text-[18px] text-cyan-900">최종 주문 요약</h2>
            <p className="text-[14px] text-cyan-700">
              쿠폰과 적립금 적용 후 최종 결제 금액을 확인하세요. 결제 전 서버 prepare 검증을 진행합니다.
            </p>
          </header>

          <div className="flex w-full gap-[16px]">
            <article className="flex-1 rounded-[8px] border border-cyan-100 bg-white p-[12px]">
              <h3 className="mb-[8px] text-[15px] text-cyan-900">주문 상품</h3>
              <ul className="flex flex-col gap-[12px]">
                <li className="flex items-center justify-between border-b border-cyan-100 pb-[8px]">
                  <div>
                    <div className="text-[14px] text-cyan-900">빛의 초상 · 액자 포함</div>
                    <div className="text-[12px] text-cyan-700">수량 1 · 배송 예정일: 결제 후 3~5일</div>
                  </div>
                  <div className="text-[14px] text-cyan-900">₩120,000</div>
                </li>
                <li className="flex items-center justify-between">
                  <div className="text-[14px] text-cyan-700">선택 후원</div>
                  <div className="text-[14px] text-cyan-900">₩5,000</div>
                </li>
              </ul>

              <div className="mt-[12px] flex items-center justify-between">
                <div className="flex flex-col">
                  <label className="text-[13px] text-cyan-700">쿠폰 적용</label>
                  <div className="flex gap-[8px]">
                    <select className="rounded-[6px] border border-cyan-200 p-[8px] text-cyan-900">
                      <option>쿠폰 선택</option>
                      <option>신규회원 할인 - ₩5,000</option>
                    </select>
                    <button className="h-[44px] rounded-[6px] border border-transparent bg-gradient-to-r from-green-500 to-cyan-500 px-[12px] text-white shadow">
                      적용
                    </button>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-[13px] text-cyan-700">소계</div>
                  <div className="text-[18px] text-cyan-900">₩125,000</div>
                </div>
              </div>
            </article>

            <aside className="w-[360px] rounded-[8px] border border-cyan-100 bg-white p-[12px]">
              <h3 className="mb-[8px] text-[15px] text-cyan-900">결제 정보</h3>
              <div className="flex flex-col gap-[8px] text-[14px] text-cyan-700">
                <div className="flex justify-between">
                  <span>상품 금액</span>
                  <span>₩120,000</span>
                </div>
                <div className="flex justify-between">
                  <span>배송비</span>
                  <span>₩0</span>
                </div>
                <div className="flex justify-between">
                  <span>후원금</span>
                  <span>₩5,000</span>
                </div>
                <div className="mt-[8px] flex justify-between border-t border-cyan-100 pt-[8px] text-cyan-900">
                  <span className="text-[16px]">총 결제금액</span>
                  <span className="text-[16px]">₩125,000</span>
                </div>
              </div>

              <div className="mt-[12px] flex gap-[12px]">
                <button className="h-[56px] flex-1 rounded-[6px] border border-transparent bg-gradient-to-r from-green-600 to-cyan-600 text-white shadow-lg">
                  결제하기
                </button>
                <button className="h-[56px] w-[120px] rounded-[6px] border border-cyan-200 bg-white text-[14px] text-cyan-700 shadow-sm">
                  담기
                </button>
              </div>
            </aside>
          </div>
        </section>

        {/* Errors and guidance */}
        <section className="w-full rounded-[8px] border border-cyan-100 bg-white p-[20px] shadow-sm">
          <header className="mb-[12px]">
            <h2 className="mb-[8px] text-[18px] text-cyan-900">오류 및 안내</h2>
            <p className="text-[14px] text-cyan-700">재고 또는 결제 실패 시의 안내와 재시도 방법을 제공합니다.</p>
          </header>

          <div className="flex flex-col gap-[12px]">
            <div className="rounded-[6px] border border-cyan-100 bg-cyan-25 p-[12px]">
              <p className="text-[14px] text-cyan-900">
                재고 변경 알림: 선택한 '빛의 초상'의 액자 옵션 재고가 부족합니다. 동일 작가의 다른 옵션으로
                변경하거나 재입고 알림을 설정하세요.
              </p>
              <div className="mt-[8px] flex gap-[8px]">
                <button className="h-[44px] rounded-[6px] border border-cyan-200 bg-white px-[12px] text-[14px] text-cyan-700">
                  옵션 변경
                </button>
                <button className="h-[44px] rounded-[6px] border border-cyan-200 bg-white px-[12px] text-[14px] text-cyan-700">
                  재입고 알림
                </button>
              </div>
            </div>

            <div className="rounded-[6px] border border-cyan-100 bg-cyan-25 p-[12px]">
              <p className="text-[14px] text-cyan-900">
                결제 실패 가이드: 결제 승인 거부 또는 네트워크 문제 발생 시, 다른 결제수단을 시도하거나 카드사에
                문의하세요.
              </p>
              <div className="mt-[8px] flex gap-[8px]">
                <button className="h-[44px] rounded-[6px] border border-cyan-200 bg-white px-[12px] text-[14px] text-cyan-700">
                  다른 결제수단 선택
                </button>
                <button className="h-[44px] rounded-[6px] border border-cyan-200 bg-white px-[12px] text-[14px] text-cyan-700">
                  고객센터 문의
                </button>
              </div>
            </div>

            <div className="rounded-[6px] border border-cyan-100 bg-white p-[12px]">
              <h4 className="mb-[8px] text-[14px] text-cyan-900">결제 준비(prepare) 단계</h4>
              <p className="mb-[8px] text-[14px] text-cyan-700">
                서버에서 재고·가격·배송 가능 여부를 확인합니다. 준비 실패 시 즉시 메시지를 표시하고 결제 진행을
                중단합니다.
              </p>
              <div className="text-[13px] text-cyan-500">
                권장 조치: 주소·옵션을 다시 확인하고, 재고 확보 후 결제를 재시도하세요.
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
