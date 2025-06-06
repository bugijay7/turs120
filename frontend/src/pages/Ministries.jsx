import React from 'react'
import MinistriesHeader from '../components/Ministries/MinistryHeader'
import MinistryList from '../components/Ministries/MinistryList'
import FeaturedMinistries from '../components/Ministries/FeaturedMinistries'
import Testimonies from '../components/Ministries/Testimonies'

function Ministries() {
  return (
    <div>
      <MinistriesHeader />
      <MinistryList />
      <FeaturedMinistries />
      <Testimonies />
    </div>
  )
}

export default Ministries
