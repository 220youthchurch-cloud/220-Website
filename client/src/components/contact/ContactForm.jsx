import React, { useRef, useState } from 'react'

import { sendEmail } from '../../services/emailService'

const ContactForm = () => {
  const form = useRef(null)
  const [loading, setLoading] = useState(false)
  const [messageState, setMessageState] = useState({ type: 'idle', text: '' })

  const handleSubmit = async (event) => {
    event.preventDefault()
    setLoading(true)
    setMessageState({ type: 'idle', text: '' })

    try {
      const result = await sendEmail(form.current)

      if (result.status === 'success') {
        form.current.reset()
        setMessageState({ type: 'success', text: result.message })
        return
      }

      setMessageState({
        type: result.status === 'cooldown' ? 'warning' : 'error',
        text: result.message,
      })
    } finally {
      setLoading(false)
    }
  }

  const statusStyles = {
    success: 'border-emerald-200 bg-emerald-50 text-emerald-800',
    error: 'border-rose-200 bg-rose-50 text-rose-800',
    warning: 'border-amber-200 bg-amber-50 text-amber-900',
  }

  return (
    <div>
      <div className='rounded-3xl bg-white p-8 shadow-lg ring-1 ring-[#e0e8f0] lg:p-10'>
        <h2 className='section-heading text-[#10263b]'>Send Us a Message</h2>

        <div aria-live='polite' className='mt-5 min-h-14'>
          {loading ? (
            <div className='flex items-center gap-3 rounded-2xl border border-[#c5d8e8] bg-[#f3f7fb] px-4 py-3 text-sm text-slate-700'>
              <span className='inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#2c6598] shadow-sm'>
                <svg className='h-5 w-5 animate-spin' viewBox='0 0 24 24' fill='none' aria-hidden='true'>
                  <circle cx='12' cy='12' r='10' className='opacity-20' stroke='currentColor' strokeWidth='4' />
                  <path d='M22 12a10 10 0 0 0-10-10' className='opacity-80' stroke='currentColor' strokeWidth='4' strokeLinecap='round' />
                </svg>
              </span>
              <div>
                <p className='font-semibold text-[#10263b]'>Sending your message</p>
                <p className='text-slate-600'>Please wait while we process your request.</p>
              </div>
            </div>
          ) : messageState.type !== 'idle' ? (
            <div className={`rounded-2xl border px-4 py-3 text-sm ${statusStyles[messageState.type]}`}>
              {messageState.text}
            </div>
          ) : null}
        </div>

        <form ref={form} className='mt-6 space-y-6' onSubmit={handleSubmit}>
          <fieldset className='space-y-6' disabled={loading}>
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
                className='w-full rounded-xl border border-[#c5d8e8] bg-white px-4 py-3 text-[#10263b] shadow-sm transition-colors placeholder:text-slate-400 focus:border-[#2c6598] focus:outline-none focus:ring-2 focus:ring-[#2c6598]/20 disabled:cursor-not-allowed disabled:opacity-70'
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
                className='w-full rounded-xl border border-[#c5d8e8] bg-white px-4 py-3 text-[#10263b] shadow-sm transition-colors placeholder:text-slate-400 focus:border-[#2c6598] focus:outline-none focus:ring-2 focus:ring-[#2c6598]/20 disabled:cursor-not-allowed disabled:opacity-70'
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
                className='w-full rounded-xl border border-[#c5d8e8] bg-white px-4 py-3 text-[#10263b] shadow-sm transition-colors placeholder:text-slate-400 focus:border-[#2c6598] focus:outline-none focus:ring-2 focus:ring-[#2c6598]/20 disabled:cursor-not-allowed disabled:opacity-70'
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
                className='w-full rounded-xl border border-[#c5d8e8] bg-white px-4 py-3 text-[#10263b] shadow-sm transition-colors placeholder:text-slate-400 focus:border-[#2c6598] focus:outline-none focus:ring-2 focus:ring-[#2c6598]/20 disabled:cursor-not-allowed disabled:opacity-70'
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
                className='w-full resize-none rounded-xl border border-[#c5d8e8] bg-white px-4 py-3 text-[#10263b] shadow-sm transition-colors placeholder:text-slate-400 focus:border-[#2c6598] focus:outline-none focus:ring-2 focus:ring-[#2c6598]/20 disabled:cursor-not-allowed disabled:opacity-70'
              />
            </div>

            <button
              type='submit'
              className='btn-primary w-full gap-2 disabled:cursor-not-allowed disabled:opacity-80'
            >
              {loading ? (
                <>
                  <svg className='h-5 w-5 animate-spin' viewBox='0 0 24 24' fill='none' aria-hidden='true'>
                    <circle cx='12' cy='12' r='10' className='opacity-20' stroke='currentColor' strokeWidth='4' />
                    <path d='M22 12a10 10 0 0 0-10-10' className='opacity-80' stroke='currentColor' strokeWidth='4' strokeLinecap='round' />
                  </svg>
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>

            <p className='text-center text-sm text-slate-600'>* Required fields</p>
          </fieldset>
        </form>
      </div>
    </div>

  )
}

export default ContactForm