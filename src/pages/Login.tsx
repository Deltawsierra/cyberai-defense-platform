import { useState } from 'react'
import StatefulButton from '@/components/ui/StatefulButton'

export default function Login() {
  const [email, setEmail] = useState('')

  const handleSendLoginLink = async () => {
    // Auth functionality disabled until anon key is configured
    throw new Error('Auth not configured')
  }

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold text-text">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-muted">
            We'll send you a magic link to sign in
          </p>
        </div>
        
        <div className="bg-surface p-8 rounded-lg border border-white/10">
          <div className="bg-danger/10 border border-danger/20 rounded-md p-4 mb-6">
            <p className="text-sm text-danger">
              <strong>Note:</strong> Auth requires client anon key; we will enable after secrets are provisioned.
            </p>
          </div>
          
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-text mb-2">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 bg-bg border border-white/10 rounded-md text-text focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter your email"
                disabled
              />
            </div>

            <div>
              <StatefulButton
                label="Send login link"
                onAction={handleSendLoginLink}
                className="w-full"
                disabled
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}