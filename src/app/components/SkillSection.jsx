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
        postfix: '+',
        prefix: ''
      },
      {
        title: 'Hours',
        value: 1000,
        postfix: '+',
        prefix: ''
      },
      {
        title: 'Years',
        value: 4.3,
        postfix: '',
        prefix: '~'
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
        postfix: '+',
        prefix: ''
      },
      {
        title: 'Hours',
        value: 200,
        postfix: '+',
        prefix: ''
      },
      {
        title: 'Years',
        value: 3.10,
        postfix: '',
        prefix: '~'
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
        postfix: '+',
        prefix: ''
      },
      {
        title: 'Hours',
        value: 100,
        postfix: '+',
        prefix: ''
      },
      {
        title: 'Year',
        value: 1.2,
        postfix: '',
        prefix: '~'
      }
    ]
  }
]
const ExperienceSection = () => {
  const [code, setCode] = useState('Python')
  const [isPending, startTransition] = useTransition()

  const handleCodeChange = id => {
    startTransition(() => {
      setCode(id)
    })
  }
  return (
    <div className='text-white flex flex-col items-center sm:mt-10 mb-40'>
      <div className='sm:bg-[var(--nav--dark-color)] sm:box--shadow rounded-md py-6 sm:py-4 lg:py-6 sm:my-8 lg:my-20 grid grid-cols-1 sm:grid-cols-3 sm:w-full items-center justify-between'>
        {languages
          .find(t => t.name === code)
          .metric.map((achievement, index) => {
            return (
              <div
                key={index}
                className='flex flex-col items-center justify-center my-4 sm:my-4'
              >
                <h2 className='text--number font-bold flex flex-row'>
                  {achievement.prefix}
                  {!isPending && (
                    <AnimatedNumbers
                      includeComma
                      animateToNumber={achievement.value}
                      locale='en-US'
                      className='text-white font-bold mx-1'
                      transitions={index => ({
                        type: 'spring',
                        duration: index + 0.3
                      })}
                    />
                  )}
                  {achievement.title === 'Fluency' ? (
                    <StarIcon
                      className='w-10 h-10'
                      width={100}
                      height={100}
                    />
                  ) : (
                    achievement.postfix
                  )}
                </h2>
                <div className='text-base text-[var(--grey-color)] text-center'>
                  {achievement.title}
                </div>
              </div>
            )
          })}
      </div>
      <div className='flex flex-row gap-10 lg:gap-30'>
        {languages.map((language, index) => (
          <CodeButton
            key={index}
            name={language.name}
            img={language.img}
            active={language.name === code}
            selectCode={() => handleCodeChange(language.name)}
          />
        ))}
      </div>
      <div className='mt-5 flex flex-row gap-2'>
        {languages.map((language, index) => (
          <span key={index} className={`block rounded-full ${language.name === code ? "bg-white":"bg-slate-400" } w-3 h-3 transition-all duration-300 ease-in-out`} />
        ))}

      </div>
    </div>
  )
}

export default ExperienceSection
