'use client'
import Image from 'next/image'
import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'

import Button from "./Button"

// breakpoints:
// when screen >= md, animated text and picture are aligned horizontally
// when screen < md, animated text and picture are aliend vertically
const HeroSection = () => {
  return (
    <section className='flex flex-col items-center justify-center mt-28 md:mt-32 lg:mt-40'>
      <div className='flex flex-col md:flex-row justify-around bg-[#e7e7e76b] shadow-xl rounded-3xl w-full p-10 lg:p-16 xl:p-20'>
        <div
          className='place-self-center text-center md:text-left mb-10 md:mb-0'
        >
          <h1 className='text-[var(--grey-color-1)] mb-4 lg:mb-8 text--main--header'>
            <div className='text-transparent bg-clip-text header--background--dark mb-1'>
              Hello, I'm{' '}
            </div>
            <TypeAnimation
              sequence={[
                'Bao',
                1500,
                'Waterloo Student',
                1700,
                'Data Scientist',
                1500,
                'Web Developer',
                1700
              ]}
              wrapper='span'
              speed={30}
              repeat={Infinity}
            />
          </h1>
          <p className='text-[var(--grey-color-1)] text-base sm:text-lg lg:text-xl 3xl:text-2xl mb-8'>
            not how long, but how well you have lived is the main thing
          </p>
          <div className='text-base sm:text-md lg:text-lg mt-6 md:mt-12'>
            <Button content='Hire Me'/>
            <Button content='Download CV'/>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className='place-self-center mt-8 md:mt-0 md:ml-4'
        >
          <div className='rounded-full bg-[var(--grey-color)] w-[275px] h-[275px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] xl:w-[450px] xl:h-[450px] 3xl:w-[600px] 3xl:h-[600px] relative'>
            <Image
              src='/images/random.jpg'
              alt='hero image'
              className='rounded-full absolute div--center w-fit h-fit'
              width={300}
              height={300}
            ></Image>
          </div>
        </motion.div>
      </div>
      <div className='flex flex-col items-center justify-center my-6 lg:my-16'>
        <div className='scroll-down'/>
      </div>
    </section>
  )
}

export default HeroSection
