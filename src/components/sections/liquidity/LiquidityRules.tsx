import { CheckCircle2, Sparkles } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'
import Container from '@/components/layout/Container'
import { liquidity } from '@/content/site'

export default function LiquidityRules() {
  return (
    <section className="relative py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* expansion rules */}
          <div>
            <Reveal>
              <SectionHeading eyebrow="Rules">{liquidity.rules.heading}</SectionHeading>
            </Reveal>
            <div className="mt-8 space-y-3">
              {liquidity.rules.items.map((item, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <div className="flex gap-3 items-start glass gradient-border rounded-[12px] p-4 hover:border-[#22D3EE]/30 transition-colors">
                    <CheckCircle2
                      size={18}
                      className="text-[#22D3EE] flex-shrink-0 mt-0.5"
                    />
                    <p className="text-[#9AA3B2] text-sm leading-relaxed">{item}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* design intent */}
          <div>
            <Reveal>
              <SectionHeading eyebrow="Intent">{liquidity.intent.heading}</SectionHeading>
            </Reveal>
            <div className="mt-8 space-y-3">
              {liquidity.intent.items.map((item, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <div className="flex gap-3 items-start glass gradient-border rounded-[12px] p-4 hover:border-[#7C5CFA]/30 transition-colors">
                    <Sparkles
                      size={16}
                      className="text-[#A78BFA] flex-shrink-0 mt-1"
                    />
                    <p className="text-[#F5F7FA] font-medium text-sm leading-relaxed">{item}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
