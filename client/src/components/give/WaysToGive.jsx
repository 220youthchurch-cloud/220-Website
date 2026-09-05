import React from 'react'
import FadeIn from '../common/FadeIn'
import { paymentMethods } from '../../data/paymentMethods'
import { FaHandHoldingHeart } from 'react-icons/fa'

const WaysToGive = () => {
  return (
    <FadeIn className='section-padding bg-white text-center'>
      <div className='content-container'>
        <h2 className='section-heading section-heading-text'>Ways to Give</h2>
        <p className='section-body'>Choose the giving method that works best for you.</p>

        <div className='mt-8 flex flex-wrap justify-center gap-6'>
          {paymentMethods.map(({ method, link }) => (
            <div
              key={method}
              className='flex w-full flex-col items-center gap-3 rounded-2xl border border-[#dbe6ef] bg-[#f8fbfe] p-8 text-center shadow-sm transition-shadow duration-200 hover:shadow-md sm:w-[calc(50%-0.75rem)] md:w-[calc(33.333%-0.75rem)]'
            >
              <div className='primary-text text-4xl'>
                <FaHandHoldingHeart />
              </div>
              <h3 className='header-font text-xl section-heading-text'>{method}</h3>
              <a href={link} target='_blank' rel='noreferrer' className='btn-primary mt-2'>
                Give via {method}
              </a>
            </div>
          ))}
        </div>
      </div>
    </FadeIn>
  )
}

export default WaysToGive