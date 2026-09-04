import type { Metadata } from "next";
import { Barlow_Condensed, IBM_Plex_Mono, Noto_Sans_SC } from "next/font/google";
import localFont from "next/font/local";
import {
  AGENT_RESOURCES,
  ASSET_BASE,
  CONTACT,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_NAME_EN,
  SITE_TAGLINE,
  SITE_URL,
} from "@/lib/site";
import "./globals.css";

const lausanne = localFont({
  src: [
    {
      path: "../../public/sites/router-com-92408672/root-8a5edab2/fonts/TWKLausanne-300.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/sites/router-com-92408672/root-8a5edab2/fonts/TWKLausanne-300Italic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/sites/router-com-92408672/root-8a5edab2/fonts/TWKLausanne-350.woff2",
      weight: "350",
      style: "normal",
    },
    {
      path: "../../public/sites/router-com-92408672/root-8a5edab2/fonts/TWKLausanne-350Italic.woff2",
      weight: "350",
      style: "italic",
    },
    {
      path: "../../public/sites/router-com-92408672/root-8a5edab2/fonts/TWKLausanne-400.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/sites/router-com-92408672/root-8a5edab2/fonts/TWKLausanne-400Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/sites/router-com-92408672/root-8a5edab2/fonts/TWKLausanne-700.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/sites/router-com-92408672/root-8a5edab2/fonts/TWKLausanne-700Italic.woff2",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-lausanne",
  fallback: ["Arial", "sans-serif"],
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
});

// CJK companion: Lausanne has no Chinese glyphs, so Chinese text falls through
// to Noto Sans SC (weights chosen to pair with Lausanne 300/350/400/700).
const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-noto-sc",
});

// Display face for the Warm Blueprint system: Latin headlines & numerals.
// CJK glyphs fall through to Noto Sans SC 700 automatically.
const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-barlow",
});

export const metadata: Metadata = {
  // metadataBase 让下面的相对路径解析成绝对 URL(canonical、og:image 都需要绝对地址)
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | ${SITE_TAGLINE}`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "艾窝窝",
    "AI WOWO",
    "OPC",
    "一人公司",
    "北京市OPC认证社区",
    "OPC政策补贴",
    "蹲窝儿",
    "企业AI培训",
    "孵化器",
    "朝阳区",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: CONTACT.legalEntity,
  alternates: {
    canonical: "/",
    types: {
      "text/markdown": "/index.md",
      "text/plain": AGENT_RESOURCES.llms,
    },
  },
  icons: {
    icon: `${ASSET_BASE}/seo/aiwowo-icon.svg`,
    apple: `${ASSET_BASE}/seo/apple-icon.png`,
  },
  openGraph: {
    title: `${SITE_NAME} | ${SITE_NAME_EN}`,
    description: "孵化中外OPC（一人公司），以AI赋能企业服务生态，让超级个体从这里起飞。",
    siteName: SITE_NAME,
    url: "/",
    locale: "zh_CN",
    type: "website",
    images: [
      {
        url: AGENT_RESOURCES.ogImage,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME}：${SITE_TAGLINE}`,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | ${SITE_NAME_EN}`,
    description: "孵化中外OPC（一人公司），以AI赋能企业服务生态。",
    images: [AGENT_RESOURCES.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${lausanne.variable} ${plexMono.variable} ${notoSansSC.variable} ${barlow.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-ink">
        {children}
      </body>
    </html>
  );
}
