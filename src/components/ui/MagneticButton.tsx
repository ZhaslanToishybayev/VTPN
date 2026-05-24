'use client'

import { ReactNode, useRef } from 'react'
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'
import Link from 'next/link'

interface MagneticButtonProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'ghost'
  size?: 'md' | 'lg'
  className?: string
  strength?: number
}

export default function MagneticButton({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'lg',
  className = '',
  strength = 0.22,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const reduced = useReducedMotion()

  const springConfig = { damping: 18, stiffness: 250, mass: 0.4 }
  const sx = useSpring(x, springConfig)
  const sy = useSpring(y, springConfig)

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reduced) return
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    x.set((e.clientX - cx) * strength)
    y.set((e.clientY - cy) * strength)
  }

  function handleLeave() {
    x.set(0)
    y.set(0)
  }

  const sizes = {
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-7 py-3.5 text-base',
  }
  const styles = {
    primary:
      'gradient-bg text-white shadow-[0_8px_24px_-8px_rgba(124,92,250,0.6)] hover:shadow-[0_14px_40px_-8px_rgba(124,92,250,0.85)]',
    ghost:
      'border border-white/15 text-[#F5F7FA] bg-white/[0.03] backdrop-blur-sm hover:border-[#7C5CFA]/50 hover:bg-white/[0.06]',
  }

  const inner = (
    <motion.span
      style={{ x: sx, y: sy }}
      className={`relative inline-flex items-center justify-center gap-2 font-semibold rounded-[12px] cursor-pointer overflow-hidden group transition-shadow duration-300 ${sizes[size]} ${styles[variant]} ${className}`}
    >
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
    </motion.span>
  )

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="inline-block"
    >
      {href ? (
        <Link href={href} onClick={onClick} className="inline-block">
          {inner}
        </Link>
      ) : (
        <button type="button" onClick={onClick} className="inline-block">
          {inner}
        </button>
      )}
    </div>
  )
}
