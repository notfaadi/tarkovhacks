import { PAGE_OG, OG_SHARE } from './og'

export const SITE_URL = 'https://hacksfortarkov.org'
export const SITE_NAME = 'Tarkov Hacks'
export const SITE_HOST = 'hacksfortarkov.org'

/**
 * Sole purpose — used in schema + about copy.
 * Single-product site: Escape from Tarkov hacks for PC (worldwide).
 * Canonical host is apex https://hacksfortarkov.org (www 301s to apex in the Worker).
 */
export const SITE_PURPOSE =
  'Buy Tarkov hacks for Escape from Tarkov on Windows PC — silent-aim aimbot, player and loot ESP, wallhack, radar hack and live BattlEye status with instant digital delivery.'

export const SITE_ABOUT = [
  'tarkov hacks',
  'tarkov hack',
  'tarkov cheats',
  'tarkov cheat',
  'escape from tarkov hacks',
  'escape from tarkov cheats',
  'eft hacks',
  'eft cheats',
  'tarkov aimbot',
  'silent aim',
  'tarkov esp',
  'player esp',
  'loot esp',
  'tarkov wallhack',
  'tarkov radar hack',
  'radar hack',
  'battleye tarkov hacks',
  'battleye status',
  'tarkov cheat aimbot',
  'tarkov spoofer',
  'undetected tarkov hacks',
  'hacks for tarkov',
  'hacksfortarkov.org',
] as const

/** Comma-separated list for `<meta name="keywords">` on every page. */
export const SEO_KEYWORDS_META = SITE_ABOUT.join(', ')

/** Offer price shown on product schema + purchase UI. */
export const PRODUCT_PRICE_USD = '35'

export const SEO_REGIONS = [
  { hreflang: 'en', label: 'English' },
  { hreflang: 'x-default', label: 'Default' },
] as const

export const OG_IMAGE = OG_SHARE

export type PageSeo = {
  title: string
  description: string
  path: string
  ogType?: 'website' | 'article' | 'product'
  /** Override default SITE_ABOUT keyword meta when needed */
  keywords?: string
  /** Prefer /og/*.jpg (1200x630) for Google SERP thumbnails */
  image?: string
  imageAlt?: string
  robots?: string
}

const INDEX_ROBOTS =
  'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'

export const SEO = {
  home: {
    title: 'Tarkov Hacks | EFT Cheats, Aimbot, ESP, Wallhack & Radar Hack',
    description:
      'Tarkov hacks and Escape from Tarkov cheats on hacksfortarkov.org — silent aim aimbot, player ESP, loot ESP, wallhack, radar hack, spoofer and live BattlEye status from $35 for Windows PC.',
    path: '/',
    ogType: 'website',
    image: PAGE_OG.home,
    imageAlt:
      'Tarkov Hacks — EFT cheats, aimbot, ESP, wallhack, loot ESP and radar hack for PC',
    robots: INDEX_ROBOTS,
  },
  forums: {
    title: 'Tarkov Hacks Guides | EFT Aimbot, ESP, Wallhack & BattlEye',
    description:
      'Tarkov hack guides — setup for aimbot, silent aim, player ESP, loot ESP, wallhack, radar hack, spoofer, antivirus exclusions, loader help and BattlEye status before you buy EFT cheats on hacksfortarkov.org.',
    path: '/forums',
    ogType: 'website',
    image: PAGE_OG.forums,
    imageAlt: 'Tarkov Hacks setup guides for aimbot, ESP, wallhack and BattlEye',
    robots: INDEX_ROBOTS,
  },
  reviews: {
    title: 'Tarkov Hacks Reviews | EFT Cheat, Aimbot & ESP Feedback',
    description:
      'Tarkov hacks reviews for Escape from Tarkov cheats — silent aim aimbot, player ESP, loot ESP, wallhack, radar hack and honest BattlEye rebuild notes from buyers on hacksfortarkov.org.',
    path: '/reviews',
    ogType: 'website',
    image: PAGE_OG.reviews,
    imageAlt: 'Tarkov Hacks buyer reviews for EFT aimbot, ESP and wallhack',
    robots: INDEX_ROBOTS,
  },
  faq: {
    title: 'Tarkov Hacks FAQ | EFT Cheats Price, BattlEye & Setup',
    description:
      'FAQ for Tarkov hacks and EFT cheats — price from $35, aimbot, silent aim, player ESP, loot ESP, wallhack, radar hack, spoofer, BattlEye clear-to-load status, loader setup and delivery on Windows PC.',
    path: '/faq',
    ogType: 'website',
    image: PAGE_OG.faq,
    imageAlt: 'Tarkov Hacks FAQ — EFT cheats price, BattlEye status and setup',
    robots: INDEX_ROBOTS,
  },
  support: {
    title: 'Tarkov Hacks Support | EFT Loader, Delivery & ESP Help',
    description:
      'Support for Tarkov hacks and Escape from Tarkov cheats — delivery email, Windows loader setup, antivirus exclusions, aimbot and ESP menu help, inject errors and BattlEye status on hacksfortarkov.org.',
    path: '/support',
    ogType: 'website',
    image: PAGE_OG.support,
    imageAlt: 'Tarkov Hacks support for loader, aimbot, ESP and delivery help',
    robots: INDEX_ROBOTS,
  },
  product: {
    title: 'Tarkov Hacks Checkout | EFT Aimbot, ESP, Wallhack & Radar',
    description:
      'Buy Tarkov hacks — Escape from Tarkov cheats with silent aim aimbot, player ESP, loot ESP, wallhack, radar hack, spoofer and live BattlEye status. Checkout EFT hacks from $35 on hacksfortarkov.org.',
    path: '/tarkov-hacks',
    ogType: 'product',
    image: PAGE_OG.product,
    imageAlt: 'Tarkov hacks product — EFT aimbot, ESP, wallhack and radar hack checkout',
    robots: INDEX_ROBOTS,
  },
} as const satisfies Record<string, PageSeo>

export const HOME_HEADINGS = {
  h1: 'Tarkov Hacks — EFT Aimbot, ESP & Cheats',
  h2Features: 'Tarkov aimbot, ESP, loot ESP & radar hack',
  h2Featured: 'Tarkov ESP and silent aim aimbot',
  h2About: 'Clear BattlEye status before you buy Tarkov hacks',
  h2Access: 'Buy Tarkov Hacks',
  h2Faq: 'Tarkov Hacks FAQ',
} as const

export function absoluteUrl(path: string) {
  if (!path || path === '/') return `${SITE_URL}/`
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}
