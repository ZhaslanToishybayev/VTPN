import SupplyDonut from '@/components/charts/SupplyDonut'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'
import Container from '@/components/layout/Container'
import { TOKEN, home } from '@/content/site'

export default function SupplyOverview() {
  return (
    <section className="relative py-24 md:py-32 bg-[#0A0C11]/60 border-y border-white/[0.04]">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Tokenomics"
            subtitle="Total supply: 100,000,000 VTPN — fixed, transparent, on-chain"
          >
            {home.supply.heading}
          </SectionHeading>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* donut chart */}
          <Reveal className="flex justify-center">
            <div className="relative">
              <div
                aria-hidden
                className="absolute inset-0 rounded-full opacity-30"
                style={{
                  background:
                    'radial-gradient(ellipse, rgba(124,92,250,0.3) 0%, transparent 70%)',
                  filter: 'blur(40px)',
                  transform: 'scale(0.9)',
                }}
              />
              <div className="relative">
                <SupplyDonut
                  liquidityPct={TOKEN.liquidityPct}
                  vestingPct={TOKEN.vestingPct}
                  size={300}
                />
              </div>
            </div>
          </Reveal>

          {/* legend */}
          <div className="space-y-4">
            {home.supply.items.map((item, i) => (
              <Reveal key={item.label} delay={i * 0.12}>
                <div className="glass card-hover gradient-border rounded-[14px] p-5 md:p-6">
                  <div className="flex items-start gap-4">
                    <div
                      className="w-2.5 h-2.5 rounded-full flex-shrink-0 mt-2"
                      style={{
                        backgroundColor: item.color,
                        boxShadow: `0 0 12px ${item.color}A0`,
                      }}
                    />
                    <div className="flex-1">
                      <div className="flex items-baseline justify-between mb-2 gap-3">
                        <span className="text-[#F5F7FA] font-semibold">
                          {item.label}
                        </span>
                        <span
                          className="font-bold text-2xl font-mono tracking-tight"
                          style={{ color: item.color }}
                        >
                          {item.pct}%
                        </span>
                      </div>
                      <span className="text-[#9AA3B2] text-sm font-mono">
                        {item.amount}
                      </span>
                      {/* progress bar */}
                      <div className="mt-3.5 h-1 bg-white/[0.06] rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-500"
                          style={{
                            width: `${item.pct}%`,
                            background: `linear-gradient(90deg, ${item.color}, ${item.color}CC)`,
                            boxShadow: `0 0 10px ${item.color}80`,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}

            <Reveal delay={0.36}>
              <div className="relative glass rounded-[14px] p-6 text-center overflow-hidden">
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-50 pointer-events-none"
                  style={{
                    background:
                      'radial-gradient(ellipse at center, rgba(124,92,250,0.12), transparent 70%)',
                  }}
                />
                <div className="relative">
                  <span className="text-[#9AA3B2] text-[10px] uppercase tracking-[0.25em] block mb-2">
                    Total Supply
                  </span>
                  <span
                    className="gradient-text text-3xl md:text-4xl font-bold font-mono"
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    100,000,000
                  </span>
                  <span className="text-[#9AA3B2] ml-2 text-sm font-mono">
                    VTPN
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  )
}
