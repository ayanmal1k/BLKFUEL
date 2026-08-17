import HeroSection from '@/components/hero-section'
import TokenStatsBar from '@/components/token-stats-bar'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black overflow-x-hidden">
      <HeroSection />
      <TokenStatsBar />
    </main>
  )
}
