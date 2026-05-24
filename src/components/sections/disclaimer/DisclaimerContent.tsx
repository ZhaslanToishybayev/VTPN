import { AlertTriangle, XCircle, Info } from 'lucide-react'
import GlassCard from '@/components/ui/GlassCard'
import Callout from '@/components/ui/Callout'
import Reveal from '@/components/ui/Reveal'
import Container from '@/components/layout/Container'
import { disclaimer } from '@/content/site'

export default function DisclaimerContent() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="max-w-3xl mx-auto space-y-10">
          {/* legal notice */}
          <Reveal>
            <GlassCard>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-[8px] bg-[#6E56F8]/15 flex items-center justify-center">
                  <Info size={20} className="text-[#6E56F8]" />
                </div>
                <h2 className="text-[#F5F7FA] font-bold text-xl">{disclaimer.legal.heading}</h2>
              </div>
              <p className="text-[#9AA3B2] leading-relaxed mb-6">{disclaimer.legal.intro}</p>
              <div>
                <p className="text-[#F5F7FA] font-semibold text-sm mb-4">It does not provide:</p>
                <ul className="space-y-3">
                  {disclaimer.legal.noRights.map((right, i) => (
                    <li key={i} className="flex items-center gap-3 text-[#9AA3B2] text-sm">
                      <XCircle size={16} className="text-[#6E56F8] flex-shrink-0" />
                      {right}
                    </li>
                  ))}
                </ul>
              </div>
            </GlassCard>
          </Reveal>

          {/* utility-only */}
          <Reveal delay={0.1}>
            <GlassCard>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-[8px] gradient-bg flex items-center justify-center">
                  <span className="text-white font-bold text-sm font-mono">V</span>
                </div>
                <h2 className="text-[#F5F7FA] font-bold text-xl">{disclaimer.utility.heading}</h2>
              </div>
              <p className="text-[#9AA3B2] leading-relaxed">{disclaimer.utility.description}</p>
            </GlassCard>
          </Reveal>

          {/* risk notice */}
          <Reveal delay={0.2}>
            <Callout variant="warn" title={disclaimer.risk.heading}>
              {disclaimer.risk.description}
            </Callout>
          </Reveal>

          {/* summary box */}
          <Reveal delay={0.3}>
            <div className="glass rounded-[12px] p-6 border border-[#F5A623]/20">
              <p className="text-[#9AA3B2] text-sm leading-relaxed text-center">
                By accessing this site, you acknowledge that VTPN is a utility protocol token and
                not an investment product. All interactions with digital assets are voluntary and
                at your own risk.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
