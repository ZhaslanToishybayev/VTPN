import { ReactNode } from 'react'

interface PillProps {
  children: ReactNode
  variant?: 'default' | 'violet' | 'cyan'
  size?: 'sm' | 'md'
}

export default function Pill({ children, variant = 'default', size = 'md' }: PillProps) {
  const styles = {
    default: 'bg-white/[0.06] text-[#9AA3B2] border border-white/10',
    violet: 'bg-[#7C5CFA]/15 text-[#A78BFA] border border-[#7C5CFA]/30',
    cyan: 'bg-[#22D3EE]/10 text-[#22D3EE] border border-[#22D3EE]/25',
  }

  const sizes = {
    sm: 'px-2.5 py-0.5 text-[11px]',
    md: 'px-3 py-1 text-xs',
  }

  return (
    <span
      className={`inline-flex items-center rounded-full font-medium ${styles[variant]} ${sizes[size]}`}
    >
      {children}
    </span>
  )
}
