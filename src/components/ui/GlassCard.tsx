import { ReactNode } from 'react'

interface GlassCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  padded?: boolean
  glow?: boolean
}

export default function GlassCard({
  children,
  className = '',
  hover = false,
  padded = true,
  glow = false,
}: GlassCardProps) {
  return (
    <div
      className={`relative glass rounded-[16px] ${padded ? 'p-6 md:p-8' : ''} ${
        hover ? 'card-hover gradient-border cursor-default' : ''
      } ${glow ? 'glow-violet' : ''} ${className}`}
    >
      {children}
    </div>
  )
}
