import React from 'react'
import FadeIn from '../common/FadeIn'
import { paymentMethods } from '../../data/paymentMethods'

import { SiPaypal, SiZelle, SiCashapp } from 'react-icons/si'

const iconByPlatform = {
  Paypal: <SiPaypal />,
  Zelle: <SiZelle />,
  CashApp: <SiCashapp />,
}

const WaysToGive = () => {
  return (
    <FadeIn className='section-padding bg-[#f8fbfe] text-center'>
      <div className='content-container'>
        <h2 className='section-heading text-[#10263b]'>Ways to Give</h2>
        <p className='section-body'>
          We appreciate your support! Here are some ways you can contribute:
        </p>

        <div className='mt-8 flex flex-wrap gap-6 justify-center'>
          {paymentMethods.map(({ method, link }) => (
            <div
              key={method}
              className='flex w-full flex-col items-center gap-3 rounded-2xl border border-[#dbe6ef] bg-white p-8 text-center shadow-sm transition-shadow duration-200 hover:shadow-md sm:w-[calc(50%-0.75rem)] md:w-[calc(33.333%-0.75rem)]'
            >
              <div className='text-4xl .primary-text'>
                {iconByPlatform[method] || null}
              </div>
              <h3 className='header-font text-xl text-[#10263b]'>{method}</h3>
              <a
                href={link}
                target='_blank'
                rel='noreferrer'
                className='btn-primary mt-2'
              >
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