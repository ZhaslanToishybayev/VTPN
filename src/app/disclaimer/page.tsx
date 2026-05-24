import type { Metadata } from 'next'
import Container from '@/components/layout/Container'
import Reveal from '@/components/ui/Reveal'
import DisclaimerContent from '@/components/sections/disclaimer/DisclaimerContent'

export const metadata: Metadata = {
  title: 'Disclaimer',
  description:
    'VTPN is a utility protocol token and does not represent an investment product. Legal notice and risk information.',
}

export default function DisclaimerPage() {
  return (
    <>
      <div className="pt-32 pb-16 bg-[#0D0F14] relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at 50% 0%, rgba(245,166,35,0.06) 0%, transparent 60%)',
          }}
        />
        <Container className="relative z-10">
            <p className="text-[#F5A623] text-xs font-semibold uppercase tracking-widest mb-4">
              Legal
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F5F7FA] mb-6">
              Disclaimer
            </h1>
            <p className="text-[#9AA3B2] text-xl max-w-2xl leading-relaxed">
              Important legal and risk information regarding the VTPN utility protocol token.
            </p>
        </Container>
      </div>

      <DisclaimerContent />
    </>
  )
}
