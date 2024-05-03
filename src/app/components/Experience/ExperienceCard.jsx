import LinkWrapper from "../LinkWrapper"

const ExperienceCard = ({ title, at, link, start, end }) => {
  return (
    <div className='w-full bg-[var(--box-grey-color)] border-l-8 border-[var(--orange-color)] rounded-xl shadow-lg px-8 md:px-10 lg:px-14 xl:px-18 py-8'>
      <div className='text--content'>
        {title}{' '}
        <LinkWrapper
          webUrl={link}
          className='text-[var(--blue-color)] hover:underline'
        >
          @{at}
        </LinkWrapper>
      </div>
      <p className='text-[var(--grey-color)]'>
        {start} - {end}
      </p>
    </div>
  )
}

export default ExperienceCard
