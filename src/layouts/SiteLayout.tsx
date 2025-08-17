import { NavLink, Outlet } from 'react-router-dom'

const NavItem = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `px-3 py-2 rounded-md text-sm ${isActive ? 'text-primaryAccent' : 'text-muted'} hover:text-primary focus-visible:outline-none`
    }
    aria-label={typeof children === 'string' ? children : undefined}
  >
    {children}
  </NavLink>
)

export default function SiteLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-40 bg-[rgb(11,15,20,0.85)] backdrop-blur border-b border-[rgba(255,255,255,0.06)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="font-semibold text-primary text-lg tracking-wide">CyberAI</div>
          <nav className="hidden md:flex gap-2">
            <NavItem to="/">Home</NavItem>
            <NavItem to="/about">About</NavItem>
            <NavItem to="/team">Team</NavItem>
            <NavItem to="/demo">Product Demo</NavItem>
            <NavItem to="/investors">Investors</NavItem>
            <NavItem to="/careers">Careers</NavItem>
          </nav>
          <a href="/demo" className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-black hover:shadow-glow focus-visible:outline-none">
            Try the Demo
          </a>
        </div>
      </header>
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <Outlet />
        </div>
      </main>
      <footer className="border-t border-[rgba(255,255,255,0.06)] py-8 text-sm text-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <span>© 2025 CyberAI, Inc.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary">Privacy</a>
            <a href="#" className="hover:text-primary">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  )
}