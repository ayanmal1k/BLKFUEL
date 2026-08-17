'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink, FileText, Sparkles, Flame, Shield, Users, Coins } from 'lucide-react'
import { useWhitepaper } from './whitepaper-context'

export default function WhitepaperModal() {
  const { isOpen, closeWhitepaper } = useWhitepaper()
  const [activeTab, setActiveTab] = useState<'document' | 'summary'>('document')

  // Close on Escape key & Lock body scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeWhitepaper()
      }
    }

    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, closeWhitepaper])

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 md:p-6 select-none">
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeWhitepaper}
            className="fixed inset-0 bg-black/85 backdrop-blur-xl"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-5xl h-[90vh] max-h-[920px] bg-zinc-950/95 border-2 border-[#9FD401]/50 rounded-2xl sm:rounded-3xl shadow-[0_0_60px_rgba(159,212,1,0.25)] flex flex-col overflow-hidden z-10"
          >
            {/* Top Glowing Header Bar */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4 bg-zinc-900/90 border-b border-zinc-800/80 backdrop-blur-md shrink-0">
              {/* Left Brand info */}
              <div className="flex items-center gap-3">
                <div className="relative w-8 h-8 sm:w-9 sm:h-9 shrink-0 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-[#9FD401]/30 blur-sm" />
                  <Image
                    src="/face.png"
                    alt="$BLKFUEL Mascot"
                    fill
                    className="object-contain relative z-10 -scale-x-100 drop-shadow-[0_0_8px_rgba(159,212,1,0.8)]"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-morton font-black text-base sm:text-lg text-white uppercase tracking-wider">
                      $BLK<span className="text-[#9FD401]">FUEL</span>
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-[#9FD401]/15 border border-[#9FD401]/40 text-[#9FD401] text-[10px] sm:text-xs font-morton font-bold uppercase tracking-wider">
                      Official Whitepaper
                    </span>
                  </div>
                  <p className="hidden sm:block text-xs font-frygia text-zinc-400">
                    The Community Is The Dev • Robinhood Chain
                  </p>
                </div>
              </div>

              {/* View mode toggle + External Link & Close */}
              <div className="flex items-center gap-2 sm:gap-3">
                {/* Tab Pill Buttons */}
                <div className="flex bg-black/60 p-1 rounded-xl border border-zinc-800">
                  <button
                    onClick={() => setActiveTab('document')}
                    className={`px-2.5 sm:px-3 py-1 rounded-lg text-xs font-morton font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                      activeTab === 'document'
                        ? 'bg-[#9FD401] text-black shadow-[0_0_12px_rgba(159,212,1,0.5)]'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    Full Doc
                  </button>
                  <button
                    onClick={() => setActiveTab('summary')}
                    className={`px-2.5 sm:px-3 py-1 rounded-lg text-xs font-morton font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                      activeTab === 'summary'
                        ? 'bg-[#9FD401] text-black shadow-[0_0_12px_rgba(159,212,1,0.5)]'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    Summary
                  </button>
                </div>

                {/* Open in New Window Button */}
                <a
                  href="/BLOCKFUEL%20whitepaper.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-800/80 hover:bg-zinc-700 text-zinc-200 hover:text-white text-xs font-morton font-bold tracking-wider uppercase border border-zinc-700 transition-colors duration-200"
                  title="Open Full HTML in New Tab"
                >
                  <span>New Tab</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                {/* Close Button */}
                <button
                  onClick={closeWhitepaper}
                  aria-label="Close Whitepaper"
                  className="p-2 rounded-xl bg-zinc-800/80 hover:bg-zinc-700 text-zinc-300 hover:text-white hover:border-[#9FD401] border border-zinc-700 transition-all duration-200 cursor-pointer group"
                >
                  <X className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="relative flex-1 w-full h-full bg-black overflow-hidden">
              {activeTab === 'document' ? (
                /* Full HTML Iframe View */
                <div className="w-full h-full relative">
                  <iframe
                    src="/BLOCKFUEL%20whitepaper.html"
                    title="$BLKFUEL Whitepaper"
                    className="w-full h-full border-0 bg-[#020403]"
                  />
                </div>
              ) : (
                /* Sleek Executive Summary View */
                <div className="w-full h-full overflow-y-auto p-5 sm:p-8 lg:p-10 space-y-8 bg-zinc-950/70 text-zinc-200 custom-scrollbar">
                  {/* Hero banner */}
                  <div className="relative rounded-2xl bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 p-6 sm:p-8 overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#9FD401]/10 rounded-full blur-3xl pointer-events-none" />
                    
                    <div className="relative z-10 max-w-2xl space-y-3">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#9FD401]/15 border border-[#9FD401]/30 text-[#9FD401] text-xs font-morton font-bold uppercase tracking-wider">
                        <Sparkles className="w-3.5 h-3.5" />
                        Executive Summary
                      </div>
                      <h2 className="font-morton font-black text-2xl sm:text-3xl lg:text-4xl text-white uppercase tracking-tight">
                        BLOCK FUEL — <span className="text-[#9FD401]">THE COMMUNITY IS THE DEV</span>
                      </h2>
                      <p className="font-frygia text-sm sm:text-base text-zinc-300 leading-relaxed">
                        $BLKFUEL was born from a simple belief: the strongest tokens in crypto aren&apos;t built by shadow teams or venture insiders. They are forged by high-conviction communities who show up, vote, build, and fuel the ecosystem together.
                      </p>
                    </div>
                  </div>

                  {/* TOKENOMICS HIGHLIGHT BOX (User Requirements) */}
                  <div className="rounded-2xl bg-zinc-900/80 border-2 border-[#9FD401] p-6 sm:p-8 space-y-6 shadow-[0_0_30px_rgba(159,212,1,0.2)]">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-zinc-800 pb-4">
                      <div>
                        <h3 className="font-morton font-black text-xl sm:text-2xl text-white uppercase tracking-wide flex items-center gap-2">
                          <Coins className="w-6 h-6 text-[#9FD401]" />
                          TOKENOMICS BREAKDOWN
                        </h3>
                        <p className="text-xs font-frygia text-zinc-400">
                          100% Community Powered • No Hidden Allocations
                        </p>
                      </div>
                      <span className="self-start sm:self-auto px-3 py-1 rounded-full bg-[#9FD401]/20 border border-[#9FD401] text-[#9FD401] text-xs font-morton font-black uppercase tracking-wider">
                        100% COMMUNITY
                      </span>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      <div className="p-4 rounded-xl bg-black/60 border border-zinc-800/80 flex flex-col">
                        <span className="text-xs font-morton font-bold text-zinc-400 uppercase">Total Supply</span>
                        <span className="text-lg sm:text-xl font-morton font-black text-white uppercase mt-1">
                          1,000,000,000 $BLKFUEL
                        </span>
                      </div>

                      <div className="p-4 rounded-xl bg-black/60 border border-zinc-800/80 flex flex-col">
                        <span className="text-xs font-morton font-bold text-zinc-400 uppercase">Community Allocation</span>
                        <span className="text-lg sm:text-xl font-morton font-black text-[#9FD401] uppercase mt-1">
                          100% (Full Supply)
                        </span>
                      </div>

                      <div className="p-4 rounded-xl bg-black/60 border border-zinc-800/80 flex flex-col">
                        <span className="text-xs font-morton font-bold text-zinc-400 uppercase">Presale</span>
                        <span className="text-lg sm:text-xl font-morton font-black text-zinc-300 uppercase mt-1">
                          None (0%)
                        </span>
                      </div>

                      <div className="p-4 rounded-xl bg-black/60 border border-zinc-800/80 flex flex-col">
                        <span className="text-xs font-morton font-bold text-zinc-400 uppercase">Team Allocation</span>
                        <span className="text-lg sm:text-xl font-morton font-black text-zinc-300 uppercase mt-1">
                          None (0%)
                        </span>
                      </div>

                      <div className="p-4 rounded-xl bg-black/60 border border-zinc-800/80 flex flex-col">
                        <span className="text-xs font-morton font-bold text-zinc-400 uppercase">Liquidity</span>
                        <span className="text-lg sm:text-xl font-morton font-black text-[#9FD401] uppercase mt-1 flex items-center gap-1.5">
                          <Shield className="w-4 h-4 text-[#9FD401]" />
                          Locked 100%
                        </span>
                      </div>

                      <div className="p-4 rounded-xl bg-black/60 border border-zinc-800/80 flex flex-col">
                        <span className="text-xs font-morton font-bold text-zinc-400 uppercase">Additional Minting</span>
                        <span className="text-lg sm:text-xl font-morton font-black text-zinc-300 uppercase mt-1">
                          None (Hard Capped)
                        </span>
                      </div>
                    </div>

                    {/* Core Motto */}
                    <div className="p-4 rounded-xl bg-[#9FD401]/10 border border-[#9FD401]/40 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-3">
                      <p className="font-morton font-black text-base sm:text-lg text-white uppercase tracking-wide">
                        &ldquo;No insider bags. No special allocations. The community fuels Block Fuel.&rdquo; 🔥
                      </p>
                      <span className="shrink-0 px-3 py-1 rounded-lg bg-[#9FD401] text-black font-morton font-black text-xs uppercase tracking-wider">
                        100% SAFU
                      </span>
                    </div>
                  </div>

                  {/* Core Pillars */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                    <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-2">
                      <div className="w-10 h-10 rounded-xl bg-[#9FD401]/20 flex items-center justify-center text-[#9FD401]">
                        <Users className="w-5 h-5" />
                      </div>
                      <h4 className="font-morton font-black text-lg text-white uppercase">Community Governance</h4>
                      <p className="font-frygia text-xs sm:text-sm text-zinc-400 leading-relaxed">
                        Big decisions — like launch conditions, liquidity strategies, and branding — are put directly to community votes.
                      </p>
                    </div>

                    <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-2">
                      <div className="w-10 h-10 rounded-xl bg-[#9FD401]/20 flex items-center justify-center text-[#9FD401]">
                        <Flame className="w-5 h-5" />
                      </div>
                      <h4 className="font-morton font-black text-lg text-white uppercase">Fueling Robinhood Chain</h4>
                      <p className="font-frygia text-xs sm:text-sm text-zinc-400 leading-relaxed">
                        Positioned as the flagship community catalyst on Robinhood Chain, bringing viral energy, organic liquidity, and mass adoption.
                      </p>
                    </div>

                    <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-2">
                      <div className="w-10 h-10 rounded-xl bg-[#9FD401]/20 flex items-center justify-center text-[#9FD401]">
                        <Shield className="w-5 h-5" />
                      </div>
                      <h4 className="font-morton font-black text-lg text-white uppercase">Zero Tax & Renounced</h4>
                      <p className="font-frygia text-xs sm:text-sm text-zinc-400 leading-relaxed">
                        Contract renounced at launch with 0% buy and sell taxes, ensuring completely frictionless trading for all participants.
                      </p>
                    </div>
                  </div>

                  {/* Actions Footer */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-zinc-800">
                    <div className="flex items-center gap-3">
                      <a
                        href="https://t.me/+MR2aUw2u1qBiYzgx"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 rounded-xl bg-[#9FD401] hover:bg-[#b2ee02] text-black font-morton font-black text-sm uppercase tracking-wider transition-all duration-200"
                      >
                        Join Telegram ⛽
                      </a>
                      <a
                        href="https://x.com/4blockfuel"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-morton font-black text-sm uppercase tracking-wider transition-all duration-200"
                      >
                        Follow @4blockfuel
                      </a>
                    </div>

                    <button
                      onClick={() => setActiveTab('document')}
                      className="text-xs font-morton font-bold text-[#9FD401] hover:underline uppercase tracking-wider flex items-center gap-1.5"
                    >
                      <FileText className="w-4 h-4" />
                      Read Full 10-Page Whitepaper Document &rarr;
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
