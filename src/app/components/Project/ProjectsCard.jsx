import React from 'react'
import {
  CodeBracketIcon,
  ArrowTopRightOnSquareIcon
} from '@heroicons/react/16/solid'
import Link from 'next/link'

const ProjectsCard = ({ imgUrl, title, description, gitUrl, webUrl }) => {
  return (
    <div>
      <div className='bg-[#bebdbd6b] rounded-xl shadow-xl relative group pt-3 px-3'>
        <div
          className='h-52 md:h-72 rounded-t-2xl'
          style={{ background: `url(${imgUrl})`, backgroundSize: 'cover' }}
        >
          <div className='overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#ceebf3] rounded-t-xl bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-90'>
            <Link
              href={gitUrl}
              rel='noopener noreferrer'
              target='_blank'
              className='h-14 w-14 relative border-2 border-[#636b70] rounded-xl hover:border-white transition-colors ease-in group/link'
            >
              <CodeBracketIcon className='h-10 w-10 absolute text-[#636b70] group-hover/link:text-white transition-colors ease-in div--center cursor-pointer' />
            </Link>
            <Link
              href={webUrl}
              rel='noopener noreferrer'
              target='_blank'
              className='h-14 w-14 relative border-2 border-[#636b70] rounded-xl hover:border-white transition-colors ease-in group/link ml-2'
            >
              <ArrowTopRightOnSquareIcon className='h-10 w-10 absolute text-[#636b70] group-hover/link:text-white transition-colors ease-in div--center cursor-pointer' />
            </Link>
          </div>
        </div>
      </div>
      <div className='text-white rounded-b-xl bg-[#54b3d6] p-4'>
        <h5 className='text-xl font-semibold'>{title}</h5>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default ProjectsCard

// <div className='flex flex-col w-full bg-[#e7e7e76b] border-l-8 border-[#db2777] rounded-xl shadow-lg px-8 md:px-10 lg:px-14 xl:px-18 py-8'>
//       <div className='text--content'>{title} </div>
//       <p className='text-[var(--grey-color-1)]'>{description}</p>
//       <ul className='flex flex-wrap mt-1'>
//         <li key={1} className='my-1 mr-3'>
//           <Link href={webUrl}>
//             <div className='flex items-center justify-center text-[white] bg-[#54b3d6] rounded-xl h-full hover--scale--transition--button px-2'>
//               {' '}
//               <ArrowTopRightOnSquareIcon className='w-7 h-7' />{' '}
//             </div>
//           </Link>
//         </li>
//         {appliation.map((app, index) => (
//           <li key={index + 1} className='my-1 mr-3'>
//             <div className='text-[white] bg-[#F27121] rounded-xl px-4 py-2'>
//               {app}
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
