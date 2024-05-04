'use client'
import React, { useState } from 'react'

import SubHeader from '../SubHeader'
import InputBox from './InputBox'

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false)

  const handleSubmit = async e => {
    e.preventDefault()
    const data = {
      personal_email: e.target.email.value,
      personal_subject: e.target.subject.value,
      personal_message: e.target.message.value
    }
    const endpoint = '/api/send/'
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
    const response = await fetch(endpoint, options)
    if (response.status === 200) {
      setEmailSubmitted(true)
      e.target.reset()
    }
  }
  return (
    <section className='mt-10 xl:mt-12' id='Contact'>
      <div className='h-full w-full bg-[var(--box-grey-color)] rounded-xl shadow-lg mb-5 md:mb-6 px-8 md:px-10 lg:px-14 xl:px-18 py-8'>
        <div className='flex flex-col items-center md:items-start text-center md:text-left'>
          <SubHeader>Let&apos;s Connect</SubHeader>
        </div>
        <div className='mt-6 xl:mt-10'>
          <form className='flex flex-col' onSubmit={handleSubmit}>
            <InputBox
              label='Your Email'
              name='email'
              type='email'
              placeholder='baotran05@gmail.com'
            />
            <InputBox
              label='Subject'
              name='subject'
              type='text'
              placeholder='Say Something'
            />
            <div className='mb-6'>
              <label
                htmlFor='Message'
                type='message'
                className='text-black block mb-2 text-sm font-medium'
              >
                Message
              </label>
              <textarea
                name='Message'
                id='Message'
                type='message'
                className='text-sm text-black rounded-lg block w-full bg-[var(--background-white-color)] resize-none border border-transparent focus:outline-none focus:ring-2 focus:ring-[#33353F] placeholder-[#9CA2A9] p-2.5 appearance-none'
                required
                placeholder='Say Hello to Me...'
              />
            </div>
            <button
              type='submit'
              className='w-full rounded-lg bg-[var(--orange-color)] text-white hover--scale--transition--button hover:scale-105'
            >
              <span className='block rounded-full px-6 py-3'>Send Message</span>
            </button>
            {emailSubmitted && (
              <p className='text-green-500 text-sm mt-2'>
                Email sent successfully!
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default EmailSection
