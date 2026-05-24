import StatCard from '@/components/ui/StatCard'
import GlassCard from '@/components/ui/GlassCard'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'
import Container from '@/components/layout/Container'
import { vesting } from '@/content/site'
import { Lock } from 'lucide-react'

export default function VestingOverview() {
  return (
    <section className="relative py-24 md:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Vesting"
            subtitle={vesting.overview.description}
          >
            {vesting.overview.heading}
          </SectionHeading>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
          <Reveal>
            <StatCard value="10%" label="Protocol Vesting" sublabel="of total supply" />
          </Reveal>
          <Reveal delay={0.1}>
            <StatCard value="10M" label="VTPN Tokens" sublabel="vested for protocol author" />
          </Reveal>
          <Reveal delay={0.2}>
            <GlassCard hover className="flex flex-col justify-center h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-[10px] bg-gradient-to-br from-[#7C5CFA]/20 to-[#7C5CFA]/5 border border-[#7C5CFA]/30 flex items-center justify-center">
                  <Lock size={18} className="text-[#A78BFA]" />
                </div>
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
