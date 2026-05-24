import { Clock } from 'lucide-react'
import AddressBox from '@/components/ui/AddressBox'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'
import Container from '@/components/layout/Container'
import Callout from '@/components/ui/Callout'
import { vesting, ADDRESSES } from '@/content/site'

export default function VestingSchedule() {
  return (
    <section className="relative py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* schedule */}
          <div>
            <Reveal>
              <SectionHeading
                eyebrow="Schedule"
                subtitle={vesting.schedule.note}
              >
                {vesting.schedule.heading}
              </SectionHeading>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-8 relative glass gradient-border rounded-[16px] p-8 flex flex-col items-center justify-center min-h-52 text-center overflow-hidden">
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-40 pointer-events-none"
                  style={{
                    background:
                      'radial-gradient(ellipse at top, rgba(124,92,250,0.12), transparent 60%)',
                  }}
                />
                <div className="relative">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#7C5CFA]/20 to-[#7C5CFA]/5 border border-[#7C5CFA]/30 flex items-center justify-center mb-5 mx-auto">
                    <Clock size={22} className="text-[#A78BFA]" />
                  </div>
                  <h3 className="text-[#F5F7FA] font-semibold text-lg mb-2">
                    Schedule to be published
                  </h3>
                  <p className="text-[#9AA3B2] text-sm max-w-xs mx-auto">
                    The detailed vesting schedule will be made available upon contract deployment.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* purpose + contract */}
          <div className="space-y-7">
            <Reveal>
              <div>
                <h3 className="text-[#F5F7FA] font-semibold text-lg mb-4">Purpose</h3>
                <div className="space-y-2.5">
                  {vesting.purpose.items.map((item, i) => (
                    <div
                      key={i}
                      className="glass rounded-[10px] px-5 py-3 text-[#9AA3B2] text-sm flex items-center gap-3 hover:border-[#7C5CFA]/30 transition-colors"
                    >
                      <span className="gradient-text font-bold text-lg leading-none">→</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div>
                <h3 className="text-[#F5F7FA] font-semibold text-lg mb-4">
                  Vesting Contract
                </h3>
                <AddressBox address={ADDRESSES.vestingContract} label="Contract Address" />
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <Callout variant="info" title="Pull-based Distribution">
                Tokens become available according to the predefined schedule and are distributed
                upon user interaction (claim). The contract does not perform automated
                transactions.
              </Callout>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  )
}
