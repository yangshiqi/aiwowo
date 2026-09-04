#!/usr/bin/env python3
"""生成 1200×630 的 Open Graph 分享图(OPC Warm Blueprint 风格)。

用法:python3 scripts/build-og-image.py
输出:public/sites/router-com-92408672/root-8a5edab2/seo/og-image.png

设计与站点一致:暖纸底 + 蓝图蓝线条 + 橙色仅用于强调节点;右侧放轴测办公插画。
"""
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parent.parent
ASSETS = ROOT / "public/sites/router-com-92408672/root-8a5edab2"
OUT = ASSETS / "seo/og-image.png"

W, H = 1200, 630
PAPER = (240, 232, 224)
INK = (40, 48, 56)
BLUE = (0, 64, 168)
ORANGE = (232, 88, 32)

CJK_FONT = "/System/Library/Fonts/Hiragino Sans GB.ttc"
MONO_FONT = "/System/Library/Fonts/Menlo.ttc"


def font(path: str, size: int, index: int = 0) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(path, size, index=index)


def main() -> None:
    canvas = Image.new("RGB", (W, H), PAPER)
    draw = ImageDraw.Draw(canvas)

    # 轴测办公插画:贴右边,再用暖纸底的横向渐变盖住左缘,消除拼接硬边
    hero_path = ASSETS / "images/hero/opc-hero-workspace.webp"
    if hero_path.exists():
        hero = Image.open(hero_path).convert("RGBA")
        target_h = int(H * 1.02)
        target_w = int(hero.width * target_h / hero.height)
        hero = hero.resize((target_w, target_h), Image.LANCZOS)
        canvas = canvas.convert("RGBA")
        canvas.alpha_composite(hero, (W - target_w + 90, int(H * 0.06)))

        fade_start, fade_end = 400, 900
        veil = Image.new("RGBA", (W, H), PAPER + (255,))
        alpha = Image.new("L", (W, H), 0)
        px = alpha.load()
        for x in range(W):
            if x <= fade_start:
                value = 255
            elif x >= fade_end:
                value = 0
            else:
                value = int(255 * (fade_end - x) / (fade_end - fade_start))
            for y in range(H):
                px[x, y] = value
        veil.putalpha(alpha)
        canvas.alpha_composite(veil)
        canvas = canvas.convert("RGB")
        draw = ImageDraw.Draw(canvas)

    # 蓝图细线框
    draw.rectangle([40, 40, W - 41, H - 41], outline=(0, 64, 168, 60), width=1)
    for x in (40, W - 41):
        for y in (40, H - 41):
            draw.line([(x - 12, y), (x + 12, y)], fill=BLUE, width=2)
            draw.line([(x, y - 12), (x, y + 12)], fill=BLUE, width=2)

    # Menlo 没有中文字形,所有含中文的行一律用 Hiragino,纯拉丁行才用等宽体
    eyebrow_cjk = font(CJK_FONT, 22)
    eyebrow_mono = font(MONO_FONT, 22)
    title = font(CJK_FONT, 82, index=1)
    lede = font(CJK_FONT, 30)
    meta = font(CJK_FONT, 22)

    label = "北京市OPC认证社区"
    draw.text((88, 118), label, font=eyebrow_cjk, fill=BLUE)
    label_w = draw.textlength(label, font=eyebrow_cjk)
    draw.text((88 + label_w + 10, 118), "· CERTIFIED OPC COMMUNITY", font=eyebrow_mono, fill=BLUE)

    draw.text((88, 178), "给每个AI的梦想", font=title, fill=INK)
    draw.text((88, 286), "一个窝", font=title, fill=INK)
    # 橙色下划线强调“窝”(与站点 hero 一致)
    draw.rectangle([88 + 82 * 2 + 6, 286 + 92, 88 + 82 * 3, 286 + 100], fill=ORANGE)

    draw.text((88, 418), "孵化中外OPC（一人公司），以AI赋能企业服务生态。", font=lede, fill=INK)

    draw.text((88, 496), "2000+ 服务企业   20000㎡ 运营面积   16年 企业服务沉淀", font=meta, fill=(90, 96, 104))
    draw.text((88, 534), "艾窝窝 AI WOWO", font=meta, fill=BLUE)

    OUT.parent.mkdir(parents=True, exist_ok=True)
    # 画面是有限色的线稿+平涂,量化到 256 色可把体积减半而肉眼无差
    canvas.quantize(colors=256, method=Image.MEDIANCUT, dither=Image.FLOYDSTEINBERG).save(
        OUT, "PNG", optimize=True
    )
    print(f"wrote {OUT} ({OUT.stat().st_size / 1024:.1f} KB, {W}x{H})")


if __name__ == "__main__":
    main()
