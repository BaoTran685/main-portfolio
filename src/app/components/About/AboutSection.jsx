'use client'
import React, { useState, useLayoutEffect, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import SubHeader from '../SubHeader'
import CircleSection from '../CircleSection'
import TabContent from './TabContent'

// breakpoints:
// when screen >= md, the picture and about text are aligned horizontally
// when screen < md, the picture and about text are aligned vertically

const aboutComponents = [
  {
    tab: 'skill',
    tabName: 'Skills',
    list: [
      {
        title: 'NodeJS, NextJS, React, Tailwind Css',
        at: '',
        link: ''
      },
      {
        title: 'Prisma, MongoDB, MySQL, PostgreSQL',
        at: '',
        link: ''
      },
      {
        title: 'HTML, CSS, Javascript, Typescript',
        at: '',
        link: ''
      },
      {
        title: 'Python, C/C++, DrRacket',
        at: '',
        link: ''
      }
    ]
  },
  {
    tab: 'degree',
    tabName: 'Degrees',
    list: [
      {
        title: 'High School Diploma',
        at: 'Colonel Gray Senior High',
        link: ''
      },
      {
        title: 'Bachelor of Mathematics',
        at: 'University of Waterloo',
        link: ''
      },
      {
        title: 'Exam P',
        at: '',
        link: ''
      }
    ]
  },
  {
    tab: 'award',
    tabName: 'Awards',
    list: [
      {
        title: 'Euclid Contest Certificate of Distinction',
        at: '',
        link: ''
      },
      {
        title:
          'Canadian Computing Competition (Senior) Certificate of Distinction',
        at: '',
        link: ''
      },
      {
        title: 'Fermat Contest Certificate of Distinction',
        at: '',
        link: ''
      }
    ]
  }
]

const AboutSection = () => {
  // for changing tabs
  const [curTab, setCurTab] = useState('skill')
  const handleTabChange = newTab => {
    setCurTab(newTab)
    handleDimensionChange()
  }
  // for handling the height of the box when changing tab
  const targetRef = useRef()
  const [minHeight, setMinHeight] = useState(0)
  let movementTimer = null
  const TIME = 100
  const handleDimensionChange = () => {
    if (targetRef.current) {
      const curHeight = targetRef.current.offsetHeight
      if (curHeight > minHeight) {
        setMinHeight(curHeight)
      }
    }
  }
  const handleDelayChange = () => {
    setMinHeight(0)
    clearInterval(movementTimer)
    movementTimer = setTimeout(handleDimensionChange, TIME)
  }
  useLayoutEffect(() => {
    handleDelayChange()
  }, [])
  useEffect(() => {
    window.addEventListener('resize', handleDelayChange)
    return () => window.removeEventListener('resize', handleDelayChange)
  })

  return (
    <section className='' id='about'>
      <div className='flex flex-col space-y-5 md:space-y-6'>
        <div className='flex justify-center w-full h-full bg-[var(--box-grey-color)] shadow-lg rounded-3xl p-8 md:p-10 lg:p-14 xl:p-18'>
          <div className='flex flex-col h-full items-center md:items-start text-center md:text-left'>
            <SubHeader>Quoc Bao Tran </SubHeader>
            <p className='text-[var(--grey-color)] text--content leading-relaxed mt-2 lg:mt-4'>
              I am Bao and I am from Prince Edward Island, Canada. I am
              currently studying <span className='font-bold'>Mathematics</span>{' '}
              at the University of Waterloo, and I want to focus on{' '}
              <span className='font-bold'>Data Science.</span> I have a great
              passion for <span className='font-bold'>Web Development</span> and
              am looking forward to any opportunities!
            </p>
          </div>
        </div>
        <div className='flex flex-col md:grid md:grid-cols-12 gap-5 md:gap-6'>
          <div className='col-span-6 block w-full h-fit bg-[var(--box-grey-color)] shadow-lg rounded-3xl p-8 md:p-10 lg:p-14 xl:p-18'>
            <div
              ref={targetRef}
              style={{minHeight: minHeight}}
              className='flex flex-col items-center justify-start text-center'
            >
              <div className='flex flex-row justify-center w-fit h-fit bg-[white] rounded-full'>
                {aboutComponents.map((component, index) => (
                  <TabContent
                    key={index}
                    active={curTab === component.tab}
                    selectTab={() => handleTabChange(component.tab)}
                  >
                    {component.tabName}
                  </TabContent>
                ))}
              </div>
              {aboutComponents.map((component, index) => (
                <ul
                  key={index}
                  className={`list-disc mt-5 ${
                    component.tab === curTab ? '' : 'hidden'
                  }`}
                >
                  {component.list.map(
                    (content, content_index) =>
                      content.title && (
                        <li
                          key={content_index}
                          className='text-[var(--grey-color)] text--content leading-relaxed mb-2'
                        >
                          {content.title}{' '}
                          {content.at && (
                            <Link
                              href={content.link}
                              className='text-[var(--blue-color)] hover:underline'
                            >
                              @{content.at}
                            </Link>
                          )}
                        </li>
                      )
                  )}
                </ul>
              ))}
            </div>
          </div>
          <div className='col-span-6 flex flex-col items-center justify-center w-full h-auto bg-[var(--box-grey-color)] rounded-3xl shadow-xl p-4'>
            <Image
              src='/images/new-signature.png'
              alt='signature'
              className='w-fit h-fit'
              width={350}
              height={300}
            />
          </div>
        </div>
      </div>
      <CircleSection circleNumber={5} />
    </section>
  )
}

export default AboutSection

