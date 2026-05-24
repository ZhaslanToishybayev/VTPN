import type { Metadata } from 'next'
import Container from '@/components/layout/Container'
import Reveal from '@/components/ui/Reveal'
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
      <div className="pt-32 pb-16 bg-[#0D0F14] relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at 50% 0%, rgba(34,211,238,0.06) 0%, transparent 60%)',
          }}
        />
        <Container className="relative z-10">
            <p className="text-[#22D3EE] text-xs font-semibold uppercase tracking-widest mb-4">
              Optional
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-6">
              Ecosystem Support
            </h1>
            <p className="text-[#9AA3B2] text-xl max-w-2xl leading-relaxed">
              Optional incentive mechanisms that may support ecosystem participants. Not
              guaranteed. Applied at protocol discretion.
            </p>
        </Container>
      </div>

      <SupportTypes />
      <Philosophy />
    </>
  )
}
