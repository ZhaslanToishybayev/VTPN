import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'VTPN — Utility Settlement Layer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#06070A',
          backgroundImage:
            'radial-gradient(ellipse 900px 600px at 20% 10%, rgba(124,92,250,0.5), transparent 60%), radial-gradient(ellipse 700px 500px at 90% 90%, rgba(34,211,238,0.35), transparent 60%), radial-gradient(ellipse 500px 400px at 60% 40%, rgba(244,114,182,0.18), transparent 60%)',
          padding: 80,
          fontFamily: 'sans-serif',
          color: '#F5F7FA',
        }}
      >
        {/* grid overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* top: badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            padding: '10px 22px',
            border: '1px solid rgba(124,92,250,0.4)',
            borderRadius: 999,
            background: 'rgba(124,92,250,0.12)',
            fontSize: 18,
            color: '#A78BFA',
            letterSpacing: 4,
            textTransform: 'uppercase',
            fontWeight: 600,
            alignSelf: 'flex-start',
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: 999,
              background: '#A78BFA',
              boxShadow: '0 0 12px #A78BFA',
            }}
          />
          Utility Protocol Token
        </div>

        {/* center: title */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div
            style={{
              fontSize: 200,
              fontWeight: 800,
              letterSpacing: 12,
              lineHeight: 0.9,
              background:
                'linear-gradient(135deg, #A78BFA 0%, #7C5CFA 40%, #22D3EE 100%)',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            VTPN
          </div>
          <div
            style={{
              fontSize: 38,
              fontWeight: 700,
              maxWidth: 950,
              lineHeight: 1.15,
              color: '#F5F7FA',
            }}
          >
            A lightweight settlement layer for startups without token infrastructure.
          </div>
        </div>

        {/* bottom: stat row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            gap: 40,
          }}
        >
          <div style={{ display: 'flex', gap: 48 }}>
            {[
              { label: 'Supply', value: '100M' },
              { label: 'Treasury', value: '90M' },
              { label: 'Vesting', value: '10M' },
            ].map((s) => (
              <div key={s.label} style={{ display: 'flex', flexDirection: 'column' }}>
                <span
                  style={{
                    fontSize: 14,
                    color: '#6B7280',
                    textTransform: 'uppercase',
                    letterSpacing: 4,
                    marginBottom: 6,
                  }}
                >
                  {s.label}
                </span>
                <span style={{ fontSize: 30, fontWeight: 700, color: '#F5F7FA' }}>
                  {s.value}
                </span>
              </div>
            ))}
          </div>
          <div style={{ fontSize: 22, color: '#9AA3B2' }}>vtpn.io</div>
        </div>
      </div>
    ),
    size,
  )
}
