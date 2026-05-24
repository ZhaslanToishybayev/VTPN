import { XCircle, Info } from 'lucide-react'
import GlassCard from '@/components/ui/GlassCard'
import Callout from '@/components/ui/Callout'
import Reveal from '@/components/ui/Reveal'
import Container from '@/components/layout/Container'
import { disclaimer } from '@/content/site'

export default function DisclaimerContent() {
  return (
    <section className="relative py-24 md:py-32">
      <Container>
        <div className="max-w-3xl mx-auto space-y-8">
          {/* legal notice */}
          <Reveal>
            <GlassCard hover>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-[11px] bg-gradient-to-br from-[#7C5CFA]/20 to-[#7C5CFA]/5 border border-[#7C5CFA]/30 flex items-center justify-center">
                  <Info size={20} className="text-[#A78BFA]" />
                </div>
                <h2 className="text-[#F5F7FA] font-bold text-xl">{disclaimer.legal.heading}</h2>
              </div>
              <p className="text-[#9AA3B2] leading-relaxed mb-6">{disclaimer.legal.intro}</p>
              <div>
                <p className="text-[#F5F7FA] font-semibold text-sm mb-4">It does not provide:</p>
                <ul className="space-y-2.5">
                  {disclaimer.legal.noRights.map((right, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-[#9AA3B2] text-sm glass rounded-[10px] px-4 py-2.5"
                    >
                      <XCircle size={14} className="text-[#A78BFA] flex-shrink-0" />
                      {right}
                    </li>
                  ))}
                </ul>
              </div>
            </GlassCard>
          </Reveal>

          {/* utility-only */}
          <Reveal delay={0.1}>
            <GlassCard hover>
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-11 h-11 rounded-[11px] gradient-bg flex items-center justify-center"
                  style={{ boxShadow: '0 8px 20px -6px rgba(124,92,250,0.6)' }}
                >
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
            <div className="relative glass rounded-[14px] p-6 overflow-hidden">
              <div
                aria-hidden
                className="absolute inset-0 opacity-40 pointer-events-none"
                style={{
                  background:
                    'radial-gradient(ellipse at center, rgba(245,166,35,0.06), transparent 60%)',
                }}
              />
              <p className="relative text-[#9AA3B2] text-sm leading-relaxed text-center">
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
