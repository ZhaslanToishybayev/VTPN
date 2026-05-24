import type { Metadata } from 'next'
import PageHero from '@/components/ui/PageHero'
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
      <PageHero
        eyebrow="Protocol"
        title="Liquidity Model"
        description="A staged liquidity expansion model based on a treasury reserve, deployed through paired asset provisioning."
        accent="violet"
      />
      <LiquidityArchitecture />
      <LiquidityRatio />
      <LiquidityRules />
    </>
  )
}
