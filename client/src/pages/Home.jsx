import React from 'react'
import Hero from './../components/home/Hero'
import Servicetime from '../components/home/Servicetime'
import MinistryHighlights from '../components/home/MinistryHighlights'
import WelcomeTo220 from '../components/home/WelcomeTo220'
import Motto from '../components/home/Motto'
import LatestMessage from '../components/home/LatestMessage'
import FollowUs from '../components/home/FollowUs'
const Home = () => {
  return (
    <>
      <Hero />
      <Servicetime />
      <MinistryHighlights />
      <WelcomeTo220 />
      <Motto />
      <LatestMessage />
      <FollowUs />
    </>
  )
}

export default Home