import { ShieldCheck } from 'lucide-react'
import GlassCard from '@/components/ui/GlassCard'
import SectionHeading from '@/components/ui/SectionHeading'
import AddressBox from '@/components/ui/AddressBox'
import StatCard from '@/components/ui/StatCard'
import Callout from '@/components/ui/Callout'
import Reveal from '@/components/ui/Reveal'
import Container from '@/components/layout/Container'
import { treasury, ADDRESSES } from '@/content/site'

export default function TreasuryOverview() {
  return (
    <section className="relative py-24 md:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Overview"
            subtitle={treasury.overview.description}
          >
            {treasury.overview.heading}
          </SectionHeading>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Reveal className="space-y-6">
            <StatCard
              value="90M"
              label="Initial Allocation"
              sublabel="VTPN held in treasury at launch"
            />
            <AddressBox address={ADDRESSES.treasury} label="Treasury Address" />
          </Reveal>

          <Reveal delay={0.1} className="space-y-4">
            <GlassCard hover>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-[10px] bg-gradient-to-br from-[#7C5CFA]/20 to-[#7C5CFA]/5 border border-[#7C5CFA]/30 flex items-center justify-center">
                  <ShieldCheck size={18} className="text-[#A78BFA]" />
                </div>
                <h3 className="text-[#F5F7FA] font-semibold">
                  {treasury.allocation.heading}
                </h3>
              </div>
              <p className="text-[#9AA3B2] text-sm leading-relaxed">
                {treasury.allocation.description}
              </p>
            </GlassCard>

            <Callout variant="info" title={treasury.transparency.heading}>
              {treasury.transparency.description}
            </Callout>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
