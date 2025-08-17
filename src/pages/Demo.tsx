import { z } from 'zod'
import { useState } from 'react'
import StatefulButton from '@/components/ui/StatefulButton'
import { postJSON } from '@/lib/http'
import ContainerScroll from '@/components/motion/ContainerScroll'
import GlowingEffect from '@/components/ui/GlowingEffect'

const schema = z.object({
  name: z.string().min(1).max(200),
  email: z.string().email(),
  organization: z.string().max(200).optional()
})

export default function Demo() {
  const [formData, setFormData] = useState({ name: '', email: '', organization: '' })
  const [msg, setMsg] = useState<{type:'ok'|'err'|null;text:string}>({type:null, text:''})

  const onRequest = async () => {
    setMsg({type:null, text:''})
    const parsed = schema.safeParse({
      name: formData.name,
      email: formData.email,
      organization: formData.organization || undefined
    })
    if (!parsed.success) throw new Error('invalid')
    await postJSON(`${import.meta.env.VITE_FUNCTIONS_BASE}/request-early-access`, parsed.data)
    setMsg({type:'ok', text:'Thanks - we\'ll be in touch.'})
    setFormData({ name: '', email: '', organization: '' })
  }

  return (
    <div className="space-y-16">
      <section className="text-center py-8">
        <h1 className="text-4xl font-bold text-text mb-4">Product Demo</h1>
        <p className="text-xl text-muted max-w-3xl mx-auto">
          Experience how CyberAI autonomously detects and responds to threats in real-time
        </p>
      </section>

      <section id="how-it-works" className="py-8">
        <h2 className="text-3xl font-bold text-center text-text mb-12">How it Works</h2>
        <ContainerScroll />
      </section>

      {/* Placeholder Video Section */}
      <section className="bg-surface p-8 rounded-lg">
        <h2 className="text-2xl font-bold text-text mb-6 text-center">Interactive Demo</h2>
        <div className="aspect-video bg-muted/10 rounded-lg border-2 border-dashed border-muted/30 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-7 4h12l-2 5H9l-2-5z" />
              </svg>
            </div>
            <p className="text-muted">Interactive demo video coming soon</p>
          </div>
        </div>
      </section>

      {/* Early Access Form */}
      <section className="bg-surface p-8 rounded-lg">
        <h2 className="text-2xl font-bold text-text mb-6 text-center">Request Early Access</h2>
        <form className="max-w-md mx-auto space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-text mb-2">Name *</label>
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              className="w-full px-3 py-2 bg-bg border border-white/10 rounded-md text-text focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-text mb-2">Email *</label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              className="w-full px-3 py-2 bg-bg border border-white/10 rounded-md text-text focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
          <div>
            <label htmlFor="organization" className="block text-sm font-medium text-text mb-2">Organization</label>
            <input
              id="organization"
              type="text"
              value={formData.organization}
              onChange={(e) => setFormData(prev => ({ ...prev, organization: e.target.value }))}
              className="w-full px-3 py-2 bg-bg border border-white/10 rounded-md text-text focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="pt-4">
            <GlowingEffect intensity="bright">
              <StatefulButton 
                label="Request Early Access" 
                onAction={onRequest}
                className="w-full"
              />
            </GlowingEffect>
          </div>
          {msg.type && (
            <div className={`text-center text-sm ${msg.type === 'ok' ? 'text-accent' : 'text-danger'}`}>
              {msg.type === 'ok' ? msg.text : 'Something went wrong. Please try again later.'}
            </div>
          )}
        </form>
      </section>

      {/* Dev Section */}
      <section className={import.meta.env.NODE_ENV === 'production' ? 'sr-only' : 'bg-surface/50 p-4 rounded border text-xs'}>
        <h3 className="text-muted mb-2">Dev Environment Check</h3>
        <code className="block text-muted">VITE_SUPABASE_URL: {import.meta.env.VITE_SUPABASE_URL ? new URL(import.meta.env.VITE_SUPABASE_URL).host : 'undefined'}</code>
        <code className="block text-muted">VITE_FUNCTIONS_BASE: {import.meta.env.VITE_FUNCTIONS_BASE ? new URL(import.meta.env.VITE_FUNCTIONS_BASE).host : 'undefined'}</code>
        <p className="text-muted/60 mt-2">If undefined, set .env and rebuild.</p>
      </section>
    </div>
  )
}