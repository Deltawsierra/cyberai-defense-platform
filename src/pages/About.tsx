export default function About() {
  return (
    <div className="space-y-16">
      <section className="text-center py-8">
        <h1 className="text-4xl font-bold text-text mb-4">About CyberAI</h1>
        <p className="text-xl text-muted max-w-3xl mx-auto">
          Building the next generation of autonomous cybersecurity defense systems
        </p>
      </section>

      <section aria-labelledby="mission-title" className="bg-surface p-8 rounded-lg">
        <h2 id="mission-title" className="text-2xl font-bold text-text mb-4">Our Mission</h2>
        <p className="text-muted leading-relaxed">
          To eliminate the cybersecurity skills gap through intelligent automation that thinks and responds 
          like the best security analysts. We believe that AI should augment human expertise, not replace it, 
          creating a world where organizations can defend themselves against the most sophisticated threats.
        </p>
      </section>

      <section aria-labelledby="story-title" className="bg-surface p-8 rounded-lg">
        <h2 id="story-title" className="text-2xl font-bold text-text mb-4">Our Story</h2>
        <p className="text-muted leading-relaxed">
          Founded by security veterans who spent years responding to incidents that could have been prevented, 
          CyberAI emerged from the frustration of always being reactive rather than proactive. Our team combines 
          deep cybersecurity domain expertise with cutting-edge machine learning research to build systems 
          that don't just detect threats—they understand them.
        </p>
      </section>

      <section aria-labelledby="values-title" className="bg-surface p-8 rounded-lg">
        <h2 id="values-title" className="text-2xl font-bold text-text mb-4">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-primaryAccent mb-2">Security First</h3>
            <p className="text-muted">Every decision prioritizes the security and privacy of our customers' data.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-primaryAccent mb-2">Radical Transparency</h3>
            <p className="text-muted">Our AI models are explainable, auditable, and our customers understand how decisions are made.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-primaryAccent mb-2">Continuous Learning</h3>
            <p className="text-muted">We evolve with the threat landscape, constantly improving our defense capabilities.</p>
          </div>
        </div>
      </section>
    </div>
  )
}