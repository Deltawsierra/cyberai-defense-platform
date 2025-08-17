import GlowTile from '@/components/ui/GlowTile'
import { z } from 'zod'
import { useState } from 'react'
import StatefulButton from '@/components/ui/StatefulButton'
import { postJSON } from '@/lib/http'

const schema = z.object({
  name: z.string().min(1).max(200),
  email: z.string().email(),
  message: z.string().min(1).max(5000),
})

export default function Investors() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [msg, setMsg] = useState<{type:'ok'|'err'|null;text:string}>({type:null, text:''})

  const onSubmit = async () => {
    setMsg({type:null, text:''})
    const parsed = schema.safeParse(formData)
    if (!parsed.success) throw new Error('invalid')
    await postJSON(`${import.meta.env.VITE_FUNCTIONS_BASE}/investor-contact`, parsed.data)
    setMsg({type:'ok', text:'Thanks - investor relations will follow up.'})
    setFormData({ name: '', email: '', message: '' })
  }
  return (
    <div className="space-y-16">
      <section className="text-center py-8">
        <h1 className="text-4xl font-bold text-text mb-4">Investors</h1>
        <p className="text-xl text-muted max-w-3xl mx-auto">
          Building the future of autonomous cybersecurity with world-class partners
        </p>
      </section>

      <section className="bg-surface p-8 rounded-lg">
        <p className="text-muted leading-relaxed mb-8">
          The cybersecurity market is experiencing unprecedented growth as organizations worldwide face increasingly 
          sophisticated threats. CyberAI addresses the critical skills shortage by automating expert-level security 
          analysis, making advanced threat detection and response accessible to organizations of all sizes.
        </p>
        <p className="text-muted leading-relaxed">
          Our autonomous defense platform represents a paradigm shift from reactive to proactive security, 
          reducing incident response times from hours to seconds while providing unprecedented visibility 
          into threat landscapes.
        </p>
      </section>

      {/* Metrics Section */}
      <section className="grid md:grid-cols-3 gap-6">
        <GlowTile className="text-center">
          <div className="text-3xl font-bold text-primary mb-2">&lt; 1s</div>
          <h3 className="text-lg font-semibold text-text mb-2">Threat Signal Latency</h3>
          <p className="text-muted text-sm">From detection to containment</p>
        </GlowTile>
        <GlowTile className="text-center">
          <div className="text-3xl font-bold text-accent mb-2">Zero Trust</div>
          <h3 className="text-lg font-semibold text-text mb-2">Architecture Ready</h3>
          <p className="text-muted text-sm">Built for modern security models</p>
        </GlowTile>
        <GlowTile className="text-center">
          <div className="text-3xl font-bold text-primaryAccent mb-2">Enterprise</div>
          <h3 className="text-lg font-semibold text-text mb-2">Security Market</h3>
          <p className="text-muted text-sm">$150B+ addressable market</p>
        </GlowTile>
      </section>

      {/* Investor Contact Form */}
      <section className="bg-surface p-8 rounded-lg">
        <h2 className="text-2xl font-bold text-text mb-6 text-center">Investor Inquiries</h2>
        <form className="max-w-md mx-auto space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label htmlFor="investor-name" className="block text-sm font-medium text-text mb-2">Name *</label>
            <input
              id="investor-name"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              className="w-full px-3 py-2 bg-bg border border-white/10 rounded-md text-text focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
          <div>
            <label htmlFor="investor-email" className="block text-sm font-medium text-text mb-2">Email *</label>
            <input
              id="investor-email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              className="w-full px-3 py-2 bg-bg border border-white/10 rounded-md text-text focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
          <div>
            <label htmlFor="investor-message" className="block text-sm font-medium text-text mb-2">Message *</label>
            <textarea
              id="investor-message"
              value={formData.message}
              onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
              className="w-full px-3 py-2 bg-bg border border-white/10 rounded-md text-text focus:outline-none focus:ring-2 focus:ring-primary h-32 resize-none"
              required
            />
          </div>
          <div className="pt-4">
            <StatefulButton 
              label="Contact Investor Relations" 
              onAction={onSubmit}
              className="w-full"
            />
          </div>
          {msg.type && (
            <div className={`text-center text-sm ${msg.type === 'ok' ? 'text-accent' : 'text-danger'}`}>
              {msg.type === 'ok' ? msg.text : 'Something went wrong. Please try again later.'}
            </div>
          )}
        </form>
      </section>
    </div>
  )
}