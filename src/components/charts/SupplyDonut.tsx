interface SupplyDonutProps {
  liquidityPct: number
  vestingPct: number
  size?: number
}

export default function SupplyDonut({
  liquidityPct,
  vestingPct,
  size = 220,
}: SupplyDonutProps) {
  const cx = size / 2
  const cy = size / 2
  const r = size * 0.38
  const strokeWidth = size * 0.13
  const circumference = 2 * Math.PI * r

  const liquidityDash = (liquidityPct / 100) * circumference
  const vestingDash = (vestingPct / 100) * circumference
  const gap = 0.015 * circumference

  const liquidityOffset = circumference * 0.25
  const vestingOffset = circumference * 0.25 - liquidityDash - gap

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      role="img"
      aria-label={`Supply distribution: ${liquidityPct}% liquidity, ${vestingPct}% vesting`}
    >
      <defs>
        <linearGradient id="violet-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A78BFA" />
          <stop offset="60%" stopColor="#7C5CFA" />
          <stop offset="100%" stopColor="#6E56F8" />
        </linearGradient>
        <linearGradient id="cyan-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#67E8F9" />
          <stop offset="100%" stopColor="#22D3EE" />
        </linearGradient>
        <filter id="glow-v" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <radialGradient id="center-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(124,92,250,0.18)" />
          <stop offset="100%" stopColor="rgba(124,92,250,0)" />
        </radialGradient>
      </defs>

      {/* center halo */}
      <circle cx={cx} cy={cy} r={r * 0.85} fill="url(#center-glow)" />

      {/* track */}
      <circle
        cx={cx}
        cy={cy}
        r={r}
        fill="none"
        stroke="rgba(255,255,255,0.04)"
        strokeWidth={strokeWidth}
      />

      {/* liquidity arc */}
      <circle
        cx={cx}
        cy={cy}
        r={r}
        fill="none"
        stroke="url(#violet-grad)"
        strokeWidth={strokeWidth}
        strokeDasharray={`${liquidityDash - gap} ${circumference - liquidityDash + gap}`}
        strokeDashoffset={liquidityOffset}
        strokeLinecap="round"
        transform={`rotate(-90 ${cx} ${cy})`}
        filter="url(#glow-v)"
      />

      {/* vesting arc */}
      <circle
        cx={cx}
        cy={cy}
        r={r}
        fill="none"
        stroke="url(#cyan-grad)"
        strokeWidth={strokeWidth}
        strokeDasharray={`${vestingDash - gap} ${circumference - vestingDash + gap}`}
        strokeDashoffset={vestingOffset}
        strokeLinecap="round"
        transform={`rotate(-90 ${cx} ${cy})`}
      />

      {/* center label */}
      <text
        x={cx}
        y={cy - 8}
        textAnchor="middle"
        dominantBaseline="middle"
        fill="#F5F7FA"
        fontSize={size * 0.11}
        fontWeight="700"
        fontFamily="var(--font-mono)"
        letterSpacing="-1"
      >
        100M
      </text>
      <text
        x={cx}
        y={cy + 16}
        textAnchor="middle"
        dominantBaseline="middle"
        fill="#9AA3B2"
        fontSize={size * 0.055}
        fontWeight="500"
        fontFamily="var(--font-sans)"
        letterSpacing="3"
      >
        VTPN
      </text>
    </svg>
  )
}
