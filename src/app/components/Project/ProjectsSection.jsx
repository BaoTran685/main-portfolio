'use client'
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

import ProjectsCard from './ProjectsCard'
import SubHeader from '../SubHeader'
import CircleSection from '../CircleSection'

const projectsList = [
  {
    imgUrl: '/images/projects/password_encrypter.png',
    title: 'Password Encrypter',
    description: 'Encrypt/Decrypt Passwords',
    gitUrl: 'https://github.com/BaoTran685/password-encrypter',
    webUrl: 'https://passwordencrypter.com/',
  },
  {
    imgUrl: '/images/projects/personal_portfolio.png',
    title: 'Personal Portfolio',
    description: 'My Personal Portfolio Website',
    gitUrl: 'https://github.com/BaoTran685/main-portfolio',
    webUrl: '',
  }
]
const ProjectsSession = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 50, opacity: 1 }
  }
  return (
    <section className='mt-10 xl:mt-12' id='project'>
      <div className='flex flex-col'>
        <div className='flex flex-col h-full items-center md:items-start text-center md:text-left w-full bg-[#e7e7e76b] rounded-xl shadow-lg mb-5 md:mb-6 px-8 md:px-10 lg:px-14 xl:px-18 py-8'>
          <SubHeader> My Projects </SubHeader>
        </div>
      </div>
      <ul ref={ref} className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6'>
        {projectsList.map((project, index) => (
          <li
            key={index}
            variants={cardVariants}
            initial='inital'
            animate={isInView ? 'animate' : 'initial'}
            transition={{ duration: 0.5, delay: index * 0.6 }}
          >
            <ProjectsCard
              imgUrl={project.imgUrl}
              title={project.title}
              description={project.description}
              gitUrl={project.gitUrl}
              webUrl={project.webUrl}
            />
          </li>
        ))}
      </ul>
      <CircleSection />
    </section>
  )
}

export default ProjectsSession
