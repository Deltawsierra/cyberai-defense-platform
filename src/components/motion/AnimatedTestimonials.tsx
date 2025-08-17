import { useEffect, useMemo, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useReducedMotion } from '@/lib/useReducedMotion'

export type Testimonial = {
  quote: string
  name: string
  title?: string
  avatarAlt?: string
  avatarSrc?: string
}

type Props = {
  items: Testimonial[]
  intervalMs?: number
  heading?: string
  id?: string
}

export default function AnimatedTestimonials({ items, intervalMs = 6000, heading = 'Testimonials', id }: Props) {
  const reduced = useReducedMotion()
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const count = items.length
  const regionRef = useRef<HTMLDivElement>(null)
  const current = items[index]

  // autoplay
  useEffect(() => {
    if (reduced || paused || count <= 1) return
    const t = setInterval(() => setIndex(i => (i + 1) % count), intervalMs)
    return () => clearInterval(t)
  }, [reduced, paused, count, intervalMs])

  const go = (n: number) => setIndex(((n % count) + count) % count)
  const next = () => go(index + 1)
  const prev = () => go(index - 1)

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') { e.preventDefault(); next() }
    if (e.key === 'ArrowLeft')  { e.preventDefault(); prev() }
  }

  // accessible status for SR users
  const liveText = useMemo(() => `${index + 1} of ${count}: ${current.name}${current.title ? ', ' + current.title : ''}`, [index, count, current])

  return (
    <section
      id={id}
      aria-label={heading}
      role="region"
      aria-roledescription="carousel"
      aria-describedby={`${id || 't'}-desc`}
      className="mt-12"
      ref={regionRef}
      onKeyDown={onKey}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div id={`${id || 't'}-desc`} className="sr-only">
        Use left and right arrow keys to navigate testimonials. Press the Play/Pause button to control auto-rotate.
      </div>

      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xl font-semibold">{heading}</h2>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="px-2 py-1 rounded-md bg-surface border border-white/10 hover:shadow-glow focus-visible:outline-none"
            aria-label="Previous testimonial"
            onClick={prev}
          >←</button>
          <button
            type="button"
            className="px-2 py-1 rounded-md bg-surface border border-white/10 hover:shadow-glow focus-visible:outline-none"
            aria-pressed={paused || reduced}
            aria-label={(paused || reduced) ? 'Play testimonials' : 'Pause testimonials'}
            onClick={() => setPaused(p => !p)}
          >{(paused || reduced) ? 'Play' : 'Pause'}</button>
          <button
            type="button"
            className="px-2 py-1 rounded-md bg-surface border border-white/10 hover:shadow-glow focus-visible:outline-none"
            aria-label="Next testimonial"
            onClick={next}
          >→</button>
        </div>
      </div>

      <div className="relative rounded-xl border border-white/10 bg-surface p-6 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.figure
            key={index}
            initial={reduced ? { opacity: 1, x: 0 } : { opacity: 0, x: 24 }}
            animate={reduced ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
            exit={reduced ? { opacity: 1, x: 0 } : { opacity: 0, x: -24 }}
            transition={{ duration: reduced ? 0 : 0.35 }}
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${count}`}
          >
            <blockquote className="text-lg leading-relaxed">"{current.quote}"</blockquote>
            <figcaption className="mt-4 flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-white/10 overflow-hidden shrink-0" aria-hidden="true">
                {current.avatarSrc ? <img src={current.avatarSrc} alt={current.avatarAlt || ''} className="h-full w-full object-cover" /> : null}
              </div>
              <div>
                <div className="font-medium">{current.name}</div>
                {current.title ? <div className="text-sm text-muted">{current.title}</div> : null}
              </div>
            </figcaption>
          </motion.figure>
        </AnimatePresence>

        <div className="mt-6 flex gap-2" role="tablist" aria-label="Choose testimonial">
          {items.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === index}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 w-6 rounded-full ${i===index ? 'bg-primary' : 'bg-white/15 hover:bg-white/30'} focus-visible:outline-none`}
              onClick={() => go(i)}
              onFocus={() => setPaused(true)}
              onBlur={() => setPaused(false)}
            />
          ))}
        </div>

        {/* Live region for SR users */}
        <div aria-live="polite" className="sr-only">{liveText}</div>
      </div>
    </section>
  )
}