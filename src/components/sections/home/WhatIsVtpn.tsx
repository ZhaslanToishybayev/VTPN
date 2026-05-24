import { Layers, ArrowLeftRight, Droplets } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'
import Container from '@/components/layout/Container'
import { home } from '@/content/site'

const icons = [Layers, ArrowLeftRight, Droplets]
const accents = [
  { from: '#7C5CFA', to: '#A78BFA' },
  { from: '#22D3EE', to: '#67E8F9' },
  { from: '#F472B6', to: '#FB7185' },
]

export default function WhatIsVtpn() {
  return (
    <section
      id="what-is-vtpn"
      className="relative py-24 md:py-32 bg-[#0A0C11]/60 border-y border-white/[0.04]"
    >
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
      />
      <Container>
        <Reveal>
          <SectionHeading
            center
            eyebrow="Protocol Overview"
            subtitle="VTPN is used as a functional layer inside integrated ecosystems"
          >
            {home.whatIs.heading}
          </SectionHeading>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-14">
          {home.whatIs.items.map((item, i) => {
            const Icon = icons[i]
            const accent = accents[i]
            return (
              <Reveal key={item.title} delay={i * 0.1}>
                <div className="relative h-full glass card-hover gradient-border rounded-[18px] p-7 md:p-8 overflow-hidden">
                  <div
                    aria-hidden
                    className="absolute -top-16 -right-16 w-44 h-44 rounded-full opacity-30 pointer-events-none"
                    style={{
                      background: `radial-gradient(ellipse, ${accent.from}40, transparent 70%)`,
                      filter: 'blur(30px)',
                    }}
                  />
                  <div className="relative">
                    <div
                      className="w-12 h-12 rounded-[12px] flex items-center justify-center mb-6 shadow-lg"
                      style={{
                        background: `linear-gradient(135deg, ${accent.from}, ${accent.to})`,
                        boxShadow: `0 8px 24px -6px ${accent.from}80`,
                      }}
                    >
                      <Icon size={22} className="text-white" strokeWidth={2} />
                    </div>
                    <h3 className="text-[#F5F7FA] font-semibold text-lg mb-3">
                      {item.title}
                    </h3>
                    <p className="text-[#9AA3B2] text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
