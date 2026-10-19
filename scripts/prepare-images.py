"""Prepare proportional web images without modifying supplied originals.

Run with Python + Pillow after adding an image record to src/data/image-manifest.json.
Checked-in variants let normal npm builds run without Python or Pillow.
"""
from pathlib import Path
import json
import shutil
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parent.parent
OUTPUT = ROOT / "public" / "images"
OUTPUT.mkdir(parents=True, exist_ok=True)
manifest = json.loads((ROOT / "src/data/image-manifest.json").read_text())

for asset in manifest:
    source = ROOT / "AssetsToUse" / asset["filename"]
    original_copy = OUTPUT / (asset["slug"] + asset["extension"])
    if not source.exists():
        source = original_copy
    if not source.exists():
        raise FileNotFoundError(f"Missing supplied image: {asset['filename']}")
    with Image.open(source) as original:
        image = ImageOps.exif_transpose(original)
        image = image.convert("RGBA" if "A" in image.getbands() else "RGB")
        for width in (480, 960, 1600):
            resized = image.copy()
            resized.thumbnail((width, 10000), Image.Resampling.LANCZOS)
            resized.save(
                OUTPUT / f"{asset['slug']}-{width}.webp",
                format="WEBP",
                lossless=asset["kind"] != "photo",
                quality=88,
                method=6,
            )
    if source.resolve() != original_copy.resolve():
        shutil.copyfile(source, original_copy)
    print(f"Prepared {asset['slug']} (full composition preserved)")
