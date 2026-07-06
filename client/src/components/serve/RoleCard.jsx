import React from 'react'

const RoleCard = ({ onClick, role }) => {
  return (
    <article
      className='rounded-2xl border border-[#dbe6ef] bg-white shadow-sm'
    >
      <button
        type='button'
        className='cursor-pointer h-full w-full rounded-2xl text-left'
        onClick={onClick}
      >
        <div className='bg-white rounded-xl overflow-hidden shadow-lg flex h-full flex-col transition-colors duration-200 hover:bg-[#f7fbff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2c6598]/40'>
          <div className='relative h-48 overflow-hidden bg-gray-200'>
            <img
              src={`${role.imagesPath}/header.jpg`}
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
      </button>
    </article>
  )
}

export default RoleCard