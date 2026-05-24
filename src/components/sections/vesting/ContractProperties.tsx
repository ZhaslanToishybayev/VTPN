import { Shield, XOctagon, Code2, Hand } from 'lucide-react'
import GlassCard from '@/components/ui/GlassCard'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'
import Container from '@/components/layout/Container'
import { vesting } from '@/content/site'

const icons = [Shield, XOctagon, Code2, Hand]

export default function ContractProperties() {
  return (
    <section className="py-20 md:py-28 bg-[#0D0F14]">
      <Container>
        <Reveal>
          <SectionHeading subtitle="The vesting contract is immutable and fully on-chain enforced">
            {vesting.properties.heading}
          </SectionHeading>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {vesting.properties.items.map((item, i) => {
            const Icon = icons[i]
            return (
              <Reveal key={item.title} delay={i * 0.1}>
                <GlassCard hover className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-[8px] gradient-bg flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-[#F5F7FA] font-semibold mb-2">{item.title}</h3>
                    <p className="text-[#9AA3B2] text-sm leading-relaxed">{item.description}</p>
                  </div>
                </GlassCard>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
