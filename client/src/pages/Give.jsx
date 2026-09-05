import React from 'react'
import PageHeader from '../components/common/PageHeader'
import JoyOfGiving from '../components/give/JoyOfGiving'
import WhyWeGive from '../components/give/WhyWeGive'
import WaysToGive from '../components/give/WaysToGive'

const Give = () => {
  return (
    <>
      <PageHeader
        title='Give'
        description='Thank you for your generosity in supporting the ministry of 220 Gospel Light.'
      />
      <JoyOfGiving />
      <WhyWeGive />
      <WaysToGive />
    </>
  )
}

export default Give