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
            <h3 className="text-xl font-semibold">{s.title}</h3>
            <p className="text-sm text-muted mt-2">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}