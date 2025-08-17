export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16">
        <h1 className="text-5xl font-bold text-text mb-6">Autonomous Cyber Defense</h1>
        <p className="text-xl text-muted mb-8 max-w-2xl mx-auto">
          Our AI hunts threats in milliseconds—before they become incidents.
        </p>
        <div className="flex gap-4 justify-center">
          <a 
            href="/demo" 
            className="inline-flex items-center rounded-md bg-primary px-6 py-3 text-lg font-medium text-black hover:shadow-glow focus-visible:outline-none transition-all"
          >
            Try the Demo
          </a>
          <a 
            href="#how-it-works" 
            className="inline-flex items-center rounded-md border border-primary px-6 py-3 text-lg font-medium text-primary hover:bg-primary hover:text-black focus-visible:outline-none transition-all"
          >
            How it works
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16" aria-labelledby="features-title">
        <h2 id="features-title" className="sr-only">Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <article 
            className="bg-surface p-6 rounded-lg hover:shadow-glow focus-within:shadow-glow transition-all cursor-pointer" 
            role="article" 
            aria-labelledby="detect-title"
            tabIndex={0}
          >
            <div className="w-12 h-12 bg-primary/20 rounded-lg mb-4 flex items-center justify-center">
              <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 id="detect-title" className="text-xl font-semibold text-text mb-2">Detect</h3>
            <p className="text-muted">Real-time anomaly and threat detection across endpoints and cloud.</p>
          </article>

          <article 
            className="bg-surface p-6 rounded-lg hover:shadow-glow focus-within:shadow-glow transition-all cursor-pointer" 
            role="article" 
            aria-labelledby="respond-title"
            tabIndex={0}
          >
            <div className="w-12 h-12 bg-primary/20 rounded-lg mb-4 flex items-center justify-center">
              <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 id="respond-title" className="text-xl font-semibold text-text mb-2">Respond</h3>
            <p className="text-muted">Automated containment playbooks reduce MTTR to seconds.</p>
          </article>

          <article 
            className="bg-surface p-6 rounded-lg hover:shadow-glow focus-within:shadow-glow transition-all cursor-pointer" 
            role="article" 
            aria-labelledby="comply-title"
            tabIndex={0}
          >
            <div className="w-12 h-12 bg-primary/20 rounded-lg mb-4 flex items-center justify-center">
              <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 id="comply-title" className="text-xl font-semibold text-text mb-2">Comply</h3>
            <p className="text-muted">Evidence and reporting that help satisfy security frameworks.</p>
          </article>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="py-16 bg-surface/30 rounded-lg">
        <h2 className="text-3xl font-bold text-center text-text mb-12">How it Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-black font-bold text-xl">1</span>
            </div>
            <h3 className="text-lg font-semibold text-text mb-2">Ingest</h3>
            <p className="text-muted">Continuous data collection from all security tools and endpoints</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-black font-bold text-xl">2</span>
            </div>
            <h3 className="text-lg font-semibold text-text mb-2">Detect</h3>
            <p className="text-muted">AI models analyze patterns and identify threats in real-time</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-black font-bold text-xl">3</span>
            </div>
            <h3 className="text-lg font-semibold text-text mb-2">Remediate</h3>
            <p className="text-muted">Automated response protocols contain threats immediately</p>
          </div>
        </div>
      </section>

      {/* Placeholder sections for future enhancements */}
      <section className="py-16 text-center">
        <div className="bg-surface/20 border-2 border-dashed border-muted/30 rounded-lg p-8">
          <p className="text-muted">Future: 3D Marquee Component</p>
        </div>
      </section>

      <section className="py-16 text-center">
        <div className="bg-surface/20 border-2 border-dashed border-muted/30 rounded-lg p-8">
          <p className="text-muted">Future: Testimonials Section</p>
        </div>
      </section>
    </div>
  )
}