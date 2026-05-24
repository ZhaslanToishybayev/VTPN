import GlassCard from '@/components/ui/GlassCard'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'
import Container from '@/components/layout/Container'
import { liquidity } from '@/content/site'

export default function LiquidityArchitecture() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeading subtitle={liquidity.architecture.description}>
            {liquidity.architecture.heading}
          </SectionHeading>
        </Reveal>

        <div className="mt-12">
          <Reveal delay={0.1}>
            <GlassCard>
              <h3 className="text-[#F5F7FA] font-semibold text-lg mb-6">
                Paired Asset Provisioning
              </h3>
              <p className="text-[#9AA3B2] text-sm mb-6">
                Liquidity is deployed through paired asset provisioning in equal value proportions:
              </p>
              <div className="flex flex-wrap gap-3 items-center">
                <div className="gradient-bg px-4 py-2 rounded-[8px] text-white text-sm font-semibold font-mono">
                  VTPN
                </div>
                <span className="text-[#9AA3B2] text-lg">+</span>
                {liquidity.architecture.pairs.map((pair) => (
                  <div
                    key={pair}
                    className="glass rounded-[8px] px-4 py-2 text-[#F5F7FA] text-sm font-mono border border-white/10"
                  >
                    {pair}
                  </div>
                ))}
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
