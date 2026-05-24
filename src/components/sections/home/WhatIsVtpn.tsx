import { Layers, ArrowLeftRight, Droplets } from 'lucide-react'
import GlassCard from '@/components/ui/GlassCard'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'
import Container from '@/components/layout/Container'
import { home } from '@/content/site'

const icons = [Layers, ArrowLeftRight, Droplets]

export default function WhatIsVtpn() {
  return (
    <section id="what-is-vtpn" className="py-20 md:py-28 bg-[#0D0F14]">
      <Container>
        <Reveal>
          <SectionHeading center subtitle="VTPN is used as a functional layer inside integrated ecosystems">
            {home.whatIs.heading}
          </SectionHeading>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {home.whatIs.items.map((item, i) => {
            const Icon = icons[i]
            return (
              <Reveal key={item.title} delay={i * 0.1}>
                <GlassCard hover className="h-full">
                  <div className="w-12 h-12 rounded-[10px] gradient-bg flex items-center justify-center mb-5">
                    <Icon size={22} className="text-white" />
                  </div>
                  <h3 className="text-[#F5F7FA] font-semibold text-lg mb-3">{item.title}</h3>
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
