// optimize-logos.mjs
import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const img = (...p) => path.join(root, "public", "images", ...p);

const LOGO_HEIGHT = 160;   // ↑ higher than before for crisper rendering
const QUALITY = 85;       // webp quality

const LOGO_NAMES = [
  "bc", "bu", "upenn", "nyu", "harvard", "mit", "ucla", "imperial", "ucl", "lse",
];

const exists = async (p) => !!(await fs.access(p).then(() => true).catch(() => false));
const ensureDir = async (p) => fs.mkdir(path.dirname(p), { recursive: true });

(async () => {
  try {
    for (const name of LOGO_NAMES) {
      // Try common source extensions
      let src = null;
      for (const ext of [".png", ".jpg", ".jpeg", ".PNG", ".JPG", ".JPEG"]) {
        const candidate = img(name + ext);
        if (await exists(candidate)) { src = candidate; break; }
      }
      if (!src) { console.warn("⚠️  Logo not found:", name); continue; }

      const dst = img(name + ".webp");
      await ensureDir(dst);

      const input = sharp(src);
      const meta = await input.metadata();

      const resized = (meta.height && meta.height <= LOGO_HEIGHT)
        ? input // don’t upscale tiny inputs
        : input.resize({
            height: LOGO_HEIGHT,
            fit: "contain",
            withoutEnlargement: true,
            background: { r: 0, g: 0, b: 0, alpha: 0 },
          });

      await resized.webp({ quality: QUALITY }).toFile(dst);
      console.log("logo:", path.basename(src), "→", path.basename(dst), `(h=${LOGO_HEIGHT})`);
    }
    console.log("✅ Logo optimization complete.");
  } catch (e) {
    console.error("❌ Failed optimizing logos:", e);
    process.exit(1);
  }
})();
