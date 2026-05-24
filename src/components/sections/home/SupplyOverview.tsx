import SupplyDonut from '@/components/charts/SupplyDonut'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'
import Container from '@/components/layout/Container'
import { TOKEN, home } from '@/content/site'

export default function SupplyOverview() {
  return (
    <section className="py-20 md:py-28 bg-[#0D0F14]">
      <Container>
        <Reveal>
          <SectionHeading subtitle="Total supply: 100,000,000 VTPN">
            {home.supply.heading}
          </SectionHeading>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* donut chart */}
          <Reveal className="flex justify-center">
            <div className="relative">
              <SupplyDonut
                liquidityPct={TOKEN.liquidityPct}
                vestingPct={TOKEN.vestingPct}
                size={280}
              />
            </div>
          </Reveal>

          {/* legend */}
          <div className="space-y-5">
            {home.supply.items.map((item, i) => (
              <Reveal key={item.label} delay={i * 0.15}>
                <div className="glass rounded-[12px] p-6 card-hover">
                  <div className="flex items-start gap-4">
                    <div
                      className="w-3 h-3 rounded-full flex-shrink-0 mt-1.5"
                      style={{ backgroundColor: item.color }}
                    />
                    <div className="flex-1">
                      <div className="flex items-baseline justify-between mb-2">
                        <span className="text-[#F5F7FA] font-semibold">{item.label}</span>
                        <span className="gradient-text font-bold text-2xl font-mono">
                          {item.pct}%
                        </span>
                      </div>
                      <span className="text-[#9AA3B2] text-sm font-mono">{item.amount}</span>
                      {/* progress bar */}
                      <div className="mt-3 h-1.5 bg-white/8 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${item.pct}%`,
                            backgroundColor: item.color,
                            boxShadow: `0 0 8px ${item.color}60`,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}

            <Reveal delay={0.3}>
              <div className="glass rounded-[12px] p-6 text-center">
                <span className="text-[#9AA3B2] text-xs uppercase tracking-widest block mb-2">
                  Total Supply
                </span>
                <span
                  className="gradient-text text-3xl font-bold font-mono"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  100,000,000
                </span>
                <span className="text-[#9AA3B2] ml-2 text-sm">VTPN</span>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  )
}
