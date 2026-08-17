'use client'

import React from 'react'
import Image from 'next/image'
import { toast } from 'sonner'
import { Zap, Send } from 'lucide-react'
import { Magnetic } from '@/components/magnetic'

// SVG Social Icons
function XTwitterIcon({ className = "w-5 h-5 sm:w-6 sm:h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function TelegramIcon({ className = "w-5 h-5 sm:w-6 sm:h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.75-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
    </svg>
  )
}

function DexscreenerIcon({ className = "w-5 h-5 sm:w-6 sm:h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
      <path d="M3 3v18h18" strokeWidth="1.8" strokeOpacity="0.6" />
    </svg>
  )
}


export default function HeroSection() {
  const [buyText, setBuyText] = React.useState('BUY $BLKFUEL')

  const handleBuyClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setBuyText('COMING SOON')
    toast.info('🚀 $BLKFUEL Token: Coming Soon on Robinhood Chain!')
    setTimeout(() => {
      setBuyText('BUY $BLKFUEL')
    }, 2500)
  }

  return (
    <section id="hero" className="relative w-full min-h-screen bg-transparent text-white overflow-hidden flex items-start lg:items-center select-none pt-16 sm:pt-20 lg:pt-0">
      
      {/* Background Images: Mobile & Desktop Versions */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Mobile Background: Character at bottom middle, empty top */}
        <div className="block lg:hidden absolute inset-0">
          <Image
            src="/hero-bg-mobile.png"
            alt="Fuel Character Mobile Background"
            fill
            priority
            quality={100}
            className="object-cover object-bottom select-none"
          />
        </div>

        {/* Desktop Background: Character on right side */}
        <div className="hidden lg:block absolute inset-0">
          <Image
            src="/hero-bg.png"
            alt="Fuel Character Desktop Background"
            fill
            priority
            quality={100}
            className="object-cover object-right-top select-none"
          />
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-5 sm:px-8 lg:pl-10 lg:pr-8 pt-10 sm:pt-14 pb-[55vh] sm:pb-[50vh] lg:py-16 flex flex-col lg:flex-row items-center lg:items-center justify-between min-h-screen gap-10 lg:gap-6">
        
        {/* LEFT COLUMN: Headings, Subheadings, Buttons, Socials */}
        <div className="w-full lg:flex-1 max-w-3xl flex flex-col items-center sm:items-start text-center sm:text-left justify-center pt-2 sm:pt-0">
          
          {/* Main Headings */}
          <div className="space-y-1 sm:space-y-1.5 w-full">
            <h1 className="font-morton font-black text-5xl sm:text-7xl md:text-8xl lg:text-[6.8rem] xl:text-[7.2rem] uppercase tracking-tight text-white leading-[0.88] drop-shadow-md">
              EVERY BLOCK
            </h1>
            <h1 className="font-morton font-black text-5xl sm:text-7xl md:text-8xl lg:text-[6.8rem] xl:text-[7.2rem] uppercase tracking-tight text-[#9FD401] leading-[0.88] drop-shadow-[0_0_35px_rgba(159,212,1,0.45)]">
              NEEDS FUEL.
            </h1>
          </div>

          {/* Subheadings */}
          <div className="mt-5 sm:mt-10 space-y-1.5 sm:space-y-2">
            <p className="font-frygia font-bold text-lg sm:text-2xl md:text-[1.75rem] text-white tracking-wide leading-tight">
              Fueling the onchain economy.
            </p>
            <p className="font-frygia font-normal text-sm sm:text-lg md:text-xl text-zinc-300 tracking-wide">
              Built for builders, traders, degens &amp; believers.
            </p>
          </div>

          {/* Action Buttons Row */}
          <div className="mt-7 sm:mt-12 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-3.5 sm:gap-6 w-full sm:w-auto">
            {/* Primary Buy Button */}
            <Magnetic strength={0.25} className="w-full sm:w-auto">
              <button
                type="button"
                onClick={handleBuyClick}
                className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-2.5 sm:gap-3 px-7 py-3.5 sm:px-11 sm:py-5 rounded-[1.25rem] font-morton font-black text-base sm:text-xl md:text-2xl uppercase tracking-wide bg-[#9FD401] hover:bg-[#b0eb02] text-black shadow-[0_0_30px_rgba(159,212,1,0.5)] hover:shadow-[0_0_50px_rgba(159,212,1,0.85)] transition-all duration-300 transform active:scale-95 cursor-pointer"
              >
                <span>{buyText}</span>
                <Zap className="w-5 h-5 sm:w-6 sm:h-6 fill-black stroke-black transition-transform duration-300 group-hover:scale-110" />
              </button>
            </Magnetic>

            {/* Secondary Join Community Button */}
            <Magnetic strength={0.25} className="w-full sm:w-auto">
              <a
                href="https://t.me/+MR2aUw2u1qBiYzgx"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-2.5 sm:gap-3 px-7 py-3.5 sm:px-11 sm:py-5 rounded-[1.25rem] font-morton font-black text-base sm:text-xl md:text-2xl uppercase tracking-wide bg-black/75 hover:bg-black/90 text-white border border-[#52771b]/90 hover:border-[#9FD401] backdrop-blur-md shadow-[0_4px_25px_rgba(0,0,0,0.6)] hover:shadow-[0_0_30px_rgba(159,212,1,0.3)] transition-all duration-300 transform active:scale-95"
              >
                <span>JOIN COMMUNITY</span>
                <Send className="w-4 h-4 sm:w-5 sm:h-5 fill-white stroke-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Magnetic>
          </div>

          {/* Social Icons Row */}
          <div className="mt-7 sm:mt-14 flex items-center justify-center sm:justify-start gap-3.5 sm:gap-5">
            {/* X (Twitter) */}
            <Magnetic strength={0.35}>
              <a
                href="https://x.com/4blockfuel"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on X"
                className="w-12 h-12 sm:w-15 sm:h-15 rounded-full bg-black/60 hover:bg-black/85 border border-zinc-700/90 hover:border-[#9FD401] backdrop-blur-md flex items-center justify-center text-white hover:text-[#9FD401] hover:shadow-[0_0_25px_rgba(159,212,1,0.45)] transition-all duration-300 active:scale-90"
              >
                <XTwitterIcon className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </Magnetic>

            {/* Telegram */}
            <Magnetic strength={0.35}>
              <a
                href="https://t.me/+MR2aUw2u1qBiYzgx"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Join Telegram"
                className="w-12 h-12 sm:w-15 sm:h-15 rounded-full bg-black/60 hover:bg-black/85 border border-zinc-700/90 hover:border-[#9FD401] backdrop-blur-md flex items-center justify-center text-white hover:text-[#9FD401] hover:shadow-[0_0_25px_rgba(159,212,1,0.45)] transition-all duration-300 active:scale-90"
              >
                <TelegramIcon className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </Magnetic>

            {/* Dexscreener / Chart */}
            <Magnetic strength={0.35}>
              <a
                href="https://dexscreener.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Dexscreener Charts"
                className="w-12 h-12 sm:w-15 sm:h-15 rounded-full bg-black/60 hover:bg-black/85 border border-zinc-700/90 hover:border-[#9FD401] backdrop-blur-md flex items-center justify-center text-white hover:text-[#9FD401] hover:shadow-[0_0_25px_rgba(159,212,1,0.45)] transition-all duration-300 active:scale-90"
              >
                <DexscreenerIcon className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </Magnetic>

          </div>

        </div>

        {/* RIGHT COLUMN: Overlaid Floating Robinhood Chain Network Box (Desktop Only) */}
        <div className="hidden lg:flex flex-col items-end justify-end gap-3.5 self-end lg:mb-16 lg:mr-0 xl:mr-2">
          
          {/* Network (Robinhood) Box */}
          <Magnetic strength={0.2}>
            <div className="w-60 sm:w-72 bg-black/80 backdrop-blur-lg border border-[#486318]/70 hover:border-[#9FD401] rounded-2xl p-4.5 transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.7)] hover:shadow-[0_0_25px_rgba(159,212,1,0.3)]">
              <div className="font-morton font-bold text-xs uppercase tracking-wider text-[#9FD401]">
                NETWORK
              </div>
              
              <div className="mt-1.5 flex items-center gap-2.5">
                <div className="relative w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0 flex items-center justify-center">
                  <Image
                    src="/robinhood_chain1771327492835.png"
                    alt="Robinhood Chain Logo"
                    width={32}
                    height={32}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="font-morton font-black text-lg sm:text-xl text-white tracking-wider whitespace-nowrap">
                  ROBINHOOD CHAIN
                </span>
              </div>
            </div>
          </Magnetic>

        </div>

      </div>
    </section>
  )
}
