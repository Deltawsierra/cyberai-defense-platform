import GlowingEffect from '@/components/ui/GlowingEffect'

export default function Team() {
  return (
    <div className="space-y-16">
      <section className="text-center py-8">
        <h1 className="text-4xl font-bold text-text mb-4">Team</h1>
        <p className="text-xl text-muted max-w-2xl mx-auto">
          Security experts and AI researchers building the future of cyber defense
        </p>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        <GlowingEffect intensity="subtle" className="p-6">
          <article>
            <div className="w-24 h-24 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
              <img src="#" alt="Placeholder avatar" className="w-full h-full rounded-full object-cover bg-muted/20" />
            </div>
            <h3 className="text-xl font-semibold text-text text-center mb-1">Alex Rivera</h3>
            <p className="text-primary text-center mb-3">CEO & Co-Founder</p>
            <p className="text-muted text-center">
              Security leader focused on AI safety with 15+ years building enterprise defense systems. 
              Former CISO at two Fortune 500 companies, passionate about making advanced security accessible to all organizations.
            </p>
          </article>
        </GlowingEffect>

        <GlowingEffect intensity="subtle" className="p-6">
          <article>
            <div className="w-24 h-24 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
              <img src="#" alt="Placeholder avatar" className="w-full h-full rounded-full object-cover bg-muted/20" />
            </div>
            <h3 className="text-xl font-semibold text-text text-center mb-1">Jordan Chen</h3>
            <p className="text-primary text-center mb-3">CTO & Co-Founder</p>
            <p className="text-muted text-center">
              Full-stack and ML systems architect with deep expertise in real-time threat detection. 
              Previously led engineering teams at major cloud security providers, specializing in scalable AI infrastructure.
            </p>
          </article>
        </GlowingEffect>

        <GlowingEffect intensity="subtle" className="p-6">
          <article>
            <div className="w-24 h-24 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
              <img src="#" alt="Placeholder avatar" className="w-full h-full rounded-full object-cover bg-muted/20" />
            </div>
            <h3 className="text-xl font-semibold text-text text-center mb-1">Sam Patel</h3>
            <p className="text-primary text-center mb-3">Head of AI</p>
            <p className="text-muted text-center">
              Applied researcher in threat modeling with PhD in Machine Learning from Stanford. 
              Expert in adversarial AI and behavioral analysis, focused on building robust models that adapt to evolving attack patterns.
            </p>
          </article>
        </GlowingEffect>

        <GlowingEffect intensity="subtle" className="p-6">
          <article>
            <div className="w-24 h-24 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
              <img src="#" alt="Placeholder avatar" className="w-full h-full rounded-full object-cover bg-muted/20" />
            </div>
            <h3 className="text-xl font-semibold text-text text-center mb-1">Riley Morgan</h3>
            <p className="text-primary text-center mb-3">Head of Product</p>
            <p className="text-muted text-center">
              Designs analyst-friendly workflows that make complex security data actionable. 
              Former security analyst turned UX researcher, dedicated to bridge the gap between AI capabilities and human decision-making.
            </p>
          </article>
        </GlowingEffect>
      </section>
    </div>
  )
}