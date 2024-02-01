'use client'
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

// breakpoints:
// when screen >= md, the picture and about text are aligned horizontally
// when screen < md, the picture and about text are aligned vertically

const aboutComponets = [
  {
    tab: 'skills',
    tabName: 'Skills',
    list: 'Next JS, React, Tailwind Css'
  },
  {
    tab: 'education',
    tabName: 'Education',
    list: 'High School Diploma, Bachelor of Mathematics, Exam P'
  },
  {
    tab: 'certification',
    tabName: 'Certification',
    list: 'Euclid Contest Certificate of Distinction, Canadian Computing Competition (Senior) Certificate of Distinction, Fermat Contest Certificate of Distinction'
  }
]

const AboutSection = () => {
  const [tab, setTab] = useState('skills')
  const [isPending, startTransition] = useTransition()

  const handleTabChange = id => {
    startTransition(() => {
      setTab(id)
    })
  }
  return (
    <section className='text-white mt-12 py-8 px-2 sm:py-18 xl:px-16'>
      <div className='flex flex-col md:grid md:grid-cols-2 md:gap-10 xl:gap-14 items-center md:items-start'>
        <Image
          src='/images/random.jpg'
          alt='background image'
          className='rounded-md mb-4 md:mb-0 justify-self-center w-[300px] h-[300px] md:w-[400px] md:h-[400px] xl:w-[600px] xl:h-[600px]'
          width={500}
          height={500}
        />
        <div className='flex flex-col h-full items-center md:items-start text-center md:text-left mt-4 md:mt-0'>
          <h2 className='text-4xl lg:text-5xl font-extrabold mb-3 lg:mb-12'>
            About Me
          </h2>
          <p className='text-base lg:text-lg xl:text-xl 2xl:text-2xl'>
            I am Bao Tran and I am from Prince Edward Island, Canada. I am
            currently studying Mathematics at the Universtiy of Waterloo, and I
            want to focus on Actuarial Science. I have a great passion for
            Website Development and looking forward to any opportunities!
          </p>
          <div className='flex flex-row mt-5 lg:mt-8'>
            {aboutComponets.map((component, index) => (
              <TabButton
                key={index}
                active={tab === component.tab}
                selectTab={() => handleTabChange(component.tab)}
              >
                {component.tabName}
              </TabButton>
            ))}
          </div>
          <ul className='mt-3 lg:mt-5 list-disc md:pl-2'>
            {aboutComponets
              .find(t => t.tab === tab)
              .list.split(', ')
              .map((e, index) => (
                <li
                  key={index}
                  className='text-base lg:text-lg xl:text-xl 2xl:text-2xl mb-1'
                >
                  {e}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
