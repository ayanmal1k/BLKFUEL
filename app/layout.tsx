import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { frygia, morton } from '@/lib/fonts'
import './globals.css'

export const metadata: Metadata = {
  title: 'BLKFUEL Sample',
  description: 'Fueling the onchain economy. Built for builders, traders, degens & believers.',
  icons: {
    icon: '/ton logo.webp',
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
        <Analytics />
      </body>
    </html>
  )
}
