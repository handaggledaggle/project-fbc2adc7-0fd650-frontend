import type { ReactNode } from "react";
import { GlobalNav } from "@/components/printtie/global-nav";
import { PrinttieFooter } from "@/components/printtie/printtie-footer";

export default function PrinttieLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-cyan-50">
      <GlobalNav />
      <div className="w-[1440px] mx-auto flex min-h-screen flex-col pt-[72px]">
        {children}
      </div>
      <PrinttieFooter />
    </div>
  );
}
