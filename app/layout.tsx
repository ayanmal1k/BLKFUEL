import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { Toaster } from 'sonner'
import { frygia, morton } from '@/lib/fonts'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://blockfuel.netlify.app'),
  title: '$BLKFUEL | Fueling the Onchain Economy',
  description: 'Fueling the onchain economy on Robinhood Chain. Built for builders, traders, degens & believers. EVERY BLOCK NEEDS FUEL.',
  alternates: {
    canonical: 'https://blockfuel.netlify.app',
  },
  icons: {
    icon: '/face.png',
    shortcut: '/face.png',
    apple: '/face.png',
  },
  openGraph: {
    title: '$BLKFUEL | Fueling the Onchain Economy',
    description: 'Fueling the onchain economy on Robinhood Chain. Built for builders, traders, degens & believers. EVERY BLOCK NEEDS FUEL.',
    url: 'https://blockfuel.netlify.app',
    siteName: '$BLKFUEL',
    type: 'website',
    images: [
      {
        url: '/hero-bg.png',
        width: 1200,
        height: 630,
        alt: '$BLKFUEL - Every Block Needs Fuel',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '$BLKFUEL | Fueling the Onchain Economy',
    description: 'Fueling the onchain economy on Robinhood Chain. Built for builders, traders, degens & believers. EVERY BLOCK NEEDS FUEL.',
    creator: '@4blockfuel',
    images: ['/hero-bg.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${frygia.variable} ${morton.variable}`}>
      <body className="font-sans antialiased bg-black text-white">
        {children}
        <Toaster
          theme="dark"
          position="bottom-center"
          toastOptions={{
            style: {
              background: '#09090b',
              border: '1px solid #9FD401',
              color: '#ffffff',
              fontFamily: 'var(--font-morton)',
            },
          }}
        />
        <Analytics />
      </body>
    </html>
  )
}
