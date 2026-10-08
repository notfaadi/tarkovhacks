export type SeoMediaItem = {
  image: string
  video?: string
  alt: string
  title: string
  caption: string
  videoTitle?: string
  videoDescription?: string
}

/** Full-bleed homepage hero loop (Escape from Tarkov live wallpaper). */
export const TARKOV_HERO_VIDEO = '/videos/tarkov-hero.mp4'

/** Still frame from hero video — product art, posters, schema. */
export const TARKOV_HERO_STILL = '/media/tarkov-hero-og.jpg'

/** Self-hosted feature preview (same EFT hero loop as homepage). */
export const TARKOV_HOME_VIDEO = {
  src: TARKOV_HERO_VIDEO,
  poster: TARKOV_HERO_STILL,
  title: 'Tarkov Hacks Aimbot and ESP preview',
  caption: 'Preview of Tarkov Aimbot, ESP menu, loot highlighting and radar hack features on PC.',
} as const

/** @deprecated Use TARKOV_* — kept so older imports do not break. */
export const DAYZ_HERO = TARKOV_HERO_STILL
export const DAYZ_SOLDIER = TARKOV_HERO_STILL
export const DAYZ_COVER = TARKOV_HERO_STILL
export const DAYZ_BOX = TARKOV_HERO_STILL
export const DAYZ_ESP = TARKOV_HERO_STILL
export const DAYZ_MENU = TARKOV_HERO_STILL
export const DAYZ_GAMEPLAY = TARKOV_HERO_STILL
export const DAYZ_HOME_ART = TARKOV_HERO_STILL
export const DAYZ_CONTROL = TARKOV_HERO_STILL
export const DAYZ_TACTICAL = TARKOV_HERO_STILL
export const DAYZ_VIDEO_THUMB = TARKOV_HERO_STILL
export const DAYZ_HOME_VIDEO = TARKOV_HOME_VIDEO

export const PAGE_MEDIA = {
  home: {
    image: TARKOV_HERO_STILL,
    alt: 'Tarkov hacks Aimbot and ESP product artwork for Escape from Tarkov on PC',
    title: 'Tarkov Hacks for Escape from Tarkov',
    caption: 'Feature overview for Tarkov Aimbot, ESP, wallhack, loot ESP and radar hack.',
  },
  product: {
    image: TARKOV_HERO_STILL,
    video: TARKOV_HOME_VIDEO.src,
    alt: 'Tarkov ESP, silent aim Aimbot and loot highlight feature artwork',
    title: 'Tarkov Aimbot, ESP and Radar Hack Features',
    caption: 'Product overview for Escape from Tarkov on Windows PC.',
    videoTitle: TARKOV_HOME_VIDEO.title,
    videoDescription: TARKOV_HOME_VIDEO.caption,
  },
  forums: {
    image: TARKOV_HERO_STILL,
    alt: 'Tarkov hacks product artwork',
    title: 'Tarkov Hacks Guides',
    caption: 'Reference for setup, Aimbot, ESP, loot and BattlEye status articles.',
  },
  reviews: {
    image: TARKOV_HERO_STILL,
    alt: 'Tarkov hacks ESP gameplay review artwork',
    title: 'Tarkov Hacks Reviews',
    caption: 'Feature and compatibility feedback for Tarkov hacks.',
  },
  faq: {
    image: TARKOV_HERO_STILL,
    alt: 'Tarkov hacks menu artwork for the FAQ',
    title: 'Tarkov Hacks FAQ',
    caption: 'Compatibility, status and setup answers for Escape from Tarkov.',
  },
  support: {
    image: TARKOV_HERO_STILL,
    alt: 'Tarkov hacks support artwork',
    title: 'Tarkov Hacks Support',
    caption: 'Delivery, loader and setup help for Tarkov hacks.',
  },
} as const satisfies Record<string, SeoMediaItem>

const FORUM_MEDIA: Record<string, SeoMediaItem> = {
  'features-list': { ...PAGE_MEDIA.product },
  hotkeys: { ...PAGE_MEDIA.forums },
  'complete-setup': { ...PAGE_MEDIA.product },
  'disable-antivirus': { ...PAGE_MEDIA.home },
  'undetected-status': { ...PAGE_MEDIA.product },
  'aimbot-settings': { ...PAGE_MEDIA.home },
  'esp-wallhack-guide': { ...PAGE_MEDIA.reviews },
  'radar-hack-guide': { ...PAGE_MEDIA.faq },
  'stream-proof-setup': { ...PAGE_MEDIA.forums },
  'battleye-status': { ...PAGE_MEDIA.product },
  'windows-setup': { ...PAGE_MEDIA.support },
  'raid-play-guide': {
    image: TARKOV_HERO_STILL,
    alt: 'Tarkov survival and loot run cheats artwork',
    title: 'Tarkov Survival and Loot Run Cheats Guide',
    caption: 'Loot run tips for Tarkov Aimbot, ESP and radar hack.',
  },
  'loader-errors': { ...PAGE_MEDIA.support },
}

export function getForumMedia(slug: string): SeoMediaItem {
  return FORUM_MEDIA[slug] || PAGE_MEDIA.forums
}
