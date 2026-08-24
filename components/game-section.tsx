'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Gamepad2, Play, Flame, Trophy, Zap, Shield, Sparkles, X, Swords, ArrowRight, Wallet } from 'lucide-react'
import { toast } from 'sonner'
import { Magnetic } from '@/components/magnetic'

// Official Game link
const GAME_URL = 'https://blkfuelgame.netlify.app/'

export default function GameSection() {
  const [showControlsModal, setShowControlsModal] = useState(false)
  const [isPlayingTeaser, setIsPlayingTeaser] = useState(false)

  const handlePlayClick = (e: React.MouseEvent) => {
    toast.success('🕹️ Launching BLOCK FUEL PUNCH & RUN!', {
      description: 'Connect your wallet to start playing and record your scores!',
    })
    setIsPlayingTeaser(true)
    setTimeout(() => setIsPlayingTeaser(false), 2000)
  }

  const gameHighlights = [
    {
      icon: <Swords className="w-5 h-5 text-[#9FD401]" />,
      title: 'PUNCH & SMASH',
      description: 'Smash mechanical sentinels and cyber serpents with high-impact punches using [D], [→], or Click.',
    },
    {
      icon: <Flame className="w-5 h-5 text-[#9FD401]" />,
      title: 'COLLECT $BLKFUEL',
      description: 'Gather neon green plasma fuel cells to ignite flame fury multipliers and accelerate your run.',
    },
    {
      icon: <Trophy className="w-5 h-5 text-[#9FD401]" />,
      title: 'ONCHAIN LEADERBOARD',
      description: 'Compete against degens worldwide, achieve record high scores, and claim top community rewards.',
    },
  ]

  const controls = [
    { key: 'WALLET', action: 'Connect Web3 Wallet to authenticate & play' },
    { key: 'D / RIGHT ARROW (→)', action: 'Punch & Smash Obstacles' },
    { key: 'LEFT CLICK / TAP', action: 'Screen Tap / Click to Punch' },
    { key: 'TIMING', action: 'Strike enemies right before impact for combo multipliers' },
  ]

  return (
    <section id="game" className="relative w-full bg-transparent text-white py-16 sm:py-20 lg:py-28 overflow-hidden select-none">
      
      {/* Background glow orb accents */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] bg-[#9FD401]/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[420px] h-[420px] bg-[#9FD401]/8 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="relative z-10 max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col items-center text-center space-y-4 mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/90 border border-[#9FD401]/40 shadow-[0_0_15px_rgba(159,212,1,0.2)]"
          >
            <Gamepad2 className="w-4 h-4 text-[#9FD401] animate-pulse" />
            <span className="font-morton font-bold text-xs sm:text-sm tracking-widest text-[#9FD401] uppercase">
              $BLKFUEL ARCADE EXPERIENCE
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#9FD401] animate-ping" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-morton font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight uppercase leading-none"
          >
            BLOCK FUEL <span className="text-[#9FD401] drop-shadow-[0_0_25px_rgba(159,212,1,0.5)]">PUNCH &amp; RUN</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-2xl text-zinc-300 font-frygia text-sm sm:text-base lg:text-lg leading-relaxed"
          >
            Enter the cybernetic underground. Dash through hostile territory, obliterate mechanical foes, 
            and ignite your flame multiplier in the official $BLKFUEL action mini-game.
          </motion.p>
        </div>

        {/* MAIN GAME SHOWCASE GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT: Game Poster & Interactive Poster Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, x: -30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex justify-center"
          >
            <div className="relative group w-full max-w-[440px] sm:max-w-[480px] rounded-3xl p-1 bg-gradient-to-b from-[#9FD401]/40 via-zinc-800/80 to-zinc-900/90 shadow-[0_0_40px_rgba(0,0,0,0.9),0_0_30px_rgba(159,212,1,0.2)] hover:shadow-[0_0_50px_rgba(159,212,1,0.4)] transition-all duration-500">
              
              {/* Inner Card Container */}
              <div className="relative bg-zinc-950 rounded-[22px] overflow-hidden border border-zinc-800/80">
                
                {/* Poster Image */}
                <div className="relative w-full aspect-[9/16] max-h-[580px] overflow-hidden">
                  <Image
                    src="/game.jpg"
                    alt="BLOCK FUEL PUNCH & RUN Game Poster"
                    fill
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    priority
                  />

                  {/* Gradient overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30 pointer-events-none" />

                  {/* Neon Cyber Corner Accents */}
                  <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#9FD401] pointer-events-none" />
                  <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#9FD401] pointer-events-none" />
                  <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#9FD401] pointer-events-none" />
                  <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#9FD401] pointer-events-none" />

                  {/* Floating Badges on Poster */}
                  <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-[#9FD401]/60 text-[#9FD401] font-morton font-black text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-[0_0_12px_rgba(159,212,1,0.4)]">
                      <Zap className="w-3.5 h-3.5 fill-[#9FD401]" />
                      OFFICIAL GAME
                    </span>
                  </div>

                  <div className="absolute top-4 right-4 z-20">
                    <span className="px-2.5 py-1 rounded-full bg-emerald-950/80 backdrop-blur-md border border-emerald-500/50 text-emerald-400 font-morton font-bold text-[11px] uppercase tracking-wider flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      READY TO PLAY
                    </span>
                  </div>

                  {/* Hover Center Play Button Overlay */}
                  <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px]">
                    <Magnetic strength={0.3}>
                      <a
                        href={GAME_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={handlePlayClick}
                        className="w-20 h-20 rounded-full bg-[#9FD401] hover:bg-[#b2ee02] text-black flex items-center justify-center shadow-[0_0_30px_rgba(159,212,1,0.8)] transform scale-90 group-hover:scale-100 transition-all duration-300 cursor-pointer"
                      >
                        <Play className="w-8 h-8 fill-black translate-x-0.5" />
                      </a>
                    </Magnetic>
                  </div>

                  {/* Bottom title banner on poster */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 z-20 bg-gradient-to-t from-black via-black/80 to-transparent">
                    <p className="text-zinc-400 font-morton text-xs uppercase tracking-widest">CHAPTER 1: IGNITION</p>
                    <h3 className="font-morton font-black text-xl sm:text-2xl text-white uppercase tracking-wide flex items-center justify-between">
                      <span>PUNCH &amp; RUN</span>
                      <span className="text-[#9FD401] text-sm">FREE TO PLAY</span>
                    </h3>
                  </div>
                </div>

                {/* Bottom Quick Specs inside poster frame */}
                <div className="p-4 bg-zinc-950/95 border-t border-zinc-800/80 grid grid-cols-3 gap-2 text-center">
                  <div className="p-2 rounded-xl bg-zinc-900/60 border border-zinc-800/60">
                    <span className="block text-[10px] text-zinc-400 uppercase font-morton tracking-wider">GENRE</span>
                    <span className="block text-xs sm:text-sm font-morton font-bold text-white">ARCADE RUNNER</span>
                  </div>
                  <div className="p-2 rounded-xl bg-zinc-900/60 border border-zinc-800/60">
                    <span className="block text-[10px] text-zinc-400 uppercase font-morton tracking-wider">PUNCH KEY</span>
                    <span className="block text-xs sm:text-sm font-morton font-bold text-[#9FD401]">[D] / [→] / TAP</span>
                  </div>
                  <div className="p-2 rounded-xl bg-zinc-900/60 border border-zinc-800/60">
                    <span className="block text-[10px] text-zinc-400 uppercase font-morton tracking-wider">ACCESS</span>
                    <span className="block text-xs sm:text-sm font-morton font-bold text-[#9FD401]">WALLET REQ.</span>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

          {/* RIGHT: Game Features, Narrative, CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-center space-y-6 sm:space-y-8"
          >
            
            {/* Mission Statement */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-[#9FD401] font-morton font-black text-sm sm:text-base uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>UNLEASH THE ONCHAIN BEAST</span>
              </div>
              <h3 className="font-morton font-black text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tight text-white leading-tight">
                SURVIVE THE GAUNTLET. <br />
                <span className="text-[#9FD401]">COLLECT THE FUEL.</span>
              </h3>
              <p className="text-zinc-300 font-frygia text-sm sm:text-base leading-relaxed">
                Take control of the iconic $BLKFUEL cube fighter. Sprint down neon highway conduits, 
                shatter robotic sentinels with explosive punch strikes, and harness raw power cells to fuel your survival run.
              </p>
            </div>

            {/* Feature Highlights Grid */}
            <div className="space-y-3.5">
              {gameHighlights.map((feature, idx) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group p-4 sm:p-4.5 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 hover:border-[#9FD401]/50 hover:bg-zinc-900/60 transition-all duration-300 flex items-start gap-4 shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
                >
                  <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-700/60 group-hover:border-[#9FD401]/60 group-hover:bg-[#9FD401]/10 transition-colors duration-300 shrink-0">
                    {feature.icon}
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-morton font-black text-sm sm:text-base text-white group-hover:text-[#9FD401] transition-colors duration-200 uppercase tracking-wide">
                      {feature.title}
                    </h4>
                    <p className="font-frygia text-xs sm:text-sm text-zinc-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* ACTION BUTTONS */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              
              {/* PRIMARY PLAY BUTTON */}
              <Magnetic strength={0.25} className="w-full sm:w-auto">
                <a
                  href={GAME_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handlePlayClick}
                  className="group relative inline-flex w-full sm:w-auto items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-[#9FD401] hover:bg-[#b2ee02] text-black font-morton font-black text-base sm:text-lg uppercase tracking-wider shadow-[0_0_25px_rgba(159,212,1,0.45)] hover:shadow-[0_0_40px_rgba(159,212,1,0.8)] transition-all duration-300 transform active:scale-95 cursor-pointer overflow-hidden"
                >
                  {/* Subtle shine reflection */}
                  <span className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out pointer-events-none" />
                  
                  <Gamepad2 className="w-5 h-5 fill-black stroke-black transition-transform duration-300 group-hover:scale-120 group-hover:rotate-12" />
                  <span>PLAY GAME NOW</span>
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </Magnetic>

              {/* SECONDARY CONTROLS MODAL BUTTON */}
              <Magnetic strength={0.2} className="w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => setShowControlsModal(true)}
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-zinc-900/90 hover:bg-zinc-800/90 text-zinc-200 hover:text-white border border-zinc-800 hover:border-zinc-600 font-morton font-bold text-sm sm:text-base uppercase tracking-wider transition-all duration-300 cursor-pointer"
                >
                  <Shield className="w-4 h-4 text-[#9FD401]" />
                  <span>HOW TO PLAY &amp; CONTROLS</span>
                </button>
              </Magnetic>

            </div>

            {/* Quick Status / Reward note */}
            <div className="flex items-center gap-3 px-4 py-3.5 rounded-xl bg-zinc-950/80 border border-[#9FD401]/30 text-zinc-300 text-xs sm:text-sm font-frygia shadow-[0_0_15px_rgba(159,212,1,0.1)]">
              <Wallet className="w-5 h-5 text-[#9FD401] shrink-0" />
              <span>
                <strong className="text-white font-medium font-morton uppercase tracking-wide">Web3 Wallet Required:</strong> Connect your wallet to enter the arena, play, and log your high scores on the leaderboard.
              </span>
            </div>

          </motion.div>

        </div>

      </div>

      {/* HOW TO PLAY & CONTROLS MODAL */}
      <AnimatePresence>
        {showControlsModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-lg rounded-3xl bg-zinc-950 border border-[#9FD401]/40 p-6 sm:p-8 shadow-[0_0_50px_rgba(159,212,1,0.3)]"
            >
              {/* Close Button */}
              <button
                onClick={() => setShowControlsModal(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-2xl bg-[#9FD401]/10 border border-[#9FD401]/30">
                  <Gamepad2 className="w-6 h-6 text-[#9FD401]" />
                </div>
                <div>
                  <h3 className="font-morton font-black text-xl sm:text-2xl text-white uppercase">
                    HOW TO PLAY
                  </h3>
                  <p className="text-zinc-400 font-frygia text-xs sm:text-sm">
                    Master the controls and maximize your multiplier
                  </p>
                </div>
              </div>

              {/* Controls List */}
              <div className="space-y-3 mb-6">
                {controls.map((item) => (
                  <div
                    key={item.key}
                    className="flex items-center justify-between p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 text-sm"
                  >
                    <span className="font-morton font-black text-[#9FD401] bg-black/60 px-2.5 py-1 rounded-lg border border-zinc-700">
                      {item.key}
                    </span>
                    <span className="font-frygia text-zinc-300 text-right">
                      {item.action}
                    </span>
                  </div>
                ))}
              </div>

              {/* Pro Tip */}
              <div className="p-3.5 rounded-xl bg-[#9FD401]/10 border border-[#9FD401]/30 text-xs font-frygia text-zinc-300 space-y-1 mb-6">
                <p className="font-morton font-bold text-[#9FD401] uppercase">PRO TIP ⚡</p>
                <p>
                  Time your punches right before obstacles to trigger flame combo surges for 2x point bonuses!
                </p>
              </div>

              {/* Modal CTA */}
              <div className="flex gap-3">
                <a
                  href={GAME_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    handlePlayClick(e)
                    setShowControlsModal(false)
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#9FD401] hover:bg-[#b2ee02] text-black font-morton font-black text-base uppercase tracking-wider shadow-[0_0_20px_rgba(159,212,1,0.4)] transition-all cursor-pointer"
                >
                  <Play className="w-4 h-4 fill-black" />
                  <span>START PLAYING</span>
                </a>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  )
}
