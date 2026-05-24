import type { Metadata } from 'next'
import PageHero from '@/components/ui/PageHero'
import Timeline from '@/components/sections/roadmap/Timeline'

export const metadata: Metadata = {
  title: 'Roadmap',
  description:
    'The phased roadmap for VTPN — from protocol design through liquidity expansion and integration support.',
}

export default function RoadmapPage() {
  return (
    <>
      <PageHero
        eyebrow="Phases"
        title="Roadmap"
        description="A staged path from protocol design to liquidity expansion. No promises on dates — the protocol moves forward as engineering and treasury readiness allow."
        accent="violet"
      />
      <Timeline />
    </>
  )
}
