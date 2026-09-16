'use client'
import React, { useState, useLayoutEffect, useRef, useEffect } from 'react'
import Image from 'next/image'

import SubHeader from '../SubHeader'
import CircleSeperator from '../CircleSeperator'
import TabContent from './TabContent'
import LinkWrapper from '../LinkWrapper'

// breakpoints:
// when screen >= md, the picture and about text are aligned horizontally
// when screen < md, the picture and about text are aligned vertically

const aboutComponents = [
  {
    tab: 'skill',
    tabName: 'Skills',
    list: [
      {
        title: 'C++, C, Python, Typescript, JavaScript, SQL',
        at: '',
        link: ''
      },
      {
        title: 'Next.js, MySQL, SQL Server, Snowflake, Supabase, MongoDB',
        at: '',
        link: ''
      },
      {
        title: 'Linux, POSIX Sockets, REST APIs, AWS, Azure',
        at: '',
        link: ''
      },
      {
        title: 'Git, GitHub, Bash, SSH, Make, Valgrind',
        at: '',
        link: ''
      }
    ]
  },
  // {
  //   tab: 'degree',
  //   tabName: 'Degrees',
  //   list: [
  //     {
  //       title: 'High School Diploma',
  //       at: 'Colonel Gray Senior High',
  //       link: 'https://colonelgray.edu.pe.ca/'
  //     },
  //     {
  //       title: 'Bachelor of Computer Science',
  //       at: 'University of Waterloo',
  //       link: 'https://uwaterloo.ca/'
  //     }
  //   ]
  // },
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
          'CSMC Certificate of Distinction',
        at: '',
        link: ''
      },
      {
        title: 'Fermat/Cayley Contest Certificate of Distinction',
        at: '',
        link: ''
      },
      {
        title: 'CCC Certificate of Distinction',
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
    <section className='' id='About'>
      <div className='flex flex-col space-y-5 md:space-y-6'>
        <div className='flex justify-center w-full h-full bg-[var(--box-grey-color)] shadow-lg rounded-3xl p-8 md:p-10 lg:p-14 xl:p-18'>
          <div className='flex flex-col h-full items-center md:items-start text-center md:text-left'>
            <SubHeader>Bao Tran </SubHeader>
            <p className='text-[var(--grey-color)] text--content leading-relaxed mt-2 lg:mt-4'>
              I&apos;m currently pursuing a Bachelor of Computer Science at the University of Waterloo, with a strong interest in software development and engineering.
              I&apos;m particularly drawn to backend and systems programming, where I enjoy exploring topics such as multithreading, concurrency, computer networking, and performance.
              I like building projects that help me understand how software works under the hood and designing systems that are efficient, reliable, and scalable.

            </p>
          </div>
        </div>
        <div className='flex flex-col md:grid md:grid-cols-2 gap-5 md:gap-6'>
          <div className='block w-full h-fit bg-[var(--box-grey-color)] shadow-lg rounded-3xl p-8 md:p-10 lg:p-14 xl:p-18'>
            <div
              ref={targetRef}
              style={{ minHeight: minHeight }}
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
                            <LinkWrapper
                              webUrl={content.link}
                              className='text-[var(--blue-color)] hover:underline'
                            >
                              @{content.at}
                            </LinkWrapper>
                          )}
                        </li>
                      )
                  )}
                </ul>
              ))}
            </div>
          </div>
          <div className='flex flex-col items-center justify-center w-full h-auto bg-[var(--box-grey-color)] rounded-3xl shadow-xl p-4'>
            <Image
              src='/images/waterloo.png'
              alt='signature'
              className='w-fit h-fit'
              width={350}
              height={300}
            />
          </div>
        </div>
      </div>
      <CircleSeperator />
    </section>
  )
}

export default AboutSection
