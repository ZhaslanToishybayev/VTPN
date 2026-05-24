import { ReactNode } from 'react'

interface PillProps {
  children: ReactNode
  variant?: 'default' | 'violet' | 'cyan'
}

export default function Pill({ children, variant = 'default' }: PillProps) {
  const styles = {
    default: 'bg-white/8 text-[#9AA3B2] border border-white/10',
    violet: 'bg-[#6E56F8]/15 text-[#6E56F8] border border-[#6E56F8]/30',
    cyan: 'bg-[#22D3EE]/10 text-[#22D3EE] border border-[#22D3EE]/25',
  }

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${styles[variant]}`}
    >
      {children}
    </span>
  )
}
