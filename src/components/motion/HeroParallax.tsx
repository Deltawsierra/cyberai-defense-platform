import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { useReducedMotion } from '@/lib/useReducedMotion'

export default function HeroParallax({ title, subtitle, ctaText, ctaHref }:{
  title: string; subtitle: string; ctaText: string; ctaHref: string;
}) {
  const ref = useRef<HTMLDivElement>(null)
  const prefersReduced = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start','end start'] })
  const y = useTransform(scrollYProgress, [0,1], [0, prefersReduced ? 0 : -80])
  const opacity = useTransform(scrollYProgress, [0,1], [1, prefersReduced ? 1 : 0.6])
  return (
    <section ref={ref} className="relative overflow-hidden rounded-2xl bg-[radial-gradient(1200px_600px_at_50%_-20%,rgba(58,160,255,0.15),transparent_70%)] p-10">
      <motion.div style={{ y, opacity }}>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">{title}</h1>
        <p className="mt-4 text-lg md:text-xl text-muted">{subtitle}</p>
        <a href={ctaHref} className="mt-6 inline-flex rounded-md bg-primary px-5 py-3 text-black hover:shadow-glow focus-visible:outline-none">
          {ctaText}
        </a>
      </motion.div>
    </section>
  )
}