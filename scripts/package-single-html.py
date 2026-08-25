#!/usr/bin/env python3
"""Package the AI WOWO page as a single self-contained HTML file.

Reads the browser-captured DOM (all lazy scenes mounted), inlines the built CSS
chunks, converts local assets and Latin fonts to data URIs, drops the Next.js
runtime, and appends a small vanilla-JS layer that re-implements the page's
interactions. Outputs:
  - aiwowo-preview.html            (full standalone document)
  - <scratch>/aiwowo-artifact.html (body-only variant for Artifact publishing)
"""
import base64
import mimetypes
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SCRATCH = Path(sys.argv[1]) if len(sys.argv) > 1 else ROOT
DOM_FILE = SCRATCH / "page-dom.html"

MIME = {
    ".webp": "image/webp", ".svg": "image/svg+xml", ".png": "image/png",
    ".ico": "image/x-icon", ".woff2": "font/woff2", ".jpg": "image/jpeg",
}


def data_uri(path: Path) -> str:
    mime = MIME.get(path.suffix.lower()) or mimetypes.guess_type(str(path))[0] or "application/octet-stream"
    return f"data:{mime};base64,{base64.b64encode(path.read_bytes()).decode()}"


def local_path(url: str) -> Path | None:
    url = url.split("?")[0]
    if url.startswith("/_next/"):
        return ROOT / ".next" / url[len("/_next/"):]
    if "media/" in url and not url.startswith("/sites"):
        # relative refs inside CSS chunks (../media/x.woff2, media/x.woff2)
        return ROOT / ".next/static/media" / url.split("media/")[-1]
    if url.startswith("/"):
        return ROOT / "public" / url.lstrip("/")
    return None


html = DOM_FILE.read_text()

# 1) Drop PerfOptimizer's paused inline styles so animations run in the export.
html = re.sub(r"animation-play-state:\s*paused;?", "", html)

# 2) Collect and inline CSS chunks (in document order).
css_hrefs = re.findall(r'<link[^>]+href="(/_next/static/chunks/[^"]+\.css)"[^>]*>', html)
seen, css_parts = set(), []
for href in css_hrefs:
    if href in seen:
        continue
    seen.add(href)
    css_parts.append(local_path(href).read_text())
css = "\n".join(css_parts)

# 3) @font-face handling: drop Noto subsets (huge), inline Lausanne + Plex.
def font_face_filter(match: re.Match) -> str:
    block = match.group(0)
    fam = re.search(r"font-family:\s*['\"]?([^;'\"]+)", block)
    family = fam.group(1) if fam else ""
    if "Noto" in family:
        return ""
    def url_repl(u: re.Match) -> str:
        p = local_path(u.group(1))
        if p and p.exists():
            return f"url({data_uri(p)})"
        return u.group(0)
    return re.sub(r"url\(['\"]?([^)'\"]+?\.woff2)[^)'\"]*['\"]?\)", url_repl, block)

css = re.sub(r"@font-face\s*\{[^}]*\}", font_face_filter, css)

# 4) Inline remaining CSS url() references (e.g. the stage-grain tile).
def css_url_repl(u: re.Match) -> str:
    p = local_path(u.group(1))
    if p and p.exists():
        return f"url({data_uri(p)})"
    return u.group(0)

css = re.sub(r"url\(['\"]?(/(?:sites|_next)/[^)'\"]+)['\"]?\)", css_url_repl, css)

# 5) CJK: point the noto var at the webfont (Google Fonts link below) + system stacks.
css += (
    '\n:root{--font-noto-sc:"Noto Sans SC","PingFang SC","Hiragino Sans GB",'
    '"Microsoft YaHei",sans-serif}\nhtml{scroll-behavior:smooth}\n'
)

# 6) Inline asset references in the HTML (src / poster / favicon href).
def attr_repl(m: re.Match) -> str:
    p = local_path(m.group(2))
    if p and p.exists():
        return f'{m.group(1)}="{data_uri(p)}"'
    return m.group(0)

html = re.sub(r'(src|poster|href)="(/sites/[^"]+)"', attr_repl, html)

# 7) Strip the Next.js runtime + stylesheet/preload links; keep JSON-LD.
html = re.sub(r'<script[^>]*src="/_next/[^"]*"[^>]*>\s*</script>', "", html)
html = re.sub(r"<script(?![^>]*application/ld\+json)[^>]*>(?:(?!</script>).)*</script>", "", html, flags=re.S)
html = re.sub(r'<link[^>]+(?:rel="stylesheet"|rel="preload"|rel="expect"|as="script"|as="font")[^>]*>', "", html)

GOOGLE_FONTS = (
    '<link rel="preconnect" href="https://fonts.googleapis.com">'
    '<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;500;700&display=swap" rel="stylesheet">'
)

runtime_js = (ROOT / "scripts" / "package-runtime.js").read_text()
SCRIPT = f"<script>\n{runtime_js}\n</script>"
STYLE = f"<style>\n{css}\n</style>"

full = html.replace("</head>", f"{GOOGLE_FONTS}{STYLE}</head>", 1)
full = full.replace("</body>", f"{SCRIPT}</body>", 1)
(ROOT / "aiwowo-preview.html").write_text(full)

# 8) Artifact body-only variant.
body = re.search(r"<body[^>]*>(.*)</body>", full, re.S).group(1)
icon = data_uri(ROOT / "public/sites/router-com-92408672/root-8a5edab2/seo/aiwowo-icon.svg")
artifact = (
    "<title>艾窝窝OPC社区</title>\n"
    + GOOGLE_FONTS
    + STYLE
    + f'\n<div class="min-h-full flex flex-col bg-white text-ink">{body}</div>\n'
    + SCRIPT
)
(SCRATCH / "aiwowo-artifact.html").write_text(artifact)

print(f"standalone: {ROOT / 'aiwowo-preview.html'} ({len(full)/1e6:.2f} MB)")
print(f"artifact:   {SCRATCH / 'aiwowo-artifact.html'} ({len(artifact)/1e6:.2f} MB)")
print("icon bytes:", len(icon))
