import Link from 'next/link'
import { NAV_LINKS } from '@/lib/nav'
import { ADDRESSES } from '@/content/site'
import Container from './Container'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative mt-auto">
      {/* top divider */}
      <div className="divider-gradient" />

      {/* soft backdrop glow */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-64 pointer-events-none opacity-50"
        style={{
          background:
            'radial-gradient(ellipse at 50% 0%, rgba(124,92,250,0.08), transparent 60%)',
        }}
      />

      <Container className="relative py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 mb-12">
          {/* brand */}
          <div className="md:col-span-5">
            <span
              className="gradient-text text-2xl font-bold tracking-[0.18em] block mb-4"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              VTPN
            </span>
            <p className="text-[#9AA3B2] text-sm leading-relaxed max-w-sm">
              Utility settlement layer for startups without token infrastructure.
              Lightweight by design, treasury-backed by principle.
            </p>
            <div className="mt-5 flex items-center gap-3 text-xs text-[#6B7280]">
              <span className="inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE] animate-pulse" />
                Live on Ethereum
              </span>
            </div>
          </div>

          {/* nav links */}
          <div className="md:col-span-3">
            <p className="text-[#F5F7FA] text-[11px] font-semibold uppercase tracking-[0.22em] mb-4">
              Protocol
            </p>
            <ul className="flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#9AA3B2] text-sm hover:text-[#F5F7FA] transition-colors inline-flex items-center group"
                  >
                    <span className="w-0 h-px bg-[#7C5CFA] transition-all duration-200 group-hover:w-3 group-hover:mr-2" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* treasury address */}
          <div className="md:col-span-4">
            <p className="text-[#F5F7FA] text-[11px] font-semibold uppercase tracking-[0.22em] mb-4">
              Treasury
            </p>
            <a
              href={`https://etherscan.io/address/${ADDRESSES.treasury}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group block glass rounded-[10px] px-3 py-2.5 hover:border-[#7C5CFA]/40 transition-colors"
            >
              <span
                className="font-mono text-[#9AA3B2] group-hover:text-[#F5F7FA] text-[11px] break-all transition-colors"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                {ADDRESSES.treasury}
              </span>
            </a>
          </div>
        </div>

        {/* bottom bar */}
        <div className="divider-gradient mb-6" />
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <p className="text-[#6B7280] text-xs">
            © {year} VTPN Protocol. All rights reserved.
          </p>
          <p className="text-[#6B7280] text-xs max-w-lg md:text-right">
            VTPN is a utility protocol token and does not represent an investment product.{' '}
            <Link
              href="/disclaimer"
              className="text-[#A78BFA] hover:text-[#22D3EE] transition-colors"
            >
              Disclaimer →
            </Link>
          </p>
        </div>
      </Container>
    </footer>
  )
}
