'use client'

import React, { useEffect, useRef } from 'react'

export default function AmbientGlowBackground() {
  const mouseRef = useRef<{ x: number; y: number; targetX: number; targetY: number }>({
    x: 50,
    y: 50,
    targetX: 50,
    targetY: 50,
  })
  const orbRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = (e.clientX / window.innerWidth) * 100
      mouseRef.current.targetY = (e.clientY / window.innerHeight) * 100
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })

    // Smooth interpolation loop for organic trailing glow
    let frameId: number
    const animate = () => {
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.08
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.08

      if (orbRef.current) {
        orbRef.current.style.left = `${mouseRef.current.x}%`
        orbRef.current.style.top = `${mouseRef.current.y}%`
      }
      frameId = requestAnimationFrame(animate)
    }

    frameId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(frameId)
    }
  }, [])

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
    >
      {/* Deep dark base background */}
      <div className="absolute inset-0 bg-[#050602]" />

      {/* Interactive Cursor Follow Glow */}
      <div
        ref={orbRef}
        className="absolute w-[700px] h-[700px] rounded-full blur-[140px] opacity-25 -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-opacity duration-300"
        style={{
          background: 'radial-gradient(circle, rgba(159,212,1,0.85) 0%, rgba(159,212,1,0.35) 45%, transparent 70%)',
          left: '50%',
          top: '50%',
        }}
      />

      {/* Floating Animated Ambient Neon Green Orbs */}
      {/* Orb 1 - Top Left */}
      <div
        className="absolute -top-[10%] -left-[10%] w-[650px] sm:w-[850px] h-[650px] sm:h-[850px] rounded-full blur-[160px] opacity-20 pointer-events-none animate-pulse"
        style={{
          background: 'radial-gradient(circle, #9FD401 0%, rgba(159,212,1,0.4) 50%, transparent 75%)',
          animationDuration: '7s',
        }}
      />

      {/* Orb 2 - Center Right */}
      <div
        className="absolute top-[35%] -right-[15%] w-[700px] sm:w-[900px] h-[700px] sm:h-[900px] rounded-full blur-[170px] opacity-20 pointer-events-none animate-pulse"
        style={{
          background: 'radial-gradient(circle, #9FD401 0%, rgba(159,212,1,0.3) 50%, transparent 75%)',
          animationDuration: '10s',
          animationDelay: '2s',
        }}
      />

      {/* Orb 3 - Lower Left */}
      <div
        className="absolute top-[65%] -left-[10%] w-[650px] sm:w-[850px] h-[650px] sm:h-[850px] rounded-full blur-[160px] opacity-18 pointer-events-none animate-pulse"
        style={{
          background: 'radial-gradient(circle, #9FD401 0%, rgba(159,212,1,0.3) 50%, transparent 75%)',
          animationDuration: '9s',
          animationDelay: '4s',
        }}
      />

      {/* Orb 4 - Bottom Center */}
      <div
        className="absolute -bottom-[10%] left-[30%] w-[700px] sm:w-[900px] h-[700px] sm:h-[900px] rounded-full blur-[180px] opacity-20 pointer-events-none animate-pulse"
        style={{
          background: 'radial-gradient(circle, #9FD401 0%, rgba(159,212,1,0.4) 50%, transparent 75%)',
          animationDuration: '8s',
          animationDelay: '1s',
        }}
      />

      {/* High-tech subtle dot matrix grid overlay for premium depth */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(159,212,1,0.8) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Top & Bottom gradient vignettes */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none" />
    </div>
  )
}
