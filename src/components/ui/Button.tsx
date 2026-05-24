import Link from 'next/link'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'ghost'
  href?: string
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit'
}

export default function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  type = 'button',
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 font-semibold text-sm rounded-[10px] px-6 py-3 transition-all duration-200 cursor-pointer'

  const styles = {
    primary:
      'gradient-bg text-white shadow-lg hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]',
    ghost:
      'border border-white/20 text-[#F5F7FA] hover:border-[#6E56F8]/60 hover:bg-white/5 hover:scale-[1.02] active:scale-[0.98]',
  }

  const classes = `${base} ${styles[variant]} ${className}`

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
