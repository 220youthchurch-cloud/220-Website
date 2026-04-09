import React from 'react'
import Hero from './../components/home/Hero'
import WelcomeTo220 from '../components/home/WelcomeTo220'
import Motto from '../components/home/Motto'
import LatestYouTubeVideo from '../components/home/LatestYouTubeVideo'
import FollowUs from '../components/home/FollowUs'
import Servicetime from '../components/home/Servicetime'
const Home = () => {
  return (
    <>
      <Hero />
      <WelcomeTo220 />
      <Motto />
      <LatestYouTubeVideo />
      <FollowUs />
    </>
  )
}

export default Home