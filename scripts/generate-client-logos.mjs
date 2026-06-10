import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, '../public/logos/clients');

const clients = [
  'aegis',
  'novabank',
  'helios',
  'verdant',
  'atria',
  'sterling',
  'northwind',
  'cyrus',
  'pinnacle',
  'polaris',
  'eversource',
  'meridian',
  'quantum',
  'harbor',
  'summit',
  'lumen'
];

function labelFromId(id) {
  return id
    .split(/(?=[A-Z])|[-_]/)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .replace(
      /^./,
      (c) => c.toUpperCase()
    )
    .replace(/Novabank/i, 'NovaBank')
    .replace(/Northwind/i, 'Northwind');
}

function displayName(id) {
  const map = {
    aegis: 'Aegis',
    novabank: 'NovaBank',
    helios: 'Helios',
    verdant: 'Verdant',
    atria: 'Atria',
    sterling: 'Sterling',
    northwind: 'Northwind',
    cyrus: 'Cyrus',
    pinnacle: 'Pinnacle',
    polaris: 'Polaris',
    eversource: 'Eversource',
    meridian: 'Meridian',
    quantum: 'Quantum',
    harbor: 'Harbor',
    summit: 'Summit',
    lumen: 'Lumen'
  };
  return map[id] || labelFromId(id);
}

function svgFor(name) {
  const mark = name.charAt(0);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="240" height="96" viewBox="0 0 240 96">
  <rect width="240" height="96" fill="#ffffff"/>
  <circle cx="36" cy="48" r="22" fill="#0955B4" opacity="0.12"/>
  <text x="36" y="54" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="20" font-weight="700" fill="#0955B4">${mark}</text>
  <text x="128" y="54" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="22" font-weight="600" fill="#011c27">${name}</text>
</svg>`;
}

async function main() {
  const sharp = (await import('sharp')).default;
  fs.mkdirSync(outDir, { recursive: true });

  for (const id of clients) {
    const name = displayName(id);
    const svg = svgFor(name);
    const outPath = path.join(outDir, `${id}.webp`);
    await sharp(Buffer.from(svg)).webp({ quality: 92 }).toFile(outPath);
    console.log('wrote', outPath);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
