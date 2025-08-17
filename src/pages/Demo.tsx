export default function Demo() {
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
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-surface p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-primaryAccent mb-3">Ingest</h3>
            <p className="text-muted">
              Continuous data collection from all security tools and endpoints. Our AI ingests logs, network traffic, 
              and behavioral data from across your infrastructure.
            </p>
          </div>
          <div className="bg-surface p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-primaryAccent mb-3">Detect</h3>
            <p className="text-muted">
              Advanced ML models analyze patterns and identify threats in under 100ms. Our system learns normal 
              behavior patterns and instantly flags anomalies that indicate potential threats.
            </p>
          </div>
          <div className="bg-surface p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-primaryAccent mb-3">Remediate</h3>
            <p className="text-muted">
              Automated response protocols contain threats immediately. From network isolation to credential rotation, 
              our playbooks execute faster than any human team could respond.
            </p>
          </div>
        </div>
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

      {/* Placeholder Early Access Form */}
      <section className="bg-surface p-8 rounded-lg">
        <h2 className="text-2xl font-bold text-text mb-6 text-center">Request Early Access</h2>
        <div className="max-w-md mx-auto border-2 border-dashed border-muted/30 rounded-lg p-8 text-center">
          <p className="text-muted mb-4">Early access signup form</p>
          <p className="text-sm text-muted/60">(Form will be implemented with backend in next phase)</p>
        </div>
      </section>
    </div>
  )
}