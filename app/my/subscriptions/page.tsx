import Image from "next/image";

export default function MySubscriptionsPage() {
  return (
    <div className="flex w-full flex-col">
      <header className="w-full border-b border-cyan-100 bg-white px-[32px] py-[24px] shadow-[0_1px_0_rgba(6,182,212,0.03)]">
        <div className="flex w-full items-center justify-between">
          <div className="flex flex-col">
            <h1 className="text-[20px] text-cyan-900">My Subscriptions</h1>
            <p className="mt-[8px] text-[14px] text-cyan-700">
              printtie — 작가와 팬을 잇는, 작품 발견에서 배송까지
            </p>
          </div>
          <div className="flex items-center gap-[12px]">
            <button className="h-[40px] border border-cyan-100 bg-white px-[16px] text-[14px] text-cyan-900 shadow-sm">
              구독 전체 관리
            </button>
            <button className="h-[40px] border border-cyan-100 bg-white px-[16px] text-[14px] text-cyan-900 shadow-sm">
              알림 보기
            </button>
          </div>
        </div>
      </header>

      <main className="flex w-full gap-[32px] px-[32px] py-[32px]">
        {/* Left toolbar */}
        <section className="flex w-[380px] flex-col gap-[16px] border border-cyan-100 bg-cyan-50 p-[20px] shadow-sm">
          <div className="flex flex-col">
            <h2 className="mb-[12px] text-[16px] text-cyan-900">정렬 · 필터 · 알림설정</h2>
            <form className="flex flex-col gap-[12px]">
              <div className="flex flex-col">
                <label className="mb-[6px] text-[13px] text-cyan-700">정렬</label>
                <select className="h-[40px] border border-cyan-100 bg-white px-[10px] text-[14px] text-cyan-900">
                  <option>최신 활동 순</option>
                  <option>작가 이름 A→Z</option>
                  <option>알림 많은 순</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label className="mb-[6px] text-[13px] text-cyan-700">필터</label>
                <div className="flex flex-col gap-[8px]">
                  <label className="flex items-center gap-[8px]">
                    <input type="checkbox" className="h-[16px] w-[16px] accent-green-500" />
                    <span className="text-[13px] text-cyan-700">판매중인 작품만</span>
                  </label>
                  <label className="flex items-center gap-[8px]">
                    <input type="checkbox" className="h-[16px] w-[16px] accent-green-500" />
                    <span className="text-[13px] text-cyan-700">한정판·드롭만</span>
                  </label>
                </div>
              </div>

              <div className="flex flex-col">
                <label className="mb-[6px] text-[13px] text-cyan-700">글로벌 알림 설정</label>
                <div className="flex gap-[8px]">
                  <button className="h-[40px] border border-cyan-100 bg-white px-[12px] text-[14px] text-cyan-900 shadow-sm">
                    모두 켜기
                  </button>
                  <button className="h-[40px] border border-cyan-100 bg-white px-[12px] text-[14px] text-cyan-900 shadow-sm">
                    모두 끄기
                  </button>
                </div>
              </div>
            </form>
          </div>

          <aside className="mt-[12px] flex flex-col">
            <h3 className="mb-[8px] text-[14px] text-cyan-900">알림 요약</h3>
            <div className="flex flex-col gap-[8px]">
              <div className="flex items-center justify-between border border-cyan-100 bg-white p-[12px]">
                <span className="text-[13px] text-cyan-700">이메일 수신</span>
                <span className="text-[13px] text-cyan-700">활성</span>
              </div>
              <div className="flex items-center justify-between border border-cyan-100 bg-white p-[12px]">
                <span className="text-[13px] text-cyan-700">푸시 수신</span>
                <span className="text-[13px] text-cyan-500">비활성</span>
              </div>
            </div>
          </aside>
        </section>

        {/* Middle updates feed */}
        <main className="flex w-full flex-col gap-[24px] border border-cyan-100 bg-white p-[24px] shadow-sm">
          <div className="flex items-center justify-between">
            <h2 className="text-[18px] text-cyan-900">구독 작가의 최신 소식</h2>
            <div className="flex gap-[8px]">
              <button className="h-[40px] border border-cyan-100 bg-white px-[12px] text-[14px] text-cyan-900 shadow-sm">
                읽음 표시
              </button>
              <button className="h-[40px] border border-cyan-100 bg-white px-[12px] text-[14px] text-cyan-900 shadow-sm">
                필터 적용
              </button>
            </div>
          </div>

          <section className="flex flex-col gap-[16px]">
            <article className="flex gap-[16px] border border-cyan-100 bg-cyan-50 p-[16px] shadow-sm">
              <Image
                src="https://via.placeholder.com/96x96"
                alt="작가 썸네일"
                width={96}
                height={96}
                className="h-[96px] w-[96px] rounded-md bg-white"
              />
              <div className="flex w-full flex-col">
                <div className="flex items-start justify-between">
                  <div className="flex flex-col">
                    <h3 className="text-[15px] text-cyan-900">이서연 작가 — 신작 컬렉션 발매</h3>
                    <p className="mt-[8px] text-[13px] text-cyan-700">
                      한정판 프린트 10점, 예약 판매 시작. 옵션: 사이즈 선택 필요
                    </p>
                    <p className="mt-[8px] text-[12px] text-cyan-500">발행 2시간 전</p>
                  </div>
                  <div className="flex flex-col items-end gap-[8px]">
                    <div className="flex gap-[8px]">
                      <button className="h-[40px] border border-cyan-100 bg-white px-[12px] text-[14px] text-cyan-900 shadow-sm">
                        작품 보기
                      </button>
                      <button className="h-[40px] border border-cyan-100 bg-white px-[12px] text-[14px] text-cyan-900 shadow-sm">
                        읽음
                      </button>
                    </div>
                    <button className="h-[40px] border border-cyan-100 bg-white px-[12px] text-[14px] text-cyan-900 shadow-sm">
                      작가 페이지
                    </button>
                  </div>
                </div>
              </div>
            </article>

            <article className="flex gap-[16px] border border-cyan-100 bg-cyan-50 p-[16px] shadow-sm">
              <Image
                src="https://via.placeholder.com/96x96"
                alt="작가 썸네일"
                width={96}
                height={96}
                className="h-[96px] w-[96px] rounded-md bg-white"
              />
              <div className="flex w-full flex-col">
                <div className="flex items-start justify-between">
                  <div className="flex flex-col">
                    <h3 className="text-[15px] text-cyan-900">박민호 작가 — 전시 공지</h3>
                    <p className="mt-[8px] text-[13px] text-cyan-700">
                      다음 주 팝업 전시 참여 안내. 방문 예약 및 배송 옵션 안내 포함
                    </p>
                    <p className="mt-[8px] text-[12px] text-cyan-500">발행 1일 전</p>
                  </div>
                  <div className="flex flex-col items-end gap-[8px]">
                    <div className="flex gap-[8px]">
                      <button className="h-[40px] border border-cyan-100 bg-white px-[12px] text-[14px] text-cyan-900 shadow-sm">
                        세부보기
                      </button>
                      <button className="h-[40px] border border-cyan-100 bg-white px-[12px] text-[14px] text-cyan-900 shadow-sm">
                        공유
                      </button>
                    </div>
                    <button className="h-[40px] border border-cyan-100 bg-white px-[12px] text-[14px] text-cyan-900 shadow-sm">
                      작가 페이지
                    </button>
                  </div>
                </div>
              </div>
            </article>

            <div className="flex flex-col items-center border border-cyan-100 bg-white p-[16px] text-cyan-500">
              <p className="text-[14px]">
                더 많은 업데이트를 보려면 구독 작가를 추가하거나 필터를 확인하세요.
              </p>
            </div>
          </section>
        </main>

        {/* Right aside */}
        <aside className="flex w-[320px] flex-col gap-[24px]">
          <section className="w-full border border-cyan-100 bg-white p-[16px] shadow-sm">
            <h3 className="mb-[12px] text-[16px] text-cyan-900">구독 작가 (6)</h3>
            <ul className="flex flex-col gap-[12px]">
              <li className="flex items-center justify-between border border-cyan-100 bg-cyan-50 p-[10px]">
                <div className="flex items-center gap-[12px]">
                  <Image
                    src="https://via.placeholder.com/48x48"
                    alt="작가"
                    width={48}
                    height={48}
                    className="h-[48px] w-[48px] rounded-full bg-white"
                  />
                  <div className="flex flex-col">
                    <span className="text-[14px] text-cyan-900">김아람</span>
                    <span className="text-[12px] text-cyan-500">최근 활동: 3시간 전</span>
                  </div>
                </div>
                <div className="flex gap-[8px]">
                  <button className="h-[40px] border border-cyan-100 bg-white px-[10px] text-[14px] text-cyan-900 shadow-sm">
                    알림
                  </button>
                  <button className="h-[40px] border border-cyan-100 bg-white px-[10px] text-[14px] text-cyan-900 shadow-sm">
                    언팔로우
                  </button>
                </div>
              </li>

              <li className="flex items-center justify-between border border-cyan-100 bg-cyan-50 p-[10px]">
                <div className="flex items-center gap-[12px]">
                  <Image
                    src="https://via.placeholder.com/48x48"
                    alt="작가"
                    width={48}
                    height={48}
                    className="h-[48px] w-[48px] rounded-full bg-white"
                  />
                  <div className="flex flex-col">
                    <span className="text-[14px] text-cyan-900">오승현</span>
                    <span className="text-[12px] text-cyan-500">최근 활동: 2일 전</span>
                  </div>
                </div>
                <div className="flex gap-[8px]">
                  <button className="h-[40px] border border-cyan-100 bg-white px-[10px] text-[14px] text-cyan-900 shadow-sm">
                    알림
                  </button>
                  <button className="h-[40px] border border-cyan-100 bg-white px-[10px] text-[14px] text-cyan-900 shadow-sm">
                    언팔로우
                  </button>
                </div>
              </li>
            </ul>
            <div className="mt-[12px] flex justify-center">
              <button className="h-[40px] border border-cyan-100 bg-white px-[12px] text-[14px] text-cyan-900 shadow-sm">
                전체 보기
              </button>
            </div>
          </section>

          <section className="w-full border border-cyan-100 bg-cyan-50 p-[16px]">
            <h3 className="mb-[12px] text-[16px] text-cyan-900">알림 설정</h3>
            <form className="flex flex-col gap-[12px]">
              <div className="flex items-center justify-between border border-cyan-100 bg-white p-[10px]">
                <div className="flex flex-col">
                  <label className="text-[13px] text-cyan-700">이메일</label>
                  <span className="text-[12px] text-cyan-500">작가 업데이트 및 주문 관련 알림</span>
                </div>
                <div className="flex gap-[8px]">
                  <button className="h-[40px] border border-cyan-100 bg-white px-[10px] text-[14px] text-green-700 shadow-sm">
                    구독
                  </button>
                  <button className="h-[40px] border border-cyan-100 bg-white px-[10px] text-[14px] text-cyan-700 shadow-sm">
                    해지
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between border border-cyan-100 bg-white p-[10px]">
                <div className="flex flex-col">
                  <label className="text-[13px] text-cyan-700">푸시</label>
                  <span className="text-[12px] text-cyan-500">신작 드롭·긴급 공지</span>
                </div>
                <div className="flex gap-[8px]">
                  <button className="h-[40px] border border-cyan-100 bg-white px-[10px] text-[14px] text-green-700 shadow-sm">
                    구독
                  </button>
                  <button className="h-[40px] border border-cyan-100 bg-white px-[10px] text-[14px] text-cyan-700 shadow-sm">
                    해지
                  </button>
                </div>
              </div>
            </form>
            <p className="mt-[12px] text-[12px] text-cyan-500">
              알림 수신 비율을 높이면 신작 노출과 구매 전환이 개선됩니다.
            </p>
          </section>

          <section className="w-full border border-cyan-100 bg-white p-[16px] shadow-sm">
            <h3 className="mb-[12px] text-[16px] text-cyan-900">추천 작가</h3>
            <p className="mb-[12px] text-[13px] text-cyan-700">
              구독 작가가 없거나 확장하고 싶다면, 아래 작가들을 확인하세요.
            </p>
            <ul className="flex flex-col gap-[12px]">
              <li className="flex items-center justify-between border border-cyan-100 bg-cyan-50 p-[10px]">
                <div className="flex items-center gap-[12px]">
                  <Image
                    src="https://via.placeholder.com/48x48"
                    alt="추천작가"
                    width={48}
                    height={48}
                    className="h-[48px] w-[48px] rounded-full bg-white"
                  />
                  <div className="flex flex-col">
                    <span className="text-[14px] text-cyan-900">최지윤</span>
                    <span className="text-[12px] text-cyan-500">최근 드롭: 2주 전</span>
                  </div>
                </div>
                <button className="h-[40px] border border-green-500 bg-green-500 px-[10px] text-[14px] text-white shadow-md">
                  구독
                </button>
              </li>

              <li className="flex items-center justify-between border border-cyan-100 bg-cyan-50 p-[10px]">
                <div className="flex items-center gap-[12px]">
                  <Image
                    src="https://via.placeholder.com/48x48"
                    alt="추천작가"
                    width={48}
                    height={48}
                    className="h-[48px] w-[48px] rounded-full bg-white"
                  />
                  <div className="flex flex-col">
                    <span className="text-[14px] text-cyan-900">이준형</span>
                    <span className="text-[12px] text-cyan-500">추천 이유: 인기 작품 다수</span>
                  </div>
                </div>
                <button className="h-[40px] border border-green-500 bg-green-500 px-[10px] text-[14px] text-white shadow-md">
                  구독
                </button>
              </li>
            </ul>
          </section>
        </aside>
      </main>
    </div>
  );
}
