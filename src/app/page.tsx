import type { Metadata } from 'next'
import Hero from '@/components/sections/home/Hero'
import MetricsMarquee from '@/components/sections/home/MetricsMarquee'
import WhatIsVtpn from '@/components/sections/home/WhatIsVtpn'
import CorePrinciples from '@/components/sections/home/CorePrinciples'
import SupplyOverview from '@/components/sections/home/SupplyOverview'
import EcosystemTeaser from '@/components/sections/home/EcosystemTeaser'
import Faq from '@/components/sections/home/Faq'

export const metadata: Metadata = {
  title: 'VTPN — Utility Settlement Layer',
  description:
    'A lightweight protocol token for value exchange, liquidity, and integration between early-stage digital products.',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'VTPN Protocol',
  url: 'https://vtpn.io',
  description:
    'A lightweight protocol token for value exchange, liquidity, and integration between early-stage digital products.',
  sameAs: [],
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <MetricsMarquee />
      <WhatIsVtpn />
      <CorePrinciples />
      <SupplyOverview />
      <Faq />
      <EcosystemTeaser />
    </>
  )
}
