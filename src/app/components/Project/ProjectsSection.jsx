'use client'
import React from 'react'

import ProjectsCard from './ProjectsCard'
import SubHeader from '../SubHeader'
import CircleSeperator from '../CircleSeperator'

const projectsList = [
  {
    imgUrl: '/images/projects/password_encrypter.png',
    title: 'Password Encrypter',
    description: 'Encrypt/Decrypt Passwords',
    gitUrl: 'https://github.com/BaoTran685/password-encrypter',
    webUrl: 'https://passwordencrypter.com/'
  },
  {
    imgUrl: '/images/projects/personal_portfolio.png',
    title: 'Personal Portfolio',
    description: 'My Personal Portfolio Website',
    gitUrl: 'https://github.com/BaoTran685/main-portfolio',
    webUrl: ''
  }
]
const ProjectsSession = () => {
  return (
    <section className='mt-10 xl:mt-12' id='Project'>
      <div className='flex flex-col'>
        <div className='flex flex-col h-full items-center md:items-start text-center md:text-left w-full bg-[var(--box-grey-color)] rounded-xl shadow-lg mb-5 md:mb-6 px-8 md:px-10 lg:px-14 xl:px-18 py-8'>
          <SubHeader> My Projects </SubHeader>
        </div>
      </div>
      <ul className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6'>
        {projectsList.map((project, index) => (
          <li key={index}>
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
      <CircleSeperator />
    </section>
  )
}

export default ProjectsSession
