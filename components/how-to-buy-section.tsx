'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { MdAccountBalanceWallet, MdFlashOn, MdArrowForward, MdArrowDownward } from 'react-icons/md'
import { Magnetic } from '@/components/magnetic'

export default function HowToBuySection() {
  const steps = [
    {
      number: '1',
      title: 'GET A WALLET',
      description: 'Download Robinhood Wallet or any compatible Web3 wallet.',
      icon: (
        <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center text-[#9FD401] drop-shadow-[0_0_15px_rgba(159,212,1,0.6)]">
          <MdAccountBalanceWallet className="w-11 h-11 sm:w-13 sm:h-13" />
        </div>
      ),
    },
    {
      number: '2',
      title: 'GET ETH / FUNDS',
      description: 'Fund your wallet with ETH or tokens on Robinhood Chain.',
      icon: (
        <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border border-[#9FD401]/60 flex items-center justify-center bg-black/50 shadow-[0_0_12px_rgba(159,212,1,0.4)]">
          <div className="absolute inset-0 rounded-full bg-[#9FD401]/20 blur-sm animate-pulse" />
          <Image
            src="/robinhood_chain1771327492835.png"
            alt="Robinhood Chain"
            width={48}
            height={48}
            className="w-full h-full object-cover rounded-full relative z-10 drop-shadow-[0_0_10px_rgba(159,212,1,0.6)] transform hover:scale-110 transition-transform duration-300"
          />
        </div>
      ),
    },
    {
      number: '3',
      title: 'SWAP',
      description: 'Swap for $BLKFUEL on Robinhood DEX or connected exchange.',
      icon: (
        <div className="relative w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-[#9FD401]/30 blur-lg animate-pulse" />
          <Image
            src="/face.png"
            alt="BLKFUEL Face"
            width={56}
            height={56}
            className="object-contain relative z-10 drop-shadow-[0_0_15px_rgba(159,212,1,0.8)] animate-bounce [animation-duration:3s] -scale-x-100 hover:-scale-x-110 transition-transform duration-300"
          />
        </div>
      ),
    },
    {
      number: '4',
      title: 'HODL & ENJOY',
      description: "Hold tight and let's fuel the future!",
      icon: (
        <div className="w-13 h-13 sm:w-15 sm:h-15 rounded-full border-2 border-[#9FD401] flex items-center justify-center shadow-[0_0_15px_rgba(159,212,1,0.6)]">
          <MdFlashOn className="w-8 h-8 sm:w-9 sm:h-9 text-[#9FD401] fill-[#9FD401] animate-pulse" />
        </div>
      ),
    },
  ]

  return (
    <section id="buy" className="relative w-full bg-transparent text-white py-12 sm:py-16 lg:py-20 overflow-hidden select-none">
      <div className="relative z-10 max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-14 text-left"
        >
          <h2 className="font-morton font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white leading-none drop-shadow-md">
            HOW TO BUY <span className="text-[#9FD401] drop-shadow-[0_0_20px_rgba(159,212,1,0.5)]">$BLKFUEL</span>
          </h2>
        </motion.div>

        {/* Steps Container */}
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-between gap-4 lg:gap-2">
          {steps.map((step, idx) => (
            <React.Fragment key={step.number}>
              {/* Step Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ delay: idx * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="w-full lg:flex-1"
              >
                <Magnetic strength={0.15} className="w-full h-full">
                  <div className="group h-full bg-black/80 backdrop-blur-xl border-2 border-[#9FD401] rounded-2xl sm:rounded-3xl p-5 sm:p-6 flex items-center gap-4 sm:gap-5 shadow-[0_0_25px_rgba(159,212,1,0.2)] hover:shadow-[0_0_40px_rgba(159,212,1,0.45)] transition-all duration-500 min-h-[140px] sm:min-h-[150px]">
                    {/* Left Icon Area */}
                    <div className="shrink-0 flex items-center justify-center w-14 sm:w-16">
                      {step.icon}
                    </div>

                    {/* Content Area */}
                    <div className="flex flex-col text-left flex-1 min-w-0">
                      {/* Step Number */}
                      <span className="font-morton font-black text-xl sm:text-2xl text-[#9FD401] leading-none mb-1">
                        {step.number}
                      </span>
                      {/* Step Title */}
                      <h3 className="font-morton font-black text-base sm:text-lg text-white uppercase tracking-wider leading-tight group-hover:text-[#9FD401] transition-colors duration-300">
                        {step.title}
                      </h3>
                      {/* Step Description */}
                      <p className="font-frygia text-xs sm:text-sm text-zinc-300 leading-snug mt-1">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </Magnetic>
              </motion.div>

              {/* Animated Connecting Arrow between steps */}
              {idx < steps.length - 1 && (
                <>
                  {/* Desktop Right Arrow */}
                  <div className="hidden lg:flex items-center justify-center shrink-0 px-1 text-white/80">
                    <MdArrowForward className="w-6 h-6 text-white animate-pulse" />
                  </div>

                  {/* Mobile Down Arrow */}
                  <div className="flex lg:hidden items-center justify-center py-1 text-white/80">
                    <MdArrowDownward className="w-5 h-5 text-white animate-pulse" />
                  </div>
                </>
              )}
            </React.Fragment>
          ))}
        </div>

      </div>
    </section>
  )
}
