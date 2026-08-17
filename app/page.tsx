import SmoothScroll from '@/components/smooth-scroll'
import AmbientGlowBackground from '@/components/ambient-glow-background'
import Navbar from '@/components/navbar'
import HeroSection from '@/components/hero-section'
import TokenStatsBar from '@/components/token-stats-bar'
import AboutSection from '@/components/about-section'
import TokenomicsSection from '@/components/tokenomics-section'
import RoadmapSection from '@/components/roadmap-section'
import HowToBuySection from '@/components/how-to-buy-section'
import Footer from '@/components/footer'
import { WhitepaperProvider } from '@/components/whitepaper-context'
import WhitepaperModal from '@/components/whitepaper-modal'

export default function HomePage() {
  return (
    <WhitepaperProvider>
      <SmoothScroll>
        <main className="relative min-h-screen bg-black overflow-x-hidden text-white selection:bg-[#9FD401] selection:text-black">
          {/* Dynamic Subtle Green Glow Mesh Background */}
          <AmbientGlowBackground />

          {/* Whitepaper Modal Dialog */}
          <WhitepaperModal />

          {/* Page Sections */}
          <div className="relative z-10">
            <Navbar />
            <HeroSection />
            <TokenStatsBar />
            <AboutSection />
            <TokenomicsSection />
            <RoadmapSection />
            <HowToBuySection />
            <Footer />
          </div>
        </main>
      </SmoothScroll>
    </WhitepaperProvider>
  )
}


