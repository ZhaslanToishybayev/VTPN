import { ReactNode } from 'react'
import { AlertTriangle, Info } from 'lucide-react'

interface CalloutProps {
  children: ReactNode
  variant?: 'info' | 'warn'
  title?: string
  className?: string
}

export default function Callout({ children, variant = 'info', title, className = '' }: CalloutProps) {
  const styles = {
    info: {
      wrapper:
        'bg-gradient-to-br from-[#7C5CFA]/[0.12] to-[#7C5CFA]/[0.04] border border-[#7C5CFA]/25 rounded-[14px]',
      iconWrap: 'bg-[#7C5CFA]/15 border border-[#7C5CFA]/30',
      icon: <Info size={16} className="text-[#A78BFA]" />,
      titleColor: 'text-[#A78BFA]',
    },
    warn: {
      wrapper:
        'bg-gradient-to-br from-[#F5A623]/[0.12] to-[#F5A623]/[0.04] border border-[#F5A623]/25 rounded-[14px]',
      iconWrap: 'bg-[#F5A623]/15 border border-[#F5A623]/30',
      icon: <AlertTriangle size={16} className="text-[#F5A623]" />,
      titleColor: 'text-[#F5A623]',
    },
  }

  const s = styles[variant]

  return (
    <div className={`${s.wrapper} p-5 ${className}`}>
      <div className="flex gap-4">
        <div
          className={`flex-shrink-0 w-8 h-8 rounded-[8px] ${s.iconWrap} flex items-center justify-center`}
        >
          {s.icon}
        </div>
        <div className="flex-1 min-w-0">
          {title && <p className={`font-semibold text-sm mb-2 ${s.titleColor}`}>{title}</p>}
          <div className="text-[#C7C9D1] text-sm leading-relaxed">{children}</div>
        </div>
      </div>
    </div>
  )
}
