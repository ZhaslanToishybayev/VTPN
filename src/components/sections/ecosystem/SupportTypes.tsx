import { Layers, Users, Zap } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import Callout from '@/components/ui/Callout'
import Reveal from '@/components/ui/Reveal'
import Container from '@/components/layout/Container'
import { ecosystem } from '@/content/site'

const icons = { layers: Layers, users: Users, zap: Zap }
const accents = [
  { from: '#7C5CFA', to: '#A78BFA' },
  { from: '#22D3EE', to: '#67E8F9' },
  { from: '#F472B6', to: '#FB7185' },
]

export default function SupportTypes() {
  return (
    <section className="relative py-24 md:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Support"
            subtitle={ecosystem.overview.description}
          >
            {ecosystem.types.heading}
          </SectionHeading>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
          {ecosystem.types.items.map((item, i) => {
            const Icon = icons[item.icon as keyof typeof icons]
            const accent = accents[i % accents.length]
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
                      className="w-12 h-12 rounded-[12px] flex items-center justify-center mb-5"
                      style={{
                        background: `linear-gradient(135deg, ${accent.from}, ${accent.to})`,
                        boxShadow: `0 8px 20px -6px ${accent.from}80`,
                      }}
                    >
                      <Icon size={20} className="text-white" />
                    </div>
                    <h3 className="text-[#F5F7FA] font-semibold text-lg mb-3">{item.title}</h3>
                    <p className="text-[#9AA3B2] text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={0.3}>
          <Callout variant="warn" title={ecosystem.notice.heading} className="mt-12">
            <ul className="space-y-1.5">
              {ecosystem.notice.items.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#F5A623] mt-0.5">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Callout>
        </Reveal>
      </Container>
    </section>
  )
}
