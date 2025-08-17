export default function Investors() {
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
        <div className="bg-surface p-6 rounded-lg text-center">
          <div className="text-3xl font-bold text-primary mb-2">&lt; 1s</div>
          <h3 className="text-lg font-semibold text-text mb-2">Threat Signal Latency</h3>
          <p className="text-muted text-sm">From detection to containment</p>
        </div>
        <div className="bg-surface p-6 rounded-lg text-center">
          <div className="text-3xl font-bold text-accent mb-2">Zero Trust</div>
          <h3 className="text-lg font-semibold text-text mb-2">Architecture Ready</h3>
          <p className="text-muted text-sm">Built for modern security models</p>
        </div>
        <div className="bg-surface p-6 rounded-lg text-center">
          <div className="text-3xl font-bold text-primaryAccent mb-2">Enterprise</div>
          <h3 className="text-lg font-semibold text-text mb-2">Security Market</h3>
          <p className="text-muted text-sm">$150B+ addressable market</p>
        </div>
      </section>

      {/* Placeholder Contact Form */}
      <section className="bg-surface p-8 rounded-lg">
        <h2 className="text-2xl font-bold text-text mb-6 text-center">Investor Inquiries</h2>
        <div className="max-w-md mx-auto border-2 border-dashed border-muted/30 rounded-lg p-8 text-center">
          <p className="text-muted mb-4">Investor contact form</p>
          <p className="text-sm text-muted/60">(Secure form will be implemented with backend)</p>
        </div>
      </section>
    </div>
  )
}