"use client";

// 联系我们 — contact info + frontend-only inquiry form, styled in the site's
// bordered-card language (gray-3 border + gray-6 corner ticks + mono labels).
import { useState, type CSSProperties, type FormEvent } from "react";

const CORNER_TICKS: CSSProperties[] = [
  { width: "10.87px", height: "1px", top: 0, left: 0 },
  { width: "1px", height: "10.87px", top: 0, left: 0 },
  { width: "10.87px", height: "1px", top: 0, right: 0 },
  { width: "1px", height: "10.87px", top: 0, right: 0 },
  { width: "10.87px", height: "1px", bottom: 0, left: 0 },
  { width: "1px", height: "10.87px", bottom: 0, left: 0 },
  { width: "10.87px", height: "1px", bottom: 0, right: 0 },
  { width: "1px", height: "10.87px", bottom: 0, right: 0 },
];

const CONTACT_ROWS = [
  { label: "地址", value: "北京市朝阳区" },
  { label: "邮箱", value: "AIWOWO@agent.qq.com", href: "mailto:AIWOWO@agent.qq.com" },
  { label: "电话", value: "13701202210", href: "tel:13701202210" },
  { label: "运营主体", value: "北京恒瑞永嘉资产管理有限公司" },
];

const INTEREST_OPTIONS = [
  "OPC入驻孵化",
  "蹲窝儿平台合作",
  "AI培训咨询",
  "企业基础服务",
  "战略合作",
];

const FIELD_CLASS =
  "w-full rounded-none border border-gray-2 bg-white px-3 py-2.5 text-[15px] leading-5 text-ink outline-none transition-colors placeholder:text-gray-4 hover:border-gray-4 focus-visible:border-ink";

const LABEL_CLASS = "text-[12px] leading-4 text-gray-6";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" aria-labelledby="contact-heading" className="pt-[60px] pb-16 lg:py-0">
      <div className="mx-auto w-full max-w-[1440px] px-4 lg:px-16 lg:pb-32">
        <div className="flex flex-col gap-[19.5px] pb-8 lg:pb-[58px]">
          <h2
            id="contact-heading"
            className="max-w-[450px] text-[34px] leading-9 tracking-[-0.4px] text-ink lg:text-[48px] lg:leading-[48px] lg:tracking-[-0.64px]"
          >
            让对话开始。
          </h2>
          <p className="max-w-[536px] text-[15px] leading-5 text-ink lg:text-base lg:leading-6">
            无论你是想入驻的OPC创业者、寻求合作的企业伙伴，还是关注我们的朋友——我们都在。
          </p>
        </div>
        <div className="relative grid border border-gray-3 bg-white lg:grid-cols-[421fr_891fr]">
          <span aria-hidden="true" className="pointer-events-none absolute -inset-px z-20">
            {CORNER_TICKS.map((style, index) => (
              <span
                key={index}
                aria-hidden="true"
                className="pointer-events-none absolute bg-gray-6"
                style={style}
              />
            ))}
          </span>
          <div className="flex flex-col gap-6 border-gray-3 px-6 py-8 lg:border-r lg:p-12">
            <p className="font-mono text-[12px] leading-4 tracking-[0.5px] text-gray-5 uppercase">
              联系方式
            </p>
            <dl className="flex flex-col gap-5">
              {CONTACT_ROWS.map((row) => (
                <div key={row.label} className="flex flex-col gap-1">
                  <dt className={LABEL_CLASS}>{row.label}</dt>
                  <dd className="text-[16px] leading-6 text-ink">
                    {row.href ? (
                      <a
                        href={row.href}
                        className="underline underline-offset-2 hover:no-underline"
                      >
                        {row.value}
                      </a>
                    ) : (
                      row.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
            <div className="mt-auto border border-gray-2 bg-surface-gray p-4">
              <p className="font-mono text-[12px] leading-4 text-gray-6 uppercase">红利窗口期</p>
              <p className="mt-2 text-[14px] leading-5 text-ink">
                2026–2028年是OPC政策红利期：注册宽松、税费优惠、准入门槛低。较早入场更有机会享受发展红利。
              </p>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-5 px-6 py-8 lg:p-12">
            <p className="font-mono text-[12px] leading-4 tracking-[0.5px] text-gray-5 uppercase">
              留言咨询
            </p>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="flex flex-col gap-1.5">
                <span className={LABEL_CLASS}>姓名</span>
                <input name="name" type="text" required className={FIELD_CLASS} placeholder="你的姓名" />
              </label>
              <label className="flex flex-col gap-1.5">
                <span className={LABEL_CLASS}>公司 / 组织</span>
                <input name="company" type="text" className={FIELD_CLASS} placeholder="选填" />
              </label>
              <label className="flex flex-col gap-1.5">
                <span className={LABEL_CLASS}>邮箱</span>
                <input name="email" type="email" required className={FIELD_CLASS} placeholder="you@example.com" />
              </label>
              <label className="flex flex-col gap-1.5">
                <span className={LABEL_CLASS}>电话</span>
                <input name="phone" type="tel" className={FIELD_CLASS} placeholder="选填" />
              </label>
            </div>
            <label className="flex flex-col gap-1.5">
              <span className={LABEL_CLASS}>咨询方向</span>
              <select name="interest" defaultValue={INTEREST_OPTIONS[0]} className={FIELD_CLASS}>
                {INTEREST_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
            <label className="flex flex-col gap-1.5">
              <span className={LABEL_CLASS}>留言</span>
              <textarea name="message" rows={4} className={`${FIELD_CLASS} resize-y`} placeholder="想聊点什么？" />
            </label>
            <div className="flex items-center gap-4">
              <button
                type="submit"
                className="inline-flex h-[42px] shrink-0 cursor-pointer items-center justify-center bg-ink-black px-5 text-sm text-white transition-colors hover:bg-ink-black/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink-black"
              >
                提交咨询
              </button>
              <p aria-live="polite" className="text-[14px] leading-5 text-gray-6">
                {submitted ? "✓ 提交成功！我们会尽快与您联系。" : ""}
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
