import type { Metadata } from 'next'
import Container from '@/components/layout/Container'
import Reveal from '@/components/ui/Reveal'
import TreasuryOverview from '@/components/sections/treasury/TreasuryOverview'
import TreasuryRole from '@/components/sections/treasury/TreasuryRole'

export const metadata: Metadata = {
  title: 'Treasury',
  description:
    'The VTPN treasury is a protocol-controlled reserve used for liquidity provisioning and ecosystem operations.',
}

export default function TreasuryPage() {
  return (
    <>
      <div className="pt-32 pb-16 bg-[#0D0F14] relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at 50% 0%, rgba(34,211,238,0.08) 0%, transparent 60%)',
          }}
        />
        <Container className="relative z-10">
            <p className="text-[#22D3EE] text-xs font-semibold uppercase tracking-widest mb-4">
              On-chain
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-6">
              Treasury
            </h1>
            <p className="text-[#9AA3B2] text-xl max-w-2xl leading-relaxed">
              A protocol-controlled reserve used for liquidity provisioning and ecosystem
              operations. Fully transparent and verifiable on-chain.
            </p>
        </Container>
      </div>

      <TreasuryOverview />
      <TreasuryRole />
    </>
  )
}
