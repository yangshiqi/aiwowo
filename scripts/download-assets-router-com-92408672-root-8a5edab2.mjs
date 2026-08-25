// Asset downloader for router.com clone (site router-com-92408672, page root-8a5edab2)
// Run: node scripts/download-assets-router-com-92408672-root-8a5edab2.mjs
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

const ROOT = "public/sites/router-com-92408672/root-8a5edab2";
const ORIGIN = "https://router.com";

// [remoteUrl, localRelPath]
const ASSETS = [
  // Fonts (TWK Lausanne, self-hosted by router.com)
  ["/_next/static/media/TWKLausanne_300-s.p.26okkyh4jopn7.woff2", "fonts/TWKLausanne-300.woff2"],
  ["/_next/static/media/TWKLausanne_300Italic-s.p.2_zpglb_5doqk.woff2", "fonts/TWKLausanne-300Italic.woff2"],
  ["/_next/static/media/TWKLausanne_350-s.p.07jgy4ljbbs1q.woff2", "fonts/TWKLausanne-350.woff2"],
  ["/_next/static/media/TWKLausanne_350Italic-s.p.1jfo6w0jtghhq.woff2", "fonts/TWKLausanne-350Italic.woff2"],
  ["/_next/static/media/TWKLausanne_400-s.p.0isvi2pcnytzo.woff2", "fonts/TWKLausanne-400.woff2"],
  ["/_next/static/media/TWKLausanne_400Italic-s.p.3stfvuuqo53ht.woff2", "fonts/TWKLausanne-400Italic.woff2"],
  ["/_next/static/media/TWKLausanne_700-s.p.03b70dzuw0cw3.woff2", "fonts/TWKLausanne-700.woff2"],
  ["/_next/static/media/TWKLausanne_700Italic-s.p.1m9hit8eawobu.woff2", "fonts/TWKLausanne-700Italic.woff2"],
  // Hero
  ["/landing/hero/vector-field.svg", "images/hero/vector-field.svg"],
  ["/_next/static/media/texture.0m1chutejo31e.webp", "images/hero/texture.webp"],
  ["/_next/static/media/texture-mobile.0prtio81rnlbb.webp", "images/hero/texture-mobile.webp"],
  // Integration / terminal section
  ["/_next/static/media/code-response.0r09ooqs1sh9u.webp", "images/integration/code-response.webp"],
  ["/landing/integration-video-still.webp", "images/integration/integration-video-still.webp"],
  // Providers marquee
  ["/landing/providers/anthropic.svg", "images/providers/anthropic.svg"],
  ["/landing/providers/openai.svg", "images/providers/openai.svg"],
  ["/landing/providers/grok.svg", "images/providers/grok.svg"],
  ["/landing/providers/fireworks.svg", "images/providers/fireworks.svg"],
  ["/landing/providers/aws.svg", "images/providers/aws.svg"],
  ["/landing/providers/google.svg", "images/providers/google.svg"],
  ["/landing/providers/together-ai.svg", "images/providers/together-ai.svg"],
  ["/landing/providers/baseten.svg", "images/providers/baseten.svg"],
  ["/landing/providers/exa.svg", "images/providers/exa.svg"],
  ["/landing/providers/crusoe.svg", "images/providers/crusoe.svg"],
  // Savings / chart section
  ["/landing/savings/stage-grain.webp", "images/savings/stage-grain.webp"],
  ["/landing/savings/stage-texture.webp", "images/savings/stage-texture.webp"],
  // Quotes
  ["/landing/quote/delphi.svg", "images/quote/delphi.svg"],
  ["/landing/quote/valentin-de-matos.png", "images/quote/valentin-de-matos.png"],
  ["/landing/quote/genius-ai.png", "images/quote/genius-ai.png"],
  ["/landing/quote/braden-allchin.png", "images/quote/braden-allchin.png"],
  ["/landing/quote/arcanist.webp", "images/quote/arcanist.webp"],
  ["/landing/quote/josiah-parappally.webp", "images/quote/josiah-parappally.webp"],
  // Benchmark logos
  ["/landing/benchmark/openai.svg", "images/benchmark/openai.svg"],
  ["/landing/benchmark/claude.svg", "images/benchmark/claude.svg"],
  ["/landing/benchmark/moonshot.svg", "images/benchmark/moonshot.svg"],
  ["/landing/benchmark/xai.svg", "images/benchmark/xai.svg"],
  ["/landing/benchmark/deepseek.svg", "images/benchmark/deepseek.svg"],
  ["/landing/benchmark/gemini.svg", "images/benchmark/gemini.svg"],
  ["/landing/benchmark/qwen.svg", "images/benchmark/qwen.svg"],
  ["/landing/benchmark/zai.png", "images/benchmark/zai.png"],
  // Proof (Put to work at Ramp)
  ["/landing/proof/flex-pricing-bg.webp", "images/proof/flex-pricing-bg.webp"],
  ["/landing/proof/switchyard-bg.webp", "images/proof/switchyard-bg.webp"],
  ["/landing/proof/switchyard-poster.webp", "images/proof/switchyard-poster.webp"],
  ["/landing/proof/rahul-headshot.png", "images/proof/rahul-headshot.png"],
  // Toast
  ["/landing/toast/gpt-sol-background.webp", "images/toast/gpt-sol-background.webp"],
  // Final CTA
  ["/_next/static/media/final-cta-mark.1ymgxn8pdecgk.webp", "images/final-cta-mark.webp"],
  // SEO
  ["/favicon.ico", "seo/favicon.ico"],
  ["/apple-icon.png", "seo/apple-icon.png"],
  // Videos (small one only; the 237MB how-it-works video stays on cdn.air.inc)
  ["https://cdn.air.inc/abdcb3e4-1e64-4703-9f84-01c95606790f", "videos/switchyard.mp4"],
];

async function download([url, rel]) {
  const full = url.startsWith("http") ? url : ORIGIN + url;
  const dest = join(ROOT, rel);
  try {
    const res = await fetch(full, { redirect: "follow" });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    await mkdir(dirname(dest), { recursive: true });
    await writeFile(dest, buf);
    console.log(`ok   ${rel} (${(buf.length / 1024).toFixed(1)}K)`);
    return { rel, ok: true };
  } catch (err) {
    console.error(`FAIL ${rel} <- ${full}: ${err.message}`);
    return { rel, ok: false };
  }
}

const results = [];
for (let i = 0; i < ASSETS.length; i += 4) {
  results.push(...(await Promise.all(ASSETS.slice(i, i + 4).map(download))));
}
const failed = results.filter((r) => !r.ok);
console.log(`\nDone: ${results.length - failed.length}/${results.length} ok`);
if (failed.length) {
  console.log("Failed:", failed.map((f) => f.rel).join(", "));
  process.exitCode = 1;
}
