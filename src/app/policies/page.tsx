import type { Metadata } from "next";
import { ChannelHeader } from "@/components/sites/router-com-92408672/root-8a5edab2/channels/ChannelHeader";
import { PoliciesChannel } from "@/components/sites/router-com-92408672/root-8a5edab2/channels/PoliciesChannel";
import { SiteFooter } from "@/components/sites/router-com-92408672/root-8a5edab2/SiteFooter";

export const metadata: Metadata = {
  title: "全国OPC政策库 | 艾窝窝OPC社区",
  description:
    "汇集国家与各地关于一人公司（OPC）、AI超级个体的专项政策：原文引用、要点整理与解读。解读仅供参考，以官方文件为准。",
};

export default function PoliciesPage() {
  return (
    <main className="flex min-h-full flex-col bg-[#f0e8e0] text-ink">
      <ChannelHeader active="/policies" />
      <div className="flex-1">
        <PoliciesChannel />
      </div>
      <SiteFooter />
    </main>
  );
}
