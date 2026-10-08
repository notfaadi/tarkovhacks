export type GameStatus = 'Undetected' | 'Updating' | 'Use with caution'

export type Game = {
  slug: string
  name: string
  status: GameStatus
  popular?: boolean
}

/** Site is Escape from Tarkov hacks only — no other titles in the catalog. */
export const GAMES: Game[] = [
  { slug: 'tarkov', name: 'Escape from Tarkov', status: 'Undetected', popular: true },
]

export function getGame(slug: string) {
  return GAMES.find((g) => g.slug === slug)
}

export function guidePath(slug: string) {
  return `/${slug.toLowerCase()}-hacks`
}

export function parseGuideSlug(param: string) {
  const lower = param.toLowerCase()
  if (lower.endsWith('-hacks')) return lower.slice(0, -6)
  if (lower.endsWith('-cheats')) return lower.slice(0, -7)
  return lower
}

export const GUIDE_FEATURES = [
  {
    name: 'Tarkov Aimbot (silent aim)',
    text: 'Silent-aim tracking with FOV, smoothing and bone selection — land shots that read legit even when spectated on Escape from Tarkov.',
  },
  {
    name: 'Player ESP / Wallhack',
    text: 'See PMCs and player scavs through walls with distance, health and gear when the build supports it — tell threats from teammates fast.',
  },
  {
    name: 'Scav & Boss ESP',
    text: 'Track scavs and bosses before they push your angle so a loot run on Customs or Streets does not turn into a wipe.',
  },
  {
    name: 'Loot & Item ESP',
    text: 'Highlight weapons, ammo, meds and high-value loot by category so you skip dead raids and extract with profit.',
  },
  {
    name: 'Radar Hack',
    text: '2D radar for off-screen players across Tarkov maps — spot the third party before it reaches your extract.',
  },
  {
    name: 'Quest & Key Intel',
    text: 'Spot quest items and key locations faster on long wipe grinds instead of tabbing out to wiki pages.',
  },
  {
    name: 'Official & modded server support',
    text: 'Built for live Escape from Tarkov on Windows PC with status updates after BattlEye patches.',
  },
  {
    name: 'Spoofer + Cleaner',
    text: 'Protect hardware identifiers and refresh traces after bans or hardware swaps — included with the package.',
  },
  {
    name: 'BattlEye status + support',
    text: 'Live clear-to-load or Updating status is reviewed after BattlEye and Tarkov patches before you load.',
  },
] as const

/** @deprecated use PRODUCT_PAGE_FAQS from faqs.ts — kept as alias */
export { PRODUCT_PAGE_FAQS as PRODUCT_FAQS } from './faqs'
