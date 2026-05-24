import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'
import Container from '@/components/layout/Container'
import { liquidity } from '@/content/site'

export default function LiquidityArchitecture() {
  return (
    <section className="relative py-24 md:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Architecture"
            subtitle={liquidity.architecture.description}
          >
            {liquidity.architecture.heading}
          </SectionHeading>
        </Reveal>

        <div className="mt-14">
          <Reveal delay={0.1}>
            <div className="relative glass gradient-border rounded-[18px] p-8 md:p-10 overflow-hidden">
              <div
                aria-hidden
                className="absolute -top-20 -right-10 w-72 h-72 rounded-full opacity-25 pointer-events-none"
                style={{
                  background:
                    'radial-gradient(ellipse, #7C5CFA 0%, transparent 70%)',
                  filter: 'blur(50px)',
                }}
              />
              <div className="relative">
                <h3 className="text-[#F5F7FA] font-semibold text-lg mb-3">
                  Paired Asset Provisioning
                </h3>
                <p className="text-[#9AA3B2] text-sm mb-7 max-w-2xl">
                  Liquidity is deployed through paired asset provisioning in equal value
                  proportions:
                </p>
                <div className="flex flex-wrap gap-3 items-center">
                  <div
                    className="gradient-bg px-5 py-2.5 rounded-[10px] text-white text-sm font-bold font-mono shadow-[0_8px_24px_-8px_rgba(124,92,250,0.6)]"
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    VTPN
                  </div>
                  <span className="text-[#7C5CFA] text-xl font-bold">+</span>
                  {liquidity.architecture.pairs.map((pair) => (
                    <div
                      key={pair}
                      className="glass rounded-[10px] px-5 py-2.5 text-[#F5F7FA] text-sm font-mono border border-white/10 hover:border-[#22D3EE]/40 transition-colors"
                      style={{ fontFamily: 'var(--font-mono)' }}
                    >
                      {pair}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
