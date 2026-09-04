import { describe, expect, it } from "vitest";
import { routerJsonLd } from "@/components/sites/router-com-92408672/root-8a5edab2/jsonld";
import { FAQ_ITEMS } from "@/lib/faq";
import { CONTACT, SITE_URL } from "@/lib/site";

type Node = Record<string, unknown>;

const graph = routerJsonLd["@graph"] as unknown as Node[];
const organization = graph.find((node) => node["@type"] === "Organization")!;
const website = graph.find((node) => node["@type"] === "WebSite")!;
const faqPage = graph.find((node) => node["@type"] === "FAQPage")!;
const services = graph.filter((node) => node["@type"] === "Service");

describe("Organization schema", () => {
  it("含 name、description、url", () => {
    expect(organization.name).toBeTruthy();
    expect(organization.description).toBeTruthy();
    expect(organization.url).toBe(SITE_URL);
  });

  it("含 logo 与 sameAs（实体识别与归属）", () => {
    expect(organization.logo).toBeTruthy();
    expect(Array.isArray(organization.sameAs)).toBe(true);
    expect((organization.sameAs as string[]).length).toBeGreaterThan(0);
  });

  it("含 PostalAddress", () => {
    const address = organization.address as Node;
    expect(address["@type"]).toBe("PostalAddress");
    expect(address.addressCountry).toBe(CONTACT.countryCode);
    expect(address.addressLocality).toBeTruthy();
  });

  it("含 contactPoint，且每项都有 contactType 与邮箱/电话", () => {
    const points = organization.contactPoint as Node[];
    expect(Array.isArray(points)).toBe(true);
    expect(points.length).toBeGreaterThan(0);
    for (const point of points) {
      expect(point["@type"]).toBe("ContactPoint");
      expect(point.contactType).toBeTruthy();
      expect(point.email ?? point.telephone).toBeTruthy();
    }
  });

  it("电话为 E.164", () => {
    expect(organization.telephone).toBe(CONTACT.phoneE164);
  });

  it("所有 URL 字段都是绝对地址", () => {
    const logo = organization.logo as Node;
    expect(String(organization.url)).toMatch(/^https:\/\//);
    expect(String(logo.url)).toMatch(/^https:\/\//);
    expect(String(organization.image)).toMatch(/^https:\/\//);
  });
});

describe("WebSite schema", () => {
  it("绑定到 Organization 且声明语言", () => {
    expect((website.publisher as Node)["@id"]).toBe(organization["@id"]);
    expect(website.inLanguage).toBe("zh-CN");
    expect(website.url).toBe(SITE_URL);
  });
});

describe("Service schema", () => {
  it("每项服务都有名称、描述与提供方", () => {
    expect(services.length).toBeGreaterThanOrEqual(4);
    for (const service of services) {
      expect(service.name).toBeTruthy();
      expect(service.description).toBeTruthy();
      expect((service.provider as Node)["@id"]).toBe(organization["@id"]);
    }
  });
});

describe("FAQPage schema", () => {
  it("覆盖全部 FAQ 条目", () => {
    const questions = faqPage.mainEntity as Node[];
    expect(questions).toHaveLength(FAQ_ITEMS.length);
    for (const question of questions) {
      expect(question["@type"]).toBe("Question");
      expect((question.acceptedAnswer as Node)["@type"]).toBe("Answer");
      expect(String((question.acceptedAnswer as Node).text).length).toBeGreaterThan(10);
    }
  });
});

describe("JSON-LD 整体", () => {
  it("可序列化为合法 JSON", () => {
    const json = JSON.stringify(routerJsonLd);
    expect(() => JSON.parse(json)).not.toThrow();
    expect(routerJsonLd["@context"]).toBe("https://schema.org");
  });

  it("不残留占位域名", () => {
    expect(JSON.stringify(routerJsonLd)).not.toContain("example");
  });
});
