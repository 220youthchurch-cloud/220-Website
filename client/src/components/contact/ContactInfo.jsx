import React from 'react'
import { FaFacebook, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaYoutube } from 'react-icons/fa'

import SocialMediaPlatforms from '../../components/common/SocialMediaPlatforms'


const contactDetails = [
  {
    title: 'Address',
    icon: FaMapMarkerAlt,
    lines: ['11110 Garland Rd', 'Dallas, TX 75218'],
    href: 'https://maps.app.goo.gl/17oLXgmbpW4BTJgB9',
    actionText: 'Get Directions ->',
    external: true,
  },
  {
    title: 'Phone',
    icon: FaPhoneAlt,
    lines: ['(000) 000-000'],
    href: 'tel:+17029798235',
  },
  {
    title: 'Email',
    icon: FaEnvelope,
    lines: ['Berhanwongeldallas@gmail.com'],
    href: 'mailto:Berhanwongeldallas@gmail.com',
  },
  {
    title: 'Service Times',
    icon: FaClock,
    lines: ['Sunday Worship: 10:00 AM', 'Friday Prayer: 7:00 PM'],
  },
]

const ContactInfo = () => {
  return (
  <div>
    <div className='space-y-8'>
      <div>
        <h2 className='section-heading text-[#10263b]'>Get in Touch</h2>
        <p className='section-body max-w-2xl'>
          We would love to hear from you. Whether you have questions about our services,
          want to learn more about our church, or need prayer, please reach out to us.
        </p>
      </div>

      <div className='space-y-4'>
        {contactDetails.map((contact) => (
          <div key={contact.title} className='flex items-start gap-4'>
            <div className='flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#e8eff6] text-[#2c6598]'>
              {React.createElement(contact.icon, { className: 'h-6 w-6' })}
            </div>

            {contact.href ? (
              <a
                href={contact.href}
                target={contact.external ? '_blank' : undefined}
                rel={contact.external ? 'noopener noreferrer' : undefined}
                className='group block'
              >
                <h3 className='mb-1 font-semibold text-[#10263b]'>{contact.title}</h3>
                <p className='text-slate-700 transition-colors group-hover:text-[#2c6598]'>
                  {contact.lines.map((line, index) => (
                    <React.Fragment key={line}>
                      {line}
                      {index < contact.lines.length - 1 ? <br /> : null}
                    </React.Fragment>
                  ))}
                </p>
                {contact.actionText ? (
                  <span className='mt-1 inline-block text-sm font-medium text-[#2c6598] transition-colors group-hover:text-[#1f5079]'>
                    {contact.actionText}
                  </span>
                ) : null}
              </a>
            ) : (
              <div>
                <h3 className='mb-1 font-semibold text-[#10263b]'>{contact.title}</h3>
                <p className='text-slate-700'>
                  {contact.lines.map((line, index) => (
                    <React.Fragment key={line}>
                      {line}
                      {index < contact.lines.length - 1 ? <br /> : null}
                    </React.Fragment>
                  ))}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div>
        <h3 className='mb-4 font-semibold text-[#10263b]'>Follow Us</h3>
        <div className='flex flex-wrap gap-4'>
          <SocialMediaPlatforms className='gap-2' buttonClassName='bg-[#2c6598] hover:bg-blue-600!' displayTitle={false} />
        </div>
      </div>
    </div>
  </div>
  )
}

export default ContactInfo