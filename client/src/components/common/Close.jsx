import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Close = ({ onClose, ariaLabel, className }) => {
  return (
    <div className={`${className} flex justify-end`}>
      <button
        type='button'
        onClick={onClose}
        className='inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#c5d8e8] bg-white section-heading-text transition-colors duration-200 hover:bg-[#e8eff6]'
        aria-label={ariaLabel || 'Close'}
      >
        <FaTimes />
      </button>
    </div>
  )
}

export default Close