'use client'

import React from 'react'

import TracingBeam from '@/components/ui/tracing-beam'
import Process from '@/components/rending/process'
import SlidePricing from '@/components/rending/price'
import WaterDropHero from '../waterDrop'
import LogoHero from '../LogoHero'
import StackedCardTestimonials from '../stacedCard'
import TextRevealCardPreview from '../textRevealCard'

const TracingBeamDemo = () => {
  return (
    <TracingBeam className="">
      <div className="h-[10rem]" />
      <WaterDropHero />
      <Process />
      <LogoHero />
      <TextRevealCardPreview />
      <SlidePricing />
      <StackedCardTestimonials />
    </TracingBeam>
  )
}

export default TracingBeamDemo
