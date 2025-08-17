import GlowTile from '@/components/ui/GlowTile'

export default function Careers() {
  return (
    <div className="space-y-16">
      <section className="text-center py-8">
        <h1 className="text-4xl font-bold text-text mb-4">Join Our Team</h1>
        <p className="text-xl text-muted max-w-3xl mx-auto">
          Help us build the next generation of autonomous cybersecurity defense
        </p>
      </section>

      <section className="space-y-8">
        <GlowTile>
          <article>
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-text mb-2">Senior ML Engineer - Threat Detection</h3>
                <p className="text-muted">Build and optimize real-time threat detection models using advanced machine learning</p>
              </div>
              <div className="text-right">
                <p className="text-primary font-medium">San Francisco, CA</p>
                <p className="text-muted text-sm">Full-time</p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm">Machine Learning</span>
                <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm">Python</span>
                <span className="bg-primaryAccent/20 text-primaryAccent px-3 py-1 rounded-full text-sm">Security</span>
              </div>
              <a 
                href="mailto:careers@example.com?subject=Senior ML Engineer Application" 
                className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-black hover:shadow-glow focus-visible:outline-none"
              >
                Apply
              </a>
            </div>
          </article>
        </GlowTile>

        <GlowTile>
          <article>
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-text mb-2">Security Research Scientist</h3>
                <p className="text-muted">Research emerging threats and develop novel detection techniques for advanced persistent threats</p>
              </div>
              <div className="text-right">
                <p className="text-primary font-medium">Remote</p>
                <p className="text-muted text-sm">Full-time</p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm">Research</span>
                <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm">Threat Intel</span>
                <span className="bg-primaryAccent/20 text-primaryAccent px-3 py-1 rounded-full text-sm">PhD Preferred</span>
              </div>
              <a 
                href="mailto:careers@example.com?subject=Security Research Scientist Application" 
                className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-black hover:shadow-glow focus-visible:outline-none"
              >
                Apply
              </a>
            </div>
          </article>
        </GlowTile>

        <GlowTile>
          <article>
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-text mb-2">DevSecOps Engineer</h3>
                <p className="text-muted">Build secure, scalable infrastructure for AI-powered security platforms</p>
              </div>
              <div className="text-right">
                <p className="text-primary font-medium">San Francisco, CA</p>
                <p className="text-muted text-sm">Full-time</p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm">Kubernetes</span>
                <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm">AWS/GCP</span>
                <span className="bg-primaryAccent/20 text-primaryAccent px-3 py-1 rounded-full text-sm">Security</span>
              </div>
              <a 
                href="mailto:careers@example.com?subject=DevSecOps Engineer Application" 
                className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-black hover:shadow-glow focus-visible:outline-none"
              >
                Apply
              </a>
            </div>
          </article>
        </GlowTile>
      </section>

      <section className="text-center bg-surface/30 p-8 rounded-lg">
        <h2 className="text-2xl font-bold text-text mb-4">Don't See Your Role?</h2>
        <p className="text-muted mb-6">
          We're always looking for exceptional talent to join our mission of autonomous cyber defense.
        </p>
        <a 
          href="mailto:careers@example.com?subject=General Interest" 
          className="inline-flex items-center rounded-md border border-primary px-6 py-3 text-lg font-medium text-primary hover:bg-primary hover:text-black focus-visible:outline-none transition-all"
        >
          Email careers@example.com
        </a>
      </section>
    </div>
  )
}