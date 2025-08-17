import { twMerge } from 'tailwind-merge'
import { useReducedMotion } from '@/lib/useReducedMotion'

export default function GlowingEffect({
  children, className, intensity='bright', label
}:{
  children: React.ReactNode
  className?: string
  intensity?: 'subtle'|'bright'
  label?: string  // optional accessible name for the region
}) {
  const reduced = useReducedMotion()
  const glow = intensity === 'bright'
    ? 'shadow-[0_0_0_2px_rgba(58,160,255,0.35),0_0_32px_8px_rgba(58,160,255,0.35)]'
    : 'shadow-[0_0_0_1px_rgba(58,160,255,0.25),0_0_16px_4px_rgba(58,160,255,0.25)]'
  return (
    <div className={twMerge(
      'relative rounded-xl border border-white/12 bg-surface',
      glow,
      !reduced ? 'animate-[pulse-glow_2s_ease-in-out_infinite_alternate]' : '',
      className
    )} aria-label={label}>
      <style>{`
        @keyframes pulse-glow {
          0% { box-shadow: 0 0 0 2px rgba(58,160,255,0.25), 0 0 20px 6px rgba(58,160,255,0.25); }
          100% { box-shadow: 0 0 0 2px rgba(58,160,255,0.45), 0 0 40px 12px rgba(58,160,255,0.45); }
        }
      `}</style>
      {children}
    </div>
  )
}