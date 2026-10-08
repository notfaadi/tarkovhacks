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

/** Tarkov product art + menu stills (self-hosted). */
export const DAYZ_HERO = '/media/dayz-hero-full.webp'
export const DAYZ_SOLDIER = '/media/dayz-hero-full.webp'
export const DAYZ_COVER = '/media/dayz-cover.webp'
export const DAYZ_BOX = '/media/dayz-box.jpg'
export const DAYZ_ESP = '/media/dayz-esp-gameplay.gif'
export const DAYZ_MENU = '/media/dayz-menu.gif'
export const DAYZ_GAMEPLAY = '/media/dayz-esp-gameplay.gif'
export const DAYZ_HOME_ART = '/media/dayz-home-art.jpg'
export const DAYZ_CONTROL = '/media/dayz-control-art.jpg'
export const DAYZ_TACTICAL = '/media/dayz-tactical-art.jpg'
export const DAYZ_VIDEO_THUMB = '/media/dayz-video-thumb.jpg'

/** Self-hosted Tarkov Reaper preview (Bunny Stream GUID ee0735e7-…). */
export const DAYZ_HOME_VIDEO = {
  id: 'ee0735e7-c9a3-4072-b818-98e2bb7f07ff',
  src: '/videos/dayz-preview.mp4',
  poster: DAYZ_VIDEO_THUMB,
  title: 'Tarkov Hacks Aimbot and ESP preview',
  caption: 'Preview of Tarkov Aimbot, ESP menu, loot highlighting and radar hack features on PC.',
} as const

export const PAGE_MEDIA = {
  home: {
    image: DAYZ_SOLDIER,
    alt: 'Tarkov hacks Aimbot and ESP product artwork for Escape from Tarkov on PC',
    title: 'Tarkov Hacks for Escape from Tarkov',
    caption: 'Feature overview for Tarkov Aimbot, ESP, wallhack, loot ESP and radar hack.',
  },
  product: {
    image: DAYZ_COVER,
    video: DAYZ_HOME_VIDEO.src,
    alt: 'Tarkov ESP, silent aim Aimbot and loot highlight feature artwork',
    title: 'Tarkov Aimbot, ESP and Radar Hack Features',
    caption: 'Product overview for Escape from Tarkov on Windows PC.',
    videoTitle: DAYZ_HOME_VIDEO.title,
    videoDescription: DAYZ_HOME_VIDEO.caption,
  },
  forums: {
    image: DAYZ_HERO,
    alt: 'Tarkov hacks product artwork',
    title: 'Tarkov Hacks Guides',
    caption: 'Reference for setup, Aimbot, ESP, loot and BattlEye status articles.',
  },
  reviews: {
    image: DAYZ_ESP,
    alt: 'Tarkov hacks ESP gameplay review artwork',
    title: 'Tarkov Hacks Reviews',
    caption: 'Feature and compatibility feedback for Tarkov hacks.',
  },
  faq: {
    image: DAYZ_MENU,
    alt: 'Tarkov hacks menu artwork for the FAQ',
    title: 'Tarkov Hacks FAQ',
    caption: 'Compatibility, status and setup answers for Escape from Tarkov.',
  },
  support: {
    image: DAYZ_HERO,
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
    image: DAYZ_BOX,
    alt: 'Tarkov survival and loot run cheats artwork',
    title: 'Tarkov Survival and Loot Run Cheats Guide',
    caption: 'Loot run tips for Tarkov Aimbot, ESP and radar hack.',
  },
  'loader-errors': { ...PAGE_MEDIA.support },
}

export function getForumMedia(slug: string): SeoMediaItem {
  return FORUM_MEDIA[slug] || PAGE_MEDIA.forums
}
