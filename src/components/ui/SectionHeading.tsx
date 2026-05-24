import { ReactNode } from 'react'

interface SectionHeadingProps {
  children: ReactNode
  subtitle?: string
  className?: string
  center?: boolean
  gradient?: boolean
}

export default function SectionHeading({
  children,
  subtitle,
  className = '',
  center = false,
  gradient = true,
}: SectionHeadingProps) {
  return (
    <div className={`${center ? 'text-center' : ''} ${className}`}>
      <h2
        className={`text-3xl md:text-4xl font-bold mb-4 ${gradient ? 'gradient-text' : 'text-[#F5F7FA]'}`}
      >
        {children}
      </h2>
      {subtitle && (
        <p className="text-[#9AA3B2] text-lg max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}
