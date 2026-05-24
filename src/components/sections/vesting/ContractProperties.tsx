import { Shield, XOctagon, Code2, Hand } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'
import Container from '@/components/layout/Container'
import { vesting } from '@/content/site'

const icons = [Shield, XOctagon, Code2, Hand]
const accents = [
  { from: '#7C5CFA', to: '#A78BFA' },
  { from: '#F472B6', to: '#FB7185' },
  { from: '#22D3EE', to: '#67E8F9' },
  { from: '#A78BFA', to: '#7C5CFA' },
]

export default function ContractProperties() {
  return (
    <section className="relative py-24 md:py-32 bg-[#0A0C11]/60 border-y border-white/[0.04]">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Contract Properties"
            subtitle="The vesting contract is immutable and fully on-chain enforced"
          >
            {vesting.properties.heading}
          </SectionHeading>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {vesting.properties.items.map((item, i) => {
            const Icon = icons[i]
            const accent = accents[i]
            return (
              <Reveal key={item.title} delay={i * 0.1}>
                <div className="relative h-full glass card-hover gradient-border rounded-[16px] p-6 flex gap-4 items-start overflow-hidden">
                  <div
                    className="flex-shrink-0 w-11 h-11 rounded-[11px] flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${accent.from}, ${accent.to})`,
                      boxShadow: `0 6px 18px -6px ${accent.from}70`,
                    }}
                  >
                    <Icon size={18} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-[#F5F7FA] font-semibold mb-2">{item.title}</h3>
                    <p className="text-[#9AA3B2] text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
