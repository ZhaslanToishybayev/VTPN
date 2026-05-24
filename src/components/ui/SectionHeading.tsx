import { ReactNode } from 'react'

interface SectionHeadingProps {
  children: ReactNode
  subtitle?: string
  eyebrow?: string
  className?: string
  center?: boolean
  gradient?: boolean
}

export default function SectionHeading({
  children,
  subtitle,
  eyebrow,
  className = '',
  center = false,
  gradient = true,
}: SectionHeadingProps) {
  return (
    <div className={`${center ? 'text-center' : ''} ${className}`}>
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#7C5CFA]/25 bg-[#7C5CFA]/10 text-[#A78BFA] text-[11px] font-semibold tracking-[0.2em] uppercase mb-5`}
        >
          <span className="w-1 h-1 rounded-full bg-[#7C5CFA]" />
          {eyebrow}
        </div>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-[2.75rem] font-bold mb-4 ${
          gradient ? 'gradient-text' : 'gradient-text-soft'
        }`}
      >
        {children}
      </h2>
      {subtitle && (
        <p
          className={`text-[#9AA3B2] text-base md:text-lg max-w-2xl leading-relaxed ${
            center ? 'mx-auto' : ''
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
