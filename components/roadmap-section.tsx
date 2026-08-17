'use client'

import React from 'react'
import { MdRocketLaunch, MdLocalFireDepartment, MdPublic } from 'react-icons/md'
import { Magnetic } from '@/components/magnetic'

// Isometric Cube SVG matching the design
function CubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
      {/* Inner fuel flame detail */}
      <path d="M12 9.5c.6-.8 1-1.3 1-2 0-.8-.7-1.5-1.5-1.5-.4 0-.8.2-1.1.5-.4.4-.4 1.1-.1 1.6.4.7.9 1 1.7 1.4z" strokeWidth="1.2" fill="currentColor" fillOpacity="0.4" />
    </svg>
  )
}

// Continuous Animated Horizontal Connector with SMIL + CSS + Traveling Energy Pulse
function AnimatedHorizontalConnector() {
  return (
    <div className="relative flex-1 flex items-center justify-center px-1">
      {/* Animated Dashed SVG Line */}
      <svg className="w-full h-4 overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 16">
        <defs>
          <linearGradient id="neonGlowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#9FD401" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#c5ff00" stopOpacity="1" />
            <stop offset="100%" stopColor="#9FD401" stopOpacity="0.6" />
          </linearGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Glow Underlay Line */}
        <line
          x1="0"
          y1="8"
          x2="100"
          y2="8"
          stroke="#9FD401"
          strokeWidth="3"
          strokeDasharray="6, 6"
          strokeOpacity="0.4"
          filter="url(#glow)"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="0"
            to="-24"
            dur="0.8s"
            repeatCount="indefinite"
          />
        </line>

        {/* Main Sharp Animated Dashed Line */}
        <line
          x1="0"
          y1="8"
          x2="100"
          y2="8"
          stroke="url(#neonGlowGrad)"
          strokeWidth="2.5"
          strokeDasharray="6, 6"
          strokeLinecap="round"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="0"
            to="-24"
            dur="0.8s"
            repeatCount="indefinite"
          />
        </line>
      </svg>

      {/* Center Checkpoint Node with Pulse */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none">
        <div className="w-3.5 h-3.5 rounded-full bg-zinc-800 border-2 border-zinc-500 shadow-[0_0_8px_rgba(159,212,1,0.5)] relative">
          <div className="absolute inset-0 rounded-full bg-[#9FD401] animate-ping opacity-40" />
        </div>
      </div>
    </div>
  )
}

