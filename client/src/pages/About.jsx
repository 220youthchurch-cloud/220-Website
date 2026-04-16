import React from 'react'
import PageHeader from '../components/common/PageHeader'
import AboutSplitSections from '../components/about/AboutSplitSections'

const About = () => {
  return (
    <>
      <PageHeader
        title='About Us'
        description='We are a Christ-centered family helping people grow in faith, community, and purpose through worship, discipleship, and service.'
      />

      <AboutSplitSections />
    </>
  )
}

export default About