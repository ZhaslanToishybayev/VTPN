import type { Metadata } from 'next'
import PageHero from '@/components/ui/PageHero'
import SupportTypes from '@/components/sections/ecosystem/SupportTypes'
import Philosophy from '@/components/sections/ecosystem/Philosophy'

export const metadata: Metadata = {
  title: 'Ecosystem Support',
  description:
    'VTPN may support ecosystem participants through optional incentive mechanisms including integration grants and onboarding assistance.',
}

export default function EcosystemPage() {
  return (
    <>
      <PageHero
        eyebrow="Optional"
        title="Ecosystem Support"
        description="Optional incentive mechanisms that may support ecosystem participants. Not guaranteed. Applied at protocol discretion."
        accent="cyan"
      />
      <SupportTypes />
      <Philosophy />
    </>
  )
}
