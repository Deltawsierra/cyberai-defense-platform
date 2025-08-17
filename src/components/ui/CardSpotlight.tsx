import { useRef } from 'react'
import { twMerge } from 'tailwind-merge'
type Props = { className?: string; children: React.ReactNode }
export default function CardSpotlight({ className, children }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  return (
    <div
      ref={ref}
      onMouseMove={(e) => {
        const el = ref.current; if (!el) return
        const rect = el.getBoundingClientRect()
        const x = e.clientX - rect.left; const y = e.clientY - rect.top
        el.style.setProperty('--mx', `${x}px`); el.style.setProperty('--my', `${y}px`)
      }}
      className={twMerge(
        'relative rounded-xl bg-surface p-6 border border-white/10',
        'before:absolute before:inset-0 before:rounded-xl',
        'before:bg-[radial-gradient(200px_200px_at_var(--mx,50%)_var(--my,50%),rgba(58,160,255,0.15),transparent_60%)]',
        'transition-[box-shadow,transform] will-change-transform',
        'hover:shadow-glow hover:-translate-y-[1px] focus-within:shadow-glow',
        className
      )}
    >
      {children}
    </div>
  )
}