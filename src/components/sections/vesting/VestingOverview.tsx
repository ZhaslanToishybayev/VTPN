import StatCard from '@/components/ui/StatCard'
import GlassCard from '@/components/ui/GlassCard'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'
import Container from '@/components/layout/Container'
import { vesting } from '@/content/site'
import { Lock } from 'lucide-react'

export default function VestingOverview() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeading subtitle={vesting.overview.description}>
            {vesting.overview.heading}
          </SectionHeading>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Reveal>
            <StatCard value="10%" label="Protocol Vesting" sublabel="of total supply" />
          </Reveal>
          <Reveal delay={0.1}>
            <StatCard value="10M" label="VTPN Tokens" sublabel="vested for protocol author" />
          </Reveal>
          <Reveal delay={0.2}>
            <GlassCard className="flex flex-col justify-center h-full">
              <div className="flex items-center gap-3 mb-3">
                <Lock size={20} className="text-[#6E56F8]" />
                <span className="text-[#F5F7FA] font-semibold">Smart Contract</span>
              </div>
              <p className="text-[#9AA3B2] text-sm leading-relaxed">
                {vesting.structure.description}
              </p>
            </GlassCard>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
