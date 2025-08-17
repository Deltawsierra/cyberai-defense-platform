import CardSpotlight from '@/components/ui/CardSpotlight'
import SEOHead from '@/components/SEOHead'
import HeroParallax from '@/components/motion/HeroParallax'
import ThreeDMarquee from '@/components/motion/ThreeDMarquee'
import AnimatedTestimonials from '@/components/motion/AnimatedTestimonials'
import GlowingEffect from '@/components/ui/GlowingEffect'

export default function Home() {
  return (
    <>
      <SEOHead 
        title="CyberAI - Autonomous Cyber Defense"
        description="Our AI hunts threats in milliseconds—before they become incidents. Advanced threat detection and automated response for modern enterprises."
      />
      <div className="space-y-16">
      {/* Hero Section */}
      <HeroParallax
        title="Autonomous Cyber Defense"
        subtitle="Our AI hunts threats in milliseconds—before they become incidents."
        ctaText="Try the Demo"
        ctaHref="/demo"
      />

      {/* Trusted By Marquee */}
      <ThreeDMarquee items={[
        { alt:'Partner 1', label:'ALPHA' },
        { alt:'Partner 2', label:'BETA' },
        { alt:'Partner 3', label:'GAMMA' },
        { alt:'Partner 4', label:'DELTA' }
      ]}/>

      {/* Testimonials */}
      <AnimatedTestimonials
        id="home-testimonials"
        heading="Trusted by security leaders"
        items={[
          { quote: 'Cut our MTTR dramatically in the first week.', name: 'Security Director', title: 'Fortune 500' },
          { quote: 'Finally, AI that explains itself to analysts.', name: 'SOC Manager', title: 'Global MSSP' },
          { quote: 'Deployment was painless and the insights were immediate.', name: 'CISO', title: 'Enterprise SaaS' },
        ]}
      />

      {/* Features Section */}
      <section className="py-16" aria-labelledby="features-title">
        <h2 id="features-title" className="sr-only">Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <CardSpotlight>
            <article 
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
          </CardSpotlight>

          <CardSpotlight>
            <article 
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
          </CardSpotlight>

          <CardSpotlight>
            <article 
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
          </CardSpotlight>
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
    </div>
    </>
  )
}