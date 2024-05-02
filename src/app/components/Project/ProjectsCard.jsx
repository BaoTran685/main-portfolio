import React from 'react'
import {
  CodeBracketIcon,
  EyeIcon,
  ArrowTopRightOnSquareIcon
} from '@heroicons/react/16/solid'
import Link from 'next/link'

const ProjectsCard = ({ imgUrl, title, description, previewUrl, gitUrl }) => {
  return (
    <Link href={previewUrl}>
      <div
        className='h-52 md:h-72 rounded-t-xl relative group'
        style={{ background: `url(${imgUrl})`, backgroundSize: 'cover'}}
      >
      </div>
      <div className='text-white rounded-b-xl bg-[#45474B] py-4 px-4'>
        <h5 className='text-xl font-semibold mb-2'>{title}</h5>
        <p className='text-[var(--grey-color)]'>{description}</p>
      </div>
    </Link>
  )
}

export default ProjectsCard;

{
  /* <div className='overlay items-center justify-center absolute top-0 left-0 w-full h-full gap-4 bg-[#e7e7e76b] rounded-t-3xl bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500'>
          <Link
            href={gitUrl}
            className='h-14 w-14 relative border-2 border-[var(--grey-color)] rounded-xl hover:border-white transition-colors duration-500 group/link'
          >
            <CodeBracketIcon className='h-10 w-10 absolute text-[var(--grey-color)] group-hover/link:text-white transition-colors duration-500 div--center cursor-pointer' />
          </Link>
          <Link
            href={previewUrl}
            className='h-14 w-14 relative border-2 border-[var(--grey-color)] rounded-xl hover:border-white transition-colors duration-500 group/link'
          >
            <ArrowTopRightOnSquareIcon className='h-10 w-10 absolute text-[var(--grey-color)] group-hover/link:text-white transition-colors duration-500 div--center cursor-pointer' />
          </Link>
        </div> */
}
