import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'
import Container from '@/components/layout/Container'
import { ecosystem } from '@/content/site'

export default function Philosophy() {
  return (
    <section className="py-20 md:py-28 bg-[#0D0F14]">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <SectionHeading center>
              {ecosystem.philosophy.heading}
            </SectionHeading>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-[#9AA3B2] text-lg leading-relaxed">
              {ecosystem.philosophy.description}
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10 glass rounded-[16px] p-8">
              <blockquote className="text-[#F5F7FA] text-xl font-medium italic leading-relaxed">
                "Reduce friction for startups adopting shared infrastructure without requiring
                independent token systems."
              </blockquote>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
