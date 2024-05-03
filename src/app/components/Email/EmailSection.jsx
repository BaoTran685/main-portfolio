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
    <section className='mt-10 xl:mt-12' id='contact'>
      <div className='h-full w-full bg-[#e7e7e76b] rounded-xl shadow-lg mb-5 md:mb-6 px-8 md:px-10 lg:px-14 xl:px-18 py-8'>
        <div className='flex flex-col items-center md:items-start text-center md:text-left'>
          <SubHeader>Let&apos; Connect</SubHeader>
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
            <InputBox
              label='Message'
              name='message'
              type='message'
              placeholder='Say Hello to Me'
            />
            <button
              type='submit'
              className='w-full rounded-lg bg-[#F27121] text-white hover--scale--transition--button'
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