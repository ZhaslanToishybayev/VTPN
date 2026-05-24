import type { Metadata } from 'next'
import PageHero from '@/components/ui/PageHero'
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
      <PageHero
        eyebrow="On-chain"
        title="Treasury"
        description="A protocol-controlled reserve used for liquidity provisioning and ecosystem operations. Fully transparent and verifiable on-chain."
        accent="cyan"
      />
      <TreasuryOverview />
      <TreasuryRole />
    </>
  )
}
