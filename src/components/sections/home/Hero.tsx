import { ArrowRight, Sparkles } from 'lucide-react'
import Button from '@/components/ui/Button'
import { home } from '@/content/site'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* layered background effects */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        {/* primary violet glow */}
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[700px] rounded-full opacity-[0.22]"
          style={{
            background: 'radial-gradient(ellipse, #7C5CFA 0%, transparent 60%)',
            filter: 'blur(70px)',
          }}
        />
        {/* cyan accent */}
        <div
          className="absolute top-1/3 right-[15%] w-[450px] h-[450px] rounded-full opacity-[0.12]"
          style={{
            background: 'radial-gradient(ellipse, #22D3EE 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        {/* pink accent */}
        <div
          className="absolute bottom-1/4 left-[10%] w-[400px] h-[400px] rounded-full opacity-[0.08]"
          style={{
            background: 'radial-gradient(ellipse, #F472B6 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />

        {/* subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
            maskImage:
              'radial-gradient(ellipse at center, black 30%, transparent 80%)',
          }}
        />

        {/* gradient line below */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 md:py-32 w-full">
        <div className="max-w-4xl">
          {/* badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#7C5CFA]/30 bg-[#7C5CFA]/10 backdrop-blur-sm text-[#A78BFA] text-[11px] font-semibold tracking-[0.22em] uppercase mb-10">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7C5CFA] opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#A78BFA]" />
            </span>
            Utility Protocol Token
          </div>

          {/* logo */}
          <div
            className="relative gradient-text text-[5rem] sm:text-7xl md:text-8xl lg:text-[9rem] font-bold tracking-[0.08em] mb-6 leading-[0.95] select-none"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            VTPN
            <span
              aria-hidden
              className="absolute inset-0 gradient-text blur-2xl opacity-40"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              VTPN
            </span>
          </div>

          {/* tagline */}
          <h1 className="text-xl sm:text-2xl md:text-[1.75rem] text-[#F5F7FA] font-semibold mb-6 leading-tight max-w-3xl">
            {home.hero.tagline}
          </h1>

          {/* description */}
          <p className="text-[#9AA3B2] text-base md:text-lg leading-relaxed mb-10 max-w-2xl">
            {home.hero.description}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 sm:gap-4">
            <Button href="/#what-is-vtpn" variant="primary" size="lg">
              <Sparkles size={16} />
              Explore Protocol
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </Button>
            <Button href="/liquidity" variant="ghost" size="lg">
              Liquidity Model
            </Button>
            <Button href="/treasury" variant="subtle" size="lg">
              View Treasury
            </Button>
          </div>

          {/* trust strip */}
          <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-4 text-xs text-[#6B7280] uppercase tracking-[0.18em]">
            <div className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-[#22D3EE]" />
              ERC-20 Standard
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-[#7C5CFA]" />
              Fixed Supply 100M
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-[#F472B6]" />
              Treasury-backed
            </div>
          </div>
        </div>

        {/* scroll indicator */}
        <div className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-[#6B7280] text-[10px] tracking-[0.3em] uppercase">
          <span>Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-[#9AA3B2] via-[#9AA3B2]/30 to-transparent" />
        </div>
      </div>
    </section>
  )
}
