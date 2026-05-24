import Container from '@/components/layout/Container'

interface PageHeroProps {
  eyebrow: string
  title: string
  description: string
  accent?: 'violet' | 'cyan' | 'pink' | 'warn'
  gradientTitle?: boolean
}

const accentMap = {
  violet: {
    color: '#A78BFA',
    glow: 'rgba(124, 92, 250, 0.14)',
    border: 'rgba(124, 92, 250, 0.3)',
    bg: 'rgba(124, 92, 250, 0.1)',
  },
  cyan: {
    color: '#22D3EE',
    glow: 'rgba(34, 211, 238, 0.10)',
    border: 'rgba(34, 211, 238, 0.3)',
    bg: 'rgba(34, 211, 238, 0.08)',
  },
  pink: {
    color: '#F472B6',
    glow: 'rgba(244, 114, 182, 0.10)',
    border: 'rgba(244, 114, 182, 0.3)',
    bg: 'rgba(244, 114, 182, 0.08)',
  },
  warn: {
    color: '#F5A623',
    glow: 'rgba(245, 166, 35, 0.08)',
    border: 'rgba(245, 166, 35, 0.3)',
    bg: 'rgba(245, 166, 35, 0.08)',
  },
}

export default function PageHero({
  eyebrow,
  title,
  description,
  accent = 'violet',
  gradientTitle = true,
}: PageHeroProps) {
  const a = accentMap[accent]
  return (
    <div className="relative pt-32 pb-20 md:pb-24 overflow-hidden border-b border-white/[0.04]">
      {/* primary glow */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 50% 0%, ${a.glow} 0%, transparent 60%)`,
        }}
      />
      {/* subtle grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage:
            'radial-gradient(ellipse at top, black 30%, transparent 80%)',
        }}
      />
      {/* secondary side glow */}
      <div
        aria-hidden
        className="absolute -top-32 -right-20 w-96 h-96 rounded-full opacity-25 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse, ${a.color} 0%, transparent 70%)`,
          filter: 'blur(80px)',
        }}
      />

      <Container className="relative z-10">
        <div className="max-w-3xl">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-6 text-[11px] font-semibold tracking-[0.22em] uppercase"
            style={{
              border: `1px solid ${a.border}`,
              background: a.bg,
              color: a.color,
            }}
          >
            <span
              className="w-1 h-1 rounded-full"
              style={{ background: a.color }}
            />
            {eyebrow}
          </div>
          <h1
            className={`text-4xl md:text-5xl lg:text-[3.5rem] font-bold mb-5 leading-[1.05] ${
              gradientTitle ? 'gradient-text' : 'gradient-text-soft'
            }`}
          >
            {title}
          </h1>
          <p className="text-[#9AA3B2] text-base md:text-lg max-w-2xl leading-relaxed">
            {description}
          </p>
        </div>
      </Container>
    </div>
  )
}
