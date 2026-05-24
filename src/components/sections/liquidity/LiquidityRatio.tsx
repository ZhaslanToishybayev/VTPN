import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'
import Container from '@/components/layout/Container'
import AddressBox from '@/components/ui/AddressBox'
import StatCard from '@/components/ui/StatCard'
import { liquidity, ADDRESSES } from '@/content/site'

export default function LiquidityRatio() {
  return (
    <section className="relative py-24 md:py-32 bg-[#0A0C11]/60 border-y border-white/[0.04]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* ratio */}
          <div>
            <Reveal>
              <SectionHeading
                eyebrow="Ratio"
                subtitle={liquidity.ratio.description}
              >
                {liquidity.ratio.heading}
              </SectionHeading>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-8 relative glass gradient-border rounded-[18px] p-8 overflow-hidden">
                <div
                  aria-hidden
                  className="absolute -bottom-20 -left-10 w-72 h-72 rounded-full opacity-20 pointer-events-none"
                  style={{
                    background:
                      'radial-gradient(ellipse, #7C5CFA 0%, transparent 70%)',
                    filter: 'blur(50px)',
                  }}
                />
                <div className="relative">
                  <div className="flex items-end gap-3 mb-6">
                    {/* stablecoin bars */}
                    {Array.from({ length: 5 }).map((_, i) => (
                      <div key={i} className="flex flex-col items-center gap-2">
                        <div
                          className="w-7 rounded-t-[5px]"
                          style={{
                            height: '90px',
                            background:
                              'linear-gradient(180deg, #A78BFA 0%, #7C5CFA 60%, #6E56F8 100%)',
                            boxShadow:
                              '0 0 16px rgba(124,92,250,0.5), inset 0 1px 0 rgba(255,255,255,0.2)',
                          }}
                        />
                        <span className="text-[#9AA3B2] text-[10px] uppercase tracking-wider">
                          stable
                        </span>
                      </div>
                    ))}
                    <div className="w-px h-24 bg-gradient-to-b from-transparent via-white/15 to-transparent self-end mb-6" />
                    {/* non-stable bar */}
                    <div className="flex flex-col items-center gap-2">
                      <div
                        className="w-7 rounded-t-[5px]"
                        style={{
                          height: '90px',
                          background:
                            'linear-gradient(180deg, #67E8F9 0%, #22D3EE 100%)',
                          boxShadow:
                            '0 0 16px rgba(34,211,238,0.4), inset 0 1px 0 rgba(255,255,255,0.2)',
                        }}
                      />
                      <span className="text-[#9AA3B2] text-[10px] uppercase tracking-wider">
                        other
                      </span>
                    </div>
                  </div>
                  <div className="flex items-baseline gap-3 flex-wrap">
                    <span className="text-5xl font-bold font-mono gradient-text leading-none tracking-tight">
                      5 : 1
                    </span>
                    <span className="text-[#9AA3B2] text-sm">
                      Stablecoin to non-stable allocation ratio
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-4 text-[#9AA3B2] text-xs leading-relaxed">
                {liquidity.ratio.note}
              </p>
            </Reveal>
          </div>

          {/* treasury */}
          <div className="space-y-6">
            <Reveal>
              <StatCard
                value="90,000,000"
                label="Initial Treasury"
                sublabel="VTPN allocated for liquidity"
              />
            </Reveal>
            <Reveal delay={0.1}>
              <AddressBox address={ADDRESSES.treasury} label="Treasury Address" />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  )
}
