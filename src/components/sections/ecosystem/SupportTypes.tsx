import { Layers, Users, Zap } from 'lucide-react'
import GlassCard from '@/components/ui/GlassCard'
import SectionHeading from '@/components/ui/SectionHeading'
import Callout from '@/components/ui/Callout'
import Reveal from '@/components/ui/Reveal'
import Container from '@/components/layout/Container'
import { ecosystem } from '@/content/site'

const icons = { layers: Layers, users: Users, zap: Zap }

export default function SupportTypes() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeading subtitle={ecosystem.overview.description}>
            {ecosystem.types.heading}
          </SectionHeading>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {ecosystem.types.items.map((item, i) => {
            const Icon = icons[item.icon as keyof typeof icons]
            return (
              <Reveal key={item.title} delay={i * 0.1}>
                <GlassCard hover className="h-full">
                  <div className="w-12 h-12 rounded-[10px] gradient-bg flex items-center justify-center mb-5">
                    <Icon size={22} className="text-white" />
                  </div>
                  <h3 className="text-[#F5F7FA] font-semibold text-lg mb-3">{item.title}</h3>
                  <p className="text-[#9AA3B2] text-sm leading-relaxed">{item.description}</p>
                </GlassCard>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={0.3}>
          <Callout variant="warn" title={ecosystem.notice.heading} className="mt-10">
            <ul className="space-y-1">
              {ecosystem.notice.items.map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-[#F5A623]">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </Callout>
        </Reveal>
      </Container>
    </section>
  )
}
