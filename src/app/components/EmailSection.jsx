"use client";
import React, {useState} from 'react'

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value
    }
    const endpoint = '/api/send/'
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
    const response = await fetch(endpoint, options);
    if (response.status === 200) {
      setEmailSubmitted(true);
    }
  }
  return (
    <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative' id='contact'>
      {/* <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2'></div> */}
      <div className='z-10 flex flex-col items-center md:items-start'>
        <h2 className='text-xl font-bold text-white my-2'>Let's Connect</h2>
        <p className='text-[var(--grey-color)] text-base md:text-sm xl:text-lg text-center md:text-left mb-4 max-w-md'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <div className='socials flex flex-row gap-2'></div>
      </div>
      <div>
        <form className='flex flex-col' onSubmit={handleSubmit}>
          <div className='mb-6'>
            <label
              htmlFor='email'
              type='email'
              className='text-white block mb-2 text-sm font-medium'
            >
              Your Email
            </label>
            <input
              name='email'
              id='email'
              type='email'
              className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 appearance-none'
              required
              placeholder='baotran05@gmail.com'
            />
          </div>
          <div className='mb-6'>
            <label
              htmlFor='subject'
              type='text'
              className='text-white block mb-2 text-sm font-medium'
            >
              Subject
            </label>
            <input
              name='subject'
              id='subject'
              type='text'
              className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
              required
              placeholder='Say Something'
            />
          </div>
          <div className='mb-6'>
            <label
              htmlFor='message'
              type='message'
              className='text-white block mb-2 text-sm font-medium'
            >
              Message
            </label>
            <textarea
              name='message'
              id='message'
              type='message'
              className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
              required
              placeholder='Say Hello to Me'
            />
          </div>
          <button
            type='submit'
            className='text-white rounded-lg w-full button--background--dark'
          >
            <span className='rounded-lg div--hover--button'>
              Send Message
            </span>
          </button>
          {(emailSubmitted) && (
            <p className='text-[var(--header--green-color)] text-sm mt-2'>
              Email sent successfully!
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

export default EmailSection
