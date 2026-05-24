'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'
import Container from '@/components/layout/Container'

const items = [
  {
    q: 'How does VTPN differ from a regular ERC-20 token?',
    a: 'VTPN is a standard ERC-20 at the contract level. The difference is in design intent: it functions as a settlement and liquidity layer for integrated apps, and explicitly excludes investment-style mechanics such as staking, yield, dividends, and governance.',
  },
  {
    q: 'Is VTPN an investment product?',
    a: 'No. VTPN is a utility protocol token. It does not represent ownership, profit rights, or claims on revenue. Interaction is voluntary and at the user’s discretion.',
  },
  {
    q: 'What is the total supply, and is it fixed?',
    a: '100,000,000 VTPN. The supply is fixed at deployment. 90,000,000 sits in the protocol-controlled treasury (for liquidity provisioning), and 10,000,000 is allocated to long-term vesting via an immutable smart contract.',
  },
  {
    q: 'How does the liquidity model work?',
    a: 'Liquidity is deployed in paired asset provisioning (equal value proportions) across stablecoins and non-stable assets. New liquidity is added at an approximate 5:1 ratio (stable to non-stable), with expansion governed by predefined system parameters.',
  },
  {
    q: 'Can the vesting schedule be changed after launch?',
    a: 'No. The vesting contract is immutable and admin-less. The schedule is fixed at deployment, there are no override mechanisms, and tokens become claimable per schedule on a pull basis.',
  },
  {
    q: 'How can an early-stage product integrate VTPN?',
    a: 'Treat VTPN as the settlement asset between your product and other integrated apps — you don’t need to design custom tokenomics. Reference the integration page for ABI and code snippets once the contract is deployed.',
  },
]

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="relative py-24 md:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="FAQ"
            subtitle="Common questions about the protocol, supply, and design intent"
          >
            Frequently asked
          </SectionHeading>
        </Reveal>

        <div className="mt-14 max-w-3xl mx-auto">
          {items.map((item, i) => {
            const isOpen = open === i
            return (
              <Reveal key={i} delay={i * 0.04}>
                <div className="border-b border-white/[0.08] last:border-b-0">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 py-5 text-left group"
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`text-base md:text-lg font-medium transition-colors ${
                        isOpen ? 'text-[#F5F7FA]' : 'text-[#C7C9D1] group-hover:text-[#F5F7FA]'
                      }`}
                    >
                      {item.q}
                    </span>
                    <span
                      className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-200 ${
                        isOpen
                          ? 'border-[#7C5CFA]/40 bg-[#7C5CFA]/10 text-[#A78BFA]'
                          : 'border-white/10 text-[#9AA3B2] group-hover:border-white/20 group-hover:text-[#F5F7FA]'
                      }`}
                    >
                      {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: 'easeOut' }}
                        style={{ overflow: 'hidden' }}
                      >
                        <p className="pb-6 pr-12 text-[#9AA3B2] leading-relaxed text-sm md:text-[15px]">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
