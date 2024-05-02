'use client'
import React, { useState, useLayoutEffect, useRef } from 'react'
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
    tab: 'language',
    tabName: 'Languages',
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
    tab: 'education',
    tabName: 'Education',
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
  }

  // {
  //   tab: 'certification',
  //   tabName: 'Certification',
  //   list: [
  //     {
  //       title: 'Euclid Contest Certificate of Distinction',
  //       at: '',
  //       link: ''
  //     },
  //     {
  //       title:
  //         'Canadian Computing Competition (Senior) Certificate of Distinction',
  //       at: '',
  //       link: ''
  //     },
  //     {
  //       title: 'Fermat Contest Certificate of Distinction',
  //       at: '',
  //       link: ''
  //     }
  //   ]
  // }
]

const AboutSection = () => {
  const [curTab, setCurTab] = useState('language')

  const handleTabChange = newTab => {
    setCurTab(newTab)
  }

  return (
    <section className='' id='about'>
      <div className='flex flex-col space-y-5 md:space-y-6'>
        <div className='flex justify-center w-full h-full bg-[#e7e7e76b] shadow-lg rounded-3xl p-8 md:p-10 lg:p-14 xl:p-18'>
          <div className='flex flex-col h-full items-center md:items-start text-center md:text-left'>
            <SubHeader>Quoc Bao Tran </SubHeader>
            <p className='text-[var(--grey-color-1)] text--content leading-relaxed mt-2 lg:mt-4'>
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
          <div className='col-span-6 block w-full h-fit bg-[#e7e7e76b] shadow-lg rounded-3xl p-8 md:p-10 lg:p-14 xl:p-18'>
            <div className='flex flex-col items-center justify-center text-center'>
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
                  className={`list-disc mt-3 lg:mt-6 ${
                    component.tab === curTab ? 'fade' : 'hidden'
                  }`}
                >
                  {component.list.map(
                    (content, content_index) =>
                      content.title && (
                        <li
                          key={content_index}
                          className='text-[var(--grey-color-1)] text--content leading-relaxed mb-2'
                        >
                          {content.title}{' '}
                          {content.at && (
                            <Link
                              href={content.link}
                              className='text-[#54b3d6] hover:underline'
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
          <div className='col-span-6 flex flex-col items-center justify-center w-full h-full bg-[#e7e7e76b] rounded-3xl shadow-xl p-4'>
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

// <div className='flex flex-col items-center justify-center bg-[#e7e7e76b] shadow-xl md:shadow-lg rounded-3xl w-full h-full p-4'>
//           <Image
//             src='/images/baotran.jpg'
//             alt='hero image'
//             className='rounded-xl w-fit h-fit'
//             width={300}
//             height={300}
//           ></Image>
//         </div>

// const aboutContainer = useRef(null)
//   const [aboutHeight, setAboutHeight] = useState(0)
//   const [aboutWidth, setAboutWidth] = useState(0)
//   useLayoutEffect(() => {
//     const resizeObserver = new ResizeObserver(() => {
//       setAboutHeight(aboutContainer.current.offsetHeight)
//       setAboutWidth(aboutContainer.current.offsetWidth)
//       console.log(aboutHeight)
//     })

//     if (aboutContainer.current) {
//       resizeObserver.observe(aboutContainer.current)
//     }

//     return () => {
//       resizeObserver.disconnect()
//     }
//   }, [aboutContainer.current])

//   const dimensionBox = {
//     height: `${aboutHeight}px`,
//     width: `${aboutWidth}px`
//   }
//   const dimensionCard = {
//     height: `${(aboutHeight * 1) / 2}px`,
//     width: `${(aboutWidth * 3) / 3 - 100}px`
//   }
{
  /* <div className='flex flex-col items-center justify-center'>
            <div className='flex flex-col items-center justify-center w-fit h-fit bg-[#E94057] rounded-3xl p-10'>
              <div
                style={dimensionCard}
                className={`flex flex-col w-fit h-fit justify-between text-white bg-[#e7e7e76b] shadow-lg rounded-3xl px-4 pt-4 pb-2`}
              >
                <div className='text-lg lg:text-xl xl:text-2xl'>
                  University of Waterloo
                </div>
                <div className='text-xl lg:text-2xl xl:text-3xl block w-full text-center'>
                  Honours Mathematics
                </div>
                <div className=''>
                  <div className='text-base ml-2'>08/28</div>
                  <div className='text--content'>Data Science</div>
                </div>
              </div>
            </div>
          </div> */
}
// {aboutHeight ? (
//   <div className='grid grid-rows-2'>
// <div className='flex flex-row items-center justify-center'>
//   <div className='flex flex-col items-center justify-center w-fit h-fit bg-[#E94057] rounded-3xl p-10'>
//     <div
//       style={dimensionCard}
//       className={`flex flex-col w-fit h-fit relative text-white bg-[#e7e7e76b] shadow-lg rounded-3xl`}
//     >
//       <div className='text-2xl top-4 left-6 absolute'>
//         University of Waterloo
//       </div>
//       <div className='text-3xl block w-full text-center absolute top-24'>
//         Honours Mathematics
//       </div>
//       <div className='absolute bottom-4 left-6'>
//         <div className='text-sm ml-2 mb-1'>valid-thru</div>
//         <div className='text-md ml-2 mb-1'>08/28</div>
//         <div className='text--content'>Actuarial Science</div>
//       </div>
//     </div>
//   </div>
// </div>
//     <div
//       style={dimensionBox}
//       className='bg-[#e7e7e76b] shadow-lg rounded-3xl px-10 py-10'
//     >
//       <div className='flex flex-row bg-[#f9f8f8] w-fit shadow-lg rounded-full space-x-8 py-4 px-8'>
//         {aboutComponents.map((component, index) => (
//           <TabButton
//             key={index}
//             id={index}
//             active={tab === component.tab}
//             selectTab={() => handleTabChange(component.tab)}
//           >
//             {component.tabName}
//           </TabButton>
//         ))}
//       </div>
//       <ul className='list-disc mt-6 px-14 pb-8 transition-transform duration-500'>
//         {aboutComponents
//           .find(t => t.tab === tab)
//           .list.map(
//             (e, index) =>
//               e.title && (
//                 <li key={index} className='text--content mb-2'>
//                   {e.title}{' '}
//                   {e.at && (
//                     <Link href={e.link} className='text-[#54b3d6]'>
//                       {e.at}
//                     </Link>
//                   )}
//                 </li>
//               )
//           )}
//       </ul>
//     </div>
//   </div>
// ) : null}
