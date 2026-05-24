import type { Metadata } from 'next'
import Hero from '@/components/sections/home/Hero'
import WhatIsVtpn from '@/components/sections/home/WhatIsVtpn'
import CorePrinciples from '@/components/sections/home/CorePrinciples'
import SupplyOverview from '@/components/sections/home/SupplyOverview'
import EcosystemTeaser from '@/components/sections/home/EcosystemTeaser'

export const metadata: Metadata = {
  title: 'VTPN — Utility Settlement Layer',
  description:
    'A lightweight protocol token for value exchange, liquidity, and integration between early-stage digital products.',
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhatIsVtpn />
      <CorePrinciples />
      <SupplyOverview />
      <EcosystemTeaser />
    </>
  )
}
