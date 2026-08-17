'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { MdBuild, MdGroups, MdRocketLaunch, MdEco } from 'react-icons/md'
import { Magnetic } from '@/components/magnetic'

export default function AboutSection() {
  const features = [
    {
      icon: <MdBuild className="w-8 h-8 sm:w-9 sm:h-9 text-[#9FD401] shrink-0" />,
      title: 'BUILT FOR BUILDERS',
      description: 'Powering the onchain economy',
    },
    {
      icon: <MdGroups className="w-8 h-8 sm:w-9 sm:h-9 text-[#9FD401] shrink-0" />,
      title: 'COMMUNITY DRIVEN',
      description: 'By the people, for the people',
    },
    {
      icon: <MdRocketLaunch className="w-8 h-8 sm:w-9 sm:h-9 text-[#9FD401] shrink-0" />,
      title: 'DEGEN APPROVED',
      description: 'Fueled by conviction & chaos',
    },
    {
      icon: <MdEco className="w-8 h-8 sm:w-9 sm:h-9 text-[#9FD401] shrink-0" />,
      title: 'SUSTAINABLE GROWTH',
      description: 'Fuel today, dominate tomorrow',
    },
  ]

  return (
    <section id="about" className="relative w-full bg-transparent text-white py-12 sm:py-16 lg:py-20 overflow-hidden select-none">
      <div className="relative z-10 max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-6 xl:gap-10">
          
          {/* LEFT COLUMN: About Story & Mission (Animated on scroll) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 flex flex-col justify-center space-y-4 sm:space-y-5 text-left"
          >
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
          </motion.div>

          {/* MIDDLE COLUMN: Character Mascot with Floating Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 flex justify-center items-center relative order-last lg:order-none"
          >
            <div className="relative w-full max-w-[260px] sm:max-w-[300px] lg:max-w-[340px] h-[340px] sm:h-[400px] lg:h-[440px] flex items-center justify-center">
              {/* Backlight / Character Halo Glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#9FD401]/30 via-[#9FD401]/10 to-transparent blur-3xl rounded-full scale-95 animate-pulse [animation-duration:4s]" />
              
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-full h-full"
              >
                <Image
                  src="/about.png"
                  alt="BLKFUEL Character Mascot"
                  fill
                  priority
                  className="object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)] filter transition-transform duration-500 hover:scale-105"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Feature Highlights Box (Animated on scroll) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-md lg:max-w-none bg-black/80 backdrop-blur-xl border-2 border-[#9FD401] rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-6 xl:p-7 shadow-[0_0_30px_rgba(159,212,1,0.22)] hover:shadow-[0_0_50px_rgba(159,212,1,0.4)] transition-all duration-500">
              <div className="space-y-4 sm:space-y-5">
                {features.map((feature, idx) => (
                  <Magnetic key={feature.title} strength={0.15} className="w-full">
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false }}
                      transition={{ delay: idx * 0.1, duration: 0.5 }}
                      className="group flex items-center gap-3.5 sm:gap-4 p-1 transition-all duration-300"
                    >
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
                    </motion.div>
                  </Magnetic>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
