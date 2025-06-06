import React from 'react'
import Hero from '../components/Home/Hero'
import MissionPreview from '../components/Home/MissionPreview'
import LatestSermon from '../components/Home/LatestSermon'
import ServiceInfo from '../components/Home/ServiceInfo'

function Home() {
  return (
    <div>
    
      <Hero />
      <MissionPreview />
      <LatestSermon />
      <ServiceInfo />
    </div>
  )
}

export default Home
