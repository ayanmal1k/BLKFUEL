'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Zap } from 'lucide-react'
import { toast } from 'sonner'
import { Magnetic } from '@/components/magnetic'

export default function Footer() {
  const [buyText, setBuyText] = useState('BUY $BLKFUEL')

  const handleBuyClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setBuyText('COMING SOON')
    toast.info('🚀 $BLKFUEL Token: Coming Soon on Robinhood Chain!')
    setTimeout(() => {
      setBuyText('BUY $BLKFUEL')
    }, 2500)
  }

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Tokenomics', href: '#tokenomics' },
    { name: 'Roadmap', href: '#roadmap' },
    { name: 'How to Buy', href: '#buy' },
  ]

  return (
    <footer className="relative w-full bg-transparent text-white pt-12 sm:pt-16 pb-8 overflow-hidden select-none">
      <div className="relative z-10 max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* TOP CTA BANNER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full bg-zinc-950/90 border border-zinc-800/90 hover:border-[#9FD401]/50 rounded-3xl overflow-hidden shadow-[0_0_35px_rgba(0,0,0,0.8)] transition-all duration-500"
        >
          {/* Subtle inner gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#9FD401]/10 via-transparent to-[#9FD401]/5 pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-6 sm:px-8 lg:px-10 pt-6 sm:pt-8 lg:pt-6 pb-0 lg:pb-0 gap-6 lg:gap-8">
            
            {/* Left & Middle: Character Mascot Attached to Bottom + Heading Copy */}
            <div className="flex flex-col sm:flex-row items-center sm:items-end gap-6 sm:gap-8 lg:gap-10 text-center sm:text-left w-full lg:w-auto">
              
              {/* Thumbs-up Character Mascot Attached to Bottom & Much Bigger */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-48 sm:w-60 lg:w-64 xl:w-72 h-[180px] sm:h-[230px] lg:h-[250px] xl:h-[270px] shrink-0 self-center sm:self-end flex items-end"
              >
                <Image
                  src="/social.png"
                  alt="BLKFUEL Mascot Thumbs Up"
                  fill
                  priority
                  className="object-contain object-bottom drop-shadow-[0_10px_30px_rgba(159,212,1,0.6)] transform hover:scale-105 transition-transform duration-300"
                />
              </motion.div>

              {/* Headings aligned and spaced */}
              <div className="space-y-1 sm:space-y-1.5 pb-6 sm:pb-8 lg:pb-7">
                <h3 className="font-morton font-black text-2xl sm:text-3xl lg:text-4xl xl:text-[2.6rem] text-white uppercase leading-[0.95] tracking-tight">
                  FUEL THE CHAIN.
                </h3>
                <h3 className="font-morton font-black text-2xl sm:text-3xl lg:text-4xl xl:text-[2.6rem] text-white uppercase leading-[0.95] tracking-tight">
                  FUEL THE FUTURE.
                </h3>
                <p className="font-morton font-black text-lg sm:text-xl lg:text-2xl xl:text-[1.6rem] text-[#9FD401] uppercase tracking-wide pt-1 drop-shadow-[0_0_18px_rgba(159,212,1,0.45)]">
                  JOIN THE $BLKFUEL MOVEMENT.
                </p>
              </div>
            </div>

            {/* Right: Buy Button + Subtext */}
            <div className="flex flex-col items-center lg:items-end gap-2.5 w-full sm:w-auto pb-6 sm:pb-8 lg:pb-7">
              <Magnetic strength={0.25} className="w-full sm:w-auto">
                <button
                  type="button"
                  onClick={handleBuyClick}
                  className="group inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-2xl bg-[#9FD401] hover:bg-[#b2ee02] text-black font-morton font-black text-lg sm:text-xl uppercase tracking-wider shadow-[0_0_25px_rgba(159,212,1,0.5)] hover:shadow-[0_0_40px_rgba(159,212,1,0.8)] transition-all duration-300 transform active:scale-95 w-full sm:w-auto cursor-pointer"
                >
                  <span>{buyText}</span>
                  <Zap className="w-5 h-5 sm:w-6 sm:h-6 fill-black stroke-black transition-transform duration-300 group-hover:scale-115" />
                </button>
              </Magnetic>

              <span className="font-morton font-bold text-xs sm:text-sm text-zinc-400 uppercase tracking-widest text-center lg:text-right">
                EVERY BLOCK NEEDS FUEL.
              </span>
            </div>

          </div>
        </motion.div>

        {/* BOTTOM NAVIGATION & COPYRIGHT ROW */}
        <div className="mt-8 sm:mt-12 pt-6 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-zinc-400 font-frygia">
          <div>
            &copy; 2026 $BLKFUEL. All Rights Reserved.
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-5 sm:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#9FD401] transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>

      </div>
    </footer>
  )
}
