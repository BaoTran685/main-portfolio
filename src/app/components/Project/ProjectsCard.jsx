import React from 'react'
import {
  CodeBracketIcon,
  ArrowTopRightOnSquareIcon
} from '@heroicons/react/16/solid'

import LinkWrapper from '../LinkWrapper'

const ProjectsCard = ({ imgUrl, title, description, gitUrl, webUrl }) => {
  return (
    <div className='shadow-xl rounded-xl'>
      <div className='grey--background rounded-t-xl relative group pt-3 px-3'>
        <div
          className='h-52 md:h-72 rounded-t-2xl'
          style={{ background: `url(${imgUrl})`, backgroundSize: 'cover' }}
        >
          <div className='overlay items-center justify-center absolute top-0 left-0 w-full h-full slight--blue--background rounded-t-xl bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-90'>
            <LinkWrapper
              webUrl={gitUrl}
              className='h-14 w-14 relative border-2 grey--border rounded-xl hover:border-white transition-colors ease-in group/link'
            >
              <CodeBracketIcon className='h-10 w-10 absolute grey--text group-hover/link:text-white transition-colors ease-in div--center cursor-pointer' />
            </LinkWrapper>
            <LinkWrapper
              webUrl={webUrl}
              className='h-14 w-14 relative border-2 grey--border rounded-xl hover:border-white transition-colors ease-in group/link ml-2'
            >
              <ArrowTopRightOnSquareIcon className='h-10 w-10 absolute grey--text group-hover/link:text-white transition-colors ease-in div--center cursor-pointer' />
            </LinkWrapper>
          </div>
        </div>
      </div>
      <div className='text-white rounded-b-xl bg-[var(--light-blue-color)] p-4'>
        <h5 className='text-xl font-semibold'>{title}</h5>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default ProjectsCard
