import React, { useEffect, useState } from 'react'

import PageHeader from '../components/common/PageHeader'
import Quote from '../components/common/Quote'
import FadeIn from '../components/common/FadeIn'

import { getActiveRoles } from '../data/roles'
import RoleCard from '../components/serve/RoleCard'
import RoleImages from '../components/serve/RoleImages'

const Serve = () => {
  const activeRoles = getActiveRoles()
  const [selectedRole, setSelectedRole] = useState(null)

  const openRole = (role) => {
    setSelectedRole(role)
  }

  const closeRole = () => setSelectedRole(null)

  useEffect(() => {
    if (!selectedRole) return

    const onKeyDown = (event) => {
      if (event.key === 'Escape') closeRole()
    }

    window.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [selectedRole])

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
      <FadeIn className='bg-white pt-1 section-padding'>
        <div className='content-container'>
          <h2 className='section-heading text-[#10263b] mb-6'>The Volunteer Roles in 220</h2>
          <p className='section-body mt-8'>
          220 leaders serve across nine ministry areas. Each role matters. Each role builds the body. Each role is a way to lay down your life for the next generation.
          </p>
        </div>
        <div className='content-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12'>
          {activeRoles.map((role) => (
            <RoleCard key={role.id} onClick={() => openRole(role)} role={role} />
          ))}
        </div>
        {selectedRole && <RoleImages role={selectedRole} onClose={closeRole} />}
      </FadeIn>
      
    </>
  )
}

export default Serve