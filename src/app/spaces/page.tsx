import type { Metadata } from "next";
import { ChannelHeader } from "@/components/sites/router-com-92408672/root-8a5edab2/channels/ChannelHeader";
import { SpacesChannel } from "@/components/sites/router-com-92408672/root-8a5edab2/channels/SpacesChannel";
import { SiteFooter } from "@/components/sites/router-com-92408672/root-8a5edab2/SiteFooter";

export const metadata: Metadata = {
  title: "全国OPC空间目录 | 艾窝窝OPC社区",
  description:
    "收录全国面向一人公司（OPC）与AI超级个体的认证社区、孵化载体与官方服务专区，按地区导航，信息来自政府公告与权威报道。",
};

export default function SpacesPage() {
  return (
    <main className="flex min-h-full flex-col bg-[#f0e8e0] text-ink">
      <ChannelHeader active="/spaces" />
      <div className="flex-1">
        <SpacesChannel />
      </div>
      <SiteFooter />
    </main>
  );
}
