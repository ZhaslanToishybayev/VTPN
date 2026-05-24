import Link from 'next/link'
import { NAV_LINKS } from '@/lib/nav'
import { ADDRESSES } from '@/content/site'
import Container from './Container'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/8 mt-auto">
      <Container className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-10">
          {/* brand */}
          <div>
            <span
              className="gradient-text text-xl font-bold tracking-widest block mb-3"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              VTPN
            </span>
            <p className="text-[#9AA3B2] text-sm leading-relaxed">
              Utility settlement layer for startups without token infrastructure.
            </p>
          </div>

          {/* nav links */}
          <div>
            <p className="text-[#F5F7FA] text-xs font-semibold uppercase tracking-widest mb-4">
              Protocol
            </p>
            <ul className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#9AA3B2] text-sm hover:text-[#F5F7FA] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* treasury address */}
          <div>
            <p className="text-[#F5F7FA] text-xs font-semibold uppercase tracking-widest mb-4">
              Treasury
            </p>
            <a
              href={`https://etherscan.io/address/${ADDRESSES.treasury}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[#9AA3B2] text-xs hover:text-[#6E56F8] transition-colors break-all block"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              {ADDRESSES.treasury}
            </a>
          </div>
        </div>

        {/* bottom bar */}
        <div className="border-t border-white/8 pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <p className="text-[#9AA3B2] text-xs">
            © {year} VTPN Protocol. All rights reserved.
          </p>
          <p className="text-[#9AA3B2] text-xs max-w-lg text-right">
            VTPN is a utility protocol token and does not represent an investment product.{' '}
            <Link href="/disclaimer" className="text-[#6E56F8] hover:underline">
              Disclaimer
            </Link>
          </p>
        </div>
      </Container>
    </footer>
  )
}
