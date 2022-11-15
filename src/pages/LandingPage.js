import React from 'react'
import TopSection from '../components/TopSection'
import BusinessNeeds from '../components/BusinessNeeds'
import GlobalSection from '../components/GlobalSection'
import services from '../services/FormService'

function LandingPage() {
  console.log(services.getLocation())

  return (
    <>
       <TopSection/>
       <BusinessNeeds/>
       <GlobalSection/> 
    </>
  )
}

export default LandingPage