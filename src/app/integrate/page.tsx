import type { Metadata } from 'next'
import { Terminal, Boxes, ScrollText, ArrowRight } from 'lucide-react'
import PageHero from '@/components/ui/PageHero'
import Container from '@/components/layout/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import CodeBlock from '@/components/ui/CodeBlock'
import Reveal from '@/components/ui/Reveal'
import Callout from '@/components/ui/Callout'
import AddressBox from '@/components/ui/AddressBox'
import { ADDRESSES } from '@/content/site'

export const metadata: Metadata = {
  title: 'Integrate',
  description:
    'Integration reference for VTPN — contract addresses, ABI, and code snippets for common settlement flows.',
}

const ethersSnippet = `import { Contract, JsonRpcProvider } from 'ethers'

const provider = new JsonRpcProvider(process.env.RPC_URL)

const vtpn = new Contract(
  '${ADDRESSES.treasury}',
  ['function balanceOf(address) view returns (uint256)'],
  provider,
)

const balance = await vtpn.balanceOf(userAddress)
console.log(\`Balance: \${balance.toString()} VTPN\`)`

const viemSnippet = `import { createPublicClient, http, erc20Abi } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})

const balance = await client.readContract({
  address: '${ADDRESSES.treasury}',
  abi: erc20Abi,
  functionName: 'balanceOf',
  args: [userAddress],
})`

const transferSnippet = `// Standard ERC-20 transfer flow
// VTPN behaves like any ERC-20 — no proprietary methods.

const tx = await vtpn.transfer(recipient, amount)
await tx.wait()`

export default function IntegratePage() {
  return (
    <>
      <PageHero
        eyebrow="For Developers"
        title="Integrate VTPN"
        description="VTPN is a standard ERC-20 with no proprietary methods. Drop it into your settlement flow using ethers, viem, or any ERC-20 compatible tooling."
        accent="cyan"
      />

      <section className="relative py-20">
        <Container>
          {/* quick links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
            {[
              {
                icon: Boxes,
                eyebrow: 'On-chain',
                title: 'Contract',
                desc: 'Verified ERC-20 on Ethereum mainnet.',
                accent: '#A78BFA',
              },
              {
                icon: ScrollText,
                eyebrow: 'Reference',
                title: 'Standard ABI',
                desc: 'Use any ERC-20 ABI — no extensions.',
                accent: '#22D3EE',
              },
              {
                icon: Terminal,
                eyebrow: 'Snippets',
                title: 'Code Examples',
                desc: 'ethers.js and viem in TypeScript.',
                accent: '#F472B6',
              },
            ].map((c, i) => {
              const Icon = c.icon
              return (
                <Reveal key={c.title} delay={i * 0.06}>
                  <div className="glass card-hover gradient-border rounded-[16px] p-6 h-full">
                    <div
                      className="w-10 h-10 rounded-[10px] flex items-center justify-center mb-4"
                      style={{
                        background: `${c.accent}20`,
                        border: `1px solid ${c.accent}40`,
                      }}
                    >
                      <Icon size={18} style={{ color: c.accent }} />
                    </div>
                    <div className="text-[10px] uppercase tracking-[0.22em] text-[#6B7280] font-semibold mb-1">
                      {c.eyebrow}
                    </div>
                    <h3 className="text-[#F5F7FA] font-semibold mb-1">{c.title}</h3>
                    <p className="text-[#9AA3B2] text-sm">{c.desc}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>

          {/* contract address */}
          <Reveal>
            <SectionHeading eyebrow="Step 01">Token contract address</SectionHeading>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="mt-8 mb-16">
              <AddressBox address={ADDRESSES.treasury} label="VTPN ERC-20 (Ethereum mainnet)" />
            </div>
          </Reveal>

          {/* read balance */}
          <Reveal>
            <SectionHeading
              eyebrow="Step 02"
              subtitle="Read on-chain balance via two popular Ethereum libraries"
            >
              Read a balance
            </SectionHeading>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-5 mb-16">
            <Reveal>
              <CodeBlock
                filename="read-balance.ts"
                language="ethers"
                code={ethersSnippet}
              />
            </Reveal>
            <Reveal delay={0.08}>
              <CodeBlock
                filename="read-balance.ts"
                language="viem"
                code={viemSnippet}
              />
            </Reveal>
          </div>

          {/* transfer */}
          <Reveal>
            <SectionHeading
              eyebrow="Step 03"
              subtitle="VTPN behaves like a standard ERC-20 — use transfer, approve, transferFrom"
            >
              Settle a transfer
            </SectionHeading>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="mt-8 mb-16 max-w-3xl">
              <CodeBlock filename="settle.ts" language="ts" code={transferSnippet} />
            </div>
          </Reveal>

          {/* callout */}
          <Reveal>
            <Callout variant="info" title="Need help integrating?">
              Optional integration grants and onboarding assistance may be available through
              ecosystem programs. See the{' '}
              <a
                href="/ecosystem"
                className="text-[#A78BFA] hover:text-[#22D3EE] inline-flex items-center gap-1 transition-colors"
              >
                Ecosystem
                <ArrowRight size={12} />
              </a>{' '}
              page for details.
            </Callout>
          </Reveal>
        </Container>
      </section>
    </>
  )
}
