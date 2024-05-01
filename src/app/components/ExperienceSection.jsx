'use client'
import React, { useTransition, useState } from 'react'
import CodeButton from './CodeButton'
import { StarIcon } from '@heroicons/react/16/solid'
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});

const languages = [
  {
    name: 'Python',
    img: '/images/codes/python.png',
    metric: [
      {
        title: 'LeetCode Problems',
        value: 40,
        postfix: '+'
      },
      {
        title: 'Hours',
        value: 1000,
        postfix: '+'
      },
      {
        title: 'Fluency',
        value: 8.2,
        postfix: ''
      }
    ]
  },
  {
    name: 'C++',
    img: '/images/codes/c++.png',
    metric: [
      {
        title: 'DMOJ, CodeForces Problems',
        value: 50,
        postfix: '+'
      },
      {
        title: 'Hours',
        value: 200,
        postfix: '+'
      },
      {
        title: 'Fluency',
        value: 7.5,
        postfix: ''
      }
    ]
  },
  {
    name: 'JS',
    img: '/images/codes/js.png',
    metric: [
      {
        title: 'Projects',
        value: 10,
        postfix: '+'
      },
      {
        title: 'Hours',
        value: 100,
        postfix: '+'
      },
      {
        title: 'Fluency',
        value: 6.5,
        postfix: ''
      }
    ]
  }
]
const ExperienceSection = () => {
  const [code, setCode] = useState('Python')
  const [isPending, startTransition] = useTransition()
  const [disableButton, setDisableButton] = useState(false)

  const handleCodeChange = id => {
    startTransition(() => {
      setCode(id)
    })
  }
  return (
    <div className='text-white flex flex-col items-center mt-6 lg:mt-10 mb-40'>
      <div className='text-3xl sm:text-4xl lg:text-5xl 3xl:text-6xl font-extrabold'>
        Experience
      </div>
      <div className='sm:border-[#33353F] sm:border rounded-md py-6 lg:py-8 my-8 grid grid-cols-1 sm:grid-cols-3 sm:w-full items-center justify-between transition duration-700 ease-in-out'>
        {languages
          .find(t => t.name === code)
          .metric.map((achievement, index) => {
            return (
              <div
                key={index}
                className='flex flex-col items-center justify-center my-4 sm:my-4'
              >
                <h2 className='text-white text-3xl sm:text-4xl lg:text-5xl 3xl:text-6xl font-bold flex flex-row'>
                  {!isPending && (
                    <AnimatedNumbers
                      includeComma
                      animateToNumber={achievement.value}
                      locale='en-US'
                      className='text-white font-bold'
                      transitions={index => ({
                        type: 'spring',
                        duration: index + 0.3
                      })}
                    />
                  )}

                  {achievement.title === 'Fluency' ? (
                    <StarIcon
                      className='w-10 h-10 ml-1'
                      width={100}
                      height={100}
                    />
                  ) : (
                    achievement.postfix
                  )}
                </h2>
                <div className='text-base text-[#ADB7BE] text-center'>
                  {achievement.title}
                </div>
              </div>
            )
          })}
      </div>
      <div className='flex flex-row gap-10 md:gap-16 lg:gap-30'>
        {languages.map((language, index) => (
          <CodeButton
            key={index}
            name={language.name}
            img={language.img}
            active={code === language.name}
            selectCode={() => handleCodeChange(language.name)}
          />
        ))}
      </div>
    </div>
  )
}

export default ExperienceSection