// Continuous Animated Vertical Connector for Mobile
function AnimatedVerticalConnector() {
  return (
    <div className="relative w-8 h-12 sm:h-14 flex items-center justify-center my-1">
      <svg className="w-4 h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 16 60">
        <line
          x1="8"
          y1="0"
          x2="8"
          y2="60"
          stroke="#9FD401"
          strokeWidth="2.5"
          strokeDasharray="6, 6"
          strokeLinecap="round"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="0"
            to="-24"
            dur="0.8s"
            repeatCount="indefinite"
          />
        </line>
      </svg>

      {/* Center Node on Mobile */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-zinc-800 border border-zinc-500 shadow-[0_0_6px_rgba(159,212,1,0.6)]" />
    </div>
  )
}

export default function RoadmapSection() {
  const phases = [
    {
      number: '1',
      title: 'LAUNCH',
      icon: <MdRocketLaunch className="w-9 h-9 sm:w-11 sm:h-11 text-[#9FD401]" />,
      items: ['Website Live', 'Token Launch', 'Community Building'],
    },
    {
      number: '2',
      title: 'IGNITE',
      icon: <MdLocalFireDepartment className="w-9 h-9 sm:w-11 sm:h-11 text-[#9FD401]" />,
      items: ['Marketing Push', 'Partnerships', 'Exchange Listings'],
    },
    {
      number: '3',
      title: 'FUEL',
      icon: <CubeIcon className="w-9 h-9 sm:w-11 sm:h-11 text-[#9FD401]" />,
      items: ['Ecosystem Growth', 'DApp Integrations', 'More Utilities'],
    },
    {
      number: '4',
      title: 'DOMINATE',
      icon: <MdPublic className="w-9 h-9 sm:w-11 sm:h-11 text-[#9FD401]" />,
      items: ['Mass Adoption', 'Global Expansion', 'The Future is Fuel'],
    },
  ]

  return (
    <section id="roadmap" className="relative w-full bg-black text-white py-12 sm:py-16 lg:py-20 overflow-hidden select-none">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#9FD401]/8 blur-[160px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Heading */}
        <div className="mb-10 sm:mb-14 lg:mb-16 text-left">
          <h2 className="font-morton font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white drop-shadow-md">
            ROADMAP
          </h2>
        </div>

        {/* DESKTOP LAYOUT (Horizontal with direct animated connectors between phases) */}
        <div className="hidden lg:block relative w-full pb-6">
          
          {/* Main Phase Icons and Connectors Row */}
          <div className="flex items-start justify-between w-full">
            {phases.map((phase, idx) => (
              <React.Fragment key={phase.number}>
                {/* Single Phase Column */}
                <div className="flex flex-col items-center text-center w-56 xl:w-64 shrink-0">
                  
                  {/* Phase Number Pill */}
                  <div className="w-7 h-7 rounded-full bg-black border-2 border-[#9FD401] flex items-center justify-center font-morton font-bold text-xs text-[#9FD401] shadow-[0_0_12px_rgba(159,212,1,0.5)] mb-2.5 z-20">
                    {phase.number}
                  </div>

                  {/* Main Glowing Circle Icon */}
                  <Magnetic strength={0.25}>
                    <div className="w-28 h-28 xl:w-32 xl:h-32 rounded-full bg-black border-2 border-[#9FD401] flex items-center justify-center shadow-[0_0_30px_rgba(159,212,1,0.35)] hover:shadow-[0_0_45px_rgba(159,212,1,0.7)] transition-all duration-300 transform hover:scale-105 group cursor-pointer">
                      <div className="transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_0_15px_rgba(159,212,1,0.6)]">
                        {phase.icon}
                      </div>
                    </div>
                  </Magnetic>

                  {/* Phase Title */}
                  <h3 className="mt-5 font-morton font-black text-xl xl:text-2xl uppercase tracking-wider text-white">
                    {phase.title}
                  </h3>

                  {/* Bullet Items */}
                  <ul className="mt-2.5 space-y-1.5 font-frygia text-sm xl:text-base text-zinc-300">
                    {phase.items.map((item) => (
                      <li key={item} className="leading-snug">{item}</li>
                    ))}
                  </ul>

                </div>

                {/* Continuous Animated Connector between phases */}
                {idx < phases.length - 1 && (
                  <div className="flex-1 self-start mt-20 xl:mt-22 flex items-center justify-center">
                    <AnimatedHorizontalConnector />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

        </div>

        {/* MOBILE & TABLET LAYOUT (Vertical timeline — animated line strictly on left rail, NEVER on text) */}
        <div className="block lg:hidden relative">
          <div className="flex flex-col space-y-0">
            {phases.map((phase, idx) => (
              <div key={phase.number} className="flex flex-col">
                <div className="flex items-start gap-4 sm:gap-6">
                  
                  {/* Left Column: Number badge + Circle Icon */}
                  <div className="flex flex-col items-center shrink-0 w-16 sm:w-20">
                    {/* Phase Number Badge */}
                    <div className="w-6 h-6 rounded-full bg-black border-2 border-[#9FD401] flex items-center justify-center font-morton font-bold text-[11px] text-[#9FD401] shadow-[0_0_10px_rgba(159,212,1,0.4)] mb-1.5">
                      {phase.number}
                    </div>

                    {/* Icon Circle */}
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-black border-2 border-[#9FD401] flex items-center justify-center shadow-[0_0_25px_rgba(159,212,1,0.3)]">
                      <div className="scale-85 sm:scale-100 drop-shadow-[0_0_10px_rgba(159,212,1,0.5)]">
                        {phase.icon}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Title + Content (Completely isolated from the line) */}
                  <div className="pt-6 sm:pt-7 text-left flex-1 min-w-0">
                    <h3 className="font-morton font-black text-lg sm:text-xl uppercase tracking-wider text-white leading-tight">
                      {phase.title}
                    </h3>
                    <ul className="mt-1.5 space-y-1 font-frygia text-xs sm:text-sm text-zinc-300">
                      {phase.items.map((item) => (
                        <li key={item} className="leading-snug">{item}</li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* Animated Vertical Line between stages (aligned with left icon column) */}
                {idx < phases.length - 1 && (
                  <div className="flex items-center w-16 sm:w-20 justify-center">
                    <AnimatedVerticalConnector />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
