import type { Metadata } from 'next'
import PageHero from '@/components/ui/PageHero'
import DisclaimerContent from '@/components/sections/disclaimer/DisclaimerContent'

export const metadata: Metadata = {
  title: 'Disclaimer',
  description:
    'VTPN is a utility protocol token and does not represent an investment product. Legal notice and risk information.',
}

export default function DisclaimerPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Disclaimer"
        description="Important legal and risk information regarding the VTPN utility protocol token."
        accent="warn"
        gradientTitle={false}
      />
      <DisclaimerContent />
    </>
  )
}
