'use client'

import { HeroSection } from '@/components/sections/HeroSection'
import { ProblemSection } from '@/components/sections/ProblemSection'
import { HowItWorksSection } from '@/components/sections/HowItWorksSection'
import { MVPSection } from '@/components/sections/MVPSection'
import { ImpactSection } from '@/components/sections/ImpactSection'
import { ValidationSection } from '@/components/sections/ValidationSection'
import { FormsSection } from '@/components/sections/FormsSection'
import { RoadmapPreviewSection } from '@/components/sections/RoadmapPreviewSection'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProblemSection />
      <HowItWorksSection />
      <MVPSection />
      <ImpactSection />
      <ValidationSection />
      <FormsSection />
      <RoadmapPreviewSection />
    </div>
  )
}