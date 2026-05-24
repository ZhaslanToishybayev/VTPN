import { Quote } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'
import Container from '@/components/layout/Container'
import { ecosystem } from '@/content/site'

export default function Philosophy() {
  return (
    <section className="relative py-24 md:py-32 bg-[#0A0C11]/60 border-y border-white/[0.04]">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <SectionHeading center eyebrow="Philosophy">
              {ecosystem.philosophy.heading}
            </SectionHeading>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-[#9AA3B2] text-base md:text-lg leading-relaxed">
              {ecosystem.philosophy.description}
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-12 relative glass-strong rounded-[18px] p-8 md:p-10 overflow-hidden">
              <div
                aria-hidden
                className="absolute inset-0 opacity-50 pointer-events-none"
                style={{
                  background:
                    'radial-gradient(ellipse at top, rgba(124,92,250,0.12), transparent 70%)',
                }}
              />
              <Quote
                size={28}
                className="text-[#7C5CFA]/40 mb-4 mx-auto relative"
                strokeWidth={2}
              />
              <blockquote className="relative text-[#F5F7FA] text-lg md:text-xl font-medium italic leading-relaxed">
                &ldquo;Reduce friction for startups adopting shared infrastructure without requiring
                independent token systems.&rdquo;
              </blockquote>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
