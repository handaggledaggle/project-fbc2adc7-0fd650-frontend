import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArtistPortfolioTabs } from "@/components/artist/artist-portfolio-tabs";

type Params = { artistId: string };

export default async function ArtistProfilePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { artistId } = await params;

  const artist = {
    id: artistId,
    name: "김수진",
    meta: "작가 · 판화·드로잉 · 서울 기반",
    tagline: "Tagline: 작가와 팬을 잇는, 작품 발견에서 배송까지",
    followers: "12.3k",
    works: "48",
    subscribers: "1.1k",
  };

  return (
    <div className="flex w-full flex-col">
      {/* Artist header */}
      <section className="w-full bg-white px-[32px] py-[40px]">
        <header className="flex w-full items-center justify-between">
          <div className="flex items-center gap-[20px]">
            <div className="flex h-[120px] w-[120px] items-center justify-center rounded-[8px] border border-cyan-100 bg-cyan-50 shadow-sm">
              <Image
                src="https://via.placeholder.com/112x112"
                alt="작가 아바타"
                width={112}
                height={112}
                className="h-[112px] w-[112px] object-cover"
              />
            </div>
            <div className="flex flex-col">
              <h1 className="mb-[12px] text-[28px] text-cyan-900">{artist.name}</h1>
              <p className="mb-[8px] text-[14px] text-cyan-700">{artist.meta}</p>
              <p className="text-[13px] text-cyan-500">{artist.tagline}</p>
            </div>
          </div>

          <div className="flex items-center gap-[12px]">
            <div className="flex flex-col items-end">
              <div className="flex gap-[12px]">
                <Button className="h-[44px] rounded-none bg-cyan-600 px-[20px] text-white shadow-md hover:bg-cyan-700">
                  구독하기
                </Button>
                <Button
                  variant="outline"
                  className="h-[44px] rounded-none border-cyan-100 bg-white px-[16px] text-cyan-700 shadow-sm hover:bg-cyan-50"
                >
                  팔로우
                </Button>
              </div>
              <div className="mt-[12px] flex gap-[16px] text-[14px] text-cyan-700">
                <span>
                  팔로워 <span className="text-cyan-900">{artist.followers}</span>
                </span>
                <span>
                  작품 <span className="text-cyan-900">{artist.works}</span>
                </span>
                <span>
                  구독자 <span className="text-cyan-900">{artist.subscribers}</span>
                </span>
              </div>
            </div>
          </div>
        </header>
      </section>

      {/* Bio & socials */}
      <section className="w-full bg-cyan-50 px-[32px] py-[40px]">
        <div className="flex w-full gap-[24px]">
          <div className="flex w-[720px] flex-col">
            <h2 className="mb-[16px] text-[20px] text-cyan-900">작가 소개</h2>
            <div className="w-full border border-cyan-100 bg-white p-[20px] shadow-sm">
              <p className="mb-[12px] text-[14px] text-cyan-700">
                김수진은 판화와 드로잉을 중심으로 작업하는 서울 기반 작가입니다.
                전통적 판화기법과 디지털 프로세스를 결합해 한정판 에디션과
                프린트를 제작합니다. 최근 개인전 '조용한 표면'을 열었으며 한정판
                시리즈로 컬렉터들의 관심을 받고 있습니다.
              </p>
              <p className="text-[14px] text-cyan-700">
                주요 활동: 개인전 2024 '조용한 표면' (서울), 그룹전 '선과 색' (2023)
              </p>
            </div>

            <h3 className="mb-[12px] mt-[24px] text-[16px] text-cyan-900">전시·아카이브</h3>
            <div className="w-full border border-cyan-100 bg-white p-[16px] shadow-sm">
              <ul className="flex flex-col gap-[8px] text-[14px] text-cyan-700">
                <li>2024 — 개인전 '조용한 표면' · 갤러리 산</li>
                <li>2023 — 그룹전 '선과 색' · 아트스페이스</li>
                <li>2021 — 레지던시 '판화의 시간' · 판화공방</li>
              </ul>
            </div>
          </div>

          <aside className="flex w-[360px] flex-col gap-[16px]">
            <div className="w-full border border-cyan-100 bg-white p-[16px] shadow-sm">
              <h4 className="mb-[8px] text-[14px] text-cyan-900">연락·SNS</h4>
              <div className="flex flex-col gap-[8px] text-[14px] text-cyan-700">
                <a href="#">Instagram · @sujin_prints</a>
                <a href="#">Twitter · @sujin_art</a>
                <a href="#">Email · contact@sujinprints.com</a>
              </div>
            </div>

            <div className="w-full border border-cyan-100 bg-white p-[16px] shadow-sm">
              <h4 className="mb-[8px] text-[14px] text-cyan-900">구독 혜택</h4>
              <p className="mb-[8px] text-[14px] text-cyan-700">
                구독 시 신작 알림, 한정판 우선 구매권, 배송 추적 업데이트를 제공합니다.
              </p>
              <div className="flex gap-[12px]">
                <Button className="h-[40px] rounded-none bg-cyan-600 px-[16px] text-white shadow-md hover:bg-cyan-700">
                  월 구독 시작
                </Button>
                <Button
                  variant="outline"
                  className="h-[40px] rounded-none border-cyan-100 bg-white px-[16px] text-cyan-700 shadow-sm hover:bg-cyan-50"
                >
                  혜택 보기
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Notices */}
      <section className="w-full bg-white px-[32px] py-[40px]">
        <h2 className="mb-[16px] text-[18px] text-cyan-900">공지 & 신작 안내</h2>
        <div className="flex w-full flex-col gap-[12px]">
          <article className="w-full border border-cyan-100 bg-cyan-50 p-[16px] shadow-sm">
            <div className="flex justify-between">
              <div className="flex flex-col">
                <p className="text-[14px] text-cyan-900">신작 에디션 발매</p>
                <p className="text-[13px] text-cyan-700">
                  2026-03-10 · 한정 에디션 '물의 표면' 30부 발매 예정
                </p>
              </div>
              <div className="text-[14px] text-green-600">신규</div>
            </div>
          </article>

          <article className="w-full border border-cyan-100 bg-cyan-50 p-[16px] shadow-sm">
            <div className="flex justify-between">
              <div className="flex flex-col">
                <p className="text-[14px] text-cyan-900">전시 참여 안내</p>
                <p className="text-[13px] text-cyan-700">
                  2026-02-05 · '지역 작가 그룹전' 참여, 전시 기간 예약 가능
                </p>
              </div>
              <div className="text-[14px] text-cyan-400">지난 공지</div>
            </div>
          </article>
        </div>
      </section>

      {/* Portfolio */}
      <section className="w-full bg-cyan-50 px-[32px] py-[40px]">
        <ArtistPortfolioTabs />
      </section>

      {/* Trust & sharing */}
      <section className="w-full bg-white px-[32px] py-[40px]">
        <div className="flex w-full gap-[24px]">
          <aside className="flex w-[520px] flex-col gap-[12px]">
            <div className="w-full border border-cyan-100 bg-cyan-50 p-[16px] shadow-sm">
              <Image
                src="https://via.placeholder.com/488x300"
                alt="대표작 이미지"
                width={488}
                height={300}
                className="mb-[12px] h-[300px] w-full object-cover"
              />
              <h3 className="mb-[8px] text-[14px] text-cyan-900">대표작: 물의 표면 #1</h3>
              <p className="text-[14px] text-cyan-700">
                한정판 프린트 · 30부 · 작가 직접 서명 · 안전 포장 및 배송
              </p>
            </div>

            <div className="w-full border border-cyan-100 bg-white p-[12px] shadow-sm">
              <h4 className="mb-[8px] text-[14px] text-cyan-900">공유하기</h4>
              <div className="flex gap-[12px]">
                <Button
                  variant="outline"
                  className="h-[40px] rounded-none border-cyan-100 bg-white px-[16px] text-cyan-700 shadow-sm hover:bg-cyan-50"
                >
                  링크 복사
                </Button>
                <Button
                  variant="outline"
                  className="h-[40px] rounded-none border-cyan-100 bg-white px-[16px] text-cyan-700 shadow-sm hover:bg-cyan-50"
                >
                  SNS 공유
                </Button>
                <Button
                  variant="outline"
                  className="h-[40px] rounded-none border-cyan-100 bg-white px-[16px] text-cyan-700 shadow-sm hover:bg-cyan-50"
                >
                  추천하기
                </Button>
              </div>
            </div>
          </aside>

          <div className="flex flex-1 flex-col gap-[12px]">
            <div className="w-full border border-cyan-100 bg-white p-[16px] shadow-sm">
              <h4 className="mb-[12px] text-[14px] text-cyan-900">신뢰 정보</h4>
              <div className="flex flex-col gap-[8px] text-[14px] text-cyan-700">
                <p>
                  평균 배송 리드타임: <span className="text-cyan-900">5-8 영업일</span>
                </p>
                <p>
                  반품/교환 정책: <span className="text-cyan-900">수령 후 7일 이내 접수</span>
                </p>
                <p>
                  구매자 후기: <span className="text-cyan-900">4.8/5 (평균 만족도)</span>
                </p>
              </div>
            </div>

            <div className="w-full border border-cyan-100 bg-cyan-50 p-[16px] shadow-sm">
              <h4 className="mb-[12px] text-[14px] text-cyan-900">대표 정보</h4>
              <div className="flex justify-between">
                <div className="flex flex-col">
                  <span className="text-[13px] text-cyan-700">위치</span>
                  <span className="text-[14px] text-cyan-900">서울</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[13px] text-cyan-700">응답 속도</span>
                  <span className="text-[14px] text-cyan-900">24시간 내</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[13px] text-cyan-700">인증</span>
                  <span className="text-[14px] text-cyan-900">신원 확인 완료</span>
                </div>
              </div>
            </div>

            <div className="w-full border border-cyan-100 bg-white p-[16px] shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <p className="mb-[8px] text-[16px] text-cyan-900">
                    작가 구독으로 더 많은 신작을 받아보세요
                  </p>
                  <p className="text-[14px] text-cyan-700">
                    구독자는 우선 구매권, 전용 알림, 할인 혜택을 받습니다.
                  </p>
                </div>
                <div className="flex gap-[12px]">
                  <Button className="h-[48px] rounded-none bg-cyan-600 px-[20px] text-white shadow-md hover:bg-cyan-700">
                    구독 시작
                  </Button>
                  <Button
                    variant="outline"
                    className="h-[48px] rounded-none border-cyan-100 bg-white px-[20px] text-cyan-700 shadow-sm hover:bg-cyan-50"
                  >
                    문의하기
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
