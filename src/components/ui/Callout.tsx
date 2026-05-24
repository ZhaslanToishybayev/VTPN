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
      wrapper: 'bg-[#6E56F8]/10 border border-[#6E56F8]/25 rounded-[12px]',
      icon: <Info size={18} className="text-[#6E56F8] flex-shrink-0 mt-0.5" />,
      titleColor: 'text-[#6E56F8]',
    },
    warn: {
      wrapper: 'bg-[#F5A623]/10 border border-[#F5A623]/25 rounded-[12px]',
      icon: <AlertTriangle size={18} className="text-[#F5A623] flex-shrink-0 mt-0.5" />,
      titleColor: 'text-[#F5A623]',
    },
  }

  const s = styles[variant]

  return (
    <div className={`${s.wrapper} p-5 ${className}`}>
      <div className="flex gap-3">
        {s.icon}
        <div className="flex-1">
          {title && <p className={`font-semibold text-sm mb-2 ${s.titleColor}`}>{title}</p>}
          <div className="text-[#9AA3B2] text-sm leading-relaxed">{children}</div>
        </div>
      </div>
    </div>
  )
}
