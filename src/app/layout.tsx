import type { Metadata } from "next";
import { Barlow_Condensed, IBM_Plex_Mono, Noto_Sans_SC } from "next/font/google";
import localFont from "next/font/local";
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
  title: "艾窝窝OPC社区 | 给每个AI的梦想一个窝",
  description:
    "孵化中外OPC（一人公司），以AI赋能企业服务生态，让超级个体从这里起飞。北京市OPC认证社区，16年企业服务沉淀，2000+服务企业。",
  icons: {
    icon: "/sites/router-com-92408672/root-8a5edab2/seo/aiwowo-icon.svg",
  },
  openGraph: {
    title: "艾窝窝OPC社区 | AI WOWO OPC Community",
    description:
      "孵化中外OPC（一人公司），以AI赋能企业服务生态，让超级个体从这里起飞。",
    siteName: "艾窝窝OPC社区",
    locale: "zh_CN",
    type: "website",
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
