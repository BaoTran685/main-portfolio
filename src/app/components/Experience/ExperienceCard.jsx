import Link from 'next/link'

const ExperienceCard = ({ title, at, link, start, end }) => {
  return (
    <div className='w-full bg-[#e7e7e76b] border-l-8 border-[#F27121] rounded-xl shadow-lg px-8 md:px-10 lg:px-14 xl:px-18 py-8'>
      <div className='text--content'>
        {title}{' '}
        <Link href={link} className='text-[#54b3d6] hover:underline'>
          @{at}
        </Link>
      </div>
      <p className='text-[var(--grey-color-1)]'>{start} - {end}</p>
    </div>
  )
}

export default ExperienceCard
