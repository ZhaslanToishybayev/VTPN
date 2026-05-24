import type { Metadata } from 'next'
import Container from '@/components/layout/Container'
import Reveal from '@/components/ui/Reveal'
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
      <div className="pt-32 pb-16 bg-[#0D0F14] relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at 50% 0%, rgba(110,86,248,0.10) 0%, transparent 60%)',
          }}
        />
        <Container className="relative z-10">
            <p className="text-[#6E56F8] text-xs font-semibold uppercase tracking-widest mb-4">
              Long-term
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-6">
              Vesting
            </h1>
            <p className="text-[#9AA3B2] text-xl max-w-2xl leading-relaxed">
              10% of the total supply is allocated to long-term vesting for the protocol author,
              enforced via an immutable on-chain smart contract.
            </p>
        </Container>
      </div>

      <VestingOverview />
      <ContractProperties />
      <VestingSchedule />
    </>
  )
}
