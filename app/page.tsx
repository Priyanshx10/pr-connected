import React from 'react'
import HeroSection from './components/HeroSection'
import Introduction from './components/Introduction'
import ServiceSection from './components/ServiceSection'
import WhyPR from './components/WhyPR'
import PRDifferent from './components/PRDifferent'

const page = () => {
  return (
    <div>
      <HeroSection />
      <Introduction />
      <ServiceSection />
      <WhyPR />
      <PRDifferent />
    </div>
  )
}

export default page