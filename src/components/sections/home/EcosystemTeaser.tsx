import { ArrowRight } from 'lucide-react'
import Button from '@/components/ui/Button'
import Reveal from '@/components/ui/Reveal'
import Container from '@/components/layout/Container'
import { home } from '@/content/site'

export default function EcosystemTeaser() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <Reveal>
          <div className="glass rounded-[20px] p-10 md:p-16 text-center relative overflow-hidden">
            {/* glow */}
            <div
              aria-hidden
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'radial-gradient(ellipse at center, rgba(110,86,248,0.08) 0%, transparent 70%)',
              }}
            />
            <div className="relative z-10">
              <span className="text-[#6E56F8] text-xs font-semibold uppercase tracking-widest block mb-4">
                Optional
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#F5F7FA] mb-4">
                {home.ecosystem.heading}
              </h2>
              <p className="text-[#9AA3B2] text-lg mb-6 max-w-2xl mx-auto leading-relaxed">
                {home.ecosystem.description}
              </p>
              <ul className="flex flex-wrap justify-center gap-3 mb-10">
                {home.ecosystem.items.map((item) => (
                  <li
                    key={item}
                    className="px-4 py-2 rounded-full border border-[#6E56F8]/25 bg-[#6E56F8]/10 text-[#9AA3B2] text-sm"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <Button href="/ecosystem" variant="ghost">
                Learn more <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
