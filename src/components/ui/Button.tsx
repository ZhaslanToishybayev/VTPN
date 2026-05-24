import Link from 'next/link'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'ghost' | 'subtle'
  href?: string
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit'
  size?: 'md' | 'lg'
}

export default function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  type = 'button',
  size = 'md',
}: ButtonProps) {
  const sizes = {
    md: 'px-6 py-3 text-sm',
    lg: 'px-7 py-3.5 text-base',
  }

  const base = `relative inline-flex items-center justify-center gap-2 font-semibold rounded-[10px] transition-all duration-200 cursor-pointer overflow-hidden group ${sizes[size]}`

  const styles = {
    primary:
      'gradient-bg text-white shadow-[0_8px_24px_-8px_rgba(124,92,250,0.6)] hover:shadow-[0_12px_36px_-8px_rgba(124,92,250,0.8)] hover:-translate-y-0.5 active:translate-y-0',
    ghost:
      'border border-white/15 text-[#F5F7FA] bg-white/[0.03] backdrop-blur-sm hover:border-[#7C5CFA]/50 hover:bg-white/[0.06] hover:-translate-y-0.5 active:translate-y-0',
    subtle:
      'text-[#9AA3B2] hover:text-[#F5F7FA] hover:bg-white/[0.05]',
  }

  const classes = `${base} ${styles[variant]} ${className}`

  const inner = (
    <>
      {variant === 'primary' && (
        <span
          aria-hidden
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background:
              'linear-gradient(135deg, rgba(255,255,255,0.18) 0%, transparent 50%)',
          }}
        />
      )}
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </>
  )

  if (href) {
    return (
      <Link href={href} className={classes}>
        {inner}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {inner}
    </button>
  )
}
