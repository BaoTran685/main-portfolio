'use client'
import React, { useRef } from 'react'
import ProjectsCard from './ProjectsCard'
import { motion, useInView } from 'framer-motion'

const projectsList = [
  {
    id: 1,
    title: 'React Portfolio',
    description: 'My Personal Website',
    image: '/images/random.jpg',
    preview: '/'
  },
  {
    id: 2,
    title: 'Password Encrypter',
    description: 'Encryption/Decryption for Text',
    image: '/images/projects/passwordE.png',
    preview: 'https://passwordencrypter.com/'
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
    <section>
      <h2 className='text-white font-extrabold text-center text-4xl lg:text-5xl my-7 md:my-10'>
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
            />
          </motion.li>
        ))}
      </ul>
    </section>
  )
}

export default ProjectsSession
