import { FeedSearchHero } from "@/components/feed/feed-search-hero";
import { FilterBar } from "@/components/feed/filter-bar";
import { RecommendShelves } from "@/components/feed/recommend-shelves";
import { ArtworkGridClient } from "@/components/feed/artwork-grid-client";
import { SubscribedSummary } from "@/components/feed/subscribed-summary";
import { EmptyStateCta } from "@/components/feed/empty-state-cta";
import Link from "next/link";

export default function FeedPage() {
  return (
    <div className="flex w-full flex-col">
      {/* Brand bar */}
      <header className="w-full border-b border-cyan-100/80 bg-white/60 px-[32px] py-[24px] backdrop-blur-sm">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-[16px]">
            <div className="text-[20px] font-medium text-cyan-900">printtie</div>
            <div className="text-[14px] text-cyan-600">
              작가와 팬을 잇는, 작품 발견에서 배송까지
            </div>
          </div>
          <div className="flex items-center gap-[12px]">
            <Link
              href="/login"
              className="h-[40px] border border-cyan-100 bg-white px-[12px] text-[14px] text-cyan-700 shadow-sm"
            >
              로그인
            </Link>
            <Link
              href="/signup"
              className="h-[40px] border border-cyan-100 bg-white px-[12px] text-[14px] text-cyan-700 shadow-sm"
            >
              회원가입
            </Link>
          </div>
        </div>
      </header>

      <main className="flex w-full flex-col gap-[40px] px-[32px] py-[32px]">
        <FeedSearchHero />
        <FilterBar />
        <RecommendShelves />
        <ArtworkGridClient />
        <SubscribedSummary />
        <EmptyStateCta />
      </main>
    </div>
  );
}
