import { ReactNode } from 'react'

interface GlassCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export default function GlassCard({ children, className = '', hover = false }: GlassCardProps) {
  return (
    <div
      className={`glass rounded-[16px] p-6 md:p-8 ${hover ? 'card-hover cursor-default' : ''} ${className}`}
    >
      {children}
    </div>
  )
}
