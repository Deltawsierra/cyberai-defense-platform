import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { useReducedMotion } from '@/lib/useReducedMotion'
import GlowingEffect from '@/components/ui/GlowingEffect'

export default function HeroParallax({ title, subtitle, ctaText, ctaHref }:{
  title: string; subtitle: string; ctaText: string; ctaHref: string;
}) {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start','end start'] })
  const y = useTransform(scrollYProgress, [0,1], [0, reduced ? 0 : -80])
  const opacity = useTransform(scrollYProgress, [0,1], [1, reduced ? 1 : 0.6])
  return (
    <section ref={ref} className="relative overflow-hidden rounded-2xl p-10 bg-surface">
      {/* Idle animated glow (moves even before scroll) */}
      {!reduced && (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-20 blur-3xl"
          initial={{ opacity: 0.25, scale: 1 }}
          animate={{ opacity: [0.25, 0.45, 0.25], scale: [1, 1.04, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            background:
              'radial-gradient(600px 400px at 50% 10%, rgba(58,160,255,0.25), transparent 70%)'
          }}
        />
      )}
      {/* Content with subtle parallax */}
      <motion.div style={{ y, opacity }}>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">{title}</h1>
        <p className="mt-4 text-lg md:text-xl text-muted">{subtitle}</p>
        <GlowingEffect intensity="bright" className="mt-6 inline-block">
          <a href={ctaHref} className="inline-flex rounded-md bg-primary px-5 py-3 text-black hover:shadow-glow focus-visible:outline-none">
            {ctaText}
          </a>
        </GlowingEffect>
      </motion.div>
    </section>
  )
}