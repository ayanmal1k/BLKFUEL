'use client'

import React from 'react'
import Image from 'next/image'
import { MdWaterDrop, MdVerifiedUser, MdGroups, MdFlashOn } from 'react-icons/md'
import { Magnetic } from '@/components/magnetic'

export default function TokenomicsSection() {
  const tokenDistribution = [
    { name: 'Liquidity', percent: '40%', color: '#9FD401', bgClass: 'bg-[#9FD401]' },
    { name: 'Marketing', percent: '20%', color: '#88bc01', bgClass: 'bg-[#88bc01]' },
    { name: 'Community', percent: '20%', color: '#606953', bgClass: 'bg-[#606953]' },
    { name: 'Team', percent: '10%', color: '#3d4434', bgClass: 'bg-[#3d4434]' },
    { name: 'CEX / Listings', percent: '10%', color: '#272b22', bgClass: 'bg-[#272b22]' },
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
      line1: 'COMMUNITY',
      line2: 'DRIVEN',
    },
    {
      icon: (
        <div className="relative flex items-center justify-center">
          <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-full border-2 border-[#9FD401] flex items-center justify-center shadow-[0_0_12px_rgba(159,212,1,0.5)]">
            <MdFlashOn className="w-7 h-7 sm:w-8 sm:h-8 text-[#9FD401] fill-[#9FD401]" />
          </div>
        </div>
      ),
      line1: '100%',
      line2: 'SAFU',
    },
  ]

  return (
    <section id="tokenomics" className="relative w-full bg-black text-white py-10 sm:py-14 lg:py-16 overflow-hidden select-none">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#9FD401]/8 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Heading */}
        <div className="mb-8 sm:mb-10 text-left">
          <h2 className="font-morton font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white drop-shadow-md">
            TOKENOMICS
          </h2>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-12 items-center">
          
          {/* LEFT: Pie Chart + Distribution Legend */}
          <div className="lg:col-span-6 flex flex-col sm:flex-row items-center sm:items-center justify-start gap-6 sm:gap-10">
            
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
                  strokeWidth="30"
                />

                {/* 40% Liquidity (0% -> 40%) - Circ: 464.95, Dash: 185.98 */}
                <circle
                  cx="100"
                  cy="100"
                  r="74"
                  fill="transparent"
                  stroke="#9FD401"
                  strokeWidth="30"
                  strokeDasharray="184.5 464.95"
                  strokeDashoffset="0"
                  className="transition-all duration-500"
                />

                {/* 20% Marketing (40% -> 60%) - Dash: 92.99 */}
                <circle
                  cx="100"
                  cy="100"
                  r="74"
                  fill="transparent"
                  stroke="#88bc01"
                  strokeWidth="30"
                  strokeDasharray="91.5 464.95"
                  strokeDashoffset="-185.98"
                  className="transition-all duration-500"
                />

                {/* 20% Community (60% -> 80%) - Dash: 92.99 */}
                <circle
                  cx="100"
                  cy="100"
                  r="74"
                  fill="transparent"
                  stroke="#606953"
                  strokeWidth="30"
                  strokeDasharray="91.5 464.95"
                  strokeDashoffset="-278.97"
                  className="transition-all duration-500"
                />

                {/* 10% Team (80% -> 90%) - Dash: 46.49 */}
                <circle
                  cx="100"
                  cy="100"
                  r="74"
                  fill="transparent"
                  stroke="#3d4434"
                  strokeWidth="30"
                  strokeDasharray="45 464.95"
                  strokeDashoffset="-371.96"
                  className="transition-all duration-500"
                />

                {/* 10% CEX / Listings (90% -> 100%) - Dash: 46.49 */}
                <circle
                  cx="100"
                  cy="100"
                  r="74"
                  fill="transparent"
                  stroke="#272b22"
                  strokeWidth="30"
                  strokeDasharray="45 464.95"
                  strokeDashoffset="-418.45"
                  className="transition-all duration-500"
                />
              </svg>

              {/* Inner Face Image Container */}
              <div className="absolute inset-0 m-auto w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-black flex items-center justify-center overflow-visible shadow-[inset_0_0_15px_rgba(0,0,0,0.9)]">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24">
                  <Image
                    src="/face.png"
                    alt="BLKFUEL Face"
                    fill
                    priority
                    className="object-contain drop-shadow-[0_0_15px_rgba(159,212,1,0.5)] transform hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>

            {/* Distribution Legend List */}
            <div className="flex flex-col space-y-3 sm:space-y-3.5 w-full sm:w-auto min-w-[200px]">
              {tokenDistribution.map((item) => (
                <div key={item.name} className="flex items-center justify-between gap-6 sm:gap-8 group">
                  <div className="flex items-center gap-3">
                    <span
                      className="w-3.5 h-3.5 rounded-full shrink-0 shadow-[0_0_8px_rgba(0,0,0,0.5)] transition-transform duration-300 group-hover:scale-125"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="font-frygia font-medium text-sm sm:text-base text-zinc-200 group-hover:text-white transition-colors duration-200">
                      {item.name}
                    </span>
                  </div>
                  <span className="font-morton font-bold text-sm sm:text-base text-white tabular-nums tracking-wide">
                    {item.percent}
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* RIGHT: 4 Metric Cards Row */}
          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-4 gap-3.5 sm:gap-4 lg:gap-3.5 xl:gap-4">
            {featureCards.map((card) => (
              <Magnetic key={card.line1 + card.line2} strength={0.2} className="w-full h-full">
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
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
