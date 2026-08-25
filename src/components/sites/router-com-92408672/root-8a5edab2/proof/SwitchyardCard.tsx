import { ArrowRight12 } from "@/components/sites/router-com-92408672/shared/icons";
import { SwitchyardRoutes } from "./SwitchyardRoutes";

const ASSETS = "/sites/router-com-92408672/root-8a5edab2";

/** Orange/brown brand-story card ("从胡同走出来的AI孵化者") — static server component. */
export function SwitchyardCard() {
  return (
    <div className="relative flex flex-col justify-end text-white px-6 py-8 sm:p-8 lg:p-12 border border-gray-3 min-h-[315px] lg:min-h-[404px] border-t-0 lg:border-t order-2 lg:order-none">
      <span className="hidden lg:contents">
        <span aria-hidden="true" className="pointer-events-none absolute -inset-px z-20">
          <span aria-hidden="true" className="pointer-events-none absolute bg-gray-6" style={{ width: "10.87px", height: "1px", bottom: 0, left: 0 }} />
          <span aria-hidden="true" className="pointer-events-none absolute bg-gray-6" style={{ width: "1px", height: "10.87px", bottom: 0, left: 0 }} />
        </span>
      </span>
      <span className="contents lg:hidden">
        <span aria-hidden="true" className="pointer-events-none absolute -inset-px z-20">
          <span aria-hidden="true" className="pointer-events-none absolute bg-gray-6" style={{ width: "1px", height: "21.74px", marginTop: "-10.87px", top: 0, left: 0 }} />
          <span aria-hidden="true" className="pointer-events-none absolute bg-gray-6" style={{ width: "10.87px", height: "1px", top: 0, left: 0 }} />
          <span aria-hidden="true" className="pointer-events-none absolute bg-gray-6" style={{ width: "1px", height: "21.74px", marginTop: "-10.87px", top: 0, right: 0 }} />
          <span aria-hidden="true" className="pointer-events-none absolute bg-gray-6" style={{ width: "10.87px", height: "1px", top: 0, right: 0 }} />
          <span aria-hidden="true" className="pointer-events-none absolute bg-gray-6" style={{ width: "10.87px", height: "1px", bottom: 0, left: 0 }} />
          <span aria-hidden="true" className="pointer-events-none absolute bg-gray-6" style={{ width: "1px", height: "10.87px", bottom: 0, left: 0 }} />
          <span aria-hidden="true" className="pointer-events-none absolute bg-gray-6" style={{ width: "10.87px", height: "1px", bottom: 0, right: 0 }} />
          <span aria-hidden="true" className="pointer-events-none absolute bg-gray-6" style={{ width: "1px", height: "10.87px", bottom: 0, right: 0 }} />
        </span>
      </span>
      <span className="pointer-events-none absolute inset-0 z-0 block overflow-hidden">
        <img
          alt=""
          loading="lazy"
          className="pointer-events-none absolute inset-0 z-0 h-full w-full select-none object-cover object-center"
          style={{ color: "transparent" }}
          src={`${ASSETS}/images/proof/switchyard-bg.webp`}
        />
        <SwitchyardRoutes />
      </span>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] block h-[78%] backdrop-blur-[8px] [mask-image:linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.18)_28%,black_78%)]"
        style={{ background: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.12) 38%, rgba(0,0,0,0.48) 100%)" }}
      />
      <div className="relative z-10 flex max-w-[500px] flex-col gap-4 sm:gap-6">
        <div className="flex flex-col gap-4 sm:gap-8">
          <h3 className="leading-trim text-[22px] leading-6 sm:text-[28px] sm:leading-8">从胡同走出来的AI孵化者</h3>
          <p className="leading-trim max-w-[483px] text-[15px] leading-5 sm:text-[16px] sm:leading-6">名字取自北京传统小吃&ldquo;艾窝窝&rdquo;——扎根本土，扎实做事。清华十年培训经验+易得十年运营经验，我们做企业AI落地的&ldquo;管道&rdquo;，把大厂AI能力翻译成中小企业听得懂、用得上的服务。</p>
        </div>
        <a
          href="#contact"
          className="flex w-fit items-center gap-[11px] text-[16px] leading-4 outline-none hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          联系我们
          <ArrowRight12 className="shrink-0" />
        </a>
      </div>
    </div>
  );
}
