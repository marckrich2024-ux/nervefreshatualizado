import sharp from 'sharp';
import { existsSync, mkdirSync, statSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Create output directory
const blogDir = join(__dirname, 'public', 'images', 'blog');
const publicDir = join(__dirname, 'public');

if (!existsSync(blogDir)) mkdirSync(blogDir, { recursive: true });

// ============ BLOG COVER IMAGES ============
const blogImages = [
  { src: 'ingredients_overview.png', dest: join(blogDir, 'ingredients-overview.webp'), label: 'ingredients-overview' },
  { src: 'scam_or_legit.png',        dest: join(blogDir, 'scam-or-legit.webp'),        label: 'scam-or-legit' },
  { src: 'side_effects.png',         dest: join(blogDir, 'side-effects.webp'),          label: 'side-effects' },
  { src: 'customer_reviews.png',     dest: join(blogDir, 'customer-reviews.webp'),      label: 'customer-reviews' },
  { src: 'support_supplements.png',  dest: join(blogDir, 'support-supplements.webp'),   label: 'support-supplements' },
  { src: 'vs_nerve_control.png',     dest: join(blogDir, 'vs-nerve-control.webp'),      label: 'vs-nerve-control' },
  { src: 'prickly_pear.png',         dest: join(blogDir, 'prickly-pear.webp'),          label: 'prickly-pear' },
  { src: 'natural_ways.png',         dest: join(blogDir, 'natural-ways.webp'),          label: 'natural-ways' },
];

console.log('=== Processing Blog Cover Images (16:9 → 1200x675 WebP) ===\n');

for (const img of blogImages) {
  const srcPath = join(__dirname, img.src);
  if (!existsSync(srcPath)) {
    console.warn(`  SKIP  ${img.src} — not found`);
    continue;
  }
  try {
    const meta = await sharp(srcPath).metadata();
    const srcW = meta.width;
    const srcH = meta.height;

    // Crop to 16:9 centered
    let cropW = srcW;
    let cropH = Math.round(srcW * 9 / 16);
    if (cropH > srcH) {
      cropH = srcH;
      cropW = Math.round(srcH * 16 / 9);
    }
    const left = Math.round((srcW - cropW) / 2);
    const top  = Math.round((srcH - cropH) / 2);

    await sharp(srcPath)
      .extract({ left, top, width: cropW, height: cropH })
      .resize(1200, 675, { fit: 'fill' })
      .webp({ quality: 82, effort: 6 })
      .toFile(img.dest);

    const kb = (statSync(img.dest).size / 1024).toFixed(1);
    console.log(`  OK    ${img.label}.webp — ${kb} KB`);
  } catch (err) {
    console.error(`  ERR   ${img.label}: ${err.message}`);
  }
}

// ============ FAVICON ASSETS ============
console.log('\n=== Processing Favicon Assets ===\n');

const faviconSrc = join(__dirname, 'favicon_concept.png');

if (!existsSync(faviconSrc)) {
  console.warn('  SKIP  favicon_concept.png not found');
} else {
  // apple-touch-icon.png (180x180)
  await sharp(faviconSrc).resize(180, 180, { fit: 'cover', position: 'centre' }).png({ quality: 92 })
    .toFile(join(publicDir, 'apple-touch-icon.png'));
  console.log('  OK    apple-touch-icon.png 180x180');

  // icon-192.png
  await sharp(faviconSrc).resize(192, 192, { fit: 'cover', position: 'centre' }).png({ quality: 92 })
    .toFile(join(publicDir, 'icon-192.png'));
  console.log('  OK    icon-192.png 192x192');

  // icon-512.png
  await sharp(faviconSrc).resize(512, 512, { fit: 'cover', position: 'centre' }).png({ quality: 90 })
    .toFile(join(publicDir, 'icon-512.png'));
  console.log('  OK    icon-512.png 512x512');

  // favicon.png 32x32
  await sharp(faviconSrc).resize(32, 32, { fit: 'cover', position: 'centre' }).png()
    .toFile(join(publicDir, 'favicon.png'));
  console.log('  OK    favicon.png 32x32');

  // favicon.ico (ICO container with embedded PNG)
  const png32 = await sharp(faviconSrc).resize(32, 32, { fit: 'cover', position: 'centre' }).png().toBuffer();
  const hdr = Buffer.alloc(6);
  hdr.writeUInt16LE(0, 0); hdr.writeUInt16LE(1, 2); hdr.writeUInt16LE(1, 4);
  const entry = Buffer.alloc(16);
  entry.writeUInt8(32,0); entry.writeUInt8(32,1); entry.writeUInt8(0,2); entry.writeUInt8(0,3);
  entry.writeUInt16LE(1,4); entry.writeUInt16LE(32,6);
  entry.writeUInt32LE(png32.length,8); entry.writeUInt32LE(22,12);
  writeFileSync(join(publicDir, 'favicon.ico'), Buffer.concat([hdr, entry, png32]));
  console.log(`  OK    favicon.ico (${((hdr.length+entry.length+png32.length)/1024).toFixed(1)} KB)`);

  // favicon.svg (inline PNG base64)
  const b64 = png32.toString('base64');
  writeFileSync(join(publicDir, 'favicon.svg'),
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><image href="data:image/png;base64,${b64}" width="32" height="32"/></svg>`,
    'utf8');
  console.log('  OK    favicon.svg');
}

console.log('\nAll assets done.');
