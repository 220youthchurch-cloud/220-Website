import React from 'react'

import FadeIn from '../components/common/FadeIn'
import PageHeader from '../components/common/PageHeader'
import ContactInfo from '../components/contact/ContactInfo'
import ContactForm from '../components/contact/ContactForm'

const Contact = () => {
  return (
    <>
      <PageHeader
        title='Contact Us'
        description='We would love to hear from you. Reach out with questions, prayer requests, or to learn more about our church.'
      />

      <FadeIn className='section-padding bg-[#f8fbfe]'>
        <div className='content-container'>
          <div className='grid gap-12 lg:grid-cols-2'>
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </FadeIn>
    </>
  )
}

export default Contact