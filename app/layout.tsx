import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { Toaster } from 'sonner'
import { frygia, morton } from '@/lib/fonts'
import './globals.css'

export const viewport: Viewport = {
  themeColor: '#9FD401',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://blockfuel.netlify.app'),
  title: {
    default: '$BLKFUEL | Fueling the Onchain Economy on Robinhood Chain',
    template: '%s | $BLKFUEL',
  },
  description:
    '$BLKFUEL is the official community token fueling the next generation of the onchain economy on Robinhood Chain. Built for builders, traders, degens & believers. Every block needs fuel.',
  applicationName: '$BLKFUEL',
  authors: [{ name: '$BLKFUEL Community' }],
  generator: 'Next.js',
  keywords: [
    'BLKFUEL',
    '$BLKFUEL',
    'Robinhood Chain',
    'Robinhood Crypto',
    'Onchain Economy',
    'DeFi',
    'Crypto Token',
    'EVM',
    'Block Fuel',
    'Web3',
    'Dexscreener',
    'Decentralized Finance',
    'Meme Coin',
    'Crypto Community',
  ],
  referrer: 'origin-when-cross-origin',
  creator: '@4blockfuel',
  publisher: '$BLKFUEL',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://blockfuel.netlify.app',
  },
  icons: {
    icon: [
      { url: '/face.png', sizes: '32x32', type: 'image/png' },
      { url: '/face.png', sizes: '192x192', type: 'image/png' },
      { url: '/face.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/face.png',
    apple: [{ url: '/face.png', sizes: '180x180', type: 'image/png' }],
  },
  manifest: '/manifest.json',
  openGraph: {
    title: '$BLKFUEL | Fueling the Onchain Economy on Robinhood Chain',
    description:
      'Fueling the onchain economy on Robinhood Chain. Built for builders, traders, degens & believers. EVERY BLOCK NEEDS FUEL.',
    url: 'https://blockfuel.netlify.app',
    siteName: '$BLKFUEL',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/hero-bg.png',
        width: 1200,
        height: 630,
        type: 'image/png',
        alt: '$BLKFUEL - Every Block Needs Fuel',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '$BLKFUEL | Fueling the Onchain Economy on Robinhood Chain',
    description:
      'Fueling the onchain economy on Robinhood Chain. Built for builders, traders, degens & believers. EVERY BLOCK NEEDS FUEL.',
    site: '@4blockfuel',
    creator: '@4blockfuel',
    images: [
      {
        url: '/hero-bg.png',
        alt: '$BLKFUEL - Every Block Needs Fuel',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'cryptocurrency',
}

// JSON-LD Structured Data Schema for Google Search Rich Snippets
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://blockfuel.netlify.app/#organization',
      name: '$BLKFUEL',
      url: 'https://blockfuel.netlify.app',
      logo: {
        '@type': 'ImageObject',
        url: 'https://blockfuel.netlify.app/face.png',
        width: 512,
        height: 512,
      },
      sameAs: [
        'https://x.com/4blockfuel',
        'https://t.me/+MR2aUw2u1qBiYzgx',
        'https://dexscreener.com',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://blockfuel.netlify.app/#website',
      url: 'https://blockfuel.netlify.app',
      name: '$BLKFUEL',
      description: 'Fueling the onchain economy on Robinhood Chain.',
      publisher: {
        '@id': 'https://blockfuel.netlify.app/#organization',
      },
      inLanguage: 'en-US',
    },
    {
      '@type': 'WebPage',
      '@id': 'https://blockfuel.netlify.app/#webpage',
      url: 'https://blockfuel.netlify.app',
      name: '$BLKFUEL | Fueling the Onchain Economy on Robinhood Chain',
      isPartOf: {
        '@id': 'https://blockfuel.netlify.app/#website',
      },
      about: {
        '@id': 'https://blockfuel.netlify.app/#organization',
      },
      description:
        '$BLKFUEL is the community token fueling the next generation of onchain innovation on Robinhood Chain.',
      inLanguage: 'en-US',
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${frygia.variable} ${morton.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
