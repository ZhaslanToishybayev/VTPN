import GlassCard from '@/components/ui/GlassCard'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'
import Container from '@/components/layout/Container'
import AddressBox from '@/components/ui/AddressBox'
import StatCard from '@/components/ui/StatCard'
import { liquidity, ADDRESSES, TOKEN } from '@/content/site'

export default function LiquidityRatio() {
  return (
    <section className="py-20 md:py-28 bg-[#0D0F14]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* ratio */}
          <div>
            <Reveal>
              <SectionHeading subtitle={liquidity.ratio.description}>
                {liquidity.ratio.heading}
              </SectionHeading>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-8 glass rounded-[16px] p-8">
                <div className="flex items-end gap-4 mb-6">
                  {/* stablecoin bars */}
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="flex flex-col items-center gap-2">
                      <div
                        className="w-8 rounded-t-[4px]"
                        style={{
                          height: '80px',
                          background: 'linear-gradient(180deg, #6E56F8, #8B72FF)',
                          boxShadow: '0 0 12px rgba(110,86,248,0.5)',
                        }}
                      />
                      <span className="text-[#9AA3B2] text-xs">stable</span>
                    </div>
                  ))}
                  <div className="w-px h-20 bg-white/10 self-end mb-6" />
                  {/* non-stable bar */}
                  <div className="flex flex-col items-center gap-2">
                    <div
                      className="w-8 rounded-t-[4px]"
                      style={{
                        height: '80px',
                        background: 'linear-gradient(180deg, #22D3EE, #67E8F9)',
                        boxShadow: '0 0 12px rgba(34,211,238,0.4)',
                      }}
                    />
                    <span className="text-[#9AA3B2] text-xs">other</span>
                  </div>
                </div>
                <div className="flex items-baseline gap-3">
                  <span
                    className="text-4xl font-bold font-mono gradient-text"
                  >
                    5 : 1
                  </span>
                  <span className="text-[#9AA3B2] text-sm">
                    Stablecoin to non-stable allocation ratio
                  </span>
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
