import type { Metadata } from 'next'
import PageHero from '@/components/ui/PageHero'
import VestingOverview from '@/components/sections/vesting/VestingOverview'
import ContractProperties from '@/components/sections/vesting/ContractProperties'
import VestingSchedule from '@/components/sections/vesting/VestingSchedule'

export const metadata: Metadata = {
  title: 'Vesting',
  description:
    '10% of the total VTPN supply is allocated to long-term vesting via an immutable smart contract.',
}

export default function VestingPage() {
  return (
    <>
      <PageHero
        eyebrow="Long-term"
        title="Vesting"
        description="10% of the total supply is allocated to long-term vesting for the protocol author, enforced via an immutable on-chain smart contract."
        accent="violet"
      />
      <VestingOverview />
      <ContractProperties />
      <VestingSchedule />
    </>
  )
}
