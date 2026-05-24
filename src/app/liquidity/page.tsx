import type { Metadata } from 'next'
import Container from '@/components/layout/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'
import LiquidityArchitecture from '@/components/sections/liquidity/LiquidityArchitecture'
import LiquidityRatio from '@/components/sections/liquidity/LiquidityRatio'
import LiquidityRules from '@/components/sections/liquidity/LiquidityRules'

export const metadata: Metadata = {
  title: 'Liquidity Model',
  description:
    'VTPN uses a staged liquidity expansion model based on a treasury reserve with paired asset provisioning.',
}

export default function LiquidityPage() {
  return (
    <>
      <div className="pt-32 pb-16 bg-[#0D0F14] relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at 50% 0%, rgba(110,86,248,0.12) 0%, transparent 60%)',
          }}
        />
        <Container className="relative z-10">
            <p className="text-[#6E56F8] text-xs font-semibold uppercase tracking-widest mb-4">
              Protocol
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-6">
              Liquidity Model
            </h1>
            <p className="text-[#9AA3B2] text-xl max-w-2xl leading-relaxed">
              A staged liquidity expansion model based on a treasury reserve, deployed through
              paired asset provisioning.
            </p>
        </Container>
      </div>

      <LiquidityArchitecture />
      <LiquidityRatio />
      <LiquidityRules />
    </>
  )
}
