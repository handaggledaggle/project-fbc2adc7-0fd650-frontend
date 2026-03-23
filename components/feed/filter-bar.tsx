export function FilterBar() {
  return (
    <section className="flex w-full items-center gap-[12px] border border-cyan-100 bg-white p-[16px] shadow-sm">
      <div className="flex items-center gap-[12px]">
        <label className="text-[13px] text-cyan-600">장르</label>
        <select className="h-[40px] border border-cyan-100 bg-white px-[10px] text-[14px] text-cyan-800">
          <option>전체</option>
          <option>회화</option>
          <option>드로잉</option>
        </select>
      </div>

      <div className="flex items-center gap-[12px]">
        <label className="text-[13px] text-cyan-600">가격</label>
        <select className="h-[40px] border border-cyan-100 bg-white px-[10px] text-[14px] text-cyan-800">
          <option>전체</option>
          <option>~50,000원</option>
          <option>50,000~200,000원</option>
        </select>
      </div>

      <div className="flex items-center gap-[12px]">
        <label className="text-[13px] text-cyan-600">상태</label>
        <select className="h-[40px] border border-cyan-100 bg-white px-[10px] text-[14px] text-cyan-800">
          <option>전체</option>
          <option>판매중</option>
          <option>품절</option>
        </select>
      </div>

      <div className="flex items-center gap-[12px]">
        <label className="text-[13px] text-cyan-600">타입</label>
        <select className="h-[40px] border border-cyan-100 bg-white px-[10px] text-[14px] text-cyan-800">
          <option>원화</option>
          <option>프린트</option>
        </select>
      </div>

      <div className="ml-auto flex items-center gap-[12px]">
        <label className="text-[13px] text-cyan-600">정렬</label>
        <select className="h-[40px] border border-cyan-100 bg-white px-[10px] text-[14px] text-cyan-800">
          <option>추천순</option>
          <option>최신순</option>
          <option>가격 낮→높</option>
        </select>
      </div>
    </section>
  );
}
