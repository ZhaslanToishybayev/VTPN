import { ArrowRight, Sparkles } from 'lucide-react'
import MagneticButton from '@/components/ui/MagneticButton'
import { home } from '@/content/site'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* aurora */}
      <div aria-hidden className="aurora" />

      {/* secondary cool glows */}
      <div
        aria-hidden
        className="absolute top-1/3 right-[10%] w-[450px] h-[450px] rounded-full opacity-[0.12] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, #22D3EE 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
      <div
        aria-hidden
        className="absolute bottom-1/4 left-[5%] w-[400px] h-[400px] rounded-full opacity-[0.08] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, #F472B6 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      {/* subtle grid */}
      <div aria-hidden className="absolute inset-0 grid-bg pointer-events-none" />

      {/* gradient line at bottom */}
      <div
        aria-hidden
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-5xl">
          {/* badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#7C5CFA]/30 bg-[#7C5CFA]/10 backdrop-blur-sm text-[#A78BFA] text-[11px] font-semibold tracking-[0.22em] uppercase mb-12">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7C5CFA] opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#A78BFA]" />
            </span>
            Utility Protocol Token
          </div>

          {/* monogram */}
          <div
            className="relative gradient-text text-[5rem] sm:text-7xl md:text-8xl lg:text-[10rem] font-bold tracking-[0.06em] mb-8 leading-[0.9] select-none"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            VTPN
            <span
              aria-hidden
              className="absolute inset-0 gradient-text blur-3xl opacity-50"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              VTPN
            </span>
          </div>

          {/* headline with serif italic accent */}
          <h1 className="text-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-7 leading-[1.05] max-w-4xl gradient-text-soft">
            A lightweight <em className="gradient-text">settlement layer</em> for startups without token infrastructure.
          </h1>

          {/* description */}
          <p className="text-[#9AA3B2] text-base md:text-lg leading-relaxed mb-10 max-w-2xl">
            {home.hero.description}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 sm:gap-4">
            <MagneticButton href="/#what-is-vtpn" variant="primary" size="lg">
              <Sparkles size={16} />
              Explore Protocol
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </MagneticButton>
            <MagneticButton href="/liquidity" variant="ghost" size="lg">
              Liquidity Model
            </MagneticButton>
          </div>

          {/* trust strip */}
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl">
            <div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-[#6B7280] mb-2">Standard</div>
              <div className="text-[#F5F7FA] text-sm font-mono">ERC-20</div>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-[#6B7280] mb-2">Supply</div>
              <div className="text-[#F5F7FA] text-sm font-mono">100M (fixed)</div>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-[#6B7280] mb-2">Treasury</div>
              <div className="text-[#F5F7FA] text-sm font-mono">90M VTPN</div>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-[#6B7280] mb-2">Vesting</div>
              <div className="text-[#F5F7FA] text-sm font-mono">10M VTPN</div>
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
