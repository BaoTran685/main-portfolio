'use client'
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SubHeader from '../SubHeader'

import TabExperience from './TabExperience'
import CircleSection from '../CircleSection'

const experienceComponents = [
  {
    title: 'Volunteerer',
    at: 'Colonel Gray High School Library',
    link: '',
    start: 'September 2020',
    end: 'January 2021'
  },
  {
    title: 'Crew Member',
    at: "Wendy's",
    link: '',
    start: 'January 2023',
    end: 'May 2023'
  }
]
const Experience = () => {
  const ref = useRef(null)


  return (
    <section className='mt-10 xl:mt-12' id='experience'>
      <div className='flex flex-col'>
        <div className='flex flex-col h-full items-center md:items-start text-center md:text-left w-full bg-[#e7e7e76b] rounded-xl shadow-lg mb-5 md:mb-6 px-8 md:px-10 lg:px-14 xl:px-18 py-8'>
          <SubHeader> Experience </SubHeader>
        </div>
        <ul className='grid gap-5 md:gap-6'>
          {experienceComponents.map((component, index) => (
            <li
              key={index}
            >
              <TabExperience
                title={component.title}
                at={component.at}
                link={component.link}
                start={component.start}
                end={component.end}
              />
            </li>
          ))}
        </ul>
      </div>
      <CircleSection />
    </section>
  )
}

export default Experience
