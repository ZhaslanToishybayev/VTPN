import SectionHeading from '@/components/ui/SectionHeading'
import GlassCard from '@/components/ui/GlassCard'
import Reveal from '@/components/ui/Reveal'
import Container from '@/components/layout/Container'
import { treasury } from '@/content/site'
import { Droplets, TrendingUp, Users } from 'lucide-react'

const icons = [Droplets, TrendingUp, Users]

export default function TreasuryRole() {
  return (
    <section className="py-20 md:py-28 bg-[#0D0F14]">
      <Container>
        <Reveal>
          <SectionHeading subtitle="The treasury serves specific protocol functions">
            {treasury.role.heading}
          </SectionHeading>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {treasury.role.items.map((item, i) => {
            const Icon = icons[i]
            return (
              <Reveal key={item.title} delay={i * 0.1}>
                <GlassCard hover className="h-full">
                  <div className="w-10 h-10 rounded-[8px] gradient-bg flex items-center justify-center mb-4">
                    <Icon size={18} className="text-white" />
                  </div>
                  <h3 className="text-[#F5F7FA] font-semibold mb-3">{item.title}</h3>
                  <p className="text-[#9AA3B2] text-sm leading-relaxed">{item.description}</p>
                </GlassCard>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
