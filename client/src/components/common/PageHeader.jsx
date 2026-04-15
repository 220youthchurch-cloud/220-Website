import React from 'react'

const PageHeader = ({ title, description, className = '' }) => {
  return (
    <header className={`relative overflow-hidden bg-[#f3f7fb] section-padding ${className}`}>
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(44,101,152,0.2),transparent_55%)]' />

      <div className='content-container relative z-10'>
        <p className='header-font primary-text text-sm uppercase tracking-[0.2em]'>220 For Life</p>
        <h1 className='section-heading mt-3 text-[#10263b]'>{title}</h1>
        <p className='section-body max-w-3xl'>{description}</p>
      </div>
    </header>
  )
}

export default PageHeader