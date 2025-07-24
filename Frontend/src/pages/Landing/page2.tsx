import Navbar from "@/components/landing/navbar"
import Footer from "@/components/landing/footer"
import FeaturesSection from "@/components/landing/feature-section"
import HeroSection from "@/components/landing/hero-section"
import AboutSection from "@/components/landing/about-section"
import WhyGamaSection from "@/components/landing/why-gamma-section"
import HowItWorksSection from "@/components/landing/how-it-works-section"
import MarqueeSection from "@/components/landing/marquee-section"
import TestimonySection from "@/components/landing/testimony-section"
import FAQSection from "@/components/landing/faq-section"
import CommunityCTASection from "@/components/landing/community-cta-section"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <WhyGamaSection />
        <HowItWorksSection />
        <FeaturesSection />
        <MarqueeSection />
        <TestimonySection />
        <FAQSection />
        <CommunityCTASection />
      </main>
      <Footer />
    </div>
  )
}
