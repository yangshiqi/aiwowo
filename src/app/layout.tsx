import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Ramp Router: The LLM Gateway That Cuts Inference Costs",
  description:
    "An LLM gateway that cuts inference costs by 40% on average. One endpoint for OpenAI, Anthropic, and open models – routed automatically. Free through 2026.",
  icons: {
    icon: "/sites/router-com-92408672/root-8a5edab2/seo/favicon.ico",
    apple: "/sites/router-com-92408672/root-8a5edab2/seo/apple-icon.png",
  },
  openGraph: {
    title: "Router by Ramp",
    description:
      "One endpoint, one bill, every model — cut your AI costs by 40% on average. The missing piece to maximize ROI.",
    siteName: "Ramp Router",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/sites/router-com-92408672/root-8a5edab2/seo/og-3.webp",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${lausanne.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-ink">
        {children}
      </body>
    </html>
  );
}
