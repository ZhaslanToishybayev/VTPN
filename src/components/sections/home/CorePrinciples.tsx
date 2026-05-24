import { X } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'
import Container from '@/components/layout/Container'
import { home } from '@/content/site'

export default function CorePrinciples() {
  return (
    <section className="relative py-24 md:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Design Principles"
            subtitle={home.principles.subtitle}
          >
            {home.principles.heading}
          </SectionHeading>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {home.principles.items.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.06}>
              <div className="group relative glass card-hover gradient-border rounded-[14px] p-4 pr-5 flex items-center gap-4 overflow-hidden">
                <div
                  className="relative flex-shrink-0 w-9 h-9 rounded-[10px] bg-gradient-to-br from-[#7C5CFA]/15 to-[#7C5CFA]/5 border border-[#7C5CFA]/25 flex items-center justify-center transition-colors group-hover:border-[#7C5CFA]/50"
                >
                  <X size={14} className="text-[#A78BFA]" strokeWidth={2.5} />
                </div>
                <span className="text-[#F5F7FA] font-medium text-sm leading-snug">
                  {item.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4}>
          <div className="mt-10 flex justify-center">
            <p className="inline-flex items-center gap-2 text-[#9AA3B2] text-sm text-center max-w-xl">
              <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#7C5CFA]/50" />
              It removes the need to design and maintain custom tokenomics
              <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#7C5CFA]/50" />
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
