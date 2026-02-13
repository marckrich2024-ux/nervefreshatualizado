import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const publicDir = './public';
const filesToOptimize = [
    { src: 'imagem-sessão-hero - Editado.jpg', dest: 'hero-optimized.webp', width: 1200, quality: 80 },
    { src: 'product.jpg', dest: 'product.webp', width: 800, quality: 85 },
    { src: 'methodology-steps.png', dest: 'methodology-steps.webp', width: 1000, quality: 80 },
    // Ingredients
    { src: 'ingredients/prickly-pear.png', dest: 'ingredients/prickly-pear.webp', width: 120, quality: 90 },
    { src: 'ingredients/passionflower.png', dest: 'ingredients/passionflower.webp', width: 120, quality: 90 },
    { src: 'ingredients/marshmallow-root.png', dest: 'ingredients/marshmallow-root.webp', width: 120, quality: 90 },
    { src: 'ingredients/corydalis.png', dest: 'ingredients/corydalis.webp', width: 120, quality: 90 },
    { src: 'ingredients/california-poppy.png', dest: 'ingredients/california-poppy.webp', width: 120, quality: 90 },
];

async function optimize() {
    console.log('Starting image optimization...');

    for (const file of filesToOptimize) {
        const inputPath = path.join(publicDir, file.src);
        const outputPath = path.join(publicDir, file.dest);

        if (fs.existsSync(inputPath)) {
            try {
                // Ensure directory exists for nested files
                const dir = path.dirname(outputPath);
                if (!fs.existsSync(dir)) {
                    fs.mkdirSync(dir, { recursive: true });
                }

                await sharp(inputPath)
                    .resize({ width: file.width, withoutEnlargement: true })
                    .webp({ quality: file.quality })
                    .toFile(outputPath);

                console.log(`✅ Optimized: ${file.src} -> ${file.dest}`);
            } catch (err) {
                console.error(`❌ Error optimizing ${file.src}:`, err);
            }
        } else {
            console.warn(`⚠️ Warning: Source file not found: ${file.src}`);
        }
    }
    console.log('Optimization complete.');
}

optimize();
