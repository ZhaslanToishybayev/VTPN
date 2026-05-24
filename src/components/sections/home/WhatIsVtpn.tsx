import { Layers, ArrowLeftRight, Droplets, Workflow, Zap } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import SpotlightCard from '@/components/ui/SpotlightCard'
import Reveal from '@/components/ui/Reveal'
import Container from '@/components/layout/Container'
import { home } from '@/content/site'

export default function WhatIsVtpn() {
  const [settlement, intermediate, liquidity] = home.whatIs.items

  return (
    <section
      id="what-is-vtpn"
      className="relative py-24 md:py-36 border-y border-white/[0.04]"
    >
      {/* soft top fade */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
      />

      <Container>
        <Reveal>
          <SectionHeading
            center
            eyebrow="Protocol Overview"
            subtitle="VTPN is a functional layer inside integrated ecosystems — not an investment product"
          >
            What is <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 400 }}>VTPN</span>
          </SectionHeading>
        </Reveal>

        {/* bento grid: 6 cols × 4 rows on desktop */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-6 md:grid-rows-[auto_auto] gap-4 md:gap-5">
          {/* Settlement Unit — large left card */}
          <Reveal className="md:col-span-4 md:row-span-1">
            <SpotlightCard className="h-full p-7 md:p-9 overflow-hidden relative">
              <div
                aria-hidden
                className="absolute -top-20 -right-20 w-72 h-72 rounded-full pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse, rgba(124,92,250,0.25), transparent 70%)',
                  filter: 'blur(40px)',
                }}
              />
              <div className="relative">
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-11 h-11 rounded-[12px] flex items-center justify-center"
                    style={{
                      background: 'linear-gradient(135deg, #7C5CFA, #A78BFA)',
                      boxShadow: '0 8px 24px -6px rgba(124,92,250,0.6)',
                    }}
                  >
                    <Layers size={20} className="text-white" />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.22em] text-[#A78BFA] font-semibold">
                    Primary function
                  </span>
                </div>
                <h3 className="text-[#F5F7FA] font-bold text-2xl md:text-3xl mb-3 leading-tight">
                  {settlement.title}
                </h3>
                <p className="text-[#9AA3B2] text-base leading-relaxed max-w-xl">
                  {settlement.description}
                </p>

                {/* decorative flow lines */}
                <div className="mt-7 flex items-center gap-3 text-[#6B7280]">
                  <span className="font-mono text-xs px-2.5 py-1 rounded-[6px] bg-white/[0.04] border border-white/[0.06]">
                    app.A
                  </span>
                  <ArrowLeftRight size={14} className="text-[#7C5CFA]" />
                  <span className="font-mono text-xs px-2.5 py-1 rounded-[6px] gradient-bg text-white border border-white/10">
                    VTPN
                  </span>
                  <ArrowLeftRight size={14} className="text-[#7C5CFA]" />
                  <span className="font-mono text-xs px-2.5 py-1 rounded-[6px] bg-white/[0.04] border border-white/[0.06]">
                    app.B
                  </span>
                </div>
              </div>
            </SpotlightCard>
          </Reveal>

          {/* Intermediate Asset — tall right card */}
          <Reveal delay={0.08} className="md:col-span-2 md:row-span-2">
            <SpotlightCard className="h-full p-7 md:p-9 overflow-hidden relative">
              <div
                aria-hidden
                className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse, rgba(244,114,182,0.22), transparent 70%)',
                  filter: 'blur(40px)',
                }}
              />
              <div className="relative h-full flex flex-col">
                <div
                  className="w-11 h-11 rounded-[12px] flex items-center justify-center mb-5"
                  style={{
                    background: 'linear-gradient(135deg, #F472B6, #FB7185)',
                    boxShadow: '0 8px 24px -6px rgba(244,114,182,0.6)',
                  }}
                >
                  <ArrowLeftRight size={20} className="text-white" />
                </div>
                <h3 className="text-[#F5F7FA] font-bold text-xl mb-3 leading-tight">
                  {intermediate.title}
                </h3>
                <p className="text-[#9AA3B2] text-sm leading-relaxed mb-7">
                  {intermediate.description}
                </p>

                {/* stacked nodes visual */}
                <div className="mt-auto space-y-2">
                  {['Wallet', 'Marketplace', 'Service', 'Treasury'].map((node, i) => (
                    <div
                      key={node}
                      className="flex items-center gap-3 glass rounded-[10px] px-3 py-2"
                      style={{ opacity: 1 - i * 0.12 }}
                    >
                      <div
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ background: i === 0 ? '#F472B6' : '#7C5CFA' }}
                      />
                      <span className="text-[#C7C9D1] text-xs font-mono">{node}</span>
                      <span className="ml-auto text-[#6B7280] text-[10px] font-mono">
                        {String(0.1 + i * 0.07).slice(0, 4)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          </Reveal>

          {/* Shared Liquidity — wide bottom card */}
          <Reveal delay={0.16} className="md:col-span-4 md:row-span-1">
            <SpotlightCard className="h-full p-7 md:p-9 overflow-hidden relative">
              <div
                aria-hidden
                className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse, rgba(34,211,238,0.2), transparent 70%)',
                  filter: 'blur(40px)',
                }}
              />
              <div className="relative grid grid-cols-1 sm:grid-cols-5 gap-6 items-center">
                <div className="sm:col-span-3">
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className="w-11 h-11 rounded-[12px] flex items-center justify-center"
                      style={{
                        background: 'linear-gradient(135deg, #22D3EE, #67E8F9)',
                        boxShadow: '0 8px 24px -6px rgba(34,211,238,0.5)',
                      }}
                    >
                      <Droplets size={20} className="text-white" />
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.22em] text-[#22D3EE] font-semibold">
                      Shared resource
                    </span>
                  </div>
                  <h3 className="text-[#F5F7FA] font-bold text-2xl mb-3 leading-tight">
                    {liquidity.title}
                  </h3>
                  <p className="text-[#9AA3B2] text-sm leading-relaxed">
                    {liquidity.description}
                  </p>
                </div>

                {/* liquidity flow viz */}
                <div className="sm:col-span-2 flex flex-col gap-2">
                  {[
                    { label: 'USDC', w: 92 },
                    { label: 'USDT', w: 88 },
                    { label: 'BTC', w: 55 },
                    { label: 'ETH', w: 70 },
                    { label: 'BNB', w: 42 },
                  ].map((p) => (
                    <div key={p.label} className="flex items-center gap-3">
                      <span className="font-mono text-[10px] text-[#6B7280] w-10 uppercase tracking-wider">
                        {p.label}
                      </span>
                      <div className="flex-1 h-1.5 bg-white/[0.05] rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${p.w}%`,
                            background:
                              'linear-gradient(90deg, #22D3EE, #7C5CFA)',
                            boxShadow: '0 0 8px rgba(34,211,238,0.4)',
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          </Reveal>
        </div>

        {/* small companion stats row */}
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5">
          {[
            { icon: Workflow, label: 'No custom tokenomics required', value: 'Plug-in' },
            { icon: Zap, label: 'No staking, yield, or governance', value: 'Utility-only' },
            { icon: Layers, label: 'Shared across integrated apps', value: 'Multi-app' },
          ].map((s, i) => {
            const Icon = s.icon
            return (
              <Reveal key={s.label} delay={0.22 + i * 0.06}>
                <div className="glass card-hover gradient-border rounded-[14px] p-5 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-[10px] bg-white/[0.04] border border-white/[0.06] flex items-center justify-center flex-shrink-0">
                    <Icon size={16} className="text-[#A78BFA]" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] uppercase tracking-[0.2em] text-[#6B7280] mb-1">
                      {s.value}
                    </div>
                    <div className="text-[#F5F7FA] text-sm leading-tight">{s.label}</div>
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
