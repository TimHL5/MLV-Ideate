// optimize-images.mjs
import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const img = (...p) => path.join(root, "public", "images", ...p);

// --- helpers --------------------------------------------------
const ensureDir = async (p) => fs.mkdir(path.dirname(p), { recursive: true });
const isImg = (f) => /\.(jpe?g|png)$/i.test(f);
const toWebp = (p, newExt = ".webp") => p.replace(/\.(jpe?g|png)$/i, newExt);

// --- 1) Speakers: 256×256 cover, q72 --------------------------
async function optimizeSpeakers() {
  const dir = img("speakers");
  const files = (await fs.readdir(dir)).filter(isImg);
  await Promise.all(
    files.map(async (file) => {
      const src = path.join(dir, file);
      const dst = toWebp(src);
      await ensureDir(dst);
      await sharp(src)
        .resize(256, 256, { fit: "cover", withoutEnlargement: true })
        .webp({ quality: 72 })
        .toFile(dst);
      console.log("speakers:", file, "→", path.basename(dst));
    })
  );
}

// --- 2) Logos: target height 48, contain, q80 -----------------
async function optimizeLogos() {
  const names = ["bc","bu","upenn","nyu","harvard","mit","ucla","ucl","imperial","lse"];
  await Promise.all(
    names.map(async (name) => {
      // try PNG then JPG/JPEG
      const candidates = [
        img(`${name}.png`),
        img(`${name}.jpg`),
        img(`${name}.jpeg`),
      ];
      const src = (await Promise.all(
        candidates.map(async (p) => (await fs.access(p).then(()=>p).catch(()=>null)))
      )).find(Boolean);
      if (!src) { console.warn("logo missing:", name); return; }

      const dst = toWebp(src);
      await ensureDir(dst);
      await sharp(src)
        .resize({ height: 48, fit: "contain", withoutEnlargement: true, background: { r:0,g:0,b:0,alpha:0 } })
        .webp({ quality: 80 })
        .toFile(dst);
      console.log("logo:", path.basename(src), "→", path.basename(dst));
    })
  );
}

// --- 3) MLV photos: keep high, max width 1600, q72 ------------
async function optimizeMlv() {
  const dir = img();
  const entries = await fs.readdir(dir);
  const files = entries.filter((f) => /^mlv-.*\.(jpe?g)$/i.test(f));
  await Promise.all(
    files.map(async (file) => {
      const src = path.join(dir, file);
      const dst = toWebp(src);
      await ensureDir(dst);
      await sharp(src)
        .resize({ width: 1600, withoutEnlargement: true })
        .webp({ quality: 72 })
        .toFile(dst);
      console.log("mlv:", file, "→", path.basename(dst));
    })
  );
}

(async () => {
  try {
    await optimizeSpeakers();
    await optimizeLogos();
    await optimizeMlv();
    console.log("\n✅ Image optimization complete.");
  } catch (e) {
    console.error("❌ Optimization failed:", e);
    process.exit(1);
  }
})();
