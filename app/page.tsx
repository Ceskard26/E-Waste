'use client'

import { HeroSection } from '@/components/sections/HeroSection'
import { StatsSection } from '@/components/sections/StatsSection'
import { FeatureShowcaseSection } from '@/components/sections/FeatureShowcaseSection'
import { HowItWorksSection } from '@/components/sections/HowItWorksSection'
import { TestimonialSection } from '@/components/sections/TestimonialSection'
import { DemoPreviewSection } from '@/components/sections/DemoPreviewSection'
import { ImpactSection } from '@/components/sections/ImpactSection'
import { FormsSection } from '@/components/sections/FormsSection'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <StatsSection />
      <FeatureShowcaseSection />
      <HowItWorksSection />
      <TestimonialSection />
      <DemoPreviewSection />
      <ImpactSection />
      <FormsSection />
    </div>
  )
}