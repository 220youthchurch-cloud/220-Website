import React from 'react'

import PageHeader from '../components/common/PageHeader'
import Quote from '../components/common/Quote'
import FadeIn from '../components/common/FadeIn'

const Serve = () => {
  // TODO: Update images when we have them. For now, these are placeholders.
  const roles = [
    {
      title: 'Home Group Leader',
      description: 'Hosts and shepherds a weekly small group. Facilitates Bible discussion, fosters community, follows up with members, and walks with people through life.',
      image: '/misc/img9.jpg'
      /*
      TODO: when images are ready:
      imagesPath: '/team/home-group'
      */
    },
    {
      title: 'Worship',
      description: 'Leads the congregation into the presence of God through music. Includes vocalists, instrumentalists, and worship leaders who serve at gatherings, services, and events.',
      image: '/misc/img9.jpg'
    },
    {
      title: 'AV',
      description: 'Operates sound, projection, and lighting systems. Ensures that what is happening on stage reaches the room with clarity. The unseen team that makes everything seen and heard.',
      image: '/misc/img9.jpg'
    },
    {
      title: 'Media',
      description: 'Captures and creates content — photo, video, design, and storytelling. Runs the ministry’s social presence and produces media that points people to Christ.',
      image: '/misc/img9.jpg'
    },
    {
      title: 'Hospitality',
      description: 'First impressions and last impressions. Greets at the door, sets up spaces, prepares food and drinks, and ensures that every person who walks in feels welcomed and known.',
      image: '/misc/img9.jpg'
    },
    {
      title: 'Prayer',
      description: 'The engine room. Intercedes for the ministry, the leaders, and the people. Prays before, during, and after gatherings. Maintains a prayer rhythm that fuels everything else',
      image: '/misc/img9.jpg'
    },
    {
      title: 'Events',
      description: 'Plans and executes 220 events — retreats, conferences, outreach nights, social gatherings, and special services. Logistics, coordination, and creative environment design.',
      image: '/misc/img9.jpg'
    },
    {
      title: 'Evangelism',
      description: 'Leads the ministry in reaching the lost. Trains volunteers in sharing their faith, organizes outreach, and keeps the gospel mission front-and-center in everything 220 does.',
      image: '/misc/img9.jpg'
    },
    {
      title: 'Discipleship',
      description: 'One-on-one and group mentoring. Walks with newer believers through the basics of following Christ. Develops younger leaders. Multiplies disciples who multiply disciples.',
      image: '/misc/img9.jpg'
    }
  ]

  return (
    <>
      <PageHeader
        title='Serving in 220'
        description={
          <Quote
            quote="As each has received a gift, use it to serve one another, as good stewards of God's varied grace."
            reference="1 Peter 4:10"
          />
        }
      />
      {/* Volunteering */}
      <FadeIn className='bg-white section-padding'>
        <div className='content-container'>
          <h2 className='section-heading text-[#10263b] mb-6'>Volunteering</h2>
          <p className='section-body mt-8'>
          Volunteering in 220 is not a casual decision — it is a calling. We do not throw bodies at open slots. We invite people in carefully because the souls of young people are at stake, because the witness of the gospel is precious, and because we want every leader to flourish, not flame out. The onboarding journey laid out below is intentional. It is designed to help you understand what you are stepping into, to help us know you, and to ensure that the right person ends up in the right role at the right time.
          </p>
        </div>
      </FadeIn>
      {/* Roles */}
      <FadeIn className='bg-white py-1'>
        <div className='content-container'>
          <h2 className='section-heading text-[#10263b] mb-6'>The Volunteer Roles in 220</h2>
          <p className='section-body mt-8'>
          220 leaders serve across nine ministry areas. Each role matters. Each role builds the body. Each role is a way to lay down your life for the next generation.
          </p>
        </div>
        <div className='content-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12'>
          {roles.map((role) => (
            <div key={role.title} className='bg-white rounded-xl overflow-hidden shadow-lg flex flex-col'>
              <div className='relative h-48 overflow-hidden bg-gray-200'>
                <img
                  src={role.image}
                  alt={role.title}
                  className='w-full h-full object-cover'
                  loading='lazy'
                />
              </div>
              <div className='flex flex-col grow p-6'>
                <h3 className='section-heading text-lg text-[#10263b] mb-3'>{role.title}</h3>
                <p className='section-body'>{role.description}</p>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
      
    </>
  )
}

export default Serve