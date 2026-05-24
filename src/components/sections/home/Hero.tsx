import Button from '@/components/ui/Button'
import { home } from '@/content/site'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* background glow effects */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
      >
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(ellipse, #6E56F8 0%, transparent 65%)',
            filter: 'blur(60px)',
          }}
        />
        <div
          className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full opacity-10"
          style={{
            background: 'radial-gradient(ellipse, #22D3EE 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        {/* grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 md:py-32">
        <div className="max-w-4xl">
          {/* badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#6E56F8]/30 bg-[#6E56F8]/10 text-[#6E56F8] text-xs font-medium tracking-widest uppercase mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6E56F8] animate-pulse" />
            Utility Protocol Token
          </div>

          {/* logo */}
          <div
            className="gradient-text text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-widest mb-6 leading-none"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            VTPN
          </div>

          {/* tagline */}
          <h1 className="text-xl sm:text-2xl md:text-3xl text-[#F5F7FA] font-semibold mb-6 leading-tight max-w-3xl">
            {home.hero.tagline}
          </h1>

          {/* description */}
          <p className="text-[#9AA3B2] text-base md:text-lg leading-relaxed mb-10 max-w-2xl">
            {home.hero.description}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Button href="/#what-is-vtpn" variant="primary">
              Explore Protocol Details
            </Button>
            <Button href="/liquidity" variant="ghost">
              View Liquidity Model
            </Button>
            <Button href="/treasury" variant="ghost">
              View Treasury
            </Button>
          </div>
        </div>

        {/* scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#9AA3B2] text-xs">
          <span>Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-[#9AA3B2] to-transparent" />
        </div>
      </div>
    </section>
  )
}
