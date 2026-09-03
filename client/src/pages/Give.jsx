import React from 'react'
import PageHeader from '../components/common/PageHeader'
import WaysToGive from '../components/give/WaysToGive'

const Give = () => {
  return (
    <>
      <PageHeader
        title='Give'
        description='Thank you for your generosity! Your contributions help us continue our mission and make a positive impact in our community.'
      />
      <WaysToGive />
    </>
  )
}

export default Give