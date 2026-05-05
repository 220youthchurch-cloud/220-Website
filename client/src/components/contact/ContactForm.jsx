import React, { useState } from 'react'

const ContactForm = () => {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
  <div>
    <div className='rounded-3xl bg-white p-8 shadow-lg ring-1 ring-[#e0e8f0] lg:p-10'>
      <h2 className='section-heading text-[#10263b]'>Send Us a Message</h2>

      <form className='mt-6 space-y-6' onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name' className='mb-2 block text-sm font-semibold text-slate-700'>
            Name *
          </label>
          <input
            id='name'
            name='name'
            type='text'
            required
            placeholder='Your full name'
            className='w-full rounded-xl border border-[#c5d8e8] bg-white px-4 py-3 text-[#10263b] shadow-sm transition-colors placeholder:text-slate-400 focus:border-[#2c6598] focus:outline-none focus:ring-2 focus:ring-[#2c6598]/20'
          />
        </div>

        <div>
          <label htmlFor='email' className='mb-2 block text-sm font-semibold text-slate-700'>
            Email *
          </label>
          <input
            id='email'
            name='email'
            type='email'
            required
            placeholder='your.email@example.com'
            className='w-full rounded-xl border border-[#c5d8e8] bg-white px-4 py-3 text-[#10263b] shadow-sm transition-colors placeholder:text-slate-400 focus:border-[#2c6598] focus:outline-none focus:ring-2 focus:ring-[#2c6598]/20'
          />
        </div>

        <div>
          <label htmlFor='phone' className='mb-2 block text-sm font-semibold text-slate-700'>
            Phone <span className='font-normal text-slate-500'>(Optional)</span>
          </label>
          <input
            id='phone'
            name='phone'
            type='tel'
            placeholder='(123) 456-7890'
            className='w-full rounded-xl border border-[#c5d8e8] bg-white px-4 py-3 text-[#10263b] shadow-sm transition-colors placeholder:text-slate-400 focus:border-[#2c6598] focus:outline-none focus:ring-2 focus:ring-[#2c6598]/20'
          />
        </div>

        <div>
          <label htmlFor='subject' className='mb-2 block text-sm font-semibold text-slate-700'>
            Subject *
          </label>
          <input
            id='subject'
            name='subject'
            type='text'
            required
            placeholder='How can we help you?'
            className='w-full rounded-xl border border-[#c5d8e8] bg-white px-4 py-3 text-[#10263b] shadow-sm transition-colors placeholder:text-slate-400 focus:border-[#2c6598] focus:outline-none focus:ring-2 focus:ring-[#2c6598]/20'
          />
        </div>

        <div>
          <label htmlFor='message' className='mb-2 block text-sm font-semibold text-slate-700'>
            Message *
          </label>
          <textarea
            id='message'
            name='message'
            rows='6'
            required
            placeholder='Tell us more about your inquiry...'
            className='w-full resize-none rounded-xl border border-[#c5d8e8] bg-white px-4 py-3 text-[#10263b] shadow-sm transition-colors placeholder:text-slate-400 focus:border-[#2c6598] focus:outline-none focus:ring-2 focus:ring-[#2c6598]/20'
          />
        </div>

        <button type='submit' className='btn-primary w-full'>
          Send Message
        </button>

        <p className='text-center text-sm text-slate-600'>* Required fields</p>
      </form>
    </div>
  </div>

  )
}

export default ContactForm