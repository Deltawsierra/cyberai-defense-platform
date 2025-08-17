import { twMerge } from 'tailwind-merge'
export default function GlowTile(
  { children, className }: { children: React.ReactNode; className?: string }
) {
  return (
    <div
      className={twMerge(
        'rounded-xl border border-white/10 bg-surface p-6',
        'transition-shadow hover:shadow-glow focus-within:shadow-glow', className
      )}
    >{children}</div>
  )
}