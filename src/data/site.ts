import { DAYZ_OG } from './images'
import { PAGE_OG } from './og'

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
  'escape from tarkov hacks',
  'eft hacks',
  'tarkov aimbot',
  'tarkov esp',
  'tarkov wallhack',
  'tarkov radar hack',
  'battleye tarkov hacks',
  'tarkov cheat aimbot',
] as const

/** Offer price shown on product schema + purchase UI. */
export const PRODUCT_PRICE_USD = '35'

export const SEO_REGIONS = [
  { hreflang: 'en', label: 'English' },
  { hreflang: 'x-default', label: 'Default' },
] as const

export const OG_IMAGE = DAYZ_OG

export type PageSeo = {
  title: string
  description: string
  path: string
  ogType?: 'website' | 'article' | 'product'
  /** Prefer /og/*.jpg (1200x630) for Google SERP thumbnails */
  image?: string
  imageAlt?: string
  robots?: string
}

const INDEX_ROBOTS =
  'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'

export const SEO = {
  home: {
    title: 'Tarkov Hacks | EFT Aimbot, ESP & Cheats',
    description:
      'Buy Tarkov hacks for Escape from Tarkov — silent aim aimbot, player and loot ESP, wallhack and radar hack from $35. Check live BattlEye status, then checkout.',
    path: '/',
    ogType: 'website',
    image: PAGE_OG.home,
    imageAlt: 'Tarkov Hacks — EFT aimbot, ESP and radar hack for PC',
    robots: INDEX_ROBOTS,
  },
  forums: {
    title: 'Tarkov Hacks Guides | Aimbot, ESP, Radar & Status',
    description:
      'Tarkov hacks guides hub — silent aim, player and loot ESP, radar hack, antivirus exclusions, loader setup and BattlEye status articles before you buy.',
    path: '/forums',
    ogType: 'website',
    image: PAGE_OG.forums,
    imageAlt: 'Tarkov Hacks setup guides for aimbot, ESP and BattlEye',
    robots: INDEX_ROBOTS,
  },
  reviews: {
    title: 'Tarkov Hacks Reviews | Buyer Feedback on EFT',
    description:
      'Read Tarkov hacks reviews covering silent aim, player ESP, loot ESP and BattlEye rebuilds before you buy an Escape from Tarkov license for PC.',
    path: '/reviews',
    ogType: 'website',
    image: PAGE_OG.reviews,
    imageAlt: 'Tarkov Hacks buyer reviews for Escape from Tarkov',
    robots: INDEX_ROBOTS,
  },
  faq: {
    title: 'Tarkov Hacks FAQ | Price, BattlEye Status & Setup',
    description:
      'FAQ for buying Tarkov hacks on Windows PC — price, aimbot and ESP features, BattlEye status, loader setup and delivery.',
    path: '/faq',
    ogType: 'website',
    image: PAGE_OG.faq,
    imageAlt: 'Tarkov Hacks FAQ — price, BattlEye and setup',
    robots: INDEX_ROBOTS,
  },
  support: {
    title: 'Tarkov Hacks Support | Loader, Delivery & Setup Help',
    description:
      'Get help buying and loading Tarkov hacks — delivery email, Windows setup, antivirus exclusions, loader errors and BattlEye status updates.',
    path: '/support',
    ogType: 'website',
    image: PAGE_OG.support,
    imageAlt: 'Tarkov Hacks support for loader and delivery help',
    robots: INDEX_ROBOTS,
  },
  product: {
    title: 'Tarkov Hacks Price & Checkout | Aimbot, ESP, Radar',
    description:
      'Tarkov hacks price and checkout — silent aim aimbot, player ESP, loot ESP, wallhack, radar hack, spoofer and live BattlEye status from $35.',
    path: '/tarkov-hacks',
    ogType: 'product',
    image: PAGE_OG.product,
    imageAlt: 'Tarkov aimbot, ESP and radar hack product details',
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
