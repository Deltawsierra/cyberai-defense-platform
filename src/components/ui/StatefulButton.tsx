import { useState } from 'react'
type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  onAction: () => Promise<void>; label: string; successLabel?: string; errorLabel?: string;
}
export default function StatefulButton({ onAction, label, successLabel='Done', errorLabel='Error', ...rest }: Props) {
  const [state, setState] = useState<'idle'|'loading'|'success'|'error'>('idle')
  return (
    <button
      {...rest}
      aria-busy={state==='loading'} disabled={state==='loading'}
      onClick={async () => { try { setState('loading'); await onAction(); setState('success'); setTimeout(()=>setState('idle'), 1200) } catch { setState('error'); setTimeout(()=>setState('idle'), 1500) } }}
      className={`inline-flex items-center rounded-md px-4 py-2 text-sm font-medium
        ${state==='error' ? 'bg-danger text-white' : 'bg-primary text-black'} hover:shadow-glow focus-visible:outline-none`}
    >
      {state==='idle' && label}
      {state==='loading' && 'Working…'}
      {state==='success' && successLabel}
      {state==='error' && errorLabel}
    </button>
  )
}