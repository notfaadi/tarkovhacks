import { DAYZ_HERO, DAYZ_SOLDIER, DAYZ_COVER, DAYZ_MENU, DAYZ_ESP } from './media'
import { DAYZ_OG, getOgImageForPath, PAGE_OG } from './og'

export { DAYZ_OG, getOgImageForPath, PAGE_OG }
export { forumOgImage } from './og'

export const DAYZ_PRODUCT_HERO = DAYZ_HERO
export const DAYZ_PRODUCT_COVER = DAYZ_COVER

export type ImageSeoFields = {
  alt: string
  title: string
  caption: string
}

export const IMAGE_SEO: Record<
  string,
  ImageSeoFields & {
    heroAlt: string
    heroTitle: string
    heroCaption: string
  }
> = {
  dayz: {
    alt: 'Tarkov hacks product artwork for Escape from Tarkov on PC',
    title: 'Tarkov Hacks Product Details',
    caption: 'Tarkov Aimbot, ESP, wallhack, loot ESP, radar hack and BattlEye compatibility',
    heroAlt: 'Tarkov hacks silent aim Aimbot and ESP features',
    heroTitle: 'Tarkov Hacks Features',
    heroCaption: 'Review Tarkov Aimbot, ESP, radar hack and current BattlEye status',
  },
}

type PageImage = ImageSeoFields & { src: string; og: string }

/** On-page media + dedicated OG JPEG for Google SERP thumbnails. */
export const PAGE_IMAGES: Record<
  'home' | 'forums' | 'reviews' | 'faq' | 'support' | 'product',
  PageImage
> = {
  home: {
    src: DAYZ_SOLDIER,
    og: PAGE_OG.home,
    alt: 'Tarkov hacks Aimbot and ESP artwork for Escape from Tarkov on PC',
    title: 'Tarkov Hacks',
    caption: 'Tarkov Aimbot, ESP, wallhack and radar hack overview.',
  },
  forums: {
    src: DAYZ_HERO,
    og: PAGE_OG.forums,
    alt: 'Tarkov hacks product artwork',
    title: 'Tarkov Hacks Guides',
    caption: 'Setup, Aimbot and ESP guides for Tarkov.',
  },
  reviews: {
    src: DAYZ_ESP,
    og: PAGE_OG.reviews,
    alt: 'Tarkov hacks review artwork',
    title: 'Tarkov Hacks Reviews',
    caption: 'Feature and compatibility feedback for Escape from Tarkov.',
  },
  faq: {
    src: DAYZ_MENU,
    og: PAGE_OG.faq,
    alt: 'Tarkov hacks FAQ artwork',
    title: 'Tarkov Hacks FAQ',
    caption: 'Compatibility, feature and setup answers for Tarkov.',
  },
  support: {
    src: DAYZ_HERO,
    og: PAGE_OG.support,
    alt: 'Tarkov hacks support artwork',
    title: 'Tarkov Hacks Support',
    caption: 'Delivery, loader and setup support for Tarkov hacks.',
  },
  product: {
    src: DAYZ_COVER,
    og: PAGE_OG.product,
    alt: 'Tarkov Aimbot ESP and radar hack product artwork',
    title: 'Tarkov Hacks Features',
    caption: 'Product details for Tarkov Aimbot and ESP.',
  },
}

export function getGameImage(_slug: string): string {
  return DAYZ_PRODUCT_COVER
}

export function getProductHeroImage(_slug: string): string {
  return DAYZ_PRODUCT_COVER
}

export function getOgImage(path?: string): string {
  return getOgImageForPath(path)
}

export function getPageImage(key: keyof typeof PAGE_IMAGES) {
  return PAGE_IMAGES[key]
}

export function getImageAlt(
  slug: string,
  name: string,
  variant: 'catalog' | 'product' = 'catalog',
): string {
  const seo = IMAGE_SEO[slug]
  if (seo) return variant === 'product' ? seo.heroAlt : seo.alt
  return variant === 'product' ? `${name} product details` : `${name} product artwork`
}

export function getImageTitle(
  slug: string,
  name: string,
  variant: 'catalog' | 'product' = 'catalog',
): string {
  const seo = IMAGE_SEO[slug]
  if (seo) return variant === 'product' ? seo.heroTitle : seo.title
  return `${name} product`
}
