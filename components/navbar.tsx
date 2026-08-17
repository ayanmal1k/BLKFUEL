'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { toast } from 'sonner'
import { Zap, Menu, X } from 'lucide-react'
import { Magnetic } from '@/components/magnetic'
import { useWhitepaper } from '@/components/whitepaper-context'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [buyText, setBuyText] = useState('BUY $BLKFUEL')
  const { openWhitepaper } = useWhitepaper()

  const handleBuyClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setBuyText('COMING SOON')
    toast.info('🚀 $BLKFUEL Token: Coming Soon on Robinhood Chain!')
    setTimeout(() => {
      setBuyText('BUY $BLKFUEL')
    }, 2500)
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Tokenomics', href: '#tokenomics' },
    { name: 'Whitepaper', onClick: openWhitepaper },
    { name: 'Roadmap', href: '#roadmap' },
    { name: 'How to Buy', href: '#buy' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/90 backdrop-blur-xl border-b border-zinc-800/80 shadow-[0_4px_30px_rgba(0,0,0,0.8)] py-3 sm:py-3.5'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between">
        
        {/* LEFT: Horizontally Flipped Face + Brand Name */}
        <Magnetic strength={0.2}>
          <a href="#" className="flex items-center gap-3 group select-none">
            {/* Horizontally flipped face image */}
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 shrink-0 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-[#9FD401]/25 blur-md group-hover:bg-[#9FD401]/40 transition-colors duration-300" />
              <Image
                src="/face.png"
                alt="BLKFUEL Face"
                fill
                priority
                className="object-contain relative z-10 -scale-x-100 drop-shadow-[0_0_12px_rgba(159,212,1,0.7)] group-hover:scale-110 group-hover:-scale-x-110 transition-transform duration-300"
              />
            </div>

            {/* Brand Logo Name */}
            <span className="font-morton font-black text-xl sm:text-2xl text-white tracking-wider uppercase group-hover:text-[#9FD401] transition-colors duration-300">
              $BLK<span className="text-[#9FD401]">FUEL</span>
            </span>
          </a>
        </Magnetic>

        {/* MIDDLE: Real Nav Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => {
            if (link.onClick) {
              return (
                <button
                  key={link.name}
                  type="button"
                  onClick={link.onClick}
                  className="relative font-morton font-bold text-sm lg:text-base uppercase tracking-wider text-zinc-300 hover:text-[#9FD401] transition-colors duration-200 group py-1 cursor-pointer bg-transparent border-none"
                >
                  <span>{link.name}</span>
                  {/* Bottom hover bar indicator */}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#9FD401] shadow-[0_0_8px_#9FD401] group-hover:w-full transition-all duration-300" />
                </button>
              )
            }
            return (
              <a
                key={link.name}
                href={link.href}
                className="relative font-morton font-bold text-sm lg:text-base uppercase tracking-wider text-zinc-300 hover:text-[#9FD401] transition-colors duration-200 group py-1"
              >
                <span>{link.name}</span>
                {/* Bottom hover bar indicator */}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#9FD401] shadow-[0_0_8px_#9FD401] group-hover:w-full transition-all duration-300" />
              </a>
            )
          })}
        </nav>

        {/* RIGHT: Buy Button (Desktop) + Mobile Hamburger Toggle */}
        <div className="flex items-center gap-4">
          {/* Desktop Only CTA Button */}
          <Magnetic strength={0.25} className="hidden md:inline-block">
            <button
              type="button"
              onClick={handleBuyClick}
              className="group inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-2.5 rounded-xl bg-[#9FD401] hover:bg-[#b2ee02] text-black font-morton font-black text-sm sm:text-base uppercase tracking-wider shadow-[0_0_20px_rgba(159,212,1,0.4)] hover:shadow-[0_0_35px_rgba(159,212,1,0.75)] transition-all duration-300 transform active:scale-95 cursor-pointer"
            >
              <span>{buyText}</span>
              <Zap className="w-4 h-4 fill-black stroke-black transition-transform duration-300 group-hover:scale-115" />
            </button>
          </Magnetic>

          {/* Mobile Hamburger Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 text-zinc-300 hover:text-[#9FD401] transition-colors duration-200 cursor-pointer"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* MOBILE MENU DROPDOWN */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 border-b border-zinc-800/90 backdrop-blur-2xl px-6 py-6 transition-all duration-300 space-y-4 shadow-[0_20px_40px_rgba(0,0,0,0.9)]">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => {
              if (link.onClick) {
                return (
                  <button
                    key={link.name}
                    type="button"
                    onClick={() => {
                      setIsMobileMenuOpen(false)
                      link.onClick()
                    }}
                    className="font-morton font-bold text-lg uppercase tracking-wider text-left text-zinc-200 hover:text-[#9FD401] transition-colors duration-200 bg-transparent border-none cursor-pointer"
                  >
                    {link.name}
                  </button>
                )
              }
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-morton font-bold text-lg uppercase tracking-wider text-zinc-200 hover:text-[#9FD401] transition-colors duration-200"
                >
                  {link.name}
                </a>
              )
            })}
          </nav>

          <div className="pt-2">
            <button
              type="button"
              onClick={(e) => {
                handleBuyClick(e)
                setTimeout(() => setIsMobileMenuOpen(false), 800)
              }}
              className="inline-flex w-full items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#9FD401] hover:bg-[#b2ee02] text-black font-morton font-black text-base uppercase tracking-wider shadow-[0_0_20px_rgba(159,212,1,0.5)] transition-all duration-300 cursor-pointer"
            >
              <span>{buyText}</span>
              <Zap className="w-4 h-4 fill-black stroke-black" />
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
