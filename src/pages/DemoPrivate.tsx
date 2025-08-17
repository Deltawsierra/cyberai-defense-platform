import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function AuthGuard({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate()

  useEffect(() => {
    // TODO: Enable Supabase session check once anon key is configured
    // For now, always redirect to login
    navigate('/login')
  }, [navigate])

  return null
}

export default function DemoPrivate() {
  return (
    <AuthGuard>
      <div className="space-y-16">
        <section className="text-center py-8">
          <h1 className="text-4xl font-bold text-text mb-4">Private Demo</h1>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Advanced features and configuration for authenticated users
          </p>
        </section>

        <section className="bg-surface p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-text mb-6">Private Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-4 bg-bg rounded border border-white/10">
              <h3 className="text-lg font-semibold text-primaryAccent mb-2">Advanced Analytics</h3>
              <p className="text-muted">Detailed threat analysis and reporting dashboard</p>
            </div>
            <div className="p-4 bg-bg rounded border border-white/10">
              <h3 className="text-lg font-semibold text-primaryAccent mb-2">Custom Playbooks</h3>
              <p className="text-muted">Configure automated response workflows</p>
            </div>
          </div>
        </section>
      </div>
    </AuthGuard>
  )
}