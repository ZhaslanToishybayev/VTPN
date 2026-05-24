'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'

interface AnimatedNumberProps {
  value: number
  format?: (n: number) => string
  duration?: number
  className?: string
}

export default function AnimatedNumber({
  value,
  format = (n) => Math.round(n).toLocaleString('en-US'),
  className = '',
}: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const reduced = useReducedMotion()

  const mv = useMotionValue(0)
  const spring = useSpring(mv, { duration: 1400, bounce: 0 })
  const [display, setDisplay] = useState(format(0))

  useEffect(() => {
    if (!inView) return
    if (reduced) {
      setDisplay(format(value))
      return
    }
    mv.set(value)
  }, [inView, value, mv, format, reduced])

  useEffect(() => {
    const unsub = spring.on('change', (v) => setDisplay(format(v)))
    return unsub
  }, [spring, format])

  return (
    <span ref={ref} className={className} style={{ fontVariantNumeric: 'tabular-nums' }}>
      {display}
    </span>
  )
}
