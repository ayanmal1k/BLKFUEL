'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { MdWaterDrop, MdVerifiedUser, MdGroups, MdFlashOn } from 'react-icons/md'
import { Magnetic } from '@/components/magnetic'

export default function TokenomicsSection() {
  const tokenDistribution = [
    { name: 'Total Supply', value: '1,000,000,000 $BLKFUEL', color: '#9FD401' },
    { name: 'Community', value: '100%', color: '#9FD401' },
    { name: 'Presale', value: 'None (0%)', color: '#88bc01' },
    { name: 'Team Allocation', value: 'None (0%)', color: '#606953' },
    { name: 'Liquidity', value: 'Locked', color: '#b2ee02' },
    { name: 'Additional Minting', value: 'None (Hard Capped)', color: '#4a533f' },
  ]

  const featureCards = [
    {
      icon: <MdWaterDrop className="w-10 h-10 sm:w-12 sm:h-12 text-[#9FD401] drop-shadow-[0_0_12px_rgba(159,212,1,0.6)]" />,
      line1: 'LIQUIDITY',
      line2: 'LOCKED',
    },
    {
      icon: <MdVerifiedUser className="w-10 h-10 sm:w-12 sm:h-12 text-[#9FD401] drop-shadow-[0_0_12px_rgba(159,212,1,0.6)]" />,
      line1: 'CONTRACT',
      line2: 'RENOUNCED',
    },
    {
      icon: <MdGroups className="w-10 h-10 sm:w-12 sm:h-12 text-[#9FD401] drop-shadow-[0_0_12px_rgba(159,212,1,0.6)]" />,
      line1: '100%',
      line2: 'COMMUNITY',
    },
    {
      icon: (
        <div className="relative flex items-center justify-center">
          <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-full border-2 border-[#9FD401] flex items-center justify-center shadow-[0_0_12px_rgba(159,212,1,0.5)]">
            <MdFlashOn className="w-7 h-7 sm:w-8 sm:h-8 text-[#9FD401] fill-[#9FD401]" />
          </div>
        </div>
      ),
      line1: 'ZERO',
      line2: 'MINTING',
    },
  ]

  return (
    <section id="tokenomics" className="relative w-full bg-transparent text-white py-12 sm:py-16 lg:py-20 overflow-hidden select-none">
      <div className="relative z-10 max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-12 space-y-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-left"
        >
          <h2 className="font-morton font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white drop-shadow-md">
            TOKENOMICS
          </h2>
          <p className="font-frygia text-zinc-400 text-sm sm:text-base mt-2 max-w-xl">
            100% fair launch dedicated to the community. No insider bags. No special allocations.
          </p>
        </motion.div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-12 items-center">
          
          {/* LEFT: 100% Community Donut Chart + Distribution Legend */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: -30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col sm:flex-row items-center justify-start gap-6 sm:gap-10"
          >
            
            {/* Donut Chart with Mascot Face in Center */}
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-60 lg:h-60 shrink-0 flex items-center justify-center">
              <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 200 200">
                {/* Background Track */}
                <circle
                  cx="100"
                  cy="100"
                  r="74"
                  fill="transparent"
                  stroke="#18181b"
                  strokeWidth="28"
                />

                {/* 100% Community Allocation Glow Ring */}
                <circle
                  cx="100"
                  cy="100"
                  r="74"
                  fill="transparent"
                  stroke="#9FD401"
                  strokeWidth="28"
                  strokeDasharray="464.95 464.95"
                  strokeDashoffset="0"
                  className="transition-all duration-700 drop-shadow-[0_0_16px_rgba(159,212,1,0.7)]"
                />
              </svg>

              {/* Inner Face Image Container */}
              <div className="absolute inset-0 m-auto w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-black border border-[#9FD401]/40 flex items-center justify-center overflow-visible shadow-[inset_0_0_20px_rgba(159,212,1,0.2)]">
                <motion.div
                  animate={{ scale: [1, 1.06, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative w-20 h-20 sm:w-24 sm:h-24"
                >
                  <Image
                    src="/face.png"
                    alt="BLKFUEL Face"
                    fill
                    priority
                    className="object-contain drop-shadow-[0_0_15px_rgba(159,212,1,0.6)] transform hover:scale-110 transition-transform duration-300"
                  />
                </motion.div>
              </div>
            </div>

            {/* Distribution Legend List */}
            <div className="flex flex-col space-y-2.5 sm:space-y-3 w-full sm:w-auto min-w-[220px]">
              {tokenDistribution.map((item, idx) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: idx * 0.06, duration: 0.4 }}
                  className="flex items-center justify-between gap-4 sm:gap-6 group py-0.5 border-b border-zinc-900/60 pb-1.5"
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className="w-3 h-3 rounded-full shrink-0 shadow-[0_0_8px_rgba(0,0,0,0.5)] transition-transform duration-300 group-hover:scale-125"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="font-frygia font-medium text-xs sm:text-sm text-zinc-300 group-hover:text-white transition-colors duration-200">
                      {item.name}
                    </span>
                  </div>
                  <span className={`font-morton font-bold text-xs sm:text-sm tracking-wide ${
                    item.value.includes('100%') || item.value.includes('Locked')
                      ? 'text-[#9FD401] drop-shadow-[0_0_8px_rgba(159,212,1,0.4)]'
                      : 'text-zinc-200'
                  }`}>
                    {item.value}
                  </span>
                </motion.div>
              ))}
            </div>

          </motion.div>

          {/* RIGHT: 4 Metric Cards Row */}
          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-4 gap-3.5 sm:gap-4 lg:gap-3.5 xl:gap-4">
            {featureCards.map((card, idx) => (
              <motion.div
                key={card.line1 + card.line2}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ delay: idx * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <Magnetic strength={0.2} className="w-full h-full">
                  <div className="group h-full min-h-[160px] sm:min-h-[180px] bg-black/80 backdrop-blur-md border border-zinc-800 hover:border-[#9FD401] rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-center text-center transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_25px_rgba(159,212,1,0.3)]">
                    {/* Glowing Icon */}
                    <div className="mb-4 sm:mb-5 transition-transform duration-300 group-hover:scale-110">
                      {card.icon}
                    </div>

                    {/* Text 2 Lines */}
                    <div className="font-morton font-black text-xs sm:text-sm md:text-base uppercase tracking-wider text-white group-hover:text-[#9FD401] transition-colors duration-300 leading-tight">
                      <div>{card.line1}</div>
                      <div>{card.line2}</div>
                    </div>
                  </div>
                </Magnetic>
              </motion.div>
            ))}
          </div>

        </div>

        {/* BOTTOM HIGHLIGHT QUOTE CARD */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative w-full rounded-2xl bg-zinc-950/90 border border-[#9FD401]/50 p-5 sm:p-6 text-center overflow-hidden shadow-[0_0_25px_rgba(159,212,1,0.15)]"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#9FD401]/10 via-transparent to-[#9FD401]/10 pointer-events-none" />
          <p className="relative z-10 font-morton font-black text-base sm:text-xl lg:text-2xl text-white uppercase tracking-wide">
            No insider bags. No special allocations. The community fuels Block Fuel. 🔥
          </p>
        </motion.div>

      </div>
    </section>
  )
}

