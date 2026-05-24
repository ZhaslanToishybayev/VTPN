'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Check, Circle, Sparkles } from 'lucide-react'
import Reveal from '@/components/ui/Reveal'

type Status = 'done' | 'active' | 'next'

interface Milestone {
  phase: string
  title: string
  description: string
  bullets: string[]
  status: Status
}

const phases: Milestone[] = [
  {
    phase: 'Phase 01',
    title: 'Protocol Design',
    description:
      'Architecture, supply model, treasury structure, and vesting design finalized.',
    bullets: [
      'Fixed supply (100M VTPN) decided',
      'Treasury and vesting split (90 / 10) confirmed',
      'Utility-only design principles published',
    ],
    status: 'done',
  },
  {
    phase: 'Phase 02',
    title: 'Contract Deployment',
    description:
      'ERC-20 contract and immutable vesting contract deployed to Ethereum mainnet.',
    bullets: [
      'ERC-20 token contract deployment',
      'Immutable vesting contract deployment',
      'On-chain addresses publicly verifiable',
    ],
    status: 'active',
  },
  {
    phase: 'Phase 03',
    title: 'Initial Liquidity',
    description:
      'Treasury-backed paired asset provisioning across stable and non-stable pools.',
    bullets: [
      'USDC / USDT pools opened',
      'BTC / ETH / BNB pairs activated',
      '5:1 stable to non-stable ratio applied',
    ],
    status: 'next',
  },
  {
    phase: 'Phase 04',
    title: 'Integration & Ecosystem',
    description:
      'Tooling, SDK, and documentation for startups building on VTPN as a settlement layer.',
    bullets: [
      'Integration documentation & ABI publication',
      'Reference code snippets for common flows',
      'Optional ecosystem support programs',
    ],
    status: 'next',
  },
  {
    phase: 'Phase 05',
    title: 'Liquidity Expansion',
    description:
      'Staged expansion of liquidity following predefined system parameters.',
    bullets: [
      'Transition from operational to automated execution',
      'On-chain transparency for treasury movements',
      'Live dashboard for protocol metrics',
    ],
    status: 'next',
  },
]

const statusStyle: Record<Status, { dot: string; ring: string; chip: string }> = {
  done: {
    dot: 'bg-[#22D3EE] shadow-[0_0_12px_rgba(34,211,238,0.7)]',
    ring: 'border-[#22D3EE]/40 bg-[#22D3EE]/10',
    chip: 'text-[#22D3EE] bg-[#22D3EE]/10 border-[#22D3EE]/30',
  },
  active: {
    dot: 'bg-[#A78BFA] shadow-[0_0_16px_rgba(167,139,250,0.8)]',
    ring: 'border-[#7C5CFA]/50 bg-[#7C5CFA]/15',
    chip: 'text-[#A78BFA] bg-[#7C5CFA]/15 border-[#7C5CFA]/40',
  },
  next: {
    dot: 'bg-white/20',
    ring: 'border-white/10 bg-white/[0.03]',
    chip: 'text-[#9AA3B2] bg-white/[0.04] border-white/10',
  },
}

const statusLabel: Record<Status, string> = {
  done: 'Complete',
  active: 'In progress',
  next: 'Upcoming',
}

export default function Timeline() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ['start 60%', 'end 60%'],
  })
  const lineProgress = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section className="relative py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={wrapRef} className="relative">
          {/* spine */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-white/[0.06]" />
          <motion.div
            className="absolute left-4 md:left-8 top-0 w-px"
            style={{
              height: lineProgress,
              background:
                'linear-gradient(180deg, #A78BFA 0%, #7C5CFA 50%, #22D3EE 100%)',
              boxShadow: '0 0 12px rgba(124,92,250,0.4)',
            }}
          />

          <div className="space-y-12">
            {phases.map((m, i) => {
              const s = statusStyle[m.status]
              return (
                <Reveal key={m.phase} delay={i * 0.05}>
                  <div className="relative pl-14 md:pl-24">
                    {/* node */}
                    <div className="absolute left-0 md:left-4 top-1.5 flex items-center justify-center">
                      <div
                        className={`relative w-8 h-8 rounded-full border ${s.ring} flex items-center justify-center`}
                      >
                        {m.status === 'done' ? (
                          <Check size={14} className="text-[#22D3EE]" strokeWidth={2.5} />
                        ) : m.status === 'active' ? (
                          <Sparkles size={12} className="text-[#A78BFA]" />
                        ) : (
                          <Circle size={8} className="text-[#6B7280]" />
                        )}
                      </div>
                      <span
                        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full ${s.dot}`}
                      />
                    </div>

                    {/* card */}
                    <div className="glass card-hover gradient-border rounded-[16px] p-6 md:p-8">
                      <div className="flex items-center gap-3 mb-3 flex-wrap">
                        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#6B7280]">
                          {m.phase}
                        </span>
                        <span
                          className={`px-2.5 py-0.5 rounded-full text-[10px] uppercase tracking-[0.18em] font-semibold border ${s.chip}`}
                        >
                          {statusLabel[m.status]}
                        </span>
                      </div>
                      <h3 className="text-[#F5F7FA] font-bold text-xl md:text-2xl mb-2">
                        {m.title}
                      </h3>
                      <p className="text-[#9AA3B2] text-sm md:text-[15px] leading-relaxed mb-5">
                        {m.description}
                      </p>
                      <ul className="space-y-2">
                        {m.bullets.map((b, j) => (
                          <li
                            key={j}
                            className="flex items-start gap-3 text-[#C7C9D1] text-sm"
                          >
                            <span
                              className={`mt-1.5 w-1 h-1 rounded-full flex-shrink-0 ${
                                m.status === 'done'
                                  ? 'bg-[#22D3EE]'
                                  : m.status === 'active'
                                    ? 'bg-[#A78BFA]'
                                    : 'bg-white/30'
                              }`}
                            />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
