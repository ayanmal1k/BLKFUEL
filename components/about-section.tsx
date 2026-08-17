'use client'

import React from 'react'
import Image from 'next/image'
import { MdBuild, MdGroups, MdRocketLaunch, MdEco } from 'react-icons/md'
import { Magnetic } from '@/components/magnetic'

export default function AboutSection() {
  const features = [
    {
      icon: <MdBuild className="w-9 h-9 sm:w-10 sm:h-10 text-[#9FD401] shrink-0" />,
      title: 'BUILT FOR BUILDERS',
      description: 'Powering the onchain economy',
    },
    {
      icon: <MdGroups className="w-9 h-9 sm:w-10 sm:h-10 text-[#9FD401] shrink-0" />,
      title: 'COMMUNITY DRIVEN',
      description: 'By the people, for the people',
    },
    {
      icon: <MdRocketLaunch className="w-9 h-9 sm:w-10 sm:h-10 text-[#9FD401] shrink-0" />,
      title: 'DEGEN APPROVED',
      description: 'Fueled by conviction & chaos',
    },
    {
      icon: <MdEco className="w-9 h-9 sm:w-10 sm:h-10 text-[#9FD401] shrink-0" />,
      title: 'SUSTAINABLE GROWTH',
      description: 'Fuel today, dominate tomorrow',
    },
  ]

  return (
    <section id="about" className="relative w-full bg-black text-white py-8 sm:py-12 lg:py-16 overflow-hidden select-none">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#9FD401]/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-[#9FD401]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-6 xl:gap-10">
          
          {/* LEFT COLUMN: About Story & Mission */}
          <div className="lg:col-span-4 flex flex-col justify-center space-y-4 sm:space-y-5 text-left">
            <h2 className="font-morton font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight uppercase leading-none">
              ABOUT <span className="text-[#9FD401] drop-shadow-[0_0_20px_rgba(159,212,1,0.45)]">$BLKFUEL</span>
            </h2>

            <div className="space-y-3 sm:space-y-3.5 text-zinc-300 font-frygia text-sm sm:text-base leading-relaxed">
              <p>
                $BLKFUEL is the fuel that powers the next generation of onchain innovation.
              </p>
              
              <p>
                Built for builders, traders, degens &amp; believers who keep the chain alive.
              </p>

              <div className="space-y-0.5">
                <p>We don&apos;t follow trends.</p>
                <p className="text-white font-medium">We power them.</p>
              </div>
            </div>

            <div className="pt-1">
              <span className="font-morton font-black text-lg sm:text-xl text-[#9FD401] tracking-wider uppercase drop-shadow-[0_0_15px_rgba(159,212,1,0.5)]">
                EVERY BLOCK NEEDS FUEL.
              </span>
            </div>
          </div>

          {/* MIDDLE COLUMN: Character Mascot */}
          <div className="lg:col-span-4 flex justify-center items-center relative order-last lg:order-none">
            <div className="relative w-full max-w-[260px] sm:max-w-[300px] lg:max-w-[340px] h-[340px] sm:h-[400px] lg:h-[440px] flex items-center justify-center">
              {/* Backlight / Character Halo Glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#9FD401]/25 via-[#9FD401]/10 to-transparent blur-2xl rounded-full scale-90" />
              
              <Image
                src="/about.png"
                alt="BLKFUEL Character Mascot"
                fill
                priority
                className="object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)] filter transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>

          {/* RIGHT COLUMN: Feature Highlights Box */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="w-full max-w-md lg:max-w-none bg-black/80 backdrop-blur-xl border-2 border-[#9FD401] rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-6 xl:p-7 shadow-[0_0_30px_rgba(159,212,1,0.22)] hover:shadow-[0_0_45px_rgba(159,212,1,0.35)] transition-all duration-500">
              <div className="space-y-4 sm:space-y-5">
                {features.map((feature) => (
                  <Magnetic key={feature.title} strength={0.15} className="w-full">
                    <div className="group flex items-center gap-3.5 sm:gap-4 p-1 transition-all duration-300">
                      {/* Google Material Icon */}
                      <div className="p-2 sm:p-2.5 rounded-xl bg-[#9FD401]/10 border border-[#9FD401]/30 group-hover:border-[#9FD401] group-hover:bg-[#9FD401]/20 group-hover:shadow-[0_0_18px_rgba(159,212,1,0.5)] transition-all duration-300">
                        {feature.icon}
                      </div>

                      {/* Content */}
                      <div className="flex flex-col text-left">
                        <span className="font-morton font-black text-base sm:text-lg text-[#9FD401] tracking-wider uppercase leading-tight group-hover:text-white transition-colors duration-300">
                          {feature.title}
                        </span>
                        <span className="font-frygia font-normal text-xs sm:text-sm text-zinc-300 leading-snug mt-0.5">
                          {feature.description}
                        </span>
                      </div>
                    </div>
                  </Magnetic>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
