import { XCircle } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'
import Container from '@/components/layout/Container'
import { home } from '@/content/site'

export default function CorePrinciples() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeading subtitle={home.principles.subtitle}>
            {home.principles.heading}
          </SectionHeading>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {home.principles.items.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.08}>
              <div className="glass rounded-[12px] p-5 flex items-center gap-4 card-hover">
                <div className="w-8 h-8 rounded-full bg-[#6E56F8]/15 border border-[#6E56F8]/25 flex items-center justify-center flex-shrink-0">
                  <XCircle size={16} className="text-[#6E56F8]" />
                </div>
                <span className="text-[#F5F7FA] font-medium text-sm">{item.label}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4}>
          <p className="mt-8 text-[#9AA3B2] text-sm text-center">
            It removes the need to design and maintain custom tokenomics.
          </p>
        </Reveal>
      </Container>
    </section>
  )
}
