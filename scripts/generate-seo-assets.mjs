/**
 * Auto-generate 1200x630 JPEG Open Graph images for every indexed URL.
 * Google SERP / social crawlers fetch these for right-side thumbnails.
 * Never overwrites battlelog-sourced /media assets.
 */
import { access, mkdir, readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const root = join(fileURLToPath(new URL('.', import.meta.url)), '..')
const ogDir = join(root, 'public', 'og')
const mediaDir = join(root, 'public', 'media')
const blogsPath = join(root, 'src', 'data', 'blogs.ts')

await mkdir(ogDir, { recursive: true })
await mkdir(mediaDir, { recursive: true })

function escapeXml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
}

async function exists(path) {
  try {
    await access(path)
    return true
  } catch {
    return false
  }
}

/** Frame from /videos/tarkov-hero.mp4 — matches live homepage wallpaper (no DayZ box art). */
const heroOg = join(mediaDir, 'tarkov-hero-og.jpg')

const heroVideo = join(root, 'public', 'videos', 'tarkov-hero.mp4')
for (const path of [heroOg, heroVideo]) {
  if (!(await exists(path))) {
    throw new Error(`Missing Tarkov hero asset: ${path}`)
  }
}
function overlaySvg(width, height, eyebrow, title, subtitle) {
  const titleSize = Math.min(54, Math.round(width * 0.042))
  const lines = String(title).match(/.{1,28}(\s|$)/g)?.map((s) => s.trim()).filter(Boolean) || [
    title,
  ]
  const titleLines = lines.slice(0, 2)
  return Buffer.from(`
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="shade" x1="0" y1="0" x2="1" y2="1">
          <stop stop-color="#08060f" stop-opacity="0.55"/>
          <stop offset="0.45" stop-color="#08060f" stop-opacity="0.72"/>
          <stop offset="1" stop-color="#14081f" stop-opacity="0.88"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#shade)"/>
      <text x="64" y="210" fill="#c084fc" font-size="22" font-family="Arial, sans-serif" font-weight="700" letter-spacing="4">${escapeXml(eyebrow)}</text>
      ${titleLines
        .map(
          (line, i) =>
            `<text x="64" y="${290 + i * 64}" fill="#ffffff" font-size="${titleSize}" font-family="Arial, sans-serif" font-weight="700">${escapeXml(line)}</text>`,
        )
        .join('\n')}
      <text x="64" y="480" fill="#c9bdd2" font-size="26" font-family="Arial, sans-serif">${escapeXml(subtitle)}</text>
      <text x="64" y="560" fill="#9299a3" font-size="20" font-family="Arial, sans-serif">hacksfortarkov.org</text>
    </svg>
  `)
}

/** Plain 1200x630 crop — matches live hero wallpaper (Discord / social previews). */
async function writeShareHeroJpeg(outPath, sourcePath) {
  await sharp(sourcePath)
    .resize(1200, 630, { fit: 'cover', position: 'centre' })
    .jpeg({ quality: 92, chromaSubsampling: '4:4:4', mozjpeg: true })
    .toFile(outPath)
}

async function writeOgJpeg(outPath, sourcePath, eyebrow, title, subtitle) {
  const base = sharp(sourcePath).resize(1200, 630, { fit: 'cover', position: 'centre' })
  const overlay = sharp(overlaySvg(1200, 630, eyebrow, title, subtitle))
  await sharp({
    create: { width: 1200, height: 630, channels: 3, background: '#08060f' },
  })
    .composite([
      { input: await base.toBuffer(), top: 0, left: 0 },
      { input: await overlay.png().toBuffer(), top: 0, left: 0 },
    ])
    .jpeg({ quality: 90, chromaSubsampling: '4:4:4', mozjpeg: true })
    .toFile(outPath)
}

function loadForumSlugs(src) {
  return [...src.matchAll(/slug:\s*['"]([^'"]+)['"]/g)].map((m) => m[1])
}

function loadForumMeta(src) {
  const pattern =
    /slug:\s*['"]([^'"]+)['"],[\s\S]*?metaTitle:\s*['"]([^'"]+)['"],[\s\S]*?metaDescription:\s*['"]([^'"]+)['"]/g
  return [...src.matchAll(pattern)].map((m) => ({
    slug: m[1],
    title: m[2],
    description: m[3],
  }))
}

const staticOg = [
  {
    file: 'home.jpg',
    source: heroOg,
    eyebrow: 'TARKOV HACKS',
    title: 'Tarkov Aimbot, ESP & Radar Hack',
    subtitle: 'Tarkov hacks from $35 · live BattlEye status',
  },
  {
    file: 'tarkov-hacks.jpg',
    source: heroOg,
    eyebrow: 'TARKOV HACKS',
    title: 'Tarkov Hacks — Aimbot, ESP & Radar',
    subtitle: 'Features, BattlEye status and price',
  },
  {
    file: 'forums.jpg',
    source: heroOg,
    eyebrow: 'GUIDES',
    title: 'Tarkov Hacks Setup Forums',
    subtitle: 'Aimbot, ESP, loader and BattlEye guides',
  },
  {
    file: 'reviews.jpg',
    source: heroOg,
    eyebrow: 'REVIEWS',
    title: 'Tarkov Hacks Buyer Reviews',
    subtitle: 'Real Tarkov Aimbot and ESP feedback',
  },
  {
    file: 'faq.jpg',
    source: heroOg,
    eyebrow: 'FAQ',
    title: 'Tarkov Hacks FAQ',
    subtitle: 'Price, BattlEye status and setup answers',
  },
  {
    file: 'support.jpg',
    source: heroOg,
    eyebrow: 'SUPPORT',
    title: 'Tarkov Hacks Support',
    subtitle: 'Loader, delivery and Windows help',
  },
  {
    file: 'privacy.jpg',
    source: heroOg,
    eyebrow: 'POLICY',
    title: 'Privacy Policy',
    subtitle: 'How hacksfortarkov.org handles order data',
  },
  {
    file: 'terms.jpg',
    source: heroOg,
    eyebrow: 'POLICY',
    title: 'Terms of Use',
    subtitle: 'License rules for Tarkov Hacks',
  },
  {
    file: 'refunds.jpg',
    source: heroOg,
    eyebrow: 'POLICY',
    title: 'Refund Policy',
    subtitle: 'Digital license refund rules',
  },
]

const created = []

const shareHeroOut = join(ogDir, 'share-hero.jpg')
await writeShareHeroJpeg(shareHeroOut, heroOg)
created.push('share-hero.jpg')

for (const item of staticOg) {
  const out = join(ogDir, item.file)
  await writeOgJpeg(out, item.source, item.eyebrow, item.title, item.subtitle)
  created.push(item.file)
}

const blogsSrc = await readFile(blogsPath, 'utf8')
const forums = loadForumMeta(blogsSrc)
if (!forums.length) {
  // Fallback if regex misses — at least create from slugs
  for (const slug of loadForumSlugs(blogsSrc)) {
    forums.push({
      slug,
      title: `Tarkov Hacks ${slug}`,
      description: 'Tarkov hacks guide on hacksfortarkov.org',
    })
  }
}

for (const forum of forums) {
  const file = `forums-${forum.slug}.jpg`
  const out = join(ogDir, file)
  await writeOgJpeg(
    out,
    heroOg,
    'TARKOV GUIDE',
    forum.title.replace(/\s*\|\s*.*$/, '').slice(0, 48),
    'Tarkov hacks · hacksfortarkov.org',
  )
  created.push(file)
}

console.log(`SEO OG images ready (${created.length}): ${created.slice(0, 8).join(', ')}…`)
