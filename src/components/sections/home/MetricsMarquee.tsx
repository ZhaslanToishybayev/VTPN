import { Activity, ArrowUpRight, Coins, Lock, Wallet, Layers } from 'lucide-react'

const metrics = [
  { icon: Coins, label: 'Total Supply', value: '100,000,000', unit: 'VTPN' },
  { icon: Wallet, label: 'Treasury', value: '90,000,000', unit: 'VTPN' },
  { icon: Lock, label: 'Vesting Pool', value: '10,000,000', unit: 'VTPN' },
  { icon: Layers, label: 'Pairs', value: 'USDC · USDT · BTC · ETH · BNB' },
  { icon: Activity, label: 'Ratio', value: '5 : 1', unit: 'stable / other' },
  { icon: ArrowUpRight, label: 'Standard', value: 'ERC-20' },
]

function MetricChip({ m }: { m: typeof metrics[number] }) {
  const Icon = m.icon
  return (
    <div className="flex items-center gap-3 px-5 py-2.5 mx-2 rounded-full bg-white/[0.03] border border-white/[0.06] whitespace-nowrap">
      <Icon size={14} className="text-[#A78BFA] flex-shrink-0" />
      <span className="text-[10px] uppercase tracking-[0.22em] text-[#6B7280] font-semibold">
        {m.label}
      </span>
      <span className="text-[#F5F7FA] text-sm font-mono">{m.value}</span>
      {m.unit && (
        <span className="text-[#6B7280] text-xs font-mono">{m.unit}</span>
      )}
    </div>
  )
}

export default function MetricsMarquee() {
  // duplicate the list so the marquee can loop seamlessly with translateX(-50%)
  const doubled = [...metrics, ...metrics]
  return (
    <section
      aria-label="Protocol metrics"
      className="relative py-10 border-y border-white/[0.04] overflow-hidden marquee-pause"
    >
      {/* fade edges */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-32 z-10"
        style={{
          background: 'linear-gradient(to right, #06070A, transparent)',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-32 z-10"
        style={{
          background: 'linear-gradient(to left, #06070A, transparent)',
        }}
      />

      <div className="marquee-track flex w-max">
        {doubled.map((m, i) => (
          <MetricChip key={i} m={m} />
        ))}
      </div>
    </section>
  )
}
