import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono, Instrument_Serif } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import SmoothScroll from '@/components/providers/SmoothScroll'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
})

export const viewport: Viewport = {
  themeColor: '#06070A',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://vtpn.io'),
  title: {
    default: 'VTPN — Utility Settlement Layer',
    template: '%s | VTPN Protocol',
  },
  description:
    'A lightweight protocol token for value exchange, liquidity, and integration between early-stage digital products.',
  keywords: ['VTPN', 'utility token', 'protocol', 'settlement layer', 'DeFi', 'liquidity'],
  authors: [{ name: 'VTPN Protocol' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'VTPN — Utility Settlement Layer',
    description:
      'A lightweight protocol token for value exchange, liquidity, and integration between early-stage digital products.',
    siteName: 'VTPN Protocol',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VTPN — Utility Settlement Layer',
    description: 'A lightweight protocol token for value exchange, liquidity, and integration.',
    images: ['/opengraph-image'],
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} ${instrumentSerif.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <SmoothScroll />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#7C5CFA] focus:text-white focus:rounded-[10px] focus:text-sm focus:font-medium focus:outline-none focus:ring-2 focus:ring-white/40"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
