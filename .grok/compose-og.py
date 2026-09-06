#!/usr/bin/env python3
"""Compose Meridian 16:9 share-card art, then leave a 2x PNG for ffmpeg."""
from __future__ import annotations

import math
import random
from pathlib import Path

from PIL import Image, ImageDraw, ImageEnhance, ImageFilter, ImageFont

ROOT = Path("/workspace/.grok/brand-src")
OUT = Path("/workspace/.grok/card-raw.png")

W, H = 2400, 1260  # 2× 1200×630 (exactly 1200:630)
CHARCOAL = (20, 18, 16)
ALMOND = (170, 129, 85)
CREAM = (234, 220, 200)
STONE = (196, 180, 154)
JET = (93, 140, 162)


def load_font(path: Path, size: int, weight: int | None = None) -> ImageFont.FreeTypeFont:
    font = ImageFont.truetype(str(path), size)
    if weight is not None:
        font.set_variation_by_axes([weight])
    return font


def cover_resize(im: Image.Image, size: tuple[int, int]) -> Image.Image:
    tw, th = size
    sw, sh = im.size
    scale = max(tw / sw, th / sh)
    nw, nh = int(sw * scale + 0.5), int(sh * scale + 0.5)
    im = im.resize((nw, nh), Image.Resampling.LANCZOS)
    left = (nw - tw) // 2
    top = (nh - th) // 2
    return im.crop((left, top, left + tw, top + th))


def vignette(size: tuple[int, int], inner: float = 0.22, outer: float = 1.05) -> Image.Image:
    w, h = size
    cx, cy = (w - 1) / 2, (h - 1) / 2
    max_r = math.hypot(cx, cy)
    mask = Image.new("L", size, 0)
    px = mask.load()
    for y in range(h):
        for x in range(w):
            r = math.hypot(x - cx, y - cy) / max_r
            if r <= inner:
                a = 0
            elif r >= outer:
                a = 255
            else:
                t = (r - inner) / (outer - inner)
                a = int(255 * (t * t * (3 - 2 * t)))
            px[x, y] = a
    return mask


def tracked_width(font: ImageFont.FreeTypeFont, text: str, tracking: float) -> float:
    if not text:
        return 0.0
    return sum(font.getlength(ch) for ch in text) + tracking * (len(text) - 1)


def draw_tracked(
    draw: ImageDraw.ImageDraw,
    xy: tuple[float, float],
    text: str,
    font: ImageFont.FreeTypeFont,
    fill,
    tracking: float,
    anchor: str = "mm",
) -> None:
    total = tracked_width(font, text, tracking)
    x, y = xy
    if "m" in anchor[0]:
        x = x - total / 2
    elif "r" in anchor[0]:
        x = x - total
    # vertical: use a sample bbox so all glyphs share a baseline
    sample = "MERIDIAN" if any(c.isalpha() for c in text) else text
    bbox = font.getbbox(sample)
    glyph_h = bbox[3] - bbox[1]
    if anchor.endswith("m"):
        y = y - glyph_h / 2 - bbox[1]
    elif anchor.endswith("s"):
        y = y - bbox[3]
    for ch in text:
        draw.text((x, y), ch, font=font, fill=fill)
        x += font.getlength(ch) + tracking


def grain(size: tuple[int, int], amount: int = 14) -> Image.Image:
    rng = random.Random(7)
    w, h = size
    g = Image.new("L", size, 128)
    px = g.load()
    for y in range(h):
        for x in range(w):
            px[x, y] = 128 + rng.randint(-amount, amount)
    return g.convert("RGB")


def main() -> None:
    photo = Image.open(ROOT / "rack1.jpg").convert("RGB")
    base = cover_resize(photo, (W, H))

    # Grade toward charcoal / muted metal — keep rack structure, kill neon.
    base = ImageEnhance.Color(base).enhance(0.42)
    base = ImageEnhance.Contrast(base).enhance(1.18)
    base = ImageEnhance.Brightness(base).enhance(0.58)

    charcoal = Image.new("RGB", (W, H), CHARCOAL)
    base = Image.blend(base, charcoal, 0.30)

    # Warm almond wash, very quiet.
    warm = Image.new("RGB", (W, H), (42, 32, 24))
    base = Image.blend(base, warm, 0.12)

    # Center scrim so the lockup reads; racks remain at the edges.
    scrim = Image.new("L", (W, H), 0)
    draw_s = ImageDraw.Draw(scrim)
    draw_s.ellipse(
        (int(W * 0.12), int(H * 0.08), int(W * 0.88), int(H * 0.92)),
        fill=130,
    )
    scrim = scrim.filter(ImageFilter.GaussianBlur(radius=90))
    charcoal_center = Image.new("RGB", (W, H), CHARCOAL)
    base = Image.composite(charcoal_center, base, scrim)

    vig = vignette((W, H), inner=0.18, outer=0.98)
    base = Image.composite(charcoal, base, vig)

    # Fine grain for a photographic plate.
    g = grain((W, H), amount=10)
    base = Image.blend(base, g, 0.07)

    overlay = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)

    cx, cy = W / 2, H / 2 - 12

    # Geometric meridian mark — square frame, vertical line.
    mark = 44
    mark_top = cy - 210
    x0, y0 = cx - mark / 2, mark_top
    stroke = 3
    draw.rectangle([x0, y0, x0 + mark, y0 + mark], outline=(*ALMOND, 230), width=stroke)
    bar_w = 4
    draw.rectangle(
        [cx - bar_w / 2, y0 + 8, cx + bar_w / 2, y0 + mark - 8],
        fill=(*ALMOND, 240),
    )

    title_font = load_font(ROOT / "Playfair-600.ttf", 196)
    tag_font = load_font(ROOT / "Outfit-Regular.ttf", 28, weight=400)

    title = "MERIDIAN"
    title_tracking = 48  # ~0.24em at 196px
    tw = tracked_width(title_font, title, title_tracking)
    assert 0.48 * W <= tw <= 0.72 * W, f"title width {tw} out of band vs {W}"

    draw_tracked(draw, (cx, cy - 18), title, title_font, (*CREAM, 255), title_tracking)

    # Hairline rule.
    rule_w = 88
    rule_y = cy + 118
    draw.rectangle(
        [cx - rule_w / 2, rule_y, cx + rule_w / 2, rule_y + 2],
        fill=(*ALMOND, 210),
    )

    tag = "INTEGRATED TECHNOLOGY  &  INFRASTRUCTURE SOLUTIONS"
    tag_tracking = 7.5
    tag_w = tracked_width(tag_font, tag, tag_tracking)
    assert tag_w < 0.78 * W, f"tagline too wide: {tag_w}"
    draw_tracked(draw, (cx, rule_y + 48), tag, tag_font, (*STONE, 235), tag_tracking)

    composed = Image.alpha_composite(base.convert("RGBA"), overlay).convert("RGB")
    composed.save(OUT, "PNG")
    print(f"wrote {OUT} {composed.size}")
    print(f"title_width={tw:.0f} ({tw/W:.2%}) tag_width={tag_w:.0f} ({tag_w/W:.2%})")


if __name__ == "__main__":
    main()
