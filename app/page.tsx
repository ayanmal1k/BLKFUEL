import HeroSection from '@/components/hero-section'
import TokenStatsBar from '@/components/token-stats-bar'
import AboutSection from '@/components/about-section'
import TokenomicsSection from '@/components/tokenomics-section'
import RoadmapSection from '@/components/roadmap-section'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black overflow-x-hidden">
      <HeroSection />
      <TokenStatsBar />
      <AboutSection />
      <TokenomicsSection />
      <RoadmapSection />
    </main>
  )
}

