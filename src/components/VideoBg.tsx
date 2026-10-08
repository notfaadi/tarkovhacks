import { DAYZ_HERO, TARKOV_HERO_VIDEO } from '../data/media'

type VideoBgProps = {
  /** Static hero image when `video` is omitted. */
  image?: string
  imageAlt?: string
  /** Looping MP4 for the hero background. Pass `""` to force static `image`. */
  video?: string
}

/** Full-bleed hero — looping video or static artwork. */
export function VideoBg({
  image = DAYZ_HERO,
  imageAlt = 'Tarkov hacks Aimbot and ESP product artwork',
  video,
}: VideoBgProps) {
  const src = video === undefined ? TARKOV_HERO_VIDEO : video

  return (
    <div className="hero-video-wrap absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
      <div className="absolute inset-0 z-0 bg-z-bg" aria-hidden />
      {src ? (
        <video
          className="hero-video-bg absolute inset-0 z-[1] h-full w-full object-cover object-center opacity-100"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-label={imageAlt}
        >
          <source src={src} type="video/mp4" />
        </video>
      ) : (
        <img
          src={image}
          alt={imageAlt}
          width={1920}
          height={1080}
          decoding="async"
          fetchPriority="high"
          className="hero-video-bg absolute inset-0 z-[1] h-full w-full object-cover object-[78%_42%] opacity-100 sm:object-[72%_40%]"
        />
      )}
      <div className="hero-video-tint pointer-events-none absolute inset-0 z-[2]" aria-hidden />
      <div className="hero-video-tint-glow pointer-events-none absolute inset-0 z-[2]" aria-hidden />
      <div className="absolute inset-x-0 bottom-0 z-[3] h-40 bg-gradient-to-t from-z-bg via-z-bg/80 to-transparent" />
      <div className="absolute inset-x-0 top-0 z-[3] h-24 bg-gradient-to-b from-z-bg/70 to-transparent" />
    </div>
  )
}
