import React from 'react'
import PageHeader from '../components/common/PageHeader'
import AboutIntro from '../components/about/AboutIntro'
import AboutSubsectionCards from '../components/about/AboutSubsectionCards'

const About = () => {
  return (
    <>
      <PageHeader
        title='About Us'
        description='We are a Christ-centered family helping people grow in faith, community, and purpose through worship, discipleship, and service.'
      />

      <AboutIntro />
      <AboutSubsectionCards />
    </>
  )
}

export default About