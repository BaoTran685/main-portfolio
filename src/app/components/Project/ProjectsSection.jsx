'use client'
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

import ProjectsCard from './ProjectsCard'
import SubHeader from '../SubHeader'

const projectsList = [
  {
    id: 1,
    title: 'React Portfolio',
    description: 'My Personal Website',
    image: '/images/projects/Password_Encrypter_Home.jpg',
    preview: '/',
    git: 'https://github.com/BaoTran685/portfolio'
  },
  {
    id: 2,
    title: 'Password Encrypter',
    description: 'Encryption/Decryption for Text',
    image: '/images/projects/passwordE.png',
    preview: 'https://passwordencrypter.com/',
    git: '/https://github.com/BaoTran685/password-encrypter'
  }
]
const ProjectsSession = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 50, opacity: 1 }
  }
  // py-6 sm:py-4 lg:py-6 sm:my-8 lg:my-20
  return (
    <section className='mt-10 xl:mt-12' id='project'>
      <div className='flex flex-col'>
      <div className='flex flex-col h-full items-center md:items-start text-center md:text-left w-full bg-[#e7e7e76b] rounded-xl shadow-lg mb-5 md:mb-6 px-8 md:px-10 lg:px-14 xl:px-18 py-8'>
          <SubHeader> My Projects </SubHeader>
        </div>
      </div>
      <ul ref={ref} className='grid md:grid-cols-2 gap-8 md:gap-12'>
        {projectsList.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial='inital'
            animate={isInView ? 'animate' : 'initial'}
            transition={{ duration: 0.5, delay: index * 0.6 }}
          >
            <ProjectsCard
              key={project.id}
              imgUrl={project.image}
              title={project.title}
              description={project.description}
              previewUrl={project.preview}
              gitUrl={project.git}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  )
}

export default ProjectsSession
