'use client'

import React from 'react'
import { Box, Flame, Lock, ShieldCheck, Users } from 'lucide-react'
import { Magnetic } from '@/components/magnetic'

interface StatItemProps {
  icon: React.ReactNode
  label: string
  value: string
  isLast?: boolean
}

function StatItem({ icon, label, value, isLast = false }: StatItemProps) {
  return (
    <Magnetic strength={0.15} className="w-full">
      <div className="group flex items-center gap-3 sm:gap-4 px-3 sm:px-6 py-2.5 transition-all duration-300">
        {/* Glowing Icon */}
        <div className="flex-shrink-0 text-[#9FD401] drop-shadow-[0_0_12px_rgba(159,212,1,0.6)] group-hover:scale-110 group-hover:drop-shadow-[0_0_18px_rgba(159,212,1,0.9)] transition-all duration-300">
          {icon}
        </div>

        {/* Text Content */}
        <div className="flex flex-col text-left">
          <span className="font-morton font-bold text-[0.7rem] sm:text-xs tracking-wider uppercase text-[#9FD401] leading-none mb-1">
            {label}
          </span>
          <span className="font-morton font-black text-lg sm:text-xl lg:text-2xl uppercase tracking-wide text-white leading-none whitespace-nowrap group-hover:text-[#9FD401] transition-colors duration-300">
            {value}
          </span>
        </div>
      </div>
    </Magnetic>
  )
}

export default function TokenStatsBar() {
  const stats = [
    {
      icon: <Box className="w-8 h-8 sm:w-10 sm:h-10 stroke-[2.2]" />,
      label: 'TOTAL SUPPLY',
      value: '1,000,000,000',
    },
    {
      icon: <Flame className="w-8 h-8 sm:w-10 sm:h-10 stroke-[2.2]" />,
      label: 'TAX',
      value: '0%',
    },
    {
      icon: <Lock className="w-8 h-8 sm:w-10 sm:h-10 stroke-[2.2]" />,
      label: 'LIQUIDITY',
      value: 'LOCKED',
    },
    {
      icon: <ShieldCheck className="w-8 h-8 sm:w-10 sm:h-10 stroke-[2.2]" />,
      label: 'CONTRACT',
      value: 'RENOUNCED',
    },
    {
      icon: <Users className="w-8 h-8 sm:w-10 sm:h-10 stroke-[2.2]" />,
      label: 'OWNERSHIP',
      value: 'COMMUNITY',
    },
  ]

  return (
    <section className="relative w-full -mt-4 sm:-mt-5 lg:-mt-6 px-4 sm:px-8 lg:px-10 pb-16 sm:pb-20 z-30 pointer-events-auto">
      <div className="max-w-[1480px] w-full mx-auto">
        {/* Glowing Neon Green Stats Rectangle Container (20% overlapping hero bg, 80% below) */}
        <div className="relative rounded-xl border-2 border-[#9FD401] bg-black/90 backdrop-blur-2xl p-3.5 sm:p-5 shadow-[0_0_35px_rgba(159,212,1,0.3)] hover:shadow-[0_0_55px_rgba(159,212,1,0.5)] transition-all duration-500">
          
          {/* Subtle Corner Glow Accent */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#9FD401]/10 via-transparent to-[#9FD401]/10 pointer-events-none" />

          {/* Desktop & Tablet: Horizontal Flow / Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-0 lg:divide-x lg:divide-zinc-800/80 items-center justify-between">
            {stats.map((stat, idx) => (
              <div
                key={stat.label}
                className={`flex items-center justify-center ${
                  idx === stats.length - 1 ? 'col-span-2 md:col-span-1' : ''
                }`}
              >
                <StatItem
                  icon={stat.icon}
                  label={stat.label}
                  value={stat.value}
                  isLast={idx === stats.length - 1}
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
