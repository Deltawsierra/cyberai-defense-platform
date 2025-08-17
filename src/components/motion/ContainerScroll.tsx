import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { useReducedMotion } from '@/lib/useReducedMotion'

export default function ContainerScroll() {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end','end start'] })
  const rotate = useTransform(scrollYProgress, [0,1], [0, reduced ? 0 : 12])
  const y = useTransform(scrollYProgress, [0,1], [0, reduced ? 0 : -60])
  const steps = [
    { title: 'Ingest', desc: 'Stream logs & signals from endpoints, cloud, and network.' },
    { title: 'Detect', desc: 'Model scores anomalies in milliseconds to surface threats.' },
    { title: 'Remediate', desc: 'Automated playbooks isolate and contain suspicious activity.' },
  ]
  return (
    <section className="mt-16" aria-label="How it works">
      <div ref={ref} className="grid md:grid-cols-3 gap-6">
        {steps.map((s, i) => (
          <motion.div key={i} style={{ rotate, y }}
            className="rounded-xl border border-white/10 bg-surface p-6 shadow-sm">
            <motion.div
              initial={{ y: 0, rotate: 0 }}
              animate={reduced ? { y: 0, rotate: 0 } : { y: [0, -4, 0], rotate: [0, 0.6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="text-sm text-muted mt-2">{s.desc}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}