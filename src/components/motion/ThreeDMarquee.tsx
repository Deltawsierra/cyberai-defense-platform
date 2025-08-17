import { useState } from 'react'
import { useReducedMotion } from '@/lib/useReducedMotion'

export default function ThreeDMarquee({ items }:{ items: { alt: string; src?: string; label?: string }[] }) {
  const reduced = useReducedMotion()
  const [isPaused, setIsPaused] = useState(false)
  
  return (
    <section aria-label="Trusted by">
      <div className={`relative mt-8 overflow-hidden rounded-xl border border-white/10 bg-surface p-4`}>
        <div
          className="flex gap-12 items-center will-change-transform"
          style={{
            animation: reduced ? undefined : 'marquee 20s linear infinite',
            animationPlayState: isPaused ? 'paused' : 'running',
            transformStyle: 'preserve-3d'
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
        >
          {items.concat(items).map((it, i) => (
            <div key={i} className="shrink-0 opacity-80 hover:opacity-100" aria-label={it.alt} role="img">
              <div className="h-10 w-28 bg-white/10 rounded-md grid place-items-center">
                <span className="text-xs text-muted">{it.label ?? 'LOGO'}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translate3d(0,0,0) rotateX(0deg); }
          100% { transform: translate3d(-50%,0,0) rotateX(0deg); }
        }
      `}</style>
    </section>
  )
}