import { ArrowRight } from 'lucide-react'
import Button from '@/components/ui/Button'
import Reveal from '@/components/ui/Reveal'
import Container from '@/components/layout/Container'
import { home } from '@/content/site'

export default function EcosystemTeaser() {
  return (
    <section className="relative py-24 md:py-32">
      <Container>
        <Reveal>
          <div className="relative glass-strong rounded-[24px] p-10 md:p-16 text-center overflow-hidden">
            {/* radial glow */}
            <div
              aria-hidden
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'radial-gradient(ellipse at center, rgba(124,86,250,0.12) 0%, transparent 65%)',
              }}
            />
            {/* corner accents */}
            <div
              aria-hidden
              className="absolute -top-32 -left-32 w-72 h-72 rounded-full opacity-30 pointer-events-none"
              style={{
                background:
                  'radial-gradient(ellipse, #7C5CFA 0%, transparent 70%)',
                filter: 'blur(60px)',
              }}
            />
            <div
              aria-hidden
              className="absolute -bottom-32 -right-32 w-72 h-72 rounded-full opacity-25 pointer-events-none"
              style={{
                background:
                  'radial-gradient(ellipse, #22D3EE 0%, transparent 70%)',
                filter: 'blur(60px)',
              }}
            />
            {/* subtle grid */}
            <div
              aria-hidden
              className="absolute inset-0 opacity-[0.025] pointer-events-none"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
                maskImage:
                  'radial-gradient(ellipse at center, black 20%, transparent 70%)',
              }}
            />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#7C5CFA]/30 bg-[#7C5CFA]/10 text-[#A78BFA] text-[11px] font-semibold tracking-[0.22em] uppercase mb-5">
                <span className="w-1 h-1 rounded-full bg-[#A78BFA]" />
                Optional
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold gradient-text-soft mb-5 leading-tight">
                {home.ecosystem.heading}
              </h2>
              <p className="text-[#9AA3B2] text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                {home.ecosystem.description}
              </p>
              <ul className="flex flex-wrap justify-center gap-2.5 mb-10">
                {home.ecosystem.items.map((item) => (
                  <li
                    key={item}
                    className="px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-[#C7C9D1] text-sm hover:border-[#7C5CFA]/40 hover:bg-[#7C5CFA]/10 transition-colors"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <Button href="/ecosystem" variant="primary" size="lg">
                Learn more <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
