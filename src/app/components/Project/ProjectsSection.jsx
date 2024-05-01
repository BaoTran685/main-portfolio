'use client'
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

import ProjectsCard from './ProjectsCard'

const projectsList = [
  {
    id: 1,
    title: 'React Portfolio',
    description: 'My Personal Website',
    image: '/images/random.jpg',
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
  return (
    <section className='py-6 sm:py-4 lg:py-6 sm:my-8 lg:my-20'>
      <h2 className='text--header text-center my-7' id='project'>
        My Projects
      </h2>
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
