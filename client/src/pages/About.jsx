import React from 'react'
import PageHeader from '../components/common/PageHeader'

const About = () => {
  return (
    <>
      <PageHeader
        title='About Us'
        description='We are a Christ-centered family helping people grow in faith, community, and purpose through worship, discipleship, and service.'
      />

      <section className='section-padding'>
        <div className='content-container'>
          <h2 className='section-heading text-[#10263b]'>Our Story</h2>
          <p className='section-body max-w-4xl'>
            220 For Life exists to build a welcoming community where people encounter God,
            discover biblical truth, and live it out every day.
          </p>
        </div>
      </section>
    </>
  )
}

export default About