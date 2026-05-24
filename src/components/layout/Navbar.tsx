'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '@/lib/nav'
import Container from './Container'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const drawerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass border-b border-white/8' : 'bg-transparent'
        }`}
      >
        <Container>
          <nav className="flex items-center justify-between h-16 md:h-18">
            <Link href="/" className="flex items-center gap-2 group">
              <span
                className="gradient-text text-xl font-bold tracking-widest"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                VTPN
              </span>
            </Link>

            {/* desktop nav */}
            <ul className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`px-4 py-2 rounded-[8px] text-sm font-medium transition-all duration-150 ${
                        isActive
                          ? 'text-[#F5F7FA] bg-white/8'
                          : 'text-[#9AA3B2] hover:text-[#F5F7FA] hover:bg-white/5'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              })}
            </ul>

            {/* mobile hamburger */}
            <button
              className="md:hidden p-2 rounded-[8px] text-[#9AA3B2] hover:text-[#F5F7FA] hover:bg-white/8 transition-colors"
              onClick={() => setOpen(true)}
              aria-label="Open navigation"
              aria-expanded={open}
            >
              <Menu size={20} />
            </button>
          </nav>
        </Container>
      </header>

      {/* mobile drawer backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
          onClick={() => setOpen(false)}
          aria-hidden
        />
      )}

      {/* mobile drawer */}
      <div
        ref={drawerRef}
        className={`fixed top-0 right-0 bottom-0 z-50 w-72 glass border-l border-white/8 md:hidden transition-transform duration-300 ease-in-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-modal={open}
        role="dialog"
      >
        <div className="flex items-center justify-between p-5 border-b border-white/8">
          <span
            className="gradient-text text-xl font-bold tracking-widest"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            VTPN
          </span>
          <button
            onClick={() => setOpen(false)}
            className="p-2 rounded-[8px] text-[#9AA3B2] hover:text-[#F5F7FA] hover:bg-white/8 transition-colors"
            aria-label="Close navigation"
          >
            <X size={20} />
          </button>
        </div>
        <nav className="p-4">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block px-4 py-3 rounded-[8px] text-sm font-medium transition-all duration-150 ${
                      isActive
                        ? 'text-[#F5F7FA] bg-white/10'
                        : 'text-[#9AA3B2] hover:text-[#F5F7FA] hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </>
  )
}
