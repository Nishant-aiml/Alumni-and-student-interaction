import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sizes = [16, 32, 48, 64, 128, 192, 256, 384, 512];
const inputSvg = path.join(__dirname, '../public/icon.svg');
const outputDir = path.join(__dirname, '../public');

async function generateIcons() {
  // Create output directory if it doesn't exist
  try {
    await fs.access(outputDir);
  } catch {
    await fs.mkdir(outputDir, { recursive: true });
  }

  // Generate PNG icons
  for (const size of sizes) {
    const outputFile = path.join(outputDir, `logo${size}.png`);
    await sharp(inputSvg)
      .resize(size, size)
      .png()
      .toFile(outputFile);
    console.log(`Generated ${outputFile}`);
  }

  // Generate favicon.ico (16x16, 32x32)
  const faviconSizes = [16, 32];
  const faviconBuffers = await Promise.all(
    faviconSizes.map(size =>
      sharp(inputSvg)
        .resize(size, size)
        .toFormat('png')
        .toBuffer()
    )
  );

  await sharp(faviconBuffers[0])
    .toFormat('ico')
    .toFile(path.join(outputDir, 'favicon.ico'));
  console.log('Generated favicon.ico');
}

generateIcons().catch(console.error);
