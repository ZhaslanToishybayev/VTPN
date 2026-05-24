import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'
import Container from '@/components/layout/Container'
import { treasury } from '@/content/site'
import { Droplets, TrendingUp, Users } from 'lucide-react'

const icons = [Droplets, TrendingUp, Users]
const accents = [
  { from: '#7C5CFA', to: '#A78BFA' },
  { from: '#22D3EE', to: '#67E8F9' },
  { from: '#F472B6', to: '#FB7185' },
]

export default function TreasuryRole() {
  return (
    <section className="relative py-24 md:py-32 bg-[#0A0C11]/60 border-y border-white/[0.04]">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Function"
            subtitle="The treasury serves specific protocol functions"
          >
            {treasury.role.heading}
          </SectionHeading>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
          {treasury.role.items.map((item, i) => {
            const Icon = icons[i]
            const accent = accents[i]
            return (
              <Reveal key={item.title} delay={i * 0.1}>
                <div className="relative h-full glass card-hover gradient-border rounded-[16px] p-7 overflow-hidden">
                  <div
                    aria-hidden
                    className="absolute -top-14 -right-14 w-40 h-40 rounded-full opacity-25 pointer-events-none"
                    style={{
                      background: `radial-gradient(ellipse, ${accent.from}40, transparent 70%)`,
                      filter: 'blur(28px)',
                    }}
                  />
                  <div className="relative">
                    <div
                      className="w-11 h-11 rounded-[11px] flex items-center justify-center mb-5"
                      style={{
                        background: `linear-gradient(135deg, ${accent.from}, ${accent.to})`,
                        boxShadow: `0 8px 20px -6px ${accent.from}70`,
                      }}
                    >
                      <Icon size={20} className="text-white" />
                    </div>
                    <h3 className="text-[#F5F7FA] font-semibold mb-3">{item.title}</h3>
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
