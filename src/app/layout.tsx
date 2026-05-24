import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

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

export const metadata: Metadata = {
  title: {
    default: 'VTPN — Utility Settlement Layer',
    template: '%s | VTPN Protocol',
  },
  description:
    'A lightweight protocol token for value exchange, liquidity, and integration between early-stage digital products.',
  keywords: ['VTPN', 'utility token', 'protocol', 'settlement layer', 'DeFi', 'liquidity'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'VTPN — Utility Settlement Layer',
    description:
      'A lightweight protocol token for value exchange, liquidity, and integration between early-stage digital products.',
    siteName: 'VTPN Protocol',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VTPN — Utility Settlement Layer',
    description: 'A lightweight protocol token for value exchange, liquidity, and integration.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="min-h-screen flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#6E56F8] focus:text-white focus:rounded-[8px] focus:text-sm focus:font-medium"
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
