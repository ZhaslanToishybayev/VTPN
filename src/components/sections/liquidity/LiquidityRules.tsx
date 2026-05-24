import { CheckCircle2 } from 'lucide-react'
import GlassCard from '@/components/ui/GlassCard'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'
import Container from '@/components/layout/Container'
import { liquidity } from '@/content/site'

export default function LiquidityRules() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* expansion rules */}
          <div>
            <Reveal>
              <SectionHeading>{liquidity.rules.heading}</SectionHeading>
            </Reveal>
            <div className="mt-8 space-y-4">
              {liquidity.rules.items.map((item, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="flex gap-3 items-start glass rounded-[12px] p-4">
                    <CheckCircle2 size={18} className="text-[#6E56F8] flex-shrink-0 mt-0.5" />
                    <p className="text-[#9AA3B2] text-sm leading-relaxed">{item}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* design intent */}
          <div>
            <Reveal>
              <SectionHeading>{liquidity.intent.heading}</SectionHeading>
            </Reveal>
            <div className="mt-8 space-y-4">
              {liquidity.intent.items.map((item, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <GlassCard className="py-4 px-5">
                    <p className="text-[#F5F7FA] font-medium text-sm">{item}</p>
                  </GlassCard>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
